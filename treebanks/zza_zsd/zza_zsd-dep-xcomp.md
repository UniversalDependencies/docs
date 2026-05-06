---
layout: base
title:  'Statistics of xcomp in UD_Zazaki-ZSD'
udver: '2'
---

## Treebank Statistics: UD_Zazaki-ZSD: Relations: `xcomp`

This relation is universal.

12 nodes (1%) are attached to their parents as `xcomp`.

7 instances of `xcomp` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.58333333333333.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-ADJ.html">ADJ</a></tt> (5; 42% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt> (4; 33% instances), <tt><a href="zza_zsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (2; 17% instances), <tt><a href="zza_zsd-pos-PRON.html">PRON</a></tt>-<tt><a href="zza_zsd-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Bî	bîyene	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	5	advcl	_	TextBegin=0|TextEnd=2
2	ke	ke	SCONJ	_	_	1	mark	_	TextBegin=3|TextEnd=5
3	wes	wes	ADJ	_	Gender=Masc|Number=Sing	1	xcomp	_	SpaceAfter=No|TextBegin=6|TextEnd=9
4	,	,	PUNCT	_	_	5	punct	_	TextBegin=9|TextEnd=10
5	beno	bîyene	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	TextBegin=11|TextEnd=15
6	kewe	kewe	ADJ	_	Gender=Masc|Number=Sing	5	xcomp	_	TextBegin=16|TextEnd=20
7	.	.	PUNCT	_	_	5	punct	_	TextBegin=21|TextEnd=22

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	Wazena	waştene	VERB	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	TextBegin=0|TextEnd=6
2	ke	ke	SCONJ	_	_	5	mark	_	TextBegin=7|TextEnd=9
3	yî	ey	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	TextBegin=10|TextEnd=12
4	pers	pers	NOUN	_	Gender=Masc|Number=Sing	5	compound:lvc	_	TextBegin=13|TextEnd=17
5	kero	kerdene	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres	1	xcomp	_	SpaceAfter=No|TextBegin=18|TextEnd=22
6	,	,	PUNCT	_	_	5	punct	_	TextBegin=22|TextEnd=23
7	yî	ey	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	TextBegin=24|TextEnd=26
8	bimuso	musayene	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres	5	conj	_	TextBegin=27|TextEnd=33
9	.	.	PUNCT	_	_	1	punct	_	TextBegin=27|TextEnd=33

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Heya	heya	INTJ	_	_	4	discourse	_	SpaceAfter=No|TextBegin=0|TextEnd=4
2	,	,	PUNCT	_	_	4	punct	_	TextBegin=4|TextEnd=5
3	doman	doman	NOUN	_	Gender=Masc|Number=Sing	4	xcomp	_	TextBegin=6|TextEnd=11
4	bîme	bîyene	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Past	0	root	_	TextBegin=12|TextEnd=17
5	mekteb	mekteb	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	TextBegin=18|TextEnd=24
6	de	de	ADP	_	_	5	case	_	TextBegin=25|TextEnd=27
7	.	.	PUNCT	_	_	4	punct	_	TextBegin=28|TextEnd=29

~~~


