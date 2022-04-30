---
layout: base
title:  'UD_Western_Armenian-ArmTDP'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Western Armenian ArmTDP

Language: [Western Armenian](/hyw/index.html) (code: `hyw`)<br/>
Family: Indo-European, Armenian

This treebank has been part of Universal Dependencies since the UD v2.8 release.

The following people have contributed to making this treebank part of UD: Marat M. Yavrumyan.

Repository: [UD_Western_Armenian-ArmTDP](https://github.com/UniversalDependencies/UD_Western_Armenian-ArmTDP)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhyw_armtdp29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: blog, fiction, news, nonfiction

Questions, comments?
General annotation questions (either Western Armenian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Western_Armenian-ArmTDP/issues).
If you want to collaborate, please contact [myavrum&nbsp;(æt)&nbsp;ysu&nbsp;•&nbsp;am].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

A Universal Dependencies treebank for Western Armenian developed for UD originally by the ArmTDP team led by Marat M. Yavrumyan at the Yerevan State University.



The UD_Western_Armenian-ArmTDP treebank is based on the Western Armenian section of the Հայերէնի Ծառադարան dataset (ArmTDP v2.0), a broad-coverage corpus of general Modern Standard Armenian covering numerous genres. The treebank consists of 5026 sentences (~93K tokens).

The annotation scheme was developed in accordance with the UD guidelines. The original data was manually annotated by the ArmTDP team. The tokenization and POS-tagging process was carried out through alternating steps of glossary-based automatic scripting and manual revision at the YerevaNN research lab (led by Hrant H. Khachatrian). The treebank is so far the only manual verified corpus of Western Armenian, supplied with comprehensive morphological and syntactic annotation in the form of a complete dependency tree provided for every sentence.

## Acknowledgments

This work became possible through a research grant from the Calouste Gulbenkian Foundation («Գալուստ Կիւլպէնկեան» Հիմնարկութիւն) based in Lisbon, Portugal.

The team behind the UD_Western_Armenian-ArmTDP: Marat M. Yavrumyan, Hrant H. Khachatrian, Anna S. Danielyan, Setrag H.M. Hovsepian, Liana G. Minasyan.

## References

* Marat M. Yavrumyan. “Universal Dependencies for Armenian.” International Conference on Digital Armenian, Abstracts. Inalco, Paris, October 3-5, 2019.

## Format

UD_Western_Armenian-ArmTDP data conforms to [CoNLL-U](http://universaldependencies.org/format.html) format with the following specifics:
* Sentence-level comments:
* Document titles are present as `# doc_title = Սիլիհտարի պարտէզները`.
* Document boundaries are present as `# newdoc id = blog/fiction/news/nonfiction-xxxx`.
* Sentence-level paragraph boundaries are present as `# newpar id = newdoc-xxxx`.
* Sentence boundaries are present as `# sent_id = newdoc-newparxxxx`.
* XPOSTAG column is currently unused.
* No enhanced dependencies or empty nodes present in DEPS column.
* MISC column:
* `SpaceAfter=No` markers are present.
* Form (`Translit`) and lemma (`LTranslit`) transliterations are present (based on ISO 9985:1996).
* Document, paragraph, sentence, and token ids are 4-character base-32 numbers. They survive treebank updates.


# Statistics of UD Western Armenian ArmTDP

## POS Tags

[ADJ](hyw_armtdp-pos-ADJ.html) – [ADP](hyw_armtdp-pos-ADP.html) – [ADV](hyw_armtdp-pos-ADV.html) – [AUX](hyw_armtdp-pos-AUX.html) – [CCONJ](hyw_armtdp-pos-CCONJ.html) – [DET](hyw_armtdp-pos-DET.html) – [INTJ](hyw_armtdp-pos-INTJ.html) – [NOUN](hyw_armtdp-pos-NOUN.html) – [NUM](hyw_armtdp-pos-NUM.html) – [PART](hyw_armtdp-pos-PART.html) – [PRON](hyw_armtdp-pos-PRON.html) – [PROPN](hyw_armtdp-pos-PROPN.html) – [PUNCT](hyw_armtdp-pos-PUNCT.html) – [SCONJ](hyw_armtdp-pos-SCONJ.html) – [SYM](hyw_armtdp-pos-SYM.html) – [VERB](hyw_armtdp-pos-VERB.html) – [X](hyw_armtdp-pos-X.html)

## Features

[Abbr](hyw_armtdp-feat-Abbr.html) – [AdpType](hyw_armtdp-feat-AdpType.html) – [Animacy](hyw_armtdp-feat-Animacy.html) – [Aspect](hyw_armtdp-feat-Aspect.html) – [Case](hyw_armtdp-feat-Case.html) – [ConjType](hyw_armtdp-feat-ConjType.html) – [Connegative](hyw_armtdp-feat-Connegative.html) – [Definite](hyw_armtdp-feat-Definite.html) – [Degree](hyw_armtdp-feat-Degree.html) – [Deixis](hyw_armtdp-feat-Deixis.html) – [Deixis[psor]](hyw_armtdp-feat-Deixis-psor.html) – [Echo](hyw_armtdp-feat-Echo.html) – [Foreign](hyw_armtdp-feat-Foreign.html) – [Hyph](hyw_armtdp-feat-Hyph.html) – [LangId](hyw_armtdp-feat-LangId.html) – [Mood](hyw_armtdp-feat-Mood.html) – [NameType](hyw_armtdp-feat-NameType.html) – [Number](hyw_armtdp-feat-Number.html) – [Number[psor]](hyw_armtdp-feat-Number-psor.html) – [NumForm](hyw_armtdp-feat-NumForm.html) – [NumType](hyw_armtdp-feat-NumType.html) – [Person](hyw_armtdp-feat-Person.html) – [Person[psor]](hyw_armtdp-feat-Person-psor.html) – [Polarity](hyw_armtdp-feat-Polarity.html) – [Polite](hyw_armtdp-feat-Polite.html) – [Poss](hyw_armtdp-feat-Poss.html) – [PronType](hyw_armtdp-feat-PronType.html) – [Reflex](hyw_armtdp-feat-Reflex.html) – [Style](hyw_armtdp-feat-Style.html) – [Subcat](hyw_armtdp-feat-Subcat.html) – [Tense](hyw_armtdp-feat-Tense.html) – [Typo](hyw_armtdp-feat-Typo.html) – [VerbForm](hyw_armtdp-feat-VerbForm.html) – [Voice](hyw_armtdp-feat-Voice.html)

## Relations

[acl](hyw_armtdp-dep-acl.html) – [acl:relcl](hyw_armtdp-dep-acl-relcl.html) – [advcl](hyw_armtdp-dep-advcl.html) – [advcl:relcl](hyw_armtdp-dep-advcl-relcl.html) – [advmod](hyw_armtdp-dep-advmod.html) – [advmod:emph](hyw_armtdp-dep-advmod-emph.html) – [amod](hyw_armtdp-dep-amod.html) – [appos](hyw_armtdp-dep-appos.html) – [aux](hyw_armtdp-dep-aux.html) – [aux:caus](hyw_armtdp-dep-aux-caus.html) – [aux:ex](hyw_armtdp-dep-aux-ex.html) – [case](hyw_armtdp-dep-case.html) – [case:loc](hyw_armtdp-dep-case-loc.html) – [cc](hyw_armtdp-dep-cc.html) – [ccomp](hyw_armtdp-dep-ccomp.html) – [compound](hyw_armtdp-dep-compound.html) – [compound:lvc](hyw_armtdp-dep-compound-lvc.html) – [compound:redup](hyw_armtdp-dep-compound-redup.html) – [compound:svc](hyw_armtdp-dep-compound-svc.html) – [conj](hyw_armtdp-dep-conj.html) – [cop](hyw_armtdp-dep-cop.html) – [csubj](hyw_armtdp-dep-csubj.html) – [csubj:pass](hyw_armtdp-dep-csubj-pass.html) – [dep](hyw_armtdp-dep-dep.html) – [det](hyw_armtdp-dep-det.html) – [det:poss](hyw_armtdp-dep-det-poss.html) – [discourse](hyw_armtdp-dep-discourse.html) – [dislocated](hyw_armtdp-dep-dislocated.html) – [expl](hyw_armtdp-dep-expl.html) – [fixed](hyw_armtdp-dep-fixed.html) – [flat](hyw_armtdp-dep-flat.html) – [flat:dist](hyw_armtdp-dep-flat-dist.html) – [flat:frac](hyw_armtdp-dep-flat-frac.html) – [flat:name](hyw_armtdp-dep-flat-name.html) – [flat:range](hyw_armtdp-dep-flat-range.html) – [goeswith](hyw_armtdp-dep-goeswith.html) – [iobj](hyw_armtdp-dep-iobj.html) – [iobj:agent](hyw_armtdp-dep-iobj-agent.html) – [list](hyw_armtdp-dep-list.html) – [mark](hyw_armtdp-dep-mark.html) – [nmod](hyw_armtdp-dep-nmod.html) – [nmod:npmod](hyw_armtdp-dep-nmod-npmod.html) – [nmod:poss](hyw_armtdp-dep-nmod-poss.html) – [nsubj](hyw_armtdp-dep-nsubj.html) – [nsubj:caus](hyw_armtdp-dep-nsubj-caus.html) – [nsubj:pass](hyw_armtdp-dep-nsubj-pass.html) – [nummod](hyw_armtdp-dep-nummod.html) – [obj](hyw_armtdp-dep-obj.html) – [obl](hyw_armtdp-dep-obl.html) – [obl:agent](hyw_armtdp-dep-obl-agent.html) – [orphan](hyw_armtdp-dep-orphan.html) – [parataxis](hyw_armtdp-dep-parataxis.html) – [punct](hyw_armtdp-dep-punct.html) – [reparandum](hyw_armtdp-dep-reparandum.html) – [root](hyw_armtdp-dep-root.html) – [vocative](hyw_armtdp-dep-vocative.html) – [xcomp](hyw_armtdp-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 5026 sentences, 91630 tokens and 92725 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 16531 tokens (18%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 25 types of words that contain both letters and punctuation. Examples: կ՚, չ՚, 44-օրեայ, 113-րդ, 106-րդ, 20-րդ, ՚s, 100-րդ, 12-ամեայ, 12-րդ, 1950-ական, 196-րդ, 21-րդ, 24-եան, 3-րդ, 4-րդին, 7-րդ, 700-րդ, 80-ամեայ, 85-րդ, 9-րդ, L’, l&#x27;, ՚նէք, զ՚</li>
</ul>

<ul>
<li>This corpus contains 1094 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 476 types of multi-word tokens. Examples: ի՞նչ, ո՛չ, ո՞վ, ինչո՞ւ, ա՛լ, ի՛նչ, ո՞ւր, չէ՞, ինչպէ՞ս, ո՞ր, այո՛, թէ՛, ի՜նչ, մի՛, ի՞նչպէս, ե՞րբ, ա՜հ, ծօ՛, չէ՛, հո՛ն, ո՛, չե՞ս, իրա՞ւ, որքա՛ն, Օ՜հ, արդեօ՞ք, աւելի՛ն, ե՛ւ, կա՛մ, կարելի՞, կրնա՞մ, ո՛վ, ո՛ր, որքա՜ն, չէ՞ր, Ի՞նչը, Իրա՛ւ, ահա՛, այնքա՜ն, բա՞ն, դո՞ւն, եկո՛ւր, է՛ն, ըլլա՞յ, ըսէ՛, ի՛ր, ինչպէ՛ս, հէ՞, հը՛, ո՛ւր.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 44 word types tagged as particles (PART): Յամենայնդէպս, Շիտակը, Ցաւօք, Փաստօրէն, ահա, ահաւասիկ, այդուհանդերձ, այսուհանդերձ, անշուշտ, անպայման, անպատճառ, անտարակոյս, արդեոք, արդեօք, աւելին, գէթ, գոնէ, գուցէ, էլ, ընդհակառակը, թերեւս, թէ, թող, ինչպէս, իրաւ, իրօք, կարծեմ, կարծես, հապա, հարկաւ, հը, մանաւանդ, մի, միթէ, մինչեւ, նէ, ոչ, որ, ուրեմն, չէ, չը, չի, սակայն, տէ</li>
</ul>

<ul>
<li>This corpus contains 75 lemmas tagged as pronouns (PRON): ամբողջը, ամենայն, ամէն, ամէնը, ամէնքը, այդ, այդպէս, այդտեղ, այդքան, այլ, այլն, այն, այնմ, այնպէս, այնտեղ, այնքան, այս, այսպէս, այստեղ, այսքան, ան, անի, անիկա, աս, ասի, ասիկա, ասինչ, ասոնցը, աստի, ատ, ատի, ատիկա, բոլորը, դու, դուն, դուք, ես, երբ, եւլն, էդ, էն, ինչ, ինչու, ինք, ինքզինք, ինքզինքդ, ինքնիրեն, իրար, իրենը, իրենցը, իւրաքանչիւրը, հոն, մենք, մերը, մէկ, մէկզմէկ, մին, միւս, նա, նոյնը, նոյնինք, ոմանք, ոչինչ, ով, որ, որեւէ, որն, որպիսի, որտեղացի, որքան, ուրիշ, ոք, սա, քանի, քուկդ</li>
</ul>

<ul>
<li>This corpus contains 59 lemmas tagged as determiners (DET): Ն., ամբողջ, ամենայն, ամէն, այդ, այդպիսի, այդքան, այլ, այն, այնպիսի, այնքան, այս, այսչափ, այսպիսի, այսքան, ան, անանկ, անիկա, աս, ասանկ, ասիկա, ատ, ատանկ, ատիկա, բոլոր, բովանդակ, դու, դուն, դուք, ես, էն, էս, ինչ, ինչպիսի, ինչքան, ինք, իւրաքանչիւր, լման, համայն, մենք, մէկ, մը, մի, միւս, մնացած, նա, նոյն, նորին, ո, ոեւէ, որ, որեւէ, որոշ, որչափ, որքան, ուրիշ, սա, սոյն, քանի</li>
</ul>

<ul>
<li>Out of the above, 32 lemmas occurred sometimes as PRON and sometimes as DET: ամենայն, ամէն, այդ, այդքան, այլ, այն, այնքան, այս, այսքան, ան, անիկա, աս, ասիկա, ատ, ատիկա, դու, դուն, դուք, ես, էն, ինչ, ինք, մենք, մէկ, միւս, նա, որ, որեւէ, որքան, ուրիշ, սա, քանի</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as auxiliaries (AUX): եմ, ըլլալ, կը, կոր, ունիմ, պէտք, պիտի, տալ</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: եմ, ըլլալ, ունիմ, տալ</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: է, էր, են, էին, չէ, եմ, չէր, չեմ, չեն, չի</li>
    <li>VERB: ըսէ, ըսաւ, կայ, կրնայ, ունի, ըսեմ, կար, ըլլայ, ունէր, ունեցաւ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: ըլլալով, ըլլալ, ըլլալու, տալ, ըլլալնուս, տալով, տալու</li>
    <li>VERB: ըլլալ, ըսել, ըլլալու, ընել, տալ, ըլլալով, տալու, ունենալ, ընելու, առնելու</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: եղած, եղեր, ըլլալու, տուեր, տար, տուած</li>
    <li>VERB: եղած, գիտեր, կրնար, ունեցած, եկած, սկսած, ըրած, դարձած, առած, հասած</li>
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
      <li>NOUN: հայ, մարդ, հայրս, պատրիարք, մայրս, Տ, հայոց, հայրը, մարդիկ, կինը</li>
      <li>PRON: ես, մենք, մեզի, ինծի, ով, մեզ, զիս, դուն, քեզ, քեզի</li>
      <li>PROPN: Սահակ, Խրիսթինա, Տիգրանեան, Արամ, Գրիգոր, Յակոբ, Խրիսթինային, Մարկոս, Եդուարդ, Խրիսթինան</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nhum
    <ul>
      <li>NOUN: բան, ի, օր, տարի, անգամ, ին, ատեն, եկեղեցւոյ, տեղի, տեղ</li>
      <li>PROPN: Թուրքիոյ, Հայաստանի, Պոլիս, Թուրքիան, Հայաստան, Միքքին, Պոլսոյ, Արցախի, Լիբանանի, Ֆրանսայի</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Coll
    <ul>
      <li>NOUN: մամուլի, ազատութեան, հանդէս, հարկ, Ամենապատուութիւնը, անցեալին, հայութեան, մամուլը, տարեկան, ազատութիւնը</li>
      <li>PROPN: Սէյֆօ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Fin: են, էին, չեն, ենք, չէին, չենք, էինք, էք, ըլլան, չէք</li>
      <li>DET: մեր, իրենց, անոնց, ասոնց, ձեր, որոնց, մերին</li>
      <li>NOUN: հայոց, մարդիկ, մարդոց, օրերուն, տղաքը, աչքերը, տարիներ, աչքերով, բաներ, վերջերս</li>
      <li>PRON: որոնք, մենք, անոնք, իրենց, մեզի, որոնց, անոնց, իրարու, մեզ, զանոնք</li>
      <li>PROPN: Աբովեան, Բախտիկեանները, Գանտիլեանները, Էքմեքճեանները, Թութունճեաններու, Խայէլեանները, ԿԱՄերու, Մանճիկեաններու, Նշանեաններն, Նշանեաններուն</li>
      <li>VERB-Fin: ունին, կան, կրնան, ըլլան, ունինք, չունին, ըսէին, ըսին, կային, սկսան</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ptan
    <ul>
      <li>NOUN: ամոլին, մէրանցը, տեղուանք</li>
      <li>PROPN: Սողոմենց, Տեմուրճենց, Դպրենց, Մանուկանց, Մարուկենց, Նալպանտենց, Պեկիշենց, Արխնենց, Բարիկանց, Կոչենց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX-Fin: է, էր, չէ, եմ, չէր, չեմ, չի, ըլլայ, էի, ես</li>
      <li>DET: իր, անոր, իմ, քու, ձեր, նրա, քո, ասոր, ատոր</li>
      <li>NOUN: բան, ի, օր, տարի, անգամ, ին, հայ, ատեն, եկեղեցւոյ, տեղի</li>
      <li>PRON: որ, ան, ինչ, ես, իրեն, որուն, անոր, իր, զայն, ինծի</li>
      <li>PROPN: Թուրքիոյ, Հայաստանի, Սահակ, Պոլիս, Թուրքիան, Հայաստան, Միքքին, Պոլսոյ, Խրիսթինա, Տիգրանեան</li>
      <li>VERB: ըսէ, ըսաւ, կայ, կրնայ, ունի, ըսեմ, կար, ըլլայ, ունէր, ունեցաւ</li>
      <li>VERB-Fin: ըսէ, ըսաւ, կայ, կրնայ, ունի, ըսեմ, կար, ըլլայ, ունէր, ունեցաւ</li>
      <li>VERB-Part: կեցուց, ըսուիր, թողուր, ներկայացներ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADP: մէջէն, վրայէն, քովէն, առջեւէն, ետեւէն, ընդմէջէն, տակէն, ետեւէ, առաջքէն, ետեւից</li>
      <li>NOUN: կողմէ, էն, օրէն, տարիներէ, տեսակէտէ, տունէն, կողմէն, կեանքէն, հեռուէն, պատերազմէն</li>
      <li>PRON: ամէնէն, անկէ, իրմէ, ամենէն, անոնցմէ, ատկէ, ասկէ, որոնցմէ, իրարմէ, ինձմէ</li>
      <li>PROPN: Պոլսէն, Երեւանէն, Եւրոպայէն, Իսթանպուլէն, Հրանտէն, Պօլիսէն, Ամերիկայէն, Անաթոլիայէն, Անատոլիայէն, Անատօլուէն</li>
      <li>VERB-Inf: ըլլալէ, երթալէն, գտնելէ, դառնալէն, ընելէ, կորսնցնելէ, սպառելէ, ստանալէ, անդրադառնալէ, անցնելէ</li>
      <li>VERB-Part: օգտագործելէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>NOUN: դէպս, Գաւառս, դէմս, թիւս, յանձն, շարս</li>
      <li>PRON: զայն, զինքը, զիս, մեզ, զոր, զանոնք, զինք, իրար, քեզ, ձեզ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADP: վրայի, դիմացի, քովիս</li>
      <li>AUX-Inf: ըլլալու, ըլլալնուս, տալու</li>
      <li>NOUN: ի, ին, երկրին, մարդոց, օրերուն, համայնքի, տան, խորհուրդի, օրուան, կեանքի</li>
      <li>PRON: իրեն, որուն, անոր, իրենց, մեզի, որոնց, ինծի, իրարու, որու, անոնց</li>
      <li>PROPN: Թուրքիոյ, Հայաստանի, Պոլսոյ, Արցախի, Լիբանանի, Ֆրանսայի, Խրիսթինային, Սուրիոյ, Ատրպէյճանի, Բերայի</li>
      <li>VERB: ըլլալու, տալու, ընելու, առնելու, ստեղծելու, տեսնելու, բերելու, պահելու, գալու, երթալու</li>
      <li>VERB-Fin: գործելուն, ուտելուս</li>
      <li>VERB-Inf: ըլլալու, տալու, ընելու, առնելու, ստեղծելու, տեսնելու, բերելու, պահելու, գալու, երթալու</li>
      <li>VERB-Part: օգնելու</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>DET: իր, մեր, իրենց, անոր, անոնց, իմ, քու, ձեր, ասոնց, որոնց</li>
      <li>NOUN: եկեղեցւոյ, հայոց, վերջոյ, գործոց, Նահատակաց, հիման, Աթոռոյ, մահու, պոլսահայոց, Աստըծոյ</li>
      <li>PRON: իր, մեր, անոնց, այլոց, իմ, անոր, քու, ձեր, այստեղի, ատոր</li>
      <li>PROPN: Ակօսին, Փեքրէսին</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADP: վրայով</li>
      <li>AUX-Inf: ըլլալով, տալով</li>
      <li>NOUN: կերպով, առումով, խօսքով, ձեւով, աչքերով, ձայնով, ուղղութեամբ, անունով, չափով, պատճառով</li>
      <li>PRON: որով, բոլորով, ինչով, որոնցմով, այդպէսով, այնքանով, որքանով, Ինձմով, ամէնով, այդպիսով</li>
      <li>PROPN: Գուրթով, Իսթանպուլով, Հայաստանով</li>
      <li>VERB: ըլլալով, առնելով, ըսելով, տեսնելով, տալով, ջանալով, ունենալով, գալով, պահելով, սպասելով</li>
      <li>VERB-Fin: աշխատելով, սիրահարուելով, ցաթեցնելով</li>
      <li>VERB-Inf: ըլլալով, առնելով, ըսելով, տեսնելով, տալով, ջանալով, ունենալով, գալով, պահելով, սպասելով</li>
      <li>VERB-Part: յարձակելով, վերակենդանացնելով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>NOUN: դաշտումը, թուումն, կեանքում, քորիդորում</li>
      <li>PRON: Յամենայն, ինչումն, որում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADP: հետը, տակը, մէջն, վրան, քովս, մէջս, վրաս, հետս, առջեւը, հետերնին</li>
      <li>NOUN: բան, օր, տարի, անգամ, հայ, ատեն, մարդ, տեղի, հայրս, պատրիարք</li>
      <li>PRON: որ, որոնք, ան, ինչ, ես, մենք, անոնք, մէկը, ով, բոլորը</li>
      <li>PROPN: Սահակ, Պոլիս, Թուրքիան, Հայաստան, Միքքին, Խրիսթինա, Տիգրանեան, Արամ, Գրիգոր, Յակոբ</li>
      <li>VERB-Inf: ըլլալը, գրելը, դառնալը, եփելը, ընտրուիլը, խաբուիլը, կորսնցնելը, սկսիլը, ստանալը, Ծնիլը</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADP: մէջէն, վրայէն, տակը, քովէն, մէջն, առջեւէն, ետեւէն, ընդմէջէն, տակէն, առջեւը</li>
      <li>NOUN: ին, ը, կեանքը, հայրը, երկրին, տունը, օրը, կինը, անունը, օրերուն</li>
      <li>PRON: որուն, մէկը, միւսը, մէկն, մէկուն, միւսին, ինչը, միւսները, որը, որն</li>
      <li>PROPN: Թուրքիան, Միքքին, Խրիսթինային, Խրիսթինան, Պետրոսին, Պոլսէն, Զօհրապը, Միքքիին, Մուշեղին, Ազրպէյճանին</li>
      <li>VERB-Fin: գործելուն</li>
      <li>VERB-Inf: ըլլալը, ըլլալուն, գրելը, դառնալը, երթալէն, գալուն, դառնալէն, դրսեւորելու, եփելը, ընտրուիլը</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADP: վրայի, ետեւէ, վրայով</li>
      <li>AUX-Inf: ըլլալով, ըլլալու, տալով, տալու</li>
      <li>NOUN: բան, ի, օր, տարի, անգամ, հայ, ատեն, եկեղեցւոյ, տեղի, մարդ</li>
      <li>PRON: որ, ինչ, որու, զոր, ոչինչ, որով, զորս, ուրիշ, ինչու, ուրիշներու</li>
      <li>PROPN: Թուրքիոյ, Հայաստանի, Սահակ, Պոլիս, Հայաստան, Պոլսոյ, Խրիսթինա, Տիգրանեան, Արցախի, Լիբանանի</li>
      <li>VERB: ըլլալու, ըլլալով, տալու, ընելու, առնելու, առնելով, ըսելով, տեսնելով, ստեղծելու, տեսնելու</li>
      <li>VERB-Fin: աշխատելով, սիրահարուելով, ցաթեցնելով</li>
      <li>VERB-Inf: ըլլալու, ըլլալով, տալու, ընելու, առնելու, առնելով, ըսելով, տեսնելով, ստեղծելու, տեսնելու</li>
      <li>VERB-Part: օգնելու, յարձակելով, վերակենդանացնելով, օգտագործելէ</li>
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
      <li>ADJ: գերզգայուն, գերհզօր</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADV: աւելի, պակաս, նուազ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: մեծ, նոր, վերջին, առաջին, երկար, տարբեր, շատ, կարեւոր, պարզ, պզտիկ</li>
      <li>ADV: ուշ, արագ, լուրջ, լայն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: մեծագոյն, լաւագոյն, նուազագոյն, առաւելագոյն, ամենաբարձր, ամէնավայրագ, կարեւորագոյն, ամենաազդու, ամենաբուռն, ամենագեղեցիկ</li>
      <li>ADV: ամէնաշատը, սաստկագոյնս</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: չէ, չէր, չեմ, չեն, չի, չէին, չենք, չես, չ՚, չէք</li>
      <li>AUX-Fin: չէ, չէր, չեմ, չեն, չի, չէին, չենք, չես, չ՚, չէք</li>
      <li>PART: ոչ, մի, չի, չը</li>
      <li>VERB: չկայ, չունի, չկար, չունիմ, չունին, չունէր, չըլլար, չկրցաւ, չունինք, չեղաւ</li>
      <li>VERB-Fin: չկայ, չունի, չկար, չունիմ, չունին, չունէր, չըլլար, չկրցաւ, չունինք, չեղաւ</li>
      <li>VERB-Inf: չըլլալու, չդիմանալով, չըլլալով, չունենալու, Չգիտնալով, չառնելով, չառնելու, չարտասուելու, չբերելու, չգիտնալնուն</li>
      <li>VERB-Part: չունեցող, չըլլալիք, Չկերուած, չազատագրուած, չանցած, չառնուող, չգիտցած, չգործող, չեկած, չենթարկուած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX: է, էր, պիտի, են, էին, եմ, պէտք, ենք, ըլլայ, էի</li>
      <li>AUX-Fin: է, էր, են, էին, եմ, ենք, ըլլայ, էի, ես, էք</li>
      <li>AUX-Inf: ըլլալով, ըլլալ, ըլլալու, տալ, ըլլալնուս, տալով, տալու</li>
      <li>AUX-Part: եղած, տուած</li>
      <li>VERB: ըսէ, ըսաւ, կայ, կրնայ, ունի, ըսեմ, եղած, ունեցած, կար, ըլլայ</li>
      <li>VERB-Fin: ըսէ, ըսաւ, կայ, կրնայ, ունի, ըսեմ, կար, ըլլայ, ունէր, ունեցաւ</li>
      <li>VERB-Inf: ըլլալ, ըսել, ըլլալու, ընել, տալ, ըլլալով, տալու, ունենալ, ընելու, առնելու</li>
      <li>VERB-Part: եղած, ունեցած, եկած, սկսած, ըրած, դարձած, առած, հասած, մնացած, կատարուած</li>
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
      <li>VERB-Fin: չզարմացար</li>
      <li>VERB-Inf: նկարահանող</li>
      <li>VERB-Part: գտնուող, ապրող, դարձող, եկող, տիրող, անցնող, եղող, ունեցող, բխող, գացող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dur,Iter
    <ul>
      <li>VERB-Part: տապլտկող, փայլփլող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: կը, է, կ՚, էր, են, էին, չէ, եմ, չէր, կու</li>
      <li>AUX-Fin: է, էր, են, էին, չէ, եմ, չէր, չեմ, չեն, չի</li>
      <li>AUX-Part: տար</li>
      <li>VERB-Fin: կայ, կրնայ, ունի, կար, ունէր, ունին, կան, չկայ, կրնան, չունի</li>
      <li>VERB-Part: գիտեր, կրնար, ուզեր, յիշեր, ըներ, ունենար, ըլլար, հասկնար, ճանչնար, սիրեր</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter
    <ul>
      <li>VERB: ձգձգել, տապլտկելով</li>
      <li>VERB-Inf: ձգձգել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter,Perf
    <ul>
      <li>VERB-Fin: կոտրտուեցան</li>
      <li>VERB-Part: կծկտած, կծկտեր, փորփրած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter,Prosp
    <ul>
      <li>VERB-Fin: պատռտեմ, ցատկռտէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: եղաւ, տուաւ, չեղաւ, տուի, եղան, տուիր</li>
      <li>AUX-Part: եղած, եղեր, տուեր, տուած</li>
      <li>VERB: ըսաւ, եղած, ունեցած, եկած, սկսած, ունեցաւ, եկաւ, եղաւ, ըրած, դարձած</li>
      <li>VERB-Fin: ըսաւ, ունեցաւ, եկաւ, եղաւ, յայտնեց, ըսի, ըրաւ, սկսաւ, պատասխանեց, ելաւ</li>
      <li>VERB-Inf: ապրուած, զսպելով, հետեւած, սովորած</li>
      <li>VERB-Part: եղած, ունեցած, եկած, սկսած, ըրած, դարձած, առած, հասած, մնացած, կատարուած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>AUX: կոր</li>
      <li>VERB-Fin: Յիշենք, փոխուէր</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>AUX: պիտի, պէտք, ըլլայ, ըլլար, չպիտի, ըլլան, ըլլալու, չըլլար, ըլլային, չըլլայ</li>
      <li>AUX-Fin: ըլլայ, ըլլար, ըլլան, չըլլար, ըլլային, չըլլայ, տայ, ըլլաս, ըլլաք, տար</li>
      <li>AUX-Part: ըլլալու</li>
      <li>VERB: ըսէ, ըսեմ, ըլլայ, գայ, ուզեմ, ըսէր, սկսի, գար, մնայ, ընէ</li>
      <li>VERB-Fin: ըսէ, ըսեմ, ըլլայ, գայ, ուզեմ, ըսէր, սկսի, գար, մնայ, ընէ</li>
      <li>VERB-Inf: օծելու</li>
      <li>VERB-Part: գալիք, բերելիք, հետեւելիք, չըլլալիք, Ապրելիք, Կանխելու, Պատմելիք, անցնելու, առնելու, արտայայտելու</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>VERB-Fin: իցէ, տատամսի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: եկուր, եկէք, ըսէ, ըրէ, առ, գացէք, կեցիր, նայեցէք, վռնտէ, Երեւակայեցէք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: կը, է, կ՚, էր, պիտի, են, էին, չէ, եմ, չէր</li>
      <li>AUX-Fin: է, էր, են, էին, չէ, եմ, չէր, չեմ, չեն, չի</li>
      <li>VERB-Fin: ըսաւ, կայ, կրնայ, ունի, կար, ունէր, ունեցաւ, ունին, եկաւ, եղաւ</li>
      <li>VERB-Part: կեցուց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>AUX: պիտի</li>
      <li>VERB-Fin: մատուցուեցաւ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: ըլլայ, ըլլար, ըլլան, չըլլար, ըլլային, չըլլայ, տայ, ըլլաս, ըլլաք, տար</li>
      <li>VERB: ըսէ, ըսեմ, ըլլայ, գայ, ուզեմ, ըսէր, սկսի, գար, մնայ, ընէ</li>
      <li>VERB-Fin: ըսէ, ըսեմ, ըլլայ, գայ, ուզեմ, ըսէր, սկսի, գար, մնայ, ընէ</li>
      <li>VERB-Part: ըսուիր, թողուր, ներկայացներ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: էր, էին, չէր, էի, չէին, ըլլար, էինք, էիր, չէի, չէինք</li>
      <li>VERB-Fin: կար, ունէր, ըսէր, գար, չկար, ըլլար, տար, կրնար, ըսէին, կային</li>
      <li>VERB-Part: ներկայացներ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: եղաւ, տուաւ, չեղաւ, տուի, եղան, տուիր</li>
      <li>VERB-Fin: ըսաւ, ունեցաւ, եկաւ, եղաւ, յայտնեց, ըսի, ըրաւ, սկսաւ, պատասխանեց, ելաւ</li>
      <li>VERB-Part: կեցուց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: է, են, չէ, եմ, չեմ, չեն, չի, ենք, ըլլայ, ես</li>
      <li>VERB: ըսէ, կայ, կրնայ, ունի, ըսեմ, ըլլայ, ունին, կան, չկայ, գայ</li>
      <li>VERB-Fin: ըսէ, կայ, կրնայ, ունի, ըսեմ, ըլլայ, ունին, կան, չկայ, գայ</li>
      <li>VERB-Part: ըսուիր, թողուր</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB: ըսէ, ըսաւ, ունի, ըսեմ, գիտեր, ունեցած, ունէր, ունեցաւ, ունին, ըսել</li>
      <li>VERB-Fin: ըսէ, ըսաւ, ունի, ըսեմ, ունէր, ունեցաւ, ունին, ուզեմ, չունի, ըսէր</li>
      <li>VERB-Inf: ըսել, ընել, տալ, տալու, ունենալ, ընելու, առնելու, գտնել, առնել, առնելով</li>
      <li>VERB-Part: գիտեր, ունեցած, ըրած, առած, ուզեր, սկսած, տեսած, տուած, բերած, կատարած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>AUX-Fin: տուաւ, տայ, տուի, տար, տաք, տուիր</li>
      <li>AUX-Inf: տալ, տալով, տալու</li>
      <li>AUX-Part: տուեր, տար, տուած</li>
      <li>VERB-Fin: յիշեցուց, զգացունէին, մեռցնեմ, մեռցնէ, մեռցուց, յիշեցնէ, յիշեցնէին, յիշեցնէր, պառկեցնէին, տրորեցի</li>
      <li>VERB-Inf: յիշեցնելով, բուսցնել, կարդացնել, մեծցնել, յիշեցնելու, շեղեցնելով, տառապեցնելու</li>
      <li>VERB-Part: զգացուցած, կանգնեցուցեր</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB: կայ, կրնայ, կրնար, եղած, կար, ըլլայ, եկած, ըլլալ, եկաւ, եղաւ</li>
      <li>VERB-Fin: կայ, կրնայ, կար, ըլլայ, եկաւ, եղաւ, կան, չկայ, գայ, կրնան</li>
      <li>VERB-Inf: ըլլալ, ըլլալու, ըլլալով, դառնալ, խօսիլ, գալ, երթալ, ըլլալէ, ըլլալը, հասնիլ</li>
      <li>VERB-Part: եղած, կրնար, եկած, դարձած, հասած, մնացած, անցած, կոչուած, սկսած, կեցած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: առնուին, խօսուի, ըսուի, հիմնուեցաւ, տրուէր, քննարկուի, ակնարկուի, արձակուին, աքսորուին, բացուեցաւ</li>
      <li>VERB-Inf: ենթարկուիլ, ընտրուիլը, վերընտրուելու, ածուիլ, անարգուիլ, արդուկուելու, արձակուելէ, աքսորուելէ, բարեկարգուիլ, բռնուելու</li>
      <li>VERB-Part: կատարուած, պատրաստուած, ստեղծուած, նախատեսուած, տրուած, գրուած, դրուած, կազմակերպուած, որոշուած, տպուած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>VERB-Fin: սիրահարուելով, փոխանակուեցան</li>
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
      <li>DET: մը, մըն, մի, մէկ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: հոս, հոն, այսպէս, այնքան, այստեղ, այդպէս, այնպէս, այսքան, անդին, նոյնքան</li>
      <li>DET: այս, այդ, այն, միւս, նոյն, սա, նորին, աս, այնպիսի, ան</li>
      <li>PRON: այն, այդ, այս, սա, անիկա, անկէ, միւսը, ասիկա, զայն, ասոր</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: իր, իրենց</li>
      <li>PRON: իրեն, իր, իրենց, զինքը, ինք, զինք, իրենք, ինքն, ինքը, իրմէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>ADV: ինչ, որքան, ինչպիսի</li>
      <li>DET: ինչ, քանի, ինչքան, որ</li>
      <li>PRON: ինչեր, ով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: որչափ</li>
      <li>DET: մէկ, քանի, ուրիշ, այլ, որոշ, որեւէ, ո, ոեւէ, ինչ</li>
      <li>PRON: մէկը, ինչ, մէկն, այլն, ոք, մէկուն, այլոց, ոմանք, ուրիշ, մին</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: ինչպէս, ինչու, ուր, երբ, ինչ, որքան, ուրկէ, որչափ, ինտոր, ոնց</li>
      <li>DET: ինչ, որ, քանի, որքան, Որչափ, ինչպիսի</li>
      <li>PRON: ինչ, ով, երբ, ինչու, Ինչը, ինչով, ովքեր, Որտեղացի, ինչումն, որն</li>
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
      <li>DET: մեր, անոր, անոնց, իմ, քու, ձեր, մերին, նրա, քո</li>
      <li>PRON: ան, ես, մենք, անոնք, անոր, մեզի, ինծի, զայն, անոնց, մեզ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: իրարու, իրար, իրարմէ, զիրար, մէկ, մէկզմէկու, մէկու</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: երբ, ուր, ինչպէս, որքան, ուրկէ, երբոր, նոյնքան, որչափ, ուսկէ</li>
      <li>DET: որքան, որոնց</li>
      <li>PRON: որ, որոնք, որուն, ինչ, որոնց, որու, զոր, որով, զորս, որոնցմէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: մէկ</li>
      <li>DET: ամէն, բոլոր, ամբողջ, ամեն, իւրաքանչիւր, ամենայն, բովանդակ, լման, համայն, բոլր</li>
      <li>PRON: ամէնէն, բոլորը, բոլորին, ամենէն, բոլորն, ամբողջին, ամբողջը, ամէնուն, ամէնը, ամէնքն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: եօթանասուննոց, երկուքուկէսնոց, ութսուննոց</li>
      <li>NUM: երկու, մէկ, 2021, երեք, չորս, հինգ, վեց, 6, 7, 15</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dist
    <ul>
      <li>ADJ: մէկական</li>
      <li>NUM: 8, մէյմէկ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>NUM: կէս, մէկուկէս, քառորդ, երկուքուկէս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: առաջին, երկրորդ, Բ, Ա, առջի, ԺԹ, Գ, 113-րդ, երրորդ, եօթներորդ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: հայոց, Հայաստանեայց</li>
      <li>DET: իր, մեր, իրենց, անոր, անոնց, իմ, քու, ձեր, ասոնց, որոնց</li>
      <li>NOUN: Միւսներունը, դիմացինին, դիմացիննիդ, երէկինէն, հիմակուանը, տարիինը</li>
      <li>PRON: իրենը, մերն, իրենցը, քուկդ, Մերիններուն, ասոնցը, իրեններէն, իրենցիններուն, մերը</li>
      <li>PROPN: Հալլաճեաններունը</li>
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
      <li>PRON: իրենց, իր, իրեն, ինքզինք, իրենք, ինքզինքը, ինքզինքին, ինքզինքիս, ինքնիրեն, նոյնինքն</li>
      <li>VERB-Fin: լուացուէին, լուացուիմ</li>
      <li>VERB-Inf: լուացուելէ, լուացուիլ, հագուիլ</li>
      <li>VERB-Part: հագուած, ածիլուած</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: եմ, չեմ, ենք, էի, չենք, էինք, չէի, չէինք, տուի, չունիմ</li>
      <li>DET: մեր, իմ, մերին</li>
      <li>PRON: ես, մենք, մեզի, ինծի, մեզ, զիս, մեր, իմ, ինձ, ինձմէ</li>
      <li>VERB-Fin: ըսեմ, ուզեմ, ըսի, ունինք, յիշեմ, չունիմ, գիտեմ, ելլեմ, ընեմ, տեսնեմ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: ես, չես, էք, չէք, էիր, չէիր, էիք, չէիք, ըլլաս, ըլլաք</li>
      <li>DET: քու, ձեր, քո</li>
      <li>PRON: դուն, քեզ, քեզի, ձեզի, դուք, ձեզ, դու, քու, ձեզմէ, ձեր</li>
      <li>VERB: ըսես, եկուր, գիտէք, ունիս, եկէք, գիտես, կարծես, ուզես, ըսէ, կրնաս</li>
      <li>VERB-Fin: ըսես, եկուր, գիտէք, ունիս, եկէք, գիտես, կարծես, ուզես, ըսէ, կրնաս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: է, էր, են, էին, չէ, չէր, չեն, չի, ըլլայ, չէին</li>
      <li>DET: իր, իրենց, անոր, անոնց, նրա</li>
      <li>PRON: ան, իրեն, անոնք, անոր, իր, իրենց, զայն, զինքը, անոնց, ինք</li>
      <li>VERB-Fin: ըսէ, ըսաւ, կայ, կրնայ, ունի, կար, ըլլայ, ունէր, ունեցաւ, ունին</li>
      <li>VERB-Part: կեցուց, ըսուիր, թողուր, ներկայացներ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>AUX-Fin: էք, չէք, չէիք</li>
      <li>DET: ձեր</li>
      <li>PRON: ձեզ, դուք, ձեզի, ձեզմէ, ձեր, զձեզ</li>
      <li>VERB-Fin: գիտէք, ըսէք, կարծէք, հասկնաք, հրամմեցէք, ներէք, նստեցէք, ուզէք, Գրեցէք, Չճանցաք</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADP: հետերնին, ետեւնին, հետերնիս, շուրջերնին, վրանին, վրանիս</li>
      <li>AUX-Inf: ըլլալնուս</li>
      <li>NOUN: ակնարկս, գլուխնին, երեսնին, Աչքերնին, Տուներնին, Տրամադրութիւննիս, աչքովնիդ, առաջքնին, գիտելիքնիս, գործերնիս</li>
      <li>PRON: որունիդ</li>
      <li>VERB-Inf: Ժողվըւելնուն, ըլլալնիս, ըլլալնուն, ըլլալնուս, նետուելնիդ, չգիտնալնուն, պահւելնուն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADP: հետը, վրան, քովս, մէջս, վրաս, հետս, մասիդ, հետդ, առջեւդ, դէմս</li>
      <li>NOUN: հայրս, մայրս, հօրս, մօրս, պապս, սիրտս, գլուխս, մամաս, մօրաքոյրս, նայուածքս</li>
      <li>VERB-Fin: ձեռնարկէ, ուտելուս</li>
      <li>VERB-Inf: ելլելէս, երթալս, մտնելուս, ստանալէս, քալելս</li>
      <li>VERB-Part: կերտածդ, հասունցուցածդ, տուածս</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Ս, Ամեն, ծ, Ա, Արժ, Երեսփ, Կրօն, ազգ, ընդհ, Գերշ</li>
          <li>DET: Ն</li>
          <li>NOUN: Տ, Ս, արք, Պրն, Պր, վրդ, Քհնյ, Հ, Սրկ, թ</li>
          <li>PRON: եւլն</li>
          <li>PROPN: ԱՄՆ, ՀՅԴ, ԼԵՄ, Շ, ՀԱՊԿ, ԹԽ, ԹՎՄ, ՀՏՓ, ՄԱԿ, ՊԺ</li>
          <li>X: ERVAB, UCLA</li>
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
          <li>ADP: հանդէպ, հակառակ, համաձայն, շնորհիւ, համեմատ, փոխանակ, Բաց</li>
        </ul>
      </li>
      <li>Comadp
        <ul>
          <li>ADP: հեճուկս</li>
        </ul>
      </li>
      <li>Post
        <ul>
          <li>ADP: մէջ, համար, վրայ, հետ, մասին, պէս, տակ, կողմէ, դէմ, առջեւ</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: ի, դէպի, մինչեւ, առանց, իբրեւ, որպէս, ըստ, առ, ինչպէս, քան</li>
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
          <li>CCONJ: այլ, ինչպէս, այլեւ, ապա, այդպէս, թէկուզ</li>
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
          <li>AUX-Part: տար</li>
          <li>VERB-Fin: դներ</li>
          <li>VERB-Part: գիտեր, կրնար, ուզեր, յիշեր, ըներ, ունենար, ըլլար, հասկնար, ճանչնար, սիրեր</li>
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
          <li>ADV: այդպէս, այդքան, այդտեղ, հոդ, Հոտկէ, այդչափ, ատանկ</li>
          <li>DET: այդ, այդպիսի, այդքան, ատ, ատանկ, ատոր</li>
          <li>PRON: այդ, ատկէ, ատիկա, ատոնք, ատոր, ատ, այդպէսով, այդքանը, Էդ, այդպիսով</li>
        </ul>
      </li>
      <li>Prox
        <ul>
          <li>ADV: հոս, այսպէս, այստեղ, այսքան, ասանկ, այսչափ, հոսկէ, սանկ, ասդին</li>
          <li>DET: այս, սա, աս, այսպիսի, սոյն, այսքան, Ասանկ, ասոնց, էս, այսչափ</li>
          <li>PRON: այս, սա, ասիկա, ասոր, ասոնք, ասկէ, աս, այսպէս, ասի, այսքանը</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADV: հոն, այնքան, այնպէս, նոյնքան, անդին, այնտեղ, անանկ, այնչափ, հոնկէ, հունա</li>
          <li>DET: այն, նոյն, նորին, այնպիսի, ան, անոր, էն, այնքան, Ն, անոնց</li>
          <li>PRON: այն, անիկա, անկէ, զայն, ան, անոր, զանոնք, նոյնը, նոյնն, անոնց</li>
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
          <li>NOUN: վերջերս, ներկայիս, թերթիս, աշխարհիս, մարդուս, քաղաքիս, օրս, Աթոռոյս, աշխարհքս, թեմիս</li>
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
          <li>ADJ: կափ, մունր, պաս</li>
          <li>ADV: միս, շիփ, ցփեղ</li>
          <li>NOUN: կապուստը, կապուստով, ձուն, պիլի, փուտով</li>
          <li>NUM: մէյ</li>
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
          <li>ADJ: Միլլիէ, Սէն, Գինան, էքեպէր, պէթ</li>
          <li>PROPN: T24</li>
          <li>PUNCT: :, `, !</li>
          <li>X: la, Ապու, de, et, օղլու, le, of, Ամմօ, փինկ, Camilla</li>
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
          <li>ADJ: առասպելա, հոգինոց, փոխ, օրեայ, իրանա, ռուսա</li>
          <li>NOUN: ի, ին, ը, էն, ն, ու, ականներէն, ականները, ականներու, եր</li>
          <li>X: հակա</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>LangId</a>
    <ul>
      <li>Hy
        <ul>
          <li>ADJ: ղորթ</li>
          <li>ADP: ետեւից</li>
          <li>ADV: էլ, երեւի, ոնց</li>
          <li>AUX: պիտի</li>
          <li>DET: նրա, քո</li>
          <li>NOUN: Ախպէր, ժամին, փլաւը, Թօփուզեանների, Ժիւսթիսից, Փլաւին, Քիրպիներին, աղջկերքը, արխիվ, դաշտումը</li>
          <li>PART: էլ</li>
          <li>PRON: դու, քեզ, մեզ, նա, ինչումն, Էդ, իրանցից</li>
          <li>PROPN: Զուիցերիայից</li>
          <li>VERB-Fin: ասա, Եկ, ասացիր, լինես, նայեմ, ունէք, պղաւեց, վառիր</li>
          <li>VERB-Inf: լինել, ամաջելու, անելու, ասել, ներառել, սովորել, տանել, տանելու</li>
          <li>VERB-Part: ուզում, գժուել, անում, ասում, ամաչում, գալիս, գրել, եկել, զանգահարում, ինկել</li>
          <li>X: կուջ</li>
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
          <li>ADJ: Թուիթըրեան, ՀՏՓական, ՀՏՓցի</li>
          <li>PROPN: ՀՅԴ, Մունիր, ԼԵՄ, ՀԱՊԿ, Սահակեան, Արաս, ԹԽ, ԹՎՄ, Մարալ, Սիվիլնեթի</li>
        </ul>
      </li>
      <li>Geo
        <ul>
          <li>ADJ: եւրոպական, ռուսական, ֆրանսական, թրքական, օսմանեան, ամերիկեան, արցախեան, արեւելեան, լիբանանեան, սուրիական</li>
          <li>NOUN: Արարատը, Կրընոպլի</li>
          <li>PROPN: Թուրքիոյ, Հայաստանի, Պոլիս, Թուրքիան, Հայաստան, Պոլսոյ, Արցախի, Լիբանանի, Ֆրանսայի, ԱՄՆ</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>ADJ: Վարուժանեան</li>
          <li>NOUN: Կիւլիրենգ, Մարինաներ, Ռոպերթ, Վալերի</li>
          <li>PROPN: Սահակ, Միքքին, Խրիսթինա, Արամ, Գրիգոր, Յակոբ, Խրիսթինային, Մարկոս, Եդուարդ, Խրիսթինան</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>PROPN: կաղանդի, Ծնունդի, Վարդավառ, կաղանդը, Արմենիա, Զատկի, Թաշխորան, Սավուա, Սէյֆօ, ՎԱՐԴԱՎԱՌԸ</li>
        </ul>
      </li>
      <li>Pro
        <ul>
          <li>NOUN: թուիքսին, սնիքըրսին, քինտըրին</li>
          <li>PROPN: ԺԱՄԱՆԱԿ, Ակօս, ԿԱՄի, Յառաջ, Նարեկ, Թիրիըր, Մեհեանի, Պապըլ, Սատա, Սգայ</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>ADJ: Օշականեան</li>
          <li>NOUN: քրիստոսներուն</li>
          <li>PROPN: Լուսաւորիչ, Աստուածածին, Վարուժան, Վարուժանի, Սապահէտտին, Սապահէտտինի, Սողոմենց, Տեմուրճենց, Կոմիտաս, Օշական</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>ADJ: Կիւլէնական</li>
          <li>NOUN: Թօփուզեանների, Հօհէնպէրկի, Ճէրճինսքիի, Մատէնճեաններն, Քիրպիներին</li>
          <li>PROPN: Տիգրանեան, Մխիթարեան, Վիլանի, Մաշալեան, Շահինեանի, Տամատեան, Քառլիէ, Նազարիկեան, Գովանի, Էրտողանի</li>
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
          <li>ADJ: Բ, Ա, ԺԹ, Գ, Զ, Ը, Դ, Ե, Է, ԺԷ</li>
          <li>NUM: ա, բ, գ</li>
        </ul>
      </li>
      <li>Combi
        <ul>
          <li>ADJ: 44-օրեայ, 113-րդ, 106-րդ, 12-ամեայ, 18ամեայ, 1950-ական, 20-րդ, 24-եան, 36նոց, 44օրեայ</li>
        </ul>
      </li>
      <li>Digit
        <ul>
          <li>NUM: 2021, 6, 7, 15, 2020, 24, 12, 1915, 2, 19</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: առաջին, երկրորդ, առջի, երրորդ, չորրորդ, եօթանասուննոց, առաջի, երկուքուկէսնոց, եօթանասուներորդ, իններորդ</li>
          <li>NUM: երկու, մէկ, երեք, չորս, հինգ, վեց, կէս, հազար, քսան, հարիւր</li>
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
          <li>ADP: քովս, մէջս, վրաս, հետս, դէմս, ետեւս, հետերնիս, վրանիս, քովիս</li>
          <li>AUX-Inf: ըլլալնուս</li>
          <li>NOUN: հայրս, մայրս, հօրս, մօրս, պապս, սիրտս, գլուխս, մամաս, մօրաքոյրս, նայուածքս</li>
          <li>PRON: բոլորս, ամէնքս, Ամենքնիս, ամենուս, բոլորիս, ինքս</li>
          <li>VERB-Fin: ուտելուս</li>
          <li>VERB-Inf: ելլելէս, երթալս, ըլլալնիս, ըլլալնուս, մտնելուս, ստանալէս, քալելս</li>
          <li>VERB-Part: տուածս</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>ADP: մասիդ, հետդ, առջեւդ, մէջդ, վրադ</li>
          <li>NOUN: աչքդ, լեզուդ, բերնիդ, գլուխդ, մամադ, Ականջդ, անունդ, բարեկամդ, բերանդ, հայրդ</li>
          <li>PRON: ինքդ, ինքզինքդ, ինքզինքիդ, որունիդ</li>
          <li>VERB-Inf: նետուելնիդ</li>
          <li>VERB-Part: կերտածդ, հասունցուցածդ</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADP: քովը, հետը, վրան, հետերնին, մօտը, ետեւնին, մէջը, շուրջերնին, վրանին, քովիկը</li>
          <li>NOUN: գլուխնին, երեսնին, Աչքերնին, Տուներնին, առաջքնին, դիմացնին, թեւերնին, ծամերնին, հագուստնին, ձայներնին</li>
          <li>VERB-Inf: Ժողվըւելնուն, ըլլալնուն, չգիտնալնուն, պահւելնուն</li>
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
          <li>ADJ: հասարակաց, Սրբոց, Այսու, Հայաստանեայց, Մեծի, բնորոշեալ, նուազն</li>
          <li>ADP: վասն, ընդ, հաշուոյն, պատուոյ, յաչս, յաւարտ</li>
          <li>ADV: յառաջ, ցայսօր, կամայ, ամենայնիւ, մեծաւ, յաւիտեանս, սերտիւ, ցայժմ, ցարդ</li>
          <li>DET: նորին, Ն</li>
          <li>NOUN: եկեղեցւոյ, տեղի, հայոց, վերջոյ, նպաստ, գործոց, առթիւ, հարկէ, Նահատակաց, ատենօք</li>
          <li>PRON: այլոց, Յամենայն, ամենայնի, զձեզ, զմեզ, իս, որում, որս, որք</li>
          <li>PROPN: Եսայեայ</li>
          <li>VERB-Fin: Է, իցէ, լիցի, Հաւատամք, իմա, մատոյց</li>
        </ul>
      </li>
      <li>Coll
        <ul>
          <li>ADJ: սաթիւռէ, մենծ, Թաշչը, անթիք, ետքի, զալիմ, կամարիլային, հարտ, հիսթերիք, վերջի</li>
          <li>ADP: վերջը, ետեւը, առջին</li>
          <li>ADV: ասանկ, անանկ, սանկ, ոնց, աննորմալ, սօլօ, ատանկ, ճիշտը</li>
          <li>AUX: կոր</li>
          <li>DET: էն, Ասանկ, էս, անանկ, մերին, ատանկ, մնացած</li>
          <li>INTJ: Թամամ, Մերսի</li>
          <li>NOUN: տղոց, զաւկին, գուրպ, կնիկը, ճամբէն, Ախպէր, Շեխ, Չարշըի, Ֆօթօ, աղբարին</li>
          <li>NUM: ութը</li>
          <li>PRON: զինքը, ինքն, ինքը, ինձ, բոլորի, ինքզինքը, ասի, Էդ, անի, անկէց</li>
          <li>PROPN: Աստուածածնայ</li>
          <li>VERB-Fin: առի, չիկայ, առիր, գտնան, գտնաս, եղեն, էւէլնայ, կուրցուց, հաւտանք, տեսնաս</li>
          <li>VERB-Inf: գժտել, ելլելուց</li>
          <li>VERB-Part: կսկծացնող, հագնուած, համարձակուի</li>
        </ul>
      </li>
      <li>Expr
        <ul>
          <li>ADJ: անուշիկ, պճլիկ, քչիկ, պտըլիկ</li>
          <li>ADP: քովիկը</li>
          <li>ADV: քիչիկ, քչիկ</li>
          <li>NOUN: մարդուկը, քոյրիկս, աթոռակին, անտառակին, անտառակներուն, աչուկներով, առուակին, արծուիկները, գառնուկի, դռնակէն</li>
          <li>PRON: ինծիի</li>
          <li>PROPN: Խաչօն, Խաչօ, Մարուշ, Խաչոյին, Սաղօ, Վասիլիկը</li>
          <li>VERB-Fin: սիրէէ</li>
          <li>VERB-Part: համարձակեեր</li>
        </ul>
      </li>
      <li>Rare
        <ul>
          <li>ADJ: բանւորական, արդիսդիք, սբորդական</li>
          <li>ADP: Բաց</li>
          <li>ADV: ափեղ, նոյնհետայն</li>
          <li>AUX-Fin: չը</li>
          <li>NOUN: կանգ, խնդրոյ, սանուց, յանկարծակիի, Երկնաց, Ծըխամորճս, էլէկանսը, ընտանեօք, թըշնամութեան, հարըստութիւնը</li>
          <li>NUM: տասնըերկու, տասնըվեց</li>
          <li>PRON: աստի, այնմ</li>
          <li>PROPN: Խանասորայ</li>
          <li>VERB-Fin: կարճըցնէր, ունկընդրէր, սղէ, տըւաւ</li>
          <li>VERB-Part: ճըմլուած</li>
        </ul>
      </li>
      <li>Slng
        <ul>
          <li>NOUN: պտտիկ</li>
        </ul>
      </li>
      <li>Vrnc
        <ul>
          <li>ADJ: առջի, Գազազ, լամիս, լինքսի, հելալլամիշ, ճիտըծուռ, շաշխըն, սիյահի, ղորթ</li>
          <li>ADV: ուսկէ, ուսկից, տահա, հունա</li>
          <li>NOUN: տուտու, աղբար, եազմա, եզնիքը, տուտուն, Հագգըի, Սապոնով, Քաղքի, բալխիրի, բալխիրներ</li>
          <li>PRON: մին, իրանցից</li>
          <li>PROPN: Հինդիստան, Չինումաչին</li>
          <li>VERB-Fin: խրկէր</li>
          <li>VERB-Part: ինկել</li>
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
          <li>VERB: կայ, կրնայ, կրնար, եղած, կար, ըլլայ, եկած, ըլլալ, եկաւ, եղաւ</li>
          <li>VERB-Fin: կայ, կրնայ, կար, ըլլայ, եկաւ, եղաւ, կան, չկայ, գայ, կրնան</li>
          <li>VERB-Inf: ըլլալ, ըլլալու, ըլլալով, դառնալ, խօսիլ, գալ, երթալ, ըլլալէ, ըլլալը, հասնիլ</li>
          <li>VERB-Part: եղած, կրնար, եկած, դարձած, հասած, մնացած, կատարուած, անցած, կոչուած, պատրաստուած</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB: ըսէ, ըսաւ, ունի, ըսեմ, գիտեր, ունեցած, ունէր, ունեցաւ, ունին, ըսել</li>
          <li>VERB-Fin: ըսէ, ըսաւ, ունի, ըսեմ, ունէր, ունեցաւ, ունին, ուզեմ, չունի, ըսէր</li>
          <li>VERB-Inf: ըսել, ընել, տալ, տալու, ունենալ, ընելու, առնելու, գտնել, առնել, առնելով</li>
          <li>VERB-Part: գիտեր, ունեցած, ըրած, առած, ուզեր, սկսած, տեսած, տուած, բերած, կատարած</li>
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
          <li>ADJ: Պատիրիարքական, ակադէմական, թագուն, ժողոդրավարական, խորհդանշական, ներկա, Խափուսիկ, անզիչող</li>
          <li>ADP: մեջ</li>
          <li>ADV: երբէք, արդեն, հիմայ, աւել, լռելեան, հանկարծ, ինչպես, ճիշտը</li>
          <li>AUX-Fin: նե, չ</li>
          <li>DET: ամեն, բոլր</li>
          <li>NOUN: անպարտուութիւնը, ապրանքին, բանակցութիւները, գլխաւորութամբ, խելապատիկին, կանչով, կիններ, հասարակոթիւնը, հաւանակութեամբ, հոգեւորականններէն</li>
          <li>PART: արդեոք</li>
          <li>PRON: ամէնէն, ամէնուն, ամենքը, ամենը, որոնք, Ամենքնիս, որ, ուրիշեր</li>
          <li>PROPN: Ռուասատանի</li>
          <li>SCONJ: եթե, Որովետեւ</li>
          <li>VERB-Fin: ուղեմ, դժկամացեկաւ, զբաղցուց, կարէնար, հրամէ, յօգնէր, պատաստանիր, պատնեշէ, պարկեցնեն, պտտէր</li>
          <li>VERB-Inf: անցնելը, արձնագարելու, կիռարելով, չեզոքացնելու, սպանել</li>
          <li>VERB-Part: կազած, կարչած, ներկայացներ, նիրկուած, նկատուի, նկարւած, պատրստած, սպանուած, քողազերծուած</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: եմ, ըլլալ.</li>
</ul>

<ul>
<li>This corpus uses 8 lemmas as auxiliaries (<a>aux</a>). Examples: կը, եմ, պիտի, ըլլալ, պէտք, կոր, ունիմ, տալ.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Nom (2051)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(իբրեւ) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(ձեռամբ) (1)</li>
      <li>VERB-Fin--PRON (27)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Nom (706)</li>
      <li>VERB-Inf--NOUN-Dat (2)</li>
      <li>VERB-Inf--NOUN-Nom (23)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Inf--PRON-Nom (2)</li>
      <li>VERB-Part--NOUN-Dat (38)</li>
      <li>VERB-Part--NOUN-Nom (551)</li>
      <li>VERB-Part--PRON (7)</li>
      <li>VERB-Part--PRON-Dat (8)</li>
      <li>VERB-Part--PRON-Gen (10)</li>
      <li>VERB-Part--PRON-Nom (206)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Nom (1)</li>
      <li>VERB-Fin--NOUN-Abl (2)</li>
      <li>VERB-Fin--NOUN-Abl-ADP(բացի) (1)</li>
      <li>VERB-Fin--NOUN-Dat (278)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(մէջ) (2)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(պատճառաւ) (1)</li>
      <li>VERB-Fin--NOUN-Ins (1)</li>
      <li>VERB-Fin--NOUN-Nom (1496)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(ի) (1)</li>
      <li>VERB-Fin--PRON (12)</li>
      <li>VERB-Fin--PRON-Abl (1)</li>
      <li>VERB-Fin--PRON-Acc (146)</li>
      <li>VERB-Fin--PRON-Dat (96)</li>
      <li>VERB-Fin--PRON-Nom (91)</li>
      <li>VERB-Inf--NOUN-Abl (1)</li>
      <li>VERB-Inf--NOUN-Dat (150)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(վրայ) (1)</li>
      <li>VERB-Inf--NOUN-Nom (1000)</li>
      <li>VERB-Inf--NOUN-Nom-ADP(առանց) (2)</li>
      <li>VERB-Inf--PRON (5)</li>
      <li>VERB-Inf--PRON-Acc (66)</li>
      <li>VERB-Inf--PRON-Dat (19)</li>
      <li>VERB-Inf--PRON-Nom (23)</li>
      <li>VERB-Part--NOUN-Dat (116)</li>
      <li>VERB-Part--NOUN-Nom (527)</li>
      <li>VERB-Part--PRON (5)</li>
      <li>VERB-Part--PRON-Acc (54)</li>
      <li>VERB-Part--PRON-Dat (31)</li>
      <li>VERB-Part--PRON-Gen (1)</li>
      <li>VERB-Part--PRON-Nom (26)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (89)</li>
      <li>VERB-Fin--NOUN-Nom (4)</li>
      <li>VERB-Fin--PRON-Acc (3)</li>
      <li>VERB-Fin--PRON-Dat (47)</li>
      <li>VERB-Inf--NOUN-Dat (53)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Nom (3)</li>
      <li>VERB-Inf--PRON-Acc (2)</li>
      <li>VERB-Inf--PRON-Dat (18)</li>
      <li>VERB-Part--NOUN-Dat (45)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--PRON-Acc (3)</li>
      <li>VERB-Part--PRON-Dat (19)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 31 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: տալ իրեն, ուղղել իրեն, պահել ինքզինք, առերեսուիլ ինքզինքիդ, գործակցիլ իրենց, գտնել ինքզինք, գտնել իրենց, զգալ ինքզինքը, զգալ ինքզինքս, զգալ իրենք, զսպել ինքզինքը, զրկել ինքզինքս, ըսել ինքզինքիս, ըսել ինքնիրեն, թուիլ իրեն, կրկնել ինքզինք, համարել ինքզինք, համարել իրեն, հանդիպիլ իրեն, հասնիլ իրենց, յարդարել ինքզինքը, նետել ինքզինք, նետել ինքզինքը, սպասող իրենց, վերապահել իրեն, տալ ինքզինքը, տալ ինքզինքիս, տալ ինքնիրեն, տալ իրենք, տեսնել ինքզինք, փնտռել ինքզինքդ</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 21 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>advmod:emph</a>, <a>aux:caus</a>, <a>aux:ex</a>, <a>case:loc</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>compound:svc</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>flat:dist</a>, <a>flat:frac</a>, <a>flat:name</a>, <a>flat:range</a>, <a>iobj:agent</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
