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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udxcl_caval215)<br />
Download all treebanks: [UD 2.15](/#download)

License: CC BY-NC-ND 4.0

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

The present release includes the Classical Armenian translation of the Gospels and the first ten chapters of the "History of the Armenians" by Movses Khorenatsi. The annotation of the Gospels results from a rule-based conversion from the PROIEL annotation, manually corrected and extended with additional information. The annotation of the "History of the Armenians" has been performed by a UDPipe2 annotator and manually corrected.



The present release includes a treebank of the Classical Armenian Gospels and the first ten chapters of the "History of the Armenians" by Movses Khorenatsi. The treebank results from a rule-based conversion of the <a href="https://github.com/proiel/proiel-treebank" target="_blank">PROIEL annotation</a> (see Dag T. T. Haug and Marius L. Jøhndal. 2008. 'Creating a Parallel Treebank of the Old Indo-European Bible Translations', in: Caroline Sporleder and Kiril Ribarov (eds.), Proceedings of the Second Workshop on Language Technology for Cultural Heritage Data (LaTeCH 2008) (2008), pp. 27-34). The PROIEL annotation is based on a digitalized version of Beda O. Künzle "Das altarmenische Evangelium" (Bern/Frankfurt am Main/New York: Peter Lang, 1984); https://titus.fkidg1.uni-frankfurt.de/texte/etcc/arm/armntbk/armnt.htm. The conversion from the PROIEL to UD annotation has been performed using a rule-based convertor (Petr Kocharov, Lilit Kharatyan). The conversion result has been manually corrected (Petr Kocharov) and extended with additional morphological features and relation subtypes, spelling in the Armenian alphabet, English glosses and sentence translations. The treebank of the "History of the Armenians" is based on the digital edition of the <a href="https://historians.armeniancathedral.org/index.htm" target="_blank">Arak29 Project</a>. The editions of Arak29 are adapted from the American University of Armenia’s Digital Library and other published sources. The morphological annotation of Arak29 has been automatically converted to UD with a rule-based convertor (Petr Kocharov, Lilit Kharatyan); the syntactic annotation is performed by a <a href="https://github.com/caval-repository/xcl_nlp/tree/main/parsers/UDPipe" target="_blank">UDPipe2 model</a> (<a href="https://github.com/caval-repository/xcl_nlp/blob/main/Kharatyan_Kocharov_2024_xcl_parsers.pdf" target="_blank">Kharatyan & Kocharov 2024</a>). All annotation has been manually corrected (Petr Kocharov).

## Acknowledgments

The treebank is developed by Petr Kocharov and Lilit Kharatyan at the University of Würzburg as part of the "CAVaL: Classical Armenian Valency Lexicon" project (PI Dr. Petr Kocharov), funded by the Deutsche Forschungsgemeinschaft (DFG), project number 518003859. We thank Professor Dr. Dag T. T. Haug and the PROIEL team for the permission to reuse the PROIEL annotation of the Classical Armenian Gospels for the purposes of the UD Classical Armenian-CAVaL treebank. We thank Dr. Daniil Kocharov (Tampere University) for advisory support and programming of the module for the processing of punctuation tokens for the convertor of the Gospels. We acknowledge the permission of the <a href="https://arak29.org/" target="_blank">Arak29 Charitable Foundation</a> for a non-commercial use of their digital editions of Classical Armenian texts.


# Statistics of UD Classical Armenian CAVaL

## POS Tags

[ADJ](xcl_caval-pos-ADJ.html) – [ADP](xcl_caval-pos-ADP.html) – [ADV](xcl_caval-pos-ADV.html) – [AUX](xcl_caval-pos-AUX.html) – [CCONJ](xcl_caval-pos-CCONJ.html) – [DET](xcl_caval-pos-DET.html) – [INTJ](xcl_caval-pos-INTJ.html) – [NOUN](xcl_caval-pos-NOUN.html) – [NUM](xcl_caval-pos-NUM.html) – [PART](xcl_caval-pos-PART.html) – [PRON](xcl_caval-pos-PRON.html) – [PROPN](xcl_caval-pos-PROPN.html) – [PUNCT](xcl_caval-pos-PUNCT.html) – [SCONJ](xcl_caval-pos-SCONJ.html) – [VERB](xcl_caval-pos-VERB.html) – [X](xcl_caval-pos-X.html)

## Features

[Animacy](xcl_caval-feat-Animacy.html) – [Aspect](xcl_caval-feat-Aspect.html) – [Case](xcl_caval-feat-Case.html) – [Connegative](xcl_caval-feat-Connegative.html) – [Definite](xcl_caval-feat-Definite.html) – [Deixis](xcl_caval-feat-Deixis.html) – [Foreign](xcl_caval-feat-Foreign.html) – [Mood](xcl_caval-feat-Mood.html) – [Number](xcl_caval-feat-Number.html) – [NumType](xcl_caval-feat-NumType.html) – [Person](xcl_caval-feat-Person.html) – [Polarity](xcl_caval-feat-Polarity.html) – [Poss](xcl_caval-feat-Poss.html) – [PronType](xcl_caval-feat-PronType.html) – [Reflex](xcl_caval-feat-Reflex.html) – [Tense](xcl_caval-feat-Tense.html) – [VerbForm](xcl_caval-feat-VerbForm.html) – [Voice](xcl_caval-feat-Voice.html)

## Relations

[acl](xcl_caval-dep-acl.html) – [advcl](xcl_caval-dep-advcl.html) – [advmod](xcl_caval-dep-advmod.html) – [amod](xcl_caval-dep-amod.html) – [appos](xcl_caval-dep-appos.html) – [aux](xcl_caval-dep-aux.html) – [aux:caus](xcl_caval-dep-aux-caus.html) – [case](xcl_caval-dep-case.html) – [cc](xcl_caval-dep-cc.html) – [ccomp](xcl_caval-dep-ccomp.html) – [compound](xcl_caval-dep-compound.html) – [compound:redup](xcl_caval-dep-compound-redup.html) – [conj](xcl_caval-dep-conj.html) – [cop](xcl_caval-dep-cop.html) – [csubj](xcl_caval-dep-csubj.html) – [csubj:caus](xcl_caval-dep-csubj-caus.html) – [csubj:pass](xcl_caval-dep-csubj-pass.html) – [det](xcl_caval-dep-det.html) – [discourse](xcl_caval-dep-discourse.html) – [dislocated](xcl_caval-dep-dislocated.html) – [fixed](xcl_caval-dep-fixed.html) – [flat](xcl_caval-dep-flat.html) – [iobj](xcl_caval-dep-iobj.html) – [mark](xcl_caval-dep-mark.html) – [nmod](xcl_caval-dep-nmod.html) – [nsubj](xcl_caval-dep-nsubj.html) – [nsubj:caus](xcl_caval-dep-nsubj-caus.html) – [nsubj:pass](xcl_caval-dep-nsubj-pass.html) – [nummod](xcl_caval-dep-nummod.html) – [obj](xcl_caval-dep-obj.html) – [obl](xcl_caval-dep-obl.html) – [obl:agent](xcl_caval-dep-obl-agent.html) – [obl:arg](xcl_caval-dep-obl-arg.html) – [orphan](xcl_caval-dep-orphan.html) – [parataxis](xcl_caval-dep-parataxis.html) – [punct](xcl_caval-dep-punct.html) – [root](xcl_caval-dep-root.html) – [vocative](xcl_caval-dep-vocative.html) – [xcomp](xcl_caval-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 4339 sentences, 87408 tokens and 88009 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 22946 tokens (26%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1 types of words that contain both letters and punctuation. Examples: ընդէ՛ր</li>
</ul>

<ul>
<li>This corpus contains 600 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 165 types of multi-word tokens. Examples: զի՞նչ, զիա՞րդ, զի՞, ո՞, ընդէ՞ր, ո՞չ, ո՞վ, ո՞ւր, ուստի՞, դո՞ւ, քանի՞, ի՞ւ, ո՞յր, ո՞ւմ, իցէ՞, արժա՞ն, ո՛վ, ո՞ր, ե՞ս, ե՞րբ, մի՛, բարի՞, գիտե՞ս, ո՛յք, որո՞վ, որչա՞փ, ուստի՛, ա՞յժմ, ա՞ւձ, ապրեցուցանե՞լ, երկնի՞ց, զարդարեա՞լ, ընդէ՛ր, ի՛նչ, կամի՞ս, կարէ՞ք, հաւատա՞յք, հաւատա՞ս, մա՞րթ, մե՞ծ, ն, ո՛չ, ո՛րպէս, որպէ՞ս, ունի՞ք, պա՞րտ, տացո՞ւք, տեսանե՞ս, քանի՞ցս, Բարաբբա՞յ.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 9 word types tagged as particles (PART): ապաքէն, գուցէ, եթե, թե, թէ, իսկ, մի, ոչ, չ</li>
</ul>

<ul>
<li>This corpus contains 41 lemmas tagged as pronouns (PRON): PRON, ամենայն, ամենեքեան, ամենեքին, այդ, այդպիսի, այն, այնպիսի, այս, այսպիսի, բազում, բիւրաւոր, դա, դոյն, դու, դուք, ես, երեքեան, երկոքեան, զի, զինչ, իմն, ինչ, ինքն, իւր, իւրաքանչիւր, իք, մեք, միմեանց, միմեանք, նա, նոյն, ոմն, ով, որ, ուրուք, ոք, չիք, սա, սոյն, քանի</li>
</ul>

<ul>
<li>This corpus contains 35 lemmas tagged as determiners (DET): PRON, ամենայն, ամենեքեան, ամենեքին, այդ, այն, այնպիսի, այս, այսպէս, այսպիսի, բազում, դ, դոյն, դորա, ես, զինչ, իմ, իմն, ինչ, իւր, իւրաքանչիւր, ձեր, մեր, մի, միայն, յոլով, ն, նոյն, ոմն, որ, ոք, ս, սա, սակաւ, քո</li>
</ul>

<ul>
<li>Out of the above, 22 lemmas occurred sometimes as PRON and sometimes as DET: PRON, ամենայն, ամենեքեան, ամենեքին, այդ, այն, այնպիսի, այս, այսպիսի, բազում, դոյն, ես, զինչ, իմն, ինչ, իւր, իւրաքանչիւր, նոյն, ոմն, որ, ոք, սա</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): եմ, լինիմ, տամ</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: լինիմ</li>
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
    <li>AUX: է, էր, եղեւ, իցէ, եին, են, եմ, ես, եղիցի, էք</li>
    <li>VERB: ասէ, ետ, ասեն, ասեմ, ասեին, եկն, ասաց, գայ, ել, ասէր</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: լինել</li>
    <li>VERB: ասել, առնել, տալ, մտանել, տեսանել, գալ, ունել, ուտել, առնուլ, կալ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: լեալ, եղեալ, լիեալ, եղելոյ, եղեալս, եղելոց, տուեալ</li>
    <li>VERB: եկեալ, առեալ, մատուցեալ, գրեալ, ելեալ, յարուցեալ, մտեալ, տեսեալ, մեռելոց, թողեալ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>AUX: լինել, լինելոյ</li>
    <li>VERB: ելանել, լսելոյ, մտանել, զարմանալ, ծնանելոյ, փորձելով, ասելով, գալ, կալ, կատարել</li>
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
      <li>DET: ոմն, ոք, ոմանք, ուրումն, ոմանս, ոմանց, ումեմնէ</li>
      <li>PRON: ոք, ո, ով, ոմանք, ոմն, ումեք, ոյր, ում, ոմանս, ոյք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>DET: ինչ, զինչ, իմն</li>
      <li>PRON: ինչ, զինչ, զի, իմիք, իւիք, իրիք, իմն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: յաւիտենականս, այլք, այլոց, կոյրք, բարիս, աղքատաց, առաջինք, հիւանդս, մեծամեծս, յետինք</li>
      <li>AUX-Fin: եին, են, էք, իցեն, եղեն, եղիցին, լիցին, եմք, լերուք, եղերուք</li>
      <li>AUX-Part: եղեալս, եղելոց</li>
      <li>DET: բազումք, իւրոց, ձերոց, բազումս, այնոսիկ, քոց, իմոց, մերոց, այսոսիկ, բազմաց</li>
      <li>NOUN: աշակերտք, երկնից, երկինս, աշակերտս, աղաւթս, կեանս, աշակերտաց, աւուրս, ձեռս, փարիսեցիք</li>
      <li>NUM: երկուս, երիս, երկուց, երկոտասանից, երից, երկոքին, երեք, երկուք, երկոտասանս, չորից</li>
      <li>PRON: նոսա, ձեզ, նոցա, դուք, ձեր, մեզ, նոքա, իւրեանց, նոցանէ, մեր</li>
      <li>PROPN: Հայոց, Գերգեսացւոց, Պարսից, Ասորեստանեայց, Ենովս, Ենովք, Զրուան, Հայաստանեայց, Հայս, Հէրովդիանոսաց</li>
      <li>VERB: ասեն, ասեին, տեսին, գնացին, լուան, ետուն, եկին, գիտէք, արարէք, երթայք</li>
      <li>VERB-Fin: ասեն, ասեին, տեսին, գնացին, լուան, ետուն, եկին, գիտէք, արարէք, երթայք</li>
      <li>VERB-Part: մեռելոց, առաքեալս, առաքեալք, ատեցեալք, մեռեալս, մեռեալք, նտրեալս, ընտրելոց, կատարեալք, անկելոց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: մեծ, բարի, այլ, միւս, չար, այղ, առաջին, ճշմարիտ, սուրբ, արժան</li>
      <li>AUX-Fin: է, էր, եղեւ, իցէ, եմ, ես, եղիցի, լինիցի, լիցի, լինի</li>
      <li>AUX-Part: լեալ, եղեալ, լիեալ, եղելոյ, տուեալ</li>
      <li>AUX-Vnoun: լինել, լինելոյ</li>
      <li>DET: ամենայն, մի, բազում, այս, որ, այն, իւրում, ոմն, իմոյ, ինչ</li>
      <li>NOUN: պատասխանի, Աստուածոյ, հայր, որդի, տէր, այր, անուն, Աստուած, մարդոյ, բան</li>
      <li>NUM: մի, հինգ, հարիւր, երկու, եւթն, երկոտասան, երեսուն, տասն, միում, վեց</li>
      <li>PRON: նա, որ, նորա, իմ, իս, նմա, քո, ես, իւր, քեզ</li>
      <li>PROPN: Յիսուս, Պետրոս, Յովհաննէս, Յիսուսի, Քրիստոս, Պիղատոս, Սիմովն, Երուսաղեմ, Մարիամ, Յովհաննու</li>
      <li>VERB-Fin: ասէ, ետ, ասեմ, եկն, ասաց, գայ, ել, ասէր, ետես, առաքեաց</li>
      <li>VERB-Inf: բաժանել</li>
      <li>VERB-Part: եկեալ, առեալ, մատուցեալ, գրեալ, ելեալ, յարուցեալ, մտեալ, տեսեալ, թողեալ, կոչեցեալ</li>
      <li>VERB-Vnoun: ելանել, լսելոյ, մտանել, զարմանալ, փորձելով, գալ, ծնանելոյ, կալ, կատարել, հասանել</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: աջմէ, փոքրկանց, հեռաստանէ, ահեկէ, այլոց, ծերոց, չարէ, սրբոյ, առաջնոց, աւտարաց</li>
      <li>AUX-Vnoun: լինելոյ</li>
      <li>DET: իմմէ, քումմէ, իւրմէ, այսմ, իւրոց, քոց, այսցանէ, այնմ, այնմանէ, իմոց</li>
      <li>NOUN: երկնից, Աստուածոյ, հաւրէ, մարդկանէ, աշակերտաց, անձնէ, հետէ, աշխարհէ, ժողովրդենէ, սկզբանէ</li>
      <li>NUM: երկոտասանից, երկուց, միոջէ, չորից, երից, ինուց, իւթանց, միոյն</li>
      <li>PRON: նմանէ, նոցանէ, քէն, ձէնջ, ինէն, որմէ, որոց, դմանէ, մէնջ, այնմանէ</li>
      <li>PROPN: Գաղիղեէ, Երուսաղեմէ, Հրէաստանէ, Յովհաննէ, Նազարեթէ, Արիմաթեայ, Յիսուսէ, սատանայէ, Նոյէ, Երիքովէ</li>
      <li>VERB-Part: մեռելոց, կոչեցելոց, Դարձեալ, անկելոց, բազմելոց, բարկացեալ, ելելոց, զայրացեալ, թաւալեցուցեալ, կախելոց</li>
      <li>VERB-Vnoun: ելանելոյ, լինելոյ, կատարելոյ, համբուրելոյ, ճանաչելոյ, մոլորեցուցանելոյ, տալոյ, ցանկանալոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: բարի, մեծ, յաւիտենականս, այղ, միւս, այլ, չար, փառաւոր, բարիս, ճշմարիտ</li>
      <li>AUX-Part: լեալ, եղեալ, եղեալս</li>
      <li>AUX-Vnoun: լինել</li>
      <li>DET: ամենայն, մի, այս, բազում, որ, ինչ, այն, բազումս, այդ, այսոսիկ</li>
      <li>NOUN: պատասխանի, անձն, հայր, տուն, անուն, երկիր, բան, աշակերտս, Աստուած, որդի</li>
      <li>NUM: մի, երկուս, հինգ, հարիւր, երիս, եւթն, երեսուն, երկոտասան, երկոտասանս, վաթսուն</li>
      <li>PRON: նա, նոսա, իս, որ, ինչ, քեզ, ձեզ, զինչ, այս, այն</li>
      <li>PROPN: Յիսուս, Յովհաննէս, Երուսաղեմ, Պետրոս, Գաղիղեա, Սիմովն, Յակովբոս, Աբրահամ, Պիղատոս, Մարիամ</li>
      <li>VERB-Conv: գալոց</li>
      <li>VERB-Inf: բաժանել</li>
      <li>VERB-Part: եկեալ, կապեալ, առաքեալս, մեռեալս, արձակեալ, զարդարեալ, կոչեցեալ, կորուսեալ, նտրեալս, անուանեալ</li>
      <li>VERB-Vnoun: զարմանալ, ելանել, գալ, լինել, այրել, բժշկել, ժամանել, լսել, ծածկել, հաւասարել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: աղքատաց, այլում, այլոց, հիւանդաց, ատելեաց, մեծատան, յղեաց, ստնտուաց, բազմականաց, կուրաց</li>
      <li>DET: իւրում, այնմիկ, այսմիկ, ձերոց, իմոց, իւրոց, քում, իմում, մերոց, բազմաց</li>
      <li>NOUN: որդւոյ, առն, տեառն, Աստուածոյ, մարդկան, աշակերտաց, ժողովրդեան, դպրաց, եղբաւր, ազգի</li>
      <li>NUM: միում, երկուց, երկոտասանից, մետասանից, միո</li>
      <li>PRON: ձեզ, նմա, նոցա, քեզ, ինձ, մեզ, որում, ումեք, որոց, դմա</li>
      <li>PROPN: Յիսուսի, Մովսէսի, Յովհաննու, Աբրահամու, Իսրայեղի, Էղիայի, Քրիստոսի, Եղիսաբեթի, Զրուանայ, Էղիաի</li>
      <li>VERB-Part: անկելոյ, անկելոց, առաքելոց, ասացելոյ, արկելոյ, բռելոց, գրելոց, եկելոց, ժողովելոյ, լուացելոյ</li>
      <li>VERB-Vnoun: լսելոյ, ախորժելոյ, թաղելոյ, կոչելոյ, հասանելոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: այլոց, բարձրելոյ, կուրի, մեղաւորաց, Բաբեղացւոց, սրբոց, ազնուի, առաջնոյ, առաջնոց, ծերոց</li>
      <li>AUX-Part: եղելոյ, եղելոց</li>
      <li>AUX-Vnoun: լինելոյ</li>
      <li>DET: իմոյ, իւրոյ, այնորիկ, այսորիկ, իւրոց, մերոյ, ձերոյ, քո, ձերոց, բազմաց</li>
      <li>NOUN: Աստուածոյ, մարդոյ, երկնից, տեառն, աշխարհի, հաւր, ժողովրդեան, մարդկան, հրէից, երկրի</li>
      <li>NUM: միոյ, երկուց, երից, երկոտասանից, միոջ, տասանց, երեսնից, երեցունց, երկոտասանիւք, երկոցունց</li>
      <li>PRON: նորա, իմ, քո, իւր, ձեր, նոցա, իւրեանց, մեր, որոյ, այնորիկ</li>
      <li>PROPN: Յիսուսի, Դաւթի, Յովհաննու, Իսրայեղի, Յակովբայ, Սիմովնի, Աբրահամու, Հրէաստանի, Զեբեդեայ, Յովնանու</li>
      <li>VERB-Part: մեռելոց, ընտրելոց, կառափելոյ, կորուսելոյ, անցելոց, առաքելոց, ասացելոց, ասելոյ, աւհրնելոյ, բացելոյ</li>
      <li>VERB-Vnoun: ծնանելոյ, առնելոյ, գալոյ, երեւելոյ, մեկնելոյ, ասելոյ, բազմանալոյ, բաժանելոյ, բժշկելոյ, գիտելոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: սրբով, մեծաւ, այլով, այլովք, ծերովք, երկայնանստիւ, սակաւուք, անբաւիւք, անուշիւ, աշխարականաւք</li>
      <li>DET: իւրով, իւրովք, որով, բազմաւք, իմով, քով, բազմովք, ձերով, միով, ամենայնիւ</li>
      <li>NOUN: հոգւով, իշխանութեամբ, առակաւք, ճշմարտութեամբ, աշակերտաւք, ճանապարհաւ, փառաւք, բանիւ, զաւրութեամբ, ջրով</li>
      <li>NUM: հազարաւ, միով, երիւք, երկոտասանիւք, տասն, քսան</li>
      <li>PRON: նովաւ, որով, նոքաւք, իւ, իւրեւ, որովք, ինեւ, իւիք, ամենեքումբք, այնու</li>
      <li>PROPN: Բեեղզեբուղաւ, Հէրովդիանոսաւք, Աբիաթարաւ, Եղիսեիւ, Ենովք, Զեբեդեաւ, Մարեմաւ, Մարիամաւ, Մովսէսիւ, Յակովբաւ</li>
      <li>VERB-Part: փակելովք, կապելովք, յարեցելովք, պահելով</li>
      <li>VERB-Vnoun: ասելով, փորձելով, գնալով, լսելով, համարելով, ձգելով, տեսանելով, ախորժելով, անցանելով, առնելով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: անապատի, յետնում, մեղաւորս, փոքու, առաջնում, բարձունս, առաջին, երեւելիս, երրորդ, միւսում</li>
      <li>AUX-Vnoun: լինել</li>
      <li>DET: իւրում, այնմիկ, այնոսիկ, քում, այսմիկ, նմին, այնմ, այսմ, իմում, ձերում</li>
      <li>NOUN: աւուր, երկինս, աղաւթս, շաբաթու, տաճարի, տան, ժամու, աւուրս, աշխարհի, երկրի</li>
      <li>NUM: միում, երկուս, հազարս, հինգ, մի, չորս</li>
      <li>PRON: նմա, ձեզ, նոսա, իս, որում, քեզ, միմեանս, մեզ, նմայ, որս</li>
      <li>PROPN: Երուսաղեմ, Յիսուսի, Գաղիղեա, Իսրայեղի, Կափառնաւում, Հրէաստանի, Էրուսաղեմ, Բեթանիա, Բեթղեեմ, Եգիպտոս</li>
      <li>VERB-Part: հանդերձելում, մեռեալս</li>
      <li>VERB-Vnoun: ելանել, մտանել, կալ, կատարել, հասանել, սերմանել, բազմել, գնալ, ժողովել, խաւսել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: մեծ, այլ, արժան, չար, զգոյշ, նման, այլք, ճշմարիտ, միւս, առաջին</li>
      <li>AUX-Part: լեալ, եղեալ, լիեալ, տուեալ</li>
      <li>DET: ամենայն, մի, բազում, բազումք, այս, որ, ոմն, այն, իւրաքանչիւր, սակաւ</li>
      <li>NOUN: տէր, որդի, հայր, աշակերտք, այր, Աստուած, կին, վարդապետ, ժողովուրդ, անուն</li>
      <li>NUM: մի, երկու, հինգ, վեց, երկոտասան, երկոքին, տասն, երեք, երկուք, հարիւր</li>
      <li>PRON: որ, ես, նա, ոք, դու, դուք, նոքա, սա, ինչ, ինքն</li>
      <li>PROPN: Յիսուս, Պետրոս, Քրիստոս, Յովհաննէս, Պիղատոս, Մարիամ, Սիմովն, Մովսէս, Յուդա, սատանայ</li>
      <li>VERB-Part: եկեալ, առեալ, մատուցեալ, գրեալ, ելեալ, յարուցեալ, մտեալ, տեսեալ, թողեալ, անկեալ</li>
      <li>VERB-Vnoun: դադարեցուցանել, կոչել, անուանել, հանգուցանել</li>
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
      <li>DET: ինչ, ոք</li>
      <li>PRON: ինչ, ոք, ումեք, ուրուք, ումեքէ, իմիք, իւիք, իրիք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Spec
    <ul>
      <li>ADV: ուրեմն, երբեմն, իմն</li>
      <li>DET: մի, ոմն, ոմանք, ուրումն, միում, իմն, միով, միոյ, միոջ, ոմանս</li>
      <li>PRON: ոմանք, ոմն, ոմանս, ոմանց, ումեմն, ոք, իմն, ուրումն</li>
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
      <li>AUX-Fin: է, էր, իցէ, եին, են, եմ, ես, էք, իցեն, լինիցի</li>
      <li>VERB-Fin: ասէ, ասեն, ասեմ, ասեին, գայ, ասէր, ծնանի, կայր, գիտեմ, գիտէք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: եղեւ, եղիցի, եղեն, լիցի, եղիցին, լիցին, լերուք, եղերուք, լեր, եղիջիք</li>
      <li>VERB-Fin: ետ, եկն, ասաց, ել, ետես, առաքեաց, արար, գնաց, տեսին, ծնաւ</li>
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
      <li>AUX-Fin: է, էր, եղեւ, եին, են, եմ, ես, էք, եղեն, լինի</li>
      <li>VERB-Fin: ասէ, ետ, ասեն, ասեմ, ասեին, եկն, ասաց, գայ, ասէր, ել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: իցէ, եղիցի, իցեն, լինիցի, լիցի, եղիցին, իցեմ, լիցին, եղիջիք, իցես</li>
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
      <li>AUX-Fin: էր, եղեւ, եին, եղեն, եի, լինէր, եիր, լինեին, ետ, եր</li>
      <li>AUX-Part: լեալ, եղեալ, լիեալ, եղելոյ, եղեալս, եղելոց, տուեալ</li>
      <li>VERB-Fin: ետ, ասեին, եկն, ասաց, ել, ետես, առաքեաց, ասէր, արար, գնաց</li>
      <li>VERB-Part: եկեալ, առեալ, մատուցեալ, գրեալ, ելեալ, յարուցեալ, մտեալ, տեսեալ, մեռելոց, թողեալ</li>
      <li>VERB-Vnoun: աւհրնել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: է, են, եմ, ես, էք, լինի, եմք, լինին, իցէ, տայ</li>
      <li>VERB-Fin: ասէ, ասեն, ասեմ, գայ, ծնանի, գիտեմ, գիտէք, կարէ, առնէ, երթամ</li>
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
      <li>VERB-Fin: ուսուցանէր, կեցուցին, մատուցին, կացոյց, հատուսցէ, մատո, յարոյց, գայթագղեցուսցէ, ապրեցուսցէ, գայթագղեցուցանէ</li>
      <li>VERB-Inf: ապրեցուցանել, ուսուցանել, կեցուցանել, հատուցանել, յարուցանել, նստուցանել, արդարացուցանել, բազմեցուցանել, դարձուցանել, թագաւորեցուցանել</li>
      <li>VERB-Part: թաւալեցուցեալ, մատուցեալ, իջուցեալ, խոնարհեցուցեալ, զարթուցեալ, հնազանդեցուցեալ, մատուցելոց, յանցուցեալ, ուսեալ, ուսեալք</li>
      <li>VERB-Vnoun: դադարեցուցանել, դարձուցանելով, հանգուցանել, հատուցանելոյ, մոլորեցուցանել, մոլորեցուցանելոյ, յագեցուցանել, ուսուցանել, ուսուցանելով</li>
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
      <li>AUX-Fin: եղիցի, լինիցի, լիցի, եղիցին, լինի, լիցին, լերուք, եղերուք, լինին, լինիցին</li>
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
      <li>ADP: այսր, անդր</li>
      <li>ADV: անդ, նոյնպէս, աստ, այսպէս, այնպէս, անտի, անդրէն, այսր, անդր, աստի</li>
      <li>DET: այս, այն, այնմիկ, այսմիկ, այդ, այնորիկ, այսմ, այնմ, այնոսիկ, այսորիկ</li>
      <li>INTJ: ահաւասիկ, աւասիկ, ահաւանիկ, ահաւադիկ, աւադիկ, աւանիկ</li>
      <li>PRON: նա, նորա, նոսա, նմա, նոցա, այս, նոքա, նմանէ, այն, սա</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: ուր, ուստի, երբ, զիարդ, ինչ, ընդէր, զի, ընդէ՛ր</li>
      <li>DET: ոմն, ինչ, ոք, ոմանք, ուրումն, զինչ, ոմանս, ոմանց, ումեմնէ</li>
      <li>PRON: ինչ, ոք, զինչ, ոմանք, ոմն, ումեք, ո, ով, ոյր, զի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: զիարդ, ընդէր, զի, ուր, ուստի, երբ, որչափ, որպէս, ինչ</li>
      <li>DET: որ, զինչ, որով, որոյ, որոց</li>
      <li>PRON: զինչ, ո, ով, զի, ում, իւ, ոյր, որս, ումէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: իւրում, իմոյ, իւրոց, իւրոյ, իմմէ, ձերոց, քում, քոց, քումմէ, իմոց</li>
      <li>PRON: ձեզ, իմ, իս, քո, ես, իւր, քեզ, դու, դուք, ձեր</li>
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
      <li>DET: որ, որմէ, որով, որում</li>
      <li>PRON: որ, որում, որոյ, որոց, որք, որս, որո, որով, որմէ, որովք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: ամենայն, ամենեքին, ամենեցուն, ամենեսին, ամենայնէ, ամենայնի, ամենայնիւ, ամենեքեան, այմենայն</li>
      <li>PRON: ամենայն, ամենեքին, ամենեքեան, ամենեցուն, ամենայնի, ամենեսին, ամենեսեան, ամենեցունց, ամենեքումբք, ամենայնէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: մի, երկուս, հինգ, հարիւր, երկու, եւթն, երիս, երկոտասան, երեսուն, երկուց</li>
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
      <li>ADJ: երրորդ, երիր, երկրորդ, չորրորդ, վեցերորդ, երրորդի, եւթներորդ, իններորդ, մետասաներորդ, եկրորդ</li>
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
      <li>DET: իւրում, իմոյ, իւրոց, իւրոյ, իմմէ, ձերոց, քում, քոց, քումմէ, իմոց</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: իւրում, իւրոց, իւրոյ, իւրմէ, իւր, իւրով, իւրովք, իւրեանց, իրում, իւրս</li>
      <li>PRON: իւր, ինքն, իւրեանց, իւրեանս, իւրեւ, իւրոյ, իւրոց, իւրում, ես, ինքեանք</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: եմ, իցեմ, եի, եմք, եաք, եղէց, եղեաք, ետու, էի, իցեմք</li>
      <li>DET: իմոյ, իմմէ, իմոց, մեր, մերոց, իմում, մերոյ, իմ, մերում, իմով</li>
      <li>PRON: իմ, իս, ես, մեզ, ինձ, մեր, մեք, ինէն, մէնջ, ինեւ</li>
      <li>VERB-Fin: ասեմ, գիտեմ, ասացի, երթամ, գիտեմք, եկի, արարից, կամիմ, խաւսեցայ, ունիմ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: ես, էք, լերուք, եղերուք, եղիջիք, իցես, լեր, եիր, իցէք, լինիջիք</li>
      <li>DET: ձերոց, քում, քոց, քումմէ, քո, ձերոյ, ձերմէ, ձերում, քոյ, քով</li>
      <li>PRON: ձեզ, քո, քեզ, դու, դուք, ձեր, քէն, ձէնջ, քեւ</li>
      <li>VERB: երթ, գիտէք, արարէք, երթայք, տուր, տուք, կացէք, ունիք, եկայք, տեսանիցէք</li>
      <li>VERB-Fin: երթ, գիտէք, արարէք, երթայք, տուր, տուք, կացէք, ունիք, եկայք, տեսանիցէք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: է, էր, եղեւ, իցէ, եին, են, եղիցի, իցեն, լինիցի, եղեն</li>
      <li>DET: իւրում, իւրոց, իւրոյ, իւրմէ, իւր, իւրով, իւրովք, իւրեանց, իրում, իւրս</li>
      <li>PRON: իւր, ինքն, իւրեանց, իւրեանս, իւրեւ, իւրոյ, իւրոց, իւրում, ինքեանք, իւրս</li>
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
          <li>ADV: աստ, այսպէս, այսր, աստի, այսուհետեւ, այսպիսի, աստէն</li>
          <li>DET: ս, այս, այսմիկ, այսմ, այսորիկ, այսպիսի, այսոսիկ, այսցանէ, այսոցիկ, այսմանէ</li>
          <li>INTJ: ահաւասիկ, աւասիկ</li>
          <li>PRON: այս, սա, այսորիկ, սմա, այսոսիկ, սորա, այսոցիկ, այսոքիկ, սմանէ, սոքա</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADP: անտի, անդ, անդր</li>
          <li>ADV: անդ, նոյնպէս, այնպէս, անտի, անդրէն, անդր, անդէն, այնուհետեւ, նա</li>
          <li>DET: ն, այն, այնմիկ, այնորիկ, այնմ, այնոսիկ, նմին, նոյն, այնոցիկ, այնմանէ</li>
          <li>INTJ: ահաւանիկ, աւանիկ</li>
          <li>PRON: նա, նորա, նոսա, նմա, նոցա, նոքա, նմանէ, այն, նոցանէ, այնորիկ</li>
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
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: եմ, լինիմ, չիք.</li>
</ul>

<ul>
<li>This corpus uses 2 lemmas as auxiliaries (<a>aux</a>). Examples: եմ, լինիմ.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Conv--NOUN-Nom (7)</li>
      <li>VERB-Conv--PRON-Nom (40)</li>
      <li>VERB-Fin--NOUN-Nom (1257)</li>
      <li>VERB-Fin--PRON-Nom (1689)</li>
      <li>VERB-Inf--NOUN-Nom (6)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Part--NOUN-Acc (3)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Part--NOUN-Nom (115)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Nom (88)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc-ADP(զ) (1)</li>
      <li>VERB-Conv--NOUN-Acc (1)</li>
      <li>VERB-Conv--NOUN-Acc-ADP(զ) (1)</li>
      <li>VERB-Conv--PRON-Acc (1)</li>
      <li>VERB-Conv--PRON-Acc-ADP(զ) (24)</li>
      <li>VERB-Fin--NOUN-Acc (890)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(զ) (1159)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(զ) (4)</li>
      <li>VERB-Fin--PRON-Acc (176)</li>
      <li>VERB-Fin--PRON-Acc-ADP(զ) (1398)</li>
      <li>VERB-Fin--PRON-Gen-ADP(զ) (1)</li>
      <li>VERB-Inf--NOUN-Acc (99)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(զ) (148)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(զ)-ADP(զ) (2)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(ի) (1)</li>
      <li>VERB-Inf--PRON-Acc (21)</li>
      <li>VERB-Inf--PRON-Acc-ADP(զ) (112)</li>
      <li>VERB-Inf--PRON-Gen-ADP(զ) (1)</li>
      <li>VERB-Part--NOUN-Acc (68)</li>
      <li>VERB-Part--NOUN-Acc-ADP(զ) (88)</li>
      <li>VERB-Part--NOUN-Acc-ADP(ի) (2)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Acc (5)</li>
      <li>VERB-Part--PRON-Acc-ADP(զ) (54)</li>
      <li>VERB-Vnoun--NOUN-Acc (1)</li>
      <li>VERB-Vnoun--NOUN-Acc-ADP(զ) (1)</li>
      <li>VERB-Vnoun--PRON-Acc-ADP(զ) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Conv--PRON-Dat (1)</li>
      <li>VERB-Fin--NOUN-Dat (164)</li>
      <li>VERB-Fin--PRON-Dat (893)</li>
      <li>VERB-Inf--NOUN-Dat (42)</li>
      <li>VERB-Inf--PRON-Dat (60)</li>
      <li>VERB-Part--NOUN-Dat (8)</li>
      <li>VERB-Part--PRON-Dat (37)</li>
      <li>VERB-Vnoun--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 10 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: գնել իւրեանց, անկանել իւրեանց, ապրեցուցանել ինքն, առնուլ իւր, ասել իւրեանց, ընկենուլ ինքն, թուել ինձ, հանել իւր, հատանել իւրս, սիրել իւրս</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>aux:caus</a>, <a>compound:redup</a>, <a>csubj:caus</a>, <a>csubj:pass</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
