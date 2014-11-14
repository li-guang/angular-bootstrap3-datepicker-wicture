if(!Date.prototype.Format)
  Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  };

var dp;

dp = angular.module('ng-bs3-datepicker', []);

dp.directive('ngBs3Datepicker', function($compile) {
  return {
    restrict: 'E',
    replace: true,
    template: "<div class='input-group date'>\n  <input type='text' class='form-control'/>\n  <span class='input-group-addon'>\n    <span class='fa fa-calendar'></span>\n  </span>\n</div>",
    link: function($scope, element, attr) {
      var attributes, input, resetValue;
      attributes = element.prop("attributes");
      input = element.find("input");
      angular.forEach(attributes, function(e) {
        if (e.name !== "class") {
          input.attr(e.name, e.value);
        }
        if (e.name === "date-format") {
          input.attr('data-date-format', e.value);
        }
      });
      $scope.$watch(attr.language, function(value) {
        var language;
        language = value ? value : input.attr('language');
        var pickTime = attr.dateFormat && attr.dateFormat.toLowerCase().indexOf('hh') > -1;
        var useSeconds = attr.dateFormat && attr.dateFormat.toLowerCase().indexOf('ss') > -1;
        var pickDate = !attr.dateFormat || attr.dateFormat.toLowerCase().indexOf('dd') > -1;
        return input.datetimepicker({
          language: language,
          icons: {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar',
            up: 'fa fa-arrow-up',
            down: 'fa fa-arrow-down'
          },
          pickTime:pickTime,
          pickDate:pickDate,
          useSeconds: useSeconds
        });
      });
      element.find('.input-group-addon').on('click', function(e) {
        return element.find('input').focus();
      });
      return $compile(input)($scope);
    }
  };
});
