const posts = [
    {
        name: 'Vincent van Gogh',
        username: 'vincey1853',
        location: 'Zundert, Netherlands',
        avatar: 'images/avatar-vangogh.jpg',
        post: 'images/post-vangogh.jpg',
        comment: 'just took a few mushrooms lol',
        likes: 21,
    },
    {
        name: 'Gustave Courbet',
        username: 'gus1819',
        location: 'Ornans, France',
        avatar: 'images/avatar-courbet.jpg',
        post: 'images/post-courbet.jpg',
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
    },
    {
        name: 'Joseph Ducreux',
        username: 'jd1735',
        location: 'Paris, France',
        avatar: 'images/avatar-ducreux.jpg',
        post: 'images/post-ducreux.jpg',
        comment:
            'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
        likes: 152,
    },
];

document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.querySelector('.section');
    postsContainer.innerHTML = ''; 

    function createPostElement(post) {
        const postHTML = `
            <div class="user-info-with-img-container">
                <img class="logo-img" src="${post.avatar}" alt="${post.name} image">
                <div class="user-info-container">
                    <p class="artist-name">${post.name}</p>
                    <p class="home-location">${post.location}</p>
                </div>
            </div>
            <img class="post-img" src="${post.post}" alt="Portrait of ${post.name}">
            <div class="interactables-likes-user-comment-container">
                <div class="interactables">
                    <img class="interactable-img heart-icon" src="images/icon-heart.png" alt="Heart Icon" data-liked="false" data-index="${post.index}">
                    <img class="interactable-img" src="images/icon-comment.png" alt="Comment Icon">
                    <img class="interactable-img" src="images/icon-dm.png" alt="Message Icon">
                </div>
                <p class="bold-text"><span class="likes-count">${post.likes}</span> likes</p>
                <p><span class="bold-text user-name">${post.username}</span>: <span class="comment-text">${post.comment}</span></p>
            </div>
        `;

        const postContainer = document.createElement('div');
        postContainer.innerHTML = postHTML;
        postContainer.classList.add('post-container');

        if (post.index < posts.length - 1) {
            const divider = document.createElement('div');
            divider.className = 'divider';
            postContainer.appendChild(divider);
        }

        return postContainer;
    }

    posts.forEach((post, index) => {
        post.index = index;
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });

    postsContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('heart-icon')) {
            const index = parseInt(e.target.dataset.index);
            const post = posts[index];
            const liked = e.target.dataset.liked === 'true';

            post.likes += liked ? -1 : 1;
            e.target.dataset.liked = !liked;
            e.target.classList.toggle('liked', !liked);
            e.target.style.opacity = liked ? '1' : '0.4';

            const likesCountElement = e.target
                .closest('.interactables-likes-user-comment-container')
                .querySelector('.likes-count');
            likesCountElement.textContent = post.likes;
        }
    });
});

let testArray = [1, 2, 3];
Array.prototype.sayHello = function() {
    console.log("Say Hello");
};
//testArray.sayHello();


Array.prototype.filterCopy = function(callbackFunction) {
    let copyArray = [];
    for (let i=0; i < this.length; i++) {
    //for (let arrayEntry of dummyArray) {
        if (callbackFunction(this[i])) {
            copyArray.push(this[i]);
        }
    }
    console.log("filterCopy is working");
    return copyArray;
}
console.log(testArray.filterCopy(
        function() {
            console.log("Hello")
        }
    )
);


Array.prototype.forEach = function(callbackFunction) {
    for (let i=0; i < this.length; i++) {
    //for (let arrayEntry of dummyArray) {
        callbackFunction(this[i]);
        //return this[i]; -> The function will return the result natively without "return" use
    }
}
console.log(testArray.forEach(
        function(arrayPositionValue) {
            //console.log("Hello")
            arrayPositionValue = arrayPositionValue + 1;
        }
    )
);




/*Array.prototype.includesCopy = function(dummyArray, matchingValue) {
    for (let i=0; i < dummyArray.length; i++) {
        if (dummyArray[i] === matchingValue) {
            return true;
        }
    }
    return false;
}
testArray.includesCopy(2);*/

Array.prototype.includesCopy = function(matchingValue) {
    for (let i=0; i < this.length; i++) {
        if (this[i] === matchingValue) {
            return true;
        }
    }
    return false;
}
console.log(testArray.includesCopy(5));