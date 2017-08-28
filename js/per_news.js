//
$('.per_cen_right ul a').click(function(){
		$(this).addClass('bort').siblings().removeClass('bort');
		$(".rt_bot > div").eq($(".per_cen_right ul a").index(this)).show().siblings().hide(); 
	})
//城市下拉列表
function SelectCity(){
  this.init(); 
} 
SelectCity.prototype={ 
  init:function(){ 
    this.arr = new Array(); 
    this.proArr=[ 
      '请选择省市','北京','上海','天津','重庆','河北','山西','内蒙古','辽宁','吉林','黑龙江','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','四川','贵州','云南','西藏','陕西','甘肃','宁夏','青海','新疆','香港','澳门','台湾'] 
    this.arr[0 ]="请选择城市" ;
    this.arr[1 ]="东城,西城,崇文,宣武,朝阳,丰台,石景山,海淀,门头沟,房山,通州,顺义,昌平,大兴,平谷,怀柔,密云,延庆" ; 
    this.arr[2 ]="黄浦,卢湾,徐汇,长宁,静安,普陀,闸北,虹口,杨浦,闵行,宝山,嘉定,浦东,金山,松江,青浦,南汇,奉贤,崇明" ; 
    this.arr[3 ]="和平,东丽,河东,西青,河西,津南,南开,北辰,河北,武清,红挢,塘沽,汉沽,大港,宁河,静海,宝坻,蓟县" ; 
    this.arr[4 ]="万州,涪陵,渝中,大渡口,江北,沙坪坝,九龙坡,南岸,北碚,万盛,双挢,渝北,巴南,黔江,长寿,綦江,潼南,铜梁,大足,荣昌,壁山,梁平,城口,丰都,垫江,武隆,忠县,开县,云阳,奉节,巫山,巫溪,石柱,秀山,酉阳,彭水,江津,合川,永川,南川" ; 
    this.arr[5 ]="石家庄,邯郸,邢台,保定,张家口,承德,廊坊,唐山,秦皇岛,沧州,衡水"; 
    this.arr[6 ]="太原,大同,阳泉,长治,晋城,朔州,吕梁,忻州,晋中,临汾,运城" ; 
    this.arr[7 ]="呼和浩特,包头,乌海,赤峰,呼伦贝尔盟,阿拉善盟,哲里木盟,兴安盟,乌兰察布盟,锡林郭勒盟,巴彦淖尔盟,伊克昭盟" ; 
    this.arr[8 ]="沈阳,大连,鞍山,抚顺,本溪,丹东,锦州,营口,阜新,辽阳,盘锦,铁岭,朝阳,葫芦岛" ; 
    this.arr[9 ]="长春,吉林,四平,辽源,通化,白山,松原,白城,延边" ; 
    this.arr[10 ]="哈尔滨,齐齐哈尔,牡丹江,佳木斯,大庆,绥化,鹤岗,鸡西,黑河,双鸭山,伊春,七台河,大兴安岭"; 
    this.arr[11 ]="南京,镇江,苏州,南通,扬州,盐城,徐州,连云港,常州,无锡,宿迁,泰州,淮安" ; 
    this.arr[12 ]="杭州,宁波,温州,嘉兴,湖州,绍兴,金华,衢州,舟山,台州,丽水" ; 
    this.arr[13 ]="合肥,芜湖,蚌埠,马鞍山,淮北,铜陵,安庆,黄山,滁州,宿州,池州,淮南,巢湖,阜阳,六安,宣城,亳州" ; 
    this.arr[14 ]="福州,厦门,莆田,三明,泉州,漳州,南平,龙岩,宁德" ; 
    this.arr[15 ]="南昌市,景德镇,九江,鹰潭,萍乡,新馀,赣州,吉安,宜春,抚州,上饶" ; 
    this.arr[16 ]="济南,青岛,淄博,枣庄,东营,烟台,潍坊,济宁,泰安,威海,日照,莱芜,临沂,德州,聊城,滨州,菏泽" ; 
    this.arr[17 ]="郑州,开封,洛阳,平顶山,安阳,鹤壁,新乡,焦作,濮阳,许昌,漯河,三门峡,南阳,商丘,信阳,周口,驻马店,济源" ; 
    this.arr[18 ]="武汉,宜昌,荆州,襄樊,黄石,荆门,黄冈,十堰,恩施,潜江,天门,仙桃,随州,咸宁,孝感,鄂州" ; 
    this.arr[19 ]="长沙,常德,株洲,湘潭,衡阳,岳阳,邵阳,益阳,娄底,怀化,郴州,永州,湘西,张家界"; 
    this.arr[20 ]="广州,深圳,珠海,汕头,东莞,中山,佛山,韶关,江门,湛江,茂名,肇庆,惠州,梅州,汕尾,河源,阳江,清远,潮州,揭阳,云浮" ; 
    this.arr[21 ]="南宁,柳州,桂林,梧州,北海,防城港,钦州,贵港,玉林,南宁地区,柳州地区,贺州,百色,河池"; 
    this.arr[22 ]="海口,三亚" ; 
    this.arr[23 ]="成都,绵阳,德阳,自贡,攀枝花,广元,内江,乐山,南充,宜宾,广安,达川,雅安,眉山,甘孜,凉山,泸州" ; 
    this.arr[24 ]="贵阳,六盘水,遵义,安顺,铜仁,黔西南,毕节,黔东南,黔南" ; 
    this.arr[25 ]="昆明,大理,曲靖,玉溪,昭通,楚雄,红河,文山,思茅,西双版纳,保山,德宏,丽江,怒江,迪庆,临沧" ; 
    this.arr[26 ]="拉萨,日喀则,山南,林芝,昌都,阿里,那曲" ; 
    this.arr[27 ]="西安,宝鸡,咸阳,铜川,渭南,延安,榆林,汉中,安康,商洛" ; 
    this.arr[28 ]="兰州,嘉峪关,金昌,白银,天水,酒泉,张掖,武威,定西,陇南,平凉,庆阳,临夏,甘南"; 
    this.arr[29 ]="银川,石嘴山,吴忠,固原" ; 
    this.arr[30 ]="西宁,海东,海南,海北,黄南,玉树,果洛,海西" ; 
    this.arr[31 ]="乌鲁木齐,石河子,克拉玛依,伊犁,巴音郭勒,昌吉,克孜勒苏柯尔克孜,博 尔塔拉,吐鲁番,哈密,喀什,和田,阿克苏" ; 
    this.arr[32 ]="香港" ; 
    this.arr[33 ]="澳门" ; 
    this.arr[34 ]="台北,高雄,台中,台南,屏东,南投,云林,新竹,彰化,苗栗,嘉义,花莲,桃园,宜兰,基隆,台东,金门,马祖,澎湖"; 
    var city = document.getElementById("city"); 
    var cityArr = this.arr[0].split(","); 
    var pro = document.getElementById("province"); 
    //初始化北京省份 
    for(var i=0;i<this.proArr.length;i++){     
      pro[i]=new Option(this.proArr[i],this.proArr[i]);      
    } 
    //初始化北京城市 
    for(var i=0;i<cityArr.length;i++){     
      city[i]=new Option(cityArr[i],cityArr[i]); 
    } 
  	this.handelEvent(); 
  }, 
  handelEvent:function(){ 
    var _this=this; 
    var pro = document.getElementById("province"); 
    var city = document.getElementById("city"); 
    var pro_city=document.getElementById('pro_city'); 
    pro.onchange=function(){ 
      var index = this.selectedIndex; 
      var cityArr = _this.arr[index].split(",");  
      city.length = 0; 
      //将城市数组中的值填充到城市下拉框中 
      for(var i=0;i<cityArr.length;i++){ 
        city[i]=new Option(cityArr[i],cityArr[i]); 
      } 
    } 
    city.onchange=function(){ 
      //将最终值写在一个隐藏input里 可自定义格式 
      pro_city.value=pro.value+'-'+this.value;
    } 
  } 
} 
new SelectCity(); 

