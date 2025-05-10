---
layout: base
title:  'Statistics of csubj:pass in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="en_lines-dep-csubj-outer.html">csubj:outer</a></tt>.

9 nodes (0%) are attached to their parents as `csubj:pass`.

5 instances of `csubj:pass` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.22222222222222.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (8; 89% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 csubj:pass	color:blue
1	A	a	DET	IND-SG	Definite=Ind|PronType=Art	3	det	_	_
2	further	further	ADJ	CMP	Degree=Pos	3	amod	_	_
3	point	point	NOUN	SG-NOM	Number=Sing	0	root	_	_
4	was	be	AUX	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	3	cop	_	_
5	how	how	ADV	WH	PronType=Int	10	advmod	_	_
6	private	private	ADJ	POS	Degree=Pos	7	amod	_	_
7	copying	copy	VERB	ING	Tense=Pres|VerbForm=Part	10	csubj:pass	_	_
8	should	should	AUX	PAST-AUX	VerbForm=Fin	10	aux	_	_
9	be	be	AUX	INF	VerbForm=Inf	10	aux:pass	_	_
10	regulated	regulate	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	3	csubj	_	_
11	in	in	ADP	_	_	14	case	_	_
12	the	the	DET	DEF	Definite=Def|PronType=Art	14	det	_	_
13	digital	digital	ADJ	POS	Degree=Pos	14	amod	_	_
14	environment	environment	NOUN	SG-NOM	Number=Sing	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj:pass	color:blue
1	Whatever	whatever	PRON	WH-IND	PronType=Int	7	csubj:pass	_	_
2	it	it	PRON	PERS-SG	_	1	nsubj	_	_
3	was	be	AUX	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	1	cop	_	_
4	could	could	AUX	PAST-AUX	VerbForm=Fin	7	aux	_	_
5	never	never	ADV	NEG	PronType=Neg	7	advmod	_	_
6	be	be	AUX	INF	VerbForm=Inf	7	aux:pass	_	_
7	found	find	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
8	;	;	PUNCT	SemiColon	_	7	punct	_	_
9	it	it	PRON	PERS-SG	_	12	nsubj	_	_
10	was	be	AUX	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	12	cop	_	_
11	the	the	DET	DEF	Definite=Def|PronType=Art	12	det	_	_
12	smell	smell	NOUN	SG-NOM	_	20	ccomp	_	_
13	of	of	ADP	_	_	14	case	_	_
14	growth	growth	NOUN	SG-NOM	Number=Sing	12	nmod	_	SpaceAfter=No
15	,	,	PUNCT	Comma	_	12	punct	_	_
16	they	they	PRON	PERS-PL-NOM	Case=Nom|Number=Plur|Person=3|PronType=Prs	20	nsubj	_	_
17	had	have	AUX	PAST-AUX	Mood=Ind|Tense=Past|VerbForm=Fin	20	aux	_	_
18	long	long	ADV	_	Degree=Pos	20	advmod	_	_
19	ago	ago	ADP	_	_	18	case	_	_
20	decided	decide	VERB	PERF	Mood=Ind|Tense=Past|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
21	,	,	PUNCT	Comma	_	23	punct	_	_
22	at	at	ADP	_	_	23	case	_	_
23	Gala	Gala	PROPN	SG-NOM	Number=Sing	20	obl	_	SpaceAfter=No
24	,	,	PUNCT	Comma	_	23	punct	_	_
25	the	the	DET	DEF	Definite=Def|PronType=Art	26	det	_	_
26	process	process	NOUN	SG-NOM	Number=Sing	20	appos	_	_
27	of	of	ADP	_	_	28	case	_	_
28	decay	decay	NOUN	SG-NOM	Number=Sing	26	nmod	_	_
29	and	and	CCONJ	_	_	30	cc	_	_
30	regeneration	regeneration	NOUN	SG-NOM	Number=Sing	28	conj	_	_
31	so	so	ADV	_	_	32	advmod	_	_
32	accelerated	accelerate	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	26	acl	_	SpaceAfter=No
33	,	,	PUNCT	Comma	_	34	punct	_	_
34	brought	bring	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	26	acl	_	_
35	so	so	ADV	_	_	36	advmod	_	_
36	close	close	ADV	_	Degree=Pos	37	advmod	_	_
37	together	together	ADV	_	_	34	advmod	_	_
38	that	that	SCONJ	_	_	40	mark	_	_
39	it	it	PRON	PERS-SG	_	40	nsubj	_	_
40	produced	produce	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	37	acl	_	_
41	the	the	DET	DEF	Definite=Def|PronType=Art	42	det	_	_
42	reek	reek	NOUN	SG-NOM	Number=Sing	40	obj	_	_
43	of	of	ADP	_	_	44	case	_	_
44	death-and-life	death-and-life	NOUN	SG-NOM	Number=Sing	42	nmod	_	SpaceAfter=No
45	,	,	PUNCT	Comma	_	48	punct	_	_
46	all	all	ADV	TOT	_	48	advmod	_	_
47	at	at	ADP	_	_	48	case	_	_
48	once	once	ADV	_	NumType=Mult	40	obl	_	SpaceAfter=No
49	.	.	PUNCT	Period	_	40	punct	_	_

~~~


