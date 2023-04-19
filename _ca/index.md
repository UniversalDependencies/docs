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
  * The accusative pronoun is a clitic and its position in the word order is fixed. With finite verbs in indicative
    or subjunctive, it occurs immediately before the verb and is written as a separate word. With imperatives,
    infinitives and gerunds, it occurs immediately after the verb (or after a dative clitic, if both are present),
    and is written together with the verb as one multiword token; we still treat it as a separate syntactic word.
  * The accusative clitic may occur even together with the object noun; this construction is called clitic doubling.
    Both the noun and the clitic are attached directly to the verb. However, the clitic is labeled as the object
    only if the noun is absent. In case of clitic doubling, the noun is attached as [obj]() and the clitic as [expl]()
    (expletive).
* The term ‘indirect object’ is traditionally used in Catalan grammar for the argument that represents the
  recipient or beneficiary of an action. However, these participants are not core arguments (they use oblique
  marking, either a preposition or a dative pronoun), hence they cannot be called indirect objects in UD
  and the relation [iobj]() has no use in Catalan. To distinguish them from temporal and local adjuncts, we
  use the relation [obl:arg]() for the recipients.

~~~conllu
# text = En Jordi va matar el drac.
# text_en = George killed the dragon.
1	En	en	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	Jordi	Jordi	PROPN	_	Gender=Masc|Number=Sing	4	nsubj	_	Gloss=George
3	va	anar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	Gloss=PAST
4	matar	matar	VERB	_	VerbForm=Inf	0	root	_	Gloss=kill
5	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	Gloss=the
6	drac	drac	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	Gloss=dragon|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~

~~~conllu
# text = En Jordi el va matar.
# text_en = George killed it.
1	En	en	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	Jordi	Jordi	PROPN	_	Gender=Masc|Number=Sing	5	nsubj	_	Gloss=George
3	el	ell	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	Gloss=him
4	va	anar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	Gloss=PAST
5	matar	matar	VERB	_	VerbForm=Inf	0	root	_	Gloss=kill|SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~

~~~conllu
# text = Els perjudicis els pateixen els compradors.
# text_en = Damages are borne by the buyers.
1	Els	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	Gloss=the
2	perjudicis	perjudici	NOUN	_	Gender=Masc|Number=Plur	4	obj	_	Gloss=damages
3	els	ell	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	4	expl	_	Gloss=them
4	pateixen	patir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=suffer|SpaceAfter=No
5	els	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	Gloss=the
6	compradors	comprador	NOUN	_	Gender=Masc|Number=Plur	4	nsubj	_	Gloss=buyers|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~

~~~conllu
# text = En Pere va regalar un llibre a la Maria.
# text_en = Pere gave a book to Maria.
1	En	en	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	Pere	Pere	PROPN	_	Gender=Masc|Number=Sing	4	nsubj	_	Gloss=Pere
3	va	anar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	Gloss=PAST
4	regalar	regalar	VERB	_	VerbForm=Inf	0	root	_	Gloss=give
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	Gloss=a
6	llibre	llibre	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	Gloss=book
7	a	a	ADP	_	_	9	case	_	Gloss=to
8	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	Gloss=the
9	Maria	Maria	PROPN	_	Gender=Fem|Number=Sing	4	obl:arg	_	Gloss=Maria|SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~

~~~conllu
# text = En Pere li va regalar un llibre.
# text_en = Pere gave her a book.
1	En	en	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	Pere	Pere	PROPN	_	Gender=Masc|Number=Sing	5	nsubj	_	Gloss=Pere
3	li	ell	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	5	obl:arg	_	Gloss=her
4	va	anar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	Gloss=PAST
5	regalar	regalar	VERB	_	VerbForm=Inf	0	root	_	Gloss=give
6	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Gloss=a
7	llibre	llibre	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	Gloss=book|SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

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

### Subordination

