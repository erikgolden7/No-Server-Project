angular.module('smartApp')
.service('productService', function($http) {
	
	window.scrollTo(0,0);
	

	
	this.products = [{
		
		name: "WeMo Switch Smart Plug",
		photo: 'https://images-na.ssl-images-amazon.com/images/I/31kQghDk1sL._AC_US320_FMwebp_QL65_.jpg',
		brand: "wemo",
		price: 29.99,
		description: "Did you forget to turn off the window A.C.? How about that curling iron? Want the living room lamp to turn on when the sun goes down—automatically? The Wemo Switch gives you control of your lamps and small appliances whenever you want, wherever you choose, with tons of options for scheduling and automation. Paired with Amazon Alexa, you can control your lamps and appliances with just the power of your voice. When Wemo works with Nest Thermostat, you can set your lights to turn off automatically when you leave the house, and on when you get home again. No central hub or subscription is required."
	},
		{
			name: "Philips Hue White A19 Starter Kit with two A19 LED light bulbs and bridge (hub)",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/31YRrmEoG2L._AC_US320_FMwebp_QL65_.jpg',
			brand: "philips",
			price:  69.99,
			description: "White light that fits your needs - The 2700K temperature offers vibrant illumination Mobile control from your smartphone or tablet - You can download a variety of apps to dim the light and set timers and alarms from a distance. Installs easily into your existing E26/A19 light fittings Philips hue White LED Starter Kit: Add intelligent lighting to your home with this starter kit, which contains 2 A19 bulbs, a wireless bridge, a power adapter and an Ethernet cable. LED technology offers vibrant illumination while using only minimal energy. Plus, you can control the light using your smartphone or tablet by connecting to a variety of compatible apps."
		},
		{
			name: "Nest Learning Thermostat, 3rd Generation",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/41vXwSLoGgL._AC_US320_FMwebp_QL65_.jpg',
			brand: "nest",
			price: 69.99,
			description: "Works with Amazon Alexa for voice control (Alexa device sold separately). Auto-Schedule: Nest learns the temperatures you like and programs itself in about a week. Home/Away Assist: Nest automatically turns itself down when nobody’s home to help you save energy. Remote Control: Connect your thermostat to Wi‑Fi to control the temperature from your phone, tablet or laptop. Farsight: When Nest spots you across the room, it lights up to show you the time, temperature or weather."
		},
		{
			name: "Amazon Echo Dot (2nd Generation)",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/41iz5Tw82IL._AC_US320_FMwebp_QL65_.jpg',
			brand: "amazon",
			price: 39.99,
			description: "Echo Dot (2nd Generation) is a hands-free, voice-controlled device that uses Alexa to play music, control smart home devices, provide information, read the news, set alarms, and more"
		},
		{
			name: "August Smart Lock",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/41EJgsvERdL._AC_US320_FMwebp_QL65_.jpg',
			brand: "august",
			price: 139.00,
			description: "This Certified Refurbished product is tested & certified by AUGUST to look and work like-new. The product includes all original accessories, and is backed by a 1-Year warranty. Secure - Safe, keyless access to your home with iOS and Android smartphones| Easy DIY Retrofit Install, - Replace the interior of your existing deadbolt; outside is unchanged"
		},
		{
			name: "Philips Hue Bloom",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/41j4KdlKf9L._AC_US320_FMwebp_QL65_.jpg',
			brand: "philips",
			price: 59.99,
			description: "Philips Friends of hue Bloom is designed to create indirect ambient lighting and is a perfect way to give highlight to your favorite furniture or architectural features in your home. Placed in or out of sight it will blend seamlessly with your interiors. And because it is a plug-based product, you can easily move it around and place it where a power socket is available. Choose from 16 million colors to match your light to the moment. Add accents to your home. Light a space with a splash of color or wash your walls with stunning shades. Place the Philips Friends of hue Bloom just where you need it. Highlight a favorite spot with up to 120 lumen light output."
		},
		{
			name: "GE Link Smart LED Light Bulb, A19 Soft White (2700K), 60-Watt Equivalent",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/31zw0IKIkbL._AC_US320_FMwebp_QL65_.jpg',
			brand: "ge",
			price: 13.00,
			description: "Works with Amazon Alexa for voice control (hub required, Alexa device and hub sold separately) Compatible with Wink App, Amazon Echo, SmartThings Hub or any other Zigbee rated device Provides 800 lumens of light output and 2700K Soft White appearance Lasts 22.8 years with an estimated energy cost of $1.45/year; 60-watt equivalent Wirelessly control via smartphone from anywhere in the world, dimmable via smart app"
		},
		{
			name: "H2oVibe Rain Showerhead Jet with Wireless Bluetooth Speaker",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/51VY1dvBCVL._AC_US320_FMwebp_QL65_.jpg',
			brand: "h2ovibe",
			price: 36.95,
			description: "Enjoy an ultra-wide & powerful drenching rain shower while listening to your favorite music. Feel the soothing sensation with this luxurious spa-like experience. Enhanced noise reduction, Dual microphone, Push to speak button to answer calls. Premium crisp clean sound / Connects wirelessly up to 33 feet away / Easy & Fast installation 3 times more spray power than a standard showerhead"
		},
		{
			name: "Honeywell Smart Thermostat, Wi-Fi, Touchscreen",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/51F9V3LLxYL._AC_US320_FMwebp_QL65_.jpg',
			brand: "honeywell",
			price: 181.99,
			description: "Works with Amazon Alexa for voice control (Alexa device sold separately) Customize the screen color to match any décor, Control from anywhere with iOS and Android devices, Simple setup with smart programmable features for home or business Energy Savings: Choose programmable mode to save on annual heating and cooling costs. C-wire needed for proper installation. Locking Touchscreen: Advanced locking features and password options provide smart security and convenience"
		},
		{
			name: "Samsung SmartThings Hub",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/31RCWPcjDLL._AC_US320_QL65_.jpg',
			brand: "samsung",
			price: 74.99,
			description: "Your smart home needs a brain, so get started with a SmartThings Hub. It connects wirelessly with a wide range of smart devices and makes them work together. Add smart devices and put your home to work. Choose from a wide range of compatible devices, including lights, speakers, locks, thermostats, sensors, and more. Use the SmartThings app or Amazon Alexa to control your smart home. Teach your house new tricks by telling it what to do when you're asleep, awake, away, and back home."
		},
		{
			name: "WeMo Light Switch, Wi-Fi enabled",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/31qXY0J18EL._AC_US320_QL65_.jpg',
			brand: "wemo",
			price: 44.98,
			description: "Works with Amazon Alexa for voice control (Alexa device sold separately). Wemo is home automation the easy way: Wemo Light Switch seamlessly replaces your old wall light switch and works with any one-way connection light. Easily installable, perfect for DIYers. Neutral wire required. Not recommended for use with a metal faceplate. Download the free app, and control your lights and small appliances from anywhere in the world, right from your phone. No hub or subscription required."
		},
		{
			name: "DreamSpa All Chrome Water Temperature Controlled Color Changing 5-Setting LED Shower-Head",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/61I5c3IS6PL._AC_US320_QL65_.jpg',
			brand: "dreamspa",
			price: 34.87,
			description: "DreamSpa® All-Chrome Water Temperature Color-Changing LED Shower Head is the World's Most Advanced LED Shower Head! • LED lights are powered by running water, no batteries ever needed • Extra-large 5.25 Chrome Face with Reflective Perimeter Rim 5 Settings include Power Rain, Pulsating Massage, Hydro-Mist, Economy Rain & Water-Saving Pause • High-power 3-zone Dial with Rub-clean Jets & Click-action Lever • Designer Beveled Rim Accent"
		},
		{
			name: "Kwikset 99130-003 SmartCode 913 UL Electronic Deadbolt",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/41zF4oOIiAL._AC_US320_QL65_.jpg',
			brand: "kwikset",
			price: 95.99,
			description: "Keyless entry touchpad with a motorized deadbolt and sleek interior; includes traditional key functionality for peace of mind 10 digit backlit audible keypad, one-touch locking, 30 second autolock option, and 16 customizable access codes for increased security BHMA Grade 2 certified, UL certified with 20 minute fire rating, and features SmartKey re-key technology with BumpGuard protection Prior to purchase, please verify that this lock fits your door"
		},
		{
			name: "Sensi Smart Thermostat, Wi-Fi, UP500W",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/41wy3npOiSL._AC_US320_QL65_.jpg',
			brand: "sensi",
			price: 129.00,
			description: "No other Wi-Fi thermostat works in more homes (no C-wire required for many HVAC applications). Refer to Sensi's online compatibility resources to verify compatibility in your home Works with Amazon Alexa for voice control (Alexa device sold separately) Connect Sensi thermostat to your home Wi-Fi Network and control from anywhere via free mobile app (compatible with Android and iOS)"
		},
		{
			name: "Kwikset Kevo (1st Gen) Touch-to-Open Bluetooth Smart Lock",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/51M32RP4kIL._AC_US320_QL65_.jpg',
			brand: "kwikset",
			price:  138.25,
			description: "Your Smartphone is now your key - touch to open convenience Easily installs in minutes with just a screwdriver, Free unlimited guest eKeys  Bluetooth Smart ready with a Bluetooth 4.0 enabled device, Smartphone compatibility : Select Apple iPhone 4S or higher and select Android 5.0 (Lollipop) or higher"
		},
		{
			name: "Philips 468058 Hue White A19 Light Bulbs, 3-Pack",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/31YRrmEoG2L._AC_US320_FMwebp_QL65_.jpg',
			brand: "philips",
			price:  39.99,
			description: "Works with Amazon Alexa for voice control (hub required, Alexa device and Philips hub sold separately) This hue white a19 LED light bulb is a great extension to your hue connected light ecosystem. With a brightness of 800 lumens, the E26 medium based bulb can replace any standard bulb in your home With a life of 22.8 years, this hue bulb will provide long lasting, brilliant, dimmable connected light The hue white 60 watt equivalent bulb uses only 9.5 watts of energy, saving 138.87 in energy costs over the life of the bulb"
		},
		{
			name: "Nest Protect Smoke & Carbon Monoxide Alarm",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/61wbdW8EleL._AC_US320_QL65_.jpg',
			brand: "nest",
			price: 99.00,
			description: "Know from anywhere. Connect Nest Protect to Wi-Fi and it will send an alert to your phone if the alarm goes off or the batteries run low. Tells you what and where. It speaks up to tell you if there’s smoke or CO and where the problem is, so you know what to do. App Silence. Nest Protect is the first alarm you can hush from your phone. Simply walk to the Nest Protect that noticed the problem and open the Nest app."
		},
		{
			name: "Nest Cam Indoor security camera",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/31ahww36bqL._AC_US320_QL65_.jpg',
			brand: "nest",
			price: 175.75,
			description: "24/7 live video: 130° wide-angle view and all-glass lens let you look after home in 1080p HD, day and night. Alerts and snapshots: When Nest Cam detects activity, it can send a phone alert or email with a photo of the event. Quick, easy setup: Plug in Nest Cam and download the Nest app to get started. No hub needed. Talk & Listen: Nest Cam has a built-in speaker and microphone, and lets you talk and listen through the app. Speak up to get someone’s attention, or tell the dog to get off the couch. Night vision done right: See the whole room at night — not just a limited spotlight view."
		},
		{
			name: "Ring Wi-Fi Enabled Video Doorbell",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/313Olxw4bmL._AC_US320_QL65_.jpg',
			brand: "ring wi-fi",
			price: 179.99,
			description: "At Ring, our mission is simple: To reduce crime in neighborhoods. And by putting the power of home security in your hands, we’re making that mission a reality. Ring keeps your home secure and your family safe by protecting you against intruders, burglars, package thieves and any other unwanted guests. Ring makes sure you never miss a visitor. Because with Ring, you’re always home. Ring Video Doorbell lets you answer the door from anywhere. Whether you’re halfway across the world, or just too busy to walk to the door, Ring lets you see, hear and speak to visitors from the comfort of your smartphone, tablet or PC."
		},
		{
			name: "JmGO Mstar 6A918 G1 1500LM LED Projector Multi-Media Player & Smart Home Theater System (Silver)",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/41GLBNn+-6L._AC_US320_QL65_.jpg',
			brand: "jmgo",
			price: 549.99,
			description: "Support 1080P HD multifunctional. Native Resolution:1280*800 projector with Smart TV an add built-in Android. The body is made of high strength aluminum-magnesium alloy panel with laser engraved logo. Equipped with four-direction long-stroke speakers and quad-core CPU. Creates cinema surround stereo sound level. Built-in Android System. Support for breathtaking Movie quality 3D playback (Active 3D glasses not supplied).And Wi-Fi, multiple screens, 2.4G remote control. Dust-proof design. Fast switch rate. Multiple interfaces for external speaker, gamepads, laptop, USB flash drive, digital camera, wireless mouse, tripods and so on. Multi-function Home Entertainment system: TV Box + Internet TV + Projector + HD Player + Bluetooth Speaker. Note: The Bluetooth Speaker function is only available when the projector is turned off."
		},
		{
			name: "TP-Link Smart LED Light Bulb, Wi-Fi, Dimmable White, 50W Equivalent",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/31kTfwCk25L._AC_US320_QL65_.jpg',
			brand: "tp-link",
			price: 29.99,
			description: "Control your lighting from anywhere with the LB120. The smart bulb installs as easily as a standard light bulb, and connects to your home Wi-Fi in no time through the free Kasa app. Kasa lets you manage your lights with your smartphone or tablet, including adjusting brightness, setting schedules and scenes, and tracking energy used. The LB120 also lets you tune its white temperature to create lighting suited to your mood, from bright daylight to soft, relaxing whites. For added convenience, you can control the LB120 with your voice when paired with Amazon Alexa."
		},
		{
			name: "Wink Hub 2",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/21zKXrAlY0L._AC_US320_QL65_.jpg',
			brand: "wink",
			price: 99.00,
			description: "Wink is the quick and simple way to connect you and your home. Manage hundreds of smart products from the best brands in one simple app. Faster, more reliable and more secure, Wink Hub 2 is the next generation of the Wink Hub. Hub 2 is compatible with more smart home technologies, so you can buy the devices you like from the brands you trust and know they'll work seamlessly with Wink."
		},
		{
			name: "Ecobee3 Lite Thermostat",
			photo: 'https://images-na.ssl-images-amazon.com/images/I/31ZdMiQE9eL._AC_US320_FMwebp_QL65_.jpg',
			brand: "ecobee",
			price: 169.00,
			description: "Live better and save more with ecobee3 lite. With its beautiful design, easy-to-use touchscreen display and impressive average savings of 23% annually on heating & cooling, the ecobee3 lite will make your home smarter and more comfortable without costing you or our planet. *Learn more at ecobee.com/savings. Works with Amazon Echo, Apple HomeKit, Samsung SmartThings, and IFTTT. We want you to love our products as much as we do, so your ecobee comes backed by a 3-year warranty."
		}];
});