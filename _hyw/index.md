---
layout: base
title:  'Western Armenian UD'
udver: '2'
---

# UD for Western Armenian <span class="flagspan"><img class="flag" src="../../flags/svg/AM.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, a punctuation mark is attached to a neighbouring (usually following) word. Punctuation marks are usually tokenised as separate tokens (words), unless they are considered an integral part of the lemma (as in _2-րդ_ “2nd”, _44-օրեայ_ “44-day”, or _85-ամեայ_ “85th anniversary”). On the other hand, hyphens in constructions such as _ռուսա-իրանա-սուրիական_ “Russian-Iranian-Syrian” or before inflectional endings (as in _96-ի_ “of 96.Dat”, _1956-ին_ “in 1956.Dat”, _196-ամեակի_ “196th anniversary.Dat” ) are treated as separate tokens.
* A whitespace separating digits in a large number is not treated as a word separator. For example, _1 000 000_ (“1,000,000” by English rules) is one token. (However, such tokens do not occur in Western Armenian treebanks as of release 2.8.)
* There are two classes of “orthographic words” (sequences of letters without spaces inside) that are split into several syntactic tokens.
  * The most prominent type is so-called “infixed punctuation”, i.e. words containing question, exclamation, emphasis and Armenian abbreviation marks, as in _ինչպէ՞ս = ինչպէս + ՞_ “How?”, are treated as multi-word tokens and segmented to individual syntactic words.
  * Orthographic words of the other class consist of a indicative or negative particles _կ՚_ and _չ՚_ (followed by a vocal and treated as auxiliaries), as in _կ՚այցելեմ = կ՚ + այցելեմ_ “(I am) visiting” and _չ՚ուզեր = չի + ուզեր_ “(He/She) does not want”.
* For more details, see [tokenization](tokenization.html).

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Armenian POS tags](pos/index.html)
and [Armenian features](feat/index.html).

* Western Armenian uses all 17 universal POS categories, including particles ([PART]()).
* The tag [DET]() is used for articles and pronominal words used with a determiner function, including possessives (the traditional grammar does not define determiners, but distinguishes pronominal modifiers). The tag [PRON]() is reserved for pronouns occurring as the head of a noun phrase. Pronominal quantifiers (which the traditional grammar includes in pronouns) are [DET]() as well.

### Nominal Features

### Verbal Features

### Polarity

### Pronouns, Determiners, Quantifiers

### Other Features

* The following universal features are not used in Armenian: [Gender](), [Evident]().

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

### Non-verbal Clauses

### Relations Overview

## Treebanks

There is just one Western Armenian UD treebank.

  * [Western_Armenian-ArmTDP](../treebanks/hyw_armtdp/index.html)



------------------------------------------------------------------


# UD for Armenian (Eastern) <span class="flagspan"><img class="flag" src="../../flags/svg/AM.svg" /></span>

## Morphology

### Tags

* Eastern Armenian has one auxiliary verb ([AUX]()), _եմ_ (“to be”), but the lemma _լինել_ is also possible.
  This is in fact just an aspectual variant of _եմ_, but this is a separate lemma because
  the morphological process that relates it to _եմ_ is considered derivational. There is another auxiliary _տալ_ (“cause/make someone to perform action”) for periphrastic causatives.
  Auxiliaries are all verbal in Eastern Armenian and can be grouped into three types:
  * The copula with non-verbal predicates.
  * Periphrastic present tense (present form of _եմ_ + resultative participle of the main verb).
  * Periphrastic past tense (present form of _եմ_ + perfect of the main verb; imperfect form of _եմ_ + imperfective, perfect, future-I and resultative participles of the main verb).
  * Periphrastic future tense (present form of _եմ_ + future-I participle of the main verb).
  * Periphrastic negated conditional (negated present or imperfect form of _եմ_ + connegative form of the main verb).
  * Periphrastic “secondary compound tenses” (any form of _լինել_, including periphrastic forms, + processual, resultative and future-I participles of the main verb).
  * Periphrastic causative (any form of _տալ_, including periphrastic forms, + infinitve of the main verb).
