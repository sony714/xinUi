// @ts-nocheck
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs";
import { baseParse } from "@vue/compiler-core";

const demoPlugin = {
  name: 'demo',
  //code块的代码 id链接
  transform(code,id){ 
    if (!/vue&type=demo/.test(id)) {
      return
    }
    const index = id.indexOf('?')
    const path = id.slice(0,index)
    const file = fs.readFileSync(path).toString();
    const parsed = baseParse(file).children.find((n) => n.tag === "demo");
    const title = parsed.children[0].content
    const main = file.split(parsed.loc.source).join("").trim();
    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim();
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),demoPlugin],
  server: {
    host: "0.0.0.0",
    open:true
  }
});
