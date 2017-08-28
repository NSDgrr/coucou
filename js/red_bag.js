$(function(){
	//活动规则
	$('.rule').click(function(){
		$('.bag_rule').show();
		$('.b_bac').css({"overflow":"hidden","height":"100vh"});
	})
	$('#clr').click(function(){
		$('.bag_rule').hide();
		$('.b_bac').css({"overflow":"auto","height":"100%"});
	})
	//领取红包
	$('.bag').click(function(){
		$('.get_bag').show()
		$('.b_bac').css({"overflow":"hidden","height":"100vh"});
	})
	$('#clrb').click(function(){
		$('.get_bag').hide()
		$('.b_bac').css({"overflow":"auto","height":"100%"});
	})
	// 获取项目id
	var url=window.location.href;
	var id1 = url.split('?')[1];
	var tid=id1.split('=')[1];//从详情页面点击获取的id
	var shareid=id1.split('&')[1];
	var tshareid=shareid.split('=')[1];//当前页面的UID
	var order_id='';//订单号
	var friend_order_id='';
	//拆红包
	$('.open').one('click',function(){
		changeStyle();
		$('.noopen').css('display','block');
		// 我的红包
		$.ajax({
			type:"POST",
			dataType:'json',
			url:"https://www.coucouchina.com/Api/Activity1/openRed",
			data:{
				token:'coucou',
				shareid:tshareid,
				activityid:tid
			},
			async:true,
			success:function(e){
				if(e.code==1){
					var data=e.data;
					order_id=data.order_id;
					var friendData = e.friendData;
					// 我的奖品
					if(data.type==1){//抽到金钱
						var html='';
						html='<div class="i_get">'+data.price+'<i>元</i></div>';
						$('.red_bag_con2').append(html);
					}else{//抽到券
						var html1='';
						html1='<div class="i_get i_get2">'+data.discount+'</div>';
						$('.red_bag_con2').append(html1);
					}
					// 好友的奖品
					if(friendData.code==1){
						var friendData1 = friendData.friendData;
						friend_order_id=friendData1.order_id;
						if(friendData1.type==1){//抽到金钱
							var friend='';
							friend='<div class="h_get">'+friendData1.price+'<i>元</i></div>';
							$('.red_bag_con2').append(friend);
						}else{//抽到券
							var friend2='';
							friend2='<div class="h_get h_get2">'+friendData1.discount+'</div>';
							$('.red_bag_con2').append(friend2);
						}
					}
				}else{
					alert(e.intro);
				}
			}
		})
	})
	function changeStyle(){
		setTimeout(function(){
			$('.open .tear').addClass('opening');
		},30)
		setTimeout(function(){
			$('.open .circle4').css('opacity','1');
		},1200)
		setTimeout(function(){
			$('.open .circle5').css('opacity','1');
		},1300)
		setTimeout(function(){
			$('.open .circle6').css('opacity','1');
		},1400)
		setTimeout(function(){
			$('.red_bag_con').hide();
			$('.red_bag_con2').show();
			$('.bag').html('领取红包').addClass('red');
		},1600)
	}
	//获取短信验证码
	$('#gain').click(function(){
		//验证手机号
		var phoneReg=/^1[34578]\d{9}$/;
		var myNumber=$('#phone_num').val();
		if(!phoneReg.test(myNumber)){
			alert('请输入正确的手机号')
		}else{
			$(this).attr('disabled','');
			$.ajax({
				type:"POST",
				dataType:'json',
				url:"https://www.coucouchina.com/Api/Note/Index",
				data:{
					token:'coucou',
					tel:$('#phone_num').val()
				},
				async:true,
				success:function(e){
					// console.log(e)
					var i = 60;
			   		if($('#gain').val()=="获取"){
			   			var flag=1;
					   	if($('#phone_num').val()==''){
					   		alert('请输入电话号码');
					   		return false;
					   	}
					   	if(flag == 1) {
					   	    flag = 0;
					   	    n = setInterval(function() {
					   	      var j = i + '秒';
					   	      $('#gain').val(j);
					   	      i--;
					   	      if(i <=0){
					   	        clearInterval(n);
					   	        $('#gain').val('获取');
					   	        return  flag = 1;
					   	      }
					   	    }, 1000);
					   	}
			   		}
				}
			})
		}			
	})	
	//填写信息领取红包
	$('#go_get').click(function(){
		//验证手机号
		var phoneReg=/^1[34578]\d{9}$/;
		var myNumber=$('#phone_num').val();
		if(!phoneReg.test(myNumber)){
			alert('请输入正确的手机号');
		}else{
			$.ajax({
				type:"POST",
				dataType:'json',
				url:"https://www.coucouchina.com/Api/Activity1/drawRed",
				data:{
					token:'coucou',
					tel:$('#phone_num').val(),
					code:$('#code').val(),
					order_id:order_id,
					friend_order_id:friend_order_id,
					shareid:'203'
				},
				async:true,
				success:function(e){
					console.log(e)
					if(e.code==1){
						$('.get_bag').hide();
						$('.got_red_bag').show();
					}else{
						alert(e.intro)
					}
				}
			})
		}

	})
	// 好有拆的奖品
	$.ajax({
		type:"POST",
		dataType:'json',
		url:"https://www.coucouchina.com/Api/Activity1/friendGetRed",
		data:{
			token:'coucou',
			shareid:tshareid
		},
		async:true,
		success:function(e){
			if(e.code==1){
				$('.friends').html(e.count);
				$('.moneys').html(e.totalMoney);
				var data=e.data;
				$('.bag_friend').css('display','block');
				for(var i=0;i<e.count;i++){
					if(data[i].type==1){
						var box1='';
						box1='<p>'+
							'<img class="b_headImg" src="'+data[i].headimgurl+'"/>'+
							'<span class="gift_model">'+
								'<img src="'+data[i].imgurl+'"/>'+
							'</span>'+
							'<span class="money">'+data[i].price+'<i>元</i></span>'+
						'</p>';
						$('.bag_friend_con').prepend(box1);
					}else{
						var box='';
						box='<p>'+
								'<img class="b_headImg" src="'+data[i].headimgurl+'"/>'+
								'<span class="gift_model">'+
									'<img src="'+data[i].imgurl+'"/>'+
								'</span>'+
								'<span class="gift">'+data[i].name+'</span>'+
							'</p>';
						$('.bag_friend_con').prepend(box);
					}	
				}
			}else{
				$('.friends').html(e.count);
				$('.moneys').html(e.totalMoney);
				$('.bag_friend').css('display','none')
				alert(e.intro)
			}
		}
	})
	// 打开APP
	function OpenAPP() {
        var ua = navigator.userAgent.toLowerCase();
        var uaArr = ua.split("/");
        var tmp = uaArr[uaArr.length -2];
        var url = location.search;  
        var theRequest = new Object(); 
        if (url.indexOf("?") != -1) { 
            var str = url.substr(1); 
            strs = str.split("&"); 
            for(var i = 0; i < strs.length; i ++) { 
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
            } 
        } 
        var pidStr = theRequest["pid"];
        var pageStr = theRequest["page"];
        var pStatus = theRequest["status"];
        var openURL = "https://a.mlinks.cc/AKRy?name1="+pidStr+"&name2="+pStatus+"&name3="+pageStr;
        window.location= openURL;
    }
    $('.openApp').click(function(){
		OpenAPP();
	})
})
