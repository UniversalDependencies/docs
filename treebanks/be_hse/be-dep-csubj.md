---
layout: base
title:  'Statistics of csubj in UD_Belarusian'
udver: '2'
---

## Treebank Statistics: UD_Belarusian: Relations: `csubj`

This relation is universal.

7 nodes (0%) are attached to their parents as `csubj`.

7 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.85714285714286.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="be-pos-ADV.html">ADV</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (4; 57% instances), <tt><a href="be-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	Асобна	асобна	ADV	_	Degree=Pos	2	advmod	_	_
2	можна	можна	ADV	_	Degree=Pos	0	root	_	_
3	размаўляць	размаўляць	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	2	csubj	_	_
4	пра	пра	ADP	_	_	5	case	_	_
5	вытворчасць	вытворчасць	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	3	obl	_	_
6	бульбы	бульба	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 25 csubj	color:blue
1	А	а	CCONJ	_	_	9	cc	_	_
2	Сняжана	Сняжана	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
3	Міхейцава	Міхейцава	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	2	flat:name	_	_
4	з	з	ADP	_	_	8	case	_	_
5	Віцебскага	віцебскi	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
6	дзяржаўнага	дзяржаўны	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
7	тэхналагічнага	тэхналагічны	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	ўніверсітэта	універсітэт	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
9	марыць	марыць	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	аб	аб	ADP	_	_	11	case	_	_
11	тым	тое	PRON	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	9	obl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	16	punct	_	_
13	каб	каб	SCONJ	_	_	16	mark	_	_
14	беларускія	беларускі	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	15	amod	_	_
15	вучоныя	вучоны	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	16	nsubj	_	_
16	вынайшлі	вынайсці	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	11	acl	_	_
17	дамскую	дамскi	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	_
18	сумачку	сумачка	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	16	obj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	24	punct	_	_
20	у	у	ADP	_	_	21	case	_	_
21	якой	які	PRON	_	Case=Loc	25	obl	_	_
22	усё	усё	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	25	obj	_	_
23	будзе	быць	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	24	aux	_	_
24	лёгка	лёгкi	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	18	acl:relcl	_	_
25	знайсці	знайсці	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	24	csubj	_	_
26	пры	пры	ADP	_	_	29	case	_	_
27	дапамозе	дапамога	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	26	fixed	_	_
28	галасавых	галасавы	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	29	amod	_	_
29	каманд	каманда	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	25	obl	_	SpaceAfter=No
30	,	,	PUNCT	_	_	33	punct	_	_
31	і	і	CCONJ	_	_	33	cc	_	_
32	мужчынскія	мужчынскі	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	33	amod	_	_
33	шкарпэткі	шкарпэтка	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	18	conj	_	SpaceAfter=No
34	,	,	PUNCT	_	_	37	punct	_	_
35	якія	які	PRON	_	Case=Nom|Number=Plur	37	nsubj	_	_
36	самі	сам	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	35	amod	_	_
37	знаходзяць	знаходзіць	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	33	acl:relcl	_	_
38	сваю	свой	DET	_	Case=Acc|Gender=Fem|Number=Sing	39	det	_	_
39	пару	пара	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	37	obj	_	SpaceAfter=No
40	.	.	PUNCT	_	_	9	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 csubj	color:blue
1	І	і	CCONJ	CC	_	3	cc	_	_
2	мне	я	PRON	PRP	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	obj	_	_
3	здаецца	здавацца	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	10	punct	_	_
5	што	што	SCONJ	IN	_	10	mark	_	_
6	ў	ў	ADP	IN	_	7	case	_	_
7	вас	вы	PRON	PRP	Case=Gen|Number=Plur|Person=2|PronType=Prs	10	nmod	_	_
8	тая	той	DET	DT	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	10	det	_	_
9	ж	ж	PART	UH	_	8	advmod:discourse	_	_
10	сітуацыя	сітуацыя	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	csubj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


