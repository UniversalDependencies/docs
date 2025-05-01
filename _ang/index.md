---
layout: base
title:  'Old English UD'
udver: '2'
---

# UD for Old English <span class="flagspan"><img class="flag" src="../../flags/svg/GB-ENG.svg" /></span>

Currently, UD Old English is a small effort with one live treebank that consists of the 20 Cairo sentences: 
UD Old English-Cairo.
Since the Cairo sentences are translations of modern sentences, 
the treebank is thus anachronistic and is not representative
of Old English and its dependency and syntax as they were used when they were used.

## Tokenization and Word Segmentation

* Similarly to UD English and other Germanic languages, words are generally delimited by whitespace or punctuation. 
* No tokens in the UD Old English corpus contain whitespace
* No tokens in the UD Old English corpus are clitics.
* Some compounds (e.g. ærend-ƿrit "message-writing" _letter_, neah-ȝebur "near-dweller" _neighbor_)
are considered as single tokens despite a hyphen between them.


## Morphology

### Tags

The UD Old English allows the full inventory of UPOS tags, not all UPOS tags are
attested in the corpus due to its small size. Currently, 5 tags 
are not attested in the treebank.
* Tags `INTJ`, `NUM`, `SCONJ`, `SYM`, and `X` are not currently used, but may be included in future releases.
* UD Old English AUX-VERB and DET-PRON distinctions mirror those in UD English.
* UD Old English does not include any (de)verbal formed tagged as ADJ, ADV, or NOUN.
* Similarly to UD English, the XPOS column uses the Penn Treebank tagset.


### Features

Old English contains richer features than English. In addition to the feature space in UD English, UD Old English
provides case (nominative, accusative, genitive, dative, and instrumental) and
gender (masculine, feminine, neutral) information.

Old English-Cairo contains case, gender, number, person, verb form, mood, tense, degree, and possessive features.

There are some features that are possible in UD Old English but do not appear in it.
* The instrumental case is not attested in UD Old English but is possible.
* Dual number is possible in pronouns, but is not attested in UD Old English.

The complete feature space is as follows:
* `Case`: `Nom`, `Acc`, `Gen`, `Dat`, `Inst`
* `Gender`: `Masc`, `Fem`, `Neut`
* `Number`: `Sing`, `Dual`, `Plur`
* `Person`: `1`, `2`, `3`
* `VerbForm`: `Fin`, `Inf`, `Part`, `Ger`
* `Mood`: `Ind`, `Imp`, `Sub`
* `Tense`: `Pres`, `Past`
* `Degree`: `Pos`, `Comp`, `Sup`
* `Poss`: `Yes`


## Syntax

Standard deprels are used. Similarly to UD English, `obl:unmarked` is used for oblique nominals without prepositions
(e.g. ȝebroht ȝierstan-dæg _brought yesterday_; ȝierstan-dæg is oblique without a preposition).

## Treebanks

There is [1](../treebanks/ang-comparison.html) Old English UD treebanks:

  * [Old English-Cairo](../treebanks/ang_cairo/index.html)

