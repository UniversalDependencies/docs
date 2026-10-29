---
layout: base
title:  'UD for Middle Armenian'
udver: '2'
---

# UD for Middle Armenian <span class="flagspan"><img class="flag" src="../../flags/svg/AM-RUBENID.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words); this holds even for abbreviations such as *թու.* “year” (two tokens).
* Words, containing internal punctuation (e.g. question, exclamation, emphasis and Middle Armenian abbreviation marks, contracted forms with an apostrophe), as in *ինչո՞ւ = ինչու + ՞* “why?”, *'ւ = ու/եւ*, *թ' = թէ* are treated as multi-word tokens and segmented to individual syntactic words. For more details, see [tokenization](tokenization.html).

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Middle Armenian POS tags](pos/index.html) and [Middle Armenian features](feat/index.html).

* Middle Armenian uses the 17 universal part-of-speech tags.
* [PRON]() is used for pronouns functioning as nominal heads, while pronominal modifiers of nouns are generally tagged [DET](). Traditional grammatical classifications do not always make this distinction.
* Middle Armenian has prepositions, postpositions, and ambipositional adpositions ([ADP]()). Some multiword expressions have an external syntactic category represented by `ExtPos`, while their component words retain their own UPOS tags.
* Middle Armenian has several auxiliary verbs ([AUX]()) (_եմ_/_em_, _լինիմ_/_linim_ “be”, _ունիմ_/_ownim_ “have”, _կամ_/_kam_ “exist”) and mood auxiliaries (_կու_/_kow_ “will”, _պիտի_/_piti_ “must/will”, _կամել_/_kamel_ “intend, should be”).
  The auxiliary _եմ_/_em_ is used in the following constructions:
  * The copula with non-verbal predicates.
  * Periphrastic tenses:
    - present and imperfect resultative (present form of _եմ_ + resultative participle of the main verb; imperfect form of _եմ_ + resultative participle of the main verb),
    - present and imperfect past (present form of _եմ_ + past participle of the main verb; imperfect form of _եմ_ + past participle of the main verb)
    - present and imperfect perfect (present form of _եմ_ + perfect participle of the main verb; imperfect form of _եմ_ + perfect participle of the main verb)
    - present and imperfect future (present form of _եմ_ + future participle of the main verb; imperfect form of _եմ_ + future participle of the main verb),
    - periphrastic negated present and imperfect tenses of indicative and conditional moods (share the same form) (negated present or imperfect form of _եմ_ + connegative form of the main verb),
* Periphrastic “secondary compound tenses” are formed with any form of _լինիմ_/_linim_ + resultative and perfect participles of the main verb). Note, that the aorist and the present and imperfect indicative (subjunctive) forms of the verb _լինիլ_/_linil_ (_լինալ_/_linal_) are analyzed as lexical verbs whenever they occur with nominal predicates (nouns, adjectives, etc.), and as auxiliaries only when they combine with participles.
* Periphrastic causative is formed with any form of _տալ_/_tal_ + infinitive of the main verb).
* Durative aspect is expressed with the finite forms of the existentials _ունիմ_/_ownim_ “have”, _կամ_/_kam_ “exist”  in combination with resultative, perfect and past participles of the lexical verb.
* There are three main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]() (in so-called “secondary compound tenses”).
  
### Nominal Features

* The main [Number]() values are `Sing` and `Plur`. The following parts of speech inflect for number: [NOUN](), [PROPN](), [PRON](), [VERB](), [AUX]() (finite).
  * Selected nouns are plurale tantum (`Ptan`): they have a morphologically plural form but refer to a single entity or a natural set of entities, such as paired body parts and similar items.
 * [Case]() has 6 possible values: `Nom`, `Acc`, `Gen`, `Dat`, `Abl`, `Ins`. It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [DET](), and inflected infinitives. Note, that `Gen` occurs only with pronouns and determiners.
* The two main values of the [Definite]() feature are `Def` and `Ind`. The following parts of speech inflect for definitness: [NOUN](), [PROPN](), [PRON](). Infinitives also receive the definiteness feature.
* [Degree]() applies to adjectives ([ADJ]()) and some adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [NameType]() is used to distinguish types of named entities.

### Verbal Features

