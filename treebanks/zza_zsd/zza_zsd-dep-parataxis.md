---
layout: base
title:  'Statistics of parataxis in UD_Zazaki-ZSD'
udver: '2'
---

## Treebank Statistics: UD_Zazaki-ZSD: Relations: `parataxis`

This relation is universal.

7 nodes (0%) are attached to their parents as `parataxis`.

4 instances of `parataxis` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.71428571428571.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt>-<tt><a href="zza_zsd-pos-PROPN.html">PROPN</a></tt> (1; 14% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-X.html">X</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	Est	est	VERB	_	Mood=Ind|VerbForm=Fin	0	root	_	TextBegin=0|TextEnd=3
2	ê	bîyene	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres	1	aux	_	SpaceAfter=No|TextBegin=4|TextEnd=5
3	,	,	PUNCT	_	_	1	punct	_	TextBegin=5|TextEnd=6
4	henî	henî	ADV	_	_	1	discourse	_	TextBegin=7|TextEnd=11
5	yo	bîyene	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	parataxis	_	TextBegin=12|TextEnd=15
6	?	?	PUNCT	_	_	1	punct	_	TextBegin=16|TextEnd=17

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
1	Rindekîye	rindekîye	NOUN	_	Gender=Fem|Number=Sing	4	obl	_	TextBegin=0|TextEnd=9
2	ser	ser	ADP	_	_	1	case	_	TextBegin=10|TextEnd=13
3	tayêna	tayêna	ADV	_	_	4	advmod	_	TextBegin=14|TextEnd=20
4	rindekî	rindekîye	NOUN	_	Gender=Fem|Number=Sing	0	root	_	TextBegin=21|TextEnd=28
5	ya	bîyene	AUX	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	SpaceAfter=No|TextBegin=29|TextEnd=31
6	,	,	PUNCT	_	_	4	punct	_	TextBegin=31|TextEnd=32
7	vajî	vatene	VERB	_	Mood=Sub|Number=Sing|Person=1|Tense=Pres	4	parataxis	_	TextBegin=33|TextEnd=37
8	.	.	PUNCT	_	_	4	punct	_	TextBegin=38|TextEnd=39

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	Na	na	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	TextBegin=0|TextEnd=2
2	kî	kî	ADV	_	_	1	advmod	_	TextBegin=3|TextEnd=5
3	ma	ma	PRON	_	Number=Plur|Person=1|PronType=Prs	0	root	_	TextBegin=6|TextEnd=8
4	ra	_	ADP	_	_	3	case	_	TextBegin=9|TextEnd=11
5	wa	bîyene	AUX	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	SpaceAfter=No|TextBegin=12|TextEnd=14
6	,	,	PUNCT	_	_	3	punct	_	TextBegin=14|TextEnd=15
7	Xozat	Xozat	PROPN	_	Gender=Masc|Number=Sing	3	parataxis	_	TextBegin=16|TextEnd=21
8	ra	ra	ADP	_	_	7	case	_	TextBegin=22|TextEnd=24
9	wa	bîyene	AUX	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	cop	_	TextBegin=25|TextEnd=27
10	.	.	PUNCT	_	_	3	punct	_	TextBegin=28|TextEnd=29

~~~


