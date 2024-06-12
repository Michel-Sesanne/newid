const jsonData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "name": "I.D Electricité & Serrurerie",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2 impasse Grand Cabaret",
          "addressLocality": "Morières lès Avignon",
          "addressRegion": "Provence-Alpes-Côte d'Azur",
          "postalCode": "84310",
          "addressCountry": "FR"
        },
        "openingHours": [
            "Mo-Fr 07:30-18:00"
        ],
        "telephone": "+33 6 34 82 65 27",
        "url": "http://www.idelectriciteserrurerie.fr",
        "description": "Electricien rayonnant sur Avignon et ses alentours (jusqu'à 20km), intervention et dépannage 7j/7-24h/24"
      },
      {
        "@type": "Locksmith",
        "name": "I.D Electricité & Serrurerie",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2 impasse Grand Cabaret",
          "addressLocality": "84310 Morières lès Avignon",
          "addressRegion": "Provence-Alpes-Côte d'Azur",
          "postalCode": "84310",
          "addressCountry": "FR"
        },
        "openingHours": [
            "Mo-Fr 07:30-18:00"
        ],
        "telephone": "+33 6 34 82 65 27",
        "url": "http://www.idelectriciteserrurerie.fr",
        "description": "Serrurier rayonnant sur Avignon et ses alentours (jusqu'à 20km), intervention et dépannage 7j/7-24h/24"
      }
    ]
  };
  
  export default jsonData;
  