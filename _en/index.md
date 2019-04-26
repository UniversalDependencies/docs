---
layout: base
title:  'English UD'
udver: '2'
---

# UD for English

UD English contains data from multiple treebanks created by different teams at different times and with often different conversion tools (from gold constituent treebanks, such as the English Web Treebank for English-EWT, or from different gold dependency treeebanks, such as English-GUM). As a result, differences may sometimes be found across treebanks, though an effort is made to harmonize them when issues are identified.

## Tokenization and Word Segmentation

Words are generally delimited by whitespace or punctuation. No tokens in any of the UD English corpora currently contain whitespace. Most corpora do not use multiword tokens, since clitics in English can usually be expressed using `SpaceAfter=No` (for forms like "don't" = "do" + "n't"). An exception is Eng-ParTUT, which uses multiword tokens.

## Morphology

### Tags

All corpora use the full range of UPOS tags. The XPOS column uses the Penn Treebank tagset.

### Features

All treebanks currently contain whitespace information, except for English-ESL. Morphological features are included in all corpora except English-ESL.

## Syntax

Standard deprels are used, except for `clf` which is not used in any treebank. Commonly used custom subtypes include `obl:npmod` for oblique nominals (corresponds to Stanford Dependencies `npadvmod`), `nmod:tmod` and `obl:tmod` for temporal nouns used adverbially (e.g. "today"), based on the Stanford Dependencies label `tmod`. Additionally, passives are distinguished (`nsubj:pass`, `csubj:pass`), possessived (`nmod:poss`), predeterminers (`det:predet` for "both" in "both the children), preconj (`cc:preconj` for "either" in "either X or Y") and a special compound subtype for phrasal verb particles (`compound:prt` for "up" in "pick up").

For more information, see the list of [English relations](dep/index.html).

## Treebanks

There are six English UD treebanks:

  * UD_English-ESL
  * UD_English-EWT
  * UD_English-GUM
  * UD_English-LinES
  * UD_English-PUD
  * UD_English-ParTUT

Comparative statistics for tags in the treebanks are available here:

http://universaldependencies.org/treebanks/en-comparison.html

  


