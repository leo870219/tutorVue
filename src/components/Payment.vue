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
export default {
  name: 'Payment',
    props: {},
    data:  () => ({
      amount: '10.00',
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
    },
    onError: event => {
      console.error('error', event.error);
    },
    onPaymentDataAuthorized: paymentData => {
      console.log('payment authorized', paymentData);
      return {
        transactionState: 'SUCCESS',
      };
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
.td1 {
  text-align: left;
  color: brown;
}
.button {
  margin-top: 4em;
}
input[type="text"] {
  padding: 5px 15px;
  border: 2px sandybrown solid;
  cursor: pointer;
  /* -webkit-border-radius: 5px; */
  border-radius: 5px;
  color: brown;
}
</style>
