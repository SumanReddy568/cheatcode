window.nginxReverseProxyCommands = [
    { command: 'sudo systemctl start nginx', description: 'Start the Nginx service' },
    { command: 'sudo systemctl stop nginx', description: 'Stop the Nginx service' },
    { command: 'sudo systemctl restart nginx', description: 'Restart the Nginx service' },
    { command: 'sudo systemctl reload nginx', description: 'Reload Nginx configuration without dropping connections' },
    { command: 'sudo nginx -t', description: 'Test the Nginx configuration for syntax errors' },
    { command: 'sudo systemctl status nginx', description: 'Check the status of the Nginx service' },
    { command: 'sudo tail -f /var/log/nginx/error.log', description: 'View Nginx error logs in real-time' },
    { command: 'sudo tail -f /var/log/nginx/access.log', description: 'View Nginx access logs in real-time' },
    { command: 'sudo nano /etc/nginx/nginx.conf', description: 'Edit the main Nginx configuration file' },
    { command: 'sudo nano /etc/nginx/sites-available/default', description: 'Edit the default server block configuration' }
];
