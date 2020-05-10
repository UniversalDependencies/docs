---
layout: base
title:  'Statistics of appos in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `appos`

This relation is universal.

34 nodes (0%) are attached to their parents as `appos`.

34 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.02941176470588.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (15; 44% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (4; 12% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-DET.html">DET</a></tt> (3; 9% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-NUM.html">NUM</a></tt> (3; 9% instances), <tt><a href="bg_btb-pos-PRON.html">PRON</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="bg_btb-pos-ADV.html">ADV</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 appos	color:blue
1	Първият	пръв	ADJ	Momsf	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	2	amod	2:amod	_
2	мач	мач	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
3	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
4	идния	иден	ADJ	Amsh	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	четвъртък	четвъртък	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	0:root	_
6	(	(	PUNCT	punct	_	8	punct	8:punct	SpaceAfter=No
7	23	23	ADJ	Momsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	8	amod	8:amod	_
8	ноември	ноември	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	5	appos	5:appos	SpaceAfter=No
9	)	)	PUNCT	punct	_	8	punct	8:punct	_
10	в	в	ADP	R	_	12	case	12:case	_
11	Борисовата	борисов	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	amod	12:amod	_
12	градина	градина	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	5	nmod	5:nmod:в	SpaceAfter=No
13	.	.	PUNCT	punct	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 18 appos	color:blue
1	От	от	ADP	R	_	3	obl	3:obl	_
2	вчера	вчера	ADV	Dt	Degree=Pos	1	advmod	1:advmod	_
3	стартира	стартирам	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	и	и	CCONJ	Cp	_	6	cc	6:cc	_
5	автоматизираната	автоматизирам	ADJ	Vpptcv--sfd	Aspect=Perf|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	6	amod	6:amod	_
6	система	система	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
7	за	за	ADP	R	_	8	case	8:case	_
8	търговия	търговия	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	6	nmod	6:nmod:за	_
9	на	на	ADP	R	_	10	case	10:case	_
10	борсата	борса	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	8	nmod	8:nmod:на	SpaceAfter=No
11	,	,	PUNCT	punct	_	12	punct	12:punct	_
12	известна	известен	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	_
13	като	като	ADP	R	_	14	case	14:case	_
14	RTS	rts	PROPN	Npnsi	Definite=Ind|Gender=Neut|Number=Sing	12	obl	12:obl:като	_
15	(	(	PUNCT	punct	_	18	punct	18:punct	SpaceAfter=No
16	Руска	руски	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	amod	18:amod	_
17	търговска	търговски	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	amod	18:amod	_
18	система	система	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	14	appos	14:appos	SpaceAfter=No
19	)	)	PUNCT	punct	_	18	punct	18:punct	SpaceAfter=No
20	.	.	PUNCT	punct	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Пролетта	пролет	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	8	nsubj	8:nsubj	_
2	на	на	ADP	R	_	3	case	3:case	_
3	Добруджа	добруджа	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	1	nmod	1:nmod:на	_
4	-	-	PUNCT	punct	_	1	punct	1:punct	_
5	това	този	DET	Pde-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	1	appos	1:appos	_
6	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
7	безкрайно	безкраен	ADJ	Ansi	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	8	amod	8:amod	_
8	море	море	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	0	root	0:root	_
9	от	от	ADP	R	_	11	case	11:case	_
10	златни	златен	ADJ	A-pi	Definite=Ind|Degree=Pos|Number=Plur	11	amod	11:amod	_
11	ниви	нива	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	8	nmod	8:nmod:от	SpaceAfter=No
12	.	.	PUNCT	punct	_	8	punct	8:punct	_

~~~


