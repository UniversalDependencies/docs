---
layout: base
title:  'UD_Japanese-BCCWJ'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Japanese BCCWJ

Language: [Japanese](/ja/index.html) (code: `ja`)<br/>
Family: Japanese

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Mai Omura, Masayuki Asahara, Yusuke Miyao, Takaaki Tanaka, Hiroshi Kanayama, Yuji Matsumoto, Shinsuke Mori, Sumire Uematsu, Yugo Murawaki.

Repository: [UD_Japanese-BCCWJ](https://github.com/UniversalDependencies/UD_Japanese-BCCWJ)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udja_bccwj26)<br />
Download all treebanks: [UD 2.6](/#download)

License: CC BY-NC-SA 4.0 International. The underlying text is not included; the user must obtain it separately and then merge with the UD annotation using a script distributed with UD

Genre: news, nonfiction, fiction, blog, web

Questions, comments?
General annotation questions (either Japanese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Japanese-BCCWJ/issues).
If you want to collaborate, please contact [masayu-a&nbsp;(æt)&nbsp;ninjal&nbsp;•&nbsp;ac&nbsp;•&nbsp;jp].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
| Features | not available |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

This Universal Dependencies (UD) Japanese treebank is based on the definition of
UD Japanese convention described in the UD documentation.
The original sentences are from `Balanced Corpus of Contemporary Written Japanese'(BCCWJ).



The Japanese UD treebank contains the sentences from BCCWJ [1]
http://pj.ninjal.ac.jp/corpus_center/bccwj/en/
with BCCWJ-DepPara[2] annotation.

The word units is based on Short Unit Word in BCCWJ [1].
We prepared conversion rules from BCCWJ-DepPara to UD_Japanese v2.1 guidelines [3][4].

## Recovering data

The data is provided in the CoNLL format, but original texts are
stripped off due to the license issue.

The corpus is obtained by running the following command:

```
./merge/merge.sh -c BCCWJ_CORE_FILE
```

where `BCCWJ_CORE_FILE` denotes the file of BCCWJ core file (core_SUW.txt)
the script requires Python (2.x)

or

The BCCWJ DVD edition purchaser can download the data with the original text
from https://bccwj-data.ninjal.ac.jp/mdl/

## Spliting

Each data set contains UD annotations for the following parts in BCCWJ

training: annotation B, C, D, E subsets
development: annotation A subset
test: annotation A subset

See also https://github.com/masayu-a/BCCWJ-ANNOTATION-ORDER

## Citation

You are encouraged to cite the following paper when you refer to the
Universal Dependencies Japanese Treebank.

Asahara, M., Kanayama, H., Tanaka, T., Miyao, Y., Uematsu, S., Mori, S.,
Matsumoto, Y., Omura, M., & Murawaki, Y. (2018).
Universal Dependencies Version 2 for Japanese.
In LREC-2018.

## Acknowledgments

The original treebank was provided by:

- National Instutite for Japanese Language and Linguistics, Japan

The corpus was converted by:

- Mai Omura
- Masayuki Asahara

through discussion and validation with

- Hiroshi Kanayama
- Yusuke Miyao
- Takaaki Tanaka
- Yuji Matsumoto
- Shinsuke Mori
- Sumire Uematsu
- Yugo Murawaki

This work was supported by JSPS KAKENHI Grants Numbers JP17H00917
and is a project of the Center for Corpus Development, NINJAL.


# Statistics of UD Japanese BCCWJ

## POS Tags

[ADJ](ja_bccwj-pos-ADJ.html) – [ADP](ja_bccwj-pos-ADP.html) – [ADV](ja_bccwj-pos-ADV.html) – [AUX](ja_bccwj-pos-AUX.html) – [CCONJ](ja_bccwj-pos-CCONJ.html) – [DET](ja_bccwj-pos-DET.html) – [INTJ](ja_bccwj-pos-INTJ.html) – [NOUN](ja_bccwj-pos-NOUN.html) – [NUM](ja_bccwj-pos-NUM.html) – [PART](ja_bccwj-pos-PART.html) – [PRON](ja_bccwj-pos-PRON.html) – [PROPN](ja_bccwj-pos-PROPN.html) – [PUNCT](ja_bccwj-pos-PUNCT.html) – [SCONJ](ja_bccwj-pos-SCONJ.html) – [SYM](ja_bccwj-pos-SYM.html) – [VERB](ja_bccwj-pos-VERB.html) – [X](ja_bccwj-pos-X.html)

## Features

[Foreign](ja_bccwj-feat-Foreign.html) – [Polarity](ja_bccwj-feat-Polarity.html)

## Relations

[acl](ja_bccwj-dep-acl.html) – [advcl](ja_bccwj-dep-advcl.html) – [advmod](ja_bccwj-dep-advmod.html) – [amod](ja_bccwj-dep-amod.html) – [aux](ja_bccwj-dep-aux.html) – [case](ja_bccwj-dep-case.html) – [cc](ja_bccwj-dep-cc.html) – [compound](ja_bccwj-dep-compound.html) – [cop](ja_bccwj-dep-cop.html) – [dep](ja_bccwj-dep-dep.html) – [det](ja_bccwj-dep-det.html) – [discourse](ja_bccwj-dep-discourse.html) – [dislocated](ja_bccwj-dep-dislocated.html) – [iobj](ja_bccwj-dep-iobj.html) – [mark](ja_bccwj-dep-mark.html) – [nmod](ja_bccwj-dep-nmod.html) – [nsubj](ja_bccwj-dep-nsubj.html) – [nummod](ja_bccwj-dep-nummod.html) – [obj](ja_bccwj-dep-obj.html) – [obl](ja_bccwj-dep-obl.html) – [punct](ja_bccwj-dep-punct.html) – [reparandum](ja_bccwj-dep-reparandum.html) – [root](ja_bccwj-dep-root.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 57109 sentences and 1273287 tokens.</li>
</ul>

<ul>
<li>This corpus contains 1266616 tokens (99%) that are not followed by a space.</li>
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
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): _</li>
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



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: _</li>
      <li>AUX: _</li>
      <li>NOUN: _</li>
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
          <li>X: _</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (10)</li>
      <li>VERB--NOUN-ADP(_) (25480)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_) (4075)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_)-ADP(_) (81)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_)-ADP(_)-ADP(_) (16)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_)-ADP(_)-ADP(_)-ADP(_) (10)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_)-ADP(_)-ADP(_)-ADP(_)-ADP(_) (3)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_)-ADP(_)-ADP(_)-ADP(_)-ADP(_)-ADP(_) (2)</li>
      <li>VERB--PRON-ADP(_) (1489)</li>
      <li>VERB--PRON-ADP(_)-ADP(_) (274)</li>
      <li>VERB--PRON-ADP(_)-ADP(_)-ADP(_) (10)</li>
      <li>VERB--PRON-ADP(_)-ADP(_)-ADP(_)-ADP(_) (1)</li>
      <li>VERB--PRON-ADP(_)-ADP(_)-ADP(_)-ADP(_)-ADP(_) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-ADP(_) (26234)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_) (445)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_)-ADP(_) (29)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_)-ADP(_)-ADP(_) (9)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_)-ADP(_)-ADP(_)-ADP(_) (1)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_)-ADP(_)-ADP(_)-ADP(_)-ADP(_) (2)</li>
      <li>VERB--PRON-ADP(_) (590)</li>
      <li>VERB--PRON-ADP(_)-ADP(_) (39)</li>
      <li>VERB--PRON-ADP(_)-ADP(_)-ADP(_) (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (861)</li>
      <li>VERB--NOUN-ADP(_) (9279)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_) (408)</li>
      <li>VERB--NOUN-ADP(_)-ADP(_)-ADP(_) (10)</li>
      <li>VERB--PRON (84)</li>
      <li>VERB--PRON-ADP(_) (602)</li>
      <li>VERB--PRON-ADP(_)-ADP(_) (74)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus does not use relation subtypes.</li>
<li>The following 14 relation types are not used in this corpus at all: <a>csubj</a>, <a>ccomp</a>, <a>xcomp</a>, <a>vocative</a>, <a>expl</a>, <a>appos</a>, <a>clf</a>, <a>conj</a>, <a>fixed</a>, <a>flat</a>, <a>list</a>, <a>parataxis</a>, <a>orphan</a>, <a>goeswith</a></li>
</ul>
