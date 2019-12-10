---
layout: relation
title: 'aux:cnd'
shortdef: 'conditional marker auxiliaries'
udver: '2'
---

The `aux:cnd` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for the conditional particle _by_. Regardless of whether it is attached to a verb form (pseudo particles) or it stands alone, it depends on the verb form in a dependency tree.

~~~ conllu
# visual-style 2 1 aux:cnd color:blue
1-2	Mógłby	_	_	_	_	_	_	_	_
1	Mógł	móc	VERB	praet:sg:m3:imperf:nagl	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	by	by	AUX	part	_	1	aux:cnd	_	_
3	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	4	cop	_	_
4	siedzibą	siedziba	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	1	xcomp	_	_
5	zarówno	zarówno	CCONJ	conj	_	6	cc:preconj	_	_
6	giełdy	giełda	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	8	punct	_	_
8	kina	kino	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	6	conj	4:nmod|6:conj	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	12	punct	_	_
10	jak	jak	CCONJ	conj	_	12	cc	_	_
11	i	i	CCONJ	conj	_	10	fixed	_	_
12	muzeum	muzeum	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	6	conj	4:nmod|6:conj	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	1	punct	_	_
~~~

~~~ conllu
1	It	_	_	_	_	_	_	_	_
2	could	_	_	_	_	_	_	_	_
3	be	_	_	_	_	_	_	_	_
4	the	_	_	_	_	_	_	_	_
5	seat	_	_	_	_	_	_	_	_
6	of	_	_	_	_	_	_	_	_
7	the	_	_	_	_	_	_	_	_
8	stock	_	_	_	_	_	_	_	_
9	exchange	_	_	_	_	_	_	_	_
10	,	_	_	_	_	_	_	_	_
11	cinema	_	_	_	_	_	_	_	_
12	and	_	_	_	_	_	_	_	_
13	museum	_	_	_	_	_	_	_	_
14	.	_	_	_	_	_	_	_	_
~~~
