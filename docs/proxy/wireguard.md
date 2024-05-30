---
title: WireGuard
---

### Adding a WireGuard Configuration to Rethink DNS + Firewall + VPN App

This guide will walk you through the steps to add a WireGuard configuration to the Rethink DNS + Firewall + VPN app.

### Step 1: Open the App

1. Open the **Rethink DNS + Firewall + VPN** app on your device.

### Step 2: Navigate to the WireGuard Section

1. Tap on the **VPN** tab at the bottom of the screen.
2. Select **WireGuard** from the list of available VPN options.

### Step 3: Add a New WireGuard Configuration

1. Tap on the **+** (plus) button or the **Add Configuration** option.
2. You will see three options:
   - **Manual Entry**
   - **Import Config**
   - **Scan QR Code**

### Step 4: Manual Entry

1. Select **Manual Entry** to enter the configuration details manually.
2. Enter a name for the configuration in the **Name** field.

#### Enter WireGuard Configuration Details

1. **Public Key**: Enter the public key provided by your WireGuard server.
2. **Private Key**: Enter your private key. (Ensure this is kept secure and never shared.)
3. **Endpoint**: Enter the endpoint URL or IP address of your WireGuard server along with the port (e.g., `vpn.example.com:51820`).
4. **Allowed IPs**: Enter the IP addresses that should be routed through the WireGuard tunnel (e.g., `0.0.0.0/0` to route all traffic).

#### Optional - Set Additional Parameters

1. **DNS**: Enter the DNS server(s) to be used with this WireGuard configuration.
2. **Persistent Keepalive**: Enter a value (in seconds) to keep the connection alive, if required by your server configuration (e.g., `25`).

3. Once all the necessary details have been entered, tap on the **Save** button.

### Step 5: Import Configuration

1. Select **Import Config**.
2. Navigate to the location of your WireGuard configuration file (`.conf`).
3. Select the configuration file to import the details automatically.
4. The app will parse the configuration file and fill in the necessary fields for you.
5. Review and adjust the settings if necessary, then tap on the **Save** button.

### Step 6: Scan QR Code

1. Select **Scan QR Code**.
2. Allow the app to access your camera if prompted.
3. Scan the QR code provided by your WireGuard server.
4. The app will automatically fill in the configuration details from the QR code.
5. Review and adjust the settings if necessary, then tap on the **Save** button.

### Step 7: Enable the WireGuard Configuration

1. After saving, you will see the newly added WireGuard configuration in the list.
2. Tap on the configuration name to enable it.
3. You may be prompted to grant VPN permissions; allow the necessary permissions to proceed.

### Step 8: Switch Between Simple and Advanced Modes

1. By default, the WireGuard configuration is in **Simple Mode**.
2. To switch to **Advanced Mode**, tap on the **Advanced** option.
3. In **Advanced Mode**, you have additional settings available, including the ability to select specific apps to use with the WireGuard VPN.

#### Selecting Apps in Advanced Mode

1. In the **Advanced Mode** settings, tap on **Select Apps**.
2. Choose the apps you want to route through the WireGuard VPN.
3. Save your selection and exit the settings.

### Step 9: Verify Connection

1. Once connected, you should see a status indication that the WireGuard VPN is active.
2. You can verify the connection by checking your IP address or using any network diagnostic tool to ensure your traffic is being routed through the WireGuard VPN.

### Troubleshooting

- **Connection Issues**: Ensure that your WireGuard server details are correct and that the server is running.
- **DNS Issues**: Verify that the DNS servers specified in the configuration are reachable and correctly configured.
- **Permission Issues**: Make sure that the app has the necessary permissions to establish a VPN connection.

### Conclusion

You have successfully added a WireGuard configuration to the Rethink DNS + Firewall + VPN app. If you encounter any issues or need further assistance, please refer to the support documentation or contact the support team.
