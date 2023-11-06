---
layout: base
title:  'Statistics of flat in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `flat`

This relation is universal.
There are 3 language-specific subtypes of `flat`: <tt><a href="it_old-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="it_old-dep-flat-name.html">flat:name</a></tt>, <tt><a href="it_old-dep-flat-redup.html">flat:redup</a></tt>.

9 nodes (0%) are attached to their parents as `flat`.

9 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (3; 33% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 flat	color:blue
1	Ier	ieri	ADV	b	_	17	advmod:tmod	_	Canto=21|SpaceAfter=No|Verso=112
2	,	,	PUNCT	_	_	1	punct	_	_
3	più	più	ADV	bc+	Degree=Cmp	4	advmod	_	Canto=21|Verso=112
4	oltre	oltre	ADV	bc+	_	5	advmod:tmod	_	Canto=21|Verso=112
5	cinqu'	cinque	NUM	an	NumType=Card	6	nummod	_	Canto=21|Verso=112
6	ore	ora	NOUN	sf1fp	Gender=Fem|Number=Plur	17	obl:tmod	_	Canto=21|Verso=112
7	che	che	SCONJ	c	_	9	cc	_	Canto=21|Verso=112
8	quest'	questo	DET	ad1ms	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	Canto=21|SpaceAfter=No|Verso=112
9	otta	otta	NOUN	sf1fs	Gender=Fem|Number=Sing	6	nmod	_	Canto=21|SpaceAfter=No|Verso=112
10	,	,	PUNCT	_	_	6	punct	_	_
11	mille	mille	NUM	an	NumType=Card	16	nummod	_	Canto=21|Verso=113
12	dugento	duecento	NUM	an	NumType=Card	11	flat	_	Canto=21|Verso=113
13	con	con	ADP	epsku	_	14	case	_	Canto=21|Verso=113
14	sessanta	sessantasei	NUM	an	NumType=Card	12	nmod	_	Canto=21|Verso=113
15	sei	sei	NUM	an	NumType=Card	14	flat	_	Canto=21|Verso=113
16	anni	anno	NOUN	sm2mp	Gender=Masc|Number=Plur	17	obj	_	Canto=21|Verso=114
17	compié	compiere	VERB	vta*2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=21|Verso=114
18	che	che	SCONJ	csss	_	23	mark	_	Canto=21|Verso=114
19	qui	qui	ADV	b	_	23	advmod:lmod	_	Canto=21|Verso=114
20	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	Canto=21|Verso=114
21	via	via	NOUN	sf1fs	Gender=Fem|Number=Sing	23	nsubj:pass	_	Canto=21|Verso=114
22	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	23	aux:pass	_	Canto=21|Verso=114
23	rotta	rompere	VERB	vtp2irs3	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|VerbForm=Part|Voice=Pass	17	advcl	_	Canto=21|SpaceAfter=No|Verso=114
24	.	.	PUNCT	_	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	E	e	CCONJ	cscc	_	2	cc	_	Canto=6|Verso=55
2	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	7	nsubj	_	Canto=6|Verso=55
3	anima	anima	NOUN	sf1fs	Gender=Fem|Number=Sing	2	flat	_	Canto=6|Verso=55
4	trista	tristo	ADJ	a1fs	Gender=Fem|Number=Sing	3	amod	_	Canto=6|Verso=55
5	non	non	ADV	b	PronType=Neg	7	advmod:neg	_	Canto=6|Verso=55
6	son	essere	AUX	vi4ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	cop	_	Canto=6|Verso=55
7	sola	solo	ADJ	a1fs	Gender=Fem|Number=Sing	0	root	_	Canto=6|SpaceAfter=No|Verso=55
8	,	,	PUNCT	_	_	15	punct	_	_
9	ché	ché	SCONJ	cssc	_	15	mark	_	Canto=6|Verso=56
10	tutte	tutto	DET	ai1fp	Gender=Fem|Number=Plur|PronType=Tot	15	nsubj	_	Canto=6|Verso=56
11	queste	questo	DET	ad1fp	Gender=Fem|Number=Plur|PronType=Dem	10	det	_	Canto=6|Verso=56
12	a	a	ADP	epsksl	_	14	case	_	Canto=6|Verso=56
13	simil	simile	ADJ	a2fs	Number=Sing	14	amod	_	Canto=6|Verso=56
14	pena	pena	NOUN	sf1fs	Gender=Fem|Number=Sing	15	obl	_	Canto=6|Verso=56
15	stanno	stare	VERB	vi1ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	Canto=6|Verso=56
16	per	per	ADP	epskr	_	18	case	_	Canto=6|Verso=57
17	simil	simile	ADJ	a2fs	Number=Sing	18	amod	_	Canto=6|Verso=57
18	colpa	colpa	NOUN	sf1fs	Gender=Fem|Number=Sing	15	obl	_	Canto=6|SpaceAfter=No|Verso=57
19	»	»	PUNCT	_	_	7	punct	_	SpaceAfter=No
20	.	.	PUNCT	_	_	7	punct	_	_
21	E	e	CCONJ	cscc	_	24	case	_	Canto=6|Verso=57
22	più	più	ADV	b	_	24	advmod	_	Canto=6|Verso=57
23	non	non	ADV	b	PronType=Neg	24	advmod:neg	_	Canto=6|Verso=57
24	fé	fare	VERB	vta1irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	parataxis	_	Canto=6|Verso=57
25	parola	parola	NOUN	sf1fs	Gender=Fem|Number=Sing	24	obj	_	Canto=6|SpaceAfter=No|Verso=57
26	.	.	PUNCT	_	_	24	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 flat	color:blue
1	Io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Canto=33|Verso=10
2	non	non	ADV	b	PronType=Neg	3	advmod:neg	_	Canto=33|Verso=10
3	so	sapere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=33|Verso=10
4	chi	chi	PRON	pn	PronType=Rel	3	ccomp	_	Canto=33|Verso=10
5	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	4	nsubj	_	Canto=33|Verso=10
6	se'	essere	AUX	vi4ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	cop	_	Canto=33|Verso=10
7	né	né	CCONJ	cscc	_	11	cc	_	Canto=33|Verso=10
8	per	per	ADP	epskm	_	10	case	_	Canto=33|Verso=10
9	che	che	DET	at	PronType=Int	10	det	_	Canto=33|Verso=10
10	modo	modo	NOUN	sm2ms	Gender=Masc|Number=Sing	11	obl	_	Canto=33|Verso=10
11	venuto	venire	VERB	vi3ibs2	Aspect=Perf|Gender=Masc|Number=Sing|Person=2|Tense=Past|VerbForm=Part	4	conj	_	Canto=33|Verso=11
12	se'	essere	AUX	vi4ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	aux	_	Canto=33|Verso=11
13	qua	qua	ADV	b	_	11	advmod:lmod	_	Canto=33|Verso=11
14	giù	giù	ADV	b	_	13	flat	_	Canto=33|SpaceAfter=No|Verso=11
15	;	;	PUNCT	_	_	19	punct	_	_
16	ma	ma	CCONJ	csca	_	19	cc	_	Canto=33|Verso=11
17	fiorentino	fiorentino	ADJ	a1ms	Gender=Masc|Number=Sing	19	xcomp	_	Canto=33|Verso=11
18	mi	mi	PRON	pp1syda	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	19	iobj	_	Canto=33|Verso=12
19	sembri	sembrare	VERB	vi1ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	parataxis	_	Canto=33|Verso=12
20	veramente	veramente	ADV	b	_	19	advmod	_	Canto=33|Verso=12
21	quand'	quando	SCONJ	csst	_	24	mark	_	Canto=33|SpaceAfter=No|Verso=12
22	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	24	nsubj	_	Canto=33|Verso=12
23	t'	ti	PRON	pp2syac	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	24	obj	_	Canto=33|SpaceAfter=No|Verso=12
24	odo	udire	VERB	vta3ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	19	advcl	_	Canto=33|SpaceAfter=No|Verso=12
25	.	.	PUNCT	_	_	3	punct	_	_

~~~


