---
layout: base
title:  'Statistics of obl:agent in UD_Belarusian'
udver: '2'
---

## Treebank Statistics: UD_Belarusian: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="be-dep-obl.html">obl</a></tt>.

5 nodes (0%) are attached to their parents as `obl:agent`.

4 instances of `obl:agent` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-PROPN.html">PROPN</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:agent	color:blue
1	Расказвалі	расказваць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	таксама	таксама	ADV	RB	Degree=Pos	1	advmod	_	_
3	пра	пра	ADP	IN	_	4	case	_	_
4	крыўды	крыўда	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	1	obl	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	выкліканыя	выклікаць	VERB	VBNL	Animacy=Inan|Aspect=Perf|Case=Acc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	4	acl	_	_
7	рускімі	рускі	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	6	obl:agent	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

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
8	Беларусбанка	беларусбанк	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
9	"	"	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	15	punct	_	_
11	які	які	PRON	WPA	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	15	nsubj	_	_
12	22	22	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	_
13	сакавіка	сакавік	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	15	obl	_	_
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
25	12	12	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	26	amod	_	_
26	сакавіка	сакавік	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	24	obl	_	_
27	Нацбанкам	нацбанк	PROPN	NNP	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	24	obl:agent	_	SpaceAfter=No
28	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


