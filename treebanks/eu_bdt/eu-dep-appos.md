---
layout: base
title:  'Statistics of appos in UD_Basque'
udver: '2'
---

## Treebank Statistics: UD_Basque: Relations: `appos`

This relation is universal.

555 nodes (0%) are attached to their parents as `appos`.

550 instances of `appos` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.0018018018018.

The following 23 pairs of parts of speech are connected with `appos`: <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-NOUN.html">NOUN</a></tt> (154; 28% instances), <tt><a href="eu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu-pos-PROPN.html">PROPN</a></tt> (86; 15% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-PROPN.html">PROPN</a></tt> (64; 12% instances), <tt><a href="eu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu-pos-NOUN.html">NOUN</a></tt> (62; 11% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-VERB.html">VERB</a></tt> (54; 10% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (49; 9% instances), <tt><a href="eu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (22; 4% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (12; 2% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-DET.html">DET</a></tt> (9; 2% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="eu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu-pos-DET.html">DET</a></tt> (8; 1% instances), <tt><a href="eu-pos-NUM.html">NUM</a></tt>-<tt><a href="eu-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="eu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu-pos-SYM.html">SYM</a></tt> (4; 1% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-SYM.html">SYM</a></tt> (3; 1% instances), <tt><a href="eu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="eu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="eu-pos-NUM.html">NUM</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="eu-pos-NUM.html">NUM</a></tt>-<tt><a href="eu-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="eu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	Gure	gu	PRON	_	PronType=Prs	2	nmod	_	_
2	etxea	etxe	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	11	obj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	11	punct	_	_
4	egun	egun	NOUN	_	_	11	obl	_	_
5	batean	bat	NUM	_	NumType=Card	4	nummod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	_	_
7	ordu	ordu	NOUN	_	_	4	appos	_	_
8	batzuetan	batzuk	DET	_	Case=Ine|Definite=Def|Number=Plur	7	det	_	SpaceAfter=No
9	,	,	PUNCT	_	_	4	punct	_	_
10	zeharo	zeharo	ADV	_	_	11	advmod	_	_
11	aldatu	aldatu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
12	zen	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	11	aux	_	SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Eugin	Eugi	PROPN	_	Case=Ine|Definite=Def|Number=Sing	5	obl	_	_
2	(	(	PUNCT	_	_	1	punct	_	SpaceAfter=No
3	Nafarroa	Nafarroa	PROPN	_	Case=Abs|Definite=Def|Number=Sing	1	appos	_	SpaceAfter=No
4	)	)	PUNCT	_	_	5	punct	_	_
5	ariko	ari_izan	VERB	_	_	0	root	_	_
6	da	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	5	aux	_	_
7	Asegarce	Asegarce	PROPN	_	Case=Abs|Definite=Def|Number=Sing	5	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Houdaren	Houda	PROPN	_	Case=Gen|Definite=Def|Number=Sing	2	nmod	_	_
2	ahizpa	ahizpa	NOUN	_	_	8	nsubj	_	_
3	gazteak	gazte	ADJ	_	Case=Erg|Definite=Def|Number=Sing	2	amod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	Iman-ek	Iman	PROPN	_	Case=Erg|Definite=Def|Number=Sing	2	appos	_	_
6	zortzi	zortzi	NUM	_	NumType=Card	7	nummod	_	_
7	urte	urte	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	8	obj	_	_
8	ditu	ukan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


