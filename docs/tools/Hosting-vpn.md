## How to host a VPN 101

I'm going to teach you how to use WireGuard too setup a VPN.


# Step 1: Choose Your Hardware
You don't need a powerful machine to host a personal VPN. You can run it on:
- A Raspberry Pi or similar single-board computer.
- An old laptop or desktop turned home server (running Ubuntu/Debian).
- A Network Attached Storage (NAS) device via Docker.
- Your router itself (many modern routers have built-in OpenVPN or WireGuard servers).

# Step 2: The Setup Process (Using PiVPN & WireGuard)
If you are using a Linux-based machine (like a Raspberry Pi or an Ubuntu local server), PiVPN is an open-source installer script that turns a complex WireGuard setup into a simple, interactive menu.

1. Run the Installer
Open your terminal on the host machine and run:

==Bash==
curl -L https://install.pivpn.io | bash

Follow the on-screen prompts. It will ask you to confirm a static IP for your server, choose a user, and select your VPN protocol. Select WireGuard.

2. Handle Your Public IP (DDNS)
During the install, it will ask if you want to use your public IP address or a DNS name.
If your ISP changes your home IP address frequently (a dynamic IP), you should sign up for a free DDNS (Dynamic DNS) service like DuckDNS or No-IP.
Point the DDNS client to your home, and enter that domain name (e.g., myhome.duckdns.org) into the PiVPN installer.

3. Port Forwarding on Your Router
For traffic to reach your home VPN server from the outside world, you have to open a door on your router.
Log into your router’s admin panel (usually 192.168.1.1 or 192.168.0.1).
Find the Port Forwarding section.
Forward the WireGuard port (Default is UDP port 51820) to the local static IP address of your VPN server.

# Step 3: Create and Connect Clients
Once the server is running, you need to generate "profiles" for the devices you want to connect (like your phone or laptop).

1. Generate a Profile
On your server, run the command:

==Bash==
pivpn add
Give the profile a name (e.g., phone or laptop).

2. Connect Your Phone
If you are adding a mobile device, you can display a QR code directly in the terminal:

==Bash==
pivpn -qr
Select the profile you just made. Then, download the official WireGuard app on your iOS or Android device, tap the + icon, select Scan QR code, and scan your terminal screen.