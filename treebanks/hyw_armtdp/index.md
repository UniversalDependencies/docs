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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhyw_armtdp28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-SA 4.0

Genre: fiction, nonfiction

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

The Western Armenian UD treebank is based on the Western Armenian section of the Armenian Dependency Treebank (Հայերէնի Ծառադարան), originally developed for UD by the ArmTDP team led by Marat M. Yavrumyan at the Yerevan State University.



The UD_Western_Armenian-ArmTDP treebank is based on the Հայերէնի Ծառադարան dataset (version 1.0), a mix of texts sampled from different sources, representing different genres and domains (local on-line newspapers, journal articles, and fiction dated between 1895 and 2020). The treebank consists of 1780 sentences (~36K tokens).

The annotation scheme was developed in accordance with the UD guidelines. The original data were manually annotated by the ArmTDP team. The tokenization and POS-tagging process was carried out through alternating steps of automatic scripting and manual revision in the YerevaNN research lab (led by Hrant H. Khachatrian). The treebank is so far the only manual verified corpus of Western Armenian, supplied with comprehensive morphological and syntactic annotation in the form of a complete dependency tree provided for every sentence.

## Acknowledgments

This work became possible through a research grant from the Calouste Gulbenkian Foundation («Գալուստ Կիւլպէնկեան» Հիմնարկութիւն) based in Lisbon, Portugal.

The team behind the UD_Western_Armenian-ArmTDP: Marat M. Yavrumyan, Hrant H. Khachatrian, Anna S. Danielyan, Setrag H.M. Hovsepian, Liana G. Minasyan.

## References

* Marat M. Yavrumyan. “Universal Dependencies for Armenian.” International Conference on Digital Armenian, Abstracts. Inalco, Paris, October 3-5, 2019.

## Format

