---
layout: base
title:  'German UD'
permalink: de/overview/de-hub.html
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for German <span class="flagspan"><img class="flag" src="../../flags/svg/DE.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word.
  We usually tokenize them as separate tokens (words)
  with the exception of abbreviations such as _usw._ “etc.” which are kept as one token with the period.
* German compounds are written as one word and we do not split them.
* There is one class of multi-word tokens: the contractions of prepositions and definite articles.
  Example: _zum = zu + dem_ “to the”.

## Morphology

### Tags

* German uses all 17 universal POS categories, including particles ([PART]()).
* The following words are particles in German: _nicht_ “not”, and the infinitive marker _zu_ “to”.
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on word lists because the traditional grammar does not define determiners.
  In general, words that inflect for gender, to be able to agree with a modified noun, are tagged [DET](), even if they
  act independently in a given sentence; that includes possessives.
* German auxiliary verbs ([AUX]()) are:
  * _sein_ for perfect tenses of some verbs (_ich bin gekommen_ “I have come”) and as copula (_er ist alt_ “he is old”)
  * _haben_ for perfect tenses of the remaining verbs (_ich habe gegessen_ “I have eaten”)
  * _werden_ for future tense (_ich werde reisen_ “I will travel”) and for the passive (_es wurde gegessen_ “it was eaten”)
  * modal verbs _dürfen_ “may”, _können_ “can”, _mögen_ “want”, _müssen_ “must”, _sollen_ “shall”, _wollen_ “want”
  * The verbs _sein, haben_ and _werden_ can also occur as normal verbs ([VERB]()), meaning “be, have, become”.
* There are three main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of three values: `Masc`, `Fem` or `Neut`.
  * The following parts of speech inflect for `Gender` and `Animacy` because they must agree with nouns: [ADJ](), [DET](),
    [VERB](), [AUX](). For verbs (including auxiliaries), only participles can inflect for gender. Finite verbs don't.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite, participles and converbs).
* [Case]() has 4 possible values: `Nom`, `Gen`, `Dat`, `Acc`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET]().
  However, case forms of nouns are extremely ambiguous and most of the time the case is distinguished only by the form of the article.
* [Definite]() has 2 values: `Ind`, `Def`. It is used to distinguish the indefinite and definite articles ([DET]()).

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() is used to mark the negative particle _nicht,_ i.e., only the `Neg` value is used.

### Verbal Features

* Finite verbs always have one of three values of [Mood](): `Ind`, `Imp` or `Sub` (called _Konjunktiv_ in German).
* Indicative and subjunctive verbs always have one of two values of [Tense](): `Past`, `Pres`.
  * In the subjunctive mood, the tense feature is used to distinguish Konjunktiv I (`Pres`) and Konjunktiv II (`Past`).
  * Imperative forms do not have the `Tense` feature.
  * The `Tense` feature is also used to distinguish present and past participles (_kommend_ “coming” vs. _gekommen_ “come”).

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()), determiners ([DET]()) and adverbs ([ADV]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _můj_ “my”),
  possessive interrogative, indefinite or negative determiners (e.g. _čí_ “whose”),
  possessive relative determiners (e.g. _jehož_ “whose”)
  and possessive adjectives (e.g. _otcův_ “father's”).
* The [Reflex]() feature marks reflexive pronouns _(se, si)_ and determiners _(svůj)_.
  In German it is always used together with `PronType=Prs`.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* There are two [layered features](../../u/overview/feat-layers.html), [Gender[psor]]() and [Number[psor]]().
  They appear with certain possessive adjectives and determiners and encode the lexical gender/number of the possessor.
  The extra layer is needed to distinguish these lexical features from the inflectional gender and number
  that mark agreement with the modified (possessed) noun.

### Other Features

* Besides the layered features listed above, there are several other language-specific features:
  * [NumForm]()
  * [NumValue]()
  * [NameType]()
  * [AdpType]()
  * [ConjType]()
  * [Hyph]()
  * [Style]()
  * [PrepCase]()
  * [Variant]() ... distinguishes short and long forms of adjectives, a Slavic-wide phenomenon
* The following universal features are not used in German: [Definite](), [Evident](), [Polite]().

## Syntax

This is an overview only. For more detailed discussion and examples, see the list of [German relations](../dep/index.html),
as well as German-specific examples scattered across the documentation of constructions.

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * If the noun phrase is quantified, it may be in the genitive, which is required by the quantifier.
    If this is the case, then the quantifier is attached using a special relation, either [nummod:gov]() or [det:numgov]().
  * An infinitive verb may serve as the subject and is labeled as clausal subject, [csubj]().
    On the other hand, verbal nouns as subjects are just `nsubj`.
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
* Objects defined in the German grammar may be bare noun phrases in accusative, dative, genitive or instrumental,
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
* Adjuncts (or, following the German grammar, adverbial modifiers realized as noun phrases) are usually
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

* The following relation subtypes are used in German:
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
* The following relation types are not used in German at all:
  [clf](), [dislocated]()

## Treebanks

There are [five](../../treebanks/cs-comparison.html) German UD treebanks:

  * [German](../../treebanks/cs-index.html)
  * [German-CAC](../../treebanks/cs_cac-index.html)
  * [German-CLTT](../../treebanks/cs_cltt-index.html)
  * [German-FicTree](../../treebanks/cs_fictree-index.html)
  * [German-PUD](../../treebanks/cs_pud-index.html)
