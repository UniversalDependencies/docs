---
layout: base
title:  'Statistics of obl:agent in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="lt_alksnis-dep-obl-arg.html">obl:arg</a></tt>.

155 nodes (0%) are attached to their parents as `obl:agent`.

136 instances of `obl:agent` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80645161290323.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (123; 79% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (19; 12% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt> (8; 5% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (4; 3% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:agent	color:blue
1	III	III	NUM	sktv.rom.	NumForm=Roman	4	discourse	_	SpaceAfter=No
2	.	.	PUNCT	skyr.	_	1	punct	_	_
3	INSTITUCIJOS	institucija	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	4	obl:agent	_	_
4	VYKDYTA	vykdyti	VERB	vksm.dlv.neveik.būt.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
5	VEIKLA	veikla	NOUN	dkt.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	_	_
6	IR	ir	CCONJ	jng.	_	8	cc	_	_
7	PASIEKTI	pasiekti	VERB	vksm.dlv.neveik.būt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	8	amod	_	_
8	REZULTATAI	rezultatas	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	4	conj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:agent	color:blue
1	Bendraujame	bendrauti	VERB	vksm.asm.tiesiog.es.dgs.1.	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	su	su	ADP	prl.Įn.	Case=Ins	5	case	_	_
3	mūsų	aš	PRON	įv.dgs.K.	Case=Gen|Number=Plur|PronType=Prs	4	obl:agent	_	_
4	išrinktu	išrinkti	VERB	vksm.dlv.neveik.būt.vyr.vns.Įn.	Case=Ins|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	amod	_	_
5	K.	K.	PROPN	sutr.	Abbr=Yes	1	obl:arg	_	_
6	Glavecku	Glaveckas	PROPN	dkt.tikr.pvrd.vyr.vns.Įn.	Case=Ins|Gender=Masc|NameType=Sur|Number=Sing	5	flat	_	SpaceAfter=No
7	.	.	PUNCT	skyr.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:agent	color:blue
1	ADTAĮ	ADTAĮ	PROPN	akr.	Abbr=Yes	2	obl:agent	_	_
2	nustatytais	nustatyti	VERB	vksm.dlv.neveik.būt.vyr.dgs.Įn.	Case=Ins|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	3	amod	_	_
3	atvejais	atvejis	NOUN	dkt.vyr.dgs.Įn.	Case=Ins|Gender=Masc|Number=Plur	5	obl	_	_
4	Inspekcija	inspekcija	NOUN	dkt.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
5	atlieka	atlikti	VERB	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	išankstinę	išankstinis	ADJ	bdv.nelygin.mot.vns.G.	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	patikrą	patikra	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
8	ir	ir	CCONJ	jng.	_	13	cc	_	_
9	asmens	asmuo	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
10	duomenų	duomuo	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	11	nmod:arg	_	_
11	tvarkymo	tvarkymas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	_
12	teisėtumo	teisėtumas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	13	nmod:arg	_	_
13	patikrinimus	patikrinimas	NOUN	dkt.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur	7	conj	_	SpaceAfter=No
14	.	.	PUNCT	skyr.	_	5	punct	_	_

~~~


