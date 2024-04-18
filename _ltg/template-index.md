---
layout: base
title:  'Latgalian UD'
udver: '2'
---

# UD for Latgalian <span class="flagspan"><img class="flag" src="../../flags/svg/LV-LTG.svg" /></span>

It is important to note that currently UD guidelines for annotating Latgalian is in a very early stage as not much text has been annotated yet.


## Tokenization and Word Segmentation

In general, words are delimited by whitespace characters and punctuation is separated. Description of exceptions follows:
* A whitespace separating digits in a large number is not treated as a word separator. For example, _1 000 000_ ("1,000,000" by English rules) is one token.
* Abbreviations without spaces are treated as single words and may contain punctuation (_utt._ "etc."). In following cases we treat abbreviation as a single token even if whitespace is used between part of abbreviation and punctuation mark: _v.tml_, _N.B._, _P.S._ and _P.P.S._
* Double surnames such as _Vīķe-Freiberga_ and words abbreviated with dashes such as _e-pasts_ "e-mail", _k-dze_ "Ms." are tokenized as a single token.
* In Latgalian ordinal numerals are written with punctuation mark without whitespace like abbreviations (_1._), so we tokenize ordinal numeral together with punctuation mark as one token.
* Multiple dots (_..._ and _.._ ) are considered as one token. Multiple _?!_ are considered one token, _?!..._ is considered to be two tokens (_?!_ and _..._).

Paragraph borders from the original text is indicated by comment line `# newpar` in cases when paragraph borders aligns sentence borders and `MISC` value `NewPar=Yes` for the token following mid-sentence paragraph break. `MISC` value `SpaceAfter=No` is used to note tokens lacking any whitespace after.

## Morphology

### Tags

Latgalian  uses all 17 universal POS categories.
*

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/ltg-comparison.html) Latgalian UD treebanks:

  * [Latgalian-A](../treebanks/ltg_a/index.html)
  * [Latgalian-B](../treebanks/ltg_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
