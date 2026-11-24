---
layout: base
title:  'Statistics of nsubj:pass in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-nsubj.html">nsubj</a></tt>.

572 nodes (1%) are attached to their parents as `nsubj:pass`.

290 instances of `nsubj:pass` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.41608391608392.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (474; 83% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (26; 5% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (25; 4% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (22; 4% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt> (15; 3% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Hipotezė	hipotezė	NOUN	dkt.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing	2	nsubj:pass	_	_
2	tikrinama	tikrinti	VERB	vksm.dlv.neveik.es.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
3	atliekant	atlikti	VERB	vksm.pad.es.	Tense=Pres|VerbForm=Ger	2	advcl	_	_
4	dviejų	du	NUM	sktv.raid.kiek.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	5	nummod	_	_
5	etapų	etapas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	_
6	analizę	analizė	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	SpaceAfter=No
7	.	.	PUNCT	skyr.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:pass	color:blue
1	Vieną	vienas	NUM	sktv.raid.kiek.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	2	nummod	_	_
2	kartą	kartas	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	6	obl	_	_
3	tai	tas	PRON	įv.bev.	Gender=Neut|PronType=Dem	6	nsubj:pass	_	_
4	jau	jau	ADV	prv.nelygin.	Degree=Pos	6	advmod	_	_
5	buvo	būti	AUX	vksm.asm.tiesiog.būt-k.3.	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
6	padaryta	padaryti	VERB	vksm.dlv.neveik.būt.bev.	Gender=Neut|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
7	,	,	PUNCT	skyr.	_	11	punct	_	_
8	tai	tai	PART	dll.	_	11	advmod:emph	_	_
9	kur	kur	ADV	prv.nelygin.	Degree=Pos|PronType=Int,Rel	11	advmod	_	_
10	ta	tas	DET	įv.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	11	det	_	_
11	riba	riba	NOUN	dkt.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing	6	conj	_	SpaceAfter=No
12	?	?	PUNCT	skyr.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nsubj:pass	color:blue
1	Dokumentui	dokumentas	NOUN	dkt.vyr.vns.N.	Case=Dat|Gender=Masc|Number=Sing	2	obl:arg	_	_
2	liko	likti	VERB	vksm.asm.tiesiog.būt-k.3.	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	peržengti	peržengti	VERB	vksm.bndr.	VerbForm=Inf	2	xcomp	_	_
4	paskutinį	paskutinis	ADJ	bdv.nelygin.vyr.vns.G.	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	laiptelį	laiptelis	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
6	–	–	PUNCT	skyr.	_	7	punct	_	_
7	priėmimą	priėmimas	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	5	appos	_	SpaceAfter=No
8	,	,	PUNCT	skyr.	_	10	punct	_	_
9	kuris	kuris	DET	įv.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	10	nsubj:pass	_	_
10	planuojamas	planuoti	VERB	vksm.dlv.neveik.es.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	7	acl:relcl	_	_
11	gruodį	gruodis	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
12	.	.	PUNCT	skyr.	_	2	punct	_	_

~~~


