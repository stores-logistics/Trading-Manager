"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _database = require("../database");

var _mongodb = require("mongodb");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)(); // /tasks

var collection = 'trading';
router.get('/',
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
            _context.prev = 1;
            _context.next = 4;
            return db.collection(collection).find({}).toArray();

          case 4:
            result = _context.sent;
            res.json(result);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              error: _context.t0.toString()
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/store/:id',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, db, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context2.sent;
            _context2.prev = 4;
            _context2.next = 7;
            return db.collection(collection).find({
              store_id: (0, _mongodb.ObjectID)(id)
            });

          case 7:
            result = _context2.sent;
            res.json(result);
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](4);
            res.status(500).json({
              error: _context2.t0.toString()
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.get('/user/:id',
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, db, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context3.sent;
            _context3.prev = 4;
            _context3.next = 7;
            return db.collection(collection).find({
              user_id: (0, _mongodb.ObjectID)(id)
            });

          case 7:
            result = _context3.sent;
            res.json(result);
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](4);
            res.status(500).json({
              error: _context3.t0.toString()
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 11]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.post('/',
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var db, _req$body, timestamp, store_id, user_id, product_id, price, trading, result;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context4.sent;
            _req$body = req.body, timestamp = _req$body.timestamp, store_id = _req$body.store_id, user_id = _req$body.user_id, product_id = _req$body.product_id, price = _req$body.price;
            trading = {
              timestamp: timestamp,
              store_id: store_id,
              user_id: user_id,
              product_id: product_id,
              price: price
            };
            _context4.next = 7;
            return db.collection(collection).insert(trading);

          case 7:
            result = _context4.sent;
            res.send(result);

          case 9:
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
router.put('    ',
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var db, id, _req$body2, timestamp, store_id, user_id, product_id, price, trading, result;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context5.sent;
            id = req.params;
            _req$body2 = req.body, timestamp = _req$body2.timestamp, store_id = _req$body2.store_id, user_id = _req$body2.user_id, product_id = _req$body2.product_id, price = _req$body2.price;
            trading = {
              timestamp: timestamp,
              store_id: store_id,
              user_id: user_id,
              product_id: product_id,
              price: price
            };
            _context5.next = 8;
            return db.collection(collection).insert(trading);

          case 8:
            result = _context5.sent;
            res.send(result);

          case 10:
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
router.get('/:id',
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, db, result;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context6.sent;
            _context6.next = 6;
            return db.collection(collection).findOne({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 6:
            result = _context6.sent;
            res.json(result);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
router["delete"]('/:id',
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var _ref8, id, db, result;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return req.params;

          case 2:
            _ref8 = _context7.sent;
            id = _ref8.id;
            _context7.next = 6;
            return (0, _database.connect)();

          case 6:
            db = _context7.sent;
            _context7.next = 9;
            return db.collection(collection).remove({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 9:
            result = _context7.sent;
            res.json({
              message: "The object ".concat(id, " was deleted"),
              result: result
            });

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;