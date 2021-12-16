---
layout: base
title:  'Statistics of det:predet in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-det.html">det</a></tt>.

110 nodes (0%) are attached to their parents as `det:predet`.

110 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.26363636363636.

The following 5 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (101; 92% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (6; 5% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det:predet	color:blue
1	Make	make	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=restatement_m:51->42:2
2	sure	sure	ADJ	JJ	Degree=Pos	1	xcomp	1:xcomp	_
3	all	all	DET	PDT	_	5	det:predet	5:det:predet	Entity=(object-50-giv:inact-3-coref
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	_
5	pockets	pocket	NOUN	NNS	Number=Plur	7	nsubj	7:nsubj	Entity=50)
6	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
7	empty	empty	ADJ	JJ	Degree=Pos	2	ccomp	2:ccomp	SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:predet	color:blue
1	Keep	keep	VERB	VB	Mood=Imp|Person=2|Typo=Yes|VerbForm=Fin	0	root	0:root	Discourse=joint_m:51->3:2|XML=<sic>
2	track	track	NOUN	NN	Number=Sing|Typo=Yes	1	obj	1:obj	_
3	of	of	ADP	IN	Typo=Yes	5	case	5:case	_
4	all	all	DET	PDT	Typo=Yes	5	det:predet	5:det:predet	Entity=(abstract-83-new-2-sgl
5	your	your	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	2	nmod	2:nmod:of	Entity=(person-5-giv:act-1-ana)83)|XML=</sic>

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 det:predet	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	2:nsubj	Discourse=background:21->11:0|Entity=(event-25-giv:act-1-coref)
2	started	start	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obj	2:obj	Entity=(person-2-giv:act-1-ana)
4	out	out	ADP	RP	_	2	compound:prt	2:compound:prt	_
5	on	on	ADP	IN	_	6	case	6:case	_
6	books	book	NOUN	NNS	Number=Plur	2	obl	2:obl:on	Entity=(object-31-new-1-coref)
7	and	and	CCONJ	CC	_	10	cc	10:cc	Discourse=result:22->21:0
8	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	10:nsubj	Entity=(person-2-giv:act-1-ana)
9	have	have	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	aux	10:aux	_
10	amassed	amass	VERB	VBN	Tense=Past|VerbForm=Part	2	conj	2:conj:and	_
11	quite	quite	DET	PDT	_	13	det:predet	13:det:predet	Bridge=31<32|Entity=(object-32-acc:inf-3-sgl
12	a	a	DET	DT	Definite=Ind|PronType=Art	13	det	13:det	_
13	few	few	ADJ	JJ	Degree=Pos	10	obj	10:obj	Entity=32)
14	since	since	ADP	IN	_	15	case	15:case	_
15	then	then	ADV	RB	PronType=Dem	10	obl	10:obl:since	Entity=(event-25-giv:act-1-coref)|SpaceAfter=No
16	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


