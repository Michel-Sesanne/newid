const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs-extra');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/tarifsElectricien', changefreq: 'weekly', priority: 0.8 },
  { url: '/tarifsSerrurier', changefreq: 'weekly', priority: 0.8 },
  { url: '/mentionsLegales', changefreq: 'monthly', priority: 0.5 },
];

// Créer un flux lisible à partir des liens
const stream = new SitemapStream({ hostname: 'https://www.idelectriciteserrurerie.fr' });

streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  fs.writeFileSync('./public/sitemap.xml', data)
);
