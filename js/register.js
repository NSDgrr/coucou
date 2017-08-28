// 昵称验证
var nameReg1 = /^([\u4e00-\u9fa5A-Za-z0-9]){2,10}$/; 
$('#name').blur(function(){
	var nameval1=$(this).val();
	if(nameReg1.test(nameval1)){
		$(this).next().children('.correct').css('display','inline-block');
		$(this).next().children('.wrong').css('display','none');
		gat = 1;
	}else{
		$(this).next().children('.wrong').css('display','inline-block');
		gat = 0;
	}
});
// 手机号码验证
var phoneReg1=/^1[34578]\d{9}$/;
$('#phone_num').blur(function(){
	var phoneval1=$(this).val();
	if(phoneReg1.test(phoneval1)){
		$(this).next().children('.correct').css('display','inline-block');
		$(this).next().children('.wrong').css('display','none');
		gat = 1;
	}else{
		$(this).next().children('.wrong').css('display','inline-block');
		gat = 0;
	}
});
// 登录密码
var passReg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/; 
$('#pass').blur(function(){
	var passval1=$(this).val();
	if(passReg1.test(passval1)){
		$(this).next().children('.correct').css('display','inline-block');
		$(this).next().children('.wrong').css('display','none');
		gat = 1;
	}else{
		$(this).next().children('.wrong').css('display','inline-block');
		gat = 0;
	}
});
// 确认密码
$('#re_pass').blur(function(){
	if($('#pass').val()==$('#re_pass').val()){
		$(this).next().children('.correct').css('display','inline-block');
		$(this).next().children('.wrong').css('display','none');
		gat = 1;
	}else if($('#pass').val()==''){
		$(this).next().children('.wrong').css('display','inline-block');
		gat = 0;
	}else{
		$(this).next().children('.wrong').css('display','inline-block');
		gat = 0;
	}
})
//验证码
	url='http://192.168.31.35/coucou/';
	$('.gain').bind("click",function(){
	 	var i = 10;
   		if($('.gain').text()=="获取验证码"){
   			var flag=1;
		   	if($('#phone_num').val()==''){
		   		alert('请输入电话号码');
		   		return false;
		   	}
	   
		   	if(flag == 1) {
		   	    flag = 0;
		   	    n = setInterval(function() {
		   	      var j = i + '秒后重发';
		   	      $('.gain').html(j);
		   	      i--;
		   	      if(i <=0){
		   	        clearInterval(n);
		   	        $('.gain').html('发送成功');
		   	       
		   	        $('.gain').html('重新获取验证码');
		   	       return  flag = 1;
		   	      }
		   	    }, 1000);
		   	}
   		}
   		// $.ajax(function(){
   		// 	type:'post',
   		// 	url:url+'Api/Note/Index',
   		// 	data:{
   		// 		'tel':$('#phone_num').val()
   		// 	},
   		// 	success:function(){

   		// 	},
   		// 	error:function(){
   				
   		// 	}
   		// })

	})
	$('.test').bind("click",function(){
		var flag=1;
		if($(".gain").text()=="重新获取验证码"){
	   		var i=10;
			if(flag == 1) {
	   	    	flag = 0;
		   	    n = setInterval(function() {
		   	      var j = i + '秒后重发';
		   	      $('.gain').html(j);
		   	      i--;
		   	      if(i <=0){
		   	        clearInterval(n);
		   	        $('.gain').html('发送成功');
		   	       	$('.gain').html('重新获取验证码');
		   	        return  flag = 1;
		   	      }
		   	    }, 1000);
	   	  	}
	   			
	   	}
	})
	//                     数据交互
var url='http://192.168.31.35/coucou/';	
// 1.注册页面
$('.register').click(function(){
	if($('#name').val()&&$('#phone_num').val()&&$('#pass').val()!==''){
		$.ajax({
			type:'post',
			url:url+'Api/Index1/register',
			data:{
				'username':$('#name').val(),
				'tel':$('#phone_num').val(),
				'password':MD5($('#pass').val()),
				'code':$('.write').val(),
				'confirmPassword':MD5($('#pass').val())
			},
			dataType:'json',
			success:function(e){
				if(e.code==1){
					console.log(e)
					localStorage.username=$('#name').val();
					localStorage.tel=$('#phone_num').val();
					localStorage.password=MD5($('#pass').val());
					window.location.href=url+'home/index/login.html'
				}else{
					alert(e.intro)
				}
				
			},
			error:function(){
				alert('您输入有误，请重新输入')
			}
		})
	}else{
		alert('请补全信息')
	}
})
// 2.登录页面
$('.login').click(function(){
	$.ajax({
		type:"post",
		url:url+"Api/Index1/login",
		dataType:'json',
		async:true,
		data:{
			'tel':$('#phone_num').val(),
			'password':MD5($('#pass').val())
		},
		success:function(e){
			console.log(e)
			if(e.code==1){
				window.location.href=url+'home/index/per_news.html';
			}else{
				alert(e.intro)
			}
		},
		error:function(e){
			alert('error')
		}
	})
})	
// 3.重置密码
$('.reset').click(function(){
	if($('.write').val()&&$('#phone_num').val()&&$('.new_pas').val()&&$('.confirm-pas').val()!=''){
		$.ajax({
			type:'post',
			url:url+'Api/Index1/resetPassword',
			data:{
				'id':localStorage.uid,
				'tel':$('#phone_num').val(),
				'code':$('.write').val(),
				'newPassword':MD5($('.new_pas').val()),
				'newConfirmPassword':MD5($('.confirm-pas').val())
			},
			// id：用户id，tel:手机号，code:验证码，newPassword：新密码，newConfirmPassword：确认密码
			dataType:'json',
			success:function(e){
				if(e.code==1){
					console.log(e)
					// localStorage.username=$('#name').val();
					// localStorage.tel=$('#phone_num').val();
					// localStorage.password=MD5($('#pass').val());
					// window.location.href=url+'home/index/login.html'
				}else{
					alert(e.intro)
				}
				
			},
			error:function(){
				alert('您输入有误，请重新输入')
			}
		})
	}else{
		alert('请补全信息')
	}
})