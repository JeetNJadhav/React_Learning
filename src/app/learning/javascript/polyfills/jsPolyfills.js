// Polyfills practice
// for each pollyfills

Array.prototype.customForEach = function (callback) {
  if (this === null) throw new TypeError("cannot be null");
  if (typeof callback !== "function")
    throw new TypeError("Has to be a function");

  for (let i = 0; i < this.length; i++) {
    if (i in this) callback(this[i], i, this);
  }
};

Array.prototype.customMap = function (callback) {
  if (this === null) throw new TypeError("cant be null");
  let data = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      data[i] = callback(this[i], i, this);
    }
  }

  return data;
};

Array.prototype.customFilter = function (cb) {
  if (this === null) throw new TypeError("cant be null");

  let data = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (cb(this[i], i, this)) {
        data.push(this[i]);
      }
    }
  }

  return data;
};
