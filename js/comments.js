function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => dispalyComments(data))
}

function dispalyComments(data){
    const ul = document.getElementById('us-list');
    for(user of data){
        console.log(user.email)
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
    }
}