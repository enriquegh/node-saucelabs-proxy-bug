// import SauceLabs from 'saucelabs';
// if imports are not supported by your Node.js version, import the package as follows:
const SauceLabs = require('saucelabs').default;

(async () => {
    const myAccount = new SauceLabs();
    
    const sc = await myAccount.startSauceConnect({

        logger: (stdout) => console.log(stdout),
        verbose: true,
        logfile: '-',
        tunnelName: 'my-sauce-tunnel',
        proxyTunnel: true,
        proxy: 'localhost:8889',
    })


    await sc.close()


})()