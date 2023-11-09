---
layout: base
title:  'Statistics of advcl:relcl in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="it_old-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="it_old-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="it_old-dep-advcl-pred.html">advcl:pred</a></tt>.

52 nodes (0%) are attached to their parents as `advcl:relcl`.

50 instances of `advcl:relcl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.36538461538461.

The following 12 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (29; 56% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (8; 15% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (5; 10% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_old-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 advcl:relcl	color:blue
1	E	e	CCONJ	cscc	_	2	cc	_	Canto=4|Verso=151
2	vegno	venire	VERB	vi3ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Canto=4|Verso=151
3	in	in	ADP	epskml	_	4	case	_	Canto=4|Verso=151
4	parte	parte	NOUN	sf3fs	Gender=Fem|Number=Sing	2	obl:lmod	_	Canto=4|Verso=151
5	ove	ove	PRON	p	_	7	obl:lmod	_	Canto=4|Verso=151
6	non	non	ADV	b	PronType=Neg	7	advmod:neg	_	Canto=4|Verso=151
7	è	essere	VERB	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	Canto=4|Verso=151
8	che	che	PRON	pi	PronType=Ind	9	nsubj	_	Canto=4|Verso=151
9	luca	lucere	VERB	vi2cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl:relcl	_	Canto=4|SpaceAfter=No|Verso=151
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 advcl:relcl	color:blue
1	Ond'	onde	ADV	cscn	_	2	advmod	_	Canto=33|SpaceAfter=No|Verso=106
2	elli	egli	PRON	pp3mslso	Gender=Masc|Number=Sing|Person=3|PronType=Prs	0	root	_	Canto=33|Verso=106
3	a	a	ADP	epsk1d	_	4	case	_	Canto=33|Verso=106
4	me	me	PRON	pp1slco	Number=Sing|Person=1|PronType=Prs	2	orphan	_	Canto=33|SpaceAfter=No|Verso=106
5	:	:	PUNCT	_	_	7	punct	_	_
6	«	«	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	Avaccio	avaccio	ADV	b	_	2	ccomp:reported	_	Canto=33|Verso=106
8	sarai	essere	AUX	vi4ifs2	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	7	cop	_	Canto=33|Verso=106
9	dove	dove	ADV	b	_	13	advmod:lmod	_	Canto=33|Verso=106
10	di	di	ADP	epskg	_	11	case	_	Canto=33|Verso=107
11	ciò	cio'	PRON	pd	PronType=Dem	17	nmod	_	Canto=33|Verso=107
12	ti	ti	PRON	pp2syda	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	13	iobj	_	Canto=33|Verso=107
13	farà	fare	VERB	vta1ifs3	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	7	advcl:relcl	_	Canto=33|Verso=107
14	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	Canto=33|SpaceAfter=No|Verso=107
15	occhio	occhio	NOUN	sm2ms	Gender=Masc|Number=Sing	13	nsubj	_	Canto=33|Verso=107
16	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	Canto=33|Verso=107
17	risposta	risposta	NOUN	sf1fs	Gender=Fem|Number=Sing	13	obj	_	Canto=33|SpaceAfter=No|Verso=107
18	,	,	PUNCT	_	_	19	punct	_	_
19	veggendo	vedere	VERB	vta2gp	VerbForm=Conv|Voice=Act	7	advcl	_	Canto=33|Verso=108
20	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	Canto=33|Verso=108
21	cagion	cagione	NOUN	sf3fs	Gender=Fem|Number=Sing	19	obj	_	Canto=33|Verso=108
22	che	che	PRON	pr	PronType=Rel	25	obj	_	Canto=33|Verso=108
23	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	Canto=33|Verso=108
24	fiato	fiato	NOUN	sm2ms	Gender=Masc|Number=Sing	25	nsubj	_	Canto=33|Verso=108
25	piove	piovere	VERB	vta2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	21	acl:relcl	_	Canto=33|SpaceAfter=No|Verso=108
26	»	»	PUNCT	_	_	7	punct	_	SpaceAfter=No
27	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 advcl:relcl	color:blue
1	E	e	CCONJ	cscc	_	4	cc	_	Canto=29|Verso=94
2	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	Canto=29|Verso=94
3	duca	duca	NOUN	sm1ms	Gender=Masc|Number=Sing	4	nsubj	_	Canto=29|Verso=94
4	disse	dire	VERB	vta3irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=29|SpaceAfter=No|Verso=94
5	:	:	PUNCT	_	_	9	punct	_	_
6	«	«	PUNCT	_	_	9	punct	_	SpaceAfter=No
7	I'	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	Canto=29|Verso=94
8	son	essere	AUX	vi4ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	cop	_	Canto=29|Verso=94
9	un	uno	PRON	pi1ms	Gender=Masc|Number=Sing|PronType=Ind	4	ccomp:reported	_	Canto=29|Verso=94
10	che	che	PRON	pr	PronType=Rel	11	nsubj	_	Canto=29|Verso=94
11	discendo	discendere	VERB	vi2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	advcl:relcl	_	Canto=29|Verso=94
12	con	con	ADP	epskc	_	14	case	_	Canto=29|Verso=95
13	questo	questo	DET	ad1ms	Gender=Masc|Number=Sing|PronType=Dem	14	det	_	Canto=29|Verso=95
14	vivo	vivo	NOUN	sm2ms	Gender=Masc|Number=Sing	11	obl	_	Canto=29|Verso=95
15	giù	giù	ADV	b	_	11	advmod:lmod	_	Canto=29|Verso=95
16	di	di	ADP	epskdl	_	17	case	_	Canto=29|Verso=95
17	balzo	balzo	NOUN	sm2ms	Gender=Masc|Number=Sing	11	obl	_	Canto=29|Verso=95
18	in	in	ADP	epskml	_	19	case	_	Canto=29|Verso=95
19	balzo	balzo	NOUN	sm2ms	Gender=Masc|Number=Sing	17	flat:redup	_	Canto=29|SpaceAfter=No|Verso=95
20	,	,	PUNCT	_	_	28	punct	_	_
21	e	e	CCONJ	cscc	_	28	cc	_	Canto=29|Verso=96
22	di	di	ADP	epso	_	23	mark	_	Canto=29|Verso=96
23	mostrar	mostrare	VERB	vta1fp	Tense=Pres|VerbForm=Inf|Voice=Act	28	ccomp	_	Canto=29|Verso=96
24	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	Canto=29|Verso=96
25	'nferno	inferno	NOUN	sm2ms	Gender=Masc|Number=Sing	23	nsubj	_	Canto=29|Verso=96
26	a	a	ADP	epsk1d	_	27	case	_	Canto=29|Verso=96
27	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	23	obl:arg	_	Canto=29|Verso=96
28	intendo	intendere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	Canto=29|SpaceAfter=No|Verso=96
29	»	»	PUNCT	_	_	9	punct	_	SpaceAfter=No
30	.	.	PUNCT	_	_	4	punct	_	_

~~~


