/* 인트로 */
$(document).ready(function(){	
	var width = $(window).width();

	if( width >= 769 ){
		var autoHeight = $(".intro").height() - 200;
		var autoWidth = $(".intro").width() - 370;

		//경문
		$(".intro .kyungmun").hover(function(){				
			$(this).stop().animate({height:autoHeight, "z-index":99},300);
		},function(){			
			$(this).stop().animate({height:"200px", "z-index":0},300);
		});

		//겜맥
		$(".intro .gamqric_wrap .gammac").hover(function(){
			$(this).stop().animate({width:autoWidth, "z-index":99},300);
			$(".intro .gamqric_wrap .qric").stop().animate({width:"370px"},300);
			$(".intro .gamqric_wrap .qric a").hide();
			$(".intro .gamqric_wrap .qric .logo").stop().animate({"padding-top":"10%"},300);
			$(".intro .gamqric_wrap .gammac .logo_btn").removeClass("on");
			$(this).find(".txt").stop().animate({opacity:1},550);
		},function(){
			$(this).stop().animate({width:"50%", "z-index":0},300);
			$(".intro .gamqric_wrap .qric").stop().animate({width:"50%"},300);
			$(".intro .gamqric_wrap .qric a").show();
			$(".intro .gamqric_wrap .qric .logo").stop().animate({"padding-top":0},300);
			$(".intro .gamqric_wrap .gammac .logo_btn").addClass("on");
			$(this).find(".txt").stop().animate({opacity:0},550);
		});

		//큐릭
		$(".intro .gamqric_wrap .qric").hover(function(){
			$(this).stop().animate({width:autoWidth, "z-index":99},300);
			$(".intro .gamqric_wrap .gammac").stop().animate({width:"370px"},300);
			$(".intro .gamqric_wrap .gammac a").hide();
			$(".intro .gamqric_wrap .gammac .logo").stop().animate({"padding-top":"10%"},300);
			$(".intro .gamqric_wrap .qric .logo_btn").removeClass("on");
			$(this).find(".txt").stop().animate({opacity:1},550);
		},function(){
			$(this).stop().animate({width:"50%", "z-index":0},300);
			$(".intro .gamqric_wrap .gammac").stop().animate({width:"50%"},300);
			$(".intro .gamqric_wrap .gammac a").show();
			$(".intro .gamqric_wrap .gammac .logo").stop().animate({"padding-top":0},300);
			$(".intro .gamqric_wrap .qric .logo_btn").addClass("on");
			$(this).find(".txt").stop().animate({opacity:0},550);
		});		
	}
});

/* 헤더 - 즐겨찾기 */
$(document).ready(function(){
	//pc
	$("header .top_menu ul li a").click(function(){
		if( $(this).find("i").hasClass("xi-star-o") ){
			$(this).find("i").attr("class","xi-star");
		}else{
			$(this).find("i").attr("class","xi-star-o");
		}
	});

	//m
	$(".all_gnb .ul_m li a").click(function(){
		if( $(this).find("i").hasClass("xi-star-o") ){
			$(this).find("i").attr("class","xi-star");
		}else{
			$(this).find("i").attr("class","xi-star-o");
		}
	});
});

/* 헤더 - 주메뉴 */
$(document).ready(function(){
	$(window).on("scroll", function(){
		var scTop = $(window).scrollTop();
		var hTop = $("header .bottom_menu").height();

		if(scTop >= hTop){
			$("header .bottom_menu").addClass("act");
			$(".all_gnb_bg").addClass("act");
		}else{
			$("header .bottom_menu").removeClass("act");
			$(".all_gnb_bg").removeClass("act");
		}
	});
});

/* 헤더 - 전체메뉴 - pc */
$(document).ready(function(){
	var width = $(window).width();

	if( width >= 769 ){
		$("header .bottom_menu .all_menu_ico").click(function(){
			$(this).removeClass("act");
			$(".all_gnb").css("display","none");
			$(".all_gnb_bg").css("display","none");		
			$(".quick").animate({right:"-70px"},200);
			$("html,body").off("scroll touchmove mousewheel");
		});

		$("header .bottom_menu .all_menu_ico").on('mouseover',function(){
			$(this).addClass("act");
			$(".all_gnb").css("display","block");
			$(".all_gnb_bg").css("display","block");
			$(".quick").animate({right:"-110px"},200);
			$(".quick .q_top").animate({left:0,"margin-left":0},200);
			$(".quick .btn_open i").attr("class","xi-angle-left-min");
			$("html,body").on("scroll touchmove mousewheel", function(event) {
			  event.preventDefault();
			  event.stopPropagation();
			  return false;
			});
		});

		$(".all_gnb .close").click(function(){
			$(".all_gnb").css("display","none");
			$(".all_gnb_bg").css("display","none");
			$("header .bottom_menu .all_menu_ico").removeClass("act");
			$(".quick").animate({right:"-70px"},200);
			$("html,body").off("scroll touchmove mousewheel");
			return false;
		});

		$(".all_gnb_bg").click(function(){
			$(this).css("display","none");
			$(".all_gnb").css("display","none");
			$(".all_gnb_bg").css("display","none");
			$("header .bottom_menu .all_menu_ico").removeClass("act");
			$(".quick").animate({right:"-70px"},200);
			$("html,body").off("scroll touchmove mousewheel");
		});
	}
});

