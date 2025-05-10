---
layout: base
title:  'Statistics of goeswith in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `goeswith`

This relation is universal.

92 nodes (0%) are attached to their parents as `goeswith`.

92 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05434782608696.

The following 9 pairs of parts of speech are connected with `goeswith`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (32; 35% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (22; 24% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (10; 11% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (9; 10% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (8; 9% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (6; 7% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (3; 3% instances), <tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-DET.html">DET</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	SnoopDogg	SnoopDogg	PROPN	S	Case=Nom|Number=Sing	6	parataxis	6:parataxis	NE=B-Per|SpaceAfter=No
2	:	:	PUNCT	Z	_	1	punct	1:punct	_
3	10	10	NUM	N	NumForm=Digit|NumType=Card	4	nummod	4:nummod	_
4	k	k	NOUN	Y	Abbr=Yes|Case=Com|Number=Sing|Typo=Yes	6	obl	6:obl	CorrectForm=k-ga
5	-ga	_	X	_	_	4	goeswith	4:goeswith	_
6	saab	saama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	vaid	vaid	ADV	D	_	8	advmod	8:advmod	_
8	kurgik2ru	kurgi_käru	NOUN	S	Case=Gen|Number=Sing|Typo=Yes	6	obj	6:obj	CorrectForm=kurgikäru

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	t6siselt	tõsiselt	ADV	D	Typo=Yes	2	advmod	2:advmod	CorrectForm=tõsiselt
2	mugav	mugav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	auto	auto	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z	_	5	punct	5:punct	_
5	saad	saama	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	0:root|3:conj	_
6	10k	10k	NUM	N	Case=Com|Number=Sing|NumForm=Digit|NumType=Card|Typo=Yes	5	obl	5:obl	CorrectForm=10kga
7	ga	_	X	_	_	6	goeswith	6:goeswith	_
8	k2tte	kätte	ADV	D	Typo=Yes	5	compound:prt	5:compound	SpaceAfter=No
9	...	...	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	Ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj|8:nsubj	_
2	üle	ülehomme	ADV	D	Typo=Yes	4	advmod	4:advmod	CorrectForm=ülehomme
3	homme	_	X	_	_	2	goeswith	2:goeswith	_
4	näen	nägema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	teda	tema	PRON	P	Case=Par|Number=Sing|Person=3|PronType=Prs	4	obj	4:obj	SpaceAfter=No
6	,	,	PUNCT	Z	_	8	punct	8:punct	_
7	siis	siis	ADV	D	_	8	advmod	8:advmod	_
8	räägin	rääkima	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	0:root|4:conj	_
9	temaga	tema	PRON	P	Case=Com|Number=Sing|Person=3|PronType=Prs	8	obl	8:obl	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


