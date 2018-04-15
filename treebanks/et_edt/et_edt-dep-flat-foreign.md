---
layout: base
title:  'Statistics of flat:foreign in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-flat.html">flat</a></tt>.

154 nodes (0%) are attached to their parents as `flat:foreign`.

154 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.80519480519481.

The following 11 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (123; 80% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (10; 6% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (6; 4% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:foreign	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	SpaceAfter=No
2	Po	po	X	Y	_	0	root	_	_
3	russkii	russkii	X	S	_	2	flat:foreign	_	_
4	gavarish	gavarish	X	S	_	2	flat:foreign	_	SpaceAfter=No
5	?	?	PUNCT	Z	_	2	punct	_	SpaceAfter=No
6	"	"	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 flat:foreign	color:blue
1	Ainult	ainult	ADV	D	_	3	advmod	_	_
2	viieks	viis	NUM	N	Case=Tra|Number=Sing|NumForm=Letter|NumType=Card	3	nummod	_	_
3	minutiks	minut	NOUN	S	Case=Tra|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	3	punct	_	_
5	please	please	X	T	_	3	flat:foreign	_	SpaceAfter=No
6	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat:foreign	color:blue
1	lihtsustatud	lihtsusta=tud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	4	acl	_	_
2	digitaalsete	digitaalne	ADJ	A	Case=Gen|Degree=Pos|Number=Plur	3	amod	_	_
3	õiguste	õigus	NOUN	S	Case=Gen|Number=Plur	4	nmod	_	_
4	haldust	haldus	NOUN	S	Case=Par|Number=Sing	0	root	_	_
5	(	(	PUNCT	Z	_	6	punct	_	SpaceAfter=No
6	DRM	DRM	NOUN	Y	Abbr=Yes	4	appos	_	_
7	-	-	PUNCT	Z	_	6	punct	_	_
8	Digital	Digital	PROPN	S	Case=Nom|Number=Sing	6	appos	_	_
9	Rights	Rights	PROPN	S	Case=Nom|Number=Sing	8	flat	_	_
10	management	management	X	S	_	8	flat:foreign	_	SpaceAfter=No
11	)	)	PUNCT	Z	_	6	punct	_	_

~~~


