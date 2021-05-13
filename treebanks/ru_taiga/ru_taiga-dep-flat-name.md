---
layout: base
title:  'Statistics of flat:name in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_taiga-dep-flat-foreign.html">flat:foreign</a></tt>.

539 nodes (0%) are attached to their parents as `flat:name`.

539 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.23191094619666.

The following 12 pairs of parts of speech are connected with `flat:name`: <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (507; 94% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (11; 2% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (5; 1% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	Славный	славный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	винни	Винни	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Prs|Number=Sing	0	root	_	_
3	пух	Пух	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Prs|Number=Sing	2	flat:name	_	SpaceAfter=No
4	)	)	SYM	_	_	2	discourse	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	И	и	CCONJ	_	_	7	cc	_	_
2	что	что	SCONJ	_	_	7	mark	_	SpaceAfter=No
3	5)	5)	SYM	_	_	7	parataxis	_	_
4	Товарищ	товарищ	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
5	Сталин	Сталин	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	4	flat:name	_	_
6	это	это	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	obj	_	_
7	сделал	сделать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	потому	потому	ADV	_	Degree=Pos|PronType=Dem	11	mark	_	_
9	что	что	SCONJ	_	_	8	fixed	_	_
10	настоящий	настоящий	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
11	ИМПЕРЕЦ	имперец	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	acl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Исполнитель	исполнитель	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	SpaceAfter=No
2	:	:	PUNCT	_	_	1	punct	_	_
3	Leslie	Leslie	X	_	Foreign=Yes	0	root	_	_
4	Howard	Howard	X	_	Foreign=Yes	3	flat:name	_	_

~~~


