import React from 'react';
import { Helmet } from 'react-helmet-async';
import jsonData from '../data/jsonData';

const JsonLd = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(jsonData)}</script>
  </Helmet>
);

export default JsonLd;
