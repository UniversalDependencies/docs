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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhy_bsut29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: fiction, legal, news, nonfiction

Questions, comments?
General annotation questions (either Armenian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Armenian-BSUT/issues).
If you want to collaborate, please contact [myavrum&nbsp;(æt)&nbsp;ysu&nbsp;•&nbsp;am].
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

[ADJ](hy_bsut-pos-ADJ.html) – [ADP](hy_bsut-pos-ADP.html) – [ADV](hy_bsut-pos-ADV.html) – [AUX](hy_bsut-pos-AUX.html) – [CCONJ](hy_bsut-pos-CCONJ.html) – [DET](hy_bsut-pos-DET.html) – [INTJ](hy_bsut-pos-INTJ.html) – [NOUN](hy_bsut-pos-NOUN.html) – [NUM](hy_bsut-pos-NUM.html) – [PART](hy_bsut-pos-PART.html) – [PRON](hy_bsut-pos-PRON.html) – [PROPN](hy_bsut-pos-PROPN.html) – [PUNCT](hy_bsut-pos-PUNCT.html) – [SCONJ](hy_bsut-pos-SCONJ.html) – [VERB](hy_bsut-pos-VERB.html) – [X](hy_bsut-pos-X.html)

## Features

[Abbr](hy_bsut-feat-Abbr.html) – [AdpType](hy_bsut-feat-AdpType.html) – [Animacy](hy_bsut-feat-Animacy.html) – [Aspect](hy_bsut-feat-Aspect.html) – [Case](hy_bsut-feat-Case.html) – [ConjType](hy_bsut-feat-ConjType.html) – [Connegative](hy_bsut-feat-Connegative.html) – [Definite](hy_bsut-feat-Definite.html) – [Degree](hy_bsut-feat-Degree.html) – [Deixis](hy_bsut-feat-Deixis.html) – [Deixis[psor]](hy_bsut-feat-Deixis-psor.html) – [Foreign](hy_bsut-feat-Foreign.html) – [Hyph](hy_bsut-feat-Hyph.html) – [Mood](hy_bsut-feat-Mood.html) – [NameType](hy_bsut-feat-NameType.html) – [Number](hy_bsut-feat-Number.html) – [Number[psor]](hy_bsut-feat-Number-psor.html) – [NumForm](hy_bsut-feat-NumForm.html) – [NumType](hy_bsut-feat-NumType.html) – [Person](hy_bsut-feat-Person.html) – [Person[psor]](hy_bsut-feat-Person-psor.html) – [Polarity](hy_bsut-feat-Polarity.html) – [Poss](hy_bsut-feat-Poss.html) – [PronType](hy_bsut-feat-PronType.html) – [Reflex](hy_bsut-feat-Reflex.html) – [Style](hy_bsut-feat-Style.html) – [Subcat](hy_bsut-feat-Subcat.html) – [Tense](hy_bsut-feat-Tense.html) – [VerbForm](hy_bsut-feat-VerbForm.html) – [Voice](hy_bsut-feat-Voice.html)

## Relations

