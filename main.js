var images=["https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fcartoon-cute-lady-sister-playing-illustration-character-business-material_4053896.html&psig=AOvVaw0gUANoK36npZwRpNbLD5Hw&ust=1628576639605000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDCgfOmo_ICFQAAAAAdAAAAABAN",
"https://previews.123rf.com/images/kennykiernanillustration/kennykiernanillustration1801/kennykiernanillustration180100035/92602550-super-mom-cartoon-clipart-.jpg",
"https://image.shutterstock.com/image-illustration/super-hero-daddy-superhero-costume-260nw-766098340.jpg",
"https://us.123rf.com/450wm/dualororua/dualororua1708/dualororua170800409/83943492-vector-illustration-of-little-girl-in-blue-overalls.jpg?ver=6"];
var labels=["SISTER!","MOTHER!","FATHER!","ME!"];
var i=0;
function Next_image(){
    if(i==4)
        i=0;
}
var updated_image=images[i];
var updated_labels=labels[i];
document.getElementById("Main_img").src=updated_image;
document.getElementById("Main_label").innerHTML=updated_labels;




