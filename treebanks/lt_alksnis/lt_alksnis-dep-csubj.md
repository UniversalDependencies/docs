---
layout: base
title:  'Statistics of csubj in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="lt_alksnis-dep-csubj-pass.html">csubj:pass</a></tt>.

340 nodes (0%) are attached to their parents as `csubj`.

305 instances of `csubj` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.08529411764706.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (143; 42% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (115; 34% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (60; 18% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (14; 4% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	Dirbdamas	dirbti	VERB	vksm.pusd.vyr.vns.	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Conv	4	advcl	4:advcl	_
2	namuose	namai	NOUN	dkt.vyr.dgs.Vt.	Case=Loc|Gender=Masc|Number=Plur	1	obl	1:obl	_
3	ilgainiui	ilgainiui	ADV	prv.nelygin.	Degree=Pos	6	advmod	6:advmod	_
4	gali	galėti	VERB	vksm.asm.tiesiog.es.vns.2.	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	pasijusti	pasijusti	VERB	vksm.bndr.sngr.	Polarity=Pos|Reflex=Yes|VerbForm=Inf	6	csubj	6:csubj	_
6	izoliuotas	izoliuoti	VERB	vksm.dlv.neveik.būt.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	4	xcomp	4:xcomp	SpaceAfter=No
7	.	.	PUNCT	skyr.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 csubj	color:blue
1	Žinoma	žinoti	VERB	vksm.dlv.neveik.es.bev.	Definite=Ind|Gender=Neut|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	8	parataxis	8:parataxis	SpaceAfter=No
2	,	,	PUNCT	skyr.	_	1	punct	1:punct	_
3	Lietuvoje	Lietuva	PROPN	dkt.tikr.mot.vns.Vt.	Case=Loc|Gender=Fem|Number=Sing	8	obl	8:obl	_
4	šie	šis	DET	įv.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|PronType=Dem	5	det	5:det	_
5	skaičiai	skaičius	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	8:nsubj	_
6	nebūtų	nebūti	VERB	vksm.asm.neig.tar.dgs.3.	Mood=Cnd|Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin	8	csubj	8:csubj	_
7	tokie	toks	DET	įv.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|PronType=Dem	8	det	8:det	_
8	dramatiški	dramatiškas	ADJ	bdv.nelygin.vyr.dgs.V.	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	skyr.	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 csubj	color:blue
1	„	„	PUNCT	skyr.	_	6	punct	6:punct	SpaceAfter=No
2	Ir	ir	CCONJ	jng.	_	6	cc	6:cc	_
3	taip	taip	ADV	prv.nelygin.	Degree=Pos	6	advmod	6:advmod	_
4	jau	jau	PART	dll.	_	5	advmod:emph	5:advmod:emph	_
5	aštuonerius	aštuoni	NUM	sktv.raid.daugin.vyr.G.	Case=Acc|Definite=Ind|Gender=Masc|NumForm=Word|NumType=Mult	6	nummod	6:nummod	_
6	metus	metai	NOUN	dkt.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	skyr.	_	9	punct	9:punct	_
8	-	-	PUNCT	skyr.	_	9	punct	9:punct	_
9	nusišypso	nusišypsoti	VERB	vksm.asm.sngr.tiesiog.es.dgs.3.	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Fin	6	csubj	6:csubj	_
10	sutuoktiniai	sutuoktinis	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	9:nsubj	SpaceAfter=No
11	.	.	PUNCT	skyr.	_	9	punct	9:punct	_

~~~


