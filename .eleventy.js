module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy({"_includes/img": "img"});
  eleventyConfig.addPassthroughCopy("css");
  return {
    pathPrefix: "/silly-eleventy-demo"
  }
};