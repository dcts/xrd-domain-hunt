import RnsSDKImport from '@radixnameservice/rns-sdk';
const RnsSDK = RnsSDKImport.default;

// Init rns globally
const rns = new RnsSDK({
    network: 'mainnet' // or mainnet
});

// Init result globally
const result = {
    "available": [],
    "registered": [],
    "protected": [],
}

// helper function to check domain status
async function checkDomainStatus(domain) {
    const attributes = await rns.getDomainAttributes(domain);
    if (attributes.verbose.includes("protected")) {
        result.protected.push(domain);
        return;
    }
    result[attributes.status].push(domain);
}

// load data
import domainsJson from "./domains.json" assert { type: "json" };

// asyncronously check the status
await Promise.all(domainsJson.map(domain => checkDomainStatus(domain)));

// display results:
console.log("\n\n");
console.log("=== ❌ Registered Domains ===");
console.log(result.registered.join("\n"));

console.log("\n\n");
console.log("=== 🔒 Protected Domains ===");
console.log(result.protected.join("\n"));

console.log("\n\n");
console.log("=== ✅ Available Domains ===");
console.log(result.available.join("\n"));