* Instead of a nominal, a clause may act as the subject of another clause.
  Such clausal subjects are attached as [csubj]():

~~~conllu
# text = D'entrada va quedar clar que l'individu no hi tocava gens.
# text_en = From the outset it was clear that the individual was not involved at all.
1	D'	de	ADP	sps00	_	2	case	_	SpaceAfter=No|Gloss=from
2	entrada	entrada	NOUN	ncfs000	Gender=Fem|Number=Sing	4	obl	_	Gloss=outset
3	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	Gloss=PAST
4	quedar	quedar	VERB	vmn0000	VerbForm=Inf	0	root	_	Gloss=remain
5	clar	clar	ADJ	aq0ms0	Gender=Masc|Number=Sing	4	xcomp	_	ArgTem=arg2:atr|Gloss=clear
6	que	que	SCONJ	cs	_	11	mark	_	Gloss=that
7	l'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No|Gloss=the
8	individu	individu	NOUN	ncms000	Gender=Masc|Number=Sing	11	nsubj	_	ArgTem=arg1:tem|Gloss=individual
9	no	no	PART	rn	Polarity=Neg	11	advmod	_	Gloss=not
10	hi	hi	PRON	pp3cn000	Case=Loc|Person=3|PronType=Prs	11	obl	_	Gloss=there
11	tocava	tocar	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	csubj	_	ArgTem=arg1:tem|Gloss=was.playing
12	gens	gens	ADV	rg	_	11	advmod	_	SpaceAfter=No|ArgTem=argM:adv|Gloss=at.all
13	.	.	PUNCT	fp	PunctType=Peri	4	punct	_	Gloss=.

~~~

* Some verbs take clauses as complements and these clauses alternate with direct objects (nouns or pronouns).
  Such clausal complements are attached as [ccomp]():

~~~conllu
# text = La professora ha reiterat que considera que Arola i Igual van prevaricar.
# text_en = The teacher has reiterated that she considers that Arola and Igual committed fraud.
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	professora	professora	NOUN	ncfs000	Gender=Fem|Number=Sing	4	nsubj	_	ArgTem=arg0:agt|Gloss=teacher
3	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	Gloss=has
4	reiterat	reiterar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Gloss=reiterated
5	que	que	SCONJ	cs	_	6	mark	_	Gloss=that
6	considera	considerar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp	_	ArgTem=arg1:pat|Gloss=considers
7	que	que	SCONJ	cs	_	12	mark	_	Gloss=that
8	Arola	Arola	PROPN	np0000p	_	12	nsubj	_	ArgTem=arg0:agt|Gloss=Arola
9	i	i	CCONJ	cc	_	10	cc	_	Gloss=and
10	Igual	Igual	PROPN	np0000p	_	8	conj	_	Gloss=Igual
11	van	anar	AUX	vaip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	Gloss=PAST
12	prevaricar	prevaricar	VERB	vmn0000	VerbForm=Inf	6	ccomp	_	SpaceAfter=No|ArgTem=arg1:pat|Gloss=commit.fraud
13	.	.	PUNCT	fp	PunctType=Peri	4	punct	_	Gloss=.

~~~

~~~conllu
# text = La professora ho ha reiterat.
# text_en = The teacher has reiterated it.
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	professora	professora	NOUN	ncfs000	Gender=Fem|Number=Sing	5	nsubj	_	ArgTem=arg0:agt|Gloss=teacher
3	ho	ell	PRON	pp3nn000	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	obj	_	ArgTem=arg2:pat|Gloss=it
4	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	Gloss=has
5	reiterat	reiterar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No|Gloss=reiterated
6	.	.	PUNCT	fp	PunctType=Peri	5	punct	_	Gloss=.

~~~

* Clauses that modify other clauses but do not correspond to core arguments are called adverbial ([advcl]()),
  but the class is broader than what non-UD theories may recognize as adverbial clauses. They are clausal
  counterparts of oblique nominals and adverbs.

