var map = new AMap.Map('container', {
        resizeEnable: true
    });
    //设置城市
    AMap.event.addDomListener(document.getElementById('query'), 'click', function() {
        var cityName = document.getElementById('cityName').value;
        if (!cityName) {
            cityName = '北京市';
        }
        map.setCity(cityName);
    });
  $('#map span').click(function(){
  	  $('#mmpp').show();
  });
  $('#mmpp').click(function(){
  	   $(this).hide();
  });
  $('#container,.button-group').click(function(e){
  	   e.stopPropagation();
  })
$('.header_a1').click(function(){
	$('.tab').show();
});
$('.tab_close').click(function(){
	$('.tab').hide();
});
var zm=document.querySelectorAll('.zm');
var tab_adress=document.querySelectorAll('.tab_adress');
for (var i = 0; i < zm.length; i++) {
	zm[i].index=i;
	zm[i].onclick=function(){
		for (var j = 0; j < tab_adress.length; j++) {
			tab_adress[j].style.display="none";
			zm[j].style.border="none";
			zm[j].style.borderBottom="1px solid gray";
			zm[j].style.color="black";
		}
		tab_adress[this.index].style.display="block";
		zm[this.index].style.border="1px solid gray";
		zm[this.index].style.borderBottom="none";
		zm[this.index].style.color="red";
	}
}
for (var i in $('.as a')) {	
	$('.as a').eq(i).click(function(){
		  $('.city').html($(this).html());
	})
}
for(var i in $('.tab_adress a')){
    $('.tab_adress a').eq(i).click(function(){
    	$('.city').html($(this).html())
    })
}
/****************轮播图**********************/
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: true,
	autoplay: 1000
});
  // 
  var moli=document.querySelectorAll('.mo li');
  for (var i = 0; i < moli.length; i++) {
  	moli[i].index=i;
  	moli[i].onclick=function(){
  		for (var j = 0; i < moli.length; j++) {
  			moli[j].style.border="0px solid gray";
  		}
  		moli[this.index].style.border="1px solid gray";
  		moli[this.index].style.boxSizing="border-box";
  	}
  }
//调取商铺数据 

	var xhr= new XMLHttpRequest();
	xhr.open('get','/data/1.json');
	xhr.send(null);
	xhr.onreadystatechange=function(){
		if ((xhr.status==200||xhr.status==304)&&xhr.readyState==4) {
			var obj=JSON.parse(xhr.responseText);		
			var obj=obj.shop_data;
			// console.log(obj);
			for(var i in obj){
				var li=document.createElement('li');
				var ul=document.createElement('ul');
				li.innerHTML='<div><a href="javascript:void(0)">+<img src="'+obj[i].shop_ico+'"></a></div><div class="jieshao"><p><a href="javascript:void(0)">'+obj[i].shop_name+'</a> 店铺等级：<img src="images/37.png" alt=""><img src="images/37.png" alt=""><img src="images/37.png" alt=""></p><p>主营：'+obj[i].main+'</p><p>地址：'+obj[i].addr_detail+'</p></div><div class="renqi"><p><img src="images/37.png" alt="">先行赔付</p><p><img src="images/37.png" alt="">同城帮认证</p><p>人气：34082次浏览</p><p class="jin"><a href="javascript:void(0)">进入店铺</a></p></div>'
				ul.className="shuju";
				ul.appendChild(li);		    
			    document.querySelector('.yin').appendChild(ul);
			}
		}
	}


//调取商家好评数据
var aj= new XMLHttpRequest();
aj.open('get','data/2.json');
aj.send(null);
aj.onreadystatechange=function(){
	if ((aj.status==200||aj.status==304)&&aj.readyState==4) {
		var obj=JSON.parse(aj.responseText);
		console.log(obj);		
		var obj=obj.shop_data;
		// console.log(obj);
         for(var i=1;i<obj.length;i++){         
         	var li=document.createElement('li');
         	var ul=document.createElement('ul');
         	ul.className="num";  
         	if (i>6) {
         		document.querySelector('.num_1').className="num_2";
         	}        	
         	li.innerHTML='<div class="num_1">'+i+'</div><div><img src="'+obj[i].shop_ico+'"></div><div><a href="javascript:void(0)">'+obj[i].shop_name+'</a><p>'+obj[i].shop_visit+'条评论</p></div>';
            ul.appendChild(li);
            document.querySelector('.right').appendChild(ul);
         }
    }
}
//点击登录屏幕显现
$('.dlu').click(function(){
	$('.mask_1').show();
});
//点击X关闭黑屏
$('.mask_1_box .box_top mark').click(function(){
	$('.mask_1').hide();
})
//点击注册屏幕显现
$('.zce').click(function(){
	$('.mask_2').show();
});
$('.mask_2_box .box_top mark').click(function(){
	$('.mask_2').hide();
})
//点击立即登录按钮触发事件
$('#denglu_btn').click(function(){
	var xhr=new XMLHttpRequest();
	xhr.open('post',"");
	xhr.setRequestHeader('Content-type',application/x-www-form-urlencoded);
	xhr.send("username="+$('#box_name').val()+'&password='+$('box_password').val());
	xhr.onreadystatechange=function(){
		if ((xhr.status==200||xhr.status==304)&&xhr.readyState==4) {
			var obj=JSON.parse(xhr.responseText);
		    console.log(obj);
		}
	}
})
  