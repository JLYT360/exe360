const ftp = require('basic-ftp');

async function testFTP() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  
  try {
    await client.access({
      host: process.env.FTP_SERVER || 'ftp.cluster121.eu-west-gra.ovh.net',
      user: process.env.FTP_USERNAME || 'exefrcm',
      password: process.env.FTP_PASSWORD
    });
    
    console.log('=== Listing de /home/exefrcm/www/ ===');
    const files = await client.list('/home/exefrcm/www/');
    files.forEach(file => {
      console.log(`${file.type === 'd' ? 'DIR' : 'FILE'}: ${file.name} (${file.size} bytes)`);
    });
    
  } catch (err) {
    console.error('Erreur FTP:', err.message);
  } finally {
    client.close();
  }
}

testFTP();
