---
title: Orbot Integration
---

RethinkDNS comes with an option to configure Orbot (Tor) to be used along with the RethinkDNS as a Proxy server to change the IP address.

## Configurations Steps

### Manual Method

1. Start _Orbot_ (do not start it in the VPN mode).
2. Notice what Orbot says against "SOCKS5" and "HTTP" fields on its home-screen. Those are port numbers.
3. Open the RethinkDNS app; Start it and goto _Settings_.
4. Enable HTTP Proxy and enter the HTTP port number (as seen in Orbot), if you want just the browsers to use Orbot's Tor bridge.
5. Enable SOCKS5 (TCP) Proxy and enter the port number (from step 2), choose App (as Orbot), optionally enable Block all UDP traffic except DNS to stop leaking UDP (WhatsApp calls, Zoom, Chromecast may stop working; Orbot doesn't support UDP).
6. Note: The IP address field to be set in RethinkDNS is 127.0.0.1 for both those proxies (for Orbot).
7. Visit [dnsleaktest.com](https://dnsleaktest.com/). It shouldn't be able to tell where you're from and not be able to show your actual IP.

### Automatic Method

Starting from Version 0.53c, we have introduced one click setup

1. To use that Open RethinkDNS app and go to Settings Tab by clicking Gear Icon at the bottom menu.

  <img src="https://user-images.githubusercontent.com/75526985/113891733-efc03700-97f7-11eb-880c-d14551cd75ca.png" width="480" />

2. In settings, you will find _Setup Orbot_ in _VPN & Proxy_ section, click on it.

  <img src="https://user-images.githubusercontent.com/75526985/113891821-049cca80-97f8-11eb-982f-9d49c96bcfbc.png" width="480" />

3. Now, you will be presented with a drawer at bottom, where you will find options to setup Orbot as per your liking (HTTP Proxy, TCP-Only Proxy, TCP + HTTP Proxy and None).

  <img src="https://user-images.githubusercontent.com/75526985/113891926-1aaa8b00-97f8-11eb-8f8c-c484ea7103d7.png" width="480" />

4. Select the one you like and click on the Orbot icon at top of the drawer to open Orbot app and then start Orbot (tor network). Once you see 100% you are good to go.