* In other words, _եմ, լինել_ and _տալ_ are the only lemmas that occur with the [AUX]() tag (Exception: finite existentials _կամ_ and _ունեմ_ in combination with resultative participle).
  Note, that _եմ_ and _լինել_ may also occur as normal [VERB]() if they are used in purely existential sentences
  (i.e. they don't indicate location because if they do, then _եմ_ and _լինել_ will be treated as copula).
* Verbs with modal meaning are not considered to be auxiliaries in Armenian.
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]() (in so-called “secondary compound tenses”).
  * Converb `Conv`, tagged [VERB]() or [AUX]().
  * Gerundive `Gdv`, tagged [VERB]() or [AUX]().
  * Verbal noun `Vnoun`, tagged [NOUN]().
* Though the resultative, subject and future-I participles can be used adjectivally and can be negated they are generally tagged [VERB](). The only exception is future-II participles, they are tagged [ADJ]().

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and some of [PRON]()) have an inherent [Animacy]() feature with one of three values: `Hum`, `Nhum`. Note that this may be changed in future. Nominal words could be treated as having inherent `Hum`, `Nhum` and further would be subclassified by the layered `Animacy[gram]` values `Anim` vs. `Inan`.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [VERB](), [AUX]() (finite).
  * Selected nouns are plurale tantum (`Ptan`) or singulare tantum (`Coll`). These two values are lexical, and cannot be used with
    the agreeing verbs. They also never occur with pronouns. `Coll` occurs with gerundives.
  * There is a language-specific value `Assoc` (associative plural). This is also lexical and occurs with `NOUN` and `PROPN`. Some of pronouns (_մերոնք, ձերոնք, իմոնք, քոնոնք_) are also associative.
* [Case]() has 6 possible values: `Nom`, `Gen`, `Dat`, `Abl`, `Ins`, `Loc`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [DET](), and gerundives. Note, that `Gen` occurs only with pronouns and determiners.
  * The `Case` feature also occurs with some of adpositions, subclassified as “localizers” ([ADP]()). It is an inflectional feature here.
* The two main values of the [Definite]() feature are `Def` and `Ind`. The following parts of speech inflect for definitness:
  [NOUN](), [PROPN](), [PRON](). With gerundives, resultative and subject participles the feature sometimes encodes the lexical person of the possessor, although they can be almost interpreted as the 3rd person. We mark them as `Def` (see the layered features below).
* [Degree]() applies to adjectives ([ADJ]()) and some adverbs ([ADV]()) and has one of four possible values: `Pos`, `Cmp`, `Sup`, `Abs`.

### Verbal Features

* Verbs have a lexical [Subcat](), either intransitive (`Intr`) or transitive (`Tran`).
* Verbs have one of six values of [Aspect](): `Dur`, `Imp`, `Iter`, `Perf`, `Prog` or `Prosp`.
  * Note, that in Armenian iterative is considered as a lexical feature of verbs, thus they have morphologically related not iterative counterparts, but it is not a regular system and the two verbs are represented by different lemmas. We mark them as biaspectual.
  * The `Aspect` feature should be also used with the corresponding deverbatives, if they have the `VerbForm` feature.
* Finite verbs always have one of five values of [Mood](): `Cnd`, `Imp`, `Ind`, `Nec` of `Sub`.
  * The necessitative mood is only used with necessitative particle _պիտի_ or the impersonal predicative _պետք է_. The subjuncitve finite form of the main verb, that is needed to form a periphrastic necessitative, is not marked with this feature.
  * The negated conditional mood is only used with indicative auxiliaries _(եմ, էի)_. The connegative of the main verb, that is needed to form a periphrastic negated conditional, is also marked with this feature.
