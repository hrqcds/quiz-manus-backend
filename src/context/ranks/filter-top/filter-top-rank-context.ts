import { Rank } from "@prisma/client";
import { RankRepository } from "../../../repository/rank-repository";

export class FilterTopRankContext {

    constructor(private repository: RankRepository) { }

    async execute(): Promise<Pick<Rank, "name" | "points">[]> {

        const rank = await this.repository.filter_top()

        return rank
    }

}