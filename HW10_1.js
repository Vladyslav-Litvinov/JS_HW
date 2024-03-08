const company = {
  name: "Велика Компанія",
  type: "Головна компанія",
  platform: "Платформа для продажу квитків",
  sellsSolution: "Рішення для продажу квитків",
  clients: [
    {
      name: "Клієнт 1",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 1.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
        {
          name: "Клієнт 1.2",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Клієнт 1.2.3",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
          ],
        },
      ],
    },
    {
      name: "Клієнт 2",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
    },
  ],
};
function findValueByKey(companyName, company) {
  if (company.name === companyName) {
      return company;
  }
  
  if (company.clients) {
      for (let i = 0; i < company.clients.length; i++) {
          const foundClient = findValueByKey(companyName, company.clients[i]);
          if (foundClient) {
              return foundClient;
          }
      }
  }

  if (company.partners) {
      for (let i = 0; i < company.partners.length; i++) {
          const foundPartner = findValueByKey(companyName, company.partners[i]);
          if (foundPartner) {
              return foundPartner;
          }
      }
  }

  return null;
}

const subCompany = findValueByKey('Клієнт 1.2.3', company);
if (subCompany) {
  console.log('Знайдено компанію:');
  console.log(subCompany);
} else {
  console.log(`Компанію з ім'ям 'Клієнт 1.2' не знайдено.`);
}