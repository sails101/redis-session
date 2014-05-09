/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {



  /**
   * `SessionController.increment()`
   */
  increment: function (req, res) {
    req.session.counter = (req.session.counter || 0) + 1;
    return res.json({
      counter: req.session.counter
    });
  }
};

