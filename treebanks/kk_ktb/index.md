---
layout: base
title:  'UD_Kazakh-KTB'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Kazakh KTB

Language: [Kazakh](/kk/index.html) (code: `kk`)<br/>
Family: Turkic, Northwestern

This treebank has been part of Universal Dependencies since the UD v1.3 release.

The following people have contributed to making this treebank part of UD: Aibek Makazhanov, Jonathan North Washington, Francis Tyers.

Repository: [UD_Kazakh-KTB](https://github.com/UniversalDependencies/UD_Kazakh-KTB)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udkk_ktb29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: wiki, fiction, news

Questions, comments?
General annotation questions (either Kazakh-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Kazakh-KTB/issues).
If you want to collaborate, please contact [aibek&nbsp;•&nbsp;makazhanov&nbsp;(æt)&nbsp;nu&nbsp;•&nbsp;edu&nbsp;•&nbsp;kz, jonathan&nbsp;•&nbsp;north&nbsp;•&nbsp;washington&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com, ftyers&nbsp;(æt)&nbsp;prompsit&nbsp;•&nbsp;com].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually, natively in UD style |

## Description

The UD Kazakh treebank is a combination of text from various sources including Wikipedia, some folk tales,
sentences from the UDHR, news and phrasebook sentences. Sentences IDs include partial document identifiers.



The tokenisation in the Kazakh UD treebank follows the principles of [Turkic lexica in Apertium](http://wiki.apertium.org/wiki/Turkic_lexicon).
Morphological processing in the Kazakh UD treebank follows the principles of [Turkic lexica in Apertium](http://wiki.apertium.org/wiki/Turkic_lexicon).
The file designated as “train” is just a small sample to show how the data looks like to shared task participants.
The treebank is too small to provide for a standard training-development-test split. Instead, users are advised
to merge both files, then jack-knife and report results of ten-fold cross-validation.

## Acknowledgments

Please, cite the following papers if you use Kazakh UD treebank:

<pre>
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
</pre>


# Statistics of UD Kazakh KTB

## POS Tags

[ADJ](kk_ktb-pos-ADJ.html) – [ADP](kk_ktb-pos-ADP.html) – [ADV](kk_ktb-pos-ADV.html) – [AUX](kk_ktb-pos-AUX.html) – [CCONJ](kk_ktb-pos-CCONJ.html) – [DET](kk_ktb-pos-DET.html) – [INTJ](kk_ktb-pos-INTJ.html) – [NOUN](kk_ktb-pos-NOUN.html) – [NUM](kk_ktb-pos-NUM.html) – [PART](kk_ktb-pos-PART.html) – [PRON](kk_ktb-pos-PRON.html) – [PROPN](kk_ktb-pos-PROPN.html) – [PUNCT](kk_ktb-pos-PUNCT.html) – [SCONJ](kk_ktb-pos-SCONJ.html) – [SYM](kk_ktb-pos-SYM.html) – [VERB](kk_ktb-pos-VERB.html) – [X](kk_ktb-pos-X.html)

## Features

[Aspect](kk_ktb-feat-Aspect.html) – [Case](kk_ktb-feat-Case.html) – [Degree](kk_ktb-feat-Degree.html) – [Evident](kk_ktb-feat-Evident.html) – [Gender](kk_ktb-feat-Gender.html) – [Mood](kk_ktb-feat-Mood.html) – [Number](kk_ktb-feat-Number.html) – [Number[psor]](kk_ktb-feat-Number-psor.html) – [NumType](kk_ktb-feat-NumType.html) – [Person](kk_ktb-feat-Person.html) – [Person[psor]](kk_ktb-feat-Person-psor.html) – [Polarity](kk_ktb-feat-Polarity.html) – [Polite](kk_ktb-feat-Polite.html) – [PronType](kk_ktb-feat-PronType.html) – [Reflex](kk_ktb-feat-Reflex.html) – [Tense](kk_ktb-feat-Tense.html) – [VerbForm](kk_ktb-feat-VerbForm.html) – [Voice](kk_ktb-feat-Voice.html)

## Relations

[acl](kk_ktb-dep-acl.html) – [acl:relcl](kk_ktb-dep-acl-relcl.html) – [advcl](kk_ktb-dep-advcl.html) – [advmod](kk_ktb-dep-advmod.html) – [amod](kk_ktb-dep-amod.html) – [appos](kk_ktb-dep-appos.html) – [aux](kk_ktb-dep-aux.html) – [case](kk_ktb-dep-case.html) – [cc](kk_ktb-dep-cc.html) – [ccomp](kk_ktb-dep-ccomp.html) – [clf](kk_ktb-dep-clf.html) – [compound](kk_ktb-dep-compound.html) – [compound:lvc](kk_ktb-dep-compound-lvc.html) – [conj](kk_ktb-dep-conj.html) – [cop](kk_ktb-dep-cop.html) – [csubj](kk_ktb-dep-csubj.html) – [dep](kk_ktb-dep-dep.html) – [det](kk_ktb-dep-det.html) – [discourse](kk_ktb-dep-discourse.html) – [flat:name](kk_ktb-dep-flat-name.html) – [iobj](kk_ktb-dep-iobj.html) – [mark](kk_ktb-dep-mark.html) – [nmod](kk_ktb-dep-nmod.html) – [nmod:poss](kk_ktb-dep-nmod-poss.html) – [nsubj](kk_ktb-dep-nsubj.html) – [nummod](kk_ktb-dep-nummod.html) – [obj](kk_ktb-dep-obj.html) – [obl](kk_ktb-dep-obl.html) – [obl:own](kk_ktb-dep-obl-own.html) – [orphan](kk_ktb-dep-orphan.html) – [parataxis](kk_ktb-dep-parataxis.html) – [punct](kk_ktb-dep-punct.html) – [root](kk_ktb-dep-root.html) – [vocative](kk_ktb-dep-vocative.html) – [xcomp](kk_ktb-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1078 sentences, 10383 tokens and 10536 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 1946 tokens (19%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 15 types of words with spaces. Examples: алсам екен, араласқан жоқ, аңдысам екен, болған емес, болған жоқ, деген екен, естіген жоқ екен, еш нәрсені, келген жоқ, көрген емеспін, оқыған жоқ, сыйлайды екенсің, сыйламайды екенсің, тұрған жоқ, ұшырасқан жоқ</li>
</ul>

<ul>
<li>This corpus contains 96 types of words that contain both letters and punctuation. Examples: ж., М., сондай-ақ, б.з.б., млн., млрд., т.б., -ақ, А., АҚШ-пен, Р., қарым-қатынастарды, 100-ге, 19,4°С-қа, 20-шы, 22%-ы, 2°С-тан, 3-ші, 30-шы, 35-те, 36%-ы, 400-ге, 55-ші, 70%-ін, 80-ге, 90%-ына, 90%-ға, Азық-түлікке, Ата-аналардың, Брютон-стриттегі, Г., Дар-әл-Харб, Деште-Кевир, Деште-Лух, Ел-жұрттарыңыздың, Жауын-шашынның, И., КСРО-дағы, Келе-келе, Кура-Аракс, Көші-қон, Премьер-Министрге, Рио-де-Жанейродағы, С., Сан-Паулуда, Санкт-Петербург, Солтүстік-батысын, Т., Тап-таза, ФИФА-ның</li>
</ul>

<ul>
<li>This corpus contains 153 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 121 types of multi-word tokens. Examples: бар, ешкім, басқа, қуаныштымын, және, Ешкімді, Жасаған-ау, Сондықтан, аласыз, балалы, бола, болғанда, екеуі, ешқандай, жылы, кетті, кімдікі, көрсетер, тағы, Азамат, Баласыз, Бәрі, Дінге, Елсіз, Сүйсем, Төстік, Шолпан, айтшы, алды, алмай, аузымен, ашылса, аң, бала, балалары, басшылары, басын, бизнесі, бойынша, болмаса, болса, біз, білесіз, білмейміз-ау, білсе, бітімді, бұзылады-ау, бөлімде, дайынбыз, дұрыс.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 10 word types tagged as particles (PART): ау, ба, бе, ер, ма, ме, ше, шы, шығар, қой</li>
</ul>

<ul>
<li>This corpus contains 35 lemmas tagged as pronouns (PRON): барлық, барша, біз, бір, бір-бір, бірдеме, біреу, бірқатар, бұл, бәрі, ешкім, ешнәрсе, ештеңе, ешқандай, кім, күллі, манағы, мен, мына, мынау, не, нелік, немене, нәрсе, ол, олар, осы, сен, сол, сіз, сіздер, қандай, қанша, әрбіреу, өз</li>
</ul>

<ul>
<li>This corpus contains 35 lemmas tagged as determiners (DET): ана, анау, барлық, басқа, бір, бірнеше, бірсыпыра, бірталай, бірқатар, бүкіл, бұл, ешбір, ешқандай, кей, кейбір, көп, көптеген, манағы, мына, мұндай, не, ол, осы, осындай, сол, сондай, түрлі, қай, қандай, қанша, әлгі, әлдебір, әр, әртүрлі, өз</li>
</ul>

<ul>
<li>Out of the above, 14 lemmas occurred sometimes as PRON and sometimes as DET: барлық, бір, бірқатар, бұл, ешқандай, манағы, мына, не, ол, осы, сол, қандай, қанша, өз</li>
</ul>

<ul>
<li>This corpus contains 24 lemmas tagged as auxiliaries (AUX): ал, атан, бар, баста, бер, бол, болуға, біл, біт, гөр, е, жат, жібер, жүр, кел, кет, көр, отыр, таста, түс, тұр, шық, қал, қой</li>
</ul>

<ul>
<li>Out of the above, 21 lemmas occurred sometimes as AUX and sometimes as VERB: ал, атан, бар, баста, бер, бол, біл, біт, жат, жібер, жүр, кел, кет, көр, отыр, таста, түс, тұр, шық, қал, қой</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: болып, болса, болмаса, алып, берсек, бола, болсам, болсаң, жатса, жіберіп</li>
    <li>VERB: деп, алып, бастап, барып, Сөйтіп, беріп, болып, қашып, құлап, айналып</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: болды, еді, жатыр, бастады, кетті, емес, келеді, отыр, екен, болады</li>
    <li>VERB: деді, біледі, болды, келді, өтті, береді, шықты, алды, ашылды, болады</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: екенін, болуы, болу, болуға, болғанда, болғанын, алатынына, алмауда, алғаннан, алғаныма</li>
    <li>VERB: алуға, жасау, келгенде, оқу, шешуі, қорғалуға, алу, асыру, атауға, ашылу</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: болып, бола, келе, алмай, бара, боп, отыра, тұра</li>
    <li>VERB: басып, дами, алып, бара, жоспарланып, қарап, ала, бақылап, жаулап, көріп</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: жатқан, болған, отырған, тұрған, алмайтындай, алмаған, болатын, болушы, отыратын, қойған</li>
    <li>VERB: болған, деген, шыққан, туған, түскен, айтарлықтай, айтқан, алған, аталған, билеген</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>NOUN: Елизавета</li>
      <li>PROPN: Айгүл, Шолпан, Елизавета, Айгүлдің, Александра, Алтынай, Ақбала, Мария, Шолпанның, Айгүлден</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>NOUN: Эдуард</li>
      <li>PROPN: Бекболат, Азамат, Нұрсұлтан, Назарбаев, Ерназардың, Азаматтың, Реза, Төстік, Қожа, Азаматты</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

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
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX-Conv: болса, болмаса, болсам, болсаң, жатса, кетпесем</li>
      <li>AUX-Fin: болды, еді, жатыр, емес, кетті, бастады, келеді, отыр, екен, болады</li>
      <li>PRON: мен, ол, оның, сіздің, оны, сені, Сіз, маған, оған, Сен</li>
      <li>VERB-Conv: берсе, десең, жатса, Сүйсем, алмаса, ашылса, барса, болса, білсе, білсең</li>
      <li>VERB-Fin: деді, біледі, болды, өтті, береді, шықты, болады, болыпты, келді, табылады</li>
      <li>VERB-Inf: Тарағысы, айтқым, айтқысы, оқытса, Қарағысы, қайтқысы, қатысқысы, құттықтағым, ұсынғым</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: алыстан, жаңадан, күштіден, көптен, жартысынан</li>
      <li>AUX-Ger: алғаннан, болғандықтан, біткеннен</li>
      <li>NOUN: жылдан, футболдан, Соғыстан, ауылдан, дүниеден, елден, күннен, пендеден, шеттен, ғасырдан</li>
      <li>NUM: бірінен, 2°С-тан, миллионнан, мыңнан, қырықтан</li>
      <li>PRON: одан, онан, содан, Бірінен, Менен, Мұнан, Неліктен, Сізден, осыдан</li>
      <li>PROPN: Азиядан, Астанадан, Германиядан, Сұзыдан, Айгүлден, Төлегеннен</li>
      <li>VERB-Ger: кеткеннен, алмастан, басталғаннан, бақылаудан, жетіспеушілігінен, жолыққаннан, жөндеуден, сөйлегеннен, тұрғызылғандықтан, қорыққаннан</li>
    </ul>
  </li>
</ul>

<ul>
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
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: алысқа, жайға, жылдығына</li>
      <li>AUX-Ger: болуға, алатынына, алғаныма, болғаныма, екеніне, кетпесіне, тұруға, шығуға, қалғанына</li>
      <li>NOUN: жерге, үйге, адамға, жылға, дағдарысқа, дүниеге, елге, пайызға, тысқа, аймаққа</li>
      <li>NUM: 100-ге, 19,4°С-қа, 400-ге, 80-ге, 90%-ына, 90%-ға</li>
      <li>PRON: оған, маған, кімге, саған, Соған, бізге, ешкімге, оларға, сізге, сіздерге</li>
      <li>PROPN: Астанаға, Иранға, Қазақстанға, Арменияға, Бағдадқа, Византияға, Германияға, Семейге, Тибетке, Украинаға</li>
      <li>VERB-Ger: алуға, қорғалуға, атауға, білуге, орнатуға, табуға, тұруға, азапталуға, айналуға, айрылмауға</li>
      <li>VERB-Part: Блоктарға, сездірмеске</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: ақтардың, жаттың, туындының, жылдығының</li>
      <li>NOUN: жылдың, ғасырдың, халықтың, адамның, елдің, Жобаның, ағаштың, еліміздің, қазақтың, қаланың</li>
      <li>NUM: екеуінің</li>
      <li>PRON: біздің, оның, сіздің, олардың, соның, өзінің, менің, мұның, өзіміздің, Аның</li>
      <li>PROPN: Қазақстанның, Иранның, Астананың, Ерназардың, Азаматтың, Азияның, Еуропаның, Айгүлдің, Алматының, Бекболаттың</li>
      <li>VERB-Ger: жүргізудің, тартудың, теңелуінің, тырысуының, қосылудың, қосылуының, әкелудің</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>AUX-Ger: екенімен</li>
      <li>NOUN: сезіммен, Асумен, Жорғалықпенен, Күнмен, Нашақорлықпен, Патшамен, Тәсілмен, абыроймен, ерлікпен, жолмен</li>
      <li>PRON: осымен, Онымен, Сізбен, бір-бірімен, бұлармен, кіммен, немен, соныменен</li>
      <li>PROPN: АҚШ-пен, Ауғанстанмен, Грузиямен, Қазақстанмен, Өзбекстанмен, Назарбаевпен</li>
      <li>VERB-Ger: берумен, болуымен, бояумен, жеумен, кигенмен, оқығанменен, сайлануыңызбен, сорумен, қаруымен, өткізілуімен</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: аулақта, жартысында, Анығында</li>
      <li>AUX-Ger: болғанда, алмауда, жүргенде</li>
      <li>NOUN: елде, ғасырда, түрде, елдегі, кезде, жерде, арасында, кезінде, баспасөзде, бақшада</li>
      <li>NUM: 35-те</li>
      <li>PRON: мұнда, Сізде, осында, өзінде, онда, Бізде, Менде, сонда</li>
      <li>PROPN: Қазақстанда, Астанада, Тегеранда, Қазақстандағы, Алматыда, Бразилияда, Иранда, Азияда, Азиядағы, Америкада</li>
      <li>VERB-Ger: келгенде, салыстырғанда, Сөйткенде, араздасқанда, асқанда, ашқанда, дамуда, дамытуда, дегенде, жүргенде</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: бар, атты, дауысты, жақын, жоқ, жуығы, көп, түркі, Ақтар, баршасы</li>
      <li>ADP: дейінгі, кейінгі</li>
      <li>ADV: қазіргі, соңғы, Арғы, Бүгінгі, Ендігі, Жоғарғы, бергі, биылғы, ежелгі, күндізгі</li>
      <li>AUX-Ger: болуы, болу, болатыны, білу, екені, жатқаны, жүрген, көруіміз, отырғаным, қалған</li>
      <li>DET: не</li>
      <li>NOUN: мемлекет, ел, орыс, қазақ, Президент, адам, бала, кісі, мал, орын</li>
      <li>NUM: бірі, екеуі, 2030, 22%-ы, 27%, 30%, 36%-ы, 5%, 51%, 58,3%</li>
      <li>PRON: біз, мен, ол, бұл, не, кім, олар, өзі, ешкім, бәрі</li>
      <li>PROPN: Иран, Қазақстан, АҚШ, Алматы, Астана, Бекболат, Азамат, Нұрсұлтан, Ұлыбритания, Айгүл</li>
      <li>VERB-Ger: жасау, оқу, шешуі, алу, асыру, ашылу, келген, көрсету, салу, сақтау</li>
      <li>VERB-Part: келген, көбейгені</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: Жақынырақ, анығырақ, арзанырақ, кішірек, тазалау</li>
      <li>ADV: Кейінірек</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Conv: болмаса, кетпесем</li>
      <li>AUX-Fin: емес, алмайды, алмады, алмаймын, алмас, болған емес, болған жоқ, келген жоқ, келмеді, көрме</li>
      <li>AUX-Ger: алмауда, болмасымды, кетпесіне</li>
      <li>AUX-Inf: алмай</li>
      <li>AUX-Part: алмайтындай, алмаған</li>
      <li>VERB-Conv: алаланбай, алмаса, аспай, жемей, жығылмай, келмей, саналмаса, қалдырмай, қорықпай, қылмай</li>
      <li>VERB-Fin: келмейді, болмайды, айтпайды, білмеймін, қылмады, айтылмады, айырмайды, араласпаймын, араласқан жоқ, аяма</li>
      <li>VERB-Ger: айрылмауға, алаланбауы, алмастан, бермеуі, жазылмасын, жетіспеушілігінен, келмеуі, сұғылмауына, қосылмау</li>
      <li>VERB-Inf: ашпай, білінбей, келмей</li>
      <li>VERB-Part: Ашылмайтын, еңсерілмейтін, жатпайтын, оқымаған, сездірмеске, сүймеген, шешілмеген, Қорықпайтын</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Hab
    <ul>
      <li>AUX-Fin: емес, келеді, екен, болады, мын, алмайды, береді, кетеді, тұрады, қалады</li>
      <li>VERB-Fin: біледі, береді, болады, табылады, түседі, тұрады, көрінеді, дейді, келеді, келмейді</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Conv: бола</li>
      <li>AUX-Ger: алатынына, болатыны</li>
      <li>AUX-Inf: бола, келе, алмай, бара, отыра, тұра</li>
      <li>AUX-Part: алмайтындай, болатын, отыратын</li>
      <li>VERB-Conv: қайта, ажарлана, арсыздана, арттыра, жая, мадақтай, тұра, шақыра, қаша</li>
      <li>VERB-Ger: жығатынын, мақтанатыны, табылатынын, әкелетіні, өзгеретінін</li>
      <li>VERB-Inf: дами, бара, ала, отыра, араласа, арта, бере, жете, келе, кіре</li>
      <li>VERB-Part: жейтін, тұратын, Ашылмайтын, Танытатын, асыратын, баратын, болатын, білетін, бұзатын, дайындайтын</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Conv: болып, алып, жіберіп, жүріп, отырып, тұрып</li>
      <li>AUX-Inf: болып, алмай, боп</li>
      <li>VERB-Conv: деп, алып, бастап, барып, Сөйтіп, беріп, болып, қашып, құлап, айналып</li>
      <li>VERB-Inf: басып, алып, жоспарланып, қарап, бақылап, жаулап, көріп, шығып, құрып, беріп</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Conv: болса, болмаса, берсек, болсам, болсаң, жатса, кетпесем</li>
      <li>VERB-Conv: берсе, десең, жатса, Сүйсем, алмаса, ашылса, барса, болса, білсе, білсең</li>
      <li>VERB-Inf: оқытса</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Des
    <ul>
      <li>AUX-Fin: бермек, болмақ</li>
      <li>VERB-Fin: алсам екен, аңдысам екен, кеңейтілмек, көздемек</li>
      <li>VERB-Ger: білмек</li>
      <li>VERB-Inf: Тарағысы, айтқым, айтқысы, Қарағысы, қайтқысы, қатысқысы, құттықтағым, ұсынғым</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: бер, гөр, көрме, қал</li>
      <li>VERB-Fin: алыңыз, же, Аттан, айт, аяма, бер, берме, беріңіз, жасаңыздар, жинаңыз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: болды, еді, жатыр, бастады, кетті, емес, келеді, отыр, екен, болады</li>
      <li>VERB-Fin: деді, біледі, болды, келді, өтті, береді, шықты, алды, ашылды, болады</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>AUX-Fin: болсын, алсын, берсін, болайын, тұрайық, қойсын</li>
      <li>VERB-Fin: білейік, білсін, аяйын, барайын, барсын, берейік, білдірсін, жалынсын, жейік, жисын</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>AUX-Part: болушы</li>
      <li>VERB-Part: айтарлықтай, айтушы, алаңдарлықтай, атқарушы, басқарушы, деуші, жетелеуші, шығарушы, қабылдаушы, қорқушы</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: бермек, алмас, болмақ</li>
      <li>AUX-Ger: болмасымды, кетпесіне</li>
      <li>VERB-Fin: көрсет, барарсың, бүлінер, бәсеңдер, естірсіз, кеңейтілмек, көздемек, көрер, соғармын, суынар</li>
      <li>VERB-Ger: алмастан, білмек, жазылмасын</li>
      <li>VERB-Part: Блоктарға, артар, аяр, дер, сездірмеске</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: болды, еді, бастады, кетті, қалды, алды, болған, келді, алмады, берді</li>
      <li>AUX-Ger: екенін, болғанда, болғанын, алғаннан, алғаныма, болғаныма, болғанымды, біткеннен, екені, екенімен</li>
      <li>AUX-Part: жатқан, болған, отырған, тұрған, алмаған, қойған</li>
      <li>VERB-Fin: деді, болды, келді, өтті, шықты, алды, ашылды, болыпты, құрылды, жойылды</li>
      <li>VERB-Ger: келгенде, біткенді, келген, кеткеннен, ойнағанды, салыстырғанда, Сөйткенде, алғанын, араздасқанда, артқан</li>
      <li>VERB-Part: болған, деген, шыққан, туған, түскен, айтарлықтай, айтқан, алған, аталған, билеген</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: жатыр, емес, келеді, отыр, екен, болады, мын, алмайды, береді, кетеді</li>
      <li>VERB-Fin: біледі, береді, болады, табылады, түседі, тұрады, көрінеді, дейді, келеді, келмейді</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Conv: алаланбай, ажарлана, ашылса, байқалып, басталып, бұзылып, жарияланып, жасалып, жығылмай, расталса</li>
      <li>VERB-Fin: ашылды, табылады, құрылды, жойылды, көрінеді, анықталады, басталды, берілді, жарияланады, жасалады</li>
      <li>VERB-Ger: қорғалуға, ашылу, азапталуға, алаланбауы, асырылуы, аяқталуы, басталуы, басталғаннан, басылуы, білінген</li>
      <li>VERB-Inf: жоспарланып, бөлініп, өткізіліп, басылып, білінбей, бұжырланып, жіберіліп, көрсетіліп, сайланып, салына</li>
      <li>VERB-Part: аталған, кеңейтілген, табылған, Атқарылған, Ашылмайтын, арналған, белгіленген, еңсерілмейтін, жабдықталған, жарияланған</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>VERB-Conv: тартысып, Қиюласып, өлтіріспей</li>
      <li>VERB-Fin: айналысады, араласқан жоқ, байланысты, бөлісеміз, жалғасты, жасасты, келісті, сөйлесерміз, танысты, қатысамын</li>
      <li>VERB-Ger: жетіспеушілігінен, танысқаныма, істесуге, Қалыптасу, қатысуға, әңгімелесуіміз, өлтіріскеніне</li>
      <li>VERB-Inf: айтысып, араласа, соғыса, танысып, қатысқысы, құшақтасып</li>
      <li>VERB-Part: таласқандай, топтасқан</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Fh
    <ul>
      <li>AUX-Fin: екен, болыпты, кетіпті, шығыпты</li>
      <li>VERB-Fin: болыпты, келіпті, деген екен, демепті, елемепті, естіген жоқ екен, жасапты, жиналыпты, кетіпті, сыйлайды екенсің</li>
    </ul>
  </li>
</ul>

<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: осы, бұл, ол, сол, мына, бұ, мұндай, манағы, Анау, Мұнша</li>
      <li>PRON: бұл, ол, мұнда, одан, оны, соның, мұның, олай, оған, бұ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: бір, кейбір, сондай, Кей, Осындай, басқа, түрлі, Әлдебір</li>
      <li>PRON: біреу, Бірінен, бірдеме, біреуге, біреудің, нәрсе, Әрбіреудің</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADJ: қандай</li>
      <li>ADV: қайда, қайдан, қалай, қашан, неге, неліктен, қашанғы</li>
      <li>DET: қай, не, қандай</li>
      <li>PRON: не, кім, қандай, қанша, немене, кімге, Кімді, Неліктен, Неміз, кіммен</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: ешқандай, ешбір</li>
      <li>PRON: ешкім, Ешкімді, ешкімге, ешқандай, Ештеңе, еш нәрсені</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: өз</li>
      <li>PRON: біз, мен, ол, біздің, оның, олар, өзі, сіздің, оны, сені</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: бір-бірімен</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: барлық, әр, бүкіл, бірқатар, көп, көптеген, қанша, бірнеше, Бірталай, бірсыпыра</li>
      <li>PRON: бәрі, барлығы, бәрін, баршаға, бірқатары, күллі</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: бір, екі, миллиард, үш, 12, төрт, сегіз, 1, 4, 5</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Card,Ord
    <ul>
      <li>NUM: бірі, бір, 3, бірдей, млн., мың, 1, 1220, 13, 1380</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Coll
    <ul>
      <li>NUM: екеуі, екеуінің, біреуі, үшеуі</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: 2, үшінші, 1, 11, 18, 19, 20, 12, 14, 16</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: өз</li>
      <li>PRON: өзі, өзінің, өзіміздің, өзінде, өзінше, өздері, өздерінің, өздерің, өзін, өзін-өзі</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Conv: берсек, болсам, кетпесем</li>
      <li>AUX-Fin: мын, жатырмыз, алдым, алмаймын, отырмын, тұрмын, беремін, болайын, болдым, быз</li>
      <li>PRON: біз, мен, біздің, маған, бізді, менің, Мені, бізге, Бізде, Менде</li>
      <li>VERB-Conv: Сүйсем, жатсам, тұрсам</li>
      <li>VERB-Fin: құттықтаймын, айтамыз, алам, білейік, білмеймін, көрдім, ойлаймын, айқындаймыз, алдым, алдық</li>
      <li>VERB-Inf: айтқым, құттықтағым, ұсынғым</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Conv: болсаң</li>
      <li>AUX-Fin: аласыз, бер, гөр, жатырсыздар, келдіңіз, келесіз, көрме, отырсыздар, тұрсыңдар, қал</li>
      <li>PRON: сіздің, сені, Сіз, Сен, Сізде, Сізді, саған, сіздер, Сіздерді, сізге</li>
      <li>VERB-Conv: десең, білсең, салсаң</li>
      <li>VERB-Fin: алыңыз, же, Аттан, айт, айтасың, атасың, аяма, барарсың, бер, берме</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Conv: болса, болмаса, жатса</li>
      <li>AUX-Fin: болды, еді, жатыр, бастады, кетті, емес, келеді, отыр, екен, болады</li>
      <li>PRON: ол, оның, олар, оны, олардың, оған, Аның, одан, оларды, оларға</li>
      <li>VERB-Conv: берсе, жатса, алмаса, ашылса, барса, болса, білсе, жалынса, жыласа, жүрсе</li>
      <li>VERB-Fin: деді, біледі, болды, келді, өтті, береді, шықты, алды, ашылды, болады</li>
      <li>VERB-Inf: Тарағысы, айтқысы, оқытса, Қарағысы, қайтқысы, қатысқысы</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

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


<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Ger: екендіктерін, көруіміз</li>
      <li>NOUN: еліміздің, еліміз, Алдымыз, Дамуымыз, Еліміздегі, Конституциямызды, Отанымыз, азаматтарымыз, алғысымызды, аспанымыз</li>
      <li>PRON: өзіміздің, өздері, Неміз, өздерінің, өздерің</li>
      <li>VERB-Ger: кездесуіміз, әңгімелесуіміз, өлуіміз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur,Sing
    <ul>
      <li>ADJ: жартысында, жуығы, Анығында, Солтүстік-батысын, Турасын, баршаларын, баршасы, жартысынан, жылдығына, жылдығының</li>
      <li>AUX-Ger: екенін, болуы, болғанын, алатынына, болатыны, екені, екенімен, екеніне, жатқаны, жатқанын</li>
      <li>NOUN: басшысы, жылы, әулеті, тілдерін, арасында, кезінде, халқы, Президенті, мемлекеті, ішінде</li>
      <li>NUM: бірі, екеуі, екеуінің, бірінен, 22%-ы, 36%-ы, 70%-ін, 90%-ына, Бірін, біреуі</li>
      <li>PRON: өзі, бәрі, өзінің, өзінде, өзінше, барлығы, бәрін, Бірінен, Онысы, бір-бірімен</li>
      <li>PROPN: Алашордасының, Арабиясының</li>
      <li>VERB-Ger: шешуі, алаланбауы, алуы, алғанын, асырылуы, атқаруы, аяқталуы, басталуы, басылуы, бермеуі</li>
      <li>VERB-Part: көбейгені</li>
    </ul>
  </li>
</ul>

<ul>
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

<h3>Other Features</h3>


<ul>
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
          <li>ADJ: жартысында, жуығы, Анығында, Солтүстік-батысын, Турасын, баршаларын, баршасы, жартысынан, жылдығына, жылдығының</li>
          <li>AUX-Ger: екенін, болуы, болғанын, алатынына, болатыны, екендіктерін, екені, екенімен, екеніне, жатқаны</li>
          <li>NOUN: басшысы, жылы, әулеті, тілдерін, арасында, кезінде, халқы, Президенті, мемлекеті, ішінде</li>
          <li>NUM: бірі, екеуі, екеуінің, бірінен, 22%-ы, 36%-ы, 70%-ін, 90%-ына, Бірін, біреуі</li>
          <li>PRON: өзі, бәрі, өзінің, өзінде, өзінше, барлығы, бәрін, өздері, Бірінен, Онысы</li>
          <li>PROPN: Алашордасының, Арабиясының</li>
          <li>VERB-Ger: шешуі, алаланбауы, алуы, алғанын, асырылуы, атқаруы, аяқталуы, басталуы, басылуы, бермеуі</li>
          <li>VERB-Part: көбейгені</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 5 lemmas as copulas (<a>cop</a>). Examples: бол, е, тұр, атан, болуға.</li>
</ul>

<ul>
<li>This corpus uses 21 lemmas as auxiliaries (<a>aux</a>). Examples: жат, ал, отыр, кел, кет, тұр, баста, бер, қал, жүр, шық, бар, бол, көр, жібер, түс, қой, біл, біт, гөр, таста.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Conv--NOUN-Nom (37)</li>
      <li>VERB-Conv--PRON-Dat (1)</li>
      <li>VERB-Conv--PRON-Nom (8)</li>
      <li>VERB-Fin--NOUN (4)</li>
      <li>VERB-Fin--NOUN-Nom (288)</li>
      <li>VERB-Fin--PRON-Nom (84)</li>
      <li>VERB-Ger--NOUN-Gen (17)</li>
      <li>VERB-Ger--NOUN-Nom (29)</li>
      <li>VERB-Ger--PRON-Gen (7)</li>
      <li>VERB-Ger--PRON-Nom (10)</li>
      <li>VERB-Inf--NOUN-Nom (72)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Inf--PRON-Nom (37)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--NOUN-Nom (24)</li>
      <li>VERB-Part--PRON-Nom (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN-Acc (27)</li>
      <li>VERB-Conv--NOUN-Nom (25)</li>
      <li>VERB-Conv--PRON-Acc (4)</li>
      <li>VERB-Conv--PRON-Nom (3)</li>
      <li>VERB-Fin--NOUN-Acc (106)</li>
      <li>VERB-Fin--NOUN-Dat (7)</li>
      <li>VERB-Fin--NOUN-Nom (82)</li>
      <li>VERB-Fin--PRON-Acc (31)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Fin--PRON-Nom (3)</li>
      <li>VERB-Ger--NOUN-Acc (55)</li>
      <li>VERB-Ger--NOUN-Dat (2)</li>
      <li>VERB-Ger--NOUN-Nom (44)</li>
      <li>VERB-Ger--PRON-Acc (8)</li>
      <li>VERB-Ger--PRON-Dat (1)</li>
      <li>VERB-Inf--NOUN-Acc (34)</li>
      <li>VERB-Inf--NOUN-Dat (2)</li>
      <li>VERB-Inf--NOUN-Nom (19)</li>
      <li>VERB-Inf--PRON-Acc (5)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
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
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--NOUN-Dat (1)</li>
      <li>VERB-Ger--NOUN-Abl (1)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 2 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: басқар өзін-өзі, әкел өзін</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>compound:lvc</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>obl:own</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>fixed</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
