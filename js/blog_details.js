function getBlog() {
  var ClickedBlog = sessionStorage.getItem("ClickedBlog");
  return ClickedBlog;
}

const ElblogPost_blogheading = document.getElementById("blogPost_blogheading");
const ElblogPost_blogpubDate = document.getElementById("blogPost_blogpubDate");
const ElblogPost_blogAuthor = document.getElementById("blogPost_blogAuthor");
const ElblogPost_blogImage = document.getElementById("blogPost_blogImage");
const ElblogPost_blogParas = document.getElementById("blogPost_blogParas");

const Blog = getBlog();

for (const singleBlog of HydroBlogs) {
  if (ElblogPost_blogheading) {
    if (singleBlog.blog_id == Blog) {
      ElblogPost_blogheading.textContent = `${singleBlog.blog_heading}`;
      ElblogPost_blogpubDate.textContent = `${singleBlog.blog_fullDate}`;
      ElblogPost_blogAuthor.textContent = `${singleBlog.blog_author}`;
      ElblogPost_blogImage.src = `${singleBlog.blog_image}`;
      ElblogPost_blogImage.alt = `${singleBlog.blog_heading}`;
      for (const singlePara of singleBlog.blog_paragraphs) {
        if (singlePara.paragraphHeading != "") {
          const hElement = document.createElement("h5");
          hElement.textContent = singlePara.paragraphHeading;
          hElement.style.color = "#1b76af";
          ElblogPost_blogParas.appendChild(hElement);
        }
        const pElement = document.createElement("p");
        pElement.textContent = singlePara.paragraph; // Access the 'paragraph' property
        ElblogPost_blogParas.appendChild(pElement);
      }
    }
  }
}

const ElblogPost_recentBlogs = document.getElementById("blogPost_recentBlogs");

const LatestFiveBlogs = HydroBlogs.slice(-5);
for (const singleLatestBlog of LatestFiveBlogs) {
  if (ElblogPost_recentBlogs) {
    const recentBlogItem = `<div>
        <p
        class="text-color-default text-uppercase text-1 mb-0 d-block text-decoration-none"
        >${singleLatestBlog.blog_fullDate}
        <span class="opacity-3 d-inline-block px-2">|</span> ${singleLatestBlog.blog_author}</p
      >
      <a  onclick="setBlogId('${singleLatestBlog.blog_id}')"
        href="blog-post.html"
        class="text-color-dark text-hover-primary font-weight-bold text-3 d-block pb-3 line-height-4"
        >${singleLatestBlog.blog_heading}</a
      >
      </div>`;
    ElblogPost_recentBlogs.innerHTML += recentBlogItem;
  }
}
