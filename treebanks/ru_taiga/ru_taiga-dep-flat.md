---
layout: base
title:  'Statistics of flat in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="ru_taiga-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="ru_taiga-dep-flat-name.html">flat:name</a></tt>.

65 nodes (0%) are attached to their parents as `flat`.

65 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.41538461538462.

The following 9 pairs of parts of speech are connected with `flat`: <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (39; 60% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (11; 17% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (7; 11% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (2; 3% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat	color:blue
1	Каждый	каждый	DET	_	Case=Acc|Gender=Masc|Number=Sing	2	det	_	_
2	год	год	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obl	_	_
3	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
4	отмечается	отмечаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
5	в	в	ADP	_	_	10	case	_	_
6	одно	один	DET	_	Case=Acc|Gender=Neut|Number=Sing	10	det	_	_
7	и	и	CCONJ	_	_	8	cc	_	_
8	то	тот	DET	_	Case=Acc|Gender=Neut|Number=Sing	6	det	_	_
9	же	же	PART	_	_	8	fixed	_	_
10	время	время	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	4	obl	_	_
11	—	—	PUNCT	_	_	12	punct	_	_
12	19	19	ADJ	_	NumForm=Digit	10	appos	_	_
13	января	январь	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	12	flat	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	*	*	X	_	_	5	parataxis	_	_
2	*	*	X	_	_	1	flat	_	_
3	*	*	X	_	_	1	flat	_	_
4	На	на	ADP	_	_	5	case	_	_
5	рубахе	рубаха	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	0	root	_	_
6	прореха	прореха	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	черствый	черствый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	хлеб	хлеб	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
10	в	в	ADP	_	_	11	case	_	_
11	узелке	узелок	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	5	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	В	в	ADP	_	_	2	case	_	_
2	С-Петербурге	С-Петербург	PROPN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	_	_
3	решено	решить	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	устроить	устроить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	3	csubj:pass	_	_
5	на	на	ADP	_	_	6	case	_	_
6	9	9	NUM	_	NumForm=Digit	4	obl	_	_
7	мая	май	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	flat	_	_
8	акцию	акция	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
9	с	с	ADP	_	_	10	case	_	_
10	привлечение	привлечение	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	8	nmod	_	_
11	трёх	три	NUM	_	Case=Gen	12	nummod	_	_
12	сотен	сотня	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	10	nmod	_	_
13	ветеранов	ветеран	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


