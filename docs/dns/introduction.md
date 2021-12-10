---
title: Rethink DNS
# sidebar_label: Introduction
slug: /dns
---

Rethink**DNS** is [DNS Resolver](https://www.cloudflare.com/learning/dns/what-is-dns/) Service with custom rules and blocklists. A DNS resolver is an address book of the internet-- it helps locate IP addresses of the servers given a domain name. For example, dns.google.com (a domain name) is located at 8.8.8.8 (IP address). This mapping is retrieved by a DNS resolver.

You can configure Rethink**DNS** in the companion [firewall app](firewall) or even in your own device / internet browser that supports [Secure DNS](https://wikipedia.org/wiki/DNS_over_HTTPS) (aka DNS over HTTPS). See below on [how to configure](#how-to).

RethinkDNS is private, secure, and fast DNS resolver and has 170+ pre-defined blacklists for you to configure.

With our paid plans (coming soon), you'll also be able to define your own custom blocklists that can be configured with Rethink**DNS**. The paid plan will also allow you to store you dns logs and view analytics, all in the cloud. You will be able to analyse your DNS requests and read through aggregated reports.

RethinkDNS is highly-available with servers in over 200+ locations across the globe for fast DNS resolution.

## How To Configure DNS {#how-to}

A custom DNS resolver can be configured here: [rethinkdns.com/configure](https://www.rethinkdns.com/configure). This will give a DNS resolver address that looks something like `https://basic.bravedns.com/1:YASAAQBwIAA=` according to blocklists or rules that you selected. This address can then be used as your DNS resolver in your device or browser.

### Configure blocklists on the Companion Firewall App

1. Open RethinkDNS on your Android Smartphone
2. Click **START** to start the RethinkDNS resolver and Firewall, once it starts up properly, you'll see a 'PROTECTED' status below it.
3. Now tap on 'CONFIGURE' in the DNS section, which will open up a page that will allow you to set your DNS resolver. By default, it is set to _RethinkDNS Basic_, which blocks a set of few malware and trackers. But, you can add your own custom DNS or choose the pre-defined ones.
4. To configure blocklists, choose _RethinkDNS Plus_ and tap on 'CONFIGURE' button below it, this will open up the rethinkDNS configuration page. Here, you can select a set of blocklists with 'Simple View' or tap on 'Advanced View' to select Individual blocklists.
5. After you select your desired blocklists, tap on 'Done' at the bottom bar. This will close the configuration page and the selected blocklists will be automatically configured withe app. You will see an android toast message _Configured URL has been updated successfully_ to confirm this.
6. You have successfully configured RethinkDNS with blocklists in the companion firewall app.
