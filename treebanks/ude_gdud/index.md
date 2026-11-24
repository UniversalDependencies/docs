---
layout: base
title:  'UD_Udihe-GDUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Udihe GDUD

Language: [Udihe](/ude/index.html) (code: `ude`)<br/>
Family: Tungusic

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Wenchao Li, Haitao Liu.

Repository: [UD_Udihe-GDUD](https://github.com/UniversalDependencies/UD_Udihe-GDUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udude_gdud219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Udihe-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Udihe-GDUD/issues).
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

UD_Udihe-GDUD is a treebank of Udihe (also called Udege), a Southern Tungusic language spoken in the Primorsky and Khabarovsk regions of the Russian Far East, based on grammatical example sentences derived from a reference grammar.




The Udihe GDUD (Grammar-Derived Universal Dependencies) treebank contains 94 sentences of Udihe (ISO 639-3: ude), a Southern Tungusic language spoken by the Udihe people in the Primorsky Krai and Khabarovsk Krai of the Russian Far East. Udihe is closely related to Oroch and other languages of the Amur-Sakhalin subgroup of Tungusic. The data consist of grammatical example sentences drawn from a reference grammar of Udihe, presented in a phonemic Latin-based transcription and accompanied by English translations and interlinear glosses.

All sentences are manually annotated with lemmas, universal part-of-speech tags (UPOS), morphological features, and dependency relations, following the Universal Dependencies (UD) guidelines. The annotation prioritizes UD core morphological features and dependency relations. Udihe-specific morphological distinctions that do not correspond to any value in the universal feature inventory are encoded in the MISC column, in accordance with UD conventions.

## Data split

Because the treebank is small (well below the 20K-word threshold), all sentences are provided as test data.

## Morphological annotation

All UD core features used in the treebank take standard universal values, including `Clusivity` (Ex, In) on first-person plural pronominal forms.

## Dependency annotation

UD core relations are used throughout the treebank.


## Acknowledgments

The Udihe GDUD treebank was created by Wenchao Li and Haitao Liu, based on grammatical example sentences from a reference grammar of Udihe. The annotation of lemmas, part-of-speech tags, morphological features, and dependency relations was carried out manually following the Universal Dependencies guidelines.

We thank Daniel Zeman for his guidance in setting up the treebank repository and for his help with the Universal Dependencies workflow, and the Universal Dependencies community for their support.



# Statistics of UD Udihe GDUD

## POS Tags

[ADJ](ude_gdud-pos-ADJ.html) – [ADP](ude_gdud-pos-ADP.html) – [ADV](ude_gdud-pos-ADV.html) – [AUX](ude_gdud-pos-AUX.html) – [DET](ude_gdud-pos-DET.html) – [INTJ](ude_gdud-pos-INTJ.html) – [NOUN](ude_gdud-pos-NOUN.html) – [NUM](ude_gdud-pos-NUM.html) – [PART](ude_gdud-pos-PART.html) – [PRON](ude_gdud-pos-PRON.html) – [PROPN](ude_gdud-pos-PROPN.html) – [PUNCT](ude_gdud-pos-PUNCT.html) – [SCONJ](ude_gdud-pos-SCONJ.html) – [VERB](ude_gdud-pos-VERB.html)

## Features

[Aspect](ude_gdud-feat-Aspect.html) – [Case](ude_gdud-feat-Case.html) – [Clusivity](ude_gdud-feat-Clusivity.html) – [Degree](ude_gdud-feat-Degree.html) – [Mood](ude_gdud-feat-Mood.html) – [Number](ude_gdud-feat-Number.html) – [Number[psor]](ude_gdud-feat-Number-psor.html) – [NumType](ude_gdud-feat-NumType.html) – [Person](ude_gdud-feat-Person.html) – [Person[psor]](ude_gdud-feat-Person-psor.html) – [Polarity](ude_gdud-feat-Polarity.html) – [Poss](ude_gdud-feat-Poss.html) – [PronType](ude_gdud-feat-PronType.html) – [Reflex](ude_gdud-feat-Reflex.html) – [Tense](ude_gdud-feat-Tense.html) – [VerbForm](ude_gdud-feat-VerbForm.html) – [Voice](ude_gdud-feat-Voice.html)

## Relations

[acl](ude_gdud-dep-acl.html) – [advcl](ude_gdud-dep-advcl.html) – [advmod](ude_gdud-dep-advmod.html) – [amod](ude_gdud-dep-amod.html) – [aux](ude_gdud-dep-aux.html) – [case](ude_gdud-dep-case.html) – [cc](ude_gdud-dep-cc.html) – [ccomp](ude_gdud-dep-ccomp.html) – [compound](ude_gdud-dep-compound.html) – [conj](ude_gdud-dep-conj.html) – [dep](ude_gdud-dep-dep.html) – [det](ude_gdud-dep-det.html) – [discourse](ude_gdud-dep-discourse.html) – [iobj](ude_gdud-dep-iobj.html) – [mark](ude_gdud-dep-mark.html) – [nmod](ude_gdud-dep-nmod.html) – [nsubj](ude_gdud-dep-nsubj.html) – [nummod](ude_gdud-dep-nummod.html) – [obj](ude_gdud-dep-obj.html) – [obl](ude_gdud-dep-obl.html) – [punct](ude_gdud-dep-punct.html) – [root](ude_gdud-dep-root.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 94 sentences and 506 tokens.</li>
</ul>

<ul>
<li>This corpus contains 76 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 258 types of words that contain both letters and punctuation. Examples: men-e, bagdi-e-ni, e:xi, bagdi-li-e-ti, ni:, tukä:-ni, wakca-ini, B’ata, Min-du, ba:, bagdi-e-ti, bi-mi, bua-du, bua-tigi, diga-mie, digan-a-m(i), eke:-ni, igbe:-ni, naa-tigi, nede-iti, tatusi-ne:-ni, tukä:-nie, uli-lə, uta-wa, wa-ini, wo-iti, xeje-tigi-ni, xetige-ηi-e-ni, ʒugdi-lə, 'apti:, 'o-wo-ni, Baa-la, Bagdi-li-ə-mu, Deu-mi, Doumi-lə, E:xi-gde, E:xie-i, Eni-ni, Galakta-gi-mi, Geinige-ze-fi, Gulini-e-ti-de, Iηakta-ni, Kesi-mi, Kämbu-wasi-e-fi, Käämikta-la-ni, Mama-du, Ni-tigi, Ni:-we-de, Niηka-ziga, Okto-mo</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: CCONJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): əhini</li>
</ul>

<ul>
<li>This corpus contains 26 lemmas tagged as pronouns (PRON): 'apti:, Eni, Min, Minti, Mne, Mənə, adi, ami, bi, bi:, bu, ei, emugde, getu, i:-le, imemu, men, mi-zuηe, mina, mine, ni:, uta, ute, uti, wa, əmə</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as determiners (DET): uta, uti, xoηto, zuηe</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: uta, uti</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): e-u, o</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: e-u-ji, o-si-ni</li>
    <li>VERB: bagdi-li-e-ti, bie, tukä:-ni, wakca-ini, bagdi-e-ni, bagdi-e-ti, eke:-ni, tatusi-ne:-ni, tukä:-nie, xetige-ηi-e-ni</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>VERB: goala-ŋi-miə⸗də, tukəä-mə, Galakta-gi-mi, bi-mi, diəli-kca-mi, umi-məi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: diga-mie, digan-a-m(i), Deu-mi, Kesi-mi, atana-mi, bi-mi, dau-mi, dieli-mi, gekti-mi, kawa-ηisi-mi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: bi-isi⸗də, eke-isi, kese-kce:-mi, sogil'a-si, Əməgi-ə-si, b’a-han-di-fəi, iseːn-ziː, kapt'a-si</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: biə, bi-hi-wə, calä-i-ni</li>
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
      <li>ADJ: əgdi</li>
      <li>NOUN: bede, ni:-fi, ñ’aula, lusa-ʒiga-du, zei-tigi:</li>
      <li>PRON: Minti, bu, getu, getu-we</li>
      <li>PROPN: Niηka-ziga, ni:-we, seh-zi:</li>
      <li>VERB: bagdi-li-e-ti, bagdi-e-ti, nede-iti, wo-iti, Bagdi-li-ə-mu, Geinige-ze-fi, Gulini-e-ti-de, Kämbu-wasi-e-fi, Tukä-za-fi, Uli-gi-li-wəŋ-ki-ti</li>
      <li>VERB-Fin: bagdi-li-e-ti, bagdi-e-ti, Bagdi-li-ə-mu, Geinige-ze-fi, Gulini-e-ti-de, Kämbu-wasi-e-fi, Tukä-za-fi, aŋasi-ha-ti, c̆awa-i, diga-si-ə-ni</li>
      <li>VERB-Ger: umi-məi</li>
      <li>VERB-Part: b’a-han-di-fəi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADP: b'äsa-du-ni, do-ni-ni, xo:n-du-ni, xuon-di-ni</li>
      <li>AUX-Fin: e-u-ji, o-si-ni</li>
      <li>NOUN: B’ata, Bəliə, Imaa, Sama, Xatala, Xula, jahi, taŋda, Əninə, 'o-wo-ni</li>
      <li>PRON: Min-du, bi, Eni-ni, Mne, Mənə, ami-ni, mina-wa, mine-wa, əmə-gi</li>
      <li>PROPN: igbe:-ni</li>
      <li>VERB: bagdi-e-ni, tukä:-ni, wakca-ini, eke:-ni, tatusi-ne:-ni, tukä:-nie, xetige-ηi-e-ni, amädeː-ni, bagdi-e-mi, bi-hi-mi</li>
      <li>VERB-Fin: tukä:-ni, wakca-ini, bagdi-e-ni, eke:-ni, tatusi-ne:-ni, tukä:-nie, xetige-ηi-e-ni, amädeː-ni, bagdi-e-mi, bi-hi-mi</li>
      <li>VERB-Ger: bi-mi</li>
      <li>VERB-Vnoun: calä-i-ni</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>PRON: uta-digi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>DET: uta-wa</li>
      <li>NOUN: Kämbuga, Ni:-we-de, Uli-we, b'ata-wa, cu’oi-wə, gaa-wa, mui-we, nakta-wa, ninta-wa, oloxi-we</li>
      <li>PRON: adi-me, ni:</li>
      <li>PROPN: ni:-we</li>
      <li>VERB-Fin: sindagi-a-ni</li>
      <li>VERB-Vnoun: bi-hi-wə</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>ADJ: na:-ηi-zi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADP: ba:-di-fi, ba:-du, gekti-du, jat'au-du, tege-di:, zugdi-du, b'äsa-du-ni, do-ni-ni, xo:n-du-ni, xuon-di-ni</li>
      <li>NOUN: bua-du, Mama-du, abugə-du, suu-du, ʒugdi-du, doo-ni-ni, lusa-ʒiga-du</li>
      <li>PRON: Min-du</li>
      <li>VERB-Part: b’a-han-di-fəi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: Slono-zi, p'aligi-zi, soligi-zi</li>
      <li>NOUN: məimə-ʒi, pahi-zi-ni</li>
      <li>PROPN: Zuaηc̆i-zi, seh-zi:</li>
      <li>VERB-Fin: ŋənə-ʒəŋə-ʒi-ni</li>
      <li>VERB-Part: iseːn-ziː</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Lat
    <ul>
      <li>NOUN: bua-tigi, bugasa-tigi-ni, zei-tigi:</li>
      <li>PROPN: igbe:-ni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADP: ba:, kä-la, zugdi-tigi</li>
      <li>NOUN: uli-lə, ʒugdi-lə, Baa-la, Doumi-lə, abugə-lə, aka-la-i, auŋga-la, jaa-la, kuga-la, xoto</li>
      <li>PROPN: igbe:-ni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>NOUN: Iηakta-ni, di:ηki-ni</li>
      <li>PRON: ami-ni</li>
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
      <li>ADJ: egdi, kede-ñeñe, wac'a</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: əhini</li>
      <li>VERB-Fin: e-ini, e-lege-ni, e-si-ti, ise, ə-ʒəŋə-i</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>VERB-Fin: Kämbu-wasi-e-fi, kämbu-wasi-u-ji</li>
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
      <li>VERB-Fin: bie</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter
    <ul>
      <li>VERB: Uli-gi-li-wəŋ-ki-ti, gegbi-ηi-e-ti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Fin: Tatusi-ge-si, bagdi-ga, iin-ka-u, tinda-ga</li>
      <li>VERB-Part: kapt'a-si</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>VERB-Ger: diəli-kca-mi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: bu-jə, shol, ŋua-nə-jə-hu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: e-u-ji, o-si-ni</li>
      <li>VERB-Fin: bagdi-li-e-ti, bie, tukä:-ni, wakca-ini, bagdi-e-ni, bagdi-e-ti, eke:-ni, tatusi-ne:-ni, tukä:-nie, xetige-ηi-e-ni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>VERB-Fin: saa-ʒa-hi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prp
    <ul>
      <li>VERB-Fin: e-lege-ni, ηeηe-le:-ηί</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>VERB-Fin: Geinige-ze-fi, Tukä-za-fi, guline-ze-fi, tukä-za</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB-Fin: wa-zaηa-zi, ŋənə-ʒəŋə-ʒi-ni, Əmə-gi-ʒəŋə-i, ə-ʒəŋə-i</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: o-si-ni</li>
      <li>VERB: bagdi-e-ni, bagdi-li-e-ti, tukä:-ni, ajani, bagdi-e-ti, eke:-ni, nede-iti, tatusi-ne:-ni, tukä:-nie, wo-iti</li>
      <li>VERB-Fin: bagdi-li-e-ti, tukä:-ni, bagdi-e-ni, bagdi-e-ti, eke:-ni, tatusi-ne:-ni, tukä:-nie, xetige-ηi-e-ni, Bagdi-li-ə-mu, Gulini-e-ti-de</li>
      <li>VERB-Part: iseːn-ziː</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: e-u-ji</li>
      <li>VERB: bie, wakca-ini, bi-hi-mi, bihi-ni, jah-wa-da, o:-i, uu-hi, wa-ini, xeηki:-ni, ŋələ-ini</li>
      <li>VERB-Fin: bie, wakca-ini, bi-hi-mi, bihi-ni, jah-wa-da, o:-i, uu-hi, wa-ini, ŋələ-ini, ηele-ini</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB: Uli-gi-li-wəŋ-ki-ti, təti-wəŋ-ki-ni</li>
      <li>VERB-Fin: təti-wəŋ-ki-ni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: ise</li>
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
      <li>DET: uti, uta-wa, xoηto, zuηe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: men-e, bi, uti, 'apti:, Adi, Min-du, Minti, bi:, ei, emugde-i</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: nada, omo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: təna</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>NOUN: Uŋta-na-hi, in’ai-ni, ʒugdi-fi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>VERB-Fin: Əmə-gi-ʒəŋə-i</li>
      <li>VERB-Ger: Galakta-gi-mi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: Min-du, Minti, bi, Mne, bu, mina-wa, mine-wa, əmə-gi</li>
      <li>VERB-Fin: Bagdi-li-ə-mu, Geinige-ze-fi, Tukä-za-fi, bi-hi-mi, guline-ze-fi, gəla-musə-i, ii-ə-mi, iin-ka-u, tukä-za, təluŋusi-ə-mu</li>
      <li>VERB-Ger: bi-mi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>NOUN: Ñaʒakta-ɨ</li>
      <li>VERB-Fin: eme-gi-e-i, saa-ʒa-hi, si, uu-hi, ŋua-nə-jə-hu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADP: b'äsa-du-ni, do-ni-ni, xo:n-du-ni, xuon-di-ni</li>
      <li>AUX-Fin: e-u-ji, o-si-ni</li>
      <li>NOUN: 'o-wo-ni, Iηakta-ni, Käämikta-la-ni, Xuñaʒi-ni, Zie-we-ni, amä:-la-ni, bogoli-ḛ-ni, bugasa-tigi-ni, di:ηki-ni, doo-ni-ni</li>
      <li>PRON: Eni-ni, Mənə, ami-ni</li>
      <li>VERB: bagdi-e-ni, bagdi-li-e-ti, tukä:-ni, wakca-ini, bagdi-e-ti, eke:-ni, nede-iti, tatusi-ne:-ni, tukä:-nie, wo-iti</li>
      <li>VERB-Fin: bagdi-li-e-ti, tukä:-ni, wakca-ini, bagdi-e-ni, bagdi-e-ti, eke:-ni, tatusi-ne:-ni, tukä:-nie, xetige-ηi-e-ni, Gulini-e-ti-de</li>
      <li>VERB-Vnoun: calä-i-ni</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>NOUN: ʒugdi-fi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: Uŋta-na-hi, in’ai-ni</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Clusivity</a>
    <ul>
      <li>Ex
        <ul>
          <li>PRON: Minti, bu</li>
          <li>VERB-Fin: Bagdi-li-ə-mu, iin-ka-u, təluŋusi-ə-mu</li>
        </ul>
      </li>
      <li>In
        <ul>
          <li>NOUN: ʒugdi-fi</li>
          <li>PRON: Min-du, Minti</li>
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
          <li>NOUN: ʒugdi-fi</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>NOUN: Uŋta-na-hi</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>NOUN: in’ai-ni</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus does not contain copulas.</li>
</ul>

<ul>
<li>This corpus uses 2 lemmas as auxiliaries (<a>aux</a>). Examples: e-u, o.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB-Fin--NOUN (19)</li>
      <li>VERB-Fin--NOUN-Nom (1)</li>
      <li>VERB-Fin--PRON (7)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Vnoun--NOUN (1)</li>
      <li>VERB-Vnoun--NOUN-Dat (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Acc (5)</li>
      <li>VERB--NOUN-Ins (1)</li>
      <li>VERB--PRON (2)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB-Fin--NOUN (4)</li>
      <li>VERB-Fin--NOUN-ADP(giə⸗də) (1)</li>
      <li>VERB-Fin--NOUN-Acc (7)</li>
      <li>VERB-Fin--PRON (6)</li>
      <li>VERB-Inf--NOUN-Acc (3)</li>
      <li>VERB-Vnoun--NOUN (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (1)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus does not use relation subtypes.</li>
<li>The following 15 relation types are not used in this corpus at all: <a>csubj</a>, <a>xcomp</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>cop</a>, <a>appos</a>, <a>clf</a>, <a>fixed</a>, <a>flat</a>, <a>list</a>, <a>parataxis</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
