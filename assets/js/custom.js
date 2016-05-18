 $(function() {
        $('.h1-banner').addClass('rubberBand');
        $(".icons").hover(function () {
        $(this).toggleClass("rotateIn");
     });
       Calendly.initBadgeWidget({url: 'https://calendly.com/sorterbox', text: 'Let&#x27;s schedule a chat', color: '#E84B7D', branding: true});
       
    });