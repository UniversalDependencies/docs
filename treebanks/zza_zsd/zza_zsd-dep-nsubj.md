---
layout: base
title:  'Statistics of nsubj in UD_Zazaki-ZSD'
udver: '2'
---

## Treebank Statistics: UD_Zazaki-ZSD: Relations: `nsubj`

This relation is universal.

108 nodes (7%) are attached to their parents as `nsubj`.

103 instances of `nsubj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.53703703703704.

The following 11 pairs of parts of speech are connected with `nsubj`: <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt> (59; 55% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (32; 30% instances), <tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt>-<tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-ADP.html">ADP</a></tt> (2; 2% instances), <tt><a href="zza_zsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="zza_zsd-pos-ADP.html">ADP</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="zza_zsd-pos-ADV.html">ADV</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="zza_zsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
1	Mi	mi	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obl	_	TextBegin=0|TextEnd=2
2	ra	ra	ADP	_	_	1	case	_	TextBegin=3|TextEnd=5
3	ber	ber	ADP	_	_	1	case	_	TextBegin=6|TextEnd=9
4	kes	kes	PRON	_	PronType=Ind	5	nsubj	_	TextBegin=10|TextEnd=13
5	çîn	çîn	VERB	_	Polarity=Neg	0	root	_	TextBegin=14|TextEnd=17
6	o	bîyene	AUX	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux	_	TextBegin=18|TextEnd=19
7	.	.	PUNCT	_	_	5	punct	_	TextBegin=20|TextEnd=21

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 nsubj	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj	color:blue
1	Pers	pers	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	_	TextBegin=0|TextEnd=5
2	a	a	ADP	_	Gender=Fem|Number=Sing	1	case	_	TextBegin=0|TextEnd=5
3	min	mi	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	nmod:poss	_	TextBegin=6|TextEnd=9
4	a	a	ADP	_	Gender=Fem|Number=Sing	1	case	_	TextBegin=10|TextEnd=11
5	ravê	ravê	ADJ	_	_	1	amod	_	TextBegin=12|TextEnd=16
6	na	na	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	0	root	_	TextBegin=17|TextEnd=19
7	wa	bîyene	AUX	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	cop	_	SpaceAfter=No|TextBegin=20|TextEnd=22
8	,	.	PUNCT	_	_	6	punct	_	TextBegin=22|TextEnd=23
9	yanî	yanî	PART	_	_	6	discourse	_	TextBegin=24|TextEnd=28
10	.	.	PUNCT	_	_	6	punct	_	TextBegin=24|TextEnd=28

~~~


