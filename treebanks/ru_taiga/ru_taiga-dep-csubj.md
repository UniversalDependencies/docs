---
layout: base
title:  'Statistics of csubj in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `csubj`

This relation is universal.

147 nodes (0%) are attached to their parents as `csubj`.

114 instances of `csubj` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66666666666667.

The following 11 pairs of parts of speech are connected with `csubj`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (59; 40% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (38; 26% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (24; 16% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (9; 6% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 csubj	color:blue
1	они	они	PRON	_	Case=Nom|Number=Plur|Person=3	3	nsubj	_	_
2	меня	я	PRON	_	Case=Acc|Number=Sing|Person=1	3	obj	_	_
3	пугают	пугать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	SpaceAfter=No
5	но	но	CCONJ	_	_	8	cc	_	_
6	в	в	ADP	_	_	7	case	_	_
7	жизни	жизнь	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	8	obl	_	_
8	надо	надо	VERB	_	_	3	conj	_	_
9	побывать	побывать	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	8	csubj	_	_
10	хоть	хоть	ADV	_	Degree=Pos	11	advmod	_	_
11	раз	раз	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obl	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	А	а	CCONJ	_	_	5	cc	_	_
2	как	как	ADV	_	Degree=Pos	5	advmod	_	_
3	туда	туда	ADV	_	Degree=Pos	4	advmod	_	_
4	добраться	добраться	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Mid	5	csubj	_	_
5	лучше	хорошо	ADJ	_	Degree=Cmp	0	root	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	Ребята	ребята	NOUN	_	Animacy=Anim|Case=Nom|Gender=Neut|Number=Plur	3	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	надо	надо	ADV	_	Degree=Pos	0	root	_	_
4	что-то	что-то	PRON	_	Case=Acc	5	obj	_	_
5	решать	решать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	3	csubj	_	SpaceAfter=No
6	!	!	PUNCT	_	_	3	punct	_	_

~~~


