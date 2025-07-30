function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
  includedLanguages: 'en,hi,as,bn,brx,doi,gu,kn,ks,kok,mai,ml,mni,mr,ne,or,pa,sa,sat,sd,ta,te,ur,fr,de,', // customize the languages
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}
