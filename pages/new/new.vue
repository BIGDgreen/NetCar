<template>
	<view class="page">
<!-- 			<view class="new"> -->
			<view class="new" v-if="logined">
				<view class="sponsor">
					<view class="new-title">发起人：</view>
					{{sponsor}}
				</view>
				
<!--			<view class="sponsor">
					<view class="new-title">约单号：</view>
					{{list_num}}
				</view> -->
				
				<view class="start">
					<view class="new-title">起点：</view>
					<view class="innerPlace">
						<view class="select-place-wrapper">
							<button class="select-place-btn" @click="chooseStartPosition()">选择位置</button>
						</view>
					</view>
				</view>
				
				<view class="selection">
					<text v-if="!selectStartPlace">
						尚未选择
					</text>
					<text v-else-if="selectStartPlace">
						已选:{{selectStartPosition}}
					</text>
				</view>	
				
				<view class="end">
					<view class="new-title">终点：</view>
					<view class="innerPlace">
							<view class="select-place-wrapper">
								<button class="select-place-btn" @click="chooseEndPosition()">选择位置</button>
							</view>
					</view>
				</view>
				
				<view class="selection">
					<text v-if="!selectEndPlace">
						尚未选择
					</text>
					<text v-else-if="selectEndPlace">
						已选:{{selectEndPosition}}
					</text>
				</view>
				
				<view class="start-time">
					<view class="new-title">出发时间：</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-db">
								<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
									<view class="uni-input">{{date}}</view>
								</picker>
							</view>
						</view>
					</view>
					
					<view class="uni-list time">
						<view class="uni-list-cell">
							<view class="uni-list-cell-db">
								<picker mode="time" :value="time" start="00:00" end="24:00" @change="bindTimeChange">
									<view class="uni-input">{{time}}</view>
								</picker>
							</view>
						</view>
					</view>
				
				<view class="time-rage">
					<view class="new-title">时间容错：</view>
					<view class="time-rage-input">
						<input type="text" v-model="time_rage" @input="input_timeRage">
					</view>
					分钟
				</view>
				
				<view class="exist-members">
					<view class="new-title">已有成员：</view>
					<view class="time-rage-input">
						<input type="text" v-model="exist_members" @input="input_memberNum">
					</view>
					人
				</view>
				
				<view class="exist-members">
					<view class="new-title">人数限制：</view>
					<view class="time-rage-input">
						<input type="text" v-model="member_limit" @input="input_memberLimit">
					</view>
					人
				</view>
				
				<view class="note">
					<view class="new-title">备注：</view>
					<view class="note-content">
						<input type="text" v-model="note_content" @input="input_noteContent"/>
					</view>
				</view>
				
				<view class="createBtn-wrapper">
					<button class="new-btn" form-type="submit" @click=crateList()>创建约单</button>
					<view v-if="created" class="createListTip">约单创建成功!</view>
				</view>
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
			const currentDate = this.getDate({
				format: true
			})
			return {
				userinfo:{},
				sponsor:"",
				logined:false,
				
				time_rage:"",
				exist_members:"",
				member_limit:"",
				note_content:"",
				selectStartPosition:"",
				starting_latitude:"",
				starting_longitude:"",
				selectEndPosition:"",
				ending_latitude:"",
				ending_longitude:"",
				
				title: 'picker',
				index: 0,
				date: currentDate,
				time: '12:00',
				
				created:false,
				selectStartPlace:false,
				selectEndPlace:false
			}
		},
		
		onShow() {
			var me = this;
			var userinfo = me.getGlobalUser("userInfos");

			if(userinfo != null){
				me.userinfo = userinfo;
				this.userinfo = userinfo;
				me.sponsor = userinfo.nickName;
				me.logined = userinfo.logined;
			}else{
				me.logined = false;
				me.userinfo = {};
			}
		},
		
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
			},

		methods: {
			input_timeRage:function(event){
				this.time_rage = event.target.value;
				this.created = false;
				console.log(this.time_rage);
			},
			input_memberNum:function(event){
				this.exist_members = event.target.value;
				this.created = false;
				console.log(this.exist_members);
			},
			input_memberLimit:function(event){
				this.member_limit = event.target.value;
				this.created = false;
				console.log(this.member_limit);
			},
			input_noteContent:function(event){
				this.note_content = event.target.value;
				this.created = false;
				console.log(this.note_content);
			},
			
			crateList: function(){
				var data={
					user_id:this.userinfo.userId,
					starting_latitude:this.starting_latitude,
					starting_longitude:this.starting_longitude,
					starting_address:this.selectStartPosition,
					ending_latitude:this.ending_latitude,
					ending_longitude:this.ending_longitude,
					ending_address:this.selectEndPosition,
					departure_time:this.date+" "+this.time,
					time_tolerance:this.time_rage,
					already_number:this.exist_members,
					max_number:this.member_limit,
					note:this.note_content
				};
				console.log(data);
				uni.request({
					url: this.mainUrl+'user/user/createOrder',
					method:"POST",
					header:{'content-type':"application/x-www-form-urlencoded"},
					data:data,
					success: (res) => {
						console.log("res.data:");
						console.log(res.data);
						if(res.data.status == "success"){
							this.created = true;
						}
						else if(res.data.status=="fail"){
						console.log(res.errmsg);
						}
					}
				});
			},
			
			chooseStartPosition: function(){
				var me = this;
				me.selectStartPlace = true;
				uni.chooseLocation({
					success: function (res) {
						me.selectStartPosition = res.name;
						me.starting_latitude = res.latitude;
						me.starting_longitude = res.longitude;
					}
				});
			},
			
			chooseEndPosition: function(){
					var me = this;
					me.selectEndPlace = true;
					uni.chooseLocation({
					success: function (res) {
						me.selectEndPosition = res.name;
						me.ending_latitude = res.latitude;
						me.ending_longitude = res.longitude;
					}
				});
			},
			
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
}
</script>

<style>
	@import url("new.css");
</style>
