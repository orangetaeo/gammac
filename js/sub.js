/* 페이지버튼 */
$(document).ready(function(){
	$(".paging ul li a.page").click(function(){
		$(".paging ul li a.page").removeClass("on");
		$(this).addClass("on");
	});
});

/* 제품 하위분류 */
$(document).ready(function(){
	$(".product_tab ul li").click(function(){
		$(".product_tab ul li").removeClass("on");
		$(this).addClass("on");
	});
});

/* 제품리스트 */
$(document).ready(function(){
	$(".product li").hover(function(){
		$(this).find(".hover").css('opacity','1');
	},function(){
		$(this).find(".hover").css('opacity',0);
	});
});

/* 제품하위분류 탭 */
$(document).ready(function(){
	$(".product_list .product .pdt").hide();
	$(".product_list .product .pdt").eq(0).show();

	$(".product_tab ul li").click(function(){
		$(".product_list .product .pdt").hide();
		$(".product_tab ul li").removeClass("on");
		$(this).addClass("on");

		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();

		return false;
	});
});

/* 팝업창 닫기 */
$(document).ready(function(){
	$(".pop_close").click(function(){
		window.close();
	});
});

/* 베스트리뷰 슬라이드 - pc */
$(document).ready(function(){
	var width = $(window).width();

	if( width >= 769 ){
		$(".best_reivw_slide").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			infinite: true
		});
	}
});


/* faq */
$(document).ready(function(){
	var acodian = {
	  click: function(target) {
		var _self = this,
		  $target = $(target);
		$target.on('click', function() {
		  var $this = $(this);
		  if ($this.next('.faq > ul > li .faq_a').css('display') == 'none') {
			$('.faq > ul > li .faq_a').slideUp();
			_self.onremove($target);

			$this.parent().addClass('open');
			$this.next().slideDown();

		  } else {
			$('.faq > ul > li .faq_a').slideUp();
			_self.onremove($target);

		  }
		});
	  },
	  onremove: function($target) {
		$target.parent().removeClass('open');
	  }

	};
	acodian.click('.faq > ul > li .faq_q');
});

