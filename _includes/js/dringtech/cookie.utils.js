if (!window.dringtech) window.dringtech = {};
(function () {
  var dringtech = window.dringtech;
  var approvalName = 'dt_cookie_approval';
  var approvalMessage = document.querySelector('#cookie-approval');
  if (!dringtech.hasOwnProperty('cookie')) throw new Error('Please load this after the dringtech.cookies js');
  function checkCookieApproval () {
    var approved = dringtech.cookie.get(approvalName);
    if (approved) return;
    // Object.keys(dringtech.cookie.list()).forEach(function (_) { dringtech.cookie.clear(_); });
    approvalMessage.style.display='block';
  }
  function acceptCookies () {
    dringtech.cookie.set(
      approvalName,
      new Date().toUTCString(), {
        expires: dringtech.cookie.permanent,
        path: '/'
      });
    approvalMessage.style.display='none';
  }
  checkCookieApproval();
  dringtech.cookie.utils = {
    checkCookieApproval: checkCookieApproval,
    acceptCookies: acceptCookies
  };
  document.body.dispatchEvent(
    new CustomEvent(
      'cookieUtilsLoaded', { detail: {}, bubbles: true, cancelable: true }
    )
  );
})();
