---
layout: base
title:  'Statistics of discourse in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `discourse`

This relation is universal.

32 nodes (0%) are attached to their parents as `discourse`.

20 instances of `discourse` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.75.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt> (23; 72% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt> (4; 13% instances), <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt> (2; 6% instances), <tt><a href="da_ddt-pos-ADP.html">ADP</a></tt>-<tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Ja	ja	INTJ	_	_	5	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	SpaceAfter=No
4	"	"	PUNCT	_	_	2	punct	_	_
5	siger	sige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
7	og	og	CCONJ	_	_	8	cc	_	_
8	vender	vende	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
9	sig	sig	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	8	obj	_	_
10	om	om	ADV	_	_	8	advmod:lmod	_	_
11	på	på	ADP	_	AdpType=Prep	12	case	_	_
12	siden	side	NOUN	_	Definite=Def|Gender=Com|Number=Sing	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 9 discourse	color:blue
1	Er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
2	det	den	DET	_	Gender=Neut|Number=Sing|PronType=Dem	4	det	_	_
3	sportslige	sportslig	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	4	amod	_	_
4	tilbud	tilbud	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	6	nsubj	_	_
5	ikke	ikke	ADV	_	_	6	advmod	_	_
6	godt	god	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	16	mark	_	_
7	nok	nok	ADV	_	_	6	advmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	_	_
9	ja	ja	INTJ	_	_	16	discourse	_	_
10	så	så	ADV	_	_	16	advmod	_	_
11	bliver	blive	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	_	_
12	sportens	sport	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Sing	15	nmod:poss	_	_
13	meget	meget	ADV	_	Degree=Pos	14	advmod	_	_
14	troløse	troløs	ADJ	_	Degree=Pos|Number=Plur	15	amod	_	_
15	tilskuere	tilskuer	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	16	nsubj	_	_
16	væk	væk	ADV	_	_	0	root	_	SpaceAfter=No
17	.	.	PUNCT	_	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 discourse	color:blue
1	Men	men	CCONJ	_	_	2	cc	_	_
2	Anne	Anne	PROPN	_	_	0	root	_	_
3	Linnet	Linnet	PROPN	_	_	2	flat	_	_
4	-	-	PUNCT	_	_	2	punct	_	_
5	oh	oh	INTJ	_	_	2	discourse	_	_
6	la	la	INTJ	_	_	5	list	_	_
7	la	la	INTJ	_	_	6	list	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
9	"	"	PUNCT	_	_	2	punct	_	_

~~~


