---
layout: base
title:  'UD_Abkhaz-AbNC'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Abkhaz AbNC

Language: [Abkhaz](/ab/index.html) (code: `ab`)<br/>
Family: Northwest Caucasian

This treebank has been part of Universal Dependencies since the UD v2.14 release.

The following people have contributed to making this treebank part of UD: Paul Meurer.

Repository: [UD_Abkhaz-AbNC](https://github.com/UniversalDependencies/UD_Abkhaz-AbNC)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udab_abnc218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-SA 4.0

Genre: fiction

Questions, comments?
General annotation questions (either Abkhaz-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Abkhaz-AbNC/issues).
If you want to collaborate, please contact [paul&nbsp;•&nbsp;meurer&nbsp;(æt)&nbsp;uib&nbsp;•&nbsp;no].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually, natively in UD style |

## Description

UD_Abkhaz-AbNC is a treebank based on texts from the Abkhaz National Corpus, [AbNC](https://clarino.uib.no/abnc).



UD_Abkhaz-AbNC is a treebank based on texts from the Abkhaz National Corpus, [AbNC](https://clarino.uib.no/abnc), which is a corpus of written texts from a variety of genres. The sentences are taken from a collection of fairy tales for children (Аҧсуа лакәқәа – Ахәыҷқәа рзы, editor: Мықәба, А.), a short story by Валентин Дбар and other literary texts.

The sentences are analysed using a finite state morphological analyser, and Constraint Grammar rules for disambiguation and dependency parsing. Both disambiguation and dependency analyses are corrected manually in a tool specifically developed for that purpose.

## Compatibility with the AbNC

In the Abkhaz National Corpus, a proprietary annotation scheme for lemma forms and morpho-syntactic features is used. The AbNC annotations, from which the UD annotations are derived, are kept in the UD analyses: the original lemma form can be found in the MISC column as value of the LMSeg attribute; the morpho-syntactic features are available in the XPOS column.

## Acknowledgments

The Abkhaz treebank and the tools used to create it have been developed by Paul Meurer.

I am grateful to Saida Adzhindzhal (Suchum) for helping me understand some of the constructions in the texts.

## References

* Paul Meurer. A finite state approach to Abkhaz morphology and stress. Lecture Notes in Computer Science 2011, Volume 6618. pp. 271-282.
* Paul Meurer. The Abkhaz National Corpus. Proceedings of the Eleventh International Conference on Language Resources and Evaluation (LREC 2018), Miyazaki, Japan 2018. pp. 2456–2460.
* Paul Meurer. [Towards a Treebank of Abkhaz. The AbNC, Analysing Abkhaz, and the Importance of Good Tools](https://doi.org/10.62235/dk.2.2023.7477). Digital Kartvelology, Volume II (2023).


# Statistics of UD Abkhaz AbNC

## POS Tags

[ADJ](ab_abnc-pos-ADJ.html) – [ADP](ab_abnc-pos-ADP.html) – [ADV](ab_abnc-pos-ADV.html) – [AUX](ab_abnc-pos-AUX.html) – [CCONJ](ab_abnc-pos-CCONJ.html) – [INTJ](ab_abnc-pos-INTJ.html) – [NOUN](ab_abnc-pos-NOUN.html) – [NUM](ab_abnc-pos-NUM.html) – [PART](ab_abnc-pos-PART.html) – [PRON](ab_abnc-pos-PRON.html) – [PROPN](ab_abnc-pos-PROPN.html) – [PUNCT](ab_abnc-pos-PUNCT.html) – [VERB](ab_abnc-pos-VERB.html)

## Features

[Animacy](ab_abnc-feat-Animacy.html) – [Aspect](ab_abnc-feat-Aspect.html) – [Case](ab_abnc-feat-Case.html) – [Definite](ab_abnc-feat-Definite.html) – [Dyn](ab_abnc-feat-Dyn.html) – [Evident](ab_abnc-feat-Evident.html) – [Gender](ab_abnc-feat-Gender.html) – [Gender[cs]](ab_abnc-feat-Gender-cs.html) – [Gender[io]](ab_abnc-feat-Gender-io.html) – [Gender[lo]](ab_abnc-feat-Gender-lo.html) – [Gender[obj]](ab_abnc-feat-Gender-obj.html) – [Gender[po]](ab_abnc-feat-Gender-po.html) – [Gender[psor]](ab_abnc-feat-Gender-psor.html) – [Gender[refl]](ab_abnc-feat-Gender-refl.html) – [Gender[ro]](ab_abnc-feat-Gender-ro.html) – [Gender[subj]](ab_abnc-feat-Gender-subj.html) – [Mood](ab_abnc-feat-Mood.html) – [NameType](ab_abnc-feat-NameType.html) – [Number](ab_abnc-feat-Number.html) – [Number[cs]](ab_abnc-feat-Number-cs.html) – [Number[io]](ab_abnc-feat-Number-io.html) – [Number[lo]](ab_abnc-feat-Number-lo.html) – [Number[obj]](ab_abnc-feat-Number-obj.html) – [Number[po]](ab_abnc-feat-Number-po.html) – [Number[psor]](ab_abnc-feat-Number-psor.html) – [Number[refl]](ab_abnc-feat-Number-refl.html) – [Number[ro]](ab_abnc-feat-Number-ro.html) – [Number[subj]](ab_abnc-feat-Number-subj.html) – [NumType](ab_abnc-feat-NumType.html) – [Person](ab_abnc-feat-Person.html) – [Person[cs]](ab_abnc-feat-Person-cs.html) – [Person[io]](ab_abnc-feat-Person-io.html) – [Person[lo]](ab_abnc-feat-Person-lo.html) – [Person[obj]](ab_abnc-feat-Person-obj.html) – [Person[po]](ab_abnc-feat-Person-po.html) – [Person[psor]](ab_abnc-feat-Person-psor.html) – [Person[refl]](ab_abnc-feat-Person-refl.html) – [Person[ro]](ab_abnc-feat-Person-ro.html) – [Person[subj]](ab_abnc-feat-Person-subj.html) – [Polarity](ab_abnc-feat-Polarity.html) – [PronType](ab_abnc-feat-PronType.html) – [Reln](ab_abnc-feat-Reln.html) – [RelType](ab_abnc-feat-RelType.html) – [Subcat](ab_abnc-feat-Subcat.html) – [Tense](ab_abnc-feat-Tense.html) – [VerbForm](ab_abnc-feat-VerbForm.html) – [Voice](ab_abnc-feat-Voice.html)

## Relations

[acl](ab_abnc-dep-acl.html) – [acl:relcl](ab_abnc-dep-acl-relcl.html) – [advcl](ab_abnc-dep-advcl.html) – [advcl:compar](ab_abnc-dep-advcl-compar.html) – [advcl:cond](ab_abnc-dep-advcl-cond.html) – [advcl:conv](ab_abnc-dep-advcl-conv.html) – [advcl:purp](ab_abnc-dep-advcl-purp.html) – [advcl:quote](ab_abnc-dep-advcl-quote.html) – [advcl:seq](ab_abnc-dep-advcl-seq.html) – [advmod](ab_abnc-dep-advmod.html) – [advmod:q](ab_abnc-dep-advmod-q.html) – [amod](ab_abnc-dep-amod.html) – [appos](ab_abnc-dep-appos.html) – [aux](ab_abnc-dep-aux.html) – [case](ab_abnc-dep-case.html) – [cc](ab_abnc-dep-cc.html) – [ccomp](ab_abnc-dep-ccomp.html) – [ccomp:iobj](ab_abnc-dep-ccomp-iobj.html) – [ccomp:lo](ab_abnc-dep-ccomp-lo.html) – [ccomp:obj](ab_abnc-dep-ccomp-obj.html) – [ccomp:poss](ab_abnc-dep-ccomp-poss.html) – [ccomp:purp](ab_abnc-dep-ccomp-purp.html) – [ccomp:quote](ab_abnc-dep-ccomp-quote.html) – [ccomp:ro](ab_abnc-dep-ccomp-ro.html) – [compound](ab_abnc-dep-compound.html) – [compound:pred](ab_abnc-dep-compound-pred.html) – [compound:prt](ab_abnc-dep-compound-prt.html) – [conj](ab_abnc-dep-conj.html) – [conj:q](ab_abnc-dep-conj-q.html) – [cop](ab_abnc-dep-cop.html) – [csubj](ab_abnc-dep-csubj.html) – [csubj:outer](ab_abnc-dep-csubj-outer.html) – [csubj:quote](ab_abnc-dep-csubj-quote.html) – [det](ab_abnc-dep-det.html) – [discourse](ab_abnc-dep-discourse.html) – [dislocated](ab_abnc-dep-dislocated.html) – [flat](ab_abnc-dep-flat.html) – [flat:name](ab_abnc-dep-flat-name.html) – [iobj](ab_abnc-dep-iobj.html) – [iobj:cs](ab_abnc-dep-iobj-cs.html) – [iobj:lo](ab_abnc-dep-iobj-lo.html) – [iobj:po](ab_abnc-dep-iobj-po.html) – [iobj:poss](ab_abnc-dep-iobj-poss.html) – [iobj:ro](ab_abnc-dep-iobj-ro.html) – [mark](ab_abnc-dep-mark.html) – [nmod](ab_abnc-dep-nmod.html) – [nmod:poss](ab_abnc-dep-nmod-poss.html) – [nmod:quote](ab_abnc-dep-nmod-quote.html) – [nsubj](ab_abnc-dep-nsubj.html) – [nsubj:outer](ab_abnc-dep-nsubj-outer.html) – [nummod](ab_abnc-dep-nummod.html) – [obj](ab_abnc-dep-obj.html) – [obl](ab_abnc-dep-obl.html) – [orphan](ab_abnc-dep-orphan.html) – [parataxis](ab_abnc-dep-parataxis.html) – [punct](ab_abnc-dep-punct.html) – [root](ab_abnc-dep-root.html) – [vocative](ab_abnc-dep-vocative.html) – [xcomp](ab_abnc-dep-xcomp.html) – [xcomp:lo](ab_abnc-dep-xcomp-lo.html) – [xcomp:subj](ab_abnc-dep-xcomp-subj.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1545 sentences and 13054 tokens.</li>
</ul>

<ul>
<li>This corpus contains 2970 tokens (23%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 82 types of words that contain both letters and punctuation. Examples: Ҷына-ҟәыбҷа, Жәа-минуҭк, акы-ҩба, ана-ара, аху-хуҳәа, дҕьаҵәы-ҕьаҵәуан, дҿаа-ҿаауа, ихы-иҿы, уахыки-ҽнаки, шәкы-шәкы, 33-тәи, 35-тәи, 40-ҟа, 45-ҟа, Аҟыр-ҟырҳәа, Днаҧшы-ааҧшуа, Дцо-дцо, Дшыҿаа-ҿаауаз, Енџьы-Ҳаным, Зны-зынла, Знык-ҩынтә, Иаҳа-иаҳа, Иҟам-иным, Леонид-иҧа, Уахи-ҽни, Укәыкәы-цыкәуа, Хыш-хырҵәыла, Хәба-хәба, аа-лак, аа-махҽк, аз-уадак, акуа-иашьҭуа, ахи-аҵыхәеи, аҭҳара-аҭҳараҳәа, аҿартә-контрреволиуциатә-террористтә, дгьыли-жәҩани, дныҩнаҧшы-ааҩнаҧшын, дымшәа-дмырҳа, жәа-мааҭк, иааҟрым-ҿрымит, иахьца/лак, издыру/аз, изнеи/ра, икылҧш-кылӡырҩуа, инарықәтәа-аарықәтәо, инықәнашь-аақәнашьит, ихы-игәы, ихәы-ижьы, иҿы-инапы, лассы-ласс</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 13 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: DET, SCONJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): уҳәа, шҧа, ҳәа, ҳәагьы</li>
</ul>

<ul>
<li>This corpus contains 39 lemmas tagged as pronouns (PRON): а́рҭ, аба́рҭ, абни́, абри́, акгьы́, акы́, акы́заҵәк, акы́мзарак, ани́, ари́, аӡәы́, аӡәы́р, бара́, да́ҽаӡә, дара́, дасу́, даҽа́, егьи́, зегьы́, знтәы́к, иара́, лара́, руакы́, руаӡәы́, руаӡәы́к, са́, сара́, у́рҭ, уара́, уба́рҭ, убри́, уи́, шьоукы́, шәара́, џьоукы́, џьоукы́х, ҳа́рҭ, ҳара́, ҳара́-ҳара</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as determiners (DET): </li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): а́-лшара, а́-ҟазаара, а́-ҟалара, а́кәзаара, а́кәхара</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: а́-лшара, а́-ҟазаара, а́-ҟалара, а́кәзаара, а́кәхара</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: ауп, акәын, соуп, оуп, иоуп, акәхап, иакәын, лоуп, акәхарын, роуп</li>
    <li>VERB: иҳәеит, аҳәеит, иҳәан, иалагеит, лҳәеит, далагеит, дцеит, рҳәеит, ҿаанаҭит, иаҿын</li>
  </ul>
  </li>
</ul>

<ul>
  <li>NonFin
  <ul>
    <li>AUX: акәзар, акәымзар, аума, уоума, шакәу, ҟалома, акәны, акәу, акәым, ами</li>
    <li>VERB: иҟаз, игылаз, илҳәаз, инеиз, итәаз, иҟоу, анакәха, Иҟалаз, аашьҭыхны, днеины</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: аҳәара, ашәаҳәара, аҵәыуара, аҳәҳәара, иаара, Ҳәарас, аизгара, анҵара, арыцқьара, ахәаара</li>
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
      <li>PRON: лара, бара, ларгьы, бареи, баргьы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>PRON: уара, иара, иаргьы, уаргьы, иареи, уареи</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Hum
    <ul>
      <li>ADV: ирацәаҩны</li>
      <li>NOUN: анцәа, аҧшәма, аусеилыргаҩ, аҩсҭаа, акапитан, аҧҳәыс, Ашаҩы, ауаа, аҧсуа, ахәыҷқәа</li>
      <li>NUM: ҩыџьа, хҩык, хәҩык, ҳҩыџьагь, ахҩыкгьы, быжьҩык, Бжьҩы, Рҩыџьагьы, бжьҩык, шәҩыџьагьы</li>
      <li>PRON: аӡәгьы, аӡәы, шьоукы, аӡә, дасу, џьоукы, аӡәыр, Руаӡәк, даҽаӡә, руаӡә</li>
      <li>VERB: иреиҳабыз, шаҟаҩы, ҳаиҩызцәазааит, Иеибацәан, Иеиҳабу, Иуадаҩцәамкәан, Шәуаами, дкапитанын, дреиуоуп, дсықәлоуп</li>
      <li>VERB-Fin: ҳаиҩызцәазааит, Иеибацәан, дкапитанын, дреиуоуп, дсықәлоуп, дыҧсын, иреиуоуп, сагьҳәынҭқаруп, саҧсыуоуп, саҳауп</li>
      <li>VERB-NonFin: иреиҳабыз, Иеиҳабу, Иуадаҩцәамкәан, Шәуаами, дызусҭаз, дызусҭоу, дыӡҕабушәа, еиҭымцәаны, иреиуаз, иуааны</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nhum
    <ul>
      <li>ADV: Шаҟа, шаҟантә</li>
      <li>NOUN: ашә, аҧара, амилициа, Абгахәыҷы, амашьына, астол, аҩны, игәы, аамҭа, амшын</li>
      <li>NUM: аҩбагьы, акы, акы-ҩба, ҩба, 40-ҟа, 45-ҟа, Жәаба, Хышәҟа, Хҧаҟа, Хәба-хәба</li>
      <li>PRON: акгьы, акы, ак, руакы, Акызаҵәык, Акымзарак, руак</li>
      <li>VERB: Ииашоуп, иуцәажәашьоузеи, иаамҭоуп, Закә, Иабыкәу, Иахьӡузеи, Измааноу, Измааноузеи, Ишоуроуп, ашәақәоу</li>
      <li>VERB-Fin: Ииашоуп, иаамҭоуп, Ишоуроуп, дҭаацәараӡам, иашоуп, илан, ирыхәҭоуп, исусӡам, ишәусым, иҳәан</li>
      <li>VERB-NonFin: иуцәажәашьоузеи, Закә, Иабыкәу, Иахьӡузеи, Измааноу, Измааноузеи, ашәақәоу, дзеиҧшроузеи, змааназ, зыхьӡыз</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NOUN: Жәа-минуҭк, Хәышықәса, аа-лак, аа-махҽк, аамшҟа, жәа-мааҭк, х-мааҭк, х-минуҭк, хышықәсаны, хә-минуҭк</li>
      <li>VERB-Fin: хымшуп</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: хәыҷқәа, дуқәа, бзиақәа, дуқәак, дуӡӡақәа, еиқәаҵәақәа, шкәакәақәа, ҟәымшәышәқәа, ҵарқәа, агәырхынҳәыгақәа</li>
      <li>NOUN: ауаа, аҟәарасақәа, ахәыҷқәа, аҧааимбарцәа, ажьақәа, аашьаҩцәа, аҧсшьаҩцәа, аҩызцәа, иашьцәа, алақәа</li>
      <li>PRON: ҳара, урҭ, шәара, ҳарҭ, дара, даргьы, шьоукы, абарҭ, џьоукы, Арҭ</li>
      <li>PROPN: Кәынҵалраа, Масладубоваа, Чачаа, Шәлиманраа</li>
      <li>VERB-Fin: ҳаиҩызцәазааит, Иеибацәан, уаан</li>
      <li>VERB-NonFin: Иуадаҩцәамкәан, Шәуаами, ашәақәоу, еиҭымцәаны, иуааны, ишҳақьымцәоу, цәгьақәам, шеиҩызцәаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: хәыҷык, ду, рацәак, аиҵбы, дук, еиҵбы, хәыҷы, Бзиа, аиҳабы, дуӡӡак</li>
      <li>NOUN: ашә, аҧара, амилициа, Абгахәыҷы, амашьына, анцәа, астол, аҧшәма, аҩны, игәы</li>
      <li>PRON: сара, уи, уара, иара, акгьы, лара, аӡәгьы, ари, убри, саргьы</li>
      <li>VERB: аҳәара, ибзиоуп, еиҕьуп, ашәаҳәара, аҵәыуара, хәыҷызар, Ииашоуп, аҳәҳәара, иаара, иуцәажәашьоузеи</li>
      <li>VERB-Fin: ибзиоуп, еиҕьуп, Ииашоуп, Ицәгьам, Иҳаиҕьӡам, иаамҭоуп, мариам, маҷуп, сеиҳабуп, уадаҩуп</li>
      <li>VERB-NonFin: хәыҷызар, иуцәажәашьоузеи, шҧахәыҷыз, иреиҳабыз, Иахьӡузеи, Иеиҳабу, Измааноу, Измааноузеи, Ииашам, Ирацәаны</li>
      <li>VERB-Vnoun: аҳәара, ашәаҳәара, аҵәыуара, аҳәҳәара, иаара, Ҳәарас, аизгара, анҵара, арыцқьара, ахәаара</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abe
    <ul>
      <li>NOUN: рахәыда, хаҧыцда</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ben
    <ul>
      <li>ADJ: Аказы, зназы</li>
      <li>NOUN: аамҭаз, аамҭазы, Аҧсшьаразы, ацәыргақәҵазы, шықәсазы, Ҳгыламҭаз</li>
      <li>VERB-Vnoun: аҽыкәабараз, ишьразы, иҿыхразы, ргаразы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: аҵаҩтәыс, џьашьатәыс</li>
      <li>NOUN: ахықәан, ажәабжьыс, ақәцәан, аҭакс, гәырҩас, Бгас, Гашьас, ақыҭан, ақәҵатәыс, аҭакыс</li>
      <li>VERB-Vnoun: Ҳәарас</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ine
    <ul>
      <li>NOUN: ауадаҿы, баҕәазаҿы, аусураҿы, аҧарашьҭаҵарҭаҿы, ивараҿы, Алаҿы, Ачараҿ, Аҧсабараҿы, Аҩнаҭаҿы, Иусумҭаҿы</li>
      <li>NUM: жәабаҿы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: ҷыдала</li>
      <li>NOUN: машьынала, ҟамчыла, аамҭала, ажәала, лаҧшыла, џьабаала, Қәрала, Хыш-хырҵәыла, архала, ашьҭахьала</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Lat
    <ul>
      <li>ADJ: Еиқәахь</li>
      <li>NOUN: суадахь, ашьашьмахьы, луадахь, Ауадахь, абнахь, акрыфарҭахь, амашьынахь, ақыҭахь, иуадахь, ҳуадахь</li>
      <li>VERB-Vnoun: алыбаарахь, анҵәарахьы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>NOUN: Сыблаҟны, акаҟны, ашьапаҟны, аҳҭынраҟны</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ter
    <ul>
      <li>NOUN: Рашҭанӡа, аҵыхәанӡа, хәылбыҽханӡа, шьамханынӡа</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: аҵыхәтәантәи, ахатә, ашьҭахьтәи, аҳаиртә, Аӡынтәи, агәыбжьанытәгьы, акынтәи, араионтә, асасааирҭатә, аҧышәаратә</li>
      <li>NOUN: аҧара, амилициа, Абгахәыҷы, ашә, амашьына, анцәа, астол, аҧшәма, аҩны, аусеилыргаҩ</li>
      <li>NUM: аҩбагьы, ахҩыкгьы</li>
      <li>PRON: руаӡә</li>
      <li>VERB-Vnoun: аҳәара, ашәаҳәара, аҵәыуара, аҳәҳәара, аизгара, анҵара, ахәаара, ацара, Афар, Ацәысра</li>
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
      <li>AUX-Fin: ыҟам, акәмызт, акәӡамызт, залшомызт, ракәым, сакәым, ҟалом, ҟамлеит</li>
      <li>AUX-NonFin: акәымзар, акәым, ракәым, ракәымкәа, уакәӡами</li>
      <li>VERB-Fin: сыздыруам, сымам, сыздырам, ыҟаӡам, ҩашьомызт, дыҟам, дыҟамызт, рымамызт, сзаҵаҩуам, ҟалом</li>
      <li>VERB-NonFin: акәымзар, умбои, мҳәакәа, Исзымдыруа, анимк, бмаҳаӡеи, дмыццакӡо, изаамго, изымчҳакәа, сзеилымкаауа</li>
      <li>VERB-Vnoun: Умтәара</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Iter
    <ul>
      <li>VERB-Fin: далацалоит, сузыӡырҩлоит, сышьҭихлон, сҳәалон, узааргалоит, узгалап, ҳаицыхынҳәлон, ҳнеиааилап</li>
      <li>VERB-NonFin: дшаалоз, илҳәалоз</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-NonFin: акәзар, акәымзар, лакәзаргьы</li>
      <li>VERB-NonFin: акәымзар, хәыҷызар, инаҧшызар, сыҟамзар, уҭахымзар, ҳарфар, Днеизар, Еилукаазар, Иаабар, Иаакылсыр</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cnd2
    <ul>
      <li>VERB-NonFin: иааннамкылозҭгьы, иоузҭгьы, иҩнамлазҭгьы, симамызҭгьы, сыдрымкылазҭгьы, уҧшуазҭгьы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: сықәыртәа, уца, Иаажәг, исышәҭ, саҭоумҵан, уааи, уаангылишь, уааскьа, уаҧырҵ, утәа</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: ауп, акәын, соуп, оуп, иоуп, акәхап, иакәын, лоуп, акәхарын, роуп</li>
      <li>VERB-Fin: иҳәеит, аҳәеит, иҳәан, иалагеит, лҳәеит, далагеит, дцеит, рҳәеит, ҿаанаҭит, иаҿын</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>AUX-Fin: оума</li>
      <li>AUX-NonFin: аума, уоума, ҟалома, акәу, ами, рами, роума, соума, уакәӡами</li>
      <li>VERB-NonFin: умбои, бмаҳаӡеи, изгама, изуҭахузеи, узымдырӡои, шҧоубои, шәабацеи, Баҳама, Иабацеи, Иабаҟоу</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>VERB-Fin: иҳауҳәароуп, снеироуп, усыцхраароуп, ҭашәырцәыроуп, ҳасроуп, ҳзынхароуп</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>VERB-NonFin: аабгандаз, акрысзиҿаҵанда, жәдыруандаз, сҿамҳандаз, удыруандаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prp
    <ul>
      <li>VERB-NonFin: уахыччарц, Иукьыҧхьырц, ааигарц, ааиланамыргыларц, ааргарц, ааҳхәарц, агарц, адырырц, арӡырц, ақәуҭәарц</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>VERB-Fin: ирымазааит, убааит, ҳаиҩызцәазааит, Ишәеиҳәоз, Саҭамзааит, аабзиахааит, бзиазааит, дааиааит, дгылазааит, ддырхынҳәааит</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Aor
    <ul>
      <li>AUX-Fin: ҟамлеит</li>
      <li>VERB-Fin: иҳәеит, аҳәеит, иалагеит, лҳәеит, далагеит, дцеит, рҳәеит, ҿаанаҭит, ицеит, аҿынанахеит</li>
      <li>VERB-NonFin: анакәха, аашьҭыхны, днеины, кны, Ишәыхьзеи, аартны, дааины, данца, дыҩны, иааҟәыҵны</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: акәхарын</li>
      <li>VERB-Fin: иаақәыскрын</li>
      <li>VERB-NonFin: Дзыршанхарыз, Излихрыз, дааирызу, дзыҳәарыз, игарызу, изгарыдаз, ишысшәысҵарыз, иҟарҵарыз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cnd2
    <ul>
      <li>VERB-NonFin: дахьтәашаз, Иҟалашаз, дахьышьҭарҵашаз, излацәаҕәашаз, илфашаз, сшыҟалашаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: акәхап, ҟалап</li>
      <li>VERB-Fin: акәхап, ааиҭаскып, аасрыхып, аасшьап, аласыгӡап, ббап, дахьӡап, дақәсыртәап, еилазгарым, еиқәсырхап</li>
      <li>VERB-NonFin: иҟаҳҵарызеи, Изалшарыма, Изуцәызӡарызеи, Ишәзызура, ааихыҵрашәа, аакылнаҵәарашәа, дцараны, ииҳәараны, исарҳәари, исҳәараны</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fut2
    <ul>
      <li>VERB-NonFin: дыбзиазтәыша, еимаркша, излацәаҕәаша, ирҿасҵаша</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: акәын, иакәын, ракәын, акәмызт, акәӡамызт, алшон, залшомызт, лакәын, ҟалон</li>
      <li>AUX-NonFin: ракәызшәа, шакәыз, шакәызгьы, шиакәыз, шракәыз</li>
      <li>VERB-Fin: иаҿын, дыҟан, игылан, ишьҭан, ыҟан, ҩашьомызт, дыҟамызт, иман, иҟан, рымамызт</li>
      <li>VERB-NonFin: иҟаз, закәызеи, игылаз, итәаз, иҭаз, ахьгылаз, дышнеиуаз, иамаз, ирымаз, шыҟаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>VERB-Fin: иҳәан, аҳәан, даахьаҳәын, дааин, иҿынеихан, Сҩагылан, ааиган, днарысын, днеин, дҩаҵҟьан</li>
      <li>VERB-NonFin: илҳәаз, инеиз, Иҟалаз, ииҳәаз, дахьтәаз, дзыниаз, дшыныҩналаз, иаҳаз, иаҳәаз, изҭаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>VERB-Fin: аахьан, адыркхьан, аҽазнакхьан, дизамыҧхьаӡацызт, днеихьан, дныҟәахьан, дрыцқьахьан, дыҧсхьан, еизахьан, еимырдахьан</li>
      <li>VERB-NonFin: Иаҳахьаз, абазбахьаз, дышдыргәаҟхьаз, иаахьаз, иааҧсахьаз, иеиҳәахьаз, ииҩхьаз, шыҩналахьаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: ауп, соуп, оуп, иоуп, лоуп, роуп, боуп, алшоит, ыҟам, ҟалоит</li>
      <li>AUX-NonFin: акәзар, акәымзар, аума, уоума, шакәу, ҟалома, акәны, акәу, акәым, ами</li>
      <li>VERB-Fin: иҟоуп, ибзиоуп, сыздыруам, еиҕьуп, сымам, иаауеит, избоит, сыздырам, ыҟаӡам, Ииашоуп</li>
      <li>VERB-NonFin: иҟоу, акәымзар, иаҭахузеи, умбои, хәыҷызар, ҳаицны, иуцәажәашьоузеи, иҩноу, иҷырҷыруа, Иазууазеи</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prf
    <ul>
      <li>VERB-Fin: Дымнеицт, акриҿасымҵаӡацт, дырҭихьазаарын, дҭамлаӡацт, дҭымҵыц, еилыҵхьеит, здырхьеит, имаацт, имшьацт, ирысҭахьеит</li>
      <li>VERB-NonFin: Ишәасымҳәахьеи, базхәыцхьоу, балаҧшхьоу, дызҿыц, еицныҟәахьаны, ииҳәац, инеихьада, ишаҿыц, иштәац, ишыҟаиҵац</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB-Fin: диртәеит, сықәыртәа, дархәыцит, еиқәурхеит, инеилыркит, ааибарччеит, ааимаирџахәын, ааиртын, ааирххеит, аалыртын</li>
      <li>VERB-NonFin: аартны, иархәаны, рханы, Дзыршанхарыз, Ицырҕызуа, Лҽаарманшәаланы, Рҽырмазеины, Шәныҵеибарҟьа, ааиланамыргыларц, ааиланаргьежьызшәа</li>
      <li>VERB-Vnoun: арыцқьара, аартра, аилыргара, арҟәыҷра, ашьақәырҕәҕәара, зыргәаҟра, ирҳәацәара, лырҳәацәара</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: аҿаҟаҵан, деилаҳәоуп, кнаҳан, амхуп, аушьҭуп, гоуп, дааӡан, деилкаам, днаилагахт, еилкаауп</li>
      <li>VERB-NonFin: ивҵрааз, Икнаҳан, Ушааҧхьаз, анеилкааха, дахьжыз, дкаршәзар, дшаашьҭыз, дҭаҩызу, злашәоу, зышәҭаххаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>VERB-Fin: дааргазаап, дхәыҷызаап, иауазаап, иаҳазаап, иҟазаап, иҟалазаап, кыдгылазаап, Ҳиашамзаап</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nfh2
    <ul>
      <li>VERB-Fin: хәыҷызаарын, дишьҭазаарын, дырҭихьазаарын, игылазаарын, шәырфахьазаарын</li>
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
      <li>PRON: уи, ари, убри, уигьы, абри, егьи, урҭ, абарҭ, Арҭ, Абарҭқәа</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: акгьы, аӡәгьы, акы, аӡәы, ак, шьоукы, аӡә, џьоукы, аӡәыр, руакы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: сара, уи, иара, уара, лара, ҳара, саргьы, иаргьы, шәара, ҳарҭ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>PRON: зегьы, зегь, дасу</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: аҩбагьы, ҩыџьа, хҩык, хәҩык, ҳҩыџьагь, 12, 1931, 21, 400, акы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: аҩбатәи, 33-тәи, 35-тәи, Аҧшьбатәи</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Range
    <ul>
      <li>NUM: Знык-ҩынтә</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: сара, ҳара, саргьы, ҳарҭ, сареи, са, Ҳара-ҳара, ҳаргьы, ҳарҭгьы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: уара, шәара, бара, уаргьы, бареи, уареи, баргьы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: иара, лара, иаргьы, дара, урҭ, даргьы, иареи, ларгьы, Урҭгьы</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: бхәыҷы</li>
      <li>ADP: лзы, лыда, лышҟа, лаҵкыс, леиҧш, лышьҭахь, лыҩнуҵҟа, лҿы</li>
      <li>ADV: лхаҭа</li>
      <li>NOUN: лыбжьы, лгәы, лнапы, лажәа, луадахь, лхы, Бхаҵа, Лхахәы, бгәы, бхәыҷы</li>
      <li>VERB-Fin: лҿыналхеит</li>
      <li>VERB-Vnoun: бнеира, лазҵаарагьы, лырҳәацәара</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: имазеины, иусуратә, ихатә, ихәыҷқәа, иҕәҕәаны, иҵәыҵәӡа</li>
      <li>ADP: иаҧхьа, ишьҭахь, ида, уаҧхьа, иахь, иҟны, Иеиҳагьы, иаҳасабала, иаҵкыс, иаҵкысгьы</li>
      <li>ADV: ихала, имацара, ихазы, ихаҭа, ухала, изхара, ихаҭагьы</li>
      <li>NOUN: игәы, ибжьы, ихы, иан, иашьцәа, инапы, ишьапы, ила, илахь, имашьына</li>
      <li>VERB-Fin: иҿынеихан, иҿынеихеит, иҿааихеит, сихәарҭоуп, уҿааха</li>
      <li>VERB-NonFin: иуцәажәашьоузеи, иуцәажәашьоу, ишиусыз</li>
      <li>VERB-Vnoun: иаара, Умтәара, еилагара, идырра, изҵаара, ирҳәацәара, ишьразы, иҽаҩра, иҿыхразы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: аҩнуҵҟантәи</li>
      <li>ADP: еиҧш, ашьҭахь, азы, аҿы, ахь, ала, ашҟа, аҧхьа, аҟны, аҟара</li>
      <li>ADV: азхараҵәҟьа, ахала</li>
      <li>NOUN: агәра, акапитан, ашә, аусзуҩы, аамҭа, абжьы, азыбжак, ахықәан, аӡбахә, агәы</li>
      <li>VERB-Fin: аҿынанахеит, аҿаанахеит, аҿынанахон, иақәхом, иаҿаҵахәхеит, уабаҟаз</li>
      <li>VERB-NonFin: Иахьӡузеи, еиҕьу, иеиҳабугьы, иеиҵбугьы</li>
      <li>VERB-Vnoun: аилкаара, аилыргара, аицәахареи, анҵәареи, арыцқьара, арҟәыҷра, ахцәажәара, ахҩылаара, ашьақәырҕәҕәара, аҳәара</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: Шәхатә, рааигәа, реиҳабы, реиҵбы, реиҵыбӡа, рхатәы, шәаҧсуа, Ҳаучасткатә</li>
      <li>ADP: рҿы, реиҧш, раҧхьа, шәаасҭа, рахь, рышьҭахь, ҳҿы, рзы, рыда, рҟны</li>
      <li>ADV: рхаҭақәа, Рхала, шәызхараҵәҟьа, шәымацара, ҳазхараҵәҟьа</li>
      <li>INTJ: шәанаџьалбеит</li>
      <li>NOUN: ран, реиҳабы, рыҧсы, ҳаҧшәма, рхы, рҭыҧ, шәгәы, Ҳан, ҳамш, ҳгәы</li>
      <li>NUM: ҳҩыџьагь, Рҩыџьагьы, рыҩбагьы, шәҩыџьагьы</li>
      <li>PRON: руакы, Руаӡәк, руак, руаӡә, рызынтәык</li>
      <li>VERB-Fin: ҳҿынаҳхеит, Иҳаиҕьӡам, рҿаархеит, дреиуоуп, иреиуоуп, ирыхәҭоуп, ишәусым, рҿынархеит, среиуоуп</li>
      <li>VERB-NonFin: иреиҳабыз, иреиуаз, ирлахьынҵахаз, рҿанынарха, уҳаиҕьушәа, ҳхәарҭам</li>
      <li>VERB-Vnoun: Шәҭазаара, раагара, ргаразы, рыфара, рыҭгара, ҳаиқәшәара</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: аҩнуҵҟантәи, бхәыҷы, имазеины, иусуратә, ихатә, ихәыҷқәа, иҕәҕәаны, иҵәыҵәӡа, сусуратә, схәыҷқәа</li>
      <li>ADP: еиҧш, ашьҭахь, азы, аҿы, ахь, ала, ашҟа, аҧхьа, аҟны, аҟара</li>
      <li>ADV: ихала, имацара, ихазы, ихаҭа, лхаҭа, схала, ухала, азхараҵәҟьа, ахала, изхара</li>
      <li>NOUN: игәы, ибжьы, ихы, иан, агәра, сгәы, акапитан, ашә, схы, иашьцәа</li>
      <li>PROPN: с-Ҷына-ҟәыбҷа</li>
      <li>VERB: аҿынанахеит, иаара, иуцәажәашьоузеи, иҿынеихан, иҿынеихеит, сҿынасхеит, Иахьӡузеи, Умтәара, аилкаара, аилыргара</li>
      <li>VERB-Fin: аҿынанахеит, иҿынеихан, иҿынеихеит, сҿынасхеит, аҿаанахеит, аҿынанахон, дсықәлоуп, иақәхом, иаҿаҵахәхеит, исусӡам</li>
      <li>VERB-NonFin: иуцәажәашьоузеи, Иахьӡузеи, еиҕьу, иеиҳабугьы, иеиҵбугьы, иуцәажәашьоу, ишиусыз, сҿаасхоны, сҿанынасха</li>
      <li>VERB-Vnoun: иаара, Умтәара, аилкаара, аилыргара, аицәахареи, анҵәареи, арыцқьара, арҟәыҷра, ахцәажәара, ахҩылаара</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Dyn</a>
    <ul>
      <li>No
        <ul>
          <li>AUX-Fin: ауп, акәын, соуп, оуп, иоуп, иакәын, лоуп, роуп, боуп, ракәын</li>
          <li>AUX-NonFin: акәзар, акәымзар, аума, уоума, шакәу, акәны, акәу, акәым, ами, лакәзаргьы</li>
          <li>VERB: иҟаз, иаҿын, иҟоу, иҟоуп, дыҟан, ибзиоуп, еиҕьуп, закәызеи, игылаз, игылан</li>
          <li>VERB-Fin: иаҿын, иҟоуп, дыҟан, ибзиоуп, еиҕьуп, игылан, сымам, ишьҭан, ыҟан, ыҟаӡам</li>
          <li>VERB-NonFin: иҟаз, иҟоу, закәызеи, игылаз, акәымзар, иаҭахузеи, итәаз, иҭаз, хәыҷызар, ҳаицны</li>
          <li>VERB-Vnoun: Шәҭазаара, аҟазаара, лара</li>
        </ul>
      </li>
      <li>Yes
        <ul>
          <li>AUX-Fin: акәхап, акәхарын, алшоит, ҟалоит, алшон, залшомызт, ҟалап, ҟалом, ҟалон, ҟамлеит</li>
          <li>AUX-NonFin: ҟалома</li>
          <li>VERB-Fin: иҳәеит, аҳәеит, иҳәан, иалагеит, лҳәеит, далагеит, дцеит, рҳәеит, ҿаанаҭит, ицеит</li>
          <li>VERB-NonFin: илҳәаз, инеиз, анакәха, Иҟалаз, аашьҭыхны, днеины, кны, ииҳәаз, умбои, Ишәыхьзеи</li>
          <li>VERB-Vnoun: аҳәара, ашәаҳәара, аҵәыуара, аҳәҳәара, иаара, Ҳәарас, аизгара, анҵара, арыцқьара, ахәаара</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[cs]</a>
    <ul>
      <li>Fem
        <ul>
          <li>VERB-Fin: илдырҳәеит, лдыржәуан, налирбеит, налсыркит</li>
          <li>VERB-NonFin: данылдыркы</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB-Fin: иирбеит, ииркит, инеилыркит, инеисырбеит, иусырбап, неисырбеит</li>
          <li>VERB-NonFin: иахьисырбаз</li>
        </ul>
      </li>
      <li>Neut
        <ul>
          <li>VERB-Fin: асыруит, иасырбом</li>
          <li>VERB-NonFin: ааруны, аруны, иасырбаз</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[io]</a>
    <ul>
      <li>Fem
        <ul>
          <li>AUX-Fin: лоуп, боуп, лакәын</li>
          <li>AUX-NonFin: лакәзаргьы</li>
          <li>VERB-Fin: дынлазҵааит, сналазҵааит, баҳаит, блацәажәа, илиҭеит, илмаҳаит, лоухьеит, лысҭахьан, налыцхрааит, слазҵааит</li>
          <li>VERB-NonFin: Илыхьзеи, бмаҳаӡеи, лыманы, Баҳама, Илгаҵәҟьаны, Илхарамкәа, Слазҵаанӡа, анлаҳа, анлысҭа, былмацәажәо</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>AUX-Fin: иоуп, иакәын</li>
          <li>AUX-NonFin: уоума, уакәны, уакәӡами, шиакәу, шиакәыз</li>
          <li>VERB-Fin: иман, диҳәон, дукәыхшоуп, иоуит, шәит, Ихьӡын, деиҭаиазҵааит, диазҵааит, днаиазҵааит, днаиацәажәеит</li>
          <li>VERB-NonFin: изҭаз, иаҳаз, иманы, Иумазар, ааисны, анимоуӡа, анисҭа, ахьимамыз, диазҵаазшәа, диазҵаауа</li>
          <li>VERB-Vnoun: Иҳәара</li>
        </ul>
      </li>
      <li>Neut
        <ul>
          <li>AUX-Fin: ауп, акәын, оуп, акәхап, акәхарын, акәмызт, акәӡамызт, оума</li>
          <li>AUX-NonFin: акәзар, акәымзар, аума, шакәу, акәны, акәу, акәым, ами, шакәыз, шакәызгьы</li>
          <li>VERB-Fin: иаацәажәеит, акәхеит, акәхап, иахьӡын, Иаҳаит, Иаҳзаҧсам, Саҭамзааит, адыркхьан, акәым, алыркит</li>
          <li>VERB-NonFin: анакәха, акәымзар, иамаз, аманы, деигәырҕьаны, иархәаны, акәу, акәымзи, акәӡамзи, аман</li>
          <li>VERB-Vnoun: аисра, аҭара, лазҵаарагьы</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[lo]</a>
    <ul>
      <li>Fem
        <ul>
          <li>VERB-Fin: сналыхәаҧшит, даалыдгылт, длықәҳәҳәеит, дылҟәаҵуамызт, дынлыхәаҧшит, ибхашҭит, илеиҳәеит, илыдиҵеит, илықәлан, илықәуп</li>
          <li>VERB-NonFin: Уналҿаҧшыр, быдызҵада, дбыдыбкылома, длыхәазырҧшы, илыҕроу, лықәҧсаны, лыҵамкәа, лҧыраҳәаны, лҿыкьасо, налҿаба</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB-Fin: дихәаҧшуан, иаҩуцеит, игәаҧхеит, иеиҳәеит, ишьҭан, Снеиҧылт, ааинырҟьеит, ааихьнашьуан, акриҿасымҵаӡацт, акриҿеиҵан</li>
          <li>VERB-NonFin: ивҵрааз, Иахьиоуҳәалак, Иҧылаз, ааихмырҧаӡакәа, ааихыҵрашәа, ааишәҵаны, акрысзиҿаҵанда, акрышиҿабҵо, ахьиеиҳәаз, данихәаҧш</li>
          <li>VERB-Vnoun: акриҿаҵара</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[obj]</a>
    <ul>
      <li>Com
        <ul>
          <li>VERB-Fin: диртәеит, дархәыцит, даадиргылт, даадәылиган, даалырҽхәеит, дааргазаап, дааргон, даарыцҳасшьеит, дааҩнаргалт, дакит</li>
          <li>VERB-NonFin: Даазышьҭыз, Дзыршанхарыз, Дшаагәанаҭаз, дааганы, дааигеижьҭеи, дааишьҭыз, дааргаанӡа, дааргартә, дабар, дагар</li>
        </ul>
      </li>
      <li>Fem
        <ul>
          <li>VERB-Fin: Бахызбаауам, бақәиҭаҳтәуеит</li>
          <li>VERB-NonFin: баблырц, бшакуа</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB-Fin: уаабеит, уафоит, уааигоит, уазрыцҳамхааит, уасҳәап, уаҳзааигеит, уеиқәнархом, узбоит, узгалап, урыцҳасшьоит</li>
          <li>VERB-NonFin: Уахьыржьо, уаашьҭыхны, уанбалгои, уарымҳәаӡеи, уахьырҭаху, уганы, узымдырӡои, узыҳәо, улкагәа, уҭахызар</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[po]</a>
    <ul>
      <li>Fem
        <ul>
          <li>VERB-Fin: илыздыруамызт, илызҳәаӡом, илызҳәомызт, лзыҭкаауамызт</li>
          <li>VERB-NonFin: бзымдырӡои, лзеилымкаазшәа, лызгәамҭазшәа, лҽылзаанымкылаӡакәа</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB-Fin: узҳәомызт, изалымхит, изамхӡом, изгом, изгәамҭаӡеит, издыруамызт, изычҳауамызт</li>
          <li>VERB-NonFin: изаамго, изымчҳакәа, иааузымчҳаратәы, изымго, узымдырӡои, шҧоузымдыруеи</li>
        </ul>
      </li>
      <li>Neut
        <ul>
          <li>VERB-Fin: азхамҵеит, азыгәаҕьуамызт</li>
          <li>VERB-NonFin: иазымычҳакәа, уазыхьчо</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[refl]</a>
    <ul>
      <li>Fem
        <ul>
          <li>VERB-Fin: лҽааиқәылкит, лҽеиҭалкхьан</li>
          <li>VERB-NonFin: Лҽаарманшәаланы, лҽылзаанымкылаӡакәа</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB-Fin: Уҽеилаҳәа, иҽазикит, иҽақәиршәон, иҽыназикит, иҽыназикт, иҽынирхацәеит, уҽаанкыл, уҽеилых, уҽыкноуҳауеит</li>
          <li>VERB-NonFin: Иҽкамыжькәа</li>
        </ul>
      </li>
      <li>Neut
        <ul>
          <li>VERB-Fin: аҽазнакхьан, аҽаргәыбзыҕит, аҽаҟьеит</li>
          <li>VERB-NonFin: аҽакәыршаны, аҽамнахырц</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[ro]</a>
    <ul>
      <li>Fem
        <ul>
          <li>VERB-Fin: бзаанагеит, лызҳауан, ҳалцәымцхәын</li>
          <li>VERB-NonFin: дылцәыӡызшәа</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB-Fin: изыҧшуп, ицәыӡит, дизамыҧхьаӡацызт, дизыҧшуан, дизыӡырҩуан, дизҵааит, изааибамгеит, изгылан, изеиҭасҳәоит, изнаргеит</li>
          <li>VERB-NonFin: изыҧшыз, Изалшарыма, Изуцәызӡарызеи, Ицырҕызуа, Ицәнымхо, Ишҧоуцәыӡуаз, данизаҧхьа, дышизҵаауаз, изирхынҳәырц, изнеиз</li>
        </ul>
      </li>
      <li>Neut
        <ul>
          <li>VERB-Fin: дазыҧшын, сазыразуп, аздырхеит, азызымуит, азымҩаӡеит, азыразхан, алаахә, аҽазнакхьан, базыӡырҩла, дазааҭгылеит</li>
          <li>VERB-NonFin: Иазууазеи, дазыҧшызшәа, иазызуазеи, иазынаҧшуа, Иалаасхәо, Иацәымаашьакәа, Сабацахуеи, Уазыразума, азылур, азымхозшәа</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[subj]</a>
    <ul>
      <li>Com
        <ul>
          <li>ADV: Деибархха, деиҿкааӡа, дкылкааны, дласны, дымшәа-дмырҳа, дҕьаҵәыҕьаҵәуа</li>
          <li>VERB-Fin: далагеит, дцеит, даацәажәеит, дыҟан, дҵааит, даахьаҳәын, днеит, дааин, даасҿаҧшит, днатәеит</li>
          <li>VERB-NonFin: днеины, дааины, данца, дахьгылаз, дахьтәаз, дгыланы, дзыниаз, дшыныҩналаз, дышгылаз, дышнеиуаз</li>
        </ul>
      </li>
      <li>Fem
        <ul>
          <li>VERB-Fin: лҳәеит, ибгеит, инеилыркит, лҳәан, аалыртын, аалҟьеит, аамылхуан, аахылтын, ааҭылган, алыркит</li>
          <li>VERB-NonFin: илҳәаз, Ианылҭаху, Ибымбои, Ибымҳәар, Илкыз, Илымгаҵәҟьазар, Ишылгаз, аабгандаз, азылур, акрышиҿабҵо</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>ADV: Уҟьантазӡа</li>
          <li>VERB: иҳәеит, иҳәан, ибеит, ииҳәаз, умбои, диртәеит, икит, иҿынеихан, иҿынеихеит, сибоит</li>
          <li>VERB-Fin: иҳәеит, иҳәан, ибеит, диртәеит, икит, иҿынеихан, иҿынеихеит, сибоит, уца, ҟаиҵеит</li>
          <li>VERB-NonFin: ииҳәаз, умбои, Иазууазеи, анимк, изуҭахузеи, иишаз, ииҭахыз, иҟауҵо, уахыччарц, удырратәы</li>
        </ul>
      </li>
      <li>Neut
        <ul>
          <li>VERB-Fin: аҳәеит, ҿаанаҭит, аҳәан, аҿынанахеит, дархәыцит, иаагәанаҭеит, иакит, ишьҭнахит, ныҟанаҵеит, уафоит</li>
          <li>VERB-NonFin: иаҭахузеи, иаҳәаз, анаба, Амшәгьы, Дшаагәанаҭаз, Ианаҭахыз, Иаҭаху, Иаҳахьаз, Сабацахуеи, ааиланамыргыларц</li>
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
          <li>PROPN: Аҧсны, Жьабнагьы, Қарҭтәи, Қарҭҟа, Адлер, Аҟәа, Аҧсныҟа, Гәылрыҧшь, Жьабнеи, Лыхны</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>PROPN: Жигули, ЦИК</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: Леонид, Мкан, Наҳар, Ира, Ҷына-ҟәыбҷа, Буҭхузи, Заира, Лакоба, Мариа, Аҧсуа</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[cs]</a>
    <ul>
      <li>Plur
        <ul>
          <li>VERB-Fin: днарбом, шәсырбап</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB-Fin: асыруит, иасырбом, иирбеит, ииркит, илдырҳәеит, инеилыркит, инеисырбеит, исиркит, иусырбап, лдыржәуан</li>
          <li>VERB-NonFin: ааруны, аруны, данылдыркы, иасырбаз, иахьисырбаз, смырҳәакәа</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[io]</a>
    <ul>
      <li>Plur
        <ul>
          <li>AUX-Fin: роуп, ракәын, ракәым, шәоуп, ҳауп</li>
          <li>AUX-NonFin: ракәызшәа, ракәым, ракәымкәа, рами, роума, шракәыз</li>
          <li>VERB-Fin: ирымазааит, рымамызт, днаразҵааит, днарысын, дрыҳәеит, иҳаҧхьеит, рыман, рымоуп, уҳацхраа, Дҳазҵааит</li>
          <li>VERB-NonFin: Ишәыхьзеи, ирымаз, Иҳауаз, Иҳахьыз, анраҳа, аншәысҭа, ахьрымам, данрыҳәа, дахьрацәажәауа, дахьыртәыз</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX-Fin: ауп, акәын, соуп, оуп, иоуп, акәхап, иакәын, лоуп, акәхарын, боуп</li>
          <li>AUX-NonFin: акәзар, акәымзар, аума, уоума, шакәу, акәны, акәу, акәым, ами, лакәзаргьы</li>
          <li>VERB-Fin: иаацәажәеит, сымам, акәхеит, дынлазҵааит, иман, сналазҵааит, акәхап, диҳәон, дсазҵааит, дукәыхшоуп</li>
          <li>VERB-NonFin: анакәха, акәымзар, иамаз, иаҳаз, изҭаз, Илыхьзеи, Исыхьыз, аманы, бмаҳаӡеи, деигәырҕьаны</li>
          <li>VERB-Vnoun: Иҳәара, аисра, аҭара, лазҵаарагьы</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[lo]</a>
    <ul>
      <li>Plur
        <ul>
          <li>VERB-Fin: рылеибахит, ҳҧылеит, Ишәеиҳәоз, даҳхылаҧшуеит, днарышьҭалан, днаҳҿаҧшит, дрыҵаҟьеит, дрыҿцәажәеит, дҩаҳабжьалт, иаарыдгылт</li>
          <li>VERB-NonFin: ирыбжьакны, Ирҿыҵуа, Ишәасымҳәахьеи, Ишәгәаҧхозар, Ишәылшозеи, аархаабыцуа, анышәҭахха, дааҳҧыларгьы, дрыбжьаргыланы, дрыцклаҧшны</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB-Fin: даасҿаҧшит, дихәаҧшуан, иаҩуцеит, игәаҧхеит, иеиҳәеит, исгәалашәеит, исгәаҧхеит, ишьҭан, сгәалашәом, сналыхәаҧшит</li>
          <li>VERB-NonFin: ивҵрааз, исылшо, Иахьиоуҳәалак, Исгәалашәаз, Исеиҳәаз, Исылшоз, Иҧылаз, Уналҿаҧшыр, ааихмырҧаӡакәа, ааихыҵрашәа</li>
          <li>VERB-Vnoun: акриҿаҵара</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[obj]</a>
    <ul>
      <li>Plur
        <ul>
          <li>VERB-Fin: Шәыздыруеит, шәамырҧхашьааит, шәырфахьазаарын, шәырхәышәтәуеит, шәырҭахуп, Ҳаибадырит, Ҳаибадырп, ҳаанарҧшит, ҳаибадыруан, ҳаибарыҩуеит</li>
          <li>VERB-NonFin: ҳарфар, Шәанаазга, Шәныҵеибарҟьа, шәаанызкылои, шәақәдмыргәыҕӡои, шәеибашьуама, шәеиҿадмыргылеи, шәзыхьчо, шәхагала, Ҳзыхьчогьы</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB-Fin: диртәеит, сибоит, сықәыртәа, дархәыцит, саҭоумҵан, уаабеит, уафоит, Бахызбаауам, бақәиҭаҳтәуеит, даадиргылт</li>
          <li>VERB-NonFin: Даазышьҭыз, Дзыршанхарыз, Дшаагәанаҭаз, Саазгаз, Сабацахуеи, Уахьыржьо, баблырц, бшакуа, дааганы, дааигеижьҭеи</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[po]</a>
    <ul>
      <li>Plur
        <ul>
          <li>VERB-Fin: ирзыфом, рзымуит, рыздырӡом, шәзеилымкаацт</li>
          <li>VERB-NonFin: анырзымхәыц, рзымкуа, шҧашәзеилымкаац, шәзыҟаҵозаргьы</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB-Fin: сыздыруам, сыздырам, сзаҵаҩуам, сызгәамҭаӡеит, узҳәомызт, Исзеилымкааит, азхамҵеит, азыгәаҕьуамызт, изалымхит, изамхӡом</li>
          <li>VERB-NonFin: Исзымдыруа, изаамго, изымчҳакәа, сзеилымкаауа, сзымдыруа, акрысзиҿаҵанда, бзымдырӡои, иааузымчҳаратәы, иазымычҳакәа, изымго</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[refl]</a>
    <ul>
      <li>Plur
        <ul>
          <li>VERB-Fin: рҽыршәеит, шәҽаанышәкыл</li>
          <li>VERB-NonFin: рҽааизганы</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB-Fin: Уҽеилаҳәа, аҽазнакхьан, аҽаргәыбзыҕит, аҽаҟьеит, иҽазикит, иҽақәиршәон, иҽыназикит, иҽыназикт, иҽынирхацәеит, лҽааиқәылкит</li>
          <li>VERB-NonFin: Иҽкамыжькәа, Лҽаарманшәаланы, Сҽааиҭакны, Сҽызласыҧсахуа, аҽакәыршаны, аҽамнахырц, лҽылзаанымкылаӡакәа, сҽеиҭаскыр</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[ro]</a>
    <ul>
      <li>Plur
        <ul>
          <li>VERB-Fin: шәызхоит, Иаҳзааргеит, Иаҳзаҧсам, даарызхәыцит, даҳцәыҧсуеит, еиҭаҳзаалгеит, иаарызхәыцит, ирзамуит, ирзамыҧхьеит, ирзишеит</li>
          <li>VERB-NonFin: ирзаауазеи, иҳацәшәо, Ишәзызура, дахьҳзааз, иаҳзыҧшу, ирзишаз, ирзызузгьы, ирцәугаз, ишрызҳаз, ишышәзеиҭеиҳәаз</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB-Fin: дазыҧшын, изыҧшуп, ицәыӡит, сазыразуп, Исцәымӡӡеит, аздырхеит, азызымуит, азымҩаӡеит, азыразхан, алаахә</li>
          <li>VERB-NonFin: Иазууазеи, дазыҧшызшәа, иазызуазеи, иазынаҧшуа, изыҧшыз, Иалаасхәо, Иацәымаашьакәа, Изалшарыма, Изуцәызӡарызеи, Ицырҕызуа</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[subj]</a>
    <ul>
      <li>Plur
        <ul>
          <li>ADV: ҳгәырҕьаҵәа</li>
          <li>VERB-Fin: рҳәеит, ҳҿынаҳхеит, Иаажәг, еимаркит, ирҳәоит, исышәҭ, рбеит, рҳәом, рҿаархеит, уаабеит</li>
          <li>VERB-NonFin: ҳаицны, ахьырбаз, ишәҳәаз, иҟаҳҵарызеи, шәабацеи, шәанаахыҵ, ҳаннеиуаз, ҳанҭыҵ, ҳарфар, Иаабар</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>ADV: Деибархха, Сгәанала, Уҟьантазӡа, деиҿкааӡа, дкылкааны, дласны, дымшәа-дмырҳа, дҕьаҵәыҕьаҵәуа, скалкало</li>
          <li>VERB: иҳәеит, аҳәеит, иҳәан, лҳәеит, далагеит, дцеит, ҿаанаҭит, илҳәаз, аҳәан, аҿынанахеит</li>
          <li>VERB-Fin: иҳәеит, аҳәеит, иҳәан, лҳәеит, далагеит, дцеит, ҿаанаҭит, аҳәан, аҿынанахеит, даацәажәеит</li>
          <li>VERB-NonFin: илҳәаз, днеины, иаҭахузеи, ииҳәаз, умбои, дааины, данца, дахьгылаз, дахьтәаз, дгыланы</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[cs]</a>
    <ul>
      <li>1
        <ul>
          <li>VERB-Fin: исиркит, сдыршәоит, слырбомызт</li>
          <li>VERB-NonFin: смырҳәакәа</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: иусырбап, шәсырбап</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: асыруит, днарбом, иасырбом, иирбеит, ииркит, илдырҳәеит, инеилыркит, инеисырбеит, лдыржәуан, налирбеит</li>
          <li>VERB-NonFin: ааруны, аруны, данылдыркы, иасырбаз, иахьисырбаз</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[io]</a>
    <ul>
      <li>1
        <ul>
          <li>AUX-Fin: соуп, сакәым, ҳауп</li>
          <li>AUX-NonFin: соума</li>
          <li>VERB-Fin: сымам, дсазҵааит, исаҳаит, исмаҳаит, истәуп, исымоуп, исышәҭ, иҳаҧхьеит, саҳаит, саҳауеит</li>
          <li>VERB-NonFin: Исыхьыз, Иҳауаз, Иҳахьыз, ансаҳауази, зсумҭозеи, иансмаҳауази, ианҳамаз, исиҭаз, исыгыз, исымаз</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>AUX-Fin: боуп, шәоуп</li>
          <li>AUX-NonFin: уоума, уакәны, уакәӡами</li>
          <li>VERB-Fin: дукәыхшоуп, баҳаит, исызуҭаӡом, ишәаҳахьеит, ишәмаҳаӡеит, суазҵаауеит, сшәыцхраауеит, уаҳҭоит, усҭоит, шәырҭоит</li>
          <li>VERB-NonFin: Ишәыхьзеи, бмаҳаӡеи, Баҳама, Иумазар, аншәысҭа, изумоузеи, иуоур, иухьзеи, ишумоу, ишуоуа</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX-Fin: ауп, акәын, оуп, иоуп, акәхап, иакәын, лоуп, акәхарын, роуп, ракәын</li>
          <li>AUX-NonFin: акәзар, акәымзар, аума, шакәу, акәны, акәу, акәым, ами, лакәзаргьы, ракәызшәа</li>
          <li>VERB-Fin: иаацәажәеит, акәхеит, дынлазҵааит, иман, ирымазааит, рымамызт, сналазҵааит, акәхап, диҳәон, днаразҵааит</li>
          <li>VERB-NonFin: анакәха, акәымзар, иамаз, иаҳаз, изҭаз, ирымаз, Илыхьзеи, аманы, деигәырҕьаны, иархәаны</li>
          <li>VERB-Vnoun: Иҳәара, аисра, аҭара, лазҵаарагьы</li>
        </ul>
      </li>
      <li>Rec
        <ul>
          <li>VERB-NonFin: еидашшыло</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>VERB-NonFin: закәызеи, заҳаз, змаз, Закә, дзыҳәарыз, дызусҭаз, дызусҭоу, зауаз, захьӡыз, заҳада</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[lo]</a>
    <ul>
      <li>1
        <ul>
          <li>VERB-Fin: даасҿаҧшит, исгәалашәеит, исгәаҧхеит, сгәалашәом, ҳҧылеит, Исгәалашәоит, Исгәалашәом, Шәсышьҭал, аасгәахәит, аасыкәиршеит</li>
          <li>VERB-NonFin: исылшо, Исгәалашәаз, Исеиҳәаз, Исылшоз, аасгәахәаанӡа, анбасықәшәои, анысгәахә, дааҳҧыларгьы, днасықәтәаны, дшаасыдххылаз</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: Ишәеиҳәоз, ибхашҭит, иуҧылоит, ишәгәаласыршәап, ишәҿасҵап, унаалом, шәҿыҵакын</li>
          <li>VERB-NonFin: Ишәасымҳәахьеи, Ишәгәаҧхозар, Ишәылшозеи, анышәҭахха, быдызҵада, дбыдыбкылома, иааумхны, ианышәҭахха, иахьынӡаулшо, ишәабжьарго</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: дихәаҧшуан, иаҩуцеит, игәаҧхеит, иеиҳәеит, ишьҭан, рылеибахит, сналыхәаҧшит, Снеиҧылт, ааинырҟьеит, ааихьнашьуан</li>
          <li>VERB-NonFin: ивҵрааз, ирыбжьакны, Иахьиоуҳәалак, Ирҿыҵуа, Иҧылаз, Уналҿаҧшыр, ааихмырҧаӡакәа, ааихыҵрашәа, ааишәҵаны, аархаабыцуа</li>
          <li>VERB-Vnoun: акриҿаҵара</li>
        </ul>
      </li>
      <li>Rec
        <ul>
          <li>VERB-Fin: еилыскааит, еиқәурхеит, иааимидеит, Иҩеихаҵгылт, еидшылеит, еилсыргом, еилыркааит, еимаадеит, еимырдахьан, еиқәнархеит</li>
          <li>VERB-NonFin: Иааибыҳәаны, еидкылашәа, еикәшаны, еимдо, еинааланы, еихымҵуа, еишьҭагыланы, еиқәирхаз, еиқәшаҳаҭны, еиқәшәазгьы</li>
          <li>VERB-Vnoun: аилыргара, аиқәҧара, ҳаиқәшәара</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>VERB-NonFin: дзыниаз, зху, узҿузеи, Излихрыз, Узыниаз, Узыниазеи, Узҿу, Шәызҿу, дзыниазеи, дзықәтәаз</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[obj]</a>
    <ul>
      <li>1
        <ul>
          <li>VERB-Fin: сибоит, сықәыртәа, саҭоумҵан, сааирҽхәеит, саарыҧхьоит, саргылт, саргәааит, сарҧхашьеит, слыршәеит, сналгеит</li>
          <li>VERB-NonFin: ҳарфар, Саазгаз, Сабацахуеи, саазырҧшыз, саарыханы, сгәаҭаны, сзырҭахымзеи, суфома, сшиҭахым, сшыҩнадырҧалаз</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: уаабеит, уафоит, Бахызбаауам, Шәыздыруеит, бақәиҭаҳтәуеит, уааигоит, уазрыцҳамхааит, уасҳәап, уаҳзааигеит, уеиқәнархом</li>
          <li>VERB-NonFin: Уахьыржьо, Шәанаазга, Шәныҵеибарҟьа, баблырц, бшакуа, уаашьҭыхны, уанбалгои, уарымҳәаӡеи, уахьырҭаху, уганы</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: иҳәеит, аҳәеит, иҳәан, лҳәеит, рҳәеит, аҳәан, ибеит, избеит, избоит, сҳәеит</li>
          <li>VERB-NonFin: аашьҭыхны, кны, умбои, аартны, изҭаз, мҳәакәа, ҟазҵаз, ҟаҵаны, ҩышьҭыхны, аанкыланы</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>VERB-NonFin: илҳәаз, иаҭахузеи, ииҳәаз, иаҳәаз, исҳәаз, Иазууазеи, иаанагои, иазызуазеи, иишаз, ииҭахыз</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[po]</a>
    <ul>
      <li>1
        <ul>
          <li>VERB-Fin: сыздыруам, сыздырам, сзаҵаҩуам, сызгәамҭаӡеит, Исзеилымкааит, исзаагом, исзеилкаауам, исзымдырит, исызгәамҭеит, исызуҭаӡом</li>
          <li>VERB-NonFin: Исзымдыруа, сзеилымкаауа, сзымдыруа, акрысзиҿаҵанда, исзымычҳакәа</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: узҳәомызт, шәзеилымкаацт</li>
          <li>VERB-NonFin: бзымдырӡои, иааузымчҳаратәы, узымдырӡои, шҧашәзеилымкаац, шҧоузымдыруеи, шәзыҟаҵозаргьы</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: азхамҵеит, азыгәаҕьуамызт, изалымхит, изамхӡом, изгом, изгәамҭаӡеит, издыруамызт, изычҳауамызт, илыздыруамызт, илызҳәаӡом</li>
          <li>VERB-NonFin: изаамго, изымчҳакәа, анырзымхәыц, иазымычҳакәа, изымго, лзеилымкаазшәа, лызгәамҭазшәа, лҽылзаанымкылаӡакәа, рзымкуа, уазыхьчо</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>VERB-NonFin: ззымчҳаз</li>
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
          <li>ADJ: сусуратә, схәыҷқәа, Ҳаучасткатә</li>
          <li>ADP: сышҟа, ҳҿы, саҧхьа, саҵкьыс, сышьҭахь, ҳаҟны, сахь, саҵкыс, сеиҧш, сзы</li>
          <li>ADV: схала, сымала, ҳазхараҵәҟьа</li>
          <li>NOUN: сгәы, схы, сан, снапы, сашьцәа, схәыҷы, ҳаҧшәма, сашьа, суадахь, сыҧсы</li>
          <li>NUM: ҳҩыџьагь</li>
          <li>PROPN: с-Ҷына-ҟәыбҷа</li>
          <li>VERB: ҳҿынаҳхеит, Иҳаиҕьӡам, сҿынасхеит, дсықәлоуп, исусӡам, сыжәлоуп, сыхьӡуп, сҿаасхоны, сҿанынасха, усаҧыза</li>
          <li>VERB-Fin: ҳҿынаҳхеит, Иҳаиҕьӡам, сҿынасхеит, дсықәлоуп, исусӡам, сыжәлоуп, сыхьӡуп</li>
          <li>VERB-NonFin: сҿаасхоны, сҿанынасха, уҳаиҕьушәа, ҳхәарҭам</li>
          <li>VERB-Vnoun: ҳаиқәшәара</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>ADJ: Шәхатә, бхәыҷы, шәаҧсуа</li>
          <li>ADP: шәаасҭа, уаҧхьа, Шәыда, уда, уеиҳа, узы, узыҳәан, шәышҟа, шәҿы</li>
          <li>ADV: ухала, шәызхараҵәҟьа, шәымацара</li>
          <li>INTJ: шәанаџьалбеит</li>
          <li>NOUN: унапы, уашәа, угәы, уҟәаҟәа, шәгәы, Бхаҵа, бгәы, бхәыҷы, уан, уашьа</li>
          <li>NUM: шәҩыџьагьы</li>
          <li>VERB-Fin: ишәусым, уҿааха</li>
          <li>VERB-NonFin: иуцәажәашьоузеи, иуцәажәашьоу</li>
          <li>VERB-Vnoun: Умтәара, Шәҭазаара, бнеира</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADJ: аҩнуҵҟантәи, имазеины, иусуратә, ихатә, ихәыҷқәа, иҕәҕәаны, иҵәыҵәӡа, рааигәа, реиҳабы, реиҵбы</li>
          <li>ADP: еиҧш, ашьҭахь, азы, аҿы, ахь, рҿы, ала, ашҟа, аҧхьа, аҟны</li>
          <li>ADV: ихала, имацара, ихазы, ихаҭа, лхаҭа, рхаҭақәа, Рхала, азхараҵәҟьа, ахала, изхара</li>
          <li>NOUN: игәы, ибжьы, ихы, иан, агәра, акапитан, ашә, ран, иашьцәа, лыбжьы</li>
          <li>NUM: Рҩыџьагьы, рыҩбагьы</li>
          <li>PRON: руакы, Руаӡәк, руак, руаӡә, рызынтәык</li>
          <li>VERB-Fin: аҿынанахеит, иҿынеихан, иҿынеихеит, рҿаархеит, аҿаанахеит, аҿынанахон, дреиуоуп, иақәхом, иаҿаҵахәхеит, иреиуоуп</li>
          <li>VERB-NonFin: иреиҳабыз, Иахьӡузеи, еиҕьу, иеиҳабугьы, иеиҵбугьы, иреиуаз, ирлахьынҵахаз, ишиусыз, рҿанынарха</li>
          <li>VERB-Vnoun: иаара, аилкаара, аилыргара, аицәахареи, анҵәареи, арыцқьара, арҟәыҷра, ахцәажәара, ахҩылаара, ашьақәырҕәҕәара</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>ADJ: зхатәы</li>
          <li>ADP: зеиҧш, зыҟны</li>
          <li>NOUN: зыҧсы, згәы, Зыгәра, Зҿы, зхы, зыбжьы, зылыҧха, зымаҵ, зыхә, зыӡбахә</li>
          <li>VERB-NonFin: Измааноу, Измааноузеи, змааназ, зыхьӡыз, зыхәҭоугьы, изхарахо</li>
          <li>VERB-Vnoun: зыргәаҟра</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[refl]</a>
    <ul>
      <li>1
        <ul>
          <li>VERB-Fin: сҽысшьуеит</li>
          <li>VERB-NonFin: Сҽааиҭакны, Сҽызласыҧсахуа, сҽеиҭаскыр</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: Уҽеилаҳәа, уҽаанкыл, уҽеилых, уҽыкноуҳауеит, шәҽаанышәкыл</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: аҽазнакхьан, аҽаргәыбзыҕит, аҽаҟьеит, иҽазикит, иҽақәиршәон, иҽыназикит, иҽыназикт, иҽынирхацәеит, лҽааиқәылкит, лҽеиҭалкхьан</li>
          <li>VERB-NonFin: Иҽкамыжькәа, Лҽаарманшәаланы, аҽакәыршаны, аҽамнахырц, лҽылзаанымкылаӡакәа, рҽааизганы</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>VERB-NonFin: зҽырбабаны</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[ro]</a>
    <ul>
      <li>1
        <ul>
          <li>VERB-Fin: Иаҳзааргеит, Иаҳзаҧсам, Исцәымӡӡеит, даҳцәыҧсуеит, дысзыҧшын, дысцәагоит, еиҭаҳзаалгеит, исзаага, исзеиҭалҳәахьеит, исцәымҕуп</li>
          <li>VERB-NonFin: иҳацәшәо, дахьҳзааз, иаҳзыҧшу, исцәызгозеи, исыцҭаз, иҳацааз, сцәукуама, ҳацәшәаны, ҳзынхаратәы</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: шәызхоит, бзаанагеит, иузынҳажьуеит, иузыцәгьахоит, сузлеиуеит, сузыӡырҩлоит, суццоит, узааргалоит, уцәаагоит, шәзыҟарҵоит</li>
          <li>VERB-NonFin: Изуцәызӡарызеи, Ишҧоуцәыӡуаз, Ишәзызура, иузыҧшу, ишышәзеиҭеиҳәаз, шәзаанхама, шәзеиҭасҳәар</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: дазыҧшын, изыҧшуп, ицәыӡит, сазыразуп, аздырхеит, азызымуит, азымҩаӡеит, азыразхан, алаахә, аҽазнакхьан</li>
          <li>VERB-NonFin: Иазууазеи, дазыҧшызшәа, иазызуазеи, иазынаҧшуа, изыҧшыз, ирзаауазеи, Иалаасхәо, Иацәымаашьакәа, Изалшарыма, Ицырҕызуа</li>
        </ul>
      </li>
      <li>Rec
        <ul>
          <li>VERB-Fin: ааизникылт</li>
          <li>VERB-NonFin: еизыразны, рҽааизганы</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>VERB-NonFin: Сҽызласыҧсахуа, Шәызлеиҕьу, дызлалацәажәо, ззигәахәуаз, зларҧсны, злашәоу, злоубазеи, зцәыӡыз, излагәаҭоу, излацоз</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[subj]</a>
    <ul>
      <li>1
        <ul>
          <li>ADV: Сгәанала, скалкало, ҳгәырҕьаҵәа</li>
          <li>VERB-Fin: избеит, избоит, салагеит, сҳәеит, сналазҵааит, снатәеит, снеит, сҭахын, ҳҿынаҳхеит, Ианысҵом</li>
          <li>VERB-NonFin: ҳаицны, исҳәаз, иазызуазеи, изгама, ишысҭаху, иҟаҳҵарызеи, сыҟамзар, сыҟан, ҳаннеиуаз, ҳанҭыҵ</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>ADV: Уҟьантазӡа</li>
          <li>VERB: умбои, уааи, уца, Иаажәг, Иазууазеи, еиқәурхеит, иаҩуцеит, ибгеит, изуҭахузеи, исышәҭ</li>
          <li>VERB-Fin: уца, Иаажәг, еиқәурхеит, иаҩуцеит, ибгеит, исышәҭ, саҭоумҵан, уааи, уаангылишь, уааскьа</li>
          <li>VERB-NonFin: умбои, Иазууазеи, изуҭахузеи, ишәҳәаз, иҟауҵо, уахыччарц, удырратәы, узҿузеи, уҭахымзар, уҳәаратәы</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADV: Ииашаны, имаҷны, иҕарҧшарӡа, Инаган, Ирацәаны, Ишьҭхысаа, еиужьны, изныкымкәа, ииашаҵәҟьаны, ирацәаҩны</li>
          <li>AUX-Fin: ауп, акәын, соуп, оуп, иоуп, акәхап, иакәын, лоуп, акәхарын, роуп</li>
          <li>AUX-NonFin: акәзар, акәымзар, аума, уоума, шакәу, ҟалома, акәны, акәу, акәым, ами</li>
          <li>VERB: иҳәеит, аҳәеит, иҳәан, иалагеит, лҳәеит, далагеит, дцеит, рҳәеит, ҿаанаҭит, иаҿын</li>
          <li>VERB-Fin: иҳәеит, аҳәеит, иҳәан, иалагеит, лҳәеит, далагеит, дцеит, рҳәеит, ҿаанаҭит, иаҿын</li>
          <li>VERB-NonFin: илҳәаз, анакәха, днеины, закәызеи, акәымзар, ахьгылаз, иаҭахузеи, ииҳәаз, хәыҷызар, ахьтәаз</li>
        </ul>
      </li>
      <li>Rec
        <ul>
          <li>VERB-Fin: рылеибахит, ааибарччеит, еибабон, еибарбылгьеит, изааибамгеит, инеибагеит, нибархон, Ҳаибадырит, Ҳаибадырп, ҳаибадыруан</li>
          <li>VERB-NonFin: Шәныҵеибарҟьа, нибархар, рибамҭо, шнибархаз, шәеибашьуама, ҳаибадыруазшәа, ҳнибарҵәар</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>VERB-NonFin: иҟаз, игылаз, инеиз, итәаз, иҟоу, Иҟалаз, Ишәыхьзеи, иамаз, иаҳаз, изҭаз</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>RelType</a>
    <ul>
      <li>Cause
        <ul>
          <li>VERB-NonFin: изуҭахузеи, Изуцәызӡарызеи, дзеиҧшроузеи, дзымцоз, дзынхоз, зеизаагоз, зеиқәузеи, зсумҭозеи, зуҭахыз, зхыбкуа</li>
        </ul>
      </li>
      <li>Loc
        <ul>
          <li>VERB-NonFin: ахьгылаз, ахьтәаз, дахьгылаз, дахьтәаз, иахьцалак, ахьырбаз, дахьнеиз, дахьнеиуаз, дахьтәашаз, дахьышьҭаз</li>
        </ul>
      </li>
      <li>Mnr
        <ul>
          <li>AUX-NonFin: шакәу, шакәыз, шакәызгьы, шиакәу, шиакәыз, шракәыз</li>
          <li>VERB-NonFin: дшыныҩналаз, дышгылаз, дышнеиуаз, иштәаз, шыҟаз, шҧахәыҷыз, дшааиуаз, ишааиуаз, ишаҿыз, ишеицыз</li>
        </ul>
      </li>
      <li>Tmp
        <ul>
          <li>VERB-NonFin: анакәха, данца, анаба, анимк, данааиуаз, данцоз, данҭала, ианынаскьа, шәанаахыҵ, ҳаннеиуаз</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reln</a>
    <ul>
      <li>Ben
        <ul>
          <li>VERB-Fin: дазыҧшын, изыҧшуп, сазыразуп, шәызхоит, Иаҳзааргеит, Иаҳзаҧсам, ааизникылт, аздырхеит, азызымуит, азымҩаӡеит</li>
          <li>VERB-NonFin: Иазууазеи, дазыҧшызшәа, иазызуазеи, иазынаҧшуа, изыҧшыз, ирзаауазеи, Изалшарыма, Ишәзызура, Уазыразума, азылур</li>
          <li>VERB-Vnoun: изҵаара</li>
        </ul>
      </li>
      <li>Com
        <ul>
          <li>VERB-Fin: ицныҟәом, ицылҳәеит, сиццеит, суццоит</li>
          <li>VERB-NonFin: Ицырҕызуа, Сабацахуеи, исыцҭаз, иҳацааз, шәызцынхода</li>
        </ul>
      </li>
      <li>Ins
        <ul>
          <li>VERB-Fin: алаахә, далацалоит, наласырхәт, салацеит, урыланха</li>
          <li>VERB-NonFin: Иалаасхәо, Сҽызласыҧсахуа, Шәызлеиҕьу, дызлалацәажәо, зларҧсны, злашәоу, злоубазеи, излагәаҭоу, излацоз, излацәаҕәаша</li>
        </ul>
      </li>
      <li>Mal
        <ul>
          <li>VERB-Fin: ицәыӡит, Исцәымӡӡеит, даҳцәыҧсуеит, дысцәагоит, ирцәымыҕхан, ирцәырҵәахит, исцәымҕуп, ицәымыҕхан, ицәырымкит, рыцәцеит</li>
          <li>VERB-NonFin: иҳацәшәо, Иацәымаашьакәа, Изуцәызӡарызеи, Ицәнымхо, Ишҧоуцәыӡуаз, дылцәыӡызшәа, зцәыӡыз, ирцәугаз, исцәызгозеи, ицәыуадаҩны</li>
          <li>VERB-Vnoun: Ацәысра</li>
        </ul>
      </li>
      <li>Pot
        <ul>
          <li>AUX-Fin: залшомызт</li>
          <li>VERB-Fin: сыздыруам, сыздырам, сзаҵаҩуам, сызгәамҭаӡеит, узҳәомызт, Дзыҧырӡом, Исзеилымкааит, азхамҵеит, азыгәаҕьуамызт, дзымтәеит</li>
          <li>VERB-NonFin: Исзымдыруа, изаамго, изымчҳакәа, сзеилымкаауа, сзымдыруа, Изымгазар, акрысзиҿаҵанда, анырзымхәыц, бзымдырӡои, дзымаазар</li>
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
          <li>AUX-Fin: акәхап, акәхарын, алшоит, ҟалоит, алшон, залшомызт, ҟалап, ҟалом, ҟалон, ҟамлеит</li>
          <li>AUX-NonFin: ҟалома</li>
          <li>VERB-Fin: иалагеит, далагеит, дцеит, ицеит, даацәажәеит, дҵааит, иаацәажәеит, иналагеит, даахьаҳәын, днеит</li>
          <li>VERB-NonFin: инеиз, анакәха, Иҟалаз, днеины, Ишәыхьзеи, аартны, дааины, данца, дахьтәаз, дзыниаз</li>
          <li>VERB-Vnoun: ашәаҳәара, аҵәыуара, аҳәҳәара, иаара, арыцқьара, ахәаара, ацара, ныҟәара, Аилашәшәра, Ацәысра</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB-Fin: иҳәеит, аҳәеит, иҳәан, лҳәеит, рҳәеит, ҿаанаҭит, аҳәан, аҿынанахеит, ибеит, сыздыруам</li>
          <li>VERB-NonFin: илҳәаз, аашьҭыхны, кны, иаҭахузеи, ииҳәаз, умбои, иаҳәаз, изҭаз, исҳәаз, мҳәакәа</li>
          <li>VERB-Vnoun: аҳәара, Ҳәарас, аизгара, анҵара, Афар, Аҭагалара, Аҽшьра, ааҧхьара, ажра, аилкаара</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: а́кәзаара.</li>
</ul>

<ul>
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: а́кәхара, а́-ҟалара, а́-лшара, а́кәзаара, а́-ҟазаара.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (502)</li>
      <li>VERB-Fin--PRON (189)</li>
      <li>VERB-NonFin--NOUN (273)</li>
      <li>VERB-NonFin--PRON (88)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (234)</li>
      <li>VERB-Fin--PRON (37)</li>
      <li>VERB-NonFin--NOUN (210)</li>
      <li>VERB-NonFin--PRON (20)</li>
      <li>VERB-NonFin--PRON-ADP(а́иҧш) (1)</li>
      <li>VERB-Vnoun--NOUN (16)</li>
      <li>VERB-Vnoun--PRON (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (45)</li>
      <li>VERB-Fin--PRON (18)</li>
      <li>VERB-NonFin--NOUN (35)</li>
      <li>VERB-NonFin--PRON (14)</li>
      <li>VERB-Vnoun--PRON (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 31 relation subtypes: <a>acl:relcl</a>, <a>advcl:compar</a>, <a>advcl:cond</a>, <a>advcl:conv</a>, <a>advcl:purp</a>, <a>advcl:quote</a>, <a>advcl:seq</a>, <a>advmod:q</a>, <a>ccomp:iobj</a>, <a>ccomp:lo</a>, <a>ccomp:obj</a>, <a>ccomp:poss</a>, <a>ccomp:purp</a>, <a>ccomp:quote</a>, <a>ccomp:ro</a>, <a>compound:pred</a>, <a>compound:prt</a>, <a>conj:q</a>, <a>csubj:outer</a>, <a>csubj:quote</a>, <a>flat:name</a>, <a>iobj:cs</a>, <a>iobj:lo</a>, <a>iobj:po</a>, <a>iobj:poss</a>, <a>iobj:ro</a>, <a>nmod:poss</a>, <a>nmod:quote</a>, <a>nsubj:outer</a>, <a>xcomp:lo</a>, <a>xcomp:subj</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>fixed</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
