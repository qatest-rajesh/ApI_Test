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
        try {
            console.log('connected');
        gsrun(client);
        } catch(e) {
            console.log('google sheet error=====>', e);
        }
        
    }

});

async function gsrun(cl){

    const gsapi = google.sheets({version:'v4', auth: cl});

    const opt = { 
        spreadsheetId: '12XVq40BQLUnd29-PXCQiU9s0fjx4JPSvgd5y3Gezxwc',
        range: 'Sheet1!B3',
        valueInputOption: 'USER_ENTERED',
       // resource:{values: '123'}    
       resource: {
        range: 'Sheet1!B3',
        values: [['456']]
      } 
    };

  let data = await  gsapi.spreadsheets.values.update(opt);
    // console.log(data.data.values)
}
