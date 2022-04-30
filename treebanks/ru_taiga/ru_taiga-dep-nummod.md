---
layout: base
title:  'Statistics of nummod in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nummod`

This relation is universal.
There are 2 language-specific subtypes of `nummod`: <tt><a href="ru_taiga-dep-nummod-entity.html">nummod:entity</a></tt>, <tt><a href="ru_taiga-dep-nummod-gov.html">nummod:gov</a></tt>.

581 nodes (0%) are attached to their parents as `nummod`.

555 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25473321858864.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (514; 88% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (35; 6% instances), <tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 0% instances).


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
10	.	.	PUNCT	_	_	6	punct	_	_~

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	10	10	NUM	_	NumForm=Digit|NumType=Card	2	nummod:gov	_	_
2	лет	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	obl	_	_
3	проходил	проходить	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	в	в	ADP	_	_	5	case	_	_
5	ДСШ	ДСШ	NOUN	_	Abbr=Yes	3	obl	_	_
6	№	№	SYM	_	_	5	nummod:entity	_	_
7	1	1	NUM	_	NumForm=Digit|NumType=Card	6	nummod	_	_
8	в	в	ADP	_	_	9	case	_	_
9	Дятьково	Дятьково	PROPN	_	Animacy=Inan|Case=Loc|Gender=Neut|NameType=Geo|Number=Sing	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_~

~~~


