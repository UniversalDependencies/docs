---
layout: base
title:  'Statistics of aux:pass in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-aux.html">aux</a></tt>.

286 nodes (0%) are attached to their parents as `aux:pass`.

285 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13636363636364.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (282; 99% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:pass	color:blue
1	Было	быць	AUX	VBC	Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	aux:pass	_	_
2	напісана	напісаць	VERB	VBNH	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	што	што	SCONJ	IN	_	5	mark	_	_
5	ацёк	ацёк	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	ccomp	_	_
6	лёгкіх	лёгкае	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	5	nmod	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	а	а	CCONJ	CC	_	9	cc	_	_
9	паступала	паступаць	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
10	яна	яна	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
11	з	з	ADP	IN	_	12	case	_	_
12	пнэўманіяй	пнэўманія	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 20 aux:pass	color:blue
1	Вучыць	вучыць	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	4	xcomp	_	_
2	прафесійна	прафесійна	ADV	RB	Degree=Pos	3	advmod	_	_
3	сьвістаць	сьвістаць	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	1	xcomp	_	_
4	пачалі	пачаць	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	ў	у	ADP	IN	_	6	case	_	_
6	школках	школка	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	сьвіст	сьвіст	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obj	_	_
9	увялі	увесці	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	_
10	ў	у	ADP	IN	_	11	case	_	_
11	якасьці	якасьць	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	9	obl	_	_
12	абавязковага	абавязковы	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
13	прадмету	прадмет	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	_
14	на	на	ADP	IN	_	15	case	_	_
15	экзаменах	экзамена	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obl	_	_
16	у	у	ADP	IN	_	17	case	_	_
17	ВНУ	ВНУ	NOUN	NN	Abbr=Yes	15	nmod	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	22	punct	_	_
19	дзе	дзе	ADV	RB	Degree=Pos	22	advmod	_	_
20	былі	быць	AUX	VBC	Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	22	aux:pass	_	_
21	тэрмінова	тэрмінова	ADV	RB	Degree=Pos	22	advmod	_	_
22	створыны	створыць	ADJ	JJL	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	17	acl:relcl	_	_
23	кафедры	кафедра	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	22	nsubj:pass	_	_
24	сьвісту	сьвіст	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	23	nmod	_	SpaceAfter=No
25	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 aux:pass	color:blue
1	Палякі	паляк	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	3	nsubj:pass	_	_
2	былі	быць	AUX	VBC	Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	10	aux:pass	_	_
3	заангажаваныя	заангажаваць	VERB	VBNL	Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	ў	у	ADP	IN	_	6	case	_	_
5	беларускую	беларускі	ADJ	JJL	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	мову	мова	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	obl	_	_
7	больш	больш	ADV	RBR	Degree=Cmp	3	advmod	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	чым	чым	SCONJ	WP	_	10	case	_	_
10	насельніцтва	насельніцтва	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	obl	_	_
11	ў	у	ADP	IN	_	12	case	_	_
12	цэлым	цэлы	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	10	obl	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	21	punct	_	_
14	а	а	CCONJ	CC	_	21	cc	_	_
15	паводле	паводле	ADP	IN	_	16	case	_	_
16	паказьніку	паказьнік	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	21	orphan	_	_
17	мовы	мова	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	_
18	хатніх	хатні	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	19	amod	_	_
19	зносінаў	зносіна	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	17	nmod	_	_
20	—	—	PUNCT	PUNCT	_	16	punct	_	_
21	больш	больш	ADV	RBR	Degree=Cmp	7	conj	_	SpaceAfter=No
22	,	,	PUNCT	PUNCT	_	26	punct	_	_
23	чым	чым	SCONJ	IN	_	26	case	_	_
24	нават	нават	PART	UH	_	26	advmod	_	_
25	этнічныя	этнічны	ADJ	JJL	Case=Nom|Degree=Pos|Number=Plur	26	amod	_	_
26	беларусы	беларус	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	21	obl	_	SpaceAfter=No
27	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


