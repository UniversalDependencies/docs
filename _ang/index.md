---
layout: base
title:  'Old English UD'
udver: '2'
---

# UD for Old English <span class="flagspan"><img class="flag" src="../../flags/svg/GB-ENG.svg" /></span>

## Tokenization and Word Segmentation

Similarly to UD English, words are generally delimited by whitespace or punctuation. No tokens in the UD Old English
corpus contain whitespace or are clitics.


## Morphology

### Tags

The UD Old English corpus does not use the full range of UPOS tags due to its small size.
Tags INTJ, NUM, SCONJ, SYM, and X are not used, but may be included in future releases.

UD Old English AUX-VERB and DET-PRON distinctions mirror those in UD English.

UD Old English does not include any (de)verbal formed tagged as ADJ, ADV, or NOUN.

Similarly to UD English, the XPOS column uses the Penn Treebank tagset.


### Features

Old English contains richer features than English. In addition to the feature space in UD English, UD Old English
provides case (nominative, accusative, genitive, dative, and instrumental) and
gender (masculine, feminine, neutral) information.
The instrumental case is not attested in UD Old English but is possible.

Old English-Cairo contains case, gender, number, person, verb form, mood, tense, degree, and possessive features.


## Syntax

Standard deprels are used. Similarly to UD English, `obl:unmarked` is used for prepositionless oblique nominals.

## Treebanks

There is [1](../treebanks/ang-comparison.html) Old English UD treebanks:

  * [Old English-A](../treebanks/ang_cairo/index.html)

