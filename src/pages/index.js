import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomeHeader } from '../utils';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application` ]} />
		<h3>this is the home page</h3>
		<HomeHeader />
	</Layout>
);

export default IndexPage;
