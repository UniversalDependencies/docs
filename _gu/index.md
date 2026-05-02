---
layout: base
title:  'Gujarati UD'
udver: '2'
---

# UD for Gujarati <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

Gujarati is an Indo-Aryan language originating from the western Indian state of Gujarat. The language is widely spoken
by over 56 million speakers and is one of the 22 languages with official status in India. Yet, the Gujarati
Computational Linguistics community is still in its infancy. Earlier literature classifies Gujarati in the
"Scraping-Bys" category (category 1) in their taxonomy indicating a scant availability of labeled datasets.


## Tokenization and Word Segmentation

Words are generally delimited by whitespace or punctuation in Gujarati.


## Morphology

Gujarati morphology is agglutinative and has a rich system of inflectional and derivational morphology. The language
has a complex system of verb conjugation, noun declension, and postpositions.


### Features

* Morphological features are currently only partially included in the treebank.


## Syntax

Standard dependency relations are used, except for `clf` which is not used in Gujarati.

* Gujarati is a head-final, or left-branching language.
* Adjectives precede nouns, direct objects come before verbs, and there are postpositions.
* The word order of Gujarati is SOV, and there are three genders and two numbers.


## Treebanks

There is 1 Gujarati UD treebank:

  * [GujTB](../treebanks/gu_gujtb/index.html)
