---
layout: base
title:  'Statistics of flat in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `flat`

This relation is universal.

1695 nodes (1%) are attached to their parents as `flat`.

1695 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05899705014749.

The following 11 pairs of parts of speech are connected with `flat`: <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (1604; 95% instances), <tt><a href="bg_btb-pos-NUM.html">NUM</a></tt>-<tt><a href="bg_btb-pos-NUM.html">NUM</a></tt> (52; 3% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="bg_btb-pos-NUM.html">NUM</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-X.html">X</a></tt>-<tt><a href="bg_btb-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Марин	марин	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	0:root	_
2	ПЕНКОВ	пенков	PROPN	Hmsi	Definite=Ind|Gender=Masc|Number=Sing	1	flat	1:flat	_
3	(	(	PUNCT	punct	_	5	punct	5:punct	SpaceAfter=No
4	23	23	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	5	nummod	5:nummod	_
5	г.	година	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	1	nmod	1:nmod	SpaceAfter=No
6	)	)	PUNCT	punct	_	5	punct	5:punct	SpaceAfter=No
7	,	,	PUNCT	punct	_	8	punct	8:punct	_
8	студент	студент	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	1:nmod	SpaceAfter=No
9	,	,	PUNCT	punct	_	10	punct	10:punct	_
10	София	софия	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	1	nmod	1:nmod	SpaceAfter=No
11	:	:	PUNCT	punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Регистрират	регистрирам	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	всички	всеки	DET	Pce-op	Case=Nom|Number=Plur|PronType=Tot	4	det	4:det	_
3	валутни	валутен	ADJ	A-pi	Definite=Ind|Degree=Pos|Number=Plur	4	amod	4:amod	_
4	сделки	сделка	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	1	obj	1:obj	_
5	за	за	ADP	R	_	9	case	9:case	_
6	над	над	ADP	R	_	7	case	7:case	_
7	10	10	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	9	nmod	9:nmod:над	_
8	000	000	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	7	flat	7:flat	_
9	лв.	лев	NOUN	Ncmt	Gender=Masc|Number=Count	4	nmod	4:nmod:за	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Най-добрият	добър	ADJ	Amsf	Definite=Def|Degree=Sup|Gender=Masc|Number=Sing	2	amod	2:amod	_
2	начин	начин	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
3	това	този	PRON	Pde-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	5:nsubj	_
4	да	да	AUX	Tx	_	5	aux	5:aux	_
5	стане	стана	VERB	Vppif-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	2:acl	_
6	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	Йоан-Павел	йоан-павел	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	10	nsubj	10:nsubj	_
8	II	втори	ADJ	Momsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	7	flat	7:flat	_
9	да	да	AUX	Tx	_	10	aux	10:aux	_
10	дойде	дойда	VERB	Vppif-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	6:ccomp	_
11	тук	там	ADV	Pdl	PronType=Dem	10	obj	10:obj	SpaceAfter=No
12	.	.	PUNCT	punct	_	6	punct	6:punct	_

~~~


