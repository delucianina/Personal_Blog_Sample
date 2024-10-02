// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const backBtn = document.querySelector('#back');
const main = document.querySelector('#main-tag');

// TODO: Create a function that builds an element and appends it to the DOM
function showPosts() {

    let storedPosts = readLocalStorage();
    main.innerHTML = '';

    storedPosts.forEach(function(postObj) {
        const newArticle = document.createElement("article");

        // add title 
        const titleAdd = document.createElement("h2");
        titleAdd.textContent = postObj.title;
        newArticle.append(titleAdd);

        // add content 
        const contentAdd = document.createElement("blockquote");
        contentAdd.textContent = postObj.content;
        newArticle.append(contentAdd);

        // add username 
        const usernameAdd = document.createElement("p");
        usernameAdd.textContent = postObj.username;
        newArticle.append(usernameAdd);

        // add it ALL
        main.append(newArticle);
    }
)};





// TODO: Create a function that handles the case where there are no blog posts to display
function errorDisplay() {

};





// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    let renderStoredPosts = readLocalStorage(); 

    if (!renderStoredPosts) {
        errorDisplay();
    } else {
        renderStoredPosts.forEach((post, i) => {
            showPosts();
        })
    }

}




// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener('click', redirectPage("./index.html"));