---
layout: base
title:  'Statistics of advcl:pred in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="it_old-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="it_old-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="it_old-dep-advcl-relcl.html">advcl:relcl</a></tt>.

85 nodes (0%) are attached to their parents as `advcl:pred`.

58 instances of `advcl:pred` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.50588235294118.

The following 10 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (24; 28% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (23; 27% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (12; 14% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (10; 12% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (10; 12% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 advcl:pred	color:blue
1	lasciò	lasciare	VERB	vta1irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=18|Verso=94
2	la	la	PRON	pp3fsxac	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	obj	_	Canto=18|Verso=94
3	quivi	quivi	ADV	b	_	1	advmod:lmod	_	Canto=18|SpaceAfter=No|Verso=94
4	,	,	PUNCT	_	_	5	punct	_	_
5	gravida	gravido	ADJ	a1fs	Gender=Fem|Number=Sing	1	advcl:pred	_	Canto=18|SpaceAfter=No|Verso=94
6	,	,	PUNCT	_	_	7	punct	_	_
7	soletta	solo	ADJ	a1fs	Gender=Fem|Number=Sing	5	conj	_	Canto=18|SpaceAfter=No|Verso=94
8	;	;	PUNCT	_	_	15	punct	_	_
9	tal	tale	DET	a2fs	Number=Sing|PronType=Dem	10	det	_	Canto=18|Verso=95
10	colpa	colpa	NOUN	sf1fs	Gender=Fem|Number=Sing	15	nsubj	_	Canto=18|Verso=95
11	a	a	ADP	epsk3	_	13	case	_	Canto=18|Verso=95
12	tal	tale	DET	a2ms	Number=Sing|PronType=Dem	13	det	_	Canto=18|Verso=95
13	martiro	martiro	NOUN	sm2ms	Gender=Masc|Number=Sing	15	obl	_	Canto=18|Verso=95
14	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	obj	_	Canto=18|Verso=95
15	condanna	condannare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	Canto=18|SpaceAfter=No|Verso=95
16	;	;	PUNCT	_	_	22	punct	_	_
17	e	e	CCONJ	cscc	_	22	cc	_	Canto=18|Verso=96
18	anche	anche	ADV	b	_	22	advmod	_	Canto=18|Verso=96
19	di	di	ADP	epskg	_	20	case	_	Canto=18|Verso=96
20	Medea	Medea	PROPN	np	_	22	obl	_	Canto=18|Verso=96
21	si	si	PRON	pf3ypa	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	22	expl:pass	_	Canto=18|Verso=96
22	fa	fare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	conj	_	Canto=18|Verso=96
23	vendetta	vendetta	NOUN	sf1fs	Gender=Fem|Number=Sing	22	nsubj:pass	_	Canto=18|SpaceAfter=No|Verso=96
24	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 advcl:pred	color:blue
1	In	in	ADP	epsksl	_	3	case	_	Canto=18|Verso=19
2	questo	questo	DET	ad1ms	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	Canto=18|Verso=19
3	luogo	luogo	NOUN	sm2ms	Gender=Masc|Number=Sing	12	obl:lmod	_	Canto=18|SpaceAfter=No|Verso=19
4	,	,	PUNCT	_	_	3	punct	_	_
5	de	di	ADP	eps	_	7	case	_	Canto=18|Verso=19
6	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	Canto=18|Verso=19
7	schiena	schiena	NOUN	sf1fs	Gender=Fem|Number=Sing	8	obl:agent	_	Canto=18|Verso=19
8	scossi	scuotere	VERB	vta2pr	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	12	advcl:pred	_	Canto=18|Verso=19
9	di	di	ADP	epskg	_	10	case	_	Canto=18|Verso=20
10	Gerion	Gerione	PROPN	np	_	7	nmod	_	Canto=18|SpaceAfter=No|Verso=20
11	,	,	PUNCT	_	_	8	punct	_	_
12	trovammo	trovare	VERB	vta+1irp1	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=18|Verso=20
13	ci	ci	PRON	pf1pxpr	Clitic=Yes|Number=Plur|Person=1|PronType=Prs|Reflex=Yes	12	obj	_	Canto=18|Verso=20
14	;	;	PUNCT	_	_	18	punct	_	_
15	e	e	CCONJ	cscc	_	18	cc	_	Canto=18|Verso=20
16	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	Canto=18|Verso=20
17	poeta	poeta	NOUN	sm1ms	Gender=Masc|Number=Sing	18	nsubj	_	Canto=18|Verso=20
18	tenne	tenere	VERB	vi2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	parataxis	_	Canto=18|Verso=21
19	a	a	ADP	epskml	_	20	case	_	Canto=18|Verso=21
20	sinistra	sinistra	NOUN	s1fs	Gender=Fem|Number=Sing	18	obl:lmod	_	Canto=18|SpaceAfter=No|Verso=21
21	,	,	PUNCT	_	_	26	punct	_	_
22	e	e	CCONJ	cscc	_	26	cc	_	Canto=18|Verso=21
23	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	26	nsubj	_	Canto=18|Verso=21
24	dietro	dietro	ADV	b	_	26	advmod:lmod	_	Canto=18|Verso=21
25	mi	mi	PRON	pf1sypr	Clitic=Yes|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	26	obj	_	Canto=18|Verso=21
26	mossi	muovere	VERB	vta+2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	18	conj	_	Canto=18|SpaceAfter=No|Verso=21
27	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 advcl:pred	color:blue
1	D'	di	ADP	eps	_	2	case	_	Canto=14|SpaceAfter=No|Verso=19
2	anime	anima	NOUN	sf1fp	Gender=Fem|Number=Plur	6	nmod	_	Canto=14|Verso=19
3	nude	nudo	ADJ	a1fp	Gender=Fem|Number=Plur	2	amod	_	Canto=14|Verso=19
4	vidi	vedere	VERB	vta2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=14|Verso=19
5	molte	molto	DET	ai1fp	Gender=Fem|Number=Plur|PronType=Ind	6	det	_	Canto=14|Verso=19
6	gregge	greggia	NOUN	sf1fp	Gender=Fem|Number=Plur	4	obj	_	Canto=14|Verso=19
7	che	che	PRON	pr	PronType=Rel	8	nsubj	_	Canto=14|Verso=20
8	piangean	piangere	VERB	vi2iip3	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	6	acl:relcl	_	Canto=14|Verso=20
9	tutte	tutto	PRON	pi1fp	Gender=Fem|Number=Plur|PronType=Tot	8	advcl:pred	_	Canto=14|Verso=20
10	assai	assai	ADV	b	_	11	advmod	_	Canto=14|Verso=20
11	miseramente	miseramente	ADV	b	_	8	advmod	_	Canto=14|SpaceAfter=No|Verso=20
12	,	,	PUNCT	_	_	14	punct	_	_
13	e	e	CCONJ	cscc	_	14	cc	_	Canto=14|Verso=21
14	parea	parere	VERB	vi*2iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	conj	_	Canto=14|Verso=21
15	posta	porre	VERB	vta2pr	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	14	ccomp	_	Canto=14|Verso=21
16	lor	loro	PRON	pp3plco	Number=Plur|Person=3|PronType=Prs	15	iobj	_	Canto=14|Verso=21
17	diversa	diverso	ADJ	a1fs	Gender=Fem|Number=Sing	18	amod	_	Canto=14|Verso=21
18	legge	legge	NOUN	sf3fs	Gender=Fem|Number=Sing	15	obj	_	Canto=14|SpaceAfter=No|Verso=21
19	.	.	PUNCT	_	_	4	punct	_	_

~~~


