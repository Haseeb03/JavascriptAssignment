document.write("<h3>Question1</h3>");
//JS literal notation
var stdnames=[];
document.write("<h3>Question2</h3>");
//JS object notation
var stdnames1=[];
document.write("<h3>Question3</h3>");
var strarr = ["h"];
document.write("<h3>Question4</h3>");
var intarr = [3];
document.write("<h3>Question5</h3>");
var bol_arr = [true];
document.write("<h3>Question6</h3>");
var mixarr = [true, "h", 3];
document.write("<h3>Question7</h3>");
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualification: </h1>");
document.write(qualifications[0] + "<br>" + qualifications[1] + "<br>" + qualifications[2] + "<br>" + qualifications[3] + "<br>" + qualifications[4] + "<br>" + qualifications[5] + "<br>" + qualifications[6] + "<br>" + qualifications[7]);
document.write("<h3>Question8</h3>");
var stdnames = ["Michael", "John", "Tony"];
var stdmarks = [320, 230, 480];
var tmarks = 500;
document.write("Score of " + stdnames[0] + " is " + stdmarks[0] + ". Percentage: " + ((stdmarks[0] / tmarks) * 100) + "<br>");
document.write("Score of " + stdnames[1] + " is " + stdmarks[1] + ". Percentage: " + ((stdmarks[1] / tmarks) * 100) + "<br>");
document.write("Score of " + stdnames[2] + " is " + stdmarks[2] + ". Percentage: " + ((stdmarks[2] / tmarks) * 100) + "<br>");
document.write("<h3>Question9</h3>");
var colors = ["Red", "Yellow", "Green"];
document.write("Color Array: " + colors);
colors.unshift(prompt("what color you wants to add to the beginning: "));
document.write("<br>Adding New Color In The Beginning: " + colors);
colors.push(prompt("what color you wants to add to the End: "));
document.write("<br>Adding New Color In The End: " + colors);
colors.unshift("Orange", "Pink");
document.write("<br>Adding Two New Color In The Beginning: " + colors);
colors.shift();
document.write("<br>Removing First Color: " + colors);
colors.pop();
document.write("<br>Removing Last Color: " + colors);
var ind=+prompt("At what index u want to add color?");
var clr=prompt("Which color u want to add?");
colors.splice(ind,clr);
document.write("<br>Add "+clr+" color at index"+ind+": " + colors);
var ind=+prompt("At what index u want to delete color?");
var del=+prompt("How many color u want to delete?");
colors.splice(ind,del);
document.write("<br>Color array after deleting: " + colors);
document.write("<h3>Question10</h3>");
var score=[230,420,150,460];
document.write("Scores of students: "+score);
score.sort();
document.write("<br>Ordered scores of students: "+score);
document.write("<h3>Question11</h3>");
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities List: "+cities);
var selectedCities=cities.splice(2,2);
document.write("<br>Selected cities: "+selectedCities);
document.write("<h3>Question12</h3>");
var arr = [" This ", " is ", " my ", " cat "];
document.write("<br>Array: "+arr);
arr.join("");
document.write("<br>String: "+arr);
document.write("<h3>Question13</h3>");
var device=[];
device.push("keyboard");
device.push("mouse");
device.push("printer");
device.push("Monitor");
document.write("<br>Devices: <br>"+device);
for(var i=0;i<device.length;i++){
    document.write("<br>Out: <br>"+device[i]);
}
document.write("<h3>Question14</h3>");
var devices=[];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("Monitor");
document.write("<br>Devices: <br>"+device);
for(var i=devices.length-1;i>=0;i--){
    document.write("<br>Out: <br>"+devices[i]);
}
document.write("<h3>Question15</h3>");
var brandsarr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(`
<label for="brands">Choose a brand:</label>
<select name="brands" id="brands">
  <option value="${brandsarr[0]}">${brandsarr[0]}</option>
  <option value="${brandsarr[1]}">${brandsarr[1]}</option>
  <option value="${brandsarr[2]}">${brandsarr[2]}</option>
  <option value="${brandsarr[3]}">${brandsarr[3]}</option>
  <option value="${brandsarr[4]}">${brandsarr[4]}</option>
  <option value="${brandsarr[5]}">${brandsarr[5]}</option>
</select>
`);