---
layout: base
title:  'Uyghur UD'
udver: '2'
---

# UD for Uyghur <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by white spaces or punctuation.
  Punctuation may appear in some abbreviations or numeric expressions.

## Morphology

### Tags

* Uyghur uses all 17 universal POS categories, including particles ([PART]()).
  Nevertheless, there are no examples of the [SYM]() category in the current data.
* Uyghur has a limited number of auxiliary verbs ([AUX]()), but in most cases, a combination of
  a semantically weak verb with a non-finite form of a semantically prominent verb is analyzed
  as an [xcomp]() construction, not as auxiliary. The following verbs are currently treated as
  auxiliaries at least in some contexts:
  * The copula بول _bol_ (“to be”) is used with non-verbal predicates wherever the suffixed copula cannot be used.
    It is also used in some periphrastic constructions with other verbs.
  * The suffixed copula ئى _i_ can provide only some forms.
  * كەت _ket_ (“to go”) is used in periphrastic perfective constructions.
  * كەل _kel_ (“to come”) is used in irrealis mood.
  * قال _qal_ (“to stay”) is used in periphrastic progressive constructions.
  * تۇر _tur_ (“to stand”) is used in periphrastic progressive constructions.
* Verbs with modal meaning are not considered auxiliary in Uyghur.
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().
  * Converb `Conv`, tagged [VERB]() or [AUX]().
  * Gerund `Ger`, tagged [VERB]() or [AUX]().

### Nominal Features

* There is no grammatically relevant gender in the Turkic languages. However, the [Gender]() feature
  is sporadically used with personal proper nouns ([PROPN]()) and distinguishes two values: `Masc` and `Fem`.
* The two main values of the [Number]() feature are `Sing` and `Plur`. For nouns (and adjectives), only
  `Plur` is used when the plural suffix is present; singular is left unannotated. For pronouns ([PRON]()),
  both singular and plural are explicitly annotated where relevant.
  * Finite verbs ([VERB](), [AUX]()) inflect for number (and person) to cross-reference the subject.
    Both values are explicitly annotated.
* [Case]() has 6 possible values: `Nom`, `Acc`, `Gen`, `Dat`, `Loc`, `Abl`. It occurs with the nominal
  words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM](). It also occurs with some non-finite
  forms of [VERB]() and [AUX]().
* Possession is marked morphologically on the possessed [NOUN](), which cross-references the person and
  number of the possessor, using the layered features `Number[psor]` and `Person[psor]`.

### Verbal Features

* Finite verbs always have one of four values of [Mood](): `Ind`, `Imp`, `Int` or `Cnd`.
  The interrogative mood (`Int`) is a language-specific value and applies to verbs with the interrogative suffix _-mu_.
* Verbs in the indicative mood always have one of two values of [Tense](): `Past` or `Pres`.
* There are also two values of [Aspect](): `Hab` and `Perf`.
* As for [Voice](), only the passive forms (`Pass`) are explicitly annotated; `Voice=Act` is not used.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
  Currently only the values `Prs`, `Dem` and `Int` are used.
* [NumType]() is used with numerals ([NUM]()), determiners ([DET]()), and adjectives ([ADJ]()).
* The [Reflex]() feature marks reflexive pronouns ئۆز _(öz)_.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* The dominant word order in Uyghur is subject-object-verb, although other word orders are possible, too.
* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * A subordinate clause may serve as the subject and is labeled [csubj]().
* Nominal object ([obj]()) is a noun phrase in the accusative or nominative case, without preposition.
  * A subordinate clause may serve as the object and is labeled [ccomp]().

### Relations Overview

* The following relation subtypes are used in Uyghur:
  * [advcl:cond]() for conditional adverbial clauses
  * [advmod:emph]() for adverbs or particles that modify noun phrases and emphasize or negate them
  * [compound:lvc]() for light-verb constructions
  * [compound:redup]() for reduplicated compounds
  * [nmod:cau]() for the causee of a causative predicate (this should be `obl:cau` in future releases)
  * [nmod:comp]() for comparative modifiers of adjectives or adverbs (this should be `obl:comp` in future releases)
  * [nmod:part]() for part-whole relations
  * [nmod:poss]() for possessive and genitive relations
  * [nmod:tmod]() for temporal modifiers and relations within temporal relations such as dates
  * [obl:tmod]() for temporal modifiers
* The following relation types are not used in Uyghur at all:
  [iobj](), [expl](), [clf]()

## Treebanks

There is 1 Uyghur UD treebank:

  * [Uyghur-UDT](../treebanks/ug_udt/index.html)
