import { franc } from 'franc';
import langs from 'langs';

const langCode = franc('Alle menslike wesens word vry');

const language = langs.where('3', langCode);

console.log(language.name);
