---
layout: base
title:  'Statistics of flat:foreign in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-flat.html">flat</a></tt>.

21 nodes (0%) are attached to their parents as `flat:foreign`.

21 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71428571428571.

The following 6 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (9; 43% instances), <tt><a href="et_ewt-pos-X.html">X</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (5; 24% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (3; 14% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (2; 10% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:foreign	color:blue
1	Unustasin	unustama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	indirect	indirect	NOUN	S	Case=Gen|Number=Sing	4	obj	4:obj	_
3	questionit	question	NOUN	S	Case=Par|Number=Sing	2	flat:foreign	2:flat	_
4	küsida	küsima	VERB	V	VerbForm=Inf	1	xcomp	1:xcomp	SpaceAfter=No
5	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:foreign	color:blue
1	(	(	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
2	im	im	X	S	_	0	root	0:root	_
3	sorry	sorry	X	S	_	2	flat:foreign	2:flat	SpaceAfter=No
4	)	)	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:foreign	color:blue
1	Mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	3	nsubj:cop	3:nsubj	_
2	teksti	tekst	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
3	sisu	sisu	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
4	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
5	(	(	PUNCT	Z	_	6	punct	6:punct	SpaceAfter=No
6	do	do	PROPN	Y	Abbr=Yes	3	parataxis	3:parataxis	_
7	not	not	X	S	_	6	flat:foreign	6:flat	_
8	retell	retell	X	S	_	6	flat:foreign	6:flat	SpaceAfter=No
9	)	)	PUNCT	Z	_	6	punct	6:punct	_

~~~


