/*----------------------------
    CSS / スタイリングシート
----------------------------*/
import "./assets/css/common/animation.css";
import "./assets/css/common/reset.css";
import "./assets/css/common/typography.css";
import "./assets/css/common/utility.css";
import "./assets/css/about.css";
import "./assets/css/area.css";
import "./assets/css/entry.css";
import "./assets/css/flow.css";
import "./assets/css/footer.css";
import "./assets/css/header.css";
import "./assets/css/interview.css";
import "./assets/css/keyvisual.css";
import "./assets/css/navigation.css";
import "./assets/css/point.css";
import "./assets/css/precedent.css";
import "./assets/css/recruit.css";
import "./assets/css/schedule.css";
import "./assets/css/slick.css";

/*----------------------------
    Color change / スクロール位置に応じて色変更
----------------------------*/
$(function () {
	$(window).on('scroll', function () {
		if ($('.fv').height() < $(this).scrollTop()) {
			$('.js-header').addClass('change-color');
	} else {
			$('.js-header').removeClass('change-color');
	}
	});
});

$(function () {
	$(window).on('scroll', function () {
		if ($('.fv').height() < $(this).scrollTop()) {
			$('.js-header').addClass('change-color-2');
	} else {
			$('.js-header').removeClass('change-color-2');
	}
	});
});

$(function () {
	$(window).on('scroll', function () {
		if ($('.fv').height() < $(this).scrollTop()) {
			$('.scroll_01').addClass('scroll_01_af');
	} else {
			$('.scroll_01').removeClass('scroll_01_af');
	}
	});
});

$(function () {
	$(window).on('scroll', function () {
		if ($('.fv').height() < $(this).scrollTop()) {
			$('.scroll_02').addClass('scroll_02_af');
	} else {
			$('.scroll_02').removeClass('scroll_02_af');
	}
	});
});

$(function () {
	$(window).on('scroll', function () {
		if ($('.fv').height() < $(this).scrollTop()) {
			$('.scroll_01').addClass('scroll_02');
	} else {
			$('.scroll_01').removeClass('scroll_02');
	}
	});
});


/*----------------------------
    Navigation / ナビゲーション
----------------------------*/
$(".openbtn2").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
	$("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
	$(".openbtn2").removeClass('active');//ボタンの activeクラスを除去し
	$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

/*----------------------------
    Media / メディア紹介
----------------------------*/

$('.about_slick').slick({
    autoplay: true,
    autoplaySpeed: 2000, //次のスライドショーが動作するまでの間隔
	speed: 400, //スライドが切り替わるのにかかるスピード
    pauseOnHover: false, //スライドの上にマウスを乗せても停止させない
    centerMode: true,
    centerPadding: '13.2%',
    slidesToShow: 2,
    responsive:[{
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            centerPadding: '12.8%',
        }
    }]
});

/*----------------------------
    Timeline / 1日の流れ
----------------------------*/


/*----------------------------
    Slider
    スライダー
----------------------------*/

$(document).ready(function () {
	var $slider = $(".insp-slider");
	var $indicators = $(".indicators .indicator");

	$slider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		nextArrow: document.getElementById("slider-next"),
		prevArrow: document.getElementById("slider-prev"),
		centerMode: true,
		centerPadding:"13.6vw",
		// variableWidth: true,
		responsive:[{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				centerPadding: '20px'
			}
		}]
	});

	// Click event for indicators
	// インジケータのクリックイベント

	$(".indicators .indicator").on("click", function () {
		var slideIndex = $(this).data("slide-index");
		$slider.slick("slickGoTo", parseInt(slideIndex));
	});

	// Click events for navigation buttons
	// ナビゲーションボタンのクリックイベント

	$slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
		$indicators.removeClass("active");
		$indicators.eq(nextSlide).addClass("active");
	});
});

/*----------------------------
    Accordion
    アコーディオン
----------------------------*/
$('.sp_accordion').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".sp_accordion_content");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

/*----------------------------
    Fixed Footer
    固定フッター
----------------------------*/
let scrollTop = 0;
let target = $('#js-floating');   
let displayStart = $('#js-floating-start').offset().top;   
let displayEnd = $('#js-floating-end').offset().top;

    
$(window).scroll(function () {    
  scrollTop = $(this).scrollTop();
  if (displayStart < scrollTop && scrollTop < displayEnd) { 
    $(target).removeClass('is-hidden');
  } else {
    $(target).addClass('is-hidden');
  }
});

/*----------------------------
    Page link
    ページ内リンク
----------------------------*/
$('#page-link a[href*="#"]').click(function() {
	var elmHash = $(this).attr('href');
	var headerHeight = $('header').outerHeight(); // ヘッダーの高さを取得
	var pos = $(elmHash).offset().top - headerHeight - 0; // ヘッダーの高さと余白を考慮した位置を計算
	$('body,html').animate({ scrollTop: pos }, 500);
	return false;
});

/*----------------------------
    Scroll Animation
    スクロールアニメーション
----------------------------*/
// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

	// ふわっ

	$('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
	  }
	  });
  
	$('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
	  var elemPos = $(this).offset().top+50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
	  }
	  });
  
	$('.fadeDownTrigger').each(function(){ //fadeDownTriggerというクラス名が
	  var elemPos = $(this).offset().top+50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('fadeDown');// 画面内に入ったらfadeDownというクラス名を追記
	  }
	  });
  
	$('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
	  }
	  });
  
	$('.fadeRightTrigger').each(function(){ //fadeRightTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
	  }
	  });
	
	// ボンッ
  
	$('.zoomInTrigger').each(function(){ //zoomInTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('zoomIn');// 画面内に入ったらzoomInというクラス名を追記
	  }
	  });
  
	// ヒュッ
	
	$('.zoomOutTrigger').each(function(){ //zoomOutTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('zoomOut');// 画面内に入ったらzoomOutというクラス名を追記
	  }
	  }); 

	//Slide In
	$('.slide-in-bottomTrigger').each(function(){ //bgUDextendTriggerというクラス名が
		var elemPos = $(this).offset().top+50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		  $(this).addClass('slide-in-bottom');// 画面内に入ったらbgUDextendというクラス名を追記
		}
	  });
	
	//Gradient
	$('.bg_gradient_Trigger').each(function(){ //bgUDextendTriggerというクラス名が
		var elemPos = $(this).offset().top+200;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		  $(this).addClass('bg_gradient');// 画面内に入ったらbgUDextendというクラス名を追記
		}
	  });
  
	
  }
  
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
	fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
	fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


	function slideAnime(){
		//====左に動くアニメーションここから===
			$('.leftAnime').each(function(){ 
				var elemPos = $(this).offset().top-50;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll >= elemPos - windowHeight){
					//左から右へ表示するクラスを付与
					//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
					$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
					$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
				}
			});
			
		}
		
		// 画面をスクロールをしたら動かしたい場合の記述
		$(window).scroll(function (){
			slideAnime();/* アニメーション用の関数を呼ぶ*/
		});// ここまで画面をスクロールをしたら動かしたい場合の記述
	
		// 画面が読み込まれたらすぐに動かしたい場合の記述
		$(window).on('load', function(){
			slideAnime();/* アニメーション用の関数を呼ぶ*/
		});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//下線アニメーション
$(window).on('scroll',function(){
	$(".lineAnimation").each(function(){
		let position = $(this).offset().top;
		let scroll = $(window).scrollTop();
		let windowHeight = $(window).height();
		if (scroll > position - windowHeight + 50){
			$(this).addClass('isActive');
		}
	});
});