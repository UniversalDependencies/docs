---
layout: base
title:  'Working Group on Core Arguments'
udver: '2'
---

# Working Group on Core Arguments

Most of this chapter focuses on arguments of [verbs](/u/pos/VERB.html).
Some similar patterns of other parts of speech are discussed [at the end of the chapter](#can-adjectives-have-core-arguments).

Most of this chapter assumes that the arguments are [nominal](/u/pos/NOUN.html) phrases.
Arguments realized as clauses are discussed [at the end of the chapter](#clausal-complements).

<span style='color:red'>TO DO: write most of the chapter :-)</span>



## Can Adjectives Have Core Arguments?

Under certain circumstances, yes.
One possibility is that the adjective is used as a non-verbal predicate, possibly
with a copula. Then it usually has a subject child ([nsubj](/u/dep/nsubj.html) or
[csubj](/u/dep/csubj.html)).

[en] _Mary has been very kind to us._
`nsubj(kind, Mary)`

[Participles](/u/feat/VerbForm.html#Part)
may be tagged as either [verbs](/u/pos/VERB.html) or [adjectives](/u/pos/ADJ.html).
In both cases they retain certain features that are normally associated with
verbs. If a participle is derived from a transitive verb and tagged `ADJ`,
we have an adjective with [object](/u/dep/obj.html):

[cs] _Řidič opravující auto musí mít reflexní vestu._
“A driver repairing a car must wear a reflective vest.”
`amod(Řidič, opravující)`
`obj(opravující, auto)`

It is unusual for a non-participial adjective to have a core object. One English
example is _worth_, as in

[en] _It is worth $10._

~~~ conllu
# text = It is worth $10.
1	It	it	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	worth	worth	ADJ	_	_	0	root	_	_
4	$	$	SYM	_	_	3	obj	_	SpaceAfter=No
5	10	10	NUM	_	_	4	nummod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~

(At least this analysis occurs in UD English EWT 2.2. The putative object resembles
objects of verbs in that it is obligatory and it is a bare nominal, without
a preposition. However, it is still not treated as an object of a verb, and
the clause is not transitive. There is no passivization pattern that would promote
the object _($10)_ to the subject position, and remove the original subject _(it)._)

Attributively used adjectives (regardless whether they are participles or not)
do not have subjects.

Related issues:

* [#308 Tough adjectives](https://github.com/UniversalDependencies/docs/issues/308)



## Can Adverbs Have Core Arguments?

Under certain circumstances, yes.
One possibility is that the adverb is used as a non-verbal predicate (typically indicating a location), possibly
with a copula. Then it usually has a subject child ([nsubj](/u/dep/nsubj.html) or
[csubj](/u/dep/csubj.html)).

[en] _We can be outside._

~~~ conllu
# text = We can be outside.
1	We	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
2	can	can	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	be	be	AUX	_	VerbForm=Inf	4	cop	_	_
4	outside	outside	ADV	_	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~

[Converbs](/u/feat/VerbForm.html#Conv)
may be tagged as either [verbs](/u/pos/VERB.html) or [adverbs](/u/pos/ADV.html).
In both cases they retain certain features that are normally associated with
verbs. If a converb is derived from a transitive verb and tagged `ADV`,
we have an adverb with [object](/u/dep/obj.html).

Being non-finite forms, converbs do not have subjects.

There are currently no examples of adverbs that are not converbs and have objects.



## Can Nouns Have Core Arguments?

No, with one exception.
The noun may be used as a non-verbal predicate, possibly
with a copula. Then it usually has a subject child ([nsubj](/u/dep/nsubj.html) or
[csubj](/u/dep/csubj.html)).

[en] _John is a teacher._

~~~ conllu
# text = John is a teacher.
1	John	John	PROPN	_	Number=Sing	4	nsubj	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	a	a	DET	_	Definite=Ind|PronType=Art	4	det	_	_
4	teacher	teacher	NOUN	_	Number=Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~

In this case, the subject _John_ is not part of the same nominal phrase as _teacher_.
It is the subject of the entire clause, whose predicate is _teacher_.

UD makes a clear distinction between modifiers of a nominal on one side,
and everything else on the other side. Even [verbal nouns](/u/feat/VerbForm.html#Vnoun),
if they are tagged `NOUN` and not `VERB`, must have their modifiers attached via
relations reserved for modifiers of nouns.

For example, in [en] _to take action_, _action_ is an object of _to take_ (`obj(take, action)`).
If the phrase is nominalized, the coding of the argument becomes oblique (requiring the
preposition _of_) but the relation is neither `obj` nor `obl`; it is `nmod`:

[en] _Taking of any action is prohibited._

~~~ conllu
# text = Taking of any action is prohibited.
1	Taking	taking	NOUN	_	Number=Sing|VerbForm=Vnoun	6	nsubj:pass	_	_
2	of	of	ADP	_	_	4	case	_	_
3	any	any	DET	_	PronType=Ind	4	det	_	_
4	action	action	NOUN	_	Number=Sing	1	nmod	_	_
5	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
6	prohibited	prohibit	VERB	_	Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~



## Clausal Complements

So far we were dealing with nominal arguments. But sometimes an argument is realized
as a clause. If it occurs in subject position, it is labeled as [clausal subject](/u/dep/csubj.html).

<span style='color:red'>TO DO: What does “subject position” mean in free word order languages?
What other subject properties can be tested with clauses?</span>

Otherwise it may be a [clausal complement](/u/dep/ccomp.html).
Unfortunately, the term is somewhat misleading. UD does not distinguish arguments from adjuncts
(in other words, complements from modifiers), at least not at the universal level.
What it does distinguish is core arguments from oblique arguments + adjuncts.
It is thus not sufficient that the clause fills a slot defined by the valency of the matrix verb,
i.e., that it is in some sense obligatory. We must require more. We must require that the clause
corresponds to a core argument, that is, `obj` (or `iobj`, at least in theory).
If it corresponds only to an oblique
argument (or an adjunct), it should be labeled as [adverbial clause](/u/dep/advcl.html).
Consequently, clausal complements can depend on verbs but not on adjectives or adverbs
because the latter two normally do not have core objects.
If an adjective or adverb is modified by a clause, that clause must be `advcl`.
Even if it fills an obligatory slot in the adjective/adverb's valency frame.
(Analogically, if a clause complements a noun, it must be labeled as [adnominal clause](/u/dep/acl.html).)

Even clauses that alternate with direct nominal objects (and thus are labeled `ccomp`)
often do not work the same way as their nominal counterparts. For instance, English
direct objects can be passivized, as in:

* _Tell me the secret._
* _The secret will be told (to me)._
* _I will be told the secret._

However, a clausal complement of the same verb does not passivize the same way.
It needs an expletive subject instead:

* _Tell me that you will come._
* _It will be told (to me) that you will come._
* _I will be told that you will come._

Note that UD does not distinguish direct and indirect clausal complements.
At present it is assumed that `ccomp` alternates with `obj` (direct object).

<span style='color:red'>TO DO: Find Polish LFG examples where there are two ccomps in one sentence, one corresponding to obj and the other to iobj.</span>
