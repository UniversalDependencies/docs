---
layout: base
title:  'UD_Kazakh'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Kazakh

Language: [Kazakh](../kk/overview/kk-hub.html) (code: `kk`)<br/>
Family: Altaic, Turkic

This treebank has been part of Universal Dependencies since the UD v1.3 release.

The following people have contributed to making this treebank part of UD: Aibek Makazhanov, Jonathan North Washington, Francis Tyers.

Repository: [UD_Kazakh](https://github.com/UniversalDependencies/UD_Kazakh)

License: CC BY-SA 4.0

Genre: wiki, fiction, news

Questions, comments?
General annotation questions (either Kazakh-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Kazakh/issues).
If you want to collaborate, please contact [aibek&nbsp;•&nbsp;makazhanov&nbsp;(æt)&nbsp;nu&nbsp;•&nbsp;edu&nbsp;•&nbsp;kz, jonathan&nbsp;•&nbsp;north&nbsp;•&nbsp;washington&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com, ftyers&nbsp;(æt)&nbsp;prompsit&nbsp;•&nbsp;com].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | (unrecognized value: "manual") |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | (unrecognized value: "manual") |

## Description

The UD Kazakh treebank is a combination of text from various sources including Wikipedia, some folk tales,
sentences from the UDHR, news and phrasebook sentences. Sentences IDs include partial document identifiers.




The tokenisation in the Kazakh UD treebank follows the principles of [Turkic lexica in Apertium](http://wiki.apertium.org/wiki/Turkic_lexicon).
Morphological processing in the Kazakh UD treebank follows the principles of [Turkic lexica in Apertium](http://wiki.apertium.org/wiki/Turkic_lexicon).
The treebank was randomly split into training (80%), testing (10%), and development (10%) sets.

## Acknowledgments

Please, cite the following papers if you use Kazakh UD treebank:

@inproceedings{tyers_tl2015,
author = {Tyers, Francis M. and Washington, Jonathan N.},
title = {Towards a Free/Open-source Universal-dependency Treebank for Kazakh},
booktitle = {3rd International Conference on Turkic Languages Processing,
(TurkLang 2015)},
pages = {276--289},
year = {2015},
}

@inproceedings{makazhan_tl2015,
author = {Makazhanov, Aibek and
Sultangazina, Aitolkyn and
Makhambetov, Olzhas and
Yessenbayev, Zhandos},
title = {Syntactic Annotation of Kazakh: Following the Universal Dependencies Guidelines. A report},
booktitle = {3rd International Conference on Turkic Languages Processing,
(TurkLang 2015)},
pages = {338--350},
year = {2015},
}


# Statistics of UD Kazakh

## POS Tags

[ADJ](kk-pos-ADJ.html) – [ADP](kk-pos-ADP.html) – [ADV](kk-pos-ADV.html) – [AUX](kk-pos-AUX.html) – [CCONJ](kk-pos-CCONJ.html) – [DET](kk-pos-DET.html) – [INTJ](kk-pos-INTJ.html) – [NOUN](kk-pos-NOUN.html) – [NUM](kk-pos-NUM.html) – [PART](kk-pos-PART.html) – [PRON](kk-pos-PRON.html) – [PROPN](kk-pos-PROPN.html) – [PUNCT](kk-pos-PUNCT.html) – [SCONJ](kk-pos-SCONJ.html) – [SYM](kk-pos-SYM.html) – [VERB](kk-pos-VERB.html) – [X](kk-pos-X.html)

## Features

[Aspect](kk-feat-Aspect.html) – [Case](kk-feat-Case.html) – [Degree](kk-feat-Degree.html) – [Evident](kk-feat-Evident.html) – [Gender](kk-feat-Gender.html) – [Mood](kk-feat-Mood.html) – [Number](kk-feat-Number.html) – [Number[psor]](kk-feat-Number-psor.html) – [NumType](kk-feat-NumType.html) – [Person](kk-feat-Person.html) – [Person[psor]](kk-feat-Person-psor.html) – [Polarity](kk-feat-Polarity.html) – [Polite](kk-feat-Polite.html) – [PronType](kk-feat-PronType.html) – [Tense](kk-feat-Tense.html) – [VerbForm](kk-feat-VerbForm.html) – [Voice](kk-feat-Voice.html)

## Relations

[acl](kk-dep-acl.html) – [acl:poss](kk-dep-acl-poss.html) – [acl:relcl](kk-dep-acl-relcl.html) – [advcl](kk-dep-advcl.html) – [advmod](kk-dep-advmod.html) – [amod](kk-dep-amod.html) – [appos](kk-dep-appos.html) – [aux](kk-dep-aux.html) – [case](kk-dep-case.html) – [cc](kk-dep-cc.html) – [ccomp](kk-dep-ccomp.html) – [clf](kk-dep-clf.html) – [compound](kk-dep-compound.html) – [compound:lvc](kk-dep-compound-lvc.html) – [conj](kk-dep-conj.html) – [cop](kk-dep-cop.html) – [csubj](kk-dep-csubj.html) – [dep](kk-dep-dep.html) – [det](kk-dep-det.html) – [discourse](kk-dep-discourse.html) – [flat:name](kk-dep-flat-name.html) – [iobj](kk-dep-iobj.html) – [iobj:caus](kk-dep-iobj-caus.html) – [mark](kk-dep-mark.html) – [nmod](kk-dep-nmod.html) – [nmod:poss](kk-dep-nmod-poss.html) – [nsubj](kk-dep-nsubj.html) – [nummod](kk-dep-nummod.html) – [obj](kk-dep-obj.html) – [obl](kk-dep-obl.html) – [obl:own](kk-dep-obl-own.html) – [orphan](kk-dep-orphan.html) – [parataxis](kk-dep-parataxis.html) – [punct](kk-dep-punct.html) – [root](kk-dep-root.html) – [vocative](kk-dep-vocative.html) – [xcomp](kk-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 1109 sentences, 10894 tokens and 11065 syntactic words.</li>
<li>This corpus contains 2053 tokens (19%) that are not followed by a space.</li>
<li>This corpus contains 15 types of words with spaces. Examples: алсам екен, араласқан жоқ, аңдысам екен, болған емес, болған жоқ, деген екен, естіген жоқ екен, еш нәрсені, келген жоқ, көрген емеспін, оқыған жоқ, сыйлайды екенсің, сыйламайды екенсің, тұрған жоқ, ұшырасқан жоқ</li>
<li>This corpus contains 96 types of words that contain both letters and punctuation. Examples: ж., М., сондай-ақ, б.з.б., млн., млрд., т.б., -ақ, А., АҚШ-пен, Брютон-стриттегі, Р., ас-Саудтың, қарым-қатынастарды, 100-ге, 19,4°С-қа, 20-шы, 22%-ы, 2°С-тан, 3-ші, 30-шы, 35-те, 36%-ы, 400-ге, 55-ші, 70%-ін, 80-ге, 90%-ына, 90%-ға, Азық-түлікке, Ата-аналардың, Г., Дар-әл-Харб, Деште-Кевир, Деште-Лух, Ел-жұрттарыңыздың, Жауын-шашынның, И., КСРО-дағы, Келе-келе, Кура-Аракс, Көші-қон, Премьер-Министрге, Рио-де-Жанейродағы, С., Сан-Паулуда, Санкт-Петербург, Солтүстік-батысын, Т., Тап-таза</li>
<li>This corpus contains 171 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 121 types of multi-word tokens. Examples: бар, ешкім, Жасаған-ау, балалы, басқа, қуаныштымын, және, Баласыз, Ешкімді, Сондықтан, Шолпан, аласыз, аузымен, бола, болмаса, болғанда, бұзылады-ау, дұрыс, екеуі, екеуінің, екпінді, ешқандай, жалынды, жалынса, жоқ, жыласа, жылы, жөн, кетті, кімдікі, көрсетер, ретті, тағы, Азамат, Бәрі, Дінге, Елсіз, Сүйсем, Төстік, айтшы, алды, алмай, ашылса, аң, бала, балалары, басшылары, басын, бизнесі, бойынша.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus contains 13 word types tagged as particles (PART): Бітеу, Стратмор, ау, ба, бе, гөр, ер, ма, ме, ше, шы, шығар, қой</li>
</ul>

<ul>
<li>This corpus contains 54 lemmas tagged as pronouns (PRON): Абдул, Арабиясы, Шолпан, адам, барлық, барша, бойынша, біз, бір, бір-бір, бірдеме, біреу, бірқатар, бұл, бәрі, герцогиниясы, графы, дүние, ешкім, ешнәрсе, ештеңе, ешқандай, жары, және, кім, күллі, манағы, мен, мына, мынау, не, нелік, немене, нәрсе, ол, олар, осы, оңаша, сен, сол, сіз, сіздер, сөз, Құранл, қандай, қанша, қосыл, құрметіне, ұл, әм, әрбіреу, әулие, өз, өсет</li>
</ul>

<ul>
<li>This corpus contains 36 lemmas tagged as determiners (DET): Виндзор, ана, анау, барлық, басқа, бір, бірнеше, бірсыпыра, бірталай, бірқатар, бүкіл, бұл, ешбір, ешқандай, кей, кейбір, көп, көптеген, манағы, мына, мұндай, не, ол, осы, осындай, сол, сондай, түрлі, қай, қандай, қанша, әлгі, әлдебір, әр, әртүрлі, өз</li>
</ul>

<ul>
<li>Out of the above, 14 lemmas occurred sometimes as PRON and sometimes as DET: барлық, бір, бірқатар, бұл, ешқандай, манағы, мына, не, ол, осы, сол, қандай, қанша, өз</li>
</ul>

<ul>
<li>This corpus contains 30 lemmas tagged as auxiliaries (AUX): адам, айт, ал, атан, бар, баста, бер, бол, болуға, біл, біт, бүлінер, бәсеңдер, гөр, е, жат, жібер, жүр, кел, кет, көр, отыр, таста, түс, тұр, тұрғызыл, шығар, шық, қал, қой</li>
</ul>

<ul>
<li>Out of the above, 23 lemmas occurred sometimes as AUX and sometimes as VERB: айт, ал, атан, бар, баста, бер, бол, біл, біт, жат, жібер, жүр, кел, кет, көр, отыр, таста, түс, тұр, шығар, шық, қал, қой</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Conv
  <ul>
    <li>AUX: болып, болса, болмаса, алып, берсек, бола, болсам, болсаң, жатса, жіберіп</li>
    <li>VERB: деп, бастап, алып, барып, Сөйтіп, жатса, беріп, болып, қашып, құлап</li>
  </ul>
  </li>
  <li>Cov
  <ul>
    <li>AUX: болып, бола, келе, алмай, бара, боп, отыра, тұра</li>
    <li>VERB: басып, дами, алып, бара, бере, жоспарланып, қарап, ала, бақылап, жаулап</li>
  </ul>
  </li>
  <li>Fin
  <ul>
    <li>AUX: болды, еді, жатыр, бастады, кетті, емес, келеді, отыр, екен, болады</li>
    <li>VERB: деді, біледі, болды, келді, өтті, береді, шықты, алды, ашылды, болады</li>
  </ul>
  </li>
  <li>Ger
  <ul>
    <li>AUX: екенін, болуы, болу, болуға, болғанда, болғанын, адамға, алатынына, алмауда, алғаннан</li>
    <li>VERB: шешуі, алуға, жасау, келгенде, оқу, қорғалуға, алу, асыру, атауға, ашылу</li>
  </ul>
  </li>
  <li>Part
  <ul>
    <li>AUX: жатқан, болған, отыратын, отырған, тұрған, айтушы, алмайтындай, алмаған, болатын, болушы</li>
    <li>VERB: болған, деген, шыққан, алған, келген, туған, түскен, айтарлықтай, айтқан, аталған</li>
  </ul>
  </li>
</ul>
</li>
</ul>

<h3>Nominal Features</h3>

<li><a>Gender</a>
  <ul>
    <li>Fem
      <ul>
        <li>NOUN: Елизавета</li>
        <li>PROPN: Шолпан, Айгүл, Елизавета, Александра, Мария, Айгүлдің, Алтынай, Ақбала, Шолпанның, Айгүлден</li>
      </ul>
    </li>
    <li>Masc
      <ul>
        <li>NOUN: Эдуард, Сауд</li>
        <li>PROPN: Бекболат, Азамат, Нұрсұлтан, Назарбаев, Ерназардың, Азаматтың, Реза, Төстік, Қожа, Азаматты</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>ADJ: ақтардың, Ақтар, баршаларын, лақаптар, туындылар, қызылдар, әскерилер, өзгелері</li>
        <li>AUX-Conv: берсек</li>
        <li>AUX-Fin: бастады, жатырмыз, келді, алмады, берді, беретін, быз, жатыр, жатырсыздар, жүрміз</li>
        <li>NOUN: тілдерін, жылдары, ғасырларда, өзгерістер, қатынастар, актерлер, мемлекеттер, орыстар, сайлаушылар, толқулар</li>
        <li>PRON: біз, біздің, олар, бізді, олардың, сіздер, Бұлардың, Сіздерді, бізге, оларды</li>
        <li>PROPN: ильхандар, салжұқтар, Әзірбайжандар</li>
        <li>VERB-Fin: келді, сақталған, айтамыз, басталды, білейік, орнады, айқындаймыз, алды, алдық, атқарылды</li>
        <li>VERB-Ger: бірігулері, жасаулары, келгендеріңіз, ұсынғандар</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>AUX-Conv: болса, болмаса, болсам, болсаң, жатса, кетпесем</li>
        <li>AUX-Fin: болды, еді, жатыр, емес, кетті, бастады, келеді, отыр, екен, болады</li>
        <li>PRON: мен, ол, оның, сіздің, оны, сені, Сіз, маған, оған, Сен</li>
        <li>VERB-Conv: жатса, берсе, болса, десең, жалынса, жыласа, туса, Сүйсем, алмаса, ашылса</li>
        <li>VERB-Cov: Тарағысы, айтқым, айтқысы, оқытса, Қарағысы, қайтқысы, қатысқысы, құттықтағым, ұсынғым</li>
        <li>VERB-Fin: деді, біледі, болды, өтті, береді, шықты, болады, болыпты, келді, табылады</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Case</a>
  <ul>
    <li>Abl
      <ul>
        <li>ADJ: алыстан, жаңадан, күштіден, көптен, жартысынан</li>
        <li>AUX-Ger: алғаннан, болғандықтан, біткеннен, тұрғызылғандықтан</li>
        <li>NOUN: жылдан, футболдан, Соғыстан, ауылдан, дүниеден, елден, күннен, пендеден, шеттен, ішінен</li>
        <li>NUM: бірінен, 2°С-тан, миллионнан, мыңнан, қырықтан</li>
        <li>PRON: одан, онан, содан, Бірінен, Менен, Мұнан, Неліктен, Сізден, осыдан</li>
        <li>PROPN: Азиядан, Астанадан, Германиядан, Сұзыдан, Айгүлден, Төлегеннен</li>
        <li>VERB-Ger: кеткеннен, алмастан, басталғаннан, бақылаудан, жетіспеушілігінен, жолыққаннан, жөндеуден, сөйлегеннен, тұрғызылғандықтан, қорыққаннан</li>
      </ul>
    </li>
    <li>Acc
      <ul>
        <li>ADJ: талайды, өзгені, Солтүстік-батысын, Турасын, баршаларын, барыңды, оңтүстігін, солтүстік-шығысын, өзгесін</li>
        <li>AUX-Ger: екенін, болғанын, болмасымды, болғанымды, екендіктерін, жатқанын, жүргенін, шығуды</li>
        <li>NOUN: тілдерін, жобаны, сөзді, чемпионатты, қызды, малын, ахуалды, бейбітшілікті, дыбысты, елді</li>
        <li>NUM: 70%-ін, Бірін</li>
        <li>PRON: оны, сені, бізді, Мені, Сізді, Ешкімді, Кімді, Сіздерді, бәрін, оларды</li>
        <li>PROPN: Иранды, Азаматты, Арабияны, Мысырды, Палестинаны, Сирияны, Қазақстанды, Қожанасырды</li>
        <li>VERB-Ger: біткенді, ойнағанды, алуды, алғанын, білгенді, демократияландыруды, етуді, жазылмасын, жолдауыңызды, жымиғанын</li>
      </ul>
    </li>
    <li>Dat
      <ul>
        <li>ADJ: алысқа, жайға, жылдығына</li>
        <li>AUX-Ger: болуға, адамға, алатынына, алғаныма, болғаныма, екеніне, кетпесіне, тұруға, шығуға, қалғанына</li>
        <li>NOUN: жерге, үйге, адамға, жылға, таққа, дағдарысқа, дүниеге, елге, пайызға, тысқа</li>
        <li>NUM: 100-ге, 19,4°С-қа, 400-ге, 80-ге, 90%-ына, 90%-ға</li>
        <li>PRON: оған, маған, кімге, саған, Соған, бізге, ешкімге, оларға, сізге, сіздерге</li>
        <li>PROPN: Астанаға, Иранға, Қазақстанға, Арменияға, Бағдадқа, Византияға, Германияға, Семейге, Тибетке, Украинаға</li>
        <li>VERB-Ger: алуға, қорғалуға, атауға, білуге, орнатуға, табуға, тұруға, азапталуға, айналуға, айрылмауға</li>
        <li>VERB-Part: Блоктарға, сездірмеске</li>
      </ul>
    </li>
    <li>Gen
      <ul>
        <li>ADJ: ақтардың, жаттың, туындының, қазақтың, жылдығының</li>
        <li>NOUN: жылдың, ғасырдың, адамның, халықтың, елдің, Жобаның, ағаштың, еліміздің, қазақтың, қаланың</li>
        <li>NUM: екеуінің, Тәңірінің, әжесінің, Өзінің</li>
        <li>PRON: біздің, оның, сіздің, өзінің, олардың, соның, менің, мұның, өзіміздің, Аның</li>
        <li>PROPN: Қазақстанның, Иранның, Астананың, Ерназардың, Азаматтың, Азияның, Еуропаның, Шолпанның, Айгүлдің, Лондонның</li>
        <li>VERB-Ger: жүргізудің, тартудың, теңелуінің, тырысуының, қосылудың, қосылуының, әкелудің</li>
      </ul>
    </li>
    <li>Ins
      <ul>
        <li>AUX-Ger: екенімен</li>
        <li>NOUN: сезіммен, аузымен, келіншектермен, Асумен, Жорғалықпенен, Күнмен, Нашақорлықпен, Патшамен, Тәсілмен, абыроймен</li>
        <li>PRON: осымен, Онымен, Сізбен, бір-бірімен, бұлармен, кіммен, немен, соныменен</li>
        <li>PROPN: АҚШ-пен, Ауғанстанмен, Грузиямен, Қазақстанмен, Өзбекстанмен, Назарбаевпен</li>
        <li>VERB-Ger: берумен, болуымен, бояумен, жеумен, кигенмен, оқығанменен, сайлануыңызбен, сорумен, қаруымен, өткізілуімен</li>
      </ul>
    </li>
    <li>Loc
      <ul>
        <li>ADJ: аулақта, жартысында, тақта, қайта, Анығында</li>
        <li>AUX-Ger: болғанда, алмауда, жүргенде</li>
        <li>NOUN: елде, ғасырда, кезде, түрде, елдегі, жерде, ішінде, үйде, арасында, кезінде</li>
        <li>NUM: 35-те</li>
        <li>PRON: мұнда, Сізде, осында, өзінде, онда, Бізде, Менде, сонда</li>
        <li>PROPN: Қазақстанда, Астанада, Тегеранда, Қазақстандағы, Алматыда, Бразилияда, Иранда, Азияда, Азиядағы, Америкада</li>
        <li>VERB-Ger: келгенде, салыстырғанда, Сөйткенде, араздасқанда, асқанда, ашқанда, дамуда, дамытуда, дегенде, жүргенде</li>
      </ul>
    </li>
    <li>Nom
      <ul>
        <li>ADJ: бар, атты, болатын, дауысты, жалын, жақын, жоқ, жуығы, көп, түркі</li>
        <li>ADP: дейінгі, кейінгі</li>
        <li>ADV: қазіргі, соңғы, Арғы, Бүгінгі, Ендігі, Жоғарғы, бергі, биылғы, ежелгі, күндізгі</li>
        <li>AUX-Ger: болуы, болу, болатыны, білу, екені, жатқаны, жүрген, көруіміз, отырғаным, қалған</li>
        <li>DET: не</li>
        <li>NOUN: мемлекет, бала, ел, орыс, қазақ, Президент, адам, кісі, мал, орын</li>
        <li>NUM: бірі, екеуі, 2030, 22%-ы, 27%, 30%, 36%-ы, 5%, 51%, 58,3%</li>
        <li>PRON: біз, мен, ол, бұл, не, кім, олар, өзі, ешкім, бәрі</li>
        <li>PROPN: Иран, Қазақстан, АҚШ, Шолпан, Ұлыбритания, Алматы, Астана, Бекболат, Азамат, Жасаған</li>
        <li>VERB-Ger: шешуі, жасау, оқу, алу, асыру, ашылу, келген, көрсету, салу, сақтау</li>
        <li>VERB-Part: келген, көбейгені</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Degree and Polarity</h3>

<li><a>Degree</a>
  <ul>
    <li>Cmp
      <ul>
        <li>ADJ: Жақынырақ, анығырақ, арзанырақ, кішірек, тазалау</li>
        <li>ADV: Кейінірек</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Polarity</a>
  <ul>
    <li>Neg
      <ul>
        <li>AUX-Conv: болмаса, кетпесем</li>
        <li>AUX-Cov: алмай</li>
        <li>AUX-Fin: емес, алмайды, алмады, алмаймын, алмас, болған емес, болған жоқ, келген жоқ, келмеді, көрме</li>
        <li>AUX-Ger: алмауда, болмасымды, кетпесіне</li>
        <li>AUX-Part: алмайтындай, алмаған</li>
        <li>VERB-Conv: алаланбай, алмаса, аспай, жемей, жығылмай, келмей, саналмаса, қалдырмай, қорықпай, қылмай</li>
        <li>VERB-Cov: ашпай, білінбей, келмей</li>
        <li>VERB-Fin: келмейді, болмайды, қылмады, айтпайды, бермеді, болмады, білмеймін, көтермеді, істемеді, қарастырылмады</li>
        <li>VERB-Ger: айрылмауға, алаланбауы, алмастан, бермеуі, жазылмасын, жетіспеушілігінен, келмеуі, сұғылмауына, қосылмау</li>
        <li>VERB-Part: Ашылмайтын, еңсерілмейтін, жатпайтын, оқымаған, сездірмеске, сүймеген, шешілмеген, Қорықпайтын</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Verbal Features</h3>

<li><a>Aspect</a>
  <ul>
    <li>Imp
      <ul>
        <li>AUX-Conv: бола</li>
        <li>AUX-Cov: бола, келе, алмай, бара, отыра, тұра</li>
        <li>AUX-Ger: алатынына, болатыны</li>
        <li>AUX-Part: отыратын, алмайтындай, болатын</li>
        <li>VERB-Conv: қайта, ажарлана, арсыздана, арттыра, жая, мадақтай, тұра, шақыра, қаша</li>
        <li>VERB-Cov: дами, бара, бере, ала, отыра, араласа, арта, жете, келе, кіре</li>
        <li>VERB-Ger: жығатынын, мақтанатыны, табылатынын, әкелетіні, өзгеретінін</li>
        <li>VERB-Part: болатын, жейтін, тұратын, Ашылмайтын, Танытатын, асыратын, атын, баратын, білетін, бұзатын</li>
      </ul>
    </li>
    <li>Perf
      <ul>
        <li>AUX-Conv: болып, алып, жіберіп, жүріп, отырып, тұрып</li>
        <li>AUX-Cov: болып, алмай, боп</li>
        <li>VERB-Conv: деп, бастап, алып, барып, Сөйтіп, беріп, болып, қашып, құлап, айналып</li>
        <li>VERB-Cov: басып, алып, жоспарланып, қарап, бақылап, жаулап, көріп, шығып, құрып, беріп</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Mood</a>
  <ul>
    <li>Cnd
      <ul>
        <li>AUX-Conv: болса, болмаса, берсек, болсам, болсаң, жатса, кетпесем</li>
        <li>VERB-Conv: жатса, берсе, болса, десең, жалынса, жыласа, туса, Сүйсем, алмаса, ашылса</li>
        <li>VERB-Cov: оқытса</li>
      </ul>
    </li>
    <li>Imp
      <ul>
        <li>AUX-Fin: бер, бүлінер, бәсеңдер, гөр, көрме, шығар, қал</li>
        <li>VERB-Fin: алыңыз, же, Аттан, айт, аяма, бер, берме, беріңіз, жасаңыздар, жинаңыз</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>AUX-Fin: болды, еді, жатыр, бастады, кетті, емес, келеді, отыр, екен, болады</li>
        <li>VERB-Fin: деді, біледі, болды, келді, өтті, береді, шықты, алды, ашылды, болады</li>
      </ul>
    </li>
    <li>Opt
      <ul>
        <li>AUX-Fin: болсын, алсын, берсін, болайын, тұрайық, қойсын</li>
        <li>VERB-Fin: білейік, білсін, аяйын, барайын, барсын, берейік, білдірсін, жалынсын, жарасын, жейік</li>
      </ul>
    </li>
    <li>Pot
      <ul>
        <li>AUX-Part: айтушы, болушы</li>
        <li>VERB-Part: айтарлықтай, қорқушы, айтушы, алаңдарлықтай, атқарушы, басқарушы, болушы, деуші, жетелеуші, шығарушы</li>
      </ul>
    </li>
    <li>Vol
      <ul>
        <li>VERB-Cov: Тарағысы, айтқым, айтқысы, Қарағысы, қайтқысы, қатысқысы, құттықтағым, ұсынғым</li>
        <li>VERB-Fin: алсам екен, аңдысам екен</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Aor
      <ul>
        <li>AUX-Fin: емес, келеді, екен, болады, мын, алмайды, береді, кетеді, тұрады, қалады</li>
        <li>VERB-Fin: біледі, береді, болады, табылады, түседі, тұрады, көрінеді, дейді, келеді, келмейді</li>
      </ul>
    </li>
    <li>Fut
      <ul>
        <li>AUX-Fin: алмас</li>
        <li>AUX-Ger: болмасымды, кетпесіне</li>
        <li>VERB-Fin: көрсет, Пірәдар, бар, барарсың, бір, бүлінер, бәсеңдер, естірсіз, көрер, соғармын</li>
        <li>VERB-Ger: алмастан, жазылмасын</li>
        <li>VERB-Part: Блоктарға, артар, аяр, дер, сездірмеске</li>
      </ul>
    </li>
    <li>FutPlan
      <ul>
        <li>AUX-Fin: бермек, болмақ</li>
        <li>VERB-Fin: кеңейтілмек, көздемек</li>
        <li>VERB-Ger: білмек</li>
      </ul>
    </li>
    <li>Past
      <ul>
        <li>AUX-Fin: болды, еді, бастады, кетті, қалды, алды, болған, келді, алмады, берді</li>
        <li>AUX-Ger: екенін, болғанда, болғанын, алғаннан, алғаныма, болғаныма, болғанымды, біткеннен, екені, екенімен</li>
        <li>AUX-Part: жатқан, болған, отырған, тұрған, алмаған, қойған</li>
        <li>VERB-Fin: деді, болды, келді, өтті, шықты, алды, ашылды, болыпты, құрылды, айтты</li>
        <li>VERB-Ger: келгенде, біткенді, келген, кеткеннен, ойнағанды, салыстырғанда, Сөйткенде, алғанын, араздасқанда, артқан</li>
        <li>VERB-Part: болған, деген, шыққан, алған, келген, туған, түскен, айтарлықтай, айтқан, аталған</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>AUX-Fin: жатыр, отыр, жатырмыз, жүр, тұр, отырмын, тұрмын, жатырмын, жатырсыздар, жүрміз</li>
        <li>VERB-Fin: тұр</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Voice</a>
  <ul>
    <li>Coop
      <ul>
        <li>VERB-Conv: тартысып, Қиюласып, өлтіріспей</li>
        <li>VERB-Cov: айтысып, араласа, соғыса, танысып, қатысқысы, құшақтасып</li>
        <li>VERB-Fin: айналысады, араласқан жоқ, байланысты, бөлісеміз, жалғасты, жасасты, келісті, сөйлесерміз, танысты, қатысамын</li>
        <li>VERB-Ger: жетіспеушілігінен, танысқаныма, істесуге, Қалыптасу, қатысуға, әңгімелесуіміз, өлтіріскеніне</li>
        <li>VERB-Part: таласқандай, топтасқан</li>
      </ul>
    </li>
    <li>Pass
      <ul>
        <li>VERB-Conv: алаланбай, ажарлана, ашылса, байқалып, басталып, бұзылып, жарияланып, жасалып, жығылмай, расталса</li>
        <li>VERB-Cov: жоспарланып, бөлініп, өткізіліп, басылып, білінбей, бұжырланып, жіберіліп, көрсетіліп, сайланып, салына</li>
        <li>VERB-Fin: ашылды, табылады, құрылды, жойылды, көрінеді, анықталады, басталды, берілді, жарияланады, жасалады</li>
        <li>VERB-Ger: қорғалуға, ашылу, азапталуға, алаланбауы, асырылуы, аяқталуы, басталуы, басталғаннан, басылуы, білінген</li>
        <li>VERB-Part: аталған, кеңейтілген, табылған, төгілген, Атқарылған, Ашылмайтын, арналған, белгіленген, еңсерілмейтін, жабдықталған</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Evident</a>
  <ul>
    <li>Fh
      <ul>
        <li>AUX-Fin: екен, болыпты, кетіпті, шығыпты</li>
        <li>VERB-Fin: болыпты, келіпті, деген екен, демепті, елемепті, естіген жоқ екен, жасапты, жиналыпты, кетіпті, сыйлайды екенсің</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Dem
      <ul>
        <li>DET: осы, бұл, ол, сол, мына, бұ, мұндай, манағы, Анау, Мұнша</li>
        <li>PRON: бұл, ол, мұнда, одан, оны, соның, мұның, олай, оған, бұ</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>DET: бір, кейбір, сондай, Виндзор, Кей, Осындай, басқа, түрлі, Әлдебір</li>
        <li>PRON: біреу, Бірінен, бірдеме, біреуге, біреудің, нәрсе, Әрбіреудің</li>
      </ul>
    </li>
    <li>Int
      <ul>
        <li>ADJ: қандай</li>
        <li>ADV: қайда, қайдан, қалай, қашан, неге, неліктен, қашанғы</li>
        <li>DET: қай, не, қандай</li>
        <li>PRON: не, кім, қандай, қанша, немене, кімге, Кімді, Адам, Неліктен, Неміз</li>
      </ul>
    </li>
    <li>Neg
      <ul>
        <li>DET: ешқандай, ешбір</li>
        <li>PRON: ешкім, Ешкімді, ешкімге, ешқандай, Ештеңе, дүниеге, еш нәрсені, әулиеге</li>
      </ul>
    </li>
    <li>Prs
      <ul>
        <li>PRON: біз, мен, ол, біздің, оның, олар, сіздің, оны, сені, Сіз</li>
      </ul>
    </li>
    <li>Qnt
      <ul>
        <li>DET: барлық, әр, бүкіл, бірқатар, көп, көптеген, қанша, бірнеше, Бірталай, бірсыпыра</li>
        <li>PRON: бәрі, барлығы, бәрін, бірқатары, күллі</li>
      </ul>
    </li>
    <li>Rcp
      <ul>
        <li>PRON: бір-бірімен</li>
      </ul>
    </li>
    <li>Ref
      <ul>
        <li>DET: өз</li>
        <li>PRON: өзі, өзінің, өзіміздің, өзінде, өзінше, өздері, сөзі, өздерінің, өздерің, өзін</li>
      </ul>
    </li>
    <li>Tot
      <ul>
        <li>PRON: баршаға</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>NumType</a>
  <ul>
    <li>Card
      <ul>
        <li>NUM: бір, екі, миллиард, үш, 12, төрт, сегіз, 1, 4, 5</li>
      </ul>
    </li>
    <li>Card,Ord
      <ul>
        <li>NUM: бірі, бір, 3, бірдей, млн., мың, 1, 1220, 13, 1380</li>
      </ul>
    </li>
    <li>Coll
      <ul>
        <li>NUM: екеуі, екеуінің, Брютон-стриттегі, Тәңірінің, біреуі, үшеуі, әжесінің, әкесі, Өзінің</li>
      </ul>
    </li>
    <li>Ord
      <ul>
        <li>NUM: үшінші, 2, 1, 11, 18, 19, 20, II, 12, 14</li>
      </ul>
    </li>
  </ul>
</li>



<li><a>Person</a>
  <ul>
    <li>1
      <ul>
        <li>AUX-Conv: берсек, болсам, кетпесем</li>
        <li>AUX-Fin: мын, жатырмыз, алдым, алмаймын, отырмын, тұрмын, беремін, болайын, болдым, быз</li>
        <li>PRON: біз, мен, біздің, маған, бізді, менің, Мені, бізге, Бізде, Менде</li>
        <li>VERB-Conv: Сүйсем, жатсам, тұрсам</li>
        <li>VERB-Cov: айтқым, құттықтағым, ұсынғым</li>
        <li>VERB-Fin: құттықтаймын, айтамыз, алам, білейік, білмеймін, көрдім, ойлаймын, айқындаймыз, алдым, алдық</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>AUX-Conv: болсаң</li>
        <li>AUX-Fin: аласыз, бер, бүлінер, бәсеңдер, гөр, жатырсыздар, келдіңіз, келесіз, көрме, отырсыздар</li>
        <li>PRON: сіздің, сені, Сіз, Сен, Сізде, Сізді, саған, сіздер, Сіздерді, сізге</li>
        <li>VERB-Conv: десең, білсең, салсаң</li>
        <li>VERB-Fin: алыңыз, же, Аттан, айт, айтасың, атасың, аяма, барарсың, бер, берме</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>AUX-Conv: болса, болмаса, жатса</li>
        <li>AUX-Fin: болды, еді, жатыр, бастады, кетті, емес, келеді, отыр, екен, болады</li>
        <li>PRON: ол, оның, олар, оны, олардың, оған, Аның, одан, оларды, оларға</li>
        <li>VERB-Conv: жатса, берсе, болса, жалынса, жыласа, туса, алмаса, ашылса, барса, болмаса</li>
        <li>VERB-Cov: Тарағысы, айтқысы, оқытса, Қарағысы, қайтқысы, қатысқысы</li>
        <li>VERB-Fin: деді, біледі, болды, келді, өтті, береді, шықты, алды, ашылды, болады</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Polite</a>
  <ul>
    <li>Form
      <ul>
        <li>AUX-Fin: аласыз, жатырсыздар, келдіңіз, келесіз, отырсыздар</li>
        <li>NOUN: Ел-жұрттарыңыздың, Мерекелеріңізбен, Сұрақтарыңызды, атыңыз, елдеріңіз, елордаларыңызға, еліңіз, сапарыңыз, саясатыңыздың, сеніміңізді</li>
        <li>NUM: жетіңіз</li>
        <li>PRON: сіздің, Сіз, Сізде, Сізді, сіздер, Сіздерді, сізге, сіздерге, Сізбен, Сізден</li>
        <li>VERB-Fin: алыңыз, беріңіз, болдыңыз, білесіз, естірсіз, жасаңыздар, жинаңыз, сөйлейсіз, табыласыздар, шығарасыз</li>
        <li>VERB-Ger: жолдауыңызды, келгендеріңіз, сайлануыңызбен, қылғаныңыз</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Number[psor]</a>
  <ul>
    <li>Plur
      <ul>
        <li>AUX-Ger: екендіктерін, көруіміз</li>
        <li>NOUN: еліміздің, еліміз, Алдымыз, Дамуымыз, Еліміздегі, Конституциямызды, Отанымыз, азаматтарымыз, алғысымызды, аспанымыз</li>
        <li>PRON: өзіміздің, өздері, Неміз, өздерінің, өздерің</li>
        <li>VERB-Ger: кездесуіміз, әңгімелесуіміз, өлуіміз</li>
      </ul>
    </li>
    <li>Plur,Sing
      <ul>
        <li>ADJ: жартысында, жуығы, Анығында, Солтүстік-батысын, Турасын, арғы, баршаларын, баршасы, жартысынан, жылдығына</li>
        <li>AUX-Ger: екенін, болуы, болғанын, алатынына, болатыны, екені, екенімен, екеніне, жатқаны, жатқанын</li>
        <li>NOUN: басшысы, жылы, әулеті, тілдерін, ішінде, арасында, кезінде, халқы, Президенті, баласы</li>
        <li>NUM: бірі, екеуі, екеуінің, бірінен, 22%-ы, 36%-ы, 70%-ін, 90%-ына, Брютон-стриттегі, Бірін</li>
        <li>PRON: өзі, бәрі, өзінің, өзінде, өзінше, барлығы, бәрін, Бірінен, Онысы, бір-бірімен</li>
        <li>PROPN: Алашордасының, Арабиясының, анасының</li>
        <li>VERB-Ger: шешуі, алаланбауы, алуы, алғанын, асырылуы, атқаруы, аяқталуы, басталуы, басылуы, бермеуі</li>
        <li>VERB-Part: көбейгені</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: барыңды</li>
        <li>AUX-Ger: алғаныма, болмасымды, болғаныма, болғанымды, отырғаным</li>
        <li>NOUN: Інім, Атым, Ағам, Ел-жұрттарыңыздың, Жасым, Жауыңнан, Мерекелеріңізбен, Отаным, Съездің, Сұрақтарыңызды</li>
        <li>NUM: жетіңіз</li>
        <li>PRON: өзіңіздің</li>
        <li>VERB-Ger: жолдауыңызды, келгендеріңіз, көргеніме, сайлануыңызбен, танысқаныма, қылғаныңыз</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Other Features</h3>

<li><a>Person[psor]</a>
  <ul>
    <li>1
      <ul>
        <li>AUX-Ger: алғаныма, болмасымды, болғаныма, болғанымды, көруіміз, отырғаным</li>
        <li>NOUN: еліміздің, еліміз, Інім, Алдымыз, Атым, Ағам, Дамуымыз, Еліміздегі, Жасым, Конституциямызды</li>
        <li>PRON: өзіміздің, Неміз</li>
        <li>VERB-Ger: кездесуіміз, көргеніме, танысқаныма, әңгімелесуіміз, өлуіміз</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>ADJ: барыңды</li>
        <li>NOUN: Ел-жұрттарыңыздың, Жауыңнан, Мерекелеріңізбен, Съездің, Сұрақтарыңызды, атыңды, атыңыз, балаң, балаңа, басың</li>
        <li>NUM: жетіңіз</li>
        <li>PRON: өздерің, өзіңіздің</li>
        <li>VERB-Ger: жолдауыңызды, келгендеріңіз, сайлануыңызбен, қылғаныңыз</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>ADJ: жартысында, жуығы, Анығында, Солтүстік-батысын, Турасын, арғы, баршаларын, баршасы, жартысынан, жылдығына</li>
        <li>AUX-Ger: екенін, болуы, болғанын, алатынына, болатыны, екендіктерін, екені, екенімен, екеніне, жатқаны</li>
        <li>NOUN: басшысы, жылы, әулеті, тілдерін, ішінде, арасында, кезінде, халқы, Президенті, баласы</li>
        <li>NUM: бірі, екеуі, екеуінің, бірінен, 22%-ы, 36%-ы, 70%-ін, 90%-ына, Брютон-стриттегі, Бірін</li>
        <li>PRON: өзі, бәрі, өзінің, өзінде, өзінше, барлығы, бәрін, өздері, Бірінен, Онысы</li>
        <li>PROPN: Алашордасының, Арабиясының, анасының</li>
        <li>VERB-Ger: шешуі, алаланбауы, алуы, алғанын, асырылуы, атқаруы, аяқталуы, басталуы, басылуы, бермеуі</li>
        <li>VERB-Part: көбейгені</li>
      </ul>
    </li>
  </ul>
</li>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 11 lemmas as copulas (<a>cop</a>). Examples: бол, е, тұр, атан, болма, болсам, болу, болуға, болып, болғандықтан, емес.</li>
<li>This corpus uses 23 lemmas as auxiliaries (<a>aux</a>). Examples: жат, ал, отыр, кел, кет, тұр, баста, бер, қал, жүр, шық, бар, бол, көр, жібер, түс, қой, біл, біт, гө, гөр, көрме, таста.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Conv--NOUN-Nom (39)</li>
      <li>VERB-Conv--PRON-Dat (1)</li>
      <li>VERB-Conv--PRON-Nom (8)</li>
      <li>VERB-Cov--NOUN-Nom (72)</li>
      <li>VERB-Cov--PRON-Gen (1)</li>
      <li>VERB-Cov--PRON-Nom (37)</li>
      <li>VERB-Fin--NOUN (4)</li>
      <li>VERB-Fin--NOUN-Nom (296)</li>
      <li>VERB-Fin--PRON-Nom (84)</li>
      <li>VERB-Ger--NOUN-Gen (17)</li>
      <li>VERB-Ger--NOUN-Nom (29)</li>
      <li>VERB-Ger--PRON-Gen (7)</li>
      <li>VERB-Ger--PRON-Nom (10)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--NOUN-Nom (24)</li>
      <li>VERB-Part--PRON-Nom (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN-Acc (28)</li>
      <li>VERB-Conv--NOUN-Nom (25)</li>
      <li>VERB-Conv--PRON-Acc (4)</li>
      <li>VERB-Conv--PRON-Nom (3)</li>
      <li>VERB-Cov--NOUN-Acc (34)</li>
      <li>VERB-Cov--NOUN-Dat (2)</li>
      <li>VERB-Cov--NOUN-Nom (21)</li>
      <li>VERB-Cov--PRON-Acc (5)</li>
      <li>VERB-Cov--PRON-Nom (1)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Acc (106)</li>
      <li>VERB-Fin--NOUN-Dat (7)</li>
      <li>VERB-Fin--NOUN-Nom (85)</li>
      <li>VERB-Fin--PRON-Acc (31)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Fin--PRON-Nom (4)</li>
      <li>VERB-Ger--NOUN-Acc (55)</li>
      <li>VERB-Ger--NOUN-Dat (2)</li>
      <li>VERB-Ger--NOUN-Nom (44)</li>
      <li>VERB-Ger--PRON-Acc (8)</li>
      <li>VERB-Ger--PRON-Dat (1)</li>
      <li>VERB-Part--NOUN-Acc (15)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--NOUN-Nom (11)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (1)</li>
      <li>VERB-Ger--NOUN-Abl (1)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>acl:poss</a>, <a>acl:relcl</a>, <a>compound:lvc</a>, <a>flat:name</a>, <a>iobj:caus</a>, <a>nmod:poss</a>, <a>obl:own</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>fixed</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