* [VerbForm]() distinguishes the major finite and non-finite verbal forms; [Mood](), [Tense](), [Aspect](), and [Voice]() describe their relevant grammatical categories.
* [Subcat]() distinguishes transitive (`Tran`) and intransitive (`Intr`) verbal lexemes.
* Verbs have one of six values of [Aspect](): `Dur`, `Imp`, `Iter`, `Perf`, `Prog` or `Prosp`.
  * Note, that in Middle Armenian iterative is considered as a lexical feature of verbs, thus they have morphologically related not iterative counterparts, but it is not a regular system and the two verbs are represented by different lemmas. We mark them as biaspectual.
* Finite verbs always have one of five values of [Mood](): `Cnd`, `Imp`, `Ind`, `Nec` or `Sub`.
  * The necessitative mood is used only with the necessitative particle _պիտի_ or the impersonal predicative _պետք է_. The subjunctive finite form of the main verb, that is needed to form a periphrastic necessitative, is not marked with this feature.
* The present and imperfect tenses of the indicative mood that are formed with the auxiliary _կու (կ, կոյ)_/_kow (k, koy)_ are formally identical to the corresponding conditional forms. They cannot be distinguished without context. The negative forms of the present and imperfect tenses of the indicative (as well as the conditional) mood exhibit variation in their formation. Besides the bound negative morpheme չ-/č-, the negation of indicative and conditional moods is formed periphrastically using the special form of main verb (traditionally called _negative participle_) and negated auxiliary _չեմ_ “not to be”. The main verb is marked as [Connegative]().
* Verbs in indicative mood always have one of three values of [Tense](): mainly `Past` and for auxilaries and some content verbs `Pres` or `Imp`.
  * Imperative and necessitative forms do not have the `Tense` feature (note that imperfect and present necessitatives are distinguished analytically).
  * Subjunctve and conditional forms have one of the `Tense=Imp` or `Tense=Pres` features, which are formally imperfect or present, but semantically future.
* There are five values of the [Voice]() feature: `Act`, `Cau`, `Mid`, `Pass`, `Rcp`. Active and causative verbs have `Subcate=Tran`, the other three `Subcate=Intr`.

### Polarity

* [Polarity]() has two values, `Pos` and `Neg`, and applies primarily to verbs ([VERB](), [AUX]()) that can be negated using the bound morpheme _չ-_/_/č-_.
* Occasionally _ոչ_ occurs as an independent negation particle ([PART]()) and is marked with `Polarity=Neg`. The `Polarity=Neg` feature is also used with the necessitative mood particle _(չ)պիտի_/_(č)piti_, and the prohibitive imperative particle _մի_/_mi_.
* The `Polarity=Neg` feature is not used with negated conditional mood, the `Connegative=Yes` feature is used there instead.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()) and adverbs ([ADV]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _իմ_ “my”).
* The [Reflex]() feature marks reflexive pronouns (_իրեն_/_iren_ “himself/herself/itself”, _իրենց_/_irencʼ_ “themselves”) and determiners (_իր_/_ir_ “his/her/its own”, _իրենց_/_irencʼ_ “their own”). It is used together with `PronType=Prs`.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can almost always be interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* There are three [layered features](../../u/overview/feat-layers.html), [Person[psor]](), [Number[psor]]() and [Deixis[psor]]().
  They appear with nouns, infinitives, certain pronouns and adpositions and encode the lexical person/number of the possessor or the position of an entity relative to either the speaker or the hearer. The extra layer is needed to distinguish these lexical features from the inflectional person and number that mark agreement with the modified (possessed) noun.

### Other Features

* Besides the layered features listed above, there are several other language-specific features:
  * [NumForm]()
  * [NameType]()
  * [AdpType]()
  * [ConjType]()
  * [Hyph]()
  * [Style]()
  * [Deixis]()
  * [Echo]()
  * [Typo]()
* The following universal features are not used in Armenian: [Gender](), [Evident]().

## Syntax

