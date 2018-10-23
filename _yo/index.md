---
layout: base
title:  'Yoruba UD'
udver: '2'
---

# UD for Yorùbá <span class="flagspan"><img class="flag" src="../../flags/svg/NG.svg" /></span>

## Tokenization and Word Segmentation

* Following most tokenization patterns, words are delimited by whitespace. Generally, words are  delimited by whitespace or punctuation except:
  * Hyphenated words that cannot be correctly annotated when split (níhìn-ín) are not split.
  * Multiword tokens are not used in Yorùbá; "what you see is what you tokenize". Contractions are not undone for words that can be correctly assigned a category.

## Morphology

### Tags

* Yorùbá uses 15 universal tags. (SYM and INTJ not present in the corpus at present)
* Some words are difficult to categorize because they are semantically and syntactically redundant; at present they are tagged "X" (e.g. when “kí” follows “jẹ́”, “ó” after “wọn”).
  If they can’t be categorized as Preposition, Adverb or Adjectives, they can be left uncategorized. Most importantly, their presence or absence does not affect a construction.
* The only word tagged as PART is kò; kò is a negation marker.
* Auxiliaries (AUX) are verbal in Yorùbá and grouped into:
  * Copula (jẹ́ - be)
  * kìí - be
  * Temporal (ti – have) usually occurring before the main verb in a given construction.
  * Modal (yóò – shall) also followed by the main verb.
* The tag DET is used for articles and pronominal words used with a determiner function; they can precede or appear after the Noun they quantify. The tag PRON is used for subjects or objects of a noun phrase and to show possession.
  * A word can belong to both categories DET and PRON (àwọn)
  * Gender of a pronoun is only determined by the antecedent (ó – can be he, she or it). It is not explicitly stated.
* Polysemy is an important phenomenon in Yorùbá, to correctly categorize a word, the context where it occurs is the determining factor. Tone can distinguish meaning but a word with the same tone can mean different things in different circumstance (e.g. bí - “procreate”, “if”, “not” ) 

### Features

* Determiners must agree with noun in Number.
* The numeral tag NUM is used for quantity. Number words follow words they quantify.
* Adjectives agree with nouns (in attributive position) and they only have the positive Degree.
* There is no morphological Case; instead, adpositions (ADP) are used as case markers and specify the role of a noun in a phrase.
* Verb forms are past/perfect (ti), continuous (preverbial particle - ń), future (yóò). Verb serialization is prominent in Yorùbá, the first verb marks tense while the second indicates the direction of an action.

## Syntax

* Yorùbá is an SVO language with a Strict word order 

### Subjects

* Nominal subjects are in initial position followed by adjectives, demonstrative and relative clauses.
* Nominal subject (nsubj) is a noun phrase without preposition.
* A finite subordinate clause may serve as the subject and is labeled csubj.

### Objects

* Objects follow the main verb.
* When a verb has two objects, the second one is preceded by a preposition.

* Verb phrases and prepositional phrases are also head initial.

Yoruba uses 2 relation subtypes: 
* `compound:prt` to attach verbal particles to verbs
* `compound:svc` to connect verbs in a serial verb construction

---

## Treebanks

There is only one Yoruba UD treeban at present:

  * [Yoruba-YTB](../treebanks/yo_ytb/index.html)
