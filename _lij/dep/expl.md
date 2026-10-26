---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

The `expl` relation is used for a pronominal clitic that does not have a separate syntactic role.

Ligurian subject clitics include _ti_ in the second person singular and _o/a_ in the third person singular; some other varieties spoken outside of Genoa also use third-person plural _i_. When a nominal or clausal subject fills the subject role for the same predicate, it takes the appropriate subject relation, including any subtype, and its doubling clitic takes `expl`. An argumental clitic that fills the subject role itself takes [nsubj]() or the appropriate subtype; nonreferential clitics take `expl`.

~~~ conllu
1	o	o	DET	_	_	2	det	_	Gloss=the
2	parrego	parrego	NOUN	_	_	4	nsubj	_	Gloss=priest
3	o	o	PRON	_	_	4	expl	_	Gloss=he
4	cianzeiva	cianze	VERB	_	_	0	root	_	Gloss=was-crying

~~~

In _o î ciamma_ “he calls them”, _o_ is [nsubj](). In dislocation, the clitic retains its argument relation and the detached nominal takes [dislocated]().

Plain `expl` is also used for a non-reflexive clitic with no separate syntactic role, such as existential or presentational _ghe_ or _ne_ when it forms part of a lexicalised verb without an independent meaning. A clitic with its own syntactic role instead takes the corresponding relation, such as [obj](), [iobj](), or [obl]().

~~~ conllu
1	se	se	PRON	_	_	3	expl:pv	_	_
2	ne	ne	PRON	_	_	3	expl	_	_
3	van	anâ	VERB	_	_	0	root	_	Gloss=they-leave

~~~

The subtypes distinguish reflexive clitics in pronominal verbs and intensive uses ([expl:pv]()), passive or middle _se_ ([expl:pass]()), and impersonal _se_ ([expl:impers]()).
