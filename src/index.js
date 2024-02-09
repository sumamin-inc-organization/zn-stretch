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
    Timeline / 1日の流れ
----------------------------*/
//線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime(){
	$('.timeline li').each(function(){// それぞれのli要素の
		var elemPos = $(this).offset().top;// 上からの高さ取得
		var scroll = $(window).scrollTop();// スクロール値取得
		var windowHeight = $(window).height();// windowの高さ取得
		var startPoint = 500; //線をスタートさせる位置を指定※レイアウトによって調整してください
		if (scroll >= elemPos - windowHeight-startPoint){				
			var H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
			//スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
			var percent = (scroll+startPoint - elemPos) / (H/2) *100;//liの余白と高さの半分で線を100％に伸ばす

			// 100% を超えたらずっと100%を入れ続ける
			if(percent  > 100){
				percent  = 98;
			}
			// ボーダーの長さをセット
			$(this).children('.border-line').css({
				height: percent + "%", //CSSでパーセント指定
			});
		} 
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function(){
	ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
	ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});

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
//フロートボタンを特定の位置から特定の位置まで表示させる
$(window).on('load',function(){//頁内の全ての要素が読み込まれてから実行
  //ドキュメント全体の高さ
  var pageHeight = $(document).height();
  //頁上部から最初のCTAボタンまでの距離 ＋ CTAボタンの高さ(outerHeight:ボーダーの外側の高さ)
  var ctaFirst = $('#keyvisual').offset().top + $('#keyvisual').outerHeight();
  //ドキュメント全体の高さ - 頁上部から最後のCTAボタンまでの距離
  var ctaLast = pageHeight - $('#entry').offset().top;

  $(window).on('scroll',function(){//スクロールすると実行される
    //現在のトップからの位置 ＝ ウィンドウの高さ ＋ スクロールした高さ
    var scrollPosition = $(window).height() + $(window).scrollTop();
    //スクロールが最初のCTAボタンを超える＆最後のCTAボタンを超えない場合
    if ($(window).scrollTop() > ctaFirst && pageHeight - scrollPosition  >= ctaLast) {
      $('.floatBtn').fadeIn(100);//0.1秒で出現
    } else {//最初のCTAボタンを超えない＆最後のCTAボタンを超えた場合
      $('.floatBtn').fadeOut(100);//0.1秒で消える
    }
  });
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

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

	// ふわっ

	$('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
	  }else{
	  $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
	  }
	  });
  
	$('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
	  var elemPos = $(this).offset().top+50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
	  }else{
	  $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
	  }
	  });
  
	$('.fadeDownTrigger').each(function(){ //fadeDownTriggerというクラス名が
	  var elemPos = $(this).offset().top+50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('fadeDown');// 画面内に入ったらfadeDownというクラス名を追記
	  }else{
	  $(this).removeClass('fadeDown');// 画面外に出たらfadeDownというクラス名を外す
	  }
	  });
  
	$('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
	  }else{
	  $(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
	  }
	  });
  
	$('.fadeRightTrigger').each(function(){ //fadeRightTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
	  }else{
	  $(this).removeClass('fadeRight');// 画面外に出たらfadeRightというクラス名を外す
	  }
	  });
  
	// パタッ
  
	$('.flipDownTrigger').each(function(){ //flipDownTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('flipDown');// 画面内に入ったらflipDownというクラス名を追記
	  }else{
	  $(this).removeClass('flipDown');// 画面外に出たらflipDownというクラス名を外す
	  }
	  });
	
	$('.flipLeftTrigger').each(function(){ //flipLeftTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('flipLeft');// 画面内に入ったらflipLeftというクラス名を追記
	  }else{
	  $(this).removeClass('flipLeft');// 画面外に出たらflipLeftというクラス名を外す
	  }
	  });
  
	$('.flipLeftTopTrigger').each(function(){ //flipLeftTopTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('flipLeftTop');// 画面内に入ったらflipLeftTopというクラス名を追記
	  }else{
	  $(this).removeClass('flipLeftTop');// 画面外に出たらflipLeftTopというクラス名を外す
	  }
	  });
  
	$('.flipRightTrigger').each(function(){ //flipRightTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('flipRight');// 画面内に入ったらflipRightというクラス名を追記
	  }else{
	  $(this).removeClass('flipRight');// 画面外に出たらflipRightというクラス名を外す
	  }
	  });
  
	$('.flipRightTopTrigger').each(function(){ //flipRightTopTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('flipRightTop');// 画面内に入ったらflipRightTopというクラス名を追記
	  }else{
	  $(this).removeClass('flipRightTop');// 画面外に出たらflipRightTopというクラス名を外す
	  }
	  });
	
	// くるっ
  
	$('.rotateXTrigger').each(function(){ //rotateXTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('rotateX');// 画面内に入ったらrotateXというクラス名を追記
	  }else{
	  $(this).removeClass('rotateX');// 画面外に出たらrotateXというクラス名を外す
	  }
	  });
  
	$('.rotateYTrigger').each(function(){ //rotateYTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('rotateY');// 画面内に入ったらrotateYというクラス名を追記
	  }else{
	  $(this).removeClass('rotateY');// 画面外に出たらrotateYというクラス名を外す
	  }
	  });
  
	$('.rotateLeftZTrigger').each(function(){ //rotateLeftZTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('rotateLeftZ');// 画面内に入ったらrotateLeftZというクラス名を追記
	  }else{
	  $(this).removeClass('rotateLeftZ');// 画面外に出たらrotateLeftZというクラス名を外す
	  }
	  });
	
	$('.rotateRightZTrigger').each(function(){ //rotateRightZTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('rotateRightZ');// 画面内に入ったらrotateRightZというクラス名を追記
	  }else{
	  $(this).removeClass('rotateRightZ');// 画面外に出たらrotateRightZというクラス名を外す
	  }
	  }); 
	
	// ボンッ
  
	$('.zoomInTrigger').each(function(){ //zoomInTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('zoomIn');// 画面内に入ったらzoomInというクラス名を追記
	  }else{
	  $(this).removeClass('zoomIn');// 画面外に出たらzoomInというクラス名を外す
	  }
	  });
  
	// ヒュッ
	
	$('.zoomOutTrigger').each(function(){ //zoomOutTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('zoomOut');// 画面内に入ったらzoomOutというクラス名を追記
	  }else{
	  $(this).removeClass('zoomOut');// 画面外に出たらzoomOutというクラス名を外す
	  }
	  }); 
	
	// じわっ
	
	$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
	  }else{
	  $(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
	  }
	  }); 
	
	// にゅーん
	
	$('.smoothTrigger').each(function(){ //smoothTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('smooth');// 画面内に入ったらsmoothというクラス名を追記
	  }else{
	  $(this).removeClass('smooth');// 画面外に出たらsmoothというクラス名を外す
	  }
	  }); 
	  
	// スーッ（枠線が伸びて出現）
	  
	$('.lineTrigger').each(function(){ //lineTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
		$(this).addClass('lineanime');// 画面内に入ったらlineanimeというクラス名を追記
	  }else{
		$(this).removeClass('lineanime');// 画面外に出たらlineanimeというクラス名を外す
	  }
	}); 
	  
	
	// シャッ（背景色が伸びて出現）
	
	$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
		$(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
	  }else{
		$(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
	  }
	}); 
	
	$('.bgRLextendTrigger').each(function(){ //bgRLextendTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
		$(this).addClass('bgRLextend');// 画面内に入ったらbgRLextendというクラス名を追記
	  }else{
		$(this).removeClass('bgRLextend');// 画面外に出たらbgRLextendというクラス名を外す
	  }
	});
	
	$('.bgDUextendTrigger').each(function(){ //bgDUextendTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
		$(this).addClass('bgDUextend');// 画面内に入ったらbgDUextendというクラス名を追記
	  }else{
		$(this).removeClass('bgDUextend');// 画面外に出たらbgDUextendというクラス名を外す
	  }
	});
	
	$('.bgUDextendTrigger').each(function(){ //bgUDextendTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
		$(this).addClass('bgUDextend');// 画面内に入ったらbgUDextendというクラス名を追記
	  }else{
		$(this).removeClass('bgUDextend');// 画面外に出たらbgUDextendというクラス名を外す
	  }
	}); 
	
	$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
		$(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
	  }else{
		$(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
	  }
	}); 
	
	$('.bgUDextendTrigger').each(function(){ //bgUDextendTriggerというクラス名が
	  var elemPos = $(this).offset().top-50;//要素より、50px上の
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
		$(this).addClass('bgUDextend');// 画面内に入ったらbgUDextendというクラス名を追記
	  }else{
		$(this).removeClass('bgUDextend');// 画面外に出たらbgUDextendというクラス名を外す
	  }
	});

	//Slide In
	$('.slide-in-bottomTrigger').each(function(){ //bgUDextendTriggerというクラス名が
		var elemPos = $(this).offset().top+50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		  $(this).addClass('slide-in-bottom');// 画面内に入ったらbgUDextendというクラス名を追記
		}else{
		  $(this).removeClass('slide-in-bottom');// 画面外に出たらbgUDextendというクラス名を外す
		}
	  });
	
	//Gradient
	$('.bg_gradient_Trigger').each(function(){ //bgUDextendTriggerというクラス名が
		var elemPos = $(this).offset().top+200;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		  $(this).addClass('bg_gradient');// 画面内に入ったらbgUDextendというクラス名を追記
		}else{
		  $(this).removeClass('bg_gradient');// 画面外に出たらbgUDextendというクラス名を外す
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
  