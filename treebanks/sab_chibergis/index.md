---
layout: base
title:  'UD_Bokota-ChibErgIS'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Bokota ChibErgIS

Language: [Bokota](/sab/index.html) (code: `sab`)<br/>
Family: Chibchan

This treebank has been part of Universal Dependencies since the UD v2.16 release.

The following people have contributed to making this treebank part of UD: Marie Benzerrak, Natalia Cáceres Arandia.

Repository: [UD_Bokota-ChibErgIS](https://github.com/UniversalDependencies/UD_Bokota-ChibErgIS)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udsab_chibergis216)<br />
Download all treebanks: [UD 2.16](/#download)

License: CC BY-SA 4.0

Genre: spoken

Questions, comments?
General annotation questions (either Bokota-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Bokota-ChibErgIS/issues).
If you want to collaborate, please contact [marie&nbsp;•&nbsp;benzerrak&nbsp;(æt)&nbsp;laposte&nbsp;•&nbsp;net].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

A Universal Dependencies corpus for Bokota, a member of the Chibchan language family. The language is spoken by about 500 speakers in Panama. The variant of the Bokota treebank is spoken in the Comarca Ngobe-Bugle, at the border of the Veraguas Province, along the Caribbean coast. The other known variant of the language is called Buglere, and is spoken in the province of Chiriqui, in Panama.



The treebank is an automatic conversion of the SUD_Bokota-ChibErgIS, which is an automatic conversion of the [mSUD_Bokota-ChibErgIS](https://github.com/surfacesyntacticud/mSUD_Bokota-ChibErgIS) which was extracted from Marie Benzerrak interlinearized corpus in Flex format, itself an extension of an oral corpus documented by Marie Benzerrak (https://doi.org/10.5281/zenodo.13829160).

## Acknowledgments

Sentences are annotated with the following metadata:
- `sent_timecode` (which will enable playback of the sentence)
- `morphemic_text`: (original segmentation of the text into morphemes)
- `text`: (lexical tokenization)
- `text_en`: (English interpretation)
- `text_phrase-gls-sab`: (original id)

## Structure
This version of the treebank is a dependency parsing of some files from the original corpus.

The original data are spoken data, which were originally segmented in words with concatenated clitics, then interlinearized and glossed in Flex with clitics as separate tokens. Tokens comprize words and affixes (preceded by a "-" sign).

The **UD_Bokota-ChibErgIS** counts NUMBER tokens for NUMBER sentences.

## References

- Benzerrak, Marie. Chamoreau, C., Skopeteas, S., & Verhoeven, E. 2024. Bokota Spoken Corpus. Controlled Narrative Subcollection (1.0). Zenodo. https://doi.org/10.5281/zenodo.13829160

## Acknowledgments

This treebank was produced as part of the ChibErgIS project. Natalia Caceres is a main contributor in the annotation process, in association with Jana Bajorat who is at the same time annotating the Ika corpus. With special thanks to Bruno Guillaume for the conversion from SUD to UD.


# Statistics of UD Bokota ChibErgIS

## POS Tags

[ADJ](sab_chibergis-pos-ADJ.html) – [ADP](sab_chibergis-pos-ADP.html) – [ADV](sab_chibergis-pos-ADV.html) – [AUX](sab_chibergis-pos-AUX.html) – [CCONJ](sab_chibergis-pos-CCONJ.html) – [DET](sab_chibergis-pos-DET.html) – [NOUN](sab_chibergis-pos-NOUN.html) – [NUM](sab_chibergis-pos-NUM.html) – [PART](sab_chibergis-pos-PART.html) – [PRON](sab_chibergis-pos-PRON.html) – [PROPN](sab_chibergis-pos-PROPN.html) – [PUNCT](sab_chibergis-pos-PUNCT.html) – [SCONJ](sab_chibergis-pos-SCONJ.html) – [VERB](sab_chibergis-pos-VERB.html) – [X](sab_chibergis-pos-X.html)

## Features

[Foreign](sab_chibergis-feat-Foreign.html) – [Polarity](sab_chibergis-feat-Polarity.html)

## Relations

[acl](sab_chibergis-dep-acl.html) – [acl:relcl](sab_chibergis-dep-acl-relcl.html) – [advcl](sab_chibergis-dep-advcl.html) – [advcl:purp](sab_chibergis-dep-advcl-purp.html) – [advmod](sab_chibergis-dep-advmod.html) – [amod](sab_chibergis-dep-amod.html) – [aux](sab_chibergis-dep-aux.html) – [aux:pass](sab_chibergis-dep-aux-pass.html) – [case](sab_chibergis-dep-case.html) – [cc](sab_chibergis-dep-cc.html) – [ccomp](sab_chibergis-dep-ccomp.html) – [clf](sab_chibergis-dep-clf.html) – [compound](sab_chibergis-dep-compound.html) – [compound:svc](sab_chibergis-dep-compound-svc.html) – [conj](sab_chibergis-dep-conj.html) – [cop](sab_chibergis-dep-cop.html) – [csubj](sab_chibergis-dep-csubj.html) – [dep](sab_chibergis-dep-dep.html) – [det](sab_chibergis-dep-det.html) – [discourse](sab_chibergis-dep-discourse.html) – [flat](sab_chibergis-dep-flat.html) – [mark](sab_chibergis-dep-mark.html) – [nmod](sab_chibergis-dep-nmod.html) – [nmod:poss](sab_chibergis-dep-nmod-poss.html) – [nsubj](sab_chibergis-dep-nsubj.html) – [nsubj:pass](sab_chibergis-dep-nsubj-pass.html) – [nummod](sab_chibergis-dep-nummod.html) – [obj](sab_chibergis-dep-obj.html) – [obl](sab_chibergis-dep-obl.html) – [obl:arg](sab_chibergis-dep-obl-arg.html) – [obl:lmod](sab_chibergis-dep-obl-lmod.html) – [obl:mod](sab_chibergis-dep-obl-mod.html) – [obl:tmod](sab_chibergis-dep-obl-tmod.html) – [punct](sab_chibergis-dep-punct.html) – [reparandum](sab_chibergis-dep-reparandum.html) – [root](sab_chibergis-dep-root.html) – [xcomp](sab_chibergis-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 406 sentences and 2713 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ, SYM</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): ai, manire, mine, no</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as pronouns (PRON): ba, cha, che, dion, ese, maungia, mung, usted</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as determiners (DET): ese, este, la, ne, todo</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: ese</li>
</ul>

<ul>
<li>This corpus contains 7 lemmas tagged as auxiliaries (AUX): be, gna, hoke, kle, me, ponia, tiene</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: hoke</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: me</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADP: para, hasta</li>
          <li>ADV: entonces, ya, asi, mas, ahora</li>
          <li>NOUN: arroz, escuela</li>
          <li>SCONJ: si, para, cuando, hasta</li>
          <li>VERB: esta, hay, sube, usale, usamos</li>
          <li>X: y, pero, porque, que</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: kle.</li>
</ul>

<ul>
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: kle, be, me, gna, hoke, tiene, ponia.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: kle.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (96)</li>
      <li>VERB--NOUN-ADP(ke) (1)</li>
      <li>VERB--PRON (223)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (228)</li>
      <li>VERB--NOUN-ADP(giti) (1)</li>
      <li>VERB--PRON (15)</li>
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
<li>This corpus uses 10 relation subtypes: <a>acl:relcl</a>, <a>advcl:purp</a>, <a>aux:pass</a>, <a>compound:svc</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:arg</a>, <a>obl:lmod</a>, <a>obl:mod</a>, <a>obl:tmod</a></li>
<li>The following 10 relation types are not used in this corpus at all: <a>iobj</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>appos</a>, <a>fixed</a>, <a>list</a>, <a>parataxis</a>, <a>orphan</a>, <a>goeswith</a></li>
</ul>
