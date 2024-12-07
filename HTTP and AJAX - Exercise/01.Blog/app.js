function attachEvents() {
    const loadPostsButton = document.getElementById("btnLoadPosts");
const viewPostButton = document.getElementById("btnViewPost");
const postsDropdown = document.getElementById("posts");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");
const postComments = document.getElementById("post-comments");

const POSTS_URL = "http://localhost:3030/jsonstore/blog/posts";
const COMMENTS_URL = "http://localhost:3030/jsonstore/blog/comments";

// Load Posts
async function loadPosts() {
    try {
        const response = await fetch(POSTS_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        const postsData = await response.json();

        // Clear the dropdown
        postsDropdown.innerHTML = "";

        // Populate dropdown with posts
        Object.entries(postsData).forEach(([key, post]) => {
            const option = document.createElement("option");
            option.value = key;
            option.textContent = post.title;
            postsDropdown.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading posts:", error);
    }
}

// View Post Details and Comments
async function viewPostDetails() {
    const selectedPostId = postsDropdown.value;

    if (!selectedPostId) {
        alert("Please select a post.");
        return;
    }

    try {
        // Fetch posts to get the selected post details
        const postsResponse = await fetch(POSTS_URL);
        const postsData = await postsResponse.json();
        const selectedPost = postsData[selectedPostId];

        // Display the selected post details
        postTitle.textContent = selectedPost.title;
        postBody.textContent = selectedPost.body;

        // Fetch comments
        const commentsResponse = await fetch(COMMENTS_URL);
        const commentsData = await commentsResponse.json();

        // Filter and display comments for the selected post
        postComments.innerHTML = "";
        Object.values(commentsData)
            .filter(comment => comment.postId === selectedPostId)
            .forEach(comment => {
                const li = document.createElement("li");
                li.textContent = comment.text;
                postComments.appendChild(li);
            });
    } catch (error) {
        console.error("Error viewing post details:", error);
    }
}

// Event Listeners
loadPostsButton.addEventListener("click", loadPosts);
viewPostButton.addEventListener("click", viewPostDetails);

}

attachEvents();