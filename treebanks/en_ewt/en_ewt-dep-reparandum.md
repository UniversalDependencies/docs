---
layout: base
title:  'Statistics of reparandum in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `reparandum`

This relation is universal.

43 nodes (0%) are attached to their parents as `reparandum`.

38 instances of `reparandum` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.81395348837209.

The following 20 pairs of parts of speech are connected with `reparandum`: <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (6; 14% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (5; 12% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (5; 12% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (5; 12% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (2; 5% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (2; 5% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PART.html">PART</a></tt> (2; 5% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-SCONJ.html">SCONJ</a></tt> (2; 5% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 reparandum	color:blue
1	put	put	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	0:root	_
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
3	heater	heater	NOUN	NN	Number=Sing	1	obj	1:obj	_
4	on	on	ADP	IN	_	6	case	6:case	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	_
6	snake	snake	NOUN	NN	Number=Sing	1	obl	1:obl:on	_
7	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	9:nsubj	_
8	will	will	AUX	MD	VerbForm=Fin	9	aux	9:aux	_
9	love	love	VERB	VB	VerbForm=Inf	1	parataxis	1:parataxis	_
10	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	obj	9:obj	_
11	and	and	CCONJ	CC	_	18	cc	18:cc	_
12	the	the	DET	DT	Definite=Def|PronType=Art	15	reparandum	15:reparandum	_
13	the	the	DET	DT	Definite=Def|PronType=Art	15	det	15:det	_
14	next	next	ADJ	JJ	Degree=Pos	15	amod	15:amod	_
15	day	day	NOUN	NN	Number=Sing	18	obl:tmod	18:obl:tmod	_
16	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	18	nsubj	18:nsubj	_
17	will	will	AUX	MD	VerbForm=Fin	18	aux	18:aux	_
18	have	have	VERB	VB	VerbForm=Inf	1	conj	1:conj:and	_
19	dinner	dinner	NOUN	NN	Number=Sing	18	obj	18:obj	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 reparandum	color:blue
1	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	reparandum	2:reparandum	_
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	reparandum	5:reparandum	_
3	did	do	AUX	VBD	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	5	aux	5:aux	_
4	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	5	nsubj	5:nsubj	_
5	watch	watch	VERB	VB	VerbForm=Inf	0	root	0:root	_
6	your	your	PRON	PRP$	Case=Gen|Person=2|Poss=Yes|PronType=Prs	7	nmod:poss	7:nmod:poss	_
7	girl	girl	NOUN	NN	Number=Sing	5	obj	5:obj	_
8	on	on	ADP	IN	_	9	case	9:case	_
9	tv	TV	NOUN	NN	Number=Sing	5	obl	5:obl:on	_
10	last	last	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
11	night	night	NOUN	NN	Number=Sing	5	obl:tmod	5:obl:tmod	SpaceAfter=No
12	?	?	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 reparandum	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	reparandum	5:reparandum	_
2	--	--	PUNCT	,	_	1	punct	1:punct	_
3	which	which	PRON	WDT	PronType=Rel	7	obj	7:obj	_
4	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	5:nsubj|7:nsubj:xsubj	_
5	try	try	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
6	to	to	PART	TO	_	7	mark	7:mark	_
7	do	do	VERB	VB	VerbForm=Inf	5	xcomp	5:xcomp	SpaceAfter=No
8	,	,	PUNCT	,	_	10	punct	10:punct	_
9	as	as	ADV	RB	_	10	advmod	10:advmod	_
10	best	well	ADV	RBS	Degree=Sup	7	advmod	7:advmod	_
11	as	as	SCONJ	IN	_	14	mark	14:mark	_
12	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	nsubj	14:nsubj	_
13	possibly	possibly	ADV	RB	_	14	advmod	14:advmod	_
14	can	can	AUX	MD	VerbForm=Fin	10	advcl	10:advcl:as	SpaceAfter=No
15	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