//职业修改
$('.pro_change').click(function(){
	var name=$(this).text();
	if(name=='修改'){
		$('.pro_cancel').show();
		$('.ed_pname').show();
		$(this).addClass('pro');
		$(this).text('完成');
	}else if(name=='完成'){
		var newName=$('.n_pname').val();
		//交互
	}
})
$('.pro_cancel').bind('click',function(){
	$(this).hide();
	$('.ed_pname').hide();
	$('.pro_change').removeClass('pro');
	$('.pro_change').text('修改')
})
//修改昵称
$('.name_change').click(function(){
	var name=$(this).text();
	if(name=='修改'){
		$('.name_cancel').show();
		$('.ed_name').show();
		$(this).addClass('nic');
		$(this).text('完成');
	}else if(name=='完成'){
		var newName=$('.n_name').val();
		//交互
	}
})
$('.name_cancel').bind('click',function(){
	$(this).hide();
	$('.ed_name').hide();
	$('.name_change').removeClass('nic');
	$('.name_change').text('修改')
})
//修改密码
$('.psd_change').click(function(){
	var psd=$(this).text();
	if(psd=='修改'){
		$('.psd_cancel').show();
		$('.ed_psd').show();
		$(this).addClass('repair');
		$(this).text('完成');
	}else if(psd=='完成'){
		var opsd=$('.opsd').val();
		var npsd=$('.npsd').val();
		var rpsd=$('.rpsd').val();
		//交互
	}
})
$('.psd_cancel').bind('click',function(){
	$(this).hide();
	$('.ed_psd').hide();
	$('.psd_change').removeClass('repair');
	$('.psd_change').text('修改')
})
//修改手机号
$('.btn_change').click(function(){
	var ph_nub=$(this).text();
	if(ph_nub=='修改'){
		$('.btn_cancel').show();
		$('.ed_ph_num').show();
		$(this).addClass('repair');
		$(this).text('完成');
	}else if(ph_nub=='完成'){
		var newNub=$('.new_phon').val();
		//交互
	}
})
$('.btn_cancel').bind('click',function(){
	$(this).hide();
	$('.ed_ph_num').hide();
	$('.btn_change').removeClass('repair');
	$('.btn_change').text('修改')
})
//身份证验证
var icardReg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/; 
$('#icard').blur(function(){
	var icardval=$(this).val();
	if(icardReg.test(icardval)){
		gat = 1;
	}else{
		alert('请输入正确的身份证号')
	}
});
// 手机号码验证
var phoneReg1=/^1[34578]\d{9}$/;
$('#phone_num').blur(function(){
	var phoneval1=$(this).val();
	if(phoneReg1.test(phoneval1)){
		gat = 1;
	}else{
		alert('请输入正确的手机号')
		gat = 0;
	}
});
//获取验证码
$('.code').bind("click",function(){
 	var i = 10;
	if($('.code').text()=="获取验证码"){
		var flag=1;
	   	if(flag == 1) {
	   	    flag = 0;
	   	    n = setInterval(function() {
	   	      var j = i + '秒后重发';
	   	      $('.code').html(j);
	   	      i--;
	   	      if(i <=0){
	   	        clearInterval(n);
	   	        $('.code').html('发送成功');
	   	       
	   	        $('.code').html('重新获取验证码');
	   	       return  flag = 1;
	   	      }
	   	    }, 1000);
	   	}
	}
})
$('.gain').bind("click",function(){
	var i=10;
	if($(".code").text()=="重新获取验证码"){
   		var flag=1;
		if(flag == 1) {
   	    	flag = 0;
	   	    n = setInterval(function() {
	   	      var j = i + '秒后重发';
	   	      $('.code').html(j);
	   	      i--;
	   	      if(i <=0){
	   	        clearInterval(n);
	   	        $('.code').html('发送成功');
	   	       	$('.code').html('重新获取验证码');
	   	       return  flag = 1;
	   	      }
	   	    }, 1000);
   	  	}
   			
   	}
})

