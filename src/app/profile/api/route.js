import { headers } from "next/headers";

export async function GET(_request) {
    const headerList = headers();

    // console.log(headerList.get('Authorization'));

    return new Response('<h1>Profile Data</h1>', {
        headers: {
            'Content-Type': 'text/html',
            'Set-Cookie': 'theme=dark',
        }
    });
}
