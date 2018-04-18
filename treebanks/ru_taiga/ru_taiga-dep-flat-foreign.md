---
layout: base
title:  'Statistics of flat:foreign in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_taiga-dep-flat-name.html">flat:name</a></tt>.

48 nodes (0%) are attached to their parents as `flat:foreign`.

48 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.125.

The following 6 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (25; 52% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (11; 23% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (6; 13% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (3; 6% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (2; 4% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	RT	rt	NOUN	_	Foreign=Yes	0	root	_	_
2	@xxxxxx	@xxxxxx	X	_	_	1	flat:foreign	_	SpaceAfter=No
3	:	:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:foreign	color:blue
1	1	1	NUM	_	_	0	root	_	SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	_
3	Игровая	игровой	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	приставка	приставка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	parataxis	_	_
5	Sony	Sony	PROPN	_	Foreign=Yes	4	appos	_	_
6	PlayStation	Playstation	PROPN	_	Foreign=Yes	5	flat:foreign	_	_
7	4	4	NUM	_	_	5	nummod:entity	_	_
8	500	500	NUM	_	_	9	nummod:gov	_	SpaceAfter=No
9	GB	GB	PROPN	_	Foreign=Yes	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	@xxxxxx	@xxxxxx	X	_	_	6	nsubj	_	_
2	@xxxxxx	@xxxxxx	X	_	_	1	flat:foreign	_	_
3	@xxxxxx	@xxxxxx	X	_	_	2	flat:foreign	_	_
4	у	у	ADP	_	_	5	case	_	_
5	России	Россия	PROPN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
6	ворье	ворье	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
7	и	и	CCONJ	_	_	8	cc	_	_
8	предатели	предатель	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	6	conj	_	_
9	в	в	ADP	_	_	10	case	_	_
10	родстве	родство	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	8	nmod	_	SpaceAfter=No
11	...	...	PUNCT	_	_	10	punct	_	SpaceAfter=No
12	)	)	PUNCT	_	_	10	punct	_	SpaceAfter=No

~~~


