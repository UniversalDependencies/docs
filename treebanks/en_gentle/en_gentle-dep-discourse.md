---
layout: base
title:  'Statistics of discourse in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `discourse`

This relation is universal.

55 nodes (0%) are attached to their parents as `discourse`.

51 instances of `discourse` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.30909090909091.

The following 14 pairs of parts of speech are connected with `discourse`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (25; 45% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (13; 24% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (4; 7% instances), <tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="en_gentle-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Please	please	INTJ	UH	_	2	discourse	2:discourse	Discourse=explanation-evidence:58->54:1:_|XML=<hi rend:::"italic">
2	turn	turn	VERB	VB	Person=2|VerbForm=Inf	0	root	0:root	_
3	to	to	ADP	IN	_	6	case	6:case	_
4	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	Entity=(82-object-new-cf1-3-sgl
5	next	next	ADJ	JJ	Degree=Pos	6	amod	6:amod	_
6	page	page	NOUN	NN	Number=Sing	2	obl	2:obl:to	Entity=82)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	XML=</hi>

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 discourse	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=joint-other_m:27->14:3:_|Entity=(3-person-giv:inact-cf2-1-ana)
2	told	tell	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	Cxn=Ditransitive|MSeg=tol-d
3	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	2	iobj	2:iobj	Entity=(1-person-giv:act-cf1*-1-ana)
4	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(25-time-new-cf4-4-sgl
5	long	long	ADJ	JJ	Degree=Pos	6	amod	6:amod	_
6	time	time	NOUN	NN	Number=Sing	7	obl:tmod	7:obl:tmod	_
7	ago	ago	ADV	RB	Degree=Pos	2	advmod	2:advmod	Entity=25)|MSeg=a-go
8	do	do	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux	10:aux	_
9	n't	not	PART	RB	Polarity=Neg	10	advmod	10:advmod	_
10	play	play	VERB	VB	VerbForm=Inf	2	ccomp	2:ccomp	_
11	fucking	fucking	INTJ	UH	_	12	discourse	12:discourse	Entity=(26-abstract-new-cf3-2-coref|MSeg=fuck-ing
12	games	game	NOUN	NNS	Number=Plur	10	obj	10:obj	Entity=26)|MSeg=game-s
13	with	with	ADP	IN	_	14	case	14:case	_
14	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	10	obl	10:obl:with	Entity=(3-person-giv:act-cf2-1-ana)|SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 discourse	color:blue
1	If	if	SCONJ	IN	_	3	mark	3:mark	Discourse=attribution-positive:14->15:0:_
2	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	Entity=(1-person-giv:inact-cf1-1-ana)
3	think	think	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	15	advcl	15:advcl:if	Cxn=Condition-Realistic
4	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	6:nsubj	Discourse=contingency-condition:15->16:0:_|Entity=(1-person-giv:act-cf1-1-ana)
5	can	can	AUX	MD	VerbForm=Fin	6	aux	6:aux	_
6	get	get	VERB	VB	VerbForm=Inf	3	ccomp	3:ccomp	_
7	away	away	ADP	RP	_	6	compound:prt	6:compound:prt	_
8	with	with	ADP	IN	_	9	case	9:case	_
9	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	obl	6:obl:with	Entity=(2-event-giv:inact-cf2-1-ana)|SpaceAfter=No
10	,	,	PUNCT	,	_	3	punct	3:punct	_
11	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	15	nsubj	15:nsubj	Discourse=explanation-motivation:16->20:2:_|Entity=(1-person-giv:act-cf1-1-ana)
12	are	be	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	15	cop	15:cop	_
13	so	so	ADV	RB	_	15	advmod	15:advmod	_
14	fucking	fucking	INTJ	UH	_	15	discourse	15:discourse	MSeg=fuck-ing
15	dumb	dumb	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
16	.	.	PUNCT	.	_	15	punct	15:punct	_

~~~


