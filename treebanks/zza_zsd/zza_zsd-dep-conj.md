---
layout: base
title:  'Statistics of conj in UD_Zazaki-ZSD'
udver: '2'
---

## Treebank Statistics: UD_Zazaki-ZSD: Relations: `conj`

This relation is universal.

52 nodes (4%) are attached to their parents as `conj`.

52 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.07692307692308.

The following 4 pairs of parts of speech are connected with `conj`: <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt> (49; 94% instances), <tt><a href="zza_zsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zza_zsd-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="zza_zsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 conj	color:blue
1	Ma	ma	PRON	_	Number=Plur|Person=1|PronType=Prs	2	nsubj	_	TextBegin=0|TextEnd=2
2	vatê	vatene	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	TextBegin=3|TextEnd=7
3	"	"	PUNCT	_	_	2	punct	_	TextBegin=8|TextEnd=13
4	Sima	sima	PRON	_	Number=Plur|Person=2|PronType=Prs	8	nsubj	_	TextBegin=8|TextEnd=13
5	çito	çitur	ADV	_	PronType=Int	8	advmod	_	TextBegin=14|TextEnd=18
6	ke	ke	SCONJ	_	_	8	mark	_	TextBegin=19|TextEnd=21
7	hewes	hewes	NOUN	_	Gender=Masc|Number=Sing	8	compound:lvc	_	TextBegin=22|TextEnd=27
8	kerd	kerdene	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	13	advcl	_	TextBegin=28|TextEnd=32
9	kuto	kutene	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	8	conj	_	TextBegin=33|TextEnd=38
10	,	,	PUNCT	_	_	8	punct	_	TextBegin=33|TextEnd=38
11	ma	ma	PRON	_	Number=Plur|Person=1|PronType=Prs	13	obl	_	TextBegin=39|TextEnd=41
12	rê	rê	ADP	_	_	11	case	_	TextBegin=42|TextEnd=44
13	bikuyê	kutene	VERB	_	Mood=Imp|Number=Plur|Person=2	2	ccomp	_	TextBegin=45|TextEnd=53
14	"	"	PUNCT	_	_	2	punct	_	TextBegin=45|TextEnd=53

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
1	Ne	ne	ADV	_	_	2	advmod	_	TextBegin=0|TextEnd=2
2	hewl	hewl	ADJ	_	Gender=Masc|Number=Sing	0	root	_	TextBegin=3|TextEnd=7
3	ne	ne	ADV	_	_	4	advmod	_	TextBegin=8|TextEnd=10
4	xirab	xirab	ADJ	_	Gender=Masc|Number=Sing	2	conj	_	TextBegin=11|TextEnd=16
5	.	.	PUNCT	_	_	2	punct	_	TextBegin=11|TextEnd=16

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
1	Çêna	çêna	NOUN	_	Gender=Fem|Number=Sing	2	nsubj	_	TextBegin=0|TextEnd=4
2	Ovacix	Ovacix	PROPN	_	Gender=Masc|Number=Sing	0	root	_	TextBegin=5|TextEnd=11
3	de	de	ADP	_	_	2	case	_	TextBegin=12|TextEnd=14
4	ca	ca	NOUN	_	Gender=Masc|Number=Sing	2	conj	_	TextBegin=15|TextEnd=19
5	yê	ê	ADP	_	Gender=Masc|Number=Sing	4	case	_	TextBegin=15|TextEnd=19
6	emin	emin	NOUN	_	Gender=Masc|Number=Sing	4	nmod:poss	_	SpaceAfter=No|TextBegin=20|TextEnd=24
7	...	...	PUNCT	_	_	2	punct	_	TextBegin=24|TextEnd=27

~~~


