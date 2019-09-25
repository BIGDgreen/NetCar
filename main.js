import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.getGlobalUser = function(key){
	var userinfo = uni.getStorageSync("userInfos");
	if (userinfo != null && userinfo != "" && userinfo != undefined) {
		return userinfo;
	}else{
		return null;
	}
}

Vue.prototype.login = function(){
	uni.navigateTo({
		url:"../me_login/me_login"
	})
}

Vue.prototype.mainUrl="http://10.111.152.209:8090/gateway-"
Vue.prototype.show_badge = true;
Vue.prototype.globle_notices= [];
Vue.prototype.notice_num= 0;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
