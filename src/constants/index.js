import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
} from '../assets'

import php from '../assets/tech/php.png'
import threejs from '../assets/tech/threejs.png'
import linux from '../assets/tech/linux.png'
import Virtuous from '../assets/company/Virtuous.png'
import mern from '../assets/MERN.webp'
import react from '../assets/structure.png'

import digiateb from '../assets/digiateb.png'
import great from '../assets/great.png'
import raees from '../assets/raees.png'
import iisa from '../assets/iisa.png'
import marathi from '../assets/marathi.png'
import uni from '../assets/uni.png'
import protech from '../assets/protech.png'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const services = [
	{
		title: 'MERN Developer',
		icon: mern,
	},
	{
		title: 'React Developer',
		icon: react,
	},
	{
		title: 'PHP Developer',
		icon: php,
	},
	{
		title: 'Web Developer',
		icon: web,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'Linux',
		icon: linux,
	},
	{
		name: 'Php',
		icon: php,
	},
]

const experiences = [
	{
		title: 'MERN Developer',
		company_name: 'Virtuous Global Services Pvt Ltd',
		icon: Virtuous,
		iconBg: '#383E56',
		date: 'March 2021 - Present',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Contributing to an open-source project for a client',
			'Build features and applications with a mobile responsive design',
			'Translate static HTML components using Next.js, React JS, and JavaScript.',
			'Creating effective APIs in Node.js for web applications.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Web Developer',
		company_name: 'Virtuous Global Services Pvt Ltd',
		icon: Virtuous,
		iconBg: '#E6DEDD',
		date: 'Mar 2019 - Feb 2021',
		points: [
			'Designed and developed various websites using HTML5, CSS3, JavaScript, PHP, and Bootstrap for many clients.',
			'Managed the design and development process from start to finish while following established guidelines.',
			'Developed designs to meet specific requirements, such as quick-loading sites with particular layouts and optimized for the best user experience.',
			'Produced websites compatible with multiple browsers and devices',
			'Designed responsive web design for various devices.',
			'Developed landing pages, multipage websites, dashboards, and web applications using HTML5, CSS3, Bootstrap, PHP, and JavaScript scripting.',
			'Worked on dynamic websites with data handling using PHP and MySQL databases.',
		],
	},
]

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
]

const projects = [
	{
		name: 'DigiAteb.com',
		description:
			'Website develope for DigiAteb Web Solution who provides Web and IT Services.',
		tags: [
			{
				name: 'php',
				color: 'blue-text-gradient',
			},
			{
				name: 'mySQL',
				color: 'green-text-gradient',
			},
			{
				name: 'wordpress',
				color: 'pink-text-gradient',
			},
		],
		image: digiateb,
		source_code_link: 'https://www.digiateb.com/',
	},
	{
		name: 'Great Kokan Vally',
		description:
			'A website build for Client The Great Konkan Valley Brings You Some Of The Most Incredible, Scenic, And Tranquil Settings,Situated just 3.5 km. from Dapoli and 3.5 km. from Ladghar Beach.',
		tags: [
			{
				name: 'Wordpress',
				color: 'blue-text-gradient',
			},
			{
				name: 'php',
				color: 'green-text-gradient',
			},
			{
				name: 'mySQL',
				color: 'pink-text-gradient',
			},
		],
		image: great,
		source_code_link: 'https://greatkonkan.com/',
	},
	{
		name: 'Protech Infra Sturcture Pvt. Ltd.',
		description:
			'A website build for Client,Protech Infrastructural Services Limited is a Maharashtra based construction Services Company and is a leading builder in diverse and numerous market segments.',
		tags: [
			{
				name: 'bootstrap',
				color: 'blue-text-gradient',
			},
			{
				name: 'php',
				color: 'green-text-gradient',
			},
			{
				name: 'mySQL',
				color: 'pink-text-gradient',
			},
		],
		image: protech,
		source_code_link: 'https://www.protechinfra.in/',
	},
	{
		name: 'RaeesRoyal.com',
		description:
			'Website develope for Client, Real Estate Consulting and Real Estate Solutions across verticals, RaeesRoyal has set up its name as a pioneer right now. Since 2014 Raees Royal brand has been related with unwavering quality.',
		tags: [
			{
				name: 'php',
				color: 'blue-text-gradient',
			},
			{
				name: 'mySQL',
				color: 'green-text-gradient',
			},
			{
				name: 'bootstrap',
				color: 'pink-text-gradient',
			},
		],
		image: raees,
		source_code_link: 'https://raeesroyal.com/',
	},
	{
		name: 'IISA.Com',
		description:
			'Web application that enables users to apply for IISA Awards 2023.',
		tags: [
			{
				name: 'wordpress',
				color: 'blue-text-gradient',
			},
			{
				name: 'php',
				color: 'green-text-gradient',
			},
			{
				name: 'mySQL',
				color: 'pink-text-gradient',
			},
		],
		image: iisa,
		source_code_link: 'https://iisaawards.com/',
	},
	{
		name: 'Marathi Music Video Awards',
		description:
			'A Music video awards show website build for client in Wordpress.',
		tags: [
			{
				name: 'wordpress',
				color: 'blue-text-gradient',
			},
			{
				name: 'php',
				color: 'green-text-gradient',
			},
			{
				name: 'mySQL',
				color: 'pink-text-gradient',
			},
		],
		image: marathi,
		source_code_link: 'https://marathimusicvideoawards.com/',
	},
]

export { services, technologies, experiences, testimonials, projects }
