export async function GET(_request) {
    return Response.json({
        time: new Date().toLocaleTimeString()
    })
}
