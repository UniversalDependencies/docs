---
layout: base
title:  'Statistics of nummod in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `nummod`

This relation is universal.

55 nodes (1%) are attached to their parents as `nummod`.

55 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.05454545454545.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (40; 73% instances), <tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (14; 25% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nummod	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	neglected	neglect	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	three	three	NUM	CD	NumType=Card	5	nummod	_	NumForm=Word
4	little	little	ADJ	JJ	Degree=Pos	5	amod	_	_
5	bushes	bush	NOUN	NNS	Number=Plur	2	obj	_	_
6	...	...	PUNCT	.	_	2	punct	_	_
7	"	"	PUNCT	''	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	Five	five	NUM	CD	NumType=Card	3	nummod	_	_
2	-	-	PUNCT	HYPH	_	3	punct	_	_
3	hundred	hundred	NUM	CD	NumType=Card	8	compound	_	_
4	-	-	PUNCT	HYPH	_	3	punct	_	_
5	and	and	CCONJ	CC	_	7	cc	_	_
6	-	-	SYM	SYM	_	7	case	_	_
7	one	one	NUM	CD	NumType=Card	3	nmod	_	_
8	million	million	NUM	CD	NumType=Card	14	parataxis	_	_
9	-	-	PUNCT	HYPH	_	8	punct	_	_
10	-	-	PUNCT	HYPH	_	8	punct	_	_
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	_
12	can	can	AUX	MD	VerbForm=Fin	14	aux	_	_
13	n't	not	PART	RB	_	14	advmod	_	_
14	stop	stop	VERB	VB	VerbForm=Inf	0	root	_	_
15	...	...	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	"	"	PUNCT	``	_	10	punct	_	_
2	Five	five	NUM	CD	NumType=Card	4	nummod	_	_
3	-	-	PUNCT	HYPH	_	4	punct	_	_
4	hundred	hundred	NUM	CD	NumType=Card	9	compound	_	_
5	-	-	PUNCT	HYPH	_	4	punct	_	_
6	and	and	CCONJ	CC	_	8	cc	_	_
7	-	-	PUNCT	HYPH	_	8	punct	_	_
8	one	one	NUM	CD	NumType=Card	9	compound	_	_
9	million	million	NUM	CD	NumType=Card	10	nummod	_	_
10	what	what	PRON	WP	PronType=Int	13	ccomp	_	_
11	?	?	PUNCT	.	_	10	punct	_	_
12	"	"	PUNCT	''	_	10	punct	_	_
13	repeated	repeat	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
14	the	the	DET	DT	Definite=Def|PronType=Art	16	det	_	_
15	little	little	ADJ	JJ	Degree=Pos	16	amod	_	_
16	prince	prince	NOUN	NN	Number=Sing	13	nsubj	_	_
17	,	,	PUNCT	,	_	16	punct	_	_
18	who	who	PRON	WP	PronType=Rel	24	nsubj	_	_
19	never	never	ADV	RB	_	24	advmod	_	_
20	in	in	ADP	IN	_	22	case	_	_
21	his	he	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	22	nmod:poss	_	_
22	life	life	NOUN	NN	Number=Sing	19	obl	_	_
23	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	24	aux	_	_
24	let	let	VERB	VBN	VerbForm=Part	16	acl:relcl	_	_
25	go	go	VERB	VB	VerbForm=Inf	24	xcomp	_	_
26	of	of	ADP	IN	_	28	case	_	_
27	a	a	DET	DT	Definite=Ind|PronType=Art	28	det	_	_
28	question	question	NOUN	NN	Number=Sing	25	obl	_	_
29	once	once	SCONJ	IN	_	32	mark	_	_
30	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	32	nsubj	_	_
31	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	32	aux	_	_
32	asked	ask	VERB	VBN	Tense=Past|VerbForm=Part	24	advcl	_	_
33	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	32	obj	_	_
34	.	.	PUNCT	.	_	13	punct	_	_

~~~


