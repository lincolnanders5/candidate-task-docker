import Encryption from './libs/Encryption'

const pText = 'hello world';
const secret = 'risk3sixty'
const crypt = Encryption(secret);

const enc = crypt.encrypt(pText);
const dec = crypt.decrypt(enc);
console.log(`Encrypted: |${pText}| -> |${enc}|`);
console.log(`Decrypted: |${enc}|   -> |${dec}|`);

const challenge = "f78D2XXh8tnSc8a5/FE=:0LDv4U8TeV918C/NvPLOpA==";
console.log(`\nChallenge: ${challenge} -> ${crypt.decrypt(challenge)}`);
