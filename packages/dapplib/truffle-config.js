require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift repeat pizza protect guess kangaroo army genuine'; 
let testAccounts = [
"0xe5cfeed9a4d5e7cd4f2d23f96c21b7eb64ec54008764c8f629ebccd4d9657d89",
"0x00fb322fc3bf3d669bda9bf93c8837815974bfe518ba1e75e50a1cd7432405c2",
"0x06587b72c75c5c7a9fb8a0b4eaa5b7d5153e968874dcc19e434d03df504b0bf0",
"0x1287645dd5b18a8d862db45f77dfcb5f419986d86e21679f20247ae0804cbf80",
"0xaba6455563f9cccd4b88ff9877b263157695800dd19ee9cbad9aba019fdeaf7a",
"0xc6121f719cad4e138291efd1353cb084cfe2704a79abe3200a0e44c350ce1888",
"0x925cf680b343271e6b402a2864a4790a065c0d9f5f8f6073edbbca78cb815bd0",
"0x5d4fdcc1f5442c77d73e39355bd7d99d36f68e033974e18310c2ee45291f8e29",
"0x4fc0f80fed701c6dcd62f3636b0437023f403564a01effdea72fd17d2efa17be",
"0x07591c2ce633c38dccc022633141416d5d4eb160b0ade760cf5151c561a115ae"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
