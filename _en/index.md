---
layout: base
title:  'English UD'
udver: '2'
---

# UD for English <span class="flagspan"><img class="flag" src="../../flags/svg/GB.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/US.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/CA.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/AU.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/NZ.svg" /></span>

UD English contains data from multiple treebanks created by different teams at different times and with often different conversion tools (from gold constituent treebanks, such as the English Web Treebank for English-EWT, or from different gold dependency treeebanks, such as English-GUM). As a result, differences may sometimes be found across treebanks, though an effort is made to harmonize them when issues are identified.

## Tokenization and Word Segmentation

Words are generally delimited by whitespace or punctuation. No tokens in any of the UD English corpora currently contain whitespace. Most corpora do not use multiword tokens, since clitics in English can usually be expressed using `SpaceAfter=No` (for forms like "don't" = "do" + "n't"). The `SpaceAfter` annotation also allows the distinction between otherwise identical token sequences, such as "can not" versus "cannot". An exception regarding complex unit is Eng-ParTUT, which does use multiword tokens.

Units that are generally tokenized apart include:

  * Clitic auxiliaries ('ll, 'm, 's, 've ...)
  * Possessive genitive markers ('s, ')
  * Clitic negation (n't, but also not in cannot)

Units that are not tokenized apart include:

  * Acronyms (FBI, U.S.)
  * Abbreviations without spaces (e.g., i.e.)
  * Hyphenated words, which are treated as tokens and not as compounds (part-time, [a] follow-up)

## Morphology

### Tags

All corpora use the full range of UPOS tags. The XPOS column uses the Penn Treebank tagset. Note that XPOS does not have a simple mapping to UPOS tags, as UD guidelines enforce complex relations between dependency relations and POS tags: for example, since the relation `advmod` must generally have the tag `ADV`, UPOS may have `ADV` for some non-adverbial XPOS tags, and vice versa.

Closed class auxiliaries include:
  * AUX - the lemmas 'be', 'have', 'do', 'will', 'would', 'may', 'might', 'can', 'could', 'shall', 'should', 'must', 'get' when used as auxiliaries labeled `aux` or `aux:pass`
  * COP - the lemma 'be'

### Features

All treebanks currently contain whitespace information, except for English-ESL. Morphological features are included in all corpora except English-ESL. In some corpora these are added automatically using CoreNLP (EWT, GUM) and in some cases supplemented using information from other annotation layers (e.g. GUM).

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

[https://universaldependencies.org/treebanks/en-comparison.html]()




