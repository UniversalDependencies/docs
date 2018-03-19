---
layout: base
title:  'Armenian UD'
udver: '2'
---

# UD for Armenian (Eastern) <span class="flagspan"><img class="flag" src="../../flags/svg/AM.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words); that holds even for hyphenated compounds such as *անգլո-ամերիկյան* “anglo-american” (three tokens) and for abbreviations such as *թ.* “year” (two tokens).
* Numerical expressions (including dates, expressions with hyphen and Armenian endings) are treated as single words and may contain punctuation or whitespace: *1.1.1970*, *1/1/1970*, *11:00*, *2 000*, *10-15*, *2,15*, *1-ին* “1st”, *1700-ամյա* “1700-year-old”, *ՆԱՏՕ-ական* “belonging-to-NATO”.
* Words contain “infixed” punctuation (e.g. question, exclamation, emphasis and Armenian abbreviation marks), as in *ինչո՞ւ = ինչու + ՞* “why?”, are treated as multi-word tokens and segmented to individual syntactic words. For more details, see [tokenization](tokenization.html).

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Armenian POS tags](pos/index.html)
and [Armenian features](feat/index.html).
* Armenian uses all 17 universal POS categories, including particles ([PART]()). The exact list of particles yet to be worked out.
* The tag [DET]() is used for articles and pronominal words used with a determiner function, including possessives (the traditional grammar does not define determiners, but distinguish pronominal modifiers). The tag [PRON]() is reserved for pronouns occurring as the head of a noun phrase. Pronominal quantifiers (which the traditional grammar includes in pronouns) are [DET]() as well.
* Eastern Armenian has one auxiliary verb ([AUX]()), _եմ_ (“to be”), but lemma _լինել_ is also possible.
  This is in fact just aspectual variants of _եմ_, but this is separate lemmas because
  the morphological process that relates this to _եմ_ is considered derivational. There is another voice auxiliary _տալ_ (“cause/make someone to perform action”).  
  Auxiliaries are all verbal in Eastern Armenian and can be grouped into three types:
  * The copula with non-verbal predicates.
  * Periphrastic present tense (present form of _եմ_ + resultative participle of the main verb).
  * Periphrastic past tense (present form of _եմ_ + perfect of the main verb; imperfect form of _եմ_ + imperfective, perfect, future-I and reslutative participles of the main verb).
  * Periphrastic future tense (present form of _եմ_ + future-I participle of the main verb).
  * Periphrastic negated conditional (negated present or imperfect form of _եմ_ + connegative form of the main verb).
  * Periphrastic “secondary compound tenses” (any form of _լինել_, including periphrastic forms, + processual, resultative and future-I participles of the main verb).
  * Periphrastic causative (any form of _տալ_, including periphrastic forms, + infinitve of the main verb).
* In other words, _եմ, լինել_ and _տալ_ are the only lemmas that occur with the [AUX]() tag (exception: finite existentials _կամ_ and _ունեմ_ in combination with resultative participle).
  They may still occur also as normal [VERB]() if they are used in purely existential sentences
  (i.e. such that don't even indicate location because if they do, then _եմ_ is treated as copula). 
* Verbs with modal meaning are not considered auxiliary in Armenian.
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]() (in so-called “secondary compound tenses”).
  * Converb `Conv`, tagged [VERB]().
  * Gerundive `Gdv`, tagged [VERB]().
  * Verbal noun `Vnoun`, tagged [NOUN]().
* Though the resulative, subject and future-I participles can be used adjectivally and can be negated they are generally tagged [VERB](). The only exception is future-II participles, they are tagged [ADJ]().

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and some of [PRON]()) have an inherent [Animacy]() feature with one of three values: `Hum`, `Inan` or `Nhum`. Note that this may be changed in future. Nominal words could be treated as having inherent `Hum`, `Nhum` and would be further subclassified by the layered `Animacy[gram]` values `Anim` vs. `Inan`.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [VERB](), [AUX]() (finite).
  * Selected nouns are plurale tantum (`Ptan`) or singulare tantum (`Coll`). These two values are lexical, and cannot be used with
    the agreeing verbs. They also never occur with pronouns. (`Coll`) occurs with gerundives. 
  * There is a language-specific value `Assoc` (associative plural). This is also lexical. Only two pronouns (_մերոնք, ձերոնք_) are associative.
* [Case]() has 6 possible values: `Nom`, `Gen`, `Dat`, `Abl`, `Ins`, `Loc`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [DET](). Note, that `Gen` occurs only with pronouns and determiners.
  It can also occur with gerundives (they are tagged as `VERB`).
  * The `Case` feature also occurs with some of adpositions, with “locatives” ([ADP]()). Here it is an inflectional feature.
* The two main values of the [Definite]() feature are `Def` and `Ind`. The following parts of speech inflect for definitness:
  [NOUN](), [PROPN](), [DET]().
