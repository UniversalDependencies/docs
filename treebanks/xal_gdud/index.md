---
layout: base
title:  'UD_Kalmyk-GDUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Kalmyk GDUD

Language: [Kalmyk](/xal/index.html) (code: `xal`)<br/>
Family: Mongolic

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Wenchao Li, Haitao Liu.

Repository: [UD_Kalmyk-GDUD](https://github.com/UniversalDependencies/UD_Kalmyk-GDUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udxal_gdud219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Kalmyk-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Kalmyk-GDUD/issues).
If you want to collaborate, please contact [widelia&nbsp;(æt)&nbsp;zju&nbsp;•&nbsp;edu&nbsp;•&nbsp;cn].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

UD_Kalmyk-GDUD is a treebank of Kalmyk, a Mongolic language spoken by the Kalmyk people in the Republic of Kalmykia (southwestern Russia), based on grammatical example sentences derived from a reference grammar.




The Kalmyk GDUD (Grammar-Derived Universal Dependencies) treebank contains 92 sentences of Kalmyk (ISO 639-3: xal), a Mongolic language of the Oirat branch, spoken primarily in the Republic of Kalmykia in the Russian Federation, with smaller diaspora communities elsewhere. Kalmyk is closely related to the Oirat varieties spoken in Xinjiang and Mongolia. The data consist of grammatical example sentences drawn from a reference grammar of Kalmyk, presented in Latin transliteration and accompanied by English translations.

All sentences are manually annotated with lemmas, universal part-of-speech tags (UPOS), morphological features, and dependency relations, following the Universal Dependencies (UD) guidelines. The annotation prioritizes UD core morphological features and dependency relations. The language-specific features `Deixis` (with value `Remt`) and `ExtPos` are used in a small number of cases, following the analysis of the reference grammar. Additional Kalmyk-specific morphological distinctions that do not correspond to any value in the universal feature inventory are encoded in the MISC column, in accordance with UD conventions.

## Data split

Because the treebank is small (well below the 20K-word threshold), all sentences are provided as test data.

## Morphological annotation

All UD core features used in the treebank take standard universal values. The language-specific feature `Deixis=Remt` is used on demonstrative determiners, and `ExtPos=ADV` is used to mark the external part-of-speech function of certain expressions.

## Dependency annotation

UD core relations are used throughout the treebank.


## Acknowledgments

The Kalmyk GDUD treebank was created by Wenchao Li and Haitao Liu, based on grammatical example sentences from a reference grammar of Kalmyk. The annotation of lemmas, part-of-speech tags, morphological features, and dependency relations was carried out manually following the Universal Dependencies guidelines.

We thank Daniel Zeman for his guidance in setting up the treebank repository and for his help with the Universal Dependencies workflow, and the Universal Dependencies community for their support.



# Statistics of UD Kalmyk GDUD

## POS Tags

[ADJ](xal_gdud-pos-ADJ.html) – [ADP](xal_gdud-pos-ADP.html) – [ADV](xal_gdud-pos-ADV.html) – [AUX](xal_gdud-pos-AUX.html) – [CCONJ](xal_gdud-pos-CCONJ.html) – [DET](xal_gdud-pos-DET.html) – [INTJ](xal_gdud-pos-INTJ.html) – [NOUN](xal_gdud-pos-NOUN.html) – [NUM](xal_gdud-pos-NUM.html) – [PART](xal_gdud-pos-PART.html) – [PRON](xal_gdud-pos-PRON.html) – [PROPN](xal_gdud-pos-PROPN.html) – [PUNCT](xal_gdud-pos-PUNCT.html) – [VERB](xal_gdud-pos-VERB.html)

## Features

[Aspect](xal_gdud-feat-Aspect.html) – [Case](xal_gdud-feat-Case.html) – [Degree](xal_gdud-feat-Degree.html) – [Deixis](xal_gdud-feat-Deixis.html) – [ExtPos](xal_gdud-feat-ExtPos.html) – [Mood](xal_gdud-feat-Mood.html) – [Number](xal_gdud-feat-Number.html) – [NumType](xal_gdud-feat-NumType.html) – [Person](xal_gdud-feat-Person.html) – [Person[psor]](xal_gdud-feat-Person-psor.html) – [Polarity](xal_gdud-feat-Polarity.html) – [Poss](xal_gdud-feat-Poss.html) – [PronType](xal_gdud-feat-PronType.html) – [Reflex](xal_gdud-feat-Reflex.html) – [Tense](xal_gdud-feat-Tense.html) – [VerbForm](xal_gdud-feat-VerbForm.html) – [Voice](xal_gdud-feat-Voice.html)

## Relations

[acl](xal_gdud-dep-acl.html) – [advcl](xal_gdud-dep-advcl.html) – [advmod](xal_gdud-dep-advmod.html) – [amod](xal_gdud-dep-amod.html) – [case](xal_gdud-dep-case.html) – [cc](xal_gdud-dep-cc.html) – [ccomp](xal_gdud-dep-ccomp.html) – [compound](xal_gdud-dep-compound.html) – [conj](xal_gdud-dep-conj.html) – [cop](xal_gdud-dep-cop.html) – [dep](xal_gdud-dep-dep.html) – [det](xal_gdud-dep-det.html) – [discourse](xal_gdud-dep-discourse.html) – [fixed](xal_gdud-dep-fixed.html) – [iobj](xal_gdud-dep-iobj.html) – [nmod](xal_gdud-dep-nmod.html) – [nmod:poss](xal_gdud-dep-nmod-poss.html) – [nsubj](xal_gdud-dep-nsubj.html) – [nsubj:outer](xal_gdud-dep-nsubj-outer.html) – [nummod](xal_gdud-dep-nummod.html) – [obj](xal_gdud-dep-obj.html) – [obl](xal_gdud-dep-obl.html) – [parataxis](xal_gdud-dep-parataxis.html) – [punct](xal_gdud-dep-punct.html) – [root](xal_gdud-dep-root.html) – [vocative](xal_gdud-dep-vocative.html) – [xcomp](xal_gdud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 92 sentences and 484 tokens.</li>
</ul>

<ul>
<li>This corpus contains 62 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 169 types of words that contain both letters and punctuation. Examples: bää-nä, jov-na, šar-ž, avə-v, kevt-nä, odə-v, xälä-Ø, xöö-d, šovu-n, Badm-igə, al-ad, arvə-n, güü-žə, nan-də, nis-äd, nis-žə, od-ad, or-žə, xaj-čkə-v, xotə-nʲ, ögə-v, Ajsa-də, Ajsa-n, Aɣš-ur, Badm-in, Moskva-ɣasə, Očir-in, aawa-savə, amə-n-də, amə-ny, ard-asə, arv-ən, asx-n-a, av-u-v, av-x-u, av-xə, av-čk-ad, avu-v, biil-žə, bij-d-än, bičk-düüd, bolrə-n, bord-ad, bos-ad, bos-xlagə, bula-ž, busəl-žə, bär-žə, bää-d-go-č, bää-žə</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SCONJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): bišə, es, ä, чигн</li>
</ul>

<ul>
<li>This corpus contains 20 lemmas tagged as pronouns (PRON): 1SG, al, amə, anta, bi, bišə, evr, küü, mini, nandə, ta, tana, tanas, tasə, ter, terü, yumn, či, čini, čə</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as determiners (DET): bolrə, caadkə, cug, en, enə, olan, ter, tiimə, ənə</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: ter</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): uga</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: uga</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: al-ad, nis-äd, bord-ad, cok-ad, dax-žə, duul-žə, erg-äd, güü-žäd, güü-žə, ir-äd</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>ADJ: дуртав, дүүрң, тату</li>
    <li>VERB: bää-nä, jov-na, uga, kevt-nä, xälä-Ø, болтха, келдвтә, кемб, сурҗанав, хәрүлнә</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: av-xə, jov-sən, kevt-sən, od-sən, xaj-sən, ög-sən, келсән</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>




