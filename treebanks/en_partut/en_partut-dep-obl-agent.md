---
layout: base
title:  'Statistics of obl:agent in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-obl.html">obl</a></tt>.

144 nodes (0%) are attached to their parents as `obl:agent`.

143 instances of `obl:agent` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.76388888888889.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (125; 87% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (18; 13% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 obl:agent	color:blue
1	To	to	ADP	E	_	3	case	_	_
2	this	this	DET	DD	Number=Sing|PronType=Dem	3	det	_	_
3	end	end	NOUN	S	Number=Sing	9	obl	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	the	the	DET	RD	Definite=Def|PronType=Art	6	det	_	_
6	Commission	commission	NOUN	S	Number=Sing	9	nsubj:pass	_	_
7	shall	shall	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
8	be	be	AUX	VA	VerbForm=Inf	9	aux:pass	_	_
9	assisted	assist	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
10	by	by	ADP	E	_	12	case	_	_
11	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	12	det	_	_
12	committee	committee	NOUN	S	Number=Sing	9	obl:agent	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	Gustave	Gustave	PROPN	SP	_	6	nsubj:pass	_	_
2	Flaubert	Flaubert	PROPN	SP	_	1	flat:name	_	_
3	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
4	also	also	ADV	B	_	6	advmod	_	_
5	substantially	substantially	ADV	B	_	6	advmod	_	_
6	influenced	influence	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
7	by	by	ADP	E	_	8	case	_	_
8	Balzac	Balzac	PROPN	SP	_	6	obl:agent	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 39 obl:agent	color:blue
1	Few	few	ADJ	A	Degree=Pos	2	amod	_	_
2	records	record	NOUN	S	Number=Plur	8	nsubj	_	_
3	of	of	ADP	E	_	7	case	_	_
4	Shakespeare	Shakespeare	PROPN	SP	_	7	nmod	_	SpaceAfter=No
5	's	's	PART	PART	_	4	case	_	_
6	private	private	ADJ	A	Degree=Pos	7	amod	_	_
7	life	life	NOUN	S	Number=Sing	2	nmod	_	_
8	survive	survive	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	13	punct	_	_
10	and	and	CCONJ	CC	_	13	cc	_	_
11	there	there	ADV	B	_	13	expl	_	_
12	has	have	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	been	be	VERB	V	Tense=Past|VerbForm=Part	8	conj	_	_
14	considerable	considerable	ADJ	A	Degree=Pos	15	amod	_	_
15	speculation	speculation	NOUN	S	Number=Sing	13	nsubj	_	_
16	about	about	ADP	E	_	18	case	_	_
17	such	such	DET	DD	PronType=Dem	18	det	_	_
18	matters	matter	NOUN	S	Number=Plur	15	nmod	_	_
19	as	as	ADP	E	_	22	case	_	_
20	his	his	DET	AP	Poss=Yes|PronType=Prs	22	nmod:poss	_	_
21	physical	physical	ADJ	A	Degree=Pos	22	amod	_	_
22	appearance	appearance	NOUN	S	Number=Sing	18	nmod	_	SpaceAfter=No
23	,	,	PUNCT	FF	_	24	punct	_	_
24	sexuality	sexuality	NOUN	S	Number=Sing	22	conj	_	SpaceAfter=No
25	,	,	PUNCT	FF	_	27	punct	_	_
26	religious	religious	ADJ	A	Degree=Pos	27	amod	_	_
27	beliefs	belief	NOUN	S	Number=Plur	22	conj	_	SpaceAfter=No
28	,	,	PUNCT	FF	_	37	punct	_	_
29	and	and	CCONJ	CC	_	37	cc	_	_
30	whether	whether	SCONJ	CS	_	37	mark	_	_
31	the	the	DET	RD	Definite=Def|PronType=Art	32	det	_	_
32	works	work	NOUN	S	Number=Plur	37	nsubj:pass	_	_
33	attributed	attribute	VERB	V	Tense=Past|VerbForm=Part	32	acl	_	_
34	to	to	ADP	E	_	35	case	_	_
35	him	he	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	33	obl	_	_
36	were	be	AUX	VA	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	37	aux:pass	_	_
37	written	write	VERB	V	Tense=Past|VerbForm=Part	18	conj	_	_
38	by	by	ADP	E	_	39	case	_	_
39	others	other	PRON	PI	Number=Plur|PronType=Ind	37	obl:agent	_	SpaceAfter=No
40	.	.	PUNCT	FS	_	8	punct	_	_

~~~


