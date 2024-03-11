import { redirect } from "next/navigation";
import comments from "../../data";

export async function GET(_request, { params }) {
    const filteredComment = comments.filter(item => item.id == params.commentID);

    if(filteredComment.length) {
        return Response.json(filteredComment);
    }
    else {
        redirect('/comments/api');
    }
}

export async function PATCH(request, { params }) {
    const { message } = await request.json();

    const commentIndex = comments.findIndex(item => item.id == params.commentID);
    comments[commentIndex].message = message;
    
    return Response.json(comments[commentIndex]);
}

export async function DELETE(_request, { params }) {
    const commentIndex = comments.findIndex(item => item.id == params.commentID);
    const deletedComment = comments[commentIndex];
    comments.splice(commentIndex, 1);

    return Response.json(deletedComment);
}
