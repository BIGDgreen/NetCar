<template>
	<view>
		<view class="more" v-if="logined">
			<view class="list-num-wrapper">
				<view class="title">约单号：</view>
				<view class="list_num">{{listinfo.orderNum}}</view>
			</view>
			
			<view class="sponsor-wrapper">
				<view class="title">发起人：</view>
				<view class="sponsor">{{listinfo.nickName}}</view>
			</view>
			
			<view class="start-wraper">
				<view class="title">起点：</view>
				<view class="start">{{listinfo.startingAddress}}</view>
			</view>
			
			<view class="end-wrapper">
				<view class="title">终点：</view>
				<view class="end">{{listinfo.endingAddress}}</view>
			</view>
			
			<view class="start-time-wrapper">
				<view class="title">出发时间：</view>
				<view class="start-time">{{listinfo.departureTime}}</view>
			</view>
			 
			<view class="time-rage-wrapper">
				<view class="title">时间容错：</view>
				<view class="time-rage">{{listinfo.timeTolerance}}分钟</view>
			</view>
			
			<view class="exist-member-wrapper">
				<view class="title">已有成员：</view>
				<view class="exist-member">{{listinfo.alreadyNumber}}人</view>
			</view>
			
			<view class="exist-member-wrapper">
				<view class="title">人数限制：</view>
				<view class="exist-member">{{listinfo.maxNumber}}人</view>
			</view>
			
			<view class="note-wrapper">
				<view class="title">备注：</view>
				<view class="note">{{listinfo.note}}</view>
			</view>
			
			<view class="judge-wrapper">
				<view class="title judge-title">发起人评价：</view>
				<uni-rate :value="rate" class="stars" active-color="#6666FF" disabled="false"></uni-rate>
			</view>
			 
			<view class="judge-num">
				<view class="judge-num">{{listinfo.scoreNumber}}</view>人已评价
			</view>
			
			<view class="btns-wrapper">
				<button class="btn" @click=join()>申请加入</button>
			</view>
		</view>
		
		<view v-else-if="!logined" class="nologin_page">
			<view class="text-wrapper">
				还未登录，请先<text class="login_btn" @click="login()">登录/注册</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from "@/components/uni-rate/uni-rate.vue"

	export default {
		data() {
			return {
				listinfo: {},
				rate: 3.3,
				logined:false,
				userinfo:{}
			}
		},
		
		onShow() {
			var me = this;
			var userinfo = me.getGlobalUser("userInfos");
			if(userinfo != null){
				me.userinfo = userinfo;
				me.logined = userinfo.logined;
				
				//this.rate = this.listinfo.score/this.listinfo.scoreNumber;
				
			}else{
				me.logined = false;
				me.userinfo = {};
			}
		},
		
		onLoad(params) {
			console.log(params);
			this.rate =params.rate;
			var me = this;
			var id = params.id;
			// console.log("id:"+id);
			
			uni.request({
				url:this.mainUrl+'order/order/findOrderInfoById',
				method:"GET",
				data:{
					order_id:id
				},
				success:(res) => {
					console.log("---"+this.rate);
					var listinfo = res.data.data;
					this.listinfo = listinfo;
					// this.rate = listinfo.score/listinfo.scoreNumber;
					// console.log(this.rate);
					// this.app.$forceUpdate();
					// uni.request({
					// 	url:this.mainUrl+"user/evalute/getByOrderId",
					// 	data:{
					// 		order_id:id
					// 	}
					// })
				}
			})
		},
		
		methods: {
			join:function(){
				uni.request({
					url:this.mainUrl+"user/message/apply",
					data:{
						user_id:this.userinfo.userId,
						order_id:this.listinfo.orderId,
						desc:""
					},
					method:"GET",
					success: (res) => {
						console.log("res:");
						console.log(res);
						if(res.data.status=="success"){
							uni.showToast({
								title:"请求已发送"
							})
						}else{
							uni.showToast({
								mask:true,
								title:res.data.data.errMsg,
								image:"../../static/error.png"
							})
						}
					}
				})
			}
		},
		
		components: {
			uniRate
		}
	}
</script>

<style>
	@import url("more.css");
</style>
