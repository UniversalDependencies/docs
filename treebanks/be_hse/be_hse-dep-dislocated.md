---
layout: base
title:  'Statistics of dislocated in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `dislocated`

This relation is universal.

9 nodes (0%) are attached to their parents as `dislocated`.

8 instances of `dislocated` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.66666666666667.

The following 9 pairs of parts of speech are connected with `dislocated`: <tt><a href="be_hse-pos-DET.html">DET</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="be_hse-pos-DET.html">DET</a></tt>-<tt><a href="be_hse-pos-SYM.html">SYM</a></tt> (1; 11% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="be_hse-pos-NUM.html">NUM</a></tt>-<tt><a href="be_hse-pos-ADP.html">ADP</a></tt> (1; 11% instances), <tt><a href="be_hse-pos-PART.html">PART</a></tt>-<tt><a href="be_hse-pos-PART.html">PART</a></tt> (1; 11% instances), <tt><a href="be_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="be_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="be_hse-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (1; 11% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dislocated	color:blue
1	Нават	нават	ADV	RB	Degree=Pos	2	advmod	_	_
2	практыканты	практыкант	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	dislocated	_	_
3	і	і	CCONJ	CC	_	4	cc	_	_
4	тыя	той	DET	DT	Case=Nom|Number=Plur|PronType=Dem	5	nsubj	_	_
5	рэжуць	рэзаць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	добра	добра	ADV	RB	Degree=Pos	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	—	—	PUNCT	PUNCT	_	9	punct	_	_
9	казаў	казаць	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	parataxis	_	_
10	далей	далей	ADV	RBR	Degree=Cmp	9	advmod	_	_
11	дзядзька	дзядзька	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
12	Міхась	Міхась	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	11	appos	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 20 dislocated	color:blue
1	Ад	ад	ADP	IN	_	3	case	_	_
2	гэтага	гэты	DET	DT	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	раёна	раён	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	14	obl	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	які	які	PRON	WPA	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	6	nsubj	_	_
6	ўзнік	узнікнуць	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
7	яшчэ	яшчэ	ADV	RB	Degree=Pos	6	advmod	_	_
8	ў	у	ADP	IN	_	9	case	_	_
9	Сярэднявеччы	сярэднявечча	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	3	punct	_	_
11	у	у	ADP	IN	_	13	case	_	_
12	нашы	наш	DET	ORD	Animacy=Inan|Case=Acc|Number=Plur|Poss=Yes|PronType=Prs	13	det	_	_
13	дні	дзень	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	14	obl	_	_
14	засталіся	застацца	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
15	толькі	толькі	PART	UH	_	17	advmod	_	_
16	тры	тры	NUM	CD	Case=Nom|NumType=Card	17	nummod	_	_
17	дамы	дом	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	14	nsubj	_	_
18	–	–	PUNCT	PUNCT	_	19	punct	_	_
19	будынкі	будынак	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	17	appos	_	_
20	№	№	SYM	SYM	_	12	dislocated	_	SpaceAfter=No
21	№	№	SYM	SYM	_	22	compound	_	_
22	33	33	NUM	CD	Case=Gen|NumType=Card	19	appos	_	_
23	і	і	CCONJ	CC	_	24	cc	_	_
24	35	35	NUM	CD	Case=Gen|NumType=Card	22	conj	_	_
25	на	на	ADP	IN	_	27	case	_	_
26	самай	самы	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	27	amod	_	_
27	броўцы	броўка	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	20	nmod	_	_
28	Віцьбы	Віцьба	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	27	nmod	_	_
29	ля	ля	ADP	IN	_	31	case	_	_
30	Кастрычніцкага	кастрычніцкі	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	31	amod	_	_
31	моста	мост	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	27	nmod	_	SpaceAfter=No
32	,	,	PUNCT	PUNCT	_	35	punct	_	_
33	а	а	CCONJ	CC	_	35	cc	_	_
34	таксама	таксама	ADV	RB	Degree=Pos	33	fixed	_	_
35	дом	дом	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	17	conj	_	_
36	№	№	SYM	SYM	_	35	parataxis	_	_
37	35а	35а	NUM	IN	_	36	nummod	_	_
38	ў	у	ADP	IN	_	39	case	_	_
39	парку	парк	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	36	nmod	_	_
40	Фрунзэ	Фрунзэ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	39	nmod	_	SpaceAfter=No
41	.	.	PUNCT	PUNCT	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 dislocated	color:blue
1	Месца	месца	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	7	dislocated	_	_
2	роздуму	роздум	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	для	для	ADP	IN	_	4	case	_	_
4	наведвальнікаў	наведвальнік	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	_
5	Курапат	Курапаты	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	1	punct	_	_
7	лаўка	лаўка	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	_
8	сымвалізуе	сымвалізаваць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	такія	такі	DET	DT	Animacy=Inan|Case=Acc|Number=Plur|PronType=Dem	11	det	_	_
10	агульныя	агульны	ADJ	JJL	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	11	amod	_	_
11	каштоўнасці	каштоўнасць	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Fem|Number=Plur	8	obj	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	15	punct	_	_
13	як	як	SCONJ	IN	_	15	case	_	_
14	рашучае	рашучаць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	amod	_	_
15	процістаянне	процістаянне	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	9	obl	_	_
16	тыраніі	тыранія	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	_
17	і	і	CCONJ	CC	_	18	cc	_	_
18	тэрору	тэрор	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	16	conj	_	SpaceAfter=No
19	,	,	PUNCT	PUNCT	_	21	punct	_	_
20	і	і	CCONJ	CC	_	21	cc	_	_
21	надзею	надзея	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	11	conj	_	SpaceAfter=No
22	,	,	PUNCT	PUNCT	_	38	punct	_	_
23	што	што	SCONJ	IN	_	38	mark	_	_
24	падзеі	падзея	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	38	nsubj	_	SpaceAfter=No
25	,	,	PUNCT	PUNCT	_	27	punct	_	_
26	якія	які	PRON	WPA	Case=Nom|Number=Plur|PronType=Rel	27	nsubj	_	_
27	адбыліся	адбыцца	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Mid	24	acl:relcl	_	_
28	тут	тут	ADV	RB	Degree=Pos	27	advmod	_	_
29	восемдзесят	восемдзесят	NUM	CD	Animacy=Inan|Case=Acc|NumType=Card	30	nummod:gov	_	_
30	год	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	27	obl	_	_
31	таму	таму	ADV	RB	Degree=Pos	27	advmod	_	SpaceAfter=No
32	,	,	PUNCT	PUNCT	_	27	punct	_	_
33	болей	болей	ADV	RBR	Degree=Cmp	38	advmod	_	_
34	нідзе	нідзе	ADV	RB	Degree=Pos	38	advmod	_	_
35	і	і	CCONJ	CC	_	36	cc	_	_
36	ніколі	ніколі	ADV	RB	Degree=Pos	34	conj	_	_
37	не	не	PART	UH	Polarity=Neg	38	advmod	_	_
38	паўторацца	паўторацца	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Mid	21	acl	_	SpaceAfter=No
39	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


