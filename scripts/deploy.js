const hre = require("hardhat");

async function main() {
  const Tracking = await hre.ethers.deployContract("Tracking");
  // const tracking = await Tracking.deploy();

  // await tracking.deploymentTransaction.wait();
  await Tracking.waitForDeployment();
  console.log(`Tracking deployed to ${Tracking.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run --network localhost scripts/deploy.js
