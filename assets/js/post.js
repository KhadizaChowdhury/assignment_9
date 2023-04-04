function loadCat(cat_id){
    // Start Loader
    toggleSpinner(true);

    const cat_url = `https://openapi.programming-hero.com/api/news/category/${cat_id}`;
    // console.log(cat_url);
    fetch(cat_url)
        .then(response => response.json())
        .then(data => displayPosts(data))
        .catch(error => console.error(error));
}
const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById("loader")
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

const displayPosts = (catN) =>{
    // console.log(catN.data)
    const posts = catN.data;

    const li_list  = document.getElementById('displayCat');
    li_list.innerHTML ="";
    toggleSpinner(false);

    const noPost = document.getElementById('post-not-found');
    // if    if(posts.length < 0){}
    if(posts.length === 0){
        noPost.classList.remove('d-none');
        document.getElementById('page-content').classList.add('d-none');
    }
    else{
        noPost.classList.add('d-none');
        document.getElementById('page-content').classList.add('d-none');
        
        const post_count = document.createElement("div");
        post_count.innerHTML =`<div class="p-3 my-5 bg-white fw-semibold text-dark">${posts.length} posts found</div>`;
        li_list.appendChild(post_count);
    }
    // const postShow = posts.slice(0,5);

    for (const post of posts)
    {
        // console.log(post.title);
        const li_items = document.createElement("div");
        li_items.innerHTML =`
        <div class="card" style="margin-bottom: 20px;">
        <img class="card-img-top w-100 d-block fit-cover" style="height: 400px;" src=${post.thumbnail_url}">
            <div class="card-body p-4">
                <h4 class="card-title">${post.title}</h4>
                <p class="card-text">${post.details.length > 500 ? post.details.slice(0, 500) + ' ...' : post.details}</p>
                <a class="btn btn-primary btn-lg me-2" role="button" href="post-details.php">Read More</a>
            </div>
        </div>     
        `;
        li_list.appendChild(li_items);
    }
};

const postDetails = (post_id) =>{
    const news_url = `https://openapi.programming-hero.com/api/news/${post_id}`;
    // console.log(news_url);
    fetch(news_url)
        .then(response => response.json())
        .then(data => newsDetails(data))
        .catch(error => console.error(error));
}

const newsDetails = (post) =>{
    console.log(post.data[0])
    const news  = document.getElementById('postDetails');
    const newsDetails = post.data[0];
    // post.innerHTML ="";
    toggleSpinner(false);
    const postLabel  = document.getElementById('postDetailsLabel');
    postLabel.innerHTML = `<h4>${newsDetails.title}</h4>
    <p>Published: ${newsDetails.author.published_date ? newsDetails.author.published_date : 'No published Date Found </p>'}
    `;

    const postAuthor  = document.getElementById('postAuthor');
    postAuthor.innerHTML = `Author: ${newsDetails.author.name ? newsDetails.author.name : 'Author not Found'}`;

    const info  = document.getElementById('info');
    info.innerHTML = `Others_info:
    <br><p class="p-1 my-1 bg-info text-dark">Is_trending: ${newsDetails.others_info ? newsDetails.others_info.is_trending
        : 'Not Found</p>'}`;
            
    const view  = document.getElementById('view');
    view.innerHTML = `<i class="fa-regular fa-eye"> ${newsDetails.total_view ? newsDetails.total_view : 'No release Date Found'}`;

    const body  = document.getElementById('modal-body');
    body.innerHTML = `
        <img src="${newsDetails.thumbnail_url ? newsDetails.thumbnail_url: 'No Image Found'}" class="me-3 rounded modal-img" alt="...">
        <div class="mt-4">
        Details: ${newsDetails.details ? newsDetails.details
                : 'Not Found'}</div>`;
};