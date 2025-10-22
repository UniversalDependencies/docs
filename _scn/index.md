---
layout: base
title:  'Sicilian UD'
udver: '2'
---

# UD for Sicilian <span class="flagspan"><img class="flag" src="../../flags/svg/IT-SIC.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace or apostrophes.
* Punctuation marks are treated as separate tokens, with some exceptions:
  * Apostrophes indicate elision, and are attached to the neighbouring word that underwent elision. This commonly occurs with determiners: *d'iddu, l'acqua*;
  * Apostrophes indicate apheresis, and are attached to the neighboring word that has undergone apheresis: *'na, 'nvitatu, 'nchianau, 'mmucciari*;
  * Apostrophes indicate apocope, and are attached to the nearby word that has undergone apocope: *cu', va', fa'*;
  * Numerical expressions are treated as single words and may contain punctuation: *'62, 150, 500*.
* Multi-word tokens are used for the following cases:
  * Articulated prepositions composed of a simple preposition and a definite article: *â* (a + la), *dû* (di + lu), *ô* (a + lu), *ntô* (nta + lu);
  * Articulated prepositions composed of a simple preposition and an indefinite article: *ôn* (a + nu);
  * Contraction of two clitic pronouns: *mâ* (mi + la), *mû* (mi + lu), *sû* (si + lu), *tû* (ti + lu);
  * Verbs containing one or more clitic pronouns: *dimmillu* (di + mi + lu), *riniscillu* (rinisci + lu);
  * Verbs containing personal pronouns as enclitic particles: *pinzàvatu* (pinzàva + tu);
  * Some compound forms: *’napocu* ('na + pocu).

---

## Morphology

### Tags
Sicilian uses


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

There are [N](../treebanks/scn-comparison.html) Sicilian UD treebanks:

  * [Sicilian-A](../treebanks/scn_a/index.html)
  * [Sicilian-B](../treebanks/scn_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
