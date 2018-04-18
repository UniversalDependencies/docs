---
layout: base
title:  'Statistics of dep in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `dep`

This relation is universal.

5 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.4.

The following 5 pairs of parts of speech are connected with `dep`: <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 20% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 20% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dep	color:blue
1	...	...	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	наука	наука	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	должна	должен	ADJ	_	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	0	root	_	_
4	не	не	PART	_	Polarity=Neg	5	advmod	_	_
5	получать	получать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	3	dep	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	а	а	CCONJ	_	_	8	cc	_	_
8	зарабатывать	зарабатывать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	5	conj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dep	color:blue
1	некую	некий	DET	_	Case=Acc|Gender=Fem|Number=Sing	4	dep	_	_
2	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
3	гражданскую	гражданский	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	силу	сила	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	10	obj	_	SpaceAfter=No
5	"	"	PUNCT	_	_	4	punct	_	_
6	раньше	раньше	ADV	_	Degree=Cmp	10	advmod	_	_
7	на	на	ADP	_	_	9	case	_	_
8	всех	весь	DET	_	Case=Loc|Number=Plur	9	det	_	_
9	дебатах	дебаты	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	10	obl	_	_
10	представлял	представлять	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	хач	хач	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep	color:blue
1	мороженька	мороженька	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	от	от	ADP	_	_	4	case	_	_
3	Жириновского	Жириновский	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
4	слова	слово	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	5	dep	_	_
5	словами	слово	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Plur	1	nmod	_	_
6	"	"	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	любимой	любимый	ADJ	_	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	прессе	пресса	NOUN	_	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
9	"	"	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	)))	)))	SYM	_	_	8	discourse	_	_

~~~


