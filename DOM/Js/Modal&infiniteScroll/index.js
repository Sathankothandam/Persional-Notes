let page = 1;
let bg = ["red","gray","blue","pink","orange","teal","white","cyan","lightgreen","voilet"];
let i=0;

async function getData() {
  // console.log(page + "hello");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`
  );
  const data = await res.json();
  console.log(data);
  showData(data);
}
function showData(data) {
  data.map((item) => {
    let box = document.createElement("div");
    box.style.backgroundColor = bg[i];
    if(i>=bg.length){
        i=0;
    }else{
        i++;
    }
    let num = document.createElement("h1");
    num.innerText = item.id;
    let comment = document.createElement("p");
    comment.innerText = item.body;
    box.setAttribute("class", "box");
    box.append(num, comment);
    box.addEventListener("click", () => {
      OpenModal(item);
    });
    document.querySelector("#container").append(box);
  });
}

getData(page);

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    page++;
    setTimeout(() => {
      getData();
    }, 500);
  }
});
function OpenModal(item) {
  let modal = document.querySelector("#modal");
  modal.innerHTML = "";
  let email = document.createElement("p");
  email.innerText = "Email" + ":" + item.email;
  let name = document.createElement("p");
  name.innerText = "Name" + ":" + item.name;
  let body = document.createElement("p");
  body.innerText = "comment" + ":" + item.body;
  let button = document.createElement("button");
  button.innerHTML = "close"
  button.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modal.append(button,email, name, body);
  modal.style.display = "block";
}