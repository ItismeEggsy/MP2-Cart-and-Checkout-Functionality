export function getProduct(productId) {
    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });

    return matchingProduct;
}


export const products = [{
    image: 'media/mags1.jpg',
    name: 'Stealth Grip',
    id: 'lkl4gj54fghb1b2fd1b6df1b3g2h4f6gj1g321fbd1bf3d1',
    subname: 'AMP Terrain Pro A/T P: Your Partner on the Path Less Traveled',
    desc: 'Discover the perfect fusion of aesthetics and functionality with our Stealth Grip mags tires. Engineered to elevate your driving experience, these tires redefine performance on the road while maintaining an elegant and understated design.',
    size: '17x8.5',
    holes: '4',
    pcd: '139x7',
    offset: '-10',
    tags: 'Tags: Toyota Hilux | Ford Ranger | Toyota Fortuner | Mitsubishi Montero | Chevrolet Colorado | Chevrolet Trailblazer | Mitsubishi Strada | Nissan Patrol | Isuzu MUX',
    keyfeature1: 'Turbo Tread tires are designed for those who demand quick acceleration. Experience the exhilaration of a faster start and seamless speed transitions as these tires propel you forward with unmatched agility.',
    keyfeature2: 'Exceptional Traction:</b> Whether navigating city streets or tackling challenging terrains, these tires provide unparalleled traction. The advanced grip technology ensures a secure connection between your vehicle and the road, enhancing stability and control.',
    bottomdesc: 'Upgrade your ride with Stealth Grip mags tires and embrace a new level of driving excellence. Elevate your style, enhance your performance, and enjoy the journey in silence with these exceptional tires.',
    priceCents: 750000
}, {
    image: 'media/mags2.jpg',
    name: 'Turbo Tread',
    id: 'fg65m65g4j65gjf6gh4fg6h5g6h5g4h65h4fd6g4sf61b2',
    subname: 'Turbo Tread Mags Tires: Unleash the Power of Precision and Acceleration',
    desc: 'Embark on a journey where every turn is an opportunity to experience the thrill of speed and the precision of control with Turbo Tread mags tires. Engineered for enthusiasts who crave high-performance and style, these tires are a perfect blend of cutting-edge technology and dynamic design.',
    size: '17x8.5',
    holes: '4',
    pcd: '114.3',
    offset: '-11',
    tags: 'Tags: Toyota Hilux | Ford Ranger | Toyota Fortuner | Mitsubishi Montero | Chevrolet Colorado | Chevrolet Trailblazer | Mitsubishi Strada | Nissan Patrol | Isuzu MUX',
    keyfeature1: 'Turbo Tread tires are designed for those who demand quick acceleration. Experience the exhilaration of a faster start and seamless speed transitions as these tires propel you forward with unmatched agility.',
    keyfeature2: 'Conquer the road with confidence, thanks to the aggressive traction provided by Turbo Tread. Whether it is a smooth highway or a winding backroad, these tires grip the surface with tenacity, enhancing stability and performance.',
    bottomdesc: 'Elevate your driving experience to new heights with Turbo Tread mags tires. Unleash the power of precision and acceleration, and let your journey be defined by speed, style, and unmatched performance on the road',
    priceCents: 850000
}, {
    image: 'media/mags3.jpg',
    name: 'Velocity Grip',
    id: 'j35k4ghh16g5d16vfd1v6f216n1h1n5g1f65hb1f651',
    subname: 'Velocity Grip Mags Tires: Redefine Your Drive with Precision and Performance',
    desc: 'Prepare to experience the road like never before with Velocity Grip mags tires. These tires are meticulously crafted to elevate your driving adventure, offering a perfect synergy of cutting-edge technology and sleek design for those who crave both speed and control.',
    size: '17x8.5',
    holes: '4',
    pcd: '115.3',
    offset: '-9',
    tags: 'Tags: Toyota Hilux | Ford Ranger | Toyota Fortuner | Mitsubishi Montero | Chevrolet Colorado | Chevrolet Trailblazer | Mitsubishi Strada | Nissan Patrol | Isuzu MUX',
    keyfeature1: 'Velocity Grip tires redefine precision on the road. Feel the responsiveness as you take command of every turn, ensuring a driving experience that is snot just thrilling but also under your complete control.',
    keyfeature2: 'Built with durability in mind, Velocity Grip tires are constructed from high-quality materials to withstand the challenges of the road. Enjoy the confidence that comes with knowing your tires are as robust as they are stylish.',
    bottomdesc: 'levate your driving experience to new heights with Velocity Grip mags tires. Redefine your drive with a perfect balance of precision, performance, and style. Unleash the full potential of your vehicle on the open road, guided by the exceptional capabilities of Velocity Grip.',
    priceCents: 950000
}];