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

        if($(this).scrollTop()>200) $('#arrowup').fadeIn();
        else $('#arrowup').fadeOut();      
});

$(function($) 
{
	$.scrollTo(0);
    $('.arrow').click(function() { $.scrollTo($('#aboveoferta'), 600); }); 
    $('.arrow2').click(function() { $.scrollTo($('#aboveonas'), 600); });

    $('#arrowup').click(function() { $.scrollTo($('body'), 600); });
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
					   $.scrollTo($('#aboveoferta'), 700);
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