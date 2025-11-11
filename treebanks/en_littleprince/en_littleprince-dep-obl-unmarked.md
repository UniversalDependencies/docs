---
layout: base
title:  'Statistics of obl:unmarked in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `obl:unmarked`

This relation is a language-specific subtype of <tt><a href="en_littleprince-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="en_littleprince-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="en_littleprince-dep-obl-npmod.html">obl:npmod</a></tt>, <tt><a href="en_littleprince-dep-obl-tmod.html">obl:tmod</a></tt>.

19 nodes (0%) are attached to their parents as `obl:unmarked`.

11 instances of `obl:unmarked` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.26315789473684.

The following 6 pairs of parts of speech are connected with `obl:unmarked`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (13; 68% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 obl:unmarked	color:blue
1	This	this	DET	DT	Number=Sing|PronType=Dem	2	det	_	_
2	time	time	NOUN	NN	Number=Sing	8	obl:unmarked	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	once	once	ADV	RB	NumType=Mult	5	advmod	_	_
5	more	more	ADJ	JJR	Degree=Cmp	8	advmod	_	_
6	,	,	PUNCT	,	_	8	punct	_	_
7	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	had	have	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	_	_
10	sheep	sheep	NOUN	NN	Number=Sing	8	obj	_	_
11	to	to	PART	TO	_	12	mark	_	_
12	thank	thank	VERB	VB	VerbForm=Inf	8	xcomp	_	_
13	for	for	ADP	IN	_	14	case	_	_
14	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	obl	_	_
15	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:unmarked	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	_	_
2	second	second	ADJ	JJ	Degree=Pos|NumType=Ord	3	amod	_	_
3	time	time	NOUN	NN	Number=Sing	11	obl:unmarked	_	_
4	,	,	PUNCT	,	_	3	punct	_	_
5	eleven	eleven	NUM	CD	NumType=Card	6	nummod	_	_
6	years	year	NOUN	NNS	Number=Plur	7	obl:unmarked	_	_
7	ago	ago	ADV	RB	_	11	advmod	_	_
8	,	,	PUNCT	,	_	7	punct	_	_
9	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj:pass	_	_
10	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	aux:pass	_	_
11	disturbed	disturb	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
12	by	by	ADP	IN	_	14	case	_	_
13	an	a	DET	DT	Definite=Ind|PronType=Art	14	det	_	_
14	attack	attack	NOUN	NN	Number=Sing	11	obl:agent	_	_
15	of	of	ADP	IN	_	16	case	_	_
16	rheumatism	rheumatism	NOUN	NN	Number=Sing	14	nmod	_	_
17	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:unmarked	color:blue
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


