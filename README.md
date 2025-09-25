# Web3Auth Node.js SDK Examples

A comprehensive collection of Node.js examples demonstrating Web3Auth integration with various blockchain networks and authentication methods.

## 🚀 Overview

This repository contains four independent sample applications showcasing different Web3Auth Node.js SDK integration patterns:

1. **[EVM Quick Start](./evm-quick-start/)** - Ethereum Virtual Machine compatible blockchains
2. **[Solana Quick Start](./solana-quick-start/)** - Solana blockchain integration
3. **[Cross-Chain Quick Start](./cross-chain-quick-start/)** - Multi-blockchain support (EVM + Solana + Bitcoin)
4. **[Firebase JWT Example](./firebase-jwt-example/)** - Firebase Authentication integration

## 📁 Repository Structure

```
web3auth-node-examples/
├── evm-quick-start/           # Ethereum/EVM blockchain example
├── solana-quick-start/        # Solana blockchain example
├── cross-chain-quick-start/   # Multi-blockchain example
├── firebase-jwt-example/      # Firebase authentication example
├── README.md                  # This file
├── CONTRIBUTING.md           # Contribution guidelines
└── LICENSE                   # License information
```

## 🛠️ Examples Overview

### 1. EVM Quick Start
**Location**: `./evm-quick-start/`
**Port**: `3000`

Demonstrates Web3Auth integration with Ethereum and EVM-compatible blockchains.

**Features**:
- JWT-based authentication
- Ethereum wallet creation and management
- Transaction signing
- Balance checking
- Web3.js integration

**Key Technologies**: Web3Auth Node SDK, Web3.js, Express.js, TypeScript

### 2. Solana Quick Start
**Location**: `./solana-quick-start/`
**Port**: `3001`

Shows how to integrate Web3Auth with the Solana blockchain.

**Features**:
- Solana wallet creation
- SOL transfers and transaction signing
- Native Solana integration
- Lamports handling
- Network information querying

**Key Technologies**: Web3Auth Node SDK, @solana/web3.js, Express.js, TypeScript

### 3. Cross-Chain Quick Start
**Location**: `./cross-chain-quick-start/`
**Port**: `3002`

Advanced example supporting multiple blockchains simultaneously.

**Features**:
- Multi-blockchain wallet support (Ethereum, Solana, Bitcoin)
- Cross-chain key derivation
- Unified authentication for all chains
- Bitcoin UTXO management
- Chain-specific transaction signing

**Key Technologies**: Web3Auth Node SDK, Web3.js, @solana/web3.js, bitcoinjs-lib, Express.js, TypeScript

### 4. Firebase JWT Example
**Location**: `./firebase-jwt-example/`
**Port**: `3003`

Production-ready example integrating Firebase Authentication with Web3Auth.

**Features**:
- Firebase Admin SDK integration
- Server-side token verification
- Secure authentication flow
- User management
- Firebase service account configuration

