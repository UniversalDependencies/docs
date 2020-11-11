---
layout: base
title:  'Statistics of flat:foreign in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-flat.html">flat</a></tt>.

33 nodes (0%) are attached to their parents as `flat:foreign`.

33 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.6969696969697.

The following 7 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="et_ewt-pos-X.html">X</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (17; 52% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (9; 27% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (2; 6% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (2; 6% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (1; 3% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	no	no	INTJ	I	Foreign=Yes	0	root	0:root	_
2	s*it	s*it	X	T	Foreign=Yes	1	flat:foreign	1:flat	_
3	sherlock	Sherlock	PROPN	S	Case=Nom|Number=Sing	1	vocative	1:vocative	SpaceAfter=No
4	...	...	PUNCT	Z	_	1	punct	1:punct	_

~~~


