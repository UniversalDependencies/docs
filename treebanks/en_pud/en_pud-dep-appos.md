---
layout: base
title:  'Statistics of appos in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `appos`

This relation is universal.

139 nodes (1%) are attached to their parents as `appos`.

139 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.30935251798561.

The following 14 pairs of parts of speech are connected with `appos`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (62; 45% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (19; 14% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (18; 13% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (18; 13% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="en_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-X.html">X</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	Her	her	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
2	1981	1981	NUM	CD	NumForm=Digit|NumType=Card	3	compound	3:compound	_
3	album	album	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	_
4	Wild	Wild	ADJ	JJ	Degree=Pos	5	amod	5:amod	Proper=True
5	West	West	PROPN	NNP	_	3	appos	3:appos	_
6	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	7:cop	_
7	one	one	NUM	CD	NumForm=Word|NumType=Card	0	root	0:root	_
8	of	of	ADP	IN	_	11	case	11:case	_
9	her	her	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	11	nmod:poss	11:nmod:poss	_
10	biggest	big	ADJ	JJS	Degree=Sup	11	amod	11:amod	_
11	sellers	seller	NOUN	NNS	Number=Plur	7	nmod	7:nmod:of	SpaceAfter=No
12	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 appos	color:blue
1	Wright	Wright	PROPN	NNP	Number=Sing	3	nsubj:pass	3:nsubj:pass|10:nsubj:pass	_
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	3:aux:pass	_
3	born	bear	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
4	in	in	ADP	IN	_	5	case	5:case	_
5	Poole	Poole	PROPN	NNP	Number=Sing	3	obl	3:obl:in	SpaceAfter=No
6	,	,	PUNCT	,	_	7	punct	7:punct	_
7	Dorset	Dorset	PROPN	NNP	Number=Sing	5	appos	5:appos	SpaceAfter=No
8	,	,	PUNCT	,	_	7	punct	7:punct	_
9	but	but	CCONJ	CC	_	10	cc	10:cc	_
10	grew	grow	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	conj	3:conj:but	_
11	up	up	ADP	RP	_	10	compound:prt	10:compound:prt	_
12	predominantly	predominantly	ADV	RB	_	10	advmod	10:advmod	_
13	in	in	ADP	IN	_	14	case	14:case	_
14	Wells	Wells	PROPN	NNP	Number=Sing	10	obl	10:obl:in	SpaceAfter=No
15	,	,	PUNCT	,	_	16	punct	16:punct	_
16	Somerset	Somerset	PROPN	NNP	Number=Sing	14	appos	14:appos	SpaceAfter=No
17	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 appos	color:blue
1	New	new	ADJ	JJ	Degree=Pos	2	amod	2:amod	_
2	episodes	episode	NOUN	NNS	Number=Plur	4	nsubj:pass	4:nsubj:pass	_
3	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	followed	follow	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
5	by	by	ADP	IN	_	6	case	6:case	_
6	after	aftershow	NOUN	GW	Number=Sing|Typo=Yes	4	obl	4:obl:by	_
7	show	_	X	NN	_	6	goeswith	6:goeswith	SpaceAfter=No
8	,	,	PUNCT	,	_	6	punct	6:punct	_
9	"	"	PUNCT	``	_	12	punct	12:punct	SpaceAfter=No
10	The	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Proper=True
11	Talking	talk	VERB	VBG	VerbForm=Ger	12	amod	12:amod	_
12	Dead	dead	NOUN	NN	Number=Sing	6	appos	6:appos	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	12:punct	SpaceAfter=No
14	"	"	PUNCT	''	_	4	punct	4:punct	_

~~~


