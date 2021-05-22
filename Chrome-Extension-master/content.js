const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(re) || []

chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length
})

document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var div = document.createElement('div');
var btnForm = document.createElement('form');
var btn = document.createElement('input');
var chat_btn = document.createElement('input');
var bug_btn = document.createElement('input');
var perf_btn = document.createElement('input');




//append all elements
document.body.appendChild(div);
div.appendChild(btnForm);
btnForm.appendChild(btn);
btnForm.appendChild(chat_btn);
btnForm.appendChild(bug_btn);
btnForm.appendChild(perf_btn);

//set attributes for div
div.id = 'float_div';
div.style.position = 'fixed';
div.style.top = '50%';
div.style.right = '150px';
div.style.width = '10px';
div.style.height = '10px';
div.style.backgroundColor = 'rgb(33, 33, 33,0)';
div.style.border = '10px solid rgba(136, 136, 136,0)';


//set attributes for btnForm
btnForm.action = '';

//set attributes for btn
//"btn.removeAttribute( 'style' );
btn.id = 'float_button';
btn.type = 'button';
btn.style.position = 'absolute';
btn.zIndex = 99;
btn.style.top = '50%';
btn.style.left = '100%';
btn.style.width = '25px';
btn.style.height = '25px';
btn.style.backgroundColor = 'rgb(245, 230, 0.5)';
btn.style.borderColor = 'rgba(136, 136, 136, .5)';
btn.style.borderRadius = '50%';
btn.style.cursor = 'pointer';

chat_btn.id = 'chat_bot';
chat_btn.type = 'button';
chat_btn.style.position = 'absolute';
chat_btn.zIndex = 99;
chat_btn.value = 'Chat Bot';
chat_btn.style.top = '40px';
chat_btn.style.left = 'auto';
chat_btn.style.width = '90px';
chat_btn.style.height = '30px';
chat_btn.style.backgroundColor = 'rgb(92, 219, 149)';
chat_btn.style.color = 'rgb(5, 56, 107)';
chat_btn.style.borderRadius = '10%';
chat_btn.style.cursor = 'pointer';
chat_btn.setAttribute('style', 'visibility:hidden');


bug_btn.id = 'bug_report';
bug_btn.type = 'button';
bug_btn.value = 'Home';
bug_btn.style.position = 'absolute';
bug_btn.zIndex = 99;
bug_btn.style.top = '70px';
bug_btn.style.left = 'auto';
bug_btn.style.width = '90px';
bug_btn.style.height = '30px';
bug_btn.style.backgroundColor = 'rgb(92, 219, 149)';
bug_btn.style.color = 'rgb(5, 56, 107)';
bug_btn.style.borderRadius = '10%';
bug_btn.style.cursor = 'pointer';
bug_btn.setAttribute('style', 'visibility:hidden');




perf_btn.id = 'performance';
perf_btn.type = 'button';
perf_btn.style.position = 'absolute';
perf_btn.zIndex = 99;
perf_btn.value = 'Features';
perf_btn.style.top = '100px ';
perf_btn.style.left = 'auto';
perf_btn.style.width = '90px';
perf_btn.style.height = '30px';
perf_btn.style.backgroundColor = 'rgb(92, 219, 149)';
perf_btn.style.color = 'rgb(5, 56, 107)';
perf_btn.style.cursor = 'pointer';
perf_btn.setAttribute('style', 'visibility:hidden');


const element = document.getElementById('float_button');

// always checking if the element is clicked, if so, do alert('hello')
element.addEventListener("click", () => {
  chat_btn.setAttribute('style', 'visibility:visible');
  chat_btn.style.backgroundColor = 'rgb(5, 56, 107)';
  chat_btn.style.color = 'rgb(92, 219, 149)';
  chat_btn.style.fontWeight = "bold";
  chat_btn.style.width = '150px';
  chat_btn.style.textTransform = "uppercase";
  chat_btn.style.border = "none";


  bug_btn.setAttribute('style', 'visibility:visible');
  bug_btn.style.backgroundColor = 'rgb(5, 56, 107)';
  bug_btn.style.color = 'rgb(92, 219, 149)';
  bug_btn.style.textTransform = "uppercase";
  bug_btn.style.fontWeight = "bold";
  bug_btn.style.width = '150px';
  bug_btn.style.border = "none";


  perf_btn.setAttribute('style', 'visibility:visible');
  btn.setAttribute('style', 'visibility:hidden');
  perf_btn.style.backgroundColor = 'rgb(5, 56, 107)';
  perf_btn.style.color = 'rgb(92, 219, 149)';
  perf_btn.style.textTransform = "uppercase";
  perf_btn.style.fontWeight = "bold";
  perf_btn.style.width = '150px';
  perf_btn.style.border = "none";
});

const chat_element = document.getElementById('chat_bot');
chat_element.addEventListener("click", () => {
  location.replace("https://jgdshkovi.pythonanywhere.com/help.html");
});
const bug_element = document.getElementById('bug_report');
bug_element.addEventListener("click", () => {
  location.replace("https://jgdshkovi.pythonanywhere.com/");
    document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName("_hj-21t0-__MinimizedWidgetMiddle__label").click();
  });

});