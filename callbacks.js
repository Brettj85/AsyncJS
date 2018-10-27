const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

getPosts();

function createPosts(post){
    setTimeout(() => {
       post.push(post); 
    }, 2000);
}

createPost({title: 'Post Three', body: 'This is post three'});