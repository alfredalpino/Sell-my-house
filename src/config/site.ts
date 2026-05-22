export const site = {
  title: 'Property Gallery',
  tagline: 'Private listing for qualified buyers & brokers',
  address: '26°56′38″N 80°57′58″E · Lucknow area',
  price: '₹37 Lakhs',
  priceNote: 'Negotiable',
  highlights: [
    { label: 'Living area', value: '522 sq ft' },
    { label: 'Bedrooms', value: '1 (+ grand hall as 2nd)' },
    { label: 'Bathrooms', value: '3 full + powder' },
    { label: 'Levels', value: '2 floors + terrace' },
  ],
  description:
    'Compact two-storey home with terrace. One dedicated bedroom on the ground floor; the first-floor grand hall can serve as a second bedroom. Three bathrooms in total, each with an adjoining powder room.',
  layout: [
    {
      level: 'Ground floor',
      rooms: [
        '1 bedroom',
        'Drawing cum dining room',
        'Bathroom + powder room (combined)',
      ],
    },
    {
      level: 'First floor',
      rooms: [
        'Grand hall — suitable as a second bedroom',
        'Bathroom + powder room (combined)',
      ],
    },
    {
      level: 'Terrace',
      rooms: ['Bathroom + powder room (combined)'],
    },
  ],
  contact: {
    name: 'Ubaid',
    role: 'Listing contact',
    email: 'ubaid.in.2003@gmail.com',
    phones: ['+91-9889301201', '+91-9540660871', '+91-9580601297'],
  },
  location: {
    label: 'Property location',
    mapsUrl: 'https://www.google.com/maps?q=26.9439705,80.9660866&z=17&hl=en',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=26.9439705,80.9660866&travelmode=driving',
    embedSrc:
      'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3556.723762084204!2d80.96351167544057!3d26.9439704766285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU2JzM4LjMiTiA4MMKwNTcnNTcuOSJF!5e0!3m2!1sen!2sin!4v1779446954054!5m2!1sen!2sin',
  },
} as const;

function phoneTel(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

export function contactPhoneHref(phone: string): string {
  return phoneTel(phone);
}
