---
layout: base
title:  'Introduction'
permalink: cs/overview/cs-hub.html
udver: '2'
---

# UD for Czech <span class="flagspan"><img class="flag" src="../../flags/svg/CZ.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words);
  that holds even for hyphenated compounds such as _česko-slovenský_ “Czech-Slovak” (three tokens) and for abbreviations such as _atd._ “etc.”
  (two tokens).
* A whitespace separating digits in a large number is not treated as a word separator. For example, _1&nbsp;000&nbsp;000_ (“1,000,000” by English
  rules) is one token.
* There are several closed classes of contractions that are treated as multi-word tokens and segmented to individual syntactic words.
  The most prominent type is a subordinating conjunction fused with a conditional auxiliary: _kdybych = když + bych_ “if I”.
  For more details, see [tokenization](tokenization.html).

## Morphology

* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]() (the so-called l-participle) or [ADJ]() (all other participle types).
  * Converb `Conv`, tagged [VERB]() or [AUX]().
  * Verbal noun `Vnoun`, tagged [NOUN]().
* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of three values: `Masc`, `Fem` or `Neut`.
  In some cases the masculine gender is further subclassified by the [Animacy]() values `Anim` and `Inan`.
  Feminine and neuter nominals do not distinguish animacy grammatically.
  * The following parts of speech inflect for `Gender` and `Animacy` because they must agree with nouns: [ADJ](), [DET](), [NUM](),
    [VERB](), [AUX](). For verbs (including auxiliaries), only participles and converbs inflect for gender. Finite verbs don't.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite, participles and converbs), marginally [NUM]().
  * Remnants of the `Dual` number occur only in the instrumental [Case]() of a few nouns and all the agreeing parts of speech.
  * Selected nouns are plurale tantum (`Ptan`) or singulare tantum (`Coll`). These two values are lexical and cannot be used with
    the agreeing adjectives, determiners or verbs. They also never occur with pronouns.
* [Case]() has 7 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Voc`, `Loc`, `Ins`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().
  It can occur with participles but only with those tagged as `ADJ`. It never occurs with verbs.
  * The `Case` feature also occurs with prepositions ([ADP]()). Here it is a lexical feature. Prepositions do not inflect for case
    but they subcategorize for the case of their noun phrase.
* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() has two values, `Pos` and `Neg`, and applies primarily to verbs ([VERB](), [AUX]()), adjectives ([ADJ]()) and adverbs ([ADV]())
  that can be negated using the bound morpheme _ne-_.
  * Occasionally _ne_ occurs as an independent negation particle ([PART]()) and is marked with `Polarity=Neg`.
  * Negating nouns is usually limited to those derived from verbs _(neúspěch, nedůvěra, nevydávání)_ but in principle every noun can be negated.
  * The `Polarity` feature is not used with pronouns and determiners, although there is a subset of negative pronouns and determiners.
    The `PronType=Neg` feature is used there instead.

* Verbs have a lexical [Aspect](), either imperfective (`Imp`) or perfective (`Perf`). A few verbs are biaspectual and they lack the `Aspect`
  feature. Some imperfective verbs could be further classified as iteratives but they are not marked as such (although UD provides `Aspect=Iter`).
  * The `Aspect` feature should be also used with the corresponding derived nouns and adjectives (participles), if they have the
    `VerbForm` feature.
* Finite verbs always have one of three values of [Mood](): `Ind`, `Imp` or `Cnd`. The conditional mood is only used with conditional
  auxiliaries _(bych, bys, by, bychom, byste)_. The l-participle of the main verb, that is needed to form a periphrastic conditional,
  is not marked with this feature.
* Verbs in the indicative mood always have one of three values of [Tense](): `Past`, `Pres` or `Fut`.
  Note that `Tense=Pres` is also used with forms of perfective verbs, which are formally present, but semantically future.
  Hence both _jdu domů_ “I am going home” and _přijdu domů_ “I will come home” end up marked as `Tense=Pres`.
  On the other hand, a few imperfective verbs can form a genuine future form using prefixes, and they are marked `Tense=Fut`:
  _půjdu domů_ “I will go home”.
  * Imperative and conditional forms do not have the `Tense` feature (note that past and present conditionals are distinguished
    analytically).
  * The `Tense` feature is also used to distinguish present and past converbs (_dělaje_ “while doing” vs. _udělav_ “having done”),
    and present and past participles (_dělající_ “doing” vs. _udělavší_ “having done”).
    The l-participle (tagged `VERB` or `AUX`) also has `Tense=Past` because its primary function is to form the past tense.