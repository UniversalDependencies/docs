---
layout: base
title:  'Statistics of fixed in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `fixed`

This relation is universal.

16 nodes (0%) are attached to their parents as `fixed`.

16 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 9 pairs of parts of speech are connected with `fixed`: <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-CCONJ.html">CCONJ</a></tt> (5; 31% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-SCONJ.html">SCONJ</a></tt> (3; 19% instances), <tt><a href="it_old-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="it_old-pos-CCONJ.html">CCONJ</a></tt> (2; 13% instances), <tt><a href="it_old-pos-ADP.html">ADP</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 fixed	color:blue
1	Euripide	Euripide	PROPN	np	_	3	nsubj	_	Canto=22|Verso=106
2	v'	ivi	ADV	b	_	3	advmod:lmod	_	Canto=22|Verso=106
3	è	essere	VERB	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Canto=22|Verso=106
4	nos	noi	PRON	pp1pico	Number=Plur|Person=1|PronType=Prs	3	obl	_	Canto=22|Verso=106
5	co	con	ADP	eps	_	4	case	_	Canto=22|Verso=106
6	e	e	CCONJ	cscr	_	7	cc	_	Canto=22|Verso=106
7	Antifonte	Antifonte	PROPN	np	_	1	conj	_	Canto=22|SpaceAfter=No|Verso=106
8	,	,	PUNCT	_	_	9	punct	_	_
9	Simonide	Simonide	PROPN	np	_	1	conj	_	Canto=22|SpaceAfter=No|Verso=107
10	,	,	PUNCT	_	_	11	punct	_	_
11	Agatone	Agatone	PROPN	np	_	1	conj	_	Canto=22|Verso=107
12	e	e	CCONJ	cscr	_	16	cc	_	Canto=22|Verso=107
13	altri	altro	DET	pi	Gender=Masc|Number=Plur|PronType=Ind	16	det	_	Canto=22|Verso=107
14	più	più	ADV	b	_	16	advmod	_	Canto=22|Verso=107
15	e	e	CCONJ	cc	_	14	fixed	_	Canto=22|Verso=107
16	Greci	greco	NOUN	sm2mp	Gender=Masc|Number=Plur	1	conj	_	Canto=22|Verso=108
17	che	che	PRON	pr	PronType=Rel	21	nsubj	_	Canto=22|Verso=108
18	già	già	ADV	b	_	21	advmod:tmod	_	Canto=22|Verso=108
19	di	di	ADP	epskw	_	20	case	_	Canto=22|Verso=108
20	lauro	lauro	NOUN	sm2ms	Gender=Masc|Number=Sing	21	obl	_	Canto=22|Verso=108
21	ornar	ornare	VERB	vta1irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	16	acl:relcl	_	Canto=22|Verso=108
22	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	Canto=22|Verso=108
23	fronte	fronte	NOUN	sf3fs	Gender=Fem|Number=Sing	21	obj	_	Canto=22|SpaceAfter=No|Verso=108
24	.	.	PUNCT	_	_	3	punct	_	_

