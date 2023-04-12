---
layout: base
title:  'Spanish UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for Spanish <span class="flagspan"><img class="flag" src="../../flags/svg/ES.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/MX.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/CO.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/PE.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/CL.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/AR.svg" /></span>

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
    Examples: _convertirse = convertir + se_ “to become” (lit. “to convert itself”), _hacerlo_ “to do it”.

## Morphology

### Tags

* Spanish uses all 17 universal POS categories, including particles ([PART]()).
* The only word to be tagged as particle is _no_ “not”.
* TODO: rules for the PRON vs. DET distinction.
* Spanish auxiliary verbs ([AUX]()) are:
  * _ser_ and _estar_ “to be”, used as copulas
  * _ser_ “to be” for the passive (_la sentencia fue publicada_ “the sentence was published”)
  * _estar_ “to be” for the progressive (_mis hijos están estudiando inglés_ “my children are studying English”)
  * _haber_ “to be/have” for the perfect tenses (_ha venido hoy_ “he came today”)
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX](), e.g. _estudiar_ “to study”.
  * Finite verb `Fin`, tagged [VERB]() or [AUX](), e.g. _estudio_ “I study”.
  * Participle `Part`, tagged [VERB](), [AUX]() or [ADJ](), e.g. _estudiado_ “studied”.
  * Gerund `Ger` (Spanish _gerundio_) or present participle, e.g. _estudiando_ “studying”.
    The gerund can be used as a present participle together with the auxiliary _estar_:
    _Adidas está ayudando a limpiar los océanos._ “Adidas is helping to clean up the oceans.”
    It can also be used with a pseudo-copular verb such as _seguir_, in which case it is attached to the pseudo-copula as its [xcomp]():
    _Este gobierno seguirá teniendo que trabajar con él._ “This government will still have to work with him.”
    Finally, it can be used as a converb, in which case it is attached to the main verb as [advcl]():
    _Lo obtiene viendo a sus amigos._ “She obtains it seeing her friends.”

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of two values: `Masc` or `Fem`.
  * The following parts of speech inflect for `Gender` because they must agree with nouns: [ADJ](), [DET]().
    Only a subset of adjectives can inflect for gender, with the suffix _-o_ indicating the masculine
    and _-a_ the feminine. A large group of adjectives (e.g. _grande_ “big” or _feliz_ “happy”)
    have just one form regardless of the gender of the modified noun. These adjectives have the
    gender feature empty.
* The two values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite and participles).
* [Case]() has 4 possible values: `Nom`, `Dat`, `Acc`, `Com`.
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

* Infinitives have only the `VerbForm=Inf` feature.
* Finite verbs always have one of four values of [Mood](): `Ind`, `Imp`, `Sub` and `Cnd`.
* Finite verbs can have one of four values of [Tense](): `Past`, `Imp`, `Pres`, `Fut`.
  * Imperative and conditional forms do not have the `Tense` feature.
    (In Spanish grammar, the conditional is itself often classified as a tense.
    However, it is a mood in Universal Dependencies.)
  * The `Tense` feature is also used with the past participles (_venido_ “come”).
* The [Aspect]() feature is currently not used in Spanish.
  It is not needed for the imperfect past tense because UD has the special value `Tense=Imp`.
  And it is not needed for the perfect tenses because they are constructed periphrastically.
* The [Voice]() feature is not used in Spanish because the passive voice is expressed periphrastically.
* Gerunds have only the `VerbForm=Ger` feature. They do not inflect for gender or number; the suffix is always _-ndo_.
* Participles have `VerbForm=Part`, `Tense=Past`, [Gender]() (`Masc` or `Fem`), and [Number]() (`Sing` or `Plur`).
  The gender and number is annotated also in periphrastic perfect constructions, where the form is obligatorily masculine singular.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()) and determiners ([DET]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()) and determiners ([DET]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _mi_ “my”),
  possessive personal pronouns (e.g. _mío_ “mine”), and
  possessive interrogative or relative determiners (e.g. _cuyo_ “whose”).
* The [Reflex]() feature is always used together with `PronType=Prs` and it marks reflexive pronouns _(me, te, se, nos, os)._
  Note that their forms in the first and second person are ambiguous with irreflexive accusative forms, and the `Reflex` feature
  must be decided by context.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* The [Polite]() feature distinguishes informal second-person pronouns (_tú, vosotros,_ `Polite=Infm`)
  from the formal _usted, ustedes_ (`Polite=Form`).
* There is one [layered feature](../../u/overview/feat-layers.html), [Number[psor]]().
  It appears with possessive determiners and encodes the lexical number of the possessor.
  The extra layer is needed to distinguish this lexical feature from the inflectional number
  that marks agreement with the modified (possessed) noun.

### Other Features

* The following universal features are not used in Spanish: [Animacy](), [Evident]().

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* The dominant word order in Spanish is SVO, but other word orders, especially OVS and SOV, are also possible.
* Nominal subject ([nsubj]()) is a bare noun phrase without preposition.
  If it is a personal pronoun, it must be in the nominative form
  (note however that Spanish is a pro-drop language, where pronominal subjects can be omitted).
  It typically occurs preverbally, but it can occur after the verb as well.
  The morphology of a finite verb (or auxiliary) cross-references the person and number of its subject.
