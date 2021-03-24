console.log('DOM');

// Wyszukaj element, który posiada dwie klasy tj. `.comments__item` oraz `.comments__item--newest`.
const comments = document.querySelector('.comments');
let containsTwoClasses = null;

function findIfContains(){
for (let i = 0; i < comments.childNodes.length; i++){
    if(comments.childNodes[i].classList == "comments__item comments__item--newest"){
        const className = comments.childNodes[i]
        return className;
    }
}
return className;
}

containsTwoClasses = findIfContains();

// Następnie przeszukaj ten element względem znaczników, które posiadają atrybut `data-info`.

const elementWithTwoClasses = document.querySelector('.comments__item.comments__item--newest');
console.log(elementWithTwoClasses);


