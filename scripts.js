$(window).scroll(function() 
		{
		    if ($(this).scrollTop()>200) 
			{ 
			   
		       $('.logo').stop().animate({'width' : '30%', 'height' : '63px'}, 300);
			   $('#pic').stop().animate({'width' : '340px', 'height' : '53px', 'margin-top' : '10px' }, 300);
			}
			else
			{
			   $('.logo').stop().animate({'width' : '50%', 'height' : '240px'}, 300);
			   $('#pic').stop().animate({'width' : '680px', 'height' : '106px', 'margin-top' : '134px'}, 300);
			}
		});
		$(function($) 
		{
		    $.scrollTo(0);
            $('.arrow').click(function() { $.scrollTo($('#oferta'), 600); });
            $('#arrowup').click(function() { $("html, body").animate({ scrollTop: 0 }, 600); });
            $('.arrow2').click(function() { $.scrollTo($('#onas'), 600); });
 
			$(window).scroll(function()
            {
               if($(this).scrollTop()>200) $('#arrowup').fadeIn();
               else $('#arrowup').fadeOut();      
            });
        });
		/*$(document).ready(function() 
		{
		var reg=1;
		var lastScrollTop = 0;
        $(window).scroll(function(event)
		{
            var st = $(this).scrollTop();
            if (st > lastScrollTop)
			{ 
                switch(reg)
				{
					case 1:
					   $.scrollTo($('#oferta'), 700);
					   reg=2;
					break;
				}
            } 
			else
			{   
                switch(reg)
			    {
					case 2:
					   $("html, body").animate({ scrollTop: 0 }, 700);
					   reg=1;
					break;
			    }
            }
            lastScrollTop = st;
        });
        });
*/