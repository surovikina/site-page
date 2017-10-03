'use strict';
var KEYCODE_ENTER = 13;
var KEYCODE_ESC = 27;

var setupOpen = document.querySelector('.email');
var dialog = document.querySelector('.modal-content');
var close = document.querySelector('.modal-content-close');

close.addEventListener('click', function() {
  dialog.classList.add('hidden');
});

setupOpen.addEventListener('click', function() {
  dialog.classList.remove('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE_ENTER) {
    dialog.classList.remove('hidden');
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE_ESC) {
    dialog.classList.add('hidden');
  }
});

$(function(){
  $('.menu-icon').on('click', function(){
    $('.list').slideToggle(0, function(){
      if($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  });
});


var seaAlso = document.querySelector('.sea-also');
var description = document.querySelector('.description');

if(window.matchMedia('(max-width: 908px)').matches)
{
	 seaAlso.parentNode.insertBefore(description, seaAlso);
}
