<template>
	<view class="page">
		<view class="noticeItem-wrapper">
			<view class="noticeTitle">{{userName}}请求加入您的约单</view>
			<view class="noticeContent">该约单约单号为：{{orderNum}}</view>
			
			<view class="btns" v-if="!handled">
				<button class="btn agree" @click="agree()">同意</button>
				<button class="btn disagree" @click="disagree()">拒绝</button>
			</view>
			
			<view class="footer" v-if="handled">
				请求已处理！
			</view>
		</view>
	</view>
</template>

<script>
export default {
		data() {
			return {
				userName:"",
				orderNum:"",
				handled:false,
				messageId:''
			};
		},
	
		onLoad(params) {
			console.log(params);
			var me = this;
			var globalUser = this.getGlobalUser("userInfos");
			var messageId = params.messageId;
			me.messageId=messageId;
			uni.request({
				url:this.mainUrl+"user/message/messageInfo",
				data:{
					message_id:messageId,
				},
				method:"GET",
				success: (res) => {
					if(res.data.status=="success"){
						console.log(res);
						me.userName=res.data.data.userName;
						me.orderNum=res.data.data.orderNum;
						
						if(res.data.data.status==2){
							this.handled=true;
						}
					}else if(res.data.status=="fail"){
						console.log(res.errmsg);
					}
				}
			});
		},
		
		methods: {
			handle:function(judge){
				var globalUser = this.getGlobalUser("userInfos");
				console.log(this.messageId);
				uni.request({
					url:this.mainUrl+"user/message/handleMessage/"+judge,
					data:{
						message_id:this.messageId,
						user_id:globalUser.userId
					},
					method:"GET",
					success: (res) => {
						if(res.data.status=="success"){
							console.log(res);
							this.handled=true;
						}
					}
				});
			},
			
			agree:function(){
				this.handle('accept');
			},
			disagree:function(){
				this.handle('refuse');
			}
		},
		
		components: 
		{
			
		}
	}
	
</script>

<style>
	.noticeItem-wrapper{
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 14upx 10upx;
	}
	
	.noticeTitle{
		font-weight: bold;
		font-size: 48upx;
		margin: 12upx 8upx;
	}
	
	.noticeContent{
		margin-top: 14upx;
		margin-left: 12upx;
	}
	
	.btns{
		margin-top: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	
	.btn{
		border: 1px solid #6666FF;
		color: #6666FF;
		margin-top: 20upx;
		padding: 0 80upx;
	}
	
	.footer{
		margin: 40upx auto;
	}
</style>

