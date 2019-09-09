const {google} = require('googleapis');

const keys = require('./keys.json');

const client =  new google.auth.JWT(

        keys.client_email,
        null,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err, tokens){

    if(err){
        console.log(err);
        return;
    } else {

        console.log('connected');
        gsrun(client);
    }

});

async function gsrun(cl){

    const gsapi = google.sheets({version:'v4', auth: cl});

    const opt = { 
        spreadsheetId: '12XVq40BQLUnd29-PXCQiU9s0fjx4JPSvgd5y3Gezxwc',
        range: 'Sheet1!A1:B2'
       
    };

  let data = await  gsapi.spreadsheets.values.get(opt);
    console.log(data.data.values)
}
