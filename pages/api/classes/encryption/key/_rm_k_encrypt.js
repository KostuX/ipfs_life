const fs = require('fs');
const crypto = require('crypto');

function encryptFile(inputFilePath, outputFilePath, pemKeyPath) {
  // Read the content of the PEM key file
  const pemKey = fs.readFileSync(pemKeyPath, 'utf8');

  // Convert PEM key to buffer
  const keyBuffer = Buffer.from(pemKey, 'utf8');

  // Generate an initialization vector (IV)
  const iv = crypto.randomBytes(16);

  // Create a cipher using the key and IV
  const cipher = crypto.createCipheriv('aes-256-cbc', keyBuffer, iv);

  // Create input and output streams
  const input = fs.createReadStream(inputFilePath);
  const output = fs.createWriteStream(outputFilePath);

  // Pipe the input stream through the cipher and then to the output stream
  input.pipe(cipher).pipe(output);

  // Log IV to be used during decryption
  console.log('Initialization Vector (IV):', iv.toString('hex'));
}

// Example usage
const inputFilePath = 'path/to/your/input/file.txt';
const outputFilePath = 'path/to/your/output/encrypted-file.enc';
const pemKeyPath = 'path/to/your/encryption-key.pem';

encryptFile(inputFilePath, outputFilePath, pemKeyPath);
