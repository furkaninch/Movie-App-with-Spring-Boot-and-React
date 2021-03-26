import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    defaultNS: 'translations',
    ns: ['translations'],
    interpolation:{
        escapeValue: false,
        formatSeparator: ','
    },
    resources:{
        en: {
            translations: {
                'Login': 'Login',
                'Username': 'Username',
                'Password': 'Password',
                'Add Director': 'Add Director',
                'Director Name': 'Director Name',
                'Director Surname': 'Director Surname',
                'Explanation': 'Explanation',
                "Director's Movies": "Director's Movies",
                'Add Movie': 'Add Movie',
                'Movie Name': 'Movie Name',
                'IMDB Score': 'IMDB Score',
                'Director(s)': 'Director(s)',
                'Studio': 'Studio',
                'Add Studio': 'Add Studio',
                'Studio Name': 'Studio Name',
                'Number of Movies': 'Number of Movies',
                'Director Saved Successfully!': 'Director Saved Successfully!',
                'Movie Saved Successfully!': 'Movie Saved Successfully!',
                'Studio Saved Successfully!': 'Studio Saved Successfully!',
                'Explore all directors now!': 'Explore all directors now!',
                'Explore all movies now!': 'Explore all movies now!',
                'Explore all studios now!': 'Explore all studios now!',
                'Go To Directors': 'Go To Directors',
                'Go To Studios': 'Go To Studios',
                'Go To Movies': 'Go To Movies',
                'Next': 'Next',
                'Previous': 'Previous',
                'Update Director': 'Update Director',
                'Update Movie': 'Update Movie',
                'Update Studio': 'Update Studio',
                'Directors': 'Directors',
                'Movies': 'Movies',
                'Studios': 'Studios',
                'Log Out': 'Log Out'
            }
        },
        tr: {
            translations: {
                'Login': 'Giris',
                'Username': 'Kullanici Adi',
                'Password': 'Sifre',
                'Add Director': 'Yonetmen Ekle',
                'Director Name': 'Yonetmen Adi',
                'Director Surname': 'Yonetmen Soyadi',
                'Explanation': 'Aciklama',
                "Director's Movies": "Yonetmenin Filmleri",
                'Add Movie': 'Film Ekle',
                'Movie Name': 'Film Adi',
                'IMDB Score': 'IMDB Puani',
                'Director(s)': 'Yonetmen(ler)',
                'Studio': 'Sutudyo',
                'Add Studio': 'Sutudyo Ekle',
                'Studio Name': 'Sutudyo Adi',
                'Number of Movies': 'Film Sayisi',
                'Director Saved Successfully!': 'Yonetmen Basariyla Eklendi!',
                'Movie Saved Successfully!': 'Film Basariyla Eklendi!',
                'Studio Saved Successfully!': 'Sutudyo Basariyla Eklendi!',
                'Explore all directors now!': 'Tum yonetmenleri simdi kesfet!',
                'Explore all movies now!': 'Tum filmleri simdi kesfet!',
                'Explore all studios now!': 'Tum sutudyolari simdi kesfet!',
                'Go To Directors': 'Yonetmenlere Git',
                'Go To Studios': 'Sutudyolara Git',
                'Go To Movies': 'Filmlere Git',
                'Next': 'Sonraki',
                'Previous': 'Onceki',
                'Update Director': 'Yonetmen Guncelle',
                'Update Movie': 'Film Guncelle',
                'Update Studio': 'Sutudyo Guncelle',
                'Directors': 'Yonetmenler',
                'Movies': 'Filmler',
                'Studios': 'Sutudyolar',
                'Log Out': 'Cikis Yap'
            }
        }
    },
    react:{
        wait: true
    }

})

export default i18n;