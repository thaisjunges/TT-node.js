import { readFile } from 'fs'

readFile('test.txt', 'utf-8', (err, data) => {
    console.log(data)
})