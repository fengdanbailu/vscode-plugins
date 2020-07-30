/*
 * @Author: gm.chen
 * @Date: 2020-07-30 11:36:40
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-30 14:32:36
 * @Description: file content
 * @FilePath: /vscode-plugins/html/stock/stock.js
 */ 
window.onload = function(){
    var code = document.getElementById('code');
    code.value=""
}

function download(){
    var datavalues=code.value.split(",");
    for(var i=0;i<datavalues.length;i++){
        downloadOne(i)
    }
}
function downloadOne(i){
    var datavalues = code.value.split(",");
    var tdate=datavalues[i].trim();
    var datastr = getDate();
    try{
        setTimeout(function(){
            location.href="http://quotes.money.163.com/service/chddata.html?code=0"+tdate+"&start=19900101&end="+datastr;
        },100+i*1000)
    }catch(err){
        console.log(err);
    }
}
function getDate(){
    var present=new Date();
    var y=present.getFullYear();
    var m=zerostr(present.getMonth()+1);
    var d=zerostr(present.getDate());
    return y+m+d;
}
function zerostr(n){
    return n>9?(''+n):('0'+n)
}
