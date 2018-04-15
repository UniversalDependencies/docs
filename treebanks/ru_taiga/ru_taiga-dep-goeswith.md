---
layout: base
title:  'Statistics of goeswith in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `goeswith`

This relation is universal.

24 nodes (0%) are attached to their parents as `goeswith`.

24 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04166666666667.

The following 18 pairs of parts of speech are connected with `goeswith`: <tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt> (2; 8% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (2; 8% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt> (2; 8% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-CCONJ.html">CCONJ</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (1; 4% instances), <tt><a href="ru_taiga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 goeswith	color:blue
1	Мне	я	PRON	_	Case=Dat|Number=Sing|Person=1	2	iobj	_	_
2	жалко	жалко	ADV	_	Degree=Pos	0	root	_	_
3	аксакала	аксакал	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	2	obj	_	_
4	Назарбаева	Назарбаев	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	appos	_	_
5	за	за	ADP	_	_	6	case	_	_
6	то	то	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	2	obl	_	_
7	что	что	SCONJ	_	_	12	mark	_	_
8	таких	такой	DET	_	Case=Gen|Number=Plur	12	nsubj	_	_
9	как	как	SCONJ	_	_	10	case	_	_
10	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2	8	obl	_	_
11	у	у	ADP	_	_	12	case	_	_
12	него	он	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3	6	acl:relcl	_	_
13	к	к	ADP	_	_	14	case	_	_
14	сожалению	сожаление	NOUN	_	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	15	parataxis	_	_
15	не	не	PART	_	Polarity=Neg	8	nummod:gov	_	_
16	мало	мало	ADV	_	Degree=Pos	15	goeswith	_	SpaceAfter=No
17	,	,	PUNCT	_	_	22	punct	_	SpaceAfter=No
18	поэтому	поэтому	ADV	_	Degree=Pos	22	advmod	_	_
19	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	22	nsubj	_	_
20	никак	никак	ADV	_	Degree=Pos	21	advmod	_	_
21	не	не	PART	_	Polarity=Neg	22	advmod	_	_
22	выйдет	выйти	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	12	advcl	_	_
23	из	из	ADP	_	_	25	case	_	_
24	под	под	ADP	_	_	23	goeswith	_	_
25	тисков	тиски	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	22	obl	_	_
26	России	Россия	PROPN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	25	nmod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	Теперь	теперь	ADV	_	Degree=Pos	4	orphan	_	_
2	какой	какой	DET	_	Case=Nom|Gender=Masc|Number=Sing	4	det	_	_
3	то	то	PART	_	_	2	goeswith	_	_
4	студент	студент	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	Было	быть	AUX	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
2	бы	бы	PART	_	Mood=Cnd	3	aux	_	_
3	не	не	PART	_	Polarity=Neg	0	root	_	_
4	плохо	плохой	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	3	goeswith	_	_
5	😆😈	😆😈	SYM	_	_	3	discourse	_	SpaceAfter=No
6	"	"	PUNCT	_	_	3	punct	_	_

~~~


