/*
 * @Author: gm.chen
 * @Date: 2020-07-30 17:00:01
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-30 21:54:50
 * @Description: file content
 * @FilePath: /vscode-plugins/d3/demo.js
 */ 

 window.onload=function(){

    var width = 800;	//画布的宽度
	var height = 600;	//画布的高度
 
	var svg = d3.select("body")				//选择文档中的body元素
				.append("svg")				//添加一个svg元素
				.attr("width", width)		//设定宽度
				.attr("height", height);	//设定高度
	
	var dataset = [ [10,10,20,20] , [210,220,60,20] , [170,130,30,90] ];
 
	svg.selectAll("rect")
		  .data(dataset)
		  .enter()
		  .append("rect")
		  .attr("x",function(d){
              return d[0];
          })
		  .attr("y",function(d){
				return d[1];
		  })
		  .attr("width",function(d){
		  	return d[2];
		  })
		  .attr("height",function(d){
              return d[3];
          })
		  .attr("fill","steelblue");
 }