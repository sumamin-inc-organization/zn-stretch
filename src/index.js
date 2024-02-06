/*----------------------------
    CSS / スタイリングシート
----------------------------*/
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