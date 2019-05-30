import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
  res.json('Working...');
});
router.get('/delete_all',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var db, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            db = req.app.locals.database;
            _context.next = 3;
            return db.collection("trading").remove({});

          case 3:
            result = _context.sent;
            res.json(result);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;