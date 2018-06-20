'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoundImage = function () {
  _createClass(RoundImage, null, [{
    key: 'init',
    value: function init(src) {
      return new this(src).getHttpRequestImage();
    }
  }]);

  function RoundImage(src) {
    var _this = this;

    _classCallCheck(this, RoundImage);

    this.getHttpRequestImage = function () {
      var xhr = new XMLHttpRequest();
      xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
          _this.info.base64 = reader.result;
          console.log(_this.info.base64);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', _this.info.src);
      xhr.responseType = 'blob';
      xhr.send();
    };

    this.info = {
      src: src
    };
  }

  return RoundImage;
}();

exports.default = RoundImage;