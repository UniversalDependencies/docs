---
layout: base
title:  'Statistics of ccomp in UD_Zazaki-ZSD'
udver: '2'
---

## Treebank Statistics: UD_Zazaki-ZSD: Relations: `ccomp`

This relation is universal.

10 nodes (1%) are attached to their parents as `ccomp`.

10 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.7.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt> (9; 90% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-ADP.html">ADP</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 13 ccomp	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	ez	ez	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	TextBegin=0|TextEnd=2
2	çi	çi	PRON	_	PronType=Int	3	obj	_	TextBegin=3|TextEnd=5
3	zon	zanayene	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	TextBegin=6|TextEnd=9
4	elekçî	elekçî	NOUN	_	Number=Plur	5	nsubj	_	TextBegin=10|TextEnd=16
5	yê	ê	ADP	_	_	3	ccomp	_	TextBegin=17|TextEnd=19
6	kotî	kotî	PRON	_	PronType=Int	5	nmod:poss	_	SpaceAfter=No|TextBegin=20|TextEnd=24
7	?	?	PUNCT	_	_	3	punct	_	TextBegin=24|TextEnd=25

~~~


