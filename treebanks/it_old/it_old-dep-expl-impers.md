---
layout: base
title:  'Statistics of expl:impers in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="it_old-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="it_old-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="it_old-dep-expl-pv.html">expl:pv</a></tt>.

143 nodes (0%) are attached to their parents as `expl:impers`.

109 instances of `expl:impers` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25174825174825.

The following 2 pairs of parts of speech are connected with `expl:impers`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (142; 99% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:impers	color:blue
1	Così	così	ADV	b	_	3	advmod	_	Canto=28|Verso=142
2	s'	si	PRON	pf3ypa	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	3	expl:impers	_	Canto=28|SpaceAfter=No|Verso=142
3	osserva	osservare	VERB	vtp1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Canto=28|Verso=142
4	in	in	ADP	epsksl	_	5	case	_	Canto=28|Verso=142
5	me	me	PRON	pp1slco	Number=Sing|Person=1|PronType=Prs	3	obl:lmod	_	Canto=28|Verso=142
6	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Canto=28|Verso=142
7	contrapasso	contrappasso	NOUN	sm2ms	Gender=Masc|Number=Sing	3	obj	_	Canto=28|SpaceAfter=No|Verso=142
8	»	»	PUNCT	_	_	3	punct	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 expl:impers	color:blue
1	Non	non	ADV	b	PronType=Neg	5	advmod:neg	_	Canto=9|Verso=34
2	altrimenti	altrimenti	ADV	b	_	5	advmod	_	Canto=9|Verso=34
3	Achille	Achille	PROPN	np	_	5	nsubj	_	Canto=9|Verso=34
4	si	si	PRON	pf3ypr	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	5	expl:pv	_	Canto=9|Verso=34
5	riscosse	riscuotere	VERB	vta+2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=9|SpaceAfter=No|Verso=34
6	,	,	PUNCT	_	_	10	punct	_	_
7	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	Canto=9|Verso=35
8	occhi	occhio	NOUN	sm2mp	Gender=Masc|Number=Plur	10	obj	_	Canto=9|Verso=35
9	svegliati	svegliare	VERB	vta1pra1mp	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	8	acl	_	Canto=9|Verso=35
10	rivolgendo	rivolgere	VERB	vta2gp	VerbForm=Conv|Voice=Act	5	advcl	_	Canto=9|Verso=35
11	in	in	ADP	_	_	12	case	_	Canto=9|Verso=35
12	giro	giro	NOUN	_	Gender=Masc|Number=Sing	10	obl:lmod	_	Canto=9|Verso=35
13	e	e	CCONJ	cscc	_	15	cc	_	Canto=9|Verso=36
14	non	non	ADV	b	PronType=Neg	15	advmod:neg	_	Canto=9|Verso=36
15	sappiendo	sapere	VERB	vta2gp	VerbForm=Conv|Voice=Act	10	conj	_	Canto=9|Verso=36
16	là	là	ADV	_	_	15	advmod:lmod	_	Canto=9|Verso=36
17	dove	dove	ADV	_	_	16	acl:relcl	_	Canto=9|Verso=36
18	si	si	PRON	pf3yle	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	17	expl:impers	_	Canto=9|Verso=36
19	fosse	essere	AUX	vi+4cis3	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	17	cop	_	Canto=9|SpaceAfter=No|Verso=36
20	,	,	PUNCT	_	_	28	punct	_	_
21	quando	quando	SCONJ	csst	_	28	mark	_	Canto=9|Verso=37
22	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	Canto=9|Verso=37
23	madre	madre	NOUN	sf3fs	Gender=Fem|Number=Sing	28	nsubj	_	Canto=9|Verso=37
24	da	da	ADP	epska	_	25	case	_	Canto=9|Verso=37
25	Chirón	Chirone	PROPN	np	_	28	obl:lmod	_	Canto=9|Verso=37
26	a	a	ADP	epskml	_	27	case	_	Canto=9|Verso=37
27	Schiro	Sciro	PROPN	np	_	28	obl:lmod	_	Canto=9|Verso=37
28	trafuggò	trafugare	VERB	vta1irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl	_	Canto=9|Verso=38
29	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	28	obj	_	Canto=9|Verso=38
30	dormendo	dormire	VERB	vi3gp	VerbForm=Conv|Voice=Act	29	acl	_	Canto=9|Verso=38
31	in	in	ADP	epsksl	_	34	case	_	Canto=9|Verso=38
32	le	la	DET	adfp	Gender=Fem|Number=Plur|PronType=Dem	34	det	_	Canto=9|Verso=38
33	sue	suo	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	34	det:poss	_	Canto=9|Verso=38
34	braccia	braccio	NOUN	sm2fp	Gender=Fem|Number=Plur	28	obl:lmod	_	Canto=9|SpaceAfter=No|Verso=38
35	,	,	PUNCT	_	_	28	punct	_	_
36	là	là	ADV	_	_	28	advmod:lmod	_	Canto=9|Verso=39
37	onde	onde	ADV	_	_	42	advmod:lmod	_	Canto=9|Verso=39
38	poi	poi	ADV	b	_	42	advmod:tmod	_	Canto=9|Verso=39
39	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	40	det	_	Canto=9|Verso=39
40	Greci	greco	NOUN	sm2mp	Gender=Masc|Number=Plur	42	nsubj	_	Canto=9|Verso=39
41	il	il	PRON	pp3msyac	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	42	obj	_	Canto=9|Verso=39
42	dipartiro	dipartire	VERB	vta3irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	36	acl:relcl	_	Canto=9|SpaceAfter=No|Verso=39
43	;	;	PUNCT	_	_	46	punct	_	_
44	che	che	SCONJ	cssp	_	46	mark	_	Canto=9|Verso=40
45	mi	mi	PRON	pf1sypr	Clitic=Yes|Person=1|Poss=Yes|PronType=Prs|Reflex=Yes	46	obj	_	Canto=9|Verso=40
46	scoss'	scuotere	VERB	vta+irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl:cmp	_	Canto=9|Verso=40
47	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	46	nsubj	_	Canto=9|SpaceAfter=No|Verso=40
48	,	,	PUNCT	_	_	55	punct	_	_
49	sì	sì	ADV	_	_	55	advmod	_	Canto=9|Verso=40
50	come	come	ADV	_	_	55	mark	_	Canto=9|Verso=40
51	da	da	ADP	epska	_	53	case	_	Canto=9|Verso=40
52	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	53	det	_	Canto=9|Verso=40
53	faccia	faccia	NOUN	sf1fs	Gender=Fem|Number=Sing	55	obl:lmod	_	Canto=9|Verso=40
54	mi	mi	PRON	pp1syda	Clitic=Yes|Person=1|Poss=Yes|PronType=Prs	55	iobj	_	Canto=9|Verso=41
55	fuggì	fuggire	VERB	vi3irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	46	advcl	_	Canto=9|Verso=41
56	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	57	det	_	Canto=9|Verso=41
57	sonno	sonno	NOUN	sm2ms	Gender=Masc|Number=Sing	55	nsubj	_	Canto=9|SpaceAfter=No|Verso=41
58	,	,	PUNCT	_	_	60	punct	_	_
59	e	e	CCONJ	cscc	_	60	cc	_	Canto=9|Verso=41
60	diventa'	diventare	VERB	vi1irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	55	conj	_	Canto=9|Verso=41
61	ismorto	smorto	ADJ	a1ms	Gender=Masc|Number=Sing	60	xcomp	_	Canto=9|SpaceAfter=No|Verso=41
62	,	,	PUNCT	_	_	64	punct	_	_
63	come	come	ADV	b	_	64	mark	_	Canto=9|Verso=42
64	fa	fare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	60	advcl:cmp	_	Canto=9|Verso=42
65	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	66	det	_	Canto=9|Verso=42
66	uom	uomo	NOUN	sm2ms	Gender=Masc|Number=Sing	64	nsubj	_	Canto=9|Verso=42
67	che	che	PRON	pr	PronType=Rel	71	nsubj	_	Canto=9|SpaceAfter=No|Verso=42
68	,	,	PUNCT	_	_	71	punct	_	_
69	spaventato	spaventare	VERB	vtp1pr	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	71	advcl	_	Canto=9|SpaceAfter=No|Verso=42
70	,	,	PUNCT	_	_	71	punct	_	_
71	agghiaccia	agghiacciare	VERB	vi1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	66	acl:relcl	_	Canto=9|SpaceAfter=No|Verso=42
72	.	.	PUNCT	_	_	55	punct	_	_

~~~


