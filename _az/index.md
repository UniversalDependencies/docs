---
layout: base
title:  'Azerbaijani UD'
udver: '2'
---

# UD for Azerbaijani 

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* Punctuation marks tokenized as separate tokens (words).
  * Hyphenated fixed and compounds are kept as three tokens: _tez-tez, sil-süpür._

---

## Morphology

### Tags
* Azerbaijani uses 14 universal POS categories, including:
* `ADJ`  _yaxçı, böyük, ect._
* `ADP`  _qədər, için, -ki, etc._
* `ADV`  _daha, də, fәqәt, etc._
* `AUX`  _i, dəyil, etc._
* `CCONJ`  _amma, və, ya, etc._
* `DET`  _o, bir, bu, etc._
* `INTJ`  _Pəs._
* `NOUN`  _pәncәrә, maşɪn, etc._
* `NUM`  _bir, neçә, beş, etc._
* `PRON`  _o, mən, etc._
* `PROPN`  _Deniz, Sam, etc._
* `PUNCT`  _-, ?, ., etc._
* `SCONJ`  _ki, əyər, etc._
* `VERB`  _getdi, fikr eliyәm, yudurtdu, yazdığını, etc._

### Features
* Azerbaijani nouns are typically suffixed. However, a small number of prefixes are borrowed mostly from Persian. 
* Azerbaijani, like all other Turkic languages, is devoid of grammatical gender. But there are ways to express gender lexically, if required.
* In Number marking of nouns, there are two values: Singular and Plural; Singular forms are unmarked.
* There are seven Cases in Azerbaijani: _NOM, GEN, DAT, ACC, COM/INS, LOC, ABL_. The _NOM_ case does not take a suffix.
* Yes-no questions can be constructed in two ways: (i) by using interrogative intonation contour, and (ii) by adding the interrogative particle _aya_.

### Inflectional Structure Representation

* Noun + (Plural marker) + (Possessive pronoun) + (Case marker)
* Adjective + (Comparative/Superlative degree marker)
* Verb stem + (Reciprocal marker) + (Causative marker) + (Voice marker) + (Reflexive marker) + (Negation 
marker) + (Mood marker) + {(Imperfective Aspect marker) + (Perfective Aspect marker)} + 
(Tense marker) + Person and Number marker.

---

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject `nsubj` is a noun phrase in the nominative case, without adposition.
  * A subordinate clause may serve as the subject and is labeled `csubj`.
* Object `obj` is a noun phrase without adposition and typically in the accusative case.
* Oblique `obl` is a non-core nominal (noun, pronoun, noun phrase) argument or adjunct.
    
### Relations Overview
* The following relation subtypes are used in Azerbaijani:
  * `compound:redup` for reduplicated compounds
  * `csubj:outer` for outer clause clausal subject
  * `nsubj:outer` outer clause nominal subject
  * `advmod:emph` for emphasizing word, intensifier
  * compound:lvc` for light-verb constructions

* The following relation types are not used in Azerbaijani at all:
 `dep`, `dislocated`, `expl`, `goeswith`, `iobj`, `list`, `reparandum`


---

## Treebanks

There is 1 Azerbaijani UD treebank:

  * [Azerbaijani-TueCL](../treebanks/az_tuecl/index.html)
 

---