* Verbs in indicative mood always have one of three values of [Tense](): mainly `Past` and for auxilaries and some content verbs `Pres` or `Imp`.
  * Imperative and necessitative forms do not have the `Tense` feature (note that imperfect and present necessitatives are distinguished
    analytically).
  * Subjunctve and conditional forms have one of the `Tense=Imp` or `Tense=Pres` features, which are formally imperfect or present, but semantically future.
  * There are five values of the [Voice]() feature: `Act`, `Cau`, `Mid`, `Pass`, `Rcp`. Active and causative verbs have `Subcate=Tran`, the other three `Subcate=Intr`.

### Polarity

* [Polarity]() has two values, `Pos` and `Neg`, and applies primarily to verbs ([VERB](), [AUX]()) that can be negated using the bound morpheme _չ-_.
  * Occasionally _ոչ_ occurs as an independent negation particle ([PART]()) and is marked with `Polarity=Neg`. The `Polarity=Neg` feature is also used with necessitative mood particles _(չ)պիտի, (չ)պետք է_ .
  * Negating nouns are usually limited to those derived from verbs _(չունեցողի, չգրվածները)_.
  * The `Polarity` feature is not used with pronouns and determiners, although there is a subset of negative pronouns and determiners.
    The `PronType=Neg` feature is used there instead.
  * The `Polarity=Neg` feature is not used with negated conditional mood, the `Connegative=Yes` feature is used there instead.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()) and adverbs ([ADV]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _իմ_ “my”),
  possessive interrogative, relative determiners (e.g. _ում, որի_ “whose”),
  possessive nouns (e.g. _հայրիկինը_ “father's”)
  and possessive adjectives (e.g. _հայոց_ “armenian, armenians’, refer to armenians”).
* The [Reflex]() feature marks reflexive pronouns _(ինձ, քեզ, իրեն, մեզ, ձեզ, իրենց)_ and determiners _(իր, իրենց)_.
  In Armenian it is always used together with `PronType=Emp` or `PronType=Prs`.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can almost always be interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* The [Polite]() feature distinguishes informal second-person pronouns (_դու, դուք,_ `Polite=Infm`)
  from the formal _Դուք_ (`Polite=Form`).
  The formal pronoun is phonologically equivalent in all its case forms to the second-person plural _դուք_
  but it is distinguished in orthography by the capital letter _Դ._
  We tag it as second person (because that is its meaning) and we tag also its number (it is used for singular addressees) despite the fact that it combines with second-person plural verbs.
  The parser must learn that `Number=Sing|Person=2|Polite=Form` subject attaches to `Number=Plur|Person=2` verbs,
  while `Number=Sing|Person=2|Polite=Infm` subject attaches to `Number=Sing|Person=2` verbs.
* There are two [layered features](../../u/overview/feat-layers.html), [Person[psor]]() and [Number[psor]]().
  They appear with nouns, gerundives, certain determiners and adpositions and encode the lexical person(deixis)/number of the possessor. The extra layer is needed to distinguish these lexical features from the inflectional person and number
  that mark agreement with the modified (possessed) noun.

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
  * [advmod:emph]() for adverbs or particles that modify noun phrases and emphasize or negate them
  * [aux:caus]() for causative auxiliaries
  * [aux:ех]() for existentials as auxiliary
  * [case:loc]() for postpositional localizers
  * [compound:lvc]() for light compound verbs
  * [compound:redup]() for reduplicated compounds
  * [compound:svc]() for serial compound verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [det:poss]() for possessive determiners
  * [iobj:agent]() for agentive indirect objects of causative verbs
  * [nmod:npmod]() for noun phrases
  * [nmod:poss]() for possessive modifiers
  * [nsubj:caus]() for nominal subjects of causative verbs
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
* The following relation types are not used in Armenian at all:
  [clf]()

## Treebanks

There is just one Eastern Armenian UD treebank.

  * [Armenian-ArmTDP](../treebanks/hy_armtdp/index.html)
