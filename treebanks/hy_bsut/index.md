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
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.9 release.

The following people have contributed to making this treebank part of UD: Marat M. Yavrumyan.

Repository: [UD_Armenian-BSUT](https://github.com/UniversalDependencies/UD_Armenian-BSUT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhy_bsut217)<br />
Download all treebanks: [UD 2.17](/#download)

License: CC BY-SA 4.0

Genre: blog, fiction, government, legal, news, nonfiction, web, wiki

Questions, comments?
General annotation questions (either Armenian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Armenian-BSUT/issues).
If you want to collaborate, please contact [marat&nbsp;•&nbsp;yavrumyan&nbsp;(æt)&nbsp;ysu&nbsp;•&nbsp;am].
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

* Marat M. Yavrumyan, Anna S. Danielyan, “Universal Dependencies and the Armenian Treebank.” Herald of the Social Sciences (2): 231-244, 2020. (in Armenian)
* Anna S. Danielyan, Marat M. Yavrumyan, "Verb Complements in the Eastern Armenian Treebanks UD_Armenian-ArmTDP and UD_Armenian-BSUT." Bulletin of Yerevan University B: Philology 15, 3(45): 139-152, 2024. (in Armenian)

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

[Abbr](hy_bsut-feat-Abbr.html) – [AdpType](hy_bsut-feat-AdpType.html) – [Animacy](hy_bsut-feat-Animacy.html) – [Aspect](hy_bsut-feat-Aspect.html) – [Case](hy_bsut-feat-Case.html) – [ConjType](hy_bsut-feat-ConjType.html) – [Connegative](hy_bsut-feat-Connegative.html) – [Definite](hy_bsut-feat-Definite.html) – [Degree](hy_bsut-feat-Degree.html) – [Deixis](hy_bsut-feat-Deixis.html) – [Deixis[psor]](hy_bsut-feat-Deixis-psor.html) – [Echo](hy_bsut-feat-Echo.html) – [ExtPos](hy_bsut-feat-ExtPos.html) – [Foreign](hy_bsut-feat-Foreign.html) – [Hyph](hy_bsut-feat-Hyph.html) – [Mood](hy_bsut-feat-Mood.html) – [NameType](hy_bsut-feat-NameType.html) – [Number](hy_bsut-feat-Number.html) – [Number[psor]](hy_bsut-feat-Number-psor.html) – [NumForm](hy_bsut-feat-NumForm.html) – [NumType](hy_bsut-feat-NumType.html) – [Person](hy_bsut-feat-Person.html) – [Person[psor]](hy_bsut-feat-Person-psor.html) – [Polarity](hy_bsut-feat-Polarity.html) – [Poss](hy_bsut-feat-Poss.html) – [PronType](hy_bsut-feat-PronType.html) – [Reflex](hy_bsut-feat-Reflex.html) – [Style](hy_bsut-feat-Style.html) – [Subcat](hy_bsut-feat-Subcat.html) – [Tense](hy_bsut-feat-Tense.html) – [Typo](hy_bsut-feat-Typo.html) – [VerbForm](hy_bsut-feat-VerbForm.html) – [Voice](hy_bsut-feat-Voice.html)

## Relations

[acl](hy_bsut-dep-acl.html) – [acl:relcl](hy_bsut-dep-acl-relcl.html) – [advcl](hy_bsut-dep-advcl.html) – [advcl:relcl](hy_bsut-dep-advcl-relcl.html) – [advmod](hy_bsut-dep-advmod.html) – [advmod:emph](hy_bsut-dep-advmod-emph.html) – [amod](hy_bsut-dep-amod.html) – [appos](hy_bsut-dep-appos.html) – [aux](hy_bsut-dep-aux.html) – [aux:ex](hy_bsut-dep-aux-ex.html) – [case](hy_bsut-dep-case.html) – [case:loc](hy_bsut-dep-case-loc.html) – [cc](hy_bsut-dep-cc.html) – [ccomp](hy_bsut-dep-ccomp.html) – [compound](hy_bsut-dep-compound.html) – [compound:lvc](hy_bsut-dep-compound-lvc.html) – [compound:redup](hy_bsut-dep-compound-redup.html) – [compound:svc](hy_bsut-dep-compound-svc.html) – [conj](hy_bsut-dep-conj.html) – [cop](hy_bsut-dep-cop.html) – [csubj](hy_bsut-dep-csubj.html) – [csubj:outer](hy_bsut-dep-csubj-outer.html) – [csubj:pass](hy_bsut-dep-csubj-pass.html) – [dep](hy_bsut-dep-dep.html) – [det](hy_bsut-dep-det.html) – [det:poss](hy_bsut-dep-det-poss.html) – [discourse](hy_bsut-dep-discourse.html) – [dislocated](hy_bsut-dep-dislocated.html) – [expl](hy_bsut-dep-expl.html) – [fixed](hy_bsut-dep-fixed.html) – [flat](hy_bsut-dep-flat.html) – [flat:dist](hy_bsut-dep-flat-dist.html) – [flat:frac](hy_bsut-dep-flat-frac.html) – [flat:name](hy_bsut-dep-flat-name.html) – [flat:range](hy_bsut-dep-flat-range.html) – [iobj](hy_bsut-dep-iobj.html) – [iobj:agent](hy_bsut-dep-iobj-agent.html) – [list](hy_bsut-dep-list.html) – [mark](hy_bsut-dep-mark.html) – [nmod](hy_bsut-dep-nmod.html) – [nmod:npmod](hy_bsut-dep-nmod-npmod.html) – [nmod:poss](hy_bsut-dep-nmod-poss.html) – [nsubj](hy_bsut-dep-nsubj.html) – [nsubj:caus](hy_bsut-dep-nsubj-caus.html) – [nsubj:pass](hy_bsut-dep-nsubj-pass.html) – [nummod](hy_bsut-dep-nummod.html) – [obj](hy_bsut-dep-obj.html) – [obl](hy_bsut-dep-obl.html) – [obl:agent](hy_bsut-dep-obl-agent.html) – [orphan](hy_bsut-dep-orphan.html) – [parataxis](hy_bsut-dep-parataxis.html) – [punct](hy_bsut-dep-punct.html) – [reparandum](hy_bsut-dep-reparandum.html) – [root](hy_bsut-dep-root.html) – [vocative](hy_bsut-dep-vocative.html) – [xcomp](hy_bsut-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2523 sentences, 45837 tokens and 46168 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 9008 tokens (20%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 41 types of words that contain both letters and punctuation. Examples: 1-ին, 2-րդ, 3-րդ, 4-րդ, Lragir.am, 19-րդ, 5-րդ, 7-րդ, Media.am, ՀՕ-175-Ն, Պօ՚, 11-րդ, 115-րդ, 20-րդ, 6-րդ, 72-րդ, 88-րդ, 9-րդ, moderator@moj.am, ՀՕ-2-Ն, 12-րդ, 13-րդ, 17-րդ, 1890-ական, 1950-ական, 1960-ական, 234-րդ, 241.2-րդ, 411-րդ, 8.2-րդ, 90-րդ, 91-րդ, application.doc, http://www.azdarar.am, https://gov.am/am/regions/, https://nkrmil.am/, https://www.mil.am/, https://www.redcross.am/, tass.ru, www.gnumner.am, զ/ր</li>
</ul>

<ul>
<li>This corpus contains 331 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 152 types of multi-word tokens. Examples: ի՞նչ, ո՛չ, թե՛, թե՞, ո՞վ, կա՛մ, այո՛, ինչպե՞ս, և՛, ա՛յն, ինչո՞ւ, արդյո՞ք, գիտե՞ք, շա՛տ, սպասի՜, Ի՜նչ, չէ՞, չի՞, Ռու՛բ, Ռու՜բ, ափսո՜ս, ինչի՞, մի՞թե, շա՜տ, ո՛րը, չե՞ս, չե՞ք, քանի՜, Վիլի՛կը, ա՛յս, այսպե՛ս, ավա՜ղ, դո՛ւ, ե՞ս, ե՞րբ, ինչպիսի՞, կարո՞ղ, հա՛մ, հարկադի՛ր, մե՛ր, ո՞ր, ու՞մ, Ա՜յ, Արի՜, Ե՛վ, Երևանո՞ւմ, Զգուշացե՛ք, Զեյթո՞ւն, Թո՜ղ, Իիիիի՞նչ.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 34 word types tagged as particles (PART): Ինչ, ախր, ահա, այնուամենայնիվ, անշուշտ, ավելին, արդյոք, բարեբախտաբար, գեթ, գոնե, գուցե, դժբախտաբար, դիցուք, երևի, էլ, էլի, թե, թեկուզ, թերևս, իհարկե, ինչպես, իրոք, հա, հապա, հիրավի, մի, միգուցե, միթե, յանի, նույնիսկ, ոչ, որ, չէ, ցավոք</li>
</ul>

<ul>
<li>This corpus contains 61 lemmas tagged as pronouns (PRON): ամբողջը, ամենը, այդ, այդպիսի, այլ, այլն, այն, այնինչ, այնպիսի, այնտեղ, այս, այսինչ, այստեղ, այսքան, բոլոր, բոլորը, դա, դու, դուք, դրանք, ես, էդ, էդքան, էն, էս, էստեղ, իիիիինչ, ինչ, ինչորմեկը, ինչորպիսին, ինչպիսի, ինքը, իրար, իրենը, իրենք, մեկը, մենք, մերը, մերոնք, միմյանց, մյուսը, մնացած, յուրաքանչյուրը, նա, նույնը, նրանցը, նրանք, ոմն, ոչինչ, ով, ովքեր, որ, որպիսի, որտեղ, որքան, ուրիշ, ոք, սա, սաղը, սրանք, քանիսը</li>
</ul>

<ul>
<li>This corpus contains 49 lemmas tagged as determiners (DET): ամբողջ, ամեն, ամենայն, այդ, այդպիսի, այլ, այլևայլ, այն, այնպիսի, այնքան, այս, այսինչ, այսպիսի, բոլոր, էդ, էն, էնքան, էս, էստեսակ, իմ, ինչ, ինչպիսի, ինչքան, իր, իրենց, համայն, ձեր, մեկ, մեր, մի, մյուս, մնացած, յուրաքանչյուր, նույն, նրա, նրանց, ողջ, որ, որոշ, որպիսի, որևէ, ուրիշ, ս., սաղ, սույն, տենց, ցանկացած, քանի, քո</li>
</ul>

<ul>
<li>Out of the above, 17 lemmas occurred sometimes as PRON and sometimes as DET: այդ, այդպիսի, այլ, այն, այնպիսի, այս, այսինչ, բոլոր, էդ, էն, էս, ինչ, ինչպիսի, մնացած, որ, որպիսի, ուրիշ</li>
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
    <li>VERB: անցնելիս, ծխելիս, կարդալիս, ասելիս, արտասանելիս, գողանալիս, դիտելիս, թարգմանելիս, հանդիպելիս, ձևակերպելիս</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: է, են, էր, չի, էին, ենք, եմ, չէ, չեն, չէր</li>
    <li>VERB: ունի, ասաց, ունեն, չկա, կա, եկավ, կան, կարծես, սկսեց, տվեց</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: լինել, անել, կատարելու, լինելու, տալու, հաստատելու, ներկայացնել, պատմել, տալ, մնալ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: եղել, լինելու, լինում</li>
    <li>VERB: ասում, ուզում, եղել, ունեցող, անում, ասել, կապված, սահմանված, տալիս, նայում</li>
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
      <li>NOUN: ժողովրդի, վարչապետի, տեր, անձանց, մարդիկ, մարդկանց, Սարյանը, վարպետը, վարպետի, հայ</li>
      <li>PROPN: Ջիվանին, Կարինե, Փաշինյանը, Նիկոլ, Նվարդին, Սարյանի, Փաշինյանի, Լևոն, Արտակը, Ղազարոս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nhum
    <ul>
      <li>NOUN: հանրապետության, ի, թվականի, կառավարության, բան, դեպքում, ին, անգամ, ժամանակ, տարի</li>
      <li>PROPN: Հայաստանի, ՀՀ, Հայաստանում, Արցախի, Խոսրովի, Ռուսաստանի, Ադրբեջանի, Իրանի, Հայաստան, Երևան</li>
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
      <li>NOUN: ընթացքում, այսօր, կառավարման, կատարման, անվտանգության, սփյուռքի, պաշտպանության, գոյություն, լիզինգի, ռեժիմի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Fin: են, էին, ենք, չեն, եք, էինք, չենք, չէին, չէինք, չեք</li>
      <li>DET: մեր, իրենց, ձեր, նրանց</li>
      <li>NOUN: ակտերի, անձանց, մարդիկ, մարդկանց, գրողների, վարկերի, տարիներ, տարիների, միջոցառումների, կոմիքսների</li>
      <li>PRON: մենք, որոնք, մեզ, նրանց, դրանց, նրանք, դրանք, դուք, ովքեր, իրենց</li>
      <li>PROPN: Սարյանների, Գոչունյանները, Սարյաններին, Սարոյին, Տալոյանների, Օսկարների</li>
      <li>VERB-Fin: ունեն, կան, տվեք, գիտեք, գիտեն, ունենք, չունեն, սկսեցին, խոսենք, չգիտենք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX-Fin: է, էր, չի, եմ, չէ, չէր, էի, ես, չես, չեմ</li>
      <li>DET: իր, նրա, իմ, քո</li>
      <li>NOUN: հանրապետության, ի, թվականի, կառավարության, բան, դեպքում, ին, անգամ, ը, ժամանակ</li>
      <li>PRON: ես, նա, որը, դա, ինչ, որի, սա, ինձ, իր, իրեն</li>
      <li>PROPN: Հայաստանի, ՀՀ, Հայաստանում, Արցախի, Ջիվանին, Խոսրովի, Ռուսաստանի, Կարինե, Ադրբեջանի, Իրանի</li>
      <li>VERB-Fin: ունի, ասաց, չկա, կա, եկավ, կարծես, սկսեց, տվեց, լինի, եղավ</li>
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
      <li>NOUN: ից, կողմից, թվականից, բերանից, անունից, գրպանից, պատերազմից, տեսանկյունից, ամսից, գետից</li>
      <li>PRON: որից, սրանից, դրանից, իրենից, որտեղից, ամենից, որոնցից, մեզնից, նրանցից, ումից</li>
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
      <li>NOUN: հանրապետության, ի, թվականի, կառավարության, ին, ժողովրդի, ընկերության, վարչապետի, օրենքի, թվականին</li>
      <li>PRON: մեզ, որի, նրանց, ինձ, իրեն, դրանց, նրան, քեզ, դրան, իրենց</li>
      <li>PROPN: Հայաստանի, Արցախի, Խոսրովի, Ռուսաստանի, Ադրբեջանի, Իրանի, Նվարդին, Սարյանի, Փաշինյանի, Թուրքիայի</li>
      <li>VERB-Inf: կատարելու, լինելու, տալու, հաստատելու, ճանաչելու, լուծելու, ապահովելու, ունենալու, ստանալու, ապրելու</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADP: վրայի</li>
      <li>NOUN: հիման, վերջո, հայոց, ծննդյան, Հայորդյաց, Վայոց, գրոց, երգոց, հանգստյան, ներդրումը</li>
      <li>PRON: իր, դրա, նրա, մեկի, մեր, բոլորի, իմ, ամբողջի, ձեր, մյուսի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADP: միջով, մոտով, վրայով, առջևով</li>
      <li>NOUN: նպատակով, պատճառով, միջոցով, բացառությամբ, լեզվով, օրենքով, թվով, որոշմամբ, ուղղությամբ, արտարժույթով</li>
      <li>PRON: դրանով, որով, ինչով, իրենով, որքանով, Այսքանով</li>
      <li>PROPN: Արմենչիկով, Դաղստանով, Մոսկվայով, Նարեկացիով, Սարյանով</li>
      <li>VERB-Inf: տալով, առնելով, ասելով, փորձելով, դառնալով, ելնելով, ընդունելով, թողնելով, ղեկավարվելով, չտալով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADP: հետևում</li>
      <li>NOUN: դեպքում, ընթացքում, թվում, կայքում, կենտրոնում, տարածքում, բանտում, կյանքում, պայմաններում, անվանակարգում</li>
      <li>PRON: որում, մեզանում, դրանում, մեկում, որոնցում</li>
      <li>PROPN: Հայաստանում, Երևանում, Արցախում, Թիֆլիսում, Ճապոնիայում, Թուրքիայում, Մոսկվայում, Ստեփանակերտում, Ֆեյսբուքում, Դուբլինում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADP: մեջը, տակը</li>
      <li>NOUN: բան, անգամ, ը, ժամանակ, տարի, օր, տեր, կառավարությունը, օրը, ն</li>
      <li>PRON: մենք, ես, նա, որը, դա, ինչ, որոնք, սա, ով, մեկը</li>
      <li>PROPN: ՀՀ, Ջիվանին, Կարինե, Փաշինյանը, Նիկոլ, Հայաստան, Երևան, Լևոն, Հայաստանը, Ռուսաստանը</li>
      <li>VERB-Inf: լինելը, տալը, ընդունելը, խոսելը, այրվելը, անելը, անցնելը, ապրելը, ապրելն, ավարտելը</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>NOUN: ին, ը, թվականին, կառավարությունը, օրը, ն, Սարյանը, վարպետը, գործը, կարգը</li>
      <li>PRON: որը, որն, որին, ինչը, ինչն, ինչպիսին, Այնինչը, Էնը, Էսը, այդպիսին</li>
      <li>PROPN: Ջիվանին, Փաշինյանը, Նվարդին, Հայաստանը, Ռուսաստանը, Արտակը, Ռուբենը, Ադրբեջանը, Ռուբենին, Սարոն</li>
      <li>VERB-Inf: լինելը, տալը, ապրելուն, ընդունելը, խոսելը, այրվելը, անելը, անցնելը, ապշելուն, ապրելը</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>NOUN: հանրապետության, ի, թվականի, կառավարության, բան, դեպքում, անգամ, ժամանակ, տարի, ժողովրդի</li>
      <li>PRON: ինչ, որի, որում, ինչի, որից, ոչինչ, որով, ինչով, ինչից, որքանով</li>
      <li>PROPN: Հայաստանի, ՀՀ, Հայաստանում, Արցախի, Խոսրովի, Ռուսաստանի, Կարինե, Ադրբեջանի, Իրանի, Նիկոլ</li>
      <li>VERB-Inf: կատարելու, լինելու, տալու, հաստատելու, տալով, ճանաչելու, առնելով, լուծելու, ապահովելու, ունենալու</li>
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
      <li>ADJ: կարող, մեծ, նոր, հայտնի, շատ, վերջին, առաջին, ընդհանուր, լավ, տարբեր</li>
      <li>ADV: շատ, քիչ, հաճախ, մոտ, լավ, երկար, ճիշտ, արագ, նոր, բաց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: լավագույն, մեծագույն, ամենամեծ, ամենակարևոր, առավելագույն, ամենապարզ, բարձրագույն, լրջագույն, կարևորագույն, նվազագույն</li>
      <li>ADV: առավելագույնը, ամենաակնառուն, ամենագեղեցիկը, ամենաթանկն, ամենակարևորն, ամենաուրախանալին, նվազագույնը</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: չի, չէ, չեն, չէր, չես, չենք, չեմ, չէին, չէինք, չեք</li>
      <li>AUX-Fin: չի, չէ, չեն, չէր, չես, չենք, չեմ, չէին, չէինք, չեք</li>
      <li>PART: ոչ, մի</li>
      <li>VERB-Fin: չկա, չունի, չգիտեմ, չունեն, չգիտենք, չգիտի, չլիներ, չկան, չկար, չունենք</li>
      <li>VERB-Inf: չլինելու, չտալով, չթողնել, Չհասկանալ, Չցանկանալով, չանվանել, չդարձնելով, չդիպչելու, չդնելն, չզգալու</li>
      <li>VERB-Part: չեղած, չվճարված, չնայած, չունեցող, չտանող, Չզեկուցվող, Չվերջացող, չանցած, չարտաբերված, չբխող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX: է, են, էր, էին, ենք, եմ, պիտի, էի, պետք, ես</li>
      <li>AUX-Fin: է, են, էր, էին, ենք, եմ, էի, ես, եք, էինք</li>
      <li>VERB-Fin: ունի, ասաց, ունեն, կա, եկավ, կան, կարծես, սկսեց, տվեց, լինի</li>
      <li>VERB-Inf: լինել, անել, կատարելու, լինելու, տալու, հաստատելու, ներկայացնել, պատմել, տալ, մնալ</li>
      <li>VERB-Part: ունեցող, կապված, սահմանված, նախատեսված, գտնվող, կախված, պայմանավորված, ուղղված, կանգնած, նշված</li>
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
      <li>VERB-Part: ունեցող, գտնվող, ներկայացվող, ապրող, գործող, ընդունող, իրականացնող, հոսող, մշակող, օգտագործվող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dur,Perf
    <ul>
      <li>VERB-Fin: ստեղծեցինք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: է, են, էր, չի, էին, ենք, եմ, չէ, չեն, չէր</li>
      <li>AUX-Part: լինում</li>
      <li>VERB-Fin: ունի, ունեն, չկա, կա, կան, չունի, գիտեր, գիտեք, ուներ, գիտեն</li>
      <li>VERB-Part: ասում, ուզում, անում, տալիս, նայում, խոսում, հասկանում, փորձում, ներկայացնում, ունենում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp,Iter
    <ul>
      <li>VERB-Part: խնդմնդում, կոխկռճում, տմտմբացնում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter
    <ul>
      <li>VERB-Inf: կծմծել, ճտճտալով, քաշքշելը, քաշքշվել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter,Perf
    <ul>
      <li>VERB-Fin: կտրտվեց, ջարդոտվեցին</li>
      <li>VERB-Part: խառնշտորած, փայլատակած, փորփրել</li>
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
      <li>VERB-Fin: ասաց, եկավ, սկսեց, տվեց, եղավ, տեսավ, դարձավ, զգաց, բացեց, հարցրեց</li>
      <li>VERB-Part: եղել, ասել, կապված, սահմանված, եկել, նախատեսված, արել, դարձել, ունեցել, կախված</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB-Conv: անցնելիս, ծխելիս, կարդալիս, ասելիս, արտասանելիս, գողանալիս, դիտելիս, թարգմանելիս, հանդիպելիս, ձևակերպելիս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>AUX-Fin: լինի, կլինի, լիներ, կլինեինք</li>
      <li>AUX-Part: լինելու</li>
      <li>VERB-Fin: կարծես, լինի, կլինի, կքնես, տվեք, ասես, արի, կանցնի, թող, իմանայի</li>
      <li>VERB-Part: գալու, շարունակելու, գնալու, խոսելու, հանելու, Ընդլայնվելու, անելու, անցնելու, ասելու, բացելու</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: լինի, կլինի, կլինեինք</li>
      <li>VERB-Fin: կլինի, կքնես, կանցնի, կգամ, կգտնի, կդառնա, կերևա, կլիներ, կհոսենք, օգնի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: տվեք, արի, թող, սպասի, եկեք, պատկերացրեք, տուր, Զգուշացեք, Համաձայնեք, ասա</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: է, են, էր, չի, էին, ենք, եմ, չէ, չեն, չէր</li>
      <li>VERB-Fin: ունի, ասաց, ունեն, չկա, կա, եկավ, կան, սկսեց, տվեց, եղավ</li>
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
      <li>AUX-Fin: լիներ, լինի</li>
      <li>VERB-Fin: կարծես, լինի, ասես, իմանայի, խոսենք, չլիներ, առնենք, կարծեմ, կարողանա, Պատասխանենք</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: էր, էին, չէր, էի, էինք, չէին, չէինք, չէի, էիր, լիներ</li>
      <li>VERB-Fin: գիտեր, ուներ, իմանայի, կար, չլիներ, չկար, չուներ, աներ, լիներ, կլիներ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: էիք</li>
      <li>VERB-Fin: ասաց, եկավ, սկսեց, տվեց, եղավ, տեսավ, դարձավ, զգաց, բացեց, հարցրեց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: է, են, չի, ենք, եմ, չէ, չեն, ես, եք, չես</li>
      <li>VERB-Fin: ունի, ունեն, չկա, կա, կան, կարծես, լինի, կլինի, չունի, կքնես</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB-Conv: ծխելիս, կարդալիս, ասելիս, արտասանելիս, գողանալիս, դիտելիս, թարգմանելիս, ձևակերպելիս, ստանալիս, վերցնելիս</li>
      <li>VERB-Fin: ունի, ասաց, ունեն, կարծես, սկսեց, տվեց, չունի, տեսավ, զգաց, բացեց</li>
      <li>VERB-Inf: անել, կատարելու, տալու, հաստատելու, ներկայացնել, պատմել, տալ, տալով, ճանաչելու, ունենալ</li>
      <li>VERB-Part: ասում, ուզում, ունեցող, անում, ասել, տալիս, հասկանում, փորձում, արել, ներկայացնում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB-Fin: Հիշեցնենք, կսովորեցնի, հագցրեց, հիշեցնեմ, հիշեցնեն</li>
      <li>VERB-Inf: հիշեցնել, խոսացնել, խոսեցնել, հագցնել, հիշեցնելով</li>
      <li>VERB-Part: հասկացրել, սովորեցնում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB-Conv: անցնելիս, հանդիպելիս, մոտենալիս</li>
      <li>VERB-Fin: չկա, կա, եկավ, կան, լինի, եղավ, կլինի, դարձավ, կքնես, մտավ</li>
      <li>VERB-Inf: լինել, լինելու, մնալ, աշխատել, նայել, հավատալ, ապրելու, գալ, լինելը, չլինելու</li>
      <li>VERB-Part: եղել, կապված, նայում, եկել, խոսում, գալիս, գնում, գտնվող, դարձել, դառնում</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: հրապարակվեց, տեղադրվի, Թույլատրվեցին, ազատվեց, անտեսվեն, անցկացվեց, արձանագրվեցին, արվեց, բաժանվի, բերվի</li>
      <li>VERB-Inf: մեղադրվել, գրվելուց, երկարաձգվել, ընդգրկվելու, թարգմանվելու, կիրառվել, հայտարարվել, հրատարակվելուց, ճանաչվելուց, մուտքագրվելու</li>
      <li>VERB-Part: սահմանված, նախատեսված, ուղղված, ճանաչվել, նշված, ստեղծվել, բացահայտված, իրականացվում, ներկայացված, պայմանավորված</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>VERB-Inf: լվացվելու</li>
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
      <li>ADV: այստեղ, այսպես, այնքան, այդպես, այնպես, այնտեղ, էնքան, ստեղ, էստեղ, այդտեղ</li>
      <li>DET: այդ, այս, այն, մյուս, նույն, սույն, այնպիսի, այսպիսի, էդ, էս</li>
      <li>PRON: այն, դա, սա, դրանց, դրա, դրանք, դրան, նրա, այդ, այս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: իր, իրենց</li>
      <li>PRON: իր, իրեն, ինքը, ինքն, իրենց, իրենք, իրենից, իրենով, ինքներդ, ինքներս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>DET: Ինչ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: այլ, որևէ, ինչ, որոշ, քանի, մեկ, ուրիշ, այլևայլ, այսինչ</li>
      <li>PRON: մեկը, մեկն, մեկի, այլն, ինչ, մեկին, մեկում, ոք, Այնինչը, մեկից</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: ինչպես, ինչու, որքան, երբ, ուր, ինչքան, ինչի, որտեղ, ոնց</li>
      <li>DET: քանի, ինչ, որ, ինչպիսի, ինչքան</li>
      <li>PRON: ինչ, ով, ում, ինչի, որը, ումից, որն, որտեղից, որքանով, Իիիիինչ</li>
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
      <li>PRON: մենք, ես, նա, մեզ, ինձ, նրանց, նրանք, նրան, քեզ, դուք</li>
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
      <li>ADV: երբ, ինչպես, որտեղ, ինչքան, ուր, որքան, ոնց, ուրկից</li>
      <li>DET: որպիսի</li>
      <li>PRON: որը, որոնք, որի, ինչ, որն, ովքեր, որում, որին, որոնց, ով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: բոլորովին</li>
      <li>DET: ամեն, բոլոր, ամբողջ, ողջ, յուրաքանչյուր, ցանկացած, ամենայն, համայն, սաղ</li>
      <li>PRON: բոլորը, ամենից, բոլորի, բոլորին, բոլորն, բոլորս, ամբողջի, ամենը, ամբողջը, ամբողջն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: երկու, 1, 2, մեկ, 3, 10, մի, 4, 2021, 5</li>
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
      <li>NUM: կես, 6860,8, 7354,7, 0.2, 14,5, 2.9, 23,213.5, 23213.5, 3.5, 300.1</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: առաջին, երկրորդ, 1-ին, երրորդ, րդ, 2-րդ, 3-րդ, 4-րդ, 19-րդ, 5-րդ</li>
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
      <li>DET: մեր, իր, նրա, իրենց, իմ, ձեր, նրանց, քո</li>
      <li>NOUN: Ուժեղները, Ֆորդինը, ադրբեջանցիներինը, ը, ընդդիմադիրներինը, ինը, հայերինը, հայերինն, մտքինը, վերևինի</li>
      <li>PRON: իրենը, մերը, մերոնք, նրանցն</li>
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
      <li>PRON: իր, իրեն, ինքն, իրենց, իրենից, իրենով</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: եմ, էի, էինք, չենք, չեմ, չէինք, չէի, կլինեինք</li>
      <li>DET: մեր, իմ</li>
      <li>PRON: մենք, ես, մեզ, ինձ, մեր, իմ, մեզանում, մեզնից, ինձնից, ինձանից</li>
      <li>VERB-Fin: ասացի, տեսա, իմանայի, ունենք, չգիտեմ, խոսենք, մտածեցի, չգիտենք, առնենք, գիտեմ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: ես, եք, չես, չեք, էիք, էիր</li>
      <li>DET: ձեր, քո</li>
      <li>PRON: քեզ, դուք, դու, ձեզ, ձեր, ձեզնից, քո</li>
      <li>VERB-Fin: կարծես, կքնես, տվեք, ասես, արի, գիտեք, թող, սպասի, եկեք, ունես</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: է, են, էր, չի, էին, ենք, չէ, չեն, չէր, ա</li>
      <li>DET: իր, նրա, իրենց, նրանց</li>
      <li>PRON: նա, նրանց, իր, իրեն, ինքը, նրանք, ինքն, նրան, իրենց, նրա</li>
      <li>VERB-Fin: ունի, ասաց, ունեն, չկա, կա, եկավ, կան, սկսեց, տվեց, լինի</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>NOUN: ձեռքները, մտքներովդ, քթներից</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADP: հետն, մեջը, հետը, մոտը, շուրջն, տակը</li>
      <li>NOUN: եղբայրս, Տղաս, աչքիս, կինս, հայրս, մայրս, տատիս, տատս, գլուխս, խոսքս</li>
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
          <li>ADJ: Ն, Լ, Ա, Էլ, շինմոնտաժային, պետհրատային, սովետակոմկուսական</li>
          <li>DET: ս</li>
          <li>NOUN: թ, մ, հա, կմ, գ, ԱԳ, մլն, ԽՍՀՄ, ԽՍՀ, հեռուստառադիոընկերության</li>
          <li>PROPN: ՀՀ, ՌԴ, ՀԱՊԿ, ԱԺ, ԱՄՆ, Լ, Ա, ԵԱՀԿ, ՀՕ-175-Ն, ԱՍԱԼԱ</li>
          <li>VERB-Part: լրաց, փոփ</li>
          <li>X: CoV, NFT, SARS</li>
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
          <li>ADP: համապատասխան, շնորհիվ, անկախ, հակառակ</li>
        </ul>
      </li>
      <li>Post
        <ul>
          <li>ADP: մասին, համար, հետ, մեջ, վրա, հետո, կողմից, վերաբերյալ, առաջ, դեմ</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: որպես, մինչև, առանց, ըստ, իբրև, ի, դեպի, քան, բացի, հանուն</li>
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
          <li>CCONJ: նաև, այլ, այլև</li>
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
          <li>AUX-Fin: լինի</li>
          <li>VERB-Fin: օգնի, ասի, բերի, գրավի, զարմանա, զարմացնի, թաքցնի, հասկանա, հարվածի, հրապարակի</li>
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
          <li>PRON: դա, դրանց, դրա, դրանք, դրան, այդ, դրանից, դրանով, դրանում, այդպիսին</li>
        </ul>
      </li>
      <li>Prox
        <ul>
          <li>ADV: այստեղ, այսպես, ստեղ, էստեղ, այսքան, էսպես</li>
          <li>DET: այս, սույն, այսպիսի, էս, այսինչ, Էստեսակ, ս</li>
          <li>PRON: սա, այս, սրանից, Սրանք, Էսը, սրա, սրանց, Այսինչ, Այսինչը, Այսքանով</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADV: այնքան, այնպես, այնտեղ, էնքան, էնպես</li>
          <li>DET: այն, նույն, այնպիսի, էն, այնքան, էնքան</li>
          <li>PRON: այն, նրա, նա, նույնն, նրան, Այնինչը, Էնը, այնտեղից, էն, նույնը</li>
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
          <li>PRON: մեկիս</li>
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
          <li>ADJ: լեփ, մոլոր</li>
          <li>INTJ: հայա</li>
          <li>NOUN: մաչիկներ</li>
          <li>X: շուռումուռ</li>
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
          <li>ADP: ի, դեմ</li>
          <li>NOUN: ընթացքում, դեպքում, նպատակով, միջոցով, հիման, բացառությամբ, պատճառով, ժամանակ, շրջանակներում, դրությամբ</li>
          <li>VERB-Part: սկսած</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: ի, ըստ, իբրև, մինչև</li>
          <li>ADV: առավել, որքան, այդպես, ավելի, համարյա, նախ, փոքր, իրոք, հենց, այնքան</li>
          <li>DET: այդ, մի</li>
          <li>NOUN: վերջերս, ժամանակին, Ներկայումս, կողքը, ներկայում</li>
          <li>PART: ոչ</li>
          <li>PRON: այն, էն, ինքն</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>ADV: ինչպես, այնպես, Միայն</li>
          <li>CCONJ: և, կամ, Եվ, այլ</li>
          <li>PART: ոչ</li>
          <li>SCONJ: եթե, ապա</li>
        </ul>
      </li>
      <li>DET
        <ul>
          <li>DET: մի, ինչ, ամեն</li>
          <li>PART: ոչ</li>
          <li>PRON: ինքն</li>
        </ul>
      </li>
      <li>PART
        <ul>
          <li>ADJ: դժվար</li>
          <li>ADP: ի, ընդ, ըստ</li>
          <li>ADV: հազիվ, ոնց, Իսկապես</li>
          <li>CCONJ: Եվ</li>
          <li>DET: մի</li>
          <li>INTJ: դե</li>
          <li>PART: Չէ, Թե</li>
          <li>VERB-Fin: կարծես, ասես, թող, ասենք, կարծեմ, չգիտես</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>DET: ամեն, մի, յուրաքանչյուր</li>
          <li>PART: ոչ</li>
          <li>PRON: ինքն, ինչ, ինչով, իրենք, որտեղից</li>
        </ul>
      </li>
      <li>PROPN
        <ul>
          <li>ADJ: Ղարա</li>
          <li>NOUN: Վայոց</li>
          <li>X: Pegasus, Apple, COVID, Նյու, Cloudflare, Genotek, NSO, Լա, E, Mutt</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADV: ինչպես, միայն, Մենակ, այնպես, հենց, ոնց</li>
          <li>SCONJ: քանի, ուստի</li>
          <li>VERB-Part: չնայած</li>
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
          <li>PUNCT: :, ., `</li>
          <li>SYM: tass.ru</li>
          <li>X: Pegasus, դել, դե, Apple, BBC, COVID, F, Group, dinner, supper</li>
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
          <li>ADJ: րդ, օրյա, ամսյա, մատաղա, տնտեսա</li>
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
          <li>PROPN: ՀԱՊԿ, ԱԺ, ԵԱՀԿ, ՍիվիլՆեթը, Լուիզիանա, Լուիզիանայի, ՀՀԿ, ՊՈԱԿ, ԱԱԾ, ԱՔՐԱ</li>
        </ul>
      </li>
      <li>Geo
        <ul>
          <li>ADJ: ամերիկյան, համամիութենական, թուրքական, հայաստանյան, ճապոնական, խորհրդային, Ղարաբաղյան, եվրոպական, ուկրաինական, Արարատյան</li>
          <li>NOUN: ԽՍՀՄ, Ղազախստանում, ԽՍՀ, Այգուտի, Ամերիկայի, Ղազախստան</li>
          <li>PROPN: Հայաստանի, ՀՀ, Հայաստանում, Արցախի, Ռուսաստանի, Ադրբեջանի, Իրանի, Հայաստան, Երևան, Թուրքիայի</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>PROPN: Խոսրովի, Կարինե, Նիկոլ, Նվարդին, Լևոն, Արտակը, Ղազարոս, Մարտիրոս, Ռոբերտ, Ռուբենը</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>PROPN: Կրեմլի, ԱՍԱԼԱ, Եվրատեսիլը, Կապիտոլիումը, Ավանգարդ, Եվրատեսիլ, Եվրատեսիլի, Եվրատեսիլում, Զվարթնոց, Խոջիվանքի</li>
        </ul>
      </li>
      <li>Pat
        <ul>
          <li>PROPN: Ստեփանի, Ի, Լազարևնան, Մարտիրոսովիչի</li>
        </ul>
      </li>
      <li>Pro
        <ul>
          <li>PROPN: ֆեյսբուքի, Օսկար, Ժամանակ, Բայրաղթար, ՀՕ-175-Ն, Ֆեյսբուքում, Գլոբուսի, ՀՕ-2-Ն, Ֆեյսբուքը, Ազգ</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: Ջիվանին, Կոմիտասի, Նարեկացու, Խորենացու, Չարենց, Չարենցը, Ջիվանի, Ջիվանու, Ցկուտըլցու, Նասրեդինի</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>NOUN: Սարյանը, Գոչունյանն, Լիանկեն, Ներուդայից, Պասկևիչյան</li>
          <li>PROPN: Փաշինյանը, Սարյանի, Փաշինյանի, Պետրոսյանի, Սարյանների, Թոբինը, Տիտանյանի, Քուշները, Ալումյանը, Թոբինի</li>
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
          <li>NUM: ԺԳ, ա, բ, գ</li>
        </ul>
      </li>
      <li>Combi
        <ul>
          <li>ADJ: 1-ին, րդ, 2-րդ, 3-րդ, 4-րդ, օրյա, 19-րդ, 5-րդ, 7-րդ, ամսյա</li>
          <li>NOUN: ամյակը, ամյակն</li>
        </ul>
      </li>
      <li>Digit
        <ul>
          <li>NUM: 1, 2, 3, 10, 4, 2021, 5, 15, 16, 11</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>ADJ: I, II, VII</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: առաջին, երկրորդ, երրորդ, հինգերորդ, յոթերորդ, չորրորդ</li>
          <li>NUM: երկու, մեկ, մի, երեք, հինգ, չորս, կես, վեց, յոթ, տասը</li>
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
          <li>NOUN: եղբայրս, Տղաս, աչքիս, կինս, հայրս, մայրս, տատիս, տատս, գլուխս, խոսքս</li>
          <li>PRON: բոլորս, բոլորիս, ինքներս</li>
          <li>VERB-Inf: մեռնելուցս, մեռնելս</li>
          <li>VERB-Part: հարուցածս</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>NOUN: վախերդ, անցյալդ, գլխիդ, երիտասարդիդ, երկիրդ, զգայարաններդ, կյանքդ, ձեռքիդ, միջույքդ, մտքիդ</li>
          <li>PRON: բոլորիդ, ինքներդ</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADP: հետն, մեջը, հետը, մոտը, շուրջն, տակը</li>
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
          <li>ADP: ընդ, հօգուտ</li>
          <li>ADV: ցայսօր, հավիտենից</li>
          <li>DET: ամենայն</li>
          <li>NOUN: հիման, տեղի, վերջո, հայոց, ծննդյան, աստծո, Հայորդյաց, Վայոց, բնե, գրոց</li>
          <li>PRON: այլն, այլք, իս</li>
        </ul>
      </li>
      <li>Coll
        <ul>
          <li>ADJ: լիքը, Ղարա, գժական</li>
          <li>ADP: տեղ</li>
          <li>ADV: ոնց, ավել, էնքան, ստեղ, էստեղ, ինչի, էդքան, էնպես, էսօր, լիքը</li>
          <li>AUX-Fin: ա</li>
          <li>CCONJ: համ</li>
          <li>DET: էդ, էս, էն, տենց, Էստեսակ, էնքան, մնացած, սաղ</li>
          <li>INTJ: հա</li>
          <li>NOUN: չուլքու, բոզի, տատու, մերը, շպռոտի, չաստերում, չաստի, չուլքիի, ջանը, օպերացիան</li>
          <li>NUM: տաս</li>
          <li>PRON: Էնը, Էսը, էն, Էստեղի, էդ, էդքանը, էդքանից, էս</li>
          <li>PROPN: Լոսի, Լոսից</li>
          <li>VERB-Fin: սպասի, ասեց, ասեցի, գտի, խնայի, ծամծմի, կարաս, կորցրինք</li>
          <li>VERB-Inf: խոսացնել, ուռացնելու</li>
          <li>VERB-Part: սառում, քցել</li>
        </ul>
      </li>
      <li>Expr
        <ul>
          <li>ADJ: փոքրիկ, նիհարիկ, չորուկ</li>
          <li>NOUN: քեյի, գնդիկներից, դստրիկս, ձկնիկ, մաչիկներ, որբուկների, պաչիկ</li>
          <li>PRON: Իիիիինչ</li>
          <li>PROPN: Ռուբ, Իսրոն, Ջոնիկը, Վիլիկը, Քեննի, Արմենչիկով, Զարիկը, Իսրոյի, Հարութիկը, Մարիկոն</li>
          <li>VERB-Fin: աս, բացատրե</li>
        </ul>
      </li>
      <li>Rare
        <ul>
          <li>ADJ: մեծն</li>
          <li>ADP: շուրջն</li>
          <li>NOUN: Փոխարենը, առվախեժով, էլեմենտ, խնդմնդիկ, կայսեր, հռհռիկ, միջույքդ, չեկինգի, պլագիատ, տղու</li>
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
          <li>ADJ: Կոտակ, ախմախ, անսամթ, խելառ, պռատ, սաղ, փոմփոշ</li>
          <li>ADV: ըսկի, Հըլը, հեչ, ուրկից</li>
          <li>INTJ: բա</li>
          <li>NOUN: ռշտան, մուռ, Թարսի, ժաժ, ժեխ, լամպըչկա, խելառ, խելառներին, խլվլիկ, խևի</li>
          <li>PART: յանի</li>
          <li>VERB-Fin: երգե</li>
          <li>VERB-Inf: լավելով, լլվելու, լղոզելու</li>
          <li>VERB-Part: պագում, քշտած</li>
        </ul>
      </li>
      <li>Vrnc,Vulg
        <ul>
          <li>VERB-Part: ցռոտած</li>
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
          <li>VERB-Fin: չկա, կա, եկավ, կան, լինի, եղավ, կլինի, դարձավ, կքնես, մտավ</li>
          <li>VERB-Inf: լինել, լինելու, մնալ, աշխատել, նայել, հավատալ, ապրելու, գալ, լինելը, չլինելու</li>
          <li>VERB-Part: եղել, կապված, սահմանված, նայում, եկել, խոսում, նախատեսված, գալիս, գնում, գտնվող</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB-Conv: ծխելիս, կարդալիս, ասելիս, արտասանելիս, գողանալիս, դիտելիս, թարգմանելիս, ձևակերպելիս, ստանալիս, վերցնելիս</li>
          <li>VERB-Fin: ունի, ասաց, ունեն, կարծես, սկսեց, տվեց, չունի, տեսավ, զգաց, բացեց</li>
          <li>VERB-Inf: անել, կատարելու, տալու, հաստատելու, ներկայացնել, պատմել, տալ, տալով, ճանաչելու, ունենալ</li>
          <li>VERB-Part: ասում, ուզում, ունեցող, անում, ասել, տալիս, հասկանում, փորձում, արել, ներկայացնում</li>
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
          <li>NOUN: գաղնագիր, գրանտերի, ենթաիմստներ, լրատվականնների, վերականգման</li>
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
      <li>VERB-Fin--NOUN-Nom (401)</li>
      <li>VERB-Fin--PRON (5)</li>
      <li>VERB-Fin--PRON-Nom (163)</li>
      <li>VERB-Inf--NOUN-Dat (2)</li>
      <li>VERB-Inf--NOUN-Nom (8)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Gen (2)</li>
      <li>VERB-Inf--PRON-Nom (2)</li>
      <li>VERB-Part--NOUN-Dat (23)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Part--NOUN-Nom (695)</li>
      <li>VERB-Part--PRON (12)</li>
      <li>VERB-Part--PRON-Dat (2)</li>
      <li>VERB-Part--PRON-Gen (15)</li>
      <li>VERB-Part--PRON-Nom (265)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN-Dat (1)</li>
      <li>VERB-Conv--NOUN-Nom (7)</li>
      <li>VERB-Fin--NOUN-Dat (54)</li>
      <li>VERB-Fin--NOUN-Nom (327)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-Dat (28)</li>
      <li>VERB-Fin--PRON-Nom (17)</li>
      <li>VERB-Inf--NOUN-Dat (87)</li>
      <li>VERB-Inf--NOUN-Nom (452)</li>
      <li>VERB-Inf--PRON (15)</li>
      <li>VERB-Inf--PRON-Dat (23)</li>
      <li>VERB-Inf--PRON-Nom (13)</li>
      <li>VERB-Part--NOUN-Dat (134)</li>
      <li>VERB-Part--NOUN-Nom (574)</li>
      <li>VERB-Part--NOUN-Nom-ADP(առաջ) (1)</li>
      <li>VERB-Part--PRON (10)</li>
      <li>VERB-Part--PRON-Dat (62)</li>
      <li>VERB-Part--PRON-Nom (39)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (15)</li>
      <li>VERB-Fin--PRON-Dat (11)</li>
      <li>VERB-Fin--PRON-Nom (2)</li>
      <li>VERB-Inf--NOUN-Dat (30)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Dat (9)</li>
      <li>VERB-Part--NOUN-Dat (58)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Dat (22)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 11 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: զրկել իրեն, գալ իրենց, երևակայել իրեն, զրկել ինքն, կպչել իրեն, համարել իրեն, հարցնել ինքն, հերքել իրեն, հորջորջել իրեն, շնորհավորել ինքն, տալ իրեն</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 21 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>advmod:emph</a>, <a>aux:ex</a>, <a>case:loc</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>compound:svc</a>, <a>csubj:outer</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>flat:dist</a>, <a>flat:frac</a>, <a>flat:name</a>, <a>flat:range</a>, <a>iobj:agent</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>goeswith</a></li>
</ul>
