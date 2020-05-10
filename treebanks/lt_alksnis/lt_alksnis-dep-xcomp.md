---
layout: base
title:  'Statistics of xcomp in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `xcomp`

This relation is universal.

1184 nodes (2%) are attached to their parents as `xcomp`.

1132 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.85472972972973.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1033; 87% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (73; 6% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (24; 2% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (23; 2% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (17; 1% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Viso	visas	DET	įv.vyr.vns.K.	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|PronType=Tot	2	det	2:det	_
2	to	tas	DET	įv.vyr.vns.K.	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	4	obl:arg	4:obl:arg:gen	_
3	galima	galėti	VERB	vksm.dlv.neveik.es.bev.	Definite=Ind|Gender=Neut|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	išvengti	išvengti	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	_
5	nusprendus	nuspręsti	VERB	vksm.pad.būt-k.	Aspect=Perf|Polarity=Pos|Tense=Past|VerbForm=Ger	4	advcl	4:advcl	_
6	dirbti	dirbti	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	5	xcomp	5:xcomp	_
7	namuose	namai	NOUN	dkt.vyr.dgs.Vt.	Case=Loc|Gender=Masc|Number=Plur	6	obl	6:obl:loc	SpaceAfter=No
8	.	.	PUNCT	skyr.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Jo	jis	PRON	įv.vyr.vns.K.	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obl:arg	2:obl:arg:gen	_
2	teigimu	teigimas	NOUN	dkt.vyr.vns.Įn.	Case=Ins|Gender=Masc|Number=Sing	4	parataxis	4:parataxis	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	2	punct	2:punct	_
4	sudėtinga	sudėtingas	ADJ	bdv.nelygin.bev.	Definite=Ind|Degree=Pos|Gender=Neut	0	root	0:root	_
5	vertinti	vertinti	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	4	xcomp	4:xcomp	_
6	Latvijos	Latvija	PROPN	dkt.tikr.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	7	nmod	7:nmod:gen	_
7	padėtį	padėtis	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	SpaceAfter=No
8	.	.	PUNCT	skyr.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 xcomp	color:blue
1	Kita	kita	ADV	sampl.prv.nelygin.	Degree=Pos|Hyph=Yes	8	parataxis	8:parataxis	_
2	vertus	vertus	X	tęs.	Hyph=Yes	1	nmod	1:nmod	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	1	punct	1:punct	_
4	gyventi	gyventi	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	8	csubj	8:csubj|10:csubj	_
5	su	su	ADP	prl.Įn.	AdpType=Prep|Case=Ins	7	case	7:case	_
6	tokia	toks	DET	įv.mot.vns.Įn.	Case=Ins|Definite=Ind|Gender=Fem|Number=Sing|PronType=Dem	7	det	7:det	_
7	paslaptimi	paslaptis	NOUN	dkt.mot.vns.Įn.	Case=Ins|Gender=Fem|Number=Sing	4	obl:arg	4:obl:arg:su:ins	_
8	gali	galėti	VERB	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
9	būti	būti	AUX	vksm.bndr.	Polarity=Pos|VerbForm=Inf	10	cop	10:cop	_
10	neįmanoma	neįmanomas	ADJ	bdv.nelygin.bev.	Definite=Ind|Degree=Pos|Gender=Neut	8	xcomp	8:xcomp	SpaceAfter=No
11	.	.	PUNCT	skyr.	_	8	punct	8:punct	_

~~~


