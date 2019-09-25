<template>
	<view class="page">
		<view class="title">请对该约单的发起人进行评分：</view>
		<view class="wrapper">
			<view class="rate">
				<uni-rate :value=value class="stars" active-color="#6666FF" size="34"></uni-rate>
			</view>
		</view>
		<button class="btn" @click="confirmRate()">确定</button>
	</view>
</template>

<script>
	import uniRate from "@/components/uni-rate/uni-rate.vue"
	
	export default {
		data() {
			return {
				value:0
			};
		},
		onLoad() {
			var me = this;
			var Join_rate = uni.getStorageSync("Join_rate");
			me.value = Join_rate;
		},
		methods:{
			confirmRate:function(){
				var me = this;
				var userinfo = me.getGlobalUser("userInfos");
				uni.request({
					url:this.mainUrl+'user/evaluate/markScore',
					data:{
						userId:userinfo.userId,
						score:me.value
					},
					method:"GET",
					success: (res) => {
						console.log("res:");
						console.log(res);
						uni.switchTab({
							url:"../me"
						})
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
	.page{
		display: flex;
		flex-direction: column;
	}
	
	.title{
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 320upx;
		font-size: 48upx;
	}
	
	.rate{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.wrapper{
		margin: 20upx;
	}
	
	.btn{
		margin-top: 40upx;
		border: 1px solid #6666FF;
		color: #6666FF;
		width: 400upx;
	}
</style>
