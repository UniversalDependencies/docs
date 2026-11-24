---
layout: base
title:  'Statistics of expl in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="uk_zhelekhivka-dep-expl-pv.html">expl:pv</a></tt>.

10 nodes (0%) are attached to their parents as `expl`.

10 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9.

The following 5 pairs of parts of speech are connected with `expl`: <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (6; 60% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (1; 10% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="uk_zhelekhivka-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl	color:blue
1	Громада	громада	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	SpaceAfter=No|TokenRange=6131:6138
2	,	,	PUNCT	PUNCT	_	3	punct	_	TokenRange=6138:6139
3	суспільність	суспільність	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	conj	_	SpaceAfter=No|TokenRange=6140:6152
4	,	,	PUNCT	PUNCT	_	5	punct	_	TokenRange=6152:6153
5	народ	народ	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	conj	_	SpaceAfter=No|TokenRange=6154:6159
6	,	,	PUNCT	PUNCT	_	9	punct	_	TokenRange=6159:6160
7	—	—	PUNCT	PUNCT	_	9	punct	_	TokenRange=6161:6162
8	отсе	оце	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	expl	_	TokenRange=6163:6167
9	ціль	ціль	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	TokenRange=6168:6172
10	всеї	весь	DET	DET	Case=Gen|Gender=Fem|Number=Sing|PronType=Tot	11	det	_	TokenRange=6173:6177
11	праці	праця	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	TokenRange=6178:6183
12	Драгоманова	Драгоманов	PROPN	PROPN	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	11	nmod	_	NameType=Sur|SpaceAfter=No|TokenRange=6184:6195
13	.	.	PUNCT	PUNCT	_	9	punct	_	TokenRange=6195:6196

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	—	—	PUNCT	PUNCT	_	5	punct	_	TokenRange=1956:1957
2	Отсе	отсе	PART	PART	_	5	expl	_	TokenRange=1958:1962
3	ці	цей	DET	DET	Case=Nom|Number=Plur|PronType=Dem	5	det	_	TokenRange=1963:1965
4	чудові	чудовий	ADJ	ADJ	Case=Nom|Degree=Pos|Number=Plur	5	amod	_	TokenRange=1966:1972
5	прикмети	прикмета	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	0	root	_	TokenRange=1973:1981
6	Драгоманова	Драгоманов	PROPN	PROPN	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	5	nmod	_	NameType=Sur|TokenRange=1982:1993
7	як	як	SCONJ	SCONJ	_	8	mark	_	TokenRange=1994:1996
8	людини	людина	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	6	appos	_	SpaceAfter=No|TokenRange=1997:2003
9	,	,	PUNCT	PUNCT	_	10	punct	_	TokenRange=2003:2004
10	прикмети	прикмета	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	5	conj	_	SpaceAfter=No|TokenRange=2005:2013
11	,	,	PUNCT	PUNCT	_	20	punct	_	TokenRange=2013:2014
12	які	який	PRON	DET	Case=Nom|Number=Plur|PronType=Rel	20	nsubj	_	TokenRange=2015:2018
13	для	для	ADP	ADP	Case=Gen	14	case	_	TokenRange=2019:2022
14	виховання	виховання	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	20	obl	_	TokenRange=2023:2032
15	молодіжи	молодіж	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	14	nmod	_	TokenRange=2033:2041
16	є	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	TokenRange=2042:2043
17	немов	немов	PART	PART	_	20	discourse	_	TokenRange=2044:2049
18	цими	цей	DET	DET	Case=Ins|Number=Plur|PronType=Dem	20	det	_	TokenRange=2050:2054
19	угольними	угольний	ADJ	ADJ	Case=Ins|Number=Plur	20	amod	_	TokenRange=2055:2064
20	камінями	камінь	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	10	acl:relcl	_	SpaceAfter=No|TokenRange=2065:2073
21	,	,	PUNCT	PUNCT	_	24	punct	_	TokenRange=2073:2074
22	на	на	ADP	ADP	Case=Loc	23	case	_	TokenRange=2075:2077
23	яких	який	PRON	DET	Case=Loc|Number=Plur|PronType=Rel	25	obl	_	TokenRange=2078:2082
24	можна	можна	ADV	ADV	_	20	acl:relcl	_	TokenRange=2083:2088
25	будувати	будувати	VERB	VERB	Aspect=Imp|VerbForm=Inf	24	csubj	_	TokenRange=2089:2097
26	храм	храм	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	25	obj	_	TokenRange=2098:2102
27	суспільної	суспільний	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	28	amod	_	TokenRange=2103:2113
28	праці	праця	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	26	nmod	_	SpaceAfter=No|TokenRange=2114:2119
29	.	.	PUNCT	PUNCT	_	5	punct	_	TokenRange=2119:2120

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 expl	color:blue
1	Яка	який	DET	SCONJ	Case=Nom|Gender=Fem|Number=Sing|PronType=Int	3	det	_	TokenRange=7066:7071
2	ж	ж	PART	SCONJ	_	1	discourse	_	TokenRange=7066:7071
3	частина	частина	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	TokenRange=7072:7079
4	нашої	наш	DET	DET	Case=Gen|Gender=Fem|Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	det	_	TokenRange=7080:7085
5	молодіжи	молодіж	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	TokenRange=7086:7094
6	може	могти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=7095:7099
7	мати	мати	VERB	VERB	Aspect=Imp|VerbForm=Inf	6	xcomp	_	TokenRange=7100:7104
8	кращу	кращий	ADJ	ADJ	Case=Acc|Degree=Cmp|Gender=Fem|Number=Sing	9	amod	_	TokenRange=7105:7110
9	можливість	можливість	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	obj	_	TokenRange=7111:7121
10	доконати	доконати	VERB	VERB	Aspect=Perf|VerbForm=Inf	9	acl	_	TokenRange=7122:7130
11	цього	це	PRON	PRON	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	10	obj	_	TokenRange=7131:7136
12	як	як	SCONJ	SCONJ	_	14	mark	_	TokenRange=7137:7139
13	се	се	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	14	expl	_	TokenRange=7140:7142
14	та	той	PRON	DET	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	acl	_	SpaceAfter=No|TokenRange=7143:7145
15	,	,	PUNCT	PUNCT	_	17	punct	_	TokenRange=7145:7146
16	що	що	SCONJ	SCONJ	_	17	mark	_	TokenRange=7147:7149
17	опинилася	опинитися	VERB	VERB	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Reflex=Yes|Tense=Past|VerbForm=Fin	14	acl	_	TokenRange=7150:7159
18	тепер	тепер	ADV	ADV	PronType=Dem	17	advmod	_	TokenRange=7160:7165
19	за	за	ADP	ADP	Case=Ins	20	case	_	TokenRange=7166:7168
20	границями	границя	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	17	obl	_	TokenRange=7169:7178
21	України	Україна	PROPN	PROPN	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	20	nmod	_	NameType=Geo|SpaceAfter=No|TokenRange=7179:7186
22	,	,	PUNCT	PUNCT	_	25	punct	_	TokenRange=7186:7187
23	головно	головно	ADV	ADV	Degree=Pos	25	advmod	_	TokenRange=7188:7195
24	в	в	ADP	ADP	Case=Loc	25	case	_	TokenRange=7196:7197
25	Чехії	Чехія	PROPN	PROPN	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	20	appos	_	NameType=Geo|TokenRange=7198:7203
26	і	і	CCONJ	CCONJ	_	27	cc	_	TokenRange=7204:7205
27	Австрії	Австрія	PROPN	PROPN	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	25	conj	_	NameType=Geo|SpaceAfter=No|TokenRange=7206:7213
28	?	?	PUNCT	PUNCT	_	6	punct	_	TokenRange=7213:7214

~~~


