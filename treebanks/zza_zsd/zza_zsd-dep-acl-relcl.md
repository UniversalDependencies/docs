---
layout: base
title:  'Statistics of acl:relcl in UD_Zazaki-ZSD'
udver: '2'
---

## Treebank Statistics: UD_Zazaki-ZSD: Relations: `acl:relcl`

This relation is a language-specific subtype of .

4 nodes (0%) are attached to their parents as `acl:relcl`.

4 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.75.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt>-<tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 acl:relcl	color:blue
1	Î	ê	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	12	nsubj	_	TextBegin=0|TextEnd=3
2	yê	ê	ADP	_	Number=Plur	1	case	_	TextBegin=0|TextEnd=3
3	dust	dust	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	TextBegin=4|TextEnd=9
4	ê	ê	ADP	_	Gender=Masc|Number=Sing	3	case	_	TextBegin=4|TextEnd=9
5	ma	ma	PRON	_	Number=Plur|Person=1|PronType=Prs	3	nmod:poss	_	TextBegin=10|TextEnd=12
6	ra	ra	ADP	_	_	3	case	_	TextBegin=13|TextEnd=15
7	bî	bîyene	VERB	_	Mood=Ind|Number=Plur|Tense=Past	1	acl:relcl	_	SpaceAfter=No|TextBegin=16|TextEnd=18
8	,	,	PUNCT	_	_	7	punct	_	TextBegin=18|TextEnd=19
9	ma	ma	PRON	_	Number=Plur|Person=1|PronType=Prs	10	obj	_	TextBegin=20|TextEnd=22
10	kutêne	kutene	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past	1	acl:relcl	_	TextBegin=23|TextEnd=30
11	,	,	PUNCT	_	_	10	punct	_	TextBegin=23|TextEnd=30
12	merdê	merdene	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	TextBegin=31|TextEnd=36
13	.	.	PUNCT	_	_	12	punct	_	TextBegin=37|TextEnd=38

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	Yanî	yanî	PART	_	_	13	discourse	_	SpaceAfter=No|TextBegin=0|TextEnd=4
2	,	,	PUNCT	_	_	13	punct	_	TextBegin=4|TextEnd=5
3	çî	çî	NOUN	_	Gender=Masc|Number=Sing	13	obj	_	TextBegin=6|TextEnd=10
4	yo	o	ADP	_	Gender=Masc|Number=Sing	3	case	_	TextBegin=6|TextEnd=10
5	ke	ke	SCONJ	_	_	8	mark	_	TextBegin=11|TextEnd=13
6	îta	îta	ADV	_	_	8	obl	_	TextBegin=14|TextEnd=17
7	de	de	ADP	_	_	6	case	_	TextBegin=18|TextEnd=20
8	virast	viraştene	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	acl:relcl	_	TextBegin=21|TextEnd=28
9	,	,	PUNCT	_	_	13	punct	_	TextBegin=21|TextEnd=28
10	to	to	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	13	nsubj	_	TextBegin=29|TextEnd=31
11	bi	bi	ADP	_	_	12	case	_	TextBegin=32|TextEnd=34
12	xo	xo	PRON	_	PronType=Prs|Reflex=Yes	13	obl	_	TextBegin=35|TextEnd=37
13	wast	waştene	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	TextBegin=38|TextEnd=43
14	,	,	PUNCT	_	_	13	punct	_	TextBegin=38|TextEnd=43
15	yanî	yanî	PART	_	_	13	discourse	_	TextBegin=44|TextEnd=49
16	,	,	PUNCT	_	_	13	punct	_	TextBegin=44|TextEnd=49
17	nîya	nîya	ADV	_	_	18	advmod	_	TextBegin=50|TextEnd=54
18	bikerê	kerdene	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres	13	ccomp	_	TextBegin=55|TextEnd=62
19	?	?	PUNCT	_	_	13	punct	_	TextBegin=55|TextEnd=62

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl:relcl	color:blue
1	Î	ê	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	12	dislocated	_	TextBegin=0|TextEnd=3
2	yê	ê	ADP	_	Number=Plur	1	case	_	TextBegin=0|TextEnd=3
3	ke	ke	SCONJ	_	_	4	mark	_	TextBegin=4|TextEnd=6
4	dust	dust	NOUN	_	Gender=Masc|Number=Sing	1	acl:relcl	_	TextBegin=7|TextEnd=12
5	ê	ê	ADP	_	Gender=Masc|Number=Sing	4	case	_	TextBegin=7|TextEnd=12
6	ma	ma	PRON	_	Number=Plur|Person=1|PronType=Prs	4	nmod:poss	_	TextBegin=13|TextEnd=15
7	ra	ra	ADP	_	_	4	case	_	SpaceAfter=No|TextBegin=16|TextEnd=18
8	,	,	PUNCT	_	_	12	punct	_	TextBegin=18|TextEnd=19
9	ma	ma	PRON	_	Number=Plur|Person=1|PronType=Prs	12	nsubj	_	TextBegin=20|TextEnd=22
10	ci	ci	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	12	obl	_	TextBegin=23|TextEnd=25
11	rê	rê	ADP	_	_	10	case	_	TextBegin=26|TextEnd=28
12	kutêne	kutene	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past	0	root	_	TextBegin=29|TextEnd=36
13	,	,	PUNCT	_	_	12	punct	_	TextBegin=29|TextEnd=36
14	nika	nika	ADV	_	_	16	advmod	_	TextBegin=37|TextEnd=41
15	hepsî	hepsî	NOUN	_	Foreign=Yes	16	nsubj	_	TextBegin=42|TextEnd=46
16	ölmîş	ölmek	VERB	_	Foreign=Yes	12	conj	_	TextBegin=47|TextEnd=52
17	.	.	PUNCT	_	_	12	punct	_	TextBegin=53|TextEnd=54

~~~


