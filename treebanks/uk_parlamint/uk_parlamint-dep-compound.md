---
layout: base
title:  'Statistics of compound in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="uk_parlamint-dep-compound-svc.html">compound:svc</a></tt>.

10 nodes (0%) are attached to their parents as `compound`.

7 instances of `compound` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (4; 40% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (2; 20% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (2; 20% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (1; 10% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 compound	color:blue
1	Заміни	заміна	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	2	obl:arg	_	_
2	вимагають	вимагати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	сотні	сотня	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	_
4	тисяч	тисяча	NOUN	NUM	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur|NumType=Card	3	nmod	_	_
5	кілометрів	кілометр	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	_
6	труб	труба	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	_
7	водо-	водопостачання	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	9	compound	_	_
8	та	та	CCONJ	CCONJ	_	9	cc	_	_
9	теплопостачання	теплопостачання	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound	color:blue
1	В	в	ADP	ADP	Case=Loc	3	case	_	_
2	91-му	91-й	ADJ	ADJ	Case=Loc|Gender=Masc|Number=Sing|NumType=Ord	3	amod	_	_
3	році	рік	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	_
4	в	в	ADP	ADP	Case=Loc	5	case	_	_
5	Україні	Україна	PROPN	PROPN	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	6	obl	_	_
6	було	бути	VERB	VERB	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
7	3	3	NUM	NUM	Case=Nom|NumType=Card	8	nummod	_	_
8	тисячі	тисяча	NOUN	NUM	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur|NumType=Card	10	nummod:gov	_	_
9	600	600	NUM	NUM	Case=Nom|NumType=Card	8	compound	_	_
10	книгарень	книгарня	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	6	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 compound	color:blue
1	За	за	ADP	ADP	Case=Acc	2	case	_	_
2	рахунок	рахунок	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obl	_	_
3	держбюджету	держбюджет	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
4	у	у	ADP	ADP	Case=Loc	6	case	_	_
5	цьому	цей	DET	DET	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	році	рік	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	_	_
7	значні	значний	ADJ	ADJ	Case=Nom|Degree=Pos|Number=Plur	8	amod	_	_
8	роботи	робота	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	9	nsubj:pass	_	_
9	проведені	проведений	ADJ	ADJ	Aspect=Perf|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
10	на	на	ADP	ADP	Case=Loc	14	case	_	_
11	основній	основний	ADJ	ADJ	Case=Loc|Gender=Fem|Number=Sing	14	amod	_	_
12	нашій	наш	DET	DET	Case=Loc|Gender=Fem|Number=Sing|Person=1|Poss=Yes|PronType=Prs	14	det	_	_
13	олімпійській	олімпійський	ADJ	ADJ	Case=Loc|Gender=Fem|Number=Sing	14	amod	_	_
14	базі	база	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	9	obl	_	_
15	у	у	ADP	ADP	Case=Loc	17	case	_	_
16	Кончі	Конча	PROPN	PROPN	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	17	compound	_	_
17	Заспі	Заспа	PROPN	PROPN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	14	nmod	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	20	punct	_	_
19	спортивних	спортивний	ADJ	ADJ	Case=Loc|Number=Plur	20	amod	_	_
20	базах	база	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	14	conj	_	_
21	"	"	PUNCT	PUNCT	_	22	punct	_	SpaceAfter=No
22	Спартак	Спартак	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	20	appos	_	SpaceAfter=No
23	"	"	PUNCT	PUNCT	_	22	punct	_	_
24	і	і	CCONJ	CCONJ	_	26	cc	_	_
25	"	"	PUNCT	PUNCT	_	26	punct	_	SpaceAfter=No
26	.	.	X	NOUN	_	22	conj	_	SpaceAfter=No
27	"	"	PUNCT	PUNCT	_	26	punct	_	_
28	,	,	PUNCT	PUNCT	_	32	punct	_	_
29	де	де	ADV	ADV	PronType=Rel	32	advmod	_	_
30	кліматичні	кліматичний	ADJ	ADJ	Case=Nom|Number=Plur	31	amod	_	_
31	умови	умова	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	32	nsubj	_	_
32	аналогічні	аналогічний	ADJ	ADJ	Case=Nom|Number=Plur	20	acl:relcl	_	_
33	умовам	умова	NOUN	NOUN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Plur	32	iobj	_	_
34	Афін	Афіни	PROPN	PROPN	Animacy=Inan|Case=Gen|NameType=Geo|Number=Ptan	33	nmod	_	SpaceAfter=No
35	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


