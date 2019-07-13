import Product from './models/Product';

function populate() {
	addProducts();
}

function addProducts() {
	Product.insertMany(
		[
			{
				name: 'Bose QuietComfort 35 II Wireless Over-Ear Headphones Limited Edition (Rose Gold)',
				description: 'What happens when you clear away the noisy distractions of the world? Concentration goes to the next level. You get deeper into your music, your work or whatever you want to focus on. That’s the power of QuietComfort 35 wireless headphones II, the most powerful noise cancelling headphones from Bose yet. Proprietary technology continuously monitors and measures outside noise and then cancels it with the opposite signal. So you can focus—really focus—on what matters. Plus, there are three levels of noise cancellation to choose from, so your music will always sound right for your environment.',
				brand: 'Bose',
				specs: [
					['Battery Life', '20h'],
					['Noice Cancelling', '12 levels'],
					['Alexa Enabled', 'true'],
					['Bose Connect App', 'true'],
					['Music Sharing', 'true'],
					['Bluetooth Standard', '4.1'],
					['Fit', 'Over Ear'],
					['Weight', '400g'],
				],
				unitsInStock: 12,
				unitPrice: 349,
				catagory: 'headphone',
				supplier: null,
				code: '789564-0050',
			},

			{
				name: 'Mpow 059 Bluetooth Headphones Over Ear',
				description: 'Mpow’s 059 bluetooth headphones tailored specifically for immersive and Hi-fidelity sound. Mpow stylish and foldable headphones delivers exceptional sound quality, and crystal clear clarity. Ergonomically engineered for wearing comfort and 20 hours, continuous wireless playback.',
				brand: 'Mpow',
				specs: [
					['Battery Life', '20h'],
					['Noice Cancelling', '12 levels'],
					['Bluetooth Standard', '4.1'],
					['Weight', '500g'],
				],
				unitsInStock: 14,
				unitPrice: 35,
				catagory: 'headphone',
				supplier: null,
				code: '',
			},

			{
				name: 'OneOdio Adapter-Free Closed Back Over-Ear DJ Stereo Monitor Headphones',
				description: 'Studio is a professional DJ headphone which has dynamic bass sound.',
				brand: 'OneOdio',
				specs: [
					['Battery Life', '20h'],
					['Speaker', '50mm'],
					['Impedance', '32 Ohms'],
					['Sensitivity', '110dB +- 3dB'],
					['Music Sharing', 'true'],
				],
				unitsInStock: 12,
				unitPrice: 349,
				catagory: 'headphone',
				supplier: null,
				code: '',
			},

			{
				name: 'JBL Charge 3 waterproof bluetooth speaker',
				description: 'Bluetooth - Wirelessly connect up to 3 smartphones or tablets to the speaker and take turns playing powerful stereo sound.',
				brand: 'JBL',
				spec: [
					['Battery Life', '20h'],
					['Waterproof', 'IPX7'],
					['Microphone', 'yes'],
				],
				unitsInStock: 6,
				unitPrice: 99,
				catagory: 'speaker',
				supplier: null,
				code: '34536-2342',
			}



		],
		(error) => {
			if (error) { console.log('Error adding sample products', error); }
		},
	);
}

export default populate;

/*
{
    name: '',
    description: '',
    brand: '',
    specs: [
        ['Battery Life', '20h'],
        ['Noice Cancelling', '12 levels'],
        ['Alexa Enabled', 'true'],
        ['Bose Connect App', 'true'],
        ['Music Sharing', 'true'],
    ],
    unitsInStock: 10,
    unitPrice: 35,
    catagory: 'headphones',
    supplier: null,
    code: '',
}
*/