import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		<h3>this is about page</h3>
	</Layout>
);

export default AboutPage;
