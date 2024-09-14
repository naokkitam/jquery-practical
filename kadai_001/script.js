$(function () {
  $('.header-title').on('mouseover',function(){
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });
  $('.header-title').on('mouseout',function(){
    $(this).animate({
      opacity: 1,
    }, 100);
  });

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    isfinite: true,
    fade: true,
    speed: 1000,
    arrows: false,
  });

  // TOPに戻るボタン
  const pageTop = $("#page-top");
  pageTop.hide();
  $(window).scroll(function (){
    if ($(window).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });


  // リンククリック後、滑らかにスクロール
  $('a[href^="#"]').click(function(event){ //ページ内リンクを絞り込む
    event.preventDefault(); //デフォルトのリンク動作を防ぐ
    const aLink = $(this).attr('href');
    if (aLink == '#') { //トップに戻る場合
      $('html,body').animate(
        { 
          scrollTop: 0,
        }, 500);
    } else {
      const target = $(aLink);
      if (target.length) { //ターゲットが存在するか確認
        $('html,body').animate(
          { 
            scrollTop: target.offset().top,
          }, 500); }
      }
  });

// スクロールでフェードインさせる
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const wscroll = $(window).scrollTop();
    $('.section-block').each(function () {
      const sPosition = $(this).offset().top;
  
      // セクションが画面に入ったらフェードイン
      if (wscroll > sPosition - wHeight + 100) {
        $(this).addClass('active-section'); // フェードイン用のクラスを追加
      } else {
        $(this).removeClass('active-section'); // 画面外に出たらクラスを削除
      }
    });
  });

  // 画像をクリックしたときにモーダルで拡大表示する
  $('.works-img').click(function(){
    const mImgSrc = $(this).attr('src');
    $('.modalImg').attr('src', mImgSrc);
    $('.modal').fadeIn(300);
    $('body,html').css('overflow-y','hidden');
    return false;
  });
  $('.modal-button').click(function(){
    $('.modal').fadeOut(300);
    $('body,html').css('overflow-y','visible');
    return false;
  });
});