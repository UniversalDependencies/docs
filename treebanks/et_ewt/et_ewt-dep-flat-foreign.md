---
layout: base
title:  'Statistics of flat:foreign in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-flat.html">flat</a></tt>.

62 nodes (0%) are attached to their parents as `flat:foreign`.

62 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.56451612903226.

The following 8 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="et_ewt-pos-X.html">X</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (42; 68% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (9; 15% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (4; 6% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (2; 3% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (2; 3% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="et_ewt-pos-X.html">X</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:foreign	color:blue
1	Angel7	Angel7	PROPN	S	_	4	parataxis	4:parataxis	SpaceAfter=No
2	:	:	PUNCT	Z	_	1	punct	1:punct	_
3	nii	nii	ADV	D	_	4	advmod	4:advmod	_
4	seletati	seletama	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
5	seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	4	obj	4:obj	_
6	filmis	film	NOUN	S	Case=Ine|Number=Sing	4	obl	4:obl	_
7	Back	Back	PROPN	S	Case=Nom|Number=Sing	6	appos	6:appos	_
8	to	to	X	T	_	7	flat:foreign	7:flat	_
9	the	the	X	T	_	7	flat:foreign	7:flat	_
10	future	future	X	T	_	7	flat:foreign	7:flat	_

~~~


