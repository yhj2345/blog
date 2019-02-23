const express = require("express")
const proxy = require("http-proxy-middleware")
const cors = require("cors")
const path = require("path")
const app = express()
const PORT = 3001

app.options('*', cors())

app.use('/api', proxy({
    target: 'https://smcat.xyz/api/',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '',
    }
}))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
})

app.listen(PORT, "0.0.0.0", () => console.log(`已启动，port: ${PORT}`))
