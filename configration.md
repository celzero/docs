--
title: Rethink DNS + Orbot
# sidebar_label: Configuration
slug: /orbot
---

RethinkDNS comes with an option to configure Orbot (tor) to be used along with the Rethink DNS as a Proxy server for changing the IP address

**Configurations Setps: (Manul Way)**

1. Start Orbot (do not start it in the VPN mode).

2. Notice what Orbot says against "SOCKS5" and "HTTP" fields on its homescreen. Those are port numbers.

3. Enter the RethinkDNS app, Start it, goto Settings.

4. Enable HTTP Proxy and enter the HTTP port number (as seen in Orbot) if you want just the browsers to use Orbot's Tor bridge.

5. Enable SOCKS5 (TCP) Proxy and enter the port number (from step 2), choose App (as Orbot), optionally enable Block all UDP traffic except DNS to stop leaking UDP (WhatsApp calls, Zoom, Chromecast may stop working; Orbot doesn't support UDP).

6. Note: The IP address field to be set in RethinkDNS is 127.0.0.1 for both those proxies (for Orbot).

7. Visit dnsleaktest.com. It shouldn't be able to tell where you're from and not be able to show your actual IP.

**Strating from Version 0.53C we have introduced one click setup: (Auto Way)**

1. To use that Open Rethink DNS app and go to Settings Tab by clicking Gear Icon in bottom menu.
        
        ![image](https://user-images.githubusercontent.com/75526985/113891733-efc03700-97f7-11eb-880c-d14551cd75ca.png)


2. in settings tab you will find Setup Orbot at last of VPN & PROXY section.

         ![image](https://user-images.githubusercontent.com/75526985/113891821-049cca80-97f8-11eb-982f-9d49c96bcfbc.png)


3. click on that option will be presented with a new page where you will find options to setup orbot as per your liking (HTTP PROXY, TCP-Only Proxy, TCP + HTTP Proxy and None).

          ![image](https://user-images.githubusercontent.com/75526985/113891926-1aaa8b00-97f8-11eb-8f8c-c484ea7103d7.png)


4. select the one you like and hit on the orbot icon at top to open orbot app and then start orbot (tor network) once you see 100% you are good to go.
