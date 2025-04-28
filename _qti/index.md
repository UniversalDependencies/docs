---
layout: base
title:  'Turkish English UD'
udver: '2'
---

# UD for Turkish-English <span class="flagspan"><img class="flag" src="../../flags/svg/TR.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace, with some language-mixing exceptions such as mixed words with Turkish morphology on English stems (e.g., "drop-bylayacağım", "Soggyleşmiş").
* English phrasal verbs may be written as a single token when integrated with Turkish morphology (e.g., "turn-offluyor", "drop-bylayacağım").
* English multi-word expressions like "on the same page" are tokenized as separate words when appearing in code-switched contexts.
* Abbreviations and acronyms (like "KK" for "Kuzey Kampüs" - North Campus) are treated as single tokens.
* Morphological integration points are annotated in the MISC column with `CSID=MIXED` and `CSPoint=` attributes (e.g., "turn-off§luyor").

---

## Morphology

### Tags

* Participles are assigned the ADJ tag when used as modifiers (both Turkish and English).
* English verbs in light verb constructions with Turkish verbs like "etmek" (to do/make) and "olmak" (to be/become) are tagged as NOUN (e.g., "navigate etmek", "tempt eyle").
* English nouns ("distinction", "clothing") retain their NOUN tag when integrated into Turkish syntax.
* English particles in phrasal verbs are annotated as part of the verb when morphologically integrated (e.g., "drop-by" in "drop-bylayacağım").
* The DET-PRON distinction follows the same principles as monolingually annotated treebanks, with English determiners like "my", "a", "the" tagged as DET and English pronouns like "I", "it", "you" tagged as PRON.
* Discourse markers from both languages (e.g., English "Guys", Turkish "yani") are tagged according to their original part of speech but connected with the discourse relation.

### Features

* Nouns have inherent [Number](/u/feat/Number.html) features, with English nouns maintaining singular/plural distinctions and receiving Turkish case marking (e.g., "machinelerden" with plural and ablative case).
* English verbs with Turkish morphology have the full range of Turkish verbal features including [Aspect](/u/feat/Aspect.html), [Mood](/u/feat/Mood.html), [Number](/u/feat/Number.html), [Person](/u/feat/Person.html), and [Tense](/u/feat/Tense.html).
* English verbs typically receive Turkish morphological markers, showing a [Lang](/u/feat/Misc.html) feature in the MISC column (e.g., "Lang=en" for English words, "Lang=tr" for Turkish words).
* The morphological integration follows Turkish agglutinative patterns, with English roots receiving Turkish suffixes according to Turkish morphotactic rules (e.g., "aspectlere" with dative case).
* Mixed verbs may have complex feature combinations reflecting their hybrid nature, particularly in tense and aspect marking (e.g., "drop-bylayacağım" has Aspect=Perf|Number=Sing|Person=1|Polarity=Pos|Tense=Fut).
* Possession is marked on both Turkish and mixed nouns (e.g., "itemıyla" with instrumental case and singular possession).
* Code-switching points within words are annotated with CSID=MIXED and CSPoint features to indicate morpheme boundaries.
* Loan translation patterns are marked with LoanTrans in the MISC column (e.g., "toplantı alabiliriz" marked as LoanTrans=en:get_a_meeting).

---

## Syntax

* Turkish-English UD is based primarily on universal dependency guidelines, while considering Turkish syntactic structures as the base for mixed constructions.
* The main predicate of a clause is the head of the clause, regardless of its language of origin.
* In mixed verb phrases with light verb constructions like "navigate etmek" (to navigate), "bill etmek" (to bill), the English element is treated as a compound and the Turkish light verb is the head.
* English phrasal verbs with Turkish morphology (like "drop-bylayacağım") are treated as single verbal units with the entire construction serving as the predicate.
* Mixed sentences may maintain separate clausal structures in each language connected by parataxis (e.g., "Bir şey diyeceğim bence he doesn't deserve this").
* Discourse connectors from both languages (e.g., "bence", "yani") are attached with the discourse relation.

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj](/u/dep/nsubj)) - Typically in nominative case with no overt marking; can be from either language (e.g., "he" in "he doesn't deserve this")
* Direct object ([obj](/u/dep/obj)) - Usually marked with accusative case for definite objects (e.g., "Bunu yapmak"), but can be unmarked for indefinite ones; English objects in Turkish matrix clauses follow Turkish case marking
* Oblique modifiers ([obl](/u/dep/obl)) - Other case-marked nominal phrases; Turkish case markers are applied to English nouns (e.g., "metroyla" with instrumental case)
* Adjuncts - Include adverbial modifiers ([advmod](/u/dep/advmod)) and other non-core elements from both languages (e.g., "perfectly" in "perfectly fine")

### Non-verbal Clauses

* English-origin copular constructions are analyzed with the Turkish copular pattern
* In predicative constructions, the predicate is the head and the copula is attached as a [cop](/u/dep/cop) dependency
* Negative copular constructions use the Turkish "değil" (e.g., "acceptable değil")
* Question particles like "mi" are attached as auxiliaries to the predicate

### Relations Overview

* Basic dependencies follow the standard Universal Dependencies scheme
* Fixed expressions in either language (e.g., "of course") use the [fixed](/u/dep/fixed) relation internally

---

## Treebanks

There is [1](../treebanks/qti-comparison.html) Turkish English UD treebank:

* [Turkish English-BUTR](../treebanks/qti_butr)
