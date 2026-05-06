---
layout: base
title:  'UD_Ukrainian-ParlaMint'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Ukrainian ParlaMint

Language: [Ukrainian](/uk/index.html) (code: `uk`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.15 release.

The following people have contributed to making this treebank part of UD: Maria Shvedova, Arsenii Lukashevskyi.

Repository: [UD_Ukrainian-ParlaMint](https://github.com/UniversalDependencies/UD_Ukrainian-ParlaMint)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uduk_parlamint218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-SA 4.0

Genre: government, legal, spoken

Questions, comments?
General annotation questions (either Ukrainian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Ukrainian-ParlaMint/issues).
If you want to collaborate, please contact [corpus&nbsp;•&nbsp;textiv&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

UD_Ukrainian-ParlaMint is a collection of Ukrainian parliamentary transcripts annotated in Universal Dependencies. The texts are published on the official website of the Ukrainian parliament (https://www.rada.gov.ua/documents/Stenbul_pz/) and are taken for UD_Ukrainian-ParlaMint from the Ukrainian section of the ParlaMint project (https://www.clarin.eu/parlamint).




The corpus consists of Ukrainian parliamentary plenary session transcripts, with morphological and syntactic annotation checked manually. It contains transcripts of political meetings from 2003 to 2022 from the Ukrainian ParlaMint corpus (Kopp et al., 2023) and other open sources.
For the corpus, we selected full transcripts of Verkhovna Rada plenary sessions for several days (2003-2022) and one transcript of the National Security and Defense Council meeting (2014). The transcripts provide a fairly accurate record of real speech, preserving elements of colloquial syntax, grammatical inconsistencies, lexical errors, and Ukrainian-Russian code switching. To have the most authentic material, we did not use texts from before 2003, where partial grammatical corrections were observed, nor texts from after 2023, which show signs of excessive normalization due to speech-to-text recognition programs (e.g., replacing vernacular words like щас with зараз, 'now'). We also removed text containing Ukrainian-Russian code switching and some sentences in Russian. The selected sessions are those related to important events in modern Ukrainian history, characterized by a larger share of spontaneous speech, while also including samples of routine parliamentary sessions during which regular laws were considered.


## Acknowledgments

Syntactic annotation of the corpus is implemented on the basis of UD_Ukrainian-IU with manual correction. For morphological annotation, we used VESUM morphological dictionary (https://github.com/brown-uk/dict_uk/tree/master) and UD_Ukrainian-IU with manual correction.

This work was supported by COST Action CA21167 — Universality, diversity and idiosyncrasy in language technology ([UniDive](https://unidive.lisn.upsaclay.fr/))

## References

* Kopp, Matyáš; Kryvenko, Anna and Rii, Andriana, 2023, Ukrainian parliamentary corpus ParlaMint-UA 4.0.1, Slovenian language resource repository CLARIN.SI, ISSN 2820-4042, http://hdl.handle.net/11356/1900.
* Tomaž Erjavec, Maciej Ogrodniczuk, Petya Osenova, Nikola Ljubešić, Kiril Simov, Andrej Pančur, Michał Rudolf, Matyáš Kopp, Starkaður Barkarson Steinþór Steingrímsson, Çağrı Çöltekin, Jesse de Does, Katrien Depuydt, Tommaso Agnoloni, Giulia Venturi, María Calzada Pérez, Luciana D. de Macedo, Costanza Navarretta, Giancarlo Luxardo, Matthew Coole, Paul Rayson, Vaidas Morkevičius, Tomas Krilavičius, Roberts Darģis, Orsolya Ring, Ruben van Heusden, Maarten Marx, and Darja Fišer. 2022. The ParlaMint corpora of parliamentary proceedings. In “Language Resources and Evaluation”, https://doi.org/10.1007/s10579-021-09574-0



# Statistics of UD Ukrainian ParlaMint

## POS Tags

[ADJ](uk_parlamint-pos-ADJ.html) – [ADP](uk_parlamint-pos-ADP.html) – [ADV](uk_parlamint-pos-ADV.html) – [AUX](uk_parlamint-pos-AUX.html) – [CCONJ](uk_parlamint-pos-CCONJ.html) – [DET](uk_parlamint-pos-DET.html) – [INTJ](uk_parlamint-pos-INTJ.html) – [NOUN](uk_parlamint-pos-NOUN.html) – [NUM](uk_parlamint-pos-NUM.html) – [PART](uk_parlamint-pos-PART.html) – [PRON](uk_parlamint-pos-PRON.html) – [PROPN](uk_parlamint-pos-PROPN.html) – [PUNCT](uk_parlamint-pos-PUNCT.html) – [SCONJ](uk_parlamint-pos-SCONJ.html) – [VERB](uk_parlamint-pos-VERB.html) – [X](uk_parlamint-pos-X.html)

## Features

[Abbr](uk_parlamint-feat-Abbr.html) – [Animacy](uk_parlamint-feat-Animacy.html) – [Animacy[gram]](uk_parlamint-feat-Animacy-gram.html) – [Aspect](uk_parlamint-feat-Aspect.html) – [BadStyle](uk_parlamint-feat-BadStyle.html) – [Case](uk_parlamint-feat-Case.html) – [Degree](uk_parlamint-feat-Degree.html) – [ExtPos](uk_parlamint-feat-ExtPos.html) – [Foreign](uk_parlamint-feat-Foreign.html) – [Gender](uk_parlamint-feat-Gender.html) – [InflClass](uk_parlamint-feat-InflClass.html) – [Mood](uk_parlamint-feat-Mood.html) – [NameType](uk_parlamint-feat-NameType.html) – [Number](uk_parlamint-feat-Number.html) – [NumType](uk_parlamint-feat-NumType.html) – [Orth](uk_parlamint-feat-Orth.html) – [Person](uk_parlamint-feat-Person.html) – [Polarity](uk_parlamint-feat-Polarity.html) – [Polite](uk_parlamint-feat-Polite.html) – [Poss](uk_parlamint-feat-Poss.html) – [PronType](uk_parlamint-feat-PronType.html) – [Reflex](uk_parlamint-feat-Reflex.html) – [Style](uk_parlamint-feat-Style.html) – [Tense](uk_parlamint-feat-Tense.html) – [Typo](uk_parlamint-feat-Typo.html) – [Uninflect](uk_parlamint-feat-Uninflect.html) – [Variant](uk_parlamint-feat-Variant.html) – [VerbForm](uk_parlamint-feat-VerbForm.html) – [Voice](uk_parlamint-feat-Voice.html)

## Relations

[acl](uk_parlamint-dep-acl.html) – [acl:relcl](uk_parlamint-dep-acl-relcl.html) – [advcl](uk_parlamint-dep-advcl.html) – [advmod](uk_parlamint-dep-advmod.html) – [advmod:det](uk_parlamint-dep-advmod-det.html) – [advmod:emph](uk_parlamint-dep-advmod-emph.html) – [advmod:neg](uk_parlamint-dep-advmod-neg.html) – [amod](uk_parlamint-dep-amod.html) – [appos](uk_parlamint-dep-appos.html) – [aux](uk_parlamint-dep-aux.html) – [aux:pass](uk_parlamint-dep-aux-pass.html) – [case](uk_parlamint-dep-case.html) – [cc](uk_parlamint-dep-cc.html) – [ccomp](uk_parlamint-dep-ccomp.html) – [compound](uk_parlamint-dep-compound.html) – [compound:svc](uk_parlamint-dep-compound-svc.html) – [conj](uk_parlamint-dep-conj.html) – [cop](uk_parlamint-dep-cop.html) – [csubj](uk_parlamint-dep-csubj.html) – [det](uk_parlamint-dep-det.html) – [det:numgov](uk_parlamint-dep-det-numgov.html) – [det:nummod](uk_parlamint-dep-det-nummod.html) – [discourse](uk_parlamint-dep-discourse.html) – [dislocated](uk_parlamint-dep-dislocated.html) – [expl](uk_parlamint-dep-expl.html) – [fixed](uk_parlamint-dep-fixed.html) – [flat](uk_parlamint-dep-flat.html) – [flat:foreign](uk_parlamint-dep-flat-foreign.html) – [flat:name](uk_parlamint-dep-flat-name.html) – [flat:range](uk_parlamint-dep-flat-range.html) – [flat:repeat](uk_parlamint-dep-flat-repeat.html) – [flat:title](uk_parlamint-dep-flat-title.html) – [goeswith](uk_parlamint-dep-goeswith.html) – [iobj](uk_parlamint-dep-iobj.html) – [list](uk_parlamint-dep-list.html) – [mark](uk_parlamint-dep-mark.html) – [nmod](uk_parlamint-dep-nmod.html) – [nsubj](uk_parlamint-dep-nsubj.html) – [nsubj:outer](uk_parlamint-dep-nsubj-outer.html) – [nsubj:pass](uk_parlamint-dep-nsubj-pass.html) – [nummod](uk_parlamint-dep-nummod.html) – [nummod:gov](uk_parlamint-dep-nummod-gov.html) – [obj](uk_parlamint-dep-obj.html) – [obl](uk_parlamint-dep-obl.html) – [obl:agent](uk_parlamint-dep-obl-agent.html) – [obl:arg](uk_parlamint-dep-obl-arg.html) – [orphan](uk_parlamint-dep-orphan.html) – [parataxis](uk_parlamint-dep-parataxis.html) – [parataxis:discourse](uk_parlamint-dep-parataxis-discourse.html) – [parataxis:rel](uk_parlamint-dep-parataxis-rel.html) – [punct](uk_parlamint-dep-punct.html) – [reparandum](uk_parlamint-dep-reparandum.html) – [root](uk_parlamint-dep-root.html) – [vocative](uk_parlamint-dep-vocative.html) – [xcomp](uk_parlamint-dep-xcomp.html) – [xcomp:pred](uk_parlamint-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 7142 sentences and 109166 tokens.</li>
</ul>

<ul>
<li>This corpus contains 18512 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 1 types of words with spaces. Examples: 900 000</li>
</ul>

<ul>
<li>This corpus contains 423 types of words that contain both letters and punctuation. Examples: зв'язку, житлово-комунального, житлово-комунальні, об'єднання, по-перше, все-таки, об'єктів, здоров'я, обов'язково, по-друге, будь-які, будь-яких, обов'язки, житлово-комунальних, осінньо-зимовий, СДПУ(о), пов'язані, млн., п'ять, пов'язаної, соціал-демократичної, В'ячеслав, Об'єднаних, По-третє, Прем'єр-міністр, дев'ятого, обов'язків, техніко-юридичними, тис., 6055-П, будь-якого, будь-якої, врешті-решт, житлово-комунальному, зобов'язання, об'єкти, розв'язання, сім'ї, українсько-російського, 21-го, 36-а, В'ячеслава, Прем'єр-міністра, військово-морських, експрес-відправленнях, з'ясування, зобов'язані, матеріально-технічної, об'єднати, об'єктах</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 55 word types tagged as particles (PART): Но, Нічого, Отож, Правда, а, аж, б, би, бодай, буцімто, власне, вряд, все, все-таки, всього, да, ж, же, завгодно, й, лише, мовляв, може, навіть, начебто, не, невже, нехай, ну, ні, ніби, нібито, ось, от, отже, просто, саме, собі, так, таки, там, то, тощо, тільки, хай, хоч, хоча, хіба, це, чи, ще, що, щось, якраз, і</li>
</ul>

<ul>
<li>This corpus contains 38 lemmas tagged as pronouns (PRON): будь-хто, весь, ви, вона, вони, воно, все, всі, він, дехто, кожний, ми, ніхто, ніщо, один, одне, оце, оцей, сам, себе, таке, такий, те, ти, той, усі, хто, хтось, це, цей, що, щось, я, як, який, інше, інший, їх</li>
</ul>

<ul>
<li>This corpus contains 50 lemmas tagged as determiners (DET): багато, будь-чий, будь-який, ваш, весь, все, всякий, всі, всілякий, декілька, деякий, другий, жодний, його, кожний, котрий, кілька, мій, наш, ніякий, один, отакий, отой, оцей, сам, самий, само, свій, сей, скільки, стільки, такий, те, той, тот, увесь, усякий, це, цей, чийсь, який, який-небудь, якийсь, якість, інакший, інше, інший, їх, їхній, її</li>
</ul>

<ul>
<li>Out of the above, 16 lemmas occurred sometimes as PRON and sometimes as DET: весь, все, всі, кожний, один, оцей, сам, такий, те, той, це, цей, який, інше, інший, їх</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as auxiliaries (AUX): б, би, бувати, бути</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as AUX and sometimes as VERB: бувати, бути</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: враховуючи, виходячи, зважаючи, керуючись, починаючи, кажучи, користуючись, розуміючи, використовуючи, маючи</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: буде, є, будемо, було, будуть, були, була, був, буду, будете</li>
    <li>VERB: будь, дякую, прошу, є, хочу, давайте, маємо, має, думаю, прийнято</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: бути</li>
    <li>VERB: голосувати, сказати, прийняти, зробити, підтримати, приймати, говорити, передати, забезпечити, проголосувати</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: даний, скороченою, прийнятий, передбачені, переконаний, прийнята, прийняті, внесений, впевнений, відхилена</li>
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
      <li>ADJ: Верховної, Верховна, російської, політичної, національної, державної, верховній, повинна, української, російською</li>
      <li>ADJ-Part: скороченою, прийнята, відхилена, існуючої, пов'язаної, зазначеної, автоматизованої, затверджена, надана, передбачена</li>
      <li>AUX-Fin: була</li>
      <li>DET: яка, цю, цієї, наша, нашої, ця, яку, свою, цій, нашу</li>
      <li>NOUN: ласка, ради, фракція, постанови, рада, комісії, влади, партії, увагу, змін</li>
      <li>NUM: одну, одна, дві, двох, однієї, 2, однією, 1, двома, 1,5—2</li>
      <li>PRON: вона, її, яка, яку, неї, нею, якої, якій, їй, сама</li>
      <li>PROPN: України, Україні, Україна, Росії, Україну, Батьківщина, Тимошенко, Росія, Тузла, Україною</li>
      <li>VERB-Fin: була, склалася, стала, мала, відбулася, прийняла, виникла, запропонувала, могла, хотіла</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>NOUN: колеги, суддів, колег, Слуга, колегами, судді, колегам, слуги, голови, голів</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: шановний, народний, реєстраційний, народного, народному, 2004, денного, наступний, державного, другий</li>
      <li>ADJ-Part: даний, прийнятий, переконаний, внесений, впевнений, минулого, даному, вичерпаний, даного, спрямований</li>
      <li>AUX-Fin: був</li>
      <li>DET: який, цей, цього, цьому, наш, той, такий, таким, нашого, весь</li>
      <li>NOUN: закону, депутати, президента, проект, час, року, закон, депутатів, законопроект, комітету</li>
      <li>NUM: один, два, 1, двох, 2, одним, одного, одному, півтора, 2-3</li>
      <li>PRON: він, хто, його, який, нього, один, одного, йому, ним, кого</li>
      <li>PROPN: Криму, Михайловичу, Володимире, Олександр, Іванович, Володимир, Крим, Михайло, Сергій, Михайлович</li>
      <li>VERB-Fin: хотів, сказав, просив, був, прийняв, говорив, дав, мав, пропонував, вніс</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: друге, 1, житлово-комунального, місцевого, повторного, першому, наступне, другого, другому, перше</li>
      <li>ADJ-Part: прийняте, відкритим, закритим, зважене, інтегрованого, гарантоване, даного, Зазначене, Командуючим, Сполученого</li>
      <li>AUX: було</li>
      <li>AUX-Fin: було</li>
      <li>DET: це, цього, тому, таке, яке, все, наше, своє, його, такого</li>
      <li>NOUN: питання, рішення, голосування, слово, питань, прийняття, внесення, цілому, права, проведення</li>
      <li>NUM: одне, два, одним, двох, одного</li>
      <li>PRON: це, того, те, що, цього, все, тим, тому, цим, цьому</li>
      <li>PROPN: НАТО, Мінпаливенерго, Сочі, Ватутіно, ГРУ, Динамо, Закарпаття, Закарпатті, Запоріжжя, Мукачево</li>
      <li>VERB-Fin: було, відбулося, залишилося, стало, сталося, відбувалося, загинуло, вдалося, виникло, дало</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADJ: народних, західних, Північно-кавказського, адресного, бухих, висококласних, виступаючий, власного, других, ефективних</li>
      <li>ADJ-Part: виступаючий</li>
      <li>DET: всіх, наших, тих, своїх, якого, кожного, одного, усіх, яких, іншого</li>
      <li>NOUN: колеги, депутати, президента, депутатів, людей, міністрів, депутат, комуністів, депутата, пане</li>
      <li>NUM: трьох</li>
      <li>PRON: ми, я, ви, нас, вас, нам, хто, вам, мене, вами</li>
      <li>PROPN: Михайловичу, Володимире, Олександр, Іванович, Володимир, Михайло, Сергій, Михайлович, Симоненко, Тимошенко</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Anim,Inan
    <ul>
      <li>PRON: їх</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: сьогоднішній, житлово-комунальні, даний, денний, політичні, відповідні, державний, наступний, останні, перший</li>
      <li>ADJ-Part: даний, спожиті, виважені, вказаний, встановлені, зазначений, звані, визначений, виступаючі, вказані</li>
      <li>DET: цей, свої, всі, які, ці, який, ті, той, наш, такі</li>
      <li>NOUN: ласка, питання, рішення, ради, закону, голосування, фракція, слово, проект, час</li>
      <li>NUM: один, 2, один-єдиний</li>
      <li>PRON: це, того, те, що, все, цього, тим, тому, цим, цьому</li>
      <li>PROPN: України, Україні, Україна, Криму, Росії, Україну, Батьківщина, Крим, Голос, Києві</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: шановні, народні, повинні, народних, готові, політичні, політичних, корисних, збройних, закордонних</li>
      <li>ADJ-Part: передбачені, прийняті, пов'язані, Сполучених, населених, Об'єднаних, враховані, визначені, внесені, спрямовані</li>
      <li>AUX-Fin: будемо, будуть, були, є, будете, будем</li>
      <li>DET: які, всі, всіх, ці, тих, ті, наших, свої, інших, цих</li>
      <li>NOUN: колеги, депутати, депутатів, питань, змін, людей, міністрів, відсотків, комуністів, років</li>
      <li>NUM: одні, обох, 2, 2,5, млн., тис., 1, 2,3, 2,7, 336-ма</li>
      <li>PRON: ми, ви, нас, вони, нам, вас, їх, які, вам, вами</li>
      <li>PROPN: Гетманцев, РСР</li>
      <li>VERB-Fin: давайте, маємо, є, мають, можемо, знаєте, переходимо, можуть, відбулися, мали</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ptan
    <ul>
      <li>DET: будь</li>
      <li>NOUN: вибори, виборів, кошти, коштів, надр, відносин, гроші, переговори, надра, переговорів</li>
      <li>PRON: ви, вас, вам, вами</li>
      <li>PROPN: Афінах, Демініціативи, США, Афін, ВМСУ, Карпатах, Черкас, Черкасах</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: Верховної, шановний, Верховна, російської, народний, політичної, реєстраційний, національної, народного, державної</li>
      <li>ADJ-Part: даний, скороченою, прийнятий, переконаний, прийнята, внесений, впевнений, відхилена, минулого, даному</li>
      <li>AUX: буде, є, було, була, був, буду, буває, будь</li>
      <li>AUX-Fin: буде, є, було, була, був, буду, буває, будь</li>
      <li>DET: цього, який, цей, яка, цю, це, цієї, наша, нашої, цьому</li>
      <li>NOUN: ласка, питання, рішення, ради, закону, голосування, фракція, слово, президента, проект</li>
      <li>NUM: один, одну, одна, одне, 1, одним, однієї, одного, однією, одному</li>
      <li>PRON: я, це, того, те, що, він, хто, вона, цього, все</li>
      <li>PROPN: України, Україні, Україна, Криму, Михайловичу, Володимире, Росії, Олександр, Україну, Іванович</li>
      <li>VERB-Fin: будь, дякую, прошу, є, хочу, має, думаю, може, ставлю, хотів</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: народних, першу, сьогоднішній, житлово-комунальні, політичну, даний, денний, політичні, Верховну, відповідні</li>
      <li>ADJ-Part: даний, зважене, спожиті, виважені, вказаний, встановлені, гарантоване, дану, зазначений, звані</li>
      <li>ADP: на, про, за, в, у, через, під, по, понад, попри</li>
      <li>DET: цю, цей, це, свої, всі, які, ці, яку, свою, який</li>
      <li>NOUN: рішення, питання, час, голосування, раз, слово, увагу, проект, внесення, основу</li>
      <li>NUM: одну, один, два, три, 3, 100, 2, 20, дві, одне</li>
      <li>PRON: це, те, вас, що, його, їх, все, її, нас, себе</li>
      <li>PROPN: Україну, Сергія, Росію, Володимировича, Київ, Крим, Івановича, Анатолійовича, Анатолія, Бориспіль</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: народному, Верховній, народній, народним, територіальній, українській, Центральній, генеральному, міжнародним, Російській</li>
      <li>ADJ-Part: вжитим, визначеним, виконуючому, виявленим, відокремленим, постраждалим, існуючій</li>
      <li>ADP: завдяки, назустріч</li>
      <li>DET: всім, нашим, тим, іншим, кожному, нашій, вашій, одному, цим, тій</li>
      <li>NOUN: депутату, раді, голові, Президенту, Міністерству, людям, комісії, депутатам, депутатці, комітету</li>
      <li>NUM: двом-трьом</li>
      <li>PRON: нам, вам, мені, їм, собі, всім, йому, кому, нікому, тому</li>
      <li>PROPN: Україні, Олександру, Івановичу, Михайловичу, Нестору, Петру, Роману, Симоненку, Віталійовичу, Зваричу</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat,Gen
    <ul>
      <li>NOUN: країни, незалежності</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: Верховної, російської, політичної, національної, державної, народних, народного, українського, державного, української</li>
      <li>ADJ-Part: минулого, існуючої, даного, пов'язаної, Об'єднаних, Сполучених, зазначеної, автоматизованої, званих, населених</li>
      <li>ADP: до, з, для, щодо, від, у, після, проти, із, без</li>
      <li>DET: цього, цієї, нашої, тих, всіх, наших, інших, цих, нашого, своїх</li>
      <li>NOUN: ради, закону, президента, року, постанови, питань, комітету, питання, влади, партії</li>
      <li>NUM: двох, 5, однієї, трьох, обох, одного, 1, 15, 200, 30</li>
      <li>PRON: того, нас, цього, вас, мене, них, їх, нічого, нього, чого</li>
      <li>PROPN: України, Росії, Криму, Тимошенко, Віктора, Януковича, Путіна, Юлії, Ющенка, Європи</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: російською, Верховною, скороченою, недійсними, українською, найближчим, повною, відповідними, масовими, важливим</li>
      <li>ADJ-Part: скороченою, відкритим, внесеними, закритим, децентралізованою, керуючими, концентрованим, новообраним, переодягненими, поданою</li>
      <li>ADP: з, за, із, перед, під, між, над, зі, поза, всупереч</li>
      <li>DET: таким, нашими, цим, тими, усіма, яким, іншими, своїми, цією, якою</li>
      <li>NOUN: законом, метою, чином, урахуванням, мовою, радою, урядом, процедурою, комітетом, станом</li>
      <li>NUM: одним, однією, двома, 336-ма</li>
      <li>PRON: тим, вами, цим, такими, нами, собою, ним, нею, мною, ними</li>
      <li>PROPN: Україною, Росією, Януковичем, Віктором, Кримом, Федоровичем, Іваном, Андрієм, Байденом, Беркутом</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: першому, Керченській, другому, верховній, Автономній, 2004, минулому, даному, Погоджувальній, денному</li>
      <li>ADJ-Part: даному, наданих, населених, прийнятому, Сполучених, визначеному, діючій, задекларованій, зазначених, зазначеному</li>
      <li>ADP: в, у, на, по, при, о, з, об</li>
      <li>DET: цьому, тому, цій, нашій, всіх, якому, своєму, яких, цих, всій</li>
      <li>NOUN: цілому, році, зв'язку, числі, залі, раді, країні, читанні, місті, сфері</li>
      <li>NUM: двох, одному, 12, 12-ти, 14-ти, 16, 17-ти, багатьох, двадцять, одній</li>
      <li>PRON: тому, цьому, собі, чому, них, ньому, якій, тім, яких, всіх</li>
      <li>PROPN: Україні, Криму, Києві, Сіднеї, Росії, Львові, Одесі, Європі, Афінах, Сході</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: повинні, Верховна, готові, народний, реєстраційний, повинна, друге, повинен, депутатська, наступний</li>
      <li>ADJ-Part: прийнятий, переконаний, передбачені, прийнята, прийняті, внесений, впевнений, відхилена, пов'язані, враховані</li>
      <li>DET: які, яка, який, всі, наша, ця, цей, ці, ті, таке</li>
      <li>NOUN: ласка, фракція, питання, рада, проект, закон, номер, слово, депутат, партія</li>
      <li>NUM: два, 3, один, одна, три, 1, 20, 15, 0, 5</li>
      <li>PRON: ми, я, це, ви, вони, хто, він, вона, що, які</li>
      <li>PROPN: Україна, Олександр, Іванович, Батьківщина, Володимир, Михайло, Крим, Сергій, Михайлович, Симоненко</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: шановні, народні, шановний, дорогі, вельмишановний, дорогий, присутні, український, шановне, головуючий</li>
      <li>ADJ-Part: головуючий, запрошені, шановані</li>
      <li>DET: всі, мої, наші</li>
      <li>NOUN: колеги, депутати, пане, Голово, друзі, громадяни, українці, члени, головуючий, радіослухачі</li>
      <li>PROPN: Михайловичу, Володимире, Олександре, Валентиновичу, Вікторе, Павловичу, Федоровичу, Миколо, Сергію, Івановичу</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Abs
    <ul>
      <li>ADV: якнайшвидше, щонайбільше</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: вищих, вищої, Вища, більша, Вищого, ближчим, більший, важливіше, вищий, вищим</li>
      <li>ADV: більше, далі, краще, більш, менше, раніше, пізніше, точніше, швидше, вище</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: шановні, шановний, корисних, відповідні, відповідних, нові, останні, новий, нового, останніх</li>
      <li>ADJ-Part: впевнений, відкритим, впевнена, закритим, керованої, обгрунтовану, обмежений, обмежені, виважений, визначений</li>
      <li>ADV: дуже, потрібно, необхідно, практично, добре, чітко, важливо, звичайно, багато, зрозуміло</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: найближчим, найгіршого, найкращих, Найбільше, найважливіше, найсильніших, Найвідоміші, Найдоцільніше, всеохоплюючою, найбагатших</li>
      <li>ADV: найбільш, найбільше, найчастіше, найкраще, найперше, найменш</li>
      <li>NOUN: найважливішого</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: немає, нема, незважаючи, нікуди</li>
      <li>CCONJ: ні, ані</li>
      <li>INTJ: ні</li>
      <li>PART: не, ні</li>
      <li>VERB-Fin: немає, нема, має</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADJ: повинен, потрібен, згоден, винен, здатен</li>
      <li>ADV: більш, найбільш, перш, менш, найменш</li>
      <li>DET: кожен, жоден</li>
      <li>PRON: кожен</li>
      <li>VERB-Inf: сказать, передать, голосувать</li>
    </ul>
  </li>
</ul>

<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>ADJ-Part: існуючої, діючий, званих, звані, виконуючий, виступаючий, виступаючого, головуючий, діюча, діючої</li>
      <li>AUX: буде, є, будемо, бути, було, будуть, були, була, був, буду</li>
      <li>AUX-Fin: буде, є, будемо, було, будуть, були, була, був, буду, будете</li>
      <li>AUX-Inf: бути</li>
      <li>VERB-Conv: враховуючи, виходячи, зважаючи, керуючись, починаючи, кажучи, користуючись, розуміючи, використовуючи, маючи</li>
      <li>VERB-Fin: будь, дякую, прошу, є, хочу, давайте, маємо, має, думаю, може</li>
      <li>VERB-Inf: голосувати, приймати, говорити, робити, працювати, мати, захищати, ставити, вважати, виступати</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>ADJ-Part: даний, скороченою, прийнятий, передбачені, переконаний, прийнята, прийняті, внесений, впевнений, відхилена</li>
      <li>VERB-Conv: прийнявши, узгодивши, передбачивши, Вислухавши, висловивши, врахувавши, відмовившись, зайнявши, зайшовши, запровадивши</li>
      <li>VERB-Fin: прийнято, сказав, відбулися, включіть, скажу, приймемо, дайте, запишіться, заспокойтеся, прийняли</li>
      <li>VERB-Inf: сказати, прийняти, зробити, підтримати, передати, забезпечити, проголосувати, визнати, внести, провести</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: би, б</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: будь</li>
      <li>VERB-Fin: будь, давайте, включіть, дайте, запишіться, заспокойтеся, скажіть, дозвольте, подивіться, вибачте</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: буде, є, будемо, було, будуть, були, була, був, буду, будете</li>
      <li>AUX-Fin: буде, є, будемо, було, будуть, були, була, був, буду, будете</li>
      <li>VERB-Fin: дякую, прошу, є, хочу, маємо, має, думаю, прийнято, може, ставлю</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: буде, будемо, будуть, буду, будете, будем</li>
      <li>VERB-Fin: буде, скажу, приймемо, зачитаю, підемо, дасть, проголосуємо, вдасться, зробимо, дам</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: було, були, була, був</li>
      <li>AUX-Fin: було, були, була, був</li>
      <li>VERB-Conv: прийнявши, узгодивши, передбачивши, Вислухавши, висловивши, врахувавши, відмовившись, голосувавши, зайнявши, зайшовши</li>
      <li>VERB-Fin: хотів, було, сказав, відбулися, мали, просив, прийняли, могли, була, говорили</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: діючий, виконуючий, головуючий, керуючими, контролюючих, підбурюючих, Перевіряючих, блокуючих, виконуючого, виступаючий</li>
      <li>AUX-Fin: є, буває</li>
      <li>NOUN: виступаючих</li>
      <li>VERB-Conv: враховуючи, виходячи, зважаючи, керуючись, починаючи, кажучи, користуючись, розуміючи, використовуючи, маючи</li>
      <li>VERB-Fin: дякую, прошу, є, хочу, маємо, має, думаю, може, ставлю, надається</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ-Part: минулого, існуючої, діючий, виконуючий, виступаючий, виступаючого, головуючий, діюча, діючої, діючі</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: даний, скороченою, прийнятий, передбачені, переконаний, прийнята, прийняті, внесений, впевнений, відхилена</li>
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
      <li>ADV: зараз, так, тут, тому, тоді, там, потім, тепер, туди, сюди</li>
      <li>DET: цього, цей, цю, ці, це, цієї, тих, ті, цьому, ця</li>
      <li>PRON: це, того, те, цього, тим, тому, цим, цьому, такими, тих</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: самі, самого, сама, самим, самих, сам, самий, саме, самими, само</li>
      <li>PRON: сама, самі</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: десь, якось, інакше, іноді, чомусь, дещо, кудись, колись, інколи</li>
      <li>DET: інших, інші, багато, деяких, якісь, інший, іншого, одного, іншими, будь-які</li>
      <li>PRON: хтось, щось, інше, дехто, когось, іншого, будь-кого, декого, один, одне</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: чому, як, де, навіщо, чого, коли, Скільки</li>
      <li>DET: які, Яка, Скільки, Якого, яке, яким</li>
      <li>PRON: що, хто, Кому, Чим, чого</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: ніколи, ніяк, ніде, нікуди</li>
      <li>DET: жодного, жодної, ніяких, жоден, жодних, жодному, ніякого, ніякої, жодна, жодним</li>
      <li>PRON: нічого, ніхто, нікому, нікого, нічим, ні, ніким, нічому, ніщо</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: наша, нашої, наших, свої, наші, його, наш, свою, своїх, нашу</li>
      <li>PRON: ми, я, ви, нас, вони, вас, нам, він, вам, їх</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>DET: одне, один, одного</li>
      <li>PRON: один, одного, одному</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: де, як, коли, чому, куди, звідки, поки, скільки</li>
      <li>DET: які, який, яка, яку, яких, яке, якої, яким, якому, якого</li>
      <li>PRON: що, хто, які, який, яка, яке, яку, чого, кого, яких</li>
      <li>SCONJ: коли, як, поки, що, чим, доки</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: завжди, скрізь, всюди</li>
      <li>DET: всі, всіх, все, весь, вся, усіх, кожного, кожен, всім, кожному</li>
      <li>PRON: все, всі, всім, всіх, весь, всіма, кожен, кожного, усім</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>DET: багато, декілька, кілька, багатьох, скільки, декількох, кількох, один, багатьом, скількох</li>
      <li>NOUN: тисяч, мільйонів, мільярдів, тисячі, мільйона, мільйони, млн., мільярди, мільярда, тис.</li>
      <li>NUM: два, один, 3, три, одну, 5, 20, 1, двох, 15</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: першому, 1, 2004, друге, першу, другий, перший, другого, другому, першого</li>
      <li>NOUN: друге, третє, Четверте, перше, П'яте, шоста</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: наша, нашої, наших, свої, наші, його, наш, свою, своїх, нашу</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: свої, свою, своїх, свого, своє, своєму, свій, своїми, своїй, своєї</li>
      <li>PRON: себе, собі, собою</li>
      <li>VERB-Conv: керуючись, користуючись, дивлячись, Готуючись, базуючись, відмовившись, звертаючись, користаючись, повертаючись, пославшись</li>
      <li>VERB-Fin: надається, стосується, відбувається, пропонується, відбулися, запишіться, здається, заспокойтеся, відбуваються, записалися</li>
      <li>VERB-Inf: звернутися, підготуватися, ставитися, записатися, займатися, розібратися, визначатися, визначитися, повернутися, розглядатися</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>0
    <ul>
      <li>VERB-Fin: прийнято, визначено, зареєстровано, створено, вичерпано, завершено, затверджено, написано, передбачено, проведено</li>
    </ul>
  </li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: будемо, буду, будем</li>
      <li>DET: наша, нашої, наших, наші, наш, нашу, нашого, нашій, наше, нашими</li>
      <li>PRON: ми, я, нас, нам, мене, мені, нами, мною</li>
      <li>VERB-Fin: дякую, прошу, хочу, маємо, думаю, ставлю, можемо, переходимо, пропоную, розумію</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: будете, будь</li>
      <li>DET: вашу, вашого, ваші, вашої, ваших, ваша, ваше, ваш, вашими, вашому</li>
      <li>PRON: ви, вас, вам, вами, тебе, тобі</li>
      <li>VERB-Fin: будь, давайте, знаєте, включіть, наполягаєте, дайте, запишіться, заспокойтеся, хочете, скажіть</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: буде, є, будуть, буває</li>
      <li>DET: його, їх, її, їхні, їхнього, їхнім, їхніми, їхніх, їхньої, їхню</li>
      <li>PRON: вони, він, їх, вона, його, її, них, їм, воно, нього</li>
      <li>VERB-Fin: є, має, може, надається, стосується, мають, відбувається, немає, можуть, буде</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>DET: вашої, вашу, ваше, ваші, ваша, вашими, ваших, Вашого, ваш</li>
      <li>PRON: ви, вас, вам, вами</li>
    </ul>
  </li>
</ul>



<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Обл</li>
          <li>NOUN: ЦВК, МЗС, млн., ЗМІ, тис., МВС, ОСББ, ТСК, ВАТ, ВВП</li>
          <li>NUM: млн., тис.</li>
          <li>PROPN: НДП, НАТО, РНБО, СПУ, СДПУ(о), ООН, РФ, ДНР, ЛНР, ОБСЄ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy[gram]</a>
    <ul>
      <li>Inan
        <ul>
          <li>NOUN: президенти, бджоли, депутати</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>BadStyle</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: існуючої, діючий, виконуючий, виступаючий, виступаючого, виступаючі, головуючий, діюча, діючої, діючі</li>
          <li>ADJ-Part: існуючої, діючий, виконуючий, виступаючий, виступаючого, головуючий, діюча, діючої, діючі, керуючими</li>
          <li>ADP: довколо, ради</li>
          <li>ADV: зараннє, Притому, Хорошо, даже, декілька, наврядчи, невзмозі, просто-напросто, также</li>
          <li>DET: їх, цим, деяким, іншим</li>
          <li>INTJ: да</li>
          <li>NOUN: головуючий, грунтів, млн., абзацам, доставки, діджиталізація, пропозиціям, підгрунтя, співтовариство, ігр</li>
          <li>NUM: млн., 12-ти, 14-ти, 17-ти, 17-ть, 336-ма, 395-ти, півтора</li>
          <li>PART: да</li>
          <li>PRON: їх, вас</li>
          <li>PROPN: Матвієнко</li>
          <li>SCONJ: поскільки</li>
          <li>VERB-Fin: пов'язано, Відслідковується, викликано, задіяно, касається, причитайте, протирічать, протирічить, співпадає, установлюються</li>
          <li>VERB-Inf: задіяти, відслідкувати, розстроювати</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADJ
        <ul>
          <li>ADV: так</li>
        </ul>
      </li>
      <li>ADP
        <ul>
          <li>ADP: у, з, під, в, на, по, Згідно, відповідно, крім, поруч</li>
          <li>ADV: відповідно, згідно, поряд, незважаючи, разом, спільно</li>
          <li>PRON: що</li>
          <li>VERB-Conv: починаючи</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: в, у</li>
          <li>ADV: так, поки, перш, більш, знову, більше, все, ще, врешті, навряд</li>
          <li>CCONJ: і</li>
          <li>DET: таким, один, тим</li>
          <li>PART: все, хоча, так, тільки, вряд, всього, не</li>
          <li>PRON: все, сама, тим</li>
          <li>X: ad</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>ADV: так</li>
          <li>CCONJ: а, але, так, чи, та</li>
          <li>PART: не, чи</li>
          <li>PRON: тим</li>
        </ul>
      </li>
      <li>DET
        <ul>
          <li>DET: такий, ті, сама, свого, тих</li>
          <li>NUM: одну</li>
          <li>PRON: Що, ніщо</li>
        </ul>
      </li>
      <li>INTJ
        <ul>
          <li>NOUN: Слава</li>
          <li>PRON: їй</li>
          <li>VERB-Fin: будь</li>
        </ul>
      </li>
      <li>PART
        <ul>
          <li>PART: чи, все, Так</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>ADV: де</li>
          <li>DET: одне, один</li>
          <li>PRON: один</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: для</li>
          <li>ADV: тому, так, перш</li>
          <li>PRON: Тим</li>
          <li>SCONJ: хоча</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: COVID, hoc, на, русском, from, you, бацька, будете, веревку, вы</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>InflClass</a>
    <ul>
      <li>Ind
        <ul>
          <li>ADJ: буре</li>
          <li>DET: його, її, їх</li>
          <li>NOUN: ЦВК, МЗС, табло, євро, вето, ЗМІ, пані, МВС, Мінекоресурсів, ОСББ</li>
          <li>PRON: їх, його, її</li>
          <li>PROPN: Тимошенко, НДП, НАТО, РНБО, СПУ, СДПУ(о), Совсун, Геращенко, ООН, Іоффе</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NameType</a>
    <ul>
      <li>Geo
        <ul>
          <li>PROPN: України, Україні, Україна, Криму, Росії, Україну, Крим, Києві, Росія, Тузла</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>PROPN: Володимире, Олександр, Володимир, Михайло, Сергій, Микола, Іван, Петро, Олександре, Юрій</li>
        </ul>
      </li>
      <li>Pat
        <ul>
          <li>PROPN: Михайловичу, Іванович, Миколайович, Валентиновичу, Івановичу, Сергійович, Віталійович, Михайлович, Олексійович, Івановича</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>PROPN: Симоненко, Тимошенко, Цимбалюк, Михайлович, Януковича, Рудьковський, Кармазін, Ющенка, Мамка, Пинзеник</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Orth</a>
    <ul>
      <li>Alt
        <ul>
          <li>PROPN: Бєларусь</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Style</a>
    <ul>
      <li>Arch
        <ul>
          <li>ADV: дальше</li>
          <li>DET: сих</li>
          <li>VERB-Inf: одправити</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: не, державної, з, здійсненним, неправовий, останнє, природній, рішучій, сильнодіючим, старим</li>
          <li>ADJ-Part: з, здійсненним, не, сшита</li>
          <li>ADP: в, збоку, у, з, за</li>
          <li>ADV: в, вцілому, неможна, пилко, потрібно</li>
          <li>DET: всім, Наш, багатьом, будь, деяким, ніякою, таке, тот, яким, якість</li>
          <li>NOUN: напрямкам, не, уособлення, Голову, Держжитлокомунгос, Мінюсті, НКРЄ, Стрижнем, депутати, категоріям</li>
          <li>PRON: ні, яке</li>
          <li>PROPN: Бандурко, Володимиру, Железняк, Мукачево, Ображіївкі, Піхоті, Руслана, Стефанчука, Челомбітко, Ющенко</li>
          <li>PUNCT: ., ...</li>
          <li>SCONJ: як</li>
          <li>VERB-Fin: з'ясувало, залежить, зареєстровано, находимося, повстало, позбавлено, почались</li>
          <li>X: проте</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Uninflect</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: бла-бла-бла</li>
          <li>ADV: треба</li>
          <li>NUM: пів</li>
          <li>PROPN: Уілті</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: бути, бувати.</li>
</ul>

<ul>
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: бути, би, б.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: бути.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Conv--PRON-Nom (1)</li>
      <li>VERB-Fin--NOUN-Gen (140)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(до) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(з) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(понад) (1)</li>
      <li>VERB-Fin--NOUN-Nom (1833)</li>
      <li>VERB-Fin--PRON-Gen (15)</li>
      <li>VERB-Fin--PRON-Nom (2696)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Nom (89)</li>
      <li>VERB-Inf--PRON-Nom (110)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN-Acc (63)</li>
      <li>VERB-Conv--NOUN-Gen (5)</li>
      <li>VERB-Conv--PRON-Acc (9)</li>
      <li>VERB-Fin--NOUN-Acc (1794)</li>
      <li>VERB-Fin--NOUN-Dat (2)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(в) (1)</li>
      <li>VERB-Fin--NOUN-Gen (299)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(близько) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(плюс) (1)</li>
      <li>VERB-Fin--NOUN-Loc-ADP(по) (1)</li>
      <li>VERB-Fin--NOUN-Nom (1)</li>
      <li>VERB-Fin--PRON-Acc (320)</li>
      <li>VERB-Fin--PRON-Dat (2)</li>
      <li>VERB-Fin--PRON-Gen (15)</li>
      <li>VERB-Fin--PRON-Gen-ADP(з) (1)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN-Acc (1463)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(про) (1)</li>
      <li>VERB-Inf--NOUN-Dat (3)</li>
      <li>VERB-Inf--NOUN-Gen (72)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(з) (1)</li>
      <li>VERB-Inf--PRON-Acc (235)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Gen (11)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Conv--NOUN-Dat (4)</li>
      <li>VERB-Fin--NOUN-Dat (165)</li>
      <li>VERB-Fin--NOUN-Dat,Gen (1)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Ins (8)</li>
      <li>VERB-Fin--PRON-Dat (180)</li>
      <li>VERB-Inf--NOUN-Dat (93)</li>
      <li>VERB-Inf--NOUN-Ins (9)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Dat (50)</li>
      <li>VERB-Inf--PRON-Ins (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 23 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: поводити себе, вважати себе, обирати собі, уявити собі, дискредитувати себе, створити собі, баламутити себе, вести себе, відчувати себе, відчути себе, дати собі, забирати собі, завалити собі, задати собі, захистити себе, зберегти свою, називати себе, обмежувати себе, обрати собі, оголосити себе, помітити собі, провести собі, ускладнювати себе</li>
    <ul>
      <li>Out of those, 3 lemmas occurred more than once, but never without a reflexive dependent. Examples: поводити, уявити, дискредитувати</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 21 relation subtypes: <a>acl:relcl</a>, <a>advmod:det</a>, <a>advmod:emph</a>, <a>advmod:neg</a>, <a>aux:pass</a>, <a>compound:svc</a>, <a>det:numgov</a>, <a>det:nummod</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>flat:range</a>, <a>flat:repeat</a>, <a>flat:title</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>nummod:gov</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>parataxis:discourse</a>, <a>parataxis:rel</a>, <a>xcomp:pred</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>dep</a></li>
</ul>
