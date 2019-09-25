<template>
	<view class="page me_register">
		<form @submit="formsubmit">
			<view class="input-wrapper">
				<view class="name-wrapper">
					<text class="name-title" space="ensp">用 户 名：</text>
					<input name="username" value="" type="text" class="name-input" placeholder="请输入用户名">
				</view>
				<view class="password-wrapper">
					<text class="pwd-title" space="emsp">密  码：</text>
					<input name="password" value="" type="text" class="password-input" password="true" placeholder="请输入密码"/>
				</view>
				<view class="password-wrapper">
					<text class="pwd-title" space="emsp">确认密码：</text>
					<view class="password_again">
						<input name="password_confirm" value="" type="text" class="password-input" password="true" placeholder="再次输入密码"/>
						<view v-if="!pwd_same" class="warnning">
							两次密码输入不一致！
						</view>
					</view>
				</view>
			</view>
			<view class="btn-wrapper">
				<view>
					<button class="login-btn" form-type="submit">注册</button>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				pwd_same:true,
				password_confirm:""
			}
		},
		onShow() {

		},
		methods: {
			formsubmit:function(e){
				var me = this;
				var username = e.detail.value.username;
				var password = e.detail.value.password;
				me.password_confirm = e.detail.value.password_confirm;	
				
				uni.request({
					url:"http://jsonplaceholder.typicode.com/users",
					data:{
						"username":username,
						"password":password
					},
					header:{
						
					},
					method:"POST",
					success: (res) => {
						if(res.data.status=="success"){
							var userInfo = res.data;
							uni.setStorageSync("userInfos",userInfo);
							console.log(userInfo);
							if(password == me.password_confirm){
								me.pwd_same = true;
								uni.navigateTo({
									url:"../me_login/me_login"
								});
							}else{
								me.pwd_same = false;
							}
						}else if(res.data.status=="fail"){
							console.log(res.errmsg);
						}
						
					}
				})
			},
		},
		components: {
		}
	}
</script>

<style>
	@import url("me_register.css");
</style>
