
window.onload = function() {
    document.oncontextmenu = block;
    document.body.onmouseup = function(event) {
      if (!event) event = window.event;
      if (event.button == 2) {
        var x = event.pageX || event.clientX;
        var y = event.pageY || event.clientY;
        // document.getElementById("contextMenu").style.left = x + "px";
        // document.getElementById("contextMenu").style.top = y + "px";
        // document.getElementById("contextMenu").style.display = "block";
      }
    }
    // //阻止事件冒泡
    // document.getElementById("contextMenu").onclick = function(event) {
    //   event.stopPropagation();
    // }
    // //点击其他地方隐藏
    // document.onclick = function() {
    //   document.getElementById("contextMenu").style.display = "none";
    // }
    for (var i = 0; i < getElementsByClassName("contextMenuItem").length; i ) {

      getElementsByClassName("contextMenuItem")[i].onclick = function(event) {
        event = event ? event : window.event
        var target = event.srcElement ? event.srcElement : event.targe;
        document.getElementById("contextMenu").style.display = "none";
        //alert("您点击了： "  target.innerHTML);
          
      }
    }

  }
 
  
  function block(event) {
    if (window.event) {
      event = window.event;
      event.returnValue = false;
    } else event.preventDefault();
  }
  //兼容IE不支持getElementsByClassName
  function getElementsByClassName(className, root, tagName) {
    if (root) {
      root = typeof root == "string" ? document.getElementById(root) : root;
    } else {
      root = document.body;
    }
    tagName = tagName || "*";
    if (document.getElementsByClassName) { 
      return root.getElementsByClassName(className);
    } else {
      var tag = root.getElementsByTagName(tagName); 
      var tagAll = [];
      for (var i = 0; i < tag.length; i ) {
        for (var j = 0, n = tag[i].className.split(' '); j < n.length; j ) {
          if (n[j] == className) {
            tagAll.push(tag[i]);
            break;
          }
        }
      }
      return tagAll;
    }
  }

    // 百度地图API功能
  function G(id) {
        return document.getElementById(id);
  }
  
  function showMap(city){
      var map = new BMap.Map("l-map");
      map.centerAndZoom(city,12);                   // 初始化地图,设置城市和地图级别。
  
      var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
          {"input" : "suggestId"
          ,"location" : map
      });
  
      ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
      var str = "";
          var _value = e.fromitem.value;
          var value = "";
          if (e.fromitem.index > -1) {
              value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
          }    
          str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
          
          value = "";
          if (e.toitem.index > -1) {
              _value = e.toitem.value;
              value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
          }    
          str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
          G("searchResultPanel").innerHTML = str;
      });
  
      var myValue;
      ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
      var _value = e.item.value;
          myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
          G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
          
          setPlace();
      });
  
      function setPlace(){
          map.clearOverlays();    //清除地图上所有覆盖物
          function myFun(){
              var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
              map.centerAndZoom(pp, 18);
              map.addOverlay(new BMap.Marker(pp));    //添加标注
          }
          var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
          });
          local.search(myValue);
      }



  }