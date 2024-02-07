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
            centerPadding: '20px'
        }
    }]
});