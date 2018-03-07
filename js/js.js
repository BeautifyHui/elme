//初始化swiper
window.onload = function(){
//滑动分页功能
var mySwiper = new Swiper ('.swiper-container', {
    // 分页器
    pagination: {
//    el: '.swiper-pagination',
//    dynamicBullets:true
    }
})

//循环各个分类
var app1 = new Vue({
	el:'#app1',
	data:{
		good:[
			{"src":"img/1jpeg.webp","type":"美食"},
			{"src":"img/2jpeg.webp","type":"晚餐"},
			{"src":"img/3jpeg.webp","type":"商超便利"},
			{"src":"img/1jpeg.webp","type":"果蔬生鲜"},
			{"src":"img/2jpeg.webp","type":"大牌五折"},
			{"src":"img/3jpeg.webp","type":"医药健康"},
			{"src":"img/1jpeg.webp","type":"浪漫鲜花"},
			{"src":"img/2jpeg.webp","type":"麻辣烫"},
			{"src":"img/2jpeg.webp","type":"地方菜系"},
			{"src":"img/2jpeg.webp","type":"披萨意面"}
		]
	}
})
var app2 = new Vue({
	el:'#app2',
	data:{
		good:[
			{src:"img/1jpeg.webp",type:"地方小吃"}
		]
	}
})
var app3 = new Vue({
	el:'#app3',
	data:{
		list:[
			{src:"img/c0png.webp",shop:"和合谷"},
			{src:"img/c0png.webp",shop:"和合谷"},
			{src:"img/c0png.webp",shop:"和合谷"},
			{src:"img/c0png.webp",shop:"和合谷"},
			{src:"img/c0png.webp",shop:"和合谷"},
			{src:"img/c0png.webp",shop:"和合谷"}
		]
	}
})

var map = new BMap.Map("allmap");

	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		var pt = r.point;
		var geoc = new BMap.Geocoder(); 
		geoc.getLocation(pt, function(rs){
			var addComp = rs.addressComponents;
			$("#allmap").append("<i class='iconfont icon-map'></i>"+addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
		}); 
	},{enableHighAccuracy: true})
	
}