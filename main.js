student_array=[];

function submit(){
var display_student_array = [];
for ( var j=1 ;j<=4; j++){
     var name_of_the_students= document.getElementById("Name"+j).value;
     console.log(name_of_the_students);
     student_array.push(name_of_the_students);
     console.log(student_array);

}

var length_of_array= student_array.length;
console.log(length_of_array);

for(var k=0;  k<length_of_array;k++){
    display_student_array.push("name- " +student_array[k]);
    console.log(display_student_array);
}
document.getElementById("displaynames_with_commas").innerHTML=display_student_array;
var remove_commas= display_student_array.join(" ");
console.log(remove_commas);
document.getElementById("displaynames_without_commas").innerHTML=remove_commas;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){

    student_array.sort();
    console.log(student_array);
    var array_sorting=[]   ;
    var length_of_array= student_array.length;
console.log(length_of_array);

for(var k=0;  k<length_of_array;k++){
    array_sorting.push("name- " +student_array[k]);
    console.log(array_sorting);
}
var remove_commas= array_sorting.join(" ");
console.log(remove_commas);
document.getElementById("displaynames_without_commas").innerHTML=remove_commas;

}