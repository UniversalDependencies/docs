---
layout: base
title:  'Statistics of csubj in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="lt_alksnis-dep-csubj-pass.html">csubj:pass</a></tt>.

259 nodes (0%) are attached to their parents as `csubj`.

221 instances of `csubj` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.27799227799228.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (168; 65% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (32; 12% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (32; 12% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PART.html">PART</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	Jo	jis	PRON	įv.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing|PronType=Prs	2	nmod	_	_
2	teigimu	teigimas	NOUN	dkt.vyr.vns.Įn.	Case=Ins|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	2	punct	_	_
4	sudėtinga	sudėtingas	ADJ	bdv.nelygin.bev.	Degree=Pos|Gender=Neut	0	root	_	_
5	vertinti	vertinti	VERB	vksm.bndr.	VerbForm=Inf	4	csubj	_	_
6	Latvijos	Latvija	PROPN	dkt.tikr.vtvrd.mot.vns.K.	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	7	nmod	_	_
7	padėtį	padėtis	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	skyr.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 csubj	color:blue
1	Natūralu	natūralus	ADJ	bdv.nelygin.bev.	Degree=Pos|Gender=Neut	0	root	_	SpaceAfter=No
2	,	,	PUNCT	skyr.	_	7	punct	_	_
3	kad	kad	SCONJ	jng.	_	7	mark	_	_
4	dalies	dalis	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	11	obj	_	_
5	jo	jis	PRON	įv.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing|PronType=Prs	4	nmod:gov	_	_
6	man	aš	PRON	įv.vns.N.	Case=Dat|Number=Sing|PronType=Prs	7	obl:arg	_	_
7	geriau	gerai	ADV	prv.aukšt.	Degree=Cmp	1	csubj	_	_
8	būtų	būti	AUX	vksm.asm.tar.3.	Mood=Cnd|Person=3|Polarity=Pos|VerbForm=Fin	7	cop	_	_
9	niekada	niekada	ADV	prv.nelygin.	Degree=Pos|PronType=Neg	11	advmod	_	_
10	ir	ir	PART	dll.	_	11	advmod:emph	_	_
11	nesužinoti	nesužinoti	VERB	vksm.bndr.neig.	Polarity=Neg|VerbForm=Inf	7	csubj	_	SpaceAfter=No
12	.	.	PUNCT	skyr.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 csubj	color:blue
1	Tiesa	tiesa	NOUN	dkt.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing	9	discourse	_	SpaceAfter=No
2	,	,	PUNCT	skyr.	_	1	punct	_	_
3	stengtis	stengtis	VERB	vksm.bndr.sngr.	Reflex=Yes|VerbForm=Inf	9	csubj	_	_
4	būti	būti	AUX	vksm.bndr.	VerbForm=Inf	5	cop	_	_
5	gražiam	gražus	ADJ	bdv.nelygin.vyr.vns.N.	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	3	xcomp	_	SpaceAfter=No
6	,	,	PUNCT	skyr.	_	7	punct	_	_
7	pasitempti	pasitempti	VERB	vksm.bndr.sngr.	Reflex=Yes|VerbForm=Inf	3	conj	_	_
8	–	–	PUNCT	skyr.	_	9	punct	_	_
9	sveikintina	sveikinti	VERB	vksm.dlv.reik.bev.	Gender=Neut|Mood=Nec|VerbForm=Part	0	root	_	SpaceAfter=No
10	.	.	PUNCT	skyr.	_	9	punct	_	_

~~~


