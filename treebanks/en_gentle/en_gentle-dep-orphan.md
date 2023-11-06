---
layout: base
title:  'Statistics of orphan in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `orphan`

This relation is universal.

8 nodes (0%) are attached to their parents as `orphan`.

7 instances of `orphan` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.875.

The following 5 pairs of parts of speech are connected with `orphan`: <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (4; 50% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (1; 13% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-SYM.html">SYM</a></tt> (1; 13% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (1; 13% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 orphan	color:blue
1	1.	1.	X	LS	_	2	dep	2:dep	Discourse=joint-other_m:32->9:4:_
2	Gabapentin	Gabapentin	PROPN	NNP	Number=Sing	0	root	0:root	Entity=(37-substance-new-cf1-1-sgl-Gabapentin)
3	600	600	NUM	CD	NumForm=Digit|NumType=Card	4	nummod	4:nummod	Entity=(38-substance-new-cf2-2-sgl
4	mg	milligram	NOUN	NNS	Number=Plur	2	orphan	2:orphan	Entity=38)
5	at	at	ADP	IN	_	6	case	6:case	_
6	night	night	NOUN	NN	Number=Sing	4	obl	4:obl:at	Entity=(39-time-new-cf3-1-coref)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 orphan	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=attribution-positive:52->53:1:_|Entity=(67-person-giv:inact-cf1-1-ana)
2	told	tell	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	Cxn=Ditransitive|MSeg=tol-d
3	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	iobj	2:iobj	Entity=(13-person-giv:act-cf2*-1-ana)
4	that	that	SCONJ	IN	_	7	mark	7:mark	Discourse=joint-list_m:53->46:2:_
5	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj	Entity=(67-person-giv:act-cf1-1-ana)
6	would	would	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
7	see	see	VERB	VB	VerbForm=Inf	2	ccomp	2:ccomp	_
8	his	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	Entity=(78-person-giv:inact-cf4-2-coref(13-person-giv:act-cf2*-1-ana)
9	neurologist	neurologist	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=78)
10	for	for	ADP	IN	_	11	case	11:case	_
11	evaluation	evaluation	NOUN	NN	Number=Sing	7	obl	7:obl:for	Entity=(83-event-new-cf6-1-sgl)|MSeg=e-valu-at-ion
12	or	or	CCONJ	CC	_	16	cc	16:cc	_
13	possibly	possibly	ADV	RB	Degree=Pos	16	orphan	16:orphan	MSeg=possib-ly
14	a	a	DET	DT	Definite=Ind|PronType=Art	16	det	16:det	Entity=(84-person-new-cf5-3-sgl
15	spinal	spinal	ADJ	JJ	Degree=Pos	16	amod	16:amod	MSeg=spin-al
16	surgeon	surgeon	NOUN	NN	Number=Sing	7	conj	2:ccomp|7:conj:or	Entity=84)
17	if	if	SCONJ	IN	_	20	mark	20:mark	Discourse=contingency-condition:54->53:0:_
18	his	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	19	nmod:poss	19:nmod:poss	Entity=(81-abstract-giv:act-cf3-2-coref(13-person-giv:act-cf2*-1-ana)
19	symptoms	symptom	NOUN	NNS	Number=Plur	20	nsubj	20:nsubj	Entity=81)|MSeg=symptom-s
20	progress	progress	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	7:advcl:if	Cxn=Condition-Realistic|SpaceAfter=No
21	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 orphan	color:blue
1	Let	let	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=context-background:48->57:1:_
2	x	x	NOUN	NN	Number=Sing	1	obj	1:obj|3:nsubj:xsubj	Entity=(47-abstract-new-cf2-1-coref)
3	⪯	⪯	SYM	SYM	_	1	xcomp	1:xcomp	_
4	y	y	NOUN	NN	Number=Sing	3	obl:npmod	3:obl:npmod	Entity=(48-abstract-new-cf1-1-coref)
5	and	and	CCONJ	CC	_	6	cc	6:cc	_
6	y	y	NOUN	NN	Number=Sing	1	conj	1:conj:and	Entity=(48-abstract-giv:act-cf1-1-coref)
7	⪯	⪯	SYM	SYM	_	6	orphan	6:orphan	_
8	x	x	NOUN	NN	Number=Sing	7	obl:npmod	7:obl:npmod	Entity=(47-abstract-giv:act-cf2-1-coref)|SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


