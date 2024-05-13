---
layout: base
title:  'Statistics of acl:relcl in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="bg_btb-dep-acl.html">acl</a></tt>.

1075 nodes (1%) are attached to their parents as `acl:relcl`.

1071 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.37860465116279.

The following 23 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (811; 75% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (71; 7% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (54; 5% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (46; 4% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (23; 2% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (13; 1% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="bg_btb-pos-PRON.html">PRON</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="bg_btb-pos-NUM.html">NUM</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="bg_btb-pos-ADV.html">ADV</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-PRON.html">PRON</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	Ами	ами	PART	Te	_	4	discourse	4:discourse	_
2	наистина	наистина	ADV	Dm	Degree=Pos	4	advmod	4:advmod	_
3	ли	ли	PART	Ti	_	2	discourse	2:discourse	_
4	има	имам	VERB	Vnitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	хора	хора	NOUN	Nc-li	Definite=Ind|Number=Ptan	4	obj	4:obj|8:nsubj	SpaceAfter=No
6	,	,	PUNCT	punct	_	8	punct	8:punct	_
7	които	който	PRON	Pre-op	Case=Nom|Number=Plur|PronType=Rel	8	nsubj	5:ref	_
8	ядат	ям-(се)	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	5:acl:relcl	_
9	жаби	жаба	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	8	obj	8:obj	SpaceAfter=No
10	?	?	PUNCT	punct	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	Така	така	ADV	Pdm	PronType=Dem	5	mark	5:mark	_
2	че	че	SCONJ	Cs	_	1	fixed	1:fixed	_
3	много	много	ADV	Md-pi	Definite=Ind|Degree=Pos|Number=Plur|NumType=Card	4	advmod	4:advmod	_
4	добре	добре	ADV	Dm	Degree=Pos	5	advmod	5:advmod	_
5	знам	знам	VERB	Vpiif-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	това	този	DET	Pde-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	obj	5:obj|9:obj	SpaceAfter=No
7	,	,	PUNCT	punct	_	9	punct	9:punct	_
8	което	който	PRON	Pre-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	9	obj	6:ref	_
9	говоря	говоря	VERB	Vpitf-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	6:acl:relcl	SpaceAfter=No
10	.	.	PUNCT	punct	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl:relcl	color:blue
1	А	а	CCONJ	Cp	_	11	cc	11:cc	_
2	beetle	beetle	NOUN	Nc	_	11	nsubj	7:nsubj|11:nsubj	SpaceAfter=No
3	,	,	PUNCT	punct	_	7	punct	7:punct	_
4	което	който	PRON	Pre-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	7	nsubj	2:ref	_
5	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	истинският	истински	ADJ	Amsf	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	_
7	бръмбар	бръмбар	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	2	acl:relcl	2:acl:relcl	SpaceAfter=No
8	,	,	PUNCT	punct	_	7	punct	7:punct	_
9	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
10	хапещо	хапя	ADJ	Vpitcar-sni	Aspect=Imp|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	11	amod	11:amod	_
11	насекомо	насекомо	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
12	.	.	PUNCT	punct	_	11	punct	11:punct	_

~~~