~~~conllu
# text = Els arbres existents es traslladaran mentre duri la urbanització.
# text_en = The existing trees will be moved for the duration of the development.
1	Els	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	Gloss=the
2	arbres	arbre	NOUN	ncmp000	Gender=Masc|Number=Plur	5	nsubj	_	ArgTem=arg1:pat|Gloss=trees
3	existents	existent	ADJ	aq0cp0	Number=Plur	2	amod	_	Gloss=existing
4	es	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	5	expl:pass	_	Gloss=themselves
5	traslladaran	traslladar	VERB	vmif3p0	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	Gloss=will.move
6	mentre	mentre	SCONJ	cs	_	7	mark	_	Gloss=while
7	duri	durar	VERB	vmsp3s0	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	advcl	_	ArgTem=argM:tmp|Gloss=lasts
8	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	Gloss=the
9	urbanització	urbanització	NOUN	ncfs000	Gender=Fem|Number=Sing	7	nsubj	_	SpaceAfter=No|ArgTem=arg1:tem|Gloss=development
10	.	.	PUNCT	fp	PunctType=Peri	5	punct	_	Gloss=.

~~~

* Clauses that modify nominals are called adnominal ([acl]()). They are clausal counterparts of [nmod]()
  and [amod]().

~~~conllu
# text = La UdG ha manifestat la voluntat que els premis tinguin continuïtat.
# text_en = The UdG has expressed its desire for the awards to have continuity.
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	UdG	UdG	PROPN	np0000o	_	4	nsubj	_	ArgTem=arg0:agt|Gloss=UdG
3	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	Gloss=has
4	manifestat	manifestar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Gloss=expressed
5	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	Gloss=the
6	voluntat	voluntat	NOUN	ncfs000	Gender=Fem|Number=Sing	4	obj	_	ArgTem=arg1:pat|Gloss=desire
7	que	que	SCONJ	cs	_	10	mark	_	Gloss=that
8	els	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	Gloss=the
9	premis	premi	NOUN	ncmp000	Gender=Masc|Number=Plur	10	nsubj	_	ArgTem=arg1:tem|Gloss=awards
10	tinguin	tenir	VERB	vmsp3p0	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	Gloss=have
11	continuïtat	continuïtat	NOUN	ncfs000	Gender=Fem|Number=Sing	10	obj	_	SpaceAfter=No|ArgTem=arg2:atr|Gloss=continuity
12	.	.	PUNCT	fp	PunctType=Peri	4	punct	_	Gloss=.

~~~

* A special type of adnominal clause is the relative clause. It contains the relative pronoun _que_
  (that is, _que_ is not a subordinating conjunction here), which has the same referent as the nominal
  modified by the clause. The relation subtype [acl:relcl]() is used for relative clauses.

~~~conllu
# text = Els grans blocs que uneixen els pilons han estat fabricats a Cadis.
# text_en = The large blocks that join the pylons have been manufactured in Cádiz.
1	Els	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	Gloss=the
2	grans	gran	ADJ	aq0cp0	Number=Plur	3	amod	_	Gloss=large
3	blocs	bloc	NOUN	ncmp000	Gender=Masc|Number=Plur	10	nsubj	_	ArgTem=arg1:pat|Gloss=blocks
4	que	que	PRON	pr0cn000	PronType=Rel	5	nsubj	_	ArgTem=arg0:agt|Gloss=that
5	uneixen	unir	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	Gloss=join
6	els	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	Gloss=the
7	pilons	piló	NOUN	ncmp000	Gender=Masc|Number=Plur	5	obj	_	ArgTem=arg1:tem|Gloss=pylons
8	han	haver	AUX	vaip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	Gloss=have
9	estat	ser	AUX	vsp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	aux	_	Gloss=been
10	fabricats	fabricar	VERB	vmp00pm	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	Gloss=manufactured
11	a	a	ADP	sps00	_	12	case	_	Gloss=in
12	Cadis	Cadis	PROPN	np0000l	_	10	obl	_	SpaceAfter=No|ArgTem=argM:loc|Gloss=Cádiz
13	.	.	PUNCT	fp	PunctType=Peri	10	punct	_	Gloss=.

