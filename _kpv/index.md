---
layout: base
title:  'Komi-Zyrian UD'
udver: '2'
---

# UD for Komi-Zyrian <span class="flagspan"><img class="flag" src="../../flags/svg/RU-KO.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Compounds in Komi-Zyrian are usually written separated, and in these cases the relation ([compound]()) is used to connect the tokens.
* According to typographical rules, many punctuation marks are attached to a neighboring word. At the moment hyphenated compounds such as партийно-комсомольскӧй “pertaining to the komsomol of the party” or сідз-тадз “so-so” are analysed as individual tokens, as are abbreviations such as с.в., “etc. (сідз водзлань “onward like this”)”.
* A whitespace separating digits in a large number is not treated as a word separator. For example, 1 000 000 (“1,000,000” by English rules) is one token.

## Morphology

### Tags

* Komi-Zyrian uses all 17 universal POS categories. Some of the particles should probably be tagged as adverbs, but the exact analysis is still being worked out.
* There are two copulas лоны and вӧвны, both meaning “to be”. Besides these there are also frequentative forms such as вӧвлыны and лолыны.
* Verbs with modal meaning are not considered auxiliary in Komi-Zyrian.


### Features

#### Nominal features

* Case has 17 possible values: Nom, Gen, Acc, Abl, Dat, Ins, Com, Car, Cau, Ine, Ill, Ela, Tra, Prl, Ter, Apr, Egr. They occur with following word POS: NOUN, PROPN, PRON, ADJ and ADP.

* Besides nouns the cases are widely used with adpositions and adverbs, which are also tagged separately for case. 

#### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of two possible values: `Pos` and `Cmp`. The superlative is formed with adverb медся 'most'. In Komi-Zyrian the comparative suffix -джык can also connect to untypical parts of speech, i.e. to verbs, but such behaviour is not yet attested in the current treebanks.


## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.

* Objects are either in nominative or accusative case. Komi-Zyrian encodes focus and topic into different accusative forms, but these distinctions are currently not being directly annotated, but can be still distinguished from different forms that correspond to possessive forms that are marked in feats-column.

## Relations

* The following subtypes are used in Komi-Zyrian:
  * [aux:neg]() for the negative auxiliary verb
  * [flat:name]() for names consisting of multiple parts
* The following relation types are not used in Komi-Zyrian:
  * [clf](), [expl]()

## Treebanks

There are two Komi-Zyrian UD treebanks:

- Komi-Zyrian Lattice
- Komi-Zyrian IKDP


  * [Komi_Zyrian-Lattice](../treebanks/kpv_lattice/index.html)
  * [Komi_Zyrian-IKDP](../treebanks/kpv_ikdp/index.html)
