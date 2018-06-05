const apiKey = '7iZCOLRL91lHcy5hww-jqMWP9NI2mqDE1jkdCZPXGMYZe39TLUXFSYfwD5u4xE9m3rAMsc_5om8ua5wYjbF53Ub0GALY-RqVK4Rg0yhl_VBE0w-8rZROEZlh1cvMWnYx';
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {return response.json();}).then(jsonResponse => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business =>({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.reviewCount
        }));
      }
    });
  }
};

export default Yelp;
