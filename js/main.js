var div = +prompt(" raqam son kriting")
if (div  % 2 == 0) {
    alert( div + " siz juft son kiritingiz")
}else if (div  % 2 == 1) {
    alert( div + " siz toq son kiritingiz")
} else if (isNaN((div) || div == '') || div % 2 != 0) {
    alert('siz son kiritmadingiz son kiriting')
    +prompt(" raqam son kriting")
}