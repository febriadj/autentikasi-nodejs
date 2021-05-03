'use strict'

exports.logout = function(req, res, next) {
  if (!req.session.user) {
    res.status(403).redirect('/');
  }

  req.session.destroy(() => {
    res.status(301).redirect('/');
  })
}