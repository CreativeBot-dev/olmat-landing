module.exports = {
  apps: [
    {
      name: "prod-landing-olmat",
      script: "yarn",
      args: "start",
      cwd: "/var/www/olmat-landing",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
