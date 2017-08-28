window.onload=function(){
	setInterval(time,1000)
	function time(){
		var oDate=new Date();
		var oFuture=new Date(2017,11,1);
		var timec=oDate.getTime();
		var total=parseInt((oFuture-oDate)/1000);
		var day=parseInt(total/86400);
		total%=86400;
		var hour=parseInt(total/3600);
		total%=3600;
		var fen=parseInt(total/60)
		total%=60;
		var s=total;
		djs.innerHTML=day+'<b>天</b>'+hour+'<b>小时</b>'+fen+'<b>分</b>'+'<b style="color:#B981D1;margin:0;">'+s+'</b>'+'<b>秒</b>';
	}
	time();
	function tDub(n){
		return n<10?'0'+n:''+n
	}
}