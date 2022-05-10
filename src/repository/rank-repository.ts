import { Rank } from "@prisma/client"

export interface RegisterRankData {
    name: string
    points: number

}

export interface RankRepository {
    register: (data: RegisterRankData) => Promise<void>
    filter_top: () => Promise<Pick<Rank, "name" | "points">[]>
}