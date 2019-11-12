---
layout: base
title:  'Statistics of ccomp in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `ccomp`

This relation is universal.

640 nodes (1%) are attached to their parents as `ccomp`.

620 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.2765625.

The following 19 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (523; 82% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (31; 5% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (27; 4% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (12; 2% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (11; 2% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (11; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	wish	wish	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	it	it	PRON	PERS-SG	_	4	nsubj	_	_
4	was	be	VERB	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	2	ccomp	_	SpaceAfter=No
5	.	.	PUNCT	Period	_	4	punct	_	_
6	But	but	CCONJ	_	_	8	cc	_	_
7	this	this	PRON	DEM-SG	Number=Sing|PronType=Dem	8	nsubj	_	_
8	has	have	VERB	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
9	nothing	nothing	PRON	NEG-SG	Number=Sing	8	obj	_	_
10	to	to	PART	_	_	11	mark	_	_
11	do	do	VERB	INF	VerbForm=Inf	9	acl	_	_
12	with	with	ADP	_	_	13	case	_	_
13	literature	literature	NOUN	SG-NOM	Number=Sing	11	obl	_	SpaceAfter=No
14	.	.	PUNCT	Period	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 ccomp	color:blue
1	At	at	ADP	_	_	4	case	_	_
2	the	the	DET	DEF	Definite=Def|PronType=Art	4	det	_	_
3	same	same	ADJ	POS	Degree=Pos	4	amod	_	_
4	time	time	NOUN	SG-NOM	Number=Sing	7	obl	_	SpaceAfter=No
5	,	,	PUNCT	Comma	_	4	punct	_	_
6	he	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
7	knew	know	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
8	it	it	PRON	PERS-SG	_	12	expl	_	_
9	was	be	AUX	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	12	cop	_	_
10	all	all	PRON	TOT-SG	Case=Nom	12	nsubj	_	_
11	an	an	DET	IND-SG	Definite=Ind|PronType=Art	12	det	_	_
12	illusion	illusion	NOUN	SG-NOM	Number=Sing	7	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	He	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	had	have	AUX	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	4	aux	_	_
3	to	to	PART	_	_	4	mark	_	_
4	claim	claim	VERB	INF	VerbForm=Inf	0	root	_	_
5	that	that	SCONJ	_	_	8	mark	_	_
6	it	it	PRON	PERS-SG	_	8	nsubj	_	_
7	was	be	AUX	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	8	cop	_	_
8	real	real	ADJ	POS	Degree=Pos	4	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	4	punct	_	_

~~~


