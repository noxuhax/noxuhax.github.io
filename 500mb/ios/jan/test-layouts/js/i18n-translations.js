var I18n = I18n || {};
I18n.translations = {"en":{"activerecord":{"errors":null},"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"}},"ru":{"activerecord":{"errors":{"models":{"comment":{"user_blocked":"\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438, \u0442.\u043a. \u0412\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d.","user_not_actived":"\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438, \u0442.\u043a. \u0412\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0435\u0449\u0435 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d.","commentable_unpublished":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0431\u044b\u043b\u0430 \u0441\u043d\u044f\u0442\u0430 \u0441 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0438 \u0435\u0451 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0435 \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e.","commentable_not_published":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0435\u0449\u0435 \u043d\u0435 \u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0430 \u0438 \u0435\u0451 \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e.","not_commentable":"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u043a \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u043f\u043e\u0441\u0442\u0443 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0438 \u0435\u0451 \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e.","body_must_not_repeat":"\u041d\u0435\u043b\u044c\u0437\u044f \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438.","not_enough_rating":"\u0423 \u0412\u0430\u0441 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0430, \u0447\u0442\u043e\u0431\u044b \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438.","attributes":{"user_id":{"blank":"\u041d\u0435\u043b\u044c\u0437\u044f \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439."},"body":{"blank":"\u041d\u0435\u043b\u044c\u0437\u044f \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438."}}}}}},"counting":{"years_old":{"one":"\u0433\u043e\u0434","few":"\u0433\u043e\u0434\u0430","many":"\u043b\u0435\u0442"},"people":{"one":"\u0447\u0435\u043b\u043e\u0432\u0435\u043a","few":"\u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430","many":"\u0447\u0435\u043b\u043e\u0432\u0435\u043a"},"going":{"one":"\u043f\u043e\u0439\u0434\u0435\u0442","few":"\u043f\u043e\u0439\u0434\u0443\u0442","many":"\u043f\u043e\u0439\u0434\u0443\u0442"},"posts":{"one":"\u043f\u043e\u0441\u0442","few":"\u043f\u043e\u0441\u0442\u0430","many":"\u043f\u043e\u0441\u0442\u043e\u0432"},"other_looks":{"one":"\u0415\u0449\u0435 \u043e\u0434\u0438\u043d \u043b\u0443\u043a","few":"\u0414\u0440\u0443\u0433\u0438\u0435 \u043b\u0443\u043a\u0438","many":"\u0414\u0440\u0443\u0433\u0438\u0435 \u043b\u0443\u043a\u0438"},"looks":{"one":"\u043b\u0443\u043a","few":"\u043b\u0443\u043a\u0430","many":"\u043b\u0443\u043a\u043e\u0432"},"events":{"one":"\u0441\u043e\u0431\u044b\u0442\u0438\u0435","few":"\u0441\u043e\u0431\u044b\u0442\u0438\u044f","many":"\u0441\u043e\u0431\u044b\u0442\u0438\u0439"},"galleries":{"one":"\u0433\u0430\u043b\u0435\u0440\u0435\u044f","few":"\u0433\u0430\u043b\u0435\u0440\u0435\u0438","many":"\u0433\u0430\u043b\u0435\u0440\u0435\u0439"},"posts_unpublished":{"one":"\u043d\u0435\u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0439","few":"\u043d\u0435\u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0445","many":"\u043d\u0435\u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0445"},"materials":{"one":"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b","few":"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430","many":"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432"},"published_versions":{"one":"\u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","few":"\u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","many":"\u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0439"},"views":{"one":"\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440","few":"\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430","many":"\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"},"comments":{"one":"\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439","few":"\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f","many":"\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"},"friends":{"one":"\u0432\u0430\u0448 \u0434\u0440\u0443\u0433","few":"\u0432\u0430\u0448\u0438\u0445 \u0434\u0440\u0443\u0433\u0430","many":"\u0432\u0430\u0448\u0438\u0445 \u0434\u0440\u0443\u0437\u0435\u0439"},"was":{"one":"\u0431\u044b\u043b","few":"\u0431\u044b\u043b\u0438","many":"\u0431\u044b\u043b\u0438"},"found":{"one":"\u043d\u0430\u0448\u0435\u043b\u0441\u044f","few":"\u043d\u0430\u0448\u043b\u0438\u0441\u044c","many":"\u043d\u0430\u0448\u043b\u043e\u0441\u044c"},"total":{"one":"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442","few":"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430","many":"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"},"new_article":{"one":"\u043d\u043e\u0432\u0430\u044f \u043f\u0440\u0430\u0432\u043a\u0430","few":"\u043d\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u043a\u0438","many":"\u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u0430\u0432\u043e\u043a"},"photos":{"one":"\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f","few":"\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438","many":"\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439"},"places":{"one":"\u043c\u0435\u0441\u0442\u043e","few":"\u043c\u0435\u0441\u0442\u0430","many":"\u043c\u0435\u0441\u0442"}},"date":{"abbr_day_names":["\u0432\u0441","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"],"day_names":["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043f\u044f\u0442\u043d\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043e\u0442\u0430"],"abbr_month_names":[null,"\u044f\u043d\u0432.","\u0444\u0435\u0432\u0440.","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440.","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433.","\u0441\u0435\u043d\u0442.","\u043e\u043a\u0442.","\u043d\u043e\u044f\u0431.","\u0434\u0435\u043a."],"month_names":[null,"\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"],"formats":{"default":"%e %B","default_with_year":"%e %B %Y","tomorrow":"\u0437\u0430\u0432\u0442\u0440\u0430","today":"\u0441\u0435\u0433\u043e\u0434\u043d\u044f","yesterday":"\u0432\u0447\u0435\u0440\u0430","with_dow":"%e %B, %a","with_dow_with_year":"%e %B %Y, %a","with_dow_tomorrow":"\u0437\u0430\u0432\u0442\u0440\u0430, %a","with_dow_today":"\u0441\u0435\u0433\u043e\u0434\u043d\u044f, %a","with_dow_yesterday":"\u0432\u0447\u0435\u0440\u0430, %a","iso":"%Y-%m-%d"}},"time":{"formats":{"default":"%e %B \u0432\u00a0%H:%M","default_with_year":"%e %B %Y \u0432\u00a0%H:%M","tomorrow":"\u0437\u0430\u0432\u0442\u0440\u0430 \u0432\u00a0%H:%M","today":"\u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0432\u00a0%H:%M","yesterday":"\u0432\u0447\u0435\u0440\u0430 \u0432\u00a0%H:%M","time":"%H:%M","iso":"%Y-%m-%dT%H:%M:%S%z"},"am":"\u0443\u0442\u0440\u0430","pm":"\u0432\u0435\u0447\u0435\u0440\u0430"},"object":{"abuse":{"Post":{"one":"\u041f\u043e\u0441\u0442","few":"\u041f\u043e\u0441\u0442\u044b"},"Event":{"one":"\u0421\u043e\u0431\u044b\u0442\u0438\u0435","few":"\u0421\u043e\u0431\u044b\u0442\u0438\u044f"},"Gallery":{"one":"\u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f","few":"\u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u0438"},"Photo":{"one":"\u0424\u043e\u0442\u043e","few":"\u0424\u043e\u0442\u043e"},"Place":{"one":"\u041c\u0435\u0441\u0442\u043e","few":"\u041c\u0435\u0441\u0442\u0430"},"Tag":{"one":"\u0422\u0435\u0433","few":"\u0422\u0435\u0433\u0438"},"Community::Topic":{"one":"\u0422\u0435\u043c\u0430","few":"\u0422\u0435\u043c\u044b"}},"branding":{"service_names":{"start":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f","spaces":"\u041e\u0431\u043b\u0430\u0441\u0442\u0438","posts":"\u041f\u043e\u0441\u0442\u044b","events":"\u0421\u043e\u0431\u044b\u0442\u0438\u044f","places":"\u041c\u0435\u0441\u0442\u0430","galleries":"\u0413\u0430\u043b\u0435\u0440\u0435\u0438","looks":"\u041b\u0443\u043a\u0438","tv":"TV"},"brandable_names":{"Space":"\u041e\u0431\u043b\u0430\u0441\u0442\u044c","Topic":"\u0422\u043e\u043f\u0438\u043a","Flow":"\u041f\u043e\u0442\u043e\u043a","Post":"\u041f\u043e\u0441\u0442","City":"\u0413\u043e\u0440\u043e\u0434","Branding::UserCity":"\u0413\u043e\u0440\u043e\u0434 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f","Event":"\u0421\u043e\u0431\u044b\u0442\u0438\u0435","EventType":"\u0422\u0438\u043f \u0441\u043e\u0431\u044b\u0442\u0438\u044f","Place":"\u041c\u0435\u0441\u0442\u043e","Gallery":"\u0413\u0430\u043b\u0435\u0440\u0435\u044f","Look":"\u041b\u0443\u043a","LookProject":"\u0421\u043f\u0435\u0446\u043f\u0440\u043e\u0435\u043a\u0442 \u043b\u0443\u043a\u043e\u0432","Tag":"\u0422\u0435\u0433","Channel":"\u041a\u0430\u043d\u0430\u043b","Video":"\u0412\u0438\u0434\u0435\u043e"}},"currency_type":{"UAH":"\u0433\u0440\u043d.","RUB":"\u0440\u0443\u0431."},"cloth_type":{"categories":{"1":"\u041e\u0434\u0435\u0436\u0434\u0430","2":"\u041e\u0431\u0443\u0432\u044c","3":"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b"}},"look":{"genders":{"1":"\u041c\u0430\u043b\u044c\u0447\u0438\u043a\u0438","2":"\u0414\u0435\u0432\u043e\u0447\u043a\u0438"}}}}};