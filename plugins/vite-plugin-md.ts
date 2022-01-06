// @ts-nocheck
import path from "path";
import fs from "fs";
import marked from "marked";

const mdToJs = (str) => {
  const content = JSON.stringify(marked(str));
  return `export default ${content}`;
};

export function md() {
  return {
    name: "my-plugin",
    // configureServer: [ // 用于开发
    //   async ({ app }) => {
    //     app.use(async (ctx, next) => { // koa
    //       if (ctx.path.endsWith('.md')) {
    //         ctx.type = 'js'
    //         const filePath = path.join(process.cwd(), ctx.path)
    //         ctx.body = mdToJs(fs.readFileSync(filePath).toString())
    //       } else {
    //         await next()
    //       }
    //     })
    //   },
    // ],
    configureServer: async ({ app }) => {
      app.use(async (req,res,next) => {
        console.log(req)
        if (req.url.endsWith(".md")) {
          req.type = "js";
          const filePath = path.join(process.cwd(), req.url);
          req.body = mdToJs(fs.readFileSync(filePath).toString());
        } else {
          await next();
        }
      });
    },
    transforms: [
      {
        // 用于 rollup // 插件
        test: (context) => context.path.endsWith(".md"),
        transform: ({ code }) => mdToJs(code),
      },
    ],
  };
}
