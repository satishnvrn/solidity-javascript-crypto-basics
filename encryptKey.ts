import { Wallet, ethers } from "ethers";
import * as fs from "fs-extra";
import "dotenv/config";

async function main() {
  const wallet: Wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptedPrivatekey = await wallet.encrypt(process.env.PRIVATE_KEY_PASSWORD);
  fs.writeFileSync("./.encryptedKey.json", encryptedPrivatekey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
