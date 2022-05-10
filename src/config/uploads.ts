import multer from "multer"
import { resolve } from "path"
import crypto from "crypto"

export default {
    upload(){
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, "..", "..", "uploads"),
                filename: (request, file, callback) => {

                    const hashName = crypto.randomBytes(16).toString("hex")

                    const filename = `${hashName}-${file.originalname}`.trim()

                    return callback(null, filename)
                }
            })
        }
    }
}