---
layout: base
title:  'UD_Classical_Armenian-CAVaL'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Classical Armenian CAVaL

Language: [Classical Armenian](/xcl/index.html) (code: `xcl`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.13 release.

The following people have contributed to making this treebank part of UD: Petr Kocharov, Lilit Kharatyan.

Repository: [UD_Classical_Armenian-CAVaL](https://github.com/UniversalDependencies/UD_Classical_Armenian-CAVaL)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udxcl_caval216)<br />
Download all treebanks: [UD 2.16](/#download)

License: CC BY-NC-SA 4.0

Genre: bible, fiction

Questions, comments?
General annotation questions (either Classical Armenian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Classical_Armenian-CAVaL/issues).
If you want to collaborate, please contact [petr&nbsp;•&nbsp;kocharov&nbsp;(æt)&nbsp;uni-wuerzburg&nbsp;•&nbsp;de].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | not available |
| Features | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Relations | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |

## Description

The present release includes the Classical Armenian translation of the Gospels and the first book of the "History of the Armenians" by Movses Khorenatsi. The annotation of the Gospels results from a rule-based conversion from the PROIEL annotation, manually corrected and extended with additional information. The annotation of the "History of the Armenians" has been performed by a UDPipe2 annotator and manually corrected.



The present release includes a treebank of the Classical Armenian Gospels and the first ten chapters of the "History of the Armenians" by Movses Khorenatsi. The treebank results from a rule-based conversion of the <a href="https://github.com/proiel/proiel-treebank" target="_blank">PROIEL annotation</a> (see Dag T. T. Haug and Marius L. Jøhndal. 2008. 'Creating a Parallel Treebank of the Old Indo-European Bible Translations', in: Caroline Sporleder and Kiril Ribarov (eds.), Proceedings of the Second Workshop on Language Technology for Cultural Heritage Data (LaTeCH 2008) (2008), pp. 27-34). The PROIEL annotation is based on a digitalized version of Beda O. Künzle "Das altarmenische Evangelium" (Bern/Frankfurt am Main/New York: Peter Lang, 1984); https://titus.fkidg1.uni-frankfurt.de/texte/etcc/arm/armntbk/armnt.htm. The conversion from the PROIEL to UD annotation has been performed using a rule-based convertor (Petr Kocharov, Lilit Kharatyan). The conversion result has been manually corrected (Petr Kocharov) and extended with additional morphological features and relation subtypes, spelling in the Armenian alphabet, English glosses and sentence translations. The treebank of the "History of the Armenians" is based on the digital edition of the <a href="https://historians.armeniancathedral.org/index.htm" target="_blank">Arak29 Project</a>. The editions of Arak29 are adapted from the American University of Armenia’s Digital Library and other published sources. The morphological annotation of Arak29 has been automatically converted to UD with a rule-based convertor (Petr Kocharov, Lilit Kharatyan); the syntactic annotation is performed by a <a href="https://github.com/caval-repository/xcl_nlp/tree/main/parsers/UDPipe" target="_blank">UDPipe2 model</a> (<a href="https://github.com/caval-repository/xcl_nlp/blob/main/Kharatyan_Kocharov_2024_xcl_parsers.pdf" target="_blank">Kharatyan & Kocharov 2024</a>). All annotation has been manually corrected (Petr Kocharov).

## Acknowledgments

The treebank is developed by Petr Kocharov and Lilit Kharatyan at the University of Würzburg as part of the "CAVaL: Classical Armenian Valency Lexicon" project (PI Dr. Petr Kocharov), funded by the Deutsche Forschungsgemeinschaft (DFG), project number 518003859. We thank Professor Dr. Dag T. T. Haug and the PROIEL team for the permission to reuse the PROIEL annotation of the Classical Armenian Gospels for the purposes of the UD Classical Armenian-CAVaL treebank. We thank Dr. Daniil Kocharov (Tampere University) for advisory support and programming of the module for the processing of punctuation tokens for the convertor of the Gospels. We acknowledge the permission of the <a href="https://arak29.org/" target="_blank">Arak29 Charitable Foundation</a> for a non-commercial use of their digital editions of Classical Armenian texts.


# Statistics of UD Classical Armenian CAVaL

## POS Tags

[ADJ](xcl_caval-pos-ADJ.html) – [ADP](xcl_caval-pos-ADP.html) – [ADV](xcl_caval-pos-ADV.html) – [AUX](xcl_caval-pos-AUX.html) – [CCONJ](xcl_caval-pos-CCONJ.html) – [DET](xcl_caval-pos-DET.html) – [INTJ](xcl_caval-pos-INTJ.html) – [NOUN](xcl_caval-pos-NOUN.html) – [NUM](xcl_caval-pos-NUM.html) – [PART](xcl_caval-pos-PART.html) – [PRON](xcl_caval-pos-PRON.html) – [PROPN](xcl_caval-pos-PROPN.html) – [PUNCT](xcl_caval-pos-PUNCT.html) – [SCONJ](xcl_caval-pos-SCONJ.html) – [VERB](xcl_caval-pos-VERB.html) – [X](xcl_caval-pos-X.html)

## Features

[Animacy](xcl_caval-feat-Animacy.html) – [Aspect](xcl_caval-feat-Aspect.html) – [Case](xcl_caval-feat-Case.html) – [Connegative](xcl_caval-feat-Connegative.html) – [Definite](xcl_caval-feat-Definite.html) – [Deixis](xcl_caval-feat-Deixis.html) – [ExtPos](xcl_caval-feat-ExtPos.html) – [Foreign](xcl_caval-feat-Foreign.html) – [Mood](xcl_caval-feat-Mood.html) – [Number](xcl_caval-feat-Number.html) – [NumType](xcl_caval-feat-NumType.html) – [Person](xcl_caval-feat-Person.html) – [Polarity](xcl_caval-feat-Polarity.html) – [Poss](xcl_caval-feat-Poss.html) – [PronType](xcl_caval-feat-PronType.html) – [Reflex](xcl_caval-feat-Reflex.html) – [Tense](xcl_caval-feat-Tense.html) – [VerbForm](xcl_caval-feat-VerbForm.html) – [Voice](xcl_caval-feat-Voice.html)

## Relations

[acl](xcl_caval-dep-acl.html) – [advcl](xcl_caval-dep-advcl.html) – [advmod](xcl_caval-dep-advmod.html) – [amod](xcl_caval-dep-amod.html) – [appos](xcl_caval-dep-appos.html) – [aux](xcl_caval-dep-aux.html) – [aux:caus](xcl_caval-dep-aux-caus.html) – [case](xcl_caval-dep-case.html) – [cc](xcl_caval-dep-cc.html) – [ccomp](xcl_caval-dep-ccomp.html) – [compound](xcl_caval-dep-compound.html) – [compound:redup](xcl_caval-dep-compound-redup.html) – [conj](xcl_caval-dep-conj.html) – [cop](xcl_caval-dep-cop.html) – [csubj](xcl_caval-dep-csubj.html) – [csubj:caus](xcl_caval-dep-csubj-caus.html) – [csubj:pass](xcl_caval-dep-csubj-pass.html) – [det](xcl_caval-dep-det.html) – [discourse](xcl_caval-dep-discourse.html) – [dislocated](xcl_caval-dep-dislocated.html) – [fixed](xcl_caval-dep-fixed.html) – [flat](xcl_caval-dep-flat.html) – [iobj](xcl_caval-dep-iobj.html) – [mark](xcl_caval-dep-mark.html) – [nmod](xcl_caval-dep-nmod.html) – [nsubj](xcl_caval-dep-nsubj.html) – [nsubj:caus](xcl_caval-dep-nsubj-caus.html) – [nsubj:pass](xcl_caval-dep-nsubj-pass.html) – [nummod](xcl_caval-dep-nummod.html) – [obj](xcl_caval-dep-obj.html) – [obl](xcl_caval-dep-obl.html) – [obl:agent](xcl_caval-dep-obl-agent.html) – [obl:arg](xcl_caval-dep-obl-arg.html) – [orphan](xcl_caval-dep-orphan.html) – [parataxis](xcl_caval-dep-parataxis.html) – [punct](xcl_caval-dep-punct.html) – [root](xcl_caval-dep-root.html) – [vocative](xcl_caval-dep-vocative.html) – [xcomp](xcl_caval-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 4781 sentences, 99005 tokens and 99663 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 26048 tokens (26%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1 types of words that contain both letters and punctuation. Examples: ընդէ՛ր</li>
</ul>

<ul>
<li>This corpus contains 657 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 181 types of multi-word tokens. Examples: զի՞նչ, զիա՞րդ, զի՞, ո՞, ընդէ՞ր, ո՞չ, ո՞վ, ո՞ւր, ուստի՞, դո՞ւ, քանի՞, մի՛, ո՛վ, ո՛րպէս, ի՞ւ, իցէ՞, ո՞յր, ո՞ւմ, կա՛մ, ո՛յք, արժա՞ն, ո՞ր, ե՞ս, ե՞րբ, ուստի՛, բարի՞, գիտե՞ս, ընդէ՛ր, ո՛չ, ո՛րպիսի, որո՞վ, որչա՞փ, ա՞յժմ, ա՞ւձ, ապրեցուցանե՞լ, երկնի՞ց, զարդարեա՞լ, ի՛նչ, ի՞նչ, ծանի՛ր, կամի՞ս, կարէ՞ք, հաւատա՞յք, հաւատա՞ս, մա՞րթ, մե՞ծ, մի՞, ն, ո՞րպիսի, որպէ՞ս.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 11 word types tagged as particles (PART): ապաքէն, գուցէ, եթե, եթէ, զիարդ, թե, թէ, իսկ, մի, ոչ, չ</li>
</ul>

<ul>
<li>This corpus contains 43 lemmas tagged as pronouns (PRON): ամենայն, ամենեքեան, ամենեքին, այդ, այդպիսի, այն, այնպիսի, այս, այսպիսի, բազում, բիւրաւոր, դա, դոյն, դու, դուք, ես, երեքեան, երկոքեան, զի, զինչ, իմն, ինչ, ինքն, իրեար, իւր, իւրաքանչիւր, իք, մեք, միմեանց, միմեանք, միւս, յով, նա, նոյն, ոմն, ով, որ, ուրուք, ոք, չիք, սա, սոյն, քանի</li>
</ul>

<ul>
<li>This corpus contains 38 lemmas tagged as determiners (DET): PRON, ամենայն, ամենեքին, այդ, այն, այնպիսի, այս, այսպէս, այսպիսի, բազում, բոլոր, դ, դոյն, դորա, դու, ես, երկաքանչիւր, զինչ, իմ, իմն, ինչ, ինքն, իւր, իւրաքանչիւր, ձեր, մեր, մի, միայն, յոլով, ն, նոյն, ոմն, որ, ոք, ս, սա, սակաւ, քո</li>
</ul>

<ul>
<li>Out of the above, 22 lemmas occurred sometimes as PRON and sometimes as DET: ամենայն, ամենեքին, այդ, այն, այնպիսի, այս, այսպիսի, բազում, դոյն, դու, ես, զինչ, իմն, ինչ, ինքն, իւր, իւրաքանչիւր, նոյն, ոմն, որ, ոք, սա</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): եմ, լինել, տալ</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as AUX and sometimes as VERB: լինել, տալ</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: լինելոց</li>
    <li>VERB: գալոց, մատնելոց, ըմպելոց, մեռանելոց, մկրտելոց, անցանելոց, առնելոց, գայթագղելոց, կատարելոց, յայտնելոց</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: է, էր, եղեւ, իցէ, են, եին, եմ, ես, եղիցի, էք</li>
    <li>VERB: ասէ, ետ, ասեն, ասեմ, ասեին, եկն, ասաց, գայ, ել, ասէր</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: լինել, եղանել, տալ</li>
    <li>VERB: ասել, առնել, տալ, մտանել, ունել, գալ, տեսանել, առնուլ, ուտել, կալ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: լեալ, եղեալ, լիեալ, եղելոյ, լինելով, եղեալս, եղելոց, լեալս, լինելոյ</li>
    <li>VERB: եկեալ, առեալ, մատուցեալ, գրեալ, ելեալ, տեսեալ, յարուցեալ, մտեալ, հասեալ, թողեալ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>AUX: լինել, լինելոյ</li>
    <li>VERB: ելանել, լսելոյ, մտանել, զարմանալ, ծնանելոյ, հասանել, գալ, կալ, կատարել, մեռանել</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>



<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>DET: ոմն, ոմանք, ոք, ուրումն, ոմանց, ոմանս, ումեմնէ, ումեմն, ումեքէ, ուրուք</li>
      <li>PRON: ոք, ո, ով, ոմանք, ոմն, ումեք, ոյր, ում, ոյք, ուրուք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>DET: ինչ, իմն, զինչ</li>
      <li>PRON: ինչ, զինչ, զի, իւիք, իմիք, իմն, իրիք</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: յաւիտենականս, այլոց, այլք, այլս, կոյրք, բարիս, աղքատաց, առաջինք, քաջաց, առաջնոց</li>
      <li>AUX-Fin: են, եին, էք, իցեն, եղիցին, եղեն, լիցին, եմք, լերուք, եղերուք</li>
      <li>AUX-Part: եղեալս, եղելոց</li>
      <li>DET: իւրոց, բազումք, մեր, մերոց, ձերոց, այնոսիկ, բազումս, իմոց, քոց, բազմաց</li>
      <li>NOUN: աշակերտք, երկնից, երկինս, աշակերտս, աղաւթս, կեանս, աւուրս, բանս, աշակերտաց, ձեռս</li>
      <li>NUM: երկուս, երիս, երկուց, երկոտասանից, երից, երկոցունց, երկուք, երկոքին, չորից, երեք</li>
      <li>PRON: նոսա, ձեզ, նոցա, մեզ, դուք, ձեր, նոքա, նոցանէ, իւրեանց, որոց</li>
      <li>PROPN: Հայոց, Ասորեստանեայց, Մարաց, Պարսից, Հայք, Գերգեսացւոց, Հայս, հարք, Արեաց, Հայաստանեայց</li>
      <li>VERB: ասեն, ասեին, տեսին, գնացին, լուան, ետուն, եկին, գիտէք, արարէք, երթայք</li>
      <li>VERB-Fin: ասեն, ասեին, տեսին, գնացին, լուան, ետուն, եկին, գիտէք, արարէք, երթայք</li>
      <li>VERB-Part: մեռելոց, առաքեալս, առաքեալք, ատեցեալք, ընտրելոց, կատարեալք, մեռեալս, մեռեալք, նտրեալս, անկելոց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: մեծ, առաջին, այլ, բարի, միւս, չար, ճշմարիտ, այղ, սուրբ, արժան</li>
      <li>AUX: է, էր, եղեւ, իցէ, եմ, ես, եղիցի, լեալ, լինիցի, լիցի</li>
      <li>AUX-Fin: է, էր, եղեւ, իցէ, եմ, ես, եղիցի, լիցի, լինիցի, լինի</li>
      <li>AUX-Part: լեալ, եղեալ, լիեալ, եղելոյ, լինելով, լեալս, լինելոյ</li>
      <li>AUX-Vnoun: լինել, լինելոյ</li>
      <li>DET: ամենայն, մի, բազում, որ, այս, ինչ, իւրում, այն, ոմն, իւրոյ</li>
      <li>NOUN: պատասխանի, որդի, Աստուածոյ, հայր, տէր, անուն, այր, Աստուած, բան, մարդոյ</li>
      <li>NUM: մի, հինգ, երկու, հարիւր, եւթն, երկոտասան, երեսուն, միոյ, վեց, տասն</li>
      <li>PRON: նա, որ, նորա, նմա, իմ, իս, իւր, քո, քեզ, ես</li>
      <li>PROPN: Յիսուս, Պետրոս, Յովհաննէս, Յիսուսի, Քրիստոս, Պիղատոս, Սիմովն, Երուսաղեմ, Մարիամ, Յովհաննու</li>
      <li>VERB-Conv: գործելոց</li>
      <li>VERB-Fin: ասէ, ետ, ասեմ, եկն, ասաց, գայ, ել, ասէր, ետես, առաքեաց</li>
      <li>VERB-Part: եկեալ, առեալ, մատուցեալ, գրեալ, ելեալ, տեսեալ, յարուցեալ, մտեալ, հասեալ, թողեալ</li>
      <li>VERB-Vnoun: ելանել, լսելոյ, մտանել, զարմանալ, ծնանելոյ, գալ, կալ, կատարել, հասանել, սերմանել</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: աջմէ, այլոց, փոքրկանց, հեռաստանէ, ահեկէ, առաջնոց, աւտարաց, ծերոց, չարէ, սրբոյ</li>
      <li>AUX-Vnoun: լինելոյ</li>
      <li>DET: իմմէ, քումմէ, իւրմէ, իւրոց, այսմ, քոց, այնմ, այսցանէ, իւրեանց, մերոց</li>
      <li>NOUN: երկնից, Աստուածոյ, հաւրէ, մարդկանէ, աշակերտաց, անձնէ, հետէ, աշխարհէ, ժողովրդենէ, սկզբանէ</li>
      <li>NUM: երկոտասանից, երկուց, միոջէ, չորից, երից, երկոցունց, ինուց, իւթանց, միոյն</li>
      <li>PRON: նմանէ, նոցանէ, քէն, ձէնջ, ինէն, որոց, որմէ, սմանէ, մէնջ, դմանէ</li>
      <li>PROPN: Գաղիղեէ, Երուսաղեմէ, Հրէաստանէ, Յովհաննէ, Նազարեթէ, Շամիրամայ, Արիմաթեայ, Հայկայ, Մարաց, Յիսուսէ</li>
      <li>VERB-Fin: յարէ</li>
      <li>VERB-Part: մեռելոց, կոչեցելոց, Դարձեալ, անկելոց, բազմելոց, բարկացեալ, գերելոց, ելելոց, զայրացեալ, թաւալեցուցեալ</li>
      <li>VERB-Vnoun: ելանելոյ, կատարելոյ, համբուրելոյ, հապճեպելոյ, ճանաչելոյ, մոլորեցուցանելոյ, վարելոյ, տալոյ, ցանկանալոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: բարի, մեծ, յաւիտենականս, այլ, այղ, այլս, միւս, չար, առաջին, փառաւոր</li>
      <li>AUX-Part: եղեալ, լեալ, եղեալս, լեալս</li>
      <li>AUX-Vnoun: լինել</li>
      <li>DET: ամենայն, մի, ինչ, բազում, այս, որ, այն, բազումս, նոյն, այսպիսի</li>
      <li>NOUN: պատասխանի, անուն, տուն, անձն, երկիր, բան, հայր, ձեռն, որդի, աշակերտս</li>
      <li>NUM: մի, երկուս, հինգ, երիս, հարիւր, եւթն, երեսուն, երկոտասան, երկոտասանս, վաթսուն</li>
      <li>PRON: նա, նոսա, իս, որ, ինչ, քեզ, ձեզ, զինչ, այս, այն</li>
      <li>PROPN: Յիսուս, Յովհաննէս, Երուսաղեմ, Պետրոս, Գաղիղեա, Սիմովն, Արայ, Յակովբոս, Հայս, Աբրահամ</li>
      <li>VERB-Part: եկեալ, կապեալ, անուանեալ, առաքեալս, կոչեցեալ, մեռեալս, ասացեալ, արձակեալ, զարդարեալ, կորուսեալ</li>
      <li>VERB-Vnoun: զարմանալ, ելանել, գալ, այրել, բժշկել, դաւել, ժամանել, լսել, ծագել, ծածկել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: աղքատաց, այլոց, այլում, հիւանդաց, ատելեաց, մեծատան, յղեաց, ստնտուաց, բազմականաց, կուրաց</li>
      <li>DET: իւրում, իւրոց, այնմիկ, այսմիկ, իմոց, ձերոց, քում, իմում, մերոց, բազմաց</li>
      <li>NOUN: որդւոյ, առն, մարդկան, տեառն, Աստուածոյ, աշակերտաց, ժողովրդեան, եղբաւր, ազգի, աշխարհի</li>
      <li>NUM: միում, երկուց, երկոտասանից, մետասանից, միո, չորից</li>
      <li>PRON: ձեզ, նմա, նոցա, քեզ, ինձ, մեզ, որում, ումեք, որոց, դմա</li>
      <li>PROPN: Յիսուսի, Մովսէսի, Յովհաննու, Աբրահամու, Աժդահակայ, Իսրայեղի, Էղիայի, Քրիստոսի, Եղիսաբեթի, Զրուանայ</li>
      <li>VERB-Part: անկելոյ, անկելոց, անուանելոց, առաքելոց, ասացելոյ, արկելոյ, բռելոց, գրելոց, եկելոց, ժողովելոյ</li>
      <li>VERB-Vnoun: լսելոյ, ախորժելոյ, թաղելոյ, կոչելոյ, հասանելոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: այլոց, առաջնոյ, բարձրելոյ, իմաստնոց, կուրի, մեծի, մեղաւորաց, մեծաց, Բաբեղացւոց, առաջնոց</li>
      <li>AUX-Part: եղելոյ, եղելոց, լինելոյ</li>
      <li>AUX-Vnoun: լինելոյ</li>
      <li>DET: իմոյ, իւրոյ, մերոյ, իւրոց, մեր, այնորիկ, այսորիկ, իւր, սորա, քո</li>
      <li>NOUN: Աստուածոյ, մարդոյ, աշխարհի, երկնից, տեառն, հաւր, ժողովրդեան, մարդկան, երկրի, հրէից</li>
      <li>NUM: միոյ, երկուց, երից, երկոտասանից, երկոցունց, միոջ, չորից, տասանց, բիւրոց, երեսնից</li>
      <li>PRON: նորա, իմ, քո, իւր, նոցա, ձեր, իւրեանց, որոյ, մեր, այնորիկ</li>
      <li>PROPN: Յիսուսի, Դաւթի, Յովհաննու, Իսրայեղի, Հայոց, Շամիրամայ, Աժդահակայ, Աբրահամու, Արայի, Յակովբայ</li>
      <li>VERB-Part: մեռելոց, ընտրելոց, եկելոց, կառափելոյ, կարգելոց, կորուսելոյ, անկելոց, անցելոց, առաքելոյ, առաքելոց</li>
      <li>VERB-Vnoun: ծնանելոյ, առնելոյ, գալոյ, երեւելոյ, մեկնելոյ, սպանանելոյ, անուանելոյ, անցանելոյ, ապրելոյ, ասելոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: մեծաւ, սրբով, սակաւուք, այլով, այլովք, ծերովք, երկայնանստիւ, ամրագունիւք, անբաւիւք, անուշիւ</li>
      <li>AUX-Part: լինելով</li>
      <li>DET: իւրով, իւրովք, որով, իմով, բազմաւք, նովին, քով, այնու, այսուիկ, բազմովք</li>
      <li>NOUN: հոգւով, իշխանութեամբ, ճշմարտութեամբ, առակաւք, աշակերտաւք, զաւրութեամբ, ճանապարհաւ, բանիւ, փառաւք, գրով</li>
      <li>NUM: բիւրովք, հազարաւ, միով, չորիւք, երիւք, երկոտասանիւք, տասն, քսան</li>
      <li>PRON: նովաւ, որով, նոքաւք, իւ, որովք, իւիք, իւրեւ, ինեւ, ամենայնիւ, այնու</li>
      <li>PROPN: Բեեղզեբուղաւ, Հէրովդիանոսաւք, Տեւտամաւ, Աբիաթարաւ, Արտաշիսիւ, Բելոքոսիւ, Եղիսեիւ, Ենովք, Զեբեդեաւ, Մարեմաւ</li>
      <li>VERB-Part: ունելով, առնելով, գոլով, ասելով, բառնալով, թողլով, հայելով, տեսանելով, փորձելով, ախորժելով</li>
      <li>VERB-Vnoun: գիտելով, դարձուցանելով, կալով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: անապատի, յետնում, առաջին, մեղաւորս, փոքու, առաջնում, բարձունս, այլ, արքունիս, երեւելիս</li>
      <li>AUX-Vnoun: լինել</li>
      <li>DET: իւրում, այնոսիկ, քում, այնմիկ, այսմիկ, նմին, այնմ, այսմ, իմում, մերում</li>
      <li>NOUN: աւուր, երկինս, աղաւթս, շաբաթու, տաճարի, տան, ժամու, աշխարհի, աւուրս, երկրի</li>
      <li>NUM: միում, երկուս, հազարս, հինգ, մի, չորս</li>
      <li>PRON: նմա, ձեզ, նոսա, իս, որում, քեզ, միմեանս, մեզ, նմայ, որս</li>
      <li>PROPN: Երուսաղեմ, Յիսուսի, Գաղիղեա, Իսրայեղի, Կափառնաւում, Հայս, Հրէաստանի, Էրուսաղեմ, Նինուէ, Բաբելոնի</li>
      <li>VERB-Part: անուանեալ, կոչեցեալ, հանդերձելում, մեռեալս</li>
      <li>VERB-Vnoun: ելանել, մտանել, կալ, կատարել, հասանել, սերմանել, բազմել, բաժանել, գնալ, ժողովել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: մեծ, առաջին, այլ, արժան, ճշմարիտ, չար, այլք, զգոյշ, նման, միւս</li>
      <li>AUX-Part: լեալ, եղեալ, լիեալ</li>
      <li>DET: ամենայն, մի, բազում, որ, այս, ոմն, բազումք, այն, իմն, իւրաքանչիւր</li>
      <li>NOUN: տէր, որդի, հայր, աշակերտք, այր, Աստուած, կին, վարդապետ, անուն, ժողովուրդ</li>
      <li>NUM: մի, երկու, հինգ, վեց, երկոտասան, երկուք, երկոքին, հազար, տասն, երեք</li>
      <li>PRON: որ, ես, նա, ոք, դու, դուք, նոքա, ինչ, սա, այս</li>
      <li>PROPN: Յիսուս, Պետրոս, Քրիստոս, Յովհաննէս, Պիղատոս, Մարիամ, Սիմովն, Մովսէս, Յուդա, սատանայ</li>
      <li>VERB-Conv: գործելոց</li>
      <li>VERB-Fin: սքանչանար</li>
      <li>VERB-Part: եկեալ, առեալ, մատուցեալ, գրեալ, ելեալ, տեսեալ, յարուցեալ, մտեալ, հասեալ, թողեալ</li>
      <li>VERB-Vnoun: դադարեցուցանել, կոչել, անուանել, ասել, դառնալ, հանգուցանել, վիշապանալ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADP: զ</li>
      <li>DET: ն, ս, դ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: ինչ, ուրեք, ուստեք</li>
      <li>DET: ինչ, ոք, ումեքէ, ուրուք</li>
      <li>PRON: ինչ, ոք, ումեք, ուրուք, իւիք, ումեքէ, իմիք, իրիք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Spec
    <ul>
      <li>ADV: ուրեմն, երբեմն, իմն</li>
      <li>DET: մի, ոմն, իմն, ոմանք, միոյ, միում, ուրումն, ոմանց, միով, ոմանս</li>
      <li>PRON: ոմանք, ոմն, ոմանս, ոմանց, ոք, իմն, ումեմն, ումեքէ, ուրումն, ոմամբք</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: ոչ, մի, չ</li>
      <li>PRON: չիք, չիկ</li>
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
      <li>AUX-Fin: է, էր, իցէ, են, եին, եմ, ես, էք, իցեն, լինի</li>
      <li>VERB-Fin: ասէ, ասեն, ասեմ, ասեին, գայ, ասէր, ծնանի, կայր, ունէր, կարէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: եղեւ, եղիցի, լիցի, եղեն, եղիցին, լիցին, լերուք, լեր, եղերուք, եղիջիք</li>
      <li>VERB-Fin: ետ, եկն, ասաց, ել, ետես, առաքեաց, գնաց, արար, ծնաւ, տեսին</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: լերուք, եղերուք, լեր, լինիր, լինիք, եր</li>
      <li>VERB-Fin: երթ, երթայք, տուր, տուք, կացէք, արարէք, եկայք, ասա, եկ, արի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: է, էր, եղեւ, են, եին, եմ, ես, էք, լինի, եղեն</li>
      <li>VERB-Fin: ասէ, ետ, ասեն, ասեմ, ասեին, եկն, ասաց, գայ, ասէր, ել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: իցէ, եղիցի, իցեն, լիցի, լինիցի, եղիցին, իցեմ, լիցին, եղիջիք, իցես</li>
      <li>VERB-Fin: եկեցէ, ունիցի, տացէ, ասիցէ, տեսանիցէք, լցցի, արարից, տեսցեն, գիտասջիք, կորուսցէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: էր, եղեւ, եին, եղեն, լինէր, եի, եիր, լինեին, էին, ետ</li>
      <li>AUX-Part: լեալ, եղեալ, լիեալ, եղելոյ, եղեալս, եղելոց, լեալս, լինելոյ</li>
      <li>VERB-Fin: ետ, ասեին, եկն, ասաց, ել, ետես, առաքեաց, ասէր, արար, գնաց</li>
      <li>VERB-Part: եկեալ, առեալ, մատուցեալ, գրեալ, ելեալ, տեսեալ, յարուցեալ, մտեալ, հասեալ, թողեալ</li>
      <li>VERB-Vnoun: աւհրնել, սպանանելոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: է, են, եմ, ես, էք, լինի, եմք, լինին, իցէ, իցեն</li>
      <li>VERB-Fin: ասէ, ասեն, ասեմ, գայ, ծնանի, կարէ, գիտեմ, գիտէք, առնէ, երթամ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Fin: է, եղեւ, իցէ, են, եմ, ես, էք, իցեն, իցեմ, եմք</li>
      <li>VERB-Fin: ասէ, ետ, ասեն, ասեմ, եկն, ասաց, ել, ետես, առաքեաց, արար</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB-Fin: ուսուցանէր, կացոյց, կեցուցին, մատուցին, հատուսցէ, մատո, յարոյց, գայթագղեցուսցէ, ապրեցուսցէ, բնակեցուցանէ</li>
      <li>VERB-Inf: ապրեցուցանել, ուսուցանել, կեցուցանել, հատուցանել, կացուցանել, մատուցանել, յարուցանել, նստուցանել, արդարացուցանել, բազմեցուցանել</li>
      <li>VERB-Part: մատուցեալ, թաւալեցուցեալ, իջուցեալ, խոնարհեցուցեալ, փախուցեալ, անցուցեալ, աստուածացուցեալ, դարձուցեալ, զարթուցեալ, թագուցեալ</li>
      <li>VERB-Vnoun: դադարեցուցանել, դարձուցանելով, հանգուցանել, հատուցանելոյ, մոլորեցուցանել, մոլորեցուցանելոյ, յագեցուցանել, ուսուցանել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>CauPass
    <ul>
      <li>VERB-Fin: մատուցաւ, թաքեաւ, խոնարհեցաւ, մատուցան</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Fin: եղիցի, լիցի, լինիցի, լինի, եղիցին, լիցին, լերուք, եղերուք, լինին, լինիցին</li>
      <li>VERB-Fin: ծնաւ, ծնանի, լուաւ, սկսաւ, լուան, ունիցի, անկաւ, խաւսեցաւ, յարեաւ, ընդունի</li>
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
      <li>DET: ն, ս, դ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADP: անտի, անդ, անդր, աստի, այտի, աստ, այսր</li>
      <li>ADV: անդ, այսպէս, աստ, նոյնպէս, այնպէս, անտի, անդրէն, այսր, այսուհետեւ, անդր</li>
      <li>DET: այս, այն, այնմիկ, նոյն, այսմ, այսմիկ, այդ, այնմ, այնոսիկ, այնորիկ</li>
      <li>INTJ: ահաւասիկ, աւասիկ, ահաւանիկ, ահաւադիկ, աւադիկ, աւանիկ</li>
      <li>PRON: նա, նորա, նոսա, նմա, նոցա, այս, նոքա, նմանէ, սա, այն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: ուր, ուստի, երբ, ինչ, զիարդ, ընդէր, զի, ընդէ՛ր</li>
      <li>DET: ինչ, ոմն, ոմանք, ոք, ուրումն, ոմանց, ոմանս, ումեմնէ, զինչ, ումեմն</li>
      <li>PRON: ինչ, ոք, զինչ, ոմանք, ոմն, ումեք, ո, ով, ոյր, ոյք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: զիարդ, ընդէր, զի, ուր, ուստի, երբ, որչափ, որպէս, ինչ</li>
      <li>DET: զինչ, որ, որով, որոյ, որոց</li>
      <li>PRON: զինչ, ո, ով, զի, ում, իւ, ոյր, ինչ, յո, ոյք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: իւրում, իւրոց, մեր, իւրոյ, իմոյ, իւր, մերոյ, իմմէ, մերոց, քում</li>
      <li>PRON: ձեզ, իմ, իս, իւր, քո, քեզ, ես, մեզ, դու, դուք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: միմեանս, միմեանց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: որպէս, որչափ, յորժամ, որքան</li>
      <li>DET: որ, որմէ, որով, որում, որոյ, որք</li>
      <li>PRON: որ, որում, որոյ, որոց, որք, որս, որմէ, որով, որո, որովք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: ամենայն, ամենեքին, ամենեսին, ամենեցուն, ամենայնէ, ամենայնի, ամենայնիւ, ամենեքեան, այմենայն, բոլոր</li>
      <li>PRON: ամենայն, ամենեքին, ամենեցուն, ամենեքեան, ամենայնի, ամենեսին, ամենեսեան, ամենեցունց, ամենայնիւ, ամենայնք</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: մի, երկուս, հինգ, երկու, հարիւր, երիս, եւթն, երկուց, երկոտասան, երեսուն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dist
    <ul>
      <li>NUM: երկուս, մի, յիսուն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>ADV: երիցս, կրկին, հարիւրապատիկ, երկիցս, եւթանասնակին</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: երրորդ, երկրորդ, երիր, չորրորդ, վեցերորդ, երրորդի, երկրորդի, եւթներորդ, իններորդ, մետասաներորդ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>NUM: երկոքին, երկոտասանեսին, եւթնեքեան, եւթանեքին, իւթանեքին</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: իւրում, իւրոց, մեր, իմոյ, իւրոյ, իւր, մերոյ, իմմէ, մերոց, քում</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: իւրում, իւրոց, իւրոյ, իւր, իւրմէ, իւրով, իւրեանց, իւրովք, ինքն, իրում</li>
      <li>PRON: իւր, ինքն, իւրեանց, իւրեանս, իւրեւ, իւրոյ, իւրոց, իւրեաւ, իւրում, ես</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: եմ, իցեմ, եի, եմք, եաք, եղէց, եղեաք, եղիցուք, ետու, էի</li>
      <li>DET: մեր, իմոյ, մերոյ, իմմէ, մերոց, իմոց, իմում, իմ, մերում, իմով</li>
      <li>PRON: իմ, իս, ես, մեզ, ինձ, մեր, մեք, ինէն, մէնջ, ինեւ</li>
      <li>VERB-Fin: ասեմ, գիտեմ, ասացի, երթամ, գիտեմք, եկի, կամիմ, արարից, ունիմ, խաւսեցայ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: ես, էք, լերուք, եղերուք, եղիջիք, իցես, լեր, եիր, իցէք, լինիջիք</li>
      <li>DET: քում, ձերոց, քոց, քումմէ, քո, ձերոյ, ձերմէ, ձերում, քոյ, քով</li>
      <li>PRON: ձեզ, քո, քեզ, դու, դուք, ձեր, քէն, ձէնջ, քեւ</li>
      <li>VERB: երթ, գիտէք, արարէք, երթայք, տուր, տուք, կացէք, ունիք, եկայք, տեսանիցէք</li>
      <li>VERB-Fin: երթ, գիտէք, արարէք, երթայք, տուր, տուք, կացէք, ունիք, եկայք, տեսանիցէք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: է, էր, եղեւ, իցէ, են, եին, եղիցի, իցեն, լինիցի, լիցի</li>
      <li>AUX-Fin: է, էր, եղեւ, իցէ, են, եին, եղիցի, իցեն, լիցի, լինիցի</li>
      <li>DET: իւրում, իւրոց, իւրոյ, իւր, իւրմէ, իւրով, իւրեանց, իւրովք, ինքն, իրում</li>
      <li>PRON: իւր, ինքն, իւրեանց, իւրեանս, իւրեւ, իւրոյ, իւրոց, իւրեաւ, իւրում, ինքեան</li>
      <li>VERB-Fin: ասէ, ետ, ասեն, ասեին, եկն, ասաց, գայ, ասէր, ել, ետես</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Connegative</a>
    <ul>
      <li>Yes
        <ul>
          <li>AUX-Fin: լինիր, լինիք</li>
          <li>VERB-Fin: երկնչիք, երկնչիր, արգելուք, շնար, սպանաներ, գողանար, առնէք, դատիք, լայք, հոգայք</li>
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
          <li>ADP: այտի</li>
          <li>ADV: այդպէս, այդր, այտի</li>
          <li>DET: դ, այդ, այդմանէ, այդորիկ, այդր, այդմ, այդմիկ, դմին, դորա, դորին</li>
          <li>INTJ: ահաւադիկ, աւադիկ</li>
          <li>PRON: դա, այդ, դմա, դորա, դմանէ, դոսա, դոցա, դոքա, այդորիկ, այդպիսեաց</li>
        </ul>
      </li>
      <li>Prox
        <ul>
          <li>ADP: աստի, աստ, այսր</li>
          <li>ADV: այսպէս, աստ, այսր, այսուհետեւ, աստի, այսպիսի, աստէն, աւասիկ</li>
          <li>DET: ս, այս, այսմ, այսմիկ, այսորիկ, այսպիսի, այսոսիկ, սորա, այսպիսւոյ, այսցանէ</li>
          <li>INTJ: ահաւասիկ, աւասիկ</li>
          <li>PRON: այս, սա, այսորիկ, սորա, այսոսիկ, սմա, սմանէ, այսոքիկ, այսոցիկ, սոցանէ</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADP: անտի, անդ, անդր</li>
          <li>ADV: անդ, նոյնպէս, այնպէս, անտի, անդրէն, անդր, անդէն, այնուհետեւ, նա</li>
          <li>DET: ն, այն, այնմիկ, նոյն, այնմ, այնոսիկ, այնորիկ, նմին, այնոցիկ, նորին</li>
          <li>INTJ: ահաւանիկ, աւանիկ</li>
          <li>PRON: նա, նորա, նոսա, նմա, նոցա, նոքա, նմանէ, այն, նոցանէ, այնորիկ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADP: ի, մինչեւ, առ, մերձ, շուրջ, ընդ, մաւտ, մինչ, վասն, բայց</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: ի, մինչեւ</li>
          <li>ADV: մանաւանդ, ընդ, Ամէն, շուրջ, աստ, որչափ, որպէս</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: վասն, փոխանակ, մինչ</li>
          <li>ADV: որպէս</li>
          <li>SCONJ: զի</li>
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
          <li>X: էղի, Թ, ղամա, սաբաքթանի, Ա, Ե, Կ, Շ, Փ, Ք</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: եմ, լինել, չիք.</li>
</ul>

<ul>
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: եմ, լինել, տալ.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Conv--NOUN-Nom (7)</li>
      <li>VERB-Conv--PRON-Nom (41)</li>
      <li>VERB-Fin--NOUN-Nom (1330)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(զ) (1)</li>
      <li>VERB-Fin--PRON-Nom (1769)</li>
      <li>VERB-Inf--NOUN-Nom (8)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Part--NOUN-Acc (3)</li>
      <li>VERB-Part--NOUN-Nom (125)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Nom (102)</li>
      <li>VERB-Vnoun--PRON-Nom (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN-Acc (1)</li>
      <li>VERB-Conv--NOUN-Acc-ADP(զ) (1)</li>
      <li>VERB-Conv--PRON-Acc (1)</li>
      <li>VERB-Conv--PRON-Acc-ADP(զ) (25)</li>
      <li>VERB-Fin--NOUN-Acc (950)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(զ) (1254)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(իբր)-ADP(զ) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(որպէս) (1)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(զ) (4)</li>
      <li>VERB-Fin--PRON-Acc (194)</li>
      <li>VERB-Fin--PRON-Acc-ADP(զ) (1437)</li>
      <li>VERB-Fin--PRON-Gen-ADP(զ) (1)</li>
      <li>VERB-Inf--NOUN-Acc (112)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(զ) (186)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(զ)-ADP(զ) (2)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(ի) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(իբր) (1)</li>
      <li>VERB-Inf--PRON-Acc (25)</li>
      <li>VERB-Inf--PRON-Acc-ADP(զ) (126)</li>
      <li>VERB-Inf--PRON-Gen-ADP(զ) (1)</li>
      <li>VERB-Part--NOUN-Acc (110)</li>
      <li>VERB-Part--NOUN-Acc-ADP(զ) (132)</li>
      <li>VERB-Part--NOUN-Acc-ADP(ի) (2)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Acc (8)</li>
      <li>VERB-Part--PRON-Acc-ADP(զ) (66)</li>
      <li>VERB-Vnoun--NOUN-Acc-ADP(զ) (3)</li>
      <li>VERB-Vnoun--PRON-Acc-ADP(զ) (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Conv--PRON-Dat (2)</li>
      <li>VERB-Fin--NOUN-Dat (183)</li>
      <li>VERB-Fin--PRON-Dat (926)</li>
      <li>VERB-Inf--NOUN-Dat (52)</li>
      <li>VERB-Inf--PRON-Dat (73)</li>
      <li>VERB-Part--NOUN-Dat (12)</li>
      <li>VERB-Part--PRON-Dat (49)</li>
      <li>VERB-Vnoun--PRON-Dat (2)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 13 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: գնել իւրեանց, անկանել իւրեանց, ապրեցուցանել ինքն, առնուլ իւր, ասել իւրեանց, ընկենուլ ինքն, թուել ինձ, կարծել ինքն, հանել իւր, հաստատել ինքն, հատանել իւրս, սիրել իւրս, վարել ինքն</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>aux:caus</a>, <a>compound:redup</a>, <a>csubj:caus</a>, <a>csubj:pass</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
