void function ($) {
    var Fullscreen = function () {
      this.tmpl = '<div class="fullscreen"></div>';
    };
    Fullscreen.prototype = {
      open: function () {
        $('body')
          .addClass('modal')
          .append(this.tmpl);

        $(window)
          .on('scroll', function (e) {
            if ($('body').hasClass('modal')) {
              e.preventDefault();
            }
          });
        $('body').bind('touchmove', function (e) {
          if ($('body').hasClass('modal')) {
            e.preventDefault();
          }
        });
      }
    };

    var lam_fullscreen = new Fullscreen();



  $.fn.swiper = function (options) {
    var options = options || {};

    this.each(function () {
      var $this = $(this),
          swiper_cache, swiper, current_el, total_el;

      if (options.custom_slide) {
        $this.find('div:first').append('<div class="custom_slide" style="display: none;"></div>')
          .on('click', '.custom_slide', function (e) {
            options.custom_slide(swiper);
            return false;
          });

      }

      swiper_cache = $this.clone();

      $this.append('<div class="slideshow-counter"><span class="current"></span> / <span class="total"></span></div>');
      current_el = $this.find('.current');
      total_el = $this.find('.total');

      swiper = new Swipe(this, {
        callback: show_current_value
      });

      show_current_value();
      total_el.text(swiper.length + (options.custom_slide ? -1 : 0));

      if (options.fullscreen !== false) {
        $this.on('click', function () {
          var fullscreen_swiper, fl_sw;

          lam_fullscreen.open();

          fullscreen_swiper = swiper_cache.clone();

          $('.fullscreen')
            .on('click', function () {
              $('.fullscreen').remove();
              $('body').removeClass('modal');
            })
            .on('click', '.custom_slide', function (e) {
              options.custom_slide(fl_sw);
              return false;
            })
            .append(fullscreen_swiper);

          fl_sw = new Swipe(fullscreen_swiper.get(0), {
            startSlide: swiper.getPos(),
            callback: function (event, index, elem) {
              swiper.slide(index);
            }
          });
        });
      }

      function show_current_value () {
        var pos = swiper.getPos(),
            length = swiper.length - (options.custom_slide ? 2 : 1);

        current_el.text(((pos <= length) ? pos : length) + 1);
      }
    });

  };
} (jQuery);
