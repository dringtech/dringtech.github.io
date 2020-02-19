if (!window.dringtech) window.dringtech = {};
(function () {
  var dringtech = window.dringtech;
  function list () {
    if (document.cookie === '' ) return {};
    return document.cookie
      .split(';')
      .map(function (_) { return _.split('='); } )
      .reduce(function (agg, _) { agg[_[0].trim()] = _[1].trim(); return agg; }, {});
  }
  function get (name) {
    var cookies = list();
    if (!cookies.hasOwnProperty(name)) return null;
    return cookies[name];
  }
  function set (name, value, options) {
    if (typeof options === 'undefined') options = {};
    var validOpts = 'path domain max-age expires secure samesite'.split(' ');
    var attribs = Object.keys(options)
      .reduce(function (acc, _) {
        if (validOpts.indexOf(_) < 0) return acc;
        if (_ === 'secure') return acc + ';' + _;
        return acc + ';' + _ + '=' + options[_];
      }, '');
    var cookie = name + '=' + encodeURIComponent(value);
    document.cookie = cookie+attribs;
  }
  function clear (name) {
    document.cookie = name+'=; max-age=-99999999;';
  }
  var permanent = new Date('31 Dec 9999').toUTCString();
  dringtech.cookie = {
    list: list,
    get: get,
    set: set,
    clear: clear,
    permanent: permanent
  };
})();
