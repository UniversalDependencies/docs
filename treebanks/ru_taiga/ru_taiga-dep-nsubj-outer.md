---
layout: base
title:  'Statistics of nsubj:outer in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ru_taiga-dep-nsubj-pass.html">nsubj:pass</a></tt>.

19 nodes (0%) are attached to their parents as `nsubj:outer`.

17 instances of `nsubj:outer` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.21052631578947.

The following 10 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (9; 47% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-INTJ.html">INTJ</a></tt> (1; 5% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
1	--	--	PUNCT	_	_	6	punct	_	_
2	Дом	дом	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj:outer	_	_
3	--	--	PUNCT	_	_	2	punct	_	_
4	это	это	PART	_	_	6	expl	_	_
5	когда	когда	SCONJ	_	_	6	mark	_	_
6	есть	быть	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Intr"|_
7	печка	печка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No
8	!	!	PUNCT	_	_	7	punct	_	_
9	--	--	PUNCT	_	_	10	punct	_	_
10	объяснил	объяснить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	parataxis	_	feat="Transit=Tran"|_
11	Кузька	Кузька	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	10	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	sent_after='</p>\n<p>'

~~~


~~~ conllu
# visual-style 49	bgColor:blue
# visual-style 49	fgColor:white
# visual-style 56	bgColor:blue
# visual-style 56	fgColor:white
# visual-style 56 49 nsubj:outer	color:blue
1	Читая	читать	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	7	advcl	_	feat="Transit=Tran"|_
2	сборники	сборник	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	1	obj	_	_
3	пословиц	пословица	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	2	nmod	_	_
4	и	и	CCONJ	_	_	5	cc	_	_
5	поговорок	поговорка	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	3	conj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	1	punct	_	_
7	поражаешься	поражаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	feat="Transit=Intr"|SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	сколько	сколько	NUM	_	Case=Nom|NumForm=Word|NumType=Card	7	ccomp	_	_
10	на	на	ADP	_	_	11	case	_	_
11	Руси	Русь	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	9	obl	_	_
12	было	быть	AUX	_	Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	feat="Transit=Intr"|_
13	поэтов	поэт	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	9	nsubj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	создавших	создать	VERB	_	Aspect=Perf|Case=Gen|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	13	acl	_	feat="Transit=Tran"|_
16	поистине	поистине	ADV	_	Degree=Pos	17	advmod	_	_
17	вечные	вечный	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	18	amod	_	_
18	образы	образ	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	15	obj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	20	punct	_	_
20	выразительные	выразительный	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	18	amod	_	SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	_
22	живописные	живописный	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	20	conj	_	SpaceAfter=No
23	,	,	PUNCT	_	_	24	punct	_	_
24	свежие	свежий	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	20	conj	_	SpaceAfter=No
25	:	:	PUNCT	_	_	28	punct	_	_
26	«	«	PUNCT	_	_	28	punct	_	SpaceAfter=No
27	Девица	девица	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	28	nsubj	_	_
28	красна	красный	ADJ	_	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	18	parataxis	_	_
29	в	в	ADP	_	_	30	case	_	_
30	хороводе	хоровод	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	28	obl	_	SpaceAfter=No
31	,	,	PUNCT	_	_	34	punct	_	_
32	как	как	SCONJ	_	_	34	case	_	_
33	маков	маков	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	34	amod	_	_
34	цвет	цвет	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	28	obl	_	_
35	в	в	ADP	_	_	36	case	_	_
36	огороде	огород	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	34	nmod	_	SpaceAfter=No
37	»	»	PUNCT	_	_	28	punct	_	SpaceAfter=No
38	,	,	PUNCT	_	_	47	punct	_	_
39	«	«	PUNCT	_	_	47	punct	_	SpaceAfter=No
40	Яблочко	яблочко	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	47	nsubj:outer	_	_
41	на	на	ADP	_	_	42	case	_	_
42	яблоньке	яблонька	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	40	nmod	_	_
43	--	--	PUNCT	_	_	40	punct	_	_
44	то	то	PART	_	_	47	expl	_	_
45	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	47	nsubj	_	_
46	у	у	ADP	_	_	47	case	_	_
47	меня	я	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	28	conj	_	SpaceAfter=No
48	;	;	PUNCT	_	_	56	punct	_	_
49	перстень	перстень	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	56	nsubj:outer	_	_
50	на	на	ADP	_	_	51	case	_	_
51	руке	рука	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	49	nmod	_	_
52	--	--	PUNCT	_	_	56	punct	_	_
53	то	то	PART	_	_	56	expl	_	_
54	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	56	nsubj	_	_
55	у	у	ADP	_	_	56	case	_	_
56	тебя	ты	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	47	conj	_	SpaceAfter=No
57	»	»	PUNCT	_	_	47	punct	_	SpaceAfter=No
58	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:outer	color:blue
1	Как	как	ADV	_	Degree=Pos|PronType=Rel	4	advmod	_	pos="ADVPRO"|_
2	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj:outer	_	_
3	ни	ни	PART	_	Polarity=Neg	4	advmod	_	_
4	странно	странный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	10	advcl	_	pos="PRED"|_
5	сознаться	сознаться	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Mid	4	csubj	_	feat="Transit=Intr"|SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	_
7	но	но	CCONJ	_	_	10	cc	_	_
8	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
9	не	не	PART	_	Polarity=Neg	10	advmod	_	_
10	чувствовала	чувствовать	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Tran"|_
11	ни	ни	PART	_	Polarity=Neg	12	advmod	_	_
12	малейшего	малейший	ADJ	_	Case=Gen|Degree=Sup|Gender=Neut|Number=Sing	13	amod	_	_
13	угрызения	угрызение	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	10	obj	_	_
14	совести	совесть	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	16	punct	_	_
16	спасая	спасать	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	10	advcl	_	feat="Transit=Tran"|_
17	таким	такой	DET	_	Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	18	det	_	_
18	оригинальным	оригинальный	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	_
19	путем	путь	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	16	iobj	_	_
20	Мушку	Мушка	PROPN	_	Animacy=Anim|Case=Acc|Gender=Fem|NameType=Prs|Number=Sing	16	obj	_	SpaceAfter=No
21	.	.	PUNCT	_	_	10	punct	_	sent_after='</p>\n<p>'

~~~


