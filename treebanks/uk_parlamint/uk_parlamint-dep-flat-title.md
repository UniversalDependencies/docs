---
layout: base
title:  'Statistics of flat:title in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `flat:title`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-flat.html">flat</a></tt>.
There are also 4 other language-specific subtypes of `flat`: <tt><a href="uk_parlamint-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="uk_parlamint-dep-flat-name.html">flat:name</a></tt>, <tt><a href="uk_parlamint-dep-flat-range.html">flat:range</a></tt>, <tt><a href="uk_parlamint-dep-flat-repeat.html">flat:repeat</a></tt>.

5 nodes (0%) are attached to their parents as `flat:title`.

5 instances of `flat:title` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `flat:title`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (3; 60% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (1; 20% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:title	color:blue
1	Коса	коса	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj:pass	_	_
2	Тузла	Тузла	PROPN	PROPN	Animacy=Inan|Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	1	flat:title	_	_
3	розташована	розташований	ADJ	ADJ	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	в	в	ADP	ADP	Case=Loc	6	case	_	_
5	Керченській	керченський	ADJ	ADJ	Case=Loc|Gender=Fem|Number=Sing	6	amod	_	_
6	протоці	протока	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	11	punct	_	_
8	раніше	раніше	ADV	ADV	Degree=Cmp	11	advmod	_	_
9	вона	вона	PRON	PRON	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	nsubj:pass	_	_
10	була	бути	AUX	AUX	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	11	cop	_	_
11	з'єднана	з'єднаний	ADJ	ADJ	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	3	parataxis	_	_
12	з	з	ADP	ADP	Case=Ins	13	case	_	_
13	суходолом	суходіл	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	17	punct	_	_
15	з	з	ADP	ADP	Case=Ins	17	case	_	_
16	Таманським	таманський	ADJ	ADJ	Case=Ins|Gender=Masc|Number=Sing	17	amod	_	_
17	півостровом	півострів	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	13	appos	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:title	color:blue
1	Вашій	ваш	DET	DET	Case=Dat|Gender=Fem|Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	det	_	_
2	увазі	увага	NOUN	NOUN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	_
3	пропонується	пропонуватися	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	_	_
4	проект	проект	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
5	Постанови	постанова	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
6	(	(	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
7	номер	номер	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	appos	_	_
8	4346	4346	NUM	NUM	Case=Nom|NumType=Card	7	flat:title	_	SpaceAfter=No
9	)	)	PUNCT	PUNCT	_	7	punct	_	_
10	про	про	ADP	ADP	Case=Acc	11	case	_	_
11	звільнення	звільнення	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	5	nmod	_	_
12	з	з	ADP	ADP	Case=Gen	13	case	_	_
13	посад	посада	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	11	nmod	_	_
14	суддів	суддя	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Fem,Masc|Number=Plur	11	nmod	_	_
15	у	у	ADP	ADP	Case=Loc|ExtPos=ADP	18	case	_	_
16	зв'язку	зв'язок	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	15	fixed	_	_
17	з	з	ADP	ADP	Case=Ins	15	fixed	_	_
18	досягненням	досягнення	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	11	nmod	_	_
19	65	65	NUM	NUM	Case=Gen|NumType=Card	20	nummod	_	_
20	років	рік	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	18	nmod	_	SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:title	color:blue
1	Нестор	Нестор	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	0	root	_	_
2	Шуфрич	Шуфрич	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	1	flat:title	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	будь	бути	VERB	VERB	Aspect=Imp|ExtPos=INTJ|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	1	parataxis	_	_
5	ласка	ласка	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	fixed	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


