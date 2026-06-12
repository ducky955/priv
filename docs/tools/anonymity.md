## How to Stay anonymous online
This is a list of ways to stay anonymous on the internet!

# The common tools(what not to use)

Many people use these tools to stay anonymous online-but I do not entirely recomend them.

- Incognito mode
The issue with this is that it acts as a "guest mode". It doesnt hide your search history entirely. your ISP or router admin can still see what website you visited. Its not specific, but it shows the primary domain and the time. 
- Proxy
Instead of connecting directly to a website, your request is sent to a server, where the request is processed, and sent back. Proxies are not always encrypted, so people can read and see your unencrypted requests. NOTE: you can self host a proxy if you have the resources. 

# Better ways to stay anonymous
- VPN
A VPN hides your traffic from local routers and ISP. It essentialy "tunnels" your traffic to a server. You are trusting the VPN provider with your data, instead of your ISP or system admin. If you want to browse anonymously, this is a way to start. Like a Proxy, this can also be hosted localy. Learn how [here](Hosting-vpn.md)
- Tor
Tor is a decentralzized network specialized for high level anonymity. Instead of using a single server like a VPN or Proxy, tthe Tor network encrypts your data and sends it around three or more nodes(servers) The good thing about Tor is that the first node knows who you are but not where you're going. The middle node(s) know nothing. The final node knows where you're going, but not who you are. Its extremely hard to be tracked via Tor. Learn more at the [Tor Project](https://www.torproject.org/){: target="_blank" }
- Special OS
Made by the Tor project, Tails is a linux based OS that boots from a usb stick. It uses the Tor network, to ensure privacy. Because it runs on your system RAM, once you restat, turn off, or unplug the computer, all traces of what you did vanishes physicaly.