<template>
	<view class="page me_edit">
		<uni-list>
			<view class="notice_item" v-for="(notice,index) in notices" :key="index">
				<navigator :url="'noticeItem/noticeItem?messageId='+notice.id">
					<view v-if="notice.applyType==1">
						<uni-list-item :title="notice.userName+'请求加入您的约单'" 
						:note="'约单号为:'+notice.orderNum+'  申请时间:'+notice.applyTime" 
						showArrow="false" :show-badge=notice.show_notice_badge1 :badgeText=badgeText 
						badgeType="error" @click="clickNotice1(index)"></uni-list-item>
					</view>
				</navigator>
				
				<navigator url="noticeItem/noticeItem2">
					<view v-if="notice.applyType==2">
						<uni-list-item title="您申请加入的约单没有得到回应" 
						:note="'约单号为:'+notice.orderNum" showArrow="false" 
						:show-badge=notice.show_notice_badge2 :badgeText=badgeText 
						badgeType="error" @click="clickNotice2(index)"></uni-list-item>
					</view>	
				</navigator>
				
			</view>
			<!-- 欢迎消息 -->
			<uni-list-item title="欢迎来到carpool!" note="carpool简介" showArrow="false" :show-badge=show_badge :badgeText=badgeText badgeType="error" @click="clickWelcome()"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		data(){
			return{
				userInfo:{},
				// show_badge:true,
				badgeText:" ",
				notices:[]
			};
		},
		onShow() {
			var me = this;
			var globalUser = me.getGlobalUser("userInfos");
			this.userInfo = globalUser;
		},
		
		onLoad() {
			var me = this;
			var globalUser = this.getGlobalUser("userInfos");
			this.notice_num = me.notices.length+1;
			uni.request({
				url:this.mainUrl+"user/message/applyInfo",
				data:{
					user_id:globalUser.userId,
				},
				method:"GET",
				success: (res) => {
					if(res.data.status=="success"){
						console.log("res:");
						console.log(res);
						this.notices = res.data.data;
						this.globle_notices = res.data.data;
					}
					else if(res.data.status=="fail"){
						console.log(res.errmsg);
					}
				}
			});
		},
		
		methods:{
			clickWelcome:function(){
				this.show_badge = false;
				this.notice_num--;
				uni.navigateTo({
					url:"welcomeNotice/welcomeNotice"
				})
			},
			clickNotice1:function(index){
				this.notice_num--;
				this.globle_notices[index].show_notice_badge1=false;
			},
			clickNotice2:function(index){
				this.notice_num--;
				this.globle_notices[index].show_notice_badge2=false;
			}
		},
		
		components: 
		{
			uniList,
			uniListItem
		},
	}
</script>

<style>
	@import url("me_edit.css");
</style>
