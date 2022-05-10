import fs from "fs";

export const DeleteFile = async (filename: string) => {
    try {
        // verifica se o arquivo existe
        await fs.promises.stat(filename);
        // remove o arquivo
        await fs.promises.unlink(filename);

    } catch (error) {
        return;
    }

};