---
layout: base
title:  'Statistics of nsubj:outer in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ru_taiga-dep-nsubj-pass.html">nsubj:pass</a></tt>.

3 nodes (0%) are attached to their parents as `nsubj:outer`.

3 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.66666666666667.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 33% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:outer	color:blue
1	ресурс	ресурс	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	nsubj:outer	_	_
2	не	не	PART	_	Polarity=Neg	7	advmod	_	_
3	"	"	PUNCT	_	_	7	punct	_	SpaceAfter=No
4	воз	воз	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
5	и	и	PART	_	_	6	advmod	_	_
6	ныне	ныне	ADV	_	Degree=Pos	7	advmod	_	_
7	там	там	ADV	_	Degree=Pos|PronType=Dem	0	root	_	SpaceAfter=No
8	"	"	PUNCT	_	_	7	punct	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	а	а	CCONJ	_	_	11	cc	_	_
11	превратился	превратиться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	7	conj	_	_
12	в	в	ADP	_	_	14	case	_	_
13	мощный	мощный	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	_
14	бульдозер	бульдозер	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 nsubj:outer	color:blue
1	Единственное	единственный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	10	nsubj:outer	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	что	что	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	4	nsubj	_	_
4	имеет	иметь	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
5	значение	значение	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	4	obj	_	_
6	-	-	PUNCT	_	_	10	punct	_	_
7	это	это	PART	_	_	10	expl	_	_
8	кто	кто	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	10	nsubj	_	_
9	запись	запись	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	10	obj	_	_
10	распространил	распространить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_~

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 nsubj:outer	color:blue
1	Лучшая	лучший	ADJ	_	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing	2	amod	_	_
2	вещь	вещь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	10	nsubj:outer	_	_
3	в	в	ADP	_	_	4	case	_	_
4	жизни	жизнь	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	2	nmod	_	_
5	-	-	PUNCT	_	_	10	punct	_	_
6	это	это	PART	_	_	10	expl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	когда	когда	SCONJ	_	_	10	mark	_	_
9	тебя	ты	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	10	obj	_	_
10	любит	любить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	человек	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	_
13	который	который	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	14	nsubj	_	_
14	знает	знать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl:relcl	_	_
15	все	весь	DET	_	Animacy=Inan|Case=Acc|Number=Plur|PronType=Tot	17	det	_	_
16	твои	твой	DET	_	Animacy=Inan|Case=Acc|Number=Plur|Poss=Yes|PronType=Prs	17	det	_	_
17	недостатки	недостаток	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	14	obj	_	SpaceAfter=No
18	,	,	PUNCT	_	_	19	punct	_	_
19	ошибки	ошибка	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	17	conj	_	_
20	и	и	CCONJ	_	_	21	cc	_	_
21	слабости	слабость	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	17	conj	_	SpaceAfter=No
22	...	...	PUNCT	_	_	14	punct	_	SpaceAfter=No
23	и	и	CCONJ	_	_	24	cc	_	_
24	продолжает	продолжать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	conj	_	_
25	думать	думать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	24	xcomp	_	SpaceAfter=No
26	,	,	PUNCT	_	_	32	punct	_	_
27	что	что	SCONJ	_	_	32	mark	_	_
28	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	32	nsubj	_	_
29	всё	всё	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	32	advmod	_	_
30	равно	равный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	29	fixed	_	_
31	самая	самый	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Emp	32	det	_	_
32	лучшая	лучший	ADJ	_	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing	25	ccomp	_	_
33	на	на	ADP	_	_	34	case	_	_
34	свете	свет	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	32	obl	_	SpaceAfter=No
35	...	...	PUNCT	_	_	10	punct	_	_~

~~~


