// Bike viewer with color swatches that swap the image

document.addEventListener('DOMContentLoaded', () => {
  const bikes = [
    {
      name: 'Hero Splendor Plus',
      engine: '97cc',
      mileage: '80 kmpl',
      price: '₹75,441',
      image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/hero-select-model-black-and-accent-1706531462570.png?q=80',
      description: 'A mileage king with timeless reliability and simple maintenance.',
      colors: [
        { code: '#000000', label: 'Black', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/hero-select-model-black-and-accent-1706531462570.png?q=80' },
        { code: '#ff0000', label: 'Red', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/hero-select-model-sports-red-black-1706531435748.png?q=80' },
        { code: '#0055ff', label: 'Blue', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/hero-select-model-blue-black-1706531445236.png?q=80' }
      ]
    },
    {
      name: 'Hero Xpulse 200',
      engine: '199cc',
      mileage: '40 kmpl',
      price: '₹1,45,000',
      image: 'https://www.heromotocorp.com/content/dam/hero-aem-website/global-migration-sites/english/products/xpulse-200-fi/xpulse_200_header.png',
      description: 'An off-roading dual-sport motorcycle designed for adventure seekers.',
      colors: [
        { code: '#ffffff', label: 'White', image: 'https://www.heromotocorp.com/content/dam/hero-aem-website/global-migration-sites/english/products/xpulse-200-fi/xpulse_200_header.png' },
        { code: 'red', label: 'Green', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/hero-select-model-sports-red-1707139187405.png?q=80' },
        { code: 'blue', label: 'Orange', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/hero-select-model-techno-blue-met-black-1707139182541.png?q=80' }
      ]
    },
    {
      name: 'Hero Xtreme 160R',
      engine: '163.2 cc',
      mileage: '49.65 kmpl',
      price: '₹1,11,000',
      image: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/motorcycles/xtreme_160r.png',
      description: 'The Xtreme 160R is one extremely comfortable and fun to ride motorcycle..',
      colors: [
        { code: '#000000', label: 'Black', image: 'https://images.tractorjunction.com/BLACK_AND_ACCENT_46a7f3e340.png?format=webp&quality=40' },
        { code: '#ff0000', label: 'Red', image: '' },
        { code: '#0055ff', label: 'Blue', image: '' }
      ]
    },
    {
      name: 'Hero Super Splendor Xtec',
      engine: '124.7 cc',
      mileage: '69 kmpl',
      price: '₹84,975',
      image: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/143529/super-splendor-xtec-right-side-view-3.png?isig=0&q=80',
      description: ' Hero Super Splendor Xtec price for its variant - Super Splendor Xtec Drum Brake starts at Rs. 84,975. The price for the other variants - Super Splendor Xtec Drum Brake - OBD 2B.',
      colors: [
         { code: '#ff0000', label: 'Red', image: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/143529/super-splendor-xtec-right-side-view-3.png?isig=0&q=80' },
        { code: '#000000', label: 'Black', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/hero-select-model-black-1707134045168.png?q=80' },
       
        { code: 'gray', label: 'Blue', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/hero-select-model-matt-grey-1707134050001.png?q=80' }
      ]
    },
    {
      name: 'Hero Splendor Plus',
      engine: '97cc',
      mileage: '80 kmpl',
      price: '₹75,441',
      image: 'https://images.jdmagicbox.com/quickquotes/images_main/hero-splendor-plus-xtec-bs6-petrol-tornado-grey-271805940-yzrff.png',
      description: 'A mileage king with timeless reliability and simple maintenance.',
     colors: [
        { code: '#000000', label: 'Black', image: 'https://images.tractorjunction.com/BLACK_AND_ACCENT_46a7f3e340.png?format=webp&quality=40' },
        { code: '#ff0000', label: 'Red', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/hero-select-model-sports-red-black-1706531435748.png?q=80' },
        { code: '#0055ff', label: 'Blue', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/hero-select-model-blue-black-1706531445236.png?q=80' }
      ]
    },
    {
      name: 'Hero Xpulse 200',
      engine: '199cc',
      mileage: '40 kmpl',
      price: '₹1,45,000',
      image: 'https://www.heromotocorp.com/content/dam/hero-aem-website/global-migration-sites/english/products/xpulse-200-fi/xpulse_200_header.png',
      description: 'An off-roading dual-sport motorcycle designed for adventure seekers.',
      colors: [
        { code: '#000000', label: 'Black', image: 'https://images.tractorjunction.com/BLACK_AND_ACCENT_46a7f3e340.png?format=webp&quality=40' },
        { code: '#ff0000', label: 'Red', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/hero-select-model-sports-red-black-1706531435748.png?q=80' },
        { code: '#0055ff', label: 'Blue', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/hero-select-model-blue-black-1706531445236.png?q=80' }
      ]
    },
    {
      name: 'Hero Xtreme 160R',
      engine: '163.2 cc',
      mileage: '49.65 kmpl',
      price: '₹1,11,000',
      image: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/hero-homepage/bike/motorcycles/xtreme_160r.png',
      description: 'The Xtreme 160R is one extremely comfortable and fun to ride motorcycle..',
      
    },
    {
      name: 'Hero Super Splendor Xtec',
      engine: '124.7 cc',
      mileage: '69 kmpl',
      price: '₹84,975',
      image: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/143529/super-splendor-xtec-right-side-view-3.png?isig=0&q=80',
      description: ' Hero Super Splendor Xtec price for its variant - Super Splendor Xtec Drum Brake starts at Rs. 84,975. The price for the other variants - Super Splendor Xtec Drum Brake - OBD 2B.'
    }
  ];


  const list = document.getElementById('bike-name-list');
  const panel = document.getElementById('bike-spec-panel');

  bikes.forEach(bike => {
    const item = document.createElement('div');
    item.className = 'bike-item';
    item.innerHTML = `
      <img src="${bike.image}" alt="${bike.name}">
      <h4>${bike.name}</h4>
    `;

    item.addEventListener('click', () => {
      panel.innerHTML = `
        <img id="bike-preview" src="${bike.image}" alt="${bike.name}">
        <h3>${bike.name}</h3>
        <p><strong>Engine:</strong> ${bike.engine}</p>
        <p><strong>Mileage:</strong> ${bike.mileage}</p>
        <p><strong>Price:</strong> ${bike.price}</p>
        <p>${bike.description}</p>
        <div class="color-options">
          <p><strong>Available Colors:</strong></p>
          <div class="color-swatches">
            ${bike.colors.map(color => `
              <span class="swatch" 
                    title="${color.label}" 
                    data-img="${color.image}" 
                    style="background: ${color.code};"></span>
            `).join('')}
          </div>
        </div>
      `;

      const swatches = panel.querySelectorAll('.swatch');
      const preview = panel.querySelector('#bike-preview');

      swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
          preview.src = swatch.dataset.img;
        });
      });
    });

    list.appendChild(item);
  });
});
