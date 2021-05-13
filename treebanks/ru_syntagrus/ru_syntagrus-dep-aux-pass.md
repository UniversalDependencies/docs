---
layout: base
title:  'Statistics of aux:pass in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-aux.html">aux</a></tt>.

2693 nodes (0%) are attached to their parents as `aux:pass`.

2632 instances of `aux:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17304121797252.

The following 5 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (2687; 100% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	"	"	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
2	Алгоризм	алгоризм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj	_
3	был	быть	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux	_
4	придуман	придумать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	в	в	ADP	_	_	6	case	6:case	_
6	Греции	Греция	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	4	obl	4:obl	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 aux:pass	color:blue
1	В	в	ADP	_	_	3	case	3:case	_
2	2010	2010	NUM	_	_	3	nummod	3:nummod	_
3	году	год	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	6:obl	_
4	в	в	ADP	_	_	6	case	6:case	_
5	"	"	PUNCT	_	_	6	punct	6:punct	SpaceAfter=No
6	Science	Science	PROPN	_	Foreign=Yes	0	root	0:root	SpaceAfter=No
7	"	"	PUNCT	_	_	6	punct	6:punct	_
8	была	быть	AUX	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	6:aux:pass	_
9	опубликована	опубликовать	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	6	flat:foreign	6:flat:foreign	_
10	статья	статья	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	6:nsubj:pass	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	12:punct	_
12	подтверждающая	подтверждать	VERB	_	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	10	acl	10:acl	_
13	данные	данные	NOUN	_	Animacy=Inan|Case=Acc|Number=Plur	12	obj	12:obj	_
14	Петера	Петер	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	13	nmod	13:nmod	_
15	Тяка	Тяк	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	14	flat:name	14:flat:name	SpaceAfter=No
16	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Японцы	японец	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	nsubj:pass	5:nsubj:pass	_
2	и	и	CCONJ	_	_	3	cc	3:cc	_
3	китайцы	китаец	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	1	conj	1:conj	_
4	будут	быть	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux:pass	5:aux:pass	_
5	вынуждены	вынужденный	ADJ	_	Degree=Pos|Number=Plur|Variant=Short	0	root	0:root	_
6	вкладывать	вкладывать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	5	xcomp	5:xcomp	_
7	деньги	деньги	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	6	obj	6:obj	_
8	в	в	ADP	_	_	10	case	10:case	_
9	российскую	российский	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	amod	10:amod	_
10	промышленность	промышленность	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	6	obl	6:obl	SpaceAfter=No
11	,	,	PUNCT	_	_	19	punct	19:punct	_
12	так	так	ADV	_	Degree=Pos	19	mark	19:mark	_
13	как	как	SCONJ	_	_	12	fixed	12:fixed	_
14	без	без	ADP	_	_	16	case	16:case	_
15	нашего	наш	DET	_	Case=Gen|Gender=Neut|Number=Sing	16	det	16:det	_
16	сырья	сырье	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	19	obl	19:obl	_
17	им	они	PRON	_	Case=Dat|Number=Plur|Person=3	19	iobj	19:iobj	_
18	не	не	PART	_	_	19	advmod	19:advmod	_
19	жить	жить	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	6	advcl	6:advcl	SpaceAfter=No
20	,	,	PUNCT	_	_	22	punct	22:punct	_
21	но	но	CCONJ	_	_	22	cc	22:cc	_
22	сделают	делать	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	5	conj	5:conj	_
23	они	они	PRON	_	Case=Nom|Number=Plur|Person=3	22	nsubj	22:nsubj	_
24	это	это	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	22	obj	22:obj	SpaceAfter=No
25	,	,	PUNCT	_	_	29	punct	29:punct	_
26	только	только	PART	_	_	29	advmod	29:advmod	_
27	если	если	SCONJ	_	_	29	mark	29:mark	_
28	их	они	PRON	_	Case=Acc|Number=Plur|Person=3	29	obj	29:obj	_
29	вынудят	вынудить	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	22	advcl	22:advcl	SpaceAfter=No
30	:	:	PUNCT	_	_	38	punct	29:punct	_
31	хотите	хотеть	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	38	advcl	38:advcl	_
32	топливо	топливо	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	31	obj	31:obj	SpaceAfter=No
33	,	,	PUNCT	_	_	34	punct	34:punct	_
34	лес	лес	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	32	conj	32:conj	_
35	и	и	CCONJ	_	_	36	cc	36:cc	_
36	металлы	металл	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	32	conj	32:conj	_
37	-	-	PUNCT	_	_	31	punct	31:punct	_
38	перерабатывайте	перерабатывать	VERB	_	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	29	parataxis	29:parataxis	_
39	на	на	ADP	_	_	40	case	40:case	_
40	месте	место	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	38	obl	38:obl	SpaceAfter=No
41	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


