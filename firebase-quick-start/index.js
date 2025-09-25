const { ethers } = require("ethers");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { initializeApp } = require("firebase/app");

// IMP START - Quick Start
const { Web3Auth } = require("@web3auth/node-sdk");
// IMP END - Quick Start

// IMP START - Blockchain Calls
// Get Ethereum Accounts
const getAccounts = async (signer ) => {
    try {
        const address = await signer.getAddress();
        console.log("\x1b[33m%s\x1b[0m", "Accounts:", address);
    } catch (error) {
        console.error("\x1b[33m%s\x1b[0m", "Error fetching accounts:", error);
    }
};

// Get Ethereum Balance
const getBalance = async (signer) => {
    try {
        const address = await signer.getAddress();
        const balance = ethers.formatEther(
            await signer.provider.getBalance(address) // Balance is in wei
          );
        console.log("\x1b[33m%s\x1b[0m", "Balance:", balance, "ETH");
    } catch (error) {
        console.error("\x1b[33m%s\x1b[0m", "Error fetching balance:", error);
    }
};

// Sign Ethereum Message
const signMessage = async (signer, message) => {    
    try {
        const signature = await signer.signMessage(message);
        console.log("\x1b[33m%s\x1b[0m", "Signed Message:", signature);
    } catch (error) {
        console.error("\x1b[33m%s\x1b[0m", "Error signing message:", error);
    }
};
// IMP END - Blockchain Calls

// Perform JWT Login and MFA Setup
const initAndLogin = async () => {
    // IMP START - Dashboard Registration
    const clientId = "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ";
    // IMP END - Dashboard Registration

    // IMP START - Verifier Creation
    const authConnectionId = "w3a-firebase-demo";
    // IMP END - Verifier Creation

    // IMP START - SDK Initialization
    const web3auth = new Web3Auth({
        clientId,
        web3AuthNetwork: "sapphire_mainnet",
    });

    await web3auth.init();
    // IMP END - SDK Initialization

    // IMP START - Auth Provider Login
    const app = initializeApp({
        apiKey: "AIzaSyB0nd9YsPLu-tpdCrsXn8wgsWVAiYEpQ_E",
        authDomain: "web3auth-oauth-logins.firebaseapp.com",
        projectId: "web3auth-oauth-logins",
        storageBucket: "web3auth-oauth-logins.appspot.com",
        messagingSenderId: "461819774167",
        appId: "1:461819774167:web:e74addfb6cc88f3b5b9c92",
      });

    const auth = getAuth(app);
    const res = await signInWithEmailAndPassword(auth, "custom+jwt@firebase.login", "Testing@123");
    console.log(res);
    const idToken = await res.user.getIdToken(true);

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
    await getAccounts(result.signer); // Get Ethereum Accounts
    await getBalance(result.signer); // Get Ethereum Balance
    await signMessage(result.signer, "Hello Web3Auth!"); // Sign a Message
    // IMP END - Blockchain Interaction

    console.log("\x1b[33m%s\x1b[0m", "Blockchain interactions done.");
};

// Call the initialization and login function
initAndLogin();