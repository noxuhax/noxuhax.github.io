var __lib = function(dust) {
  var handlers = {
    paginate: function(chunk, context, bodies) {
      var current_page = context.get('current_page'),
        total_pages = Math.ceil(context.get('total_entries') / context.get('per_page')),
        prev = null,
        next = null,
        left = [],
        right = [],
        wnd = 2,
        wnd_left = wnd,
        wnd_right = wnd;

      // fix current position to prevent out of bounds
      if (current_page > total_pages) current_page = total_pages;
      else if (current_page < 1) current_page = 1;

      // calculage prev and next pages
      if (current_page > 1)
        prev = current_page - 1;
      if (current_page < total_pages)
        next = current_page + 1;

      // calculate window pages
      if(current_page <= wnd) {
        wnd_left = current_page - 1;
        wnd_right = Math.min(2 * wnd - wnd_left, total_pages - current_page);
      }
      else if (total_pages - current_page < wnd) {
        wnd_right = total_pages - current_page;
        wnd_left = Math.min(2 * wnd - wnd_right, current_page - 1);
      }

      // add pages to the left and right of current page
      for (var i = 0; i < wnd_left; i++)
        left.unshift(current_page - i - 1);
      for (var i = 0; i < wnd_right; i++)
        right.push(current_page + i + 1);

      var first = left[0],
        last = right[right.length - 1],
        gap;

      // add first page and gap (if needed)
      if (first > 1) {
        if (first > 3)
          gap = [1, null];
        else if (first == 3)
          gap = [1, 2];
        else
          gap = [1];
        left = gap.concat(left);
      }

      // add last page and gap (if needed)
      if (last < total_pages) {
        if (total_pages - last > 2)
          gap = [null, total_pages];
        else if (total_pages - last == 2)
          gap = [total_pages - 1, total_pages];
        else
          gap = [total_pages];
        right = right.concat(gap);
      }

      if (total_pages > 1) {
        return chunk.render(bodies.block, context.push({ total_pages: total_pages, prev: prev, next: next, left: left, right: right }));
      } else {
        return bodies['else'] ? chunk.render(bodies['else'], context) : chunk.write('');
      }
    },

    delete_in_groups_with_weigth: function(chunk, context, bodies, params) {

      // extract this function as callback if general version of in_groups_with_weigth needed
      var weight_for = function(post){ return post.is_super_featured ? 3 : post.is_featured ? 2 : 1; };

      var delete_if = function(ary, cb){
        for (var i = 0; i < ary.length; i++){
          if (cb(ary[i])) return ary.splice(i, 1)[0];
        }
        return null;
      };
      
      var ary = params.array || [];
      var result = [];
      
      while( ( !params.limit || result.length < params.limit) && ary.length > 0 ){
        var remain = params.row_weight;
        var current_line = [];        
        var element;
        
        while ((element = delete_if(ary, function(o){ return weight_for(o) <= remain; }))){
          remain -= weight_for(element);
          current_line.push(element);
        }

        // prevent endless loop
        if(current_line.length == 0) current_line.push(ary.pop());

        result.push(current_line);
      }

      return chunk.render(bodies.block, context.push(result));
    },

    in_groups: function(chunk, context, bodies, params) {
      var ary = context.current();
      if (!ary || !ary.length) return context;

      var groups = context.global.arraySplit(ary, params.groups);
      for (var i = 0; i < groups.length; i++) {
        chunk.render(bodies.block, context.rebase(groups[i]));
      }
      return context;
    },

    arraySplit: function(ary, cols) {
      var r = [],
        height = Math.floor(ary.length / cols),
        tail = ary.length - height * cols;

      for (var i = 0, offset = 0; i < cols; i++) {
        r[i] = ary.slice(i * height + offset, (i + 1) * height + offset + (tail > 0 ? 1 : 0));
        if (tail-- > 0) offset++;
      }

      return r;
    },

    find: function(chunk, context, bodies, params) {
      var object = null,
        ary = context.current();

      for (var i = 0; i < ary.length; i++) {
        for (var k in params) {
          if (ary[i][k] == params[k]) {
            object = ary[i];
            break;
          }
        }
      }

      return chunk.render(bodies.block, context.push(object));
    }
  };

  if (dust) dust.handlers = handlers;
  return handlers;
};

if (typeof exports !== 'undefined') {
  module.exports = __lib;
}

if (typeof dust !== 'undefined') {
  dust.handlers = __lib(dust);
}
