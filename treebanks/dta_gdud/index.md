---
layout: base
title:  'UD_Daur-GDUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Daur GDUD

Language: [Daur](/dta/index.html) (code: `dta`)<br/>
Family: Mongolic

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Wenchao Li, Haitao Liu.

Repository: [UD_Daur-GDUD](https://github.com/UniversalDependencies/UD_Daur-GDUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uddta_gdud219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Daur-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Daur-GDUD/issues).
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

UD_Daur-GDUD is a treebank of Daur (also called Dagur), a Mongolic language spoken in northeastern China, based on grammatical example sentences derived from a reference grammar.




The Daur GDUD (Grammar-Derived Universal Dependencies) treebank contains 95 sentences of Daur (ISO 639-3: dta), a Mongolic language spoken by the Daur people primarily in Heilongjiang and Inner Mongolia (China), with a smaller community in Xinjiang. Daur is one of the more divergent members of the Mongolic family and has been in extensive contact with Manchu, Chinese, and other neighboring languages. The data consist of grammatical example sentences drawn from a reference grammar of Daur, presented in Latin transliteration and accompanied by English translations.

All sentences are manually annotated with lemmas, universal part-of-speech tags (UPOS), morphological features, and dependency relations, following the Universal Dependencies (UD) guidelines. The annotation prioritizes UD core morphological features and dependency relations. The language-specific features `PartType` (Emp, Int) and `ExtPos` are used in a small number of cases, following the analysis of the reference grammar. Additional Daur-specific morphological distinctions that do not correspond to any value in the universal feature inventory are encoded in the MISC column, in accordance with UD conventions.

## Data split

Because the treebank is small (well below the 20K-word threshold), all sentences are provided as test data.

## Morphological annotation

All UD core features used in the treebank take standard universal values, including `Evident=Nfh` on non-firsthand verbal forms. The language-specific features `PartType=Emp` and `PartType=Int` are used on emphatic and interrogative particles.

## Dependency annotation

UD core relations are used throughout the treebank.


## Acknowledgments

The Daur GDUD treebank was created by Wenchao Li and Haitao Liu, based on grammatical example sentences from a reference grammar of Daur. The annotation of lemmas, part-of-speech tags, morphological features, and dependency relations was carried out manually following the Universal Dependencies guidelines.

We thank Daniel Zeman for his guidance in setting up the treebank repository and for his help with the Universal Dependencies workflow, and the Universal Dependencies community for their support.



# Statistics of UD Daur GDUD

## POS Tags

[ADJ](dta_gdud-pos-ADJ.html) – [ADP](dta_gdud-pos-ADP.html) – [ADV](dta_gdud-pos-ADV.html) – [AUX](dta_gdud-pos-AUX.html) – [CCONJ](dta_gdud-pos-CCONJ.html) – [DET](dta_gdud-pos-DET.html) – [INTJ](dta_gdud-pos-INTJ.html) – [NOUN](dta_gdud-pos-NOUN.html) – [NUM](dta_gdud-pos-NUM.html) – [PART](dta_gdud-pos-PART.html) – [PRON](dta_gdud-pos-PRON.html) – [PROPN](dta_gdud-pos-PROPN.html) – [PUNCT](dta_gdud-pos-PUNCT.html) – [SCONJ](dta_gdud-pos-SCONJ.html) – [VERB](dta_gdud-pos-VERB.html)

## Features

[Aspect](dta_gdud-feat-Aspect.html) – [Case](dta_gdud-feat-Case.html) – [Degree](dta_gdud-feat-Degree.html) – [Evident](dta_gdud-feat-Evident.html) – [ExtPos](dta_gdud-feat-ExtPos.html) – [Mood](dta_gdud-feat-Mood.html) – [Number](dta_gdud-feat-Number.html) – [Number[psor]](dta_gdud-feat-Number-psor.html) – [NumType](dta_gdud-feat-NumType.html) – [PartType](dta_gdud-feat-PartType.html) – [Person](dta_gdud-feat-Person.html) – [Person[psor]](dta_gdud-feat-Person-psor.html) – [Polarity](dta_gdud-feat-Polarity.html) – [Poss](dta_gdud-feat-Poss.html) – [PronType](dta_gdud-feat-PronType.html) – [Reflex](dta_gdud-feat-Reflex.html) – [Tense](dta_gdud-feat-Tense.html) – [VerbForm](dta_gdud-feat-VerbForm.html) – [Voice](dta_gdud-feat-Voice.html)

## Relations

[acl](dta_gdud-dep-acl.html) – [advcl](dta_gdud-dep-advcl.html) – [advmod](dta_gdud-dep-advmod.html) – [amod](dta_gdud-dep-amod.html) – [appos](dta_gdud-dep-appos.html) – [aux](dta_gdud-dep-aux.html) – [case](dta_gdud-dep-case.html) – [cc](dta_gdud-dep-cc.html) – [ccomp](dta_gdud-dep-ccomp.html) – [compound](dta_gdud-dep-compound.html) – [conj](dta_gdud-dep-conj.html) – [cop](dta_gdud-dep-cop.html) – [dep](dta_gdud-dep-dep.html) – [det](dta_gdud-dep-det.html) – [discourse](dta_gdud-dep-discourse.html) – [fixed](dta_gdud-dep-fixed.html) – [flat](dta_gdud-dep-flat.html) – [iobj](dta_gdud-dep-iobj.html) – [mark](dta_gdud-dep-mark.html) – [nmod](dta_gdud-dep-nmod.html) – [nmod:poss](dta_gdud-dep-nmod-poss.html) – [nsubj](dta_gdud-dep-nsubj.html) – [nsubj:outer](dta_gdud-dep-nsubj-outer.html) – [nsubj:pass](dta_gdud-dep-nsubj-pass.html) – [nummod](dta_gdud-dep-nummod.html) – [obj](dta_gdud-dep-obj.html) – [obl](dta_gdud-dep-obl.html) – [obl:tmod](dta_gdud-dep-obl-tmod.html) – [parataxis](dta_gdud-dep-parataxis.html) – [punct](dta_gdud-dep-punct.html) – [root](dta_gdud-dep-root.html) – [xcomp](dta_gdud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 95 sentences and 659 tokens.</li>
</ul>

<ul>
<li>This corpus contains 110 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 156 types of words that contain both letters and punctuation. Examples: bol-lən, ʃad-bəi, aː-sən, dəu-minʲ, dʒuɣʲ-bəi, kur-ɣu, mədə-n, ənd-əːr, akaː-jiːɣ-minʲ, bol-lən-ʃeː, dʒuɣi-ɣu, gərʲ-dəː, gʲaː-d, jaw-oːs-minʲ, nəu-dʒ, tərəːw-əːr, udʒ-ɣu-d, xoir-oːr, xoːn-d, xəil-lən, Tujaː-bi, a-dʒ-a-w, ail-d, akaː-minʲ, akaː-ʃid, anin-ʃi, atʃaː-minʲ, atʃaː-ʃinʲ, au-sən-ʃi, au-wəi, aŋgəl-baː, aŋgəl-taː, aɣ-bi, aː-dʒ-a-b-ʃeː, aː-dʒ-a-bəi, aː-dʒ-a-ɣu, aː-sən-bi, aːdʒ-aː-bəi, aːdʒ-aː-wəi, bail-ɣaː-sən, baitlə-ɣu, bodɣ-oːr, bol-bəi, bol-lən-mi, bol-tl-aː, bol-wəi, bolɣ-oːr, boːldʒoː-dʒ, bəi-ji-nʷ, bəj-d</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, X</li>
</ul>

<ul>
<li>This corpus contains 11 word types tagged as particles (PART): biʃin, dʒuɣj-bəi, dʒuɣʲ-bəi, jaː, jəː, kunu, kəː, u1, ul, uʲ-bəi, woː</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as pronouns (PRON): anin, baː, biː, in, juɣuː, miniːɣ, minʲ, nam, naː, naːd, nək, təd, tədə, tər, tərəːw, xaːmə, xən, ənə, ʃam, ʃi, ʃiniːɣ, ʃinʲ, ʃiː</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as determiners (DET): gub, jamər, nək, tər, xoː, xədən, xər, əimər, ənə</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as PRON and sometimes as DET: nək, tər, ənə</li>
</ul>

<ul>
<li>This corpus contains 7 lemmas tagged as auxiliaries (AUX): adʒ, biʃin, biː, bəi, jəː, udeːn, uwəi</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as AUX and sometimes as VERB: bəi, uwəi</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>SCONJ: əl-əːs</li>
    <li>VERB: jaw-oːs-minʲ, bolɣ-oːr, boːldʒoː-dʒ, xolbuɣ-oː</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: bəi, biʃin, biː, jəː, adʒ, bəi-ji-nʷ, bəidʒeː, uwəi-bi</li>
    <li>VERB: bəi, ʃad-bəi, mədə-n, bol-lən, jumoː, bol-tl-aː, duləː-dʒ-a-bəi, jau-sən, mart-sən, məd-ɣu</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: ərʲdʒ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: xəidʒ, aː-sən, baitlə-ɣu, gəlʲ-dʒ-a-ɣu, id-ɣu, xəil-dʒ</li>
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
      <li>NOUN: bandən, gərʲtʃeːn, olur, utʃkər-tiː, aŋgəl-baː, dʒak-sul-d, dʒak-ʃinʲ, gərʲ-sul-liː, wəːrə-l</li>
      <li>PRON: təd, baː, təd-niː, tədə-nʲ, tər</li>
      <li>VERB: ir-sən-sul, toloː-ɣaːneː</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: aɣ-bi, ɲalkinʲ-bi</li>
      <li>AUX: udeː-mi, udeːn-mi, uwəi-bi</li>
      <li>AUX-Fin: uwəi-bi</li>
      <li>NOUN: bitəɣ, dəbtleːn, səb, dəu-minʲ, biːʃebʲ, nək, səutiːbaul, urtʃkər-tiː, xuː, akaː-ʃid</li>
      <li>NUM: tabʲtiː-ʃi, taːwutiː-bi</li>
      <li>PRON: biː, ʃiː, minʲ, ʃinʲ, tər, ənə, miniːɣ, naːd, tərəːw-əːr, anin-ʃi</li>
      <li>PROPN: Tujaː-bi</li>
      <li>VERB: mədə-n, bol-lən-ʃeː, jaw-oːs-minʲ, a-dʒ-a-w, au-sən-ʃi, au-wəi, aː-dʒ-a-b-ʃeː, aː-sən-bi, bol-lən-mi, dʲallən-tən-ʃi</li>
      <li>VERB-Conv: jaw-oːs-minʲ</li>
      <li>VERB-Fin: mədə-n, məd-ɣu, talʲ-lən-ʃeː, udʒi-rd-sən-ʃeː, udʒi-rd-tən-bi, ʃadə-b-ʃi, ʃadə-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADV: ənd-əːr</li>
      <li>NOUN: ənd-əːr, ərin-əːr, ʃintʃiwuː-jər</li>
      <li>PRON: tərəːw-əːr, nam-aːr, ʃam-aːr</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>AUX-Fin: bəi-ji-nʷ</li>
      <li>NOUN: wark-liː, warkl-iː, dʒak-aː, gərʲ-sul-liː, tʃeː-jaː, udur-i-nʲ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: gʲaː-d, xoːn-d, ail-d, bəj-d, guːsu-d, gərʲ-d, kurɣu-d, maimaːn-d, nʲŋgunbeː-d, sar-d</li>
      <li>NUM: gʷarbən-d</li>
      <li>PRON: naːd, naː-d</li>
      <li>VERB: udʒ-ɣu-d, itʃ-ɣu-d-ʃinʲ, əms-ɣu-d</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>NOUN: akaː-jiːɣ-minʲ, xoːn-iː, xuːruɣ-ui, əil-iː, əmə1kəːn-inʲ</li>
      <li>PRON: təd-niː, tədə-nʲ, xən-jiːɣ-iː</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>NOUN: bodɣ-oːr, nas-aːr, tʃaus-əːr</li>
      <li>NUM: xoir-oːr, gʷarb-aːr</li>
      <li>VERB-Conv: bolɣ-oːr</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>NOUN: gərʲ-dəː, garʲ-dəː, gər-dəː</li>
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
      <li>ADV: buɣul, jaɣ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: dəu, uʃkən, xiɣ, aɣ-bi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: xiɣ, xar, xol, xordun, gʷaidaːn, jerɣeːn, katuː, saikən, tʃiɣaːn, uʃkən</li>
      <li>ADV: aiduɣʷ, dəmbəl, tendəː, utʃəːk</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: xiɣ-in, ɲalkinʲ-bi</li>
      <li>ADV: wairkən, əkən</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: udeːn, biʃin, udeː-mi, udeːn-mi, uwəi-bi</li>
      <li>AUX-Fin: biʃin, uwəi-bi</li>
      <li>PART: ul, biʃin, dʒuɣj-bəi, u1</li>
      <li>VERB: bol-bəi, uwəi, xiː-ɣu</li>
      <li>VERB-Fin: uwəi, xiː-ɣu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: dʒuɣʲ-bəi</li>
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
      <li>VERB: kur-ɣu, dʒuɣi-ɣu, nəu-dʒ, aː-dʒ-a-bəi, aː-dʒ-a-ɣu, dur-dʒ-a-bəi, dʒaː-dʒ, ir-ɣu, jau-ɣu, udʒ-ɣu-d</li>
      <li>VERB-Conv: boːldʒoː-dʒ, xolbuɣ-oː</li>
      <li>VERB-Fin: duləː-dʒ-a-bəi, məd-ɣu</li>
      <li>VERB-Part: baitlə-ɣu, gəlʲ-dʒ-a-ɣu, id-ɣu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>ADV: du1əː-sən</li>
      <li>VERB: kur-wəi, tortoː-ɣu, xəil-dʒ</li>
      <li>VERB-Part: xəil-dʒ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: toloː-ɣaːneː, udʒ-ɣu-d</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: bəi, biʃin, biː, jəː, adʒ, bəi-ji-nʷ, bəidʒeː, uwəi-bi</li>
      <li>VERB: bəi, ʃad-bəi, mədə-n, bol-lən, jumoː, bol-tl-aː, duləː-dʒ-a-bəi, itʃ-jaː, jau-sən, mart-sən</li>
      <li>VERB-Fin: bəi, ʃad-bəi, mədə-n, bol-lən, jumoː, bol-tl-aː, duləː-dʒ-a-bəi, jau-sən, mart-sən, məd-ɣu</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: bol-wəi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: aːdʒ-aː-wəi, bəidʒeː</li>
      <li>AUX-Fin: bəidʒeː</li>
      <li>VERB: bol-lən, aː-sən, xəil-lən, bol-lən-ʃeː, xiː-sən, au-sən-ʃi, aː-sən-bi, bail-ɣaː-sən, bol-lən-mi, dʲallən-tən-ʃi</li>
      <li>VERB-Fin: bol-lən, jau-sən, mart-sən, talʲ-lən-ʃeː, udʒi-rd-sən-ʃeː, udʒi-rd-tən-bi</li>
      <li>VERB-Part: aː-sən</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: bəi, aːdʒ-aː-bəi, biː, jəː, biʃin</li>
      <li>AUX-Fin: bəi, biː, jəː, biʃin</li>
      <li>VERB: bəi, ʃad-bəi, mədə-n, bol-bəi, duləː-dʒ-a-bəi, xiː-ɣu, xəil-ɣəː-bəi, əl-dʒ-a-bəi, ʃadə-b-ʃi, ʃadə-n</li>
      <li>VERB-Fin: bəi, ʃad-bəi, mədə-n, duləː-dʒ-a-bəi, xiː-ɣu, ʃadə-b-ʃi, ʃadə-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>PRON: nək-əː</li>
      <li>VERB: bail-ɣaː-sən, xəil-ɣəː-bəi, xəil-ɣəː-ɣu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: udʒi-rd-sən-ʃeː, udʒi-rd-tən-bi, udʒi-rd-tən-mi, udʒi-rd-tən-ʃeː</li>
      <li>VERB-Fin: udʒi-rd-sən-ʃeː, udʒi-rd-tən-bi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>VERB: mədə-ltʃ-waː</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>AUX-Fin: bəidʒeː</li>
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
      <li>DET: ənə, tər, əimər</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: nək, xədən, xər</li>
      <li>PRON: juɣuː</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: xaːnə, joːkeː, xədʒəː, xedʒəː</li>
      <li>DET: jamər, xədən</li>
      <li>PRON: xaːmə, anin-ʃi, xən-jiːɣ-iː</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: biː, ʃiː, minʲ, tər, ʃinʲ, təd, ənə, baː, miniːɣ, naːd</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: nək, nək-əː</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: xoː, gub</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: xoir, nək, xarbən, doloː, dʒau, isən, mʲaŋgə, xorin, doloːtiː, dutʃin</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>NOUN: akaː-jiːɣ-minʲ, atʃaː-minʲ, atʃaː-ʃinʲ, bʲau-minʲ, dʒak-ʃinʲ, satəntiː-ʃi, tʃeːtiːʃi, wəːrə-l, xuː-ʃinʲ, əwəː-minʲ</li>
      <li>PRON: minʲ, ʃinʲ, miniːɣ, ʃiniːɣ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>AUX-Fin: bəi-ji-nʷ</li>
      <li>NOUN: bəj-əː, bʲau-jaː, gərʲ-dəː, uʃkən-dəː, dʒak-aː, garʲ-dəː, gər-dəː, tʃeː-jaː, udur-i-nʲ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADJ: aɣ-bi, ɲalkinʲ-bi</li>
      <li>AUX: udeː-mi, udeːn-mi, uwəi-bi</li>
      <li>AUX-Fin: uwəi-bi</li>
      <li>NOUN: atʃaː-minʲ, aŋgəl-baː, bʲau-minʲ, nastiː-biː, əwəː-minʲ</li>
      <li>NUM: taːwutiː-bi</li>
      <li>PRON: biː, minʲ, baː, miniːɣ, naːd, nam-aːr, naː-d</li>
      <li>VERB: mədə-n, jaw-oːs-minʲ, a-dʒ-a-w, au-wəi, aː-sən-bi, bol-lən-mi, itʃ-wəi, məd-ɣu, toloː-ɣaːneː, udʒi-rd-tən-bi</li>
      <li>VERB-Conv: jaw-oːs-minʲ</li>
      <li>VERB-Fin: mədə-n, məd-ɣu, udʒi-rd-tən-bi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>NOUN: atʃaː-ʃinʲ, aŋgəl-taː, dʒak-ʃinʲ, satəntiː-ʃi, tʃeːtiːʃi, xuː-ʃinʲ</li>
      <li>NUM: tabʲtiː-ʃi</li>
      <li>PRON: ʃiː, ʃinʲ, ʃam-aːr, ʃi, ʃiniːɣ</li>
      <li>VERB: bol-lən-ʃeː, au-sən-ʃi, aː-dʒ-a-b-ʃeː, dʲallən-tən-ʃi, itʃ-ɣu-d-ʃinʲ, olɣuʃ-inʲ, talʲ-lən-ʃeː, udʒi-rd-sən-ʃeː, udʒi-rd-tən-ʃeː, xəil-lən-ʃi</li>
      <li>VERB-Fin: talʲ-lən-ʃeː, udʒi-rd-sən-ʃeː, ʃadə-b-ʃi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>NOUN: akaː-jiːɣ-minʲ</li>
      <li>PRON: tər, təd, ənə, tərəːw-əːr, in, təd-niː, tədə-nʲ</li>
      <li>VERB-Fin: bol-tl-aː, ʃadə-n</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: bʲau-ʃinʲ, ərin-minʲ</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADV
        <ul>
          <li>PRON: nək</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PartType</a>
    <ul>
      <li>Emp
        <ul>
          <li>PART: kunu</li>
        </ul>
      </li>
      <li>Int
        <ul>
          <li>PART: jəː, woː, jaː</li>
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
          <li>NOUN: dəu-minʲ, kakʷ-minʲ, əkəː-minʲ, ərin-minʲ</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>NOUN: akaː-ʃid, bʲau-ʃinʲ, əkəː-ʃinʲ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: bəi, jəː.</li>
</ul>

<ul>
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: udeːn, biː, adʒ, biʃin, uwəi.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (8)</li>
      <li>VERB--NOUN-Acc (2)</li>
      <li>VERB--PRON (25)</li>
      <li>VERB--PRON-Gen (1)</li>
      <li>VERB-Conv--NOUN (1)</li>
      <li>VERB-Conv--PRON (1)</li>
      <li>VERB-Fin--NOUN (8)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--PRON (8)</li>
      <li>VERB-Fin--PRON-Dat (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (7)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--PRON (2)</li>
      <li>VERB-Fin--NOUN (3)</li>
      <li>VERB-Fin--NOUN-Acc (2)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 3 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: aː uʃkən-dəː, mart udur-i-nʲ, talʲ dʒak-aː</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 4 relation subtypes: <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:tmod</a></li>
<li>The following 9 relation types are not used in this corpus at all: <a>csubj</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
