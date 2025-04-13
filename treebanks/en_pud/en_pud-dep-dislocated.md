---
layout: base
title:  'Statistics of dislocated in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `dislocated`

This relation is universal.

2 nodes (0%) are attached to their parents as `dislocated`.

2 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 4 dislocated	color:blue
1	What	what	PRON	WP	PronType=Int	4	obj	4:obj	_
2	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	SpaceAfter=No
3	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	saying	say	VERB	VBG	VerbForm=Ger	17	dislocated	17:dislocated	_
5	and	and	CCONJ	CC	_	9	cc	9:cc	_
6	what	what	PRON	WP	PronType=Int	9	obj	9:obj	_
7	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	nsubj	9:nsubj	SpaceAfter=No
8	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	9:aux	_
9	doing	do	VERB	VBG	VerbForm=Ger	4	conj	4:conj:and	SpaceAfter=No
10	,	,	PUNCT	,	_	17	punct	17:punct	_
11	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	15	reparandum	15:reparandum	_
12	—	—	PUNCT	:	_	11	punct	11:punct	_
13	actually	actually	ADV	RB	_	17	advmod	17:advmod	SpaceAfter=No
14	,	,	PUNCT	,	_	13	punct	13:punct	_
15	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	17	nsubj	17:nsubj	SpaceAfter=No
16	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	17:cop	_
17	unbelievable	unbelievable	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
18	.	.	PUNCT	.	_	17	punct	17:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 dislocated	color:blue
1	A	a	DET	DT	Definite=Ind|PronType=Art	3	det	3:det	_
2	keen	keen	ADJ	JJ	Degree=Pos	3	amod	3:amod	_
3	guitarist	guitarist	NOUN	NN	Number=Sing	6	dislocated	6:dislocated	SpaceAfter=No
4	,	,	PUNCT	,	_	6	punct	6:punct	_
5	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	6:nsubj	_
6	played	play	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	_
8	concert	concert	NOUN	NN	Number=Sing	6	obj	6:obj	_
9	there	there	ADV	RB	PronType=Dem	6	advmod	6:advmod	_
10	the	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	_
11	same	same	ADJ	JJ	Degree=Pos	12	amod	12:amod	_
12	year	year	NOUN	NN	Number=Sing	6	obl:unmarked	6:obl:unmarked	TemporalNPAdjunct=Yes|SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