UD_Armenian-ArmTDP data conforms to [CoNLL-U](http://universaldependencies.org/format.html) format with the following specifics:
* Sentence-level comments:
* Document titles are present as `# doc_title = Սիլիհտարի պարտէզները`.
* Document boundaries are present as `# newdoc id = fiction/news-xxxx`.
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

[ADJ](hyw_armtdp-pos-ADJ.html) – [ADP](hyw_armtdp-pos-ADP.html) – [ADV](hyw_armtdp-pos-ADV.html) – [AUX](hyw_armtdp-pos-AUX.html) – [CCONJ](hyw_armtdp-pos-CCONJ.html) – [DET](hyw_armtdp-pos-DET.html) – [INTJ](hyw_armtdp-pos-INTJ.html) – [NOUN](hyw_armtdp-pos-NOUN.html) – [NUM](hyw_armtdp-pos-NUM.html) – [PART](hyw_armtdp-pos-PART.html) – [PRON](hyw_armtdp-pos-PRON.html) – [PROPN](hyw_armtdp-pos-PROPN.html) – [PUNCT](hyw_armtdp-pos-PUNCT.html) – [SCONJ](hyw_armtdp-pos-SCONJ.html) – [VERB](hyw_armtdp-pos-VERB.html) – [X](hyw_armtdp-pos-X.html)

## Features

[Abbr](hyw_armtdp-feat-Abbr.html) – [AdpType](hyw_armtdp-feat-AdpType.html) – [Animacy](hyw_armtdp-feat-Animacy.html) – [Aspect](hyw_armtdp-feat-Aspect.html) – [Case](hyw_armtdp-feat-Case.html) – [ConjType](hyw_armtdp-feat-ConjType.html) – [Connegative](hyw_armtdp-feat-Connegative.html) – [Definite](hyw_armtdp-feat-Definite.html) – [Degree](hyw_armtdp-feat-Degree.html) – [Deixis](hyw_armtdp-feat-Deixis.html) – [Deixis[psor]](hyw_armtdp-feat-Deixis-psor.html) – [Echo](hyw_armtdp-feat-Echo.html) – [Foreign](hyw_armtdp-feat-Foreign.html) – [Hyph](hyw_armtdp-feat-Hyph.html) – [LangId](hyw_armtdp-feat-LangId.html) – [Mood](hyw_armtdp-feat-Mood.html) – [NameType](hyw_armtdp-feat-NameType.html) – [Number](hyw_armtdp-feat-Number.html) – [Number[psor]](hyw_armtdp-feat-Number-psor.html) – [NumForm](hyw_armtdp-feat-NumForm.html) – [NumType](hyw_armtdp-feat-NumType.html) – [Person](hyw_armtdp-feat-Person.html) – [Person[psor]](hyw_armtdp-feat-Person-psor.html) – [Polarity](hyw_armtdp-feat-Polarity.html) – [Polite](hyw_armtdp-feat-Polite.html) – [Poss](hyw_armtdp-feat-Poss.html) – [PronType](hyw_armtdp-feat-PronType.html) – [Reflex](hyw_armtdp-feat-Reflex.html) – [Style](hyw_armtdp-feat-Style.html) – [Subcat](hyw_armtdp-feat-Subcat.html) – [Tense](hyw_armtdp-feat-Tense.html) – [Typo](hyw_armtdp-feat-Typo.html) – [VerbForm](hyw_armtdp-feat-VerbForm.html) – [Voice](hyw_armtdp-feat-Voice.html)

## Relations

[acl](hyw_armtdp-dep-acl.html) – [acl:relcl](hyw_armtdp-dep-acl-relcl.html) – [advcl](hyw_armtdp-dep-advcl.html) – [advcl:relcl](hyw_armtdp-dep-advcl-relcl.html) – [advmod](hyw_armtdp-dep-advmod.html) – [advmod:emph](hyw_armtdp-dep-advmod-emph.html) – [amod](hyw_armtdp-dep-amod.html) – [appos](hyw_armtdp-dep-appos.html) – [aux](hyw_armtdp-dep-aux.html) – [aux:caus](hyw_armtdp-dep-aux-caus.html) – [aux:ex](hyw_armtdp-dep-aux-ex.html) – [case](hyw_armtdp-dep-case.html) – [case:loc](hyw_armtdp-dep-case-loc.html) – [cc](hyw_armtdp-dep-cc.html) – [ccomp](hyw_armtdp-dep-ccomp.html) – [compound](hyw_armtdp-dep-compound.html) – [compound:lvc](hyw_armtdp-dep-compound-lvc.html) – [compound:redup](hyw_armtdp-dep-compound-redup.html) – [compound:svc](hyw_armtdp-dep-compound-svc.html) – [conj](hyw_armtdp-dep-conj.html) – [cop](hyw_armtdp-dep-cop.html) – [csubj](hyw_armtdp-dep-csubj.html) – [csubj:pass](hyw_armtdp-dep-csubj-pass.html) – [dep](hyw_armtdp-dep-dep.html) – [det](hyw_armtdp-dep-det.html) – [det:poss](hyw_armtdp-dep-det-poss.html) – [discourse](hyw_armtdp-dep-discourse.html) – [dislocated](hyw_armtdp-dep-dislocated.html) – [expl](hyw_armtdp-dep-expl.html) – [fixed](hyw_armtdp-dep-fixed.html) – [flat](hyw_armtdp-dep-flat.html) – [flat:dist](hyw_armtdp-dep-flat-dist.html) – [flat:name](hyw_armtdp-dep-flat-name.html) – [flat:range](hyw_armtdp-dep-flat-range.html) – [goeswith](hyw_armtdp-dep-goeswith.html) – [iobj](hyw_armtdp-dep-iobj.html) – [iobj:agent](hyw_armtdp-dep-iobj-agent.html) – [list](hyw_armtdp-dep-list.html) – [mark](hyw_armtdp-dep-mark.html) – [nmod](hyw_armtdp-dep-nmod.html) – [nmod:npmod](hyw_armtdp-dep-nmod-npmod.html) – [nmod:poss](hyw_armtdp-dep-nmod-poss.html) – [nsubj](hyw_armtdp-dep-nsubj.html) – [nsubj:caus](hyw_armtdp-dep-nsubj-caus.html) – [nsubj:pass](hyw_armtdp-dep-nsubj-pass.html) – [nummod](hyw_armtdp-dep-nummod.html) – [obj](hyw_armtdp-dep-obj.html) – [obl](hyw_armtdp-dep-obl.html) – [obl:agent](hyw_armtdp-dep-obl-agent.html) – [orphan](hyw_armtdp-dep-orphan.html) – [parataxis](hyw_armtdp-dep-parataxis.html) – [punct](hyw_armtdp-dep-punct.html) – [reparandum](hyw_armtdp-dep-reparandum.html) – [root](hyw_armtdp-dep-root.html) – [vocative](hyw_armtdp-dep-vocative.html) – [xcomp](hyw_armtdp-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1780 sentences, 35372 tokens and 35926 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 6067 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 4 types of words that contain both letters and punctuation. Examples: կ՚, չ՚, 80-ամեայ, զ՚</li>
</ul>

<ul>
<li>This corpus contains 553 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 257 types of multi-word tokens. Examples: ի՞նչ, ո՛չ, ա՛լ, ի՜նչ, ի՛նչ, ո՞վ, չէ՞, այո՛, ո՞ր, ինչո՞ւ, մի՛, ո՞ւր, ա՜հ, թէ՛, ո՛, չէ՛, ի՞նչպէս, ե՛ւ, որքա՛ն, չէ՞ր, Իրա՛ւ, ահա՛, դո՞ւն, կա՛մ, հէ՞, ո՛վ, վա՛խ, տուտո՛ւ, Ախպէ՜ր, Ամէ՞ն, Ինչե՜ր, ա՛, ա՛յնչափ, ա՜յնքան, ամէ՛ն, այնքա՜ն, ապուշութի՜ւն, գժուե՛լ, ե՞րբ, եա՛, եւ՛, է՛, է՛ն, ըսէ՛, ի՛ր, ի՜նչքան, ինչո՞վ, ինչպէ՞ս, ինտո՞ր, լի՛րբ.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 37 word types tagged as particles (PART): Ինչպէս, ահա, ահաւասիկ, այսուհանդերձ, անշուշտ, անպայման, անպատճառ, անտարակոյս, արդեօք, աւելին, գէթ, գոնէ, գուցէ, էլ, ընդհակառակը, թերեւս, թէ, թող, իրաւ, իրօք, կարծեմ, կարծես, հապա, հարկաւ, հը, մանաւանդ, մի, միթէ, նէ, ոչ, որ, ուրեմն, չէ, չը, չի, սակայն, տէ</li>
</ul>

<ul>
<li>This corpus contains 62 lemmas tagged as pronouns (PRON): ամենայն, ամէն, ամէնը, ամէնքը, այդ, այդպէս, այդքան, այլ, այլն, այն, այնպէս, այնտեղ, այս, այսպէս, այսքան, ան, անիկա, աս, ասի, ասիկա, ատ, ատիկա, բոլոր, բոլորը, դու, դուն, դուք, ես, էդ, էն, ինչ, ինչու, ինք, ինքզինք, ինքնիրեն, ինքս, իրար, իրենը, իրենցը, իւրաքանչիւրը, հոն, մենք, մերը, մէկ, մէկը, մին, միւս, նա, նոյն, նոյնը, նոյնինք, ոմանք, ոչինչ, ով, որ, որեւէ, որպիսի, ուրիշ, ոք, սա, քանի, քանին</li>
</ul>

<ul>
<li>This corpus contains 49 lemmas tagged as determiners (DET): ամբողջ, ամենայն, ամէն, այդ, այդպիսի, այդքան, այն, այնպիսի, այնքան, այս, այսպիսի, այսքան, ան, անանկ, անիկա, աս, ասանկ, ասիկա, ատ, ատանկ, բոլոր, դու, դուն, դուք, ես, էն, էս, ինչ, ինչպիսի, ինչքան, ինք, մենք, մէկ, մը, մի, միւս, նա, նոյն, նորին, ո, ոեւէ, որ, որեւէ, որոշ, որչափ, որքան, ուրիշ, սա, քանի</li>
</ul>

<ul>
<li>Out of the above, 30 lemmas occurred sometimes as PRON and sometimes as DET: ամենայն, ամէն, այդ, այդքան, այն, այս, այսքան, ան, անիկա, աս, ասիկա, ատ, բոլոր, դու, դուն, դուք, ես, էն, ինչ, ինք, մենք, մէկ, միւս, նա, նոյն, որ, որեւէ, ուրիշ, սա, քանի</li>
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
    <li>AUX: է, էր, են, էին, չէր, չէ, չի, եմ, չեն, չեմ</li>
    <li>VERB: ըսաւ, ունէր, եղաւ, գար, ըսէր, ունի, եկաւ, կայ, ունին, կրնայ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: ըլլալ, ըլլալով, տալ, ըլլալնուս, ըլլալու, տալով</li>
    <li>VERB: ըլլալ, ընելու, տալ, առնել, ըսել, տալու, ըլլալու, առնելու, ընել, տեսնելու</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: եղեր, եղած, ըլլալու, տար, տուած, տուեր</li>
    <li>VERB: գիտեր, կրնար, եղած, եկած, ունեցած, եկեր, անցած, առած, ելած, գացած</li>
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
      <li>NOUN: մարդ, հայ, տիկին, կինը, թուրք, Պրն, մարդիկ, հայրս, մայրս, մարդոց</li>
      <li>PRON: ես, մենք, ով, զիս, մեզ, ինծի, մեզի, դուն, ոք, դուք</li>
      <li>PROPN: Տիգրանեան, Մարկոս, Թորգոմ, Զարեհ, Վիլանի, Քառլիէ, Իրմաի, Նազարիկեան, Փիէռ, Մարտիրոս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nhum
    <ul>
      <li>NOUN: բան, օր, ատեն, կեանքը, կերպով, տեղ, անգամ, տեսակ, երկրին, օրը</li>
      <li>PROPN: Թուրքիոյ, Պոլիս, Բերայի, Թուրքիան, Պոլսէն, Պոլսոյ, Աւստրիոյ, Թուրքիա, Հայաստանի, Գերմանիոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Coll
    <ul>
      <li>NOUN: ազատութիւնը, ազատութեան, երկուքն, կանգ, հարկ, հարստութիւնը, ոստիկանութիւնը, մետաքսէ, Ճիհատի, անդորրութիւնը</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Fin: են, էին, չեն, չէին, ենք, չենք, էինք, ըլլան, չէք, էք</li>
      <li>DET: մեր, իրենց, անոնց, որոնց, ասոնց, մերին, ձեր</li>
      <li>NOUN: մարդիկ, մարդոց, աչքերը, հայերուն, կիները, մազերը, աչքերով, բաներ, օրերուն, հայերը</li>
      <li>PRON: որոնք, մենք, իրենց, անոնք, անոնց, մեզ, որոնց, մեզի, իրար, իրարու</li>
      <li>PROPN: Աբովեան, մնացածներն</li>
      <li>VERB-Fin: ունին, գային, կան, ըլլային, ըսէին, ըսին, տուին, ունինք, ապրին, կային</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ptan
    <ul>
      <li>PROPN: Տեմուրճենց, Դպրենց, Մանուկանց, Պեկիշենց, Արխնենց, Բարիկանց, Կոչենց, Հայնենց, Մաղիկանց, Շեխենց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX-Fin: է, էր, չէր, չէ, չի, եմ, չեմ, ըլլայ, ես, ըլլար</li>
      <li>DET: իր, անոր, իմ, քու, ձեր, նրա, քո</li>
      <li>NOUN: բան, օր, ատեն, մարդ, հայ, տիկին, կեանքը, կերպով, կինը, տեղ</li>
      <li>PRON: որ, իրեն, ինչ, որուն, ան, ես, զինքը, զայն, իր, անոր</li>
      <li>PROPN: Թուրքիոյ, Տիգրանեան, Պոլիս, Մարկոս, Թորգոմ, Բերայի, Զարեհ, Վիլանի, Թուրքիան, Քառլիէ</li>
      <li>VERB-Fin: ըսաւ, ունէր, եղաւ, գար, ըսէր, ունի, եկաւ, կայ, կրնայ, պատասխանեց</li>
      <li>VERB-Part: կեցուց, թողուր</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADP: մէջէն, վրայէն, տակէն, առջեւէն, ետեւէն, առաջքէն, ետեւէ, ետեւից, ընդմէջէն</li>
      <li>NOUN: օրէն, տարիներէ, կողմէն, կեանքէն, աչքէն, դռնէն, կողմէ, ձեռքէն, մետաքսէ, մտքէն</li>
      <li>PRON: ամենէն, անկէ, ամէնէն, իրմէ, ասկէ, անոնցմէ, որոնցմէ, իրարմէ, ատկէ, ձեզմէ</li>
      <li>PROPN: Պոլսէն, Հրանտէն, Պօլիսէն, Ամերիկայէն, Անատօլուէն, Անգլիայէն, Անտոնեանէն, Ավինեոնէն, Եւրոպայէն, Զուիցերիայէն</li>
      <li>VERB-Fin: ապրելէն</li>
      <li>VERB-Inf: ըլլալէ, գտնելէ, սպառելէ, արձակելէ, աւարտելէ, աւլելէ, բերելէ, ելլելէս, ելլելուց, երթալէն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: զինքը, զայն, զիս, մեզ, իրար, զոր, զանոնք, ձեզ, զորս, զիրենք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADP: վրայի</li>
      <li>AUX-Inf: ըլլալնուս, ըլլալու</li>
      <li>NOUN: երկրին, մարդոց, ի, կեանքին, կնոջ, հայերուն, մամուլի, ժողովուրդին, միջոցին, գիւղին</li>
      <li>PRON: իրեն, որուն, անոր, իրենց, որոնց, անոնց, ինծի, մեզի, իրարու, ասոր</li>
      <li>PROPN: Թուրքիոյ, Բերայի, Իրմաի, Պոլսոյ, Աւստրիոյ, Զօհրապի, Կ, Հայաստանի, Մանուկին, Մարտիրոսի</li>
      <li>VERB-Fin: տոգորուելու</li>
      <li>VERB-Inf: ընելու, տալու, ըլլալու, առնելու, տեսնելու, երթալու, մնալու, գալու, մտնելու, պահելու</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>DET: իր, մեր, իրենց, անոր, անոնց, իմ, որոնց, ձեր, քու, ասոնց</li>
      <li>NOUN: վերջոյ, Հայոց, եկեղեցւոյ, Աստուծոյ, Սկովտուհիին, գեղարուեստից, հանգստեան, մահու, քմայքին</li>
      <li>PRON: իր, անոնց, մեր, այլոց, անոր, ձեր</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>AUX-Inf: ըլլալով, տալով</li>
      <li>NOUN: կերպով, աչքերով, ձայնով, ժպիտով, շարժումով, թափով, ձեւերով, միջոցներով, չափով, տեսակէտով</li>
      <li>PRON: ինչով, որով, որոնցմով, Ինձմով, այդպէսով, այսքանով</li>
      <li>VERB-Fin: աշխատելով, սիրահարուելով</li>
      <li>VERB-Inf: տեսնելով, տալով, գալով, սպասելով, առնելով, ըլլալով, դնելով, երթալով, ըսելով, բանալով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>NOUN: քորիդորում</li>
      <li>PRON: Յամենայն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADP: հետը, տակը, մէջն, վրաս, վրան, քովս, առջեւը, դէմս, ետեւնին, հետդ</li>
      <li>NOUN: բան, օր, ատեն, մարդ, հայ, տիկին, կեանքը, կինը, տեղ, անգամ</li>
      <li>PRON: որ, ինչ, ան, որոնք, ես, մէկը, մենք, անոնք, ով, դուն</li>
      <li>PROPN: Տիգրանեան, Պոլիս, Մարկոս, Թորգոմ, Զարեհ, Վիլանի, Թուրքիան, Քառլիէ, Նազարիկեան, Փիէռ</li>
      <li>VERB-Inf: ըլլալը, եփելը, խաբուիլը, անցնելը, ապրիլը, գտնուիլը, խզելը, կենալը, հեռանալը, պահանջելը</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADP: մէջէն, վրայէն, տակը, տակէն, մէջն, առջեւէն, ետեւէն, առաջքէն, առջեւը, ընդմէջէն</li>
      <li>NOUN: կեանքը, կինը, երկրին, օրը, դուռը, աղջիկը, տունը, աչքերը, կեանքին, հայը</li>
      <li>PRON: որուն, միւսը, բոլորին, բոլորն, միւսին, որը, ուրիշները, միւսներէն, նոյնը, ուրիշներուն</li>
      <li>PROPN: Թուրքիան, Պոլսէն, Զօհրապը, Խաչօն, Մանուկին, Իրման, Քառլիէին, Ամերիկան, Թորգոմը, Հրանտը</li>
      <li>VERB-Fin: ապրելէն</li>
      <li>VERB-Inf: ըլլալը, եփելը, խաբուիլը, անցնելը, ապրիլը, բաղձալով, գտնուելուն, գտնուիլը, երթալէն, ըլլալուն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADP: վրայի, ետեւէ</li>
      <li>AUX-Inf: ըլլալով, ըլլալու, տալով</li>
      <li>NOUN: բան, օր, ատեն, մարդ, հայ, տիկին, կերպով, տեղ, անգամ, տեսակ</li>
      <li>PRON: որ, ինչ, զոր, զորս, ուրիշ, ուրիշներու, որով, որու, ուրիշներ, Ինչեր</li>
      <li>PROPN: Թուրքիոյ, Տիգրանեան, Պոլիս, Մարկոս, Թորգոմ, Բերայի, Զարեհ, Վիլանի, Քառլիէ, Իրմաի</li>
      <li>VERB-Fin: աշխատելով, սիրահարուելով, տոգորուելու</li>
      <li>VERB-Inf: ընելու, տալու, ըլլալու, առնելու, տեսնելու, երթալու, տեսնելով, տալով, գալով, մնալու</li>
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
      <li>ADV: աւելի, պակաս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: մեծ, նոր, կարող, ընդհանուր, աղուոր, գեղեցիկ, երկար, շատ, պզտիկ, սեւ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: ամէնավայրագ, լաւագոյն, ամենաբուռն, ամենազօր, ամենախիստ, ամենայետին, ամենասուրբ, ամէնածանր, ամէնամեծ, ամէնաչնչին</li>
      <li>ADV: սաստկագոյնս</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: չէր, չէ, չի, չեն, չեմ, չէին, չէք, չպիտի, չենք, չես</li>
      <li>AUX-Fin: չէր, չէ, չի, չեն, չեմ, չէին, չէք, չենք, չես, չ՚</li>
      <li>PART: ոչ, չի, մի, չը</li>
      <li>VERB-Fin: չկար, չկայ, չկրցաւ, չունի, չըլլար, չունէր, չունին, չեղաւ, չունէին, չունիմ</li>
      <li>VERB-Inf: չըլլալու, չառնելով, չառնելու, չարտասուելու, չդիմանալով, չըլլալուն, չկորսուելու, չկորսուիլ, չկրնալով, չհասկնալով</li>
      <li>VERB-Part: չանցած, չթուլացող, չհասած, չսափրուած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX: է, էր, պիտի, են, էին, եմ, պէտք, ըլլայ, ես, եղած</li>
      <li>AUX-Fin: է, էր, են, էին, եմ, ըլլայ, ես, ըլլար, էի, էինք</li>
      <li>AUX-Inf: ըլլալ, ըլլալով, տալ, ըլլալնուս, ըլլալու, տալով</li>
      <li>AUX-Part: եղած, տուած</li>
      <li>VERB: ըսաւ, ունէր, եղաւ, գար, ըսէր, ունի, եկաւ, կայ, ունին, եղած</li>
      <li>VERB-Fin: ըսաւ, ունէր, եղաւ, գար, ըսէր, ունի, եկաւ, կայ, ունին, կրնայ</li>
      <li>VERB-Inf: ըլլալ, ընելու, տալ, առնել, ըսել, տալու, ըլլալու, առնելու, ընել, տեսնելու</li>
      <li>VERB-Part: եղած, եկած, ունեցած, անցած, առած, ելած, գացած, սկսած, ըրած, ձգած</li>
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
      <li>VERB-Part: ապրող, գտնուող, գացող, եկող, եղող, դարձող, յաջորդող, տարածուող, ելլող, հասնող</li>
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
      <li>AUX: կը, է, էր, կ՚, են, էին, չէր, չէ, կու, չի</li>
      <li>AUX-Fin: է, էր, են, էին, չէր, չէ, չի, եմ, չեն, չեմ</li>
      <li>AUX-Part: տար</li>
      <li>VERB-Fin: ունէր, ունի, կայ, ունին, կրնայ, կար, չկար, կան, չկայ, ունինք</li>
      <li>VERB-Part: գիտեր, կրնար, ուզեր, ուզում, մեռնիր, երթար, սպասեր, տար, անդրադառնար, անում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: եղաւ, տուի, չեղաւ, տուաւ, տուիր</li>
      <li>AUX-Part: եղեր, եղած, տուած, տուեր</li>
      <li>VERB: ըսաւ, եղաւ, եկաւ, եղած, պատասխանեց, եկած, ըսի, ունեցած, եկեր, ելաւ</li>
      <li>VERB-Fin: ըսաւ, եղաւ, եկաւ, պատասխանեց, ըսի, ելաւ, գնաց, ըրաւ, նայեցաւ, տեսաւ</li>
      <li>VERB-Inf: զսպելով, սովորած</li>
      <li>VERB-Part: եղած, եկած, ունեցած, եկեր, անցած, առած, ելած, գացած, մնացեր, սկսած</li>
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
      <li>AUX: պիտի, պէտք, ըլլայ, ըլլար, չպիտի, ըլլալու, չըլլար, ըլլային, տայ, ըլլաք</li>
      <li>AUX-Fin: ըլլայ, ըլլար, չըլլար, ըլլային, տայ, ըլլաք, տար, տաք</li>
      <li>AUX-Part: ըլլալու</li>
      <li>VERB-Fin: գար, ըսէր, տար, ըլլայ, գային, գտնուէր, ըլլային, ըսեմ, ըսէին, ուզէր</li>
      <li>VERB-Part: գալիք, բերելիք, Ապրելիք, առնելու, արտայայտելու, գիտնալիք, գոյանալու, ըլլալու, ընելիք, ըսելիք</li>
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
      <li>AUX-Fin: տաք</li>
      <li>VERB-Fin: եկուր, ըսէ, գացէք, նայեցէք, առէք, ասա, հաւատացէք, նստեցէք, Բաղդատեցէք, Գրեցէք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: կը, է, էր, կ՚, պիտի, են, էին, չէր, չէ, կու</li>
      <li>AUX-Fin: է, էր, են, էին, չէր, չէ, չի, եմ, չեն, չեմ</li>
      <li>VERB-Fin: ըսաւ, ունէր, եղաւ, ունի, եկաւ, կայ, ունին, կրնայ, պատասխանեց, ըսի</li>
      <li>VERB-Part: կեցուց</li>
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
      <li>AUX-Fin: ըլլայ, ըլլար, չըլլար, ըլլային, տայ, ըլլաք, տար</li>
      <li>VERB-Fin: գար, ըսէր, տար, ըլլայ, գային, գտնուէր, ըլլային, ըսեմ, ըսէին, ուզէր</li>
      <li>VERB-Part: թողուր</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: էր, էին, չէր, չէին, ըլլար, էի, էինք, էիր, չէինք, չըլլար</li>
      <li>VERB-Fin: ունէր, գար, ըսէր, կար, տար, չկար, գային, գտնուէր, ըլլային, ըսէին</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: եղաւ, տուի, չեղաւ, տուաւ, տուիր</li>
      <li>VERB-Fin: ըսաւ, եղաւ, եկաւ, պատասխանեց, ըսի, ելաւ, գնաց, ըրաւ, նայեցաւ, տեսաւ</li>
      <li>VERB-Part: կեցուց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: է, են, չէ, չի, եմ, չեն, չեմ, ըլլայ, ես, ենք</li>
      <li>VERB-Fin: ունի, կայ, ունին, կրնայ, ըլլայ, կան, ըսեմ, չկայ, գայ, ուզեմ</li>
      <li>VERB-Part: թողուր</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB-Fin: ըսաւ, ունէր, ըսէր, ունի, ունին, ըսի, տար, պատասխանեց, ըրաւ, տեսաւ</li>
      <li>VERB-Inf: ընելու, տալ, առնել, ըսել, տալու, առնելու, ընել, տեսնելու, տեսնելով, տալով</li>
      <li>VERB-Part: գիտեր, ունեցած, առած, ըրած, ձգած, տեսած, տուած, ուզեր, սկսած, ստացած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>AUX-Fin: տայ, տուի, տար, տաք, տուաւ, տուիր</li>
      <li>AUX-Inf: տալ, տալով</li>
      <li>AUX-Part: տար, տուած, տուեր</li>
      <li>VERB-Fin: զգացունէին, յիշեցնէր</li>
      <li>VERB-Inf: տառապեցնելու</li>
      <li>VERB-Part: զգացուցած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB: կրնար, գար, եղաւ, եկաւ, կայ, եղած, կրնայ, եկած, կար, եկեր</li>
      <li>VERB-Fin: եղաւ, գար, եկաւ, կայ, կրնայ, կար, ըլլայ, ելաւ, չկար, գային</li>
      <li>VERB-Inf: ըլլալ, ըլլալու, դառնալ, երթալ, երթալու, ամուսնանալ, գալով, մնալու, գալ, գալու</li>
      <li>VERB-Part: կրնար, եղած, եկած, եկեր, անցած, ելած, գացած, մնացեր, մնացած, դարձած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: տրուէր, արձակուին, աքսորուին, խորհուի, հալածուի, անտեսուի, աքսորուէր, բացուէին, բացուէր, գոցուեցաւ</li>
      <li>VERB-Inf: անարգուիլ, բարեկարգուիլ, բռնուիլ, յանձնուելէ, պահւելնուն, ցուցադրուիլ</li>
      <li>VERB-Part: պատրաստուած, դրուած, շինուած, փակցուած, արձակուած, բացուած, գործուած, գրուած, թողուած, խաչուած</li>
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
      <li>ADV: այնքան, հոն, հոս, այսպէս, այնպէս, այդպէս, անդին, նոյնքան, այսքան, այդքան</li>
      <li>DET: այդ, այս, այն, նոյն, միւս, աս, սա, այնպիսի, ան, այսպիսի</li>
      <li>PRON: այն, միւսը, այս, ասիկա, անիկա, անկէ, ասոր, այդ, զանոնք, ասկէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: իր, իրենց</li>
      <li>PRON: իրեն, զինքը, իր, իրենց, ինք, ինքն, իրմէ, ինքը, իրենք, զիրենք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>ADV: ինչ, որքան, ինչպիսի</li>
      <li>DET: ինչ, քանի, ինչքան, Որ</li>
      <li>PRON: Ինչեր, ով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: մէկ, քանի, ուրիշ, ո, որոշ, ոեւէ, որեւէ, ինչ, մէկի</li>
      <li>PRON: մէկը, ոք, ինչ, այլն, մէկուն, ոմանք, ուրիշ, ուրիշներու, մէկն, մէկու</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: ուր, ինչու, ինչպէս, ինչ, որքան, երբ, ինտոր, ուրկէ, որչափ, ինչպես</li>
      <li>DET: ինչ, որ, որքան, քանի, Որչափ, ինչպիսի</li>
      <li>PRON: ինչ, ով, ինչով, Ինչու, որուն, քանիի</li>
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
      <li>DET: մեր, անոր, անոնց, իմ, ձեր, քու, մերին, նրա, քո</li>
      <li>PRON: ես, ան, զայն, մենք, անոնք, անոր, զիս, մեզ, անոնց, ինծի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: իրար, իրարու, իրարմէ, մէկ, մէկու</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: երբ, ուր, ինչպէս, որքան, ուրկէ, երբոր, նոյնքան, ուսկէ</li>
      <li>DET: որոնց</li>
      <li>PRON: որ, որուն, որոնք, ինչ, որոնց, զոր, զորս, որոնցմէ, որը, որով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: ամէն, բոլոր, ամբողջ, ամեն, ամենայն</li>
      <li>PRON: ամենէն, ամէնէն, ամէնքն, բոլորը, բոլորին, բոլորն, ամենքը, ամէնքը, ամենը, ամենուն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: եօթանասուննոց, ութսուննոց</li>
      <li>NUM: երկու, մէկ, երեք, չորս, հազար, հինգ, վեց, 2, 500, մէյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dist
    <ul>
      <li>NUM: մէյմէկ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>NUM: կէս, քառորդ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: առաջին, առջի, Բ, Ա, Գ, երկրորդ, Դ, Ե, Զ, Է</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: Հայաստանեայց</li>
      <li>DET: իր, մեր, իրենց, անոր, անոնց, իմ, որոնց, ձեր, քու, ասոնց</li>
      <li>NOUN: Միւսներունը, երէկինէն, տարիինը</li>
      <li>PRON: իրենը, Մերիններուն, իրեններէն, իրենցը, իրենցիններուն, մերն</li>
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
      <li>PRON: իր, իրենց, իրեն, ինքզինքը, ինքզինք, ինքզինքին, ինքնիրեն, իրենք, ինքզինքս, ինքնիրենը</li>
      <li>VERB-Part: ածիլուած, հագուած</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: եմ, չեմ, ենք, էի, չենք, էինք, չէինք, չէի, տուի</li>
      <li>DET: մեր, իմ, մերին</li>
      <li>PRON: ես, մենք, զիս, մեզ, ինծի, մեզի, ինձ, մեր, Ինձմով, Մերիններուն</li>
      <li>VERB-Fin: ըսի, ըսեմ, ուզեմ, ունինք, ընեմ, ընենք, մեկնիմ, տեսայ, աղաչեմ, երթանք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: ես, չէք, չես, էք, էիր, չէիր, չէիք, էիք, ըլլաս, ըլլաք</li>
      <li>DET: ձեր, քու, քո</li>
      <li>PRON: դուն, դուք, ձեզ, ձեզի, քեզ, դու, քեզի, ձեզմէ, զձեզ, ձեր</li>
      <li>VERB-Fin: գիտէք, ունիս, եկուր, ըսէ, կրնայիր, գաս, գացէք, ըսես, նայեցէք, ուզէք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: է, էր, են, էին, չէր, չէ, չի, չեն, ըլլայ, չէին</li>
      <li>DET: իր, իրենց, անոր, անոնց, նրա</li>
      <li>PRON: իրեն, ան, զինքը, իր, զայն, իրենց, անոնք, անոր, անոնց, ինք</li>
      <li>VERB-Fin: ըսաւ, ունէր, եղաւ, գար, ըսէր, ունի, եկաւ, կայ, ունին, կրնայ</li>
      <li>VERB-Part: կեցուց, թողուր</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>AUX-Fin: չէք, էք, չէիք</li>
      <li>DET: ձեր</li>
      <li>PRON: ձեզ, դուք, ձեզի, ձեզմէ, զձեզ, ձեր</li>
      <li>VERB-Fin: գիտէք, ներէք, նստեցէք, Գրեցէք, Չճանցաք, գտնէք, ընէք, թողէք, թողուք, կարծէք</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADP: ետեւնին, հետերնին, հետերնիս, շուրջերնին, վրանին, վրանիս</li>
      <li>AUX-Inf: ըլլալնուս</li>
      <li>NOUN: գլուխնին, երեսնին, Տուներնին, ակնարկս, աչքովնիդ, առաջքնին, գործերնիս, դիմացիննիդ, թեւերնին, ծամերնին</li>
      <li>PRON: Ամենքնիս, որունիդ</li>
      <li>VERB-Inf: Ժողվըւելնուն, ըլլալնուն, ըլլալնուս, նետուելնիդ, պահւելնուն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADP: հետը, վրաս, վրան, քովս, դէմս, հետդ, հետս</li>
      <li>NOUN: հայրս, մայրս, հօրս, մօրաքոյրս, մօրս, սիրտս, բարեկամս, հօրաքոյրս, անունդ, աչքերս</li>
      <li>VERB-Inf: ելլելէս</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Կրօն, ազգ, Կրթ, թաղ, Ընդհ, Ն, անուր</li>
          <li>NOUN: Պրն, Օր, պ, էֆ, Յունվ, Տ, Տոքթ</li>
          <li>PROPN: Ք, Խ, Մ</li>
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
          <li>ADP: հանդէպ, հակառակ, շնորհիւ, համեմատ, համաձայն, փոխանակ</li>
        </ul>
      </li>
      <li>Post
        <ul>
          <li>ADP: մէջ, համար, վրայ, հետ, պէս, տակ, դէմ, առջեւ, մասին, առաջ</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: ի, մինչեւ, առանց, իբրեւ, դէպի, առ, իբր, ինչպէս, քան, ըստ</li>
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
          <li>CCONJ: այլ, այլեւ, ինչպէս</li>
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
          <li>VERB-Part: գիտեր, կրնար, ուզեր, մեռնիր, երթար, սպասեր, տար, անդրադառնար, առներ, գտներ</li>
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
          <li>ADV: այդպէս, այդքան, հոդ, Հոտկէ, ատանկ</li>
          <li>DET: այդ, այդպիսի, այդքան, ատ, ատանկ</li>
          <li>PRON: այդ, ատիկա, ատոր, ատ, ատկէ, ատոնք, Էդ, այդպէսով, այդքանը, ատոնցմէ</li>
        </ul>
      </li>
      <li>Prox
        <ul>
          <li>ADV: հոս, այսպէս, այսքան, այսչափ, այստեղ, ասանկ, ասդին, հոսկէ</li>
          <li>DET: այս, աս, սա, այսպիսի, այսքան, էս, Ասանկ, ասոնց</li>
          <li>PRON: այս, ասիկա, ասոր, ասկէ, աս, ասոնք, սա, Ասի, այսպէս, այսքանով</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADV: այնքան, հոն, այնպէս, անդին, նոյնքան, այնչափ, անանկ, հոնկէ, հունա</li>
          <li>DET: այն, նոյն, այնպիսի, ան, էն, այնքան, անանկ, անոր, նորին</li>
          <li>PRON: այն, անիկա, անկէ, զանոնք, անոր, զայն, ան, անոնց, նոյնը, Էն</li>
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
          <li>NOUN: աշխարհիս, վերջերս, Մարդուս, աշխարհքս, մարդս</li>
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
          <li>ADJ: կափ, մունր</li>
          <li>ADV: միս, շիփ</li>
          <li>NOUN: կապուստը, կապուստով, ձուն, պիլի</li>
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
          <li>ADJ: Միլլիէ, Գինան, Սէն, պէթ</li>
          <li>PUNCT: :, `, !</li>
          <li>X: օղլու, Chouchou, pensionnaire, Ետի, Նառլը, էհեա, փանսիոն, Allons, Ecoute, Enfin</li>
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
          <li>NOUN: ը, ին, ն, եր, երը, երով, էն, յի, ներ, ները</li>
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
          <li>ADV: էլ, ոնց</li>
          <li>AUX: պիտի</li>
          <li>DET: նրա, քո</li>
          <li>NOUN: Ախպէր, ժամին, փլաւը, Թօփուզեանների, Ժիւսթիսից, Փլաւին, Քիրպիներին, աղջկերքը, եպիսկոպոսների, կեանքից</li>
          <li>PART: էլ</li>
          <li>PRON: դու, նա, քեզ, Էդ, իրանցից, մեզ</li>
          <li>PROPN: Զուիցերիայից</li>
          <li>VERB-Fin: ասա, ասացիր, լինես, ունէք, պղաւեց, վառիր</li>
          <li>VERB-Inf: լինել, անելու, ասել, տանելու</li>
          <li>VERB-Part: ուզում, գժուել, անում, ամաչում, ասում, գալիս, գրել, եկել, զանգահարում, ինկել</li>
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
          <li>PROPN: Բռէնթան, Իթթիհատի, Իթթիհատ, Համիտիյէ, Փոստայի</li>
        </ul>
      </li>
      <li>Geo
        <ul>
          <li>ADJ: Վոսփորեան</li>
          <li>NOUN: Արարատը, Կրընոպլի</li>
          <li>PROPN: Թուրքիոյ, Պոլիս, Բերայի, Թուրքիան, Պոլսէն, Պոլսոյ, Աւստրիոյ, Թուրքիա, Հայաստանի, Գերմանիոյ</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>NOUN: Մարինաներ</li>
          <li>PROPN: Մարկոս, Թորգոմ, Զարեհ, Իրմաի, Փիէռ, Մարտիրոս, Շիրին, Զօհրապ, Զօհրապը, Ժանն</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>PROPN: Զատկի, Ծնունդի, Սավուա</li>
        </ul>
      </li>
      <li>Pro
        <ul>
          <li>PROPN: Բիրօթ, Գարակեօզ, Էյֆէլը, Էյֆէլի, Կէօպէն, Պրեսլաւ, Վօլֆ, Քուպանէց</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>NOUN: քրիստոսներուն</li>
          <li>PROPN: Սապահէտտին, Սապահէտտինի, Տեմուրճենց, Սապահէտտինը, Դպրենց, Կոմիտաս, Մանուկանց, Շեխ, Պեկիշենց, Ազիզի</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>NOUN: Թօփուզեանների, Հօհէնպէրկի, Ճէրճինսքիի, Մատէնճեաններն, Քիրպիներին</li>
          <li>PROPN: Տիգրանեան, Վիլանի, Քառլիէ, Նազարիկեան, Քառլիէի, Քառլիէին, Մաղաքեան, Վարդանեան, Աբովեան, Անտոնեան</li>
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
          <li>ADJ: Բ, Ա, Գ, Դ, Ե, Զ, Է, Ը, ԺԷ</li>
        </ul>
      </li>
      <li>Combi
        <ul>
          <li>ADJ: 36նոց</li>
        </ul>
      </li>
      <li>Digit
        <ul>
          <li>NUM: 2, 500, 100, 18, 1, 10, 15, 1906, 25, 96</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: առաջին, առջի, երկրորդ, առաջի, երրորդ, եօթանասուներորդ, եօթանասուննոց, ութսուննոց, տասներորդ</li>
          <li>NUM: երկու, մէկ, երեք, չորս, հազար, հինգ, վեց, կէս, մէյ, հարիւր</li>
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
          <li>ADP: վրաս, քովս, դէմս, հետերնիս, հետս, վրանիս</li>
          <li>AUX-Inf: ըլլալնուս</li>
          <li>NOUN: հայրս, մայրս, հօրս, մօրաքոյրս, մօրս, սիրտս, բարեկամս, հօրաքոյրս, աչքերս, զգացումս</li>
          <li>PRON: բոլորս, Ամենքնիս, ամենուս, ամէնքս, բոլորիս, ինքս</li>
          <li>VERB-Inf: ելլելէս, ըլլալնուս</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>ADP: հետդ</li>
          <li>NOUN: անունդ, Գլուխդ, Դրամներդ, Զաւակդ, Թշնամիիդ, Հայրդ, անցեալիդ, աչքովնիդ, բարեկամդ, բերանդ</li>
          <li>PRON: որունիդ</li>
          <li>VERB-Inf: նետուելնիդ</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADP: հետը, վրան, ետեւնին, հետերնին, շուրջերնին, վրանին</li>
          <li>NOUN: գլուխնին, երեսնին, Տուներնին, առաջքնին, թեւերնին, ծամերնին, հագուստնին, ձեռուընին, ձեռքերնին, մէջքերնին</li>
          <li>VERB-Inf: Ժողվըւելնուն, ըլլալնուն, պահւելնուն</li>
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
          <li>ADJ: Այսու, Հասարակաց, դէպս, յանձն, Հայաստանեայց</li>
          <li>ADP: վասն, պատուոյ</li>
          <li>ADV: յառաջ, ամենայնիւ, կամայ, սերտիւ</li>
          <li>DET: նորին</li>
          <li>NOUN: տեղի, վերջոյ, նպաստ, հարկէ, Հայոց, առթիւ, եկեղեցւոյ, մարմնոյն, Աստծու, Աստուծոյ</li>
          <li>PRON: այլոց, Յամենայն, զձեզ, իս, որս, որք</li>
          <li>VERB-Fin: Է, իցէ, լիցի</li>
        </ul>
      </li>
      <li>Coll
        <ul>
          <li>ADJ: սաթիւռէ, մենծ, ետքի, զալիմ, կամարիլային, վերջի, առաջի, ջնջին, ցանկալին</li>
          <li>ADP: վերջը, ետեւը, քովը</li>
          <li>ADV: ասանկ, անանկ, սօլօ, ատանկ, ճիշտը, ոնց</li>
          <li>AUX: կոր</li>
          <li>DET: էն, էս, Ասանկ, մերին, անանկ, ատանկ</li>
          <li>NOUN: զաւկին, ճամբէն, Ախպէր, կնիկ, հարսնիքը, մարը, Առտուընէ, Թրաֆիքին, ՔՕՆԹՐՕԼԻ, աղջկերքը</li>
          <li>PRON: զինքը, ինքն, ինքը, ինձ, Ասի, Էդ, անկէց, զանիկա, մէկին</li>
          <li>PROPN: Աստուածածնայ</li>
          <li>VERB-Fin: առի, առիր, գտնան, գտնաս, էւէլնայ, կուրցուց, հաւտանք, տեսնաս</li>
          <li>VERB-Inf: գժտել, ելլելուց</li>
          <li>VERB-Part: կսկծացնող, հագնուած, համարձակուի</li>
        </ul>
      </li>
      <li>Expr
        <ul>
          <li>ADJ: քչիկ, պտըլիկ</li>
          <li>ADV: քչիկ</li>
          <li>NOUN: մարդուկը, անտառակին, անտառակներուն, աչուկներով, գառնուկի, դռնակէն, թաթիկները, մամիկներ, շնիկ, տնակը</li>
          <li>PRON: ինծիի</li>
          <li>PROPN: Խաչօն, Խաչօ, Խաչոյին, Վասիլիկը</li>
          <li>VERB-Fin: սիրէէ</li>
          <li>VERB-Part: համարձակեեր</li>
        </ul>
      </li>
      <li>Rare
        <ul>
          <li>ADJ: բանւորական, արդիսդիք, սբորդական</li>
          <li>AUX-Fin: չը</li>
          <li>NOUN: կանգ, խնդրոյ, յանկարծակիի, Ծըխամորճս, էլէկանսը, թըշնամութեան, ծնողաց, հարըստութիւնը, մըտածողին, պըտոյտ</li>
          <li>NUM: տասնըերկու</li>
          <li>VERB-Fin: կարճըցնէր, ունկընդրէր, սղէ, տըւաւ</li>
        </ul>
      </li>
      <li>Vrnc
        <ul>
          <li>ADJ: առջի, Գազազ, լինքսի, հելալլամիշ, ճիտըծուռ, շաշխըն, ղորթ</li>
          <li>ADV: ուսկէ, ուսկից, տահա, հունա</li>
          <li>NOUN: տուտու, եազմա, եզնիքը, տուտուն, Հագգըի, Սապոնով, Քաղքի, աղբար, բալխիրի, բալխիրներ</li>
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
          <li>VERB: կրնար, գար, եղաւ, եկաւ, կայ, եղած, կրնայ, եկած, կար, եկեր</li>
          <li>VERB-Fin: եղաւ, գար, եկաւ, կայ, կրնայ, կար, ըլլայ, ելաւ, չկար, գային</li>
          <li>VERB-Inf: ըլլալ, ըլլալու, դառնալ, երթալ, երթալու, ամուսնանալ, գալով, մնալու, գալ, գալու</li>
          <li>VERB-Part: կրնար, եղած, եկած, եկեր, անցած, ելած, գացած, մնացեր, մնացած, պատրաստուած</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB-Fin: ըսաւ, ունէր, ըսէր, ունի, ունին, ըսի, տար, պատասխանեց, ըրաւ, տեսաւ</li>
          <li>VERB-Inf: ընելու, տալ, առնել, ըսել, տալու, առնելու, ընել, տեսնելու, տեսնելով, տալով</li>
          <li>VERB-Part: գիտեր, ունեցած, առած, ըրած, ձգած, տեսած, տուած, ուզեր, սկսած, ստացած</li>
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
          <li>ADJ: թագուն, ներկա, Խափուսիկ</li>
          <li>ADV: երբէք, հիմայ, արդեն, լռելեան, հանկարծ, ինչպես, ճիշտը</li>
          <li>AUX-Fin: չըլլայ, նե, չ</li>
          <li>DET: ամեն</li>
          <li>NOUN: անպարտուութիւնը, ապրանքին, խելապատիկին, կանչով, մեկման, մէթր, յարաջդիմութիւնը, պարեգոտ, սպաննութեամբ, սրունգ</li>
          <li>PRON: ամէնէն, ամենքը, ամենը, ամէնուն, որոնք, Ամենքնիս</li>
          <li>SCONJ: եթե</li>
          <li>VERB-Fin: դժկամացեկաւ, կարէնար, յօգնէր, պատաստանիր, պտտէր, սիրէէ, փչացան</li>
          <li>VERB-Inf: անցնելը, չեզոքացնելու</li>
          <li>VERB-Part: կազած, նիրկուած, նկատուի, նկարւած, քողազերծուած</li>
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
      <li>VERB-Fin--NOUN-Ins (1)</li>
      <li>VERB-Fin--NOUN-Nom (894)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(իբրեւ) (1)</li>
      <li>VERB-Fin--PRON (12)</li>
      <li>VERB-Fin--PRON-Nom (264)</li>
      <li>VERB-Inf--NOUN-Nom (9)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--NOUN-Nom (234)</li>
      <li>VERB-Part--PRON (5)</li>
      <li>VERB-Part--PRON-Nom (93)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN-Abl (2)</li>
      <li>VERB-Fin--NOUN-Dat (89)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(մէջ) (2)</li>
      <li>VERB-Fin--NOUN-Nom (577)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Fin--PRON-Abl (1)</li>
      <li>VERB-Fin--PRON-Acc (88)</li>
      <li>VERB-Fin--PRON-Dat (51)</li>
      <li>VERB-Fin--PRON-Nom (36)</li>
      <li>VERB-Inf--NOUN-Dat (44)</li>
      <li>VERB-Inf--NOUN-Nom (319)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (41)</li>
      <li>VERB-Inf--PRON-Dat (7)</li>
      <li>VERB-Inf--PRON-Nom (5)</li>
      <li>VERB-Part--NOUN-Dat (31)</li>
      <li>VERB-Part--NOUN-Nom (214)</li>
      <li>VERB-Part--PRON (4)</li>
      <li>VERB-Part--PRON-Acc (29)</li>
      <li>VERB-Part--PRON-Dat (15)</li>
      <li>VERB-Part--PRON-Gen (1)</li>
      <li>VERB-Part--PRON-Nom (9)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (19)</li>
      <li>VERB-Fin--PRON-Acc (3)</li>
      <li>VERB-Fin--PRON-Dat (22)</li>
      <li>VERB-Inf--NOUN-Dat (13)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Dat (6)</li>
      <li>VERB-Part--NOUN-Dat (4)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Dat (4)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 14 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: զգալ ինքզինքը, զգալ իրենք, զսպել ինքզինքը, զրկել ինքզինքս, ըսել ինքնիրեն, ըսել իրենց, թուիլ իրեն, նետել ինքզինք, նետել ինքզինքը, ուղղել իրեն, պահել ինքզինք, վերապահել իրեն, տալ ինքզինքը, տալ ինքնիրեն</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 20 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>advmod:emph</a>, <a>aux:caus</a>, <a>aux:ex</a>, <a>case:loc</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>compound:svc</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>flat:dist</a>, <a>flat:name</a>, <a>flat:range</a>, <a>iobj:agent</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
