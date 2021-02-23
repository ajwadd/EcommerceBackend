const braintree = require("braintree");
require('dotenv').config();


const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId:process.env.BRAINTREE_MERCHAND_ID ,
  publicKey:process.env.BRAINTREE_PUBLIC_ID ,
  privateKey:process.env.BRAINTREE_PRIVATE_ID 
});

exports.generateToken = (req,res) => {

    gateway.clientToken.generate({}, (err, response) => {
        if(err) {
            return res.stattus(500).json({ error: err})
        }
        res.json({token: response.clientToken});
      });
}