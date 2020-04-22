---
layout: base
title:  'Serbian UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for Croatian and Serbian  <span class="flagspan"><img class="flag" src="../../flags/svg/HR.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/RS.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. In cases where a word is immediately followed or preceded by a punctuation sign (comma, full stop, parentheses, etc.), a white space is inserted between the word and the punctuation. In this way, punctuation signs are treated as separate tokens, with a few exceptions:
  * Full stops separating digits in a large number ("65.000" stands for sixty-five-thousand, one token)
  * Hyphens in compounds such as _etno-selo_ “ethnic (traditional) village” (one tokens) and for abbreviations such as _atd._ “etc.”
  (two tokens).


## Morphology

### Tags

* All 17 universal POS categories are used.
* Pronominal quantifiers (which the traditional grammar includes in numerals) are [DET]().
* There are two auxiliary verbs ([AUX]()), _biti_ (“to be”, past tense) and _ht(j)eti_ (“will”, future tense); the latter can be attached to a verb in Serbian (e.g. _pružiće_ "will provide"), but NOT in Croatian (e.g. _pružit će_ "will provide").

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of three values: `Masc`, `Fem` or `Neut`.
  In some cases the masculine gender is further subclassified by the [Animacy]() values `Anim` and `Inan`.
  Feminine and neuter nominals do not distinguish animacy grammatically.
  * The following parts of speech inflect for `Gender` and `Animacy` because they must agree with nouns: [ADJ](), [DET](), [NUM](),
    [VERB](), [AUX](). For verbs (including auxiliaries), only participles and converbs inflect for gender. Finite verbs don't.
* There are two values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite, participles and converbs), marginally [NUM]().
* [Case]() has 7 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Voc`, `Loc`, `Ins`.
  * It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().
  * The `Case` feature also occurs with prepositions ([ADP]()). Here it is a lexical feature. Prepositions do not inflect for case but they subcategorize for the case of their noun phrase.

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() has two values, `Pos` and `Neg`, and applies primarily to verbs ([VERB](), [AUX]()), adjectives ([ADJ]()) and adverbs ([ADV]())
  that can be negated using the bound morpheme _ne-_.
  * Typically _ne_ occurs as an independent negation particle ([PART]()) and is marked with `Polarity=Neg`.
  * Negated nouns are rare and considered lexical derivations (e.g _nepravda_ "injustice")
  * The `Polarity` feature is not used with pronouns and determiners, although there is a subset of negative pronouns and determiners.
    The `PronType=Neg` feature is used there instead.

### Verbal Features

* Although verbs have a lexical [Aspect](), either imperfective (`Imp`) or perfective (`Perf`), like in Czech, this category is not included in the language-specific features.
* Finite verbs always have one of three values of [Mood](): `Ind`, `Imp` or `Cnd`.
* Verbs in the indicative mood always have one of three values of [Tense](): `Past`, `Pres` or `Fut`.
  * There are two values of the [Voice]() feature: `Act` and `Pass`. Only the passive participle has `Voice=Pass`. All other verb forms have
  `Voice=Act`.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()) and adjectives ([ADJ]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _moj_ “my”),
  possessive interrogative and possessive relative determiners (e.g. _čiji_ “whose”)
  and possessive adjectives (e.g. _očev_ “father's”).
* The [Reflex]() feature marks reflexive particles _(se, si)_ and determiners _(svoj)_. It is always used together with `PronType=Prs`.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* There are two [layered features](../../u/overview/feat-layers.html), [Gender[psor]]() and [Number[psor]]().
  They appear with certain possessive adjectives and determiners and encode the lexical gender/number of the possessor.
  The extra layer is needed to distinguish these lexical features from the inflectional gender and number
  that mark agreement with the modified (possessed) noun.


## Syntax

This is an overview of the implementation of the general UD guidelines for Croatian and Serbian. As the syntax of these two languages is very similar to Czech, Czech-specific examples scattered across the general UD guidelines might be helpful too.

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * If the noun phrase is quantified, it may be in the genitive, which is required by the quantifier.
    If this is the case, then the quantifier is attached using a special relation, either [nummod:gov]() or [det:numgov]().
  * An infinitive verb may serve as the subject and is labeled as clausal subject, [csubj]().
    On the other hand, verbal nouns as subjects are just `nsubj`.
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
* While traditional grammars distinguish between direct and indirect objects (like in Czech), we do not annotate any indirect object, but distinguish between objects labeled [obj]() and oblique constituents labeled [obl]().
  * Bare accusative phrases considered objects.
  * All other constituents (bare phrases in oblique cases, prepositional phrases) are considered oblique.
  * Accusative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().
  * If a verb subcategorizes for the infinitive (e.g. modal verbs or verbs of control), the infinitival complement is labeled [xcomp]().
 * Adjuncts (adverbial modifiers realized as noun phrases) are usually
  prepositional phrases, but they can be bare noun phrases as well. These dependencies , including temporal modifiers (e.g.  _svake godine_ “every year” are all labeled [obl]().
* Extra attention has to be paid to clitic forms of reflexive pronouns _se_ (accusative) and _si_ (dative, more used in Croatian than in Serbian). Traditional grammars distinguish many different functions of these words, including (but not limited to) those listed in the documentation for Czech. We do not distinguish between most of these functions and label these words as [expl]() unless they clearly function as [obj](). This decision is motivated by theoretical finings showing that traditional distinctions do not hold in most of the cases. Instead, the common function of the reflexive particle across different uses is to mark a reduction in the number of core arguments of the verb (either object or subject is not expressed).
* Passive voice is not marked in syntactic relations (e.g. no distinction between active and passive subjects), only in verbal features (as described above).

### Non-verbal Clauses

* The copula verb _biti/jeste_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.

## Treebanks


  * [Croatian-SET](../treebanks/hr_set/index.html)
  * [Serbian-SET](../treebanks/sr_set/index.html)
