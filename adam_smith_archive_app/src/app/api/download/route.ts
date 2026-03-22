import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(
        {
            error: 'Archive download is not bundled for deployment. Add the file under public/downloads and serve it as a static asset if you need this endpoint.',
        },
        { status: 404 }
    );
}
