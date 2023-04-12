---
layout: base
title:  'Catalan UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for Catalan <span class="flagspan"><img class="flag" src="../../flags/svg/ES-CT.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word.
  We usually tokenize them as separate tokens (words)
  with the exception of abbreviations such as _etc._ “etc.” which are kept as one token with the period.
* There are two main classes of multi-word tokens:
  * Contractions of prepositions and definite articles.
    Example: _al = a + el_ “to the”, _del = de + el_ “of the”.
  * Certain verb forms (infinitives, imperatives, present participles) are writen together with
    object clitic pronouns, while with other verb forms the clitics are written as separate words.
    Examples: _convertir-se = convertir + se_ “to become” (lit. “to convert itself”), _fer-ho_ “to do it”.
    Since the verb-clitic combination is written with a hyphen in Catalan, it could be split during the low-level tokenization.
    However, we treat it as a multi-word token to emphasize parallelism with Spanish, where it is written as one word.

## Morphology

### Tags

* Catalan uses all 17 universal POS categories, including particles ([PART]()).
* The only word to be tagged as particle is _no_ “not”.
* TODO: rules for the PRON vs. DET distinction.
* Catalan auxiliary verbs ([AUX]()) are:
  * _ser_ and _estar_ “to be”, used as copulas
  * _ser_ “to be” for the passive (_la guia va ser presentada_ “the guide was presented”)
  * _estar_ “to be” for the progressive (_la globalització està causant els canvis_ “globalization is causing changes”)
  * _haver_ “to be” for the perfect tenses (_¿Què ha passat?_ “What happened?”)
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX](), e.g. _estudiar_ “to study”.
  * Finite verb `Fin`, tagged [VERB]() or [AUX](), e.g. _estudiarem_ “we will study”.
  * Participle `Part`, tagged [VERB]() or [AUX](), e.g. _estudiat_ “studied”.
  * Gerund `Ger` (Catalan _gerundio_) or present participle, e.g. _estudiant_ “studying”.

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of two values: `Masc` or `Fem`.
  * The following parts of speech inflect for `Gender` because they must agree with nouns: [ADJ](), [DET]().
    Only a subset of adjectives can inflect for gender. A large group of adjectives (e.g. _firal_ “fair” or _gran_ “big”)
    have just one form regardless of the gender of the modified noun. These adjectives have the
    gender feature empty.
* The two values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite and participles).
* [Case]() has three possible values: `Nom`, `Dat`, `Acc`.
  It occurs only with personal pronouns ([PRON]()).
  The “case” (i.e., role w.r.t. predicates or other phrases) of other nominals is expressed using prepositions, not morphologically.
