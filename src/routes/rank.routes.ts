import { Router } from "express";
import { FilterTopRankController } from "../context/ranks/filter-top/filter-top-rank-controller";
import { RegisterRankController } from "../context/ranks/register-rank/register-rank-controller";

const rankRouter = Router()
const filterTopRankController = new FilterTopRankController()
const registerRankController = new RegisterRankController()

rankRouter.get("/top", filterTopRankController.handle)
rankRouter.post("/register", registerRankController.handle)

export { rankRouter }