[acl](hy_bsut-dep-acl.html) – [acl:relcl](hy_bsut-dep-acl-relcl.html) – [advcl](hy_bsut-dep-advcl.html) – [advcl:relcl](hy_bsut-dep-advcl-relcl.html) – [advmod](hy_bsut-dep-advmod.html) – [advmod:emph](hy_bsut-dep-advmod-emph.html) – [amod](hy_bsut-dep-amod.html) – [appos](hy_bsut-dep-appos.html) – [aux](hy_bsut-dep-aux.html) – [case](hy_bsut-dep-case.html) – [cc](hy_bsut-dep-cc.html) – [ccomp](hy_bsut-dep-ccomp.html) – [compound](hy_bsut-dep-compound.html) – [compound:lvc](hy_bsut-dep-compound-lvc.html) – [compound:redup](hy_bsut-dep-compound-redup.html) – [conj](hy_bsut-dep-conj.html) – [cop](hy_bsut-dep-cop.html) – [csubj](hy_bsut-dep-csubj.html) – [csubj:pass](hy_bsut-dep-csubj-pass.html) – [dep](hy_bsut-dep-dep.html) – [det](hy_bsut-dep-det.html) – [det:poss](hy_bsut-dep-det-poss.html) – [discourse](hy_bsut-dep-discourse.html) – [dislocated](hy_bsut-dep-dislocated.html) – [fixed](hy_bsut-dep-fixed.html) – [flat](hy_bsut-dep-flat.html) – [flat:name](hy_bsut-dep-flat-name.html) – [flat:range](hy_bsut-dep-flat-range.html) – [iobj](hy_bsut-dep-iobj.html) – [mark](hy_bsut-dep-mark.html) – [nmod](hy_bsut-dep-nmod.html) – [nmod:npmod](hy_bsut-dep-nmod-npmod.html) – [nmod:poss](hy_bsut-dep-nmod-poss.html) – [nsubj](hy_bsut-dep-nsubj.html) – [nsubj:pass](hy_bsut-dep-nsubj-pass.html) – [nummod](hy_bsut-dep-nummod.html) – [obj](hy_bsut-dep-obj.html) – [obl](hy_bsut-dep-obl.html) – [orphan](hy_bsut-dep-orphan.html) – [parataxis](hy_bsut-dep-parataxis.html) – [punct](hy_bsut-dep-punct.html) – [root](hy_bsut-dep-root.html) – [vocative](hy_bsut-dep-vocative.html) – [xcomp](hy_bsut-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 124 sentences, 3166 tokens and 3184 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 624 tokens (20%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
<li>This corpus contains 18 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 10 types of multi-word tokens. Examples: ի՞նչ, ո՛չ, արդյո՞ք, ո՛րը, և՛, Չե՞ք, ա՛յ, զգո՛ւյշ, կա՛, տեսա՞ք.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 9 word types tagged as particles (PART): Իրոք, ահա, այնուամենայնիվ, արդյոք, բնականաբար, թե, նույնիսկ, ոչ, որ</li>
</ul>

<ul>
<li>This corpus contains 18 lemmas tagged as pronouns (PRON): ամենը, այլն, այն, բոլորը, դա, դուք, ես, ինչ, ինքը, իրար, մեկը, մենք, նա, նույնը, ով, որ, սա, սաղը</li>
</ul>

<ul>
<li>This corpus contains 20 lemmas tagged as determiners (DET): ամբողջ, ամեն, այդ, այլ, այն, այնպիսի, այս, բոլոր, ինչ, ինքը, մենք, մի, յուրաքանչյուր, նա, նույն, ողջ, որոշ, որևէ, սույն, քանի</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as PRON and sometimes as DET: այն, ինչ, ինքը, մենք, նա</li>
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
    <li>VERB: արտասանելիս</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: է, են, չի, չէ, էին, չեն, ենք, էր, եմ, չէին</li>
    <li>VERB: կա, չկա, լինի, կան, չգիտի, Ավելացնենք, անցկացվեց, առնեն, ասաց, ասացի</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: բերելու, լուծելու, հավատալ, անել, բարձրացնել, լուծել, համոզել, ներկայացնել, շահարկել, շահել</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: եղել</li>
    <li>VERB: ուզում, ասում, հավատում, պահանջում, ակնկալում, անում, ասել, զրկում, հայտարարում, հաստատում</li>
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
      <li>NOUN: Տեր, ահաբեկիչների, նախագահ, ռուս, ժողովրդի, մարդկանց, ուրվական, գերիների, խաղաղապահներին, հեղափոխական</li>
      <li>PROPN: Նիկոլ, Լևոն, Ռոբերտ, Մինասյանը, Փաշինյանը, Սերժ, Փաշինյանի, Քոչարյանը, Լավրովի, Պետրոսյանը</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nhum
    <ul>
      <li>NOUN: անգամ, երկիրը, երկրի, ԱԳ, ի, վրեժ, գործարքի, երկրում, իշխանափոխությունը, կոմբինատի</li>
      <li>PROPN: Իրանի, Հայաստանի, ՀՀ, Բաքուն, Ռուսաստանի, Արցախը, Արցախի, Զանգեզուրի, Ղարաբաղ, Մոսկվան</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Coll
    <ul>
      <li>NOUN: վրեժ, մուռ, ներկայության, Անցյալի, Պատասխանատվությունից, ազգուտակի, աճապարանքով, անաչառություն, անբերրիության, անհեռանկարայնության</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Fin: են, էին, չեն, ենք, չէին, Չեք, ունեին</li>
      <li>DET: մեր, իրենց, նրանց</li>
      <li>NOUN: ահաբեկիչների, տարիներ, մարդկանց, սխալների, տարիների, բանակցություններ, գերիների, գործողությունների, ժամանակներում, իշխանությունների</li>
      <li>PRON: մեզ, որոնք, դրանց, իրենք, ձեզ, մենք, նրանց, նրանցից, նրանք, որոնց</li>
      <li>VERB-Fin: կան, Ավելացնենք, առնեն, ասենք, արթնանանք, գիտեն, եղեք, ընդունեցին, խլենք, կաշխատեն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX-Fin: է, չի, չէ, էր, եմ, չէր, կլինի, չեմ, չես</li>
      <li>DET: իր, նրա</li>
      <li>NOUN: Տեր, անգամ, երկիրը, երկրի, ԱԳ, ի, գործարքի, երկրում, իշխանափոխությունը, կոմբինատի</li>
      <li>PRON: ինչ, դրա, ինքը, նա, որի, սա, դա, ինքն, իրեն, ով</li>
      <li>PROPN: Իրանի, Հայաստանի, Նիկոլ, Լևոն, Ռոբերտ, ՀՀ, Մինասյանը, Փաշինյանը, Բաքուն, Ռուսաստանի</li>
      <li>VERB-Fin: կա, չկա, լինի, չգիտի, անցկացվեց, ասաց, ասացի, արեց, գնաց, դրեց</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>NOUN: կողմից, Հեղափոխությունից, Պատասխանատվությունից, այցից, անսովորությունից, անցյալից, ապագայից, աջից, բանակից, բանից</li>
      <li>PRON: դրանից, նրանցից, ումից, նրանից</li>
      <li>PROPN: Պետրոսյանից, Ռուսաստանից</li>
      <li>VERB-Inf: բարձրացնելուց, կորցնելուց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: երկրի, ի, ահաբեկիչների, գործարքի, կոմբինատի, հաղթանակի, պատերազմի, պետության, ռեժիմի, ժողովրդի</li>
      <li>PRON: որի, իրեն, մեզ, դրանց, ձեզ, նրանց, որոնց, բոլորին, ինձ, ինչի</li>
      <li>PROPN: Իրանի, Հայաստանի, Ռուսաստանի, Փաշինյանի, Արցախի, Զանգեզուրի, Լավրովի, Պետրոսյանի, Բաքվի, Իրանին</li>
      <li>VERB-Inf: բերելու, լուծելու, Ապշելու, ապահովելու, ապշելուն, բուժելու, դնելու, լղոզելու, լրացնելու, խառնվելու</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>DET: իր, մեր, իրենց, նրա, նրանց</li>
      <li>PRON: դրա, իր, մեկի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>NOUN: պատճառով, ուղղությամբ, աճապարանքով, աչքով, ապառիկով, առաջնորդությամբ, արաղով, բնակչությամբ, դաժանությամբ, զլմներով</li>
      <li>PRON: դրանով</li>
      <li>VERB-Inf: փորձելով, անվանելով, գալով, խաբելով, հայտարարելով, պղծելով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>NOUN: երկրում, ժամանակներում, հարցում, ձևաչափում, շրջանակներում, Սկզբում, Վերևում, ապագայում, ասուլիսում, բակում</li>
      <li>PRON: մեզանում</li>
      <li>PROPN: Արցախում, Իրանում, Լիտվայում, Հայաստանում, Ղարաբաղում, Սոչիում, Ստեփանակերտում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADP: հետը</li>
      <li>NOUN: Տեր, անգամ, երկիրը, ԱԳ, վրեժ, իշխանափոխությունը, նախագահ, ռուս, տարիներ, օր</li>
      <li>PRON: ինչ, ինքը, նա, սա, դա, ինքն, ով, որը, որոնք, բոլորը</li>
      <li>PROPN: Նիկոլ, Լևոն, Ռոբերտ, ՀՀ, Մինասյանը, Փաշինյանը, Բաքուն, Սերժ, Քոչարյանը, Արցախը</li>
      <li>VERB-Inf: լինել, հանելն, հեռանալը, շահելը, ստեղծել, տալը, քաշքշելը, օգտվելը</li>
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
      <li>NOUN: երկիրը, իշխանափոխությունը, խնդիրն, բանակը, բանն, ին, խաղաղապահներին, հանդիպմանը, հաջողություններն, հավանականությունը</li>
      <li>PRON: որը, որն, ինչն, նրան</li>
      <li>PROPN: Մինասյանը, Փաշինյանը, Բաքուն, Քոչարյանը, Արցախը, Մոսկվան, Պետրոսյանը, Քոչարյանն, Աբդուլլահիանը, Իրանը</li>
      <li>VERB-Inf: ապշելուն, հանելն, հեռանալը, շահելը, տալը, քաշքշելը, օգտվելը</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>NOUN: Տեր, անգամ, երկրի, ԱԳ, ի, վրեժ, ահաբեկիչների, գործարքի, երկրում, կոմբինատի</li>
      <li>PRON: ինչ, որի, ինչի, նրանից</li>
      <li>PROPN: Իրանի, Հայաստանի, Նիկոլ, Լևոն, Ռոբերտ, ՀՀ, Ռուսաստանի, Սերժ, Փաշինյանի, Արցախի</li>
      <li>VERB-Inf: բերելու, լուծելու, փորձելով, Ապշելու, անվանելով, ապահովելու, բարձրացնելուց, բուժելու, գալով, դնելու</li>
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
      <li>ADV: ավելի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: կարող, ճիշտ, նոր, օբյեկտիվ, առաջին, զգայուն, հպարտ, մեծ, սխալ, վերջին</li>
      <li>ADV: լավ, հաճախ, շատ, արագ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: ամենամեծ, խոշորագույն, կարևորագույն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: չի, չէ, չեն, չէին, չէր, Չեք, չեմ, չես, չպետք</li>
      <li>AUX-Fin: չի, չէ, չեն, չէին, չէր, Չեք, չեմ, չես</li>
      <li>PART: ոչ</li>
      <li>VERB-Fin: չկա, չգիտի, չարժե, չբացահայտվեց, չերևա, չունի, չվհատվեք</li>
      <li>VERB-Inf: չանվանել, չլինելու</li>
      <li>VERB-Part: չեղած, չունեցող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX: է, են, էին, ենք, էր, եմ, պիտի, կլինի, ունեին, պետք</li>
      <li>AUX-Fin: է, են, էին, ենք, էր, եմ, կլինի, ունեին</li>
      <li>VERB-Conv: արտասանելիս</li>
      <li>VERB-Fin: կա, լինի, կան, Ավելացնենք, անցկացվեց, առնեն, ասաց, ասացի, ասենք, արեց</li>
      <li>VERB-Inf: բերելու, լուծելու, հավատալ, անել, բարձրացնել, լուծել, համոզել, ներկայացնել, շահարկել, շահել</li>
      <li>VERB-Part: կապված, մեռած, ալեկոծված, անցած, առած, ասած, բացառված, բխող, դարձած, եկած</li>
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
      <li>VERB-Part: բխող, ենթարկվող, զբոսնող, թանձրացող, իշխող, ունեցող, չունեցող, պահող, քննադատող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: է, են, չի, չէ, էին, չեն, ենք, էր, եմ, չէին</li>
      <li>VERB-Fin: կա, չկա, կան, չգիտի, արթնանանք, գիտեն, էր, չարժե, չունի</li>
      <li>VERB-Part: ուզում, ասում, հավատում, պահանջում, ակնկալում, անում, զրկում, հայտարարում, հաստատում, հերքում</li>
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
      <li>VERB-Inf: քաշքշելը</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Part: եղել</li>
      <li>VERB-Fin: անցկացվեց, ասաց, ասացի, արեց, գնաց, դրեց, ընդունեցին, կարողացան, հայտարարեց, մեկնեց</li>
      <li>VERB-Part: ասել, այցելել, արել, կապված, մեռած, շփոթել, ալեկոծված, ակտիվացել, անդրադարձել, անցած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB-Conv: արտասանելիս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>AUX-Fin: կլինի</li>
      <li>VERB-Fin: լինի, Ավելացնենք, առնեն, ասենք, եղեք, խլենք, խոսեր, խոսի, կաշխատեն, կապահովի</li>
      <li>VERB-Part: գալու, ասի, զարմացնի, թաքցնի, լուծվելու, հանելու, հարվածի, ներքաշվի, վարելու, ցուցադրելու</li>
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
      <li>VERB-Fin: կաշխատեն, կապահովի, կարձագանքի, կգտնի, կդառնա, կդնի, կլինի, կձեռնարկի, կունենա, կպարզի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: եղեք, տեսեք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: է, են, չի, չէ, էին, չեն, ենք, էր, եմ, չէին</li>
      <li>VERB-Fin: կա, չկա, կան, չգիտի, անցկացվեց, ասաց, ասացի, արեց, արթնանանք, գիտեն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>AUX: պիտի, չպետք, պետք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>VERB-Fin: լինի, Ավելացնենք, առնեն, ասենք, խլենք, խոսեր, խոսի, կարողանա, կողմնորոշվեն, հաղորդի</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: էին, էր, չէին, չէր, ունեին</li>
      <li>VERB-Fin: էր, խոսեր</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>VERB-Fin: անցկացվեց, ասաց, ասացի, արեց, գնաց, դրեց, ընդունեցին, կարողացան, հայտարարեց, մեկնեց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: է, են, չի, չէ, չեն, ենք, եմ, Չեք, կլինի, չեմ</li>
      <li>VERB-Fin: կա, չկա, լինի, կան, չգիտի, Ավելացնենք, առնեն, ասենք, արթնանանք, գիտեն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB-Conv: արտասանելիս</li>
      <li>VERB-Fin: չգիտի, Ավելացնենք, առնեն, ասաց, ասացի, ասենք, արեց, գիտեն, դրեց, ընդունեցին</li>
      <li>VERB-Inf: բերելու, լուծելու, անել, բարձրացնել, լուծել, համոզել, ներկայացնել, շահարկել, շահել, ստեղծել</li>
      <li>VERB-Part: ուզում, ասում, պահանջում, ակնկալում, անում, ասել, հայտարարում, հաստատում, հերքում, պահում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB-Fin: կա, չկա, լինի, կան, արթնանանք, գնաց, եղեք, էր, խոսեր, խոսի</li>
      <li>VERB-Inf: հավատալ, վարվել, Ապշելու, ապշելուն, բարդույթավորվել, գալով, դառնալ, լինել, խառնվելու, խուսափելու</li>
      <li>VERB-Part: հավատում, զրկում, այցելել, գալու, դադարում, երևում, կապված, մեռած, նայում, Ընթանում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: անցկացվեց, քաշքշվել</li>
      <li>VERB-Inf: հայտարարվել</li>
      <li>VERB-Part: բարձրաձայնվում, բացառված, բացատրվում, գնվել, թիրախավորվել, համաձայնեցված, համարվում, համեմված, հանձնվել, ներկայացվում</li>
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
      <li>ADV: Այսպես, այնպես, այդպես, այստեղ</li>
      <li>DET: այդ, այս, այն, նույն, այնպիսի, սույն</li>
      <li>PRON: այն, դրա, սա, դա, դրանից, դրանց, դրանով, դրանք, նույնն, սրանց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: իր, իրենց</li>
      <li>PRON: ինքը, ինքն, իրեն, իր, իրենք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: որևէ, այլ, քանի, որոշ</li>
      <li>PRON: այլն, մեկն, ինչ, մեկի, մեկիս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: ինչու, ինչպես, ինչի</li>
      <li>DET: ինչ</li>
      <li>PRON: ով, ինչ, որը, ումից, ինչի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: մեր, նրա, նրանց</li>
      <li>PRON: նա, մեզ, ձեզ, մենք, նրանց, նրանցից, նրանք, ինձ, մեզանում, նրան</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: իրար</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: երբ, որքան, ոնց</li>
      <li>PRON: որի, ինչ, որոնք, որը, որն, որոնց, ինչն, ովքեր</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: բոլոր, ամեն, ողջ, ամբողջ, յուրաքանչյուր</li>
      <li>PRON: բոլորը, ամենը, բոլորին, սաղին</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: մի, 2008, 9, երկու, 1, 10, 12, 16, 1991, 1998</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: առաջին, երկրորդ, երրորդ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: իր, մեր, իրենց, նրա, նրանց</li>
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
      <li>PRON: իրեն, իր</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: եմ, չեմ</li>
      <li>DET: մեր</li>
      <li>PRON: մեզ, մենք, ինձ, մեզանում</li>
      <li>VERB-Fin: Ավելացնենք, ասացի, ասենք, արթնանանք, խլենք, սատկացնենք, վերադարձնենք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: Չեք, չես</li>
      <li>PRON: ձեզ</li>
      <li>VERB-Fin: եղեք, չվհատվեք, տեսաք, տեսեք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: է, են, չի, չէ, էին, չեն, ենք, էր, չէին, չէր</li>
      <li>DET: իր, իրենց, նրա, նրանց</li>
      <li>PRON: ինքը, նա, ինքն, իրեն, իր, իրենք, նրանց, նրանցից, նրանք, նրան</li>
      <li>VERB-Fin: կա, չկա, լինի, կան, չգիտի, անցկացվեց, առնեն, ասաց, արեց, գիտեն</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>NOUN: քթներից</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: կնոջս</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: ԱԳ, թ, ԶԼՄ, ԶՈՒ, զլմներով</li>
          <li>PROPN: ՀՀ, ՌԴ, ԵԱՀԿ, ԶՊՄԿ, ԻՌՆԱ, ԼՂՀ, ՄԽ, ՊԲ, ՔՊ</li>
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
          <li>ADP: շնորհիվ</li>
        </ul>
      </li>
      <li>Post
        <ul>
          <li>ADP: համար, հետ, հետո, մասին, վրա, վերաբերյալ, դեմ, միջև, առաջ, մեջ</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: որպես, ի, առանց, ըստ, իբրև, ինչպես, հանուն, մինչև, քան</li>
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
          <li>CCONJ: այլ, նաև, ինչպես, այլև, ապա, եթե</li>
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
          <li>VERB-Part: ասի, զարմացնի, թաքցնի, հարվածի, ներքաշվի</li>
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
          <li>ADV: այդպես</li>
          <li>DET: այդ</li>
          <li>PRON: դրա, դա, դրանից, դրանց, դրանով, դրանք</li>
        </ul>
      </li>
      <li>Prox
        <ul>
          <li>ADV: Այսպես, այստեղ</li>
          <li>DET: այս, սույն</li>
          <li>PRON: սա, սրանց</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADV: այնպես</li>
          <li>DET: այն, նույն, այնպիսի</li>
          <li>PRON: այն, նույնն</li>
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
          <li>NOUN: վերջինիս</li>
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
          <li>PUNCT: :</li>
          <li>X: RT</li>
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
          <li>ADJ: ռուս</li>
          <li>NOUN: ի, ին, ն, ականների, ը, ից, ների</li>
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
          <li>PROPN: ԵԱՀԿ, ԶՊՄԿ, ԻՌՆԱ, ՄԽ, ՊԲ, ՔՊ</li>
        </ul>
      </li>
      <li>Geo
        <ul>
          <li>ADJ: Ղարաբաղյան</li>
          <li>PROPN: Իրանի, Հայաստանի, ՀՀ, Բաքուն, Ռուսաստանի, Արցախը, Արցախի, Զանգեզուրի, Ղարաբաղ, Մոսկվան</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>PROPN: Նիկոլ, Լևոն, Ռոբերտ, Սերժ, Միքայել, Բորիս, Կիոմարս, Ռոման, Սամվել, Վանո</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>PROPN: Մինասյանը, Փաշինյանը, Փաշինյանի, Քոչարյանը, Լավրովի, Պետրոսյանը, Պետրոսյանի, Քոչարյանն, Աբդուլլահիանը, Կարապետյանը</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Digit
        <ul>
          <li>NUM: 2008, 9, 1, 10, 12, 16, 1991, 1998, 2000, 2020</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: առաջին, երկրորդ, երրորդ</li>
          <li>NUM: մի, երկու, մեկ</li>
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
          <li>NOUN: կնոջս</li>
          <li>PRON: մեկիս</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>NOUN: քթներից</li>
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
          <li>ADJ: դեպ, մեծն</li>
          <li>NOUN: տեղի, ուշի, ուշով</li>
        </ul>
      </li>
      <li>Coll
        <ul>
          <li>ADV: ինչի, ոնց</li>
          <li>NOUN: արաղով, մեսիջը, մեսիջներ, շեֆի, պիլոտաժ, օպերացիան</li>
        </ul>
      </li>
      <li>Slng
        <ul>
          <li>NOUN: կռուտիտ, ճշտով, պատադաջումն</li>
        </ul>
      </li>
      <li>Vrnc
        <ul>
          <li>NOUN: մուռ</li>
          <li>VERB-Inf: լղոզելու</li>
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
          <li>VERB-Fin: կա, չկա, լինի, կան, անցկացվեց, արթնանանք, գնաց, եղեք, էր, խոսեր</li>
          <li>VERB-Inf: հավատալ, վարվել, Ապշելու, ապշելուն, բարդույթավորվել, գալով, դառնալ, լինել, խառնվելու, խուսափելու</li>
          <li>VERB-Part: հավատում, զրկում, այցելել, գալու, դադարում, երևում, կապված, մեռած, նայում, Ընթանում</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB-Conv: արտասանելիս</li>
          <li>VERB-Fin: չգիտի, Ավելացնենք, առնեն, ասաց, ասացի, ասենք, արեց, գիտեն, դրեց, ընդունեցին</li>
          <li>VERB-Inf: բերելու, լուծելու, անել, բարձրացնել, լուծել, համոզել, ներկայացնել, շահարկել, շահել, ստեղծել</li>
          <li>VERB-Part: ուզում, ասում, պահանջում, ակնկալում, անում, ասել, հայտարարում, հաստատում, հերքում, պահում</li>
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
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: եմ, լինել, պետք, պիտի, ունեմ.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Nom (22)</li>
      <li>VERB-Fin--PRON-Nom (11)</li>
      <li>VERB-Inf--NOUN-Nom (2)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--NOUN-Nom (52)</li>
      <li>VERB-Part--PRON (2)</li>
      <li>VERB-Part--PRON-Nom (18)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN-Nom (1)</li>
      <li>VERB-Fin--NOUN-Nom (6)</li>
      <li>VERB-Fin--PRON-Dat (3)</li>
      <li>VERB-Fin--PRON-Nom (5)</li>
      <li>VERB-Inf--NOUN-Dat (7)</li>
      <li>VERB-Inf--NOUN-Nom (34)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Part--NOUN-Dat (12)</li>
      <li>VERB-Part--NOUN-Nom (51)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Dat (8)</li>
      <li>VERB-Part--PRON-Nom (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (1)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Inf--NOUN-Dat (3)</li>
      <li>VERB-Part--NOUN-Dat (5)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 2 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: զրկել իրեն, հերքել իրեն</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>advmod:emph</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>flat:name</a>, <a>flat:range</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nsubj:pass</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
