<template>
  <div id="payment">
      <h1>付款頁面</h1>
      <google-pay-button
        environment = "TEST"
        v-bind:button-type = "buttonType"
        v-bind:button-color = "buttonColor"
        v-bind:existing-payment-method-required = "existingPaymentMethodRequired"
        v-bind:paymentRequest.prop = "{
          apiVersion: paymentRequest.apiVersion,
          apiVersionMinor: paymentRequest.apiVersionMinor,
          allowedPaymentMethods: paymentRequest.allowedPaymentMethods,
          merchantInfo: paymentRequest.merchantInfo,
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: amount,
            currencyCode: 'USD',
            countryCode: 'US',
          },
          callbackIntents: ['PAYMENT_AUTHORIZATION']
        }"
        v-on:loadpaymentdata = "onLoadPaymentData"
        v-on:error = "onError"
        v-bind:onPaymentAuthorized.prop = "onPaymentDataAuthorized"
      ></google-pay-button>
      <br>
      <button class="button" @click="out()">回上一頁</button>
  </div>
</template>

<script async src="https://pay.google.com/gp/p/js/pay.js">
</script>

<script>
import '@google-pay/button-element';
import axios from '../commons/axios'
export default {
  name: 'Payment',
    props: {},
    data:  () => ({
      amount: '20.00',
      existingPaymentMethodRequired: true,
      buttonColor: 'default',
      buttonType: 'buy',
      paymentRequest: {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'example'
              }
            }
          }
        ],
        merchantInfo: {
          merchantName: 'Example Merchant',
          merchantId: '12345678901234567890'
        },
      },
    }),
  methods: {
    onLoadPaymentData: event => {
      console.log('load payment data', event.detail);
      // send to database
    },
    onError: event => {
      console.error('error', event.error);
    },
    onPaymentDataAuthorized: async  (paymentData) => {
      console.log('payment authorized', paymentData);
      let vm = this
      this.type = paymentData.paymentMethodData.type;
      this.cardDetails = paymentData.paymentMethodData.info.cardDetails;
      this.cardNetwork = paymentData.paymentMethodData.info.cardNetwork;
      this.token = paymentData.paymentMethodData.tokenizationData.token;
      this.tokenType = paymentData.paymentMethodData.tokenizationData.type;
      return new Promise(function(resolve, reject){
        // handle the response
        axios({
          method: 'post',
          url: '/payment',
          data: {
            type: vm.type,
            cardDetails: vm.cardDetails,
            cardNetwork: vm.cardNetwork,
            token: vm.token,
            tokenType: vm.tokenType
          }
        })
        .then(function() {
          resolve({transactionState: 'SUCCESS'});
        })
        .catch(function(err) {
          console.log(err)
          resolve({
            transactionState: 'ERROR',
            error: {
              intent: 'PAYMENT_AUTHORIZATION',
              message: 'something wrong in backend',
              // message: 'Insufficient funds',
              reason: 'PAYMENT_DATA_INVALID'
            }
          });
        });
      });
    },

    out () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped>
#payment {
  text-align: center;
}
.button {
  margin-top: 4em;
}
</style>
