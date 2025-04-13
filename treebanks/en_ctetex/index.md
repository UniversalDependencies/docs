---
layout: base
title:  'UD_English-CTeTex'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD English CTeTex

Language: [English](/en/index.html) (code: `en`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.14 release.

The following people have contributed to making this treebank part of UD: Naïma Hassert, Pierre André Ménard, Edith Galy.

Repository: [UD_English-CTeTex](https://github.com/UniversalDependencies/UD_English-CTeTex)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uden_ctetex215)<br />
Download all treebanks: [UD 2.15](/#download)

License: CC BY-SA 4.0

Genre: nonfiction

Questions, comments?
General annotation questions (either English-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_English-CTeTex/issues).
If you want to collaborate, please contact [pamenard&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description
UD_English-CTeTex is a technical text corpus annotated in Universal Dependency syntax containing 196 software requirements.



The original sentences of the corpus are taken mainly from the [PURE corpus](https://ieeexplore.ieee.org/document/8049173) of software requirement specifications (SRS), as well as other SRS documents available publicly on the web.


## Splitting
The whole corpus contains 9,273 tokens in 276 sentences for 196 software requirements. Many individual software requirements were selected from the same SRS document.

As it is below the threshold of 20k tokens, it was not split for train/dev/test.


The document id used in the files are related to the original file name in the PURE corpus suffixed with the document section, followed optionally with the requirement ID when the section lists multiple requirements.
For example "001_npac_6.4.3_R6-30.1" if taken from document 001_npac.pdf in the original corpus, and the requirement is in section 6.4.3. In this section, the requirement is identified as 6-30.1 in a table.

## Specificities

While it's not defined in the UD guidelines, we added a "LineAfter=Yes" feature in the MISC column to indicate when a line skip was found in the original text, in order to be able to recreate it. This is due to a particularity of some technical texts (and often in SRS documents) when a long sentence (often with an enumeration of items) is being split on multiple lines, with fragments still referring to the starting partial sentence.

Still, this does not make it possible to reproduce the original text in its entirety. For example, in document id 2001_npac_6.8_RR6-44, the sentence parts starting with a dash were represented as indented sub-lists of the main list items. Other requirements have a similar case (2000_nasax38_3.3.7, 2007_ertms_3.9.1.1, etc) with some variations.

## Acknowledgments
We would like to thank the Natural Sciences and Engineering Research Council of Canada for the grant on the IVVES project that made this dataset possible.

## References

**(Hassert & al. 2021)** Naïma Hassert, Pierre André Ménard, Edith Galy. (2021) [UD on Software Requirements: Application and Challenges](https://aclanthology.org/2021.udw-1.5/). Proc. of Fifth Workshop on Universal Dependencies, Sofia, Bulgaria.

```
@inproceedings{hassert-etal-2021-ud,
title = "{UD} on Software Requirements: Application and Challenges",
author = {Hassert, Na{\"\i}ma and
M{\'e}nard, Pierre Andr{\'e} and
Galy, Edith},
editor = "de Lhoneux, Miryam and
Tsarfaty, Reut",
booktitle = "Proceedings of the Fifth Workshop on Universal Dependencies (UDW, SyntaxFest 2021)",
month = dec,
year = "2021",
address = "Sofia, Bulgaria",
publisher = "Association for Computational Linguistics",
url = "https://aclanthology.org/2021.udw-1.5",
pages = "62--74",
}
```


## Acknowledgments

# Statistics of UD English CTeTex

## POS Tags

[ADJ](en_ctetex-pos-ADJ.html) – [ADP](en_ctetex-pos-ADP.html) – [ADV](en_ctetex-pos-ADV.html) – [AUX](en_ctetex-pos-AUX.html) – [CCONJ](en_ctetex-pos-CCONJ.html) – [DET](en_ctetex-pos-DET.html) – [INTJ](en_ctetex-pos-INTJ.html) – [NOUN](en_ctetex-pos-NOUN.html) – [NUM](en_ctetex-pos-NUM.html) – [PART](en_ctetex-pos-PART.html) – [PRON](en_ctetex-pos-PRON.html) – [PROPN](en_ctetex-pos-PROPN.html) – [PUNCT](en_ctetex-pos-PUNCT.html) – [SCONJ](en_ctetex-pos-SCONJ.html) – [SYM](en_ctetex-pos-SYM.html) – [VERB](en_ctetex-pos-VERB.html) – [X](en_ctetex-pos-X.html)

## Features



## Relations

[acl](en_ctetex-dep-acl.html) – [acl:relcl](en_ctetex-dep-acl-relcl.html) – [advcl](en_ctetex-dep-advcl.html) – [advmod](en_ctetex-dep-advmod.html) – [amod](en_ctetex-dep-amod.html) – [appos](en_ctetex-dep-appos.html) – [aux](en_ctetex-dep-aux.html) – [aux:pass](en_ctetex-dep-aux-pass.html) – [case](en_ctetex-dep-case.html) – [cc](en_ctetex-dep-cc.html) – [ccomp](en_ctetex-dep-ccomp.html) – [compound](en_ctetex-dep-compound.html) – [conj](en_ctetex-dep-conj.html) – [cop](en_ctetex-dep-cop.html) – [csubj](en_ctetex-dep-csubj.html) – [csubj:pass](en_ctetex-dep-csubj-pass.html) – [dep](en_ctetex-dep-dep.html) – [det](en_ctetex-dep-det.html) – [expl](en_ctetex-dep-expl.html) – [fixed](en_ctetex-dep-fixed.html) – [flat](en_ctetex-dep-flat.html) – [goeswith](en_ctetex-dep-goeswith.html) – [iobj](en_ctetex-dep-iobj.html) – [list](en_ctetex-dep-list.html) – [mark](en_ctetex-dep-mark.html) – [nmod](en_ctetex-dep-nmod.html) – [nsubj](en_ctetex-dep-nsubj.html) – [nsubj:outer](en_ctetex-dep-nsubj-outer.html) – [nsubj:pass](en_ctetex-dep-nsubj-pass.html) – [nummod](en_ctetex-dep-nummod.html) – [obj](en_ctetex-dep-obj.html) – [obl](en_ctetex-dep-obl.html) – [obl:agent](en_ctetex-dep-obl-agent.html) – [parataxis](en_ctetex-dep-parataxis.html) – [punct](en_ctetex-dep-punct.html) – [reparandum](en_ctetex-dep-reparandum.html) – [root](en_ctetex-dep-root.html) – [xcomp](en_ctetex-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 276 sentences and 9273 tokens.</li>
</ul>

<ul>
<li>This corpus contains 1560 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 36 types of words that contain both letters and punctuation. Examples: e.g., ASPERA-3, AC-130U, npa-nxx, MC-130H, ’s, 's, ALQ-172, Fig., i.e., Co-I’s, M&C, max., npa-nxx-x, on-going, .spec, 9A-2, Co-I, FD/L, FL-Lower, FL-Upper, GSM-R, Hz., I/O, MIL-STD-464, NPA-NXX-xxxx, NaN’s, R/O, SV-423.3, SV-515, User's, airport.xml, el., http://www.whitehouse.gov/omb/egov/a-2-EAModelsNEW2.html, inf’s, www.cdc.gov/phin</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 6 word types tagged as particles (PART): 's, not, ot, to, ’, ’s</li>
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
      <li>VERB--NOUN (198)</li>
      <li>VERB--PRON (28)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (318)</li>
      <li>VERB--NOUN-ADP(_) (4)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_) (1)</li>
      <li>VERB--PRON (10)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--NOUN-ADP(_) (18)</li>
      <li>VERB--PRON-ADP(_) (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>orphan</a></li>
</ul>
