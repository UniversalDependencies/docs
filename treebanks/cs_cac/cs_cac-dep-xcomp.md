---
layout: base
title:  'Statistics of xcomp in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `xcomp`

This relation is universal.

4056 nodes (1%) are attached to their parents as `xcomp`.

3934 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.24285009861933.

The following 22 pairs of parts of speech are connected with `xcomp`: <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-VERB.html">VERB</a></tt> (3366; 83% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (225; 6% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-VERB.html">VERB</a></tt> (193; 5% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (157; 4% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (31; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (21; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADV.html">ADV</a></tt> (14; 0% instances), <tt><a href="cs_cac-pos-PART.html">PART</a></tt>-<tt><a href="cs_cac-pos-VERB.html">VERB</a></tt> (11; 0% instances), <tt><a href="cs_cac-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_cac-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="cs_cac-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cac-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="cs_cac-pos-DET.html">DET</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-DET.html">DET</a></tt>-<tt><a href="cs_cac-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-DET.html">DET</a></tt>-<tt><a href="cs_cac-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Protože	protože	SCONJ	J,-------------	_	8	mark	8:mark	_
2	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	3:case	LId=bez-1
3	železnice	železnice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	8	obl	8:obl:bez:gen	_
4	bychom	být	AUX	Vc-P---1-------	Aspect=Imp|Mood=Cnd|Number=Plur|Person=1|VerbForm=Fin	8	aux	8:aux	_
5	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	9:expl:pv	LGloss=(zvr._zájmeno/částice)
6	život	život	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obj	9:obj	_
7	vůbec	vůbec	ADV	Db-------------	_	8	advmod	8:advmod	_
8	nedovedli	dovést	VERB	VpMP---XR-NA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
9	představit	představit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	8	xcomp	8:xcomp	SpaceAfter=No|LGloss=(si_něco;_něco/někoho_někomu)
10	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Konečně	konečně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	5:advmod	LDeriv=konečný
2	všechny	všechno	PRON	PLIP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	3	nmod	3:nmod:nom	_
3	druhy	druh	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	5:nsubj|7:nsubj:xsubj	LId=druh-1|LGloss=(typ)
4	pleti	pleť	NOUN	NNFS2-----A---1	Case=Gen|Gender=Fem|Number=Sing	3	nmod	3:nmod:gen	_
5	mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LGloss=(mít_možnost_[něco_dělat])
6	být	být	AUX	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	7	cop	7:cop	_
7	dráždivé	dráždivý	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	5	xcomp	5:xcomp	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Přitom	přitom	ADV	Db-------------	_	3	advmod	3:advmod	_
2	je	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	povinen	povinný	ADJ	ACYS------A----	Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	0	root	0:root	_
4	dbát	dbát	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	_
5	zvýšené	zvýšený	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	6	amod	6:amod	LDeriv=zvýšit
6	opatrnosti	opatrnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	4	obl:arg	4:obl:arg:gen	SpaceAfter=No|LDeriv=opatrný
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


