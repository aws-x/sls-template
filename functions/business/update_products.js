module.exports.updateAll = async (event) => { 
    console.log(`updateAll event: `, {event});
    const {shop} = event;
    console.log(`shop:`, {shop});
    await new Promise(r => setTimeout(r, 1_000));

    return {statusCode: 200, message: `A query with bulk operation has been submitted for ${shop}. It should take 20 minutes to perform the query.`}
} 
