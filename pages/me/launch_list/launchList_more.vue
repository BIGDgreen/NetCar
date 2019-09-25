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
			 
			<view class="btns-wrapper" v-if="!finished">
				<button class="btn" @click=confirmFinished()>确认完成</button>
			</view>
			
			<view class="footer" v-else-if="finished">
				已确认完成约单！
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
				logined:false,
				userinfo:{},
				id:"",
				finished:false
			}
		},
		
		onShow() {
			var me = this;
			var userinfo = me.getGlobalUser("userInfos");
			console.log(userinfo);
			if(userinfo != null){
				me.userinfo = userinfo;
				me.logined = userinfo.logined;
				
			}else{
				me.logined = false;
				me.userinfo = {};
			}
		},
		
		onLoad(params) {
			this.rate =params.rate;
			var me = this;
			var id = params.id;
			this.id = id;
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
					// console.log(listinfo);
					if(this.listinfo.status == 3){
						this.finished = true;
					}
				}
			})
		},
		
		methods: {
			confirmFinished:function(){
				uni.request({
					url:this.mainUrl+"user/user/finishOrder",
					method:"GET",
					data:{
						order_id:this.id,
						user_id:this.userinfo.userId
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
	.more{
		display: flex;
		flex-direction: column;
		padding: 60upx 80upx;
	}
	
	.title{
		font-weight: bold;
	}
	
	.judge-title,.stars{
		margin-top: 100upx;
	}
	
	.list-num-wrapper,
	.sponsor-wrapper,
	.start-wraper,
	.end-wrapper,
	.start-time-wrapper,
	.time-rage-wrapper,
	.exist-member-wrapper,
	.note-wrapper,
	.judge-wrapper{
		display: flex;
		flex-direction: row;
		margin-bottom: 22upx;
	}
	
	.judge-num{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		font-size: 12px;
		color: #333;
	}
	
	.btns-wrapper{
		display: flex;
		flex-direction: column;
	}
	
	.btn{
		width: 300upx;
		margin: 40upx auto;
		margin-bottom: 0upx;
		font-weight: 500;
		color: #6666FF;
		border: 1px solid #6666FF;
	}
	
	.footer{
		margin: 20upx auto;
	}
</style>
