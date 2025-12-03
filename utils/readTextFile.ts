import { readFileSync } from 'fs';

function readTextFile(filePath: string): string[] {
    const content: string = readFileSync(filePath, 'utf-8');
    return content.split('\n');
}

export default readTextFile;