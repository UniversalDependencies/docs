---
layout: base
title:  'Statistics of compound in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="uk_parlamint-dep-compound-svc.html">compound:svc</a></tt>.

12 nodes (0%) are attached to their parents as `compound`.

9 instances of `compound` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58333333333333.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (4; 33% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (2; 17% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (2; 17% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (2; 17% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 8% instances).


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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 compound	color:blue
1	Чи	чи	PART	PART	_	4	discourse	_	_
2	ще	ще	ADV	ADV	_	4	advmod	_	_
3	не	не	PART	PART	Polarity=Neg	4	advmod:neg	_	_
4	прийшов	прийти	VERB	VERB	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
5	час	час	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
6	запустити	запустити	VERB	VERB	Aspect=Perf|VerbForm=Inf	5	acl	_	_
7	заводи	завод	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	які	який	DET	DET	Case=Nom|Number=Plur|PronType=Rel	11	nsubj	_	_
10	зараз	зараз	ADV	ADV	PronType=Dem	11	advmod	_	_
11	працюють	працювати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	_
12	по	по	ADP	ADP	Case=Acc	13	case	_	_
13	один	один	NUM	NUM	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|NumType=Card	16	nummod	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	15	punct	_	_
15	два	два	NUM	NUM	Case=Acc|Gender=Masc|NumType=Card	13	compound	_	_
16	дні	день	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	11	obl	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	19	punct	_	_
18	і	і	CCONJ	CCONJ	_	19	cc	_	_
19	реанімувати	реанімувати	VERB	VERB	Aspect=Imp|VerbForm=Inf	6	conj	_	_
20	виконання	виконання	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	19	obj	_	_
21	проваленого	провалений	ADJ	ADJ	Aspect=Perf|Case=Gen|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	22	amod	_	_
22	ДОЗу	ДОЗ	NOUN	NOUN	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	20	nmod	_	SpaceAfter=No
23	?	?	PUNCT	PUNCT	_	4	punct	_	_

~~~


