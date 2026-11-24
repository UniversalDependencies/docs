---
layout: base
title:  'Statistics of csubj:pass in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-csubj.html">csubj</a></tt>.

77 nodes (0%) are attached to their parents as `csubj:pass`.

73 instances of `csubj:pass` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.11688311688312.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (69; 90% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj:pass	color:blue
1	Siūloma	siūlyti	VERB	vksm.dlv.neveik.es.bev.	Gender=Neut|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
2	viešinti	viešinti	VERB	vksm.bndr.	VerbForm=Inf	1	csubj:pass	_	_
3	aukštųjų	aukštas	ADJ	bdv.nelygin.įvardž.mot.dgs.K.	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	4	amod	_	_
4	mokyklų	mokykla	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	_
5	vadovų	vadovas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	_
6	atlyginimus	atlyginimas	NOUN	dkt.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur	2	obj	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 csubj:pass	color:blue
1	Jau	jau	PART	dll.	_	2	advmod:emph	_	_
2	tuomet	tuomet	ADV	prv.nelygin.	Degree=Pos	3	advmod	_	_
3	žinota	žinoti	VERB	vksm.dlv.neveik.būt.bev.	Gender=Neut|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	,	,	PUNCT	skyr.	_	10	punct	_	_
5	kad	kad	SCONJ	jng.	_	10	mark	_	_
6	užkietėjus	užkietėti	VERB	vksm.pad.būt-k.	Tense=Past|VerbForm=Ger	10	advcl	_	_
7	viduriams	viduriai	NOUN	dkt.vyr.dgs.N.	Case=Dat|Gender=Masc|Number=Plur	6	obl:arg	_	_
8	į	į	ADP	prl.G.	Case=Acc	9	case	_	_
9	būdelę	būdelė	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	11	obl:arg	_	_
10	pravartu	pravartus	ADJ	bdv.nelygin.bev.	Degree=Pos|Gender=Neut	3	csubj:pass	_	_
11	pasiimti	pasiimti	VERB	vksm.bndr.sngr.	Reflex=Yes|VerbForm=Inf	10	csubj	_	_
12	Tiesą	tiesa	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	11	obj	_	_
13	ar	ar	CCONJ	jng.	_	14	cc	_	_
14	Komunistą	komunistas	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	12	conj	_	SpaceAfter=No
15	,	,	PUNCT	skyr.	_	16	punct	_	_
16	pageidautina	pageidauti	VERB	vksm.dlv.reik.bev.	Gender=Neut|Mood=Nec|VerbForm=Part	10	conj	_	_
17	su	su	ADP	prl.Įn.	Case=Ins	18	case	_	_
18	nuotraukom	nuotrauka	NOUN	dkt.mot.dgs.Įn.trump.	Case=Ins|Gender=Fem|Number=Plur|Variant=Short	16	csubj	_	SpaceAfter=No
19	.	.	PUNCT	skyr.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj:pass	color:blue
1	Pačių	pats	DET	įv.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur|PronType=Emp	2	det	_	_
2	autorių	autorius	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	3	obl:agent	_	_
3	pripažįstama	pripažinti	VERB	vksm.dlv.neveik.es.bev.	Gender=Neut|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	,	,	PUNCT	skyr.	_	9	punct	_	_
5	kad	kad	SCONJ	jng.	_	9	mark	_	_
6	tai	tas	PRON	įv.bev.	Gender=Neut|PronType=Dem	9	nsubj	_	_
7	per	per	PART	dll.	_	8	advmod:emph	_	_
8	maži	mažas	ADJ	bdv.nelygin.vyr.dgs.V.	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	_
9	laikotarpiai	laikotarpis	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	3	csubj:pass	_	_
10	migracinėms	migracinis	ADJ	bdv.nelygin.mot.dgs.N.	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur	11	amod	_	_
11	patirtims	patirtis	NOUN	dkt.mot.dgs.N.	Case=Dat|Gender=Fem|Number=Plur	12	obl:arg	_	_
12	tirti	tirti	VERB	vksm.bndr.	VerbForm=Inf	9	advcl	_	SpaceAfter=No
13	.	.	PUNCT	skyr.	_	3	punct	_	_

~~~


