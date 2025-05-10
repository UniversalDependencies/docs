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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udab_abnc216)<br />
Download all treebanks: [UD 2.16](/#download)

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

I am grateful to Saida Adzhindzhal (Suchum) for helping me understanding some of the constructions in the texts.

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

[acl](ab_abnc-dep-acl.html) – [acl:relcl](ab_abnc-dep-acl-relcl.html) – [advcl](ab_abnc-dep-advcl.html) – [advcl:compar](ab_abnc-dep-advcl-compar.html) – [advcl:cond](ab_abnc-dep-advcl-cond.html) – [advcl:conv](ab_abnc-dep-advcl-conv.html) – [advcl:purp](ab_abnc-dep-advcl-purp.html) – [advcl:quote](ab_abnc-dep-advcl-quote.html) – [advcl:seq](ab_abnc-dep-advcl-seq.html) – [advmod](ab_abnc-dep-advmod.html) – [advmod:q](ab_abnc-dep-advmod-q.html) – [amod](ab_abnc-dep-amod.html) – [appos](ab_abnc-dep-appos.html) – [aux](ab_abnc-dep-aux.html) – [case](ab_abnc-dep-case.html) – [cc](ab_abnc-dep-cc.html) – [ccomp:iobj](ab_abnc-dep-ccomp-iobj.html) – [ccomp:lo](ab_abnc-dep-ccomp-lo.html) – [ccomp:obj](ab_abnc-dep-ccomp-obj.html) – [ccomp:poss](ab_abnc-dep-ccomp-poss.html) – [ccomp:purp](ab_abnc-dep-ccomp-purp.html) – [ccomp:quote](ab_abnc-dep-ccomp-quote.html) – [ccomp:ro](ab_abnc-dep-ccomp-ro.html) – [compound](ab_abnc-dep-compound.html) – [compound:pred](ab_abnc-dep-compound-pred.html) – [compound:prt](ab_abnc-dep-compound-prt.html) – [conj](ab_abnc-dep-conj.html) – [conj:q](ab_abnc-dep-conj-q.html) – [cop](ab_abnc-dep-cop.html) – [csubj](ab_abnc-dep-csubj.html) – [csubj:outer](ab_abnc-dep-csubj-outer.html) – [csubj:quote](ab_abnc-dep-csubj-quote.html) – [det](ab_abnc-dep-det.html) – [discourse](ab_abnc-dep-discourse.html) – [dislocated](ab_abnc-dep-dislocated.html) – [flat](ab_abnc-dep-flat.html) – [flat:name](ab_abnc-dep-flat-name.html) – [iobj](ab_abnc-dep-iobj.html) – [mark](ab_abnc-dep-mark.html) – [nmod](ab_abnc-dep-nmod.html) – [nmod:poss](ab_abnc-dep-nmod-poss.html) – [nmod:quote](ab_abnc-dep-nmod-quote.html) – [nsubj](ab_abnc-dep-nsubj.html) – [nsubj:outer](ab_abnc-dep-nsubj-outer.html) – [nummod](ab_abnc-dep-nummod.html) – [obj](ab_abnc-dep-obj.html) – [obj:cs](ab_abnc-dep-obj-cs.html) – [obj:lo](ab_abnc-dep-obj-lo.html) – [obj:po](ab_abnc-dep-obj-po.html) – [obj:poss](ab_abnc-dep-obj-poss.html) – [obj:ro](ab_abnc-dep-obj-ro.html) – [obl](ab_abnc-dep-obl.html) – [orphan](ab_abnc-dep-orphan.html) – [parataxis](ab_abnc-dep-parataxis.html) – [punct](ab_abnc-dep-punct.html) – [root](ab_abnc-dep-root.html) – [vocative](ab_abnc-dep-vocative.html) – [xcomp](ab_abnc-dep-xcomp.html) – [xcomp:lo](ab_abnc-dep-xcomp-lo.html) – [xcomp:subj](ab_abnc-dep-xcomp-subj.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1221 sentences and 9652 tokens.</li>
</ul>

<ul>
<li>This corpus contains 2248 tokens (23%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 58 types of words that contain both letters and punctuation. Examples: Ҷына-ҟәыбҷа, Жәа-минуҭк, ана-ара, аху-хуҳәа, уахыки-ҽнаки, шәкы-шәкы, 33-тәи, 40-ҟа, 45-ҟа, Аҟыр-ҟырҳәа, Днаҧшы-ааҧшуа, Дцо-дцо, Енџьы-Ҳаным, Зны-зынла, Знык-ҩынтә, Иаҳа-иаҳа, Леонид-иҧа, Уахи-ҽни, Укәыкәы-цыкәуа, Хыш-хырҵәыла, аа-лак, аа-махҽк, аз-уадак, дныҩнаҧшы-ааҩнаҧшын, дҕьаҵәы-ҕьаҵәуан, иааҟрым-ҿрымит, иахьца/лак, издыру/аз, изнеи/ра, икылҧш-кылӡырҩуа, инарықәтәа-аарықәтәо, инықәнашь-аақәнашьит, иҿы-инапы, лассы-ласс, лассы-лассы, маҷ-маҷ, рырахә-рышәахә, с-Ҷына-ҟәыбҷа, таҧ-таҧуа, уажәы-уашьҭан, уахгьы-ҽынгьы, х-мааҭк, х-минуҭк, хара-хара, хә-минуҭк, хәыҷы-хәыҷла, цә-уҕәк, шаҵәы-шаҵәуа, қыџь-қыџьуа, қәац-қәацо</li>
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
<li>This corpus contains 3 word types tagged as particles (PART): уҳәа, шҧа, ҳәа</li>
</ul>

<ul>
<li>This corpus contains 33 lemmas tagged as pronouns (PRON): а́рҭ, аба́рҭ, абни́, абри́, акгьы́, акы́, акы́заҵәк, акы́мзарак, ари́, аӡәы́, аӡәы́р, бара́, да́ҽаӡә, дара́, дасу́, егьи́, зегьы́, знтәы́к, иара́, лара́, руакы́, руаӡәы́к, сара́, у́рҭ, уара́, уба́рҭ, убри́, уи́, шаҟаҩы́, шьоукы́, шәара́, ҳа́рҭ, ҳара́</li>
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
    <li>AUX: ауп, акәын, соуп, иоуп, лоуп, акәхарын, иакәын, оуп, акәхап, боуп</li>
    <li>VERB: иҳәеит, аҳәеит, дцеит, иалагеит, иҳәан, лҳәеит, рҳәеит, иаҿын, ҿаанаҭит, аҳәан</li>
  </ul>
  </li>
</ul>

<ul>
  <li>NonFin
  <ul>
    <li>AUX: акәзар, аума, акәу, акәымзар, лакәзаргьы, ракәызшәа, ракәым, ракәымкәа, роума, соума</li>
    <li>VERB: анакәха, инеиз, иҟаз, иҟоу, аашьҭыхны, закәызеи, илҳәаз, итәаз, Иҟалаз, иаҭахузеи</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: аҳәара, ашәаҳәара, аҵәыуара, Ҳәарас, аизгара, анҵара, арыцқьара, ныҟәара, Аилашәшәра, Афар</li>
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
      <li>PRON: лара, бара, бареи, ларгьы, баргьы</li>
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
      <li>NOUN: аҧшәма, аҩсҭаа, акапитан, аҧҳәыс, ахәыҷқәа, аҧсуа, иан, анцәа, ран, аашьаҩцәа</li>
      <li>NUM: хәҩык, ҩыџьа, ахҩыкгьы, быжьҩык, хҩык, ҳҩыџьагь, Бжьҩы, Рҩыџьагьы, шәҩыџьагьы, Ҩажәижәаҩык</li>
      <li>PRON: аӡәгьы, аӡәы, шьоукы, аӡә, аӡәыр, дасу, шаҟаҩы, Руаӡәк, даҽаӡә</li>
      <li>VERB: ҳаиҩызцәазааит, Иеибацәан, Иеиҳабу, Иуадаҩцәамкәан, Шәуаами, дкапитанын, дреиуоуп, дсықәлоуп, дыӡҕабушәа, еиҭымцәаны</li>
      <li>VERB-Fin: ҳаиҩызцәазааит, Иеибацәан, дкапитанын, дреиуоуп, дсықәлоуп, иреиуоуп, сагьҳәынҭқаруп, саҳауп, сеиҳабуп, сҭахын</li>
      <li>VERB-NonFin: Иеиҳабу, Иуадаҩцәамкәан, Шәуаами, дыӡҕабушәа, еиҭымцәаны, иреиуаз, иреиҳабыз, иуааны, шеиҩызцәаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nhum
    <ul>
      <li>ADV: Шаҟа</li>
      <li>NOUN: аҧара, Абгахәыҷы, амилициа, аҩны, Аҵысҕра, амашьына, амшын, астол, ашә, аамҭа</li>
      <li>NUM: аҩбагьы, акы, ҩба, 40-ҟа, 45-ҟа, Жәаба, Хышәҟа, Хҧаҟа, жәабаҟа, жәабаҿы</li>
      <li>PRON: акгьы, акы, ак, руакы, Акызаҵәык, Акымзарак, руак</li>
      <li>VERB: Ииашоуп, иуцәажәашьоузеи, иаамҭоуп, Закә, Иабыкәу, Измааноу, Измааноузеи, Ишоуроуп, ашәақәоу, дҭаацәараӡам</li>
      <li>VERB-Fin: Ииашоуп, иаамҭоуп, Ишоуроуп, дҭаацәараӡам, исусӡам, ишәусым, ламысдароуп, митәуп, сыжәлоуп, сыхьӡуп</li>
      <li>VERB-NonFin: иуцәажәашьоузеи, Закә, Иабыкәу, Измааноу, Измааноузеи, ашәақәоу, змааназ, зыхьӡыз, зыхәҭоугьы, иуцәажәашьоу</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NOUN: Жәа-минуҭк, Хәышықәса, аа-лак, аа-махҽк, аамшҟа, х-мааҭк, х-минуҭк, хышықәсаны, хә-минуҭк, ҧшь-класск</li>
      <li>VERB-Fin: хымшуп</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: хәыҷқәа, дуқәа, бзиақәа, дуқәак, дуӡӡақәа, ҟәымшәышәқәа, ҵарқәа, ихәыҷқәа, схәыҷқәа</li>
      <li>NOUN: аҟәарасақәа, ахәыҷқәа, аашьаҩцәа, ауаа, аҧсшьаҩцәа, аҩызцәа, иашьцәа, алақәа, аҧарақәа, абгақәа</li>
      <li>PRON: ҳара, урҭ, шәара, ҳарҭ, дара, абарҭ, даргьы, шьоукы, Абарҭқәа, Арҭ</li>
      <li>PROPN: Кәынҵалраа, Масладубоваа, Чачаа, Шәлиманраа</li>
      <li>VERB-Fin: ҳаиҩызцәазааит, Иеибацәан, уаан</li>
      <li>VERB-NonFin: Иуадаҩцәамкәан, Шәуаами, ашәақәоу, еиҭымцәаны, иуааны, цәгьақәам, шеиҩызцәаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: хәыҷык, ду, рацәак, аиҵбы, дук, Бзиа, дуӡӡак, еиҵбы, хьанҭа, ҧшӡак</li>
      <li>NOUN: аҧара, Абгахәыҷы, амилициа, аҧшәма, аҩны, аҩсҭаа, Аҵысҕра, акапитан, амашьына, амшын</li>
      <li>PRON: сара, уи, уара, иара, лара, акгьы, аӡәгьы, саргьы, иаргьы, акы</li>
      <li>VERB: аҳәара, ибзиоуп, хәыҷызар, Ииашоуп, ашәаҳәара, аҵәыуара, иуцәажәашьоузеи, шҧахәыҷыз, Ҳәарас, Ицәгьам</li>
      <li>VERB-Fin: ибзиоуп, Ииашоуп, Ицәгьам, Иҳаиҕьӡам, иаамҭоуп, маҷуп, сеиҳабуп, хәыҷызаарын, Имаҷуп, Иуадаҩым</li>
      <li>VERB-NonFin: хәыҷызар, иуцәажәашьоузеи, шҧахәыҷыз, мариоу, Иеиҳабу, Измааноу, Измааноузеи, Ииашам, Ирацәаны, Ирацәаӡами</li>
      <li>VERB-Vnoun: аҳәара, ашәаҳәара, аҵәыуара, Ҳәарас, аизгара, анҵара, арыцқьара, ныҟәара, Аилашәшәра, Афар</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abe
    <ul>
      <li>NOUN: рахәыда, Уажәада</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ben
    <ul>
      <li>ADJ: Аказы, зназы</li>
      <li>NOUN: аамҭаз, аамҭазы, Ахәылҧазы, Аҧсшьаразы, ацәыргақәҵазы, Ҳгыламҭаз</li>
      <li>VERB-Vnoun: ишьразы, ргаразы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: џьашьатәыс</li>
      <li>NOUN: ажәабжьыс, ахықәан, ақәцәан, гәырҩас, Бгас, Гашьас, Гәнаҳарас, аҭакс, аҭакыс, аҿықәан</li>
      <li>VERB-Vnoun: Ҳәарас</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ine
    <ul>
      <li>NOUN: ауадаҿы, баҕәазаҿы, аусураҿы, аҧарашьҭаҵарҭаҿы, Алаҿы, Аҧсабараҿы, Аҩнаҭаҿы, Иусумҭаҿы, Суадаҿы, абардраҿы</li>
      <li>NUM: жәабаҿы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: ҷыдала</li>
      <li>NOUN: ҟамчыла, ажәала, лаҧшыла, машьынала, џьабаала, Қәрала, Хыш-хырҵәыла, аамҭала, архала, ашьҭахьала</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Lat
    <ul>
      <li>ADJ: Еиқәахь</li>
      <li>NOUN: суадахь, ашьашьмахьы, луадахь, Ауадахь, абнахь, акрыфарҭахь, ақыҭахь, иуадахь, ҳуадахь, Амилициахь</li>
      <li>VERB-Vnoun: анҵәарахьы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>NOUN: акаҟны, ашьапаҟны, аҳҭынраҟны</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ter
    <ul>
      <li>NOUN: Рашҭанӡа, аҵыхәанӡа, хәылбыҽханӡа</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: ахатә, аҳаиртә, аҵыхәтәантәи, агәыбжьанытәгьы, араионтә, асасааирҭатә, ашьҭахьтәи, аҩнуҵҟатәи, Аказы, абзиа</li>
      <li>NOUN: аҧара, Абгахәыҷы, амилициа, аҧшәма, аҩны, Аҵысҕра, амашьына, амшын, астол, ауада</li>
      <li>NUM: аҩбагьы, ахҩыкгьы</li>
      <li>VERB-Vnoun: аҳәара, ашәаҳәара, аҵәыуара, аизгара, Афар, Ацәысра, Ақәҧара, Аҭагалара, абыбра, агылара</li>
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
      <li>AUX-Fin: ыҟам, акәӡамызт, ракәым, ҟамлеит</li>
      <li>AUX-NonFin: акәымзар, ракәым, ракәымкәа</li>
      <li>VERB-Fin: сыздыруам, сыздырам, сымам, ҩашьомызт, рымамызт, ыҟаӡам, Ицәгьам, Иҳаиҕьӡам, дыҟамызт, дыҟаӡамызт</li>
      <li>VERB-NonFin: умбои, мҳәакәа, бмаҳаӡеи, дмыццакӡо, сзымдыруа, узымдырӡои, уҭахымзар, Акәымзар, Амшәгьы, Иацәымаашьакәа</li>
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
      <li>VERB-Fin: далацалоит, сузыӡырҩлоит, узааргалоит, узгалап, ҳаицыхынҳәлон, ҳнеиааилап</li>
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
      <li>VERB-NonFin: хәыҷызар, инаҧшызар, уҭахымзар, Акәымзар, Днеизар, Еилукаазар, Иаакылсыр, Ибымҳәар, Изымгазар, Илымгаҵәҟьазар</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cnd2
    <ul>
      <li>VERB-NonFin: иааннамкылозҭгьы, симамызҭгьы, сыдрымкылазҭгьы, уҧшуазҭгьы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: сықәыртәа, исышәҭ, уааи, уаангылишь, уааскьа, уаҧырҵ, уца, уҳацхраа, шәит, ҟаҵала</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>AUX-Fin: оума</li>
      <li>AUX-NonFin: аума, акәу, роума, соума, уоума, ҟалома</li>
      <li>VERB-NonFin: умбои, бмаҳаӡеи, изгама, изуҭахузеи, узымдырӡои, шҧоубои, шәабацеи, Баҳама, Иабацеи, Иабаҟоу</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>VERB-Fin: иҳауҳәароуп, сыҩналароуп, ҭашәырцәыроуп, ҳасроуп</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>VERB-NonFin: аабгандаз, жәдыруандаз, сҿамҳандаз, удыруандаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prp
    <ul>
      <li>VERB-NonFin: ааигарц, ааргарц, ааҳхәарц, агарц, адырырц, арӡырц, аҽамнахырц, баблырц, диҿадыргыларц, днатәарц</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>VERB-Fin: убааит, ҳаиҩызцәазааит, Ишәеиҳәоз, аабзиахааит, бзиазааит, дааиааит, дгылазааит, иҧижәааит, сызиватәоз, шәамырҧхашьааит</li>
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
      <li>VERB-Fin: иҳәеит, аҳәеит, дцеит, иалагеит, лҳәеит, рҳәеит, ҿаанаҭит, аҿынанахеит, дҵааит, иаацәажәеит</li>
      <li>VERB-NonFin: анакәха, аашьҭыхны, Ишәыхьзеи, данца, днеины, дыҩны, иааҟәыҵны, иҟалеи, кны, мҳәакәа</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: акәхарын</li>
      <li>VERB-NonFin: Дзыршанхарыз, Излихрыз, дааирызу, игарызу, изгарыдаз, ишысшәысҵарыз, иҟарҵарыз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cnd2
    <ul>
      <li>VERB-NonFin: Иҟалашаз, дахьтәашаз, дахьышьҭарҵашаз, излацәаҕәашаз, илфашаз, сшыҟалашаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: акәхап, ҟалап</li>
      <li>VERB-Fin: акәхап, ааиҭаскып, аасрыхып, аасшьап, дахьӡап, дақәсыртәап, еилазгарым, еиқәсырхап, збап, иакәхап</li>
      <li>VERB-NonFin: иҟаҳҵарызеи, Изалшарыма, Изуцәызӡарызеи, Ишәзызура, аакылнаҵәарашәа, дцараны, ииҳәараны, исарҳәари, исҳәараны, иҟалҵарызеи</li>
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
      <li>AUX-Fin: акәын, иакәын, ракәын, акәӡамызт, лакәын, ҟалон</li>
      <li>AUX-NonFin: ракәызшәа, шакәыз, шакәызгьы, шиакәыз, шракәыз</li>
      <li>VERB-Fin: иаҿын, дыҟан, ишьҭан, ҩашьомызт, иман, иҟан, рымамызт, сҭахын, аҿаҟаҵан, диҳәон</li>
      <li>VERB-NonFin: иҟаз, закәызеи, итәаз, иҭаз, дышнеиуаз, игылаз, шҧахәыҷыз, ахьгылаз, данааиуаз, дахьышьҭаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>VERB-Fin: иҳәан, аҳәан, Сҩагылан, ааиган, дааин, даахьаҳәын, днарысын, иҿынеихан, аагәахәын, ааизиган</li>
      <li>VERB-NonFin: инеиз, илҳәаз, Иҟалаз, иаҳаз, иаҳәаз, изҭаз, исҳәаз, ахьырбаз, дзыниаз, ииҳәаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>VERB-Fin: аахьан, адыркхьан, аҽазнакхьан, днеихьан, дныҟәахьан, дрыцқьахьан, дыҧсхьан, еизахьан, еимырдахьан, иалагахьан</li>
      <li>VERB-NonFin: Иаҳахьаз, абазбахьаз, дышдыргәаҟхьаз, иаахьаз, иааҧсахьаз, иҟасҵахьази, шыҩналахьаз</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: ауп, соуп, иоуп, лоуп, оуп, боуп, роуп, алшоит, ыҟам, оума</li>
      <li>AUX-NonFin: акәзар, аума, акәу, акәымзар, лакәзаргьы, ракәым, ракәымкәа, роума, соума, уоума</li>
      <li>VERB-Fin: ибзиоуп, сыздыруам, иаауеит, избоит, иҟоуп, сыздырам, сымам, Ииашоуп, дыҟоуп, сибоит</li>
      <li>VERB-NonFin: иҟоу, иаҭахузеи, умбои, хәыҷызар, ҳаицны, иуцәажәашьоузеи, иҩноу, иҷырҷыруа, Иазууазеи, аманы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prf
    <ul>
      <li>VERB-Fin: Дымнеицт, дырҭихьазаарын, еилыҵхьеит, здырхьеит, имаацт, имшьацт, исзеиҭалҳәахьеит, ишәаҳахьеит, иҳәахьеит, лоухьеит</li>
      <li>VERB-NonFin: базхәыцхьоу, балаҧшхьоу, еицныҟәахьаны, ииҳәац, инеихьада, ишаҿыц, ишыҟаиҵац, нысххьазар, уаҳахьоума, умаҳаӡаци</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB-Fin: диртәеит, сықәыртәа, еиқәурхеит, инеилыркит, ааирххеит, аалыртын, аасрыхып, аасыкәиршеит, аахнарџьаџьеит, адыркхьан</li>
      <li>VERB-NonFin: аартны, иархәаны, Дзыршанхарыз, Ицырҕызуа, Лҽаарманшәаланы, Шәныҵеибарҟьа, ааиланаргьежьызшәа, ааруны, аарҵысны, адыргыланы</li>
      <li>VERB-Vnoun: арыцқьара, аилыргара, ашьақәырҕәҕәара</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: аҿаҟаҵан, деилаҳәоуп, кнаҳан, гоуп, дааӡан, деилкаам, днаилагахт, иацхраатәуп, идҵам, икнаҳан</li>
      <li>VERB-NonFin: Икнаҳан, анеилкааха, дахьжыз, дҭаҩызу, злашәоу, зышәҭаххаз, иаартыз, иакәыршаз, иалаҟаҵаз, ивҵрааз</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>VERB-Fin: дааргазаап, дхәыҷызаап, иауазаап, иаҳазаап, иҟазаап</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nfh2
    <ul>
      <li>VERB-Fin: хәыҷызаарын, дырҭихьазаарын, шәырфахьазаарын</li>
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
      <li>PRON: уи, ари, убри, уигьы, егьи, урҭ, абарҭ, абри, Абарҭқәа, Арҭ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: акгьы, аӡәгьы, акы, аӡәы, ак, шьоукы, аӡә, аӡәыр, руакы, Акызаҵәык</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: сара, уи, иара, уара, лара, ҳара, иаргьы, саргьы, шәара, ҳарҭ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: аҩбагьы, хәҩык, ҩыџьа, 12, акы, ахҩыкгьы, быжьҩык, хҩык, ҩба, ҳҩыџьагь</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: 33-тәи, аҩбатәи</li>
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
      <li>PRON: сара, ҳара, саргьы, ҳарҭ, сареи, ҳаргьы, ҳарҭгьы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: уара, шәара, бара, уаргьы, бареи, баргьы, уареи</li>
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
      <li>ADP: лзы, лыда, лышҟа, лаҵкыс, леиҧш, лышьҭахь, лыҩнуҵҟа</li>
      <li>ADV: лхаҭа</li>
      <li>NOUN: лгәы, лыбжьы, лнапы, луадахь, лхы, Лхахәы, бгәы, лажәа, лылахь, лыхцәы</li>
      <li>VERB-Vnoun: бнеира, лазҵаарагьы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: имазеины, ихатә, ихәыҷқәа, иҕәҕәаны, иҵәыҵәӡа</li>
      <li>ADP: иаҧхьа, ишьҭахь, уаҧхьа, ида, Иеиҳагьы, иеиҧш, изыҳәан, иҟны, иҟынӡа, иҭыҧан</li>
      <li>ADV: имацара, Ухала, изхара, ихазы, ихала</li>
      <li>NOUN: иан, игәы, иашьцәа, ихы, ибжьы, имашьына, иангьы, ила, имакәан, инапы</li>
      <li>VERB-Fin: иҿынеихан, иҿынеихеит, иҿааихеит, сихәарҭоуп, уҿааха</li>
      <li>VERB-NonFin: иуцәажәашьоузеи, иуцәажәашьоу, ишиусыз</li>
      <li>VERB-Vnoun: иаара, идырра, изҵаара, ишьразы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADP: еиҧш, ашьҭахь, азы, аҿы, аҧхьа, ала, ашҟа, ахь, аҟны, аҟара</li>
      <li>ADV: азхараҵәҟьа, ахала</li>
      <li>NOUN: акапитан, агәра, абжьы, азыбжак, аусзуҩы, ашә, аӡбахә, аамҭа, ахықәан, аџьыба</li>
      <li>VERB-Fin: аҿынанахеит, аҿаанахеит, аҿынанахон, иақәхом</li>
      <li>VERB-NonFin: еиҕьу, иеиҳабугьы, иеиҵбугьы</li>
      <li>VERB-Vnoun: аилыргара, аицәахареи, анҵара, анҵәареи, арыцқьара, ахцәажәара, ашьақәырҕәҕәара</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: Шәхатә, рааигәа, реиҳабы, реиҵбы, рхатәы, шәаҧсуа</li>
      <li>ADP: рҿы, реиҧш, шәаасҭа, рышьҭахь, ҳҿы, рахь, раҧхьа, рзы, рҟны, ҳаҟны</li>
      <li>ADV: рхаҭақәа, шәызхараҵәҟьа, шәымацара, ҳазхараҵәҟьа</li>
      <li>INTJ: шәанаџьалбеит</li>
      <li>NOUN: ран, ҳаҧшәма, рыҧсы, рхы, рҭыҧ, шәгәы, Ҳан, ҳамш, ҳгәы, рангьы</li>
      <li>NUM: ҳҩыџьагь, Рҩыџьагьы, рыҩбагьы, шәҩыџьагьы</li>
      <li>PRON: руакы, Руаӡәк, руак, рызынтәык</li>
      <li>VERB-Fin: ҳҿынаҳхеит, Иҳаиҕьӡам, дреиуоуп, иреиуоуп, ишәусым, рҿаархеит, рҿынархеит</li>
      <li>VERB-NonFin: иреиуаз, иреиҳабыз, ирлахьынҵахаз, рҿанынарха, уҳаиҕьушәа</li>
      <li>VERB-Vnoun: Шәҭазаара, раагара, ргаразы, рыфара</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: бхәыҷы, имазеины, ихатә, ихәыҷқәа, иҕәҕәаны, иҵәыҵәӡа, схәыҷқәа</li>
      <li>ADP: еиҧш, ашьҭахь, азы, аҿы, аҧхьа, ала, ашҟа, ахь, аҟны, аҟара</li>
      <li>ADV: имацара, лхаҭа, Ухала, азхараҵәҟьа, ахала, изхара, ихазы, ихала</li>
      <li>NOUN: иан, игәы, акапитан, сгәы, иашьцәа, ихы, сан, агәра, ибжьы, имашьына</li>
      <li>PROPN: с-Ҷына-ҟәыбҷа</li>
      <li>VERB-Fin: аҿынанахеит, иҿынеихан, иҿынеихеит, сҿынасхеит, аҿаанахеит, аҿынанахон, дсықәлоуп, иақәхом, исусӡам, иҿааихеит</li>
      <li>VERB-NonFin: иуцәажәашьоузеи, еиҕьу, иеиҳабугьы, иеиҵбугьы, иуцәажәашьоу, ишиусыз, сгәҭаны, сҿанынасха</li>
      <li>VERB-Vnoun: аилыргара, аицәахареи, анҵара, анҵәареи, арыцқьара, ахцәажәара, ашьақәырҕәҕәара, бнеира, иаара, идырра</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Dyn</a>
    <ul>
      <li>No
        <ul>
          <li>AUX-Fin: ауп, акәын, соуп, иоуп, лоуп, иакәын, оуп, боуп, ракәын, роуп</li>
          <li>AUX-NonFin: акәзар, аума, акәу, акәымзар, лакәзаргьы, ракәызшәа, ракәым, ракәымкәа, роума, соума</li>
          <li>VERB: иаҿын, иҟаз, дыҟан, ибзиоуп, иҟоу, закәызеи, иаҭахузеи, итәаз, ишьҭан, иҟоуп</li>
          <li>VERB-Fin: иаҿын, дыҟан, ибзиоуп, ишьҭан, иҟоуп, сымам, Ииашоуп, дыҟоуп, иман, иҟан</li>
          <li>VERB-NonFin: иҟаз, иҟоу, закәызеи, иаҭахузеи, итәаз, иҭаз, хәыҷызар, ҳаицны, игылаз, иуцәажәашьоузеи</li>
          <li>VERB-Vnoun: Шәҭазаара, аҟазаара, лара</li>
        </ul>
      </li>
      <li>Yes
        <ul>
          <li>AUX-Fin: акәхарын, акәхап, алшоит, ҟалап, ҟалоит, ҟалон, ҟамлеит</li>
          <li>AUX-NonFin: ҟалома</li>
          <li>VERB-Fin: иҳәеит, аҳәеит, дцеит, иалагеит, иҳәан, лҳәеит, рҳәеит, ҿаанаҭит, аҳәан, аҿынанахеит</li>
          <li>VERB-NonFin: анакәха, инеиз, аашьҭыхны, илҳәаз, Иҟалаз, умбои, Ишәыхьзеи, данца, днеины, дышнеиуаз</li>
          <li>VERB-Vnoun: аҳәара, ашәаҳәара, аҵәыуара, Ҳәарас, аизгара, анҵара, арыцқьара, ныҟәара, Аилашәшәра, Афар</li>
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
          <li>VERB-Fin: лдыржәуан, налирбеит, налсыркит</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB-Fin: инеилыркит, инеисырбеит, иусырбап</li>
        </ul>
      </li>
      <li>Neut
        <ul>
          <li>VERB-NonFin: ааруны, аруны</li>
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
          <li>VERB-Fin: дынлазҵааит, сналазҵааит, баҳаит, блацәажәа, илиҭеит, илмаҳаит, лоухьеит, налыцхрааит, слазҵааит, сналеихырхәан</li>
          <li>VERB-NonFin: Илыхьзеи, бмаҳаӡеи, лыманы, Баҳама, Илгаҵәҟьаны, Илхарамкәа, Слазҵаанӡа, анлаҳа, анлысҭа, былмацәажәо</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>AUX-Fin: иоуп, иакәын</li>
          <li>AUX-NonFin: уоума, шиакәу, шиакәыз</li>
          <li>VERB-Fin: иман, диҳәон, дукәыхшоуп, шәит, Ихьӡын, диазҵааит, днаиазҵааит, днаиацәажәеит, днаисын, иакәхап</li>
          <li>VERB-NonFin: изҭаз, иаҳаз, иманы, анисҭа, ахьимамыз, диазҵаазшәа, диазҵаауа, диҳәацыҧхьаӡа, днаиҧызаны, иаҳауаз</li>
          <li>VERB-Vnoun: Иҳәара</li>
        </ul>
      </li>
      <li>Neut
        <ul>
          <li>AUX-Fin: ауп, акәын, акәхарын, оуп, акәхап, акәӡамызт, оума</li>
          <li>AUX-NonFin: акәзар, аума, акәу, акәымзар, шакәыз, шакәызгьы</li>
          <li>VERB-Fin: иаацәажәеит, акәхап, акәхеит, иахьӡын, Иаҳаит, адыркхьан, акәым, алыркит, амамызт, аман</li>
          <li>VERB-NonFin: анакәха, аманы, иархәаны, Акәымзар, акәу, акәымзи, аман, аума, данаҳәаз, деигәырҕьаны</li>
          <li>VERB-Vnoun: аисра, лазҵаарагьы</li>
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
          <li>VERB-Fin: сналыхәаҧшит, даалыдгылт, длықәҳәҳәеит, дылҟәаҵуамызт, дынлыхәаҧшит, ибхашҭит, илеиҳәеит, илыдиҵеит, илықәуп, илықәыҧсоуп</li>
          <li>VERB-NonFin: быдызҵада, дбыдыбкылома, длыхәазырҧшы, илыҕроу, лықәҧсаны, лыҵамкәа, лҧыраҳәаны, лҿыкьасо, налҿаба, сналыдгыланы</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB-Fin: ишьҭан, Снеиҧылт, ааинырҟьеит, ааихьнашьуан, акриҿеиҵан, дааигәалашәеит, дааиҧылеит, дааиҧылт, диватәеит, дихәаҧшуан</li>
          <li>VERB-NonFin: Иахьиоуҳәалак, Иҧылаз, ааишәҵаны, данихәаҧш, диҵаланы, диҿадыргыларц, иааумхны, иахьынӡаулшо, ивҵрааз, игәалашәаз</li>
        </ul>
      </li>
      <li>Neut
        <ul>
          <li>AUX-Fin: алшоит</li>
          <li>VERB-Fin: иалагеит, иаҿын, иналагеит, далагеит, сықәыртәа, аҿаҟаҵан, даалацәажәеит, дааҩнашылт, днықәтәеит, дныҩнаҧшит</li>
          <li>VERB-NonFin: иааҟәыҵны, иҭаз, дҭыҵны, иаҿыз, илаланы, инамҵасны, ишаҿыз, иҩноу, иҭоу, кыдҵаны</li>
          <li>VERB-Vnoun: анҵара</li>
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
          <li>VERB-Fin: диртәеит, даалырҽхәеит, дааргазаап, дааргон, даарыцҳасшьеит, дакит, дархәыцит, дақәсыртәап, даҳҵәахит, ддырхәыцит</li>
          <li>VERB-NonFin: Дзыршанхарыз, дааигеижьҭеи, дааргаанӡа, дабар, дагар, данимбаӡа, даниныҳәоз, данырымба, дафар, дахьыббаз</li>
        </ul>
      </li>
      <li>Fem
        <ul>
          <li>VERB-Fin: Бахызбаауам</li>
          <li>VERB-NonFin: баблырц, бшакуа</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB-Fin: уаабеит, уафоит, уааигоит, уеиқәнархом, узгалап, урыцҳасшьоит, уҳашьҭӡом</li>
          <li>VERB-NonFin: Уахьыржьо, уаашьҭыхны, уанбалгои, уганы, узымдырӡои, улкагәа, уҭахызар</li>
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
          <li>VERB-Fin: илызҳәаӡом, илызҳәомызт, лзыҭкаауамызт</li>
          <li>VERB-NonFin: бзымдырӡои, лзеилымкаазшәа, лызгәамҭазшәа, лҽылзаанымкылаӡакәа</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB-Fin: узҳәомызт, изамхӡом, изгом, издыруамызт, изычҳауамызт</li>
          <li>VERB-NonFin: узымдырӡои</li>
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
          <li>VERB-Fin: иҽазикит, иҽақәиршәон, иҽыназикт, иҽынирхацәеит, уҽаанкыл</li>
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
          <li>VERB-Fin: бзаанагеит, ҳалцәымцхәын</li>
          <li>VERB-NonFin: дылцәыӡызшәа</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB-Fin: изыҧшуп, изааибамгеит, изгылан, изыманшәалоуп, изыҧшын, инеизеиҭасҳәеит, ицныҟәом, ицылҳәеит, ицәыӡит, сизчалтуеит</li>
          <li>VERB-NonFin: Изалшарыма, Изуцәызӡарызеи, Ицырҕызуа, Ишҧоуцәыӡуаз, изирхынҳәырц, изнеиз, изынхаз, изыҧшыз, изыӡырҩуаз, илаланы</li>
        </ul>
      </li>
      <li>Neut
        <ul>
          <li>VERB-Fin: аздырхеит, азызымуит, азыразхан, аҽазнакхьан, базыӡырҩла, дазааҭгылеит, далацалоит, иазхәыцит, иазыҧшуп, иназааигәахан</li>
          <li>VERB-NonFin: Иазууазеи, дазыҧшызшәа, иазынаҧшуа, Иазызуазеи, Иалаасхәо, Иацәымаашьакәа, Сабацахуеи, Уазыразума, азылур, азымхозшәа</li>
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
          <li>ADV: деиҿкааӡа, дҕьаҵәыҕьаҵәуа</li>
          <li>VERB-Fin: дцеит, дыҟан, дҵааит, далагеит, днеит, даасҿаҧшит, даацәажәеит, дынлазҵааит, дычмазаҩхеит, дыҟоуп</li>
          <li>VERB-NonFin: данца, днеины, дышнеиуаз, дыҩны, дааины, дазыҧшызшәа, данааиуаз, дахьышьҭаз, дзыниаз, дласбаха</li>
        </ul>
      </li>
      <li>Fem
        <ul>
          <li>VERB-Fin: лҳәеит, ибгеит, инеилыркит, аалыртын, аалҟьеит, алыркит, ақәыҿылымҭит, базыӡырҩла, блацәажәа, бца</li>
          <li>VERB-NonFin: илҳәаз, Ибымбои, Ибымҳәар, Илкыз, Илымгаҵәҟьазар, Ишылгаз, аабгандаз, азылур, анылба, баахәыци</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB-Fin: иҳәеит, иҳәан, ибеит, диртәеит, сибоит, ҿааиҭит, ааиган, еиқәурхеит, иааимидеит, иаҩуцеит</li>
          <li>VERB-NonFin: умбои, Иазууазеи, изуҭахузеи, ииҳәаз, иҟауҵо, узҿузеи, уҭахымзар, уҳәаратәы, шҧоубои, Еилукаазар</li>
        </ul>
      </li>
      <li>Neut
        <ul>
          <li>VERB-Fin: аҳәеит, ҿаанаҭит, аҳәан, аҿынанахеит, иакит, ишьҭнахит, ныҟанаҵеит, уафоит, аабжьнахит, ааихьнашьуан</li>
          <li>VERB-NonFin: иаҭахузеи, иаҳәаз, Амшәгьы, Ианаҭахыз, Иаҭаху, Иаҳахьаз, Сабацахуеи, ааиланаргьежьызшәа, аакылнаҵәарашәа, агарц</li>
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
          <li>PROPN: Аҧсны, Қарҭҟа, Адлер, Аҟәа, Аҧсныҟа, Гәылрыҧшь, Лыхны, Москва, Мысрантә, Қарҭтәи</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>PROPN: Жигули, ЦИК</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: Леонид, Мкан, Ира, Ҷына-ҟәыбҷа, Заира, Мариа, Лакоба, Шараҭ, Ҵыхәакьаҿ, Жакьаду</li>
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
          <li>VERB-Fin: инеилыркит, инеисырбеит, иусырбап, лдыржәуан, налирбеит, налсыркит, сдыршәоит</li>
          <li>VERB-NonFin: ааруны, аруны, смырҳәакәа</li>
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
          <li>AUX-Fin: ракәын, роуп, ракәым, шәоуп, ҳауп</li>
          <li>AUX-NonFin: ракәызшәа, ракәым, ракәымкәа, роума, шракәыз</li>
          <li>VERB-Fin: рымамызт, днаразҵааит, днарысын, иҳаҧхьеит, рыман, рымоуп, уҳацхраа, Дҳазҵааит, Иҳамаҵәҟьам, бынразҵааи</li>
          <li>VERB-NonFin: Ишәыхьзеи, ирымаз, Иҳауаз, Иҳахьыз, анраҳа, аншәысҭа, ахьрымам, дахьрацәажәауа, дахьыртәыз, ираҳаратәы</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX-Fin: ауп, акәын, соуп, иоуп, лоуп, акәхарын, иакәын, оуп, акәхап, боуп</li>
          <li>AUX-NonFin: акәзар, аума, акәу, акәымзар, лакәзаргьы, соума, уоума, шакәыз, шакәызгьы, шиакәу</li>
          <li>VERB-Fin: иаацәажәеит, сымам, дынлазҵааит, иман, сналазҵааит, акәхап, акәхеит, диҳәон, дсазҵааит, дукәыхшоуп</li>
          <li>VERB-NonFin: анакәха, иаҳаз, изҭаз, Илыхьзеи, аманы, бмаҳаӡеи, иархәаны, иманы, лыманы, Акәымзар</li>
          <li>VERB-Vnoun: Иҳәара, аисра, лазҵаарагьы</li>
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
          <li>VERB-Fin: рылеибахит, Ишәеиҳәоз, даҳхылаҧшуеит, днарышьҭалан, днаҳҿаҧшит, дрыҵаҟьеит, дҩаҳабжьалт, иаарыдгылт, инарылаҧшит, инарымҵаиҧсан</li>
          <li>VERB-NonFin: Ирҿыҵуа, Ишәгәаҧхозар, Ишәылшозеи, анышәҭахха, дышрыхәаҧшуаз, ианышәҭахха, инарықәтәа-аарықәтәо, иркылакны, ирыбжьакны, ирылҳәҳәо</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX-Fin: алшоит</li>
          <li>VERB-Fin: иалагеит, иаҿын, иналагеит, далагеит, даасҿаҧшит, сықәыртәа, аҿаҟаҵан, даалацәажәеит, дааҩнашылт, днықәтәеит</li>
          <li>VERB-NonFin: иааҟәыҵны, иҭаз, дҭыҵны, иаҿыз, илаланы, инамҵасны, ишаҿыз, иҩноу, иҭоу, кыдҵаны</li>
          <li>VERB-Vnoun: анҵара</li>
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
          <li>VERB-Fin: Шәыздыруеит, шәамырҧхашьааит, шәырфахьазаарын, шәырхәышәтәуеит, шәырҭахуп, Ҳаибадырит, Ҳаибадырп, ҳаибадыруан, ҳкеибажьуамызт, ҳлымжьеит</li>
          <li>VERB-NonFin: Шәанаазга, Шәныҵеибарҟьа, шәаанызкылои, шәақәдмыргәыҕӡои, шәеибашьуама, шәзыхьчо, шәхагала, Ҳзыхьчогьы, ҳазшаз, ҳазҭахугьы</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB-Fin: диртәеит, сибоит, сықәыртәа, уаабеит, уафоит, Бахызбаауам, Саҭоумҵан, даалырҽхәеит, дааргазаап, дааргон</li>
          <li>VERB-NonFin: Дзыршанхарыз, Саазгаз, Сабацахуеи, Уахьыржьо, баблырц, бшакуа, дааигеижьҭеи, дааргаанӡа, дабар, дагар</li>
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
          <li>VERB-NonFin: анырзымхәыц, шҧашәзеилымкаац, шәзыҟаҵозаргьы</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB-Fin: сыздыруам, сыздырам, узҳәомызт, Исзеилымкааит, азхамҵеит, азыгәаҕьуамызт, изамхӡом, изгом, издыруамызт, изычҳауамызт</li>
          <li>VERB-NonFin: сзымдыруа, Исзымдыруа, бзымдырӡои, иазымычҳакәа, исзымычҳакәа, лзеилымкаазшәа, лызгәамҭазшәа, лҽылзаанымкылаӡакәа, сзеилымкаауа, уазыхьчо</li>
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
          <li>VERB-Fin: аҽазнакхьан, аҽаргәыбзыҕит, аҽаҟьеит, иҽазикит, иҽақәиршәон, иҽыназикт, иҽынирхацәеит, лҽааиқәылкит, лҽеиҭалкхьан, уҽаанкыл</li>
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
          <li>VERB-Fin: шәызхоит, Иаҳзааргеит, даҳцәыҧсуеит, еиҭаҳзаалгеит, иаарызхәыцит, ирзамуит, ирзамыҧхьеит, ирцәырҵәахит, ирыздырхон, рызгылоуп</li>
          <li>VERB-NonFin: Ишәзызура, иаҳзыҧшу, ирзызузгьы, ишрызҳаз, ишышәзеиҭеиҳәаз, иҳацааз, иҳацәшәо, сырзааигәаны, шәзаанхама, шәзеиҭасҳәар</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB-Fin: изыҧшуп, Исцәымӡӡеит, аздырхеит, азызымуит, азыразхан, аҽазнакхьан, базыӡырҩла, бзаанагеит, дазааҭгылеит, далацалоит</li>
          <li>VERB-NonFin: Иазууазеи, дазыҧшызшәа, иазынаҧшуа, Иазызуазеи, Иалаасхәо, Иацәымаашьакәа, Изалшарыма, Изуцәызӡарызеи, Ицырҕызуа, Ишҧоуцәыӡуаз</li>
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
          <li>VERB-Fin: рҳәеит, ҳҿынаҳхеит, еимаркит, ирҳәоит, исышәҭ, рбеит, рҳәом, уаабеит, шәит, ҳаиҩызцәазааит</li>
          <li>VERB-NonFin: ҳаицны, ахьырбаз, ишәҳәаз, иҟаҳҵарызеи, шәабацеи, шәанаахыҵ, ҳаннеиуаз, ҳанҭыҵ, Ижәбаз, Ишаабоз</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>ADV: деиҿкааӡа, дҕьаҵәыҕьаҵәуа</li>
          <li>VERB-Fin: иҳәеит, аҳәеит, дцеит, иҳәан, лҳәеит, ҿаанаҭит, аҳәан, аҿынанахеит, дыҟан, дҵааит</li>
          <li>VERB-NonFin: илҳәаз, иаҭахузеи, умбои, данца, днеины, дышнеиуаз, дыҩны, иаҳәаз, исҳәаз, Иазууазеи</li>
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
          <li>VERB-Fin: сдыршәоит</li>
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
          <li>VERB-Fin: днарбом, инеилыркит, инеисырбеит, лдыржәуан, налирбеит, налсыркит</li>
          <li>VERB-NonFin: ааруны, аруны</li>
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
          <li>AUX-Fin: соуп, ҳауп</li>
          <li>AUX-NonFin: соума</li>
          <li>VERB-Fin: сымам, дсазҵааит, исаҳаит, исмаҳаит, истәуп, исышәҭ, иҳаҧхьеит, саҳаит, сымоуп, уҳацхраа</li>
          <li>VERB-NonFin: Исыхьыз, Иҳауаз, Иҳахьыз, ансаҳауази, зсумҭозеи, иансмаҳауази, исиҭаз, исыгыз, исымаз, исымои</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>AUX-Fin: боуп, шәоуп</li>
          <li>AUX-NonFin: уоума</li>
          <li>VERB-Fin: дукәыхшоуп, баҳаит, исызуҭаӡом, ишәаҳахьеит, ишәмаҳаӡеит, суазҵаауеит, сшәыцхраауеит, усҭоит, шәырҭоит, шәысҭоит</li>
          <li>VERB-NonFin: Ишәыхьзеи, бмаҳаӡеи, Баҳама, аншәысҭа, изумоузеи, иухьзеи, ишәмаҳаи, ишәымазар, ишәыхәозар, уаҳахьоума</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX-Fin: ауп, акәын, иоуп, лоуп, акәхарын, иакәын, оуп, акәхап, ракәын, роуп</li>
          <li>AUX-NonFin: акәзар, аума, акәу, акәымзар, лакәзаргьы, ракәызшәа, ракәым, ракәымкәа, роума, шакәыз</li>
          <li>VERB-Fin: иаацәажәеит, дынлазҵааит, иман, рымамызт, сналазҵааит, акәхап, акәхеит, диҳәон, днаразҵааит, днарысын</li>
          <li>VERB-NonFin: анакәха, иаҳаз, изҭаз, Илыхьзеи, аманы, иархәаны, иманы, ирымаз, лыманы, Акәымзар</li>
          <li>VERB-Vnoun: Иҳәара, аисра, лазҵаарагьы</li>
        </ul>
      </li>
      <li>Rec
        <ul>
          <li>VERB-NonFin: еидашшыло</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>VERB-NonFin: закәызеи, Закә, зауаз, захьӡыз, заҳада, заҳаз, змаз, змоу, зхароу, зыбжьаз</li>
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
          <li>VERB-Fin: даасҿаҧшит, исгәалашәеит, Исгәалашәоит, Исгәалашәом, аасгәахәит, аасыкәиршеит, даасыдгылт, даасыхәаҧшит, даасықәшаҳаҭхеит, даасҿагылт</li>
          <li>VERB-NonFin: Исгәалашәаз, Исеиҳәаз, Исылшо, Исылшоз, аасгәахәаанӡа, анысгәахә, днасықәтәаны, дшаасыдххылаз, иаасымхны, исарҳәари</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: Ишәеиҳәоз, ибхашҭит, иуҧылоит, ишәгәаласыршәап, ишәҿасҵап, уасҳәап, унаалом, шәҿыҵакын</li>
          <li>VERB-NonFin: Ишәгәаҧхозар, Ишәылшозеи, анышәҭахха, быдызҵада, дбыдыбкылома, иааумхны, ианышәҭахха, иахьынӡаулшо, ишәыду, ишәҧылада</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX-Fin: алшоит</li>
          <li>VERB-Fin: иалагеит, иаҿын, иналагеит, далагеит, сықәыртәа, аҿаҟаҵан, даалацәажәеит, дааҩнашылт, днықәтәеит, дныҩнаҧшит</li>
          <li>VERB-NonFin: иааҟәыҵны, иҭаз, дҭыҵны, иаҿыз, илаланы, инамҵасны, ишаҿыз, иҩноу, иҭоу, кыдҵаны</li>
          <li>VERB-Vnoun: анҵара</li>
        </ul>
      </li>
      <li>Rec
        <ul>
          <li>VERB-Fin: еилыскааит, еиқәурхеит, иааимидеит, еидшылеит, еилыркааит, еимаадеит, еимырдахьан, еиқәнархеит, еиқәсырхап, еиқәшәан</li>
          <li>VERB-NonFin: еидкылашәа, еимдо, еинааланы, еишьҭагыланы, еиқәирхаз, еиқәшаҳаҭны, еиқәшәазгьы, еиқәыз, еиқәыршәаны, еиқәҵаны</li>
          <li>VERB-Vnoun: аилыргара, аиқәҧара</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>VERB-NonFin: дзыниаз, узҿузеи, Излихрыз, Узҿу, Шәызҿу, дзыниазеи, дзықәтәаз, дызхыз, злалаз, злам</li>
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
          <li>VERB-Fin: сибоит, сықәыртәа, Саҭоумҵан, сааирҽхәеит, саарыҧхьоит, саргылт, саргәааит, слыршәеит, сналгеит, сықәнамгалацызт</li>
          <li>VERB-NonFin: Саазгаз, Сабацахуеи, сзырҭахымзеи, суфома, сшиҭахым, сырблыр, сырӡызшәа, сышҧоубаз, сҭаҵаны, Ҳзыхьчогьы</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: уаабеит, уафоит, Бахызбаауам, Шәыздыруеит, уааигоит, уеиқәнархом, узгалап, урыцҳасшьоит, уҳашьҭӡом, шәамырҧхашьааит</li>
          <li>VERB-NonFin: Уахьыржьо, Шәанаазга, Шәныҵеибарҟьа, баблырц, бшакуа, уаашьҭыхны, уанбалгои, уганы, узымдырӡои, улкагәа</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: иҳәеит, аҳәеит, иҳәан, лҳәеит, рҳәеит, аҳәан, ибеит, избеит, избоит, диртәеит</li>
          <li>VERB-NonFin: аашьҭыхны, умбои, изҭаз, кны, мҳәакәа, ҩышьҭыхны, аартны, ахьырбаз, еизганы, здырхуада</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>VERB-NonFin: илҳәаз, иаҭахузеи, иаҳәаз, исҳәаз, Иазууазеи, иаанагои, ииҳәаз, ишәҳәаз, иҟауҵо, иҟаҳҵарызеи</li>
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
          <li>VERB-Fin: сыздыруам, сыздырам, Исзеилымкааит, исзеилкаауам, исзымдырит, исызгәамҭеит, исызуҭаӡом, сзаҭом, сзаҵаҩуам, сызсықәҵом</li>
          <li>VERB-NonFin: сзымдыруа, Исзымдыруа, исзымычҳакәа, сзеилымкаауа</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: узҳәомызт, шәзеилымкаацт</li>
          <li>VERB-NonFin: бзымдырӡои, узымдырӡои, шҧашәзеилымкаац, шәзыҟаҵозаргьы</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: азхамҵеит, азыгәаҕьуамызт, изамхӡом, изгом, издыруамызт, изычҳауамызт, илызҳәаӡом, илызҳәомызт, ирзыфом, лзыҭкаауамызт</li>
          <li>VERB-NonFin: анырзымхәыц, иазымычҳакәа, лзеилымкаазшәа, лызгәамҭазшәа, лҽылзаанымкылаӡакәа, уазыхьчо</li>
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
          <li>ADJ: схәыҷқәа</li>
          <li>ADP: сышҟа, ҳҿы, саҧхьа, сышьҭахь, ҳаҟны, сахь, саҵкыс, саҵкьыс, сыда, сыдагьы</li>
          <li>ADV: ҳазхараҵәҟьа</li>
          <li>NOUN: сгәы, сан, ҳаҧшәма, сашьа, суадахь, сыҧсы, сашьцәа, схы, сџьыба, Ҳан</li>
          <li>NUM: ҳҩыџьагь</li>
          <li>PROPN: с-Ҷына-ҟәыбҷа</li>
          <li>VERB-Fin: ҳҿынаҳхеит, Иҳаиҕьӡам, сҿынасхеит, дсықәлоуп, исусӡам, сыжәлоуп, сыхьӡуп</li>
          <li>VERB-NonFin: сгәҭаны, сҿанынасха, уҳаиҕьушәа</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>ADJ: Шәхатә, бхәыҷы, шәаҧсуа</li>
          <li>ADP: шәаасҭа, уаҧхьа, Шәыда, уда, уеиҳа, узыҳәан, шәышҟа</li>
          <li>ADV: Ухала, шәызхараҵәҟьа, шәымацара</li>
          <li>INTJ: шәанаџьалбеит</li>
          <li>NOUN: уашәа, уҟәаҟәа, шәгәы, бгәы, уан, угәы, уҧшәма, шәуалафахәы, шәхәы, Бхаҵа</li>
          <li>NUM: шәҩыџьагьы</li>
          <li>VERB-Fin: ишәусым, уҿааха</li>
          <li>VERB-NonFin: иуцәажәашьоузеи, иуцәажәашьоу</li>
          <li>VERB-Vnoun: Шәҭазаара, бнеира</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADJ: имазеины, ихатә, ихәыҷқәа, иҕәҕәаны, иҵәыҵәӡа, рааигәа, реиҳабы, реиҵбы, рхатәы</li>
          <li>ADP: еиҧш, ашьҭахь, азы, аҿы, аҧхьа, ала, ашҟа, ахь, аҟны, рҿы</li>
          <li>ADV: имацара, лхаҭа, рхаҭақәа, азхараҵәҟьа, ахала, изхара, ихазы, ихала</li>
          <li>NOUN: иан, игәы, акапитан, ран, иашьцәа, ихы, агәра, ибжьы, имашьына, лгәы</li>
          <li>NUM: Рҩыџьагьы, рыҩбагьы</li>
          <li>PRON: руакы, Руаӡәк, руак, рызынтәык</li>
          <li>VERB-Fin: аҿынанахеит, иҿынеихан, иҿынеихеит, аҿаанахеит, аҿынанахон, дреиуоуп, иақәхом, иреиуоуп, иҿааихеит, рҿаархеит</li>
          <li>VERB-NonFin: еиҕьу, иеиҳабугьы, иеиҵбугьы, иреиуаз, иреиҳабыз, ирлахьынҵахаз, ишиусыз, рҿанынарха</li>
          <li>VERB-Vnoun: аилыргара, аицәахареи, анҵара, анҵәареи, арыцқьара, ахцәажәара, ашьақәырҕәҕәара, иаара, идырра, изҵаара</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>ADP: зеиҧш</li>
          <li>NOUN: зыҧсы, Зыгәра, згәы, зыбжьы, зылыҧха, зымаҵ, зыхә, зыӡбахә</li>
          <li>VERB-NonFin: Измааноу, Измааноузеи, змааназ, зыхьӡыз, зыхәҭоугьы, изхарахо</li>
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
          <li>VERB-NonFin: Сҽааиҭакны, Сҽызласыҧсахуа, сҽеиҭаскыр</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: уҽаанкыл, шәҽаанышәкыл</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: аҽазнакхьан, аҽаргәыбзыҕит, аҽаҟьеит, иҽазикит, иҽақәиршәон, иҽыназикт, иҽынирхацәеит, лҽааиқәылкит, лҽеиҭалкхьан, рҽыршәеит</li>
          <li>VERB-NonFin: Иҽкамыжькәа, Лҽаарманшәаланы, аҽакәыршаны, аҽамнахырц, лҽылзаанымкылаӡакәа, рҽааизганы</li>
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
          <li>VERB-Fin: Иаҳзааргеит, Исцәымӡӡеит, даҳцәыҧсуеит, дысзыҧшын, дысцәагоит, еиҭаҳзаалгеит, исзаага, исзеиҭалҳәахьеит, сзаага, усызиҧхьа</li>
          <li>VERB-NonFin: иаҳзыҧшу, исцәызгозеи, иҳацааз, иҳацәшәо, сцәукуама</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: шәызхоит, бзаанагеит, сузлеиуеит, сузыӡырҩлоит, суццоит, узааргалоит, шәзыҟарҵоит</li>
          <li>VERB-NonFin: Изуцәызӡарызеи, Ишҧоуцәыӡуаз, Ишәзызура, иузыҧшу, ишышәзеиҭеиҳәаз, шәзаанхама, шәзеиҭасҳәар</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: изыҧшуп, аздырхеит, азызымуит, азыразхан, аҽазнакхьан, базыӡырҩла, дазааҭгылеит, далацалоит, иаарызхәыцит, иазхәыцит</li>
          <li>VERB-NonFin: Иазууазеи, дазыҧшызшәа, иазынаҧшуа, Иазызуазеи, Иалаасхәо, Иацәымаашьакәа, Изалшарыма, Ицырҕызуа, Сабацахуеи, Уазыразума</li>
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
          <li>VERB-NonFin: Сҽызласыҧсахуа, Шәызлеиҕьу, дызлалацәажәо, злашәоу, злоубазеи, излагәаҭоу, излацәаҕәаша, излацәаҕәашаз, излаҳазхозеи, излеилыскааз</li>
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
          <li>VERB-Fin: избеит, избоит, сналазҵааит, снатәеит, снеит, сҭахын, ҳҿынаҳхеит, Сҩагылан, еилыскааит, изымбеит</li>
          <li>VERB-NonFin: ҳаицны, исҳәаз, изгама, ишысҭаху, иҟаҳҵарызеи, ҳаннеиуаз, ҳанҭыҵ, Иазызуазеи, Иалаасхәо, Изулакгьы</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: еиқәурхеит, иаҩуцеит, ибгеит, исышәҭ, уааи, уаангылишь, уааскьа, уаҧырҵ, убааит, уца</li>
          <li>VERB-NonFin: умбои, Иазууазеи, изуҭахузеи, ишәҳәаз, иҟауҵо, узҿузеи, уҭахымзар, уҳәаратәы, шҧоубои, шәабацеи</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADV: Ииашаны, имаҷны, иҕарҧшарӡа, Инаган, Ирацәаны, Ишьҭхысаа, изныкымкәа, ихахаӡа, ихәхәаӡа, ицқьаны</li>
          <li>AUX-Fin: ауп, акәын, соуп, иоуп, лоуп, акәхарын, иакәын, оуп, акәхап, боуп</li>
          <li>AUX-NonFin: акәзар, аума, акәу, акәымзар, лакәзаргьы, ракәызшәа, ракәым, ракәымкәа, роума, соума</li>
          <li>VERB: иҳәеит, аҳәеит, дцеит, иалагеит, иҳәан, лҳәеит, рҳәеит, анакәха, иаҿын, ҿаанаҭит</li>
          <li>VERB-Fin: иҳәеит, аҳәеит, дцеит, иалагеит, иҳәан, лҳәеит, рҳәеит, иаҿын, ҿаанаҭит, аҳәан</li>
          <li>VERB-NonFin: анакәха, закәызеи, илҳәаз, иаҭахузеи, хәыҷызар, ахьгылаз, данца, днеины, дышнеиуаз, дыҩны</li>
        </ul>
      </li>
      <li>Rec
        <ul>
          <li>VERB-Fin: рылеибахит, еибабон, еибарбылгьеит, изааибамгеит, нибархон, Ҳаибадырит, Ҳаибадырп, ҳаибадыруан, ҳкеибажьуамызт</li>
          <li>VERB-NonFin: Шәныҵеибарҟьа, нибархар, рибамҭо, шнибархаз, шәеибашьуама, ҳаибадыруазшәа</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>VERB-NonFin: инеиз, иҟаз, иҟоу, итәаз, Иҟалаз, игылаз, Ишәыхьзеи, иаҳаз, изҭаз, иуцәажәашьоузеи</li>
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
          <li>VERB-NonFin: изуҭахузеи, Изуцәызӡарызеи, дзымцоз, дзынхоз, зеизаагоз, зеиқәузеи, зсумҭозеи, зхыбкуа, зыбкуазеи, зышәҭаххаз</li>
        </ul>
      </li>
      <li>Loc
        <ul>
          <li>VERB-NonFin: ахьгылаз, иахьцалак, ахьтәаз, ахьырбаз, дахьышьҭаз, иахьтәаз, шәабацеи, Дахьгылаз, Дахьыныҩналаз, Иабацеи</li>
        </ul>
      </li>
      <li>Mnr
        <ul>
          <li>AUX-NonFin: шакәыз, шакәызгьы, шиакәу, шиакәыз, шракәыз</li>
          <li>VERB-NonFin: дышнеиуаз, иштәаз, шҧахәыҷыз, дшааиуаз, ишаҿыз, ишнеиуаз, ишысҭаху, шыҟаз, шҧоубои, Дшааиҧшхо</li>
        </ul>
      </li>
      <li>Tmp
        <ul>
          <li>VERB-NonFin: анакәха, данца, данааиуаз, ианынаскьа, шәанаахыҵ, ҳаннеиуаз, ҳанҭыҵ, Анааилашәшәлак, Даналга, Даннеи</li>
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
          <li>VERB-Fin: изыҧшуп, шәызхоит, Иаҳзааргеит, ааизникылт, аздырхеит, азызымуит, азыразхан, аҽазнакхьан, базыӡырҩла, бзаанагеит</li>
          <li>VERB-NonFin: Иазууазеи, дазыҧшызшәа, иазынаҧшуа, Иазызуазеи, Изалшарыма, Ишәзызура, Уазыразума, азылур, азымхозшәа, базхәыцхьоу</li>
          <li>VERB-Vnoun: изҵаара</li>
        </ul>
      </li>
      <li>Com
        <ul>
          <li>VERB-Fin: ицныҟәом, ицылҳәеит, сиццеит, суццоит</li>
          <li>VERB-NonFin: Ицырҕызуа, Сабацахуеи, иҳацааз, шәызцынхода</li>
        </ul>
      </li>
      <li>Ins
        <ul>
          <li>VERB-Fin: далацалоит, наласырхәт, салацеит, урыланха</li>
          <li>VERB-NonFin: Иалаасхәо, Сҽызласыҧсахуа, Шәызлеиҕьу, дызлалацәажәо, злашәоу, злоубазеи, излагәаҭоу, излацәаҕәаша, излацәаҕәашаз, излаҳазхозеи</li>
        </ul>
      </li>
      <li>Mal
        <ul>
          <li>VERB-Fin: Исцәымӡӡеит, даҳцәыҧсуеит, дысцәагоит, ирцәырҵәахит, ицәыӡит, рыцәцеит, рыцәҩашьеит, ҳалцәымцхәын, ҳрыцәшәоит</li>
          <li>VERB-NonFin: Иацәымаашьакәа, Изуцәызӡарызеи, Ишҧоуцәыӡуаз, дылцәыӡызшәа, исцәызгозеи, ицәыуадаҩны, ишзацәымцоз, иҳацәшәо, сцәукуама, ҳашрыцәшәоз</li>
          <li>VERB-Vnoun: Ацәысра</li>
        </ul>
      </li>
      <li>Pot
        <ul>
          <li>VERB-Fin: сыздыруам, сыздырам, узҳәомызт, Дзыҧырӡом, Исзеилымкааит, азхамҵеит, азыгәаҕьуамызт, изамхӡом, изгом, издыруамызт</li>
          <li>VERB-NonFin: сзымдыруа, Изымгазар, Исзымдыруа, анырзымхәыц, бзымдырӡои, иазымычҳакәа, исзымычҳакәа, лзеилымкаазшәа, лызгәамҭазшәа, лҽылзаанымкылаӡакәа</li>
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
          <li>AUX-Fin: акәхарын, акәхап, алшоит, ҟалап, ҟалоит, ҟалон, ҟамлеит</li>
          <li>AUX-NonFin: ҟалома</li>
          <li>VERB-Fin: дцеит, иалагеит, дҵааит, иаацәажәеит, иналагеит, ицеит, далагеит, днеит, иаауеит, ҩашьомызт</li>
          <li>VERB-NonFin: анакәха, инеиз, Иҟалаз, Ишәыхьзеи, данца, днеины, дышнеиуаз, дыҩны, иааҟәыҵны, иахьцалак</li>
          <li>VERB-Vnoun: ашәаҳәара, аҵәыуара, арыцқьара, ныҟәара, Аилашәшәра, Ацәысра, Ақәҧара, Иҳәара, абыбра, агылара</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB-Fin: иҳәеит, аҳәеит, иҳәан, лҳәеит, рҳәеит, ҿаанаҭит, аҳәан, аҿынанахеит, ибеит, сыздыруам</li>
          <li>VERB-NonFin: аашьҭыхны, илҳәаз, иаҭахузеи, умбои, иаҳәаз, изҭаз, исҳәаз, кны, мҳәакәа, ҩышьҭыхны</li>
          <li>VERB-Vnoun: аҳәара, Ҳәарас, аизгара, анҵара, Афар, Аҭагалара, ааҧхьара, акрыфара, анагӡара, аҧхьаӡара</li>
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
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: а́кәхара, а́-ҟалара, а́-лшара, а́-ҟазаара, а́кәзаара.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (386)</li>
      <li>VERB-Fin--PRON (151)</li>
      <li>VERB-NonFin--NOUN (181)</li>
      <li>VERB-NonFin--PRON (72)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (175)</li>
      <li>VERB-Fin--PRON (29)</li>
      <li>VERB-NonFin--NOUN (147)</li>
      <li>VERB-NonFin--PRON (18)</li>
      <li>VERB-NonFin--PRON-ADP(а́иҧш) (1)</li>
      <li>VERB-Vnoun--NOUN (8)</li>
      <li>VERB-Vnoun--PRON (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (34)</li>
      <li>VERB-Fin--PRON (14)</li>
      <li>VERB-NonFin--NOUN (26)</li>
      <li>VERB-NonFin--PRON (10)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 31 relation subtypes: <a>acl:relcl</a>, <a>advcl:compar</a>, <a>advcl:cond</a>, <a>advcl:conv</a>, <a>advcl:purp</a>, <a>advcl:quote</a>, <a>advcl:seq</a>, <a>advmod:q</a>, <a>ccomp:iobj</a>, <a>ccomp:lo</a>, <a>ccomp:obj</a>, <a>ccomp:poss</a>, <a>ccomp:purp</a>, <a>ccomp:quote</a>, <a>ccomp:ro</a>, <a>compound:pred</a>, <a>compound:prt</a>, <a>conj:q</a>, <a>csubj:outer</a>, <a>csubj:quote</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nmod:quote</a>, <a>nsubj:outer</a>, <a>obj:cs</a>, <a>obj:lo</a>, <a>obj:po</a>, <a>obj:poss</a>, <a>obj:ro</a>, <a>xcomp:lo</a>, <a>xcomp:subj</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>ccomp</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>fixed</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
