(function () {
  function addPrefix(num) {
    return num > 9 ? num : '0' + num;
  }

  module.exports = function (timeStamp, separator) {
    let timeStr = timeStamp.toString(),
      newTimeStamp = timeStamp || Date.parse(new Date()),
      dateSeparator = separator || '-';
    //保证传入的数据格式
    if (typeof timeStamp !== 'number') throw new TypeError('Time stamp is not a number');
    else if (timeStr.length !== 13) throw new Error('The incoming is not a time stamp');
    //如果是Unix时间戳乘以1000。例如：PHP、Go的时间戳就要乘以1000。
    if (timeStr.length === 10) newTimeStamp = newTimeStamp * 1000;
    let date = new Date(newTimeStamp),
      year = date.getFullYear(),
      month = date.getMonth() + 1 || 12,
      day = date.getDate(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds(),
      dateFormat = year + dateSeparator + addPrefix(month) + dateSeparator + addPrefix(day) + ' ' + addPrefix(hour) + ':' +
        addPrefix(minute) + ':' + addPrefix(second);
    return dateFormat;
  }
})()