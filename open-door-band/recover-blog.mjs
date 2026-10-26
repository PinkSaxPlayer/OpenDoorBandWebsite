import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const origin='https://sparrow-bagpipe-mm62.squarespace.com';
let page=JSON.parse(fs.readFileSync('/private/tmp/open-door-blog-response','utf8'));
const posts=new Map(),seen=new Set();let pages=0;
while(true){pages++;for(const p of page.items||[]){if(p.collectionId!=='68ffb20795bbce1af0584483')throw Error('Unexpected blog collection');posts.set(p.id,{id:p.id,title:p.title,body:p.body,fullUrl:p.fullUrl,urlId:p.urlId,publishOn:p.publishOn,author:p.author?.displayName||'Amy Krauss'});}if(!page.pagination?.nextPage)break;const next=page.pagination.nextPageUrl;if(!next||!next.startsWith('/directors-corner?')||seen.has(next))throw Error('Invalid or repeated pagination');seen.add(next);const url=new URL(next,origin);url.searchParams.set('format','json');page=JSON.parse(execFileSync('curl',['-fsSL','--max-time','30',url.href],{encoding:'utf8',maxBuffer:20*1024*1024}));}
if([...posts.values()].some(p=>!p.body?.trim()))throw Error('Some posts have no body');
fs.writeFileSync('blog-posts.json',JSON.stringify({source:origin+'/directors-corner',retrievedAt:new Date().toISOString(),paginationComplete:true,posts:[...posts.values()]},null,2));
console.log(`Recovered ${posts.size} complete posts across ${pages} blog pages.`);
