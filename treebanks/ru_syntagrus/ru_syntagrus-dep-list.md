---
layout: base
title:  'Statistics of list in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `list`

This relation is universal.

12 nodes (0%) are attached to their parents as `list`.

12 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.25.

The following 9 pairs of parts of speech are connected with `list`: <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (3; 25% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt> (2; 17% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 8% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (1; 8% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 list	color:blue
1	40	40	NUM	_	_	3	nummod:gov	3:nummod:gov	_
2	000	000	NUM	_	_	1	list	1:list	_
3	школ	школа	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	nsubj	5:nsubj	_
4	уныло	уныло	ADV	_	Degree=Pos	5	advmod	5:advmod	_
5	ждут	ждать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	команды	команда	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	obj	5:obj	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	8:punct	_
8	единой	единый	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	6	acl	6:acl	_
9	для	для	ADP	_	_	10	case	10:case	_
10	всех	все	PRON	_	Animacy=Anim|Case=Gen|Number=Plur	8	obl	8:obl:для:gen	SpaceAfter=No
11	,	,	PUNCT	_	_	8	punct	8:punct	_
12	на	на	ADP	_	_	13	case	13:case	_
13	изменение	изменение	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	6	nmod	6:nmod:на:acc	_
14	уклада	уклад	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	nmod	13:nmod:gen	_
15	и	и	CCONJ	_	_	16	cc	16:cc	_
16	методики	методика	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	14	conj	13:nmod:gen|14:conj	SpaceAfter=No
17	:	:	PUNCT	_	_	20	punct	20:punct	_
18	"	"	PUNCT	_	_	20	punct	20:punct	SpaceAfter=No
19	Экспериментировать	экспериментировать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	20	csubj:pass	20:csubj:pass	_
20	подано	подать	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	6	parataxis	6:parataxis	SpaceAfter=No
21	"	"	PUNCT	_	_	20	punct	20:punct	SpaceAfter=No
22	!	!	PUNCT	_	_	5	punct	5:punct	_~

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 25 list	color:blue
1	Это	это	PART	_	_	7	expl	7:expl	_
2	на	на	ADP	_	_	3	case	3:case	_
3	Земле	Земля	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	7	obl	7:obl:на:loc	_
4	поломка	поломка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	7:nsubj	_
5	санузла	санузел	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	4:nmod:gen	_
6	-	-	PUNCT	_	_	7	punct	7:punct	_
7	повод	повод	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
8	выругаться	выругаться	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Mid	7	acl	7:acl	_
9	и	и	CCONJ	_	_	10	cc	10:cc	_
10	позвонить	позвонить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	8	conj	7:acl|8:conj	_
11	сантехнику	сантехник	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	10	iobj	10:iobj	SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	15:punct	_
13	а	а	CCONJ	_	_	15	cc	15:cc	_
14	сколько	сколько	ADV	_	Degree=Pos	16	advmod	16:advmod	_
15	можно	можно	ADV	_	Degree=Pos	7	conj	0:root|7:conj	_
16	прожить	прожить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	15	csubj	15:csubj	_
17	без	без	ADP	_	_	18	case	18:case	_
18	туалета	туалет	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	16	obl	16:obl:без:gen	_
19	в	в	ADP	_	_	20	case	20:case	_
20	помещении	помещение	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	16	obl	16:obl:в:loc	_
21	размером	размер	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	20	nmod	20:nmod:ins	_
22	3	3	NUM	_	_	27	nummod:gov	27:nummod:gov	_
23	х	x	SYM	_	_	22	list	22:list	_
24	3	3	NUM	_	_	22	list	22:list	_
25	х	x	SYM	_	_	22	list	22:list	_
26	2	2	NUM	_	_	22	list	22:list	_
27	м	метр	NOUN	_	Abbr=Yes	21	nmod	21:nmod	SpaceAfter=No
28	?	?	PUNCT	_	_	15	punct	15:punct	_~

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 20 list	color:blue
1	В	в	ADP	_	_	3	case	3:case	_
2	прошлом	прошлый	ADJ	_	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	3	amod	3:amod	_
3	выпуске	выпуск	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	26	obl	26:obl:в:loc	_
4	"	"	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
5	НГ	НГ	PROPN	_	Abbr=Yes	7	compound	7:compound	SpaceAfter=No
6	-	-	PUNCT	_	_	5	punct	5:punct	SpaceAfter=No
7	науки	наука	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	nmod	3:nmod:gen	SpaceAfter=No
8	"	"	PUNCT	_	_	7	punct	7:punct	_
9	(	(	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
10	см.	смотреть	VERB	_	Abbr=Yes	7	parataxis	7:parataxis	_
11	статью	статья	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	10	obj	10:obj	_
12	"	"	PUNCT	_	_	13	punct	13:punct	SpaceAfter=No
13	Человек	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	11	appos	11:appos	_
14	моргающий	моргать	VERB	_	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	13	amod	13:amod	SpaceAfter=No
15	"	"	PUNCT	_	_	13	punct	13:punct	SpaceAfter=No
16	,	,	PUNCT	_	_	11	punct	11:punct	_
17	"	"	PUNCT	_	_	20	punct	20:punct	SpaceAfter=No
18	НГ	НГ	PROPN	_	Abbr=Yes	20	compound	20:compound	SpaceAfter=No
19	-	-	PUNCT	_	_	18	punct	18:punct	SpaceAfter=No
20	наука	наука	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	11	list	11:list	SpaceAfter=No
21	"	"	PUNCT	_	_	20	punct	20:punct	_
22	от	от	ADP	_	_	20	case	20:case	_
23	24.10.12	24.10.12	X	_	Foreign=Yes	20	nmod	20:nmod	SpaceAfter=No
24	)	)	PUNCT	_	_	10	punct	10:punct	_
25	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1	26	nsubj	26:nsubj	_
26	рассказали	рассказать	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
27	об	об	ADP	_	_	28	case	28:case	_
28	обнаружении	обнаружение	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	26	obl	26:obl:об:loc	_
29	любопытных	любопытный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	30	amod	30:amod	_
30	закономерностей	закономерность	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	28	nmod	28:nmod:gen	_
31	визуального	визуальный	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	32	amod	32:amod	_
32	восприятия	восприятие	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	30	nmod	30:nmod:gen	_
33	окружающего	окружать	VERB	_	Aspect=Imp|Case=Gen|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	34	amod	34:amod	_
34	мира	мир	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	32	nmod	32:nmod:gen	_
35	человеком	человек	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	32	nmod	32:nmod:ins	SpaceAfter=No
36	.	.	PUNCT	_	_	26	punct	26:punct	_~

~~~


