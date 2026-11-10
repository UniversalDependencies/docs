---
layout: base
title:  'Statistics of ccomp in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `ccomp`

This relation is universal.

520 nodes (1%) are attached to their parents as `ccomp`.

507 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.68076923076923.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (421; 81% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (44; 8% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (30; 6% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (9; 2% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 ccomp	color:blue
1	Prancūzija	Prancūzija	PROPN	dkt.tikr.vtvrd.mot.vns.V.	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	2	nsubj	_	_
2	siūlo	siūlyti	VERB	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	sustabdyti	sustabdyti	VERB	vksm.bndr.	VerbForm=Inf	2	ccomp	_	_
4	ES	ES	PROPN	akr.	Abbr=Yes	5	nmod	_	_
5	plėtrą	plėtra	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	Tik	tik	PART	dll.	_	2	advmod:emph	_	_
2	mėgėjai	mėgėjas	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
3	mano	manyti	VERB	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	skyr.	_	9	punct	_	_
5	jog	jog	SCONJ	jng.	_	9	mark	_	_
6	baltas	baltas	ADJ	bdv.nelygin.vyr.vns.V.	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	puslapis	puslapis	NOUN	dkt.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
8	jai	jis	PRON	įv.mot.vns.N.	Case=Dat|Gender=Fem|Number=Sing|PronType=Prs	9	obl:arg	_	_
9	būtinas	būtinas	ADJ	bdv.nelygin.vyr.vns.V.	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	skyr.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Jis	jis	PRON	įv.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	2	nsubj	_	_
2	sakydavo	sakyti	VERB	vksm.asm.tiesiog.būt-d.3.	Aspect=Hab|Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	7	punct	_	_
4	kad	kad	SCONJ	jng.	_	7	mark	_	_
5	yra	būti	AUX	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	mano	aš	PRON	įv.savyb.vns.K.	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	7	nmod	_	_
7	uošvis	uošvis	NOUN	dkt.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing	2	ccomp	_	SpaceAfter=No
8	,	,	PUNCT	skyr.	_	12	punct	_	_
9	bet	bet	CCONJ	jng.	_	12	cc	_	_
10	aš	aš	PRON	įv.vns.V.	Case=Nom|Number=Sing|PronType=Prs	12	nsubj	_	_
11	tuo	tas	DET	įv.vyr.vns.Įn.	Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	12	obl:arg	_	_
12	netikiu	netikėti	VERB	vksm.asm.neig.tiesiog.es.vns.1.	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	conj	_	SpaceAfter=No
13	.	.	PUNCT	skyr.	_	2	punct	_	_

~~~


