---
layout: base
title:  'Statistics of flat in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="ru_syntagrus-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="ru_syntagrus-dep-flat-name.html">flat:name</a></tt>.

91 nodes (0%) are attached to their parents as `flat`.

91 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 9 pairs of parts of speech are connected with `flat`: <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (81; 89% instances), <tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_syntagrus-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Есть	быть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
2	Сталин	сталин	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	есть	быть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	Пол	пол	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	conj	2:conj	_
6	Пот	пот	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	flat	5:flat	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Без	без	ADP	_	_	3	case	3:case	_
2	этого	этот	DET	_	Case=Gen|Gender=Masc|Number=Sing	3	amod	3:amod	_
3	комплекса	комплекс	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod	10:nmod	_
4	Леонардо	леонардо	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	3	nmod	3:nmod	_
5	да	да	ADP	_	_	4	appos	4:appos	_
6	Винчи	винчи	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	flat	5:flat	_
7	кино	кино	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	10	nsubj	10:nsubj	_
8	как	как	SCONJ	_	_	9	cc	9:cc	_
9	искусство	искусство	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	7	advmod	7:advmod	_
10	невозможно	невозможный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	0:root	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	10:punct	_
12	так	так	ADV	_	Degree=Pos	14	advmod	14:advmod	_
13	мне	я	PRON	_	Case=Dat|Number=Sing|Person=1	14	obl	14:obl	_
14	кажется	казаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	10	conj	10:conj	SpaceAfter=No
15	,	,	PUNCT	_	_	14	punct	14:punct	_
16	а	а	CCONJ	_	_	18	cc	18:cc	_
17	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	18	nsubj	18:nsubj	_
18	ставит	ставить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	conj	10:conj	_
19	очень	очень	ADV	_	Degree=Pos	20	advmod	20:advmod	_
20	большие	большой	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	21	amod	21:amod	_
21	требования	требование	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	18	obj	18:obj	_
22	к	к	ADP	_	_	24	case	24:case	_
23	снимающему	снимать	VERB	_	Aspect=Imp|Case=Dat|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	24	amod	24:amod	_
24	человеку	человек	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	21	nmod	21:nmod	SpaceAfter=No
25	,	,	PUNCT	_	_	24	punct	24:punct	_
26	трудно	трудный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	10	conj	10:conj	_
27	этому	это	PRON	_	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	28	obl	28:obl	_
28	соответствовать	соответствовать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	26	nsubj	26:nsubj	SpaceAfter=No
29	.	.	PUNCT	_	_	28	punct	28:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Владислав	владислав	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
2	Рычков	рычков	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	appos	1:appos	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	директор	директор	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	appos	2:appos	_
5	НПП	нпп	PROPN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	4	nmod	4:nmod	_
6	"	"	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
7	Рото	рото	PROPN	_	_	5	appos	5:appos	_
8	клон	клон	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	flat	7:flat	SpaceAfter=No
9	"	"	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No
10	:	:	PUNCT	_	_	8	punct	8:punct	_

~~~


