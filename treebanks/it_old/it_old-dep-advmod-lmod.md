---
layout: base
title:  'Statistics of advmod:lmod in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="it_old-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="it_old-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="it_old-dep-advmod-tmod.html">advmod:tmod</a></tt>.

1419 nodes (2%) are attached to their parents as `advmod:lmod`.

915 instances of `advmod:lmod` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.52290345313601.

The following 10 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1138; 80% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (139; 10% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (60; 4% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (41; 3% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (15; 1% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (11; 1% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (10; 1% instances), <tt><a href="it_old-pos-ADP.html">ADP</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advmod:lmod	color:blue
1	Ma	ma	CCONJ	csca	_	2	cc	_	Canto=33|Verso=148
2	distendi	distendere	VERB	vta2mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=33|Verso=148
3	oggimai	oggimai	ADV	b	_	2	advmod:tmod	_	Canto=33|Verso=148
4	in	in	ADP	_	_	5	case	_	Canto=33|Verso=148
5	qua	qua	ADV	_	_	2	advmod:lmod	_	Canto=33|Verso=148
6	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	Canto=33|Verso=148
7	mano	mano	NOUN	sf2fs	Gender=Fem|Number=Sing	2	obj	_	Canto=33|SpaceAfter=No|Verso=148
8	;	;	PUNCT	_	_	9	punct	_	_
9	apri	aprire	VERB	vta3mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	Canto=33|Verso=149
10	mi	mi	PRON	pp1sxda	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	9	iobj	_	Canto=33|Verso=149
11	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	Canto=33|Verso=149
12	occhi	occhio	NOUN	sm2mp	Gender=Masc|Number=Plur	9	obj	_	Canto=33|SpaceAfter=No|Verso=149
13	»	»	PUNCT	_	_	2	punct	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advmod:lmod	color:blue
1	Così	così	ADV	b	_	7	advmod	_	Canto=22|Verso=124
2	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	Canto=22|Verso=124
3	usanza	usanza	NOUN	sf1fs	Gender=Fem|Number=Sing	7	nsubj	_	Canto=22|Verso=124
4	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	Canto=22|Verso=124
5	lì	lì	ADV	b	_	7	advmod:lmod	_	Canto=22|Verso=124
6	nostra	nostro	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	7	det:poss	_	Canto=22|Verso=124
7	insegna	insegna	NOUN	sf1fs	Gender=Fem|Number=Sing	0	root	_	Canto=22|SpaceAfter=No|Verso=124
8	,	,	PUNCT	_	_	10	punct	_	_
9	e	e	CCONJ	cscc	_	10	cc	_	Canto=22|Verso=125
10	prendemmo	prendere	VERB	vta2irp1	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	7	conj	_	Canto=22|Verso=125
11	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	Canto=22|Verso=125
12	via	via	NOUN	sf1fs	Gender=Fem|Number=Sing	10	obj	_	Canto=22|Verso=125
13	con	con	ADP	epskm	_	15	case	_	Canto=22|Verso=125
14	men	meno	ADJ	a	_	15	amod	_	Canto=22|Verso=125
15	sospetto	sospetto	NOUN	sm2ms	Gender=Masc|Number=Sing	10	obl	_	Canto=22|Verso=125
16	per	per	ADP	epskr	_	18	case	_	Canto=22|Verso=126
17	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	Canto=22|Verso=126
18	assentir	assentire	VERB	vta3fpsm3ms	Tense=Pres|VerbForm=Inf|Voice=Act	10	obl	_	Canto=22|Verso=126
19	di	di	ADP	epskg	_	21	case	_	Canto=22|Verso=126
20	quell'	quello	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	21	det	_	Canto=22|Verso=126
21	anima	anima	NOUN	sf1fs	Gender=Fem|Number=Sing	18	nmod	_	Canto=22|Verso=126
22	degna	degno	ADJ	a1fs	Gender=Fem|Number=Sing	21	amod	_	Canto=22|SpaceAfter=No|Verso=126
23	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 advmod:lmod	color:blue
1	Ed	e	CCONJ	cscc	_	3	cc	_	Canto=19|Verso=52
2	el	ello	PRON	pp3mslso	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	Canto=19|Verso=52
3	gridò	gridare	VERB	vta1irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=19|SpaceAfter=No|Verso=52
4	:	:	PUNCT	_	_	7	punct	_	_
5	«	«	PUNCT	_	_	7	punct	_	SpaceAfter=No
6	Se'	essere	AUX	vi4ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	cop	_	Canto=19|Verso=52
7	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	3	ccomp:reported	_	Canto=19|Verso=52
8	già	già	ADV	b	_	7	advmod:tmod	_	Canto=19|Verso=52
9	costì	costì	ADV	b	_	7	advmod:lmod	_	Canto=19|Verso=52
10	ritto	ritto	ADJ	a1msxc	Gender=Masc|Number=Sing	7	xcomp	_	Canto=19|SpaceAfter=No|Verso=52
11	,	,	PUNCT	_	_	13	punct	_	_
12	se'	essere	AUX	vi4ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	13	cop	_	Canto=19|Verso=53
13	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	7	conj	_	Canto=19|Verso=53
14	già	già	ADV	b	_	13	advmod:tmod	_	Canto=19|Verso=53
15	costì	costì	ADV	b	_	13	advmod:lmod	_	Canto=19|Verso=53
16	ritto	ritto	ADJ	a1msxc	Gender=Masc|Number=Sing	13	xcomp	_	Canto=19|SpaceAfter=No|Verso=53
17	,	,	PUNCT	_	_	18	punct	_	_
18	Bonifazio	Bonifazio	PROPN	np	_	7	vocative	_	Canto=19|SpaceAfter=No|Verso=53
19	?	?	PUNCT	_	_	7	punct	_	_

~~~


