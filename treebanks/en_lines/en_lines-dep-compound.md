---
layout: base
title:  'Statistics of compound in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="en_lines-dep-compound-prt.html">compound:prt</a></tt>.

1990 nodes (2%) are attached to their parents as `compound`.

1983 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23618090452261.

The following 17 pairs of parts of speech are connected with `compound`: <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1551; 78% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (251; 13% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (72; 4% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (27; 1% instances), <tt><a href="en_lines-pos-NUM.html">NUM</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (25; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (17; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (9; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-X.html">X</a></tt> (8; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 compound	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 compound	color:blue
1	The	the	DET	DEF	Definite=Def|PronType=Art	4	det	_	_
2	SQL	SQL	PROPN	SG-NOM	Number=Sing	4	compound	_	_
3	Server	server	NOUN	SG-NOM	Number=Sing	2	flat	_	_
4	database	database	NOUN	SG-NOM	Number=Sing	7	nsubj	_	_
5	must	must	AUX	PRES-AUX	VerbForm=Fin	7	aux	_	_
6	be	be	AUX	INF	VerbForm=Inf	7	aux	_	_
7	running	run	VERB	ING	Tense=Pres|VerbForm=Part	0	root	_	_
8	on	on	ADP	_	_	12	case	_	_
9	a	a	DET	IND-SG	Definite=Ind|PronType=Art	12	det	_	_
10	Windows	Windows	PROPN	SG-NOM	Case=Nom	12	compound	_	_
11	NT	NT	PROPN	SG-NOM	Case=Nom	10	flat	_	_
12	platform	platform	NOUN	SG-NOM	Number=Sing	7	obl	_	SpaceAfter=No
13	.	.	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	Village	village	NOUN	SG-NOM	Case=Nom	5	nsubj	_	_
2	of	of	ADP	_	_	4	case	_	_
3	Lepers	leper	NOUN	PL-GEN	Number=Plur	4	nmod:poss	_	_
4	houses	house	NOUN	PL-NOM	Number=Plur	1	nmod	_	_
5	facing	face	VERB	ING	Tense=Pres|VerbForm=Part	0	root	_	_
6	the	the	DET	DEF	Definite=Def|PronType=Art	7	det	_	_
7	wall	wall	NOUN	SG-NOM	Number=Sing	8	compound	_	_
8	Zion	Zion	PROPN	SG-NOM	Number=Sing	5	obj	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	5	punct	_	_

~~~


