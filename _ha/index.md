---
layout: base
title:  'Hausa UD'
udver: '2'
---

# UD for Hausa <span class="flagspan"><img class="flag" src="../../flags/svg/NG.svg" /></span>

The Hausa language is represented by two treebanks: Northern Autogramm, for the Ader dialect of Niger Republic (Northern Hausa), and Southern Autogramm, for the Zaria dialect of Nigeria (Southern Hausa). Both are different from the Kano variety, generally accepted as Standard Hausa. The Ader (Northern) Hausa, together with the Sokoto variety, is a more archaic version of Standard Hausa, where some phonological rules have not applied. The Zaria (Southern) Hausa, on the other hand, is a "modern" version of the language where the 3-way opposition (masculine / feminine / plural) has been abandoned in the noun system, and only the plurality feature is maintained, while the feminine gender is kept in the pronominal and TAM system. 

In Hausa, the TAM system is marked by pre-verbal Auxiliaries that combine `Tense`, `Aspect`, `Mood`, and subject agreement in `Person`, `Number` and `Gender`. These Auxiliaries can vary noticeably from one dialect to another. For example, the backgrounded progressive aspect in marked by /__kà__/ in Ader and /__kèː__/ in Zaria, while the same /__kà__/ marks the backgrounded perfect in Zaria.

Due to the difficulty of selecting a single lemma to account for these dialectal variation, we have chosen to postpone the lemmatisation of auxiliaries until a solution is found to organise related treebanks of a same language. 



## Tokenization and Word Segmentation

* The Southern Hausa treebank is an extension of an oral corpus (https://cortypo.huma-num.fr/index.html) interlinearized and glossed on a morphological basis.
* Tokenization had to take into account the fact that syntactic information in Zaar can be spread in different ways in words, affixes and clitics. It has been decided to keep as tokens only words (with and without affixes) and clitics while the syntactic information contained in affixes is annotated by morphological features of the affixed words. Clitics are PRON conveying syntactic functions such as complement and modifier. They are preceded by an “=” sign in the transcription. The same conventions have been used for the Northern Hausa treebank, which transcribes audio recordings done in the late 80’s. 
* As we are dealing with oral data, we have chosen the illocutionary unit as the basic transcription unit. Punctuation tokens (e.g. <, >, //, etc.) organise the illocutionary unit into: pre-nucleus < nucleus > post-nucleus //


## Morphology

This is an overview only. For more detailed discussion and examples, see the list of  Hausa POS tags and Hausa features. 

### Tags

* The language specific tagset is the original annotation made from the extended version of the Leipzig Glossing Rules. (Available [here](https://corpafroas.huma-num.fr/glosses.html)).
* The UD tagset is based on a conversion from the previous annotation to UPOS.
* Zaar uses 16 of the universal tags (with the exception of SYM, which is not relevant for oral data)
  * As in other African languages (e.g. Wolof, Zaar), the verbal inflections in Hausa are gathered in a single `AUX` that precedes the `VERB`, and expresses various combinations of `Tense` (2 values: Future and Predictive), `Aspect` (4 values : Progressive, Perfect, Aorist and Iterative) and `Polarity` (Negative). 


### Features

* 2 language specific values associated with the Zaar `AUX` have been added to the scheme: 
  * 1 for `Tense` (`Pred` = Predictive Future),
  * 1 for `Aspect` feature (`Aor` = Aorist)


## Syntax

* The dependency analysis is a conversion of the manual annotation to SUD format. For more information, see [SUD guidelines](https://surfacesyntacticud.github.io/guidelines/u/).
* Hausa is a SVO language. 
* Hausa is a prodrop language with a strong proportion of dislocated subjects and complements. In addition to a possible independent lexical or pronominal subject (tagged `nsubj`), the `AUX` contains agreement features for `Person` and `Number`.
* We have direct object with `obj`, indirect object with `iobj`.

## Treebanks

There are [2](../treebanks/ha-comparison.html) Hausa UD treebanks:

  * [Hausa-SouthernAutogramm](../treebanks/ha_a/index.html)
  * [Hausa-SouthernAutogramm](../treebanks/ha_b/index.html)
