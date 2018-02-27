jQuery(document).ready(function($) {

	'use strict';

    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e){
      e.preventDefault();
        var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
    })


	/************** Toggle *********************/
    // Cache selectors
    var topMenuHeight = 80;

    $('#top').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });


    $('.toggle-menu').click(function(){
        $('.menu-first').toggleClass('show');
        // $('.menu-first').slideToggle();
    });

    $('.menu-first li a').click(function(){
      $('.menu-first').removeClass('show');
    });


    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -79 }, 500, 'linear');
    });

});