~~~


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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 fixed	color:blue
1	Con	con	ADP	epskm	_	2	case	_	Canto=31|Verso=70
2	men	meno	DET	ac+	_	6	obl	_	Canto=31|Verso=70
3	di	di	ADP	epsk8	_	4	case	_	Canto=31|Verso=70
4	resistenza	resistenza	NOUN	sf1fs	Gender=Fem|Number=Sing	2	nmod	_	Canto=31|Verso=70
5	si	si	PRON	pf3ypa	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	6	expl:impers	_	Canto=31|Verso=70
6	dibarba	dibarbare	VERB	vtp1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Canto=31|Verso=70
7	robusto	robusto	ADJ	a1ms	Gender=Masc|Number=Sing	8	amod	_	Canto=31|Verso=71
8	cerro	cerro	NOUN	sm2ms	Gender=Masc|Number=Sing	6	nsubj	_	Canto=31|SpaceAfter=No|Verso=71
9	,	,	PUNCT	_	_	15	punct	_	_
10	o	o	CCONJ	cscr	_	15	cc	_	Canto=31|Verso=71
11	vero	ovvero	CCONJ	cccd	_	10	fixed	_	Canto=31|Verso=71
12	a	a	ADP	_	_	15	case	_	Canto=31|Comment=a-l|Verso=71
13	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	Canto=31|Comment=a-l|Verso=71
14	nostral	nostrale	ADJ	a2ms	Gender=Masc|Number=Sing	15	amod	_	Canto=31|Verso=71
15	vento	vento	NOUN	sm2ms	Gender=Masc|Number=Sing	6	obl	_	Canto=31|Verso=71
16	o	o	CCONJ	cscr	_	19	cc	_	Canto=31|Verso=72
17	vero	ovvero	CCONJ	cccd	_	16	fixed	_	Canto=31|Verso=72
18	a	a	ADP	epskr	_	19	case	_	Canto=31|Verso=72
19	quel	quello	PRON	pd1ms	Gender=Masc|Number=Sing|PronType=Dem	15	conj	_	Canto=31|Verso=72
20	de	di	ADP	eps	_	22	case	_	Canto=31|Verso=72
21	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	Canto=31|Verso=72
22	terra	terra	NOUN	sf1fs	Gender=Fem|Number=Sing	19	nmod	_	Canto=31|Verso=72
23	di	di	ADP	epskg	_	24	case	_	Canto=31|Verso=72
24	Iarba	Iarba	PROPN	np	_	22	nmod	_	Canto=31|SpaceAfter=No|Verso=72
25	,	,	PUNCT	_	_	19	punct	_	_
26	ch'	che	SCONJ	cssp	_	29	mark	_	Canto=31|Verso=73
27	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	29	nsubj	_	Canto=31|Verso=73
28	non	non	ADV	b	PronType=Neg	29	advmod:neg	_	Canto=31|Verso=73
29	levai	levare	VERB	vta1irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	Canto=31|Verso=73
30	a	a	ADP	_	_	33	case	_	Canto=31|Comment=a-l|Verso=73
31	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	33	det	_	Canto=31|Comment=a-l|Verso=73
32	suo	suo	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	33	det:poss	_	Canto=31|Verso=73
33	comando	comando	NOUN	sm2ms	Gender=Masc|Number=Sing	29	obl	_	Canto=31|Verso=73
34	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	35	det	_	Canto=31|Verso=73
35	mento	mento	NOUN	sm2ms	Gender=Masc|Number=Sing	29	obj	_	Canto=31|SpaceAfter=No|Verso=73
36	;	;	PUNCT	_	_	47	punct	_	_
37	e	e	CCONJ	cscc	_	47	cc	_	Canto=31|Verso=74
38	quando	quando	SCONJ	csst	_	44	mark	_	Canto=31|Verso=74
39	per	per	ADP	epskw	_	41	case	_	Canto=31|Verso=74
40	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	41	det	_	Canto=31|Verso=74
41	barba	barba	NOUN	sf1fs	Gender=Fem|Number=Sing	44	obl	_	Canto=31|Verso=74
42	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	43	det	_	Canto=31|Verso=74
43	viso	viso	NOUN	sm2ms	Gender=Masc|Number=Sing	44	obj	_	Canto=31|Verso=74
44	chiese	chiedere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	47	advcl	_	Canto=31|SpaceAfter=No|Verso=74
45	,	,	PUNCT	_	_	44	punct	_	_
46	ben	bene	ADV	b	_	47	advmod	_	Canto=31|Verso=75
47	conobbi	conoscere	VERB	vta2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	6	parataxis	_	Canto=31|Verso=75
48	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	49	det	_	Canto=31|Verso=75
49	velen	veleno	NOUN	sm2ms	Gender=Masc|Number=Sing	47	obj	_	Canto=31|Verso=75
50	de	di	ADP	eps	_	52	case	_	Canto=31|Verso=75
51	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	52	det	_	Canto=31|Verso=75
52	argomento	argomento	NOUN	sm2ms	Gender=Masc|Number=Sing	49	nmod	_	Canto=31|SpaceAfter=No|Verso=75
53	.	.	PUNCT	_	_	47	punct	_	_

~~~


