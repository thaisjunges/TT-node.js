import path from 'path'
import { fileURLToPath } from 'url'


function dirName() {
  const __filename = fileURLToPath(import.meta.url)
  return path.dirname(__filename)
}

export default dirName