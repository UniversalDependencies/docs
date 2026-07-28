---
layout: base
title:  'Statistics of discourse in UD_Zazaki-ZSD'
udver: '2'
---

## Treebank Statistics: UD_Zazaki-ZSD: Relations: `discourse`

This relation is universal.

74 nodes (5%) are attached to their parents as `discourse`.

54 instances of `discourse` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.77027027027027.

The following 10 pairs of parts of speech are connected with `discourse`: <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-PART.html">PART</a></tt> (30; 41% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-INTJ.html">INTJ</a></tt> (25; 34% instances), <tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zza_zsd-pos-PART.html">PART</a></tt> (5; 7% instances), <tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt>-<tt><a href="zza_zsd-pos-PART.html">PART</a></tt> (4; 5% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-ADV.html">ADV</a></tt> (4; 5% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="zza_zsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zza_zsd-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zza_zsd-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Mesela	mesela	PART	_	_	7	discourse	_	SpaceAfter=No|TextBegin=0|TextEnd=6
2	,	,	PUNCT	_	_	7	punct	_	TextBegin=6|TextEnd=7
3	elekçîyo	elekçî	NOUN	_	Case=Acc|Number=Plur	7	nsubj	_	TextBegin=8|TextEnd=16
4	sima	sima	PRON	_	Number=Plur|Person=2|PronType=Prs	7	obl	_	TextBegin=17|TextEnd=21
5	ra	ra	ADP	_	_	4	case	_	TextBegin=22|TextEnd=24
6	se	se	PRON	_	PronType=Int	7	obj	_	TextBegin=25|TextEnd=27
7	vatêne	vatêne	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past	0	root	_	TextBegin=28|TextEnd=35
8	?	?	PUNCT	_	_	7	punct	_	TextBegin=36|TextEnd=37

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 1 discourse	color:blue
1	Ma	ma	INTJ	_	_	12	discourse	_	TextBegin=0|TextEnd=2
2	het	het	NOUN	_	Gender=Masc|Number=Sing	12	obl	_	TextBegin=3|TextEnd=7
3	ê	ê	ADP	_	Gender=Masc|Number=Sing	2	case	_	TextBegin=3|TextEnd=7
4	emînî	emîn	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	2	nmod:poss	_	TextBegin=8|TextEnd=13
5	ra	ra	ADP	_	_	2	case	_	SpaceAfter=No|TextBegin=14|TextEnd=16
6	,	,	PUNCT	_	_	12	punct	_	TextBegin=16|TextEnd=17
7	Xozat	Xozat	PROPN	_	Gender=Masc|Number=Sing	12	obl	_	TextBegin=18|TextEnd=23
8	ra	ra	ADP	_	_	7	case	_	TextBegin=24|TextEnd=27
9	,	,	PUNCT	_	_	12	punct	_	TextBegin=24|TextEnd=27
10	Tuncelî	Tuncelî	PROPN	_	Number=Sing	12	obl	_	TextBegin=28|TextEnd=35
11	ra	ra	ADP	_	_	10	case	_	TextBegin=36|TextEnd=38
12	yenê	ameyene	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	TextBegin=39|TextEnd=44
13	.	.	PUNCT	_	_	12	punct	_	TextBegin=45|TextEnd=46

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 discourse	color:blue
1	Ê	ê	PRON	_	Number=Plur|Person=3|PronType=Dem	0	root	_	TextBegin=0|TextEnd=3
2	yê	ê	ADP	_	Number=Plur	1	case	_	TextBegin=0|TextEnd=3
3	raver	raver	ADJ	_	_	1	amod	_	SpaceAfter=No|TextBegin=4|TextEnd=9
4	,	,	PUNCT	_	_	1	punct	_	TextBegin=9|TextEnd=10
5	îşte	îşte	PART	_	_	1	discourse	_	TextBegin=11|TextEnd=16
6	,	,	PUNCT	_	_	1	punct	_	TextBegin=11|TextEnd=16
7	milet	milet	NOUN	_	Number=Plur	1	appos	_	TextBegin=17|TextEnd=23
8	ê	ê	ADP	_	Number=Plur	7	case	_	TextBegin=17|TextEnd=23
9	kanî	kanî	ADJ	_	Number=Plur	7	amod	_	TextBegin=24|TextEnd=29
10	,	,	PUNCT	_	_	1	punct	_	TextBegin=24|TextEnd=29
11	yanî	yanî	PART	_	_	12	discourse	_	TextBegin=30|TextEnd=34
12	kamil	kamil	NOUN	_	Number=Plur	1	appos	_	TextBegin=35|TextEnd=41
13	ê	ê	ADP	_	Number=Plur	12	case	_	TextBegin=35|TextEnd=41
14	ma	ma	PRON	_	Number=Plur|Person=1|PronType=Prs	12	nmod:poss	_	TextBegin=42|TextEnd=44
15	.	.	PUNCT	_	_	1	punct	_	TextBegin=45|TextEnd=46

~~~


