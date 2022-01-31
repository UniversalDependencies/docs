---
layout: base
title:  'Latin UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for Latin <span class="flagspan"><img class="flag" src="../../flags/svg/VA.svg" /></span>

## Tokenization and Word Segmentation

### _Index Thomisticus_ Treebank
* The tokenization of the _Index Thomisticus_ Treebank (IT-TB) is inherited from that of the original _Index Thomisticus_ corpus by father Roberto Busa. In general, words are delimited by whitespace characters. Punctuations are assigned a token on their own. Description of exceptions follows.
* Words that include enclitics _-que_, _-ve_ or _-ne_ are split into two tokens, namely one for the word without the enclitics and one for the enclitics.
  Example: the word _corporique_ (lit. “and to the body”) is split into two tokens: _corpori_ and _que_.
  In the IT-TB, this is the only exception to the original tokenization provided by the _Index Thomisticus_.
* Hyphenated compounds such as _necesse-esse_ are not split into two tokens. They are considered one token.
* Dots are not assigned a token on their own when they are part of an abbreviation (e.g., _etc._ and _metaph._).

### PROIEL

* In general, words are delimited by whitespace characters. There is no punctuation in the syntactic trees. The exception is words that include enclitics _-que_, _-ve_ or _-ne_ are split into two tokens, namely one for the word without the enclitics and one for the enclitics. Example: the word _corporique_ (lit. “and to the body”) is split into two tokens: _corpori_ and _que_.


### Perseus

* Tokenization is whitespace-based, with the exception of enclitic _-que_, _-ve_, and _-ne_ being split.


## Morphology

### Tags

**_Index Thomisticus_ Treebank**
* The IT-TB uses 14 universal POS categories.
  Interjections ([INTJ]()), Particles ([PART]()) and Symbols ([SYM]()) are not used.
* The only Determiner ([DET]()) is the proto-article _ly_.
* Latin has only one auxiliary verb ([AUX]()), _sum_ (“to be”).
  The form _iri_ (present passive infinitive of the verb _eo_, “to go”) is very rarely used and only in the periphrastic future passive infinitive. So far, it is never used in the IT-TB.
  The auxiliary verb is used in several types of constructions:
  * The copula with non-verbal predicates.
  * Periphrastic future active infinitive.
  * Periphrastic passive perfect indicative.
  * Periphrastic passive plusperfect indicative.
  * Periphrastic passive future perfect indicative.
  * Periphrastic passive perfect subjunctive.
  * Periphrastic passive plusperfect subjunctive.
  * Periphrastic perfect passive infinitive.
* In the IT-TB, _sum_ is the only lemma that occurs with the [AUX]() tag. Any deviation from this must be considered as an annotation mistake.
  _sum_ may still occur also as normal [VERB]() if it is used in purely existential sentences.
* Verbs with modal meaning are not considered auxiliary in Latin.

**PROIEL**

* PROIEL uses 14 universal POS categories. Punctuation ([PUNCT]()), Particles ([PART]()) and Symbols ([SYM]()) are not used.
* Among the traditional pronouns of Latin grammar, those that can occur adnominally are treated as detererminers [DET]().
* The only intended auxiliary verb ([AUX]()) is _sum_ (“to be”), although in a few cases other verbs have ended up as auxiliaries due to errors in the conversion.


**Perseus**

* Perseus uses 12 POS tags. Notably, DET, PART, and AUX are not used.


### Nominal Features

**_Index Thomisticus_ Treebank**
* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of three values: `Masc`, `Fem` or `Neut`.
  * The following parts of speech inflect for `Gender` because they must agree with nouns: [ADJ](), [DET](), [NUM](),
    [VERB](). For verbs (including auxiliaries), only participles and gerundives inflect for gender. Finite verbs don't.
