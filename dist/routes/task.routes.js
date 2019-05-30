import { Router } from 'express';
import { connect } from '../database';
import { ObjectID } from 'mongodb';
const router = Router(); // /tasks

const collection = 'tasks';
router.get('/', async (req, res) => {
  const db = await connect();
  const result = await db.collection(collection).find({}).toArray();
  res.json(result);
});
router.post('/', async (req, res) => {
  const db = await connect();
  const {
    title,
    description
  } = req.body;
  const task = {
    title: title,
    description: description
  };
  const result = await db.collection(collection).insert(task);
  res.send(result);
});
router.put('    ', async (req, res) => {
  const db = await connect();
  const id = req.params;
  const {
    title,
    description
  } = req.body;
  const task = {
    title: title,
    description: description
  };
}());
router.put('    ',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var db, id, _req$body2, title, description, task, result;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context3.sent;
            id = req.params;
            _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description;
            task = {
              title: title,
              description: description
            };
            _context3.next = 8;
            return db.collection(collection).insert(task);

          case 8:
            result = _context3.sent;
            res.send(result);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.get('/:id',
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, db, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context4.sent;
            _context4.next = 6;
            return db.collection(collection).findOne({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 6:
            result = _context4.sent;
            res.json(result);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
router["delete"]('/:id',
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var _ref6, id, db, result;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return req.params;

          case 2:
            _ref6 = _context5.sent;
            id = _ref6.id;
            _context5.next = 6;
            return (0, _database.connect)();

          case 6:
            db = _context5.sent;
            _context5.next = 9;
            return db.collection(collection).remove({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 9:
            result = _context5.sent;
            res.json({
              message: "The object ".concat(id, " was deleted"),
              result: result
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;