---
layout: base
title:  'Tamil UD'
udver: '2'
---

# UD for Tamil <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* Following most tokenization patterns, words are delimited by whitespace or punctuation.
* Multiword tokens are relatively common in Tamil. For example, the coordinating clitic _-um_ is analyzed as a separate syntactic word.

## Morphology

### Tags

* Tamil uses 14 universal tags ([SCONJ](), [INTJ](), and [SYM]() do not occur in the corpus at present).
* Auxiliary verbs ([AUX]()) include:
  * உள் / _uḷ_ “within”, படு / _paṭu_ “lye”, வேண்டு / _veṇṭu_ “must”, இரு / _iru_ “be”, வரு / _varu_ “come”, கொள் / _kòḷ_ “take”, இல் / _il_ “in”, செய் / _cèy_ “do”, விடு / _viṭu_ “let”, வா / _vā_ “come”

### Features

* 7 cases are annotated as morphological features of nouns: nominative, genitive, dative, accusative, instrumental, comitative, locative. Tamil is an agglutinating language and other spatiotemporal and/or case-like morphemes may be analyzed as postpositions.
* Verbs occur as finite forms, participles, infinitives, and gerunds.

## Syntax

* Tamil is a verb-final language; both SOV and OSV orders are possible.
* Core arguments are marked by the morphological cases nominative (subject) and accusative (object).
  Core arguments are bare noun phrases without postpositions.

Tamil uses 4 relation subtypes:
* `advmod:emph` for adverbials emphasizing noun phrases
* `compound:prt` to attach verbal particles to verbs
* `nsubj:pass` for nominal subjects in passive clauses
* `obl:arg` for oblique arguments (to distinguish them from other oblique dependents, i.e., adjuncts)

---

## Treebanks

There is only one Tamil UD treebank at present:

  * [Tamil-TTB](../treebanks/ta_ttb/index.html)
