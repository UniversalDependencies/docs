---
layout: base
title:  'Statistics of advmod in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `advmod`

This relation is universal.

2790 nodes (10%) are attached to their parents as `advmod`.

2092 instances of `advmod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.02114695340502.

The following 11 pairs of parts of speech are connected with `advmod`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1592; 57% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (461; 17% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (339; 12% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (192; 7% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (96; 3% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (41; 1% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (40; 1% instances), <tt><a href="et_ewt-pos-DET.html">DET</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (25; 1% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advmod	color:blue
1	Zopp	Zopp	PROPN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
2	servis	servima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	ka	ka	ADV	D	_	4	advmod	4:advmod	_
4	täna	täna	ADV	D	_	2	advmod	2:advmod	_
5	[	[	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
6	...	...	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
7	]	]	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 advmod	color:blue
1	Zopp	Zopp	PROPN	S	Case=Nom|Number=Sing	3	nsubj	3:nsubj	_
2	ei	ei	AUX	V	Polarity=Neg	3	aux	3:aux	_
3	löönud	lööma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ühtki	üks	DET	P	Case=Par|Number=Sing|PronType=Ind	5	det	5:det	_
5	ässa	äss	NOUN	S	Case=Par|Number=Sing	3	obj	3:obj	SpaceAfter=No
6	,	,	PUNCT	Z	_	9	punct	9.1:punct	_
7	kuid	kuid	CCONJ	J	_	9	cc	9.1:cc	_
8	ka	ka	ADV	D	_	9	advmod	9:advmod	_
9	vastane	vastane	NOUN	S	Case=Nom|Number=Sing	3	conj	9.1:nsubj	_
10	vaid	vaid	ADV	D	_	11	advmod	11:advmod	_
11	ühe	üks	NUM	N	Case=Gen|Number=Sing|NumType=Card	9	orphan	9.1:obj	SpaceAfter=No
12	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod	color:blue
1	Vaevalt	vaevalt	ADV	D	_	6	advmod	6:advmod	_
2	Sony	Sony	PROPN	S	Case=Nom|Number=Sing	6	nsubj:cop	6:nsubj	_
3	millegi	miski	PRON	P	Case=Gen|Number=Sing|PronType=Ind	6	obl	6:obl	_
4	poolest	poolest	ADP	K	AdpType=Post	3	case	3:case	_
5	oluliselt	oluliselt	ADV	D	_	6	advmod	6:advmod	_
6	parem	parem	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	0:root	_
7	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	SpaceAfter=No
8	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


