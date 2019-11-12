---
layout: base
title:  'Statistics of aux:pass in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-aux.html">aux</a></tt>.

766 nodes (1%) are attached to their parents as `aux:pass`.

765 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29634464751958.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (763; 100% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Additional	additional	ADJ	POS	Degree=Pos	2	amod	_	_
2	information	information	NOUN	SG-NOM	Number=Sing	7	nsubj:pass	_	_
3	about	about	ADP	_	_	4	case	_	_
4	XML	XML	PROPN	SG-NOM	Number=Sing	2	nmod	_	_
5	can	can	AUX	PRES-AUX	VerbForm=Fin	7	aux	_	_
6	be	be	AUX	INF	VerbForm=Inf	7	aux:pass	_	_
7	found	find	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
8	on	on	ADP	_	_	11	case	_	_
9	the	the	DET	DEF	Definite=Def|PronType=Art	11	det	_	_
10	web	web	NOUN	SG-NOM	Number=Sing	11	compound	_	_
11	site	site	NOUN	SG-NOM	Number=Sing	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	My	I	PRON	P1SG-GEN	Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	family	family	NOUN	SG-NOM	Number=Sing	4	nsubj:pass	_	_
3	are	be	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	addicted	addicted	ADJ	POS	Degree=Pos|VerbForm=Part	0	root	_	_
5	to	to	ADP	_	_	6	case	_	_
6	sentimentality	sentimentality	NOUN	SG-NOM	Number=Sing	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	Period	_	4	punct	_	_

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
9	get	get	AUX	INF-AUX	VerbForm=Inf	10	aux:pass	_	_
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


