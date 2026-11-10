---
layout: base
title:  'Statistics of nmod:float in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `nmod:float`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="ru_syntagrus-dep-nmod-pronmod.html">nmod:pronmod</a></tt>.

6 nodes (0%) are attached to their parents as `nmod:float`.

5 instances of `nmod:float` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.33333333333333.

The following 3 pairs of parts of speech are connected with `nmod:float`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (4; 67% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 17% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 nmod:float	color:blue
1	И	и	CCONJ	_	_	3	cc	3:cc	_
2	Ушаков	Ушаков	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	3	nsubj	3:nsubj	_
3	полз	ползти	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	по	по	ADP	_	_	5	case	5:case	_
5	снегу	снег	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	3	obl	3:obl:по:dat	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	7:punct	_
7	приподымался	приподниматься	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	3	conj	0:root|3:conj	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	9:punct	_
9	падал	падать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	0:root|3:conj	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	12:punct	_
11	опять	опять	ADV	_	Degree=Pos	12	advmod	12:advmod	_
12	полз	ползти	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	0:root|3:conj	SpaceAfter=No
13	,	,	PUNCT	_	_	16	punct	16:punct	_
14	весь	весь	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	16	nmod:float	16:nmod:nom	_
15	в	в	ADP	_	_	16	case	16:case	_
16	снегу	снег	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	12	obl:depict	12:obl:в:loc	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	18:punct	_
18	оставляя	оставлять	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	12	advcl	12:advcl	_
19	за	за	ADP	_	_	20	case	20:case	_
20	собой	себя	PRON	_	Case=Ins|PronType=Prs|Reflex=Yes	18	obl	18:obl:за:ins	_
21	широкий	широкий	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	23	amod	23:amod	_
22	кровавый	кровавый	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	23	amod	23:amod	_
23	след	след	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	18	obj	18:obj	SpaceAfter=No
24	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 nmod:float	color:blue
1	Трендоид	трендоид	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	платит	платить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	не	не	PART	_	Polarity=Neg	5	advmod	5:advmod	_
4	за	за	ADP	_	_	5	case	5:case	_
5	вещь	вещь	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	obl	2:obl:за:acc	SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	10:punct	_
7	а	а	CCONJ	_	_	10	cc	10:cc	_
8	за	за	ADP	_	_	10	case	10:case	_
9	ее	она	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	nmod	10:nmod:gen	_
10	использование	использование	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	5	conj	2:obl:за:acc|5:conj	_
11	первым	первый	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	10	nmod:float	10:nmod:ins	SpaceAfter=No
12	;	;	PUNCT	_	_	15	punct	5:punct	_
13	не	не	PART	_	Polarity=Neg	15	advmod	15:advmod	_
14	за	за	ADP	_	_	15	case	15:case	_
15	фильм	фильм	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	conj	2:obl:за:acc|5:conj	SpaceAfter=No
16	,	,	PUNCT	_	_	20	punct	20:punct	_
17	а	а	CCONJ	_	_	20	cc	20:cc	_
18	за	за	ADP	_	_	20	case	20:case	_
19	премьерный	премьерный	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	20	amod	20:amod	_
20	просмотр	просмотр	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	conj	2:obl:за:acc|5:conj	SpaceAfter=No
21	;	;	PUNCT	_	_	24	punct	5:punct	_
22	не	не	PART	_	Polarity=Neg	24	advmod	24:advmod	_
23	за	за	ADP	_	_	24	case	24:case	_
24	комфорт	комфорт	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	conj	2:obl:за:acc|5:conj	_
25	на	на	ADP	_	_	26	case	26:case	_
26	курорте	курорт	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	24	nmod	24:nmod:на:loc	SpaceAfter=No
27	,	,	PUNCT	_	_	31	punct	31:punct	_
28	а	а	CCONJ	_	_	31	cc	31:cc	_
29	за	за	ADP	_	_	31	case	31:case	_
30	высокий	высокий	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	31	amod	31:amod	_
31	сезон	сезон	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	26	conj	24:nmod:на:loc|26:conj	SpaceAfter=No
32	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 32 nmod:float	color:blue
1	По	по	ADP	_	_	3	case	3:case	_
2	главной	главный	ADJ	_	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	3	amod	3:amod	_
3	улице	улица	NOUN	_	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	12	obl	12:obl:по:dat	_
4	города	город	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	3:nmod:gen	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	7:punct	_
6	куда	куда	ADV	_	Degree=Pos|PronType=Rel	7	advmod	7:advmod	pos="ADVPRO"|_
7	выходила	выходить	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl:relcl	_
8	наша	наш	DET	_	Case=Nom|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det	10:det	_
9	Малая	малый	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	10	amod	10:amod	_
10	Блиновская	блиновский	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	nsubj	7:nsubj	SpaceAfter=No
11	,	,	PUNCT	_	_	3	punct	3:punct	_
12	гуляли	гулять	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
13	среди	среди	ADP	_	_	15	case	15:case	_
14	городской	городской	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	15	amod	15:amod	_
15	толпы	толпа	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	12	obl	12:obl:среди:gen	_
16	высокие	высокий	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	21	amod	21:amod	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	18:punct	_
18	стройные	стройный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	16	conj	16:conj|21:amod	SpaceAfter=No
19	,	,	PUNCT	_	_	16	punct	16:punct	_
20	светловолосые	светловолосый	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	21	amod	21:amod	_
21	мужчины	мужчина	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	12	nsubj	12:nsubj	_
22	и	и	CCONJ	_	_	29	cc	29:cc	_
23	под	под	ADP	_	_	24	case	24:case	_
24	стать	стать	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	29	nmod	29:nmod:под:acc	_
25	им	они	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	24	iobj	24:iobj	_
26	высокие	высокий	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	29	amod	29:amod	SpaceAfter=No
27	,	,	PUNCT	_	_	26	punct	29:punct	_
28	гибкие	гибкий	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	29	amod	29:amod	_
29	женщины	женщина	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Plur	21	conj	12:nsubj|21:conj	SpaceAfter=No
30	,	,	PUNCT	_	_	38	punct	38:punct	_
31	-	-	PUNCT	_	_	38	punct	38:punct	_
32	все	всё	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	38	nmod:float	38:nmod:nom	_
33	в	в	ADP	_	_	38	case	38:case	_
34	легкой	легкий	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	38	amod	38:amod	_
35	серой	серый	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	38	amod	38:amod	_
36	или	или	CCONJ	_	_	37	cc	37:cc	_
37	кремовой	кремовый	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	35	conj	35:conj|38:amod	_
38	фланели	фланель	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	29	nmod	29:nmod:в:loc	SpaceAfter=No
39	,	,	PUNCT	_	_	43	punct	43:punct	_
40	в	в	ADP	_	_	43	case	43:case	_
41	красивых	красивый	ADJ	_	Case=Loc|Degree=Pos|Number=Plur	43	amod	43:amod	_
42	мягких	мягкий	ADJ	_	Case=Loc|Degree=Pos|Number=Plur	43	amod	43:amod	_
43	туфлях	туфля	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	38	conj	29:parataxis|38:conj	_
44	на	на	ADP	_	_	47	case	47:case	_
45	толстой	толстый	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	47	amod	47:amod	_
46	каучуковой	каучуковый	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	47	amod	47:amod	_
47	подошве	подошва	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	43	nmod	43:nmod:на:loc	SpaceAfter=No
48	.	.	PUNCT	_	_	12	punct	12:punct	_

~~~


