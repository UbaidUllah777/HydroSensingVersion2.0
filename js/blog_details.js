function getBlog (){
    var ClickedBlog = sessionStorage.getItem('ClickedBlog');
    return ClickedBlog
    
  
    
  }

const ElblogPost_blogheading=document.getElementById("blogPost_blogheading");
const ElblogPost_blogpubDate=document.getElementById("blogPost_blogpubDate");
const ElblogPost_blogAuthor=document.getElementById("blogPost_blogAuthor");
const ElblogPost_blogImage=document.getElementById("blogPost_blogImage");
const ElblogPost_blogParas=document.getElementById("blogPost_blogParas");

const Blog =getBlog();

for(const singleBlog of HydroBlogs){
if(ElblogPost_blogheading){
    if(singleBlog.blog_id==Blog){
        ElblogPost_blogheading.textContent=`${singleBlog.blog_heading}`
        ElblogPost_blogpubDate.textContent=`${singleBlog.blog_fullDate}`
        ElblogPost_blogAuthor.textContent=`${singleBlog.blog_author}`;
        ElblogPost_blogImage.src=`${singleBlog.blog_image}`;
        ElblogPost_blogImage.alt=`${singleBlog.blog_heading}`;
        for(const singlePara of singleBlog.blog_paragraphs){
            const pElement = document.createElement("p");
            pElement.textContent = singlePara.paragraph; // Access the 'paragraph' property
            ElblogPost_blogParas.appendChild(pElement);
        }

    }
}
}