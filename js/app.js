'use strict';



function Article(author, title, subject, content, day, month, year, id) {
    this.author = author,
    this.title = title,
    this.subject = subject,
    this.content = content,
    this.day = day,
    this.month = month,
    this.year = year;
    this.likes = 0;
    this.id = id;
}



Article.prototype.render = function() {
    let pastedSection = document.getElementById('articleData');

    let title = document.createElement('h1');
    title.textContent = this.title;
    pastedSection.appendChild(title);

    let img = document.createElement('img');
    img.src = '/img/asac.jpg';
    pastedSection.appendChild(img);

    let author = document.createElement('h1');
    author.textContent = this.author;
    pastedSection.appendChild(author);

    let date = document.createElement('h1');
    date.textContent = this.day + '-' + this.month + '-' + this.year;
    pastedSection.appendChild(date);


    let likes = document.createElement('h1');
    likes.textContent = this.likes;
    pastedSection.appendChild(likes);

 

    let subject = document.createElement('h1');
    subject = this.subject;
    pastedSection.appendChild(subject);


    let content = document.createElement('h1');
    content = this.content;
    pastedSection.appendChild(content);
}


function random(min, max) {
    return Math.random() * (max - min) + min;
  }



let dataArray = [];

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();
    let form = document.getElementById('form');

    let author = event.target.authName.value;
    author = this.author;

    let title = event.target.titleName.value;
    title = this.title;

    let subject = event.target.subject.value;
    subject = this.subject;


    let content = event.target.content.value;
    content = this.content;


    let day = event.target.day.value;
    day = this.day;

    let month = event.target.month.value;
    month = this.month;

    let year = event.target.year.value;
    year = this.year;

    let likes = random(1, 500);
    likes = this.likes;

    let id = random(1, 454512);
    id = this.id;

    let newArticle = new Article(author, title, subject, content, day, month, year, id);
    dataArray.push(newArticle);


    newArticle.render();

    localStorage.setItem('article', JSON.stringify(newArticle));
}
