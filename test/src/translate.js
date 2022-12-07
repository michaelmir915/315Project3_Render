const dotenv = require('dotenv').config();
const { Translate } = require('@google-cloud/translate').v2;

let CREDENTIALS = { "type": "service_account", "project_id": "united-park-370604", "private_key_id": "a369d8fd30028f54b810a4e7f74640450f737911", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCrwTX/42nM8yQH\nQPBCojsCUigZn4C6/wuXCLQVLyz+tuSopAW/8QvWe603ag2wDP3bOrqEaQgPoMCZ\nYWb0Zp2lrvKfC5Ky5EPL3wseEq1Fhw6DVcLuzK2/3WoJn+jf5EQp/wWVsjwwn3rz\nvPjnySugeF1aSifW/wJI90RS1kJznUd8E2ed7CKTq63wwTkpOndY0ED5d2E1IF1Q\nkIpmFsQmA6mJvMIJbIwdKuR3DhTz3Ezb1dNLqR0AJ46+ttqN5CyoBNQkldAqpjqk\nW2MnpJ5RfVoo7LbShxlk+wLcjdunUqVrk907hGyzlXIPtN/XixXJDjaqlSSebOCC\nL7mIO9NjAgMBAAECgf86WTNwb1nZtC8oYWHJabBfUehQVNQWgy1k/42khnb5UpFq\ndUnpNBsMm3NcwqEGpq9h3bUOv7iQnQM52OQOOHnQEEhZn59uNzW6EeiWPAi77MFr\nageBpv/RsGq7A5xiVCwtBsdOaJRonqUw/mVkv62sOBBiVPSRfMVHqbDD5GLWVU/j\nKFZcF+VFwFgI6F7+BJSDCBVIBdVOUotJuWmsIFIi7xrYcfa/pdR4B+EScf+lxSc3\nLDno5USM1yOltcmJu3yLvLFBB5pbYb8RSTe45nW1VymG9Lg1Efe6697qAOQCZ666\nNuZDkX8/vT3AdTkIc+2L9q52ShIk0k4/+Za0itECgYEA0uAGVYlJ1dmt5957YA43\nlRlNbqwmNFdw5I2oH8FDemhTkVtPB9VJAOiQngtXuLW2/lGbZYjcWDiHX2Ooylde\nZew5MCStDf9qaRPTuEc0ynFK8Hu/c0iw9vZd3QmcTDwcVVdb2N/hPkqf7CzqKQTO\nQhOspljudlfjqUaJOc5VSjECgYEA0IIg4zkMBc5f7KaRL5obO2asHvv+f1txCxjq\ngAh24vdpyzCqbQAdAjPxE8mULhX2+cybT3nP/y185p2Ed8M/zW/i+9IoZbz5X8Og\nDHmiik4DVo2YNwEMCyegAVhWofyMlpEXLhXHHM/DTOHY1jtoda9GdpVzCjPfZG6E\nGYbiPdMCgYEA0r8TdX7MbM2s8LM3yArNX9Q2v6mKUPsmlzQ/VuUWJAqJohaICEMP\nP7otddXOKIpqxQYX8MRzujNcj2eRNA9XBzOq/8NXtEqUNUmcaWm4h63sACUcdAGs\n4lPcAODu9H2Kr3usDjXI7TE1XJqStsXXwM/a1zC/uUQjAXS+BiiAsrECgYB46t4T\np6OXQmVSog4UYvRj8Fjk5xJh3S+jVeG4OjBn0z9g/Gn5KFWqT2EBLqdmSoqdttBi\nuKusuj5ypuqJYYuAoeAqVWfkCEE+Df6k/W0Lc85vxVF+pHbNiT87SHWFHyaQsreU\nnECKLtp9nYPYST988BaW8nhydD6ayZSGETjmzQKBgQCeWwfA5AQKtpeoMRRlnLdF\nOqvKca6KjLNEzzcsOM2oDpYmAPHTLjmFhQOTCLNIU4nD/i/P/cXn2CpZPFe/rbww\n7ZPkaXLD3Qn1Cd6fKkCCx9OMoCSwycjceXIklcY4vOJ6gkwjOHg6D181Uw8c3GoJ\n4Xz1exClw9mi9Ys43Gc9Sg==\n-----END PRIVATE KEY-----\n", "client_email": "translate@united-park-370604.iam.gserviceaccount.com", "client_id": "109858458412295063207", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/translate%40united-park-370604.iam.gserviceaccount.com" };

//console.log(CREDENTIALS);
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id,
})

export default async function translateText(text, targetLanguage) {
    try {
        console.log(`text ${text} target lang ${targetLanguage}`);
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log("Error in Translate: ", + error);
        return 0;
    }
}

const languageCodes = { 'English': 'en', 'Spanish': 'es', 'Italian': 'it', 'Chinese': 'zh-CN', 'German': 'de' };

//translateText("Hello", "es").then(res => console.log(res));

//export default {languageCodes, translateText}
//module.exports.languageCodes = languageCodes;
//module.exports = {translateText, languageCodes}