/* 헤더 - 전체메뉴 - m */
$(document).ready(function(){
	var width = $(window).width();

	if( width < 769 ){
		$("header .bottom_menu .all_menu_ico").click(function(){
			if( $(this).hasClass("act") ){
				$(this).removeClass("act");
				$(".all_gnb").css("display","none");
				$(".all_gnb_bg").css("display","none");
				$(".quick").animate({right:"-110px"},200);
				$("html,body").off("scroll touchmove mousewheel");
			}else{
				$(this).addClass("act");
				$(".all_gnb").css("display","block");
				$(".all_gnb_bg").css("display","block");
				$(".quick").animate({right:"-110px"},200);
				$("html,body").on("scroll touchmove mousewheel", function(event) {
				  event.preventDefault();
				  event.stopPropagation();
				  return false;
				});
			}
			 return false;
		});

		$(".all_gnb .close").click(function(){
			$(".all_gnb").css("display","none");
			$(".all_gnb_bg").css("display","none");
			$("header .bottom_menu .all_menu_ico").removeClass("act");
			$(".quick").animate({right:"-110px"},200);
			$("html,body").off("scroll touchmove mousewheel");
			return false;
		});

		$(".all_gnb_bg").click(function(){
			$(this).css("display","none");
			$(".all_gnb").css("display","none");
			$(".all_gnb_bg").css("display","none");
			$("header .bottom_menu .all_menu_ico").removeClass("act");
			$(".quick").animate({right:"-110px"},200);
			$("html,body").off("scroll touchmove mousewheel");
		});
	}
});

/* 퀵메뉴 - pc */
$(document).ready(function(){
	var width = $(window).width();

	if( width >= 769 ){
		$(".quick .btn_open").click(function(){
			if( $(this).find("i").hasClass("xi-angle-left-min") ){
				$(this).find("i").attr("class","xi-angle-right-min");
				$(".quick").animate({right:0},200);
				$(".quick .q_top").animate({left:"50%","margin-left":"-20px"},200);

				return false;
			}else{
				$(this).find("i").attr("class","xi-angle-left-min");
				$(".quick").animate({right:"-70px"},200);
				$(".quick .q_top").animate({left:0,"margin-left":0},200);

				return false;
			}
		});
	}
});

/* 퀵메뉴 - m */
$(document).ready(function(){
	var width = $(window).width();

	if( width < 769 ){
		$(".quick .btn_open").click(function(){
			if( $(this).find("i").hasClass("xi-angle-left-min") ){
				$(this).find("i").attr("class","xi-angle-right-min");
				$(".quick").animate({right:0},200);
				$(".quick .q_top").animate({left:"50%","margin-left":"-20px"},200);
				$("header .bottom_menu .all_menu_ico").removeClass("act");
				$(".all_gnb").css("display","none");
				$(".all_gnb_bg").css("display","none");			
				$("html,body").off("scroll touchmove mousewheel");

				return false;
			}else{
				$(this).find("i").attr("class","xi-angle-left-min");
				$(".quick").animate({right:"-110px"},200);
				$(".quick .q_top").animate({left:0,"margin-left":0},200);

				return false;
			}
		});
	}
});

/* 탑버튼 */
$(document).ready(function(){
	$(".quick .q_top a").click(function(){
		$("html, body").stop().animate({scrollTop:0},350);
	});
});

/* 헤더광고 */
$(document).ready(function(){
	$(".head_ad_inn ul .close").click(function(){
		$("body").stop().animate({"margin-top":"-100px"},300);
	});
});

/* 메인비쥬얼 - pc */
$(document).ready(function(){
	var carousel = $("#carousel").waterwheelCarousel({
	flankingItems: 2,
	autoPlay : 4000,
	keyboardNav: true,
	separation: 350,
	pageNav: true,
	sizeMultiplier:.9,
	linkHandling: 1
	});
	
	$("#carousel button.prev").bind("click", function () {
	carousel.prev();
	return false
	});
	
	$("#carousel button.next").bind("click", function () {
	carousel.next();
	return false;
	});

});

/* 메인비쥬얼 - m */
$(document).ready(function(){
	$(".slick_visual").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		infinite: true
	});	
});

/* 제품 슬라이드 - pc */
$(document).ready(function(){	
	$(".pdt_slide01.pc").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true
	});	
});

/* 제품 슬라이드 - m */
$(document).ready(function(){	
	$(".pdt_slide01.mob").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		infinite: true
	});
});

/* 리뷰 슬라이드 - pc */
$(document).ready(function(){
	var width = $(window).width();

	if( width >= 769 ){
		$(".pdt_slide02").slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			infinite: true
		});
	}
});

/* 리뷰 슬라이드 - m */
$(document).ready(function(){
	var width = $(window).width();

	if( width < 769 ){
		$(".pdt_slide02").slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			dots: false,
			arrows: false,
			infinite: true
		});	
	}
});