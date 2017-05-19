void function () {
  var compiled = dust.compile("<div id=\"comment_{id}\" role=\"comment\" class=\"comment{?parent_id} comment-sublevel{/parent_id}\"><div class=\"comment-info\"><strong class=\"username\">{full_name}</strong><span class=\"comment-time\">{datetime|dt}</span></div><div class=\"comment-body\">{body|s}</div></div>", "comment");

  dust.loadSource(compiled);

  var Comments = function (options) {
    this.options = $.extend({
        url: '/comments',
        swiped_class: 'comment-swiped',
        angle: 30
      }, options);

    this.root_el = $(this.options.el || '[role="comments"]');
    this.resource_type = this.root_el.data('type');
    this.resource_id = this.root_el.data('id');

    this.root_el
      .append('<button role="load_comments">Load comments</button>')
      .on('click', '[role="load_comments"]', $.proxy(this.load, this))
      .on('click', '[role="comment:write"]', $.proxy(this.show_comment_form, this))
      .on('click', '[role="answer"] button', $.proxy(this.send_answer, this));

  };

  Comments.prototype = {
    load: function () {
      $.ajax({
        url: this.get_comments_url(),
        // url: './comments.json',
        dataType: 'json',
        success: $.proxy(this.load_success_handler, this)
      });
    },

    load_success_handler: function (data) {
      var _this = this
          comments = this.generate_tree(data.comments);

      $.each(comments, $.proxy(this.append_comment, this));

      this.root_el.find('[role="comment"]')
        .hammer()
        .on('swipe', function (e) {
          var $this = $(this);


          if ((e.angle > -_this.options.angle && e.angle < _this.options.angle) && !$this.hasClass(_this.options.swiped_class)) {
            $('.' + _this.options.swiped_class).toggleClass(_this.options.swiped_class);
            _this.remove_comment_form();
            $this.addClass(_this.options.swiped_class);
            return;
          }

          if (((e.angle > -180 && e.angle < -(180 - _this.options.angle)) || (e.angle > (180 - _this.options.angle) && e.angle < 180)) && $this.hasClass(_this.options.swiped_class)) {
            $(this).toggleClass(_this.options.swiped_class);
            _this.remove_comment_form();
          }
        });
    },

    append_comment: function (k, v) {
      var _this = this;

      dust.render('comment', dustContext.push(v), function (error, html) {
        if (error) console.log(error);
        else {
          _this.root_el.append($(html).append('<div class="comment-panel"><i role="comment:write"></i></div>'));
        }
      });
    },

    generate_tree: function (comments) {
      var _this = this,
          tree = [];

      $.each(comments, function (k, v) {
        if (v.parent_id !== null) {
          tree.splice(_this.find_parent_index(tree, v.parent_id) + 1, 0, v);
        } else {
          tree.push(v);
        }
      });

      return tree;
    },

    find_parent_index: function (t, id) {
      var index = null;
      $.each(t, function (k, v) {
        if (v.id === id) index = k;
      });
      return index;
    },

    show_comment_form: function (e) {
      var $comment = $(e.currentTarget).closest('.comment');

      if (!$comment.next().is('[role="answer"]')) {
        $comment.after('<div role="answer"><input type="text" /><button data-parent="' + $comment.attr('id').replace('comment_', '') + '">Comment</button></div>');
        this.root_el.find('.' + this.options.swiped_class).removeClass(this.options.swiped_class);
      }
    },

    send_answer: function (e) {
      var _this = this,
          body = this.get_comment_body(e.currentTarget),
          parent_id = $(e.currentTarget).data('parent');

      if (body !== '') {
        $.ajax({
          url: this.get_comments_url(),
          dataType: 'json',
          type: 'post',
          data: {
            "comment": {
              "parent_id": parent_id || '',
              "body": body
            },
            "resource_type": this.resource_type,
            "resource_id": this.resource_id
          },
          success: function (data) {
            if (data.success == false) return;

            dust.render('comment', dustContext.push(data.comment), function (error, html) {
              if (error) {
                console.log(error);
                return;
              }

              var html = $(html)
                          .append('<div class="comment-panel"><i role="comment:write"></i></div>')
                          .hammer()
                          .on('swipe', function (e) {
                            $(this).toggleClass(_this.options.swiped_class);
                          });

              if (data.comment.parent_id) {
                $('#comment_' + data.comment.parent_id).after(html);
              } else {
                _this.root_el.append(html);
              }

              $('[role="answer"]').remove();
            });
          }
        });
      }
    },

    remove_comment_form: function () {
      this.root_el.find('[role="answer"]').remove();
    },

    get_comment_body: function (el) {
      return $(el).prev().val();
    },

    get_comments_url: function () {
      return this.options.url + '?resource_type=' + this.resource_type + '&resource_id=' + this.resource_id + this.uri_random_component();
    },

    uri_random_component: function () {
      return '&_=' + Math.floor(Math.random() * 1000000);
    }
  };

  window.Comments = Comments;
} ();