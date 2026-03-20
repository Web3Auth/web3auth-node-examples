# MetaMask Embedded Wallets Node Examples

Node.js CLI examples using `@web3auth/node-sdk` for backend custom-auth flows.

These examples are intentionally minimal and focus on:
- JWT-based login with `authConnectionId`
- Wallet reconstruction through Web3Auth Sapphire networks
- Basic EVM or Solana signing/balance calls

## Examples

- **[EVM Quick Start](./evm-quick-start/)**: custom JWT auth + EVM account/balance/sign message
- **[Solana Quick Start](./solana-quick-start/)**: custom JWT auth + Solana account/balance/sign message
- **[Firebase Quick Start](./firebase-quick-start/)**: Firebase ID token -> Web3Auth connect -> EVM calls

## Quick Start

```bash
cd <example-folder>
npm install
npm start
```

Example:

```bash
cd evm-quick-start
npm install
npm start
```

## Before You Run

- Create a project in [Web3Auth Dashboard](https://dashboard.web3auth.io)
- Configure a custom auth connection and note its `authConnectionId`
- Keep your `Client ID`, `authConnectionId`, and `web3AuthNetwork` consistent

## Critical Notes

- This repo uses **MetaMask Embedded Wallets** docs and APIs (legacy `web3auth.io/docs` links are outdated).
- Node SDK is backend-only and custom-auth-focused; it does not provide social-login UI.
- JWTs must be freshly issued; stale `iat` values can fail login.
- These examples include demo credentials and keys for learning only. Do not use as-is in production.

## Official Docs

- [Embedded Wallets Docs](https://docs.metamask.io/embedded-wallets/)
- [Node SDK Docs](https://docs.metamask.io/embedded-wallets/sdk/node/)
- [Node Quick Start](https://docs.metamask.io/embedded-wallets/sdk/node/quick-start/)
- [Builder Hub Community](https://builder.metamask.io/c/embedded-wallets/5)

## License

MIT - see [LICENSE](./LICENSE).