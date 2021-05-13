---
layout: base
title:  'Statistics of amod in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `amod`

This relation is universal.

1336 nodes (6%) are attached to their parents as `amod`.

1322 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3061377245509.

The following 15 pairs of parts of speech are connected with `amod`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (1126; 84% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (86; 6% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (75; 6% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-X.html">X</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
2	new	new	ADJ	JJ	Degree=Pos	3	amod	3:amod	_
3	spending	spending	NOUN	NN	Number=Sing	5	nsubj:pass	5:nsubj:pass	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	5:aux:pass	_
5	fueled	fuel	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
6	by	by	ADP	IN	_	11	case	11:case	_
7	Clinton	Clinton	PROPN	NNP	Number=Sing	11	nmod:poss	11:nmod:poss	SpaceAfter=No
8	’s	’s	PART	POS	_	7	case	7:case	_
9	large	large	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
10	bank	bank	NOUN	NN	Number=Sing	11	compound	11:compound	_
11	account	account	NOUN	NN	Number=Sing	5	obl	5:obl:by	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	New	new	ADJ	JJ	Degree=Pos	2	amod	2:amod	_
2	episodes	episode	NOUN	NNS	Number=Plur	4	nsubj:pass	4:nsubj:pass	_
3	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	followed	follow	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
5	by	by	ADP	IN	_	6	case	6:case	_
6	after	after	ADP	GW	_	4	obl	4:obl:by	_
7	show	show	NOUN	NN	Number=Sing	6	goeswith	6:goeswith	SpaceAfter=No
8	,	,	PUNCT	,	_	6	punct	6:punct	_
9	"	"	PUNCT	``	_	12	punct	12:punct	SpaceAfter=No
10	The	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Proper=True
11	Talking	talk	VERB	VBG	VerbForm=Ger	12	amod	12:amod	_
12	Dead	dead	NOUN	NN	Number=Sing	6	appos	6:appos	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	12:punct	SpaceAfter=No
14	"	"	PUNCT	''	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 amod	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
2	last	last	ADJ	JJ	Degree=Pos	4	amod	4:amod	_
3	Olympic	Olympic	PROPN	NNP	Number=Sing	4	compound	4:compound	_
4	Games	Games	PROPN	NNPS	Number=Plur	6	nsubj:pass	6:nsubj:pass|10:nsubj:xsubj	_
5	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux:pass	6:aux:pass	_
6	believed	believe	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
7	to	to	PART	TO	_	10	mark	10:mark	_
8	have	have	AUX	VB	VerbForm=Inf	10	aux	10:aux	_
9	been	be	AUX	VBN	Tense=Past|VerbForm=Part	10	aux:pass	10:aux:pass	_
10	held	hold	VERB	VBN	Tense=Past|VerbForm=Part	6	xcomp	6:xcomp	_
11	in	in	ADP	IN	_	12	case	12:case	_
12	393	393	NUM	CD	NumType=Card	10	obl	10:obl:in	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


