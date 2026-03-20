# Node SDK EVM Quick Start

CLI demo for `@web3auth/node-sdk` using custom JWT authentication and EVM signing with `ethers`.

## What This Example Does

The script in `index.js`:
- Initializes `Web3Auth` with a `clientId` and `web3AuthNetwork`
- Creates a JWT (RS256) from `privateKey.pem`
- Calls `web3auth.connect({ authConnectionId, idToken })`
- Uses the returned EVM signer to:
  - print account address
  - fetch ETH balance
  - sign a message

## Run

```bash
cd evm-quick-start
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
- Ensure JWT validation settings (issuer, audience, JWKS/kid mapping) match your token

Then update values in `index.js`:
- `clientId`
- `authConnectionId`
- `web3AuthNetwork`

## Critical Auth Rules

- `authConnectionId` is the current API input for custom auth.
- JWT must include a fresh `iat` claim. Reused/stale tokens can fail.
- `Client ID`, `web3AuthNetwork`, and `authConnectionId` together affect derived wallet continuity. Changing them can lead to different wallets.

## Security and Production Notes

- This example reads a local `privateKey.pem` and logs JWT output for demo purposes.
- Do not keep signing keys in repo files in production.
- Mint JWTs server-side per login request and avoid logging tokens.
- Keep `sapphire_devnet` for local testing; switch to `sapphire_mainnet` only for production rollout.

## References

- [Embedded Wallets Docs](https://docs.metamask.io/embedded-wallets/)
- [Node SDK Docs](https://docs.metamask.io/embedded-wallets/sdk/node/)
- [Node Quick Start](https://docs.metamask.io/embedded-wallets/sdk/node/quick-start/)