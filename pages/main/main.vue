<template>
	<view class="page main">
		<!-- 搜索栏 start -->
		<view class="search-content">
			<!-- 下拉搜索框  start-->		
			<view class="searchType_wrapper">
				<view class="searchHeader" @click="clickHeader()">
					{{search_title}}
					<view class="pull_btn_wrapper">
						<image src="cloud://carpool-oxbbw.6361-carpool-oxbbw-1259310434/static/button/select-before.png" v-if="!clicked" class="pull_btn" ></image>
					</view>
				</view>
			</view>
			<!-- 下拉搜索框  end-->
			<view class="searchInput">			
				<input class="search-input" name="input" adjust-position="false" v-model="search"
				confirm-type="search"/>
			</view>
		</view>
		<!-- 搜索栏 end -->
		
		<!-- 约单列表 start -->
		<view class="lists">
			<view class="singlelist" v-for="list in lists" :key="list.orderId">
			<!-- <view class="singlelist" v-for="list in filterlists" :key="list.id"> -->
				<navigator open-type="navigate" :url="'../more/more?id='+list.orderId+'&rate='+list.avgScore">
						<view class="list-title">
							<!-- 约单号 -->
							<view class="list-num">
							约单号：{{list.orderNum}}
							</view>
							<!-- 发起人 -->
							<view class="list-sponsor">
							发起人：{{list.userName}}
							</view>
						</view>
							
						<view class="from-to">
							<view class="from">
								{{list.startingName}}
							</view>
							<view class="to">
							TO
							</view>
							<view class="from">
								{{list.endingName}}
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
						<view class="footer">
							<view class="list_state">{{list_state}}</view>
							<view class="car-wrapper">
								<image class="car" src="cloud://carpool-oxbbw.6361-carpool-oxbbw-1259310434/static/background/car.png"></image>
							</view>
						</view>
				</navigator>
			</view>
		</view>
		<!-- 约单列表 end -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[],
				search_title:"约单号",
				clicked:false,
				search:"",
				list_state:""
			};
		},
		onPullDownRefresh(){
			this.refresh();
		},
		onLoad() {
			var me = this;
			me.refresh();
		},
		methods: {
			refresh:function(){
				var me = this;
				uni.showLoading({
					title:"加载中，请稍候"
				})
				uni.request({
					url:this.mainUrl+'order/order/index',
					method:"GET",
					success: (res) => {
						if(res.data.status == "success"){
							var lists = res.data.data;
							me.lists = lists;
							console.log(me.lists);
							for(var i=0;i<me.lists.length;i++){
								if(me.lists[i].status==1){
									me.list_state='进行中'
								}
								if(me.lists[i].status==2){
									me.list_state='人已满'
								}
								if(me.lists[i].status==3){
									me.list_state='已结束'
								}
							}
						}else if(res.data.status=="fail"){
						console.log(res.data.errMsg);
					}
					},
					complete: () => {
						uni.hideLoading();
						uni.stopPullDownRefresh();
					}
				});
			},
			clickHeader:function(){
				var me = this;
				me.clicked=!me.clicked;
				uni.showActionSheet({
					itemList:["约单号","出发时间","发起人","目的地"],
					success: (res) => {
						var itemList = ["约单号","出发时间","发起人","目的地"];
						me.search_title = itemList[res.tapIndex];
						me.clicked=!me.clicked;
					}
				})
			},
		},
		
		computed:{
		},
		
		components: 
		{
			
		}
	}
	
</script>

<style>
	@import url("main.css");
</style>
