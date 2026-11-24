---
layout: base
title:  'Statistics of nummod:gov in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="uk_zhelekhivka-dep-nummod.html">nummod</a></tt>.

25 nodes (0%) are attached to their parents as `nummod:gov`.

25 instances of `nummod:gov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-NUM.html">NUM</a></tt> (23; 92% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod:gov	color:blue
1	В	в	ADP	ADP	Case=Loc	2	case	_	TokenRange=1147:1148
2	Нїмеччинї	Німеччина	PROPN	PROPN	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	6	obl	_	NameType=Geo|TokenRange=1149:1158
3	замісць	замість	ADP	ADP	Case=Gen	5	case	_	TokenRange=1159:1166
4	49	49	NUM	NUM	Case=Gen|NumType=Card	5	nummod:gov	_	TokenRange=1167:1169
5	мілїонів	мільйон	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|NumType=Card	6	obl	_	TokenRange=1170:1178
6	буде	бути	VERB	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	TokenRange=1179:1183
7	115	115	NUM	NUM	Case=Nom|NumType=Card	6	nsubj	_	SpaceAfter=No|TokenRange=1184:1187
8	.	.	PUNCT	PUNCT	_	6	punct	_	TokenRange=1187:1188

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 nummod:gov	color:blue
1	Напр	напр.	ADV	ADV	Abbr=Yes	14	parataxis	_	SpaceAfter=No|TokenRange=20003:20007
2	.	.	PUNCT	PUNCT	_	1	punct	_	TokenRange=20007:20008
3	р	р.	NOUN	NOUN	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|InflClass=Ind|Number=Sing	14	obl	_	SpaceAfter=No|TokenRange=20009:20010|Uninflect=Yes
4	.	.	PUNCT	PUNCT	_	3	punct	_	TokenRange=20010:20011
5	1889	1889	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing|NumType=Ord	3	amod	_	TokenRange=20012:20016
6	усїх	увесь	DET	DET	Case=Gen|Number=Plur|PronType=Tot	10	det	_	TokenRange=20017:20021
7	«	«	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No|TokenRange=20022:20023
8	прямих	прямий	ADJ	ADJ	Case=Gen|Degree=Pos|Number=Plur	10	amod	_	SpaceAfter=No|TokenRange=20023:20029
9	»	»	PUNCT	PUNCT	_	8	punct	_	TokenRange=20029:20030
10	податків	податок	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	20	nmod	_	TokenRange=20031:20039
11	на	на	ADP	ADP	Case=Acc	13	case	_	TokenRange=20040:20042
12	50	50	NUM	NUM	Case=Acc|NumType=Card	13	nummod:gov	_	TokenRange=20043:20045
13	ґубернїй	губернія	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	14	obl	_	TokenRange=20046:20054
14	призначено	призначити	VERB	VERB	Aspect=Perf|Mood=Ind|Person=0|VerbForm=Fin	0	root	_	TokenRange=20055:20065
15	було	бути	AUX	AUX	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	14	aux	_	TokenRange=20066:20070
16	і	і	CCONJ	CCONJ	_	17	cc	_	TokenRange=20071:20072
17	зібрано	зібрати	VERB	VERB	Aspect=Perf|Mood=Ind|Person=0|VerbForm=Fin	14	conj	_	TokenRange=20073:20080
18	167	167	NUM	NUM	Case=Acc|NumType=Card	19	nummod:gov	_	TokenRange=20081:20084
19	мілїонів	мільйон	NOUN	NUM	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|NumType=Card	20	nummod:gov	_	TokenRange=20085:20093
20	руб	руб.	NOUN	NOUN	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|InflClass=Ind|Number=Plur	17	obj	_	SpaceAfter=No|TokenRange=20094:20097
21	.	.	PUNCT	PUNCT	_	20	punct	_	TokenRange=20097:20098
22	і	і	CCONJ	CCONJ	_	25	cc	_	TokenRange=20099:20100
23	з	з	ADP	ADP	Case=Gen	24	case	_	TokenRange=20101:20102
24	них	вони	PRON	PRON	Case=Gen|Number=Plur|Person=3|PronType=Prs	25	obl	_	TokenRange=20103:20106
25	упало	упасти	VERB	VERB	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	14	conj	_	TokenRange=20107:20112
26	на	на	ADP	ADP	Case=Acc	27	case	_	TokenRange=20113:20115
27	крестян	крестянин	NOUN	NOUN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	25	obl	_	TokenRange=20116:20123
28	129½	129½	NUM	NUM	Case=Nom|NumType=Card	29	nummod:gov	_	TokenRange=20124:20128
29	мілїонів	мільйон	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	25	nsubj	_	SpaceAfter=No|TokenRange=20129:20137
30	.	.	PUNCT	PUNCT	_	14	punct	_	SpacesAfter=\r\n\r\n\s\r\n\r\n|TokenRange=20137:20138

~~~


