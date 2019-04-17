---
layout: base
title:  'Arabic UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for Arabic <span class="flagspan"><img class="flag" src="../../flags/svg/SA-AL.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words);
  that holds even for hyphenated compounds and for abbreviations.
* Enclitic pronouns, proclitic conjunctions and prepositions are cut off during tokenization and marked as multi-word tokens.
* Definite articles are treated as bound morphemes and they are not cut off during tokenization.

## Morphology

### Tags

* Arabic uses 16 universal POS categories; at present, subordinating and coordinating conjunctions are not distinguished
  (the [CCONJ]() tag is used).
* Some Arabic auxiliaries inflect like verbs, some do not inflect at all.
  The following auxiliaries are found in the data:
  * The copula كَان _(kān)_ and the negative copulas لَيس _(lays)_ and لسنا _(lasnā)._
  * Future tense particle سَ _(sa)_ “will”
  * Modal particle قَد _(qad)_ “may”

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of three values: `Masc` or `Fem`.
  * Verbs inflect for `Gender` because they must agree with nouns.
* [Number]() has 3 possible values: `Sing`, `Dual` and `Plur`.
* [Case]() has 3 possible values: `Nom`, `Gen`, `Acc`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().

### Degree and Polarity

* [Polarity]() has two values, `Pos` and `Neg`, and applies to adjectives ([ADJ]()).

### Verbal Features

* [Aspect]() is inflectional, either imperfective (`Imp`) or perfective (`Perf`).
* [Mood]() has 4 possible values: `Ind`, `Imp`, `Jus`, `Sub`.
* [Voice]() has 2 possible values: `Act`, `Pass`.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()) and determiners ([DET]()).
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).

### Other Features

* Besides the layered features listed above, there are several other language-specific features:
  * [NumForm]()
  * [NumValue]()
  * [AdpType]()
  * [ConjType]()

## Syntax

The syntactic annotation in the Arabic UD treebanks follows the general guidelines but adds three language-specific relations:

* nmod:poss for possessive/genitive modifiers
* flat:name for flat relations in proper nouns
* nsubj:pass for nominal subjects of passive verbs

The syntactic annotation has been automatically converted from the original annotation schemes (the PADT for UD Arabic and PATB for UD Arabic LDC).

This is an overview only. For more detailed discussion and examples, see the list of [Czech relations](dep/index.html),
as well as Czech-specific examples scattered across the documentation of constructions.

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * If the noun phrase is quantified, it may be in the genitive, which is required by the quantifier.
    If this is the case, then the quantifier is attached using a special relation, either [nummod:gov]() or [det:numgov]().
  * An infinitive verb may serve as the subject and is labeled as clausal subject, [csubj]().
    On the other hand, verbal nouns as subjects are just `nsubj`.
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
* Objects defined in the Czech grammar may be bare noun phrases in accusative, dative, genitive or instrumental,
  or prepositional phrases in accusative, dative, genitive, locative or instrumental.
  For the purpose of UD the objects are divided to core objects, labeled [obj]() or [iobj](),
  and oblique objects, labeled [obl:arg]().
  * Bare accusative, dative, genitive and instrumental objects are considered core.
  * All prepositional objects are considered oblique.
  * Accusative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().
  * If a verb subcategorizes for the infinitive (e.g. modal verbs or verbs of control), the infinitival complement is labeled [xcomp]().
  * If a verb subcategorizes for two core objects, one of them accusative (or `ccomp`) and the other non-accusative,
    then the non-accusative object is labeled [iobj]().
    Core nominal objects in other situations are labeled just [obj]().
* Adjuncts (or, following the Czech grammar, adverbial modifiers realized as noun phrases) are usually
  prepositional phrases, but they can be bare noun phrases as well. They are labeled [obl]():
  * Temporal modifiers realized as accusative noun phrases: _přijedu příští sobotu_ “I will come next Saturday.”
  * Dative noun phrases with benefactive or possessive role (i.e. if the verb does not subcategorize for a single dative object
    and if it is not a verb of giving (or similar), where the dative could be interpreted as the recipient.
    Example: _uvařila mu oběd_ “she cooked (for) him a lunch.”
  * Instrumental noun phrases expressing the way or means with which something was done.
    Example: _zbil psa klackem_ “he beat up the dog with a stick.”
  * All prepositional phrases that are not prepositional objects (i.e., their role and form is not defined lexically by the predicate)
    are adjuncts.
* Extra attention has to be paid to clitic forms of reflexive pronouns _se_ (accusative) and _si_ (dative). They can function as:
  * Core objects ([obj]() or [iobj]()): _spatřil se/sebe v zrcadle_ “he sighted himself in the mirror,” _ublížila si/sobě_ “she hurt herself.”
  * Reciprocal core objects (`obj` or `iobj`): _líbali se_ “they were kissing each other,”
    _vykali si_ “they used the polite form of address for each other.”
  * Reflexive passive ([expl:pass]()): _oběd se vaří_ “the lunch is being cooked,” lit. “the lunch cooks itself.”
  * Inherently reflexive verb, cannot exist without the reflexive clitic. In accord with the current UD guidelines, we label the relation
    between the verb and the clitic as [expl:pv](), not `compound`. Example: _smála se_ “she laughed,” _zvykla si_ “she got used to it.”
* In passive clauses (both reflexive and periphrastic passive), the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass]().
  * If the demoted agent is present, it has the form of a bare instrumental phrase and its relation is labeled [obl:agent]().

### Non-verbal Clauses

* The copula verb _být_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
  Purely existential clauses (without indicating location) use _být_ as well but it is treated as the head of the clause and tagged [VERB]().

### Relations Overview

* The following relation subtypes are used in Czech:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [obl:arg]() for prepositional objects
  * [expl:pv]() for reflexive clitics of inherently reflexive verbs
  * [expl:pass]() for reflexive clitics in reflexive passives
  * [aux:pass]() for passive auxiliaries
  * [nummod:gov]() for cardinal numbers that are attached as children of the counted noun but govern its case
  * [det:numgov]() for pronominal quantifiers that are attached as children of the quantified noun but govern its case
  * [det:nummod]() for pronominal quantifiers in cases in which they do not govern the case of the quantified noun
  * [advmod:emph]() for adverbs or particles that modify noun phrases and emphasize or negate them
  * [flat:foreign]() for non-first words in quoted foreign phrases
* The following main types are not used alone and must be subtyped:
  [expl]()
* The following relation types are not used in Czech at all:
  [clf](), [dislocated]()

## Treebanks

There are [five](../treebanks/cs-comparison.html) Czech UD treebanks:

  * [Czech](../treebanks/cs/index.html)
  * [Czech-CAC](../treebanks/cs_cac/index.html)
  * [Czech-CLTT](../treebanks/cs_cltt/index.html)
  * [Czech-FicTree](../treebanks/cs_fictree/index.html)
  * [Czech-PUD](../treebanks/cs_pud/index.html)
