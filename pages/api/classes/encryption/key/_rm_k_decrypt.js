const fs = require('fs');
const crypto = require('crypto');

function decryptFile(inputFilePath, outputFilePath, pemKeyPath, ivHex) {
  // Read the content of the PEM key file
  const pemKey = fs.readFileSync(pemKeyPath, 'utf8');

  // Convert PEM key to buffer
  const keyBuffer = Buffer.from(pemKey, 'utf8');

  // Convert IV from hex string to buffer
  const iv = Buffer.from(ivHex, 'hex');

  // Create a decipher using the key and IV
  const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, iv);

  // Create input and output streams
  const input = fs.createReadStream(inputFilePath);
  const output = fs.createWriteStream(outputFilePath);

  // Pipe the input stream through the decipher and then to the output stream
  input.pipe(decipher).pipe(output);
}

// Example usage
const inputFilePath = 'path/to/your/encrypted-file.enc';
const outputFilePath = 'path/to/your/decrypted-file.txt';
const pemKeyPath = 'path/to/your/encryption-key.pem';
const ivHex = 'yourInitializationVectorHex'; // Replace with the IV used during encryption

decryptFile(inputFilePath, outputFilePath, pemKeyPath, ivHex);
