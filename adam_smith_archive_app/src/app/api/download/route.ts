import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const candidatePaths = [
    path.join(process.cwd(), 'public', 'downloads', 'Adam_Smith_Singularity_Archive.md'),
    path.join(process.cwd(), 'public', 'downloads', 'ADAM_SMITH_ARCHIVE_SINGULARITY_EVENT.md'),
    path.join(process.cwd(), '..', 'ADAM SMITH_ARCHIVE_SINGULARITY_EVENT.md'),
];

export async function GET() {
    const filePath = candidatePaths.find(candidate => fs.existsSync(candidate));

    if (!filePath) {
        return NextResponse.json(
            {
                error: 'Archive download is not available in this deployment.',
            },
            { status: 404 }
        );
    }

    try {
        const fileBuffer = await fs.promises.readFile(filePath);
        const fileName = path.basename(filePath);

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Disposition': `attachment; filename="${fileName}"`,
                'Content-Type': 'text/markdown',
            },
        });
    } catch (error) {
        console.error("Error reading file:", error);
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
}
