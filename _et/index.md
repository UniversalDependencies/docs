---
layout: base
title:  'Estonian UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for Estonian <span class="flagspan"><img class="flag" src="../../flags/svg/EE.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* Multitoken words (syntactic words consisting of several ortographic words) include:
     some foreign names, e.g. New York, Rio de Janeiro;
     numerical expressions like 20 000.
* Punctuation marks are treated as separate tokens; the exceptions include:
     ordinary numbers (1. jaanuar)
     abbreviations (they can be written with and without period); if an abbreviation ends a sentence, the period mark is      treated as the end-of-sentence punctuation mark, not as an abbreviation 
* Emoticons (consisting mostly of punctutation marks) are single tokens.


## Morphology

### Tags

This is an overview only.

* Estonian uses 16 universal POS categories (all UD catecories except PART).
* Estonian has following auxiliary verbs: _olema_ ("to be"), _ei_, _ära_ ("not"), _võima_, _saama_, _pidama_, _tohtima_, _näima_, _paistma_, _tunduma_ (modal verbs). Modal verbs, except _võima_ and _tohtima_, can also be used as main verbs, depending on the context.
  The auxiliary verbs are used in several types of constructions:
  1. _ei_, _ära_:
   * negation of verb
  2. _olema_:
   * The copula with non-verbal predicates.
   * Past tenses
  3. _saama_:
   * modal verb (+ infinitive)
   * future (+ supine, bad style)
   * passive (+ participe)
  4. _võima_, _tohtima_:
   * modal verb (+ infinitive)
  5. _pidama_:
   * modal verb (+ supine)
  6. _näima_, _paistma_, _tunduma_:
   * modal verb (+ vat-infinitive)

* There are five main verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]() (the so-called l-participle) or [ADJ]() (all other participle types).
  * Supine `Sup`, tagged [VERB]() or [AUX]().
  * Converb `Conv`, tagged [VERB]() or [AUX]().

### Nominal Features

* Estonian does not have Gender feature
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite, participles and converbs), marginally [NUM]().
* [Case]() has 15 possible values: `Nom`, `Gen`, `Par`, `Add`, `All`, `Ade`, `Abl`, `Ill`, `Ine`, `Ela`, `Ter`,`Ess`,`Abe`,`Com`. Additive (Add) is a short form of illative (Ill) and exists only in singular.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().
  It can occur with participles but only with those tagged as `ADJ`.
  Cases Abe, Ill, Ine, Ela, Tra occur with supines.

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() has only value `Neg`, and applies to auxiliaries 'ei' and 'ära' if they form a negating predicate, and _olema_ negating forms 'pole', 'polnud', 'poldud' etc.
* [Connegative]() has only value `Yes` and applies to verbs which have been negated by 'ei' or 'ära'.

### Verbal Features

* Finite verbs always have one of four values of [Mood](): `Ind`, `Imp`, Cnd` or `Qot`.
* Verbs in the indicative mood always have one of two values of [Tense](): `Past` or `Pres`.
* There are two values of the [Voice]() feature: `Act` and `Pass`. Impersonal verb forms  have `Voice=Pass`. All other verb forms have `Voice=Act`.
* [Person]() has three values, `1`, `2` and `3`.
* [Number]() has values `Sing` or `Plur`.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()) and determiners ([DET]()).
* [NumType]() is used with numerals ([NUM]()) and adjectives ([ADJ]()).
* The [Poss]() feature marks possessive personal pronouns (e.g. _oma_ “my”),
* The [Reflex]() feature marks reflexive pronouns _(ise, end)_.
  In Estonian it is always used together with `PronType=Prs`.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
* [PronType]() is a list based feature of pronouns and determiners and it has following values:
   * "PronType=Dem" for demonstrative pronouns
   * "PronType=Ind" for indefinite pronouns
   * "PronType=Int,Rel" for interrogative or relative pronouns
   * "PronType=Prs" for personal pronouns
   * "PronType=Rcp" for reciprocal pronouns
   * "PronType=Tot" for total (collective) pronouns (_kõik_, _kogu_ etc.)

### Other Features

* Estonian UD treebanks have following language-specific features:
  * [NumForm]() has three values: `Digit`, `Letter` or `Roman`.
  * [NumType]() has a value `Card` for cardinal numbers and `Ord` for ordinal numbers.
  * [AdpType]() distincts preopositions `AdpType=Prep` and postpositions `AdpType=Post`.
  * [Hyph]() marks hyhenated words.
  * [Abbr]() is for abbreviations.
  * [Foreign]() marks foreign-language tokens.
* The following universal features are not used in Estonian: [Definite](), [Evident](), [Polite]().


## Syntax

This is an overview only.

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a nominal in the nominative or partitive case, without preposition.
   * An infinitive verb may serve as the subject and is labeled as clausal subject, [csubj]().
   * A finite subordinate clause may serve as the subject and is labeled [csubj]().`.
* Ojects[obj]() can be nominals in nominative, genitive or partitive case forms (and there is no accusative case in Estonian).
  * The infinitival complement is labeled as [xcomp]() or [ccomp]().
* Adjuncts or adverbial modifiers realized as noun phrases are labeled [obl]():

### Non-verbal Clauses

* The copula verb _olema_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
  Purely existential clauses (without indicating location) use _olema_ as well but it is treated as the head of the clause and tagged [VERB]().

### Relations Overview

* The following relation subtypes are used in Estonian:
  * [acl:relcl]() for relative clauses
  * [cc:preconj]() for constructions _nii ... kui ka ..._ and _kas ... või ..._
  * [compound:prt]() for adverbal components of particle verbs
  * [csubj:cop]() for clausal or infinitive subject in copula clauses.
  * [nsubj:cop]() for nominal subject in copula clauses,
* The following main types are not used alone and must be subtyped:

* The following relation types are not used in Estonian at all:
  [expl](), [clf](), [dislocated]()
