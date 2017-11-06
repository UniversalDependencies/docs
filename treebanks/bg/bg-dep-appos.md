---
layout: base
title:  'Statistics of appos in UD_Bulgarian'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian: Relations: `appos`

This relation is universal.

35 nodes (0%) are attached to their parents as `appos`.

31 instances of `appos` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.02857142857143.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="bg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (15; 43% instances), <tt><a href="bg-pos-PRON.html">PRON</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="bg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="bg-pos-DET.html">DET</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="bg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg-pos-NUM.html">NUM</a></tt> (3; 9% instances), <tt><a href="bg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="bg-pos-ADV.html">ADV</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="bg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="bg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 appos	color:blue
1	Първият	пръв	ADJ	Momsf	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	2	amod	_	_
2	мач	мач	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
3	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	идния	иден	ADJ	Amsh	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	четвъртък	четвъртък	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
6	(	(	PUNCT	punct	_	8	punct	_	SpaceAfter=No
7	23	23	ADJ	Momsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	8	amod	_	_
8	ноември	ноември	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	5	appos	_	SpaceAfter=No
9	)	)	PUNCT	punct	_	8	punct	_	_
10	в	в	ADP	R	_	12	case	_	_
11	Борисовата	борисов	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	_
12	градина	градина	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Тя	аз	PRON	Ppe-os3f	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
2	[	[	PUNCT	punct	_	4	punct	_	SpaceAfter=No
3	писателската	писателски	ADJ	Afsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	слава	слава	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	1	appos	_	SpaceAfter=No
5	]	]	PUNCT	punct	_	4	punct	_	_
6	му	аз	PRON	Ppetds3m	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	iobj	_	_
7	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	8	expl	_	_
8	виждаше	виждам-(се)	VERB	Vpitf-m3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
9	сега	сега	ADV	Dt	Degree=Pos	8	advmod	_	_
10	най-достъпна	достъпен	ADJ	Afsi	Definite=Ind|Degree=Sup|Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 18 appos	color:blue
1	От	от	ADP	R	_	3	obl	_	_
2	вчера	вчера	ADV	Dt	Degree=Pos	1	advmod	_	_
3	стартира	стартирам	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	и	и	CCONJ	Cp	_	6	cc	_	_
5	автоматизираната	автоматизирам	ADJ	Vpptcv--sfd	Aspect=Perf|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	6	amod	_	_
6	система	система	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	3	nsubj	_	_
7	за	за	ADP	R	_	8	case	_	_
8	търговия	търговия	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	6	nmod	_	_
9	на	на	ADP	R	_	10	case	_	_
10	борсата	борса	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	punct	_	12	punct	_	_
12	известна	известен	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
13	като	като	ADP	R	_	14	case	_	_
14	RTS	rts	PROPN	Npnsi	Definite=Ind|Gender=Neut|Number=Sing	12	obl	_	_
15	(	(	PUNCT	punct	_	18	punct	_	SpaceAfter=No
16	Руска	руски	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	_
17	търговска	търговски	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	_
18	система	система	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	14	appos	_	SpaceAfter=No
19	)	)	PUNCT	punct	_	18	punct	_	SpaceAfter=No
20	.	.	PUNCT	punct	_	3	punct	_	_

~~~


