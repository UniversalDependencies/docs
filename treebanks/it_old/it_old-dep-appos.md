---
layout: base
title:  'Statistics of appos in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `appos`

This relation is universal.

70 nodes (0%) are attached to their parents as `appos`.

70 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.42857142857143.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (36; 51% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (9; 13% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (7; 10% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (5; 7% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (5; 7% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Oh	oh	PART	i	_	2	discourse	_	Canto=23|Verso=34
2	Beatrice	Beatrice	PROPN	np	_	0	root	_	Canto=23|Verso=34|SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	dolce	dolce	ADJ	a2fs	Gender=Fem|Number=Sing	5	amod	_	Canto=23|Verso=34
5	guida	guida	NOUN	sf1fs	Gender=Fem|Number=Sing	2	appos	_	Canto=23|Verso=34
6	e	e	CCONJ	cscc	_	7	cc	_	Canto=23|Verso=34
7	cara	caro	ADJ	a1fs	Gender=Fem|Number=Sing	4	conj	_	Canto=23|Verso=34|SpaceAfter=No
8	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 19 appos	color:blue
1	Mia	mio	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	2	det:poss	_	Canto=22|Verso=49
2	madre	madre	NOUN	sf3fs	Gender=Fem|Number=Sing	9	nsubj	_	Canto=22|Verso=49
3	a	a	ADP	epskf	_	4	case	_	Canto=22|Verso=49
4	servo	servo	NOUN	sm2ms	Gender=Masc|Number=Sing	9	obl	_	Canto=22|Verso=49
5	d'	di	ADP	eps	_	7	case	_	Canto=22|SpaceAfter=No|Verso=49
6	un	uno	DET	rims	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Canto=22|Verso=49
7	segnor	signore	NOUN	sm3ms	Gender=Masc|Number=Sing	4	nmod	_	Canto=22|Verso=49
8	mi	mi	PRON	pp1syda	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	9	obj	_	Canto=22|Verso=49
9	puose	porre	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=22|SpaceAfter=No|Verso=49
10	,	,	PUNCT	_	_	14	punct	_	_
11	che	che	PRON	pr	PronType=Rel	14	nsubj	_	Canto=22|Verso=50
12	m'	mi	PRON	pp1syac	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	14	obj	_	Canto=22|SpaceAfter=No|Verso=50
13	avea	avere	AUX	vta5iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	14	aux	_	Canto=22|Verso=50
14	generato	generare	VERB	vta1iss3	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|VerbForm=Part|Voice=Act	2	acl:relcl	_	Canto=22|Verso=50
15	d'	da	ADP	epsk6	_	17	case	_	Canto=22|SpaceAfter=No|Verso=50
16	un	uno	DET	rims	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	_	Canto=22|Verso=50
17	ribaldo	ribaldo	NOUN	sm2ms	Gender=Masc|Number=Sing	14	obl	_	Canto=22|SpaceAfter=No|Verso=50
18	,	,	PUNCT	_	_	19	punct	_	_
19	distruggitor	distruggitore	NOUN	sm3ms	Gender=Masc|Number=Sing	17	appos	_	Canto=22|Verso=51
20	di	di	ADP	epskg	_	21	case	_	Canto=22|Verso=51
21	sé	sé	PRON	pf3lpr	Person=3|PronType=Prs|Reflex=Yes	19	nmod	_	Canto=22|Verso=51
22	e	e	CCONJ	cscc	_	25	cc	_	Canto=22|Verso=51
23	di	di	ADP	epskg	_	25	case	_	Canto=22|Verso=51
24	sue	suo	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	25	det:poss	_	Canto=22|Verso=51
25	cose	cosa	NOUN	sf1fp	Gender=Fem|Number=Plur	21	conj	_	Canto=22|SpaceAfter=No|Verso=51
26	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 appos	color:blue
1	Per	per	ADP	epskw	_	3	case	_	Canto=16|Verso=139
2	altro	altro	DET	ai	Gender=Masc|Number=Sing|PronType=Ind	3	det	_	Canto=16|Verso=139
3	sopranome	soprannome	NOUN	sm3ms	Gender=Masc|Number=Sing	7	obl	_	Canto=16|Verso=139
4	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	7	nsubj	_	Canto=16|Verso=139
5	non	non	ADV	_	PronType=Neg	7	advmod:neg	_	Canto=16|Comment=no-l|Verso=139
6	lo	lo	PRON	_	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	Canto=16|Comment=no-l|Verso=139
7	conosco	conoscere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=16|SpaceAfter=No|Verso=139
8	,	,	PUNCT	_	_	13	punct	_	_
9	s'	se	SCONJ	cssv	_	13	mark	_	Canto=16|Verso=140
10	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	13	nsubj	_	Canto=16|Verso=140
11	non	non	ADV	_	PronType=Neg	13	advmod:neg	_	Canto=16|Comment=no-l|Verso=140
12	lo	lo	PRON	_	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	Canto=16|Comment=no-l|Verso=140
13	togliessi	togliere	VERB	vta2cis1	Aspect=Imp|Mood=Sub|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin|Voice=Act	7	advcl	_	Canto=16|Verso=140
14	da	da	ADP	epska	_	16	case	_	Canto=16|Verso=140
15	sua	suo	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	16	det:poss	_	Canto=16|Verso=140
16	figlia	figlia	NOUN	sf1fs	Gender=Fem|Number=Sing	13	obl:lmod	_	Canto=16|Verso=140
17	Gaia	Gaia	PROPN	np	_	16	appos	_	Canto=16|SpaceAfter=No|Verso=140
18	.	.	PUNCT	_	_	7	punct	_	_

~~~


