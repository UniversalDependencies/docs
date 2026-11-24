---
layout: base
title:  'Statistics of nmod:arg in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `nmod:arg`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="lt_alksnis-dep-nmod-gov.html">nmod:gov</a></tt>, <tt><a href="lt_alksnis-dep-nmod-obl.html">nmod:obl</a></tt>.

654 nodes (1%) are attached to their parents as `nmod:arg`.

566 instances of `nmod:arg` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.68960244648318.

The following 7 pairs of parts of speech are connected with `nmod:arg`: <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (587; 90% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (32; 5% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt> (20; 3% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (5; 1% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:arg	color:blue
1	2.1.3.1	2.1.3.1	NUM	sktv.arab.	NumForm=Digit	7	discourse	_	SpaceAfter=No
2	.	.	PUNCT	skyr.	_	1	punct	_	_
3	gyvulių	gyvulys	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	4	nmod	_	_
4	tankio	tankis	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
5	ūkyje	ūkis	NOUN	dkt.vyr.vns.Vt.	Case=Loc|Gender=Masc|Number=Sing	4	nmod:obl	_	_
6	reikalavimų	reikalavimas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	7	nmod:arg	_	_
7	laikymosi	laikymasis	NOUN	dkt.sngr.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing|Reflex=Yes	0	root	_	SpaceAfter=No
8	;	;	PUNCT	skyr.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod:arg	color:blue
1	Rodikliai	rodiklis	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
2	juk	juk	PART	dll.	_	3	advmod:emph	_	_
3	rodo	rodyti	VERB	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	skyr.	_	9	punct	_	_
5	kad	kad	SCONJ	jng.	_	9	mark	_	_
6	padidinus	padidinti	VERB	vksm.pad.būt-k.	Tense=Past|VerbForm=Ger	9	advcl	_	_
7	mokesčius	mokestis	NOUN	dkt.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur	6	obj	_	_
8	tik	tik	PART	dll.	_	9	advmod:emph	_	_
9	sumažėjo	sumažėti	VERB	vksm.asm.tiesiog.būt-k.3.	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	3	ccomp	_	_
10	jų	jis	PRON	įv.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur|PronType=Prs	11	nmod:arg	_	_
11	surinkimas	surinkimas	NOUN	dkt.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	skyr.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nmod:arg	color:blue
1	Todėl	todėl	ADV	prv.nelygin.	Degree=Pos	2	advmod	_	_
2	būtina	būtinas	ADJ	bdv.nelygin.bev.	Degree=Pos|Gender=Neut	0	root	_	_
3	didinti	didinti	VERB	vksm.bndr.	VerbForm=Inf	2	csubj	_	_
4	kultūros	kultūra	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
5	ir	ir	CCONJ	jng.	_	6	cc	_	_
6	švietimo	švietimas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	4	conj	_	_
7	svarbą	svarba	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	_
8	Lietuvos	Lietuva	PROPN	dkt.tikr.vtvrd.mot.vns.K.	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	10	nmod:arg	_	_
9	darnaus	darnus	ADJ	bdv.nelygin.vyr.vns.K.	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
10	vystymosi	vystymasis	NOUN	dkt.sngr.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing|Reflex=Yes	11	nmod	_	_
11	politikoje	politika	NOUN	dkt.mot.vns.Vt.	Case=Loc|Gender=Fem|Number=Sing	7	nmod:obl	_	SpaceAfter=No
12	.	.	PUNCT	skyr.	_	2	punct	_	_

~~~


