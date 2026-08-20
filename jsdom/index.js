function Book(){
const child=document.createElement("div");
child.setAttribute("class","card");
const image=document.createElement("img");
image.setAttribute("src","https://tse4.mm.bing.net/th/id/OIP.PtU3oZdtcX1QysiofE2zOQHaE8?r=0&pid=Api&P=0&h=180");
image.setAttribute("width","200px");
image.setAttribute("height","150px");
image.style.margin="auto";
const h2=document.createElement("h2");
h2.innerText="Price: 50/-";
child.appendChild(image);
child.appendChild(h2);
return child;
}
const parent=document.getElementById("root");
parent.appendChild(Book());