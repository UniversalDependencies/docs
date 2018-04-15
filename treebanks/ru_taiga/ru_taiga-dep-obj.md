---
layout: base
title:  'Statistics of obj in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `obj`

This relation is universal.

821 nodes (4%) are attached to their parents as `obj`.

582 instances of `obj` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.86723507917174.

The following 18 pairs of parts of speech are connected with `obj`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (612; 75% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (136; 17% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (36; 4% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (11; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (8; 1% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obj	color:blue
1	Счастье	счастье	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
2	это	это	PART	_	_	3	cop	_	_
3	качество	качество	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	не	не	PART	_	Polarity=Neg	6	advmod	_	_
6	имеющее	иметь	VERB	_	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	3	acl	_	_
7	будущего	будущее	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	6	obj	_	_
8	и	и	CCONJ	_	_	9	cc	_	_
9	прошлого	прошлое	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 obj	color:blue
1	Но	но	CCONJ	_	_	2	cc	_	_
2	есть	быть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	мужчина	мужчина	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	которого	который	PRON	_	Case=Acc	10	obj	_	_
6	я	я	PRON	_	Case=Nom|Number=Sing|Person=1	8	nsubj	_	_
7	не	не	PART	_	Polarity=Neg	8	advmod	_	_
8	хотела	хотеть	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
9	бы	бы	PART	_	Mood=Cnd	8	aux	_	_
10	потерять	потерять	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	8	xcomp	_	SpaceAfter=No
11	...	...	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 obj	color:blue
1	А	а	CCONJ	_	_	10	cc	_	_
2	Явлинский	Явлинский	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
3	и	и	CCONJ	_	_	6	cc	_	_
4	его	его	DET	_	_	6	det	_	_
5	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	Яблоко	Яблоко	PROPN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	2	conj	_	SpaceAfter=No
7	"	"	PUNCT	_	_	6	punct	_	_
8	так	так	ADV	_	Degree=Pos	9	advmod	_	_
9	вообще	вообще	ADV	_	Degree=Pos	10	advmod	_	_
10	собираются	собираться	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
11	Крым	Крым	PROPN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	12	obj	_	_
12	вернуть	вернуть	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	10	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	_	_	10	punct	_	_

~~~


