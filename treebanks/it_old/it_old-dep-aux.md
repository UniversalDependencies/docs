---
layout: base
title:  'Statistics of aux in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_old-dep-aux-pass.html">aux:pass</a></tt>.

399 nodes (1%) are attached to their parents as `aux`.

331 instances of `aux` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.03508771929825.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (374; 94% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (11; 3% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (6; 2% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux	color:blue
1	E	e	CCONJ	cscc	_	2	cc	_	Canto=24|Verso=151
2	detto	dire	VERB	vta3ibs1	Aspect=Perf|Gender=Masc|Number=Sing|Person=1|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Canto=24|Verso=151
3	l'	il	PRON	pp3msyac	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obj	_	Canto=24|SpaceAfter=No|Verso=151
4	ho	avere	AUX	vta5ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux	_	Canto=24|Verso=151
5	perché	perché	SCONJ	ccsc	_	6	mark	_	Canto=24|Verso=151
6	doler	dolere	VERB	vi2fp	Tense=Pres|VerbForm=Inf	2	advcl	_	Canto=24|Verso=151
7	ti	ti	PRON	pf2syle	Clitic=Yes|Number=Sing|Person=2|PronType=Prs|Reflex=Yes	6	iobj	_	Canto=24|Verso=151
8	debbia	dovere	AUX	vta2cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	Canto=24|SpaceAfter=No|Verso=151
9	!	!	PUNCT	_	_	2	punct	_	SpaceAfter=No
10	»	»	PUNCT	_	_	2	punct	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 aux	color:blue
1	Omai	ormai	ADV	b	_	3	advmod	_	Canto=17|Verso=82
2	si	si	PRON	pf3yim	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	3	expl:pv	_	Canto=17|Verso=82
3	scende	scendere	VERB	vi*2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Canto=17|Verso=82
4	per	per	ADP	epskpl	_	7	case	_	Canto=17|Verso=82
5	sì	così	ADV	b	_	6	advmod	_	Canto=17|Verso=82
6	fatte	fare	VERB	vtp1pra1fp	Aspect=Perf|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	7	acl	_	Canto=17|Verso=82
7	scale	scala	NOUN	sf1fp	Gender=Fem|Number=Plur	3	obl	_	Canto=17|SpaceAfter=No|Verso=82
8	;	;	PUNCT	_	_	9	punct	_	_
9	monta	montare	VERB	vi1mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	parataxis	_	Canto=17|Verso=83
10	dinanzi	dinanzi	ADV	b	_	9	advmod:lmod	_	Canto=17|SpaceAfter=No|Verso=83
11	,	,	PUNCT	_	_	16	punct	_	_
12	ch'	che	SCONJ	cssc	_	16	mark	_	Canto=17|SpaceAfter=No|Verso=83
13	i'	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	16	nsubj	_	Canto=17|Verso=83
14	voglio	volere	AUX	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	16	aux	_	Canto=17|Verso=83
15	esser	essere	AUX	vi4fp	Tense=Pres|VerbForm=Inf	16	cop	_	Canto=17|Verso=83
16	mezzo	mezzo	ADJ	a1ms	Gender=Masc|Number=Sing	9	advcl	_	Canto=17|SpaceAfter=No|Verso=83
17	,	,	PUNCT	_	_	24	punct	_	_
18	sì	così	ADV	_	_	24	advmod	_	Canto=17|Verso=84
19	che	che	SCONJ	cssu	_	24	mark	_	Canto=17|Verso=84
20	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	Canto=17|Verso=84
21	coda	coda	NOUN	sf1fs	Gender=Fem|Number=Sing	24	nsubj	_	Canto=17|Verso=84
22	non	non	ADV	b	PronType=Neg	24	advmod:neg	_	Canto=17|Verso=84
23	possa	potere	AUX	vta2cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	24	aux	_	Canto=17|Verso=84
24	far	fare	VERB	vta1fp	Tense=Pres|VerbForm=Inf|Voice=Act	9	advcl:cmp	_	Canto=17|Verso=84
25	male	male	NOUN	sm3ms	Gender=Masc|Number=Sing	24	obj	_	Canto=17|SpaceAfter=No|Verso=84
26	»	»	PUNCT	_	_	3	punct	_	SpaceAfter=No
27	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Ma	ma	CCONJ	csca	_	22	cc	_	Canto=33|Verso=7
2	se	se	SCONJ	cssv	_	8	mark	_	Canto=33|Verso=7
3	le	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	Canto=33|Verso=7
4	mie	mio	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	5	det:poss	_	Canto=33|Verso=7
5	parole	parola	NOUN	sf1fp	Gender=Fem|Number=Plur	8	nsubj	_	Canto=33|Verso=7
6	esser	essere	AUX	vi4fp	Tense=Pres|VerbForm=Inf	8	cop	_	Canto=33|Verso=7
7	dien	dovere	AUX	vta2ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	Canto=33|Verso=7
8	seme	seme	NOUN	sm3ms	Gender=Masc|Number=Sing	22	advcl	_	Canto=33|Verso=7
9	che	che	PRON	pr	PronType=Rel	10	nsubj	_	Canto=33|Verso=8
10	frutti	fruttare	VERB	vta1cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl:relcl	_	Canto=33|Verso=8
11	infamia	infamia	NOUN	sf1fs	Gender=Fem|Number=Sing	10	obj	_	Canto=33|Verso=8
12	a	a	ADP	_	_	14	case	_	Canto=33|Comment=a-l|Verso=8
13	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	Canto=33|Comment=a-l|Verso=8
14	traditor	traditore	NOUN	sm3ms	Gender=Masc|Number=Sing	10	obl:arg	_	Canto=33|Verso=8
15	ch'	che	PRON	pr	PronType=Rel	17	obj	_	Canto=33|SpaceAfter=No|Verso=8
16	i'	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	17	nsubj	_	Canto=33|Verso=8
17	rodo	rodere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl:relcl	_	Canto=33|SpaceAfter=No|Verso=8
18	,	,	PUNCT	_	_	8	punct	_	_
19	parlare	parlare	VERB	vi1fp	Tense=Pres|VerbForm=Inf	22	xcomp	_	Canto=33|Verso=9
20	e	e	CCONJ	cscc	_	21	cc	_	Canto=33|Verso=9
21	lagrimar	lagrimare	VERB	vi1fp	Tense=Pres|VerbForm=Inf	19	conj	_	Canto=33|Verso=9
22	vedrai	vedere	VERB	vta2ifs2	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	Canto=33|Verso=9
23	insieme	insieme	ADV	b	_	22	advmod	_	Canto=33|SpaceAfter=No|Verso=9
24	.	.	PUNCT	_	_	22	punct	_	_

~~~


