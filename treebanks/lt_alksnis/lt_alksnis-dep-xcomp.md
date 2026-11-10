---
layout: base
title:  'Statistics of xcomp in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `xcomp`

This relation is universal.

834 nodes (1%) are attached to their parents as `xcomp`.

803 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.52637889688249.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (693; 83% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (57; 7% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (56; 7% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (8; 1% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Estija	Estija	PROPN	dkt.tikr.vtvrd.mot.vns.V.	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	2	nsubj	_	_
2	nenori	nenorėti	VERB	vksm.asm.neig.tiesiog.es.3.	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	_
3	skolintis	skolintis	VERB	vksm.bndr.sngr.	Reflex=Yes|VerbForm=Inf	2	xcomp	_	_
4	iš	iš	ADP	prl.K.	Case=Gen	5	case	_	_
5	TVF	TVF	PROPN	akr.	Abbr=Yes	3	obl:arg	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	Visuomet	visuomet	ADV	prv.nelygin.	Degree=Pos	2	advmod	_	_
2	jaučiuosi	jaustis	VERB	vksm.asm.sngr.tiesiog.es.vns.1.	Mood=Ind|Number=Sing|Person=1|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	_	_
3	esąs	būti	AUX	vksm.dlv.veik.es.vyr.vns.V.trump.	Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|Variant=Short|VerbForm=Part|Voice=Act	5	cop	_	_
4	tik	tik	PART	dll.	_	5	advmod:emph	_	_
5	priedas	priedas	NOUN	dkt.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing	2	xcomp	_	_
6	jų	jis	PRON	įv.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur|PronType=Prs	7	nmod	_	_
7	salonuose	salonas	NOUN	dkt.vyr.dgs.Vt.	Case=Loc|Gender=Masc|Number=Plur	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	skyr.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
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


