---
layout: base
title:  'Statistics of case in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `case`

This relation is universal.

1124 nodes (2%) are attached to their parents as `case`.

903 instances of `case` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20551601423488.

The following 9 pairs of parts of speech are connected with `case`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (784; 70% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (214; 19% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (69; 6% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (30; 3% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (17; 2% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (5; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-DET.html">DET</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Ja	ja	CCONJ	J	_	3	cc	5.1:cc	_
2	paari	paar	NUM	N	Case=Gen|Number=Sing|NumForm=Word|NumType=Card	3	nummod	3:nummod	_
3	aasta	aasta	NOUN	S	Case=Gen|Number=Sing	0	root	5.1:obl	_
4	pärast	pärast	ADP	K	AdpType=Post	3	case	3:case	_
5	rôômalt	rõõmsalt	ADV	D	Typo=Yes	3	advmod	5.1:advmod	Orphan=Yes|CorrectForm=rõõmsalt
6	maasikatele	maasikas	NOUN	S	Case=All|Number=Plur	3	obl	5.1:obl	Orphan=Yes
7	...	...	PUNCT	Z	_	3	punct	5.1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Miinuseid	miinus	NOUN	S	Case=Par|Number=Plur	6	nsubj:cop	6:nsubj	_
2	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
3	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	6	obl	6:obl	_
4	jaoks	jaoks	ADP	K	AdpType=Post	3	case	3:case	_
5	päris	päris	ADV	D	_	6	advmod	6:advmod	_
6	palju	palju	ADV	D	_	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 case	color:blue
1	Niisiis	nii_siis	ADV	D	_	3	advmod	3:advmod	SpaceAfter=No
2	,	,	PUNCT	Z	_	3	punct	3:punct	_
3	oleks	olema	VERB	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	abi	abi	NOUN	S	Case=Par|Number=Sing	3	nsubj	3:nsubj	_
5	vaja	vaja	ADV	D	_	3	compound:prt	3:compound	_
6	"	"	PUNCT	Z	_	7	punct	7:punct	SpaceAfter=No
7	Kalevipoja	Kalevi_poeg	PROPN	S	Case=Gen|Number=Sing	3	obl	3:obl	SpaceAfter=No
8	"	"	PUNCT	Z	_	7	punct	7:punct	_
9	kohta	kohta	ADP	K	AdpType=Post	7	case	7:case	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


