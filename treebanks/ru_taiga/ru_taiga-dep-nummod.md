---
layout: base
title:  'Statistics of nummod in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="ru_taiga-dep-nummod-gov.html">nummod:gov</a></tt>.

3750 nodes (0%) are attached to their parents as `nummod`.

3641 instances of `nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3488.

The following 12 pairs of parts of speech are connected with `nummod`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (3415; 91% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (176; 5% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (62; 2% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (37; 1% instances), <tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (21; 1% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="ru_taiga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Этому	этот	DET	_	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	моторчику	моторчик	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	5	iobj	_	_
3	сегодня	сегодня	ADV	_	Degree=Pos	5	advmod	_	_
4	1	1	NUM	_	NumForm=Digit|NumType=Card	5	nummod	_	_
5	год	год	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	и	и	CCONJ	_	_	8	cc	_	_
7	6	6	NUM	_	NumForm=Digit|NumType=Card	8	nummod:gov	_	_
8	месяцев	месяц	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	conj	_	SpaceAfter=No
9	🥰	🥰	SYM	_	_	5	discourse	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	Курс	курс	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
2	лечения	лечение	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	_
3	до	до	ADP	_	_	4	case	_	_
4	июля	июль	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	obl	_	_
5	будет	быть	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux	_	_
6	стоить	стоить	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	_	_
7	80	80	NUM	_	NumForm=Digit|NumType=Card	8	nummod:gov	_	_
8	тысяч	тысяча	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	9	nummod	_	_
9	рублей	рубль	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Мне	я	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	4	iobj	_	_
2	16,	16,	NUM	_	NumForm=Digit|NumType=Card	3	nummod	_	SpaceAfter=No
3	ему	он	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	iobj	_	_
4	17	17	NUM	_	NumForm=Digit|NumType=Card	0	root	_	_

~~~