* The two values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [VERB](), [AUX](), [NUM]().
* [Case]() has 7 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Voc`, `Loc`, `Abl`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [NUM]().
  It occurs also with the nominal forms of verbs: participles, gerunds and gerundives. It never occurs with verbs.

**PROIEL**

* As for _Index Thomisticus_, except PROIEL does not recognize a locative case in Latin.

**Perseus**

TODO
### Degree

**_Index Thomisticus_ Treebank**
* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()), nouns ([NOUN]() and verbs ([VERB]() and has one of four possible values: `Pos`, `Cmp`, `Sup`, `Abs`.

**PROIEL**

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()).

**Perseus**



### Verbal Features

**_Index Thomisticus_ Treebank**
* Verbs have a lexical [Aspect](), either imperfective (`Imp`) or perfective (`Perf`).
* Finite verbs always have one of three values of [Mood](): `Ind`, `Imp` or `Sub`.
* There are five values of [Tense](): `Past`, `Pres`, `Imp`, `Pqp` or `Fut`.
* There are two values of the [Voice]() feature: `Act` and `Pass`.

**PROIEL**

* There are four values of [Tense](): `Past`, `Pres`, `Pqp` or `Fut`.
* There are two values of [Aspect](): `Imp` and `Perf`.
* Traditional categories like the imperfect and the future perfect are decomposed into [Tense]()=`Past`, [Aspect]()=`Imp` and [Tense]()=`Fut`, [Aspect]()=`Perf`.

**Perseus**

TODO

### Pronouns, Determiners, Quantifiers

**_Index Thomisticus_ Treebank**
* [PronType]() is used with pronouns ([PRON]()) and occasionally adjectives ([ADJ]()).
* [NumType]() has three values: `Card`, `Dist`, `Ord`. [NumType]() is used with numerals ([NUM]()) and adjectives ([ADJ]()).
* The [Poss]() feature marks possessive personal adjectives (e.g. _noster_, “ours”).
* The [Reflex]() feature marks reflexive pronouns _(sui)_.
* [Person]() is a feature of finite verbs ([VERB]()) and auxiliaries ([AUX]()) and has three values, `1`, `2` and `3`.

**PROIEL**
* [PronType]() is used with pronouns ([PRON]()) and relative and interrogative adverbs ([ADV]()).

**Perseus**

TODO

### Other Features

**_Index Thomisticus_ Treebank**
* Besides the layered features listed above, there are also the following language-specific features:
  * [Abbr](). For abbreviations. One value: `Yes`. Example: _metaph._ (standing for _metaphysica_)
  * [NumForm](). For Arabic and Roman numbers. One value: `Digit`. Example: _viii_ (Roman number for “eighth”)
  * [AdpType](). For adpositions. One value: `Prep`. Example: _in_ “in”
  * [VerbForm](). For distinguishing finite, infinite, participial, gerundive and gerund forms of verbs. Five values: `Fin`, `Gdv`, `Ger`, `Inf`, `Part`
  * [VerbType](). For modals. One value: `Mod`. Example: _potest_, “it/she/he can”


**Perseus**

TODO

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

**_Index Thomisticus_ Treebank and PROIEL**
* Nominal subject ([nsubj]()) is a noun phrase in the nominative, accusative or ablative case, without preposition.
  * An infinitive verb may serve as the subject and is labeled as clausal subject, [csubj]().
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
* Objects may be bare noun phrases in accusative, dative, genitive or ablative,
  or prepositional phrases.
  For the purpose of UD the objects are divided to core objects, labeled [obj]() or [iobj](),
  and oblique objects, labeled [obl:arg]().
  * Bare accusative are considered core.
  * All prepositional objects are considered oblique.
  * If a verb subcategorizes for the infinitive (e.g. modal verbs or verbs of control), the infinitival complement is labeled [xcomp]().
  * If a verb subcategorizes for two core objects, one of them accusative (or `ccomp`) and the other non-accusative,
    then the non-accusative object is labeled [iobj]().
    Core nominal objects in other situations are labeled just [obj]().
* Adjuncts (or adverbial modifiers realized as noun phrases) are usually
  prepositional phrases, but they can be bare noun phrases as well. They are labeled [obl]():
  * Relational accusative noun phrases.
  * Dative noun phrases with benefactive or possessive role (i.e. if the verb does not subcategorize for a single dative object
    and if it is not a verb of giving (or similar), where the dative could be interpreted as the recipient.
  * Ablative noun phrases expressing the way or means with which something was done.
  * All prepositional phrases that are not prepositional objects (i.e., their role and form is not defined lexically by the predicate)
    are adjuncts.
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass]().
  * If the denoted agent is present, it has the form of an ablative noun phrase or a prepositional phrase (usually introduced by preposition _ab_, “by”) and its relation is labeled [obl:arg]().


**Perseus**

TODO

### Non-verbal Clauses

**_Index Thomisticus_ Treebank and PROIEL**
* The copula verb _sum_, “to be” is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
  Purely existential clauses (without indicating location) use _sum_ as well but it is treated as the head of the clause and tagged [VERB]().

### Relations Overview

**_Index Thomisticus_ Treebank**
* The following relation subtypes are used:
  * [acl:appos]() for adjectival clauses in appositional constructions
  * [acl:relcl]() for adjectival clauses functioning as relative clauses
  * [advcl:appos]() for adverbial clauses in appositional constructions
  * [advcl:arg]() for adverbial clauses functioning as arguments
  * [advmod:appos]() for adverbial modifiers in appositional constructions
  * [advmod:cc]() for adverbial modifiers functioning as a coordining element (mainly for _scilicet,  “that is to say”)
  * [advmod:emph]() for adverbs or particles that modify noun phrases and emphasize or negate them
  * [amod:advmod]() for adjectival modifiers functioning as adverbial modifiers (converted from Atv/AtvV analytical functions of the PDT guidelines)
  * [aux:pass]() for passive auxiliaries
  * [csubj:pass]() for clausal subjects of passive verbs
  * [expl:pass]() for reflexive clitics in reflexive passives
  * [nmod:advmod]() for nominal modifiers functioning as adverbial modifiers (converted from Atv/AtvV analytical functions of the PDT guidelines)
  * [nmod:appos]() for nominal modifiers in appositional constructions
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [obl:arg]() for prepositional objects
* The following main types are not used alone and must be subtyped:
  [expl]()
* The following relation types are not used in Czech at all:
  [clf](), [discourse](), [dislocated](), [list](), [goeswith](), [reparandum](), [dep]()

**PROIEL**

 * [aux:pass]() for passive auxiliaries
 * [csubj:pass]() for clausal subjects of passive verbs
 * [flat:foreign]() for passages not in Latin (typically quoted passages in Greek)
 * [flat:name]() for multi-token names
 * [nsubj:pass]() for nominal subjects of passive verbs
 * [obl:agent]() for the agent of passive verbs

**Perseus**

No subtypes are used


## Treebanks

There are five Latin UD treebanks:

  * [Latin-ITTB](../treebanks/la_ittb/index.html)
  * [Latin-Perseus](../treebanks/la_perseus/index.html)
  * [Latin-PROIEL](../treebanks/la_proiel/index.html)
  * [Latin-PROIEL](../treebanks/la_proiel/index.html)
  * [Latin-PROIEL](../treebanks/la_proiel/index.html)

## Documentation

The writing up of the Latin-specific documentation, detailing the guide lines pursued by the three currently active Latin treebanks (ITTB, LLCT and UDante), is a work in (slow) progress and has been focusing on the more language-specific issues and values, before going into the details of more universally defined elements. As of now, all research, setting of the guide lines and compilation of documentation pages (apart from this index) has been performed by **Flavio M. Cecchini** (Università Cattolica del Sacro Cuore di Milano), so send any question, doubt or critic to `flavio.cecchini[at]unicatt[.]it`, or, better, open an issue on UD's [GitHub](https://github.com/UniversalDependencies/docs)!  




