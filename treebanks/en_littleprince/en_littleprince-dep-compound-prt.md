---
layout: base
title:  'Statistics of compound:prt in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_littleprince-dep-compound.html">compound</a></tt>.

37 nodes (1%) are attached to their parents as `compound:prt`.

37 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27027027027027.

The following 2 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-ADP.html">ADP</a></tt> (36; 97% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:prt	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	say	say	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	plainly	plainly	ADV	RB	_	2	advmod	_	_
4	,	,	PUNCT	,	_	2	punct	_	_
5	"	"	PUNCT	``	_	6	punct	_	_
6	watch	watch	VERB	VB	Mood=Imp|VerbForm=Fin	2	ccomp	_	_
7	out	out	ADP	RP	_	6	compound:prt	_	_
8	for	for	ADP	IN	_	10	case	_	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	_	_
10	baobabs	baobab	NOUN	NNS	Number=Plur	6	obl	_	_
11	!	!	PUNCT	.	_	6	punct	_	_
12	"	"	PUNCT	''	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 38 compound:prt	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	pointed	point	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	out	out	ADP	RP	_	2	compound:prt	_	_
4	to	to	ADP	IN	_	7	case	_	_
5	the	the	DET	DT	Definite=Def|PronType=Art	7	det	_	_
6	little	little	ADJ	JJ	Degree=Pos	7	amod	_	_
7	prince	prince	NOUN	NN	Number=Sing	2	obl	_	_
8	that	that	SCONJ	IN	_	13	mark	_	_
9	baobabs	baobab	NOUN	NNS	Number=Plur	13	nsubj	_	_
10	were	be	AUX	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	13	cop	_	_
11	not	not	PART	RB	_	13	advmod	_	_
12	little	little	ADJ	JJ	Degree=Pos	13	amod	_	_
13	bushes	bush	NOUN	NNS	Number=Plur	2	ccomp	_	_
14	,	,	PUNCT	,	_	15	punct	_	_
15	but	but	CCONJ	CC	_	21	cc	_	_
16	,	,	PUNCT	,	_	19	punct	_	_
17	on	on	ADP	IN	_	19	case	_	_
18	the	the	DET	DT	Definite=Def|PronType=Art	19	det	_	_
19	contrary	contrary	NOUN	NN	Number=Sing	21	obl	_	_
20	,	,	PUNCT	,	_	19	punct	_	_
21	trees	tree	NOUN	NNS	Number=Plur	13	conj	_	_
22	as	as	ADV	RB	_	23	advmod	_	_
23	big	big	ADJ	JJ	Degree=Pos	21	amod	_	_
24	as	as	ADP	IN	_	25	case	_	_
25	castles	castle	NOUN	NNS	Number=Plur	23	obl	_	_
26	;	;	PUNCT	:	_	46	punct	_	_
27	and	and	CCONJ	CC	_	46	cc	_	_
28	that	that	SCONJ	IN	_	46	mark	_	_
29	even	even	ADV	RB	_	32	advmod	_	_
30	if	if	SCONJ	IN	_	32	mark	_	_
31	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	32	nsubj	_	_
32	took	take	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	46	advcl	_	_
33	a	a	DET	DT	Definite=Ind|PronType=Art	35	det	_	_
34	whole	whole	ADJ	JJ	Degree=Pos	35	amod	_	_
35	herd	herd	NOUN	NN	Number=Sing	32	obj	_	_
36	of	of	ADP	IN	_	37	case	_	_
37	elephants	elephant	NOUN	NNS	Number=Plur	35	nmod	_	_
38	away	away	ADV	RB	_	32	compound:prt	_	_
39	with	with	ADP	IN	_	40	case	_	_
40	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	32	obl	_	_
41	,	,	PUNCT	,	_	32	punct	_	_
42	the	the	DET	DT	Definite=Def|PronType=Art	43	det	_	_
43	herd	herd	NOUN	NN	Number=Sing	46	nsubj	_	_
44	would	would	AUX	MD	VerbForm=Fin	46	aux	_	_
45	not	not	PART	RB	_	46	advmod	_	_
46	eat	eat	VERB	VB	VerbForm=Inf	2	conj	_	_
47	up	up	ADP	RP	_	46	compound:prt	_	_
48	one	one	NUM	CD	NumType=Card	50	nummod	_	NumForm=Word
49	single	single	ADJ	JJ	Degree=Pos	50	amod	_	_
50	baobab	baobab	NOUN	NN	Number=Sing	46	obj	_	_
51	.	.	PUNCT	.	_	2	punct	_	_

~~~


