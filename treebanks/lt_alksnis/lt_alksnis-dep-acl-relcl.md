---
layout: base
title:  'Statistics of acl:relcl in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-acl.html">acl</a></tt>.

297 nodes (1%) are attached to their parents as `acl:relcl`.

297 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.09427609427609.

The following 17 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (208; 70% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (25; 8% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (24; 8% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (14; 5% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-X.html">X</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	Tie	tas	DET	įv.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	2	det	_	_
2	žmonės	žmogus	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	5	punct	_	_
4	kurių	kuris	DET	įv.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur|PronType=Int,Rel	5	obj	_	_
5	nepažįstam	nepažinti	VERB	vksm.asm.neig.tiesiog.es.dgs.1.trump.	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|Variant=Short|VerbForm=Fin	2	acl:relcl	_	SpaceAfter=No
6	.	.	PUNCT	skyr.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	O	o	CCONJ	jng.	_	8	cc	_	_
2	tie	tas	DET	įv.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	8	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	5	punct	_	_
4	kurie	kuris	DET	įv.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	5	nsubj	_	_
5	liko	likti	VERB	vksm.asm.tiesiog.būt-k.3.	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	2	acl:relcl	_	SpaceAfter=No
6	,	,	PUNCT	skyr.	_	5	punct	_	_
7	apstulbinti	apstulbinti	VERB	vksm.dlv.neveik.būt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	8	advcl	_	_
8	žvelgė	žvelgti	VERB	vksm.asm.tiesiog.būt-k.3.	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	į	į	ADP	prl.G.	Case=Acc	12	case	_	_
10	mano	aš	PRON	įv.savyb.vns.K.	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	12	nmod	_	_
11	pusplikę	pusplikis	ADJ	bdv.nelygin.mot.vns.G.	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	_
12	galvą	galva	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	8	obl:arg	_	SpaceAfter=No
13	.	.	PUNCT	skyr.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 acl:relcl	color:blue
1	Pvz.	pvz.	NOUN	sutr.	Abbr=Yes	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	skyr.	_	1	punct	_	_
3	vietoj	vietoj	ADP	prl.K.	Case=Gen	6	case	_	_
4	brangaus	brangus	ADJ	bdv.nelygin.vyr.vns.K.	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
5	alyvuogių	alyvuogė	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	6	nmod	_	_
6	aliejaus	aliejus	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	7	obl	_	_
7	pirkti	pirkti	VERB	vksm.bndr.	VerbForm=Inf	0	root	_	_
8	saulėgrąžų	saulėgrąža	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	7	obj	_	SpaceAfter=No
9	,	,	PUNCT	skyr.	_	13	punct	_	_
10	kuris	kuris	DET	įv.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	13	nsubj	_	_
11	yra	būti	AUX	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	ne	ne	PART	dll.	_	13	advmod:emph	_	_
13	prastesnis	prastas	ADJ	bdv.aukšt.vyr.vns.V.	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	8	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	skyr.	_	7	punct	_	_

~~~


