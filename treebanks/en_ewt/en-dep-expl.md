---
layout: base
title:  'Statistics of expl in UD_English'
udver: '2'
---

## Treebank Statistics: UD_English: Relations: `expl`

This relation is universal.

740 nodes (0%) are attached to their parents as `expl`.

666 instances of `expl` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 8 pairs of parts of speech are connected with `expl`: <tt><a href="en-pos-VERB.html">VERB</a></tt>-<tt><a href="en-pos-PRON.html">PRON</a></tt> (559; 76% instances), <tt><a href="en-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en-pos-PRON.html">PRON</a></tt> (135; 18% instances), <tt><a href="en-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en-pos-PRON.html">PRON</a></tt> (31; 4% instances), <tt><a href="en-pos-VERB.html">VERB</a></tt>-<tt><a href="en-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="en-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="en-pos-AUX.html">AUX</a></tt>-<tt><a href="en-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en-pos-PRON.html">PRON</a></tt>-<tt><a href="en-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl	color:blue
1	Read	read	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	0:root	_
2	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
3	entire	entire	ADJ	JJ	Degree=Pos	4	amod	4:amod	_
4	article	article	NOUN	NN	Number=Sing	1	obj	1:obj	SpaceAfter=No
5	;	;	PUNCT	,	_	1	punct	1:punct	_
6	there	there	PRON	EX	_	7	expl	7:expl	SpaceAfter=No
7	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	1:parataxis	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	_
9	punchline	punchline	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	SpaceAfter=No
10	,	,	PUNCT	,	_	7	punct	7:punct	_
11	too	too	ADV	RB	_	7	advmod	7:advmod	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	true	true	ADJ	JJ	Degree=Pos	0	root	0:root	_
4	that	that	SCONJ	IN	_	10	mark	10:mark	_
5	Google	Google	PROPN	NNP	Number=Sing	10	nsubj	10:nsubj	_
6	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	10:aux	_
7	been	be	AUX	VBN	Tense=Past|VerbForm=Part	10	cop	10:cop	_
8	in	in	ADP	IN	_	10	case	10:case	_
9	acquisition	acquisition	NOUN	NN	Number=Sing	10	compound	10:compound	_
10	mode	mode	NOUN	NN	Number=Sing	3	csubj	3:csubj	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 6 expl	color:blue
1	When	when	ADV	WRB	PronType=Int	3	advmod	3:advmod	_
2	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
3	sound	sound	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	13	csubj	13:csubj	_
4	off	off	ADP	RP	_	3	compound:prt	3:compound:prt	SpaceAfter=No
5	,	,	PUNCT	,	_	13	punct	13:punct	_
6	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	expl	13:expl	_
7	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	13:cop	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	13	det	13:det	_
9	true	true	ADJ	JJ	Degree=Pos	13	amod	13:amod	_
10	audio	audio	ADJ	JJ	Degree=Pos	12	amod	12:amod	SpaceAfter=No
11	/	/	PUNCT	HYPH	_	12	punct	12:punct	SpaceAfter=No
12	visual	visual	ADJ	JJ	Degree=Pos	13	amod	13:amod	_
13	experience	experience	NOUN	NN	Number=Sing	0	root	0:root	SpaceAfter=No
14	.	.	PUNCT	.	_	13	punct	13:punct	_

~~~


