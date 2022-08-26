import fs from "fs"
import path from "path"

export default function displayView(viewName, viewsPath, componentsPath) {
  const view = fs.readFileSync(path.resolve(viewsPath + `/${viewName}.html`), "utf-8")

  console.log(view.replace("{{title}}", "<h1 style='color: white;'>HELLO WORLD</h1>"))
  console.log(view.search(/{{(.?)\w{1,23}\1?}}/gim) ? view.search(/{{(.?)\w{1,23}\1?}}/gim) : undefined)

  return view
}
