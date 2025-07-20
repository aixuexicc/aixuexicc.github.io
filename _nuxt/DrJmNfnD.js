import{_ as x}from"./D6baybDg.js";import{K as v,r as w,c as a,a as o,b as m,w as p,g as i,u as t,t as l,F as _,e as k,o as s,d as g}from"./CLZiOwN6.js";import{u as O}from"./BH3oZbtf.js";const S={class:"container mx-auto px-4 py-8"},N={class:"mb-8"},J={class:"max-w-4xl mx-auto"},B={key:0,class:"mb-8 pb-8 border-b border-gray-200"},$={class:"text-4xl font-bold text-gray-900 mb-4"},T={class:"flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4"},C=["datetime"],M={key:1},j={key:0,class:"text-xl text-gray-600 leading-relaxed"},F={key:1,class:"flex flex-wrap gap-2 mt-4"},A={class:"prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"},W=["innerHTML"],D={key:1,class:"text-center py-8"},U={class:"max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200"},E={__name:"[...slug]",setup(R){const c=v(),h={"welcome-to-omniboxes-blog":{title:"Welcome to the Omniboxes Blog",description:"Introducing our new blog where we'll share insights about web development tools, productivity tips, and the latest features on Omniboxes.",date:"2025-07-19",author:"Omniboxes Team",tags:["announcement","blog","tools"],content:`
# Welcome to the Omniboxes Blog

We're excited to announce the launch of our new blog! This is where we'll be sharing:

## What You Can Expect

- **Tool Tutorials**: Deep dives into how to use our various online tools effectively
- **Development Tips**: Best practices for web development and productivity
- **Feature Updates**: Announcements about new tools and improvements
- **Community Highlights**: Showcasing how our users are leveraging our tools

## Our Mission

At Omniboxes, we believe in making web development and daily tasks easier through simple, powerful tools. Our blog will serve as a resource to help you get the most out of our platform and stay updated with the latest developments.

## Stay Connected

Make sure to bookmark this page and check back regularly for new content. We're planning to publish new articles weekly, covering everything from basic tool usage to advanced productivity techniques.

Thank you for being part of the Omniboxes community!

---

*Have suggestions for blog topics? Feel free to reach out to us through our contact page.*
    `},"mastering-json-formatting":{title:"Mastering JSON Formatting: Tips and Best Practices",description:"Learn how to effectively format, validate, and work with JSON data using our JSON formatter tool and other techniques.",date:"2025-07-18",author:"Omniboxes Team",tags:["json","formatting","tutorial","tools"],content:`
# Mastering JSON Formatting: Tips and Best Practices

JSON (JavaScript Object Notation) has become the standard for data exchange in modern web applications. Whether you're working with APIs, configuration files, or data storage, properly formatted JSON is crucial for readability and debugging.

## Why JSON Formatting Matters

Properly formatted JSON offers several benefits:

- **Improved Readability**: Well-structured JSON is easier to read and understand
- **Easier Debugging**: Formatted JSON makes it simple to spot errors and inconsistencies
- **Better Collaboration**: Team members can quickly understand data structures
- **Reduced Errors**: Clear formatting helps prevent syntax mistakes

## Using Our JSON Formatter

Our [JSON Formatter tool](/json-formatter) provides several key features:

### 1. Automatic Formatting
Simply paste your JSON data, and our tool will automatically:
- Add proper indentation
- Organize nested objects
- Ensure consistent spacing
- Validate syntax

### 2. Minification
When you need compact JSON for production:
- Removes unnecessary whitespace
- Reduces file size
- Maintains data integrity

### 3. Validation
Our tool helps you identify:
- Syntax errors
- Missing brackets or braces
- Incorrect comma placement
- Invalid data types

## Best Practices for JSON

### 1. Use Consistent Naming Conventions
\`\`\`json
{
  "user_id": 123,
  "user_name": "john_doe",
  "created_at": "2025-07-18T10:30:00Z"
}
\`\`\`

### 2. Keep Nesting Reasonable
Avoid deeply nested structures when possible.

### 3. Use Appropriate Data Types
- Strings for text: \`"name": "John"\`
- Numbers for numeric values: \`"age": 30\`
- Booleans for true/false: \`"active": true\`
- Arrays for lists: \`"tags": ["json", "tutorial"]\`

## Common JSON Mistakes to Avoid

1. **Trailing Commas**: JSON doesn't allow trailing commas
2. **Single Quotes**: Use double quotes for strings
3. **Undefined Values**: Use \`null\` instead of \`undefined\`
4. **Comments**: JSON doesn't support comments

## Conclusion

Mastering JSON formatting is essential for modern web development. Our JSON formatter tool makes it easy to work with JSON data, whether you're debugging, sharing data with team members, or preparing data for production use.

Try our [JSON Formatter](/json-formatter) today and experience the difference proper formatting can make in your development workflow!
    `}},f=c.params.slug[0]||c.params.slug,e=w(h[f]||null);O(()=>{var n,r;return{title:(n=e.value)!=null&&n.title?`${e.value.title} - Omniboxes Blog`:"Blog - Omniboxes",meta:[{name:"description",content:((r=e.value)==null?void 0:r.description)||"Read our latest blog post about web development tools and productivity tips."}]}});const b=n=>n?new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"",y=n=>n?n.replace(/^### (.*$)/gim,"<h3>$1</h3>").replace(/^## (.*$)/gim,"<h2>$1</h2>").replace(/^# (.*$)/gim,"<h1>$1</h1>").replace(/\*\*(.*)\*\*/gim,"<strong>$1</strong>").replace(/\*(.*)\*/gim,"<em>$1</em>").replace(/```json\n([\s\S]*?)\n```/gim,'<pre><code class="language-json">$1</code></pre>').replace(/```([\s\S]*?)```/gim,"<pre><code>$1</code></pre>").replace(/`([^`]*)`/gim,"<code>$1</code>").replace(/\[([^\]]*)\]\(([^\)]*)\)/gim,'<a href="$2">$1</a>').replace(/\n\n/gim,"</p><p>").replace(/\n/gim,"<br>").replace(/^(.*)$/gim,"<p>$1</p>").replace(/<p><\/p>/gim,"").replace(/<p>(<h[1-6]>.*<\/h[1-6]>)<\/p>/gim,"$1").replace(/<p>(<pre>.*<\/pre>)<\/p>/gim,"$1"):"";return(n,r)=>{const d=x;return s(),a("main",S,[o("nav",N,[m(d,{to:"/blog",class:"inline-flex items-center text-blue-600 hover:text-blue-800"},{default:p(()=>r[0]||(r[0]=[o("svg",{class:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),g(" Back to Blog ")])),_:1,__:[0]})]),o("article",J,[t(e)?(s(),a("header",B,[o("h1",$,l(t(e).title),1),o("div",T,[t(e).date?(s(),a("time",{key:0,datetime:t(e).date},l(b(t(e).date)),9,C)):i("",!0),t(e).author?(s(),a("span",M,"by "+l(t(e).author),1)):i("",!0)]),t(e).description?(s(),a("p",j,l(t(e).description),1)):i("",!0),t(e).tags&&t(e).tags.length?(s(),a("div",F,[(s(!0),a(_,null,k(t(e).tags,u=>(s(),a("span",{key:u,class:"inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"},l(u),1))),128))])):i("",!0)])):i("",!0),o("div",A,[t(e)&&t(e).content?(s(),a("div",{key:0,innerHTML:y(t(e).content)},null,8,W)):(s(),a("div",D,r[1]||(r[1]=[o("p",{class:"text-gray-600"},"Article not found.",-1)])))])]),o("div",U,[m(d,{to:"/blog",class:"inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"},{default:p(()=>r[2]||(r[2]=[o("svg",{class:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),g(" Back to all articles ")])),_:1,__:[2]})])])}}};export{E as default};
