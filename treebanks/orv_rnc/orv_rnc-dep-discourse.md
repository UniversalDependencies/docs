---
layout: base
title:  'Statistics of discourse in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `discourse`

This relation is universal.

29 nodes (0%) are attached to their parents as `discourse`.

24 instances of `discourse` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.48275862068966.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (26; 90% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-INTJ.html">INTJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 discourse	color:blue
1	Царь	царь	NOUN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	4	vocative	_	_
2	государь	государь	NOUN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	1	appos	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	смилуйся	смиловатися	VERB	Transit=Intr	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Reflex=Yes|VerbForm=Fin|Voice=Mid	0	root	_	_
5	пожалуй	пожаловати	VERB	Transit=Tran	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	4	discourse	_	SpaceAfter=No
6	!	!	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Оле	оле	INTJ	_	_	2	discourse	_	_
2	бѣда	бѣда	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	рещи	рещи	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	2	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	и	и	CCONJ	_	_	8	cc	_	_
7	безаконное	беззаконный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	8	amod	_	_
8	поумѣние	поумѣние	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	conj	_	_
9	тогда	тогда	ADV	_	Degree=Pos	10	advmod	_	_
10	обрѣте	обрѣсти	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	_
11	лукаво	лукавый	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	12	amod	_	_
12	зломыслие	зломыслие	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	10	obj	_	_
13	и	и	CCONJ	_	_	14	cc	_	_
14	кознь	кознь	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	12	conj	_	_
15	нечтивую	нечестивый	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	19	punct	_	_
17	не	не	PART	_	Polarity=Neg	19	advmod	_	_
18	язвами	язвами	NOUN	_	Case=Ins|Gender=Fem|Number=Plur	19	iobj	_	_
19	уязвити	уязвити	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	10	conj	_	_
20	кого	кто	PRON	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Rel	19	obj	_	SpaceAfter=No
21	,	,	PUNCT	_	_	27	punct	_	_
22	но	но	CCONJ	_	_	27	cc	_	_
23	вся	весь	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	27	obj	_	_
24	яже	иже	DET	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	27	nsubj	_	_
25	во	въ	ADP	_	_	26	case	_	_
26	гради	градъ	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	27	obl	_	_
27	погубити	погубити	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	19	conj	_	_
28	и	и	CCONJ	_	_	31	cc	_	_
29	зборищу	сборище	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	31	iobj	_	_
30	лукавому	лукавый	ADJ	_	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	29	amod	_	_
31	предати	предати	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	27	conj	_	SpaceAfter=No
32	,	,	PUNCT	_	_	35	punct	_	_
33	якоже	якоже	SCONJ	_	_	35	mark	_	_
34	тогда	тогда	ADV	_	Degree=Pos	35	advmod	_	_
35	ратоборющимся	ратоборющийся	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	31	advcl	_	SpaceAfter=No
36	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 discourse	color:blue
1	На	на	ADP	_	_	2	case	_	_
2	мьзды	мзда	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	4	obl	_	_
3	ли	ли	PART	_	_	4	advmod	_	_
4	предаеши	предаяти	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	врагом	врагъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	4	iobj	_	_
6	Новъгород	Новгородъ	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	о	о	INTJ	_	_	9	discourse	_	_
9	Упадыщче	Упадышко	PROPN	_	Case=Voc|Gender=Masc|Number=Sing	4	vocative	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	сладкаго	сладкий	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	12	amod	_	_
12	брашна	брашно	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	13	obj	_	_
13	вкусивъ	вкусити	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	4	advcl	_	_
14	в	въ	ADP	_	_	16	case	_	_
15	Великом	великий	ADJ	_	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	16	amod	_	_
16	Новѣградѣ	Новъградъ	PROPN	_	Case=Loc|Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No
17	?	?	PUNCT	_	_	4	punct	_	_

~~~


