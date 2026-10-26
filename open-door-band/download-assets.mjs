import fs from 'node:fs';
import {spawn} from 'node:child_process';
const manifest=JSON.parse(fs.readFileSync('asset-manifest.json'));
manifest.push({url:'https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/74534a3f-2c12-4fac-b36b-7d5fffdca709/latin.woff2',file:'assets/roboto.woff2'});
let failed=false;
for(let i=0;i<manifest.length;i+=4)await Promise.all(manifest.slice(i,i+4).map(a=>new Promise(resolve=>{if(fs.existsSync('dist/'+a.file)&&fs.statSync('dist/'+a.file).size){resolve();return}const p=spawn('curl',['-fsSL','--retry','2',a.url,'-o','dist/'+a.file],{stdio:'inherit'});p.on('exit',code=>{if(code)failed=true;console.log(a.file,code===0?'saved':'FAILED');resolve()})})));
if(failed)process.exitCode=1;
