---
layout: base
title:  'UD_English-ESLSpok'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD English ESLSpok

Language: [English](/en/index.html) (code: `en`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.12 release.

The following people have contributed to making this treebank part of UD: Kris Kyle, Masaki Eguchi, Aaron Miller, Ted Sither.

Repository: [UD_English-ESLSpok](https://github.com/UniversalDependencies/UD_English-ESLSpok)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uden_eslspok213)<br />
Download all treebanks: [UD 2.13](/#download)

License: CC BY-SA 4.0

Genre: spoken

Questions, comments?
General annotation questions (either English-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_English-ESLSpok/issues).
If you want to collaborate, please contact [kkyle2&nbsp;(æt)&nbsp;uoregon&nbsp;•&nbsp;edu].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

This repository includes the Dependency Treebank of Spoken L2 English (SL2E), which consists of Universal Dependency annotations for a random sample of sentences from the <a href="https://alaginrc.nict.go.jp/nict_jle/index_E.html" target="_blank">NICT JLE</a>, a corpus of spoken second language English. <a href="https://github.com/LCR-ADS-Lab/SL2E-Dependency-Treebank" target="_blank">The homepage of the project is here.</a>



This treebank is a part of a larger effort to make more treebank data that represents second language (L2) use publicly available.

Fine-grained part of speech tags (XPOS) were based on the Penn Treebank Tagset and were manually annotated from scratch by at least two annotators. The XPOS annotation guidelines <a href="https://kristopherkyle.github.io/L2-Annotation-Project/anno_overview.html" target="_blank">can be found here</a>. Dependency annotations followed the Universal Dependencies (version 2.0) and were also manually annotated from scratch by at least two trained annotators. Supplemental annotation guidelines <a href="https://kristopherkyle.github.io/L2-Annotation-Project/dep_anno_overview.html" target="_blank">can be found here</a>.

Universal part of speech tags (UPOS) were added using a probabilistic model trained using both L1 and L2 sections of the English UD treebanks (EWT, GUM, GUMReddit, Pronouns, PUD, and ESL) that relies on the XPOS tag and the UD syntactic relation. Automatic tagging accuracy was .9885 (macro accuracy), and all tags acheived an f1 above .97. The UPOS tags were subsequently checked manually.

More data is available that has been tagged with XPOS tags only on <a href="https://github.com/LCR-ADS-Lab/SL2E-Dependency-Treebank" target="_blank">the project homepage</a>.

## Acknowledgments
We would like to thank all of the undergraduate linguists who have contributed to this project: Chasen Afghani, Charles Baker-Rozell, Tyler Demmon, Zoe Haupt, Reed Jordan, Aaron Miller, Ted Sither, Grace Teuscher, and Claire Worthington

## References

**Treebank reference:**

Kyle, K., Eguchi, M., Miller, A., & Sither, T. (2022). *A dependency treebank of spoken second language English*. In *Proceedings of the 2022 Conference of the North American Chapter of the Association for Computational Linguistics: Innovative Use of NLP for Building Educational Applications (BEA 2022)*, pp. 39-45., Seattle, USA. Association for Computational Linguistics. <a href="https://aclanthology.org/2022.bea-1.7.pdf" target="_blank">pdf</a>

**Source Corpus Reference:**

Izumi, E., Uchimoto, K., & Isahara, H. (2004). The NICT JLE Corpus: Exploiting the language learners’ speech database for research and education. *International Journal of The Computer,the Internet and Management, 12*(2), 119–125.


# Statistics of UD English ESLSpok

## POS Tags

[ADJ](en_eslspok-pos-ADJ.html) – [ADP](en_eslspok-pos-ADP.html) – [ADV](en_eslspok-pos-ADV.html) – [AUX](en_eslspok-pos-AUX.html) – [CCONJ](en_eslspok-pos-CCONJ.html) – [DET](en_eslspok-pos-DET.html) – [INTJ](en_eslspok-pos-INTJ.html) – [NOUN](en_eslspok-pos-NOUN.html) – [NUM](en_eslspok-pos-NUM.html) – [PART](en_eslspok-pos-PART.html) – [PRON](en_eslspok-pos-PRON.html) – [PROPN](en_eslspok-pos-PROPN.html) – [PUNCT](en_eslspok-pos-PUNCT.html) – [SCONJ](en_eslspok-pos-SCONJ.html) – [VERB](en_eslspok-pos-VERB.html) – [X](en_eslspok-pos-X.html)

## Features



## Relations

[acl](en_eslspok-dep-acl.html) – [acl:relcl](en_eslspok-dep-acl-relcl.html) – [advcl](en_eslspok-dep-advcl.html) – [advmod](en_eslspok-dep-advmod.html) – [amod](en_eslspok-dep-amod.html) – [appos](en_eslspok-dep-appos.html) – [aux](en_eslspok-dep-aux.html) – [aux:pass](en_eslspok-dep-aux-pass.html) – [case](en_eslspok-dep-case.html) – [cc](en_eslspok-dep-cc.html) – [cc:preconj](en_eslspok-dep-cc-preconj.html) – [ccomp](en_eslspok-dep-ccomp.html) – [compound](en_eslspok-dep-compound.html) – [compound:prt](en_eslspok-dep-compound-prt.html) – [conj](en_eslspok-dep-conj.html) – [cop](en_eslspok-dep-cop.html) – [csubj](en_eslspok-dep-csubj.html) – [dep](en_eslspok-dep-dep.html) – [det](en_eslspok-dep-det.html) – [det:predet](en_eslspok-dep-det-predet.html) – [discourse](en_eslspok-dep-discourse.html) – [dislocated](en_eslspok-dep-dislocated.html) – [expl](en_eslspok-dep-expl.html) – [fixed](en_eslspok-dep-fixed.html) – [flat](en_eslspok-dep-flat.html) – [flat:foreign](en_eslspok-dep-flat-foreign.html) – [goeswith](en_eslspok-dep-goeswith.html) – [iobj](en_eslspok-dep-iobj.html) – [list](en_eslspok-dep-list.html) – [mark](en_eslspok-dep-mark.html) – [nmod](en_eslspok-dep-nmod.html) – [nmod:npmod](en_eslspok-dep-nmod-npmod.html) – [nmod:poss](en_eslspok-dep-nmod-poss.html) – [nmod:tmod](en_eslspok-dep-nmod-tmod.html) – [nsubj](en_eslspok-dep-nsubj.html) – [nsubj:pass](en_eslspok-dep-nsubj-pass.html) – [nummod](en_eslspok-dep-nummod.html) – [obj](en_eslspok-dep-obj.html) – [obl](en_eslspok-dep-obl.html) – [obl:npmod](en_eslspok-dep-obl-npmod.html) – [obl:tmod](en_eslspok-dep-obl-tmod.html) – [parataxis](en_eslspok-dep-parataxis.html) – [punct](en_eslspok-dep-punct.html) – [reparandum](en_eslspok-dep-reparandum.html) – [root](en_eslspok-dep-root.html) – [xcomp](en_eslspok-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2320 sentences and 21312 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 15 types of words that contain both letters and punctuation. Examples: 's, n't, 'm, o'clock, 'll, 'd, 're, 've, V., D., I., L., M., S., U.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 6 word types tagged as particles (PART): ', 's, n't, na, not, to</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as pronouns (PRON): _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as determiners (DET): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: _</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (275)</li>
      <li>VERB--NOUN-ADP(_) (2)</li>
      <li>VERB--PRON (1483)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (776)</li>
      <li>VERB--NOUN-ADP(_) (4)</li>
      <li>VERB--PRON (275)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (26)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>det:predet</a>, <a>flat:foreign</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:pass</a>, <a>obl:npmod</a>, <a>obl:tmod</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>vocative</a>, <a>clf</a>, <a>orphan</a></li>
</ul>
