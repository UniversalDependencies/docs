---
layout: base
title:  'Statistics of expl:pv in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="it_old-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="it_old-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_old-dep-expl-pass.html">expl:pass</a></tt>.

1388 nodes (1%) are attached to their parents as `expl:pv`.

1143 instances of `expl:pv` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0864553314121.

The following 7 pairs of parts of speech are connected with `expl:pv`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1377; 99% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:pv	color:blue
1	Allor	allora	ADV	b	_	3	advmod:tmod	_	Canto=1|Verso=136
2	si	si	PRON	pf3ypr	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	3	expl:pv	_	Canto=1|Verso=136
3	mosse	muovere	VERB	vta+2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=1|SpaceAfter=No|Verso=136
4	,	,	PUNCT	_	_	8	punct	_	_
5	e	e	CCONJ	cscc	_	8	cc	_	Canto=1|Verso=136
6	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	Canto=1|Verso=136
7	li	il	PRON	pp3syda	Clitic=Yes|Number=Sing|Person=3|PronType=Prs	8	iobj	_	Canto=1|Verso=136
8	tenni	tenere	VERB	vi2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	3	conj	_	Canto=1|Verso=136
9	dietro	dietro	ADV	eiskml	_	8	advmod:lmod	_	Canto=1|SpaceAfter=No|Verso=136
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 expl:pv	color:blue
1	Basti	bastare	VERB	vi*1cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Canto=16|Verso=43
2	d'	di	ADP	eps	_	5	case	_	Canto=16|Verso=43
3	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	Canto=16|Verso=43
4	miei	mio	DET	as1mp	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	5	det:poss	_	Canto=16|Verso=43
5	maggiori	maggiore	NOUN	sm3mp	Gender=Masc|Number=Plur	6	obl	_	Canto=16|Verso=43
6	udire	udire	VERB	vta3fp	Tense=Pres|VerbForm=Inf|Voice=Act	1	csubj	_	_
7	ne	ne	PRON	pp3xpt	Clitic=Yes|Person=3|PronType=Prs	6	obl	_	_
8	questo	questo	PRON	pd1ms	Gender=Masc|Number=Sing|PronType=Dem	6	obj	_	Canto=16|Verso=43|SpaceAfter=No
9	:	:	PUNCT	_	_	24	punct	_	_
10	chi	chi	PRON	pn	_	21	ccomp	_	Canto=16|Verso=44
11	ei	egli	PRON	pp3mlsoi	Gender=Masc|Person=3|PronType=Prs	10	nsubj	_	Canto=16|Verso=44
12	si	si	PRON	pf3yle	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	10	expl:pv	_	Canto=16|Verso=44
13	fosser	essere	AUX	vi+4cip3	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	Canto=16|Verso=44
14	e	e	CCONJ	cscc	_	16	cc	_	Canto=16|Verso=44
15	onde	onde	ADV	b	_	16	advmod:lmod	_	Canto=16|Verso=44
16	venner	venire	VERB	vi3irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	10	conj	_	Canto=16|Verso=44
17	quivi	quivi	ADV	b	_	16	advmod:lmod	_	Canto=16|Verso=44|SpaceAfter=No
18	,	,	PUNCT	_	_	10	punct	_	_
19	più	più	ADV	bc+	Degree=Cmp	24	advmod	_	Canto=16|Verso=45
20	è	essere	AUX	vi*4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	_	Canto=16|Verso=45
21	tacer	tacere	VERB	vi2fp	Tense=Pres|VerbForm=Inf	24	csubj	_	Canto=16|Verso=45
22	che	che	SCONJ	cssp	_	23	mark	_	Canto=16|Verso=45
23	ragionare	ragionare	VERB	vi1fp	Tense=Pres|VerbForm=Inf	24	advcl	_	Canto=16|Verso=45
24	onesto	onesto	ADJ	a1msc+xz1	Degree=Cmp|Gender=Masc|Number=Sing	1	parataxis	_	Canto=16|Verso=45|SpaceAfter=No
25	.	.	PUNCT	_	_	24	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 18 expl:pv	color:blue
1	Quei	quello	PRON	pd1ms	Gender=Masc|Number=Sing|Person=1|PronType=Dem	6	nsubj	_	Canto=8|Verso=46
2	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	Canto=8|Verso=46
3	a	a	ADP	_	_	5	case	_	Canto=8|Comment=a-l|Verso=46
4	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Canto=8|Comment=a-l|Verso=46
5	mondo	mondo	NOUN	sm2ms	Gender=Masc|Number=Sing	6	obl:tmod	_	Canto=8|Verso=46
6	persona	persona	NOUN	sf1fs	Gender=Fem|Number=Sing	0	root	_	Canto=8|Verso=46
7	orgogliosa	orgoglioso	ADJ	a1fs	Gender=Fem|Number=Sing	6	amod	_	Canto=8|SpaceAfter=No|Verso=46
8	;	;	PUNCT	_	_	11	punct	_	_
9	bontà	bonta'	NOUN	sf3fs	Gender=Fem|Number=Sing	11	nsubj	_	Canto=8|Verso=47
10	non	non	ADV	b	PronType=Neg	11	advmod:neg	_	Canto=8|Verso=47
11	è	essere	VERB	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	parataxis	_	Canto=8|Verso=47
12	che	che	PRON	pr	PronType=Rel	15	nsubj	_	Canto=8|Verso=47
13	sua	suo	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	14	det:poss	_	Canto=8|Verso=47
14	memoria	memoria	NOUN	sf1fs	Gender=Fem|Number=Sing	15	obj	_	Canto=8|Verso=47
15	fregi	fregiare	VERB	vta1cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	acl:relcl	_	Canto=8|SpaceAfter=No|Verso=47
16	:	:	PUNCT	_	_	24	punct	_	_
17	così	così	ADV	b	_	24	advmod	_	Canto=8|Verso=48
18	s'	si	PRON	pf3yle	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	24	expl:pv	_	Canto=8|SpaceAfter=No|Verso=48
19	è	essere	AUX	vi+4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	_	Canto=8|Verso=48
20	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	Canto=8|SpaceAfter=No|Verso=48
21	ombra	ombra	NOUN	sf1fs	Gender=Fem|Number=Sing	24	nsubj	_	Canto=8|Verso=48
22	sua	suo	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	21	det:poss	_	Canto=8|Verso=48
23	qui	qui	ADV	b	_	24	advmod:lmod	_	Canto=8|Verso=48
24	furiosa	furioso	ADJ	a1fs	Gender=Fem|Number=Sing	11	parataxis	_	Canto=8|SpaceAfter=No|Verso=48
25	.	.	PUNCT	_	_	6	punct	_	_

~~~


