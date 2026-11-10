---
layout: base
title:  'Statistics of cc in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `cc`

This relation is universal.

2478 nodes (4%) are attached to their parents as `cc`.

2477 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.39225181598063.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (1086; 44% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (962; 39% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (208; 8% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (78; 3% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (68; 3% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (38; 2% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (18; 1% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (11; 0% instances), <tt><a href="lt_alksnis-pos-X.html">X</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="lt_alksnis-pos-PART.html">PART</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Tikrumo	tikrumas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
2	ir	ir	CCONJ	jng.	_	3	cc	_	_
3	grožio	grožis	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	1	conj	_	_
4	poreikį	poreikis	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	skyr.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Mes	aš	PRON	įv.dgs.V.	Case=Nom|Number=Plur|PronType=Prs	2	nsubj	_	_
2	stengiamės	stengtis	VERB	vksm.asm.sngr.tiesiog.es.dgs.1.	Mood=Ind|Number=Plur|Person=1|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	_	_
3	nepanikuoti	nepanikuoti	VERB	vksm.bndr.neig.	Polarity=Neg|VerbForm=Inf	2	xcomp	_	_
4	ir	ir	CCONJ	jng.	_	5	cc	_	_
5	vengti	vengti	VERB	vksm.bndr.	VerbForm=Inf	3	conj	_	_
6	rizikingų	rizikingas	ADJ	bdv.nelygin.vyr.dgs.K.	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	_
7	sprendimų	sprendimas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	skyr.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Ir	ir	CCONJ	jng.	_	4	cc	_	_
2	mums	aš	PRON	įv.dgs.N.	Case=Dat|Number=Plur|PronType=Prs	4	obl:arg	_	_
3	dėl to	dėl to	ADV	prv.nelygin.	Degree=Pos	4	advmod	_	_
4	neramu	neramus	ADJ	bdv.nelygin.bev.	Degree=Pos|Gender=Neut	0	root	_	SpaceAfter=No
5	,	,	PUNCT	skyr.	_	10	punct	_	_
6	nes	nes	SCONJ	jng.	_	10	mark	_	_
7	visi	visas	DET	įv.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	9	det	_	_
8	nevaldomi	nevaldyti	VERB	vksm.dlv.neig.neveik.es.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur|Polarity=Neg|Tense=Pres|VerbForm=Part|Voice=Pass	9	amod	_	_
9	procesai	procesas	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	_
10	baugūs	baugus	ADJ	bdv.nelygin.vyr.dgs.V.	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	4	advcl	_	SpaceAfter=No
11	.	.	PUNCT	skyr.	_	4	punct	_	_

~~~


