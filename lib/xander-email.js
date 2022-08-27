import fs from "fs"
import path from "path"

export default function displayView(viewName, viewsPath, variables) {
  const view = fs.readFileSync(path.resolve(viewsPath + `/${viewName}.html`), "utf-8")
  const compontentsPath = path.resolve(viewsPath + "/components")
  var varView = view

  while (true) {
    if (!(varView.match(/{{([-]?)\w+(?:(\1)(?:([/]?)\w+|)*|)}}/gim))) {
      break
    }

    if (varView.match(/{{\w+(?:([/]?)\w+|)*}}/gim)) {
      const componentContent = varView.match(/{{\w+(?:([/]?)\w+|)*}}/gim)[0].replace("{{", "").replace("}}", "")
      varView = varView.replace(
        varView.match(/{{\w+(?:([/]?)\w+|)*}}/gim)[0],
        fs.readFileSync(path.resolve(compontentsPath + `/${componentContent}.html`), "utf-8")
      )
    } else {
      const componentContent = varView.match(/{{([-])\w+(?:(\1)(?:([/]?)\w+|)*|)}}/gim)[0].replace("{{", "").replace("}}", "").replace("-", "")
      varView = varView.replace(
        varView.match(/{{([-])\w+(?:(\1)(?:([/]?)\w+|)*|)}}/gim)[0],
        // fs.readFileSync(path.resolve(compontentsPath + `/${componentContent}.html`), "utf-8")
        variables[componentContent]
      )
    }
  }

  return varView
}
