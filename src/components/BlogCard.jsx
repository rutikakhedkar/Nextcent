import React from "react";

const BlogCard = ({ image, title, link }) => {
  return (
    <div class="position-relative bg-silver rounded-4 card" data-aos="fade-right">
  <img src={image} width="368" height="286" alt="Title" class="h-auto w-auto" />
  <div class="px-3 py-3 w-75 shadow text-center d-flex flex-column justify-content-center align-items-center bg-white position-absolute top-100 start-50 translate-middle rounded-3">
    <h1 class="fs-4">{title}</h1>
    <a href={link} class="link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover mt-3 px-3 py-3">
      Read more &rarr;
    </a>
  </div>
</div>

  );
};

export default BlogCard;
