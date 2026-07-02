document.addEventListener('DOMContentLoaded', () => {
  const meatData = {
    br: {
      name: " 🇧🇷 Brazil",
      cuts: {
        'Picanha': { cl: 'Punta de Ganso', ar: 'Tapa de Cuadril', us: 'Sirloin Cap / Rump Cap' },
        'Lagarto': { cl: 'Posta Negra', ar: 'Peceto', us: 'Eye of Round' },
        'Músculo': { cl: 'Osobuco', ar: 'Osobuco', us: 'Shin' },
        'Maminha': { cl: 'Punta de Picana', ar: 'Colita de Cuadril', us: 'Bottom Sirloin / Tri-tip' },
        'Fraldinha': { cl: 'Entraña', ar: 'Vacío', us: 'Flank Steak' },
        'Contrafilé': { cl: 'Lomo Vetado', ar: 'Bife de Chorizo', us: 'Ribeye / Striploin' },
        'Alcatra': { cl: 'Asado de Tira', ar: 'Asado de Tira', us: 'Top Sirloin' },
        'Filé Mignon': { cl: 'Filete', ar: 'Lomo', us: 'Tenderloin' },
      }
    },
    cl: {
      name: " 🇨🇱 Chile",
      cuts: {
        'Punta de Ganso': { br: 'Picanha', ar: 'Tapa de Cuadril', us: 'Sirloin Cap / Rump Cap' },
        'Posta Negra': { br: 'Lagarto', ar: 'Peceto', us: 'Eye of Round' },
        'Osobuco': { br: 'Músculo', ar: 'Osobuco', us: 'Shin' },
        'Punta de Picana': { br: 'Maminha', ar: 'Colita de Cuadril', us: 'Bottom Sirloin / Tri-tip' },
        'Entraña': { br: 'Fraldinha', ar: 'Vacío', us: 'Flank Steak' },
        'Lomo Vetado': { br: 'Contrafilé', ar: 'Bife de Chorizo', us: 'Ribeye / Striploin' },
        'Asado de Tira': { br: 'Alcatra', ar: 'Asado de Tira', us: 'Top Sirloin' },
        'Filete': { br: 'Filé Mignon', ar: 'Lomo', us: 'Tenderloin' },
      }
    },
    ar: {
      name: " 🇦🇷 Argentina",
      cuts: {
        'Tapa de Cuadril': { br: 'Picanha', cl: 'Punta de Ganso', us: 'Sirloin Cap / Rump Cap' },
        'Peceto': { br: 'Lagarto', cl: 'Posta Negra', us: 'Eye of Round' },
        'Osobuco': { br: 'Músculo', cl: 'Osobuco', us: 'Shin' },
        'Colita de Cuadril': { br: 'Maminha', cl: 'Punta de Picana', us: 'Bottom Sirloin / Tri-tip' },
        'Vacío': { br: 'Fraldinha', cl: 'Entraña', us: 'Flank Steak' },
        'Bife de Chorizo': { br: 'Contrafilé', cl: 'Lomo Vetado', us: 'Ribeye / Striploin' },
        'Asado de Tira': { br: 'Alcatra', cl: 'Asado de Tira', us: 'Top Sirloin' },
        'Lomo': { br: 'Filé Mignon', cl: 'Filete', us: 'Tenderloin' },
      }
    },
    us: {
      name: "🇺🇸 USA",
      cuts: {
        'Sirloin Cap / Rump Cap': { br: 'Picanha', cl: 'Punta de Ganso', ar: 'Tapa de Cuadril' },
        'Eye of Round': { br: 'Lagarto', cl: 'Posta Negra', ar: 'Peceto' },
        'Shin': { br: 'Músculo', cl: 'Osobuco', ar: 'Osobuco' },
        'Bottom Sirloin / Tri-tip': { br: 'Maminha', cl: 'Punta de Picana', ar: 'Colita de Cuadril' },
        'Flank Steak': { br: 'Fraldinha', cl: 'Entraña', ar: 'Vacío' },
        'Ribeye / Striploin': { br: 'Contrafilé', cl: 'Lomo Vetado', ar: 'Bife de Chorizo' },
        'Top Sirloin': { br: 'Alcatra', cl: 'Asado de Tira', ar: 'Asado de Tira' },
        'Tenderloin': { br: 'Filé Mignon', cl: 'Filete', ar: 'Lomo' },
      }
    }
  };

  const baseCountrySelect = document.getElementById('base-country');
  const meatCutSelect = document.getElementById('meat-cut');
  const resultsDiv = document.getElementById('results');

  function populateMeatCuts() {
    const selectedCountry = baseCountrySelect.value;
    meatCutSelect.innerHTML = '';
    const cuts = meatData[selectedCountry].cuts;
    for (const cut in cuts) {
      const option = document.createElement('option');
      option.value = cut;
      option.textContent = cut;
      meatCutSelect.appendChild(option);
    }
    displayResults();
  }

  function displayResults() {
    const selectedCountry = baseCountrySelect.value;
    const selectedCut = meatCutSelect.value;
    resultsDiv.innerHTML = '';

    if (!selectedCut) return;

    const equivalents = meatData[selectedCountry].cuts[selectedCut];

    for (const countryCode in equivalents) {
      const countryName = meatData[countryCode].name;
      const equivalentCut = equivalents[countryCode];

      const resultItem = document.createElement('div');
      resultItem.classList.add('result-item');
      resultItem.innerHTML = `
<h3>${countryName}</h3>
<p>${equivalentCut}</p>
`;
      resultsDiv.appendChild(resultItem);
    }
  }

  baseCountrySelect.addEventListener('change', populateMeatCuts);
  meatCutSelect.addEventListener('change', displayResults);

  // Initial population
  populateMeatCuts();
});
