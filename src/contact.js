function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')
  
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 999 999 99'
  
    const address = document.createElement('p')
    address.textContent = '🏠 Mahalle Mahallesi, Sokak Sokağı, Çanakkale, Türkiye'
  
    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = 'images/location.png'
    restaurantLocation.alt = 'Tostçunun Yeri'
  
    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)
  
    return contact
  }
  
  function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
  }
  
  export default loadContact