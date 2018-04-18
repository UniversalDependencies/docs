---
layout: base
title:  'Statistics of aux:pass in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-aux.html">aux</a></tt>.

137 nodes (0%) are attached to their parents as `aux:pass`.

136 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31386861313869.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (133; 97% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux:pass	color:blue
1	The	the	DET	DEF	Definite=Def|PronType=Art	2	det	_	_
2	fact	fact	NOUN	SG-NOM	Number=Sing	0	root	_	_
3	that	that	SCONJ	REL	_	8	mark	_	_
4	my	I	PRON	P1SG-GEN	Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	name	name	NOUN	SG-NOM	Number=Sing	8	nsubj:pass	_	_
6	has	have	AUX	PRES-AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
7	been	be	AUX	PERF	Tense=Past|VerbForm=Part	8	aux:pass	_	_
8	mixed	mix	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	2	acl	_	_
9	up	up	ADV	_	_	8	compound:prt	_	_
10	in	in	ADP	_	_	11	case	_	_
11	this	this	PRON	DEM-SG	Number=Sing|PronType=Dem	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux:pass	color:blue
1	He	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj:pass	_	SpaceAfter=No
2	's	be	AUX	PRES-AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	never	never	ADV	NEG	_	5	advmod	_	_
4	been	be	AUX	PERF	Tense=Past|VerbForm=Part	5	aux:pass	_	_
5	sent	send	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
6	anywhere	anywhere	ADV	IND-WH	_	5	advmod	_	_
7	where	where	ADV	WH-REL	PronType=Int	11	advmod	_	_
8	there	there	PRON	EX	_	11	expl	_	_
9	was	be	VERB	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	11	aux:pass	_	_
10	anything	anything	PRON	IND-SG-NOM	Number=Sing	11	nsubj:pass	_	_
11	left	leave	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	6	advcl	_	_
12	to	to	PART	_	_	13	mark	_	_
13	do	do	VERB	INF	VerbForm=Inf	11	xcomp	_	SpaceAfter=No
14	,	,	PUNCT	Comma	_	16	punct	_	_
15	he	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	16	nsubj	_	_
16	said	say	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	5	parataxis	_	SpaceAfter=No
17	.	.	PUNCT	Period	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 aux:pass	color:blue
1	The	the	DET	DEF	Definite=Def|PronType=Art	4	det	_	_
2	only	only	ADJ	POS	Degree=Pos	4	amod	_	_
3	real	real	ADJ	POS	Degree=Pos	4	amod	_	_
4	feeling	feeling	NOUN	SG-NOM	Number=Sing	7	nsubj	_	_
5	was	be	AUX	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	7	cop	_	_
6	a	a	DET	IND-SG	Definite=Ind|PronType=Art	7	det	_	_
7	desire	desire	NOUN	SG-NOM	Number=Sing	0	root	_	_
8	to	to	PART	_	_	10	mark	_	_
9	get	get	AUX	INF-AUX	VerbForm=Inf	10	aux	_	_
10	appointed	appoint	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	7	acl	_	_
11	to	to	ADP	_	_	13	case	_	_
12	a	a	DET	IND-SG	Definite=Ind|PronType=Art	13	det	_	_
13	trading-post	trading-post	NOUN	SG-NOM	Number=Sing	10	obl	_	_
14	where	where	ADV	WH-REL	PronType=Rel	19	advmod	_	_
15	ivory	ivory	NOUN	SG-NOM	Number=Sing	19	nsubj:pass	_	_
16	was	be	AUX	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	19	aux	_	_
17	to	to	PART	_	_	19	mark	_	_
18	be	be	AUX	INF-AUX	VerbForm=Inf	19	aux:pass	_	_
19	had	have	AUX	PASS	Mood=Ind|Tense=Past|VerbForm=Fin	13	acl:relcl	_	SpaceAfter=No
20	,	,	PUNCT	_	_	25	punct	_	_
21	so	so	SCONJ	_	_	25	mark	_	_
22	that	that	SCONJ	_	_	21	fixed	_	_
23	they	they	PRON	PERS-PL-NOM	Case=Nom|Number=Plur|Person=3|PronType=Prs	25	nsubj	_	_
24	could	could	AUX	PAST-AUX	VerbForm=Fin	25	aux	_	_
25	earn	earn	VERB	INF	VerbForm=Inf	10	advcl	_	_
26	percentages	percentage	NOUN	PL-NOM	Number=Plur	25	obj	_	SpaceAfter=No
27	.	.	PUNCT	Period	_	7	punct	_	_

~~~


