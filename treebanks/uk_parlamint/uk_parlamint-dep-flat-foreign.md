---
layout: base
title:  'Statistics of flat:foreign in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-flat.html">flat</a></tt>.
There are also 4 other language-specific subtypes of `flat`: <tt><a href="uk_parlamint-dep-flat-name.html">flat:name</a></tt>, <tt><a href="uk_parlamint-dep-flat-range.html">flat:range</a></tt>, <tt><a href="uk_parlamint-dep-flat-repeat.html">flat:repeat</a></tt>, <tt><a href="uk_parlamint-dep-flat-title.html">flat:title</a></tt>.

47 nodes (0%) are attached to their parents as `flat:foreign`.

47 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.63829787234043.

The following 3 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="uk_parlamint-pos-X.html">X</a></tt>-<tt><a href="uk_parlamint-pos-X.html">X</a></tt> (45; 96% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="uk_parlamint-pos-X.html">X</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 flat:foreign	color:blue
1	Як	як	SCONJ	SCONJ	_	4	mark	_	_
2	у	у	ADP	ADP	Case=Loc	4	case	_	_
3	відомому	відомий	ADJ	ADJ	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	фільмі	фільм	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	:	:	PUNCT	PUNCT	_	4	punct	_	_
6	"	"	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
7	И	–	X	PART	Foreign=Yes	4	appos	_	_
8	тишина	–	X	NOUN	Foreign=Yes	7	flat:foreign	_	_
9	–	–	PUNCT	PUNCT	_	7	punct	_	_
10	только	–	X	PART	Foreign=Yes	7	flat:foreign	_	_
11	мертвые	–	X	NOUN	Foreign=Yes	7	flat:foreign	_	_
12	с	–	X	ADP	Foreign=Yes	7	flat:foreign	_	_
13	косами	–	X	NOUN	Foreign=Yes	7	flat:foreign	_	_
14	стоят	–	X	VERB	Foreign=Yes	7	flat:foreign	_	SpaceAfter=No
15	"	"	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 23 flat:foreign	color:blue
1	Як	як	SCONJ	SCONJ	_	3	mark	_	_
2	ви	ви	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
3	побачите	побачити	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin	14	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	сьогодні	сьогодні	ADV	ADV	_	14	advmod	_	_
6	канали	канал	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	14	nsubj	_	_
7	в	в	ADP	ADP	Case=Loc	9	case	_	_
8	єдиній	єдиний	ADJ	ADJ	Case=Loc|Gender=Fem|Number=Sing	9	amod	_	_
9	символіці	символіка	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	14	obl	_	_
10	на	на	ADP	ADP	Case=Loc	11	case	_	_
11	тлі	тло	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	14	obl	_	_
12	Державного	державний	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing	13	amod	_	_
13	прапора	прапор	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	_
14	фіксують	фіксувати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	20	punct	_	_
16	що	що	SCONJ	SCONJ	_	20	mark	_	_
17	вони	вони	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	20	nsubj	_	_
18	за	за	ADP	ADP	Case=Acc	20	case	_	_
19	єдину	єдиний	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	20	amod	_	_
20	Україну	Україна	PROPN	PROPN	Animacy=Inan|Case=Acc|Gender=Fem|NameType=Geo|Number=Sing	14	ccomp	_	SpaceAfter=No
21	,	,	PUNCT	PUNCT	_	20	punct	_	_
22	"	"	PUNCT	PUNCT	_	23	punct	_	SpaceAfter=No
23	за	-	X	ADP	Foreign=Yes	20	flat:foreign	_	_
24	единую	-	X	ADJ	Foreign=Yes	23	flat:foreign	_	_
25	страну	-	X	NOUN	Foreign=Yes	23	conj	_	SpaceAfter=No
26	"	"	PUNCT	PUNCT	_	25	punct	_	SpaceAfter=No
27	.	.	PUNCT	PUNCT	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 20 flat:foreign	color:blue
1	І	і	CCONJ	CCONJ	_	3	cc	_	_
2	я	я	PRON	PRON	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	хочу	хотіти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	сказати	сказати	VERB	VERB	Aspect=Perf|VerbForm=Inf	3	xcomp	_	SpaceAfter=No
5	:	:	PUNCT	PUNCT	_	6	punct	_	_
6	thank	thank	X	X	Foreign=Yes	4	parataxis	_	_
7	you	you	X	X	Foreign=Yes	6	flat:foreign	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	6	punct	_	_
9	mister	mister	X	X	Foreign=Yes	6	appos	_	_
10	President	President	X	X	Foreign=Yes	6	flat:foreign	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	6	punct	_	_
12	for	for	X	X	Foreign=Yes	6	parataxis	_	_
13	your	your	X	X	Foreign=Yes	6	flat:foreign	_	_
14	position	position	X	X	Foreign=Yes	6	flat:foreign	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	6	punct	_	_
16	which	which	X	X	Foreign=Yes	6	parataxis	_	_
17	you	you	X	X	Foreign=Yes	6	flat:foreign	_	_
18	declared	declared	X	X	Foreign=Yes	6	flat:foreign	_	_
19	in	in	X	X	Foreign=Yes	6	flat:foreign	_	_
20	2015	2015	NUM	NUM	_	6	flat:foreign	_	_
21	from	from	X	X	Foreign=Yes	6	flat:foreign	_	_
22	here	here	X	X	Foreign=Yes	6	flat:foreign	_	SpaceAfter=No
23	,	,	PUNCT	PUNCT	_	6	punct	_	_
24	from	from	X	X	Foreign=Yes	6	conj	_	_
25	this	this	X	X	Foreign=Yes	6	flat:foreign	_	_
26	place	place	X	X	Foreign=Yes	6	flat:foreign	_	SpaceAfter=No
27	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


