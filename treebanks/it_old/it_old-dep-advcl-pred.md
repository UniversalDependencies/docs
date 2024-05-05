---
layout: base
title:  'Statistics of advcl:pred in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="it_old-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="it_old-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="it_old-dep-advcl-relcl.html">advcl:relcl</a></tt>.

244 nodes (0%) are attached to their parents as `advcl:pred`.

147 instances of `advcl:pred` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.48770491803279.

The following 14 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (93; 38% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (65; 27% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (31; 13% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (24; 10% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (18; 7% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 advcl:pred	color:blue
1	Ecco	ecco	ADV	b	_	11	advmod	_	Canto=15|SpaceAfter=No|Verso=91
2	,	,	PUNCT	_	_	3	punct	_	_
3	dolenti	dolente	ADJ	a2mp	Gender=Masc|Number=Plur	11	advcl:pred	_	Canto=15|SpaceAfter=No|Verso=91
4	,	,	PUNCT	_	_	3	punct	_	_
5	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Canto=15|Verso=91
6	tuo	tuo	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det:poss	_	Canto=15|Verso=91
7	padre	padre	NOUN	sm3ms	Gender=Masc|Number=Sing	11	nsubj	_	Canto=15|Verso=91
8	e	e	CCONJ	cscc	_	9	cc	_	Canto=15|Verso=91
9	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	7	conj	_	Canto=15|Verso=91
10	ti	ti	PRON	pp2syac	Clitic=Yes|Person=2|Poss=Yes|PronType=Prs	11	obj	_	Canto=15|Verso=92
11	cercavamo	cercare	VERB	vta1iip1	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=15|SpaceAfter=No|Verso=92
12	»	»	PUNCT	_	_	11	punct	_	SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advcl:pred	color:blue
1	L'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Canto=20|Verso=79
2	altro	altro	PRON	pi	Gender=Masc|Number=Sing|PronType=Ind	11	obj	_	Canto=20|SpaceAfter=No|Verso=79
3	,	,	PUNCT	_	_	6	punct	_	_
4	che	che	PRON	pr	PronType=Rel	6	nsubj	_	Canto=20|Verso=79
5	già	già	ADV	b	_	6	advmod:tmod	_	Canto=20|Verso=79
6	uscì	uscire	VERB	vi3irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	acl:relcl	_	Canto=20|Verso=79
7	preso	prendere	VERB	vta2pr	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	6	advcl:pred	_	Canto=20|Verso=79
8	di	di	ADP	epskdl	_	9	case	_	Canto=20|Verso=79
9	nave	nave	NOUN	sf3fs	Gender=Fem|Number=Sing	6	obl:lmod	_	Canto=20|SpaceAfter=No|Verso=79
10	,	,	PUNCT	_	_	2	punct	_	_
11	veggio	vedere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=20|Verso=80
12	vender	vendere	VERB	vta2fp	Tense=Pres|VerbForm=Inf|Voice=Act	11	xcomp	_	Canto=20|Verso=80
13	sua	suo	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	14	det:poss	_	Canto=20|Verso=80
14	figlia	figlia	NOUN	sf1fs	Gender=Fem|Number=Sing	12	obj	_	Canto=20|Verso=80
15	e	e	CCONJ	cscc	_	16	cc	_	Canto=20|Verso=80
16	patteggiare	patteggiare	VERB	vta1fp	Tense=Pres|VerbForm=Inf|Voice=Act	12	conj	_	Canto=20|Verso=80
17	ne	ne	PRON	pp3xpt	Clitic=Yes|Person=3|PronType=Prs	16	iobj	_	Canto=20|Verso=80
18	come	come	ADV	b	_	19	mark	_	Canto=20|Verso=81
19	fanno	fare	VERB	vta1ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	advcl:cmp	_	Canto=20|Verso=81
20	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	21	det	_	Canto=20|Verso=81
21	corsar	corsaro	NOUN	sm2mp	Gender=Masc|Number=Plur	19	nsubj	_	Canto=20|Verso=81
22	de	di	ADP	eps	_	25	case	_	Canto=20|Verso=81
23	l'	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	25	det	_	Canto=20|Verso=81
24	altre	altro	DET	ai	Gender=Fem|Number=Plur|PronType=Ind	25	det	_	Canto=20|Verso=81
25	schiave	schiava	NOUN	sf1fp	Gender=Fem|Number=Plur	19	obl	_	Canto=20|SpaceAfter=No|Verso=81
26	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advcl:pred	color:blue
1	Questa	questo	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	Canto=23|Verso=46
2	favilla	favilla	NOUN	sf1fs	Gender=Fem|Number=Sing	5	nsubj	_	Canto=23|Verso=46
3	tutta	tutto	DET	ai1fs	Gender=Fem|Number=Sing|PronType=Ind	5	advcl:pred	_	Canto=23|Verso=46
4	mi	mi	PRON	pp1syda	Clitic=Yes|Person=1|Poss=Yes|PronType=Prs	5	iobj	_	Canto=23|Verso=46
5	raccese	riaccendere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=23|Verso=46
6	mia	mio	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	7	det:poss	_	Canto=23|Verso=47
7	conoscenza	conoscenza	NOUN	sf1fs	Gender=Fem|Number=Sing	5	obj	_	Canto=23|Verso=47
8	a	a	ADP	epsk1o	_	11	case	_	Canto=23|Verso=47
9	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	Canto=23|Verso=47
10	cangiata	cangiare	VERB	vta1pra1fs	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	11	acl	_	Canto=23|Verso=47
11	labbia	labbia	NOUN	sf1fs	Gender=Fem|Number=Sing	7	nmod	_	Canto=23|SpaceAfter=No|Verso=47
12	,	,	PUNCT	_	_	14	punct	_	_
13	e	e	CCONJ	cscc	_	14	cc	_	Canto=23|Verso=48
14	ravvisai	ravvisare	VERB	vta1irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	Canto=23|Verso=48
15	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	Canto=23|Verso=48
16	faccia	faccia	NOUN	sf1fs	Gender=Fem|Number=Sing	14	obj	_	Canto=23|Verso=48
17	di	di	ADP	epskg	_	18	case	_	Canto=23|Verso=48
18	Forese	Forese	PROPN	np	_	16	nmod	_	Canto=23|SpaceAfter=No|Verso=48
19	.	.	PUNCT	_	_	5	punct	_	_

~~~


