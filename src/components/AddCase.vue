<template>
    <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/>
</template>
<script>
/* eslint-disable */
import axios from "../commons/axios";

export default {
    data: function() {
        return {}
    },
    methods: {
        update (e) {
            let file = e.target.files[0]
            // console.log(file)
            console.log(file.name)
            let param = new FormData() // 创建form对象
            param.append('image', file, file.name) // 通过append向form对象添加数据
            // withCredentials: true 使得后台可以接收表单数据  跨域请求
            axios({
                method: "post",
                url: "/case/student/new",
                headers: { "Content-Type": "multipart/form-data" },
                data: param,
            })
            .then(function(res){
                console.log(res)
            })
            .catch(function(err){
                console.log(err);
            })
        }
    }
}

</script>
<style>

</style>