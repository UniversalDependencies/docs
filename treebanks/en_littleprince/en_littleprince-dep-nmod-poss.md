---
layout: base
title:  'Statistics of nmod:poss in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_littleprince-dep-nmod.html">nmod</a></tt>.

131 nodes (2%) are attached to their parents as `nmod:poss`.

131 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21374045801527.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (122; 93% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (8; 6% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:poss	color:blue
1	But	but	CCONJ	CC	_	4	cc	_	_
2	that	that	PRON	DT	Number=Sing|PronType=Dem	4	nsubj	_	_
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	something	something	PRON	NN	Number=Sing|PronType=Ind	0	root	_	_
5	that	that	PRON	WDT	PronType=Rel	10	nsubj	_	_
6	will	will	AUX	MD	VerbForm=Fin	10	aux	_	_
7	not	not	PART	RB	_	10	advmod	_	_
8	be	be	AUX	VB	VerbForm=Inf	10	cop	_	_
9	my	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
10	fault	fault	NOUN	NN	Number=Sing	4	acl:relcl	_	_
11	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	On	on	ADP	IN	_	6	case	_	_
2	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
3	little	little	ADJ	JJ	Degree=Pos	4	amod	_	_
4	prince	prince	NOUN	NN	Number=Sing	6	nmod:poss	_	_
5	's	's	PART	POS	_	4	case	_	_
6	planet	planet	NOUN	NN	Number=Sing	13	obl	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	_	_
8	flowers	flower	NOUN	NNS	Number=Plur	13	nsubj	_	_
9	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	13	aux	_	_
10	always	always	ADV	RB	_	13	advmod	_	_
11	been	be	AUX	VBN	Tense=Past|VerbForm=Part	13	cop	_	_
12	very	very	ADV	RB	_	13	advmod	_	_
13	simple	simple	ADJ	JJ	Degree=Pos	0	root	_	_
14	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nmod:poss	color:blue
1	"	"	PUNCT	``	_	2	punct	_	_
2	Sire	sire	NOUN	NN	Number=Sing	12	vocative	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	"	"	PUNCT	''	_	2	punct	_	_
5	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	said	say	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	12	parataxis	_	_
7	to	to	ADP	IN	_	8	case	_	_
8	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
9	,	,	PUNCT	,	_	6	punct	_	_
10	"	"	PUNCT	``	_	12	punct	_	_
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
12	beg	beg	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
13	that	that	SCONJ	IN	_	16	mark	_	_
14	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	16	nsubj	_	_
15	will	will	AUX	MD	VerbForm=Fin	16	aux	_	_
16	excuse	excuse	VERB	VB	VerbForm=Inf	12	ccomp	_	_
17	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	18	nmod:poss	_	_
18	asking	ask	VERB	VBG	VerbForm=Ger	16	obj	_	_
19	you	you	PRON	PRP	Case=Acc|Person=2|PronType=Prs	18	iobj	_	_
20	a	a	DET	DT	Definite=Ind|PronType=Art	21	det	_	_
21	question	question	NOUN	NN	Number=Sing	18	obj	_	_
22	-	-	PUNCT	HYPH	_	12	punct	_	_
23	-	-	PUNCT	,	_	12	punct	_	_
24	"	"	PUNCT	''	_	12	punct	_	_

~~~


