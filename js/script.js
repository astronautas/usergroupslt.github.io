$(document).ready(function() {

  var mobileNavigation = {

    init: function() {
      // Add selectors
      this.$navigation = $('.js-mobile-navigation');
      this.$expander   = $('.js-mobile-navigation-expander');

      // Bind this to certain methods (for correct namespace)
      _.bindAll(this, 'expandNavigation');

      // Register events
      this.$expander.on('click', this.expandNavigation);

      return this;
    },

    expandNavigation: function(event) {
      if (this.$expander.hasClass('open')) {
        this.transformHamburger('close');
        this.$expander.removeClass('open');
        this.$navigation.removeClass('is-open');
      } else {
        this.transformHamburger('open');
        this.$expander.addClass('open');
        this.$navigation.addClass('is-open');
      }
    },

    transformHamburger: function(action) {
      var firstMeat  = document.getElementsByClassName('hamburger__meat')[0];
      var secondMeat = document.getElementsByClassName('hamburger__meat')[1];

      // Transform meat (rotate it)
      if (action === 'open') {
       this.$expander.find('.hamburger__top').hide();
       this.$expander.find('.hamburger__bottom').hide();
       firstMeat.style.transform  = 'rotate(45deg)';
       secondMeat.style.transform = 'rotate(-45deg)';
      } else {
       firstMeat.style.transform  = 'rotate(0deg)';
       secondMeat.style.transform = 'rotate(0deg)';
       this.$expander.find('.hamburger__top').show();
       this.$expander.find('.hamburger__bottom').show();       
      }
    },
  };

  mobileNavigation.init();


});