import Head from 'next/head'
import withPosts from 'nextein/posts'
import {Content} from 'nextein/post'

const Home = ({ posts }) => {
	return (
		<div>
			<Head>
				<title>Josef Leventon | Full-Stack Web Developer</title>
			</Head>
			<main>
				<p className="text-teal-600">Hello World!</p>
			</main>
		)
}

export default withPosts(Home)
