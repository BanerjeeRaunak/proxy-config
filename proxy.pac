function FindProxyForURL(url, host) {
    // Proxy server for wowhead.com
    if (shExpMatch(host, "whatismyipaddress.com")) {
        return "PROXY sosprist:neshja5ivi6c@38.154.227.167:5868";
    }
    
    // Direct connection for all other URLs
    return "DIRECT";
}
