---
layout: base
title:  'Statistics of nummod in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `nummod`

This relation is universal.

1728 nodes (1%) are attached to their parents as `nummod`.

1585 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18055555555556.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-NUM.html">NUM</a></tt> (1683; 97% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-NUM.html">NUM</a></tt> (41; 2% instances), <tt><a href="bg_btb-pos-PRON.html">PRON</a></tt>-<tt><a href="bg_btb-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Двете	два	NUM	Mcfpd	Definite=Def|Gender=Fem|Number=Plur|NumType=Card	2	nummod	2:nummod	_
2	сестри	сестра	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	3	nsubj	3:nsubj|6:nsubj	_
3	започнаха	започна	VERB	Vpptf-o3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	да	да	AUX	Tx	_	6	aux	6:aux	_
5	си	се	PRON	Ppxtd	Case=Dat|PronType=Prs|Reflex=Yes	6	expl	6:expl	_
6	шепнат	шепна	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	3:ccomp	_
7	още	още	ADV	Dq	Degree=Pos	8	advmod	8:advmod	_
8	по-ниско	ниско	ADV	Dm	Degree=Cmp	6	advmod	6:advmod	SpaceAfter=No
9	.	.	PUNCT	punct	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 nummod	color:blue
1	Вземаме	вземам	VERB	Vpitf-r1p	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	94	94	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	3	nummod	3:nummod	_
3	млн.	милион	NOUN	Ncmt	Gender=Masc|Number=Count	1	obj	1:obj	_
4	евро	евро	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	3	nmod	3:nmod	_
5	заеми	заем	NOUN	Ncmpi	Definite=Ind|Gender=Masc|Number=Plur	3	nmod	3:nmod	_
6	за	за	ADP	R	_	7	case	7:case	_
7	Дунав	дунав	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	1	obl	1:obl:за	_
8	мост	мост	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	7	nmod	7:nmod	_
9	-	-	PUNCT	punct	_	10	punct	10:punct	_
10	2	два	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	7	nummod	7:nummod	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	-	-	PUNCT	punct	_	5	punct	5:punct	_
2	Ние	аз	PRON	Ppe-op1	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	5:nsubj|7:nsubj	_
3	четиримата	четирима	NUM	Mc--d	Definite=Def|Number=Plur|NumType=Card	2	nummod	2:nummod	_
4	бихме	съм	AUX	Vxitu-o1p	Aspect=Imp|Mood=Cnd|Number=Plur|Person=1|VerbForm=Fin	5	aux	5:aux	_
5	могли	мога	VERB	Vpiicao-p-i	Aspect=Imp|Definite=Ind|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
6	да	да	AUX	Tx	_	9	aux	9:aux	_
7	бъдем	бъда	AUX	Vyptf-r1p	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
8	чудесен	чудесен	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	_
9	екип	екип	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	5	xcomp	5:xcomp	_

~~~


