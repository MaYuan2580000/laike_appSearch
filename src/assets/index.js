const digitsRE = /(\d{3})(?=\d)/g;

// asset collections must be a plain object.
export default {
  /**
   * 首字母转为大写的过滤器
   * 'abc' => 'Abc'
   */

  capitalize: function(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  /**
   * 英文小写字母转大写字母的过滤器
   * 'abc' => 'ABC'
   */

  uppercase: function(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  },

  /**
   * 英文大写字母转小写字母的过滤器
   * 'AbC' => 'abc'
   */

  lowercase: function(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  },

  /**
   * 格式化货币的过滤器
   * 12345 => $12,345.00
   *
   * @param {String} sign
   * @param {Number} decimals Decimal places
   */

  currency: function(value, currency, decimals) {
    value = parseFloat(value);
    if (!isFinite(value) || (!value && value !== 0)) return '';
    currency = currency != null ? currency : '$';
    decimals = decimals != null ? decimals : 2;
    var stringified = Math.abs(value).toFixed(decimals);
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = decimals ? stringified.slice(-1 - decimals) : '';
    var sign = value < 0 ? '-' : '';
    return (
      sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
    );
  }
};
