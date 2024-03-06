import comments from "../../data";

export async function GET(_request, { params }) {
    const comment = comments.find(item => item.id == params.commentID);

    return Response.json(comment);
}

export async function PATCH(request, { params }) {
    const body = await request.json();

    const { message } = body;

    const commentIndex = comments.findIndex(item => item.id == params.commentID);
    comments[commentIndex].message = message;
    
    return Response.json(comments[commentIndex]);
}
