# Node SDK Solana Quick Start

CLI demo for `@web3auth/node-sdk` using custom JWT authentication and Solana signing with `@solana/web3.js`.

## What This Example Does

The script in `index.js`:
- Initializes `Web3Auth` with a `clientId` and `web3AuthNetwork`
- Creates a JWT (RS256) from `privateKey.pem`
- Calls `web3auth.connect({ authConnectionId, idToken })`
- Uses the returned Solana signer to:
  - print public key
  - fetch SOL balance from Solana devnet
  - sign a message

## Run

```bash
cd solana-quick-start
npm install
npm start
```

Dev mode:

```bash
npm run dev
```

## Required Dashboard Setup

In [Web3Auth Dashboard](https://dashboard.web3auth.io):
- Create/select a project and copy its `Client ID`
- Configure a custom auth connection
- Use that connection's `authConnectionId`
- Ensure JWT validation settings match your token claims and signing key

Then update values in `index.js`:
- `clientId`
- `authConnectionId`
- `web3AuthNetwork`

## Critical Auth Rules

- Use `authConnectionId` for custom auth (not legacy verifier parameters).
- JWT must include a fresh `iat`; old tokens can fail validation.
- Wallet continuity depends on keeping `Client ID`, `web3AuthNetwork`, and `authConnectionId` stable.

## Solana-Specific Notes

- The sample balance check uses Solana RPC `https://api.devnet.solana.com`.
- Sapphire network (`sapphire_devnet` / `sapphire_mainnet`) is separate from Solana devnet/mainnet.
- You can test Solana devnet while still using a specific Sapphire environment for key derivation.

## Security and Production Notes

- Demo key material and printed tokens are for education only.
- Replace local signing-key usage with your secure auth backend.
- Do not log JWTs or sensitive credentials in production.

## References

- [Embedded Wallets Docs](https://docs.metamask.io/embedded-wallets/)
- [Node SDK Docs](https://docs.metamask.io/embedded-wallets/sdk/node/)
- [Node Quick Start](https://docs.metamask.io/embedded-wallets/sdk/node/quick-start/)