**Key Technologies**: Web3Auth Node SDK, Firebase Admin SDK, Web3.js, Express.js, TypeScript

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Web3Auth Dashboard account ([Get started here](https://dashboard.web3auth.io/))

### Running an Example

1. **Clone the repository**:
```bash
git clone <repository-url>
cd web3auth-node-examples
```

2. **Choose an example** and navigate to its directory:
```bash
cd evm-quick-start  # or solana-quick-start, cross-chain-quick-start, firebase-jwt-example
```

3. **Install dependencies**:
```bash
npm install
```

4. **Configure environment variables**:
```bash
cp env.example .env
# Edit .env with your Web3Auth configuration
```

5. **Run the application**:
```bash
npm run dev  # Development mode
# or
npm start    # Production mode
```

6. **Test the endpoints**:
```bash
# Visit the demo endpoint for API documentation
curl http://localhost:PORT/demo
```

## ⚙️ Configuration

### Web3Auth Setup

1. **Create Web3Auth Project**:
   - Visit [Web3Auth Dashboard](https://dashboard.web3auth.io/)
   - Create a new project
   - Note your Client ID

2. **Configure Verifiers** (for each example):
   - Create appropriate verifiers for your authentication method
   - For Firebase example: Set up Firebase verifier with your project ID

### Environment Variables

Each example requires configuration via environment variables. See individual example README files for specific requirements.

**Common variables**:
```env
WEB3AUTH_CLIENT_ID=your_web3auth_client_id_here
WEB3AUTH_VERIFIER_NAME=your_verifier_name_here
```

## 🔑 Key Integration Patterns

All examples follow the same Web3Auth integration sequence highlighted with `//IMP START` comments:

### 1. Web3Auth Initialization
```typescript
// IMP START - Web3Auth Configuration
const web3auth = new Web3Auth({
  clientId,
  web3AuthNetwork,
});

await web3auth.init({ provider });
// IMP END
```

### 2. Authentication and Connection
```typescript
// IMP START - Connect to Web3Auth with JWT
const provider = await web3auth.connect({
  verifier: verifierName,
  verifierId,
  idToken,
});
// IMP END
```

### 3. Blockchain Interactions
```typescript
// IMP START - Get user account and balance
const accounts = await web3.eth.getAccounts();
const balance = await web3.eth.getBalance(accounts[0]);
// IMP END
```

## 🌐 Supported Networks

### Ethereum (EVM)
- **Mainnets**: Ethereum, Polygon, BSC, Avalanche, etc.
- **Testnets**: Goerli, Sepolia, Mumbai, etc.
- **Features**: Full Web3.js integration, gas management, smart contracts

### Solana
- **Networks**: Mainnet-beta, Devnet, Testnet
- **Features**: Native SOL transfers, token operations, program interactions

### Bitcoin
- **Networks**: Mainnet, Testnet
- **Features**: Key derivation, UTXO management, transaction signing

## 📖 Documentation

- **Individual Examples**: Each example has detailed README with setup instructions
- **API Documentation**: Available at `/demo` endpoint for each running example
- **Web3Auth Docs**: [https://web3auth.io/docs/](https://web3auth.io/docs/)
- **Node SDK Docs**: [https://web3auth.io/docs/sdk/core-kit/node-js/](https://web3auth.io/docs/sdk/core-kit/node-js/)

## 🔒 Security Considerations

⚠️ **Important**: These examples are for demonstration purposes. For production use:

- **Environment Security**: Use proper environment variable management
- **Key Management**: Never log or expose private keys
- **Authentication**: Implement proper JWT validation and refresh
- **Rate Limiting**: Add appropriate rate limiting
- **HTTPS**: Use HTTPS in production
- **Error Handling**: Implement comprehensive error handling
- **Validation**: Validate all inputs and transaction parameters

## 🧪 Testing

Each example includes basic testing capabilities:

```bash
# In any example directory
npm test  # Run tests (if available)

# Manual testing via curl
curl -X POST http://localhost:PORT/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

## 🛠️ Development

### Code Style
- **TypeScript**: Strongly typed throughout
- **ESLint**: Code linting and formatting
- **Comments**: Important integration points marked with `//IMP START`

### Project Structure
Each example follows a consistent structure:
```
example-name/
├── src/
│   └── index.ts          # Main application
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── env.example           # Environment template
├── .gitignore           # Git ignore rules
└── README.md            # Example-specific documentation
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Areas for Contribution
- Additional blockchain integrations
- Enhanced security examples
- Performance optimizations
- Additional authentication methods
- Documentation improvements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Web3Auth Docs](https://web3auth.io/docs/)
- **Community**: [Web3Auth Community Forum](https://community.web3auth.io/)
- **Issues**: [GitHub Issues](https://github.com/Web3Auth/web3auth-backend/issues)
- **Discord**: [Web3Auth Discord](https://discord.gg/web3auth)

## 🚀 What's Next?

After running these examples, consider:
1. **Production Deployment**: Implement security best practices
2. **Frontend Integration**: Connect with React, Vue, or Angular frontends
3. **Advanced Features**: Explore Web3Auth's advanced features
4. **Custom Verifiers**: Set up custom authentication verifiers
5. **Multi-Factor Authentication**: Implement additional security layers

---

**Happy Building with Web3Auth! 🌟**