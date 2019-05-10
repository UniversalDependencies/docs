---
layout: base
title:  'Statistics of flat in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="et_ewt-dep-flat-foreign.html">flat:foreign</a></tt>.

157 nodes (1%) are attached to their parents as `flat`.

157 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24203821656051.

The following 10 pairs of parts of speech are connected with `flat`: <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (120; 76% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (17; 11% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (5; 3% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="et_ewt-pos-X.html">X</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Taas	taas	ADV	D	_	2	advmod	2:advmod	_
2	teenis	teenima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	ATP	ATP	NOUN	Y	Abbr=Yes	4	nmod	4:nmod	_
4	punkti	punkt	NOUN	S	Case=Gen|Number=Sing	2	obj	2:obj	_
5	Markus	Markus	PROPN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
6	Kerner	Kerner	PROPN	S	Case=Nom|Number=Sing	5	flat	5:flat	SpaceAfter=No
7	,	,	PUNCT	Z	_	2	punct	2:punct	_
8	[	[	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
9	...	...	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
10	]	]	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 flat	color:blue
1	1.	1.	ADJ	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Ord	2	amod	2:amod	_
2	samm	samm	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
3	:	:	PUNCT	Z	_	2	punct	2:punct	_
4	igale	iga	DET	P	Case=All|Number=Sing|PronType=Tot	5	det	5:det	_
5	rikishile	rikishi	NOUN	S	Case=All|Number=Sing	2	parataxis	2:parataxis	_
6	summa	summa	NOUN	S	Case=Nom|Number=Sing	5	nsubj	5:nsubj	_
7	=	=	PUNCT	Z	_	6	punct	6:punct	_
8	reanr	reanr	NOUN	S	Case=Nom|Number=Sing	6	flat	6:flat	_
9	-	-	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 flat	color:blue
1	Leidsin	leidma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	8	8	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	3	nummod	3:nummod	_
3	maegashirat	maegashira	NOUN	S	Case=Par|Number=Sing	1	obj	1:obj	SpaceAfter=No
4	,	,	PUNCT	Z	_	10	punct	10:punct	_
5	kes	kes	PRON	P	Case=Nom|Number=Plur|PronType=Int,Rel	10	nsubj	10:nsubj	_
6	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	10:aux	_
7	14	14	NUM	N	NumForm=Digit|NumType=Card	10	obl	10:obl	SpaceAfter=No
8	:	:	PUNCT	Z	_	7	punct	7:punct	_
9	1	1	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	7	flat	7:flat	_
10	saanud	saama	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	3	acl:relcl	3:acl	SpaceAfter=No
11	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


