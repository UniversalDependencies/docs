---
layout: base
title:  'Statistics of expl in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `expl`

This relation is universal.

349 nodes (0%) are attached to their parents as `expl`.

341 instances of `expl` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5730659025788.

The following 5 pairs of parts of speech are connected with `expl`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (260; 74% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (69; 20% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (18; 5% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	There	there	PRON	EX	_	2	expl	2:expl	Discourse=elaboration:76->75
2	were	be	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	things	thing	NOUN	NNS	Number=Plur	2	nsubj	2:nsubj	Entity=(object-95
4	in	in	ADP	IN	_	6	case	6:case	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	Entity=(abstract-96
6	shadows	shadow	NOUN	NNS	Number=Plur	2	obl	2:obl:in	Entity=object-95)abstract-96)|SpaceAfter=No
7	;	;	PUNCT	:	_	10	punct	10:punct	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	Discourse=elaboration:77->76|Entity=(object-95(object-97
9	metal	metal	NOUN	NN	Number=Sing	10	compound	10:compound	Entity=(substance-98)
10	pail	pail	NOUN	NN	Number=Sing	3	appos	3:appos	Entity=object-97)|SpaceAfter=No
11	,	,	PUNCT	,	_	13	punct	13:punct	_
12	a	a	DET	DT	Definite=Ind|PronType=Art	13	det	13:det	Entity=(object-99
13	mop	mop	NOUN	NN	Number=Sing	10	conj	3:appos|10:conj	Entity=object-99)|SpaceAfter=No
14	,	,	PUNCT	,	_	15	punct	15:punct	_
15	rags	rag	NOUN	NNS	Number=Plur	10	conj	3:appos|10:conj	Entity=(object-100)object-95)|SpaceAfter=No
16	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	Discourse=elaboration:18->17|Entity=(abstract-21)
2	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	best	good	ADJ	JJS	Degree=Sup	0	root	0:root	_
4	to	to	PART	TO	_	5	mark	5:mark	Entity=(abstract-21
5	wash	wash	VERB	VB	VerbForm=Inf	3	csubj	3:csubj	_
6	adults	adult	NOUN	NNS	Number=Plur	8	nmod:poss	8:nmod:poss	Entity=(object-8(person-9
7	’	's	PART	POS	_	6	case	6:case	Entity=person-9)
8	overalls	overall	NOUN	NNS	Number=Plur	5	obj	5:obj	Entity=object-8)
9	alone	alone	ADV	RB	Degree=Pos	5	advmod	5:advmod	Entity=abstract-21)|SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	12:punct	_
11	especially	especially	ADV	RB	Degree=Pos	12	advmod	12:advmod	_
12	men	man	NOUN	NNS	Number=Plur	8	appos	8:appos	Entity=(person-22
13	’s	's	PART	POS	_	12	case	12:case	Entity=person-22)
14	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 expl	color:blue
1	There	there	PRON	EX	_	5	expl	5:expl	Discourse=restatement:38->37
2	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
3	been	be	AUX	VBN	Tense=Past|VerbForm=Part	5	cop	5:cop	_
4	much	much	ADJ	JJ	Degree=Pos	5	amod	5:amod	Entity=(abstract-57
5	speculation	speculation	NOUN	NN	Number=Sing	0	root	0:root	_
6	as	as	ADP	IN	_	9	case	9:case	_
7	to	to	ADP	IN	_	6	fixed	6:fixed	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Entity=(abstract-58
9	reasons	reason	NOUN	NNS	Number=Plur	5	nmod	5:nmod:as_to	_
10	behind	behind	ADP	IN	_	11	case	11:case	_
11	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	nmod	9:nmod:behind	Entity=(event-51)abstract-57)abstract-58)|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


