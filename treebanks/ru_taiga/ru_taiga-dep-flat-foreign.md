---
layout: base
title:  'Statistics of flat:foreign in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_taiga-dep-flat-name.html">flat:name</a></tt>.

248 nodes (0%) are attached to their parents as `flat:foreign`.

248 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.42338709677419.

The following 12 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (172; 69% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (29; 12% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (21; 8% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (7; 3% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (5; 2% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (4; 2% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	P.	p.	X	_	Foreign=Yes	0	root	_	SpaceAfter=No
2	S.	S.	X	_	Foreign=Yes	1	flat:foreign	_	_
3	А	а	CCONJ	_	_	5	cc	_	_
4	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
5	заметил	заметить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	_
6	снежного	снежный	ADJ	_	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	воробья	воробей	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	5	obj	_	_
8	на	на	ADP	_	_	9	case	_	_
9	фото	фото	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	5	obl	_	SpaceAfter=No
10	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	RT	rt	X	_	Foreign=Yes	0	root	_	_
2	@xxxxxx	@xxxxxx	PROPN	_	NameType=Prs	1	flat:foreign	_	SpaceAfter=No
3	:	:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:foreign	color:blue
1	Мне	я	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	iobj	_	_
2	оч.	очень	ADV	_	Abbr=Yes	3	advmod	_	_
3	понравился	понравиться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
4	отель	отель	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
5	Lindner	Lindner	X	_	Foreign=Yes	4	flat:foreign	_	_
6	Hotel	Hotel	X	_	Foreign=Yes	4	flat:foreign	_	_
7	Prague	Prague	X	_	Foreign=Yes	4	flat:foreign	_	_
8	Castle	Castle	X	_	Foreign=Yes	4	flat:foreign	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_~

~~~


