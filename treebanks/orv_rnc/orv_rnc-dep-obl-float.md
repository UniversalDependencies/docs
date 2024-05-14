---
layout: base
title:  'Statistics of obl:float in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `obl:float`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="orv_rnc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_rnc-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_rnc-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="orv_rnc-dep-obl-tmod.html">obl:tmod</a></tt>.

53 nodes (0%) are attached to their parents as `obl:float`.

41 instances of `obl:float` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11320754716981.

The following 7 pairs of parts of speech are connected with `obl:float`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (42; 79% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (4; 8% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (2; 4% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (2; 4% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 obl:float	color:blue
1	А	а	CCONJ	_	_	2	cc	_	Norm="А"
2	ведают	вѣдати	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Norm="ведают"
3	их	они	PRON	_	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	obj	_	Norm="их"
4	и	и	CCONJ	_	_	5	cc	_	Norm="и"
5	судят	судити	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	Norm="судят"
6	Кузма	Кузьма	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	2	nsubj	_	Norm="Кузма"
7	да	да	CCONJ	_	_	8	cc	_	Norm="да"
8	Осип	Осипъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	6	conj	_	Norm="Осип"
9	сами	самъ	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Emp	2	obl:float	_	Norm="сами"|SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	Norm="."

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 obl:float	color:blue
1	А	а	CCONJ	_	_	5	cc	_	wf="А"
2	у	у	ADP	_	_	3	case	_	wf="у"
3	насъ	мы	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	5	obl	_	wf="насъ"
4	все	весь	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	5	nsubj	_	wf="все"
5	здорово	здоровый	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	wf="здорово"|SpaceAfter=No
6	;	;	PUNCT	_	_	11	punct	_	wf=";"
7	а	а	CCONJ	_	_	11	cc	_	wf="а"
8	о	о	ADP	_	_	9	case	_	wf="о"
9	судахъ	судъ	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	11	obl	_	wf="судахъ"
10	паки	паки	ADV	_	Degree=Pos	11	advmod	_	wf="паки"
11	потвержаю	потвержати	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	wf="потвержаю"|SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	wf=","
13	что	что	SCONJ	_	_	15	mark	_	wf="что"
14	зело	зѣло	ADV	_	Degree=Pos	15	advmod	_	wf="зело"
15	хороши	хороший	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Variant=Short	11	ccomp	_	wf="хороши"
16	всѣ	весь	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	15	obl:float	_	wf="всѣ"|SpaceAfter=No
17	,	,	PUNCT	_	_	24	punct	_	wf=","
18	і	и	CCONJ	_	_	24	cc	_	wf="і"
19	о	о	ADP	_	_	20	case	_	wf="о"
20	томъ	то	PRON	_	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	24	obl	_	wf="томъ"
21	Тиханъ	Тихонъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	24	nsubj	_	wf="Тиханъ"
22	Микитичь	Микитичь	PROPN	_	Case=Nom|Gender=Masc|NameType=Pat|Number=Sing	21	appos	_	wf="Микитичь"
23	самъ	самъ	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	24	obl:float	_	wf="самъ"
24	известитъ	извѣстити	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	11	conj	_	wf="известитъ"|SpaceAfter=No
25	.	.	PUNCT	_	_	5	punct	_	wf="."

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:float	color:blue
1	А	а	CCONJ	_	_	2	cc	_	wf="А"
2	быт(ь)	быти	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	wf="быть"
3	тебе	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	2	iobj	_	wf="тебе"
4	прикащику	приказчикъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	3	appos	_	wf="прикащику"
5	и	и	CCONJ	_	_	12	cc	_	wf="и"
6	выборным	выборный	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	wf="выборным"
7	самим	самъ	DET	_	Case=Dat|Gender=Masc|Number=Plur|PronType=Emp	4	obl:float	_	wf="самим"
8	с	съ	ADP	_	_	9	case	_	wf="с"
9	мясами	мясо	NOUN	_	Case=Ins|Gender=Neut|Number=Plur	2	obl	_	wf="мясами"
10	и	и	CCONJ	_	_	12	cc	_	wf="и"
11	с	съ	ADP	_	_	12	case	_	wf="с"
12	сукнами	сукно	NOUN	_	Case=Ins|Gender=Neut|Number=Plur	9	conj	_	wf="сукнами"
13	и	и	CCONJ	_	_	15	cc	_	wf="и"
14	с	съ	ADP	_	_	15	case	_	wf="с"
15	холстами	холстъ	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	9	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	26	punct	_	wf=","
17	и	и	CCONJ	_	_	26	cc	_	wf="и"
18	лапти	лапоть	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	26	nsubj	_	wf="лапти"
19	б	бъ	AUX	_	Analyt=Yes|Mood=Cnd	26	aux	_	wf="б"
20	и	и	CCONJ	_	_	21	cc	_	wf="и"
21	веревки	веревка	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	18	conj	_	wf="веревки"
22	и	и	CCONJ	_	_	23	cc	_	wf="и"
23	шлеи	шлея	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	18	conj	_	wf="шлеи"
24	все	весь	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	26	obl:float	_	wf="все"
25	была	быти	AUX	_	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	26	cop	_	wf="была"
26	готова	готовый	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	2	conj	_	SpaceAfter=No
27	,	,	PUNCT	_	_	29	punct	_	wf=","
28	добрые	добрый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	29	amod	_	wf="добрые"
29	лапти	лапоть	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	26	parataxis	_	wf="лапти"
30	сполна	сполна	ADV	_	Degree=Pos	29	advmod	_	SpaceAfter=No
31	,	,	PUNCT	_	_	37	punct	_	wf=","
32	и	и	CCONJ	_	_	37	cc	_	wf="и"
33	всему	весь	DET	_	Case=Dat|Gender=Neut|Number=Sing|PronType=Tot	38	nmod	_	wf="всему"
34	б	бъ	AUX	_	Analyt=Yes|Mood=Cnd	37	aux	_	wf="б"
35	у	у	ADP	_	_	36	case	_	wf="у"
36	вас	вы	PRON	_	Case=Gen|Number=Plur|Person=2|PronType=Prs	37	obl	_	wf="вас"
37	была	быти	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	2	conj	_	wf="была"
38	роспис(ь)	роспись	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	37	nsubj	_	wf="роспись"
39	именно	именно	ADV	_	Degree=Pos	38	advmod	_	wf="именно"
40	порознь	порознь	ADV	_	Degree=Pos	38	advmod	_	SpaceAfter=No
41	,	,	PUNCT	_	_	47	punct	_	wf=","
42	с	съ	ADP	_	_	43	case	_	wf="с"
43	ково	кто	PRON	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Rel	47	obl	_	SpaceAfter=No
44	,	,	PUNCT	_	_	45	punct	_	wf=","
45	скол(ь)ко	сколько	NUM	_	Case=Acc|NumForm=Word|NumType=Card	43	conj	_	wf="сколько"
46	чево	что	PRON	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Rel	43	conj	_	wf="чево"
47	взяв	взяти	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	49	advcl	_	SpaceAfter=No
48	,	,	PUNCT	_	_	47	punct	_	wf=","
49	пошлетя	послати	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	38	acl:relcl	_	SpaceAfter=No
50	.	.	PUNCT	_	_	2	punct	_	wf="."

~~~


