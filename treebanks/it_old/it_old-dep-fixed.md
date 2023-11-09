---
layout: base
title:  'Statistics of fixed in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `fixed`

This relation is universal.

5 nodes (0%) are attached to their parents as `fixed`.

5 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `fixed`: <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-SCONJ.html">SCONJ</a></tt> (3; 60% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 fixed	color:blue
1	I'	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Canto=21|Verso=19
2	vedea	vedere	VERB	vta2iis1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=21|Verso=19
3	lei	lei	PRON	pp3fslco	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	obj	_	Canto=21|SpaceAfter=No|Verso=19
4	,	,	PUNCT	_	_	7	punct	_	_
5	ma	ma	CCONJ	csca	_	7	cc	_	Canto=21|Verso=19
6	non	non	ADV	b	PronType=Neg	7	advmod:neg	_	Canto=21|Verso=19
7	vedea	vedere	VERB	vta2iis1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	Canto=21|Verso=19
8	in	in	ADP	epsksl	_	9	case	_	Canto=21|Verso=19
9	essa	esso	PRON	pp3slco	Number=Sing|Person=3|PronType=Prs	7	obl:lmod	_	Canto=21|Verso=19
10	mai	mai	ADV	_	_	13	advmod	_	Canto=21|Verso=20
11	che	che	SCONJ	csse	_	10	fixed	_	Canto=21|Verso=20
12	le	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	13	det	_	Canto=21|Verso=20
13	bolle	bolla	NOUN	sf1fp	Gender=Fem|Number=Plur	7	obj	_	Canto=21|Verso=20
14	che	che	PRON	pr	PronType=Rel	17	obj	_	Canto=21|Verso=20
15	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	Canto=21|Verso=20
16	bollor	bollore	NOUN	sm3ms	Gender=Masc|Number=Sing	17	nsubj	_	Canto=21|Verso=20
17	levava	levare	VERB	vta1iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	13	acl:relcl	_	Canto=21|SpaceAfter=No|Verso=20
18	,	,	PUNCT	_	_	20	punct	_	_
19	e	e	CCONJ	cscc	_	20	cc	_	Canto=21|Verso=21
20	gonfiar	gonfiare	VERB	vi1fp	Tense=Pres|VerbForm=Inf	13	conj	_	Canto=21|Verso=21
21	tutta	tutta	DET	b	Gender=Fem|Number=Sing|PronType=Tot	20	advcl:pred	_	Canto=21|SpaceAfter=No|Verso=21
22	,	,	PUNCT	_	_	24	punct	_	_
23	e	e	CCONJ	cscc	_	24	cc	_	Canto=21|Verso=21
24	riseder	risedere	VERB	vi2fp	Tense=Pres|VerbForm=Inf	13	conj	_	Canto=21|Verso=21
25	compressa	comprimere	VERB	vta2pra1fs	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	24	advcl:pred	_	Canto=21|SpaceAfter=No|Verso=21
26	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 fixed	color:blue
1	Mentre	mentre	SCONJ	_	_	7	mark	_	Canto=5|Verso=139
2	che	che	SCONJ	_	_	7	mark	_	Canto=5|Verso=139
3	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Canto=5|SpaceAfter=No|Verso=139
4	uno	uno	DET	ai1ms	Gender=Masc|Number=Sing|PronType=Ind	5	det	_	Canto=5|Verso=139
5	spirto	spirito	NOUN	sm2ms	Gender=Masc|Number=Sing	7	nsubj	_	Canto=5|Verso=139
6	questo	questo	PRON	pd1ms	Gender=Masc|Number=Sing|PronType=Dem	7	obj	_	Canto=5|Verso=139
7	disse	dire	VERB	vta3irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	advcl	_	Canto=5|SpaceAfter=No|Verso=139
8	,	,	PUNCT	_	_	7	punct	_	_
9	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	Canto=5|SpaceAfter=No|Verso=140
10	altro	altro	PRON	pi	Gender=Masc|Number=Sing|PronType=Ind	11	nsubj	_	Canto=5|Verso=140
11	piangea	piangere	VERB	vi2iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Canto=5|SpaceAfter=No|Verso=140
12	;	;	PUNCT	_	_	18	punct	_	_
13	sì	sì	ADV	_	_	18	advmod	_	Canto=5|Verso=140
14	che	che	SCONJ	_	_	18	mark	_	Canto=5|Verso=140
15	di	di	ADP	epskr	_	16	case	_	Canto=5|Verso=140
16	pietade	pietà	NOUN	sf3fs	Gender=Fem|Number=Sing	18	obl	_	Canto=5|Verso=140
17	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	18	nsubj	_	Canto=5|Verso=141
18	venni	venire	VERB	vi3irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	11	advcl	_	Canto=5|Verso=141
19	men	meno	ADV	b	_	18	fixed	_	Canto=5|Verso=141
20	così	così	ADV	bl	_	18	xcomp	_	Canto=5|Verso=141
21	com'	come	ADV	bl	_	23	mark	_	Canto=5|SpaceAfter=No|Verso=141
22	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	23	nsubj	_	Canto=5|Verso=141
23	morisse	morire	VERB	vi3cip3	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	20	advcl:cmp	_	Canto=5|SpaceAfter=No|Verso=141
24	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 fixed	color:blue
1	Qui	qui	ADV	b	_	2	advmod:lmod	_	Canto=6|Verso=76
2	puose	porre	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=6|Verso=76
3	fine	fine	NOUN	sm3ms	Gender=Masc|Number=Sing	2	fixed	_	Canto=6|Verso=76
4	a	a	ADP	_	_	7	case	_	Canto=6|Comment=a-l|Verso=76
5	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Canto=6|Comment=a-l|Verso=76
6	lagrimabil	lagrimabile	ADJ	a2ms	Number=Sing	7	amod	_	Canto=6|Verso=76
7	suono	suono	NOUN	sm2ms	Gender=Masc|Number=Sing	2	obl:arg	_	Canto=6|SpaceAfter=No|Verso=76
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