~~~

* There is a productive construction in which an article governs a relative clause. Together they
  fill any slot in the superordinate clause that allows a nominal. Formally the slot is filled by
  the article, hence if the slot corresponds to an object of a verb, the article is attached as [obj]()
  but the clause is not attached as [ccomp](). The clause formally modifies a nominal (the article),
  in the same way in which relative clauses are constructed, so the relation between the article and
  the subordinate clause is [acl:relcl](). If the governing article is definite _(el, la, els, les),_
  it corresponds to English “the one”; if it is indefinite _(un, una),_ it corresponds to “one”.
  Note that the same analysis would also arise if we posited an elided noun and the promotion of the
  article to the head position; in the example below, the article in fact represents the nominal
  _els futbolistes_ “the footballers”, which can be inferred from the preceding sentence in the corpus.

~~~conllu
# text = També afavoreix els que procedeixen de les excolònies espanyoles.
# text_en = It also favors those who come from the former Spanish colonies.
1	També	també	ADV	rg	_	2	advmod	_	Gloss=also
2	afavoreix	afavorir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=favors
3	els	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	obj	_	Gloss=those
4	que	que	PRON	pr0cn000	PronType=Rel	5	nsubj	_	ArgTem=arg1:tem|Gloss=who
5	procedeixen	procedir	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	Gloss=come
6	de	de	ADP	sps00	_	8	case	_	Gloss=from
7	les	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	Gloss=the
8	excolònies	excolònia	NOUN	nc00000	Gender=Fem|Number=Plur	5	obl:arg	_	ArgTem=arg2:loc|Gloss=former-colonies
9	espanyoles	espanyol	ADJ	aq0fp0	Gender=Fem|Number=Plur	8	amod	_	Gloss=Spanish
10	.	.	PUNCT	fp	PunctType=Peri	2	punct	_	Gloss=.

~~~

* If a verb expects another predicate (i.e., clause) as complement and the subject of the subordinate
  clause is obligatorily coreferential with an argument (subject or object) of the main verb, then the
  relation between the two verbs is [xcomp](). The subordinate verb is typically (but not necessarily)
  infinitive, sometimes accompanied with a preposition selected by the main verb. Such complements are
  considered core arguments but they do not necessarily alternate with a direct nominal object; in fact,
  for certain main verbs they occur together with an object, which is the argument that the subject of
  the `xcomp` clause is coreferential with.
  * In some cases the traditional grammar may list a verb as auxiliary but it does not fit in the more
    narrow definition of auxiliaries in UD and is analyzed as the main verb of an `xcomp` construction.
  * The `xcomp` relation is also used for certain cases of secondary predication (except for optional
    depictives, for which [advcl]() is used). Secondary predication is often realized using a nominal
    or an adjective that makes additional claims about the subject (how it looked during the main
    action, what it became as a result of the action etc.)
  * In some cases the traditional grammar may list a verb as a (pseudo-)copula but it cannot be a copula
    in UD (where only _ser_ and _estar_ have the copula status). Instead, the putative copula is analyzed
    as the main verb in an `xcomp` construction.

