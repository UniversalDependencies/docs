---
layout: base
title:  'Statistics of csubj in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="lt_alksnis-dep-csubj-pass.html">csubj:pass</a></tt>.

273 nodes (0%) are attached to their parents as `csubj`.

141 instances of `csubj` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.94505494505495.

The following 13 pairs of parts of speech are connected with `csubj`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (131; 48% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (75; 27% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (25; 9% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (18; 7% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (11; 4% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	Dirbdamas	dirbti	VERB	vksm.pusd.vyr.vns.	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Conv	4	advcl	4:advcl	_
2	namuose	namai	NOUN	dkt.vyr.dgs.Vt.	Case=Loc|Gender=Masc|Number=Plur	1	obl	1:obl:loc	_
3	ilgainiui	ilgainiui	ADV	prv.nelygin.	Degree=Pos	6	advmod	6:advmod	_
4	gali	galėti	VERB	vksm.asm.tiesiog.es.vns.2.	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	pasijusti	pasijusti	VERB	vksm.bndr.sngr.	Polarity=Pos|Reflex=Yes|VerbForm=Inf	6	csubj	6:csubj	_
6	izoliuotas	izoliuoti	VERB	vksm.dlv.neveik.būt.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	4	xcomp	4:xcomp	SpaceAfter=No
7	.	.	PUNCT	skyr.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	Jei	jei	SCONJ	jng.	_	2	mark	2:mark	_
2	darbingas	darbingas	ADJ	bdv.nelygin.vyr.vns.V.	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	9	advcl	9:advcl:jei	_
3	jaučiatės	jaustis	VERB	vksm.asm.sngr.tiesiog.es.dgs.2.	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Fin	2	csubj	2:csubj	_
4	su	su	ADP	prl.Įn.	AdpType=Prep|Case=Ins	5	case	5:case	_
5	švarku	švarkas	NOUN	dkt.vyr.vns.Įn.	Case=Ins|Gender=Masc|Number=Sing	2	obl:arg	2:obl:arg:su:ins	SpaceAfter=No
6	,	,	PUNCT	skyr.	_	2	punct	2:punct	_
7	jį	jis	PRON	įv.vyr.vns.G.	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obj	9:obj	_
8	ir	ir	PART	dll.	_	9	advmod:emph	9:advmod:emph	_
9	apsirenkite	apsirengti	VERB	vksm.asm.sngr.liep.dgs.2.	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Reflex=Yes|VerbForm=Fin	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	skyr.	_	9	punct	9:punct	_

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


