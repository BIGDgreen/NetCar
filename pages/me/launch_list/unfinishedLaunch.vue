<template>
	<view class="page">
		<view class="logined_page" v-if="logined">
			<view class="title">
				我发起的（进行中）
			</view>
			<view class="launchList_wrapper">
				<!-- 约单列表 start -->
				<view class="lists">
					<view class="singlelist" v-for="list in lists" :key="list.orderId">
						<navigator open-type="navigate" :url="'launchList_more?id='+list.orderId">
							<view class="list-title">
								<!-- 约单号 -->
								<view class="list-num">
								约单号：{{list.orderNum}}
								</view>
								<!-- 发起人 -->
								<view class="list-sponsor">
								发起人：{{list.nickName}}
								</view>
							</view>
								
							<view class="from-to">
								<view class="from">
									{{list.startingAddress}}
								</view>
								<view class="to">
								TO
								</view>
								<view class="from">
									{{list.endingAddress}}
								</view>
							</view>
								
							<view class="list-bottom">
								<view class="people-num">
									现有{{list.alreadyNumber}}人
								</view>
								<view class="launch-time">
									出发时间：{{list.departureTime}}
								</view>
							</view>
						</navigator>
					</view>
				</view>
				<!-- 约单列表 end -->
			</view>
		</view>
		
		<view v-else-if="!logined" class="nologin_page">
				还未登录，请先<text class="login_btn" @click="login()">登录/注册</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[],
				logined:false
			};
		},
		onLoad() {
			var me = this;
			var userinfo = me.getGlobalUser("userInfos");
			me.logined = userinfo.logined;
			uni.request({
				url: this.mainUrl+'user/user/getOrdersByCreatorUserId',
				method:"GET",
				data:{
					user_id:userinfo.userId
				},
				success: (res) => {
					console.log("res");
					if(res.data.status == "success"){
						var lists = res.data.data;
						console.log("lists");
						console.log(lists);
						for(var i=0;i<lists.length;i++){
							uni.request({
								url:this.mainUrl+'order/order/findOrderInfoById',
								method:"GET",
								data:{
									order_id:lists[i].orderId
								},
								success:(listres) => {
									console.log(listres);
									if(listres.data.data.status == 2||listres.data.data.status == 1){
										me.lists.push(listres.data.data);
									}
								}
							})
						}	
					}else{
						console.log("err:"+res.data.data.errMsg);
					}
				}
			});	
		},
		methods:{
			login(){
				uni.navigateTo({
					url:"../../me_login/me_login"
				})
			}
		}
	}
</script>

<style>
	.title{
		font-size: 26px;
		margin: 60upx 20upx 20upx 40upx;
		color: #6666FF;
	}
	.lists{
		display: flex;
		flex-direction: column;
		padding: 10upx 40upx;
	}
	
	.singlelist{
		display: flex;
		flex-direction: column;
		margin:20upx 3upx 3upx 10upx;
		border-top: solid 1px #23202D;
	}
	
	.list-title{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 12px;
		margin-bottom: 20upx;
		margin-top: 20upx;
	}
	
	.list-sponsor{
		justify-content: flex-end;
	}
	
	.from-to{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
	
	.to{
		font-weight: bold;
		font-size: 22px;
		margin-left: 20upx;
		margin-right: 20upx;
		color: #6666FF;
	}
	
	.list-bottom{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 12px;
		margin-top: 20upx;
	}
	
	.text-wrapper{
		margin: 380upx 80upx;
	}
	
	.login_btn{
		color: #007AFF;
	}
	
</style>
