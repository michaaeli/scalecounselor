function hackAccount() {
  var data1 = $("#data1").val();
  var data2 = $("#data2").val();
  var data3 = $("#data3").val();
  var data4 = $("#data4").val();
 
  $.ajax({
    url: "https://SmartScale99.moe-chael.repl.co/getplan/" + data3 + "/" + data4,
    success: function(result) {
      console.log(result);
	  var planList = jQuery.parseJSON(result);
	  
	  console.log(planList[0]);
	  $("#bfmeal").html(planList[0].join("<br>"));
	  
	  console.log(planList[1]);
	  $("#lunchmeal").html(planList[1].join("<br>"));
	  
	  console.log(planList[2]);
	  $("#dinnermeal").html(planList[2].join("<br>"));
	  
	  console.log(planList[3]);
      $("#snackmeal").html(planList[3].join("<br>"));

    },
      error: function(result) {
          console.log("error");
      }
  });
}
function showInput(){
  var username = $('#roundedcorners2').val();
  console.log(username);
  $.ajax({
    url: "https://SmartScale99.moe-chael.repl.co/getplan/" + username,
    success: function(result) {
      console.log(result);
	    var res = jQuery.parseJSON(result);
	  
  
      $("#data1").val(res.goal_days);
      

      $("#data2").val(res.goal_pounds);

      document.getElementById("showUpBlock").style.display = "initial";
    },
      error: function(result) {
          console.log("error");
      }
  });
  
}

function showInput2(){
  var username = $('#roundedcorners2').val();
  var goal_days = $('#data1').val();
  var goal_pounds = $('#data2').val();
  
  $.ajax({
    url: "https://SmartScale99.moe-chael.repl.co/postplan/" + username + "/" + goal_days + "/" + goal_pounds,
    success: function(result) {
      console.log(result);
	    

      document.getElementById("showUpBlock2").style.display = "initial";
    },
      error: function(result) {
          console.log("error");
      }
  });
}

function showInput3(){
  var username = $('#roundedcorners2').val();
  console.log(username);
  $.ajax({
    url: "https://SmartScale99.moe-chael.repl.co/get_left_auto/" + username,
    success: function(result) {
      console.log(result);
	    var res = jQuery.parseJSON(result);
	  
  
      $("#data3").val(res.days_left);
      

      $("#data4").val(res.pounds_left);

      document.getElementById("showUpBlock3").style.display = "initial";
    },
      error: function(result) {
          console.log("error");
      }
  });

}