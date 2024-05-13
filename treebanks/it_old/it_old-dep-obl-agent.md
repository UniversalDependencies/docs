---
layout: base
title:  'Statistics of obl:agent in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="it_old-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="it_old-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="it_old-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="it_old-dep-obl-tmod.html">obl:tmod</a></tt>.

117 nodes (0%) are attached to their parents as `obl:agent`.

64 instances of `obl:agent` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.98290598290598.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (64; 55% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (37; 32% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (8; 7% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:agent	color:blue
1	Ma	ma	CCONJ	csca	_	6	cc	_	Canto=18|Verso=88
2	questa	questo	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	3	det	_	Canto=18|Verso=88
3	sonnolenza	sonnolenza	NOUN	sf1fs	Gender=Fem|Number=Sing	6	nsubj:pass	_	Canto=18|Verso=88
4	mi	mi	PRON	pp1syda	Clitic=Yes|Person=1|Poss=Yes|PronType=Prs	6	iobj	_	Canto=18|Verso=88
5	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	_	Canto=18|Verso=88
6	tolta	togliere	VERB	vtp2irs3	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Canto=18|Verso=88
7	subitamente	subitamente	ADV	b	_	6	advmod:tmod	_	Canto=18|Verso=89
8	da	da	ADP	epski	_	9	case	_	Canto=18|Verso=89
9	gente	gente	NOUN	sf3fs	Gender=Fem|Number=Sing	6	obl:agent	_	Canto=18|Verso=89
10	che	che	PRON	pr	PronType=Rel	19	nsubj	_	Canto=18|Verso=89
11	dopo	dopo	ADP	eisksl	_	14	case	_	Canto=18|Verso=89
12	le	la	DET	adfp	Gender=Fem|Number=Plur|PronType=Dem	14	det	_	Canto=18|Verso=90
13	nostre	nostro	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	14	det:poss	_	Canto=18|Verso=90
14	spalle	spalla	NOUN	sf1fp	Gender=Fem|Number=Plur	19	obl:lmod	_	Canto=18|Verso=90
15	a	a	ADP	epskml	_	16	case	_	Canto=18|Verso=90
16	noi	noi	PRON	pp1plco	Number=Plur|Person=1|PronType=Prs	19	obl:lmod	_	Canto=18|Verso=90
17	era	essere	AUX	vi4iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	19	aux	_	Canto=18|Verso=90
18	già	già	ADV	b	_	19	advmod:tmod	_	Canto=18|Verso=90
19	volta	volgere	VERB	vtp2pr	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	9	acl:relcl	_	Canto=18|SpaceAfter=No|Verso=90
20	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 obl:agent	color:blue
1	Queste	questo	DET	ad1fp	Gender=Fem|Number=Plur|PronType=Dem	2	det	_	Canto=5|Verso=108
2	parole	parola	NOUN	sf1fp	Gender=Fem|Number=Plur	7	nsubj:pass	_	Canto=5|Verso=108
3	da	da	ADP	epski	_	4	case	_	Canto=5|Verso=108
4	lor	loro	PRON	pp3plco	Number=Plur|Person=3|PronType=Prs	7	obl:agent	_	Canto=5|Verso=108
5	ci	ci	PRON	pp1pyda	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	7	iobj	_	Canto=5|Verso=108
6	fuor	essere	AUX	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	Canto=5|Verso=108
7	porte	porgere	VERB	vtp2irp3	Aspect=Perf|Gender=Fem|Number=Plur|Person=3|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Canto=5|SpaceAfter=No|Verso=108
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 obl:agent	color:blue
1	«	«	PUNCT	_	_	8	punct	_	SpaceAfter=No
2	Anzi	anzi	ADV	_	_	8	advmod:tmod	_	Canto=7|Verso=4
3	che	che	SCONJ	_	_	8	mark	_	Canto=7|Verso=4
4	a	a	ADP	epskml	_	6	case	_	Canto=7|Verso=4
5	questo	questo	DET	ad1ms	Gender=Masc|Number=Sing|PronType=Dem	6	det	_	Canto=7|Verso=4
6	monte	monte	NOUN	sm3ms	Gender=Masc|Number=Sing	8	obl:lmod	_	Canto=7|Verso=4
7	fosser	essere	AUX	vi4cip3	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	8	aux	_	Canto=7|Verso=4
8	volte	volgere	VERB	vtp2cip3	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	23	advcl	_	Canto=7|Verso=4
9	l'	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	Canto=7|Verso=5
10	anime	anima	NOUN	sf1fp	Gender=Fem|Number=Plur	8	nsubj	_	Canto=7|Verso=5
11	degne	degno	ADJ	a1fpxf3	Gender=Fem|Number=Plur	10	amod	_	Canto=7|Verso=5
12	di	di	ADP	_	_	13	mark	_	Canto=7|Verso=5
13	salire	salire	VERB	vi3fp	Tense=Pres|VerbForm=Inf	11	advcl	_	Canto=7|Verso=5
14	a	a	ADP	epskml	_	15	case	_	Canto=7|Verso=5
15	Dio	Dio	PROPN	np	_	13	obl:lmod	_	Canto=7|SpaceAfter=No|Verso=5
16	,	,	PUNCT	_	_	23	punct	_	_
17	fur	essere	AUX	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	23	aux:pass	_	Canto=7|Verso=6
18	l'	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	19	det	_	Canto=7|Verso=6
19	ossa	osso	NOUN	sm2fp	Gender=Fem|Number=Plur	23	nsubj:pass	_	Canto=7|Verso=6
20	mie	mio	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	19	det:poss	_	Canto=7|Verso=6
21	per	per	ADP	epski	_	22	case	_	Canto=7|Verso=6
22	Ottavian	Ottaviano	PROPN	np	_	23	obl:agent	_	Canto=7|Verso=6
23	sepolte	seppellire	VERB	vtp3irp3	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Canto=7|SpaceAfter=No|Verso=6
24	.	.	PUNCT	_	_	23	punct	_	_

~~~


