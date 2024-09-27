
const citiesByState = {
    SC: ['Florianópolis', 'Joinville', 'Blumenau'],
    SP: ['São Paulo', 'Campinas', 'Santos'],
    RJ: ['Rio de Janeiro', 'Niterói', 'Petrópolis']
  };
  
  const neighborhoodsByCity = {
    Florianópolis: ['Centro', 'Trindade', 'Campeche'],
    Joinville: [
      'Adhemar Garcia', 'America', 'Anita Garibaldi', 'Atiradores', 'Aventureiro',
      'Boa Vista', 'Bom Retiro', 'Bucarein', 'Comasa', 'Costa e Silva', 
      'Distrito Industrial', 'Espinheiros', 'Fátima', 'Floresta', 'Glória', 
      'Guanabara', 'Itaum', 'Itinga', 'Irmãos Feuser', 'Jarivatuba', 'Jardim Iririú', 
      'Jardim Paraíso', 'Jardim Sofia', 'João Costa', 'Morro do Meio', 
      'Nova Brasília', 'Paranaguamirim', 'Petrópolis', 'Pirabeiraba', 
      'Profipo', 'Saguaçu', 'Santa Catarina', 'Santa Mônica', 'Santo Antônio', 
      'São Marcos', 'Vila Cubatão', 'Vila Nova', 'Zona Industrial Norte'
    ],
    Blumenau: ['Vila Nova', 'Velha', 'Itoupava'],
    'São Paulo': ['Pinheiros', 'Vila Madalena', 'Morumbi'],
    Campinas: ['Cambuí', 'Taquaral', 'Barão Geraldo'],
    Santos: ['Aparecida', 'Embaré', 'Gonzaga'],
    'Rio de Janeiro': ['Copacabana', 'Ipanema', 'Leblon'],
    Niterói: ['Icaraí', 'Santa Rosa', 'Ingá'],
    Petrópolis: ['Centro', 'Quitandinha', 'Bingen']
  };
  
  function updateCities() {
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');
    const neighborhoodSelect = document.getElementById('neighborhood');
    const selectedState = stateSelect.value;
  
    citySelect.innerHTML = '<option selected disabled>Selecione a Cidade</option>';
    neighborhoodSelect.innerHTML = '<option selected disabled>Selecione o Bairro</option>';
    neighborhoodSelect.disabled = true;
  
    if (selectedState in citiesByState) {
      citiesByState[selectedState].forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
      citySelect.disabled = false;
    } else {
      citySelect.disabled = true;
    }
  }
  
  document.getElementById('city').addEventListener('change', function () {
    const citySelect = document.getElementById('city');
    const neighborhoodSelect = document.getElementById('neighborhood');
    const selectedCity = citySelect.value;

    neighborhoodSelect.innerHTML = '<option selected disabled>Selecione o Bairro</option>';
  
    if (selectedCity in neighborhoodsByCity) {
      neighborhoodsByCity[selectedCity].forEach(neighborhood => {
        const option = document.createElement('option');
        option.value = neighborhood;
        option.textContent = neighborhood;
        neighborhoodSelect.appendChild(option);
      });
      neighborhoodSelect.disabled = false;
    } else {
      neighborhoodSelect.disabled = true;
    }
  });
  