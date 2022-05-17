import { PrismaClient } from "@prisma/client"

export async function init_images_caracters(prisma: PrismaClient) {

    const CaracterPath = `caracters/caracter_`

    await prisma.$transaction(
        [
            prisma.image.create({ data: { description: "a", path: `${CaracterPath}a.png` } }),
            prisma.image.create({ data: { description: "b", path: `${CaracterPath}b.png` } }),
            prisma.image.create({ data: { description: "c", path: `${CaracterPath}c.png` } }),
            prisma.image.create({ data: { description: "ç", path: `${CaracterPath}ç.png` } }),
            prisma.image.create({ data: { description: "d", path: `${CaracterPath}d.png` } }),
            prisma.image.create({ data: { description: "e", path: `${CaracterPath}e.png` } }),
            prisma.image.create({ data: { description: "f", path: `${CaracterPath}f.png` } }),
            prisma.image.create({ data: { description: "g", path: `${CaracterPath}g.png` } }),
            prisma.image.create({ data: { description: "h", path: `${CaracterPath}h.png` } }),
            prisma.image.create({ data: { description: "i", path: `${CaracterPath}i.png` } }),
            prisma.image.create({ data: { description: "j", path: `${CaracterPath}j.png` } }),
            prisma.image.create({ data: { description: "k", path: `${CaracterPath}k.png` } }),
            prisma.image.create({ data: { description: "l", path: `${CaracterPath}l.png` } }),
            prisma.image.create({ data: { description: "m", path: `${CaracterPath}m.png` } }),
            prisma.image.create({ data: { description: "n", path: `${CaracterPath}n.png` } }),
            prisma.image.create({ data: { description: "o", path: `${CaracterPath}o.png` } }),
            prisma.image.create({ data: { description: "p", path: `${CaracterPath}p.png` } }),
            prisma.image.create({ data: { description: "q", path: `${CaracterPath}q.png` } }),
            prisma.image.create({ data: { description: "r", path: `${CaracterPath}r.png` } }),
            prisma.image.create({ data: { description: "s", path: `${CaracterPath}s.png` } }),
            prisma.image.create({ data: { description: "t", path: `${CaracterPath}t.png` } }),
            prisma.image.create({ data: { description: "u", path: `${CaracterPath}u.png` } }),
            prisma.image.create({ data: { description: "v", path: `${CaracterPath}v.png` } }),
            prisma.image.create({ data: { description: "w", path: `${CaracterPath}w.png` } }),
            prisma.image.create({ data: { description: "x", path: `${CaracterPath}x.png` } }),
            prisma.image.create({ data: { description: "y", path: `${CaracterPath}y.png` } }),
            prisma.image.create({ data: { description: "z", path: `${CaracterPath}z.png` } })
        ]
    )

    console.log("imagens das letras criado com sucesso ")

}

export async function init_images_numbers(prisma: PrismaClient) {
    const NumbersPath = `numbers/number_`

    await prisma.$transaction([
        prisma.image.create({ data: { description: "1", path: `${NumbersPath}1.png` } }),
        prisma.image.create({ data: { description: "2", path: `${NumbersPath}2.png` } }),
        prisma.image.create({ data: { description: "3", path: `${NumbersPath}3.png` } }),
        prisma.image.create({ data: { description: "4", path: `${NumbersPath}4.png` } }),
        prisma.image.create({ data: { description: "5", path: `${NumbersPath}5.png` } }),
        prisma.image.create({ data: { description: "6", path: `${NumbersPath}6.png` } }),
        prisma.image.create({ data: { description: "7", path: `${NumbersPath}7.png` } }),
        prisma.image.create({ data: { description: "8", path: `${NumbersPath}8.png` } }),
        prisma.image.create({ data: { description: "9", path: `${NumbersPath}9.png` } }),
        prisma.image.create({ data: { description: "0", path: `${NumbersPath}0.png` } })
    ])

    console.log("imagens dos números criado com sucesso ")
}