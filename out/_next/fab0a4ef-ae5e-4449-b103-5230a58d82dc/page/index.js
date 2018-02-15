module.exports=__NEXT_REGISTER_PAGE("/",function(){var e=webpackJsonp([2],{182:function(e,t,n){e.exports=n(183)},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(30);var i=n.n(r);var s=n(11);var o=n.n(s);var a=n(184);var l=n.n(a);var u=n(185);var c=n.n(u);var h=n(191);var p=n.n(h);var f=function e(t){var n=t.data;var r=n.map(function(e){var t=e.id,n=e.title,r=e.link,i=e.description;return o.a.createElement("li",{key:t},o.a.createElement("h3",{className:"h2 mb0"},o.a.createElement("a",{href:r,target:"_blank"},n," ",o.a.createElement("svg",{viewBox:"0 0 32 32",fill:"none",stroke:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"10.9375%",className:"icon mr05"},o.a.createElement("path",{d:"M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18"})))),o.a.createElement("p",{className:"mt0"}),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:p()(i)}}))});return o.a.createElement("ul",null,r)};var d=f;var g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r))e[r]=n[r]}return e};var m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function b(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(i,s){try{var o=t[i](s);var a=o.value}catch(e){n(e);return}if(o.done)e(a);else return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function x(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var v=function(e){x(t,e);function t(e){k(this,t);var n=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={flick:false};n.flickIt=n.flickIt.bind(n);return n}m(t,[{key:"flickIt",value:function e(){var t=this;this.setState({flick:true});setTimeout(function(){t.setState({flick:false})},1e3)}},{key:"render",value:function e(){var t=this.props.projects;return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("title",null,"Oddoye David | Web Developer"),o.a.createElement("link",{rel:"stylesheet",href:"static/css/main.css"}),o.a.createElement("meta",{charset:"utf8"}),o.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge, chrome=1"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),o.a.createElement("meta",{name:"handheldfriendly",content:"true"}),o.a.createElement("meta",{name:"mobileoptimized",content:"320"}),o.a.createElement("meta",{name:"title",content:"Oddoye David"}),o.a.createElement("meta",{name:"description",content:"Backend Web Development"}),o.a.createElement("meta",{property:"og:title",content:"Oddoye David"}),o.a.createElement("meta",{property:"og:description",content:"Oddoye David | Web Developer"}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:url",content:"http://oddoye.com"}),o.a.createElement("meta",{property:"og:site_name",content:"Oddoye David"})),o.a.createElement("header",{role:"banner"},o.a.createElement("nav",{role:"navigation",className:"h4"},o.a.createElement("a",{href:"#home",title:"home",className:"js-fx",onClick:this.flickIt},"Oddoye David"),o.a.createElement("span",null," • "),o.a.createElement("a",{href:"#projects",title:"projects",className:"js-fx",onClick:this.flickIt},"Projects"))),o.a.createElement("main",{role:"main"},o.a.createElement("section",{id:"projects"},o.a.createElement("h2",{className:"h4 caps"},"Projects & Experiments"),o.a.createElement("hr",null),o.a.createElement(d,{data:t})),o.a.createElement("section",{id:"home"},o.a.createElement("h2",null,"Oddoye David is a software developer. Proficient in HTML/CSS, Node JS, Angular 1.x, Ionic 1.x. and React JS"),o.a.createElement("hr",null),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://twitter.com/theRealBraZee",target:"_blank",title:"Twitter",className:"h3"},"twitter")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/oddoye-david",target:"_blank",title:"Github",className:"h3"},"github"))))),o.a.createElement("div",{className:"flick "+(this.state.flick?"flick-on":"")}),o.a.createElement("p",{style:{textDecoration:"underline"}},"© 2018"))}}],[{key:"getInitialProps",value:function(){var e=b(i.a.mark(function e(){var t,n;return i.a.wrap(function e(r){while(1)switch(r.prev=r.next){case 0:r.next=2;return l()("https://cdn.contentful.com/spaces/"+"dq2svaygq90q"+"/entries?access_token="+"c6623beeab3a4466e30cbbddfbcdf345f9b7275365df7c8582de5d2396ff5884");case 2:t=r.sent;r.next=5;return t.json();case 5:n=r.sent;return r.abrupt("return",{projects:n.items.map(function(e){return g({},e.fields,{id:e.sys.id})})});case 7:case"end":return r.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]);return t}(o.a.Component);var w=t["default"]=v},184:function(e,t,n){e.exports=window.fetch||(window.fetch=n(91).default||n(91))},185:function(e,t,n){e.exports=n(92)},191:function(e,t,n){(function(t){(function(){"use strict";var t={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:f,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:f,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:f,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};t.bullet=/(?:[*+-]|\d+\.)/;t.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;t.item=u(t.item,"gm")(/bull/g,t.bullet)();t.list=u(t.list)(/bull/g,t.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+t.def.source+")")();t.blockquote=u(t.blockquote)("def",t.def)();t._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";t.html=u(t.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,t._tag)();t.paragraph=u(t.paragraph)("hr",t.hr)("heading",t.heading)("lheading",t.lheading)("blockquote",t.blockquote)("tag","<"+t._tag)("def",t.def)();t.normal=d({},t);t.gfm=d({},t.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/});t.gfm.paragraph=u(t.paragraph)("(?!","(?!"+t.gfm.fences.source.replace("\\1","\\2")+"|"+t.list.source.replace("\\1","\\3")+"|")();t.tables=d({},t.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function n(e){this.tokens=[];this.tokens.links={};this.options=e||g.defaults;this.rules=t.normal;if(this.options.gfm)if(this.options.tables)this.rules=t.tables;else this.rules=t.gfm}n.rules=t;n.lex=function(e,t){var r=new n(t);return r.lex(e)};n.prototype.lex=function(e){e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(e,true)};n.prototype.token=function(e,n,r){var e=e.replace(/^ +$/gm,""),i,s,o,a,l,u,c,h,p;while(e){if(o=this.rules.newline.exec(e)){e=e.substring(o[0].length);if(o[0].length>1)this.tokens.push({type:"space"})}if(o=this.rules.code.exec(e)){e=e.substring(o[0].length);o=o[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?o.replace(/\n+$/,""):o});continue}if(o=this.rules.fences.exec(e)){e=e.substring(o[0].length);this.tokens.push({type:"code",lang:o[2],text:o[3]||""});continue}if(o=this.rules.heading.exec(e)){e=e.substring(o[0].length);this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});continue}if(n&&(o=this.rules.nptable.exec(e))){e=e.substring(o[0].length);u={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/\n$/,"").split("\n")};for(h=0;h<u.align.length;h++)if(/^ *-+: *$/.test(u.align[h]))u.align[h]="right";else if(/^ *:-+: *$/.test(u.align[h]))u.align[h]="center";else if(/^ *:-+ *$/.test(u.align[h]))u.align[h]="left";else u.align[h]=null;for(h=0;h<u.cells.length;h++)u.cells[h]=u.cells[h].split(/ *\| */);this.tokens.push(u);continue}if(o=this.rules.lheading.exec(e)){e=e.substring(o[0].length);this.tokens.push({type:"heading",depth:"="===o[2]?1:2,text:o[1]});continue}if(o=this.rules.hr.exec(e)){e=e.substring(o[0].length);this.tokens.push({type:"hr"});continue}if(o=this.rules.blockquote.exec(e)){e=e.substring(o[0].length);this.tokens.push({type:"blockquote_start"});o=o[0].replace(/^ *> ?/gm,"");this.token(o,n,true);this.tokens.push({type:"blockquote_end"});continue}if(o=this.rules.list.exec(e)){e=e.substring(o[0].length);a=o[2];this.tokens.push({type:"list_start",ordered:a.length>1});o=o[0].match(this.rules.item);i=false;p=o.length;h=0;for(;h<p;h++){u=o[h];c=u.length;u=u.replace(/^ *([*+-]|\d+\.) +/,"");if(~u.indexOf("\n ")){c-=u.length;u=!this.options.pedantic?u.replace(new RegExp("^ {1,"+c+"}","gm"),""):u.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&h!==p-1){l=t.bullet.exec(o[h+1])[0];if(a!==l&&!(a.length>1&&l.length>1)){e=o.slice(h+1).join("\n")+e;h=p-1}}s=i||/\n\n(?!\s*$)/.test(u);if(h!==p-1){i="\n"===u.charAt(u.length-1);if(!s)s=i}this.tokens.push({type:s?"loose_item_start":"list_item_start"});this.token(u,false,r);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(o=this.rules.html.exec(e)){e=e.substring(o[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===o[1]||"script"===o[1]||"style"===o[1]),text:o[0]});continue}if(!r&&n&&(o=this.rules.def.exec(e))){e=e.substring(o[0].length);this.tokens.links[o[1].toLowerCase()]={href:o[2],title:o[3]};continue}if(n&&(o=this.rules.table.exec(e))){e=e.substring(o[0].length);u={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(h=0;h<u.align.length;h++)if(/^ *-+: *$/.test(u.align[h]))u.align[h]="right";else if(/^ *:-+: *$/.test(u.align[h]))u.align[h]="center";else if(/^ *:-+ *$/.test(u.align[h]))u.align[h]="left";else u.align[h]=null;for(h=0;h<u.cells.length;h++)u.cells[h]=u.cells[h].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(u);continue}if(n&&(o=this.rules.paragraph.exec(e))){e=e.substring(o[0].length);this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});continue}if(o=this.rules.text.exec(e)){e=e.substring(o[0].length);this.tokens.push({type:"text",text:o[0]});continue}if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}return this.tokens};var r={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ <>]+(@|:\/)[^ <>]+)>/,url:f,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:f,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};r._inside=/(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/;r._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;r.link=u(r.link)("inside",r._inside)("href",r._href)();r.reflink=u(r.reflink)("inside",r._inside)();r.normal=d({},r);r.pedantic=d({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});r.gfm=d({},r.normal,{escape:u(r.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:u(r.text)("]|","~]|")("|","|https?://|")()});r.breaks=d({},r.gfm,{br:u(r.br)("{2,}","*")(),text:u(r.gfm.text)("{2,}","*")()});function i(e,t){this.options=t||g.defaults;this.links=e;this.rules=r.normal;this.renderer=this.options.renderer||new s;this.renderer.options=this.options;if(!this.links)throw new Error("Tokens array requires a `links` property.");if(this.options.gfm)if(this.options.breaks)this.rules=r.breaks;else this.rules=r.gfm;else if(this.options.pedantic)this.rules=r.pedantic}i.rules=r;i.output=function(e,t,n){var r=new i(t,n);return r.output(e)};i.prototype.output=function(e){var t="",n,r,i,s;while(e){if(s=this.rules.escape.exec(e)){e=e.substring(s[0].length);t+=s[1];continue}if(s=this.rules.autolink.exec(e)){e=e.substring(s[0].length);if("@"===s[2]){r=a(":"===s[1].charAt(6)?this.mangle(s[1].substring(7)):this.mangle(s[1]));i=this.mangle("mailto:")+r}else{r=a(s[1]);i=r}t+=this.renderer.link(i,null,r);continue}if(!this.inLink&&(s=this.rules.url.exec(e))){e=e.substring(s[0].length);r=a(s[1]);i=r;t+=this.renderer.link(i,null,r);continue}if(s=this.rules.tag.exec(e)){if(!this.inLink&&/^<a /i.test(s[0]))this.inLink=true;else if(this.inLink&&/^<\/a>/i.test(s[0]))this.inLink=false;e=e.substring(s[0].length);t+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):a(s[0]):s[0];continue}if(s=this.rules.link.exec(e)){e=e.substring(s[0].length);this.inLink=true;t+=this.outputLink(s,{href:s[2],title:s[3]});this.inLink=false;continue}if((s=this.rules.reflink.exec(e))||(s=this.rules.nolink.exec(e))){e=e.substring(s[0].length);n=(s[2]||s[1]).replace(/\s+/g," ");n=this.links[n.toLowerCase()];if(!n||!n.href){t+=s[0].charAt(0);e=s[0].substring(1)+e;continue}this.inLink=true;t+=this.outputLink(s,n);this.inLink=false;continue}if(s=this.rules.strong.exec(e)){e=e.substring(s[0].length);t+=this.renderer.strong(this.output(s[2]||s[1]));continue}if(s=this.rules.em.exec(e)){e=e.substring(s[0].length);t+=this.renderer.em(this.output(s[2]||s[1]));continue}if(s=this.rules.code.exec(e)){e=e.substring(s[0].length);t+=this.renderer.codespan(a(s[2].trim(),true));continue}if(s=this.rules.br.exec(e)){e=e.substring(s[0].length);t+=this.renderer.br();continue}if(s=this.rules.del.exec(e)){e=e.substring(s[0].length);t+=this.renderer.del(this.output(s[1]));continue}if(s=this.rules.text.exec(e)){e=e.substring(s[0].length);t+=this.renderer.text(a(this.smartypants(s[0])));continue}if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}return t};i.prototype.outputLink=function(e,t){var n=a(t.href),r=t.title?a(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,a(e[1]))};i.prototype.smartypants=function(e){if(!this.options.smartypants)return e;return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};i.prototype.mangle=function(e){if(!this.options.mangle)return e;var t="",n=e.length,r=0,i;for(;r<n;r++){i=e.charCodeAt(r);if(Math.random()>.5)i="x"+i.toString(16);t+="&#"+i+";"}return t};function s(e){this.options=e||{}}s.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);if(null!=r&&r!==e){n=true;e=r}}if(!t)return"<pre><code>"+(n?e:a(e,true))+"\n</code></pre>";return'<pre><code class="'+this.options.langPrefix+a(t,true)+'">'+(n?e:a(e,true))+"\n</code></pre>\n"};s.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"};s.prototype.html=function(e){return e};s.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"};s.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};s.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"};s.prototype.listitem=function(e){return"<li>"+e+"</li>\n"};s.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"};s.prototype.table=function(e,t){return"<table>\n"+"<thead>\n"+e+"</thead>\n"+"<tbody>\n"+t+"</tbody>\n"+"</table>\n"};s.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"};s.prototype.tablecell=function(e,t){var n=t.header?"th":"td";var r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"};s.prototype.strong=function(e){return"<strong>"+e+"</strong>"};s.prototype.em=function(e){return"<em>"+e+"</em>"};s.prototype.codespan=function(e){return"<code>"+e+"</code>"};s.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};s.prototype.del=function(e){return"<del>"+e+"</del>"};s.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(l(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}if(this.options.baseUrl&&!p.test(e))e=c(this.options.baseUrl,e);var i='<a href="'+e+'"';if(t)i+=' title="'+t+'"';i+=">"+n+"</a>";return i};s.prototype.image=function(e,t,n){if(this.options.baseUrl&&!p.test(e))e=c(this.options.baseUrl,e);var r='<img src="'+e+'" alt="'+n+'"';if(t)r+=' title="'+t+'"';r+=this.options.xhtml?"/>":">";return r};s.prototype.text=function(e){return e};function o(e){this.tokens=[];this.token=null;this.options=e||g.defaults;this.options.renderer=this.options.renderer||new s;this.renderer=this.options.renderer;this.renderer.options=this.options}o.parse=function(e,t,n){var r=new o(t,n);return r.parse(e)};o.prototype.parse=function(e){this.inline=new i(e.links,this.options,this.renderer);this.tokens=e.reverse();var t="";while(this.next())t+=this.tok();return t};o.prototype.next=function(){return this.token=this.tokens.pop()};o.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};o.prototype.parseText=function(){var e=this.token.text;while("text"===this.peek().type)e+="\n"+this.next().text;return this.inline.output(e)};o.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e="",t="",n,r,i,s,o;i="";for(n=0;n<this.token.header.length;n++){s={header:true,align:this.token.align[n]};i+=this.renderer.tablecell(this.inline.output(this.token.header[n]),{header:true,align:this.token.align[n]})}e+=this.renderer.tablerow(i);for(n=0;n<this.token.cells.length;n++){r=this.token.cells[n];i="";for(o=0;o<r.length;o++)i+=this.renderer.tablecell(this.inline.output(r[o]),{header:false,align:this.token.align[o]});t+=this.renderer.tablerow(i)}return this.renderer.table(e,t);case"blockquote_start":var t="";while("blockquote_end"!==this.next().type)t+=this.tok();return this.renderer.blockquote(t);case"list_start":var t="",a=this.token.ordered;while("list_end"!==this.next().type)t+=this.tok();return this.renderer.list(t,a);case"list_item_start":var t="";while("list_item_end"!==this.next().type)t+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(t);case"loose_item_start":var t="";while("list_item_end"!==this.next().type)t+=this.tok();return this.renderer.listitem(t);case"html":var l=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(l);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};function a(e,t){return e.replace(!t?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){t=t.toLowerCase();if("colon"===t)return":";if("#"===t.charAt(0))return"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1));return""})}function u(e,t){e=e.source;t=t||"";return function n(r,i){if(!r)return new RegExp(e,t);i=i.source||i;i=i.replace(/(^|[^\[])\^/g,"$1");e=e.replace(r,i);return n}}function c(e,t){if(!h[" "+e])if(/^[^:]+:\/*[^/]*$/.test(e))h[" "+e]=e+"/";else h[" "+e]=e.replace(/[^/]*$/,"");e=h[" "+e];if("//"===t.slice(0,2))return e.replace(/:[\s\S]*/,":")+t;else if("/"===t.charAt(0))return e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t;else return e+t}var h={};var p=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function f(){}f.exec=f;function d(e){var t=1,n,r;for(;t<arguments.length;t++){n=arguments[t];for(r in n)if(Object.prototype.hasOwnProperty.call(n,r))e[r]=n[r]}return e}function g(e,t,r){if(r||"function"===typeof t){if(!r){r=t;t=null}t=d({},g.defaults,t||{});var i=t.highlight,s,l,u=0;try{s=n.lex(e,t)}catch(e){return r(e)}l=s.length;var c=function(e){if(e){t.highlight=i;return r(e)}var n;try{n=o.parse(s,t)}catch(t){e=t}t.highlight=i;return e?r(e):r(null,n)};if(!i||i.length<3)return c();delete t.highlight;if(!l)return c();for(;u<s.length;u++)(function(e){if("code"!==e.type)return--l||c();return i(e.text,e.lang,function(t,n){if(t)return c(t);if(null==n||n===e.text)return--l||c();e.text=n;e.escaped=true;--l||c()})})(s[u]);return}try{if(t)t=d({},g.defaults,t);return o.parse(n.lex(e,t),t)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((t||g.defaults).silent)return"<p>An error occurred:</p><pre>"+a(e.message+"",true)+"</pre>";throw e}}g.options=g.setOptions=function(e){d(g.defaults,e);return g};g.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,sanitizer:null,mangle:true,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new s,xhtml:false,baseUrl:null};g.Parser=o;g.parser=o.parse;g.Renderer=s;g.Lexer=n;g.lexer=n.lex;g.InlineLexer=i;g.inlineLexer=i.output;g.parse=g;if(true)e.exports=g;else if("function"===typeof define&&define.amd)define(function(){return g});else this.marked=g}).call(function(){return this||("undefined"!==typeof window?window:t)}())}).call(t,n(89))},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r="function"==typeof fetch?fetch.bind():function(e,t){t=t||{};return new Promise(function(n,r){var i=new XMLHttpRequest;i.open(t.method||"get",e);for(var s in t.headers)i.setRequestHeader(s,t.headers[s]);i.withCredentials="include"==t.credentials;i.onload=function(){n(o())};i.onerror=r;i.send(t.body);function o(){var e=[],t=[],n={},r;i.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(i,s,o){e.push(s=s.toLowerCase());t.push([s,o]);r=n[s];n[s]=r?r+","+o:o});return{ok:1==(i.status/200|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:o,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return e},entries:function(){return t},get:function(e){return n[e.toLowerCase()]},has:function(e){return e.toLowerCase()in n}}}}})};t["default"]=r}},[182]);return{page:e.default}});