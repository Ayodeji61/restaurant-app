import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const MenuPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		<h3>this is menu page</h3>
	</Layout>
);

export default MenuPage;
