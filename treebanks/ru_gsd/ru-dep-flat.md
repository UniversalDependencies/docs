---
layout: base
title:  'Statistics of flat in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="ru-dep-flat-foreign.html">flat:foreign</a></tt>.

1033 nodes (1%) are attached to their parents as `flat`.

1033 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.18973862536302.

The following 15 pairs of parts of speech are connected with `flat`: <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (992; 96% instances), <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-ADV.html">ADV</a></tt> (13; 1% instances), <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ru-pos-ADV.html">ADV</a></tt>-<tt><a href="ru-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Жена	ЖЕНА	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	Дзодзуашвили	ДЗОДЗУАШВИЛИ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	приходится	ПРИХОДИТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
4	тетей	ТЕТЯ	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	3	advmod	_	_
5	жене	ЖЕНА	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	_
6	Владимира	ВЛАДИМИР	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	Гуцаева	ГУЦАЕВ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	flat	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat	color:blue
1	Кэртэ	КЭРТЭ	ADV	FW	_	13	nsubj	_	_
2	эйяхе	ЭЙЯХЕ	ADV	FW	_	1	flat	_	_
3	(	(	PUNCT	(	_	4	punct	_	SpaceAfter=No
4	кәртә	КӘРТӘ	ADV	FW	_	1	parataxis	_	_
5	эйәһе	ЭЙӘҺЕ	ADV	FW	_	4	flat	_	SpaceAfter=No
6	,	,	PUNCT	,	_	7	punct	_	_
7	һарай	ҺАРАЙ	ADV	FW	_	4	conj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	9	punct	_	_
9	аҙбар	АҘБАР	ADV	FW	_	4	conj	_	_
10	эйәһе	ЭЙӘҺЕ	ADV	FW	_	9	flat	_	SpaceAfter=No
11	)	)	PUNCT	)	_	4	punct	_	_
12	--	--	PUNCT	--	_	13	punct	_	_
13	хозяин	ХОЗЯИН	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
14	скотного	СКОТНЫЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	15	amod	_	_
15	двора	ДВОР	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 flat	color:blue
1	``	``	PUNCT	``	_	2	punct	_	SpaceAfter=No
2	Истина	ИСТИНА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
3	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	2	punct	_	_
4	(	(	PUNCT	(	_	2	punct	_	SpaceAfter=No
5	)	)	PUNCT	)	_	2	punct	_	_
6	--	--	PUNCT	--	_	7	punct	_	_
7	кинофильм	КИНОФИЛЬМ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
8	режиссёра	РЕЖИССЕР	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	Анри	АНРИ	ADV	AFX	_	8	appos	_	_
10	-	-	PUNCT	-	_	9	goeswith	_	_
11	Жоржа	ЖОРЖ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	9	goeswith	_	_
12	Клузо	КЛУЗО	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	9	flat	_	SpaceAfter=No
13	,	,	PUNCT	,	_	14	punct	_	_
14	вышедший	ВЫЙТИ	VERB	VBNL	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	acl	_	_
15	на	НА	ADP	IN	_	16	case	_	_
16	экраны	ЭКРАН	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	14	obl	_	_
17	в	В	ADP	IN	_	19	case	_	_
18	1960	1960	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	19	amod	_	_
19	году	ГОД	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	14	obl	_	SpaceAfter=No
20	.	.	PUNCT	.	_	7	punct	_	_

~~~


