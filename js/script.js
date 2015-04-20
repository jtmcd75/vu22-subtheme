jQuery(document).ready(function() {
  jQuery({filterVal: 0}).animate({filterVal: 101}, {
    duration: 1750,
    easing: 'linear',
    step: function() {
      jQuery('.views-view-grid a img').css({
        "-webkit-filter": "grayscale("+this.filterVal+"%)",
        "filter": "grayscale("+this.filterVal+"%)"
      });
    }
  });
});       