// Simple development API server
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  
  if (parsedUrl.pathname === '/api/submit-lead' && req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const leadData = JSON.parse(body);
        
        console.log('📋 Development API: Lead submission received');
        console.log('👤 Name:', leadData.firstName, leadData.lastName);
        console.log('📧 Email:', leadData.email);
        console.log('📱 Phone:', leadData.phone);
        console.log('🏠 Description:', leadData.houseDescription);
        
        const response = {
          success: true,
          message: 'Development mode - Lead captured successfully',
          notifications: {
            email: true,
            sms: true,
            stored: false
          },
          timestamp: new Date().toISOString()
        };
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
        
        console.log('✅ Response sent successfully');
        
      } catch (error) {
        console.error('❌ Error processing request:', error);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          message: 'Invalid JSON in request body'
        }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: false,
      message: 'Not found'
    }));
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`🚀 Development API server running on http://localhost:${PORT}`);
  console.log('📝 Ready to receive lead submissions at /api/submit-lead');
});