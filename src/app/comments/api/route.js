import comments from "../data";

export async function GET(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get("search");

    if(query) {
        const result = comments.filter(item => item.message.includes(query));

        if(result.length > 0) {
            return new Response(JSON.stringify(
                {
                    status: "10000",
                    message: "Found",
                    data: result,
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    status: 200
                }
            );
        }
        else {
            return new Response(JSON.stringify(
                {
                    status: "10001",
                    message: "Comment not found",
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    status: 404
                }
            );
        }
    }
    else {
        return new Response(JSON.stringify(
            {
                status: "10000",
                message: "All Comments",
                data: comments,
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                status: 200
            }
        );
    }
}

export async function POST(request) {
    const comment = await request.json()

    const newComment = {
        id: comments.length + 1,
        message: comment.message,
    }

    comments.push(newComment);

    return new Response(JSON.stringify(
        {
            status: "10000",
            message: "Comment created!",
            data: newComment
        }),
        {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 201
        }
    );
}
