---
layout: base
title:  'Statistics of nmod:npmod in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gentle-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_gentle-dep-nmod-tmod.html">nmod:tmod</a></tt>.

48 nodes (0%) are attached to their parents as `nmod:npmod`.

45 instances of `nmod:npmod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.22916666666667.

The following 5 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (27; 56% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (16; 33% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:npmod	color:blue
1	Let	let	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=context-background:29->32:2
2	x	x	NOUN	NN	Number=Sing	1	obj	1:obj|7:nsubj:xsubj	Entity=(31-abstract-new-cf1-1,3,5-coref(32-abstract-new-cf3-1-coref)|SpaceAfter=No
3	,	,	PUNCT	,	_	4	punct	4:punct	_
4	y	y	NOUN	NN	Number=Sing	2	conj	1:obj|2:conj|7:nsubj:xsubj	Entity=(33-abstract-new-cf4-1-coref)|SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	z	z	NOUN	NN	Number=Sing	2	conj	1:obj|2:conj|7:nsubj:xsubj	Entity=(34-abstract-new-cf5-1-coref)31)
7	∈	∈	SYM	SYM	_	1	xcomp	1:xcomp	Entity=(31-abstract-giv:act-cf1-1-coref
8	U	U	NOUN	NN	Number=Sing	7	nmod:npmod	7:nmod:npmod	Entity=(8-abstract-giv:inact-cf2-1-coref)31)|SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 nmod:npmod	color:blue
1	Consider	consider	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=organization-preparation:84->86:2
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Entity=(76-abstract-new-cf2-2-coref
3	mapping	mapping	NOUN	NN	Number=Sing	1	obj	1:obj	Entity=76)|SpaceAfter=No
4	:	:	PUNCT	:	_	5	punct	5:punct	_
5	k	k	NOUN	NN	Number=Sing	3	appos	3:appos	Discourse=organization-preparation:85->86:1|Entity=(76-abstract-giv:act-cf2-1-appos)|SpaceAfter=No
6	:	:	PUNCT	:	_	8	punct	8:punct	_
7	(	(	PUNCT	-LRB-	_	8	punct	8:punct	Discourse=context-background:86->89:1|Entity=(76-abstract-giv:act-cf2-7-disc|SpaceAfter=No
8	T	T	NOUN	NN	Number=Sing	13	nsubj	13:nsubj	Entity=(4-abstract-giv:act-cf1*-1-coref)|SpaceAfter=No
9	,	,	PUNCT	,	_	10	punct	10:punct	_
10	⪯	⪯	SYM	SYM	_	8	conj	8:conj|13:nsubj	SpaceAfter=No|XML=<w>
11	T	T	NOUN	NN	Number=Sing	10	dep	10:dep	Entity=(4-abstract-giv:act-cf1*-1-coref)|SpaceAfter=No|XML=</w>
12	)	)	PUNCT	-RRB-	_	8	punct	8:punct	_
13	→	→	SYM	SYM	_	5	parataxis	5:parataxis	_
14	(	(	PUNCT	-LRB-	_	15	punct	15:punct	SpaceAfter=No
15	U	U	NOUN	NN	Number=Sing	13	obj	13:obj	Entity=(8-abstract-giv:inact-cf4-1-coref)|SpaceAfter=No
16	,	,	PUNCT	,	_	17	punct	17:punct	_
17	⪯	⪯	SYM	SYM	_	15	conj	13:obj|15:conj	SpaceAfter=No
18	)	)	PUNCT	-RRB-	_	15	punct	15:punct	Entity=76)|SpaceAfter=No
19	:	:	PUNCT	:	_	24	punct	24:punct	_
20	k	k	NOUN	NN	Number=Sing	24	nsubj	24:nsubj	Discourse=joint-list_m:87->86:0|Entity=(76-abstract-giv:act-cf2-1-coref)
21	(	(	PUNCT	-LRB-	_	22	punct	22:punct	SpaceAfter=No
22	α	α	NOUN	NN	Number=Sing	20	nmod:npmod	20:nmod:npmod	Entity=(77-abstract-new-cf3-1-coref)|SpaceAfter=No
23	)	)	PUNCT	-RRB-	_	22	punct	22:punct	_
24	=	=	SYM	SYM	_	13	parataxis	13:parataxis	_
25	α	α	NOUN	NN	Number=Sing	24	obj	24:obj	Entity=(77-abstract-giv:act-cf3-1-coref)

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nmod:npmod	color:blue
1	Followup	followup	NOUN	NN	Number=Sing	4	dep	4:dep	Discourse=ROOT:5:0
2	4	4	NUM	CD	NumForm=Digit|NumType=Card	3	nummod	3:nummod	Entity=(2-event-giv:inact-cf1-3-coref(3-time-giv:inact-cf2-2-coref
3	months	month	NOUN	NNS	Number=Plur	4	nmod:npmod	4:nmod:npmod	Entity=3)
4	status	status	NOUN	NN	Number=Sing	0	root	0:root	_
5	post	post	ADP	IN	_	8	case	8:case	_
6	percutaneous	percutaneous	ADJ	JJ	Degree=Pos	8	amod	8:amod	Entity=(4-event-giv:inact-cf3-3,8-coref(5-object-giv:inact-cf7-2-coref
7	screw	screw	NOUN	NN	Number=Sing	8	compound	8:compound	Entity=5)
8	fixation	fixation	NOUN	NN	Number=Sing	4	nmod	4:nmod:post	_
9	of	of	ADP	IN	_	16	case	16:case	_
10	a	a	DET	DT	Definite=Ind|PronType=Art	16	det	16:det	Entity=(6-event-giv:inact-cf4-4,7-coref
11	right	right	ADJ	JJ	Degree=Pos	16	amod	16:amod	_
12	Schatzker	Schatzker	PROPN	NNP	Number=Sing	16	compound	16:compound	Entity=(7-person-giv:inact-cf6-1,2-coref
13	IV	IV	PROPN	NNP	Number=Sing	12	nmod:npmod	12:nmod:npmod	Entity=7)
14	tibial	tibial	ADJ	JJ	Degree=Pos	16	amod	16:amod	_
15	plateau	plateau	NOUN	NN	Number=Sing	16	compound	16:compound	_
16	fracture	fracture	NOUN	NN	Number=Sing	8	nmod	8:nmod:of	Entity=6)4)2)
17	and	and	CCONJ	CC	_	23	cc	23:cc	_
18	second	second	ADJ	JJ	Degree=Pos|NumType=Ord	23	amod	23:amod	Entity=(8-event-giv:inact-cf5-6-coref
19	through	through	ADP	IN	_	20	case	20:case	_
20	fifth	fifth	ADJ	JJ	Degree=Pos|NumType=Ord	18	obl	18:obl:through	Entity=(9-object-giv:inact-cf8-3-coref
21	metatarsal	metatarsal	ADJ	JJ	Degree=Pos	22	amod	22:amod	_
22	head	head	NOUN	NN	Number=Sing	23	compound	23:compound	Entity=9)
23	fractures	fracture	NOUN	NNS	Number=Plur	16	conj	8:nmod:of|16:conj:and	Entity=8)
24	treated	treat	VERB	VBN	Tense=Past|VerbForm=Part	23	acl	23:acl	Discourse=elaboration-attribute:6->5:0
25	nonoperatively	nonoperatively	ADV	RB	Degree=Pos	24	advmod	24:advmod	SpaceAfter=No
26	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


