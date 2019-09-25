<template>
	<view class="page me">
		<view class="header">
			<view class="me-info">
				<view class="avatar-wrapper" v-if="userLogined">
					<image class="avatar" :src=userInfo.avatarUrl @click="previewImg()"></image>
				</view>
				<view class="avatar-wrapper" v-else-if="!userLogined" @click="login()">
					<image class="avatar" src="cloud://carpool-oxbbw.6361-carpool-oxbbw-1259310434/static/face/Face.png"></image>
				</view>
				<view class="name-wrapper" v-if="userLogined">
					<view class="name">{{userInfo.nickName}}</view>
					<!-- 评分 -->
					<view class="stars">
						<uni-rate value="4.5" class="stars" active-color="#6666FF" disabled="true" size="18"></uni-rate>
					</view>
				</view>
				
				<view class="name-wrapper" v-if="!userLogined">
					<navigator url="../me_login/me_login">
						<view class="name">登录</view>
					</navigator>
				</view>
			</view>
			
			<view class="editBtn-wrapper" v-if="userLogined">
				<view v-if="!noticed">
					<image src="cloud://carpool-oxbbw.6361-carpool-oxbbw-1259310434/static/button/notice.png" class="edit-btn" @click="edit_me()"></image>
				</view>
				<view v-if="noticed">
					<image src="cloud://carpool-oxbbw.6361-carpool-oxbbw/static/button/noticed.png" class="edit-btn" @click="edit_me()"></image>
				</view>
			</view>
		</view>
		<view class="title" v-if="userLogined">
			约单
		</view>
		<view class="user_lists" v-if="userLogined">
			<view class="sort_title">
				<view class="list_title" :class="{active:!Active}" @click="Active=false">进行中</view>
				<view class="list_title" :class="{active:Active}" @click="Active=true">已完成</view>
			</view>
			<view class="list_item" v-if="!Active">
				<uni-list>
					<navigator url="launch_list/unfinishedLaunch">
						<uni-list-item title="我发起的"></uni-list-item>
					</navigator>
					<navigator url="join_list/unfinishedJoin">
						<uni-list-item title="我参与的"></uni-list-item>
					</navigator>
				</uni-list>
			</view>
			<view class="list_item" v-else-if="Active">
				<uni-list>
					<navigator url="launch_list/finishedLaunch">
						<uni-list-item title="我发起的"></uni-list-item>
					</navigator>
					<navigator url="join_list/finishedJoin">
						<uni-list-item title="我参与的"></uni-list-item>
					</navigator>
				</uni-list>
			</view>
		</view>
		
		<view class="edit-wrapper" v-if="userLogined">
			<view class="footer-btn">
				<button class="btn-item exit" @click="logout()">退出登录</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniRate from "@/components/uni-rate/uni-rate.vue"
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniCollapse from "@/components/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "@/components/uni-collapse-item/uni-collapse-item.vue"
	
	export default {
		data() {
			return {
				userLogined:false,
				userInfo:{},
				noticed:true,
				Active:false
			}
		},
		onShow() {
			var me = this;
			var userinfo = me.getGlobalUser("userInfos");
			if (userinfo != null) {
				me.userLogined = true;
				me.userInfo = userinfo;
				// console.log(me.userInfo);
			}else{
				me.userLogined = false;
				me.userInfo = {};
			};
			if(this.notice_num == 0){
				this.noticed = false;
			}
		},
		methods: {
			login(){
				uni.navigateTo({
					url:"../me_login/me_login"
				})
			}, 
			previewImg(){
				var me = this;
				var globalUser = me.getGlobalUser("userInfos");
				// console.log(globalUser);
				var faceArr = [];
				faceArr.push(globalUser.avatarUrl);
				uni.previewImage({
					urls:faceArr,
					current: faceArr[0]
				})
			},
			edit_me(){
				uni.navigateTo({
					url:"../me_notice/me_notice"
				})
			},
			logout(){
				var globalUser = this.getGlobalUser("userInfos");
				uni.removeStorageSync("userInfos");
				uni.switchTab({
					url:"../main/main"
				});
			},
		},
		components: {
			uniRate,
			uniList,
			uniListItem,
			uniCollapse,
			uniCollapseItem
		}
	}
</script>

<style>
	@import url("me.css");
	
</style>
