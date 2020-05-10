---
layout: base
title:  'Statistics of csubj:pass in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-csubj.html">csubj</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:pass`.

2 instances of `csubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj:pass	color:blue
1	Working	work	VERB	VBG	VerbForm=Ger	7	csubj:pass	_	_
2	with	with	ADP	IN	_	4	case	_	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	4	det	_	Entity=(object-89
4	timer	timer	NOUN	NN	Number=Sing	1	obl	_	Entity=object-89)
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
6	generally	generally	ADV	RB	_	7	advmod	_	_
7	regarded	regard	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
8	by	by	ADP	IN	_	10	case	_	_
9	most	most	ADJ	JJS	Degree=Sup	10	amod	_	Entity=(person-90
10	experts	expert	NOUN	NNS	Number=Plur	7	obl	_	Entity=person-90)
11	as	as	SCONJ	IN	_	13	mark	_	_
12	being	be	AUX	VBG	VerbForm=Ger	13	cop	_	_
13	one	one	NUM	CD	NumType=Card	7	advcl	_	Entity=(abstract-91
14	of	of	ADP	IN	_	17	case	_	_
15	the	the	DET	DT	Definite=Def|PronType=Art	17	det	_	_
16	best	good	ADJ	JJS	Degree=Sup	17	amod	_	_
17	ways	way	NOUN	NNS	Number=Plur	13	nmod	_	Entity=abstract-91)
18	to	to	PART	TO	_	19	mark	_	_
19	develop	develop	VERB	VB	VerbForm=Inf	13	acl	_	_
20	self-discipline	self-discipline	NOUN	NN	Number=Sing	19	obj	_	Entity=(abstract-92)
21	and	and	CCONJ	CC	_	22	cc	_	_
22	stop	stop	VERB	VB	VerbForm=Inf	19	conj	_	_
23	procrastination	procrastination	NOUN	NN	Number=Sing	22	obj	_	Entity=(abstract-10)|SpaceAfter=No
24	.	.	PUNCT	.	_	7	punct	_	_

~~~


