function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

/* 
1. get the container element where you want to add the new elements

*/

function displayPost(posts){
    const postsContainer = document.getElementById('posts-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        console.log(post);
        postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post: title</h5>
            <p>Post Description</p>
        `;
        postsContainer.appendChild(postDiv);
    }
}

loadPost();