---
layout: base
title:  'Statistics of flat:foreign in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_taiga-dep-flat-name.html">flat:name</a></tt>.

58 nodes (0%) are attached to their parents as `flat:foreign`.

58 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1551724137931.

The following 6 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (28; 48% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (21; 36% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (5; 9% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	RT	rt	NOUN	_	Foreign=Yes	0	root	_	_
2	@xxxxxx	@xxxxxx	PROPN	_	_	1	flat:foreign	_	SpaceAfter=No
3	:	:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	P.	p.	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	S.	S.	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	flat:foreign	_	_
3	А	а	CCONJ	_	_	5	cc	_	_
4	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2	5	nsubj	_	_
5	заметил	заметить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	_
6	снежного	снежный	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_
7	воробья	воробей	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	5	obj	_	_
8	на	на	ADP	_	_	9	case	_	_
9	фото	фото	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	5	obl	_	SpaceAfter=No
10	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:foreign	color:blue
1	Fantastic	Fantastic	ADP	_	_	0	root	_	_
2	💯	💯	SYM	_	_	1	discourse	_	_
3	keep	keep	X	_	Foreign=Yes	1	parataxis	_	_
4	it	it	X	_	Foreign=Yes	3	flat:foreign	_	_
5	up	up	X	_	Foreign=Yes	3	flat:foreign	_	_
6	✌️	✌️	SYM	_	_	3	discourse	_	_

~~~


