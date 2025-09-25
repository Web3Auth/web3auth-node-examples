const jwt = require('jsonwebtoken');
const { LAMPORTS_PER_SOL, Connection, PublicKey } = require("@solana/web3.js");
const fs = require("fs").promises;
const { createSignableMessage } = require('@solana/signers');

// IMP START - Quick Start
const { Web3Auth } = require("@web3auth/node-sdk");
// IMP END - Quick Start

// IMP START - Blockchain Calls
// Get Solana Accounts
const getAccounts = async (signer) => {
    try {
        const publicKey = signer.address;
        console.log("\x1b[33m%s\x1b[0m", "Public Key:", publicKey);
    } catch (error) {
        console.error("\x1b[33m%s\x1b[0m", "Error fetching accounts:", error);
    }
};

// Get Solana Balance
const getBalance = async (signer) => {
    try {
        const publicKey = new PublicKey(signer.address);
        const connection = new Connection("https://api.devnet.solana.com");
        const balance = await connection.getBalance(publicKey) / LAMPORTS_PER_SOL;
        console.log("\x1b[33m%s\x1b[0m", "Balance:", balance, "SOL");
    } catch (error) {
        console.error("\x1b[33m%s\x1b[0m", "Error fetching balance:", error);
    }
};

// Sign Solana Message
const signMessage = async (signer, message) => {
    try {

        const messageBytes = new TextEncoder().encode(message);

        // Create a SignableMessage object from Uint8Array
        const signableMessage = createSignableMessage(messageBytes);

        const [signature] = await signer.signMessages([signableMessage]);
        console.log("\x1b[33m%s\x1b[0m", "Signed Message:", signature);
    } catch (error) {
        console.error("\x1b[33m%s\x1b[0m", "Error signing message:", error);
    }
};
// IMP END - Blockchain Calls

// Perform JWT Login and MFA Setup
const initAndLogin = async () => {
    // IMP START - Dashboard Registration
    const clientId = "BFcLTVqWlTSpBBaELDPSz4_LFgG8Nf8hEltPlf3QeUG_88GDrQSw82fSjjYj5x4F3ys3ghMq8-InU7Azx7NbFSs";
    // IMP END - Dashboard Registration

    // IMP START - Verifier Creation
    const authConnectionId = "w3a-node-demo-sol";
    // IMP END - Verifier Creation

    // IMP START - SDK Initialization
    const web3auth = new Web3Auth({
        clientId,
        web3AuthNetwork: "sapphire_devnet",
    });

    await web3auth.init();
    // IMP END - SDK Initialization

    // IMP START - Auth Provider Login
    const privateKey = await fs.readFile("privateKey.pem", "utf8");

    var idToken = jwt.sign(
        {
            sub: '9fcd68c4-af50-4dd7-adf6-abd12a13cb32',
            name: 'Web3Auth DevRel Team',
            email: 'devrel@web3auth.io',
            aud: 'urn:api-web3auth-io', // -> to be used in Custom Authentication as JWT Field
            iss: 'https://web3auth.io', // -> to be used in Custom Authentication as JWT Field
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        privateKey,
        { algorithm: 'RS256', keyid: '2ma4enu1kdvw5bo9xsfpi3gcjzrt6q78yl0h' },
    );

    console.log("\x1b[33m%s\x1b[0m", "JWT Token:", idToken);
    // IMP END - Auth Provider Login

    // IMP START - Login
    const result = await web3auth.connect({
        authConnectionId,
        idToken,
    });
    // IMP END - Login

    console.log("\x1b[33m%s\x1b[0m", "Login successful. \nConnected Chain Namespace:", result.chainNamespace);

    // IMP START - Blockchain Interaction
    await getAccounts(result.signer); // Get Solana Accounts
    await getBalance(result.signer); // Get Solana Balance
    await signMessage(result.signer, "Hello Web3Auth!"); // Sign a Message
    // IMP END - Blockchain Interaction

    console.log("\x1b[33m%s\x1b[0m", "Blockchain interactions done.");
};

// Call the initialization and login function
initAndLogin();