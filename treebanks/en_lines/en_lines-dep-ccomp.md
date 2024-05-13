---
layout: base
title:  'Statistics of ccomp in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `ccomp`

This relation is universal.

758 nodes (1%) are attached to their parents as `ccomp`.

621 instances of `ccomp` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.32058047493404.

The following 20 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (581; 77% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (53; 7% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (46; 6% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (14; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (14; 2% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADP.html">ADP</a></tt> (1; 0% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 ccomp	color:blue
1	Quinn	Quinn	PROPN	SG-NOM	Number=Sing	2	nsubj	_	_
2	smiled	smile	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	weakly	weak	ADV	_	_	2	advmod	_	SpaceAfter=No
4	.	.	PUNCT	Period	_	2	punct	_	_
5	No	no	DET	NEG	PronType=Neg	6	det	_	_
6	problem	problem	NOUN	SG-NOM	Number=Sing	9	ccomp	_	SpaceAfter=No
7	,	,	PUNCT	Comma	_	6	punct	_	_
8	he	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
9	said	say	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	9	punct	_	_

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


