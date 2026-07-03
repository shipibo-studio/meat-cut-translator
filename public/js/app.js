document.addEventListener('DOMContentLoaded', () => {
  const meatData = {
    br: {
      name: " 🇧🇷 Brasil",
      cuts: {
        'Picanha': { cl: 'Punta de Ganso', ar: 'Tapa de Cuadril', us: 'Sirloin Cap / Rump Cap', es: 'Rabillo de Cadera' },
        'Filé Mignon': { cl: 'Filete', ar: 'Lomo', us: 'Tenderloin', es: 'Solomillo' },
        'Contrafilé': { cl: 'Lomo Vetado', ar: 'Bife de Chorizo', us: 'Strip Loin / NY Strip', es: 'Lomo Bajo' },
        'Fraldinha': { cl: 'Entraña', ar: 'Vacío', us: 'Flank Steak', es: 'Falda' },
        'Maminha': { cl: 'Punta de Picana', ar: 'Colita de Cuadril', us: 'Bottom Sirloin / Tri-tip', es: 'Contrafaldilla' },
        'Alcatra': { cl: 'Lomo Liso', ar: 'Cuadril', us: 'Top Sirloin', es: 'Cadera' },
        'Coxão Mole': { cl: 'Posta Rosada', ar: 'Bola de Lomo', us: 'Bottom Round', es: 'Contra' },
        'Coxão Duro': { cl: 'Posta Negra', ar: 'Cuadrada', us: 'Top Round', es: 'Tapa' },
        'Lagarto': { cl: 'Choclillo', ar: 'Peceto', us: 'Eye of Round', es: 'Redondo' },
        'Patinho': { cl: 'Posta Rosada', ar: 'Cuadrada', us: 'Knuckle / Sirloin Tip', es: 'Babilla' },
        'Músculo': { cl: 'Osobuco', ar: 'Osobuco', us: 'Shin / Shank', es: 'Morcillo' },
        'Acém': { cl: 'Tapapecho', ar: 'Aguja', us: 'Chuck', es: 'Aguja' },
        'Paleta': { cl: 'Paleta', ar: 'Paleta', us: 'Shoulder Clod', es: 'Espaldilla' },
        'Costela': { cl: 'Costillar', ar: 'Costilla / Asado', us: 'Short Ribs', es: 'Costillas' },
        'Cupim': { cl: 'Sobrecostilla', ar: 'Cupim', us: 'Hump (Zebu)', es: 'Sin equivalente (res cebú)' },
        'Peito': { cl: 'Pecho', ar: 'Pecho', us: 'Brisket', es: 'Pecho' },
        'Aba de Filé': { cl: 'Entraña Fina', ar: 'Entraña Fina', us: 'Skirt Steak', es: 'Entraña' },
        'Ancho': { cl: 'Lomo Vetado', ar: 'Bife Ancho', us: 'Ribeye', es: 'Lomo Alto' },
        'Bisteca': { cl: 'Chuleta', ar: 'T-Bone', us: 'T-Bone Steak', es: 'Chuletón' },
        'Baby Beef': { cl: 'Filete Tornedó', ar: 'Ojo de Bife', us: 'Baby Beef / Veal', es: 'Solomillo (corte pequeño)' },
      }
    },
    cl: {
      name: " 🇨🇱 Chile",
      cuts: {
        'Punta de Ganso': { br: 'Picanha', ar: 'Tapa de Cuadril', us: 'Sirloin Cap / Rump Cap', es: 'Rabillo de Cadera' },
        'Filete': { br: 'Filé Mignon', ar: 'Lomo', us: 'Tenderloin', es: 'Solomillo' },
        'Lomo Vetado': { br: 'Contrafilé / Ancho', ar: 'Bife de Chorizo / Bife Ancho', us: 'Ribeye / Strip Loin', es: 'Lomo Alto / Lomo Bajo' },
        'Lomo Liso': { br: 'Alcatra', ar: 'Cuadril', us: 'Top Sirloin', es: 'Cadera' },
        'Entraña': { br: 'Fraldinha', ar: 'Vacío', us: 'Flank Steak', es: 'Falda' },
        'Entraña Fina': { br: 'Aba de Filé', ar: 'Entraña Fina', us: 'Skirt Steak', es: 'Entraña' },
        'Punta de Picana': { br: 'Maminha', ar: 'Colita de Cuadril', us: 'Bottom Sirloin / Tri-tip', es: 'Contrafaldilla' },
        'Posta Rosada': { br: 'Coxão Mole', ar: 'Bola de Lomo', us: 'Bottom Round', es: 'Contra / Babilla' },
        'Posta Negra': { br: 'Coxão Duro', ar: 'Cuadrada', us: 'Top Round', es: 'Tapa' },
        'Choclillo': { br: 'Lagarto', ar: 'Peceto', us: 'Eye of Round', es: 'Redondo' },
        'Posta Paleta': { br: 'Paleta', ar: 'Paleta', us: 'Shoulder Clod', es: 'Espaldilla' },
        'Asado de Tira': { br: 'Costela', ar: 'Asado de Tira', us: 'Short Ribs', es: 'Costillas en Tiras' },
        'Osobuco': { br: 'Músculo', ar: 'Osobuco', us: 'Shin / Shank', es: 'Morcillo' },
        'Tapapecho': { br: 'Acém', ar: 'Aguja', us: 'Chuck', es: 'Aguja' },
        'Costillar': { br: 'Costela', ar: 'Costilla', us: 'Ribs', es: 'Costillas' },
        'Pecho': { br: 'Peito', ar: 'Pecho', us: 'Brisket', es: 'Pecho' },
        'Plateada': { br: 'Peito', ar: 'Falda', us: 'Plate', es: 'Pecho Bajo / Falda' },
        'Chuleta': { br: 'Bisteca', ar: 'T-Bone', us: 'T-Bone Steak', es: 'Chuletón' },
        'Huachalomo': { br: 'Acém', ar: 'Chingolo', us: 'Chuck Eye Roll', es: 'Aguja Interior' },
        'Sobrecostilla': { br: 'Cupim', ar: 'Tapa de Asado', us: 'Rib Cap', es: 'Tapa de Costilla' },
        'Malaya': { br: 'Fraldinha', ar: 'Matambre', us: 'Rose Meat', es: 'Falda Exterior' },
        'Abastero': { br: '-', ar: '-', us: '-', es: '-' },
        'Punta Paleta': { br: '-', ar: '-', us: '-', es: '-' },
        'Carnicero': { br: '-', ar: '-', us: '-', es: '-' },
      }
    },
    ar: {
      name: " 🇦🇷 Argentina",
      cuts: {
        'Tapa de Cuadril': { br: 'Picanha', cl: 'Punta de Ganso', us: 'Sirloin Cap / Rump Cap', es: 'Rabillo de Cadera' },
        'Lomo': { br: 'Filé Mignon', cl: 'Filete', us: 'Tenderloin', es: 'Solomillo' },
        'Bife de Chorizo': { br: 'Contrafilé', cl: 'Lomo Vetado', us: 'Strip Loin / NY Strip', es: 'Lomo Bajo' },
        'Bife Ancho': { br: 'Ancho', cl: 'Lomo Vetado', us: 'Ribeye', es: 'Lomo Alto' },
        'Ojo de Bife': { br: 'Ancho', cl: 'Lomo Vetado', us: 'Ribeye Steak', es: 'Lomo Alto' },
        'Vacío': { br: 'Fraldinha', cl: 'Entraña', us: 'Flank Steak', es: 'Falda' },
        'Entraña': { br: 'Fraldinha', cl: 'Entraña', us: 'Skirt Steak (outside)', es: 'Entraña' },
        'Entraña Fina': { br: 'Aba de Filé', cl: 'Entraña Fina', us: 'Skirt Steak (inside)', es: 'Entraña' },
        'Colita de Cuadril': { br: 'Maminha', cl: 'Punta de Picana', us: 'Bottom Sirloin / Tri-tip', es: 'Contrafaldilla' },
        'Cuadril': { br: 'Alcatra', cl: 'Lomo Liso', us: 'Top Sirloin', es: 'Cadera' },
        'Bola de Lomo': { br: 'Coxão Mole', cl: 'Posta Rosada', us: 'Bottom Round', es: 'Contra' },
        'Cuadrada': { br: 'Coxão Duro / Patinho', cl: 'Posta Negra', us: 'Top Round / Knuckle', es: 'Tapa / Babilla' },
        'Peceto': { br: 'Lagarto', cl: 'Choclillo', us: 'Eye of Round', es: 'Redondo' },
        'Nalga': { br: 'Coxão Mole', cl: 'Posta Rosada', us: 'Bottom Round', es: 'Contra' },
        'Asado de Tira': { br: 'Costela', cl: 'Asado de Tira', us: 'Short Ribs', es: 'Costillas en Tiras' },
        'Costilla': { br: 'Costela', cl: 'Costillar', us: 'Ribs', es: 'Costillas' },
        'Osobuco': { br: 'Músculo', cl: 'Osobuco', us: 'Shin / Shank', es: 'Morcillo' },
        'Aguja': { br: 'Acém', cl: 'Tapapecho', us: 'Chuck', es: 'Aguja' },
        'Paleta': { br: 'Paleta', cl: 'Posta Paleta', us: 'Shoulder Clod', es: 'Espaldilla' },
        'Pecho': { br: 'Peito', cl: 'Pecho', us: 'Brisket', es: 'Pecho' },
        'Falda': { br: 'Peito', cl: 'Plateada', us: 'Plate', es: 'Falda Baja' },
        'Matambre': { br: 'Fraldinha', cl: 'Malaya', us: 'Rose Meat / Flank', es: 'Falda Exterior' },
        'Marucha': { br: 'Acém', cl: 'Tapapecho', us: 'Chuck Tender', es: 'Aguja Fina' },
        'T-Bone': { br: 'Bisteca', cl: 'Chuleta', us: 'T-Bone Steak', es: 'Chuletón' },
        'Tapa de Asado': { br: 'Cupim', cl: 'Sobrecostilla', us: 'Rib Cap / Spinalis', es: 'Tapa de Costilla' },
      }
    },
    us: {
      name: "🇺🇸 USA",
      cuts: {
        'Tenderloin': { br: 'Filé Mignon', cl: 'Filete', ar: 'Lomo', es: 'Solomillo' },
        'Sirloin Cap / Rump Cap': { br: 'Picanha', cl: 'Punta de Ganso', ar: 'Tapa de Cuadril', es: 'Rabillo de Cadera' },
        'Strip Loin / NY Strip': { br: 'Contrafilé', cl: 'Lomo Vetado', ar: 'Bife de Chorizo', es: 'Lomo Bajo' },
        'Ribeye': { br: 'Ancho', cl: 'Lomo Vetado', ar: 'Bife Ancho / Ojo de Bife', es: 'Lomo Alto' },
        'Ribeye Steak': { br: 'Ancho', cl: 'Lomo Vetado', ar: 'Ojo de Bife', es: 'Lomo Alto' },
        'Top Sirloin': { br: 'Alcatra', cl: 'Lomo Liso', ar: 'Cuadril', es: 'Cadera' },
        'Bottom Sirloin / Tri-tip': { br: 'Maminha', cl: 'Punta de Picana', ar: 'Colita de Cuadril', es: 'Contrafaldilla' },
        'Flank Steak': { br: 'Fraldinha', cl: 'Entraña', ar: 'Vacío', es: 'Falda' },
        'Skirt Steak': { br: 'Aba de Filé', cl: 'Entraña Fina', ar: 'Entraña / Entraña Fina', es: 'Entraña' },
        'Bottom Round': { br: 'Coxão Mole', cl: 'Posta Rosada', ar: 'Bola de Lomo / Nalga', es: 'Contra' },
        'Top Round': { br: 'Coxão Duro', cl: 'Posta Negra', ar: 'Cuadrada', es: 'Tapa' },
        'Eye of Round': { br: 'Lagarto', cl: 'Choclillo', ar: 'Peceto', es: 'Redondo' },
        'Knuckle / Sirloin Tip': { br: 'Patinho', cl: 'Posta Rosada', ar: 'Cuadrada', es: 'Babilla' },
        'Short Ribs': { br: 'Costela', cl: 'Asado de Tira', ar: 'Asado de Tira', es: 'Costillas Cortas' },
        'Ribs': { br: 'Costela', cl: 'Costillar', ar: 'Costilla', es: 'Costillas' },
        'Shin / Shank': { br: 'Músculo', cl: 'Osobuco', ar: 'Osobuco', es: 'Morcillo' },
        'Chuck': { br: 'Acém', cl: 'Tapapecho', ar: 'Aguja', es: 'Aguja' },
        'Chuck Eye Roll': { br: 'Acém', cl: 'Huachalomo', ar: 'Chingolo', es: 'Aguja Interior' },
        'Shoulder Clod': { br: 'Paleta', cl: 'Posta Paleta', ar: 'Paleta', es: 'Espaldilla' },
        'Brisket': { br: 'Peito', cl: 'Pecho', ar: 'Pecho', es: 'Pecho' },
        'Plate': { br: 'Peito', cl: 'Plateada', ar: 'Falda', es: 'Pecho Bajo / Falda' },
        'T-Bone Steak': { br: 'Bisteca', cl: 'Chuleta', ar: 'T-Bone', es: 'Chuletón' },
        'Porterhouse': { br: 'Bisteca', cl: 'Chuleta', ar: 'T-Bone', es: 'Chuletón' },
        'Rib Cap / Spinalis': { br: 'Cupim', cl: 'Sobrecostilla', ar: 'Tapa de Asado', es: 'Tapa de Costilla' },
        'Rose Meat': { br: 'Fraldinha', cl: 'Malaya', ar: 'Matambre', es: 'Falda Exterior' },
        'Hump (Zebu)': { br: 'Cupim', cl: 'Sobrecostilla', ar: 'Cupim', es: 'Sin equivalente (res cebú)' },
      }
    },
    es: {
      name: "🇪🇸 España",
      cuts: {
        'Solomillo':         { br: 'Filé Mignon',  cl: 'Filete',         ar: 'Lomo',             us: 'Tenderloin' },
        'Lomo Alto':         { br: 'Ancho',         cl: 'Lomo Vetado',    ar: 'Bife Ancho',        us: 'Ribeye' },
        'Lomo Bajo':         { br: 'Contrafilé',    cl: 'Lomo Vetado',    ar: 'Bife de Chorizo',   us: 'Strip Loin / NY Strip' },
        'Entrecot':          { br: 'Contrafilé',    cl: 'Lomo Vetado',    ar: 'Bife de Chorizo',   us: 'Strip Loin / NY Strip' },
        'Chuletón':          { br: 'Bisteca',       cl: 'Chuleta',        ar: 'T-Bone',            us: 'T-Bone Steak' },
        'Cadera':            { br: 'Alcatra',       cl: 'Lomo Liso',      ar: 'Cuadril',           us: 'Top Sirloin' },
        'Rabillo de Cadera': { br: 'Picanha',       cl: 'Punta de Ganso', ar: 'Tapa de Cuadril',   us: 'Sirloin Cap / Rump Cap' },
        'Contrafaldilla':    { br: 'Maminha',       cl: 'Punta de Picana', ar: 'Colita de Cuadril', us: 'Bottom Sirloin / Tri-tip' },
        'Babilla':           { br: 'Patinho',       cl: 'Posta Rosada',   ar: 'Cuadrada',          us: 'Knuckle / Sirloin Tip' },
        'Tapa':              { br: 'Coxão Duro',    cl: 'Posta Negra',    ar: 'Cuadrada',          us: 'Top Round' },
        'Redondo':           { br: 'Lagarto',       cl: 'Choclillo',      ar: 'Peceto',            us: 'Eye of Round' },
        'Contra':            { br: 'Coxão Mole',    cl: 'Posta Rosada',   ar: 'Nalga',             us: 'Bottom Round' },
        'Falda':             { br: 'Fraldinha',     cl: 'Entraña',        ar: 'Vacío',             us: 'Flank Steak' },
        'Entraña':           { br: 'Aba de Filé',   cl: 'Entraña Fina',   ar: 'Entraña Fina',      us: 'Skirt Steak' },
        'Aguja':             { br: 'Acém',          cl: 'Tapapecho',      ar: 'Aguja',             us: 'Chuck' },
        'Espaldilla':        { br: 'Paleta',        cl: 'Posta Paleta',   ar: 'Paleta',            us: 'Shoulder Clod' },
        'Morcillo':          { br: 'Músculo',       cl: 'Osobuco',        ar: 'Osobuco',           us: 'Shin / Shank' },
        'Costillas':         { br: 'Costela',       cl: 'Costillar',      ar: 'Costilla',          us: 'Ribs' },
        'Pecho':             { br: 'Peito',         cl: 'Pecho',          ar: 'Pecho',             us: 'Brisket' },
        'Tapa de Costilla':  { br: 'Costela',       cl: 'Sobrecostilla',  ar: 'Tapa de Asado',     us: 'Rib Cap / Spinalis' },
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
<h3>${countryName}: </h3>
<p>${equivalentCut}</p>
`;
      resultsDiv.appendChild(resultItem);
    }
  }

  baseCountrySelect.addEventListener('change', populateMeatCuts);
  meatCutSelect.addEventListener('change', displayResults);

  // WhatsApp share functionality
  const whatsappBtn = document.getElementById('share-whatsapp');

  // Country names without emojis
  const countryNamesClean = {
    br: 'Brasil',
    cl: 'Chile',
    ar: 'Argentina',
    us: 'USA',
    es: 'España'
  };

  whatsappBtn.addEventListener('click', () => {
    const selectedCountry = baseCountrySelect.value;
    const selectedCut = meatCutSelect.value;

    if (!selectedCut) {
      alert('Por favor selecciona un corte de carne primero');
      return;
    }

    const equivalents = meatData[selectedCountry].cuts[selectedCut];

    // Build message without emojis
    let message = `*Traductor de Cortes de Carne*\n\n`;
    message += `*País de origen:* ${countryNamesClean[selectedCountry]}\n`;
    message += `*Corte:* ${selectedCut}\n\n`;
    message += `*Equivalencias:*\n`;

    for (const countryCode in equivalents) {
      const countryName = countryNamesClean[countryCode];
      const equivalentCut = equivalents[countryCode];
      message += `• ${countryName}: ${equivalentCut}\n`;
    }

    message += `\nhttps://traductordecortes.vercel.app`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  });

  // Initial population
  populateMeatCuts();
});
