---
title: Open Source
---

The free and open source RethinkDNS Resolver is serverless and supports protocols: DNS over HTTPS (DoH) & DNS over TLS (DoT). It can be configured with custom blocklists. And can be hosted on cloudflare, fly.io or deno-deploy. Source code is made available at [github.com/serverless-dns/serverless-dns](https://github.com/serverless-dns/serverless-dns).

## Hosting your own DNS Resolver {#hosting}

This serverless DNS can be hosted to three platforms: Cloudflare, Deno-Deploy and Fly.io. Easiest way would be to use Cloudflare. The below table summarizes the platforms available.

| Platform      | Difficulty | Resolver Protocol | Instructions                      |
| ------------- | ---------- | ----------------- | --------------------------------- |
| ⛅ Cloudflare  | Easy       | HTTPS             | [Read Instructions](#cloudflare)  |
| 🦕 Deno Deploy | Moderate   | HTTPS             | [Read Instructions](#deno-deploy) |
| 🪰 Fly         | Hard       | TLS & HTTPS       | [Read Instructions](#fly-io)      |

### Using Cloudflare {#cloudflare}

Rethink serverless can be hosted to cloudflare. User will be liable for cloudflare billing. Click the below button to deploy.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/serverless-dns/serverless-dns/)

- Configure
	- Once the hosting is successful, lets consider rethink serverless dns is hosted
		to `example.com`.
	- To configure your dns level blocking visit to `example.com/configure` which
		will take to configuration page, which currently contains 171 blocklists with
		5 Million too block domains in category like notracking, dating, gambling,
		privacy, porn, cryptojacking, security ...
	- Navigate through and select your blocklists.
	- Once selected you can find your domain name `example.com` followed by
		configuration token on screen like this `https://example.com/1:AIAA7g==` copy
		it and add to your dns DOH client.
	- Now your own trusted dns resolver with custom blocking is up and running.


- Change Resolver
	- By default dns request are resolved by cloudflare `cloudflare-dns.com`.
	- To change resolver login to your cloudflare dash board
		- click on `worker`
		- click on `serverless-dns` worker
		- click on `Settings` tab
		- under `Environment Variables` click on `Edit variables`
		- if your new DOH resolver url is `example.dns.resolver.com/dns-query/resolve`
		- change below variables and click on save button
			`CF_DNS_RESOLVER_URL = example.dns.resolver.com/dns-query/resolve`


### Using Deno-Deploy {#deno-deploy}

This project can be hosted on [deno.com/deploy](https://deno.com/deploy) and supports DoH only. User will be liable for deno.com billing.

1. Fork the [serverless-dns repository](https://github.com/serverless-dns/serverless-dns) (You will need a GitHub account).
2. In your fork, click on the _Actions_ tab and Confirm that you want to use Actions, if asked.
3. Click on "🦕 Deno" on the left pane. Click on the "Run workflow" dropdown on the right side. In this dropdown, type "Deployment type" as "live" instead of "dev". Then run the workflow using the <kbd>Run workflow</kbd> button.
4. Now, navigate to [deno.com/deploy](https://deno.com/deploy) and Sign Up for an account.
5. Create a new project in [deno deploy dash](https://dash.deno.com). Name it appropriately.
6. Click on "Continue" button under "Deploy from GitHub" and proceed to install the GitHub app on your GitHub Account. Make sure you give access the fork repository you had made in step 1.
7. Now, head back the deno dash and select the repository as the fork you had made in step 1, for integration. Select branch as "build/deno-deploy/live", and select the file as "index.bundle.js".
8. Open deno dash and select the project, navigate to Settings -> Environment variables (`https://dash.deno.com/projects/<project-name>/settings/envs`). Add the essential environment variables as described in [`.env.example`](https://github.com/serverless-dns/serverless-dns/blob/main/.env.example) file as `key = "value"` pairs. If values are empty (`""`) for required variables, they can be found in [`wrangler.toml`](https://github.com/serverless-dns/serverless-dns/blob/main/wrangler.toml) and/or [`fly.toml`](https://github.com/serverless-dns/serverless-dns/blob/main/fly.toml) files.
9. Done. Now your DoH resolver should be available on `https://<name>.deno.dev`, where `<name>` is the name of the project you had created on step 5.

### Using Fly.io {#fly-io}

This project can be hosted on [fly.io](https://fly.io), and can support both DoT and DoH protocols. User will be liable for fly.io billing.

1. Install `flyctl` on your device. Please [refer to fly.io docs](https://fly.io/docs/getting-started/installing-flyctl/) for the same.
2. Signup or Login to fly.io. Please [refer to fly.io docs](https://fly.io/docs/getting-started/login-to-fly/) for the same.
3. Create an empty directory anywhere on your PC. Open you terminal or powershell and navigate to this directory.
4. Launch a fly app
	```bash
	flyctl launch
	```
	- Choose a unique name here or let it auto-generate.
	- Choose a location (closest to you would be better for you to use).
	- Note down the name of the app and you may delete this directory along with the generated `fly.toml`.
5. Now, you would need a SSL or TLS certificate for your domain name. Both getting a domain name and CA certificate generation are beyond the scope of this README.
6. Once you have your CA certificate and key files, you need to encode them as base64 with no wrapping. How this can be done in bash terminal is shown below.
	```bash
	# Locate your CA certificate & key files
	CRT="path/to/full-chain-certificate.pem"
	KEY="path/to/key.pem"
	```
	```bash
	# Encode them in base64 with no wrappings and store them in variables
	B64NOWRAP_KEY="$(base64 -w0 "$KEY")"
	B64NOWRAP_CRT="$(base64 -w0 "$CRT")"
	```
7. As described in [`.env.example`](https://github.com/serverless-dns/serverless-dns/blob/main/.env.example) file, this base64 encoded certificate-key pair need to set as a single environment variable called `TLS_`. Within this variable, the certificate and key encodings needs to be separated by a newline (`\n`) and described by `CRT=` and `KEY=`. On a bash terminal this can be done by following steps continued by by above.
	```bash
	# This creates a single file called "FLY_TLS" in the current directory
	echo "KEY=$B64NOWRAP_KEY" > FLY_TLS
	echo "CRT=$B64NOWRAP_CRT" >> FLY_TLS
	# And now, this "FLY_TLS" file contains both certificate and key encoded and
	# as required
	```
	- Upload this to fly secrets like so in terminal or powershell:
		```bash
		fly secrets set TLS_=- < FLY_TLS -a app-id
		```
		where "app-id" is the name of the fly app you had launched in step 4.
	- Other essential environment variables are already present in [`fly.toml`](https://github.com/serverless-dns/serverless-dns/blob/main/fly.toml) file of this repository, but you may read [`.env.example`](https://github.com/serverless-dns/serverless-dns/blob/main/.env.example) for it's use case and configuration.
8. Fork the [serverless-dns repository](https://github.com/serverless-dns/serverless-dns) (You will need a GitHub account).
9. In your fork, click on the _Actions_ tab and Confirm that you want to use Actions, if asked.
10. Similarly, click on _Settings_ tab and select _Secrets_ on the left pane. Add a new GitHub secret called **FLY_APP_NAME** and set it's value as the name of the fly app you had launched in step 4. And add another secret called **FLY_API_TOKEN** and set's value as what you get from running `flyctl auth token` in terminal or powershell.
11. Head back to _Actions_ tab and click on "🪰 Fly" on the left pane. Click on the "Run workflow" dropdown on the right side, and run the workflow using the <kbd>Run workflow</kbd> button.
12. Once this action workflow finishes, open the terminal or powershell again and type in:
	```bash
	flyctl ips list -a app-id
	```
	where "app-id" is the name of the fly app you had launched in step 4.
	- Here, you can get the IP address of the application, update the DNS records of your domain name you had used in step 5.
13. Done. Your application should be available on the said domain name in a few minutes. To configure, say, to change the upstream resolver, you can edit the environment variables on `fly.toml` file of your fork and re-run the Action workflow.
