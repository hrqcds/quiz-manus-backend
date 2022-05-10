import { Router } from "express"
import { CreateImageController } from "../context/images/create/create-image-controller"
import { ListImageController } from "../context/images/list/list-image-controller"
import multer from "multer"
import upload_config from "../config/uploads"

const upload = multer(upload_config.upload())


const imageRouter = Router()
const createImageController = new CreateImageController()
const listImageController = new ListImageController()

imageRouter.get("/list", listImageController.handle)
imageRouter.post("/create", upload.single("question"), createImageController.handle)

export { imageRouter }