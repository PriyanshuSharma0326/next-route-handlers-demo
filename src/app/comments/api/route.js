import comments from "../data";

export async function GET(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get("query");

    return Response.json(query ? comments.filter(item => item.message.includes(query)) : comments);
}

export async function POST(request) {
    const comment = await request.json()

    const newComment = {
        id: comments.length + 1,
        message: comment.message,
    }

    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201
    });
}
