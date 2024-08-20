// import { redirect } from "next/navigation";
import comments from "../../data";

export async function GET(_request, { params }) {
    const filteredComment = comments.filter(item => item.id == params.commentID);

    if (filteredComment.length) {
        return new Response(JSON.stringify(filteredComment), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 200,
        });
    }
    else {
        return new Response(JSON.stringify({ error: 'Comment not found' }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 404,
        });
    }

    // You can also redirect to any different api route
    // redirect('/comments/api');
}

export async function PATCH(request, { params }) {
    const { message } = await request.json();
    const commentIndex = comments.findIndex(item => item.id == params.commentID);

    if(commentIndex === -1) {
        return new Response(JSON.stringify(
            {
                status: "10001",
                message: "Comment not found!"
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                status: 404
            }
        );
    }
    else {
        comments[commentIndex].message = message;

        return new Response(JSON.stringify(
            {
                status: "10000",
                message: "Comment updated!",
                data: comments[commentIndex]
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

export async function DELETE(_request, { params }) {
    const commentIndex = comments.findIndex(item => item.id == params.commentID);

    if(commentIndex === -1) {
        return new Response(JSON.stringify(
            {
                status: "10001",
                message: "Comment not found!"
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                status: 404
            }
        );
    }
    else {
        const deletedComment = comments[commentIndex];
        comments.splice(commentIndex, 1);

        return new Response(JSON.stringify(
            {
                status: "10000",
                message: "Comment deleted!",
                data: deletedComment
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
