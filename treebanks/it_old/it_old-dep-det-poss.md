---
layout: base
title:  'Statistics of det:poss in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_old-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_old-dep-det-predet.html">det:predet</a></tt>.

1253 nodes (2%) are attached to their parents as `det:poss`.

917 instances of `det:poss` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0462889066241.

The following 8 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1148; 92% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (79; 6% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (17; 1% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Or	ora	ADV	b	_	2	nsubj	_	Canto=7|Verso=72
2	vo'	volere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=7|Verso=72
3	che	che	SCONJ	csso	_	8	mark	_	Canto=7|Verso=72
4	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	8	nsubj	_	Canto=7|Verso=72
5	mia	mio	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	Canto=7|Verso=72
6	sentenza	sentenza	NOUN	sf1fs	Gender=Fem|Number=Sing	8	obj	_	Canto=7|Verso=72
7	ne	ne	PRON	pp3ypt	Clitic=Yes|Person=3|PronType=Prs	8	obl:arg	_	Canto=7|Verso=72
8	'mbocche	imboccare	VERB	vta1cps2	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	Canto=7|SpaceAfter=No|Verso=72
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 det:poss	color:blue
1	Ond'	onde	ADV	cscn	_	2	advmod	_	Canto=23|Verso=85
2	elli	egli	PRON	pp3mslso	Gender=Masc|Number=Sing|Person=3|PronType=Prs	0	root	_	Canto=23|Verso=85
3	a	a	ADP	epsk1d	_	4	case	_	Canto=23|Verso=85
4	me	me	PRON	pp1slco	Person=1|Poss=Yes|PronType=Prs	2	orphan	_	Canto=23|SpaceAfter=No|Verso=85
5	:	:	PUNCT	_	_	8	punct	_	_
6	«	«	PUNCT	_	_	8	punct	_	SpaceAfter=No
7	Sì	così	ADV	b	_	8	advmod	_	Canto=23|Verso=85
8	tosto	tosto	ADV	b	_	11	advmod:tmod	_	Canto=23|Verso=85
9	m'	mi	PRON	pp1syac	Clitic=Yes|Person=1|Poss=Yes|PronType=Prs	11	obj	_	Canto=23|Verso=85
10	ha	avere	AUX	vta5ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	_	Canto=23|Verso=85
11	condotto	condurre	VERB	vta2ibs3	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|VerbForm=Part|Voice=Act	2	ccomp:reported	_	Canto=23|Verso=85
12	a	a	ADP	epsb	_	13	mark	_	Canto=23|Verso=86
13	ber	bere	VERB	vta2fp	Tense=Pres|VerbForm=Inf|Voice=Act	11	advcl	_	Canto=23|Verso=86
14	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	Canto=23|Verso=86
15	dolce	dolce	ADJ	a2ms	Gender=Masc|Number=Sing	16	amod	_	Canto=23|Verso=86
16	assenzo	assenzo	NOUN	sm2ms	Gender=Masc|Number=Sing	13	obj	_	Canto=23|Verso=86
17	d'	di	ADP	eps	_	19	case	_	Canto=23|Verso=86
18	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	19	det	_	Canto=23|Verso=86
19	martìri	martirio	NOUN	sm2mp	Gender=Masc|Number=Plur	16	nmod	_	Canto=23|Verso=86
20	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	Canto=23|Verso=87
21	Nella	Nella	PROPN	_	_	11	nsubj	_	Canto=23|Comment=ne-lla|Verso=87
22	mia	mio	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	21	det:poss	_	Canto=23|Verso=87
23	con	con	ADP	epsm	_	25	case	_	Canto=23|Verso=87
24	suo	suo	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	25	det:poss	_	Canto=23|Verso=87
25	pianger	piangere	VERB	vi2fpsm3ms	Tense=Pres|VerbForm=Inf	11	obl	_	Canto=23|Verso=87
26	dirotto	dirompere	VERB	vtp2pra1ms	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	25	acl	_	Canto=23|SpaceAfter=No|Verso=87
27	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:poss	color:blue
1	Sieti	essere	AUX	_	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	2	aux:pass	_	Canto=15|Comment=sie-ti|Verso=119
2	raccomandato	raccomandare	VERB	vtp1cps2	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Canto=15|Verso=119
3	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Canto=15|Verso=119
4	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	5	det:poss	_	Canto=15|Verso=119
5	Tesoro	tesoro	PROPN	sm2ms	Gender=Masc|Number=Sing	2	nsubj	_	Canto=15|SpaceAfter=No|Verso=119
6	,	,	PUNCT	_	_	11	punct	_	_
7	in	in	ADP	_	_	9	case	_	Canto=15|Comment=ne-l|Verso=120
8	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	Canto=15|Comment=ne-l|Verso=120
9	qual	quale	PRON	pr2ms	Number=Sing|PronType=Rel	11	obl:lmod	_	Canto=15|Verso=120
10	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	11	nsubj	_	Canto=15|Verso=120
11	vivo	vivere	VERB	vi2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	Canto=15|Verso=120
12	ancora	ancora	ADV	b	_	11	advmod:tmod	_	Canto=15|SpaceAfter=No|Verso=120
13	,	,	PUNCT	_	_	17	punct	_	_
14	e	e	CCONJ	cscc	_	17	cc	_	Canto=15|Verso=120
15	più	più	ADV	b	_	17	advmod	_	Canto=15|Verso=120
16	non	non	ADV	b	PronType=Neg	17	advmod:neg	_	Canto=15|Verso=120
17	cheggio	chiedere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	Canto=15|SpaceAfter=No|Verso=120
18	»	»	PUNCT	_	_	2	punct	_	SpaceAfter=No
19	.	.	PUNCT	_	_	2	punct	_	_

~~~


