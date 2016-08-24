﻿////HOW TO USE
/*
// Regular Version
$('.slider.touch').pagesSliderTouch();

<div class="example">
    <div>Regular Version<div>
    <a name="regular"></a>
    <div class="slider not-touch">
        <div class="content">
            <div class="page"></div>
            <div class="page"></div>
            <div class="page"></div>
            <div class="page"></div>
        </div>
    </div>
</div>


// Touch Version
$('.slider.not-touch').pagesSlider();

<div class="example">
    <div>Touch Version</div>
    <a name="touch"></a>
    <div class="slider touch">
        <div class="content">
            <div class="page"></div>
            <div class="page"></div>
            <div class="page"></div>
            <div class="page"></div>
        </div>
    </div>
</div>

// Needs Hammer.js jquery touch library
// https://github.com/hammerjs/hammer.js

*/
////HOW TO USE END

(function($) {
    var PagesSliderTouch = function (slider, options) {
        this.options = $.extend({
            endDuration: 300
        }, options);

        this.slider = slider;
        this.content = slider.children().first();
        this.currentIndex = 0;
        this.pages = this.content.children();
        this.slider.width(this.pages.first().width());

        var totalWidth = 0;
        this.pages.each(function (index, page) {
            totalWidth += $(page).width();
        });
        this.content.width(totalWidth);

        this.bindEvents();
    };
    $.extend(PagesSliderTouch.prototype, {
        bindEvents: function () {
            this._removeTransition = $.proxy(this.removeTransition, this);
            this._startDrag = $.proxy(this.startDrag, this);
            this._doDrag = $.proxy(this.doDrag, this);
            this._endDrag = $.proxy(this.endDrag, this);

            this.content
                .on('dragstart', this._startDrag)
                .on('transitionend', this._removeTransition);
            $('body')
                .on('drag', this._doDrag)
                .on('dragend', this._endDrag);
        },
        destroy: function () {
            this.content
                .off('dragstart', this._startDrag)
                .off('transitionend', this._removeTransition);
            $('body')
                .off('drag', this._doDrag)
                .off('dragend', this._endDrag);
        },
        startDrag: function (event) {
            this.enableDrag = true;
        },
        doDrag: function (event) {
            if (this.enableDrag) {
                var position = this.pages.eq(this.currentIndex).position();
                var delta = event.gesture.deltaX;

                this.content.css('transform', 'translate3d(' + (delta - position.left) + 'px, 0, 0)');
                event.preventDefault();
            }
        },
        endDrag: function (event) {
            if (this.enableDrag) {
                this.enableDrag = false;

                var delta = event.gesture.deltaX;
                if (Math.abs(delta) > this.slider.width() / 5) {
                    if (delta < 0) {
                        this.next();
                    } else {
                        this.prev();
                    }
                } else {
                    this.current();
                }
            }
        },
        removeTransition: function() {
            this.content.css('transition', 'none');
        },
        goToIndex: function (index) {
            var position = this.pages.eq(index).position();

            this.content
                .css('transition', 'all ' + this.options.endDuration + 'ms ease')
                .css('transform', 'translate3d(' + (-1 * (position.left)) + 'px, 0, 0)');

            this.currentIndex = index;
        },
        current: function () {
            this.goToIndex(this.currentIndex);
        },
        next: function () {
            if (this.currentIndex >= this.pages.length - 1) {
                this.current();
            } else {
                this.goToIndex(this.currentIndex + 1);
            }
        },
        prev: function () {
            if (this.currentIndex <= 0) {
                this.current();
            } else {
                this.goToIndex(this.currentIndex - 1);
            }
        }
    });

    $.fn.pagesSliderTouch = function(options) {
        this.hammer();
        this.each(function(index, slider) {
            var $this = $(slider);
            var pagesSliderTouch = new PagesSliderTouch($this, options);
            $this.data('pagesSliderTouch', pagesSliderTouch);
        });
        return this;
    };
})(jQuery);