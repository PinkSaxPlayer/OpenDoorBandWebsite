import fs from 'node:fs';
import path from 'node:path';
let failures=[];let pages=fs.readdirSync('dist').filter(f=>f.endsWith('.html'));
for(const file of pages){const html=fs.readFileSync('dist/'+file,'utf8');
if(!/<main[^>]*>[\s\S]*?<h1>/.test(html))failures.push(`${file}: missing page heading`);
for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){const url=m[1];if(/^(https?:|mailto:|#)/.test(url))continue;const [target,anchor]=url.split('#');if(!fs.existsSync(path.join('dist',target)))failures.push(`${file}: missing ${target}`);if(anchor&&fs.existsSync(path.join('dist',target))&&!fs.readFileSync(path.join('dist',target),'utf8').includes(`id="${anchor}"`))failures.push(`${file}: missing anchor ${anchor}`)}
const voidTags=new Set(['meta','link','img','br','hr','input','source','wbr','area','base','col','embed','param','track']);const stack=[];
for(const m of html.matchAll(/<(\/?)([a-z][a-z0-9]*)\b[^>]*>/gi)){const tag=m[2].toLowerCase();if(voidTags.has(tag))continue;if(m[1]){const got=stack.pop();if(got!==tag)failures.push(`${file}: closing ${tag} after ${got}`)}else stack.push(tag)}if(stack.length)failures.push(`${file}: unclosed tags ${stack.join(',')}`);
}
for(const [file,expected] of [['resources.html',4],['frequently-asked-questions.html',12]]){const actual=[...fs.readFileSync('dist/'+file,'utf8').matchAll(/<details>/g)].length;if(actual!==expected)failures.push(`${file}: ${actual} accordions, expected ${expected}`)}
for(const a of JSON.parse(fs.readFileSync('asset-manifest.json'))){if(!fs.existsSync('dist/'+a.file)||!fs.statSync('dist/'+a.file).size)failures.push(`Missing image ${a.file}`)}
if(failures.length){console.error(failures.join('\n'));process.exitCode=1}else console.log(`PASS: ${pages.length} pages; local links, anchors, HTML structure, 16 FAQ/resource accordions, and all original images verified.`);
