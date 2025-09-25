# Contributing to Web3Auth Node.js Examples

We love your input! We want to make contributing to Web3Auth Node.js Examples as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Example Structure

When creating a new example, please follow this structure:

```
example-name/
├── README.md          # Detailed setup and usage instructions
├── package.json       # Dependencies and scripts
├── .env.example      # Environment variables template
├── src/              # Source code
│   └── index.js      # Main entry point
└── docs/             # Additional documentation (optional)
```

## Code Style

- Use ESLint and Prettier for code formatting
- Follow the existing code style in the repository
- Write meaningful commit messages
- Include JSDoc comments for functions and classes

## Environment Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy environment template: `cp env.example .env`
4. Fill in your Web3Auth credentials
5. Run the example: `npm start`

## Testing

- Ensure your example runs without errors
- Test with different Node.js versions (16, 18, 20)
- Verify all environment variables are documented

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Questions?

Feel free to open an issue for any questions or join our [Community Discord](https://web3auth.io/community).
