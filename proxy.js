function FindProxyForURL(url, host) {
    // Proxy server for wowhead.com
    if (shExpMatch(host, "whatismyipaddress.com")) {
        return "PROXY sosprist:neshja5ivi6c@185.199.228.220:7300";
    }
    
    // Direct connection for all other URLs
    return "DIRECT";
}
