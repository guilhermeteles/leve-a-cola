$(".square").keyup(function() {
    if (this.value.length == this.maxLength) {
      var $next = $(this).next('.square');
      if ($next.length) {
        $(this).next('.square').focus();
      } else {
        $(this).blur();
      }
    }
    //***** Delete Check *****//
    if (this.value.length == 0)
      $(this).prev('.square').focus();
  });