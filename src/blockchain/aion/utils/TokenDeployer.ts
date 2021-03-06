// tslint:disable-next-line: no-var-requires
const Web3 = require("aion-web3");
// tslint:disable-next-line: no-var-requires
const BN = require("bn.js");
// tslint:disable-next-line: no-var-requires
const path = require("path");

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://aion.api.nodesmith.io/v1/mastery/jsonrpc?apiKey=0427c27a027f4bf89845f8025febb801"
  )
);
// mainnet https://aion.api.nodesmith.io/v1/mainnet/jsonrpc?apiKey=0427c27a027f4bf89845f8025febb801
export async function deploy(
  privateKey: string,
  name: string,
  symbol: string,
  supply: number
): Promise<boolean | { contractAddress: string; contractOwner: string }> {
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  // Contract
  const jarPath = path.join(
    __dirname,
    "jar",
    "ATSTokenContract-1.0-SNAPSHOT.jar"
  ); // TODO: add token jar
  const namp = new BN("1000000000000000000");
  const totalSupply = namp.mul(new BN(supply));
  const data = web3.avm.contract
    .deploy(jarPath)
    .args(
      ["string", "string", "int", "byte[]"],
      [name, symbol, 1, totalSupply.toArray("be", 32)] // todo: check if granularity is 1 or 8
    )
    .init();

  // construct a transaction
  const Tx = {
    // from: account.address,
    data,
    gasPrice: 10000000000,
    gas: 5000000,
    type: "0x2" // AVM java contract deployment
  };
  let signedCall;
  const signedTx = await web3.eth.accounts
    .signTransaction(Tx, account.privateKey)
    .then(res => (signedCall = res));

  const receipt = await web3.eth
    .sendSignedTransaction(signedTx.rawTransaction)
    .on("receipt", rec => {
      // tslint:disable-next-line: no-console
      console.log("Receipt received!\ntxHash =", rec.transactionHash);
    });

  // tslint:disable-next-line: no-console
  console.log("Contract Address: " + receipt.contractAddress);
  const outData: { contractAddress: string; contractOwner: string } = {
    contractAddress: receipt.contractAddress,
    contractOwner: account.address
  };
  return outData;
}