<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>NOUN: xöö-d, aawa-savə, xojr, bičk-düüd, ger-t-än, küükə-d, mal-mud, äm-d-än</li>
      <li>PRON: Та, Тана, Танас</li>
      <li>VERB-Fin: болтха, келдвтә, Альдасвт, давтхнт, дуудтн, келит, күүндит, өгтн, өгхитн</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: asx-n-a, emgə-n, küükə-n-də, maashə-n, mash-in, xärd, xö-n, övg-n-ä, övgə-n-də, šovu-n</li>
      <li>PRON: Би, bi, nandə, mini, nan-də, чамд, юмн, amə-ny, evr-ännʲ, küü-n-ä</li>
      <li>VERB: сурҗанав, av-u-v, av-x-u, id-sən, songs-čə-x-šə-č, uga-v, uu-xla-n, ää-žä-nä-v, Медҗәнәв, медхшв</li>
      <li>VERB-Fin: сурҗанав, Медҗәнәв, медхшв, медҗәхшв, седнч</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>NOUN: ard-asə, eež-äsə, kičäl-äsən</li>
      <li>PRON: terü-n-äsə, Танас</li>
      <li>PROPN: Moskva-ɣasə</li>
      <li>VERB: uga-qasə</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>NOUN: xöö-d, tuuly-igə, degtr-igə, gerg-än, gerə, jumə, küükə-nʲ, vnučk-an, xotə-nʲ, xö</li>
      <li>PRON: čə, чамаг</li>
      <li>PROPN: Badm-igə</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>NOUN: ger-ür</li>
      <li>PROPN: Aɣš-ur</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>PRON: Нанла</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: bij-d-än, äärm-də, örü-n-d-än, čejnik-tə, žil-də, amə-n-də, dura-n-də-nʲ, ger-t-än, gergə-n-d-än, muzej-də</li>
      <li>PRON: nandə, nan-də, чамд, Анта</li>
      <li>PROPN: Ajsa-də</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>PRON: mini, evr-ännʲ, Мини, Тана, Чини</li>
      <li>PROPN: Ajsa-n, Badm-in, Očir-in</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>NOUN: хальмгаһар, келәр, üvl-är</li>
      <li>VERB: uga-qar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>PRON: альд</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>NOUN: xärd, šovu-n, нерн, bičk-düüd, eckə, ez-än, küükə-d, mal-mud, noxa, xortə-n</li>
      <li>PRON: Би, Та, amə-ny</li>
      <li>PROPN: Badma, Manžə, Nina, Očir, Saglar</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: soɣn, дурго, дуртав, дүүрң, тату</li>
      <li>ADJ-Fin: дуртав, дүүрң, тату</li>
      <li>ADV: ikär, икәр</li>
      <li>DET: olan</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: дурго</li>
      <li>AUX: uga</li>
      <li>PART: es, bišə, ä, чигн</li>
      <li>VERB: uga, bišə, öndəg, ɣosə-nʲ, bää-d-go-č, kelə, songs-čə-x-šə-č, taas-gd-sən, uga-qar, uga-qasə</li>
      <li>VERB-Fin: uga, медхшв, медҗәхшв</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Hab
    <ul>
      <li>VERB: kevt-nä, naad-də-m, bää-d-go-č, bää-nä, jov-na</li>
      <li>VERB-Fin: kevt-nä, bää-nä, jov-na</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Conv: nis-žə</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB: av-čk-ad, muur-ub-v</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB: bää-nä, gi-žä-nä, jov-na, nis-žä-nä, songs-čə-x-šə-č, suu-na, ää-žä-nä-v, Медҗәнәв, медҗәхшв</li>
      <li>VERB-Fin: bää-nä, jov-na, suu-na, Медҗәнәв, медҗәхшв</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: xälä-Ø, bičä, болтха, kelə, давтхнт, дуудтн, келит, күүндит, өгтн, өгхитн</li>
      <li>VERB-Fin: xälä-Ø, болтха, давтхнт, дуудтн, келит, күүндит, өгтн, өгхитн</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ-Fin: дуртав, дүүрң, тату</li>
      <li>VERB-Fin: bää-nä, jov-na, uga, kevt-nä, келдвтә, кемб, сурҗанав, хәрүлнә, avə-v, bää-žə</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>VERB: ke-d-ü</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>VERB-Fin: седнч</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: хәрүлнә, av-xə, songs-čə-x-šə-č</li>
      <li>VERB-Fin: хәрүлнә</li>
      <li>VERB-Part: av-xə</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Fin: дуртав</li>
      <li>VERB: odə-v, avə-v, xaj-čkə-v, ögə-v, avu-v, kel-in, orkə-v, xamxal-čkə-v, zuu-čkə-v, av-u-v</li>
      <li>VERB-Fin: avə-v, болв, онцардв</li>
      <li>VERB-Part: jov-sən, kevt-sən, od-sən, xaj-sən, ög-sən, келсән</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>VERB: bää-nä, jov-na, kevt-nä, od-na, xaj-ža-na, ülđ-nä, келдвтә, кемб, сурҗанав, gi-žä-nä</li>
      <li>VERB-Fin: bää-nä, jov-na, kevt-nä, келдвтә, кемб, сурҗанав, od-gd-na, suu-na, Альдасвт, Медҗәнәв</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB: muur-ub-v, terü-gə</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: od-gd-na, taas-gd-sən</li>
      <li>VERB-Fin: od-gd-na</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>VERB-Conv: naa-ld-ad</li>
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
      <li>DET: ter, Эн, cug, enə, terə, tiimə, ənə, caadkə</li>
      <li>PRON: terü-n-äsə</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: olan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: альд</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: кезә</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: Би, bi, nandə, bišə, mini, nan-də, ter, Та, чамд, amə-ny</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: bolrə-n, cug</li>
      <li>PRON: юмн</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: Негн, нег</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>NOUN: dura-n-də-nʲ, xotə-nʲ</li>
      <li>PRON: mini, Мини</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>NOUN: tuqəl-ta-ɢan, ez-än, ger-t-än, gerg-än, gergə-n-d-än, kičäl-äsən, vnučk-an, äm-d-än</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: Би, bi, nandə, mini, nan-də, čə, Анта, Мини, Нанла</li>
      <li>VERB: сурҗанав, av-u-v, av-x-u, uga-v, ää-žä-nä-v, Медҗәнәв, медхшв, медҗәхшв</li>
      <li>VERB-Fin: сурҗанав, Медҗәнәв, медхшв, медҗәхшв</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: Та, чамд, tasə, Тана, Танас, Чини, чамаг</li>
      <li>VERB: болтха, келдвтә, songs-čə-x-šə-č, Альдасвт, давтхнт, келит, күүндит, седнч, өгхитн</li>
      <li>VERB-Fin: болтха, келдвтә, Альдасвт, давтхнт, келит, күүндит, седнч, өгхитн</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>NOUN: küükə-nʲ, xotə-nʲ, ämä-ny, ükrə-ny</li>
      <li>PRON: amə-ny, evr-ännʲ</li>
      <li>VERB: id-sən, uu-xla-n</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Deixis</a>
    <ul>
      <li>Remt
        <ul>
          <li>DET: caadkə</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADV
        <ul>
          <li>ADV: кезә</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>3
        <ul>
          <li>NOUN: dura-n-də-nʲ, xotə-nʲ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: uga.</li>
</ul>

<ul>
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (21)</li>
      <li>VERB--NOUN-ADP(doorə) (1)</li>
      <li>VERB--PRON (7)</li>
      <li>VERB--PRON-Dat (2)</li>
      <li>VERB--PRON-Gen (1)</li>
      <li>VERB-Conv--NOUN-Nom (2)</li>
      <li>VERB-Fin--NOUN-Nom (13)</li>
      <li>VERB-Fin--PRON-Nom (5)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (15)</li>
      <li>VERB--NOUN-Acc (3)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB-Conv--NOUN (1)</li>
      <li>VERB-Conv--NOUN-Acc (4)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (1)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 2 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: cok gerg-än, ög vnučk-an</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 2 relation subtypes: <a>nmod:poss</a>, <a>nsubj:outer</a></li>
<li>The following 12 relation types are not used in this corpus at all: <a>csubj</a>, <a>expl</a>, <a>dislocated</a>, <a>aux</a>, <a>mark</a>, <a>appos</a>, <a>clf</a>, <a>flat</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
