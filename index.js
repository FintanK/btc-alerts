var http = require('http');
var coinbase = require('coinbase');

var coinbaseClient = new coinbase.Client({
    'apiKey': 'YOUR API KEY',
    'apiSecret': 'YOUR API SECRET'
});
var schedule = require('node-schedule');

const twilioClient = require('twilio')(
    '',
    ''
);

var smsSent = false;

// Every minute - 60000
setInterval(function () {

    coinbaseClient.getAccounts({}, function (err, accounts) {
        accounts.forEach(function (acct) {

            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            console.log('   ' + time + ' Current balance for ' + acct.name + ' is ' + acct.native_balance.amount + ' ' + acct.native_balance.currency);

            if (acct.native_balance.amount < 9600 && !smsSent) {
                sendSMS('WARNING: SELL POINT REACHED! ' + time + ' - Current balance for ' + acct.name + ' is ' + acct.native_balance.amount + ' ' + acct.native_balance.currency);
                smsSent = true;
            }

        });
    });

}, 3000);

schedule.scheduleJob('0 21 * * *', () => {
    coinbaseClient.getAccounts({}, function (err, accounts) {
        accounts.forEach(function (acct) {
            sendSMS('BTC ALERT SERVICE: Operating normally. Current balance for ' + acct.name + ' is ' + acct.native_balance.amount + ' ' + acct.native_balance.currency);
        });
    });
});

schedule.scheduleJob('30 17 * * *', () => {
    coinbaseClient.getAccounts({}, function (err, accounts) {
        accounts.forEach(function (acct) {
            sendSMS('BTC ALERT SERVICE: Operating normally. Current balance for ' + acct.name + ' is ' + acct.native_balance.amount + ' ' + acct.native_balance.currency);
        });
    });
});

schedule.scheduleJob('30 7 * * *', () => {
    coinbaseClient.getAccounts({}, function (err, accounts) {
        accounts.forEach(function (acct) {
            sendSMS('BTC ALERT SERVICE: Operating normally. Current balance for ' + acct.name + ' is ' + acct.native_balance.amount + ' ' + acct.native_balance.currency);
        });
    });
});

function sendSMS(text) {
    twilioClient.messages.create({
        from: '',
        to: '',
        body: text
    }).then((messsage) => {
        console.log(message.sid);
    });

}

http.createServer(function (request, response) {

}).listen(process.env.PORT || 5000);

// No caching is occuring - PHEW


