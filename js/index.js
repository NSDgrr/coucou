$(function(){
	// URL='https://www.coucouchina.com/home/index/';
	// alert(URL)
	//a标签
	$('.head_cent a').click(function(){
		$(this).addClass('djzt').siblings().removeClass();
	})
									//首页
	//banner
	var index=0;
	var timer=null;
	$(".ban_btn a").click(function(){
		$(this).addClass("btn").siblings().removeClass();
		index=$(this).index();
		$(".cou_banner ul").stop(true,true).animate({left:-index*$(window).width()});
	})
	timer=setInterval(tab,2000);
	function tab(){
		index++;
		if(index==$(".cou_banner img").length){
			index=0;
		}
		$(".cou_banner ul").stop(true,true).animate({left:-index*$(window).width()});
		$(".ban_btn a").eq(index).addClass("btn").siblings().removeClass();
	}
	$(".cou_banner").mouseover(function(){
		clearInterval(timer);
	})
	$(".cou_banner").mouseout(function(){
		timer=setInterval(tab,2000);
	})
	//正在融资
	// var length=$('.con_now div').length-4;
	// var count=0;
	// $('.btn_right').click(function(){
	// 	if(count<length){
	// 		count++
	// 	}
	// 	$('.con_now').animate({'marginLeft':-305*count},300);
	// });
	// $('.btn_left').click(function(){
	// 	if(count>0){
	// 		count--;
	// 	}
	// 	$('.con_now').animate({'marginLeft':-305*count},300);
	// });
	//融资完成
	var length2=$('.con_finish div').length-4;
	var num=0;
	$('.btn2_right').click(function(){
		if(num<length){
			num++
		}
		$('.con_finish').animate({'marginLeft':-305*num},300);
	});
	$('.btn2_left').click(function(){
		if(num>0){
			num--;
		}
		$('.con_finish').animate({'marginLeft':-305*count},300);
	});
	//即将上线
	// var length3=$('.con_soon div').length-4;
	// var num=0;
	// $('.btn3_right').click(function(){
	// 	if(num<length){
	// 		num++
	// 	}
	// 	$('.con_soon').animate({'marginLeft':-305*num},300);
	// });
	// $('.btn3_left').click(function(){
	// 	if(num>0){
	// 		num--;
	// 	}
	// 	$('.con_soon').animate({'marginLeft':-305*count},300);
	// });
	//返回顶部
	$(".g_top").click(function(){ 
		$('body,html').animate({scrollTop:0},300); 
		return false; 
	}); 
										//全部项目
	//a标签
	$('.all_con_cen ul').find('a').click(function(){
		$(this).addClass('active').siblings().removeClass()
	})									
										//个人信息页
	//个人信息选项卡
	$('.per_cen_right ul a').click(function(){
		$(this).addClass('bort').siblings().removeClass('bort');
		$(".rt_bot > div").eq($(".per_cen_right ul a").index(this)).show().siblings().hide(); 
	})
	//评论和个人记录选项卡
	$('.xmbtn li').click(function(){
		$(this).addClass('btn_active').siblings().removeClass('btn_active');
		$(".xmxq > div").eq($(".xmbtn li").index(this)).show().siblings().hide(); 
	})
	//回复按钮
	$('.replay').click(function(){
		$('.replay_box').css('display','block');
	})
	//举报--取消举报
	$('.report').click(function(){
		if($('.report').text()=='举报'){
			$('.report').html('取消举报')
			$('.img .jubao').css('display','block')
		}else{
			$('.report').html('举报')
			$('.img .jubao').css('display','none')
		}
	})
	//字数跟随
	$('.rb_con').keyup(function(){
		var txt=$('.rb_con').val()
		var length=txt.length;
		$('.word').html(500-length)
	})
	//消息回复
	$('.replay_btn').click(function(){
		var txt=$('.rb_con').val()
			var length=txt.length;
		$('.mess_list li').append('<div class="replay_con"><b>回复：</b><p>'+txt+'</p></div>');
		$('.rb_con').val('');
		$('.word').html(500)
		$('.img .replay_img').css('display','block')
	})
	//收起按钮
	$('.receive_btn').click(function(){
		$('.replay_box').css('display','none');
	})
										//  数据交互
										//主页数据交互 
	// banner数据
	$.ajax({
		type:"get",
		url:"https://www.coucouchina.com/api/index1/Information",
		dataType:'json',
		async:true,
		success:function(data){
			if(data.code==200){
				var line_money=data.info.line_money*10000;
				var line_subscription=data.info.line_subscription*10000;
				line_money+='';
				line_subscription+='';
				var reg1=line_money.indexOf('.') >-1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
				var reg2=line_subscription.indexOf('.') >-1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
				line_money=line_money.replace(reg1, '$1,');
				line_subscription=line_subscription.replace(reg2, '$1,');
				$('.line_num').html(data.info.line_num);
				$('.lined_num').html(data.info.lined_num);
				$('.line_money').html(line_money+'<e>元</e>');
				$('.line_subscription').html(line_subscription+'<e>元</e>');
			}
		},
		error:function(data){
			// alert('网站正在维护中，更多精彩内容请下载凑凑APP')
		}
	})	
	//正在融资
	$.ajax({
		type:"post",
		url:"https://www.coucouchina.com/api/index1/Being",
		dataType:'json',
		async:true,
		success:function(e){
			var data=e.data;
			if(e.code==200){
				for(var i=0;i<data.length;i++){
					var html='';
					var rg=parseFloat(data[i].money_marketings);//认购总额
					var ze=parseFloat(data[i].moneys);//项目总额
					var bd=(rg/ze*100).toFixed(2);//百分比--进度条的百分比
					html='<a href="https://www.coucouchina.com/home/index/index1.html?'+data[i].id+'">'+
						'<div class="now_main hover_shadow">'+
							'<span class="now_pic">'+
								'<img src="'+data[i].img+'" alt=""/>'+
								'<span class="pic_pos"></span>'+
								'<span class="now_btn">剩余<b>'+data[i].endtime+'</b>天</span>'+
							'</span>'+
							'<span class="now_con">'+
								'<p class="now_tit">'+
									'<b>'+data[i].name+'</b>'+
									'<e>'+data[i].city+'</e>'+
									'<e style="margin-right:5px;">'+data[i].province+'</e>'+
								'</p>'+
								'<p class="now_des">'+data[i].slogen+'</p>'+
								'<span class="now_tiao">'+
									'<span class="now_shown" id="now_shown" style="width:'+bd+'%;">'+
										'<span class="now_num" id="now_num" style="right:0px;">'+bd+'%</span>'+
									'</span>'+
								'</span>'+
								'<p class="now_money">'+
									'<span>'+
										'<b>融资总额</b>'+
										'<e>'+data[i].moneys+'万</e>'+
									'</span>'+
									'<span>'+
										'<b>认购金额</b>'+
										'<e>'+data[i].money_marketings+'万</e>'+
									'</span>'+
								'</p>'+
							'</span>'+
						'</div>'+
						'</a>'
					$('.con_now').prepend(html);
					if(bd<=10){
						$('.now_shown').eq(i).css({'width':bd+'%'});
						$('.now_num').eq(i).css({'right':'-42px'});
					}
					if(bd>=100){
						$('.now_shown').eq(i).css('background','-webkit-linear-gradient(left,#ff990c,#f46441)')
					}else{
						$('.now_shown').eq(i).css('background','-webkit-linear-gradient(left,#ee69ba,#b544ee)')						
					}
					// else{
					// 	$('.now_shown').eq(i).css({'width':bd+'%'});
					// 	$('.now_num').eq(i).css({'right':'0px'});
					// }					
				}				
			}
			var box=4;
			var obj=$('.con_now');
			obj.css('width',box*300);
			if(box>4){
				// $('.btn_left').css('opacity','1')
				$('.btn_right').css('opacity','1');
				var length=box-4;
				var count=0;
				$('.btn_right').click(function(){
					if(count<length){
						count++;
					}
					$('.con_now').animate({'marginLeft':-300*count},300);
				});
				// $('.btn_left').click(function(){
				// 	if(count>0){
				// 		count--;
				// 	}
				// 	$('.con_now').animate({'marginLeft':-297.5*count},300);
				// });
			}
		},
		error:function(data){
			// alert('网站正在维护中，更多精彩内容请下载凑凑APP')
		}
	})
	// 融资完成
	$.ajax({
		type:"post",
		url:"https://www.coucouchina.com/api/index1/Accomplish",
		dataType:'json',
		async:true,
		success:function(e){
			var data=e.data;
			// console.log(e);
			if(e.code==0){
				for(var i=0;i<data.length;i++){
					var Finish='';
					// Finish='<a href="https://www.coucouchina.com/home/index/index2.html?'+data[i].id+'">'+
					// 	'<div class="finish_main hover_shadow">'+
					// 			'<span class="finish_pic">'+
					// 				'<img src="'+data[i].img+'" alt="" />'+
					// 				'<span class="finish_but">融资成功</span>'+
					// 			'</span>'+
					// 			'<span class="finish_con">'+
					// 				'<p class="finish_tit">'+
					// 					'<b>'+data[i].name+'</b>'+
					// 					'<e>'+data[i].city+'</e>'+
					// 					'<e style="margin-right:5px;">'+data[i].province+'</e>'+
					// 				'</p>'+
					// 				'<p class="finish_des">'+data[i].slogen+'</p>'+
					// 				'<p class="finish_money">'+
					// 					'<span>'+
					// 						'<b>融资总额</b>'+
					// 						'<e>'+data[i].moneys+'万</e>'+
					// 					'</span>'+
					// 					'<span>'+
					// 						'<b>认购金额</b>'+
					// 						'<e>'+data[i].money_marketings+'万</e>'+
					// 					'</span>'+
					// 				'</p>'+
					// 			'</span>'+
								
					// 		'</div>'+
					// 	'</a>'	
					var rg=parseFloat(data[i].money_marketings);//认购总额
					var ze=parseFloat(data[i].moneys);//项目总额
					var bd=(rg/ze*100).toFixed(2);//百分比--进度条的百分比
					var img="https://www.coucouchina.com/Public/";
					Finish='<a href="https://www.coucouchina.com/home/index/index2.html?'+data[i].id+'">'+
							'<div class="f_main hover_shadow">'+
								'<span class="f_pic">'+
									'<img src="'+data[i].img+'" alt="" />'+
									'<span class="f_btn">融资成功</span>'+
								'</span>'+
								'<span class="f_con">'+
									'<p class="f_tit">'+
										'<b>'+data[i].name+'</b>'+
										'<e>'+data[i].city+'</e>'+
										'<e style="margin-right:5px;">'+data[i].province+'</e>'+
									'</p>'+
									'<p class="f_des">'+data[i].slogen+'</p>'+
									'<span class="f_tiao">'+
										'<span class="f_shown" id="now_shown" style="width:'+bd+'%;">'+
											'<span class="f_num" id="now_num" style="right:0px;">'+bd+'%</span>'+
										'</span>'+
									'</span>'+
									'<p class="f_money">'+
										'<span>'+
											'<b>融资总额</b>'+
											'<e>'+data[i].moneys+'万</e>'+
										'</span>'+
										'<span>'+
											'<b>认购总额</b>'+
											'<e>'+data[i].money_marketings+'万</e>'+
										'</span>'+
									'</p>'+
								'</span>'+
							'</div>'+
							'</a>'
					$('.con_finish').prepend(Finish);	
				}
			}
			var fcount=data.length;//融资完成的项目个数
			var divWidth=$('.finish_main').width()+11;//一个盒子的宽
			var lbWidth=$('.con_finish');
			lbWidth.css('width',fcount*divWidth);
			var moveNum=fcount-4;
			var i=0;
			$('.btn2_left').hide();
			$('.btn2_right').hide();
			if(fcount>4){
				$('.btn2_right').show()
			}else{
				$('.btn2_right').hide()
			}
			$('.btn2_right').bind('click',function(){
				if(i<fcount){
					i++;
					$('.btn2_left').show();
				}
				if(i==fcount){
					$('.btn2_right').hide()
				}
				lbWidth.animate({'marginLeft':-divWidth*i},800)
			})
			$('.btn2_left').bind('click',function(){
				if(i>0){
					i--;
					$('.btn2_right').show();
				}
				if(i==0){
					$('.btn2_left').hide()
				}
				lbWidth.animate({'marginLeft':-divWidth*i},800)
			})
		}
	})
	//即将上线 
	$.ajax({
		type:"post",
		url:"https://www.coucouchina.com/api/index1/Finish",
		dataType:'json',
		async:true,
		success:function(e){
			var data=e.data;
			if(e.code==0){
				for(var j=0;j<data.length;j++){
					var label=data[j].label;
					var label1=label.substring(0,1);
					var label2=label.substring(1,2);
					var html='';
					html='<div class="soon_main">'+
						'<img src="'+data[j].img+'" alt="" />'+
						'<span class="soon_pos"></span>'+
						'<div class="soon_hid"></div>'+
						'<p class="soon_mkf">'+data[j].name+'</p>'+
						'<p class="soon_xt">'+data[j].slogen+'</p>'+
						'<span class="soon_label">'+
							'<b>'+label1+'</b>'+
							'<b>'+label2+'</b>'+
						'</span>'+
						'<p class="soon_qd">敬请期待</p>'+
					'</div>'
					$('.con_soon').append(html)
				}
			}
			var scount=data.length;//即将上线个数
			var boxWidth=$('.soon_main').width()+12.5;//一个盒子的宽度
			var obj=$('.con_soon');//
			obj.css('width',scount*boxWidth);
			var synum=scount-4;//隐藏的个数，可以移动几个			
			var n=0;
			$('.btn3_left').hide()
			if(scount>4){
				$('.btn3_right').show()
			}else{
				$('.btn3_right').hide()

			}

			$('.btn3_right').bind('click',function(){
				if(n<synum){
					n++;
					$('.btn3_left').show()
				}
				if(n==synum){
					$('.btn3_right').hide()
				}
				$('.con_soon').animate({'marginLeft':-boxWidth*n},800);
			});
			$('.btn3_left').bind('click',function(){
				if(n>0){
					n--;
					$('.btn3_right').show()
				}
				if(n==0){
					$('.btn3_left').hide()
				}
				$('.con_soon').animate({'marginLeft':-boxWidth*n},800);
			})
		},
		error:function(data){
			// alert('网站正在维护中，更多精彩内容请下载凑凑APP')
		}
	})								 
})
