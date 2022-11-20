---
layout: base
title:  'Zaar UD'
udver: '2'
---

# UD for Zaar <span class="flagspan"><img class="flag" src="../../flags/svg/NG.svg" /></span>

## Tokenization and Word Segmentation

Since the dependencies presented in the Universal Dependencies framework are based on a lexical approach of syntax, the first step of the processing chain is to decide how to tokenize the language. The idea is, by breaking down the sentence into tokens, to extract the syntactic information related to words in the discourse chain.
 * The Zaar treebank is an extension of an oral corpus (https://cortypo.huma-num.fr/index.html) interlinearized and glossed on a morphological basis. 
 * Tokenization had to take into account the fact that syntactic information in Zaar can be spread in different ways in words, affixes and clitics. It has been decided to keep as tokens only words (with and without affixes) and clitics while the syntactic information contained in affixes is annotated by morphological features of the affixed words. Clitics are PRON conveying syntactic functions such as complement and modifier. They are preceded by an “=” sign in the transcription. 
 * As we are dealing with oral data, we have chosen the illocutionary unit as the basic transcription unit. Punctuation tokens (e.g. <, >, //, etc.) organise the illocutionary unit into: pre-nucleus < nucleus > post-nucleus // 


## Morphology

This is an overview only. For more detailed discussion and examples, see the list of [Zaar POS tags](pos/index.html) and [Zaar features](feat/index.html).

### Tags

 * The language specific tagset is the original annotation made from the extended version of the Leipzig Glossing Rules. (Available at [here](https://corpafroas.huma-num.fr/glosses.html))
 * The UD tagset is based on a conversion from the previous annotation to UPOS.
 * Zaar uses 16 of the universal tags (with the exception of `SYM`, which is not relevant for oral data)
 * As in other African languages (e.g. Hausa, Wolof), the verbal inflections in Zaar are gathered in a single `AUX` that precedes the `VERB`, and expresses various combinations of `Tense` (4 values), `Aspect` (7 values) and `Mood` (4 values). This relatively small treebank already shows 23 combinations, resulting in 23 different AUX. 
 The following auxiliaries are recognized in Zaar:
   * _àː_ for perfect (aspect)
   * _á_ for aorist (aspect)
   * _àːnáː_ for recent past perfect (tense + aspect)
   * _àːtá_ for remote past perfect (tense + aspect)
   * _àːyi_ for perfect iterative aspect
   * _àːyí_ for immediate past perfect (tense + aspect)
   * _àːyiká_ for perfect progressive aspect
   * _ánáː_ for recent past tense
   * _ánáːyáː_ for recent past imperfect (tense + aspect)
   * _ánáːyi_ for recent past iterative (tense + aspect)
   * _átâ_ for remote past tense
   * _átâyáː_ for remote past imperfect (tense + aspect)
   * _átâyi_ for remote past iterative (tense + aspect)
   * _átáyiká_ for remote past progressive (tense + aspect)
   * _áyǎː_ for immediate past imperfect (tense + aspect)
   * _áyí_ for immediate past tense
   * _á̙yyiká_ for immediate past progressive (tense + aspect)
   * _ʧáː_ imperfect (aspect)
   * _ʧáːnaː_ for concomitant (aspect)
   * _ʧáːyi_ for imperfect iterative (aspect)
   * _ʧáyiká_ for imperfect progressive (aspect)
   * _tə̀_ for subjunctive (mood)
   * _ʧiká_ for progressive (aspect)
   * _ʧínaː_ for recent past irrealis (tense + mood)
   * _ʧíta_ for remote past irrealis (tense + mood)
   * _wò_ for future (tense)
   * _wòyi_ for future iterative (tense + aspect)
   * _wòyiká_ for future continuous (tense + aspect)
   * _yáː_ for conditional (mood)
   * _yí_ for irrealis (mood)
   * _yiː_ for iterative (aspect)


### Features

 * The Zaar treebank uses 34 universal features
 * 8 language specific values associated with the Zaar `AUX` have been added to the scheme: 
   * 3 for the `Tense` feature (`Imm` = Immediate Past ; `Rec` = Recent Past ; `Rem` = Remote Past;), 
   * 3 for the `Aspect` feature (`Aor` = Aorist ; `Conc` = Concomitant ; `ImpIter` = Iterative Imperfect)
   * 2 other `Aspect` features, used independently of the `AUX` upos, were added: 
     * Inchoative (`Aspect=Inch`)
     * Resultative (`Aspect=Res`)


## Syntax

 * The dependency analysis is a conversion of the manual annotation to SUD format. For more information, see [SUD guidelines](https://surfacesyntacticud.github.io/guidelines/u/).
 * Zaar is mostly a SVO language. The only exception is found in the progressive Aspect, where the direct object of precedes the nominalized verb (a Vnoun). 
 * Zaar is a prodrop language with a strong proportion of dislocated subjects and complements. In addition to a possible independent lexical or pronominal subject (tagged `nsubj`), the `AUX` contains agreement features for `Person` and `Number`. 
 * We have direct object with `obj`, indirect object with `iobj`.


## Treebanks

There is 1 Zaar UD treebank:

  * [Zaar-Autogramm](../treebanks/say_autogramm/index.html)
