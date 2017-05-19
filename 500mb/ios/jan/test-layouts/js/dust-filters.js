var __lib = function(dust) {
  var filters = {
    // serialize object into string format key1=value1&key2=value2&...
    p: function(value) {
      var str = [];
      for(var p in value) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(value[p]));
      }
      return str.join("&");
    },

    // DateTime Helpers
    dateDiff: function(d1, d2) {
      d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
      d2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
      return (d1 - d2) / 86400000;
    },

    parseDate: function (str) {
      var date = new Date(str);
      // ie return NaN when parse ISO date
      if (!isNaN(date)) { return date; }

      var parts = str.match(/\d+/g),
          gmt_sign = str.charAt(str.length - 6),
          monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          normalizeArray = [
            parts[2], // day
            monthes[parseInt(parts[1].replace(/^0/, '')) - 1], // month
            parts[0], // year
            [parts[3], parts[4], parts[5]].join(':'), // time 00:00:00
            ['GMT', gmt_sign, parts[6], parts[7]].join('')
          ];

      if (parts.length == 3) {
        // For parsing "yyyy-mm-dd" formats
        return new Date(parts[0], parts[1] - 1, parts[2]);
      } else {
        return new Date(normalizeArray.join(' '));
      }
    },
    
    // date
    d: function(d) {
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      var today = new Date(),
          diff = this.dateDiff(d, today);
      return diff == 0 ? I18n.l('date.formats.today', d) : (diff == -1 ? I18n.l('date.formats.yesterday', d) : (diff == 1 ? I18n.l('date.formats.tomorrow', d) : I18n.l('date.formats.' + (d.getFullYear() == today.getFullYear() ? 'default' : 'default_with_year'), d)));
    },
    
    // date with day of week
    dwd: function(d) {
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      var today = new Date(),
          diff = this.dateDiff(d, today);
      return diff == 0 ? I18n.l('date.formats.with_dow_today', d) : (diff == -1 ? I18n.l('date.formats.with_dow_yesterday', d) : (diff == 1 ? I18n.l('date.formats.with_dow_tomorrow', d) : I18n.l('date.formats.' + (d.getFullYear() == today.getFullYear() ? 'with_dow' : 'with_dow_with_year'), d)));
    },
    
    t: function(d) {
      if (typeof(d) === 'string') { d = this.parseDate(d); }
           return I18n.l('time.formats.time', d);
    },
    
    // datetime
    dt: function(d) {
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      var today = new Date(),
          diff = this.dateDiff(d, today);
      return diff == 0 ? I18n.l('time.formats.today', d) : (diff == -1 ? I18n.l('time.formats.yesterday', d) : (diff == 1 ? I18n.l('time.formats.tomorrow', d) : I18n.l('time.formats.' + (d.getFullYear() == today.getFullYear() ? 'default' : 'default_with_year'), d)));
    },
    
    // datetime with year
    dty: function(d) {
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      return I18n.l('time.formats.default_with_year', d);
    },
    
    // datetime iso
    dti: function(d) {
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      return I18n.l('time.formats.iso', d);
    },
    
    // date iso
    di: function(d) {
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      return I18n.l('date.formats.iso', d);
    },
    
    // week day
    wd: function(d) {
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      return I18n.t('date.day_names.' + d.getDay());
    },
    // week day with segodnya|zavtra
    wdc: function(d) {
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      var today = new Date(),
          diff = this.dateDiff(d, today);
      switch (diff){
      case  0: return I18n.l('date.formats.today', d)
      case -1: return I18n.l('date.formats.yesterday', d)
      default: return I18n.t('date.day_names.' + d.getDay())
      }
    },
    // week day short with segodnya|zavtra
    wdcs: function(d) {
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      var today = new Date(),
          diff = this.dateDiff(d, today);
      switch (diff){
      case  0: return I18n.l('date.formats.today', d);
      case -1: return I18n.l('date.formats.yesterday', d);
      default: return I18n.t('date.abbr_day_names')[d.getDay()];
      }
    },
    // month number
    mn: function(d) {
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      var month = d.getMonth() + 1;
      if(month < 10){
        month = '0' + month;
      }
      return month;
    },

    currency: function(type) {
      return I18n.t('object.currency_type.' + type);
    },

    // Countable pluralization helpers
    counting: function(n, key) {
      if (typeof n === 'string') n = parseInt(n);
      return I18n.t('counting.' + key, { count: n });
    },
    
    people: function(n) { return this.counting(n, 'people'); },
    going: function(n) { return this.counting(n, 'going'); },
    was: function(n) { return this.counting(n, 'was'); },
    friends: function(n) { return this.counting(n, 'friends'); },
    years_old: function(n) { return this.counting(n, 'years_old'); },
    posts: function(n) { return this.counting(n, 'posts'); },
    looks: function(n) { return this.counting(n, 'looks'); },
    events: function(n) { return this.counting(n, 'events'); },
    galleries: function(n) { return this.counting(n, 'galleries'); },
    posts_unpublished: function(n) { return this.counting(n, 'posts_unpublished'); },
    views: function(n) { return this.counting(n, 'views'); },
    comments: function(n) { return this.counting(n, 'comments'); },
    capitalize: function(n) { return n.charAt(0).toUpperCase() + n.slice(1); },
    found: function(n) { return this.counting(n, 'found'); },
    total: function(n) { return this.counting(n, 'total'); },

    getDate: function(d){
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      return d.getDate();
    },
    
    getShortDay: function(d){
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      return I18n.t('date.abbr_day_names')[d.getDay()];
    },
    
    getDay: function(d){
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      return I18n.t('date.day_names')[d.getDay()];
    },
    
    getMonth: function(d){
      if (typeof(d) === 'string') { d = this.parseDate(d); }
      return I18n.t('date.month_names')[d.getMonth()+1];
    }
  }

  if (dust) {
    // add parameters to string serialize helper
    for (var m in filters) {
      dust.filters[m] = filters[m];
    }
  }
  return filters;
};


if (typeof exports !== 'undefined') {
  module.exports = __lib;
}

if (typeof dust !== 'undefined') {
  __lib(dust);
}
