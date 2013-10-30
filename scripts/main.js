$(function() {

  'use strict';

  var $navBar = $('nav');

  // If touchscreen listen for touch, if not listen for click
  var hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

  // Toggle the nav menu list when the user clicks the nav menu button
  $('.menu').on(hitEvent, function () {
    $navBar.toggleClass('nav-show');
  });

  $('.content').on(hitEvent, function(event) {
    if ($navBar.hasClass('nav-show')) {
      $navBar.removeClass('nav-show');
    }
  });


  //Desobfusca email
  $(function() {
   $('a[href^="mailto:"]').each(function() {
    this.href = this.href.replace('(aaa)', '@').replace(/\(pontoo\)/g, '.');
    // Remove this line if you don't want to set the email address as link text:
    // this.innerHTML = this.href.replace('mailto:', '');
   });
  });


  // Inverte a ordem dos itens da página o que estou lendo
  var reading = [];
  $('.reading-item').each(function(index, el) {
    var elHtml = $(el).clone().wrap('<div>').parent().html();
    // var elHtml = $(el).html();
    reading.push(elHtml);
  });
    console.log('reading:' + reading);

  $('.reading-list').html('');

  for (var i = reading.length - 1; i >= 0; i--) {
    $('.reading-list').append(reading[i]);
    // reading[i]
  }
  reading = undefined;

});