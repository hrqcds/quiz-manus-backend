import express from "express"
import "express-async-errors"
import cors from "cors"
import morgan from "morgan"
import ErrorMiddleware from "./middleware/error-middleware"
import { route } from "./routes"

const app = express()
const port = process.env.PORT ?? 3000


app.use(morgan("combined"))
app.use(cors())
app.use(express.json())
app.use(route)
app.use(ErrorMiddleware.handle)

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})