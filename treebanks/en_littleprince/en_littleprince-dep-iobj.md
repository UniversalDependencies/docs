---
layout: base
title:  'Statistics of iobj in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `iobj`

This relation is universal.

13 nodes (0%) are attached to their parents as `iobj`.

13 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07692307692308.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (12; 92% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	will	will	AUX	MD	VerbForm=Fin	3	aux	_	_
3	draw	draw	VERB	VB	VerbForm=Inf	0	root	_	_
4	you	you	PRON	PRP	Case=Acc|Person=2|PronType=Prs	3	iobj	_	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	_
6	muzzle	muzzle	NOUN	NN	Number=Sing	3	obj	_	_
7	for	for	ADP	IN	_	9	case	_	_
8	your	you	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
9	sheep	sheep	NOUN	NN	Number=Sing	3	obl	_	_
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 27 iobj	color:blue
1	And	and	CCONJ	CC	_	20	cc	_	_
2	because	because	SCONJ	IN	_	4	mark	_	_
3	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	felt	feel	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	20	advcl	_	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	_
6	bit	bit	NOUN	NN	Number=Sing	7	obl:unmarked	_	_
7	sad	sad	ADJ	JJ	Degree=Pos	4	xcomp	_	_
8	as	as	SCONJ	IN	_	10	mark	_	_
9	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	remembered	remember	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	4	advcl	_	_
11	his	he	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	13	nmod:poss	_	_
12	little	little	ADJ	JJ	Degree=Pos	13	amod	_	_
13	planet	planet	NOUN	NN	Number=Sing	10	obj	_	_
14	which	which	PRON	WDT	PronType=Rel	17	obj	_	_
15	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	nsubj	_	_
16	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	17	aux	_	_
17	forsaken	forsake	VERB	VBN	Tense=Past|VerbForm=Part	13	acl:relcl	_	_
18	,	,	PUNCT	,	_	4	punct	_	_
19	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	nsubj	_	_
20	plucked	pluck	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
21	up	up	ADP	RP	_	20	compound:prt	_	_
22	his	he	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	23	nmod:poss	_	_
23	courage	courage	NOUN	NN	Number=Sing	20	obj	_	_
24	to	to	PART	TO	_	25	mark	_	_
25	ask	ask	VERB	VB	VerbForm=Inf	20	advcl	_	_
26	the	the	DET	DT	Definite=Def|PronType=Art	27	det	_	_
27	king	king	NOUN	NN	Number=Sing	25	iobj	_	_
28	a	a	DET	DT	Definite=Ind|PronType=Art	29	det	_	_
29	favor	favor	NOUN	NN	Number=Sing	25	obj	_	_
30	:	:	PUNCT	:	_	34	punct	_	_
31	"	"	PUNCT	``	_	34	punct	_	_
32	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	34	nsubj	_	_
33	should	should	AUX	MD	VerbForm=Fin	34	aux	_	_
34	like	like	VERB	VB	VerbForm=Inf	20	parataxis	_	_
35	to	to	PART	TO	_	36	mark	_	_
36	see	see	VERB	VB	VerbForm=Inf	34	xcomp	_	_
37	a	a	DET	DT	Definite=Ind|PronType=Art	38	det	_	_
38	sunset	sunset	NOUN	NN	Number=Sing	36	obj	_	_
39	...	...	PUNCT	,	_	34	punct	_	_
40	do	do	VERB	VB	VerbForm=Inf	34	parataxis	_	_
41	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	40	iobj	_	_
42	that	that	DET	DT	Number=Sing|PronType=Dem	43	det	_	_
43	kindness	kindness	NOUN	NN	Number=Sing	40	obj	_	_
44	...	...	PUNCT	.	_	40	punct	_	_

~~~


