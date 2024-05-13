---
layout: base
title:  'Statistics of goeswith in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `goeswith`

This relation is universal.

3 nodes (0%) are attached to their parents as `goeswith`.

3 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 2 pairs of parts of speech are connected with `goeswith`: <tt><a href="bg_btb-pos-NUM.html">NUM</a></tt>-<tt><a href="bg_btb-pos-NUM.html">NUM</a></tt> (2; 67% instances), <tt><a href="bg_btb-pos-ADP.html">ADP</a></tt>-<tt><a href="bg_btb-pos-ADV.html">ADV</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 goeswith	color:blue
1	Сред	сред	ADP	R	_	7	case	7:case	_
2	20	двадесет	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	7	nummod	7:nummod	_
3	000	000	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	2	flat	2:flat	_
4	изпращани	изпращам	ADJ	Vpitcv--p-i	Aspect=Imp|Definite=Ind|Degree=Pos|Number=Plur|VerbForm=Part|Voice=Pass	7	amod	7:amod	_
5	на	на	ADP	R	_	6	case	6:case	_
6	Балканите	балкан	PROPN	Npmpd	Definite=Def|Gender=Masc|Number=Plur	4	obl	4:obl:на	_
7	военнослужещи	военнослужещ	NOUN	Ncmpi	Definite=Ind|Gender=Masc|Number=Plur	11	obl	11:obl:сред	_
8	може	може	VERB	Vniif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	parataxis	20:parataxis	_
9	да	да	AUX	Tx	_	11	aux	11:aux	_
10	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	11	expl	11:expl	_
11	очакват	очаквам	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	ccomp	8:ccomp	_
12	по	по	ADP	R	_	13	case	13:case	_
13	2	2-3	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	16	nmod	16:nmod:по	_
14	-	_	NUM	Mc-pi	_	13	goeswith	13:goeswith	_
15	3	_	NUM	Mc-pi	_	13	goeswith	13:goeswith	_
16	случая	случай	NOUN	Ncmt	Gender=Masc|Number=Count	11	nsubj:pass	11:nsubj:pass	_
17	всяка	всеки	DET	Pce-os-f	Gender=Fem|Number=Sing|PronType=Tot	18	det	18:det	_
18	година	година	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	16	nmod	16:nmod	SpaceAfter=No
19	,	,	PUNCT	punct	_	8	punct	8:punct	_
20	каза	кажа	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
21	Тройборг	тройборг	PROPN	Hmsi	Definite=Ind|Gender=Masc|Number=Sing	20	nsubj	20:nsubj	SpaceAfter=No
22	.	.	PUNCT	punct	_	20	punct	20:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	От	от	ADP	R	_	7	advmod	7:advmod	_
2	тук	там	ADV	Pdl	PronType=Dem	1	goeswith	1:goeswith	_
3	нататък	там	ADV	Pdl	PronType=Dem	1	fixed	1:fixed	_
4	разбирателството	разбирателство	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	7	nsubj	7:nsubj	_
5	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	много	много	ADV	Md-pi	Definite=Ind|Degree=Pos|Number=Plur|NumType=Card	7	advmod	7:advmod	_
7	по-голямо	голям	ADJ	Ansi	Definite=Ind|Degree=Cmp|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	punct	_	7	punct	7:punct	_

~~~


