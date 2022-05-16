import { createI18n } from 'vue-i18n'

const messages = {
    es: {
      "menuOfTheDay"  : "Menú del día",
      "accompaniments" : "Complementos",
      "price"         : "Precio"
    }
  }

export default createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: messages
})
