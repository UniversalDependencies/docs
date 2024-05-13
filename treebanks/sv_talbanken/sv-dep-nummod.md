---
layout: base
title:  'Statistics of nummod in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `nummod`

This relation is universal.

1348 nodes (1%) are attached to their parents as `nummod`.

1136 instances of `nummod` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51854599406528.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (1165; 86% instances), <tt><a href="sv-pos-NUM.html">NUM</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (62; 5% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (58; 4% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (33; 2% instances), <tt><a href="sv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (24; 2% instances), <tt><a href="sv-pos-ADP.html">ADP</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="sv-pos-DET.html">DET</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sv-pos-PRON.html">PRON</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Detta	denna	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	_
2	skedde	ske	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	nämligen	nämligen	ADV	AB	_	2	advmod	_	_
4	vid	vid	ADP	PP	_	7	case	_	_
5	1919	1919	NUM	RG|NOM	Case=Nom|NumType=Card	6	nummod	_	_
6	års	år	NOUN	NN|NEU|SIN|IND|GEN	Case=Gen|Definite=Ind|Gender=Neut|Number=Sing	7	nmod:poss	_	_
7	riksdag	riksdag	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nummod	color:blue
1	Publicerad	publicera	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	i	i	ADP	PP	_	3	case	_	_
3	Children	Children	PROPN	PM|NOM	Case=Nom	1	obl	_	_
4	1958	1958	NUM	RG|NOM	Case=Nom|NumType=Card	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	MID	_	4	punct	_	_
6	Vol.	Vol.	NOUN	NN|AN	Abbr=Yes	7	nmod	_	_
7	5	5	NUM	RG|NOM	Case=Nom|NumType=Card	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	MID	_	7	punct	_	_
9	179-184	179-184	NUM	RG|NOM	Case=Nom|NumType=Card	7	nummod	_	_
10	.	.	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	ATP	ATP	PROPN	PM|NOM	Case=Nom	2	nsubj:pass	_	_
2	infördes	införa	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	1960	1960	NUM	RG|NOM	Case=Nom|NumType=Card	2	nummod	_	SpaceAfter=No
4	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


