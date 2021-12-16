---
layout: base
title:  'Statistics of det in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `det`

This relation is universal.

1755 nodes (2%) are attached to their parents as `det`.

1729 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35954415954416.

The following 12 pairs of parts of speech are connected with `det`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (1589; 91% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (41; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (39; 2% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (36; 2% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (29; 2% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="et_ewt-pos-DET.html">DET</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-X.html">X</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	onia	Onia	PROPN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	_
2	fotopoe	foto_pood	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
3	peded	pede	NOUN	S	Case=Nom|Number=Plur	4	nsubj	4:nsubj	_
4	korrutavad	korrutama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	nagunii	nagu_nii	ADV	D	_	4	advmod	4:advmod	_
6	selle	see	DET	P	Case=Gen|Number=Sing|PronType=Dem	7	det	7:det	_
7	hinna	hind	NOUN	S	Case=Gen|Number=Sing	4	obj	4:obj	_
8	2X	2X	NOUN	Y	Abbr=Yes	4	obl	4:obl	SpaceAfter=No
9	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	See	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	2	det	2:det	_
2	kôik	kõik	PRON	P	Case=Nom|Number=Sing|PronType=Tot|Typo=Yes	5	obj	5:obj	CorrectForm=kõik
3	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ära	ära	ADV	D	_	5	compound:prt	5:compound	_
5	aurustada	aurustama	VERB	V	VerbForm=Inf	3	csubj	3:csubj	_
6	enne	enne	ADV	D	_	5	advmod	5:advmod	_
7	kui	kui	SCONJ	J	_	9	mark	9:mark	_
8	pôlema	põlema	NOUN	S	Case=Nom|Number=Sing|Typo=Yes	9	obl	9:obl	CorrectForm=põlema
9	pääsed	pääsema	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	3:advcl	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	Tsiviil	Tsiviil	PROPN	S	Case=Nom|Number=Sing	3	parataxis	3:parataxis	SpaceAfter=No
2	:	:	PUNCT	Z	_	1	punct	1:punct	_
3	Linna	linn	NOUN	S	Case=Gen|Number=Sing	0	root	0:root	_
4	keskel	keskel	ADP	K	AdpType=Post	3	case	3:case	_
5	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
6	siis	siis	ADV	D	_	3	advmod	3:advmod	_
7	ausammas	au_sammas	NOUN	S	Case=Nom|Number=Sing	3	nsubj:cop	3:nsubj	_
8	mingile	mingi	DET	P	Case=All|Number=Sing|PronType=Ind	9	det	9:det	_
9	suvalisele	suvaline	ADJ	A	Case=All|Degree=Pos|Number=Sing	3	obl	3:obl	SpaceAfter=No
10	?	?	PUNCT	Z	_	3	punct	3:punct	_

~~~