$('.ver_code').bind("click",function(){
 	var i = 10;
	if($('.ver_code').text()=="获取验证码"){
		var flag=1;
	   	if($('#phone_num').val()==''){
	   		alert('请输入电话号码');
	   		return false;
	   	}
	   	if(flag == 1) {
	   	    flag = 0;
	   	    n = setInterval(function() {
	   	      var j = i + '秒后重发';
	   	      $('.ver_code').html(j);
	   	      i--;
	   	      if(i <=0){
	   	        clearInterval(n);
	   	        $('.ver_code').html('发送成功');
	   	       
	   	        $('.ver_code').html('重新获取验证码');
	   	       return  flag = 1;
	   	      }
	   	    }, 1000);
	   	}
	}
})
$('.test').bind("click",function(){
	var i=10;
	if($(".ver_code").text()=="重新获取验证码"){
   		var flag=1;
		if(flag == 1) {
   	    	flag = 0;
	   	    n = setInterval(function() {
	   	      var j = i + '秒后重发';
	   	      $('.ver_code').html(j);
	   	      i--;
	   	      if(i <=0){
	   	        clearInterval(n);
	   	        $('.ver_code').html('发送成功');
	   	       	$('.ver_code').html('重新获取验证码');
	   	       return  flag = 1;
	   	      }
	   	    }, 1000);
   	  	}
   			
   	}
})
var url='http://192.168.31.35/coucou/';
$.ajax({
	type:'post',
	url:url+'Api/Info1/personalInfo',
	dataType:'json',
	async:true,
	data:{
		token:'coucou',
		tel:localStorage.tel
	},
	success:function(e){
		var data=e.data;
		console.log(data)
		if(e.code==1){
			// 基本信息
			$('.nick_name').html(data.nickname);
			$('.name').html(data.nickname);
			$('.head_name').html(data.nickname);
			$('.id').html('ID：'+data.id)
			$('.u_id').html(data.id);
			$('.tx_img').attr('src',data.img)
			$('.tx_bag').attr('src',data.img)
			$('.head_img').attr('src',data.img)
			$('#headImg').attr('src',data.img)
			$('#province').val(data.province)
			$('#city').val(data.city)
			$('.combobox').val(data.educational)
			$('.pro_name').html(data.industry)
			$('.invest_r>select').val(data.investment)
			// 认证投资人
			$('.realname').val(data.realname)
			$('.identitycard').val(data.identitycard)
			$('.phone_number>i').html(data.tel);
			// 账号密码
			$('.new_number').html(data.tel)
			$('.psd_c>span').html(data.password)
			if(data.identitycard!=''){
				$('.verified').html('已认证')
				// $('.submit').html('已认证')
			}else{
				$('.verified').html('未认证')
			}
		}
	},
	error:function(e){
		alert('error')
	}
})