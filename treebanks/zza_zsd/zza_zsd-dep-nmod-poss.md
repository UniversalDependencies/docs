---
layout: base
title:  'Statistics of nmod:poss in UD_Zazaki-ZSD'
udver: '2'
---

## Treebank Statistics: UD_Zazaki-ZSD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="zza_zsd-dep-nmod.html">nmod</a></tt>.

61 nodes (4%) are attached to their parents as `nmod:poss`.

61 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.90163934426229.

The following 5 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt> (43; 70% instances), <tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (12; 20% instances), <tt><a href="zza_zsd-pos-ADP.html">ADP</a></tt>-<tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt> (4; 7% instances), <tt><a href="zza_zsd-pos-ADP.html">ADP</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zza_zsd-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:poss	color:blue
1	het	het	NOUN	_	Gender=Masc|Number=Sing	0	root	_	TextBegin=0|TextEnd=4
2	ê	ê	ADP	_	Gender=Masc|Number=Sing	1	case	_	TextBegin=0|TextEnd=4
3	sima	sima	PRON	_	Number=Plur|Person=2|PronType=Prs	1	nmod:poss	_	TextBegin=5|TextEnd=9
4	wa	bîyene	AUX	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	cop	_	SpaceAfter=No|TextBegin=10|TextEnd=12
5	,	,	PUNCT	_	_	1	punct	_	TextBegin=12|TextEnd=13
6	elekçî	elekçî	NOUN	_	Number=Plur	1	nsubj	_	TextBegin=14|TextEnd=20
7	.	.	PUNCT	_	_	1	punct	_	TextBegin=21|TextEnd=22

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:poss	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
1	Çîn	çîn	VERB	_	Polarity=Neg	0	root	_	TextBegin=0|TextEnd=3
2	ê	bîyene	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres	1	aux	_	TextBegin=4|TextEnd=5
3	yê	ê	ADP	_	_	1	obl	_	TextBegin=6|TextEnd=8
4	sima	sima	PRON	_	Number=Plur|Person=2|PronType=Prs	3	nmod:poss	_	TextBegin=9|TextEnd=13
5	de	de	ADP	_	_	3	case	_	SpaceAfter=No|TextBegin=14|TextEnd=16
6	?	?	PUNCT	_	_	1	punct	_	TextBegin=16|TextEnd=17

~~~


