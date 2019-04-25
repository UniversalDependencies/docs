---
layout: base
title:  'Komi-Zyrian UD'
udver: '2'
---

# UD for Komi-Zyrian <span class="flagspan"><img class="flag" src="../../flags/svg/RU-KO.svg" /></span>

## Tokenization and Word Segmentation

*

---
- In general, words are delimited by whitespace characters. Description of exceptions follows.
- According to typographical rules, many punctuation marks are attached to a neighboring word. At the moment hyphenated compounds such as партийно-комсомольскӧй “pertaining to the komsomol of the party” or сідз-тадз “?” are analysed as individual tokens.
- A whitespace separating digits in a large number is not treated as a word separator. For example, 1 000 000 (“1,000,000” by English rules) is one token.
---

## Morphology

### Tags

*

---
- Komi-Zyrian uses all 17 universal POS categories. Some of the particles should probably be tagged as adverbs, but the exact analysis is still being worked out.
- There are two copulas лоны and вӧвны, both meaning “to be”. Besides these there are also frequentative forms such as вӧвлыны.
- Verbs with modal meaning are not considered auxiliary in Komi-Zyrian


### Features

*

---
- Case has 17 possible values: Nom, Gen, Acc, Abl, Dat, Ins, Com, Car, Cau, Ine, Ill, Ela, Tra, Prl, Ter, Apr, Egr. They occur with following word POS: NOUN, PROPN, PRON, ADJ and ADP.

- Cases occur also with adpositions, which are also tagged separately for case features. 

---

## Syntax

*

---

* Subjects have the following characteristics:
  * Word order: 
  * Case marking:
  * Passivisation: 
  * Control: 
  * Relativisation: 
* Objects have the following characteristics:
  * Word order: 
  * Case marking:
  * Passivisation: 
  * Control: 
  * Relativisation: 
* The following subtypes are used in Komi-Zyrian:
  * [aux:neg]() for the negative auxiliary verb
  * [flat:name]() for names consisting of multiple parts

## Treebanks

There are two Komi-Zyrian UD treebanks:

- Komi-Zyrian Lattice
- Komi-Zyrian IKDP