~~~conllu
# text = La víctima va aconseguir fer-lo desistir en oposar resistència a mossegades.
# text_en = The victim managed to make him give up by resisting bites.
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	víctima	víctima	NOUN	ncfs000	Gender=Fem|Number=Sing	4	nsubj	_	ArgTem=arg0:agt|Gloss=victim
3	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	Gloss=PAST
4	aconseguir	aconseguir	VERB	vmn0000	VerbForm=Inf	0	root	_	Gloss=manage
5-6	fer-lo	_	_	_	_	_	_	_	_
5	fer	fer	VERB	vmn0000	VerbForm=Inf	4	xcomp	_	ArgTem=arg1:pat|Gloss=make
6	lo	ell	PRON	pp3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	ArgTem=arg1:pat|Gloss=him
7	desistir	desistir	VERB	vmn0000	VerbForm=Inf	5	xcomp	_	Gloss=give.up
8	en	en	ADP	sps00	_	9	mark	_	Gloss=by
9	oposar	oposar	VERB	vmn0000	VerbForm=Inf	4	advcl	_	ArgTem=argM:adv|Gloss=put.up
10	resistència	resistència	NOUN	ncfs000	Gender=Fem|Number=Sing	9	obj	_	ArgTem=arg1:pat|Gloss=resistence
11	a	a	ADP	sps00	_	12	case	_	Gloss=to
12	mossegades	mossegada	NOUN	ncfp000	Gender=Fem|Number=Plur	9	obl	_	SpaceAfter=No|ArgTem=argM:mnr|Gloss=bites
13	.	.	PUNCT	fp	PunctType=Peri	4	punct	_	Gloss=.

~~~

~~~conllu
# text = L'any 1966 va començar a treballar a la Diputació.
# text_en = In 1966 he started working at the Provincial Council.
1	L'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No|Gloss=the
2	any	any	NOUN	_	_	5	obl	_	ArgTem=argM:tmp|Gloss=year
3	1966	1966	NUM	_	NumForm=Digit|NumType=Card	2	nmod	_	Gloss=1966
4	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	Gloss=PAST
5	començar	començar	VERB	vmn0000	VerbForm=Inf	0	root	_	Gloss=start
6	a	a	ADP	sps00	_	7	mark	_	Gloss=to
7	treballar	treballar	VERB	vmn0000	VerbForm=Inf	5	xcomp	_	Gloss=work
8	a	a	ADP	sps00	_	10	case	_	Gloss=at
9	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	Gloss=the
10	Diputació	Diputació	PROPN	np0000o	_	5	obl	_	SpaceAfter=No|ArgTem=argM:loc|Gloss=Provincial.Council
11	.	.	PUNCT	fp	PunctType=Peri	5	punct	_	Gloss=.

~~~

~~~conllu
# text = La frontera entre una cosa i l'altra sembla clara.
# text_en = The border between one thing and the other seems clear.
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	frontera	frontera	NOUN	ncfs000	Gender=Fem|Number=Sing	9	nsubj	_	ArgTem=arg1:tem|Gloss=border
3	entre	entre	ADP	sps00	_	5	case	_	Gloss=between
4	una	un	DET	di0fs0	Gender=Fem|Number=Sing|PronType=Ind	5	det	_	Gloss=one
5	cosa	cosa	NOUN	ncfs000	Gender=Fem|Number=Sing	2	nmod	_	Gloss=thing
6	i	i	CCONJ	cc	_	8	cc	_	Gloss=and
7	l'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No|Gloss=the
8	altra	altre	PRON	pi0fs000	Gender=Fem|Number=Sing|PronType=Ind	5	conj	_	Gloss=other
9	sembla	semblar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=seems
10	clara	clar	ADJ	aq0fs0	Gender=Fem|Number=Sing	9	xcomp	_	SpaceAfter=No|ArgTem=arg2:atr|Gloss=clear
11	.	.	PUNCT	fp	PunctType=Peri	9	punct	_	Gloss=.

~~~

### Relations Overview

* The following relation subtypes are used in Catalan:
  * [acl:relcl]() for relative clauses
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [aux:pass]() for passive auxiliaries
* The following relation types are not used in Catalan at all:
  [clf](), [dislocated](), [iobj]()

## Treebanks

There is one Catalan UD treebank:

  * [Catalan](../../treebanks/ca-index.html)

[Spanish-Catalan comparison](../../treebanks/es-ca-comparison.html)
