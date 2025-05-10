---
layout: base
title:  'Statistics of ccomp in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `ccomp`

This relation is universal.

948 nodes (1%) are attached to their parents as `ccomp`.

803 instances of `ccomp` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.31118143459916.

The following 21 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (692; 73% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (86; 9% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (71; 7% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (17; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (16; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (16; 2% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (14; 1% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances).


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
9	nothing	nothing	PRON	NEG-SG	Number=Sing|PronType=Neg	8	obj	_	_
10	to	to	PART	_	_	11	mark	_	_
11	do	do	VERB	INF	VerbForm=Inf	9	acl	_	_
12	with	with	ADP	_	_	13	case	_	_
13	literature	literature	NOUN	SG-NOM	Number=Sing	11	obl	_	SpaceAfter=No
14	.	.	PUNCT	Period	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 ccomp	color:blue
1	When	when	SCONJ	_	_	4	mark	_	_
2	he	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
3	had	have	AUX	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	4	aux	_	_
4	come	come	VERB	PERF	Tense=Past|VerbForm=Part	10	advcl	_	_
5	to	to	ADP	_	_	7	case	_	_
6	the	the	DET	DEF	Definite=Def|PronType=Art	7	det	_	_
7	end	end	NOUN	SG-NOM	Number=Sing	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	Comma	_	4	punct	_	_
9	he	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	said	say	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
11	,	,	PUNCT	Comma	_	14	punct	_	_
12	Do	do	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin	14	aux	_	_
13	you	you	PRON	PERS-P2	Case=Nom|Person=2|PronType=Prs	14	nsubj	_	_
14	think	think	VERB	INF	VerbForm=Inf	10	xcomp	_	_
15	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	17	nsubj	_	_
16	'm	be	AUX	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	17	cop	_	_
17	crazy	crazy	ADJ	POS	Degree=Pos	14	ccomp	_	SpaceAfter=No
18	?	?	PUNCT	QuestionMark	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 ccomp	color:blue
1	Quinn	Quinn	PROPN	SG-NOM	Number=Sing	2	nsubj	_	_
2	smiled	smile	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	weakly	weakly	ADV	_	_	2	advmod	_	SpaceAfter=No
4	.	.	PUNCT	Period	_	2	punct	_	_
5	No	no	DET	NEG	PronType=Neg	6	det	_	_
6	problem	problem	NOUN	SG-NOM	Number=Sing	9	ccomp	_	SpaceAfter=No
7	,	,	PUNCT	Comma	_	6	punct	_	_
8	he	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
9	said	say	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	9	punct	_	_

~~~


