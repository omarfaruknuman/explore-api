function loadPracticePost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPracticePost(data))
}

function displayPracticePost(data){
    const postsContainer = document.getElementById('p-container');
    for(const post of data){
        const postDiv = document.createElement('div');
        postDiv.classList.add('pst');
        console.log(post);
        postDiv.innerHTML = `
            <h4>id: ${post.id}</h4>
            <h3>Title: ${post.title}</h3>
            <p>body: ${post.body}</p>
        `
       postsContainer.appendChild(postDiv)
    }
}

loadPracticePost();
