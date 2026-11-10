---
layout: base
title:  'UD_Ulch-GDUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Ulch GDUD

Language: [Ulch](/ulc/index.html) (code: `ulc`)<br/>
Family: Tungusic

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Wenchao Li, Haitao Liu.

Repository: [UD_Ulch-GDUD](https://github.com/UniversalDependencies/UD_Ulch-GDUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udulc_gdud219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Ulch-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Ulch-GDUD/issues).
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

UD_Ulch-GDUD is a treebank of Ulch (also called Ulchi), a Southern Tungusic language spoken in the Lower Amur region of the Russian Far East, based on grammatical example sentences derived from a reference grammar.




The Ulch GDUD (Grammar-Derived Universal Dependencies) treebank contains 93 sentences of Ulch (ISO 639-3: ulc), a Southern Tungusic language spoken by the Ulch people along the lower Amur River in the Russian Far East. The data consist of grammatical example sentences drawn from a reference grammar of Ulch, presented in a phonemic Latin-based transcription and accompanied by English translations and interlinear glosses.

All sentences are manually annotated with lemmas, universal part-of-speech tags (UPOS), morphological features, and dependency relations, following the Universal Dependencies (UD) guidelines. The annotation prioritizes UD core morphological features and dependency relations. The language-specific feature `Deixis` (with value `Remt`) is used on demonstrative determiners, following the analysis of the reference grammar. Additional Ulch-specific morphological distinctions that do not correspond to any value in the universal feature inventory are encoded in the MISC column, in accordance with UD conventions.

## Data split

Because the treebank is small (well below the 20K-word threshold), all sentences are provided as test data.

## Morphological annotation

All UD core features used in the treebank take standard universal values. The language-specific feature `Deixis=Remt` is used on demonstrative determiners.

## Dependency annotation

UD core relations are used throughout the treebank.


## Acknowledgments

The Ulch GDUD treebank was created by Wenchao Li and Haitao Liu, based on grammatical example sentences from a reference grammar of Ulch. The annotation of lemmas, part-of-speech tags, morphological features, and dependency relations was carried out manually following the Universal Dependencies guidelines.

We thank Daniel Zeman for his guidance in setting up the treebank repository and for his help with the Universal Dependencies workflow, and the Universal Dependencies community for their support.



# Statistics of UD Ulch GDUD

## POS Tags

[ADJ](ulc_gdud-pos-ADJ.html) – [ADV](ulc_gdud-pos-ADV.html) – [DET](ulc_gdud-pos-DET.html) – [INTJ](ulc_gdud-pos-INTJ.html) – [NOUN](ulc_gdud-pos-NOUN.html) – [PRON](ulc_gdud-pos-PRON.html) – [PROPN](ulc_gdud-pos-PROPN.html) – [PUNCT](ulc_gdud-pos-PUNCT.html) – [VERB](ulc_gdud-pos-VERB.html)

## Features

[Aspect](ulc_gdud-feat-Aspect.html) – [Case](ulc_gdud-feat-Case.html) – [Degree](ulc_gdud-feat-Degree.html) – [Deixis](ulc_gdud-feat-Deixis.html) – [Mood](ulc_gdud-feat-Mood.html) – [Number](ulc_gdud-feat-Number.html) – [Number[psor]](ulc_gdud-feat-Number-psor.html) – [Person](ulc_gdud-feat-Person.html) – [Person[psor]](ulc_gdud-feat-Person-psor.html) – [Polarity](ulc_gdud-feat-Polarity.html) – [Poss](ulc_gdud-feat-Poss.html) – [PronType](ulc_gdud-feat-PronType.html) – [Reflex](ulc_gdud-feat-Reflex.html) – [Tense](ulc_gdud-feat-Tense.html) – [VerbForm](ulc_gdud-feat-VerbForm.html) – [Voice](ulc_gdud-feat-Voice.html)

## Relations

[acl](ulc_gdud-dep-acl.html) – [advcl](ulc_gdud-dep-advcl.html) – [advmod](ulc_gdud-dep-advmod.html) – [amod](ulc_gdud-dep-amod.html) – [ccomp](ulc_gdud-dep-ccomp.html) – [dep](ulc_gdud-dep-dep.html) – [det](ulc_gdud-dep-det.html) – [discourse](ulc_gdud-dep-discourse.html) – [nmod](ulc_gdud-dep-nmod.html) – [nmod:poss](ulc_gdud-dep-nmod-poss.html) – [nsubj](ulc_gdud-dep-nsubj.html) – [obj](ulc_gdud-dep-obj.html) – [obl](ulc_gdud-dep-obl.html) – [parataxis](ulc_gdud-dep-parataxis.html) – [punct](ulc_gdud-dep-punct.html) – [root](ulc_gdud-dep-root.html) – [xcomp](ulc_gdud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 93 sentences and 232 tokens.</li>
</ul>

<ul>
<li>This corpus contains 8 tokens (3%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 101 types of words that contain both letters and punctuation. Examples: дю̄э-ми, dǖe-mi, vā-və, ха̄ӈа-ми, dǖe-dū, ва̄-ни, сӣ-ни, bī-və, mirym-búj, puē-mi, vā-ni, xāŋa-mi, xēlu-m, ва̄-вэ, дё̄-ри-дӯ, мэ̄нэ-м, пуэ̄-ми, сӣ-м, хэ̄су-м, Tētē-ni, ajaču-xamb’-é, and’uí, bagud’élaśi, bu-xá, bu-xý, bujalu-ú, bukta-sú, buu-xá, byidu-dí, da-ygý, dyo-n-i, dyō-ke-m, dyō-ri-dū, dǖe-ni, endū-və, enin-dū, gulə-və, kindaram-dé, kuś-kongoré, mal-tý, mo-lo, mu-ly, mēne-m, naksuu-xá, nýŋman-dý, onbo-hó, oćom-dé, patalma-sí, pej-pej, sī-m</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 9 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADV</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: NUM, AUX, ADP, SCONJ, CCONJ, PART, SYM, X</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as pronouns (PRON): bi, endū, enin, simbi, sī, би, си, сӣ</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as determiners (DET): enin</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: enin</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as auxiliaries (AUX): </li>
</ul>

<ul>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>VERB: pej-pej, дё̄-н-чӣ, э̄-чи-н-chī</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: kuś-kongoré, nýŋman-dý, patalma-sí</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: bagud’élaśi, baldyxán</li>
    <li>VERB: дё̄-ри-дӯ, э̄-ди, э̄-ри-chī, ӯ-ри, dyō-ri-dū, э̄-чи-ри-дӯ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: ē-ne, дё̄-нэ, э̄-нэ, ӯ-нэ-тэ̄</li>
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
      <li>ADJ: гулэ-вэ, gulə-və</li>
      <li>DET: Enin</li>
      <li>NOUN: vā-və, ва̄-вэ, xāŋa-və, ŋenə, ŋenə-və, а̄си-вэ, хэ̄лу-вэ, Ӈэнэ-вэ, ха̄ӈа-вэ</li>
      <li>PRON: endū-və</li>
      <li>VERB: bī-və, mal-tý, ē-və, бичи-вэ, бӣ-вэ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>PRON: би, bi, сӣ, Sī, Си, сӣ-ни, simbi</li>
      <li>VERB: didʼú, mirym-búj, xēlu-m, мэ̄нэ-м, сӣ-м, хэ̄су-м, ajačuxá, and’uí, auxá, bakaxá</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>NOUN: дю̄э-ми, dǖe-mi, ха̄ӈа-ми, puē-mi, xāŋa-mi, пуэ̄, пуэ̄-ми, ха̄ӈа-вэ</li>
      <li>PROPN: нан’идами</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: ва̄-тэ̄</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>NOUN: ва̄-ни, vā-ni, Tētē-ni, dǖe-ni</li>
      <li>PRON: сӣ-ни, sī-ni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADV: энин-дӯ</li>
      <li>NOUN: dǖe-dū, kindaram-dé, mo-lo, mu-ly, Тэ̄тэ̄-дӯ, дю̄э-дӯ, пуэ̄-дӯ</li>
      <li>PRON: enin-dū</li>
      <li>VERB-Part: дё̄-ри-дӯ, dyō-ri-dū, э̄-чи-ри-дӯ</li>
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
      <li>ADJ: gulə-və</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: ba</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>VERB: ē-chi-ŋ, ē-lə-chi-m, ū-chi-m, Сарасимбэ, э̄-чи-н-chī, э̄-чи-ри-дӯ, э̄-чи-ӈ</li>
      <li>VERB-Fin: э̄-чи-н-chī</li>
      <li>VERB-Part: э̄-чи-ри-дӯ</li>
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
      <li>VERB: bu-xý</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>VERB: ē-n-chī</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: didʼú, bukta-sú, ē-chi-ŋ, э̄-чи-ӈ, ӯ-ӈ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>VERB-Fin: pej-pej, дё̄-н-чӣ, э̄-чи-н-chī</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: эндӯ</li>
      <li>VERB: dyo-n-i, sī-n-i, мэ̄нэ-н-и, урчулундиси, хэди-вэ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: mirym-búj, oćom-dé, ćorom-dé, čalu-ú</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>VERB: ajaču-xamb’-é, ajačuxá, alxá, argalaxáni, auxá, bakaxá, bu-xá, bu-xý, bujalu-ú, buu-xá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>VERB: anʒú, bī-və, xēlu-m, мэ̄нэ-м, сӣ-м, хэ̄су-м, and’uí, dyo-n-i, mēne-m, sī-m</li>
      <li>VERB-Fin: дё̄-н-чӣ, э̄-чи-н-chī</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB: ē-lə-chi-m, ē-lə-m</li>
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
      <li>DET: Enin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: endū-və</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: би, bi, сӣ, Sī, сӣ-ни, Си, enin-dū, simbi, sī-ni</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>NOUN: Дю̄э-ми</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>VERB: ajaču-xamb’-é</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: би, bi</li>
      <li>VERB: mirym-búj, xēlu-m, мэ̄нэ-м, сӣ-м, хэ̄су-м, and’uí, dyō-ke-m, mēne-m, oćom-dé, sī-m</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: сӣ, Sī, Си, сӣ-ни, simbi</li>
      <li>VERB: didʼú, bukta-sú, dyo-n-i, sī-n-i, ē-chi-ŋ, ē-n-chī, бису, дё̄-н-чӣ, мэ̄нэ-н-и, нгуй</li>
      <li>VERB-Fin: дё̄-н-чӣ, э̄-чи-н-chī</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>VERB: anʒú, bī-və, ajaču-xamb’-é, ajačuxá, alxá, argalaxáni, auxá, bakaxá, bu-xá, bu-xý</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: Дю̄э-ми</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Deixis</a>
    <ul>
      <li>Remt
        <ul>
          <li>NOUN: badí</li>
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
          <li>NOUN: Дю̄э-ми</li>
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
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--PRON (21)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Vnoun--NOUN-Gen (2)</li>
      <li>VERB-Vnoun--PRON (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (7)</li>
      <li>VERB--NOUN-Acc (7)</li>
      <li>VERB--PRON-Gen (2)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Acc (3)</li>
      <li>VERB-Vnoun--NOUN-Acc (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 1 relation subtypes: <a>nmod:poss</a></li>
<li>The following 21 relation types are not used in this corpus at all: <a>iobj</a>, <a>csubj</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>aux</a>, <a>cop</a>, <a>mark</a>, <a>appos</a>, <a>nummod</a>, <a>clf</a>, <a>case</a>, <a>conj</a>, <a>cc</a>, <a>fixed</a>, <a>flat</a>, <a>compound</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
