import { ServerError } from "../../../middleware/error-middleware";
import { RankRepository } from "../../../repository/rank-repository";

interface RegisterRankRequest {
    name: string
    points: number
}

export class RegisterRankContext {

    constructor(private repository: RankRepository) { }

    async execute({ name, points }: RegisterRankRequest): Promise<void> {

        if (!name) {
            throw new ServerError("Invalid params", 422)
        }

        await this.repository.register({ name, points })
    }

}