* Direct nominal object ([obj]()) is either a bare noun phrase (for inanimate objects)
  or a prepositional phrase with the preposition _a_ (for animate objects)
  or a personal pronoun in the accusative form.
  Note that the preposition _a_ is otherwise used to mark a range of oblique dependents.
  A nominal with that preposition counts as a core argument only if it is animate and it can be substituted by
  an accusative third-person pronoun _(lo, la, los, las)._ If it would be substituted by a dative pronoun _(le, les)_
  in the context of the given verb, then it is not core, it is oblique.
  * The accusative pronoun is a clitic and its position in the word order is fixed. With finite verbs in indicative
    or subjunctive, it occurs immediately before the verb and is written as a separate word. With imperatives,
    infinitives and gerunds, it occurs immediately after the verb (or after a dative clitic, if both are present),
    and is written together with the verb as one multiword token; we still treat it as a separate syntactic word.
  * The accusative clitic may occur even together with the object noun; this construction is called clitic doubling.
    Both the noun and the clitic are attached directly to the verb. However, the clitic is labeled as the object
    only if the noun is absent. In case of clitic doubling, the noun is attached as [obj]() and the clitic as [expl]()
    (expletive).
* The term ‘indirect object’ is traditionally used in Spanish grammar for the argument that represents the
  recipient or beneficiary of an action. However, these participants are not core arguments (they use oblique
  marking, either a preposition or a dative pronoun), hence they cannot be called indirect objects in UD
  and the relation [iobj]() has no use in Spanish. To distinguish them from temporal and local adjuncts, we
  use the relation [obl:arg]() for the recipients.

~~~conllu
# text = Jorge mató al dragón.
# text_en = George killed the dragon.
1	Jorge	Jorge	PROPN	_	Gender=Masc|Number=Sing	2	nsubj	_	_
2	mató	matar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3-4	al	_	_	_	_	_	_	_	_
3	a	a	ADP	_	_	5	case	_	_
4	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	dragón	dragón	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~

~~~conllu
# text = Jorge lo mató.
# text_en = George killed it.
1	Jorge	Jorge	PROPN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
2	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	mató	matar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~

~~~conllu
# text = El límite sur lo forma la costa.
# text_en = The southern border is formed by the coast.
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	límite	límite	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	_
3	sur	sur	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
4	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
5	forma	formar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	costa	costa	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~

~~~conllu
# text = Mi padre no alquilará su tierra a los irlandeses.
# text_en = My father won't rent his land to the Irish.
1	Mi	mi	DET	_	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	2	det	_	_
2	padre	padre	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	no	no	PART	_	Polarity=Neg	4	advmod	_	_
4	alquilará	alquilar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
5	su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	tierra	tierra	NOUN	_	Gender=Fem|Number=Sing	4	obj	_	_
7	a	a	ADP	_	_	9	case	_	_
8	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	irlandeses	irlandés	NOUN	_	Gender=Masc|Number=Plur	4	obl:arg	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~

~~~conllu
# text = Mi padre no les alquilará su tierra.
# text_en = My father won't rent his land to them.
1	Mi	mi	DET	_	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	2	det	_	_
2	padre	padre	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
3	no	no	PART	_	Polarity=Neg	5	advmod	_	_
4	les	él	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	5	obl:arg	_	_
5	alquilará	alquilar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
6	su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	det	_	_
7	tierra	tierra	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~

~~~conllu
# text = Pedro le dio un libro a María.
# text_en = Pedro gave a book to María.
1	Pedro	Pedro	PROPN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
2	le	él	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	dio	dar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	libro	libro	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
6	a	a	ADP	_	_	7	case	_	_
7	María	María	PROPN	_	Gender=Fem|Number=Sing	3	obl:arg	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~

* Extra attention has to be paid to the reflexive pronoun _se_. It can function as:
  * Core object ([obj]()): _él <b>se</b> vio en el espejo_ “he sighted himself in the mirror.”
  * Dative oblique argument ([obl:arg]()): _ella <b>se</b> dio un regalo_ “she gave herself a gift.”
  * Reciprocal core objects (`obj`): _<b>se</b> besaron_ “they kissed each other.”
  * Reflexive passive ([expl:pass]()): _<b>se</b> celebran los cien años del club_ “hundred years of the club are celebrated” (lit.  “celebrate themselves”);
    _<b>se</b> dice que la escribió en París_ “it is said that he wrote it in Paris.”
  * Inherently reflexive verb, cannot exist without the reflexive clitic, and the clitic cannot be substituted by an irreflexive pronoun
    or a noun phrase. In many cases, an irreflexive counterpart of the verb actually exists but its meaning is different because it
    denotes a different action performed by the agent.
    In accord with the current UD guidelines, we label the relation
    between the verb and the clitic as [expl:pv](), not `compound`. Example: _<b>se</b> trataba de un negocio nuevo_ “the matter is a new contract.”
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass]().

### Non-verbal Clauses

* The copula verbs _ser_ and _estar_ (be) are used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
  * Existential clauses use a different verb, _hay_ (be), and the entity whose existence is asserted is its object:
    _hay algo para comer_ “there is something to eat.”

### Relations Overview

* The following relation subtypes are used in Spanish:
  * [acl:relcl]() for relative clauses
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [aux:pass]() for passive auxiliaries
* The following relation types are not used in Spanish at all:
  [clf](), [dislocated]()

## Treebanks

There are [three](../../treebanks/es-comparison.html) Spanish UD treebanks:

  * [Spanish-GSD](../../treebanks/es_gsd/index.html)
  * [Spanish-AnCora](../../treebanks/es_ancora/index.html)
  * [Spanish-PUD](../../treebanks/es_pud/index.html)
