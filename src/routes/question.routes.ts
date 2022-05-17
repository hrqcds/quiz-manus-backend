import { Router } from "express";
import { CreateQuestionController } from "../context/question/create/create-question-controller";
import { ListQuestionController } from "../context/question/list/list-question-controller";
import { SelectQuestionController } from "../context/question/select/select-question-controller";
import { UpdateStatusQuestionController } from "../context/question/update-status/update-status-question-controller";
import { ResetStatusQuestionController } from "../context/question/reset-status/reset-status-question-controller";
import { ListTypeQuestionController } from "../context/question/list-type/list-type-question-controller";

const questionRouter = Router()
const createQuestionController = new CreateQuestionController()
const listQuestionController = new ListQuestionController()
const listTypeQuestionController = new ListTypeQuestionController()
const selectQuestionController = new SelectQuestionController()
const updateStatusQuestionController = new UpdateStatusQuestionController()
const resetStatusQuestionController = new ResetStatusQuestionController()

questionRouter.get("/list", listQuestionController.handle)
questionRouter.get("/list-type", listTypeQuestionController.handle)
questionRouter.post("/select", selectQuestionController.handle)
questionRouter.post("/create", createQuestionController.handle)
questionRouter.patch("/update-status/:id", updateStatusQuestionController.handle)
questionRouter.patch("/reset-status", resetStatusQuestionController.handle)

export { questionRouter }