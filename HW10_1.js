function findValueByKey(companyName) {
    const company = {
      name: 'Велика Компанія',
      type: 'Головна компанія',
      platform: 'Платформа для продажу квитків',
      sellsSolution: 'Рішення для продажу квитків',
      clients: [
        {
          name: 'Клієнт 1',
          type: 'subCompany',
          uses: 'ПО для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
            {
              name: 'Клієнт 1.1',
              type: 'subSubCompany',
              uses: 'ПО для продажу квитків',
              sells: 'Рішення для продажу квитків',
            },
            {
              name: 'Клієнт 1.2',
              type: 'subSubCompany',
              uses: 'ПО для продажу квитків',
              sells: 'Рішення для продажу квитків',
            },
          ],
        },
        {
          name: 'Клієнт 2',
          type: 'subCompany',
          uses: 'ПО для продажу квитків',
          sells: 'Рішення для продажу квитків',
        },
      ],
    };
  
    const subCompanies = company.clients.filter((client) => {
      return client.name === companyName && client.type === 'subCompany';
    });
  
    if (subCompanies.length === 0) {
      return undefined;
    } else {
      return subCompanies[0];
    }
  }
  
  const subCompany = findValueByKey('Клієнт 1');
  console.log(subCompany);