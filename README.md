# Hunt High Value XRD.Domains

This tool helps you find high value XRD domains fast. How it works:

1. clone the repository and install dependencies with `npm install`
2. Use ChatGPT to generate a list of 100 XRD domains as a list. You can use or modify the prmpt shared below.
3. Input the list as an array of strings inside domains.json
4. run `npm run start` to check whether those domains are registered or available

### PROMPT

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

### Ideas
- [ ] make a simple UI for this flow
- [ ] enable batch-buy of domains
- [ ] charge fee?
- [ ] maybe let users bring their own chatGPT key
