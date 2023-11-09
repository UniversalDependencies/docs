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
Family: Indo-European, Armenian

This treebank has been part of Universal Dependencies since the UD v2.13 release.

The following people have contributed to making this treebank part of UD: Petr Kocharov, Lilit Kharatyan.

Repository: [UD_Classical_Armenian-CAVaL](https://github.com/UniversalDependencies/UD_Classical_Armenian-CAVaL)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udxcl_caval213)<br />
Download all treebanks: [UD 2.13](/#download)

License: CC BY-SA 4.0

Genre: bible

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

The present release includes a sample treebank of the first twelve chapters of the Classical Armenian translation of the Gospel of Luke (12963 tokens in 648 sentences) as part of the UD Classical Armenian-CAVaL treebank project. It results from a conversion of the PROIEL annotation of the Classical Armenian Gospels, then manually corrected and extended with additional information.



The present release includes a sample treebank of the first ten chapters of the Classical Armenian translation of the Gospel of Luke (10616 tokens in 539 sentences) as part of the UD Classical Armenian-CAVaL treebank project. The treebank results from a conversion of the PROIEL annotation of the Classical Armenian Gospels (https://github.com/proiel/proiel-treebank; see Dag T. T. Haug and Marius L. Jøhndal. 2008. 'Creating a Parallel Treebank of the Old Indo-European Bible Translations', in: Caroline Sporleder and Kiril Ribarov (eds.), Proceedings of the Second Workshop on Language Technology for Cultural Heritage Data (LaTeCH 2008) (2008), pp. 27-34). The PROIEL annotation is based on a digitalized version of Beda O. Künzle "Das altarmenische Evangelium" (Bern/Frankfurt am Main/New York: Peter Lang, 1984). The convertion from the PROIEL to UD annotation has been performed using a rule-based convertor developed as part of the "CAVaL: Classical Armenian Valency Lexicon" project, which is carried out at the University of Würzburg and funded by the Deutsche Forschungsgemeinschaft (PI Petr Kocharov, programmer Lilit Kharatyan). The convertion result has been manually corrected, adjusted to the UD annotation scheme, and extended a few with relation subtypes, spelling in the Armenian alphabet and English glosses.

## Acknowledgments

The conversion has been performed by Petr Kocharov and Lilit Kharatyan at the University of Würzburg. We acknowledge the financial support of the Deutsche Forschungsgemeinschaft ("CAVaL: Classical Armenian Valency Lexicon" project, PI Dr. Petr Kocharov). We thank Professor Dr. Dag T. T. Haug and the PROIEL team for the permission to reuse the PROIEL annotation of the Classical Armenian Gospels for the purposes of the UD Classical Armenian-CAVaL treebank. We thank Dr. Daniil Kocharov (Tampere University) for advisory support and programming of the module for the processing of punctuation tokens. We thank Thomas J. Samuelian for the permission to reuse the English glosses of the electronic concordance of the Armenian Bible (https://bible.armeniancathedral.org/).

## Format
UD_Classical_Armenian-CAVaL data conforms to [CoNLL-U](http://universaldependencies.org/format.html) format with the following specifics:
* Sentence-level comments:
* A unique sentence id `sent_id` contains reference to the document title, paragraph and sentence boundaries, e.g. `# sent_id = LUKE_1.1-4` for a sentence, which includes verses from 1 to 4 of the Gospel of Luke.
* The transliteration of the sentence into Latin characters is provided in the `# transliterated_text...` comment.
* The English translation of the sentence, based on the King James Bible, is provided in the `# translated_text...` comment.
* XPOSTAG column is currently unused.
* No enhanced dependencies or empty nodes present in DEPS column.
* MISC column has the following attributes:
* `SpaceAfter=No`;
* `Translit` and `LTranslit` for the transliterations of form and lemma (based on on the transliteration system accepted in the _Revue des Études Arméniennes_);
* `LId` for homonymous lemmas;
* `Gloss` for English glosses of lemmas.


# Statistics of UD Classical Armenian CAVaL

## POS Tags

[ADJ](xcl_caval-pos-ADJ.html) – [ADP](xcl_caval-pos-ADP.html) – [ADV](xcl_caval-pos-ADV.html) – [AUX](xcl_caval-pos-AUX.html) – [CCONJ](xcl_caval-pos-CCONJ.html) – [DET](xcl_caval-pos-DET.html) – [INTJ](xcl_caval-pos-INTJ.html) – [NOUN](xcl_caval-pos-NOUN.html) – [NUM](xcl_caval-pos-NUM.html) – [PART](xcl_caval-pos-PART.html) – [PRON](xcl_caval-pos-PRON.html) – [PROPN](xcl_caval-pos-PROPN.html) – [PUNCT](xcl_caval-pos-PUNCT.html) – [SCONJ](xcl_caval-pos-SCONJ.html) – [VERB](xcl_caval-pos-VERB.html)

## Features

[Animacy](xcl_caval-feat-Animacy.html) – [Aspect](xcl_caval-feat-Aspect.html) – [Case](xcl_caval-feat-Case.html) – [Definite](xcl_caval-feat-Definite.html) – [Mood](xcl_caval-feat-Mood.html) – [Number](xcl_caval-feat-Number.html) – [NumType](xcl_caval-feat-NumType.html) – [Person](xcl_caval-feat-Person.html) – [Polarity](xcl_caval-feat-Polarity.html) – [Poss](xcl_caval-feat-Poss.html) – [PronType](xcl_caval-feat-PronType.html) – [Reflex](xcl_caval-feat-Reflex.html) – [Tense](xcl_caval-feat-Tense.html) – [VerbForm](xcl_caval-feat-VerbForm.html) – [Voice](xcl_caval-feat-Voice.html)

## Relations

[acl](xcl_caval-dep-acl.html) – [advcl](xcl_caval-dep-advcl.html) – [advmod](xcl_caval-dep-advmod.html) – [amod](xcl_caval-dep-amod.html) – [appos](xcl_caval-dep-appos.html) – [aux](xcl_caval-dep-aux.html) – [case](xcl_caval-dep-case.html) – [cc](xcl_caval-dep-cc.html) – [ccomp](xcl_caval-dep-ccomp.html) – [compound](xcl_caval-dep-compound.html) – [compound:redup](xcl_caval-dep-compound-redup.html) – [conj](xcl_caval-dep-conj.html) – [cop](xcl_caval-dep-cop.html) – [csubj](xcl_caval-dep-csubj.html) – [csubj:caus](xcl_caval-dep-csubj-caus.html) – [csubj:outer](xcl_caval-dep-csubj-outer.html) – [det](xcl_caval-dep-det.html) – [discourse](xcl_caval-dep-discourse.html) – [fixed](xcl_caval-dep-fixed.html) – [flat:name](xcl_caval-dep-flat-name.html) – [iobj](xcl_caval-dep-iobj.html) – [mark](xcl_caval-dep-mark.html) – [nmod](xcl_caval-dep-nmod.html) – [nsubj](xcl_caval-dep-nsubj.html) – [nsubj:caus](xcl_caval-dep-nsubj-caus.html) – [nsubj:pass](xcl_caval-dep-nsubj-pass.html) – [nummod](xcl_caval-dep-nummod.html) – [obj](xcl_caval-dep-obj.html) – [obl](xcl_caval-dep-obl.html) – [obl:agent](xcl_caval-dep-obl-agent.html) – [orphan](xcl_caval-dep-orphan.html) – [parataxis](xcl_caval-dep-parataxis.html) – [punct](xcl_caval-dep-punct.html) – [root](xcl_caval-dep-root.html) – [vocative](xcl_caval-dep-vocative.html) – [xcomp](xcl_caval-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 648 sentences, 13437 tokens and 13522 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 3381 tokens (25%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
<li>This corpus contains 85 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 32 types of multi-word tokens. Examples: զի՞նչ, ո՞, զի՞, զիա՞րդ, ո՞վ, ընդէ՞ր, ո՞ւմ, դո՞ւ, ի՞ւ, ո՞ր, Յովսէփա՞յ, Ով, ա՞ւձ, ապրեցուցանե՞լ, ասիցէ՞ք, բարի՞, դանգա՞ց, զարդարեա՞լ, իցէ՞, լինե՞լ, խաղաղութի՞ւն, կամի՞ս, կարի՞ճ, կարիցէ՞, կարո՞ղ, կորուսանե՞լ, շարժո՞ւն, ո՞չ, ո՞ւր, որպէ՞ս, ուստի՞, տեսանե՞ս.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, X</li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): գուցէ, իսկ, մի, ոչ, չ</li>
</ul>

<ul>
<li>This corpus contains 27 lemmas tagged as pronouns (PRON): ամենայն, ամենեքեան, այս, բազում, դա, դոյն, դու, դուք, ես, երեքեան, երկոքեան, զի, զինչ, ինչ, ինքն, իւր, իք, մեք, միմեանք, նա, նոյն, ո, ոմն, ով, որ, ոք, սա</li>
</ul>

<ul>
<li>This corpus contains 24 lemmas tagged as determiners (DET): ամենայն, ամենեքին, այդ, այն, այս, բազում, բիւրաւոր, դ, զ, իմ, ինչ, իւր, իւրաքանչիւր, ձեր, մեր, մի, միայն, ն, ոմն, որ, ոք, ս, սակաւ, քո</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as PRON and sometimes as DET: ամենայն, այս, բազում, ինչ, իւր, ոմն, որ, ոք</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): եմ, լինիմ, չիք</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: գալոց, երթալոց, ծնանելոց, կատարելոց, մատնելոց, մտանելոց</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: է, էր, եղեւ, եին, իցէ, են, եղիցի, ես, էք, լիցի</li>
    <li>VERB: ասէ, ետ, ասեմ, ասեն, ել, արար, եկն, անկաւ, ասեին, գնաց</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: լինել</li>
    <li>VERB: ասել, տալ, տեսանել, առնել, խաւսել, մտանել, կալ, մկրտել, արկանել, բժշկել</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: եղեալ, լեալ, լիեալ</li>
    <li>VERB: յարուցեալ, գրեալ, եկեալ, մտեալ, ելեալ, տեսեալ, անկեալ, թողեալ, անցեալ, առեալ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>AUX: լինել, լինելոյ</li>
    <li>VERB: բժշկել, ելանել, կալ, կատարել, հասանել, մտանել, բուսանել, գալ, գնալ, դիզանել</li>
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
      <li>DET: ոմն</li>
      <li>PRON: ոք, ո, ոմն, ով, ումեք, ում, ոյր, ոմանք, ուրումն, ոմանց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>DET: ինչ</li>
      <li>PRON: զինչ, ինչ, զի, իւ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: այլոց, այլք, ատելեաց, մեղաւորք, չարաց, աղքատաց, առաջնոց, բարիս, բորոտք, կուրաց</li>
      <li>AUX-Fin: եին, են, էք, եղեն, եղիցին, իցեն, լիցին, եղերուք, լերուք, եղեաք</li>
      <li>DET: ամենեսին, իւրոց, ձերոց, ամենեքին, այնոսիկ, այնոցիկ, բազումք, բազմաց, իմոց, մերոց</li>
      <li>NOUN: աղաւթս, աւուրս, բանս, աշակերտս, երկնից, ոտս, աշակերտք, ժողովուրդք, դեւք, ժողովուրդս</li>
      <li>NUM: երկուս, հինգ, երիս, երկոքին, յիսուն, երից, երկոտասան, երկոտասանից, երկոտասանք, երկուց</li>
      <li>PRON: ձեզ, նոսա, նոցա, ձեր, մեզ, դուք, նոցանէ, իւրեանց, նոքա, մեր</li>
      <li>PROPN: Գերգեսացւոց</li>
      <li>VERB-Fin: ասեն, ասեին, լցան, եկին, տեսին, արարէք, առնեին, դարձան, ասէք, գնացին</li>
      <li>VERB-Part: առաքեալս, մեռեալս, առաքեալք, ասացելոց, բաժանեալք, ելեալս, եկելոց, լուցեալք, ծանրացեալք, հաստատելոց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: մեծ, բարի, երանի, սուրբ, չար, նոր, սրբով, բարձրելոյ, լի, միւս</li>
      <li>AUX-Fin: է, էր, եղեւ, իցէ, եղիցի, ես, լիցի, եմ, լինի, լինիցի</li>
      <li>AUX-Part: եղեալ, լեալ, լիեալ</li>
      <li>DET: ամենայն, մի, այս, բազում, որ, այն, իւրոյ, իւրում, քում, այնորիկ</li>
      <li>NOUN: Տէր, որդի, Տեառն, պատասխանի, անուն, տուն, այր, ժողովրդեան, հայր, բան</li>
      <li>NUM: մի, երկու, եւթն, եւթանասուն, ութ, երկոտասան, հարիւր, հինգ, միոյ, միով</li>
      <li>PRON: նա, որ, նորա, նմա, քո, քեզ, իմ, իւր, զինչ, իս</li>
      <li>PROPN: Աստուածոյ, Յիսուս, Աստուած, Յովհաննէս, Մարիամ, Երուսաղեմ, Իսրայեղի, Պետրոս, Սիմովն, Յովհաննու</li>
      <li>VERB-Fin: ասէ, ետ, ասեմ, ել, արար, եկն, անկաւ, գնաց, ետես, գայ</li>
      <li>VERB-Part: յարուցեալ, գրեալ, եկեալ, մտեալ, ելեալ, տեսեալ, անկեալ, թողեալ, անցեալ, առեալ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: առաջնոց, չարաց, այլոց, աջմէ, գիտնոց, իմաստնոց, ծերոց, նորոյ, չարէ, պղծոց</li>
      <li>DET: քումմէ, այնմանէ, իւրոց, այդմանէ, այսմ, իմմէ, իւրմէ, այնմ, այնցանէ, այսցանէ</li>
      <li>NOUN: երկնից, տանէ, ազգէ, ժողովրդենէ, քաղաքէ, ականէ, այսոց, հետէ, մարդոյ, Տեառնէ</li>
      <li>NUM: երից, երկոտասանից, երկուց</li>
      <li>PRON: նմանէ, նոցանէ, ինէն, ձէնջ, քէն, ոմանց, որմէ, որոց, ամենեցունց, դմանէ</li>
      <li>PROPN: Աստուածոյ, Երուսաղեմէ, Աւգոստոս, Գաղիղեէ, Հրէաստանէ, Յիսուսէ, Յորդանանէ, Նազարեթէ, սատանայէ</li>
      <li>VERB-Part: մեռելոց</li>
      <li>VERB-Vnoun: համբուրելոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: բարի, մեծ, նոր, չար, փառաւոր, անապատ, այլ, արժան, արժանի, արտաքին</li>
      <li>DET: ամենայն, մի, այս, ամենեսին, որ, այն, բազում, այդ, այսոսիկ, բազումս</li>
      <li>NOUN: պատասխանի, տուն, անձն, ակն, բանս, աշակերտս, բան, անուն, մէջ, ոտս</li>
      <li>NUM: երկուս, մի, երիս, հինգ, յիսուն, երկոտասան, եւթն, երկոտասանս, եւթանասուն, հարիւր</li>
      <li>PRON: նա, նոսա, որ, իս, զինչ, քեզ, ձեզ, ինչ, մեզ, միմեանս</li>
      <li>PROPN: Աստուած, Յովհաննէս, Երուսաղեմ, Յիսուս, Յակովբոս, Սիմովն, Նազարեթ, Պետրոս, Գաղիղեա, Կափառնաում</li>
      <li>VERB-Part: առաքեալս, եդեալ, մեռեալս, արարեալ, աւծեալ, բժշկեալ, ելեալս, զարդարեալ, զգաստացեալ, զգեցեալ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: այլում, աղքատաց, այլոց, ատելեաց, կուրաց, պղծոյ, երկիւղածաց, կուրի, հիւանդաց, հնոյ</li>
      <li>DET: այնոցիկ, իւրում, քում, այնմիկ, իմոց, իւրոց, ձերոց, ամենայնի, այսմիկ, բազմաց</li>
      <li>NOUN: ժողովրդեան, Տեառն, առն, ծառայի, որդւոյ, սովորութեան, այսոյ, աւրինականաց, աւրինաց, բանի</li>
      <li>PRON: ձեզ, նմա, քեզ, նոցա, ինձ, մեզ, որում, ումեք, ում, սմա</li>
      <li>PROPN: Աբրահամու, Աստուածոյ, Եղիսաբեթի, Իսրայեղի, Յովհաննու, Զաքարիայ, Էղիայի, Մովսէսի, Յիսուսի, Սիդովնի</li>
      <li>VERB-Part: անկելոյ, ասացելոյ</li>
      <li>VERB-Vnoun: հասանելոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: բարձրելոյ, այլոց, սրբոց, ազնուի, ապաշնորհաց, առաջնոյ, ասորւոց, ատելեաց, արդարոց, բարձանց</li>
      <li>AUX-Vnoun: լինելոյ</li>
      <li>DET: իւրոյ, այնորիկ, ամենայնի, այսորիկ, ձերոց, իմոյ, մերոց, այդորիկ, այնոցիկ, այսց</li>
      <li>NOUN: Տեառն, մարդոյ, ժողովրդեան, աշխարհի, Գաղիղեացւոց, աւուրց, բանի, բանից, եղբաւր, երեսաց</li>
      <li>NUM: երեսնից, երից, երկոտասանից, երկուց, միոյ, չորից</li>
      <li>PRON: նորա, քո, իմ, իւր, ձեր, նոցա, իւրեանց, որոյ, մեր, ամենեցուն</li>
      <li>PROPN: Աստուածոյ, Դաւթի, Իսրայեղի, Յովհաննու, Յիսուսի, Հրէաստանի, Սիմովնի, Զաքարիայ, Հէրովդի, Գերգեսացւոց</li>
      <li>VERB-Part: ասացելոց, եկելոց, կորուսելոյ, հաստատելոց</li>
      <li>VERB-Vnoun: ծնանելոյ, ասելոյ, գալոյ, երեւելոյ, լսելոյ, հնանալոյ, սպանանելոյ, վերանալոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: սրբով, մեծաւ, անուշիւ</li>
      <li>DET: իւրով, ամենեքումբք, այնու, բազմաւք, իմով, իւրովք</li>
      <li>NOUN: հոգւով, զաւրութեամբ, իշխանութեամբ, իւղով, ահիւ, արտասուաւք, աւուրբք, բանիւ, իմաստութեամբ, իշխանաւ</li>
      <li>NUM: միով</li>
      <li>PRON: նովաւ, ինեւ, իւ, նոքաւք, որովք, իւիք, իւրեւ, իւրովք, նովին, որով</li>
      <li>PROPN: Բեեղզեբուղաւ, Եղիսեիւ, Մարեմաւ</li>
      <li>VERB-Vnoun: ասելով, դողալով, ցնծալով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: անապատի, արքունիս, բարձունս, երեւելիս, երկրորդ, երկրորդում, երրորդ, հինգետասաներորդի, մեղաւորս, միւս</li>
      <li>DET: այնոսիկ, իւրում, քում, այնմիկ, իմում, միում, ամենեսին, այսմ, այսմիկ, մերում</li>
      <li>NOUN: աղաւթս, աւուրս, ժամու, տան, աւուր, շաբաթու, քաղաքի, միտս, ական, աւրէնս</li>
      <li>NUM: միում</li>
      <li>PRON: նմա, որում, նմին, նոսա, իւրում, իս, ձեզ, նմայ, մեզ, քեզ</li>
      <li>PROPN: Երուսաղեմ, Իսրայեղի, Կափառնաւում, Հրէաստան, Սիդովն, Տիւրոս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: երանի, մեծ, սուրբ, չար, լի, նման, այլք, բաւական, զգոյշ, լաւ</li>
      <li>AUX-Part: եղեալ, լեալ, լիեալ</li>
      <li>DET: ամենայն, մի, բազում, այս, ամենեքին, բազումք, ոմն, այն, որ, այդ</li>
      <li>NOUN: Տէր, որդի, անուն, այր, վարդապետ, հայր, կին, հրեշտակ, մայր, մանուկ</li>
      <li>NUM: երկոքին, երկու, մի, երկոտասանք, երկուք, հինգ, ութ, երեք, երկոտասան, եւթանասուն</li>
      <li>PRON: որ, նա, դու, դուք, ոք, սա, ինքն, ո, զինչ, նոքա</li>
      <li>PROPN: Յիսուս, Մարիամ, Աստուած, Յովհաննէս, Եղիսաբեթ, Պետրոս, Զաքարիա, Մարթա, Սիմովն, Էղիա</li>
      <li>VERB-Conv: գալոց, երթալոց, ծնանելոց, կատարելոց, մատնելոց, մտանելոց</li>
      <li>VERB-Part: յարուցեալ, գրեալ, եկեալ, մտեալ, ելեալ, տեսեալ, անկեալ, թողեալ, անցեալ, առեալ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: զ, ն, դ, ս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Spec
    <ul>
      <li>DET: մի, ինչ, միում, միոյ, միոջ, ոմն</li>
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
      <li>AUX-Fin: է, էր, եին, իցէ, են, ես, էք, եմ, իցեն, լինի</li>
      <li>VERB-Fin: ասէ, ասեմ, ասեն, ասեին, գայ, ասէր, խաւսէր, աղաչէր, առնեին, առնէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: եղեւ, եղիցի, լիցի, եղեն, եղիցին, լիցին, լեր, եղերուք, լերուք, եղեաք</li>
      <li>VERB-Fin: ետ, ել, արար, եկն, անկաւ, գնաց, ետես, եկին, լցան, դարձաւ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: լեր, եղերուք, լերուք, լինիր</li>
      <li>VERB-Fin: արարէք, երթ, ասա, տուր, արի, երկնչիր, տուք, արա, եկ, թող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: է, էր, եղեւ, եին, են, ես, էք, եղեն, եմ, լինի</li>
      <li>VERB-Fin: ասէ, ետ, ասեմ, ասեն, արար, ել, եկն, անկաւ, ասեին, գնաց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: իցէ, եղիցի, լիցի, եղիցին, լիցին, իցեն, լինիցի, իցեմ, եղէց, եղիջիք</li>
      <li>VERB-Fin: եկեցէ, տացէ, ասասջիք, գուցէ, կամիցի, կոչեսցի, մտանիցէք, տայցէ, տացի, տեսցեն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: էր, եղեւ, եին, եղեն, եի, եղեաք, լինէր</li>
      <li>AUX-Part: եղեալ, լեալ, լիեալ</li>
      <li>VERB-Fin: ետ, արար, ել, եկն, անկաւ, ասեին, գնաց, ետես, եկին, լցան</li>
      <li>VERB-Part: յարուցեալ, գրեալ, եկեալ, մտեալ, ելեալ, տեսեալ, անկեալ, թողեալ, անցեալ, առեալ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: է, են, ես, էք, եմ, լինի, է̈, եմք, իցեն, լինին</li>
      <li>VERB-Fin: ասէ, ասեմ, ասեն, գայ, առնէ, լսէ, հանէ, ասէք, լսեն, անարգէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Fin: է, իցէ, են, ես, էք, եղեւ, եմ, իցեն, լեր, է̈</li>
      <li>VERB-Fin: ասէ, ետ, ասեմ, ասեն, ել, արար, եկն, գնաց, ետես, եկին</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB-Fin: կացոյց, մատո, կացուսցէ, կեցուցին, ապրեցուսցէ, արդարացուցին, բազմեցուսցէ, բազմեցուցէք, բազմեցուցին, բարձրացոյց</li>
      <li>VERB-Part: լուցեալ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Fin: եղեւ, եղիցի, լիցի, եղեն, եղիցին, լիցին, լինի, լինիցի, եղերուք, լերուք</li>
      <li>VERB-Fin: անկաւ, լցան, դարձաւ, խաւսէր, յարեաւ, սկսաւ, դարձան, լուաւ, խաւսեցաւ, մերձեցաւ</li>
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
      <li>ADV: անտի, այնպէս, անդրէն, անդ, աստ, նոյնպէս, անդր, այսուհետեւ, այսպէս, այդպէս</li>
      <li>DET: ն, դ, այս, ս, այն, այնորիկ, այդ, այնմիկ, այնոսիկ, այնոցիկ</li>
      <li>INTJ: ահաւասիկ, աւասիկ, ահաւանիկ</li>
      <li>PRON: նա, նորա, նոսա, նմա, նոցա, նմանէ, նոցանէ, սա, նոքա, նմին</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>PRON: ինքն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: ոմն, ոք, ինչ, ոմանք</li>
      <li>PRON: ինչ, ոք, ոմն, ումեք, ոմանք, ուրումն, ոմանց, ուրուք, իւիք, ոմանս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: զիարդ, ընդէր, ուստի</li>
      <li>PRON: զինչ, ո, ով, զի, ում, ոյր, իւ, ումէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: իւրոյ, իւրում, քում, իւրոց, ձերոց, քումմէ, իմոց, իմում, մերոց, իմմէ</li>
      <li>PRON: ձեզ, քո, քեզ, իմ, իւր, ձեր, իս, մեզ, ինձ, դու</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: միմեանս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: որպէս, ուր, որչափ, ուստի, զիարդ</li>
      <li>DET: որ, որմէ</li>
      <li>PRON: որ, որում, որոյ, որոց, որք, որս, զի, որմէ, որո, որովք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: ամենայն, բազում, ամենեսին, ամենայնի, ամենեքին, բազումք, բազմաց, իւրաքանչիւր, բազումս, ամենեքումբք</li>
      <li>PRON: ամենեքեան, ամենեցուն, ամենայն, ամենայնի, ամենեսեան, ամենեցունց, բազմաց, երեցունց, երկոցունց, երկոքեան</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: երկուս, հինգ, մի, երիս, երկոտասան, երկու, եւթն, յիսուն, երից, երկոտասանից</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: երիր, երկրորդ, երկրորդում, երրորդ, հինգետասաներորդի, ութերորդի, վեցերորդ, վեցերորդի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>NUM: երկոքին</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: իւրոյ, իւրում, քում, իւրոց, ձերոց, քումմէ, իմոց, իմում, մերոց, իմմէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: իւրոյ, իւրում, իւրոց, իւրմէ, իւրով, իւրեանց, իւրովք</li>
      <li>PRON: իւր, իւրեանց, ինքն, իւրում, իւրոյ, ինքեանք, իւրեւ, իւրմէ, իւրովք, իւրոց</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: եմ, իցեմ, եի, եղեաք, եղէց, եմք</li>
      <li>DET: իմոց, իմում, մերոց, իմմէ, իմոյ, մերում, իմով, մերոյ</li>
      <li>PRON: իմ, իս, մեզ, ինձ, մեր, ես, ինէն, ինեւ, մեք</li>
      <li>VERB-Fin: ասեմ, ունիմ, գիտեմ, գործեսցուք, եկի, կամիմ, աղաչեմ, առաքեմ, առաքեցայ, գործեցից</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: ես, էք, լեր, եղերուք, լերուք, եղիջիք, եղիցես, լինիր, լիջիք</li>
      <li>DET: քում, ձերոց, քումմէ, քո, ձերմէ, քոյք, քոց</li>
      <li>PRON: ձեզ, քո, քեզ, ձեր, դու, դուք, ձէնջ, քէն</li>
      <li>VERB-Fin: արարէք, երթ, ասա, տուր, ասէք, արի, երկնչիր, տուք, ասասջիք, արա</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: է, էր, եղեւ, եին, իցէ, են, եղիցի, լիցի, եղեն, եղիցին</li>
      <li>DET: իւրոյ, իւրում, իւրոց, իւրմէ, իւրով, իւրեանց, իւրովք</li>
      <li>PRON: իւր, իւրեանց, իւրում, իւրոյ, իւրեւ, իւրմէ, իւրովք, իւրոց</li>
      <li>VERB-Fin: ասէ, ետ, ասեն, արար, ել, եկն, անկաւ, ասեին, գնաց, ետես</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


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
      <li>VERB-Conv--NOUN-Nom (1)</li>
      <li>VERB-Conv--PRON-Nom (6)</li>
      <li>VERB-Fin--NOUN-Nom (220)</li>
      <li>VERB-Fin--PRON-Nom (225)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Part--NOUN-Nom (26)</li>
      <li>VERB-Part--PRON-Gen (7)</li>
      <li>VERB-Part--PRON-Nom (15)</li>
      <li>VERB-Vnoun--NOUN-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--PRON-Acc (1)</li>
      <li>VERB-Fin--NOUN-Acc (308)</li>
      <li>VERB-Fin--NOUN-Loc-ADP(ի) (1)</li>
      <li>VERB-Fin--PRON-Acc (195)</li>
      <li>VERB-Inf--NOUN-Acc (53)</li>
      <li>VERB-Inf--PRON-Acc (17)</li>
      <li>VERB-Part--NOUN-Acc (14)</li>
      <li>VERB-Part--PRON-Acc (9)</li>
      <li>VERB-Part--PRON-Nom-ADP(զ) (1)</li>
      <li>VERB-Vnoun--NOUN-Acc (2)</li>
      <li>VERB-Vnoun--PRON-Acc (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (32)</li>
      <li>VERB-Fin--PRON-Dat (136)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
      <li>VERB-Inf--NOUN-Dat (7)</li>
      <li>VERB-Inf--PRON-Dat (15)</li>
      <li>VERB-Part--NOUN-Dat (4)</li>
      <li>VERB-Part--PRON-Dat (8)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>compound:redup</a>, <a>csubj:caus</a>, <a>csubj:outer</a>, <a>flat:name</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
