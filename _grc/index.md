---
layout: base
title:  'Ancient Greek UD'
udver: '2'
---

# UD for Ancient Greek <span class="flagspan"><img class="flag" src="../../flags/svg/GR.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words).
* There are neither multi-word tokens nor words with spaces.
* Clitics are already split from their phonological hosts in the original edited texts
* Crasis (i.e., contraction of a vowel/diphthong at the end of a word with a vowel/diphthong at the beginning of the following word) is resolved in the following cases:
  * article + any other word, such as in τοὐναντίον (i.e., τὸ ἐναντίον)
  * pronoun + any other word, such as in ἐγᾧδα (i.e., ἐγὼ οἶδα)
  * καί + any other word, such as in καὑτός (i.e., καὶ αὐτός)
* particles, such as ἄν and τοι, are never split from other words (i.e., ἄν = εἰ + ἄν and τοιγάρ)
* negations are never split from conjunctions (i.e, οὔτε)

## Sentence split

* Sentence split is based on the punctuation found in the original edited text, which has been added/modified by the editor of manuscript(s).
* In the standard editorial practice, four punctuation marks can be found: comma (, encoded as U+002C "COMMA"), period (. encoded as U+002E "FULL STOP"), the point above the line (corresponding in function to the English colon and semicolon; it is encoded as ·, i.e., U+00B7 "MIDDLE DOT"), and interrogation mark (; encoded as U+003B "SEMICOLON").
  All of these are, except the comma, taken to mark the end of a sentence.
  If a sentence is particularly long, the editor of a digital text can sometimes decide to split such a sentence into two or more sentences, regarless of the punctuation of the original text.

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Ancient Greek POS tags](pos/index.html)
and [Ancient Greek features](feat/index.html).

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

There are [N](../treebanks/LCODE-comparison.html) LANGUAGE UD treebanks:

  * [LANGUAGE-A](../treebanks/LCODE_a/index.html)
  * [LANGUAGE-B](../treebanks/LCODE_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
