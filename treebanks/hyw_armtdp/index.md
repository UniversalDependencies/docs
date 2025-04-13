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
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.8 release.

The following people have contributed to making this treebank part of UD: Marat M. Yavrumyan.

Repository: [UD_Western_Armenian-ArmTDP](https://github.com/UniversalDependencies/UD_Western_Armenian-ArmTDP)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhyw_armtdp215)<br />
Download all treebanks: [UD 2.15](/#download)

License: CC BY-SA 4.0

Genre: blog, fiction, news, nonfiction, reviews, social, spoken, web, wiki

Questions, comments?
General annotation questions (either Western Armenian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Western_Armenian-ArmTDP/issues).
If you want to collaborate, please contact [marat&nbsp;•&nbsp;yavrumyan&nbsp;(æt)&nbsp;plus&nbsp;•&nbsp;ac&nbsp;•&nbsp;at].
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



The UD_Western_Armenian-ArmTDP treebank is based on the Western Armenian section of the Հայերէնի Ծառադարան dataset (ArmTDP v2.0), a broad-coverage corpus of general Modern Standard Armenian covering numerous genres. The treebank consists of 6656 sentences (~124K tokens).

The annotation scheme was developed in accordance with the UD guidelines. The original data was manually annotated by the ArmTDP team. The tokenization and POS-tagging process was carried out through alternating steps of glossary-based automatic scripting and manual revision. The treebank is so far the only manual verified corpus of Western Armenian, supplied with comprehensive morphological and syntactic annotation in the form of a complete dependency tree provided for every sentence.

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

[acl](hyw_armtdp-dep-acl.html) – [acl:relcl](hyw_armtdp-dep-acl-relcl.html) – [advcl](hyw_armtdp-dep-advcl.html) – [advcl:relcl](hyw_armtdp-dep-advcl-relcl.html) – [advmod](hyw_armtdp-dep-advmod.html) – [advmod:emph](hyw_armtdp-dep-advmod-emph.html) – [amod](hyw_armtdp-dep-amod.html) – [appos](hyw_armtdp-dep-appos.html) – [aux](hyw_armtdp-dep-aux.html) – [aux:caus](hyw_armtdp-dep-aux-caus.html) – [aux:ex](hyw_armtdp-dep-aux-ex.html) – [case](hyw_armtdp-dep-case.html) – [case:loc](hyw_armtdp-dep-case-loc.html) – [cc](hyw_armtdp-dep-cc.html) – [ccomp](hyw_armtdp-dep-ccomp.html) – [compound](hyw_armtdp-dep-compound.html) – [compound:lvc](hyw_armtdp-dep-compound-lvc.html) – [compound:redup](hyw_armtdp-dep-compound-redup.html) – [compound:svc](hyw_armtdp-dep-compound-svc.html) – [conj](hyw_armtdp-dep-conj.html) – [cop](hyw_armtdp-dep-cop.html) – [csubj](hyw_armtdp-dep-csubj.html) – [csubj:pass](hyw_armtdp-dep-csubj-pass.html) – [dep](hyw_armtdp-dep-dep.html) – [det](hyw_armtdp-dep-det.html) – [det:poss](hyw_armtdp-dep-det-poss.html) – [discourse](hyw_armtdp-dep-discourse.html) – [dislocated](hyw_armtdp-dep-dislocated.html) – [expl](hyw_armtdp-dep-expl.html) – [fixed](hyw_armtdp-dep-fixed.html) – [flat](hyw_armtdp-dep-flat.html) – [flat:dist](hyw_armtdp-dep-flat-dist.html) – [flat:frac](hyw_armtdp-dep-flat-frac.html) – [flat:name](hyw_armtdp-dep-flat-name.html) – [flat:range](hyw_armtdp-dep-flat-range.html) – [iobj](hyw_armtdp-dep-iobj.html) – [iobj:agent](hyw_armtdp-dep-iobj-agent.html) – [list](hyw_armtdp-dep-list.html) – [mark](hyw_armtdp-dep-mark.html) – [nmod](hyw_armtdp-dep-nmod.html) – [nmod:npmod](hyw_armtdp-dep-nmod-npmod.html) – [nmod:poss](hyw_armtdp-dep-nmod-poss.html) – [nsubj](hyw_armtdp-dep-nsubj.html) – [nsubj:caus](hyw_armtdp-dep-nsubj-caus.html) – [nsubj:pass](hyw_armtdp-dep-nsubj-pass.html) – [nummod](hyw_armtdp-dep-nummod.html) – [obj](hyw_armtdp-dep-obj.html) – [obl](hyw_armtdp-dep-obl.html) – [obl:agent](hyw_armtdp-dep-obl-agent.html) – [orphan](hyw_armtdp-dep-orphan.html) – [parataxis](hyw_armtdp-dep-parataxis.html) – [punct](hyw_armtdp-dep-punct.html) – [reparandum](hyw_armtdp-dep-reparandum.html) – [root](hyw_armtdp-dep-root.html) – [vocative](hyw_armtdp-dep-vocative.html) – [xcomp](hyw_armtdp-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 6656 sentences, 121583 tokens and 122907 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 22329 tokens (18%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 36 types of words that contain both letters and punctuation. Examples: կ՚, չ՚, 44-օրեայ, 113-րդ, 20-րդ, L’, 106-րդ, 12-րդ, 21-րդ, Covid-19, ՚s, 100-րդ, 12-ամեայ, 16-րդ, 18-րդ, 1860-ական, 1950-ական, 196-րդ, 24-եան, 3-րդ, 39-ամեայ, 4-րդ, 4-րդին, 7-րդ, 700-րդ, 80-ամեայ, 85-րդ, 9-րդ, L՚, https://us02web.zoom.us/j/87386495798, l&#x27;, www.yertik.com, zndoog.com, ՚նէք, զ՚, ’m</li>
</ul>

<ul>
<li>This corpus contains 1323 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 536 types of multi-word tokens. Examples: ի՞նչ, ո՛չ, ինչո՞ւ, ի՛նչ, ո՞վ, թէ՛, ա՛լ, ինչպէ՞ս, ո՞ւր, չէ՞, այո՛, ո՞ր, ի՜նչ, մի՛, ի՞նչպէս, ե՞րբ, չէ՛, ե՛ւ, կա՛մ, ո՛ր, ա՜հ, ծօ՛, հո՛ն, ո՛, չե՞ս, ինչպէ՛ս, իրա՞ւ, կարելի՞, ո՛վ, որքա՛ն, որքա՜ն, քանի՞, Օ՜հ, ահա՛, արդեօ՞ք, աւելի՛ն, դո՛ւն, ըլլա՞յ, ի՛ր, կրնա՞մ, ո՛ւր, չէ՞ր, Ի՞նչը, Իրա՛ւ, ա՛յդ, ա՛յս, այնքա՜ն, բա՞ն, դո՞ւն, եկո՛ւր.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 46 word types tagged as particles (PART): Առաւել, Ինչպէս, Յամենայնդէպս, Շիտակը, Ցաւոք, Ցաւօք, Փաստօրէն, ահա, ահաւասիկ, այդուհանդերձ, այսուհանդերձ, անշուշտ, անպայման, անպատճառ, անտարակոյս, արդեոք, արդեօք, արդէօք, աւելին, գէթ, գոնէ, գուցէ, էլ, ընդհակառակը, թերեւս, թէ, թէկուզ, թող, իրաւ, իրօք, կարծեմ, հարկաւ, հը, մանաւանդ, մի, միթէ, մինչեւ, նէ, ոչ, որ, ուրեմն, չէ, չը, չի, սակայն, տէ</li>
</ul>

<ul>
<li>This corpus contains 81 lemmas tagged as pronouns (PRON): ամբողջը, ամենայն, ամէն, ամէնը, ամէնքը, այդ, այդպէս, այդտեղ, այդքան, այլ, այլն, այն, այնմ, այնպէս, այնտեղ, այնքան, այս, այսպէս, այսպիսի, այստեղ, այսքան, ան, անի, անիկա, անոնք, աս, ասի, ասիկա, ասինչ, ասոնցը, աստի, ատ, ատի, ատիկա, բոլորը, դու, դուն, դուք, ես, երբ, եւլն, էդ, էն, ինչ, ինչու, ինչպիսի, ինք, ինքզինք, ինքնիր, ինքնիրեն, իրար, իրենը, իրենցը|իրենցինը, իրենք, իւրաքանչիւրը, հոն, մենք, մերը|մերինը, մէկ, մէկզմէկ, միեւնոյն, մին, միւս, նա, նոյնը, նոյնինք, ոմանք, ոչինչ, ով, որ, որեւէ, որն, որպիսի, որտեղացի, որքան, ուրիշ, ուրտեղ, ոք, սա, քանի, քուկդ|քուկինդ</li>
</ul>

<ul>
<li>This corpus contains 60 lemmas tagged as determiners (DET): Ն., ամբողջ, ամենայն, ամէն, այդ, այդպիսի, այդքան, այլ, այն, այնպիսի, այնքան, այս, այսչափ, այսպիսի, այսքան, ան, անանկ, անոնք, աս, ասանկ, ատ, ատանկ, բոլոր, բովանդակ, դու, դուն, դուք, ես, էն, էս, ինչ, ինչպիսի, ինչքան, ինք, իրենք, իւրաքանչիւր, լման, համայն, մենք, մէկ, մը, մի, միեւնոյն, միւս, մնացած, նա, նոյն, նորին, ո, ոեւէ, ողջ, որ, որեւէ, որոշ, որչափ, որքան, ուրիշ, սա, սոյն, քանի</li>
</ul>

<ul>
<li>Out of the above, 34 lemmas occurred sometimes as PRON and sometimes as DET: ամենայն, ամէն, այդ, այդքան, այլ, այն, այնքան, այս, այսպիսի, այսքան, ան, անոնք, աս, ատ, դու, դուն, դուք, ես, էն, ինչ, ինչպիսի, ինք, իրենք, մենք, մէկ, միեւնոյն, միւս, նա, որ, որեւէ, որքան, ուրիշ, սա, քանի</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as auxiliaries (AUX): եմ, ըլլալ, կամ, կը, կոր, ունիմ, պէտք, պիտի, տալ</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: եմ, ըլլալ, կամ, ունիմ, տալ</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: պաշտպանուեցաւ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: է, էր, են, էին, չէ, եմ, չէր, չեմ, չեն, չի</li>
    <li>VERB: կայ, ըսէ, ըսաւ, կրնայ, ունի, ըլլայ, ըսեմ, կրնան, կարծես, կան</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: ըլլալով, ըլլալ, տալ, ըլլալու, ըլլալնուս, տալով, տալու</li>
    <li>VERB: ըլլալ, ըսել, ըլլալու, տալ, ընել, ունենալ, ըլլալով, ընելու, տալու, առնելու</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: եղած, եղեր, ըլլալու, տուեր, տար, տուած</li>
    <li>VERB: եղած, ունեցած, գիտեր, կրնար, սկսած, եկած, դարձած, ըրած, հասած, առած</li>
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
      <li>NOUN: հայ, մարդ, պատրիարք, մարդիկ, հայրս, մայրս, մարդոց, հայոց, Տ, հայրը</li>
      <li>PRON: ես, մենք, մեզի, ինծի, ով, մեզ, զիս, դուն, դուք, քեզի</li>
      <li>PROPN: Յակոբ, Սահակ, Խրիսթինա, Նուրհան, Տիգրանեան, Արամ, Գրիգոր, Կիւլպէնկեան, Գալուստ, Գարեգին</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nhum
    <ul>
      <li>NOUN: բան, ի, ին, օր, տարի, անգամ, ատեն, տեղի, ը, տեղ</li>
      <li>PROPN: Հայաստանի, Թուրքիոյ, Արցախի, Հայաստան, Պոլսոյ, Լիբանանի, Թուրքիան, Պոլիս, Միքքին, ԱՄՆ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Coll
    <ul>
      <li>NOUN: այսօր, խաղաղութեան, հայերէնի, հայութեան, մամուլի, տարեկան, ազատութեան, անցեալին, հանդէս, հարկ</li>
      <li>PROPN: Սէյֆօ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Fin: են, էին, չեն, ենք, չենք, չէին, էինք, էք, ըլլան, չէք</li>
      <li>DET: մեր, իրենց, անոնց, ձեր, մերին</li>
      <li>NOUN: մարդիկ, մարդոց, հայոց, օրերուն, բաներ, տղաքը, անդամները, աչքերը, տարիներ, շահերը</li>
      <li>PRON: որոնք, անոնք, մենք, իրենց, անոնց, որոնց, մեզի, իրարու, մեզ, իրենք</li>
      <li>PROPN: Աբովեան, Ամերիկաները, Բախտիկեանները, Գանտիլեանները, Դերձակեաններուն, Էքմեքճեանները, Թութունճեաններու, Խայէլեանները, ԿԱՄերու, Կուկրինիկսները</li>
      <li>VERB-Fin: կրնան, կան, ունին, ունինք, ըլլան, ունենան, մնան, սկսան, գան, ըսենք</li>
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
      <li>AUX-Fin: է, էր, չէ, եմ, չէր, չեմ, չի, էի, ըլլայ, ես</li>
      <li>DET: իր, անոր, իմ, քու, ձեր, նրա, քո</li>
      <li>NOUN: բան, ի, ին, օր, տարի, հայ, անգամ, ը, ատեն, տեղի</li>
      <li>PRON: որ, ան, ինչ, որուն, անոր, ես, իրեն, իր, զայն, ինծի</li>
      <li>PROPN: Հայաստանի, Թուրքիոյ, Արցախի, Հայաստան, Պոլսոյ, Յակոբ, Լիբանանի, Թուրքիան, Պոլիս, Սահակ</li>
      <li>VERB-Conv: պաշտպանուեցաւ</li>
      <li>VERB-Fin: կայ, ըսէ, ըսաւ, կրնայ, ունի, ըլլայ, ըսեմ, կարծես, կար, գայ</li>
      <li>VERB-Inf: վերադառնալէս</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADP: մէջէն, ընդմէջէն, վրայէն, ետեւէն, քովէն, առջեւէն, տակէն, ետեւէ, առաջքէն, ետեւից</li>
      <li>NOUN: էն, կողմէ, տունէն, օրէն, արեւմտահայերէնով, պատերազմէն, տարիներէ, տեսակէտէ, կողմէն, հեռուէն</li>
      <li>PRON: ամէնէն, անկէ, ամենէն, ատկէ, իրմէ, անոնցմէ, ասկէ, որոնցմէ, իրարմէ, ինձմէ</li>
      <li>PROPN: Պոլսէն, Պոլիսէն, Երեւանէն, Եւրոպայէն, Իսթանպուլէն, Լիբանանէն, Հայաստանէն, Հրանտէն, Պօլիսէն, Փարիզէն</li>
      <li>VERB-Inf: ըլլալէ, դառնալէն, երթալէն, գալէ, գտնելէ, ընելէ, կորսնցնելէ, սպառելէ, ստանալէ, վերադառնալէս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>NOUN: դէպս, հեճուկս, Գաւառս, դէմս, զարմանս, թիւս, շարս</li>
      <li>PRON: զայն, մեզ, զիս, զինքը, զոր, զինք, զանոնք, իրար, ձեզ, քեզ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADP: վրայի, դիմացի, քովիս</li>
      <li>AUX-Inf: ըլլալու, ըլլալնուս, տալու</li>
      <li>NOUN: ի, ին, մարդոց, գրականութեան, աշխարհի, երկրին, օրերուն, կեանքի, պատերազմի, տան</li>
      <li>PRON: որուն, անոր, իրեն, իրենց, որոնց, մեզի, ինծի, իրարու, անոնց, բոլորին</li>
      <li>PROPN: Հայաստանի, Թուրքիոյ, Արցախի, Պոլսոյ, Լիբանանի, Ֆրանսայի, Երեւանի, Սուրիոյ, Երուսաղէմի, Խրիսթինային</li>
      <li>VERB-Inf: ըլլալու, ընելու, տալու, առնելու, տեսնելու, ստեղծելու, պահելու, բերելու, գալու, դարձնելու</li>
      <li>VERB-Part: քալեցնելու</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>DET: իր, մեր, իրենց, անոր, անոնց, իմ, ձեր, քու, մերին, նրա</li>
      <li>NOUN: եկեղեցւոյ, հայոց, վերջոյ, Աստուծոյ, գործոց, հիման, Նահատակաց, գրասենեակներու, Աթոռոյ, մահու</li>
      <li>PRON: իր, անոնց, մեր, իմ, այլոց, անոր, քու, ձեր, ինքնիր</li>
      <li>PROPN: Վանայ, Գանատա, Մարատ, Քոբմա</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADP: վրայով</li>
      <li>AUX-Inf: ըլլալով, տալով</li>
      <li>NOUN: կերպով, ձեւով, առումով, խօսքով, ուղղութեամբ, պատճառով, իմաստով, աչքերով, ձայնով, չափով</li>
      <li>PRON: որով, որոնցմով, բոլորով, ինչով, այդպէսով, այդպիսով, այնքանով, այսքանով, անով, ասով</li>
      <li>PROPN: Գուրթով, ԵուԹիւպով, Իսթանպուլով, Հայաստանով</li>
      <li>VERB: ըլլալով, առնելով, ըսելով, տեսնելով, տալով, ունենալով, պահելով, ջանալով, գալով, սպասելով</li>
      <li>VERB-Fin: շարելով</li>
      <li>VERB-Inf: ըլլալով, առնելով, ըսելով, տեսնելով, տալով, ունենալով, պահելով, ջանալով, գալով, սպասելով</li>
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
      <li>ADP: քովս, հետս, մէջս, վրաս, հետդ, հետերնին, առջեւդ, դէմս, ետեւնին, հետերնիս</li>
      <li>NOUN: բան, օր, տարի, հայ, անգամ, ը, ատեն, տեղ, տեղի, մարդ</li>
      <li>PRON: որ, ինչ, որոնք, ան, ես, անոնք, մենք, մէկը, ով, ինք</li>
      <li>PROPN: Հայաստան, Յակոբ, Թուրքիան, Պոլիս, Սահակ, Միքքին, Խրիսթինա, Նուրհան, Տիգրանեան, ԱՄՆ</li>
      <li>VERB-Inf: ըլլալը, գրելը, ստանալը, դառնալը, հասնիլը, ազատագրել, այցելելը, եփելը, ընտրուիլը, ըսելը</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADP: մէջէն, ընդմէջէն, վրայէն, ետեւէն, քովէն, առջեւէն, տակէն, առաջքէն</li>
      <li>NOUN: ին, ը, կեանքը, հայրը, օրը, երկրին, օրերուն, անունը, կինը, տունը</li>
      <li>PRON: որուն, մէկը, մէկն, միւսը, մէկուն, ինչը, միւսին, ուրիշներուն, միւսները, որը</li>
      <li>PROPN: Թուրքիան, Միքքին, Խրիսթինային, Խրիսթինան, Պետրոսին, Ուիքիփետիան, Պոլսէն, Յարութը, Մանուկին, Նոպէլ</li>
      <li>VERB-Inf: ըլլալը, ըլլալուն, գրելը, ստանալը, դառնալէն, դառնալը, երթալէն, հասնիլը, այցելելը, գալուն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADP: վրայի, ետեւէ, վրայով</li>
      <li>AUX-Inf: ըլլալով, ըլլալու, տալով, տալու</li>
      <li>NOUN: բան, ի, օր, տարի, հայ, անգամ, ատեն, տեղի, տեղ, եկեղեցւոյ</li>
      <li>PRON: որ, ինչ, որու, զոր, ոչինչ, որով, ուրիշներ, ուրիշ, զորս, ուրիշներու</li>
      <li>PROPN: Հայաստանի, Թուրքիոյ, Արցախի, Հայաստան, Պոլսոյ, Յակոբ, Լիբանանի, Պոլիս, Սահակ, Խրիսթինա</li>
      <li>VERB: ըլլալու, ըլլալով, ընելու, տալու, առնելու, առնելով, ըսելով, տեսնելու, ստեղծելու, տեսնելով</li>
      <li>VERB-Fin: շարելով</li>
      <li>VERB-Inf: ըլլալու, ըլլալով, ընելու, տալու, առնելու, առնելով, ըսելով, տեսնելու, ստեղծելու, տեսնելով</li>
      <li>VERB-Part: քալեցնելու</li>
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
      <li>ADJ: գերզգայուն, գերզօր, գերհզօր</li>
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
      <li>ADJ: մեծ, նոր, վերջին, տարբեր, կարեւոր, շատ, առաջին, երկար, աղուոր, պարզ</li>
      <li>ADV: ուշ, արագ, լուրջ, արդիւնաւէտ, լայն, յստակ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: մեծագոյն, լաւագոյն, կարեւորագոյն, նուազագոյն, առաւելագոյն, հնագոյն, ամենաբարձր, բարձրագոյն, նորագոյն, ամենահին</li>
      <li>ADV: նուազագոյնը, ամենածաւալունն, ամենայաճախ, ամենառաջնայինը, ամէնաշատը, նուազագոյնն, սաստկագոյնս</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: չէ, չէր, չեմ, չեն, չի, չենք, չէին, չես, չ՚, չէք</li>
      <li>AUX-Fin: չէ, չէր, չեմ, չեն, չի, չենք, չէին, չես, չ՚, չէք</li>
      <li>PART: ոչ, մի, չի, չը</li>
      <li>VERB-Fin: չկայ, չունի, չկար, չունինք, չունիմ, չունին, չկրցաւ, չունէր, չըլլար, չեղաւ</li>
      <li>VERB-Inf: չըլլալու, չդիմանալով, չըլլալով, չկորսուելու, չունենալու, Չգիտնալով, չառնելով, չառնելու, չատել, չարտասուելու</li>
      <li>VERB-Part: չունեցող, չգիտակցուած, չըլլալիք, Չկերուած, չազատագրուած, չանցած, չառնուող, չարձանագրուած, չգիտցած, չգիտցող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX: է, էր, պիտի, են, էին, եմ, պէտք, ենք, էի, ըլլայ</li>
      <li>AUX-Fin: է, էր, են, էին, եմ, ենք, էի, ըլլայ, ես, էք</li>
      <li>AUX-Inf: ըլլալով, ըլլալ, տալ, ըլլալու, ըլլալնուս, տալով, տալու</li>
      <li>AUX-Part: եղած, տուած</li>
      <li>VERB: կայ, ըսէ, ըսաւ, կրնայ, ունի, եղած, ըլլայ, ունեցած, ըսեմ, ըլլալ</li>
      <li>VERB-Conv: պաշտպանուեցաւ</li>
      <li>VERB-Fin: կայ, ըսէ, ըսաւ, կրնայ, ունի, ըլլայ, ըսեմ, կրնան, կարծես, կան</li>
      <li>VERB-Inf: ըլլալ, ըսել, ըլլալու, տալ, ընել, ունենալ, ըլլալով, ընելու, տալու, առնելու</li>
      <li>VERB-Part: եղած, ունեցած, սկսած, եկած, դարձած, ըրած, հասած, առած, կատարուած, ստեղծուած</li>
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
      <li>VERB-Part: գտնուող, ունեցող, ապրող, դարձող, տիրող, անցնող, գործող, եկող, գացող, եղող</li>
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
      <li>AUX: կը, է, կ՚, էր, են, էին, չէ, եմ, կու, չէր</li>
      <li>AUX-Fin: է, էր, են, էին, չէ, եմ, չէր, չեմ, չեն, չի</li>
      <li>AUX-Part: տար</li>
      <li>VERB-Fin: կայ, կրնայ, ունի, կրնան, կան, կար, ունէր, ունին, չկայ, չունի</li>
      <li>VERB-Part: գիտեր, կրնար, ուզեր, յիշեր, ըներ, հասկնար, ճանչնար, ունենար, բաւեր, ըլլար</li>
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
      <li>VERB-Part: կծկտած, կծկտեր, ջղայնոտած, փորփրած</li>
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
      <li>AUX-Fin: եղաւ, տուաւ, չեղաւ, տուի, եղայ, եղան, տուիր</li>
      <li>AUX-Part: եղած, եղեր, տուեր, տուած</li>
      <li>VERB-Conv: պաշտպանուեցաւ</li>
      <li>VERB-Fin: ըսաւ, եղաւ, ունեցաւ, եկաւ, սկսաւ, յայտնեց, ըսի, ելաւ, ըրաւ, պատասխանեց</li>
      <li>VERB-Part: եղած, ունեցած, սկսած, եկած, դարձած, ըրած, հասած, առած, կատարուած, ստեղծուած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>AUX: կոր</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>AUX: պիտի, պէտք, ըլլայ, ըլլար, ըլլան, չպիտի, ըլլալու, չըլլայ, չըլլար, ըլլային</li>
      <li>AUX-Fin: ըլլայ, ըլլար, ըլլան, չըլլայ, չըլլար, ըլլային, տայ, ըլլաս, ըլլաք, ըլլանք</li>
      <li>AUX-Part: ըլլալու</li>
      <li>VERB-Fin: ըսէ, ըլլայ, ըսեմ, կարծես, գայ, ուզեմ, ունենայ, ըլլար, ըսէր, սկսի</li>
      <li>VERB-Inf: խորհրդակցելու, օծելու</li>
      <li>VERB-Part: գալիք, բերելիք, առնելու, ընելիք, հետեւելիք, չըլլալիք, պատմելիք, տարուելիք, փրկուելիք, Ապրելիք</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>VERB-Fin: իցէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: եկուր, եկէք, ըսէ, առէք, գացէք, ըրէ, տես, առ, կեցիր, հաւատացէք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: կը, է, կ՚, էր, պիտի, են, էին, չէ, եմ, կու</li>
      <li>AUX-Fin: է, էր, են, էին, չէ, եմ, չէր, չեմ, չեն, չի</li>
      <li>VERB-Conv: պաշտպանուեցաւ</li>
      <li>VERB-Fin: կայ, ըսաւ, կրնայ, ունի, կրնան, կան, կար, ունէր, ունին, եղաւ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>AUX: պիտի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: ըլլայ, ըլլար, ըլլան, չըլլայ, չըլլար, ըլլային, տայ, ըլլաս, ըլլաք, ըլլանք</li>
      <li>VERB-Fin: ըսէ, ըլլայ, ըսեմ, կարծես, գայ, ուզեմ, ունենայ, ըլլար, ըսէր, սկսի</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: էր, էին, չէր, էի, չէին, էինք, ըլլար, չէի, էիր, չէինք</li>
      <li>VERB-Fin: կար, ունէր, ըլլար, ըսէր, չկար, գար, տար, ընէր, ըսէին, կային</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: եղաւ, տուաւ, չեղաւ, տուի, եղայ, եղան, տուիր</li>
      <li>VERB-Conv: պաշտպանուեցաւ</li>
      <li>VERB-Fin: ըսաւ, եղաւ, ունեցաւ, եկաւ, սկսաւ, յայտնեց, ըսի, ելաւ, ըրաւ, պատասխանեց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: է, են, չէ, եմ, չեմ, չեն, չի, ենք, ըլլայ, ես</li>
      <li>VERB-Fin: կայ, ըսէ, կրնայ, ունի, ըլլայ, ըսեմ, կրնան, կարծես, կան, գայ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB: ըսէ, ըսաւ, ունի, ունեցած, գիտեր, ըսեմ, կարծես, ըսել, ունէր, ունին</li>
      <li>VERB-Fin: ըսէ, ըսաւ, ունի, ըսեմ, կարծես, ունէր, ունին, ուզեմ, ունեցաւ, չունի</li>
      <li>VERB-Inf: ըսել, տալ, ընել, ունենալ, ընելու, տալու, առնելու, գտնել, առնել, առնելով</li>
      <li>VERB-Part: ունեցած, գիտեր, ըրած, սկսած, առած, տեսած, ուզեր, տուած, գրած, կատարած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>AUX-Fin: տայ, տուաւ, տուի, տան, տար, տաք, տուիր</li>
      <li>AUX-Inf: տալ, տալով, տալու</li>
      <li>AUX-Part: տուեր, տար, տուած</li>
      <li>VERB-Fin: զգացնէ, զգացունէին, մեռցնեմ, մեռցնէ, մեռցուց, յիշեցնէ, յիշեցնէր, պառկեցնէին</li>
      <li>VERB-Inf: բուսցնել, կարդացնել, մեծցնել, յիշեցնել, յիշեցնելու, շեղեցնելով, տառապեցնելու</li>
      <li>VERB-Part: զգացուցած, լացնող, կանգնեցուցեր, քալեցնելու</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB: կայ, կրնայ, եղած, ըլլայ, կրնար, ըլլալ, կրնան, եկած, կան, կար</li>
      <li>VERB-Fin: կայ, կրնայ, ըլլայ, կրնան, կան, կար, գայ, եղաւ, չկայ, եկաւ</li>
      <li>VERB-Inf: ըլլալ, ըլլալու, ըլլալով, գալ, խօսիլ, դառնալ, երթալ, ըլլալէ, մնալ, ըլլալը</li>
      <li>VERB-Part: եղած, կրնար, եկած, դարձած, հասած, մնացած, կոչուած, սկսած, անցած, գացած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Conv: պաշտպանուեցաւ</li>
      <li>VERB-Fin: ըսուի, խօսուի, առնուին, չափուի, գնահատուի, կազմուի, կատարուեցաւ, հիմնուեցաւ, յայտարարուի, ներկայացուին</li>
      <li>VERB-Inf: խմբագրուիլ, ենթարկուիլ, ընտրուիլը, շնորհուիլ, վերընտրուելու, ածուիլ, անարգուիլ, արդուկուելու, արձակուելէ, աքսորուելէ</li>
      <li>VERB-Part: կատարուած, ստեղծուած, պատրաստուած, գրուած, նախատեսուած, տրուած, դրուած, ուղղուած, արգիլուած, ենթարկուած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>VERB-Fin: պայմանաւորուեցանք, պսակուեցան, պսակուին, փոխանակուեցան, փոխանակուէին</li>
      <li>VERB-Inf: սիրահարուելով</li>
      <li>VERB-Part: պսակուող</li>
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
      <li>ADV: հոս, հոն, այսպէս, այնքան, այստեղ, այդպէս, այնպէս, այսքան, նոյնքան, այդքան</li>
      <li>DET: այս, այդ, այն, նոյն, միւս, միեւնոյն, սա, նորին, այնպիսի, աս</li>
      <li>PRON: այն, զայն, այդ, անիկա, անոր, այս, ասիկա, անկէ, սա, միւսը</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: իր, իրենց</li>
      <li>PRON: իրեն, իր, իրենց, ինք, զինքը, զինք, ինքն, իրենք, ինքը, զիրենք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>ADV: ինչ, որքան, ինչպիսի</li>
      <li>DET: ինչ, քանի, ինչպիսի, ինչքան, որ, որքան</li>
      <li>PRON: ինչեր, ով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: որչափ</li>
      <li>DET: քանի, մէկ, ուրիշ, այլ, որոշ, որեւէ, ո, ոեւէ, ինչ</li>
      <li>PRON: մէկը, այլն, ինչ, մէկն, մէկուն, ոմանք, ոք, մին, ուրիշներ, ուրիշ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: ինչպէս, ինչու, ուր, երբ, ինչ, որքան, ուրկէ, որչափ, ինտոր, ոնց</li>
      <li>DET: ինչ, որ, քանի, որքան, Որչափ, ինչպիսի</li>
      <li>PRON: ինչ, ով, երբ, ինչու, Ինչը, ինչով, ովքեր, որոնք, որուն, Որտեղացի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PRON: ոչինչ, ոչինչով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: մեր, անոր, անոնց, իմ, ձեր, քու, մերին, նրա, քո</li>
      <li>PRON: ան, ես, անոնք, մենք, անոր, մեզի, անոնց, ինծի, մեզ, զիս</li>
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
      <li>DET: որքան</li>
      <li>PRON: որ, որոնք, որուն, որոնց, ինչ, որու, զոր, որով, որոնցմէ, զորս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: ամէն, բոլոր, ամբողջ, իւրաքանչիւր, ամեն, լման, ամենայն, բովանդակ, համայն, ողջ</li>
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
      <li>NUM: երկու, մէկ, երեք, 2021, չորս, հինգ, 2, 15, 5, վեց</li>
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
      <li>NUM: կէս, երկուքուկէս, քառորդ, մէկուկէս, 1,3, 1,5, 1,62, 12,5, 203,2, 5,5</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: առաջին, երկրորդ, Բ, Ա, երրորդ, առջի, Գ, ԺԹ, չորրորդ, 113-րդ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: Հայաստանեայց, հայոց</li>
      <li>DET: իր, մեր, իրենց, անոր, անոնց, իմ, ձեր, քու, մերին, նրա</li>
      <li>NOUN: Հալլաճեաններունը, Միւսներունը, դիմացինին, դիմացիննիդ, երէկինէն, հիմակուանը, տարիինը, տարիներունն</li>
      <li>PRON: իրենը, մերն, իրենցը, մերը, քուկդ, Մերիններուն, ասոնցը, իրեններէն, իրենցիններուն</li>
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
      <li>PRON: իր, իրենց, իրեն, ինքզինք, ինքն, իրենք, ինքզինքը, ինքնիրեն, ինքզինքին, ինքզինքիս</li>
      <li>VERB-Fin: լուացուէին, լուացուիմ, քսուէին, քսուի</li>
      <li>VERB-Inf: լոգնալ, լոգնալը, լուացուելէ, լուացուիլ, հագուիլ, քսուիլ</li>
      <li>VERB-Part: հագուած, ածիլուած, զարդարուած, շպարուած, քսուած</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: եմ, չեմ, ենք, էի, չենք, էինք, չէի, չէինք, տուի, եղայ</li>
      <li>DET: մեր, իմ, մերին</li>
      <li>PRON: ես, մենք, մեզի, ինծի, մեզ, զիս, մեր, իմ, ինձ, ինձմէ</li>
      <li>VERB-Fin: ըսեմ, ուզեմ, ունինք, ըսի, ընեմ, ըսենք, գիտեմ, հասկցայ, յիշեմ, չունինք</li>
      <li>VERB-Inf: վերադառնալէս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: ես, էք, չես, չէք, էիր, չէիր, էիք, ըլլաս, ըլլաք, չէիք</li>
      <li>DET: ձեր, քու, քո</li>
      <li>PRON: դուն, դուք, քեզի, քեզ, ձեզ, ձեզի, քու, դու, ձեր, ձեզմէ</li>
      <li>VERB-Fin: կարծես, գիտէք, եկուր, ըսես, գիտես, ունիս, եկէք, ուզես, ուզէք, կրնաս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: է, էր, են, էին, չէ, չէր, չեն, չի, ըլլայ, չէին</li>
      <li>DET: իր, իրենց, անոր, անոնց, նրա</li>
      <li>PRON: ան, անոնք, իրեն, իր, անոր, իրենց, անոնց, ինք, զինք, իրենք</li>
      <li>VERB-Conv: պաշտպանուեցաւ</li>
      <li>VERB-Fin: կայ, ըսէ, ըսաւ, կրնայ, ունի, ըլլայ, կրնան, կան, կար, գայ</li>
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
      <li>VERB-Fin: գիտէք, ըսէք, խօսիք, կարծէք, հասկնաք, հետեւիք, հրամմեցէք, ներէք, նստեցէք, ուզէք</li>
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
      <li>NOUN: գլուխնին, երեսնին, Աչքերնին, Տուներնին, Տրամադրութիւննիս, աչքերնիս, աչքովնիդ, առաջքնին, գիտելիքնիս, գործերնիս</li>
      <li>PRON: Ամենքնիս, Մերիններուն, իրենցիններուն, որունիդ</li>
      <li>VERB-Fin: քակէ</li>
      <li>VERB-Inf: Ժողվըւելնուն, ըլլալնիս, ըլլալնուն, ըլլալնուս, նետուելնիդ, չգիտնալնուն, պահւելնուն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADP: քովս, հետս, մէջս, վրաս, հետդ, մասիդ, առջեւդ, դէմս, մէջդ, մօտս</li>
      <li>NOUN: հայրս, մայրս, հօրս, մօրս, պապս, սիրտս, գլուխս, մամաս, մօրաքոյրս, նայուածքս</li>
      <li>PROPN: Ճէյրանս, Մարիամս, աներմայրս</li>
      <li>VERB-Fin: ձեռնարկէ</li>
      <li>VERB-Inf: ելլելէս, երթալս, ըլլալդ, մտնելուս, ուտելուս, ստանալէս, վերադառնալէդ, քալելս</li>
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
          <li>ADP: ա</li>
          <li>ADV: շուէտ</li>
          <li>DET: Ն</li>
          <li>NOUN: Տ, պրն, Ս, արք, վրդ, Պր, Քհնյ, Հ, Սրկ, դոկտ</li>
          <li>PRON: եւլն</li>
          <li>PROPN: ԱՄՆ, ՀՀ, ՀՅԴ, Շ, ԽՍՀՄ, ԼԵՄ, ՀԱՊԿ, ՄԱԿ, Վ, Ք</li>
          <li>X: ERVAB, Ingsoc, NGO, UCLA</li>
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
          <li>ADP: հանդէպ, հակառակ, շնորհիւ, համաձայն, համեմատ, փոխանակ, անկախ, Բաց, համապատասխան</li>
        </ul>
      </li>
      <li>Post
        <ul>
          <li>ADP: մէջ, համար, վրայ, հետ, մասին, ետք, տակ, կողմէ, ընթացքին, դէմ</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: ի, դէպի, մինչեւ, իբրեւ, առանց, որպէս, ըստ, քան, առ, ինչպէս</li>
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
          <li>CCONJ: այլ, ինչպէս, այլեւ, այդպէս</li>
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
          <li>VERB-Part: գիտեր, կրնար, ուզեր, յիշեր, ըներ, հասկնար, ճանչնար, ունենար, բաւեր, ըլլար</li>
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
          <li>ADV: այդպէս, այդքան, այդտեղ, ատանկ, հոդ, Հոտկէ, այդչափ</li>
          <li>DET: այդ, այդպիսի, այդքան, ատանկ, ատ</li>
          <li>PRON: այդ, ատկէ, ատիկա, ատոր, ատոնք, ատ, այդպէսով, այդպիսով, այդտեղէն, այդքանը</li>
        </ul>
      </li>
      <li>Prox
        <ul>
          <li>ADV: հոս, այսպէս, այստեղ, այսքան, այսչափ, ասանկ, սանկ, հոսկէ, ասդին</li>
          <li>DET: այս, սա, աս, այսպիսի, այսքան, սոյն, Ասանկ, էս, այսչափ</li>
          <li>PRON: այս, ասիկա, սա, ասոր, ասոնք, ասկէ, ասոնց, աս, այսպէս, ասի</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADV: հոն, այնքան, այնպէս, նոյնքան, անդին, այնտեղ, հոնկէ, անանկ, այնչափ, հունա</li>
          <li>DET: այն, նորին, այնպիսի, ան, այնքան, էն, Ն, անանկ, նա</li>
          <li>PRON: այն, զայն, անիկա, անոր, անկէ, ան, անոնց, զանոնք, հոն, այստեղէն</li>
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
          <li>NOUN: վերջերս, ներկայիս, թերթիս, օրս, մարդուս, աշխարհիս, քաղաքիս, Աթոռոյս, աշխարհքս, երկրիս</li>
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
          <li>ADJ: միս, կափ, մունր, պաս</li>
          <li>ADV: շիփ, ցփեղ</li>
          <li>NOUN: կապուստ, կապուստը, կապուստի, կապուստով, ձուն, պիլի, փուտով</li>
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
          <li>X: Ապու, la, de, of, et, օղլու, Disaster, Writers, le, the</li>
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
          <li>ADJ: Խորհրդա, առասպելա, հոգինոց, պատճառա, պրոլետ, սոց, օրեայ, Շուէտ, իրանա, ռուսա</li>
          <li>NOUN: ի, ին, ը, էն, ն, ները, ու, յի, ով, ս</li>
          <li>X: հակա, փոխ</li>
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
          <li>ADJ: խորքային, Ակտուալ, ղորթ</li>
          <li>ADP: ետեւից</li>
          <li>ADV: էլ, երեւի, ոնց</li>
          <li>AUX: պիտի</li>
          <li>DET: նրա, քո</li>
          <li>NOUN: Ախպէր, ժամին, փլաւը, Թօփուզեանների, Ժիւսթիսից, Փլաւին, Քիրպիներին, աղջկերքը, արխիվ, արվեստ</li>
          <li>PART: էլ</li>
          <li>PRON: դու, նա, քեզ, ինչումն, մեզ, Էդ, իրանցից</li>
          <li>PROPN: Զուիցերիայից, Վիքիպեդիա</li>
          <li>VERB-Fin: ասա, Եկ, ասացիր, լինես, խանգարի, նայեմ, ունէք, պղաւեց, վառիր</li>
          <li>VERB-Inf: լինել, ներառել, ամաջելու, անելու, ասել, սովորել, տանել, տանելու</li>
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
          <li>ADJ: Թուիթըրեան</li>
          <li>PROPN: Մխիթարեան, ՀՅԴ, Մունիր, Սահակեան, ԼԵՄ, Ուիքիմետիա, ՀԱՊԿ, Հայկազեան, ՄԱԿ, Մխիթարեանի</li>
        </ul>
      </li>
      <li>Geo
        <ul>
          <li>ADJ: ամերիկեան, եւրոպական, ռուսական, արեւելեան, ֆրանսական, արեւմտեան, արցախեան, անգլիական, օսմանեան, հիւսիսային</li>
          <li>NOUN: Արարատը, Կրընոպլի</li>
          <li>PROPN: Հայաստանի, Թուրքիոյ, Արցախի, Հայաստան, Պոլսոյ, Լիբանանի, Թուրքիան, Պոլիս, ԱՄՆ, Ֆրանսայի</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>NOUN: Կիւլիրենգ, Մարինաներ, Ռոպերթ, Վալերի</li>
          <li>PROPN: Յակոբ, Սահակ, Միքքին, Խրիսթինա, Նուրհան, Արամ, Գրիգոր, Գալուստ, Գարեգին, Խրիսթինային</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>NOUN: Հրաշափառներուն</li>
          <li>PROPN: Զատկի, Ծնունդի, կաղանդի, Եղեռնի, Ռավեննա, Վարդավառ, կաղանդը, Դաուհիտ, Եղեռնէն, Եղեռնին</li>
        </ul>
      </li>
      <li>Pro
        <ul>
          <li>NOUN: թուիքսին, սնիքըրսին, քինտըրին</li>
          <li>PROPN: ԺԱՄԱՆԱԿ, Ուիքիփետիան, Ակօս, Երդիք, Ուիքիփետիա, Աստուածաշունչի, Զնտուկը, Աստուածաշունչ, Աստուածաշունչը, Կտակարան</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>NOUN: յարութներ, քրիստոսներուն</li>
          <li>PROPN: Լուսաւորիչ, Աստուածածին, Օշականի, Վարուժանի, Սապահէտտին, Սապահէտտինի, Սողոմենց, Տեմուրճենց, Կոմիտաս, Սեւակի</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>ADJ: Կիւլէնական</li>
          <li>NOUN: Թօփուզեանների, Հօհէնպէրկի, Ճէրճինսքիի, Մատէնճեաններն, Քիրպիներին</li>
          <li>PROPN: Տիգրանեան, Կիւլպէնկեան, Վիլանի, Մաշալեան, Շահինեանի, Տամատեան, Քառլիէ, Նազարիկեան, Նոպէլ, Գովանի</li>
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
          <li>ADJ: Բ, Ա, Գ, ԺԹ, Ե, Դ, Զ, Ը, ի, Է</li>
          <li>NUM: ա, բ, գ</li>
        </ul>
      </li>
      <li>Combi
        <ul>
          <li>ADJ: 44-օրեայ, 113-րդ, 20-րդ, 44օրեայ, 106-րդ, 12-ամեայ, 12-րդ, 1860-ական, 18ամեայ, 1950-ական</li>
        </ul>
      </li>
      <li>Digit
        <ul>
          <li>NUM: 2021, 2, 15, 5, 12, 2020, 30, 10, 6, 7</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: առաջին, երկրորդ, երրորդ, առջի, չորրորդ, եօթանասուննոց, քսաներորդ, առաջի, երկուքուկէսնոց, եօթանասուներորդ</li>
          <li>NUM: երկու, մէկ, երեք, չորս, հինգ, կէս, վեց, տասը, հազար, հարիւր</li>
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
          <li>ADP: քովս, հետս, մէջս, վրաս, դէմս, հետերնիս, մօտս, վրանիս, քովիս</li>
          <li>AUX-Inf: ըլլալնուս</li>
          <li>NOUN: հայրս, մայրս, հօրս, մօրս, պապս, սիրտս, գլուխս, մամաս, մօրաքոյրս, նայուածքս</li>
          <li>PRON: բոլորիս, բոլորս, ինքզինքիս, ինքզինքս, ամէնքս, Ամենքնիս, ամենուս, ինքս</li>
          <li>PROPN: Ճէյրանս, Մարիամս, աներմայրս</li>
          <li>VERB-Inf: ելլելէս, երթալս, ըլլալնիս, ըլլալնուս, մտնելուս, ուտելուս, ստանալէս, քալելս</li>
          <li>VERB-Part: տուածս</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>ADP: հետդ, մասիդ, առջեւդ, մէջդ, վրադ</li>
          <li>NOUN: աչքդ, լեզուդ, բերնիդ, գլուխդ, մամադ, Ականջդ, անունդ, բարեկամդ, բերանդ, հայրդ</li>
          <li>PRON: ինքզինքդ, ինքդ, ինքզինքիդ, որունիդ</li>
          <li>VERB-Inf: ըլլալդ, նետուելնիդ, վերադառնալէդ</li>
          <li>VERB-Part: կերտածդ, հասունցուցածդ</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADP: ետքը, վրան, հետը, քովը, մէջն, ետեւը, վերջը, տակը, առջեւը, դիմացը</li>
          <li>NOUN: գլուխնին, երեսնին, Աչքերնին, Տուներնին, առաջքնին, դիմացնին, թեւերնին, ծամերնին, հագուստնին, ձայներնին</li>
          <li>PRON: զինքը, ինքն, ինքը, ինքզինքը, նոյնինքն</li>
          <li>VERB-Inf: Ժողվըւելնուն, զարգանալով, ըլլալնուն, չգիտնալնուն, պահւելնուն</li>
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
          <li>ADJ: հասարակաց, Հայաստանեայց, Սրբոց, Այսու, Մեծի, բնորոշեալ, նուազն, պատուոյ, սփիւռս</li>
          <li>ADP: վասն, ընդ, հաշուոյն, յաչս, յաւարտ</li>
          <li>ADV: յառաջ, կամայ, ցայսօր, ցարդ, Յուրախութիւն, ամենայնիւ, մեծաւ, յաւիտեանս, յընթացս, սերտիւ</li>
          <li>DET: նորին, Ն</li>
          <li>NOUN: եկեղեցւոյ, տեղի, հայոց, վերջոյ, Աստուծոյ, նպաստ, գործոց, հարկէ, հիման, Նահատակաց</li>
          <li>PRON: այլոց, Յամենայն, ամենայնի, այնմ, զձեզ, զմեզ, իս, որում, որս, որք</li>
          <li>PROPN: Վանայ, եօթանասնից, Եսայեայ</li>
          <li>VERB-Fin: է, իցէ, լիցի, չիք, Հաւատամք, իմա, մատոյց</li>
        </ul>
      </li>
      <li>Coll
        <ul>
          <li>ADJ: սաթիւռէ, մենծ, Թաշչը, ետքի, զալիմ, լամիս, կամարիլային, հարտ, հիսթերիք, սիյահի</li>
          <li>ADP: ետեւը, վերջը, առջին</li>
          <li>ADV: ասանկ, անանկ, սանկ, ոնց, աննորմալ, ատանկ, հեչ, սօլօ, ճիշտը</li>
          <li>AUX: կոր</li>
          <li>CCONJ: հա</li>
          <li>DET: էն, Ասանկ, էս, անանկ, ատանկ, մերին, մնացած</li>
          <li>INTJ: Թամամ, Մերսի</li>
          <li>NOUN: տղոց, զաւկին, Օթել, գուրպ, ճամբէն, վիտէօ, Ախպէր, Շեխ, Չարշըի, աղբարին</li>
          <li>NUM: ութը</li>
          <li>PRON: ինձ, բոլորի, ասի, ուրտեղէն, Էդ, Էն, անի, անկէց, ատի, զանիկա</li>
          <li>PROPN: Աստուածածնայ, Սահա, Սահայէն</li>
          <li>VERB-Fin: առի, նստայ, չիկայ, առիր, գտնան, գտնաս, եղեն, զբաղցուց, էւէլնայ, խօսէ</li>
          <li>VERB-Inf: գժտել, ելլելուց</li>
          <li>VERB-Part: կսկծացնող, համարձակուի</li>
        </ul>
      </li>
      <li>Expr
        <ul>
          <li>ADJ: անուշիկ, կարմրիկ, պճլիկ, քչիկ, պտըլիկ</li>
          <li>ADP: քովիկը</li>
          <li>ADV: քիչիկ, քչիկ</li>
          <li>NOUN: կտիկ, մարդուկը, քոյրիկս, Գորտիկն, Թոռնիկս, աթոռակին, անտառակին, անտառակներուն, աչուկներով, առուակին</li>
          <li>PRON: ինծիի</li>
          <li>PROPN: Խաչօն, Մարուշ, Խաչօ, Ակոն, Խաչոյին, Նազիկին, Սաղօ, Վասիլիկը</li>
          <li>VERB-Fin: սիրէէ</li>
          <li>VERB-Part: համարձակեեր</li>
        </ul>
      </li>
      <li>Rare
        <ul>
          <li>ADJ: դէպ, բանւորական, սբորդական, արդիսդիք</li>
          <li>ADP: Բաց</li>
          <li>ADV: ափեղ, նոյնհետայն</li>
          <li>AUX-Fin: չը</li>
          <li>NOUN: կանգ, խնդրոյ, սանուց, յանկարծակիի, Երկնաց, Լուրջի, Ծըխամորճս, անակընկալ, էլէկանսը, ընտանեօք</li>
          <li>NUM: տասնըերկու, տասնըվեց</li>
          <li>PRON: աստի</li>
          <li>PROPN: Խանասորայ</li>
          <li>VERB-Fin: կարճըցնէր, ունկընդրէր, սղէ, տըւաւ</li>
          <li>VERB-Part: կրթընցուցած, ճըմլուած</li>
        </ul>
      </li>
      <li>Slng
        <ul>
          <li>NOUN: հօտը, պտտիկ</li>
        </ul>
      </li>
      <li>Vrnc
        <ul>
          <li>ADJ: առջի, Գազազ, լինքսի, հելալլամիշ, ճիտըծուռ, շաշխըն, ղորթ</li>
          <li>ADV: ուսկէ, ուսկից, տահա, հունա</li>
          <li>INTJ: Ծո</li>
          <li>NOUN: Ամմօ, տուտու, աղբար, եազմա, եզնիքը, տուտուն, ֆերաճէ, Կիղիցիկ, Սապոնով, Քաղքի</li>
          <li>PRON: մին, իրանցից</li>
          <li>PROPN: Ուսէփ, Ուսէփին, ՈՒՍԷՓ, Ուսէփը, Ուսէփի, Ուսէփն</li>
          <li>VERB-Fin: բաբաջեն, խրկէր, չնայիր</li>
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
          <li>VERB: կայ, կրնայ, եղած, ըլլայ, կրնար, ըլլալ, կրնան, եկած, կան, կար</li>
          <li>VERB-Conv: պաշտպանուեցաւ</li>
          <li>VERB-Fin: կայ, կրնայ, ըլլայ, կրնան, կան, կար, գայ, եղաւ, չկայ, եկաւ</li>
          <li>VERB-Inf: ըլլալ, ըլլալու, ըլլալով, գալ, խօսիլ, դառնալ, երթալ, ըլլալէ, մնալ, ըլլալը</li>
          <li>VERB-Part: եղած, կրնար, եկած, դարձած, հասած, կատարուած, ստեղծուած, մնացած, կոչուած, պատրաստուած</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB: ըսէ, ըսաւ, ունի, ունեցած, գիտեր, ըսեմ, կարծես, ըսել, ունէր, ունին</li>
          <li>VERB-Fin: ըսէ, ըսաւ, ունի, ըսեմ, կարծես, ունէր, ունին, ուզեմ, ունեցաւ, չունի</li>
          <li>VERB-Inf: ըսել, տալ, ընել, ունենալ, ընելու, տալու, առնելու, գտնել, առնել, առնելով</li>
          <li>VERB-Part: ունեցած, գիտեր, ըրած, սկսած, առած, տեսած, ուզեր, տուած, գրած, կատարած</li>
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
          <li>ADJ: միսմինակ, Պատիրիարքական, ակադէմական, թագուն, ժողոդրավարական, խորհդանշական, ներկա, Խափուսիկ, անզիչող, ջերմերանդ</li>
          <li>ADP: մեջ</li>
          <li>ADV: արդեն, երբէք, հիմայ, միսմինակ, աւել, լռելեան, հանկարծ, ինչպես, ճիշտը</li>
          <li>AUX-Fin: չ</li>
          <li>DET: ամեն</li>
          <li>NOUN: անճշտութեան, անպարտուութիւնը, ապրանքին, բանակցութիւները, գլխաւորութամբ, խելապատիկին, կանչով, կիններ, հասարակոթիւնը, հաւանակութեամբ</li>
          <li>NUM: երէք</li>
          <li>PART: Ցաւոք, արդեոք, արդէօք</li>
          <li>PRON: ամէնէն, ամէնուն, ամենքը, ամենը, Ամենքնիս, ուրիշեր</li>
          <li>PROPN: Ռուասատանի</li>
          <li>SCONJ: եթե</li>
          <li>VERB-Fin: կուգայ, ուղեմ, բացահայտուի, դժկամացեկաւ, կատարին, կարէնար, հրամէ, յատուցուի, յօգնէր, ներկայացներ</li>
          <li>VERB-Inf: անցնելը, արձնագարելու, կիռարելով, չեզոքացնելու, սպանել</li>
          <li>VERB-Part: բանեցուած, կարչած, նիրկուած, նկատուի, նկարւած, պատրստած, սպանուած, քողազերծուած</li>
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
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: կը, եմ, պիտի, ըլլալ, պէտք, կոր, ունիմ.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Nom (2678)</li>
      <li>VERB-Fin--PRON (22)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Nom (955)</li>
      <li>VERB-Inf--NOUN-Dat (3)</li>
      <li>VERB-Inf--NOUN-Nom (29)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Gen (2)</li>
      <li>VERB-Inf--PRON-Nom (2)</li>
      <li>VERB-Part--NOUN-Dat (53)</li>
      <li>VERB-Part--NOUN-Nom (711)</li>
      <li>VERB-Part--PRON (8)</li>
      <li>VERB-Part--PRON-Dat (15)</li>
      <li>VERB-Part--PRON-Gen (29)</li>
      <li>VERB-Part--PRON-Nom (284)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Nom (1)</li>
      <li>VERB-Fin--NOUN-Abl (1)</li>
      <li>VERB-Fin--NOUN-Abl-ADP(բացի) (1)</li>
      <li>VERB-Fin--NOUN-Dat (359)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(մէջ) (3)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(պատճառաւ) (1)</li>
      <li>VERB-Fin--NOUN-Gen (3)</li>
      <li>VERB-Fin--NOUN-Nom (1959)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(ի) (1)</li>
      <li>VERB-Fin--PRON (13)</li>
      <li>VERB-Fin--PRON-Abl (1)</li>
      <li>VERB-Fin--PRON-Acc (176)</li>
      <li>VERB-Fin--PRON-Dat (116)</li>
      <li>VERB-Fin--PRON-Nom (117)</li>
      <li>VERB-Inf--NOUN-Abl (1)</li>
      <li>VERB-Inf--NOUN-Dat (197)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(վրայ) (2)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Nom (1347)</li>
      <li>VERB-Inf--NOUN-Nom-ADP(առանց) (2)</li>
      <li>VERB-Inf--NOUN-Nom-ADP(մինչեւ) (1)</li>
      <li>VERB-Inf--PRON (7)</li>
      <li>VERB-Inf--PRON-Acc (92)</li>
      <li>VERB-Inf--PRON-Dat (24)</li>
      <li>VERB-Inf--PRON-Nom (31)</li>
      <li>VERB-Part--NOUN-Dat (164)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--NOUN-Nom (688)</li>
      <li>VERB-Part--PRON (3)</li>
      <li>VERB-Part--PRON-Acc (70)</li>
      <li>VERB-Part--PRON-Dat (35)</li>
      <li>VERB-Part--PRON-Gen (2)</li>
      <li>VERB-Part--PRON-Nom (33)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB-Fin--NOUN-Dat (117)</li>
      <li>VERB-Fin--NOUN-Nom (4)</li>
      <li>VERB-Fin--PRON-Acc (4)</li>
      <li>VERB-Fin--PRON-Dat (62)</li>
      <li>VERB-Fin--PRON-Nom (4)</li>
      <li>VERB-Inf--NOUN-Dat (72)</li>
      <li>VERB-Inf--NOUN-Nom (4)</li>
      <li>VERB-Inf--PRON-Acc (2)</li>
      <li>VERB-Inf--PRON-Dat (24)</li>
      <li>VERB-Part--NOUN-Dat (65)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Acc (3)</li>
      <li>VERB-Part--PRON-Dat (24)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 36 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: գտնել ինքզինք, ուղղել իրեն, պահել ինքզինք, տալ ինքն, առերեսուիլ ինքզինքիդ, գործակցիլ իրենց, գտնել ինքզինքս, զարգացնել ինքզինք, զգալ ինքզինքը, զգալ ինքզինքս, զգալ իրենք, զսպել ինքզինքդ, զսպել ինքզինքը, զրկել ինքզինքս, զրկել իրենք, ըսել ինքզինքիս, ըսել ինքնիրեն, թուիլ իրեն, կրկնել ինքզինք, համարել ինքզինք, համարել իրեն, հասնիլ իրենց, յարդարել ինքզինքը, նետել ինքզինք, նետել ինքզինքը, ներկայացնել ինքզինք, ներկայացնել ինքն, նորոգել ինքզինք, սպասող իրենց, վերապահել իրեն, տալ ինքզինքը, տալ ինքզինքիս, տալ ինքնիրեն, տեսնել ինքզինք, փաստել ինքն, փնտռել ինքզինքդ</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 21 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>advmod:emph</a>, <a>aux:caus</a>, <a>aux:ex</a>, <a>case:loc</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>compound:svc</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>flat:dist</a>, <a>flat:frac</a>, <a>flat:name</a>, <a>flat:range</a>, <a>iobj:agent</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>goeswith</a></li>
</ul>
