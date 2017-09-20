# BTC Alerts

This Node.js application monitors the BTC price and uses the Twilio API to send an SMS message notifying me of any major price drops.

# Received messages

- Warning when the price drops to the exit price (phone call may be involved here too in the futre, can potentially just set a check on the account balance for my coinbase account)

App is deployed on heroku.. and has a CI pipeline wih Bitbucket. Source code is just here for anyone to use.

# Resources

https://www.twilio.com/console
https://www.twilio.com/blog/2016/09/how-to-send-an-sms-with-node-js-using-twilio.html
https://github.com/coinbase/coinbase-node
https://developers.coinbase.com/api/v2