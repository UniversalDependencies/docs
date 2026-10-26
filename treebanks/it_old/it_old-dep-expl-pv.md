---
layout: base
title:  'Statistics of expl:pv in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="it_old-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="it_old-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_old-dep-expl-pass.html">expl:pass</a></tt>.

1390 nodes (1%) are attached to their parents as `expl:pv`.

1145 instances of `expl:pv` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08776978417266.

The following 7 pairs of parts of speech are connected with `expl:pv`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1380; 99% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:pv	color:blue
1	Allor	allora	ADV	b	_	3	advmod:tmod	3:advmod:tmod	Canto=1|Verso=136|UniqueTokenId=OldItalian_Dante_Inferno-33_1
2	si	si	PRON	pf3ypr	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	Canto=1|Verso=136|UniqueTokenId=OldItalian_Dante_Inferno-33_2
3	mosse	muovere	VERB	vta+2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=1|SpaceAfter=No|Verso=136|UniqueTokenId=OldItalian_Dante_Inferno-33_3
4	,	,	PUNCT	_	_	8	punct	8:punct	UniqueTokenId=OldItalian_Dante_Inferno-33_4
5	e	e	CCONJ	cscc	_	8	cc	8:cc	Canto=1|Verso=136|UniqueTokenId=OldItalian_Dante_Inferno-33_5
6	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	8	nsubj	8:nsubj	Canto=1|Verso=136|UniqueTokenId=OldItalian_Dante_Inferno-33_6
7	li	il	PRON	pp3syda	Clitic=Yes|Number=Sing|Person=3|PronType=Prs	8	iobj	8:iobj	Canto=1|Verso=136|UniqueTokenId=OldItalian_Dante_Inferno-33_7
8	tenni	tenere	VERB	vi2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	3	conj	3:conj	Canto=1|Verso=136|UniqueTokenId=OldItalian_Dante_Inferno-33_8
9	dietro	dietro	ADV	eiskml	_	8	advmod:lmod	8:advmod:lmod	Canto=1|SpaceAfter=No|Verso=136|UniqueTokenId=OldItalian_Dante_Inferno-33_9
10	.	.	PUNCT	_	_	3	punct	3:punct	UniqueTokenId=OldItalian_Dante_Inferno-33_10

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 expl:pv	color:blue
1	Basti	bastare	VERB	vi*1cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Canto=16|Verso=43|UniqueTokenId=OldItalian_Dante_Paradiso-473_1
2	d'	di	ADP	eps	_	5	case	5:case	Canto=16|Verso=43|UniqueTokenId=OldItalian_Dante_Paradiso-473_2
3	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	5:det	Canto=16|Verso=43|UniqueTokenId=OldItalian_Dante_Paradiso-473_3
4	miei	mio	DET	as1mp	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	5	det:poss	5:det:poss	Canto=16|Verso=43|UniqueTokenId=OldItalian_Dante_Paradiso-473_4
5	maggiori	maggiore	NOUN	sm3mp	Gender=Masc|Number=Plur	6	obl	6:obl	Canto=16|Verso=43|UniqueTokenId=OldItalian_Dante_Paradiso-473_5
6	udire	udire	VERB	vta3fp	Tense=Pres|VerbForm=Inf|Voice=Act	1	csubj	1:csubj	UniqueTokenId=OldItalian_Dante_Paradiso-473_6
7	ne	ne	PRON	pp3xpt	Person=3|PronType=Prs	6	obl	6:obl	Clitic=Yes|UniqueTokenId=OldItalian_Dante_Paradiso-473_7
8	questo	questo	PRON	pd1ms	Gender=Masc|Number=Sing|PronType=Dem	6	obj	6:obj	Canto=16|SpaceAfter=No|Verso=43|UniqueTokenId=OldItalian_Dante_Paradiso-473_8
9	:	:	PUNCT	_	_	24	punct	24:punct	UniqueTokenId=OldItalian_Dante_Paradiso-473_9
10	chi	chi	PRON	pn	_	21	ccomp	21:ccomp	Canto=16|Verso=44|UniqueTokenId=OldItalian_Dante_Paradiso-473_10
11	ei	egli	PRON	pp3mlsoi	Gender=Masc|Person=3|PronType=Prs	10	nsubj	10:nsubj	Canto=16|Verso=44|UniqueTokenId=OldItalian_Dante_Paradiso-473_11
12	si	si	PRON	pf3yle	Person=3|PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	Canto=16|Clitic=Yes|Verso=44|UniqueTokenId=OldItalian_Dante_Paradiso-473_12
13	fosser	essere	AUX	vi+4cip3	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	10	cop	10:cop	Canto=16|Verso=44|UniqueTokenId=OldItalian_Dante_Paradiso-473_13
14	e	e	CCONJ	cscc	_	16	cc	16:cc	Canto=16|Verso=44|UniqueTokenId=OldItalian_Dante_Paradiso-473_14
15	onde	onde	ADV	b	_	16	advmod:lmod	16:advmod:lmod	Canto=16|Verso=44|UniqueTokenId=OldItalian_Dante_Paradiso-473_15
16	venner	venire	VERB	vi3irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	10	conj	10:conj	Canto=16|Verso=44|UniqueTokenId=OldItalian_Dante_Paradiso-473_16
17	quivi	quivi	ADV	b	_	16	advmod:lmod	16:advmod:lmod	Canto=16|SpaceAfter=No|Verso=44|UniqueTokenId=OldItalian_Dante_Paradiso-473_17
18	,	,	PUNCT	_	_	10	punct	10:punct	UniqueTokenId=OldItalian_Dante_Paradiso-473_18
19	più	più	ADV	bc+	Degree=Cmp	24	advmod	24:advmod	Canto=16|Verso=45|UniqueTokenId=OldItalian_Dante_Paradiso-473_19
20	è	essere	AUX	vi*4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	24:cop	Canto=16|Verso=45|UniqueTokenId=OldItalian_Dante_Paradiso-473_20
21	tacer	tacere	VERB	vi2fp	Tense=Pres|VerbForm=Inf	24	csubj	24:csubj	Canto=16|Verso=45|UniqueTokenId=OldItalian_Dante_Paradiso-473_21
22	che	che	SCONJ	cssp	_	23	mark	23:mark	Canto=16|Verso=45|UniqueTokenId=OldItalian_Dante_Paradiso-473_22
23	ragionare	ragionare	VERB	vi1fp	Tense=Pres|VerbForm=Inf	24	advcl	24:advcl	Canto=16|Verso=45|UniqueTokenId=OldItalian_Dante_Paradiso-473_23
24	onesto	onesto	ADJ	a1msc+xz1	Degree=Cmp|Gender=Masc|Number=Sing	1	parataxis	1:parataxis	Canto=16|SpaceAfter=No|Verso=45|UniqueTokenId=OldItalian_Dante_Paradiso-473_24
25	.	.	PUNCT	_	_	24	punct	24:punct	UniqueTokenId=OldItalian_Dante_Paradiso-473_25

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 18 expl:pv	color:blue
1	Quei	quello	PRON	pd1ms	Gender=Masc|Number=Sing|Person=1|PronType=Dem	6	nsubj	6:nsubj	Canto=8|Verso=46|UniqueTokenId=OldItalian_Dante_Inferno-283_1
2	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	6:cop	Canto=8|Verso=46|UniqueTokenId=OldItalian_Dante_Inferno-283_2
3	a	a	ADP	_	_	5	case	5:case	Canto=8|Comment=a-l|Verso=46|UniqueTokenId=OldItalian_Dante_Inferno-283_3
4	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	5:det	Canto=8|Comment=a-l|Verso=46|UniqueTokenId=OldItalian_Dante_Inferno-283_4
5	mondo	mondo	NOUN	sm2ms	Gender=Masc|Number=Sing	6	obl:tmod	6:obl:tmod	Canto=8|Verso=46|UniqueTokenId=OldItalian_Dante_Inferno-283_5
6	persona	persona	NOUN	sf1fs	Gender=Fem|Number=Sing	0	root	0:root	Canto=8|Verso=46|UniqueTokenId=OldItalian_Dante_Inferno-283_6
7	orgogliosa	orgoglioso	ADJ	a1fs	Gender=Fem|Number=Sing	6	amod	6:amod	Canto=8|SpaceAfter=No|Verso=46|UniqueTokenId=OldItalian_Dante_Inferno-283_7
8	;	;	PUNCT	_	_	11	punct	11:punct	UniqueTokenId=OldItalian_Dante_Inferno-283_8
9	bontà	bonta'	NOUN	sf3fs	Gender=Fem|Number=Sing	11	nsubj	11:nsubj	Canto=8|Verso=47|UniqueTokenId=OldItalian_Dante_Inferno-283_9
10	non	non	ADV	b	PronType=Neg	11	advmod:neg	11:advmod:neg	Canto=8|Verso=47|UniqueTokenId=OldItalian_Dante_Inferno-283_10
11	è	essere	VERB	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	parataxis	6:parataxis	Canto=8|Verso=47|UniqueTokenId=OldItalian_Dante_Inferno-283_11
12	che	che	PRON	pr	PronType=Rel	15	nsubj	15:nsubj	Canto=8|Verso=47|UniqueTokenId=OldItalian_Dante_Inferno-283_12
13	sua	suo	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	14	det:poss	14:det:poss	Canto=8|Verso=47|UniqueTokenId=OldItalian_Dante_Inferno-283_13
14	memoria	memoria	NOUN	sf1fs	Gender=Fem|Number=Sing	15	obj	15:obj	Canto=8|Verso=47|UniqueTokenId=OldItalian_Dante_Inferno-283_14
15	fregi	fregiare	VERB	vta1cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	acl:relcl	9:acl:relcl	Canto=8|SpaceAfter=No|Verso=47|UniqueTokenId=OldItalian_Dante_Inferno-283_15
16	:	:	PUNCT	_	_	24	punct	24:punct	UniqueTokenId=OldItalian_Dante_Inferno-283_16
17	così	così	ADV	b	_	24	advmod	24:advmod	Canto=8|Verso=48|UniqueTokenId=OldItalian_Dante_Inferno-283_17
18	s'	si	PRON	pf3yle	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	24	expl:pv	24:expl:pv	Canto=8|SpaceAfter=No|Verso=48|UniqueTokenId=OldItalian_Dante_Inferno-283_18
19	è	essere	AUX	vi+4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	24:cop	Canto=8|Verso=48|UniqueTokenId=OldItalian_Dante_Inferno-283_19
20	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	21:det	Canto=8|SpaceAfter=No|Verso=48|UniqueTokenId=OldItalian_Dante_Inferno-283_20
21	ombra	ombra	NOUN	sf1fs	Gender=Fem|Number=Sing	24	nsubj	24:nsubj	Canto=8|Verso=48|UniqueTokenId=OldItalian_Dante_Inferno-283_21
22	sua	suo	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	21	det:poss	21:det:poss	Canto=8|Verso=48|UniqueTokenId=OldItalian_Dante_Inferno-283_22
23	qui	qui	ADV	b	_	24	advmod:lmod	24:advmod:lmod	Canto=8|Verso=48|UniqueTokenId=OldItalian_Dante_Inferno-283_23
24	furiosa	furioso	ADJ	a1fs	Gender=Fem|Number=Sing	11	parataxis	11:parataxis	Canto=8|SpaceAfter=No|Verso=48|UniqueTokenId=OldItalian_Dante_Inferno-283_24
25	.	.	PUNCT	_	_	6	punct	6:punct	UniqueTokenId=OldItalian_Dante_Inferno-283_25

~~~


