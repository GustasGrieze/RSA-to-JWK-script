# Create JWT with RSA Private Key

This script generates a JWT using an RSA private key, useful for authentication mechanisms in applications that use JWT.

## Requirements

- Node.js environment
- `jsonwebtoken` npm package
- RSA `private.key` file in your project root

## Setup & Execution

1. **Install jsonwebtoken Package**

    Run `npm install jsonwebtoken` in your project directory.

2. **Prepare Your RSA Private Key**

    Place your RSA private key in a file named `private.key` within the project root.

3. **Script Execution**

    Execute the script via Node.js by running `node RSAToJWK.js`.

## Script Explanation

- **Dependencies**: The script starts by importing required modules - `jsonwebtoken` for JWT operations and `fs` for file system interactions.

- **Read the Private Key**: Uses `fs.readFileSync` to synchronously read the RSA private key from `private.key`.

- **Sign the Payload**: Calls `jwt.sign` to create the token. The payload `{ hasInvitation: true }` is signed with the RSA private key, specifying `RS256` as the signing algorithm.

- **Token Configuration**:
  - `expiresIn`: Sets the token's expiration time to 1 hour.
  - `header`: Customizes the token header to include:
    - `jku`: URL pointing to the JSON Web Key Set. Here, it's set to `'localhost:1337'`, but should be updated to the actual URL where your JWKS is hosted.
    - `kid`: A unique identifier for the key used to sign the token, aiding in key management and rotation.

- **Output**: The generated token is logged to the console, ready to be used or tested.