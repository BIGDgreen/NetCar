<template>
	<view class="page">
		<view v-if="logined">
			<view class="title">
				列表
			</view>
			<view class="chat_list">
				<uni-list class="chat_list_item">
					<navigator url="chat_item/chat_item">
						<uni-list-item title="群聊"
						thumb="cloud://carpool-oxbbw.6361-carpool-oxbbw/static/face/groupFace.png" showArrow="false" :show-badge=show_badge :badgeText=badgeText badgeType="error" @click="clickItem()"></uni-list-item>
					</navigator>
				</uni-list>
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
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		data(){
			return{
				logined:false,
				//消息数字角标
				show_badge:true,
				badgeText:" "
			}
		},
		
		onShow() {
			var me = this;
			var userinfo = me.getGlobalUser("userInfos");
			if(userinfo != null){
				me.userinfo = userinfo;
				me.logined = userinfo.logined;
			}else{
				me.logined = false;
				me.userinfo = {};
			}
		},
		
		methods:{
			clickItem:function(){
				var me = this;
				me.show_badge = false;
			}
		},
		components: {
			uniList,
			uniListItem
		}
	}
</script>

<style>
	.title{
		font-size: 26px;
		margin: 40upx 20upx 20upx 40upx;
		color: #6666FF;
	}
</style>
