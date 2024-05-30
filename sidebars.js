module.exports = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'DNS',
      items: ['dns/introduction', 'dns/open-source'],
    },
    {
      type: 'category',
      label: 'Firewall',
      items: ['firewall/introduction', 'firewall/orbot'],
    },
    {
      type: 'category',
      label: 'Proxy',
      items: ['proxy/wireguard'],
    },
  ],
  someSidebar: {
    // Features: ['mdx'],
  },
};
