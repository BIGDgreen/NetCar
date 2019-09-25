<template>
	<view class="page">
		<!-- <form @submit="formsubmit"> -->
			<view class="me_login">
				<view class="avatar-wrapper">
					<image src="cloud://carpool-oxbbw.6361-carpool-oxbbw-1259310434/static/face/Face.png" class="avatar"></image>
				</view>
				<!-- <view class="input-wrapper">
					<view class="name-wrapper">
						<text class="name-title">用户名：</text>
						<input name="username" value="" type="text" class="name-input" placeholder="用户名">
					</view>
					<view class="password-wrapper">
						<text class="pwd-title" space="emsp">密 码：</text>
						<input name="password" value="" type="text" class="password-input" password="true" placeholder="密码"/>
					</view>
				</view> -->
				<view class="btn-wrapper">
					<!-- <view>
						<button class="login-btn" form-type="submit">登录</button>
					</view> -->
					
					<view class="othersWrapper">
						<button class="login-btn" open-type="getUserInfo" @getuserinfo="wxlogin">
							微信登录
						</button>
						<!-- <text class="register-btn">|</text>
						<navigator url="../me_register/me_register" class="register-btn">
							注册
						</navigator> -->
					</view>
				</view>
			</view>
		<!-- </form> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo:{}
			}
		},
		onShow() {
			var me = this;
			var userinfo = me.getGlobalUser("userInfos");
			me.userinfo = userinfo;
		},
		methods: {
			wxlogin:function(e){
				var me = this;
				var userInfo = e.detail.userInfo;
				console.log("e.detail.userInfo:");
				console.log(userInfo);
				
				uni.login({
					provider:"weixin",
					success: (res) => {
						console.log("res:");
						console.log(res);
						var code = res.code;
						uni.request({
							url:this.mainUrl+"user/user/wxLogin?code="+code,
							method:"POST",
							success: (loginRes) => {
								console.log("loginRes:");
								console.log(loginRes);
								// userInfo.logined = true;
								if(loginRes.data.status == "success"){
									var openid = loginRes.data.data.openid;
									if(openid != null){
										userInfo.openid = openid;
										userInfo.logined = true;
										
										console.log("userInfo:");
										console.log(userInfo);
										
										uni.request({
											url:this.mainUrl+"user/user/saveUserInfo",
											header:{'content-type':"application/x-www-form-urlencoded"},
											data:userInfo
												// nickName:userInfo.nickName,
												// gender:userInfo.gender,
												// city:userInfo.city,
												// faceImg:userInfo.avatarUrl,
												// province:userInfo.province,
												// country:userInfo.country
											,
											method:"POST",
											success: (res) => {
												console.log(res);
												userInfo.userId = res.data.data;
												uni.setStorageSync("userInfos",userInfo);
												uni.navigateBack({
													delta:1
												});
											}
										});
									}else{
										var userid = loginRes.data.data;
										userInfo.userId = userid;
										userInfo.logined = true;
										console.log(userInfo);
										uni.setStorageSync("userInfos",userInfo);
										uni.navigateBack({
											delta:1
										});
									}
								}
								else if(loginRes.data.status=="fail"){
									console.log(res.errmsg);
								}
							}
						})
						
					}
				})
			},
			// formsubmit:function(e){
			// 	var me=this;
			// 	var username = e.detail.value.username;
			// 	var password = e.detail.value.password;
			// 	
			// 	uni.request({
			// 		url:"http://jsonplaceholder.typicode.com/users",
			// 		data:{
			// 			userid:1,
			// 			nickName:username,
			// 			password:password,
			// 			avatarUrl:"cloud://carpool-oxbbw.6361-carpool-oxbbw-1259310434/static/face/Face.png",
			// 			logined:false
			// 		},
			// 		method:"POST",
			// 		success: (res) => {
			// 			//if(res.data.status == 200){
			// 				var userInfo = res.data;
			// 				userInfo.logined = true;
			// 			//}
			// 			uni.setStorageSync("userInfos",userInfo);
			// 			console.log(userInfo);
			// 			uni.navigateBack({
			// 				delta:1
			// 			});
			// 		}
			// 	})
			// },
		},
		components: {
			
		}
	}
</script>

<style>
	@import url("me_login.css");
</style>
