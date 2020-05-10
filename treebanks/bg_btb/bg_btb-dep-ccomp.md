---
layout: base
title:  'Statistics of ccomp in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `ccomp`

This relation is universal.

2190 nodes (1%) are attached to their parents as `ccomp`.

2010 instances of `ccomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.68538812785388.

The following 19 pairs of parts of speech are connected with `ccomp`: <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (1739; 79% instances), <tt><a href="bg_btb-pos-AUX.html">AUX</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (111; 5% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (98; 4% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (96; 4% instances), <tt><a href="bg_btb-pos-PART.html">PART</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (41; 2% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-ADV.html">ADV</a></tt> (32; 1% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (22; 1% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-PRON.html">PRON</a></tt> (9; 0% instances), <tt><a href="bg_btb-pos-AUX.html">AUX</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="bg_btb-pos-AUX.html">AUX</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="bg_btb-pos-AUX.html">AUX</a></tt>-<tt><a href="bg_btb-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="bg_btb-pos-PART.html">PART</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="bg_btb-pos-PART.html">PART</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-ADP.html">ADP</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-PART.html">PART</a></tt>-<tt><a href="bg_btb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Най-лошото	лош	ADJ	Ansd	Definite=Def|Degree=Sup|Gender=Neut|Number=Sing	2	nsubj	2:nsubj	_
2	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	punct	_	7	punct	7:punct	_
4	че	че	SCONJ	Cs	_	7	mark	7:mark	_
5	тя	аз	PRON	Ppe-os3f	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj:pass	7:nsubj:pass	_
6	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux:pass	7:aux:pass	_
7	поразена	поразя-(се)	VERB	Vpptcv--sfi	Aspect=Perf|Definite=Ind|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	2	ccomp	2:ccomp	_
8	просто	просто	ADV	Dd	Degree=Pos	10	advmod	10:advmod	_
9	до	до	ADP	R	_	10	case	10:case	_
10	мозъка	мозък	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	7	obl	7:obl:до	_
11	на	на	ADP	R	_	12	case	12:case	_
12	костите	кост	NOUN	Ncfpd	Definite=Def|Gender=Fem|Number=Plur	10	nmod	10:nmod:на	SpaceAfter=No
13	.	.	PUNCT	punct	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 ccomp	color:blue
1	Теодосий	теодосий	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
2	вече	вече	ADV	Dt	Degree=Pos	6	advmod	6:advmod	_
3	не	не	PART	Tn	Polarity=Neg	6	advmod	6:advmod	_
4	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
5	наш	наш	DET	Pszl-s1mi	Definite=Ind|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	det	6:det	_
6	проблем	проблем	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	8	ccomp	8:ccomp	SpaceAfter=No
7	,	,	PUNCT	punct	_	6	punct	6:punct	_
8	казаха	кажа	VERB	Vpptf-o3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	от	от	ADP	R	_	10	case	10:case	_
10	НИС	нис	PROPN	Npmsh	Definite=Def|Gender=Masc|Number=Sing	8	obl	8:obl:от	_

~~~


