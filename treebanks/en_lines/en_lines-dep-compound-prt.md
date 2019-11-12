---
layout: base
title:  'Statistics of compound:prt in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-compound.html">compound</a></tt>.

424 nodes (0%) are attached to their parents as `compound:prt`.

423 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17216981132075.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (398; 94% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADP.html">ADP</a></tt> (13; 3% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 compound:prt	color:blue
1	If	if	SCONJ	_	_	5	mark	_	_
2	you	you	PRON	PERS-P2	_	5	nsubj	_	_
3	do	do	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	SpaceAfter=No
4	n't	not	PART	NEG	_	5	advmod	_	_
5	like	like	VERB	INF	VerbForm=Inf	11	advcl	_	_
6	it	it	PRON	PERS-SG	_	5	obj	_	SpaceAfter=No
7	,	,	PUNCT	Comma	_	5	punct	_	_
8	why	why	ADV	WH	PronType=Int	11	advmod	_	_
9	do	do	AUX	INF-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin	11	aux	_	_
10	you	you	PRON	PERS-P2	_	11	nsubj	_	_
11	go	go	VERB	INF	VerbForm=Inf	0	root	_	_
12	on	on	ADV	_	_	11	compound:prt	_	_
13	reading	read	VERB	ING	Tense=Pres|VerbForm=Part	11	xcomp	_	SpaceAfter=No
14	?	?	PUNCT	QuestionMark	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:prt	color:blue
1	Was	be	AUX	PAST-AUX	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	2	aux	_	_
2	looking	look	VERB	ING	Tense=Pres|VerbForm=Part	0	root	_	_
3	after	after	ADP	_	_	2	compound:prt	_	_
4	the	the	DET	DEF	Definite=Def|PronType=Art	5	det	_	_
5	upkeep	upkeep	NOUN	SG-NOM	Number=Sing	2	obj	_	_
6	of	of	ADP	_	_	8	case	_	_
7	the	the	DET	DEF	Definite=Def|PronType=Art	8	det	_	_
8	road	road	NOUN	SG-NOM	Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	he	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
11	declared	declare	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:prt	color:blue
1	You	you	PRON	PERS-P2	_	2	nsubj	_	_
2	mean	mean	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	Edward	Edward	PROPN	SG-NOM	Number=Sing	6	nsubj	_	SpaceAfter=No
4	's	be	AUX	PRES-AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	not	not	PART	NEG	_	6	advmod	_	_
6	going	go	VERB	ING	Tense=Pres|VerbForm=Part	2	ccomp	_	_
7	to	to	PART	_	_	8	mark	_	_
8	take	take	VERB	INF	VerbForm=Inf	6	xcomp	_	_
9	part	part	NOUN	SG-NOM	Number=Sing	8	compound:prt	_	_
10	in	in	ADP	_	_	12	case	_	_
11	the	the	DET	DEF	Definite=Def|PronType=Art	12	det	_	_
12	celebrations	celebration	NOUN	PL-NOM	Number=Plur	8	obl	_	SpaceAfter=No
13	?	?	PUNCT	Questionmark	_	2	punct	_	_

~~~


