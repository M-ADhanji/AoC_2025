import { readFileSync } from 'fs';

export default class TextFileReader {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    public splitLines(): string[] {
        const content: string = readFileSync(this.filePath, 'utf-8');
        return content.split('\n');
    }
}