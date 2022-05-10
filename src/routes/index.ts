import { Router } from "express"
import { questionRouter } from "./question.routes"
import { imageRouter } from "./image.routes"
import { rankRouter } from "./rank.routes"

const route = Router()

route.use("/questions", questionRouter)
route.use("/images", imageRouter)
route.use("/ranks", rankRouter)

export { route }