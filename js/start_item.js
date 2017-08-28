


// 返回顶部
$(".g_top").click(function(){ 
	$('body,html').animate({scrollTop:0},300); 
	return false; 
}); 
//城市下拉列表
function SelectCity(){
  this.init(); 
} 
SelectCity.prototype={ 
  init:function(){ 
    this.arr = new Array(); 
    this.proArr=[ 
      '北京','上海','天津','重庆','河北','山西','内蒙古','辽宁','吉林','黑龙江','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','四川','贵州','云南','西藏','陕西','甘肃','宁夏','青海','新疆','香港','澳门','台湾'
    ] 
    this.arr[0 ]="东城,西城,崇文,宣武,朝阳,丰台,石景山,海淀,门头沟,房山,通州,顺义,昌平,大兴,平谷,怀柔,密云,延庆" ; 
    this.arr[1 ]="黄浦,卢湾,徐汇,长宁,静安,普陀,闸北,虹口,杨浦,闵行,宝山,嘉定,浦东,金山,松江,青浦,南汇,奉贤,崇明" ; 
    this.arr[2 ]="和平,东丽,河东,西青,河西,津南,南开,北辰,河北,武清,红挢,塘沽,汉沽,大港,宁河,静海,宝坻,蓟县" ; 
    this.arr[3 ]="万州,涪陵,渝中,大渡口,江北,沙坪坝,九龙坡,南岸,北碚,万盛,双挢,渝北,巴南,黔江,长寿,綦江,潼南,铜梁,大足,荣昌,壁山,梁平,城口,丰都,垫江,武隆,忠县,开县,云阳,奉节,巫山,巫溪,石柱,秀山,酉阳,彭水,江津,合川,永川,南川" ; 
    this.arr[4 ]="石家庄,邯郸,邢台,保定,张家口,承德,廊坊,唐山,秦皇岛,沧州,衡水"; 
    this.arr[5 ]="太原,大同,阳泉,长治,晋城,朔州,吕梁,忻州,晋中,临汾,运城" ; 
    this.arr[6 ]="呼和浩特,包头,乌海,赤峰,呼伦贝尔盟,阿拉善盟,哲里木盟,兴安盟,乌兰察布盟,锡林郭勒盟,巴彦淖尔盟,伊克昭盟" ; 
    this.arr[7 ]="沈阳,大连,鞍山,抚顺,本溪,丹东,锦州,营口,阜新,辽阳,盘锦,铁岭,朝阳,葫芦岛" ; 
    this.arr[8 ]="长春,吉林,四平,辽源,通化,白山,松原,白城,延边" ; 
    this.arr[9 ]="哈尔滨,齐齐哈尔,牡丹江,佳木斯,大庆,绥化,鹤岗,鸡西,黑河,双鸭山,伊春,七台河,大兴安岭"; 
    this.arr[10 ]="南京,镇江,苏州,南通,扬州,盐城,徐州,连云港,常州,无锡,宿迁,泰州,淮安" ; 
    this.arr[11 ]="杭州,宁波,温州,嘉兴,湖州,绍兴,金华,衢州,舟山,台州,丽水" ; 
    this.arr[12 ]="合肥,芜湖,蚌埠,马鞍山,淮北,铜陵,安庆,黄山,滁州,宿州,池州,淮南,巢湖,阜阳,六安,宣城,亳州" ; 
    this.arr[13 ]="福州,厦门,莆田,三明,泉州,漳州,南平,龙岩,宁德" ; 
    this.arr[14 ]="南昌市,景德镇,九江,鹰潭,萍乡,新馀,赣州,吉安,宜春,抚州,上饶" ; 
    this.arr[15 ]="济南,青岛,淄博,枣庄,东营,烟台,潍坊,济宁,泰安,威海,日照,莱芜,临沂,德州,聊城,滨州,菏泽" ; 
    this.arr[16 ]="郑州,开封,洛阳,平顶山,安阳,鹤壁,新乡,焦作,濮阳,许昌,漯河,三门峡,南阳,商丘,信阳,周口,驻马店,济源" ; 
    this.arr[17 ]="武汉,宜昌,荆州,襄樊,黄石,荆门,黄冈,十堰,恩施,潜江,天门,仙桃,随州,咸宁,孝感,鄂州" ; 
    this.arr[18 ]="长沙,常德,株洲,湘潭,衡阳,岳阳,邵阳,益阳,娄底,怀化,郴州,永州,湘西,张家界"; 
    this.arr[19 ]="广州,深圳,珠海,汕头,东莞,中山,佛山,韶关,江门,湛江,茂名,肇庆,惠州,梅州,汕尾,河源,阳江,清远,潮州,揭阳,云浮" ; 
    this.arr[20 ]="南宁,柳州,桂林,梧州,北海,防城港,钦州,贵港,玉林,南宁地区,柳州地区,贺州,百色,河池"; 
    this.arr[21 ]="海口,三亚" ; 
    this.arr[22 ]="成都,绵阳,德阳,自贡,攀枝花,广元,内江,乐山,南充,宜宾,广安,达川,雅安,眉山,甘孜,凉山,泸州" ; 
    this.arr[23 ]="贵阳,六盘水,遵义,安顺,铜仁,黔西南,毕节,黔东南,黔南" ; 
    this.arr[24 ]="昆明,大理,曲靖,玉溪,昭通,楚雄,红河,文山,思茅,西双版纳,保山,德宏,丽江,怒江,迪庆,临沧" ; 
    this.arr[25 ]="拉萨,日喀则,山南,林芝,昌都,阿里,那曲" ; 
    this.arr[26 ]="西安,宝鸡,咸阳,铜川,渭南,延安,榆林,汉中,安康,商洛" ; 
    this.arr[27 ]="兰州,嘉峪关,金昌,白银,天水,酒泉,张掖,武威,定西,陇南,平凉,庆阳,临夏,甘南"; 
    this.arr[28 ]="银川,石嘴山,吴忠,固原" ; 
    this.arr[29 ]="西宁,海东,海南,海北,黄南,玉树,果洛,海西" ; 
    this.arr[30 ]="乌鲁木齐,石河子,克拉玛依,伊犁,巴音郭勒,昌吉,克孜勒苏柯尔克孜,博 尔塔拉,吐鲁番,哈密,喀什,和田,阿克苏" ; 
    this.arr[31 ]="香港" ; 
    this.arr[32 ]="澳门" ; 
    this.arr[33 ]="台北,高雄,台中,台南,屏东,南投,云林,新竹,彰化,苗栗,嘉义,花莲,桃园,宜兰,基隆,台东,金门,马祖,澎湖"; 
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

//上传图片
var delParent;
var defaults = {
	fileType         : ["jpg","png","jpeg"],   // 上传文件的类型
	fileSize         : 1024 * 1024 * 4                  // 上传文件的大小 4M
};
$(".file").change(function(){
	var form = new FormData($('#upload_form')[0]);
	var idFile = $(this).attr("id");
	var file = document.getElementById(idFile);
	var fileList0 = file.files;
	var imgContainer = $('.file').parents(".envir_upload").siblings('.envir_pic1'); //存放图片的父亲元素
	var num=imgContainer.find('.up_pic').length;
	var totalNum = num + fileList0.length;
	form.append('tel', localStorage.tel);
	if(fileList0.length > 9 || totalNum > 9 ){
		alert("上传图片数目不可以超过9个，请重新选择");  //一次选择上传超过5个 或者是已经上传和这次上传的到的总数也不可以超过5个
	}else if(num<=9){
		$.ajax({
	      url:'http://192.168.31.35/coucou/Api/Content1/upload',
	      type:'POST',
	      async: true,
	      data:form,
	      processData: false,
		  contentType: false,
	      success:function (e){
	      	console.log(e)
	      	if(e.code==1){
	      		var data=e.data;
	      		console.log(data)
				for(var i=0;i<data.length;i++){
					var html='';
					html+='<div class="up_pic">'+
							'<img class="up_img" src="' + 'http://192.168.31.35/coucou/Public/' + data[i] + '"/>'+
							'<p class="remove">移除</p>'+
						'</div>'
					imgContainer.prepend(html);
				}
				num= imgContainer.find(".up_pic").length;
				if(num>=9){
					$('.fil_pic1').remove()
				}
	      	}
	      },
	      error:function (e){
	        alert('请上传png,jpeg,jpg格式的图片');
	      }
	   	});
	}
	// 删除图片
	imgContainer.delegate('.remove','click',function(){
		$(this).parent().remove();
		num= imgContainer.find(".up_pic").length;//图片个数
		var addPic='';
		addPic+='<div class="fil_pic fil_pic1">'+
					'<img src="http://192.168.31.35/coucou/Public/img/upload_img_03.png"/>'+
				'</div>';
		if(num<=9){
			var box=$('.envir_pic1');
			if(box.find('.fil_pic1').length<=0){
				box.append(addPic);
				return;
			}
		}
	})	
	    
});


//产品相册		
$(".file1").change(function(){	
	var form1 = new FormData($('#upload_form1')[0]);
	var idFile1 = $(this).attr("id");
	var file1 = document.getElementById(idFile1);
	var fileList1 = file1.files;
	var imgContainer1 = $('.file1').parents(".envir_upload").siblings('.envir_pic2'); //存放图片的父亲元素
	var num1=imgContainer1.find('.up_pic').length;
	var totalNum1 = num1 + fileList1.length;
	form1.append('tel', localStorage.tel);
	if(fileList1.length > 9 || totalNum1 > 9 ){
		alert("上传图片数目不可以超过9个，请重新选择");  //一次选择上传超过5个 或者是已经上传和这次上传的到的总数也不可以超过5个
	}else if(num1<=9){
		$.ajax({
	      url:'http://192.168.31.35/coucou/Api/Content1/upload',
	      type:'POST',
	      async: true,
	      data:form1,
	      processData: false,
		  contentType: false,
	      success:function (e){
	      	console.log(e)
	      	if(e.code==1){
	      		var data=e.data;
	      		console.log(data)
	      		for(var i=0;i<data.length;i++){
      				var html1='';
					html1+='<div class="up_pic">'+
							'<img class="up_img" src="' + 'http://192.168.31.35/coucou/Public/' + data[i] + '"/>'+
							'<p class="remove">移除</p>'+
						'</div>'
					imgContainer1.prepend(html1);
					
      			}
      			
				num1= imgContainer1.find(".up_pic").length;
				if(num1>=9){
					$('.fil_pic2').remove()
				}
				// 删除图片
				imgContainer1.delegate('.remove','click',function(){
					$(this).parent().remove()
					num1= imgContainer1.find(".up_pic").length;
						
					if(num1<=9){
						var addPic1='';
						addPic1+='<div class="fil_pic fil_pic2">'+
									'<img src="http://192.168.31.35/coucou/Public/img/upload_img_03.png"/>'+
								'</div>';
						var box1=$('.envir_pic2');
						if(box1.find('.fil_pic2').length<=0){
							box1.append(addPic1);
							return;
						}
					}
				})
	      	}
	      },
	      error:function (e){
	        alert('请上传png,jpeg,jpg格式的图片');
	      }
	   });
	}			
});
//公司资质
$(".file2").change(function(){	
	var form = new FormData($('#upload_form2')[0]);
	var idFile2 = $(this).attr("id");
	var file2 = document.getElementById(idFile2);
	var fileList2 = file2.files;
	var imgContainer2 = $('.file2').parents(".envir_upload").siblings('.envir_pic3'); //存放图片的父亲元素
	var num2=imgContainer2.find('.up_pic').length;
	var totalNum2 = num2 + fileList2.length;
	form.append('tel', localStorage.tel);
	if(fileList2.length>1|| totalNum2>1){
		return;
		// alert("上传图片数目不可以超过9个，请重新选择");
	}else if(num2<1){
	    $.ajax({
	      url:'http://192.168.31.35/coucou/Api/Content1/upload',
	      type:'POST',
	      async: true,
	      data:form,
	      processData: false,
		  contentType: false,
	      success:function (e){
	      	console.log(e)
	      	if(e.code==1){
	      		var data=e.data;
	      		console.log(data)
	      		var html=''
				html+='<div class="up_pic">'+
						'<img id="file" class="up_img" src="' + 'http://192.168.31.35/coucou/Public/' + data + '"/>'+
						'<p class="remove">移除</p>'+
					'</div>'
				imgContainer2.prepend(html);
				num2= imgContainer2.find(".up_pic").length;
				if(num2>=1){
					$('.fil_pic3').hide()
				}
				$('.remove').click(function(){
					$(this).parent().remove()
					$('.fil_pic3').show()
				})
	      	}
	      },
	      error:function (e){
	        alert('请上传png,jpeg,jpg格式的图片');
	      }
	   });
	}    
});
function validateUp(files){
	var arrFiles = [];//替换的文件数组
	for(var i = 0, file; file = files[i]; i++){
		//获取文件上传的后缀名
		var newStr = file.name.split("").reverse().join("");
		if(newStr.split(".")[0] != null){
				var type = newStr.split(".")[0].split("").reverse().join("");
				if(jQuery.inArray(type, defaults.fileType) > -1){
					// 类型符合，可以上传
					if (file.size >= defaults.fileSize) {
						alert(file.size);
						alert('您这个"'+ file.name +'"文件大小过大');	
					} else {
						// 在这里需要判断当前所有文件中
						arrFiles.push(file);	
					}
				}else{
					alert('您这个"'+ file.name +'"上传类型不符合');	
				}
			}else{
				alert('您这个"'+ file.name +'"没有类型, 无法识别');	
			}
	}
	return arrFiles;
}
// 提交按钮
// name：项目名称， 
// description：项目介绍，
// environment_url：店面环境图片url（以@拼接），
// product_url：产品相册图片url（以@拼接），
// company_name：公司名称，
// company_url：公司资质图片url（以@拼接），
// totalmoney：项目总额，
// totalnums：股东人数，
// province：开店省份，
// city：开店城市，
// username：发起人名称，
// tel：联系电话，
// email：邮箱地址

$('.submit').click(function(){
	var img1=$('.envir_pic1').find('.up_img');
	var environment_url = '';
	for(var i=0;i<img1.length;i++){
		environment_url += '@' + img1[i].src;
	}
	var img2=$('.envir_pic2').find('.up_img');
	var product_url = '';
	for(var i=0;i<img2.length;i++){
		product_url += '@' + img2[i].src;
	}
	var img3=$('.envir_pic3').find('.up_img');
	var company_url = '';
	for(var i=0;i<img3.length;i++){
		company_url += '@' + img3[i].src;
	}
	$.ajax({
		url:'http://192.168.31.35/coucou/Api/Content1/publish',
	 	type:'POST',
		dataType:'json',
		data:{
			token:'coucou',
			name:$('.item_name input').val(),
			description:$('.item_intro textarea').val(),
			environment_url:environment_url,
			product_url:product_url,
			company_name:$('.firm_name input').val(),
			company_url:company_url,
			totalmoney:$('.item_rental input').val(),
			totalnums:$('.num input').val(),
			province:$('#province').val(),
			city:$('#city').val(),
			username:$('.item_name').val(),
			phone:$('.tel input').val(),
			email:$('.email input').val(),
			tel:localStorage.tel
		},
		success:function(){

		}
	})
})



// 金额判断自动加.00
function amount(th){
	var regStrs = [
	    ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
	    ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点
	    ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
	    ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上
	];
	for(i=0; i<regStrs.length; i++){
	    var reg = new RegExp(regStrs[i][0]);
	    th.value = th.value.replace(reg, regStrs[i][1]);
	}
}
function overFormat(th){
	var v = th.value;
	if(v === ''){
	    v = '0.00';
	}else if(v === '0'){
	    v = '0.00';
	}else if(v === '0.'){
	    v = '0.00';
	}else if(/^0+\d+\.?\d*.*$/.test(v)){
	    v = v.replace(/^0+(\d+\.?\d*).*$/, '$1');
	    v = inp.getRightPriceFormat(v).val;
	}else if(/^0\.\d$/.test(v)){
	    v = v + '0';
	}else if(!/^\d+\.\d{2}$/.test(v)){
	    if(/^\d+\.\d{2}.+/.test(v)){
	        v = v.replace(/^(\d+\.\d{2}).*$/, '$1');
	    }else if(/^\d+$/.test(v)){
	        v = v + '.00';
	    }else if(/^\d+\.$/.test(v)){
	        v = v + '00';
	    }else if(/^\d+\.\d$/.test(v)){
	        v = v + '0';
	    }else if(/^[^\d]+\d+\.?\d*$/.test(v)){
	        v = v.replace(/^[^\d]+(\d+\.?\d*)$/, '$1');
	    }else if(/\d+/.test(v)){
	        v = v.replace(/^[^\d]*(\d+\.?\d*).*$/, '$1');
	        ty = false;
	    }else if(/^0+\d+\.?\d*$/.test(v)){
	        v = v.replace(/^0+(\d+\.?\d*)$/, '$1');
	        ty = false;
	    }else{
	        v = '0.00';
	    }
	}
	th.value = v; 
}