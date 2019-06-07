---
layout: base
title:  'Statistics of obl:agent in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-obl.html">obl</a></tt>.

63 nodes (0%) are attached to their parents as `obl:agent`.

62 instances of `obl:agent` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58730158730159.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (60; 95% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:agent	color:blue
1	Прыняты	прыняць	VERB	DT	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
2	Палатай	палата	NOUN	JJL	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	1	obl:agent	_	_
3	прадстаўнiкоў	прадстаўнiк	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	_
4	3	3	ADJ	CD	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	1	obl	_	_
5	кастрычнiка	кастрычнiк	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
6	2002	2002	ADJ	CD	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	года	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 27 obl:agent	color:blue
1	Пра	пра	ADP	IN	_	2	case	_	_
2	гэта	гэта	PRON	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	3	obl	_	_
3	гаворыцца	гаворыцца	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
4	ў	ў	ADP	IN	_	6	case	_	_
5	афіцыйным	афіцыйны	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	6	amod	_	_
6	паведамленні	паведамленне	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	3	obl	_	_
7	"	"	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No
8	Беларусбанка	Беларусбанк	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
9	"	"	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	15	punct	_	_
11	які	які	PRON	WPA	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	15	nsubj	_	_
12	22	22	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	15	obl	_	_
13	сакавіка	сакавік	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	_
14	першым	першы	ADJ	ORD	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	15	obl	_	_
15	пратэставаў	пратэставаць	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	8	acl:relcl	_	_
16	банкаўскае	банкаўскi	ADJ	JJL	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	17	amod	_	_
17	абсталяванне	абсталяванне	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	15	obj	_	_
18	ў	ў	ADP	IN	_	19	case	_	_
19	рабоце	работа	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	15	obl	_	_
20	з	з	ADP	IN	_	22	case	_	_
21	новай	новы	ADJ	JJL	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	_
22	купюрай	купюра	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	19	nmod	_	SpaceAfter=No
23	,	,	PUNCT	PUNCT	_	24	punct	_	_
24	прэзентаванай	прэзентаваць	VERB	VBNL	Aspect=Perf|Case=Ins|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	22	acl	_	_
25	12	12	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	24	obl	_	_
26	сакавіка	сакавік	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	25	nmod	_	_
27	Нацбанкам	Нацбанк	PROPN	NNP	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	24	obl:agent	_	SpaceAfter=No
28	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 obl:agent	color:blue
1	Дзейнасць	дзейнасць	NOUN	VBC	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	22	nsubj	_	_
2	грамадзян	грамадзянiн	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	якiя	якi	PRON	NN	Case=Nom|Number=Plur	5	nsubj	_	_
5	ажыццяўляюць	ажыццяўляць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
6	вядзенне	вядзенне	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	5	obj	_	_
7	асабiстых	асабiсты	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	9	amod	_	_
8	падсобных	падсобны	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	9	amod	_	_
9	гаспадарак	гаспадарка	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	6	nmod	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	5	punct	_	_
11	па	па	ADP	IN	_	12	case	_	_
12	вытворчасцi	вытворчасць	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	14	punct	_	_
14	перапрацоўцы	перапрацоўка	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	12	conj	_	_
15	і	і	CCONJ	CC	_	16	cc	_	_
16	рэалiзацыi	рэалiзацыя	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	12	conj	_	_
17	вырабленай	вырабiць	VERB	JJL	Aspect=Perf|Case=Gen|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	20	acl	_	_
18	імі	яны	PRON	NN	Case=Ins|Number=Plur|Person=3	17	obl:agent	_	_
19	сельскагаспадарчай	сельскагаспадарчы	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	20	amod	_	_
20	прадукцыi	прадукцыя	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
21	не	не	PART	UH	_	22	advmod	_	_
22	адносiцца	адносiцца	VERB	VB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
23	да	да	ADP	IN	_	25	case	_	_
24	прадпрымальнiцкай	прадпрымальнiцкi	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	25	amod	_	_
25	дзейнасцi	дзейнасцi	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	22	obl	_	SpaceAfter=No
26	.	.	PUNCT	PUNCT	_	22	punct	_	_

~~~


