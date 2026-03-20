# Node SDK Firebase Quick Start

CLI demo that uses a Firebase ID token as the custom JWT for `@web3auth/node-sdk`, then performs EVM signer operations.

## What This Example Does

The script in `index.js`:
- Initializes Firebase app and signs in with email/password
- Fetches Firebase `idToken` from the authenticated user
- Initializes `Web3Auth` with `clientId` and `web3AuthNetwork`
- Calls `web3auth.connect({ authConnectionId, idToken })`
- Uses the returned EVM signer to:
  - print account address
  - fetch ETH balance
  - sign a message

## Run

```bash
cd firebase-quick-start
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
- Configure a custom auth connection for Firebase JWT validation
- Use that connection's `authConnectionId`
- Ensure issuer/audience/JWKS mapping matches your Firebase project

Then update values in `index.js`:
- `clientId`
- `authConnectionId`
- `web3AuthNetwork`
- Firebase app configuration and login credentials

## Critical Auth Rules

- Use `authConnectionId` for custom auth.
- Firebase token must be valid at connect time; request fresh tokens when needed.
- Keep `Client ID`, `web3AuthNetwork`, and `authConnectionId` stable to preserve wallet continuity.

## Security and Production Notes

- The current file contains hardcoded Firebase config and demo credentials.
- Do not store production credentials in source code.
- Move secrets and credentials to secure environment/config management.
- Never log JWTs, access tokens, or private key material in production.

## References

- [Embedded Wallets Docs](https://docs.metamask.io/embedded-wallets/)
- [Node SDK Docs](https://docs.metamask.io/embedded-wallets/sdk/node/)
- [Node Quick Start](https://docs.metamask.io/embedded-wallets/sdk/node/quick-start/)
- [Builder Hub Community](https://builder.metamask.io/c/embedded-wallets/5)