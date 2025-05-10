---
layout: base
title:  'Statistics of obl:float in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `obl:float`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_taiga-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_taiga-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="ru_taiga-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="ru_taiga-dep-obl-tmod.html">obl:tmod</a></tt>.

1093 nodes (0%) are attached to their parents as `obl:float`.

831 instances of `obl:float` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.65416285452882.

The following 16 pairs of parts of speech are connected with `obl:float`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (880; 81% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (98; 9% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (42; 4% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (34; 3% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:float	color:blue
1	--	--	PUNCT	_	_	3	punct	_	_
2	Сама	сам	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Emp	3	obl:float	_	_
3	рисуй	рисовать	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Tran"|SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	мне	я	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	6	iobj	_	_
6	некогда	некогда	VERB	_	Polarity=Neg	3	conj	_	pos="PRED"|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	--	--	PUNCT	_	_	9	punct	_	_
9	пытался	пытаться	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	3	parataxis	_	feat="Transit=Intr"|_
10	отвязаться	отвязаться	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Mid	9	xcomp	_	feat="Transit=Intr"|_
11	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	sent_after='</p>\n<p>'

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:float	color:blue
1	Даль	Даль	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	3	nsubj	_	_
2	первым	первый	ADJ	_	Case=Ins|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	3	obl:float	_	pos="ANUM"|_
3	назвал	назвать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Tran"|_
4	свой	свой	DET	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	_
5	словарь	словарь	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
6	толковым	толковый	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:float	color:blue
1	Звук	звук	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	артикуляции	артикуляция	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	1	conj	_	_
4	сами	сам	DET	_	Case=Nom|Number=Plur|PronType=Emp	5	obl:float	_	_
5	процессуальны	процессуальный	ADJ	_	Degree=Pos|Number=Plur|Variant=Short	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


