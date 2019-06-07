---
layout: base
title:  'Statistics of discourse in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `discourse`

This relation is universal.

4 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.5.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADV.html">ADV</a></tt> (2; 50% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PART.html">PART</a></tt> (1; 25% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 discourse	color:blue
1	Так	так	ADV	RB	Degree=Pos	10	discourse	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	кіраўнікі	кіраўнік	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	_
4	рэгіянальных	рэгіянальны	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	5	amod	_	_
5	ячэек	ячэйка	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	3	nmod	_	_
6	пры	пры	ADP	IN	_	7	case	_	_
7	рэгістрацыі	рэгістрацыя	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	10	obl	_	_
8	ўдзельнікаў	удзельнік	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
9	структуры	структура	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	падманвалі	падманваць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	і	і	PART	UH	_	13	advmod:discourse	_	_
12	вышэйстаячых	вышэйстаячы	ADJ	JJL	Animacy=Anim|Case=Acc|Degree=Pos|Number=Plur	13	amod	_	_
13	кіраўнікоў	кіраўнік	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	10	obj	_	_
14	за	за	ADP	IN	_	15	case	_	_
15	мяжой	мяжа	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Ну	ну	PART	UH	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	і	і	CCONJ	CC	_	6	cc	_	_
4	таму	таму	ADV	RB	Degree=Pos	6	advmod	_	_
5	я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	вырашыла	вырашыць	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	вывучыць	вывучыць	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	6	xcomp	_	_
8	вашую	ваш	DET	PRP$	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	9	det	_	_
9	мову	мова	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 30 discourse	color:blue
1	Але	але	CCONJ	_	_	10	cc	_	_
2	вось	вось	PART	_	_	6	advmod:discourse	_	_
3	у	у	ADP	_	_	6	case	_	_
4	той	той	DET	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	det	_	_
5	самы	самы	DET	_	Case=Acc|Gender=Masc|Number=Sing	6	amod	_	_
6	час	час	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	даўным-даўно	даўным-даўно	ADV	_	_	10	advmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	жыў	жыць	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	адзін	адзін	DET	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	12	det	_	_
12	такі	такі	DET	_	Case=Nom|Gender=Masc|Number=Sing	13	det	_	_
13	Слон	слон	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	20	punct	_	_
15	або	або	CCONJ	_	_	20	cc	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	лепш	лепш	ADV	_	Degree=Cmp	20	parataxis	_	_
18	сказаць	сказаць	VERB	_	Aspect=Perf|VerbForm=Inf	17	csubj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	17	punct	_	_
20	Слонік	слонік	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	13	conj	_	SpaceAfter=No
21	,	,	PUNCT	_	_	25	punct	_	_
22	які	які	PRON	_	Case=Nom|Gender=Masc|Number=Sing	25	nsubj	_	_
23	быў	быць	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	25	cop	_	_
24	страшэнна	страшэнна	ADV	_	Degree=Pos	25	advmod	_	_
25	дапытлівы	дапытлівы	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	20	acl:relcl	_	SpaceAfter=No
26	,	,	PUNCT	_	_	37	punct	_	_
27	і	і	CCONJ	_	_	37	cc	_	_
28	каго	хто	PRON	_	Case=Gen|Number=Sing	33	obj	_	SpaceAfter=No
29	,	,	PUNCT	_	_	30	punct	_	_
30	бывала	бываць	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	33	discourse	_	SpaceAfter=No
31	,	,	PUNCT	_	_	30	punct	_	_
32	ні	ні	PART	_	Polarity=Neg	33	amod	_	_
33	ўбачыць	ўбачыць	VERB	_	Aspect=Perf|VerbForm=Inf	36	acl	_	SpaceAfter=No
34	,	,	PUNCT	_	_	33	punct	_	_
35	да	да	ADP	_	_	36	case	_	_
36	ўсіх	ўсе	PRON	_	Case=Gen|Number=Plur|Person=3	37	obl	_	_
37	прыстае	прыставаць	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	25	conj	_	_
38	з	з	ADP	_	_	39	case	_	_
39	роспытамі	роспыт	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	37	obl	_	SpaceAfter=No
40	.	.	PUNCT	_	_	10	punct	_	_

~~~


