---
layout: base
title:  'Zaar UD'
udver: '2'
---

# UD for Zaar <span class="flagspan"><img class="flag" src="../../flags/svg/NG.svg" /></span>

## Tokenization and Word Segmentation

Since the dependencies presented in the Universal Dependencies framework are based on a lexical approach of syntax, the first step of the processing chain is to decide how to tokenize the language. The idea is, by breaking down the sentence into tokens, to extract the syntactic information related to words in the discourse chain.
 * The Zaar treebank is an extension of an oral corpus (https://cortypo.huma-num.fr/index.html) interlinearized and glossed on a morphological basis. 
 * Tokenization had to take into account the fact that syntactic information in Zaar can be spread in different ways in words, affixes and clitics. It has been decided to keep as tokens only words (with and without affixes) and clitics while the syntactic information contained in affixes is annotated by morphological features of the affixed words. Clitics are PRON conveying syntactic functions such as complement and modifier. 
 * As we are dealing with oral data, we have chosen the illocutionary unit as the basic transcription unit. Punctuation tokens (e.g. <, >, //, etc.) organise the illocutionary unit into: pre-nucleus < nucleus > post-nucleus // 


## Morphology

This is an overview only. For more detailed discussion and examples, see the list of [Zaar POS tags](pos/index.html) and [Zaar features](feat/index.html).

### Tags

 * The language specific tagset is the original annotation made from the extended version of the Leipzig Glossing Rules. (Available at [here](https://corpafroas.huma-num.fr/glosses.html))
 * The UD tagset is based on a conversion from the previous annotation to UPOS.
 * Zaar uses 16 of the universal tags (with the exception of `SYM`, which is not relevant for oral data)
 * As in other African languages (e.g. Hausa, Wolof), the verbal inflections in Zaar are gathered in a single `AUX` that precedes the `VERB`, and expresses various combinations of `Tense` (2 values), `Aspect` (4 values) and `Mood` (4 values). In addition to the TAM auxiliaries, Zaar has 2 copulas.  
 The following auxiliaries are recognized in Zaar:
   * _a_ for `future` (tense)
   * _á_ for `subjunctive` (mood)
   * _áː_ for `perfect` (aspect)
   * _nə_ for the `identifier`/`focus` (copula)
   * _tə̀_ for `jussive` (mood)
   * _taynàː_ for `past` (tense)
   * _yáː_ for `imperfect` (aspect)
   * _yǎː_ for `conditional` (mood)
   * _yi_ for for the `locative`/`predicative` (copula)
   * _yí_ for `irrealis` (mood)
   * _yiː_ for `iterative` (aspect)
   * _yiká_ for `progressive` (aspect)

* These auxiliaries can be combined to produce complex TAM values.

### Features

 * The Zaar treebank uses 34 universal features
 * 10 language specific values have been added to the scheme: 
   * 7 `PartTypes` for the `PART` POS (`Adv` = Adverbial ; `Disc` = Discourse ; `Foc` = Focus; `Illoc` = Illocution; `Neg` = Negation ; `Pred`= Predicative; `Top`= Topic) 
   * 3 `PastTypes` for the `past` tense (`Immediate`, `Recent` and `Remote`)


## Syntax

 * The dependency analysis is a conversion of the manual annotation to SUD format. For more information, see [SUD guidelines](https://guidelines.surfacesyntacticud.org/).
 * Zaar is mostly a SVO language. The only exception is found in the progressive Aspect, where the direct object can precede the nominalized verb (a Vnoun). 
 * Zaar is a prodrop language with a strong proportion of dislocated subjects and complements. In addition to a possible independent lexical or pronominal subject (tagged `nsubj`), the `AUX` contains agreement features for `Person` and `Number`. 
 * We have direct object with `obj`, indirect object with `iobj`.


## Treebanks

There is 1 Zaar UD treebank:

  * [Zaar-Autogramm](../treebanks/say_autogramm/index.html)
