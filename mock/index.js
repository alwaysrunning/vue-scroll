import Mock from 'mockjs';
var baseUrl = '//wx.yunhou.com';

var parseUrl = function (str, name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = str.match(reg);
	var context = "";
	if (r != null){
		context = r[2];
	}
	reg = null;
	r = null;
	return context == null || context == "" || context == "undefined" ? "" : context;
}

//login -------------------------
Mock.mock(baseUrl + '/api/list', function() {
  //var param = sessionStorage.getItem(opt.url);
  return {
      error: '0',
      msg: '',
      data: [{
          goodsImageUrl:"//ssl.bbgstatic.com/super/images/conf/my-center/1.0.0/default.png",
          activityText:"11111",
          goodsName:"营销活动",
          salePrice:"108.00",
          addCart:true,
          unit:'g'
      },{
          goodsImageUrl:"//ssl.bbgstatic.com/super/images/conf/my-center/1.0.0/default.png",
          activityText:"22222",
          goodsName:"营销活动",
          salePrice:"108.00",
          addCart:true,
          unit:'g'
      },{
          goodsImageUrl:"//ssl.bbgstatic.com/super/images/conf/my-center/1.0.0/default.png",
          activityText:"333333",
          goodsName:"营销活动",
          salePrice:"108.00",
          addCart:true,
          unit:'g'
      },{
          goodsImageUrl:"//ssl.bbgstatic.com/super/images/conf/my-center/1.0.0/default.png",
          activityText:"4444444",
          goodsName:"营销活动",
          salePrice:"108.00",
          addCart:true,
          unit:'g'
      },{
          goodsImageUrl:"//ssl.bbgstatic.com/super/images/conf/my-center/1.0.0/default.png",
          activityText:"55555555",
          goodsName:"营销活动",
          salePrice:"108.00",
          addCart:true,
          unit:'g'
      },{
          goodsImageUrl:"//ssl.bbgstatic.com/super/images/conf/my-center/1.0.0/default.png",
          activityText:"6666666",
          goodsName:"营销活动",
          salePrice:"108.00",
          addCart:true,
          unit:'g'
      },{
          goodsImageUrl:"//ssl.bbgstatic.com/super/images/conf/my-center/1.0.0/default.png",
          activityText:"77777777777777777777777777777777777777777777777777777777",
          goodsName:"营销活动",
          salePrice:"108.00",
          addCart:true,
          unit:'g'
      }]
  }
});
