var fyersModel= require("fyers-api-v3").fyersModel

var fyers= new fyersModel({"path":"/Users/datlaram/Documents/share2/shareAutomator/logs","enableLogging":true})

fyers.setAppId("APPID")

fyers.setRedirectUrl("https://www.google.com/")

//var URL=fyers.generateAuthCode()

//use url to generate auth code
console.log("AuthCode is ruturned in URL: " + URL)
console.log("_______________________________")
var authcode=""
   
fyers.generate_access_token({"client_id":"APPID","secret_key":"secret_key","auth_code":authcode}).then((response)=>{
    if(response.s=='ok'){
        console.log("generate_access_token is sccessful, token="+response.access_token)
        fyers.setAccessToken(response.access_token)
    }else{
        console.log("error generating access token",response)
    }
})
/* 
fyers.get_profile().then((response)=>{
        console.log("Get_profile is sccessful: ", response.get_profile)
        console.log(response)
    }).catch((err)=>{
        console.log("Get_profile is unsccessful: ")
        console.log(err)
    })

fyers.getQuotes(["NSE:SBIN-EQ","NSE:TCS-EQ"]).then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})

fyers.getMarketDepth({"symbol":["NSE:SBIN-EQ","NSE:TCS-EQ"],"ohlcv_flag":1}).then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})
*/
