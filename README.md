# angular-bootstrap3-datepicker
A [AngularJS](http://angularjs.org/) directives for the [django-bootstrap3-datetimepicker](https://github.com/nkunihiko/django-bootstrap3-datetimepicker)

## Installation

Installation is easy, jQuery, momentjs, font-awesome, AngularJS and Bootstrap's JS/CSS are required.
You can download angular-bootstrap-datepicker via bower:
`bower install angular-bootstrap3-datepicker`

When you are done downloading all the dependencies and project files the only remaining part is to add dependencies as an AngularJS module:

```javascript
angular.module('myModule', ['ng-bootstrap3-datepicker']);
```

You also need to include these files:
```html
<link rel="stylesheet" href="bootstrap/css/bootstrap.css" />
<link rel="stylesheet" href="ng-bs3-datepicker.css" />
<link rel="stylesheet" href="font-awesome.css" />

<script src="jquery.js"></script>
<script src="bootstrap/js/bootstrap.js"></script>
<script src="angular.js"></script>
<script src="moment.js"></script>
<script src="moment-your-locale.js"></script>
<script src="ng-bs3-datepicker.js" charset="utf-8"></script>
```

Make sure you use `charset="utf-8"` in your script tag if your browser (or those of your users) is displaying characters wrong when using another language.

## Settings

To use the directive, use the following code :

```html
<ng-bs3-datepicker ng-model="date" date-format="YYYY-MM-DD">
```

`datepicker` : Indicates you want a date picker

`ng-model` : Variable of the controller scope to store the date. The date is currently store as a string, formatted according to date format.

`date-format`: 逻辑如下：
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

# Thanks to

 * cletourneau: https://github.com/cletourneau
 * Eonasdan: https://github.com/Eonasdan/bootstrap-datetimepicker
 * nkunihiko: https://github.com/nkunihiko/django-bootstrap3-datetimepicker