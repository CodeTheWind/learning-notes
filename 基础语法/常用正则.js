/**
 * 1、匹配大陆手机号
 */
const regx = new RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/);
const string = '13565685365';
console.log(regx.test(string));

/**
 * 2、帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
 */
const regx = new RegExp(/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/);
const string = 'a1365236';
console.log(regx.test(string));

/**
 * 3、密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)
 */
const regx = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/);
const string = '22sA13a0';
console.log(regx.test(string));

/**
 * 4、匹配十六进制颜色值
 */
const regx = new RegExp(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
const string = '#fff';
console.log(regx.test(string));

/**
 * 5、匹配 YYYY-MM-DD 格式的日期
 */
const regx = new RegExp(/[12][0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/);
const string = '2019-01-12';
console.log(regx.test(string));
