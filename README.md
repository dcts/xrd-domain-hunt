# High Value Domain Hunter

This tool helps you find high value xrd domains. 

## How It Works

1. clone the repository and install dependencies with `npm install`
2. Use ChatGPT to generate a list of 100 XRD domains as a list. You can use or modify the script shared below.
3. Input the list as an array of strings inside domains.json
4. run `npm run start` to get the domains list

### Boilerplate ChatGPT prompt

Note: Adapt the prompt to your liking, a good way might be to add a topic like or industry (e.g. "health", "music") to get more niche domains. General tips:
- provide example increases quality
- "codeonly" returns only the code
- provide as much context as possible

**PROMPT**

```txt
XRD Domains just launched their domain feature on the radix DLT. Your task is to generate a list of high value domains, with the intention to buy those domains, and sell for a profit in the future. Be sure to grab high value domains that have value particularly in the blockchain space, but also in general. The domains always end with ".xrd". For example:

domains = [
  "bitcoin.xrd",
  "btc.xrd",
  "buy.xrd",
  "sell.xrd",
]

Output code only and output is as a JSON string array as shown above. Provide a list of 100 domains.
```

# Have Fun Hunting Domains 🔥

### Possible Next Steps
- [ ] make a simple UI for this flow
- [ ] enable batch-buy of domains
- [ ] charge fee?
- [ ] maybe let users bring their own chatGPT key

