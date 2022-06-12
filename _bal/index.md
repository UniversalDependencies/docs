---
layout: base
title:  'Balochi UD'
udver: '2'
---

# UD for Balochi <span class="flagspan"><img class="flag" src="../../flags/svg/PK.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/IR.svg" /></span>

## Tokenization and Word Segmentation

* Punctuation is written adjacent to a neighboring word like in English and many other languages.
  In the annotation, punctuation symbols are separate tokens; that is, words are delimited by spaces or punctuation.

## Morphology

Some morphemes that are treated as bound morphemes in the literature are in fact written as separate words in Balochi.
For example, the conjugation suffixes of Balochi verbs come out as auxiliaries that follow the main verb. Example:

<table>
<!-- I got these examples from Zahoor by e-mail (2022-06-07), except for 1-Plur-Pres, which I constructed following Iranian Languages p. 660. -->
<tr><td>کندگ</td><td><i>kandag</i></td><td>to laugh / laughing</td><td><tt>VerbForm=Inf</tt></td></tr>
<tr><td>من کندگا آں</td><td><i>man kandagā āñ</i></td><td>I am laughing</td><td>The auxiliary is <tt>Number=Sing|Person=1</tt>. The main verb should probably be some non-finite form, maybe a participle.</td></tr>
<tr><td>تو کندگا ئے</td><td><i>tō kandagā ay</i></td><td>you (<tt>Sing</tt>) are laughing</td><td></td></tr>
<tr><td>آ کندگا اِنت</td><td><i>ā kandagā int</i></td><td>he is laughing</td><td></td></tr>
<tr><td>ما کندگا اِن</td><td><i>mā kandagā in</i></td><td>we are laughing</td><td></td></tr>
<tr><td>شُما کندگا اِت</td><td><i>šumā kandagā it</i></td><td>you (<tt>Plur</tt>) are laughing</td><td></td></tr>
<tr><td>آ کندگا اَنت</td><td><i>ā kandagā ant</i></td><td>he is laughing</td><td></td></tr>
<tr><td>تو کند اِت</td><td><i>tō kand it</i></td><td>you (<tt>Sing</tt>) laughed</td><td></td></tr>
<tr><td>تو کند اِتگ</td><td><i>tō kand itag</i></td><td>you (<tt>Sing</tt>) have laughed</td><td></td></tr>
</table>

### Tags

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

There are [N](../treebanks/bal-comparison.html) Balochi UD treebanks:

  * [Balochi-A](../treebanks/bal_a/index.html)
  * [Balochi-B](../treebanks/bal_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