This is an overview only. For more detailed discussion and examples, see the list of [Armenian relations](dep/index.html),
as well as Armenian-specific examples scattered across the documentation of constructions.

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * If the noun is quantified in partitive meaning, it may be in the ablative: _Հնչեցին Կոմիտասի երգերից_ “Sounded from songs of Komitas.”
  * An infinitive verb may serve as the subject and is labeled as clausal subject, [csubj]().
    On the other hand, verbal nouns or gerundives as subjects are just `nsubj`.
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
* Objects defined in the Armenain grammar may be bare noun phrases in nominative or dative (as direct objects or “voice objects”) and in dative, ablative, instrumental or locative, or adpositional phrases mainly in dative (as indirect / “objects of nature” or adpositional objects).
  For the purpose of UD the objects are divided to core objects, labeled [obj]() or [iobj]().
  Oblique objects are labeled [obl]().
  * Bare nominative and dative objects are considered core. Verbs that subcategorize for a single dative object are also considered core. Example: _մոտենում էր քաղաքին_ “He was approaching the city.”
  * All adpositional objects are considered oblique.
  * Nominative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().
  * If a verb subcategorizes for the infinitive (e.g. modal verbs or verbs of control), the infinitival complement is labeled [xcomp]().
  * If a verb subcategorizes for two core objects, one of them nominative (or `ccomp`) and the other non-nominative (mainly dative),
    then the non-nominative object is labeled [iobj]().
    Core nominal objects in other situations are labeled just [obj]().
* Adjuncts are usually adpositional phrases, but they can be bare noun phrases as well (following the Armenian grammar, adverbial modifiers are realized as noun phrases). They are labeled [obl]():
  * Temporal or locational modifiers realized as noun phrases: _կեսգիշերին եկավ_ “He came at midnight.”
  * Dative noun phrases with benefactive or possessive role (i.e. if the verb does not subcategorize for a single dative object
    and if it is not a verb of giving (or similar), where the dative could be interpreted as the recipient.
    Example: _նրան սուրճ եփեց_ “he made (for) him coffee.”
  * Instrumental or directional noun phrases expressing the way or means with which something was done or direction from some point.
    Example: _հաճույքով լսում էր_ “He was listening with pleasure.”
  * All adpositional phrases (i.e., their role and form is not defined lexically by the predicate) are adjuncts.
* In passive clauses (both reflexive and reciprocal), the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux]().
  * If the demoted agent is present, it has the form of a bare instrumental or adpositional phrase and its relation is labeled [obl:agent]().
* In causative clauses (both bare and periphrastic causative), the subject is labeled with [nsubj:caus]().
  * The auxiliary verb in periphrastic causative is labeled [aux:caus]().
  * The demoted agent of the action (if present) has the form of a bare dative and is labeled [iobj:agent]. 

### Non-verbal Clauses

* The copula verb _եմ_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
  * Purely existential clauses (without indicating location) normally use different lemmas, _լինել_ or _կամ_, and they are treated as the head of the clause and tagged [VERB]().

### Relations Overview

* The following relation subtypes are used in Armenian:
  * [acl:relcl]() for relative clauses
  * [advcl:relcl]() for relative clause modifiers of clauses
  * [advmod:emph]() for adverbs or particles that modify noun phrases and emphasize or negate them
  * [aux:caus]() for causative auxiliaries
  * [aux:ех]() for existentials as auxiliary
  * [case:loc]() for postpositional localizers
  * [compound:lvc]() for light compound verbs
  * [compound:redup]() for reduplicated compounds
  * [compound:svc]() for serial compound verbs
  * [csubj:outer]() for outer clause clausal subject
  * [csubj:pass]() for clausal subjects of passive verbs
  * [det:poss]() for possessive determiners
  * [iobj:agent]() for agentive indirect objects of causative verbs
  * [nmod:npmod]() for noun phrases
  * [nmod:poss]() for possessive modifiers
  * [nsubj:caus]() for nominal subjects of causative verbs
  * [nsubj:outer]() for outer clause nominal subject
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
* The following relation types are not used in Armenian at all: [clf]()

## Treebanks

There are [two](../treebanks/hy-comparison.html) Eastern Armenian UD treebanks and one treebank in Western Armenian:

  * [Armenian-ArmTDP](../treebanks/hy_armtdp/index.html)
  * [Armenian-BSUT](../treebanks/hy_bsut/index.html)
  * [Western_Armenian-ArmTDP](../treebanks/hyw_armtdp/index.html)

