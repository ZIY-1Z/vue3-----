import { createI18n } from "vue-i18n"
import zh from './langs/zh'
import en from './langs/en'

const messages ={
    zh,
    en
}

const i18n = createI18n({
    legacy: true,
    locale:'en',
    messages
})

export default i18n