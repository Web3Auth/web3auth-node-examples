# Web3Auth Node.js EVM Quick Start

A comprehensive CLI-based example demonstrating Web3Auth integration with Ethereum Virtual Machine (EVM) compatible blockchains in Node.js.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Web3Auth Dashboard account

### Installation

1. Navigate to the EVM quick start directory:
```bash
cd evm-quick-start
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
cp env.example .env
```

Edit the `.env` file with your Web3Auth configuration:
```env
WEB3AUTH_CLIENT_ID=your_web3auth_client_id_here
WEB3AUTH_VERIFIER_NAME=your_verifier_name_here
JWT_SECRET=your_jwt_secret_here
RPC_URL=https://rpc.ankr.com/eth
CHAIN_ID=0x1
```

### Running the Demo

```bash
# Run the CLI demonstration
npm start

# Development mode with auto-reload
npm run dev
```

## 📖 What This Example Demonstrates

This CLI-based example walks through the complete Web3Auth integration flow:

### 1. **JWT Token Creation** 🔐
- Demonstrates how to create JWT tokens for Web3Auth
- Shows token structure and verification
- Educational display of JWT headers and payload

### 2. **Web3Auth Initialization** ⚙️
- Initializes Web3Auth with Ethereum provider
- Configures chain settings for EVM networks
- Sets up the authentication system

### 3. **User Authentication** 👤
- Connects to Web3Auth using JWT token
- Retrieves user-specific blockchain wallet
- Demonstrates verifier ID handling

### 4. **Account Information** 💰
- Fetches user's Ethereum address
- Retrieves account balance
- Shows private key management (handled securely by Web3Auth)

### 5. **Network Status** 🌐
- Gets current network information
- Displays latest block details
- Shows current gas prices

### 6. **Transaction Operations** 💸
- Creates sample transactions
- Signs transactions with Web3Auth-managed keys
- Demonstrates transaction fee calculation

## 🏗️ Project Structure

```
evm-quick-start/
├── src/
│   ├── config.js          # Configuration and constants
│   ├── auth.js            # JWT creation and verification
│   ├── web3auth.js        # Web3Auth initialization and connection
│   └── blockchain.js      # Ethereum blockchain operations
├── index.js               # Main CLI demonstration script
├── package.json           # Dependencies and scripts
├── env.example           # Environment variables template
└── README.md             # This documentation
```

## 💡 Key Integration Points

The example highlights important Web3Auth integration steps with `//IMP START` comments:

### 1. Web3Auth Setup
```javascript
// IMP START - Create Web3Auth instance
const web3auth = new Web3Auth({
  clientId: WEB3AUTH_CONFIG.clientId,
  web3AuthNetwork: WEB3AUTH_CONFIG.web3AuthNetwork,
});

await web3auth.init({ provider: ethereumProvider });
// IMP END
```

### 2. JWT Authentication
```javascript
// IMP START - Connect to Web3Auth
const provider = await web3auth.connect({
  verifier: verifierName,
  verifierId,
  idToken,
});
// IMP END
```

### 3. Blockchain Interactions
```javascript
// IMP START - Get user accounts
const accounts = await web3.eth.getAccounts();
const balance = await web3.eth.getBalance(accounts[0]);
// IMP END
```

## 🔄 CLI Flow Overview

When you run `npm start`, the demo follows this sequence:

1. **Display Configuration** - Shows Web3Auth and chain settings
2. **Create JWT Token** - Generates demo authentication token
3. **Initialize Web3Auth** - Sets up the authentication system
4. **Connect User** - Authenticates and retrieves wallet
5. **Get Account Info** - Displays user's address and balance
6. **Check Network** - Shows current blockchain status
7. **Create Transaction** - Demonstrates transaction signing

## 📊 Sample Output

```
╔══════════════════════════════════════════════╗
║        Web3Auth Node.js EVM Quick Start     ║
║            CLI Demonstration                 ║
╚══════════════════════════════════════════════╝

ℹ Starting Web3Auth EVM integration demonstration...

🔧 Web3Auth Configuration:
├── Client ID: BPi5PB_UiIZ-cPz1GtV5...
├── Network: sapphire_mainnet
└── Verifier: web3auth-node-demo

⛓️ Chain Configuration:
├── Chain: Ethereum Mainnet
├── Chain ID: 0x1
├── RPC URL: https://rpc.ankr.com/eth
└── Currency: ETH (Ethereum)

Step 1: Creating demo JWT token...
✅ Demo JWT token created successfully

Step 2: Initializing Web3Auth
✅ Web3Auth initialized successfully!

Step 3: Connecting to Web3Auth with JWT
✅ Successfully connected to Web3Auth!

👤 Account Information:
├── Address: 0x7F...A8b2
├── Balance: 0.123456 ETH
└── Network: Ethereum Mainnet
```

## 🔧 Customization

### Different Networks
Modify `CHAIN_CONFIG` in `src/config.js` to use different EVM networks:

```javascript
export const CHAIN_CONFIG = {
  chainId: "0x89", // Polygon
  rpcTarget: "https://rpc.ankr.com/polygon",
  displayName: "Polygon Mainnet",
  ticker: "MATIC",
  // ... other config
};
```

### Custom Authentication
Replace the demo JWT creation in `src/auth.js` with your actual authentication system:

```javascript
// Instead of createDemoJWT(), integrate with your auth provider
const realJWTToken = await yourAuthSystem.authenticate(user);
```

## 🔐 Security Notes

⚠️ **Important**: This is a demonstration example:

- JWT tokens are created locally for demo purposes
- In production, JWT tokens should come from your authentication system
- Private keys are managed securely by Web3Auth
- Never log or expose private keys in production
- Transactions in this demo are signed but not broadcast

## 🌐 Supported Networks

This example works with any EVM-compatible network:

- **Ethereum**: Mainnet, Goerli, Sepolia
- **Polygon**: Mainnet, Mumbai
- **BSC**: Mainnet, Testnet
- **Avalanche**: C-Chain
- **Arbitrum**: One, Goerli
- **Optimism**: Mainnet, Goerli

## 📚 Learn More

- [Web3Auth Documentation](https://web3auth.io/docs/)
- [Web3Auth Node SDK](https://web3auth.io/docs/sdk/core-kit/node-js/)
- [Web3Auth Dashboard](https://dashboard.web3auth.io/)
- [EVM Networks](https://chainlist.org/)

## 🤝 Support

For issues and questions:
- [Web3Auth Community Forum](https://community.web3auth.io/)
- [GitHub Issues](https://github.com/Web3Auth/web3auth-backend/issues)