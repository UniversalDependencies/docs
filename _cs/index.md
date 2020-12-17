---
layout: base
title:  'Czech UD'
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

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Czech POS tags](pos/index.html)
and [Czech features](feat/index.html).

* Czech uses all 17 universal POS categories, including particles ([PART]()).
  At present, more than 70 word types are tagged [PART](). This is a legacy of an existing Czech morphological analyzer
  and many of these words should probably belong to another category in UD; however, the exact list has yet to be worked out.
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on word lists because the traditional grammar does not define determiners.
  In general, words that inflect for gender, to be able to agree with a modified noun, are tagged [DET](), even if they
  act independently in a given sentence; that includes possessives.
  Pronominal quantifiers (which the traditional grammar includes in numerals) are [DET]() as well.
* Czech has just one auxiliary verb ([AUX]()), _být_ (“to be”), but lemmas _bývat_ and _bývávat_ are also possible.
  They are in fact just variants of _být_, but they are separate lemmas because
  the morphological process that relates them to _být_ is considered derivational.
  The auxiliary verb is used in several types of constructions:
  * The copula with non-verbal predicates.
  * Periphrastic future tense (future form of _být_ + infinitive of the main verb).
  * Periphrastic past tense (present form of _být_ + l-participle of the main verb; the auxiliary is omitted with 3rd-person subjects).
  * Periphrastic conditional (conditional form of _být_ + l-participle of the main verb).
  * Periphrastic passive (any form of _být_, including periphrastic forms, + passive participle of the main verb).
* In other words, _být, bývat_ and _bývávat_ are the only lemmas that occur with the [AUX]() tag.
  They may still occur also as normal [VERB]() if they are used in purely existential sentences
  (i.e. such that don't even indicate location because if they do, then _být_ is treated as copula).
  * Note that this may be changed in future. Existential sentences could be treated as elliptical versions of locational sentences;
    then the verb would be the root, but it could still be tagged as `AUX` and the `AUX`-`VERB` distinction could be anchored in the lexicon.
* Verbs with modal meaning are not considered auxiliary in Czech.
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]() (the so-called l-participle) or [ADJ]() (all other participle types).
  * Converb `Conv`, tagged [VERB]() or [AUX]().
  * Verbal noun `Vnoun`, tagged [NOUN]().

### Nominal Features

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

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() has two values, `Pos` and `Neg`, and applies primarily to verbs ([VERB](), [AUX]()), adjectives ([ADJ]()) and adverbs ([ADV]())
  that can be negated using the bound morpheme _ne-_.
  * Occasionally _ne_ occurs as an independent negation particle ([PART]()) and is marked with `Polarity=Neg`.
  * Negating nouns is usually limited to those derived from verbs _(neúspěch, nedůvěra, nevydávání)_ but in principle every noun can be negated.
  * The `Polarity` feature is not used with pronouns and determiners, although there is a subset of negative pronouns and determiners.
    The `PronType=Neg` feature is used there instead.

### Verbal Features

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
    The passive participle does not have the `Tense` feature.
* There are two values of the [Voice]() feature: `Act` and `Pass`. Only the passive participle has `Voice=Pass`. All other verb forms have
  `Voice=Act`.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()), determiners ([DET]()) and adverbs ([ADV]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _můj_ “my”),
  possessive interrogative, indefinite or negative determiners (e.g. _čí_ “whose”),
  possessive relative determiners (e.g. _jehož_ “whose”)
  and possessive adjectives (e.g. _otcův_ “father's”).
* The [Reflex]() feature marks reflexive pronouns _(se, si)_ and determiners _(svůj)_.
  In Czech it is always used together with `PronType=Prs`.
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
* The following universal features are not used in Czech: [Definite](), [Evident](), [Polite]().

## Syntax

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
  * [acl:relcl]() for relative clauses
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

  * [Czech-PDT](../treebanks/cs_pdt/index.html)
  * [Czech-CAC](../treebanks/cs_cac/index.html)
  * [Czech-CLTT](../treebanks/cs_cltt/index.html)
  * [Czech-FicTree](../treebanks/cs_fictree/index.html)
  * [Czech-PUD](../treebanks/cs_pud/index.html)
