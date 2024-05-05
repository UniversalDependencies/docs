---
layout: base
title:  'UD_Armenian-BSUT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Armenian BSUT

Language: [Armenian](/hy/index.html) (code: `hy`)<br/>
Family: Indo-European, Armenian

This treebank has been part of Universal Dependencies since the UD v2.9 release.

The following people have contributed to making this treebank part of UD: Marat M. Yavrumyan.

Repository: [UD_Armenian-BSUT](https://github.com/UniversalDependencies/UD_Armenian-BSUT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhy_bsut214)<br />
Download all treebanks: [UD 2.14](/#download)

License: CC BY-SA 4.0

Genre: blog, fiction, government, legal, news, nonfiction, web, wiki

Questions, comments?
General annotation questions (either Armenian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Armenian-BSUT/issues).
If you want to collaborate, please contact [marat&nbsp;•&nbsp;yavrumyan&nbsp;(æt)&nbsp;plus&nbsp;•&nbsp;ac&nbsp;•&nbsp;at].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

A Universal Dependencies treebank for Eastern Armenian developed for UD originally by the ArmTDP team led by Marat M. Yavrumyan at the V. Brusov State University in Yerevan.



The UD_Armenian-BSUT treebank is based on the Eastern Armenian section of the Հայերենի ծառադարան dataset (ArmTDP v2.0), a broad-coverage corpus of general Modern Standard Armenian covering numerous genres.

The annotation scheme was developed in accordance with the UD guidelines. The original data was manually annotated by the ArmTDP team. The tokenization and POS-tagging process was carried out through alternating steps of glossary-based automatic scripting and manual revision.

## Acknowledgments

This treebank is developed in the frame of the program "HayLingvoTech" excellency center implemented by the V. Brusov State University with the funding of the Competitive Innovation Fund of Armenia.

The treebank created by: Marat M. Yavrumyan, Rima R. Grigoryan, Anna S. Danielyan, Setrag H. M. Hovsepian.

## References

Yavrumyan M. M., Danielyan A. S., “Universal Dependencies and the Armenian Treebank.” Herald of the Social Sciences (2).231-244, 2020. (in Armenian)

## Format

UD_Armenian-BSUT data conforms to [CoNLL-U](http://universaldependencies.org/format.html) format with the following specifics:
* Sentence-level comments:
* Document titles are present as `# doc_title = Ռետրո․ Վանո Սիրադեղյան.
* Document boundaries are present as `# newdoc id = fiction/legal/news/nonfiction-xxxx`.
* Sentence-level paragraph boundaries are present as `# newpar id = newdoc-xxxx`.
* Sentence boundaries are present as `# sent_id = newdoc-newparxxxx`.
* XPOSTAG column is currently unused.
* No enhanced dependencies or empty nodes present in DEPS column.
* MISC column:
* `SpaceAfter=No` markers are present.
* Form (`Translit`) and lemma (`LTranslit`) transliterations are present (ISO 9985:1996).
* Document, paragraph, sentence, and token ids are 4-character base-32 numbers. They survive treebank updates.



# Statistics of UD Armenian BSUT

## POS Tags

[ADJ](hy_bsut-pos-ADJ.html) – [ADP](hy_bsut-pos-ADP.html) – [ADV](hy_bsut-pos-ADV.html) – [AUX](hy_bsut-pos-AUX.html) – [CCONJ](hy_bsut-pos-CCONJ.html) – [DET](hy_bsut-pos-DET.html) – [INTJ](hy_bsut-pos-INTJ.html) – [NOUN](hy_bsut-pos-NOUN.html) – [NUM](hy_bsut-pos-NUM.html) – [PART](hy_bsut-pos-PART.html) – [PRON](hy_bsut-pos-PRON.html) – [PROPN](hy_bsut-pos-PROPN.html) – [PUNCT](hy_bsut-pos-PUNCT.html) – [SCONJ](hy_bsut-pos-SCONJ.html) – [SYM](hy_bsut-pos-SYM.html) – [VERB](hy_bsut-pos-VERB.html) – [X](hy_bsut-pos-X.html)

## Features

[Abbr](hy_bsut-feat-Abbr.html) – [AdpType](hy_bsut-feat-AdpType.html) – [Animacy](hy_bsut-feat-Animacy.html) – [Aspect](hy_bsut-feat-Aspect.html) – [Case](hy_bsut-feat-Case.html) – [ConjType](hy_bsut-feat-ConjType.html) – [Connegative](hy_bsut-feat-Connegative.html) – [Definite](hy_bsut-feat-Definite.html) – [Degree](hy_bsut-feat-Degree.html) – [Deixis](hy_bsut-feat-Deixis.html) – [Deixis[psor]](hy_bsut-feat-Deixis-psor.html) – [Echo](hy_bsut-feat-Echo.html) – [Foreign](hy_bsut-feat-Foreign.html) – [Hyph](hy_bsut-feat-Hyph.html) – [Mood](hy_bsut-feat-Mood.html) – [NameType](hy_bsut-feat-NameType.html) – [Number](hy_bsut-feat-Number.html) – [Number[psor]](hy_bsut-feat-Number-psor.html) – [NumForm](hy_bsut-feat-NumForm.html) – [NumType](hy_bsut-feat-NumType.html) – [Person](hy_bsut-feat-Person.html) – [Person[psor]](hy_bsut-feat-Person-psor.html) – [Polarity](hy_bsut-feat-Polarity.html) – [Polite](hy_bsut-feat-Polite.html) – [Poss](hy_bsut-feat-Poss.html) – [PronType](hy_bsut-feat-PronType.html) – [Reflex](hy_bsut-feat-Reflex.html) – [Style](hy_bsut-feat-Style.html) – [Subcat](hy_bsut-feat-Subcat.html) – [Tense](hy_bsut-feat-Tense.html) – [Typo](hy_bsut-feat-Typo.html) – [VerbForm](hy_bsut-feat-VerbForm.html) – [Voice](hy_bsut-feat-Voice.html)

## Relations

[acl](hy_bsut-dep-acl.html) – [acl:relcl](hy_bsut-dep-acl-relcl.html) – [advcl](hy_bsut-dep-advcl.html) – [advcl:relcl](hy_bsut-dep-advcl-relcl.html) – [advmod](hy_bsut-dep-advmod.html) – [advmod:emph](hy_bsut-dep-advmod-emph.html) – [amod](hy_bsut-dep-amod.html) – [appos](hy_bsut-dep-appos.html) – [aux](hy_bsut-dep-aux.html) – [aux:ex](hy_bsut-dep-aux-ex.html) – [case](hy_bsut-dep-case.html) – [case:loc](hy_bsut-dep-case-loc.html) – [cc](hy_bsut-dep-cc.html) – [ccomp](hy_bsut-dep-ccomp.html) – [compound](hy_bsut-dep-compound.html) – [compound:lvc](hy_bsut-dep-compound-lvc.html) – [compound:redup](hy_bsut-dep-compound-redup.html) – [compound:svc](hy_bsut-dep-compound-svc.html) – [conj](hy_bsut-dep-conj.html) – [cop](hy_bsut-dep-cop.html) – [csubj](hy_bsut-dep-csubj.html) – [csubj:pass](hy_bsut-dep-csubj-pass.html) – [dep](hy_bsut-dep-dep.html) – [det](hy_bsut-dep-det.html) – [det:poss](hy_bsut-dep-det-poss.html) – [discourse](hy_bsut-dep-discourse.html) – [dislocated](hy_bsut-dep-dislocated.html) – [expl](hy_bsut-dep-expl.html) – [fixed](hy_bsut-dep-fixed.html) – [flat](hy_bsut-dep-flat.html) – [flat:dist](hy_bsut-dep-flat-dist.html) – [flat:name](hy_bsut-dep-flat-name.html) – [flat:range](hy_bsut-dep-flat-range.html) – [iobj](hy_bsut-dep-iobj.html) – [list](hy_bsut-dep-list.html) – [mark](hy_bsut-dep-mark.html) – [nmod](hy_bsut-dep-nmod.html) – [nmod:npmod](hy_bsut-dep-nmod-npmod.html) – [nmod:poss](hy_bsut-dep-nmod-poss.html) – [nsubj](hy_bsut-dep-nsubj.html) – [nsubj:caus](hy_bsut-dep-nsubj-caus.html) – [nsubj:pass](hy_bsut-dep-nsubj-pass.html) – [nummod](hy_bsut-dep-nummod.html) – [obj](hy_bsut-dep-obj.html) – [obl](hy_bsut-dep-obl.html) – [obl:agent](hy_bsut-dep-obl-agent.html) – [orphan](hy_bsut-dep-orphan.html) – [parataxis](hy_bsut-dep-parataxis.html) – [punct](hy_bsut-dep-punct.html) – [reparandum](hy_bsut-dep-reparandum.html) – [root](hy_bsut-dep-root.html) – [vocative](hy_bsut-dep-vocative.html) – [xcomp](hy_bsut-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2300 sentences, 41492 tokens and 41805 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 8191 tokens (20%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 47 types of words that contain both letters and punctuation. Examples: 1-ին, 19-րդ, 5-րդ, COVID-19, Lragir.am, 20-րդ, 3-րդ, 4-րդ, 44-օրյա, 7-րդ, 88-րդ, Media.am, Պօ՚, 11-րդ, 115-րդ, 2-րդ, 6-ամսյա, 72-րդ, 9-րդ, 12-ամսյա, 12-րդ, 13-րդ, 17-րդ, 1890-ական, 1950-ական, 1960-ական, 234-րդ, 241.2-րդ, 40-րդ, 411-րդ, 6-րդ, 8.1-րդ, 8.2-րդ, 90-րդ, 90-օրյա, 91-րդ, SARS-CoV-2, application.doc, http://www.azdarar.am, https://gov.am/am/regions/, https://nkrmil.am/, https://www.mil.am/, https://www.redcross.am/, moderator@moj.am, tass.ru, www.gnumner.am, զ/ր</li>
</ul>

<ul>
<li>This corpus contains 313 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 145 types of multi-word tokens. Examples: ի՞նչ, ո՛չ, թե՛, թե՞, ո՞վ, կա՛մ, այո՛, ինչպե՞ս, և՛, ա՛յն, ինչո՞ւ, արդյո՞ք, գիտե՞ք, շա՛տ, սպասի՜, Ի՜նչ, չէ՞, չի՞, Ռու՛բ, Ռու՜բ, ափսո՜ս, ինչի՞, մի՞թե, շա՜տ, ո՛րը, չե՞ս, չե՞ք, քանի՜, Վիլի՛կը, ա՛յս, այսպե՛ս, ավա՜ղ, դո՛ւ, ե՞րբ, ինչպիսի՞, հա՛մ, հարկադի՛ր, մե՛ր, ո՞ր, ու՞մ, Ա՜յ, Արի՜, Ե՛վ, Երևանո՞ւմ, Զգուշացե՛ք, Զեյթո՞ւն, Թո՜ղ, Իիիիի՞նչ, Լուսի՛կ, Կնշե՞նք.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 32 word types tagged as particles (PART): Ավելին, Ինչ, ախր, ահա, այնուամենայնիվ, անշուշտ, արդյոք, գեթ, գոնե, գուցե, դիցուք, երևի, էլ, էլի, ընդհակառակը, թե, թեկուզ, թերևս, իհարկե, իրոք, հա, հապա, հիրավի, մի, միգուցե, միթե, յանի, նույնիսկ, ոչ, որ, սակայն, ցավոք</li>
</ul>

<ul>
<li>This corpus contains 59 lemmas tagged as pronouns (PRON): ամբողջը, ամենը, այդ, այդպիսի, այլ, այլն, այն, այնինչ, այնպիսի, այնտեղ, այս, այսինչ, այստեղ, այսքան, բոլոր, բոլորը, դա, դու, դուք, ես, էդ, էդքան, էն, էս, էստեղ, իիիիինչ, ինչ, ինչորմեկը, ինչորպիսին, ինչպիսի, ինքը, իրար, իրենը, իրենք, մեկը, մենք, մերը, մերոնք, միմյանց, մյուս, մնացած, յուրաքանչյուրը, նա, նույնը, նրանցը, նրանք, ոմն, ոչինչ, ով, որ, որոնք, որպիսի, որտեղ, որքան, ուրիշ, ոք, սա, սաղը, քանիսը</li>
</ul>

<ul>
<li>This corpus contains 48 lemmas tagged as determiners (DET): ամբողջ, ամեն, ամենայն, այդ, այդպիսի, այլ, այլևայլ, այն, այնպիսի, այնքան, այս, այսինչ, այսպիսի, բոլոր, դու, դուք, ես, էդ, էն, էնքան, էս, էստեսակ, ինչ, ինչպիսի, ինչքան, ինքը, իրենք, համայն, մեկ, մենք, մի, մյուս, յուրաքանչյուր, նա, նույն, նրանք, ողջ, որ, որոշ, որպիսի, որևէ, ուրիշ, ս., սաղ, սույն, տենց, ցանկացած, քանի</li>
</ul>

<ul>
<li>Out of the above, 25 lemmas occurred sometimes as PRON and sometimes as DET: այդ, այդպիսի, այլ, այն, այնպիսի, այս, այսինչ, բոլոր, դու, դուք, ես, էդ, էն, էս, ինչ, ինչպիսի, ինքը, իրենք, մենք, մյուս, նա, նրանք, որ, որպիսի, ուրիշ</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): եմ, լինել, ունեմ, պետք, պիտի</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: եմ, լինել, ունեմ</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: ծխելիս, կարդալիս, անցնելիս, ասելիս, արտասանելիս, գողանալիս, դիտելիս, թարգմանելիս, հանդիպելիս, ձևակերպելիս</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: է, են, էր, էին, չի, ենք, եմ, չեն, չէ, չէր</li>
    <li>VERB: ունի, ունեն, կա, չկա, եկավ, կան, ասաց, կարծես, սկսեց, լինի</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: լինել, անել, կատարելու, լինելու, հաստատելու, ներկայացնել, պատմել, տալու, տալ, ճանաչելու</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: եղել, լինելու, լինի, լինում</li>
    <li>VERB: ասում, ուզում, եղել, անում, ասել, կապված, ունեցող, տալիս, սահմանված, նայում</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>



<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Hum
    <ul>
      <li>NOUN: ժողովրդի, վարչապետի, տեր, հայ, Սարյանը, մարդկանց, Վարպետը, վարպետի, մարդիկ, անձանց</li>
      <li>PROPN: Ջիվանին, Կարինե, Փաշինյանը, Նիկոլ, Նվարդին, Սարյանի, Փաշինյանի, Լևոն, Արտակը, Ղազարոս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nhum
    <ul>
      <li>NOUN: հանրապետության, ի, թվականի, կառավարության, ին, բան, անգամ, ը, տարի, ընկերության</li>
      <li>PROPN: Հայաստանի, ՀՀ, Հայաստանում, Արցախի, Խոսրովի, Ռուսաստանի, Ադրբեջանի, Իրանի, Հայաստան, Թուրքիայի</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Assoc
    <ul>
      <li>PRON: մերոնք</li>
      <li>PROPN: Բենկոյենց, Հաշտոնց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Coll
    <ul>
      <li>NOUN: այսօր, կառավարման, կատարման, սփյուռքի, անվտանգության, պաշտպանության, գոյություն, լիզինգի, տեղեկատվության, կրթության</li>
      <li>PROPN: Երկիրը</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Fin: են, էին, ենք, չեն, չենք, եք, էինք, չէին, չեք, էիք</li>
      <li>DET: մեր, իրենց, ձեր, նրանց</li>
      <li>NOUN: մարդկանց, մարդիկ, անձանց, վարկերի, տարիների, տարիներ, գրողների, կոմիքսների, միջոցառումների, տարիներին</li>
      <li>PRON: մենք, որոնք, մեզ, նրանց, դրանց, նրանք, դրանք, ովքեր, իրենց, որոնց</li>
      <li>PROPN: Սարյանների, Գոչունյանները, Սարյաններին, Սարոյին, Տալոյանների, Օսկարների</li>
      <li>VERB-Fin: ունեն, կան, տվեք, գիտեք, գիտեն, ունենք, չունեն, չկան, սկսեցին, առնենք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX-Fin: է, էր, չի, եմ, չէ, չէր, էի, չես, ես, չեմ</li>
      <li>DET: իր, նրա, իմ, ձեր, քո</li>
      <li>NOUN: հանրապետության, ի, թվականի, կառավարության, ին, բան, անգամ, ը, տարի, ժողովրդի</li>
      <li>PRON: ես, նա, որը, դա, որի, սա, ինչ, ով, իր, իրեն</li>
      <li>PROPN: Հայաստանի, ՀՀ, Հայաստանում, Արցախի, Ջիվանին, Խոսրովի, Ռուսաստանի, Կարինե, Ադրբեջանի, Իրանի</li>
      <li>VERB-Fin: ունի, կա, չկա, եկավ, ասաց, կարծես, սկսեց, լինի, չունի, տվեց</li>
      <li>VERB-Part: մեկնեց, նույնացվեց</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADP: տակից, վրայից, ետևից, հետևից, միջից</li>
      <li>NOUN: ից, կողմից, թվականից, բերանից, պատերազմից, տեսանկյունից, ամսից, անունից, գրպանից, լանջերից</li>
      <li>PRON: սրանից, որից, ամենից, դրանից, իրենից, որոնցից, որտեղից, մեզնից, նրանցից, ումից</li>
      <li>PROPN: Երևանից, Չարենցից, Չինաստանից, Պետրոսյանից, Ռուսաստանից, Ալամդարյանից, Անգլիայից, Արևմուտքից, Բաթումից, Բասենից</li>
      <li>VERB-Inf: արժանանալուց, կորցնելուց, Կարդալուց, անցնելուց, ապրելուց, առնելուց, բարձրացնելուց, գալուց, գնալուց, գրվելուց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: իս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADP: առաջվա, տակի</li>
      <li>NOUN: հանրապետության, ի, թվականի, կառավարության, ին, ժողովրդի, ընկերության, վարչապետի, թվականին, տարվա</li>
      <li>PRON: մեզ, որի, նրանց, իրեն, ինձ, դրանց, նրան, իրենց, քեզ, ձեզ</li>
      <li>PROPN: Հայաստանի, Արցախի, Խոսրովի, Ռուսաստանի, Ադրբեջանի, Իրանի, Նվարդին, Սարյանի, Փաշինյանի, Թուրքիայի</li>
      <li>VERB-Inf: կատարելու, լինելու, հաստատելու, տալու, ճանաչելու, լուծելու, ապահովելու, կազմակերպելու, ներկայացնելու, ունենալու</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADP: վրայի</li>
      <li>DET: իր, մեր, նրա, իրենց, իմ, ձեր, նրանց, քո</li>
      <li>NOUN: հիման, հայոց, վերջո, ծննդյան, Հայորդյաց, գրոց, երգոց, ներդրումը, վարկառուն</li>
      <li>PRON: իր, դրա, նրա, մեկի, մեր, բոլորի, իմ, ամբողջի, ձեր, ամենի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADP: միջով, վրայով, առջևով, մոտով</li>
      <li>NOUN: պատճառով, լեզվով, որոշմամբ, արտարժույթով, թվով, ուղղությամբ, գործով, մասով, չափով, Ինտերնետով</li>
      <li>PRON: դրանով, որով, իրենով, ինչով, որքանով, Այսքանով</li>
      <li>PROPN: Արմենչիկով, Դաղստանով, Մոսկվայով, Նարեկացիով, Սարյանով</li>
      <li>VERB: տալով, առնելով, ասելով, փորձելով, դառնալով, ելնելով, ընդունելով, թողնելով, ղեկավարվելով, չտալով</li>
      <li>VERB-Inf: տալով, առնելով, ասելով, փորձելով, դառնալով, ելնելով, ընդունելով, թողնելով, ղեկավարվելով, չտալով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADP: հետևում</li>
      <li>NOUN: դեպքում, թվում, կայքում, կենտրոնում, տարածքում, բանտում, պայմաններում, անվանակարգում, կյանքում, սրճարանում</li>
      <li>PRON: որում, մեզանում, դրանում, մեկում, որոնցում</li>
      <li>PROPN: Հայաստանում, Երևանում, Արցախում, Թիֆլիսում, Ճապոնիայում, Թուրքիայում, Մոսկվայում, Ստեփանակերտում, Ֆեյսբուքում, Եվրոպայում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADP: առջև, մեջը, հետը, տակը</li>
      <li>NOUN: բան, անգամ, ը, տարի, օր, ժամանակ, տեր, հայ, ն, օրը</li>
      <li>PRON: մենք, ես, նա, որը, դա, որոնք, ինչ, սա, ով, ինքն</li>
      <li>PROPN: ՀՀ, Ջիվանին, Կարինե, Փաշինյանը, Նիկոլ, Հայաստան, Լևոն, Հայաստանը, Ռուսաստանը, Արտակը</li>
      <li>VERB-Inf: լինելը, տալը, ընդունելը, լինել, խոսելը, այրվելը, անելը, ապրելը, ապրելն, ավարտելը</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADP: հետը</li>
      <li>NOUN: ին, ը, թվականին, ն, օրը, կառավարությունը, Սարյանը, Վարպետը, գործը, տարիներին</li>
      <li>PRON: որը, որն, որին, ինչը, ինչն, ինչպիսին, մյուսը, մյուսն, Այնինչը, Էնը</li>
      <li>PROPN: Ջիվանին, Փաշինյանը, Նվարդին, Հայաստանը, Ռուսաստանը, Արտակը, Ռուբենը, Ադրբեջանը, Ռուբենին, Սարոն</li>
      <li>VERB-Inf: լինելը, տալը, ապրելուն, ընդունելը, խոսելը, այրվելը, անելը, ապշելուն, ապրելը, ապրելն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>NOUN: հանրապետության, ի, թվականի, կառավարության, բան, անգամ, տարի, ժողովրդի, ընկերության, օր</li>
      <li>PRON: ինչ, որի, որում, ինչի, ոչինչ, որից, որով, ինչից, ինչով, մյուսի</li>
      <li>PROPN: Հայաստանի, ՀՀ, Հայաստանում, Արցախի, Խոսրովի, Ռուսաստանի, Կարինե, Ադրբեջանի, Իրանի, Նիկոլ</li>
      <li>VERB: կատարելու, լինելու, հաստատելու, տալու, ճանաչելու, լուծելու, տալով, առնելով, ապահովելու, ասելով</li>
      <li>VERB-Inf: կատարելու, լինելու, հաստատելու, տալու, ճանաչելու, լուծելու, տալով, առնելով, ապահովելու, ասելով</li>
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
      <li>ADJ: Գերտեխնոլոգիական</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADV: ավելի, պակաս, ավել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: կարող, մեծ, նոր, հայտնի, վերջին, ընդհանուր, առաջին, լավ, շատ, տարբեր</li>
      <li>ADV: շատ, քիչ, հաճախ, մոտ, լավ, արագ, ճիշտ, երկար, փոքր, անկեղծ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: լավագույն, մեծագույն, ամենամեծ, ամենակարևոր, լրջագույն, կարևորագույն, Ամենաերկար, ամենաայցելվող, ամենաապահով, ամենաբարձր</li>
      <li>ADV: ամենաակնառուն, ամենագեղեցիկը, ամենաթանկն, ամենակարևորն, ամենաուրախանալին, լավագույնը, լավագույնն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: չի, չեն, չէ, չէր, չենք, չես, չեմ, չէին, չեք, չէինք</li>
      <li>AUX-Fin: չի, չեն, չէ, չէր, չենք, չես, չեմ, չէին, չեք, չէինք</li>
      <li>PART: ոչ, մի</li>
      <li>VERB-Fin: չկա, չունի, չգիտի, չունեն, չկան, չգիտեմ, չունենք, չուներ, չգիտեն, չգնաս</li>
      <li>VERB-Inf: չլինելու, չտալով, չթողնել, Չհասկանալ, չանվանել, չդարձնելով, չդիպչելու, չդնելն, չզգալու, չթվարկել</li>
      <li>VERB-Part: չեղած, չվճարված, չունեցող, չտանող, Չզեկուցվող, Չվերջացող, չարտաբերված, չբխող, չգրված, չթաղված</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX: է, են, էր, էին, ենք, եմ, պիտի, պետք, էի, եք</li>
      <li>AUX-Fin: է, են, էր, էին, ենք, եմ, էի, եք, ես, էինք</li>
      <li>VERB: ունի, ունեն, լինել, կա, կապված, ունեցող, եկավ, կան, ասաց, սահմանված</li>
      <li>VERB-Fin: ունի, ունեն, կա, եկավ, կան, ասաց, կարծես, սկսեց, լինի, տվեց</li>
      <li>VERB-Inf: լինել, անել, կատարելու, լինելու, հաստատելու, ներկայացնել, պատմել, տալու, տալ, ճանաչելու</li>
      <li>VERB-Part: կապված, ունեցող, սահմանված, գտնվող, կախված, պայմանավորված, նախատեսված, կանգնած, ուղղված, բացահայտված</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Dur
    <ul>
      <li>VERB-Part: ունեցող, գտնվող, ապրող, գործող, հոսող, իրականացնող, հանդիսացող, նախորդող, շարունակվող, պահանջող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dur,Perf
    <ul>
      <li>VERB-Fin: ստեղծեցինք</li>
      <li>VERB-Part: առաջացել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: է, են, էր, էին, չի, ենք, եմ, չեն, չէ, չէր</li>
      <li>AUX-Part: լինում</li>
      <li>VERB-Fin: ունի, ունեն, կա, չկա, կան, չունի, գիտեր, գիտեք, ուներ, գիտեն</li>
      <li>VERB-Part: ասում, ուզում, անում, տալիս, նայում, խոսում, ներկայացնում, ունենում, տեսնում, փորձում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp,Iter
    <ul>
      <li>VERB-Part: կոխկռճում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter
    <ul>
      <li>VERB-Inf: ճտճտալով, քաշքշելը</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter,Perf
    <ul>
      <li>VERB-Fin: կտրտվեց, ջարդոտվեցին</li>
      <li>VERB-Part: ցռոտած, խառնշտորած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter,Prosp
    <ul>
      <li>VERB-Fin: ծամծմի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Part: եղել</li>
      <li>VERB-Fin: եկավ, ասաց, սկսեց, տվեց, եղավ, տեսավ, դարձավ, զգաց, բացեց, փորձեց</li>
      <li>VERB-Part: եղել, ասել, կապված, սահմանված, եկել, արել, ունեցել, դարձել, կախված, պայմանավորված</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB-Conv: ծխելիս, կարդալիս, անցնելիս, ասելիս, արտասանելիս, գողանալիս, դիտելիս, թարգմանելիս, հանդիպելիս, ձևակերպելիս</li>
      <li>VERB-Fin: խնայի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>AUX-Fin: կլինի, լիներ</li>
      <li>AUX-Part: լինելու, լինի</li>
      <li>VERB-Fin: կարծես, լինի, կլինի, կքնես, տվեք, ասես, արի, կանցնի, թող, իմանայի</li>
      <li>VERB-Part: գալու, շարունակելու, գնալու, խոսելու, օգնի, Ընդլայնվելու, ասելու, ասի, բացվելու, բերի</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: կլինի</li>
      <li>VERB-Fin: կլինի, կքնես, կանցնի, կգամ, կգտնի, կերևա, կհոսենք, Կնշենք, կայցելի, կանի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: տվեք, արի, թող, սպասի, պատկերացրեք, եկեք, Զգուշացեք, Համաձայնեք, ասա, եղեք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: է, են, էր, էին, չի, ենք, եմ, չեն, չէ, չէր</li>
      <li>VERB-Fin: ունի, ունեն, կա, չկա, եկավ, կան, ասաց, սկսեց, չունի, տվեց</li>
      <li>VERB-Part: մեկնեց, նույնացվեց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>AUX: պիտի, պետք, չպետք, չպիտի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: լիներ</li>
      <li>VERB-Fin: կարծես, լինի, ասես, իմանայի, առնենք, խոսենք, կարծեմ, կարողանա, Մեջբերեմ, Պատասխանենք</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: էր, էին, չէր, էի, էինք, չէին, չէինք, Չէի, էիր, լիներ</li>
      <li>VERB-Fin: գիտեր, ուներ, իմանայի, կար, չուներ, աներ, լիներ, հասկանար, նայեր, ունեին</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: էիք</li>
      <li>VERB-Fin: եկավ, ասաց, սկսեց, տվեց, եղավ, տեսավ, դարձավ, զգաց, բացեց, փորձեց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: է, են, չի, ենք, եմ, չեն, չէ, եք, չենք, չես</li>
      <li>VERB-Fin: ունի, ունեն, կա, չկա, կան, կարծես, լինի, չունի, կլինի, կքնես</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB: ունի, ասում, ուզում, ասել, ունեն, անում, ունեցող, տալիս, ասաց, կարծես</li>
      <li>VERB-Conv: ծխելիս, կարդալիս, ասելիս, արտասանելիս, գողանալիս, դիտելիս, թարգմանելիս, ձևակերպելիս, ստանալիս, վերցնելիս</li>
      <li>VERB-Fin: ունի, ունեն, ասաց, կարծես, սկսեց, չունի, տվեց, տեսավ, զգաց, բացեց</li>
      <li>VERB-Inf: անել, կատարելու, հաստատելու, ներկայացնել, պատմել, տալու, տալ, ճանաչելու, ունենալ, լուծելու</li>
      <li>VERB-Part: ասում, ուզում, անում, ասել, ունեցող, տալիս, ներկայացնում, ունենում, տեսնում, փորձում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB-Inf: խոսեցնել, հագցնել</li>
      <li>VERB-Part: առաջացրել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB-Conv: անցնելիս, հանդիպելիս, մոտենալիս</li>
      <li>VERB-Fin: կա, չկա, եկավ, կան, լինի, եղավ, դարձավ, կլինի, կքնես, մտավ</li>
      <li>VERB-Inf: լինել, լինելու, մնալ, աշխատել, նայել, գալ, հավատալ, չլինելու, վարվել, աշխատելու</li>
      <li>VERB-Part: եղել, կապված, նայում, եկել, խոսում, գալիս, գտնվող, դառնում, դարձել, մնում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: հրապարակվեց, տեղադրվի, Թույլատրվեցին, ազատվեց, անտեսվեն, անցկացվեց, արձանագրվեցին, արվեց, բաժանվի, բերվի</li>
      <li>VERB-Inf: մեղադրվել, գրվելուց, ընդգրկվելու, թարգմանվելու, կիրառվել, հայտարարվել, հրատարակվելուց, ճանաչվելուց, որոնվելու, տեղափոխվելուց</li>
      <li>VERB-Part: սահմանված, նախատեսված, ստեղծվել, ճանաչվել, ուղղված, պայմանավորված, բացահայտված, նշված, դրված, իրականացվում</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Art
    <ul>
      <li>DET: մի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: այստեղ, այսպես, այդպես, այնքան, այնտեղ, այնպես, էնքան, ստեղ, էստեղ, այդտեղ</li>
      <li>DET: այս, այդ, այն, մյուս, նույն, սույն, այնպիսի, այսպիսի, էդ, էս</li>
      <li>PRON: այն, դա, սա, դրանց, դրա, դրանք, նրա, դրան, այդ, սրանից</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: իր, իրենց</li>
      <li>PRON: իր, իրեն, ինքն, ինքը, իրենց, իրենք, իրենից, իրենով, ինքներդ, ինքներս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>ADV: Ոնց</li>
      <li>DET: Ինչ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: այլ, քանի, որևէ, ինչ, որոշ, մեկ, ուրիշ, այլևայլ, այսինչ</li>
      <li>PRON: մեկը, այլն, մեկն, մեկի, մեկին, ինչ, ոք, Այնինչը, մեկից, մեկում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: ինչպես, ինչու, երբ, ուր, ինչքան, որքան, ինչի, որտեղ</li>
      <li>DET: ինչ, որ, ինչպիսի, ինչքան</li>
      <li>PRON: ինչ, ով, ում, ինչի, որը, ումից, որն, որքանով, Իիիիինչ, Որտեղից</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PRON: ոչինչ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: մեր, նրա, իմ, ձեր, նրանց, քո</li>
      <li>PRON: մենք, ես, նա, մեզ, նրանց, ինձ, նրանք, նրան, դուք, նրա</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: իրար, միմյանց, իրարից, միմյանցից</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: երբ, որտեղ, որքան, ինչպես, ինչքան, ուր, ոնց, ուրկից</li>
      <li>DET: որպիսի</li>
      <li>PRON: որը, որոնք, որի, ինչ, որն, ովքեր, որում, որին, որոնց, ով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: բոլորովին, մեկ</li>
      <li>DET: ամեն, բոլոր, ողջ, ամբողջ, յուրաքանչյուր, ցանկացած, ամենայն, համայն, սաղ</li>
      <li>PRON: բոլորը, ամենից, բոլորի, բոլորին, ամենը, բոլորն, բոլորս, ամբողջի, ամբողջը, ամբողջն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: երկու, 1, մեկ, 10, 2, 4, մի, 2021, 3, երեք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dist
    <ul>
      <li>NUM: հարյուրական</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>NUM: կես, 6860,8, 7354,7, 0.2, 1.2, 1.4, 14,5, 2.1, 2.9, 23,213.5</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: առաջին, երկրորդ, 1-ին, երրորդ, 19-րդ, 5-րդ, 20-րդ, 3-րդ, 4-րդ, 7-րդ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: Գեղամա, Նոյյան, Կասպից</li>
      <li>DET: իր, մեր, նրա, իրենց, իմ, ձեր, նրանց, քո</li>
      <li>NOUN: Ուժեղները, ադրբեջանցիներինը, ընդդիմադիրներինը, ինը, հայերինը, հայերինն, մտքինը, վերևինի, քշողինը</li>
      <li>PRON: իրենը, մերը, նրանցն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: իր, իրենց</li>
      <li>PRON: իր, իրեն, իրենից, իրենց, իրենով</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: եմ, էի, չենք, չեմ, էինք, չէինք, Չէի</li>
      <li>DET: մեր, իմ</li>
      <li>PRON: մենք, ես, մեզ, ինձ, մեր, իմ, մեզանում, մեզնից, ինձնից, ինձանից</li>
      <li>VERB-Fin: տեսա, ասացի, իմանայի, ունենք, առնենք, գիտեմ, խոսենք, կարծեմ, համոզվեցի, մտածեցի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: եք, չես, ես, չեք, էիք, էիր</li>
      <li>DET: ձեր, քո</li>
      <li>PRON: դուք, քեզ, դու, ձեզ, ձեր, ձեզնից, քո</li>
      <li>VERB-Fin: կարծես, կքնես, տվեք, ասես, արի, գիտեք, թող, սպասի, պատկերացրեք, եկեք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: է, են, էր, էին, չի, ենք, չեն, չէ, չէր, ա</li>
      <li>DET: իր, նրա, իրենց, նրանց</li>
      <li>PRON: նա, նրանց, իր, իրեն, ինքն, նրանք, ինքը, նրան, իրենց, նրա</li>
      <li>VERB-Fin: ունի, ունեն, կա, չկա, եկավ, կան, ասաց, սկսեց, լինի, չունի</li>
      <li>VERB-Part: մեկնեց, նույնացվեց</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>AUX-Fin: եք</li>
      <li>DET: ձեր</li>
      <li>PRON: դուք, Ձեզ</li>
      <li>VERB-Fin: կասեցնեք, միջնորդեք, ունեք</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>NOUN: ձեռքները, քթներից</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADP: հետն, մեջը, մոտը, տակը</li>
      <li>NOUN: Տղաս, աչքիս, կինս, խոսքս, կնոջս, վախերդ, Ախպերս, Ընկալումս, Ծնողներս, Ղեկավարս</li>
      <li>VERB-Inf: մեռնելուցս, մեռնելս</li>
      <li>VERB-Part: հարուցածս</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Ն, Լ, Ա, շինմոնտաժային, պետհրատային</li>
          <li>DET: ս</li>
          <li>NOUN: թ, մ, հա, գ, կմ, ԱԳ, մլն, ԽՍՀՄ, ԽՍՀ, հեռուստառադիոընկերության</li>
          <li>PROPN: ՀՀ, ՌԴ, ՀԱՊԿ, ԱԺ, ԱՄՆ, Լ, Ա, ԵԱՀԿ, ԱՍԱԼԱ, ԼՂՀ</li>
          <li>X: NFT</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Ambi
        <ul>
          <li>ADP: սկսած, համապատասխան, շնորհիվ, անկախ, հակառակ</li>
        </ul>
      </li>
      <li>Post
        <ul>
          <li>ADP: համար, մասին, հետ, մեջ, վրա, հետո, կողմից, առաջ, դեմ, վերաբերյալ</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: որպես, մինչև, ըստ, ի, առանց, իբրև, քան, դեպի, բացառությամբ, բացի</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ConjType</a>
    <ul>
      <li>Comp
        <ul>
          <li>CCONJ: նաև, այլ, ինչպես, այլև, այնպես</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Connegative</a>
    <ul>
      <li>Yes
        <ul>
          <li>AUX-Part: լինի</li>
          <li>VERB-Part: օգնի, ասի, բերի, գրավի, զարմացնի, թաքցնի, հավատա, հարվածի, հրապարակի, մնա</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Deixis</a>
    <ul>
      <li>Med
        <ul>
          <li>ADV: այդպես, այդտեղ, էդքան</li>
          <li>DET: այդ, էդ, այդպիսի, տենց</li>
          <li>PRON: դա, դրանց, դրա, դրանք, դրան, այդ, դրանով, դրանից, այդպիսին, դրանում</li>
        </ul>
      </li>
      <li>Prox
        <ul>
          <li>ADV: այստեղ, այսպես, ստեղ, էստեղ, այսքան</li>
          <li>DET: այս, սույն, այսպիսի, էս, այսինչ, Էստեսակ, ս</li>
          <li>PRON: սա, սրանից, այս, Էսը, Սրանք, սրանց, Այսինչ, Այսինչը, Այսքանով, Էստեղի</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADV: այնքան, այնտեղ, այնպես, էնքան, էնպես</li>
          <li>DET: այն, նույն, այնպիսի, էն, էնքան</li>
          <li>PRON: այն, նրա, նա, նրան, Այնինչը, Էնը, այնտեղից, նույնը, նույնն, նրանց</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Deixis[psor]</a>
    <ul>
      <li>Prox
        <ul>
          <li>NOUN: վերջինիս, վերջերս, ներկայիս, աշխարհիս, օրս, Ներկայումս, մարդուս, վերջինս</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Echo</a>
    <ul>
      <li>Ech
        <ul>
          <li>ADJ: լեփ</li>
          <li>INTJ: հայա</li>
          <li>NOUN: մաչիկներ</li>
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
          <li>ADJ: Լիտերատուրնայա</li>
          <li>PROPN: COVID-19, SARS-CoV-2, UGT2A1, Արմենիա</li>
          <li>PUNCT: :, `, ՛</li>
          <li>SYM: tass.ru</li>
          <li>X: Pegasus, Apple, դել, դե, BBC, F, Genotek, Group, NSO, Applied</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Hyph</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: ռուս, մատաղա, տնտեսա</li>
          <li>NOUN: ի, ին, ը, ից, ն, ում, ականների, ների, ով, ականները</li>
          <li>VERB-Inf: տեսա</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NameType</a>
    <ul>
      <li>Com
        <ul>
          <li>PROPN: ՀԱՊԿ, ԱԺ, ԵԱՀԿ, ՍիվիլՆեթը, ՀՀԿ, ՊՈԱԿ, ԱԱԾ, ԱՔՐԱ, Ազատություն, Ազատությունը</li>
        </ul>
      </li>
      <li>Geo
        <ul>
          <li>ADJ: ամերիկյան, թուրքական, հայաստանյան, ճապոնական, արևմտյան, Ղարաբաղյան, եվրոպական, ուկրաինական, Արարատյան, ադրբեջանական</li>
          <li>NOUN: ԽՍՀՄ, Ղազախստանում, Այգուտի, Ղազախստան</li>
          <li>PROPN: Հայաստանի, ՀՀ, Հայաստանում, Արցախի, Ռուսաստանի, Ադրբեջանի, Իրանի, Հայաստան, Թուրքիայի, Հայաստանը</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>PROPN: Խոսրովի, Կարինե, Նիկոլ, Նվարդին, Լևոն, Արտակը, Ղազարոս, Մարտիրոս, Ռոբերտ, Ռուբենը</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>PROPN: ԱՍԱԼԱ, Եվրատեսիլը, Կապիտոլիումը, Եվրատեսիլ, Եվրատեսիլի, Եվրատեսիլում, Զվարթնոց, Խոջիվանքի, Կովիդ, Վերածննդի</li>
        </ul>
      </li>
      <li>Pro
        <ul>
          <li>PROPN: ֆեյսբուքի, Օսկար, Ժամանակ, COVID-19, Բայրաղթար, Ֆեյսբուքում, Գլոբուսի, Ֆեյսբուքը, SARS-CoV-2, UGT2A1</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: Ջիվանին, Կոմիտասի, Նարեկացու, Խորենացու, Չարենց, Չարենցը, Ջիվանի, Ջիվանու, Ցկուտըլցու, Շպռոտի</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>NOUN: Սարյանը, Գոչունյանն, Ներուդայից, Պասկևիչյան</li>
          <li>PROPN: Փաշինյանը, Սարյանի, Փաշինյանի, Պետրոսյանի, Սարյանների, Տիտանյանի, Ալումյանը, Լավրովի, Մինասյանը, Շոստակովիչի</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Armenian
        <ul>
          <li>ADJ: Բ, Գ</li>
          <li>NUM: ա, բ, գ</li>
        </ul>
      </li>
      <li>Combi
        <ul>
          <li>ADJ: 1-ին, 44-օրյա, 19-րդ, 5-րդ, 6-ամսյա, 20-րդ, 3-րդ, 4-րդ, 7-րդ, 88-րդ</li>
        </ul>
      </li>
      <li>Digit
        <ul>
          <li>NUM: 1, 10, 2, 4, 2021, 3, 16, 11, 15, 13</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: I, II, VII</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: առաջին, երկրորդ, երրորդ, հինգերորդ, յոթերորդ</li>
          <li>NUM: երկու, մեկ, մի, երեք, հինգ, չորս, վեց, կես, Հազար, յոթ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>1
        <ul>
          <li>NOUN: Տղաս, աչքիս, կինս, խոսքս, կնոջս, Ախպերս, Ընկալումս, Ծնողներս, Ղեկավարս, Շփոթմունքս</li>
          <li>PRON: բոլորս, բոլորիդ, բոլորիս, ինքներս, մեկիս</li>
          <li>VERB-Inf: մեռնելուցս, մեռնելս</li>
          <li>VERB-Part: հարուցածս</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>NOUN: վախերդ, անցյալդ, գլխիդ, երիտասարդիդ, երկիրդ, զգայարաններդ, կյանքդ, ձեռքիդ, միջույքդ, մտքիդ</li>
          <li>PRON: ինքներդ</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADP: հետն, մեջը, մոտը, տակը</li>
          <li>NOUN: ձեռքները, քթներից</li>
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
          <li>ADJ: դեպ, հայտ</li>
          <li>ADP: ընդ</li>
          <li>ADV: ցայսօր, հավիտենից</li>
          <li>DET: ամենայն</li>
          <li>NOUN: տեղի, հիման, հայոց, վերջո, ծննդյան, Հայորդյաց, գրոց, երգոց, երիկամունքի, ուշի</li>
          <li>PRON: այլք, իս</li>
        </ul>
      </li>
      <li>Coll
        <ul>
          <li>ADJ: լիքը, Ղարա, գժական</li>
          <li>ADP: տեղ</li>
          <li>ADV: ավել, էնքան, ոնց, ստեղ, էստեղ, ինչի, էդքան, էսօր, լիքը, էնպես</li>
          <li>AUX-Fin: ա</li>
          <li>CCONJ: համ</li>
          <li>DET: էդ, էս, էն, տենց, Էստեսակ, էնքան, սաղ</li>
          <li>NOUN: չուլքու, բոզի, տատու, մերը, շպռոտի, չաստերում, չաստի, չուլքիի, օպերացիան, Ախպերս</li>
          <li>NUM: տաս</li>
          <li>PRON: Էնը, Էսը, Էստեղի, էդ, էդքանից, էն, էս</li>
          <li>PROPN: Լոսի, Լոսից</li>
          <li>VERB-Fin: սպասի, ասեց, ասեցի, խնայի, ծամծմի, կորցրինք</li>
          <li>VERB-Inf: ուռացնելու</li>
          <li>VERB-Part: քցել</li>
        </ul>
      </li>
      <li>Expr
        <ul>
          <li>ADJ: փոքրիկ, նիհարիկ, չորուկ</li>
          <li>NOUN: քեյի, գրքույկը, գնդիկներից, դստրիկս, ձկնիկ, մաչիկներ, որբուկների, պաչիկ</li>
          <li>PRON: Իիիիինչ</li>
          <li>PROPN: Ռուբ, Ջոնիկը, Վիլիկը, Արմենչիկով, Զարիկը, Հարութիկը, Ջոնիկ, Ջոնիկի</li>
          <li>VERB-Fin: աս, բացատրե</li>
        </ul>
      </li>
      <li>Rare
        <ul>
          <li>ADJ: մեծն</li>
          <li>NOUN: առվախեժով, էլեմենտ, խնդմնդիկ, կայսեր, հռհռիկ, միջույքդ, չեկինգի, տղու, ֆակտ</li>
          <li>PRON: ինչորմեկը, ինչորպիսին</li>
          <li>PROPN: Ցկուտըլցու, Կլտապանի</li>
          <li>VERB-Fin: բավեր, գիտե</li>
          <li>VERB-Part: կացրել, տեղակայված</li>
        </ul>
      </li>
      <li>Slng
        <ul>
          <li>ADJ: քյարթու</li>
          <li>NOUN: Ղախպի, Քյալ, կռուտիտ, ճշտով, պատադաջումն, պլենդուզից, ռախն, տուլիկը</li>
        </ul>
      </li>
      <li>Vrnc
        <ul>
          <li>ADJ: Կոտակ, ախմախ, անսամթ, պռատ, փոմփոշ</li>
          <li>ADV: Հըլը, հեչ, ուրկից</li>
          <li>INTJ: բա</li>
          <li>NOUN: ռշտան, մուռ, Վայոց, ժաժ, ժեխ, խլվլիկ, խևի, կուցի, չափառների, ջոջերին</li>
          <li>PART: յանի</li>
          <li>VERB-Fin: երգե, կարաս</li>
          <li>VERB-Inf: լավելով, լլվելու, լղոզելու</li>
          <li>VERB-Part: պագում, քշտած</li>
          <li>X: Թարսի</li>
        </ul>
      </li>
      <li>Vulg
        <ul>
          <li>NOUN: քֆուր, Օռուսպու, լոզառեխը</li>
          <li>VERB-Part: ղռմխտում</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Subcat</a>
    <ul>
      <li>Intr
        <ul>
          <li>VERB-Conv: անցնելիս, հանդիպելիս, մոտենալիս</li>
          <li>VERB-Fin: կա, չկա, եկավ, կան, լինի, եղավ, դարձավ, կլինի, կքնես, մտավ</li>
          <li>VERB-Inf: լինել, լինելու, մնալ, աշխատել, նայել, գալ, հավատալ, չլինելու, վարվել, աշխատելու</li>
          <li>VERB-Part: եղել, կապված, սահմանված, նայում, եկել, խոսում, գալիս, գտնվող, դառնում, դարձել</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB: ունի, ասում, ուզում, ասել, ունեն, անում, ունեցող, տալիս, ասաց, կարծես</li>
          <li>VERB-Conv: ծխելիս, կարդալիս, ասելիս, արտասանելիս, գողանալիս, դիտելիս, թարգմանելիս, ձևակերպելիս, ստանալիս, վերցնելիս</li>
          <li>VERB-Fin: ունի, ունեն, ասաց, կարծես, սկսեց, չունի, տվեց, տեսավ, զգաց, բացեց</li>
          <li>VERB-Inf: անել, կատարելու, հաստատելու, ներկայացնել, պատմել, տալու, տալ, ճանաչելու, ունենալ, լուծելու</li>
          <li>VERB-Part: ասում, ուզում, անում, ասել, ունեցող, տալիս, ներկայացնում, ունենում, տեսնում, փորձում</li>
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
          <li>ADJ: մրցույթային</li>
          <li>NOUN: գաղնագիր, գրանտերի, ենթաիմստներ, վերականգման</li>
          <li>NUM: 0.2, 2.9</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: եմ.</li>
</ul>

<ul>
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: եմ, պիտի, պետք, լինել, ունեմ.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Nom (356)</li>
      <li>VERB-Fin--PRON (5)</li>
      <li>VERB-Fin--PRON-Nom (150)</li>
      <li>VERB-Inf--NOUN-Dat (2)</li>
      <li>VERB-Inf--NOUN-Nom (11)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Gen (2)</li>
      <li>VERB-Inf--PRON-Nom (4)</li>
      <li>VERB-Part--NOUN-Dat (16)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Part--NOUN-Nom (620)</li>
      <li>VERB-Part--PRON (12)</li>
      <li>VERB-Part--PRON-Dat (2)</li>
      <li>VERB-Part--PRON-Gen (15)</li>
      <li>VERB-Part--PRON-Nom (242)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Nom (1)</li>
      <li>VERB-Conv--NOUN-Dat (1)</li>
      <li>VERB-Conv--NOUN-Nom (7)</li>
      <li>VERB-Fin--NOUN-Dat (46)</li>
      <li>VERB-Fin--NOUN-Nom (294)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-Dat (29)</li>
      <li>VERB-Fin--PRON-Nom (16)</li>
      <li>VERB-Inf--NOUN-Dat (80)</li>
      <li>VERB-Inf--NOUN-Nom (428)</li>
      <li>VERB-Inf--PRON (13)</li>
      <li>VERB-Inf--PRON-Dat (16)</li>
      <li>VERB-Inf--PRON-Nom (12)</li>
      <li>VERB-Part--NOUN-Dat (130)</li>
      <li>VERB-Part--NOUN-Nom (497)</li>
      <li>VERB-Part--NOUN-Nom-ADP(առաջ) (1)</li>
      <li>VERB-Part--PRON (8)</li>
      <li>VERB-Part--PRON-Dat (46)</li>
      <li>VERB-Part--PRON-Nom (34)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (13)</li>
      <li>VERB-Fin--PRON-Dat (11)</li>
      <li>VERB-Inf--NOUN-Dat (29)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Dat (4)</li>
      <li>VERB-Part--NOUN-Dat (43)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Dat (18)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 4 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: զրկել իրեն, կպչել իրեն, հերքել իրեն, տալ իրեն</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 18 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>advmod:emph</a>, <a>aux:ex</a>, <a>case:loc</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>compound:svc</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>flat:dist</a>, <a>flat:name</a>, <a>flat:range</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>goeswith</a></li>
</ul>