* [Definite]() has 2 values: `Ind`, `Def`. It is used to distinguish the indefinite and definite articles ([DET]()).

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Abs`.
  The absolute superlative is marked morphologically on adjectives.
  Otherwise, the comparative and superlative of most adjectives is formed periphrastically,
  and `Degree=Cmp` is only used with a few irregular forms.
* [Polarity]() is used to mark the negative particle _no,_ i.e., only the `Neg` value is used.

### Verbal Features

* Finite verbs always have one of four values of [Mood](): `Ind`, `Imp`, `Sub` and `Cnd`.
* Finite verbs can have one of four values of [Tense](): `Past`, `Imp`, `Pres`, `Fut`.
  * Imperative and conditional forms do not have the `Tense` feature.
    (In Catalan grammar, the conditional is itself often classified as a tense.
    However, it is a mood in Universal Dependencies.)
  * The `Tense` feature is also used with the past participles (_venido_ “come”).
* The [Aspect]() feature is currently not used in Catalan.
  It is not needed for the imperfect past tense because UD has the special value `Tense=Imp`.
  And it is not needed for the perfect tenses because they are constructed periphrastically.
* The [Voice]() feature is not used in Catalan because the passive voice is expressed periphrastically.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()) and determiners ([DET]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()) and determiners ([DET]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _meu_ “my”),
  possessive personal pronouns (e.g. _meva_ “mine”).
* The [Reflex]() feature is always used together with `PronType=Prs` and it marks reflexive pronouns.
  Note that their forms in the first and second person are ambiguous with irreflexive accusative forms, and the `Reflex` feature
  must be decided by context.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* The [Polite]() feature distinguishes informal second-person pronouns (_tu, vosaltres,_ `Polite=Infm`)
  from the formal _vostè, vostès_ (`Polite=Form`).
* There is one [layered feature](../../u/overview/feat-layers.html), [Number[psor]]().
  It appears with possessive determiners and encodes the lexical number of the possessor.
  The extra layer is needed to distinguish this lexical feature from the inflectional number
  that marks agreement with the modified (possessed) noun.

### Other Features

* The following universal features are not used in Catalan: [Animacy](), [Evident]().

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* The dominant word order in Catalan is SVO, but other word orders, especially SOV and OVS, are also possible.
* Nominal subject ([nsubj]()) is a bare noun phrase without preposition.
  If it is a personal pronoun, it must be in the nominative form
  (note however that Catalan is a pro-drop language, where pronominal subjects can be omitted).
  It typically occurs preverbally, but it can occur after the verb as well.
  The morphology of a finite verb (or auxiliary) cross-references the person and number of its subject.
* Direct nominal object ([obj]()) is either a bare noun phrase
  or a personal pronoun in the accusative form.

~~~conllu
# text = Jordi va matar el drac.
# text_en = George killed the dragon.
1	Jordi	Jordi	PROPN	_	Gender=Masc|Number=Sing	3	nsubj	_	Gloss=George
2	va	anar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	Gloss=PAST
3	matar	matar	VERB	_	VerbForm=Inf	0	root	_	Gloss=kill
4	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Gloss=the
5	drac	drac	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	Gloss=dragon|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~

~~~conllu
# text = Jordi el va matar.
# text_en = George killed it.
1	Jordi	Jordi	PROPN	_	Gender=Masc|Number=Sing	4	nsubj	_	Gloss=George
2	el	ell	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obj	_	Gloss=him
3	va	anar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	Gloss=PAST
4	matar	matar	VERB	_	VerbForm=Inf	0	root	_	Gloss=kill|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~

* Extra attention has to be paid to the reflexive pronoun _es_. It can function as:
  * Core object ([obj]()): _<b>es</b> va veure al mirall_ “he sighted himself in the mirror.”
  * Reciprocal core objects (`obj`): _<b>es</b> van besar_ “they kissed each other.”
  * Reflexive passive ([expl:pass]()): _<b>s'</b>ha ofert una atenció psicològica a les persones afectades_ “psychological attention has been offered to the people affected” (lit.  “offered itself”).
  * Inherently reflexive verb, cannot exist without the reflexive clitic, and the clitic cannot be substituted by an irreflexive pronoun
    or a noun phrase. In many cases, an irreflexive counterpart of the verb actually exists but its meaning is different because it
    denotes a different action performed by the agent.
    In accord with the current UD guidelines, we label the relation
    between the verb and the clitic as [expl:pv](), not `compound`. Example: _<b>es</b> tracta d'una immigració_ “the matter is immigration;”
    _<b>s'</b>havia de riure_ “he had to laugh.”
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass]().

### Non-verbal Clauses

* The copula verbs _ser_ and _estar_ (be) are used in equational, attributional, locative, possessive and benefactory nonverbal clauses.

### Relations Overview

* The following relation subtypes are used in Catalan:
  * [acl:relcl]() for relative clauses
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [aux:pass]() for passive auxiliaries
* The following relation types are not used in Catalan at all:
  [clf](), [dislocated]()

## Treebanks

There is one Catalan UD treebank:

  * [Catalan](../../treebanks/ca-index.html)

[Spanish-Catalan comparison](../../treebanks/es-ca-comparison.html)
