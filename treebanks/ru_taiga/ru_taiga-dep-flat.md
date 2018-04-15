---
layout: base
title:  'Statistics of flat in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="ru_taiga-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="ru_taiga-dep-flat-name.html">flat:name</a></tt>.

14 nodes (0%) are attached to their parents as `flat`.

14 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.64285714285714.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (7; 50% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-PART.html">PART</a></tt> (2; 14% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (2; 14% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 7% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	*	*	X	_	Foreign=Yes	5	parataxis	_	_
2	*	*	X	_	Foreign=Yes	1	flat	_	_
3	*	*	X	_	Foreign=Yes	1	flat	_	_
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	не	не	PART	_	Polarity=Neg	13	parataxis	_	_
2	не	не	PART	_	Polarity=Neg	1	flat	_	_
3	не	не	PART	_	Polarity=Neg	1	flat	_	SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	_
5	кроме	кроме	ADP	_	_	6	case	_	_
6	истории	история	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	13	obl	_	_
7	про	про	ADP	_	_	8	case	_	_
8	Депутата	депутат	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	nmod	_	_
9	Сидякина	Сидякин	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	8	appos	_	_
10	в	в	ADP	_	_	11	case	_	_
11	Антарктиде	Антарктида	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	8	nmod	_	_
12	была	быть	AUX	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	13	cop	_	_
13	история	история	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
14	про	про	ADP	_	_	15	case	_	_
15	то	то	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	13	nmod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	20	punct	_	_
17	как	как	SCONJ	_	_	20	mark	_	_
18	Жирик	Жирик	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	20	nsubj	_	_
19	его	он	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3	20	obj	_	_
20	увольнял	увольнял	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	15	acl	_	_
21	-	-	PUNCT	_	_	25	punct	_	_
22	но	но	CCONJ	_	_	25	cc	_	_
23	может	мочь	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	25	parataxis	_	_
24	я	я	PRON	_	Case=Nom|Number=Sing|Person=1	25	nsubj	_	_
25	путаю	путать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	13	conj	_	SpaceAfter=No
26	!	!	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	Хочу	хотеть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	-	-	PUNCT	_	_	1	punct	_	SpaceAfter=No
3	хочу	хотеть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	flat	_	SpaceAfter=No
4	-	-	PUNCT	_	_	1	punct	_	SpaceAfter=No
5	хочу	хотеть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	flat	_	_
6	их	они	PRON	_	Case=Acc|Number=Plur|Person=3	1	obj	_	SpaceAfter=No
7	!	!	PUNCT	_	_	1	punct	_	_
8	💜	💜	SYM	_	_	1	discourse	_	_

~~~


