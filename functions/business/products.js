const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();

const invoke_batch_handler = async (shop) => {
    const params = {
        FunctionName: `${process.env.SELF_SERVICE}-${process.env.OPT_STAGE}-update_products_lambda`, // Name of the invoked Lambda function
        Payload: JSON.stringify({ shop }), // Payload data if needed
        InvocationType: 'Event'
    };

    return await lambda.invoke(params).promise().catch(err => ({err})); // prettier-ignore
};

module.exports.update = async (event) => {
    console.log(`update event:`, { event: JSON.stringify(event) });
    const { shop } = event.pathParameters;
    const result = await invoke_batch_handler(shop);
    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };
};

