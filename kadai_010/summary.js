//==========================================
// 課題10　ボタンクリックで文字列を
// 　　様々な形式で表示するプログラムを作ろう
//==========================================

// 変化させる色、文字の定義
const textColors = ['black', 'red', 'gray', 'blue'];
const textStrings= ['こんにちは！', 'Hello!', 'Hola!'];
const nColors = textColors.length;  // 色要素数
const nStrings = textStrings.length;  // 文字内容数
let colorChanged = 0; // 色変化指示数（0回）
let textChanged = 0;  // 文字変化指示数（0回）
let isPresent = true; // 表示状態（表示状態）

// HTML(DOM)準備完了
$(function() {
 // 文字色変化ボタンクリック 
  $('#change-color').on('click', function() {
    colorChanged++;
    // 文字色を変化させる
    $('#target').css('color', textColors[colorChanged % nColors]);
  });
  // 文字内容変化ボタンクリック 
  $('#change-text').on('click', function() {
    // 文字内容を変化させる
    textChanged++;
    $('#target').text(textStrings[textChanged % nStrings]);
  });
  // フェードアウトボタンクリック
  $('#fade-out').on('click', function() {
    // 表示中のときにフェードアウトする
    if (isPresent === true) {
      $('#target').fadeOut();
      isPresent = false;
    }
  });
  // フェードインボタンクリック
  $('#fade-in').on('click', function() {
    // 非表示中のときフェードインする
    if (isPresent === false) {
      $('#target').fadeIn();
      isPresent = true;
    }
  });
});

// EOF