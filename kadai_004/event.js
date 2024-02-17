 // HTML(DOM)読み込みのステージ・・・DOMContentLoadedのタイミング
 // すべてのリソースの完全読み込みを待たなくて発火
 $(function() {
  // scrollイベントを検知させる
  $('.box-parent').on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });
});

// 画像や動画など含めすべてのページにあるリソースが完全に読み込まれた後のステージ
// loadイベントを検知させる（$(function() {}の外側）
 $(window).on('load', () => {
   console.log('loadイベントが発生しました');
});
