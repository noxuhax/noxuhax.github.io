(function(){dust.register("js/_comment",body_0);function body_0(chk,ctx){return chk.write("<div id=\"comment_").reference(ctx.get("id"),ctx,"h").write("\" role=\"comment\" class=\"comment").helper("select",ctx,{"block":body_1},{"key":"rating"}).exists(ctx.get("parent_id"),ctx,{"block":body_4},null).write("\"><div class=\"author-image\"><a href=\"/users/").reference(ctx.get("user"),ctx,"h").write("\" role=\"comment-user\"><img src").exists(ctx.get("lazy_img"),ctx,{"block":body_5},null).write("=\"").reference(ctx.get("userpic"),ctx,"h").write("\" width=\"50\" height=\"50\" alt=\"").reference(ctx.get("user"),ctx,"h").write("\" title=\"").reference(ctx.get("user"),ctx,"h").write("\" class=\"userpic\" /></a></div><div class=\"entry-data\"><div class=\"comment-meta\"><a href=\"/users/").reference(ctx.get("user"),ctx,"h").write("\" role=\"comment-user\">").reference(ctx.get("full_name"),ctx,"h").write("</a><span class=\"time\"> ").reference(ctx.get("datetime"),ctx,"h",["dt"]).write(" </span><a href=\"#comment_").reference(ctx.get("id"),ctx,"h").write("\" title=\"постоянная ссылка на этот комментарий\" class=\"link-to-comment\">#</a></div><div class=\"comment-text\">").reference(ctx.get("body"),ctx,"h",["s"]).write("</div><div role=\"comment-rating\" class=\"comment-rating\"><span>").reference(ctx.get("rating"),ctx,"h").write("</span></div></div></div>");}function body_1(chk,ctx){return chk.helper("lt",ctx,{"block":body_2},{"value":"-3"}).helper("lt",ctx,{"block":body_3},{"value":"1"});}function body_2(chk,ctx){return chk.write(" negative");}function body_3(chk,ctx){return chk.write(" zero");}function body_4(chk,ctx){return chk.write(" comment-sublevel");}function body_5(chk,ctx){return chk.write("=\"http://lookatme.dev/3254726015/images/d.gif\" data-original");}return body_0;})();