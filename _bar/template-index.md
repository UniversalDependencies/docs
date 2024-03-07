---
layout: base
title:  'Bavarian UD'
udver: '2'
---

# UD for Bavarian <span class="flagspan"><img class="flag" src="../../flags/svg/DE-BY.svg" /></span>

We mostly follow the [German guidelines](https://universaldependencies.org/de/) but describe differences to those guidelines here.

## Tokenization and Word Segmentation

We mostly delimit based on whitespace and punctuation. 

### Multi-word tokens

We treat fused prepositions and determiners as multi-word tokens (following the German UD annotation guidelines). Since there is both phonetic and orthographic variation in the forms of the determiners, we do *not* normalize them, and instead simply split the tokens into substrings (even if this occasionally results in slightly awkward tokenizations, see the last example):

* *zum* "to the" -> *zu* (ADP) + *m* (DET)
* *aus'n* "from the" -> *aus* (ADP) + *'n* (DET)
* *im* "in the" -> *i* (ADP) + *m* (DET)

We similarly handle *zum (zun, zan, ...)* when used in infinitive constructions (*Ludwig van Beethoven hod de Gwohnheit ghobt, genau 60 Kafääbaunan zum oozöön [...]* "Ludwig van Beethoven had a habit of counting exactly 60 coffee beans"; sentence via the Wikipedia article [Kafää](https://bar.wikipedia.org/wiki/Kaf%C3%A4%C3%A4)):

* *zum* -> *zu* (PART) + *m* (DET)

### Tokens split with SpaceAfter=No

We split off shortened determiners and adpositions in noun phrases, but use the `SpaceAfter=No` MISC attribute:

* *z'Minga* "in Munich" -> *z'* (ADP) *Minga* (PROPN)
* *d'neie* "the new [one]" -> *d'* (DET) *neie* (ADJ)

In sentences where a verb or conjunction is immediately followed by one or more pronouns, we use `SpaceAfter=No` to split them:

* *gibts* "there is" -> *gibt* (VERB) *s* (PRON)
* *håmas* "we have it" -> *hå* (VERB) *ma* (PRON) *s* (PRON)

We do *not* split off 2nd person morphemes attached to complementizers and instead treat such cases as inflection. E.g., *wennsd kimmsd* "when.2SG come.2SG.PRES" contains two words and *wennsd du kimmsd* "when.2SG you.SG come.2SG.PRES" contains three.

## Morphology

### Tags

We use all tags and follow the German guidelines, with the following exceptions/extensions:

* We tag the relative marker *wo (wos, wej, ...)* as SCONJ.
* We consider *tua (doa, ...)* "do" an AUXiliary when used accordingly.

### Features

We currently do not use features.

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is [one](../treebanks/bar-comparison.html) Bavarian UD treebank:

  * [UD_Bavarian-MaiBaam](../treebanks/bar_maibaam)

