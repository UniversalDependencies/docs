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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uduk_parlamint216)<br />
Download all treebanks: [UD 2.16](/#download)

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

## References

* Kopp, Matyáš; Kryvenko, Anna and Rii, Andriana, 2023, Ukrainian parliamentary corpus ParlaMint-UA 4.0.1, Slovenian language resource repository CLARIN.SI, ISSN 2820-4042, http://hdl.handle.net/11356/1900.
* Tomaž Erjavec, Maciej Ogrodniczuk, Petya Osenova, Nikola Ljubešić, Kiril Simov, Andrej Pančur, Michał Rudolf, Matyáš Kopp, Starkaður Barkarson Steinþór Steingrímsson, Çağrı Çöltekin, Jesse de Does, Katrien Depuydt, Tommaso Agnoloni, Giulia Venturi, María Calzada Pérez, Luciana D. de Macedo, Costanza Navarretta, Giancarlo Luxardo, Matthew Coole, Paul Rayson, Vaidas Morkevičius, Tomas Krilavičius, Roberts Darģis, Orsolya Ring, Ruben van Heusden, Maarten Marx, and Darja Fišer. 2022. The ParlaMint corpora of parliamentary proceedings. In “Language Resources and Evaluation”, https://doi.org/10.1007/s10579-021-09574-0



# Statistics of UD Ukrainian ParlaMint

## POS Tags

[ADJ](uk_parlamint-pos-ADJ.html) – [ADP](uk_parlamint-pos-ADP.html) – [ADV](uk_parlamint-pos-ADV.html) – [AUX](uk_parlamint-pos-AUX.html) – [CCONJ](uk_parlamint-pos-CCONJ.html) – [DET](uk_parlamint-pos-DET.html) – [INTJ](uk_parlamint-pos-INTJ.html) – [NOUN](uk_parlamint-pos-NOUN.html) – [NUM](uk_parlamint-pos-NUM.html) – [PART](uk_parlamint-pos-PART.html) – [PRON](uk_parlamint-pos-PRON.html) – [PROPN](uk_parlamint-pos-PROPN.html) – [PUNCT](uk_parlamint-pos-PUNCT.html) – [SCONJ](uk_parlamint-pos-SCONJ.html) – [VERB](uk_parlamint-pos-VERB.html) – [X](uk_parlamint-pos-X.html)

## Features

[Abbr](uk_parlamint-feat-Abbr.html) – [Animacy](uk_parlamint-feat-Animacy.html) – [Animacy[gram]](uk_parlamint-feat-Animacy-gram.html) – [Aspect](uk_parlamint-feat-Aspect.html) – [BadStyle](uk_parlamint-feat-BadStyle.html) – [Case](uk_parlamint-feat-Case.html) – [Degree](uk_parlamint-feat-Degree.html) – [ExtPos](uk_parlamint-feat-ExtPos.html) – [Foreign](uk_parlamint-feat-Foreign.html) – [Gender](uk_parlamint-feat-Gender.html) – [InflClass](uk_parlamint-feat-InflClass.html) – [Mood](uk_parlamint-feat-Mood.html) – [NameType](uk_parlamint-feat-NameType.html) – [Number](uk_parlamint-feat-Number.html) – [NumType](uk_parlamint-feat-NumType.html) – [Orth](uk_parlamint-feat-Orth.html) – [Person](uk_parlamint-feat-Person.html) – [Polarity](uk_parlamint-feat-Polarity.html) – [Poss](uk_parlamint-feat-Poss.html) – [PronType](uk_parlamint-feat-PronType.html) – [Reflex](uk_parlamint-feat-Reflex.html) – [Style](uk_parlamint-feat-Style.html) – [Tense](uk_parlamint-feat-Tense.html) – [Typo](uk_parlamint-feat-Typo.html) – [Uninflect](uk_parlamint-feat-Uninflect.html) – [Variant](uk_parlamint-feat-Variant.html) – [VerbForm](uk_parlamint-feat-VerbForm.html) – [Voice](uk_parlamint-feat-Voice.html)

## Relations

[acl](uk_parlamint-dep-acl.html) – [acl:relcl](uk_parlamint-dep-acl-relcl.html) – [advcl](uk_parlamint-dep-advcl.html) – [advmod](uk_parlamint-dep-advmod.html) – [advmod:det](uk_parlamint-dep-advmod-det.html) – [advmod:emph](uk_parlamint-dep-advmod-emph.html) – [advmod:neg](uk_parlamint-dep-advmod-neg.html) – [amod](uk_parlamint-dep-amod.html) – [appos](uk_parlamint-dep-appos.html) – [aux](uk_parlamint-dep-aux.html) – [aux:pass](uk_parlamint-dep-aux-pass.html) – [case](uk_parlamint-dep-case.html) – [cc](uk_parlamint-dep-cc.html) – [ccomp](uk_parlamint-dep-ccomp.html) – [compound](uk_parlamint-dep-compound.html) – [compound:svc](uk_parlamint-dep-compound-svc.html) – [conj](uk_parlamint-dep-conj.html) – [cop](uk_parlamint-dep-cop.html) – [csubj](uk_parlamint-dep-csubj.html) – [det](uk_parlamint-dep-det.html) – [det:numgov](uk_parlamint-dep-det-numgov.html) – [det:nummod](uk_parlamint-dep-det-nummod.html) – [discourse](uk_parlamint-dep-discourse.html) – [dislocated](uk_parlamint-dep-dislocated.html) – [expl](uk_parlamint-dep-expl.html) – [fixed](uk_parlamint-dep-fixed.html) – [flat](uk_parlamint-dep-flat.html) – [flat:foreign](uk_parlamint-dep-flat-foreign.html) – [flat:name](uk_parlamint-dep-flat-name.html) – [flat:range](uk_parlamint-dep-flat-range.html) – [flat:repeat](uk_parlamint-dep-flat-repeat.html) – [flat:title](uk_parlamint-dep-flat-title.html) – [iobj](uk_parlamint-dep-iobj.html) – [list](uk_parlamint-dep-list.html) – [mark](uk_parlamint-dep-mark.html) – [nmod](uk_parlamint-dep-nmod.html) – [nsubj](uk_parlamint-dep-nsubj.html) – [nsubj:outer](uk_parlamint-dep-nsubj-outer.html) – [nsubj:pass](uk_parlamint-dep-nsubj-pass.html) – [nummod](uk_parlamint-dep-nummod.html) – [nummod:gov](uk_parlamint-dep-nummod-gov.html) – [obj](uk_parlamint-dep-obj.html) – [obl](uk_parlamint-dep-obl.html) – [obl:agent](uk_parlamint-dep-obl-agent.html) – [obl:arg](uk_parlamint-dep-obl-arg.html) – [orphan](uk_parlamint-dep-orphan.html) – [parataxis](uk_parlamint-dep-parataxis.html) – [parataxis:discourse](uk_parlamint-dep-parataxis-discourse.html) – [parataxis:rel](uk_parlamint-dep-parataxis-rel.html) – [punct](uk_parlamint-dep-punct.html) – [reparandum](uk_parlamint-dep-reparandum.html) – [root](uk_parlamint-dep-root.html) – [vocative](uk_parlamint-dep-vocative.html) – [xcomp](uk_parlamint-dep-xcomp.html) – [xcomp:pred](uk_parlamint-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 5432 sentences and 84189 tokens.</li>
</ul>

<ul>
<li>This corpus contains 13941 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 368 types of words that contain both letters and punctuation. Examples: зв'язку, житлово-комунального, житлово-комунальні, об'єднання, все-таки, об'єктів, здоров'я, по-перше, обов'язки, по-друге, житлово-комунальних, осінньо-зимовий, обов'язково, пов'язані, будь-яких, млн., п'ять, пов'язаної, В'ячеслав, Об'єднаних, По-третє, Прем'єр-міністр, будь-які, дев'ятого, техніко-юридичними, тис., 6055-П, будь-якої, врешті-решт, житлово-комунальному, зобов'язання, об'єкти, українсько-російського, 36-а, В'ячеслава, військово-морських, експрес-відправленнях, матеріально-технічної, об'єктах, обов'язків, українсько-російських, 15-а, 21-го, 41-а, 5572-П, В'ячеславе, Прем'єр-міністра, Прем'єр-міністром, будь-якого, будь-яку</li>
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
<li>This corpus contains 55 word types tagged as particles (PART): Но, Нічого, Отож, Правда, Тобто, Хіба, а, аж, б, би, бодай, буцімто, власне, вряд, все, все-таки, всього, да, ж, же, завгодно, й, лише, може, навіть, начебто, не, невже, нехай, ну, ні, ніби, нібито, ось, от, отже, просто, саме, собі, так, таки, там, то, тощо, тільки, хай, хоч, хоча, це, чи, ще, що, щось, якраз, і</li>
</ul>

<ul>
<li>This corpus contains 31 lemmas tagged as pronouns (PRON): весь, ви, вона, вони, воно, все, всі, він, дехто, ми, ніхто, ніщо, оце, оцей, сам, себе, таке, такий, те, той, хто, хтось, це, цей, що, щось, я, який, інше, інший, їх</li>
</ul>

<ul>
<li>This corpus contains 47 lemmas tagged as determiners (DET): багато, безліч, будь-який, ваш, весь, все, всякий, всі, всілякий, декілька, деякий, достатньо, другий, жодний, його, кожний, котрий, кілька, мій, наш, ніякий, один, отакий, отой, оцей, сам, самий, свій, скільки, стільки, такий, те, той, тот, увесь, усякий, це, цей, який, який-небудь, якийсь, інакший, інше, інший, їх, їхній, її</li>
</ul>

<ul>
<li>Out of the above, 14 lemmas occurred sometimes as PRON and sometimes as DET: весь, все, всі, оцей, сам, такий, те, той, це, цей, який, інше, інший, їх</li>
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
    <li>VERB: враховуючи, виходячи, зважаючи, кажучи, керуючись, починаючи, користуючись, розуміючи, використовуючи, маючи</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: буде, є, будемо, було, будуть, була, були, був, буду, будете</li>
    <li>VERB: дякую, будь, прошу, є, хочу, маємо, давайте, прийнято, має, думаю</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: бути</li>
    <li>VERB: голосувати, сказати, прийняти, підтримати, зробити, забезпечити, проголосувати, робити, працювати, приймати</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: даний, скороченою, прийнятий, передбачені, внесений, впевнений, відхилена, минулого, переконаний, пов'язані</li>
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
      <li>ADJ: Верховної, російської, Верховна, національної, державної, української, російською, верховній, політичної, першу</li>
      <li>ADJ-Part: скороченою, відхилена, пов'язаної, прийнята, автоматизованої, зазначеної, затверджена, надана, передбачена, розроблена</li>
      <li>AUX-Fin: була</li>
      <li>DET: яка, цю, цієї, ця, нашої, наша, яку, цій, нашу, свою</li>
      <li>NOUN: ласка, ради, фракція, постанови, безпеки, партії, увагу, підготовки, оборони, змін</li>
      <li>NUM: одну, одна, двох, дві, однієї, 2, однією, 1, двома, 1,5—2</li>
      <li>PRON: вона, її, неї, нею, яка, яку, сама, якої, ній, оця</li>
      <li>PROPN: України, Україні, Україна, Росії, Батьківщина, Україну, Росія, Тузла, Довіра, Україною</li>
      <li>VERB: склалася, була, стала, мала, прийняла, хотіла, виникла, виступила, відбулася, могла</li>
      <li>VERB-Fin: склалася, була, стала, мала, прийняла, хотіла, виникла, виступила, відбулася, могла</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>NOUN: колеги, суддів, Слуга, колег, колегами, колегам, слуги, судді, голови, голів</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: шановний, народний, реєстраційний, народному, народного, денного, державного, наступний, сьогоднішній, українського</li>
      <li>ADJ-Part: даний, прийнятий, внесений, впевнений, минулого, переконаний, даного, спрямований, визначений, розроблений</li>
      <li>AUX-Fin: був</li>
      <li>DET: який, цей, цього, цьому, наш, той, такий, нашого, таким, весь</li>
      <li>NOUN: закону, проект, час, законопроект, комітету, року, закон, депутати, депутатів, спорту</li>
      <li>NUM: два, один, двох, одним, 1, 2, одному, півтора, 2-3, 31</li>
      <li>PRON: він, хто, його, нього, йому, кого, ким, ним, кому, ньому</li>
      <li>PROPN: Криму, Іванович, Крим, Михайловичу, Олександр, Сергій, Володимире, Михайло, Володимир, Голос</li>
      <li>VERB: хотів, просив, сказав, був, дав, мав, говорив, зрозумів, прийняв, розглянув</li>
      <li>VERB-Fin: хотів, просив, сказав, дав, був, говорив, зрозумів, прийняв, розглянув, мав</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: друге, житлово-комунального, 1, першому, місцевого, другого, другому, наступне, важливе, міжнародного</li>
      <li>ADJ-Part: прийняте, відкритим, інтегрованого, гарантоване, даного, закритим, Зазначене, Командуючим, Сполученого, визначеному</li>
      <li>AUX: було</li>
      <li>AUX-Fin: було</li>
      <li>DET: це, цього, тому, таке, яке, все, наше, його, своєму, своє</li>
      <li>NOUN: питання, рішення, слово, питань, голосування, внесення, прийняття, права, цілому, забезпечення</li>
      <li>NUM: одне, два, одним, двох</li>
      <li>PRON: це, того, те, що, цього, тим, все, тому, воно, цим</li>
      <li>PROPN: НАТО, Мінпаливенерго, Сочі, Ватутіно, ГРУ, Динамо, Закарпаття, Закарпатті, Мінекоресурсів, Мінтопенерго</li>
      <li>VERB: було, відбулося, залишилося, стало, сталося, загинуло, вдалося, виникло, відбувалося, дало</li>
      <li>VERB-Fin: було, відбулося, залишилося, стало, сталося, загинуло, вдалося, виникло, відбувалося, дало</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADJ: народних, західних, Північно-кавказського, адресного, бухих, висококласних, власного, других, ефективних, колишнього</li>
      <li>DET: всіх, тих, наших, своїх, якого, кожного, одного, усіх, яких, деяких</li>
      <li>NOUN: колеги, депутати, депутатів, президента, міністрів, депутат, людей, пане, депутату, депутата</li>
      <li>PRON: ми, я, ви, нас, нам, вас, хто, вам, вами, мене</li>
      <li>PROPN: Іванович, Михайловичу, Олександр, Сергій, Володимире, Михайло, Володимир, Цимбалюк, Олександре, Микола</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Anim,Inan
    <ul>
      <li>PRON: його, вона, її</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: сьогоднішній, житлово-комунальні, даний, денний, відповідні, державний, останні, додаткові, наступний, осінньо-зимовий</li>
      <li>ADJ-Part: даний, спожиті, вказаний, зазначений, звані, визначений, виступаючі, вказані, внесений, віднесені</li>
      <li>DET: цей, які, свої, всі, який, ці, той, ті, наш, такі</li>
      <li>NOUN: питання, ласка, рішення, ради, закону, проект, слово, час, фракція, законопроект</li>
      <li>NUM: один, 2, один-єдиний, тисяч</li>
      <li>PRON: це, того, те, що, цього, тим, все, тому, цим, цьому</li>
      <li>PROPN: України, Україні, Криму, Україна, Росії, Батьківщина, Крим, Україну, Голос, Росія</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: шановні, повинні, народні, готові, народних, корисних, збройних, закордонних, міжнародних, спортивних</li>
      <li>ADJ-Part: передбачені, пов'язані, Сполучених, населених, Об'єднаних, прийняті, враховані, створені, визначені, внесені</li>
      <li>AUX-Fin: будемо, будуть, були, є, будете, будем</li>
      <li>DET: які, всі, всіх, ці, наших, тих, ті, свої, цих, інших</li>
      <li>NOUN: колеги, питань, депутати, депутатів, змін, відсотків, міністрів, людей, років, питання</li>
      <li>NUM: одні, 2, 2,5, двох, млн., тис., 1, 2,3, 2,7, 336-ма</li>
      <li>PRON: ми, ви, нас, вони, нам, вас, вам, їх, вами, них</li>
      <li>PROPN: Гетманцев, РСР</li>
      <li>VERB: маємо, давайте, є, мають, переходимо, знаєте, можемо, можуть, включіть, мали</li>
      <li>VERB-Fin: маємо, давайте, є, мають, переходимо, знаєте, можемо, можуть, включіть, мали</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ptan
    <ul>
      <li>NOUN: кошти, коштів, надр, відносин, гроші, надра, надрами, переговори, грошей, дані</li>
      <li>PROPN: Афінах, США, Афін, ВМСУ, Карпатах, Черкас, Черкасах</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: Верховної, шановний, російської, народний, реєстраційний, Верховна, національної, народному, державної, народного</li>
      <li>ADJ-Part: даний, скороченою, прийнятий, внесений, впевнений, відхилена, минулого, переконаний, даного, пов'язаної</li>
      <li>AUX: буде, є, було, була, був, буду, буває</li>
      <li>AUX-Fin: буде, є, було, була, був, буду, буває</li>
      <li>DET: який, цього, яка, цей, цю, це, цієї, цьому, ця, нашої</li>
      <li>NOUN: ласка, питання, ради, рішення, закону, проект, слово, час, фракція, законопроект</li>
      <li>NUM: один, одну, одна, одне, одним, однієї, 1, однією, одному, 51</li>
      <li>PRON: я, це, того, те, що, він, хто, вона, цього, його</li>
      <li>PROPN: України, Україні, Криму, Україна, Росії, Іванович, Батьківщина, Крим, Михайловичу, Олександр</li>
      <li>VERB: дякую, будь, прошу, є, хочу, має, думаю, може, надається, ставлю</li>
      <li>VERB-Fin: дякую, будь, прошу, є, хочу, має, думаю, може, надається, ставлю</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: народних, першу, сьогоднішній, житлово-комунальні, даний, денний, відповідні, державний, державну, останні</li>
      <li>ADJ-Part: даний, спожиті, вказаний, гарантоване, дану, зазначений, звані, обгрунтовану, посилену, спожитий</li>
      <li>ADP: на, про, за, в, у, через, під, понад, попри, по</li>
      <li>DET: цю, цей, це, які, свої, всі, яку, який, ці, нашу</li>
      <li>NOUN: рішення, питання, час, увагу, проект, законопроект, внесення, слово, ситуацію, жаль</li>
      <li>NUM: один, одну, два, 3, три, 100, 20, 10, п'ять, 2</li>
      <li>PRON: це, те, що, його, вас, її, їх, нас, все, себе</li>
      <li>PROPN: Україну, Сергія, Росію, Володимировича, Київ, Крим, Івановича, Анатолійовича, Анатолія, Бориспіль</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: народному, Верховній, народній, територіальній, українській, народним, Російській, міжнародним, Генеральному, місцевим</li>
      <li>ADJ-Part: вжитим, визначеним, виконуючому, виявленим, відокремленим, постраждалим, існуючій</li>
      <li>ADP: завдяки, назустріч</li>
      <li>DET: всім, нашим, тим, нашій, іншим, вашій, кожному, одному, тому, цим</li>
      <li>NOUN: депутату, Раді, Міністерству, голові, депутатці, людям, вимогам, громадянам, Героям, Кабінету</li>
      <li>NUM: двом-трьом</li>
      <li>PRON: нам, вам, мені, їм, собі, всім, йому, нікому, кому, цьому</li>
      <li>PROPN: Україні, Івановичу, Олександру, Віталійовичу, Михайловичу, Петровичу, Юрію, Колтуновичу, Нестору, Сергію</li>
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
      <li>ADJ: Верховної, російської, національної, державної, народного, денного, державного, української, українського, політичної</li>
      <li>ADJ-Part: минулого, даного, пов'язаної, Об'єднаних, Сполучених, автоматизованої, зазначеної, званих, населених, вжитих</li>
      <li>ADP: до, з, для, щодо, від, у, після, із, без, проти</li>
      <li>DET: цього, цієї, нашої, наших, тих, всіх, інших, цих, нашого, яких</li>
      <li>NOUN: ради, закону, року, комітету, питань, постанови, безпеки, питання, партії, підготовки</li>
      <li>NUM: двох, однієї, 5, 1, 15, 200, 40, 50, трьох, чотирьох</li>
      <li>PRON: нас, того, цього, вас, них, мене, їх, нічого, нього, його</li>
      <li>PROPN: України, Росії, Криму, Путіна, Януковича, Європи, Зеленського, РНБО, НАТО, ООН</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: російською, скороченою, Верховною, українською, найближчим, відповідними, народним, необхідними, техніко-юридичними, важливим</li>
      <li>ADJ-Part: скороченою, відкритим, децентралізованою, закритим, керуючими, переодягненими, поданою, уповноваженими, Зазначеними, Командуючим</li>
      <li>ADP: з, за, із, перед, між, над, під, зі, поза, всупереч</li>
      <li>DET: таким, цим, нашими, тими, яким, якими, якою, усіма, цією, іншими</li>
      <li>NOUN: метою, мовою, урядом, законом, процедурою, чином, комітетом, урахуванням, Радою, станом</li>
      <li>NUM: одним, двома, однією, 336-ма</li>
      <li>PRON: вами, тим, цим, нами, мною, нею, собою, чим, ким, ним</li>
      <li>PROPN: Україною, Росією, Януковичем, Віктором, Кримом, Федоровичем, Андрієм, Байденом, Беркутом, Буймістер</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: Керченській, першому, верховній, другому, Автономній, минулому, денному, міжнародних, олімпійських, окремих</li>
      <li>ADJ-Part: даному, наданих, населених, прийнятому, Сполучених, визначеному, діючій, задекларованій, зазначених, зазначеному</li>
      <li>ADP: в, у, на, по, при, о, з</li>
      <li>DET: цьому, тому, цій, нашій, всіх, якому, яких, своєму, цих, якій</li>
      <li>NOUN: році, цілому, числі, зв'язку, залі, читанні, місті, сфері, протоці, раді</li>
      <li>NUM: двох, одному, 12, 12-ти, 14-ти, 16, 17-ти, двадцять, одній, одній-дві</li>
      <li>PRON: тому, цьому, собі, чому, них, ньому, тім, всіх, ній, іншому</li>
      <li>PROPN: Україні, Криму, Києві, Сіднеї, Росії, Одесі, Європі, Афінах, Артемівську, Атланті</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: повинні, готові, народний, реєстраційний, Верховна, друге, повинна, депутатська, європейська, наступний</li>
      <li>ADJ-Part: прийнятий, передбачені, впевнений, відхилена, переконаний, внесений, пов'язані, прийняті, враховані, прийнята</li>
      <li>DET: які, яка, який, всі, ця, наша, цей, ці, таке, ті</li>
      <li>NOUN: ласка, питання, фракція, рада, проект, слово, закон, номер, депутат, законопроект</li>
      <li>NUM: два, один, одна, 15, 3, одне, багато, 6528, 5, 6103</li>
      <li>PRON: ми, я, це, ви, вони, хто, він, вона, що, те</li>
      <li>PROPN: Україна, Іванович, Батьківщина, Олександр, Крим, Сергій, Михайло, Володимир, Голос, Цимбалюк</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: шановні, шановний, народні, дорогі, вельмишановний, дорогий, присутні, шановне, головуючий, запрошені</li>
      <li>ADJ-Part: головуючий, запрошені, шановані</li>
      <li>DET: всі</li>
      <li>NOUN: колеги, депутати, пане, Голово, друзі, українці, члени, головуючий, громадяни, виборці</li>
      <li>PROPN: Михайловичу, Володимире, Олександре, Валентиновичу, Вікторе, Павловичу, Федоровичу, Миколо, Сергію, В'ячеславе</li>
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
      <li>ADV: щонайбільше, якнайшвидше</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: вищих, вищої, Вища, Вищого, ближчим, більша, більший, важливіше, Вищий, вищим</li>
      <li>ADV: більше, краще, більш, далі, менше, швидше, гірше, раніше, точніше, вище</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: шановні, шановний, корисних, відповідні, відповідних, останні, природних, нові, останніх, Доброго</li>
      <li>ADJ-Part: впевнений, відкритим, впевнена, закритим, керованої, обгрунтовану, обмежений, обмежені, виважений, визначений</li>
      <li>ADV: дуже, потрібно, необхідно, практично, добре, чітко, важливо, звичайно, багато, правильно</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: найближчим, найгіршого, найкращих, Найбільше, найважливіше, найсильніших, Найвідоміші, всеохоплюючою, найбагатших, найближчий</li>
      <li>ADV: найбільш, найбільше, найчастіше, якнайшвидше, найменш</li>
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
      <li>VERB-Inf: сказать</li>
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
      <li>ADJ-Part: званих, звані, виконуючий, головуючий, діючий, діючі, званої, керованої, керуючими, контролюючих</li>
      <li>AUX: буде, є, бути, будемо, було, будуть, була, були, був, буду</li>
      <li>AUX-Fin: буде, є, будемо, було, будуть, була, були, був, буду, будете</li>
      <li>AUX-Inf: бути</li>
      <li>VERB: дякую, будь, прошу, є, голосувати, хочу, маємо, давайте, має, думаю</li>
      <li>VERB-Conv: враховуючи, виходячи, зважаючи, кажучи, керуючись, починаючи, користуючись, розуміючи, використовуючи, маючи</li>
      <li>VERB-Fin: дякую, будь, прошу, є, хочу, маємо, давайте, має, думаю, може</li>
      <li>VERB-Inf: голосувати, робити, працювати, приймати, говорити, захищати, вирішувати, мати, обговорювати, виконувати</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>ADJ-Part: даний, скороченою, прийнятий, передбачені, внесений, впевнений, відхилена, минулого, переконаний, пов'язані</li>
      <li>VERB: прийнято, сказати, прийняти, підтримати, зробити, забезпечити, проголосувати, передати, розглянути, включіть</li>
      <li>VERB-Conv: прийнявши, зайнявши, запровадивши, отримавши, охопивши, передбачивши, побачивши, побувавши, пославшись, прочитавши</li>
      <li>VERB-Fin: прийнято, включіть, скажу, сказав, дайте, скажіть, склалася, визначено, дали, відбулося</li>
      <li>VERB-Inf: сказати, прийняти, підтримати, зробити, забезпечити, проголосувати, передати, розглянути, внести, дати</li>
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
      <li>VERB-Fin: будь, давайте, включіть, дайте, скажіть, говоріть, дозвольте, подивіться, покажіть, сідайте</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: буде, є, будемо, було, будуть, була, були, був, буду, будете</li>
      <li>AUX-Fin: буде, є, будемо, було, будуть, була, були, був, буду, будете</li>
      <li>VERB: дякую, прошу, є, хочу, маємо, прийнято, має, думаю, може, надається</li>
      <li>VERB-Fin: дякую, прошу, є, хочу, маємо, прийнято, має, думаю, може, надається</li>
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
      <li>VERB-Fin: скажу, буде, дасть, зачитаю, зробимо, підтримаємо, привітаємо, підемо, підуть, дам</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: було, була, були, був</li>
      <li>AUX-Fin: було, була, були, був</li>
      <li>VERB: хотів, було, мали, просив, сказав, могли, говорили, склалася, була, дали</li>
      <li>VERB-Conv: прийнявши, голосувавши, зайнявши, запровадивши, отримавши, охопивши, передбачивши, побачивши, побувавши, пославшись</li>
      <li>VERB-Fin: хотів, було, мали, просив, сказав, могли, говорили, склалася, була, дали</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: виконуючий, головуючий, діючий, керуючими, контролюючих, Перевіряючих, блокуючих, виконуючого, контролюючим, контролюючими</li>
      <li>AUX-Fin: є, буває</li>
      <li>VERB-Conv: враховуючи, виходячи, зважаючи, кажучи, керуючись, починаючи, користуючись, розуміючи, використовуючи, маючи</li>
      <li>VERB-Fin: дякую, прошу, є, хочу, маємо, має, думаю, може, надається, ставлю</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ-Part: минулого, виконуючий, головуючий, діючий, діючі, керуючими, контролюючих, існуючих, існуючої, Діюча</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: даний, скороченою, прийнятий, передбачені, внесений, впевнений, відхилена, переконаний, пов'язані, Сполучених</li>
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
      <li>ADV: зараз, так, там, тут, тому, тоді, потім, тепер, туди, досі</li>
      <li>DET: цього, цей, цю, це, ці, цієї, цьому, ця, тих, тому</li>
      <li>PRON: це, того, те, цього, тим, тому, цим, цьому, такого, оце</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: десь, якось, іноді, дещо, кудись, чомусь, колись, інакше, інколи</li>
      <li>DET: інших, інші, багато, деяких, декілька, кілька, якісь, багатьох, деякі, іншими</li>
      <li>PRON: хтось, щось, інше, декого, дехто, когось, чого, чогось, іншого, іншому</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: чому, як, де, чого, коли, навіщо, Скільки</li>
      <li>DET: які, Яка, Скільки, Якого, яке, яким</li>
      <li>PRON: що, хто, Чим, Кому</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: ніколи, ніде, нікуди</li>
      <li>DET: жодного, жодної, ніяких, жоден, ніякої, жодна, жодним, жодних, жодному, жодній</li>
      <li>PRON: нічого, ніхто, нікому, нікого, нічим, ніким, ніщо</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: нашої, наших, свої, наша, його, наш, наші, своїх, їх, нашого</li>
      <li>PRON: ми, я, ви, нас, вони, нам, вас, вам, він, вона</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>DET: одне, один</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: де, як, чому, коли, куди, звідки, поки, скільки</li>
      <li>DET: які, який, яка, яку, яких, яке, якої, яким, якого, якому</li>
      <li>PRON: що, хто, чого, кого, ким, яка, чим, чому, яку, кому</li>
      <li>SCONJ: коли, як, поки, що, чим</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: завжди, скрізь, всюди</li>
      <li>DET: всі, всіх, все, весь, вся, кожного, всім, усіх, всю, кожен</li>
      <li>PRON: все, всім, всі, всіх</li>
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
      <li>NOUN: тисяч, мільйонів, мільярдів, тисячі, мільйона, млн., мільйони, мільярди, мільярда, тис.</li>
      <li>NUM: два, один, 3, двох, 15, 5, одну, одна, три, одне</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: друге, 1, першу, першому, другого, другому, першої, 2003, 2021, 3</li>
      <li>NOUN: друге, третє, Четверте, перше, П'яте</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: нашої, наших, свої, наша, його, наш, наші, своїх, нашого, її</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: свої, своїх, свою, свого, своєму, своє, своїй, своєї, своїм, своїми</li>
      <li>PRON: себе, собі, собою, сама</li>
      <li>VERB: надається, стосується, пропонується, відбувається, звернутися, здається, здійснюється, підготуватися, залишається, знаходиться</li>
      <li>VERB-Conv: керуючись, користуючись, дивлячись, Готуючись, базуючись, звертаючись, користаючись, повертаючись, пославшись, Ґрунтуючись</li>
      <li>VERB-Fin: надається, стосується, пропонується, відбувається, здається, здійснюється, залишається, знаходиться, робиться, склалася</li>
      <li>VERB-Inf: звернутися, підготуватися, записатися, займатися, визначитися, повернутися, розглядатися, розібратися, вирішуватися, визначатись</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>0
    <ul>
      <li>VERB-Fin: прийнято, визначено, зареєстровано, створено, затверджено, проведено, вичерпано, зроблено, написано, передбачено</li>
    </ul>
  </li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: будемо, буду, будем</li>
      <li>DET: наших, нашої, наша, наш, наші, нашого, нашу, нашій, наше, нашими</li>
      <li>PRON: ми, я, нас, нам, мене, мені, нами, мною</li>
      <li>VERB-Fin: дякую, прошу, хочу, маємо, думаю, ставлю, переходимо, можемо, розумію, вважаю</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: будете</li>
      <li>DET: вашого, вашу, ваші, ваших, ваша, вашої, ваш, ваше, вашими, вашому</li>
      <li>PRON: ви, вас, вам, вами</li>
      <li>VERB-Fin: будь, давайте, знаєте, включіть, наполягаєте, дайте, скажіть, говоріть, дозвольте, подивіться</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: буде, є, будуть, буває</li>
      <li>DET: його, їх, її, їхні, їхнього, їхнім, їхніми, їхніх, їхньої, їхню</li>
      <li>PRON: вони, він, вона, їх, його, її, них, їм, воно, нього</li>
      <li>VERB-Fin: є, має, може, надається, стосується, немає, мають, пропонується, відбувається, наполягає</li>
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
          <li>NOUN: МЗС, млн., тис., ЗМІ, ОСББ, ТСК, ВАТ, ВВП, ДЮСШ, МВС</li>
          <li>NUM: млн., тис.</li>
          <li>PROPN: НАТО, РНБО, ООН, РФ, ДНР, ЛНР, ОБСЄ, СРСР, СБУ, УДАР</li>
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
          <li>NOUN: бджоли</li>
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
          <li>ADJ: виконуючий, виступаючі, головуючий, діючий, діючі, керуючими, контролюючих, обгрунтовану, обгрунтовані, поправочним</li>
          <li>ADJ-Part: виконуючий, головуючий, діючий, діючі, керуючими, контролюючих, обгрунтовану, обгрунтовані, існуючих, існуючої</li>
          <li>ADV: зараннє, Притому, даже, наврядчи, невзмозі, просто-напросто, также</li>
          <li>DET: їх, цим, деяким, іншим</li>
          <li>NOUN: головуючий, грунтів, млн., доставки, діджиталізація, пропозиціям, підгрунтя, співтовариство, ігр, Нестиковка</li>
          <li>NUM: млн., 12-ти, 14-ти, 17-ти, 17-ть, 336-ма, 395-ти, півтора</li>
          <li>PART: да</li>
          <li>PRON: їх, вас</li>
          <li>SCONJ: поскільки</li>
          <li>VERB-Fin: пов'язано, Відслідковується, викликано, задіяно, касається, причитайте, протирічать, протирічить, співпадає, установлюються</li>
          <li>VERB-Inf: задіяти, відслідкувати</li>
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
          <li>ADP: у, з, під, в, по, на, Згідно, крім, поруч, разом</li>
          <li>ADV: відповідно, згідно, поряд, незважаючи, разом</li>
          <li>VERB-Conv: починаючи</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: в, у</li>
          <li>ADV: так, поки, знову, більш, більше, все, перш, навряд</li>
          <li>DET: таким, один, тим</li>
          <li>PART: все, хоча, так, тільки, всього, не</li>
          <li>PRON: все, сама, тим</li>
          <li>X: ad</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>ADV: так</li>
          <li>CCONJ: а, але, чи, та</li>
          <li>PART: не, чи</li>
        </ul>
      </li>
      <li>DET
        <ul>
          <li>DET: сама, свого, такий, тих</li>
          <li>PRON: Що</li>
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
          <li>PART: чи</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>ADV: де</li>
          <li>DET: одне, один</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: для</li>
          <li>ADV: тому, так, перш</li>
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
          <li>X: COVID, hoc, на, русском, from, you, бацька, будете, вы, за</li>
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
          <li>NOUN: МЗС, євро, вето, табло, пані, ЗМІ, Мінекоресурсів, ОСББ, ТСК, півмільйона</li>
          <li>PRON: їх, його, її</li>
          <li>PROPN: НАТО, РНБО, Совсун, Геращенко, ООН, Тимошенко, РФ, Білозір, ДНР, ЛНР</li>
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
          <li>PROPN: України, Україні, Криму, Україна, Росії, Крим, Україну, Росія, Тузла, Києві</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>PROPN: Олександр, Сергій, Володимире, Михайло, Володимир, Олександре, Микола, Іван, Григорій, Юрій</li>
        </ul>
      </li>
      <li>Pat
        <ul>
          <li>PROPN: Михайловичу, Валентиновичу, Миколайович, Івановичу, Віталійович, Іванович, Сергійович, Валентинович, Віталійовичу, Олексійович</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>PROPN: Іванович, Цимбалюк, Михайлович, Кармазін, Мамка, Путіна, Крулько, Совсун, Януковича, Бакунець</li>
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
          <li>ADJ: державної, здійсненним, природній, сильнодіючим, старим, сшита</li>
          <li>ADJ-Part: здійсненним, сшита</li>
          <li>ADV: неможна, пилко</li>
          <li>DET: всім, багатьом, деяким, таке, тот, яким, іншим</li>
          <li>NOUN: напрямкам, Голову, Держжитлокомунгос, Мінюсті, НКРЄ, Стрижнем, депутати, категоріям, країни, лоса</li>
          <li>PRON: яке</li>
          <li>PROPN: Железняк, Ображіївкі, Руслана, Стефанчука</li>
          <li>PUNCT: ., ...</li>
          <li>VERB-Fin: з'ясувало, залежить, зареєстровано, находимося, повстало, позбавлено, почались</li>
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
      <li>VERB--NOUN-Nom (13)</li>
      <li>VERB--PRON-Nom (5)</li>
      <li>VERB-Conv--PRON-Nom (1)</li>
      <li>VERB-Fin--NOUN-Gen (120)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(до) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(понад) (1)</li>
      <li>VERB-Fin--NOUN-Nom (1493)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Gen (12)</li>
      <li>VERB-Fin--PRON-Nom (1807)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Nom (64)</li>
      <li>VERB-Inf--PRON-Nom (74)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (9)</li>
      <li>VERB--PRON-Acc (2)</li>
      <li>VERB-Conv--NOUN-Acc (49)</li>
      <li>VERB-Conv--NOUN-Gen (2)</li>
      <li>VERB-Conv--PRON-Acc (6)</li>
      <li>VERB-Fin--NOUN-Acc (1389)</li>
      <li>VERB-Fin--NOUN-Dat (2)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(в) (1)</li>
      <li>VERB-Fin--NOUN-Gen (221)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(близько) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(плюс) (1)</li>
      <li>VERB-Fin--NOUN-Loc-ADP(по) (1)</li>
      <li>VERB-Fin--NOUN-Nom (1)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (193)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Fin--PRON-Gen (10)</li>
      <li>VERB-Fin--PRON-Gen-ADP(з) (1)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN-Acc (1086)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(про) (1)</li>
      <li>VERB-Inf--NOUN-Dat (2)</li>
      <li>VERB-Inf--NOUN-Gen (56)</li>
      <li>VERB-Inf--PRON-Acc (155)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Gen (8)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Dat,Gen (1)</li>
      <li>VERB--PRON-Dat (1)</li>
      <li>VERB-Conv--NOUN-Dat (2)</li>
      <li>VERB-Fin--NOUN-Dat (146)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Ins (9)</li>
      <li>VERB-Fin--PRON-Dat (134)</li>
      <li>VERB-Inf--NOUN-Dat (57)</li>
      <li>VERB-Inf--NOUN-Ins (8)</li>
      <li>VERB-Inf--PRON-Dat (38)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 11 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: поводити себе, створити собі, уявити собі, баламутити себе, забирати собі, задати собі, захистити себе, обирати собі, обмежувати себе, помітити собі, провести собі</li>
    <ul>
      <li>Out of those, 2 lemmas occurred more than once, but never without a reflexive dependent. Examples: поводити, уявити</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 21 relation subtypes: <a>acl:relcl</a>, <a>advmod:det</a>, <a>advmod:emph</a>, <a>advmod:neg</a>, <a>aux:pass</a>, <a>compound:svc</a>, <a>det:numgov</a>, <a>det:nummod</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>flat:range</a>, <a>flat:repeat</a>, <a>flat:title</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>nummod:gov</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>parataxis:discourse</a>, <a>parataxis:rel</a>, <a>xcomp:pred</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>clf</a>, <a>goeswith</a>, <a>dep</a></li>
</ul>
