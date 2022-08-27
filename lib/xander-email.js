import fs from "fs"
import path from "path"

export default function displayView(viewName, viewsPath) {
  const view = fs.readFileSync(path.resolve(viewsPath + `/${viewName}.html`), "utf-8")
  const compontentsPath = path.resolve(viewsPath + "/components")
  var varView = view

  while (true) {
    if (!(varView.match(/{{\w+(?:([/]?)\w+|)*}}/gim))) {
      break
    }

    const componentContent = varView.match(/{{\w+(?:([/]?)\w+|)*}}/gim)[0].replace("{{", "").replace("}}", "")
    varView = varView.replace(
      varView.match(/{{\w+(?:([/]?)\w+|)*}}/gim)[0],
      fs.readFileSync(path.resolve(compontentsPath + `/${componentContent}.html`), "utf-8")
    )
  }

  return varView
}
