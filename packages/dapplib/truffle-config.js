require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stomach dash remain coin harvest bag army ghost'; 
let testAccounts = [
"0xe1953b442b513941175783fe3c556dae0b27a97ea1f8d3da8a705b3e14001c7f",
"0xa6867b185ccdcf02e11887ba0da2fb649ff9dd63198c04be6298359e308d6da4",
"0xe09bb5ab0d4ba5545e4107335ea17d24abcff6c26e4c366980b3724377dce67f",
"0x0b874b7a69387a1bd11242be1499d6c6682bb64171e9a9e02d7555dd358c4d5a",
"0xf5546d625a431ee2a3840ab6af995c502350b89199bb2f9d5e441ca5c35b0ece",
"0xc3b0a81436972acdaf3c06bfc44d69654a93cbaf66b3f2eb32cf44973576a6fd",
"0xadc552b297e94907ee9ca03e7a6170c0930dc06dbc3881b78cd12900f6d4ab11",
"0x9cdca44038dfb8208aa13f6855c81f37606beb79ea9ba4a289a2acb70d0edf90",
"0x1e17bb87ec663a3495beade839f00bf0e5ba1767449362d2a70bc7c7e8db46b2",
"0x05290a1b77f7c6a9984ccab7fe20837c3d89dc5ab3f07b195126df1370645233"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

