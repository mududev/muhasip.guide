import{d as a,ap as v,D as s,E as c,b as y,ai as r,f as m,ab as u}from"./entry.BU48Bu5t.js";const j=a({__name:"ProseCodeIcon",props:{icon:{type:String,default:void 0},filename:{type:String,default:void 0}},setup(t){const e=t,p={"package.json":"vscode-icons:file-type-node","tsconfig.json":"vscode-icons:file-type-tsconfig",".npmrc":"vscode-icons:file-type-npm",".editorconfig":"vscode-icons:file-type-editorconfig",".eslintrc":"vscode-icons:file-type-eslint",".eslintrc.cjs":"vscode-icons:file-type-eslint",".eslintignore":"vscode-icons:file-type-eslint",".gitignore":"vscode-icons:file-type-git","yarn.lock":"vscode-icons:file-type-yarn",".env":"vscode-icons:file-type-dotenv",".env.example":"vscode-icons:file-type-dotenv",".vscode/settings.json":"vscode-icons:file-type-vscode",".nuxtrc":"vscode-icons:file-type-nuxt",".nuxtignore":"vscode-icons:file-type-nuxt","nuxt.config.ts":"vscode-icons:file-type-nuxt","nuxt.schema.ts":"vscode-icons:file-type-nuxt","tailwind.config.js":"vscode-icons:file-type-tailwind","tailwind.config.ts":"vscode-icons:file-type-tailwind",ts:"vscode-icons:file-type-typescript",tsx:"vscode-icons:file-type-typescript",mjs:"vscode-icons:file-type-js",cjs:"vscode-icons:file-type-js",js:"vscode-icons:file-type-js",jsx:"vscode-icons:file-type-js",md:"vscode-icons:file-type-markdown",py:"vscode-icons:file-type-python",ico:"vscode-icons:file-type-favicon",npm:"vscode-icons:file-type-npm",pnpm:"vscode-icons:file-type-pnpm",npx:"vscode-icons:file-type-npm",yarn:"vscode-icons:file-type-yarn",bun:"vscode-icons:file-type-bun",yml:"vscode-icons:file-type-yaml",terminal:"i-heroicons-command-line"},{ui:o}=v("content.prose.code.icon",void 0,p,void 0,!0),n=s(()=>{var i;return(((i=e.filename)==null?void 0:i.split(".").pop())||"").toLowerCase()}),l=s(()=>e.icon||o.value[n.value]||e.filename.includes(".")),d=s(()=>e.icon??(e.filename&&(o.value[e.filename.split("/").pop()]??o.value[n.value]??`vscode-icons:file-type-${n.value}`)));return(i,g)=>{const f=u;return c(l)?(y(),r(f,{key:0,name:c(d).split(" ").pop(),dynamic:""},null,8,["name"])):m("",!0)}}});export{j as _};
