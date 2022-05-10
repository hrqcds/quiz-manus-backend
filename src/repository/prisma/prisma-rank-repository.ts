import { Rank } from "@prisma/client";
import { RankRepository, RegisterRankData } from "../rank-repository";
import { prisma } from "../../database/prisma"

export class PrismaRankRepository implements RankRepository {
    async register({ name, points }: RegisterRankData): Promise<void> {

        await prisma.rank.create({
            data: {
                name,
                points
            }
        })

    }
    async filter_top(): Promise<Pick<Rank, "name" | "points">[]> {

        const rank = await prisma.rank.findMany({
            orderBy: {
                points: "desc"
            },
            select: {
                name: true,
                points: true
            },
            take: 10
        })

        return rank
    }

}