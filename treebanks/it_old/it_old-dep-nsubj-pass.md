---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_old-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="it_old-dep-nsubj-outer.html">nsubj:outer</a></tt>.

246 nodes (0%) are attached to their parents as `nsubj:pass`.

185 instances of `nsubj:pass` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.78861788617886.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (135; 55% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (96; 39% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (8; 3% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_old-pos-X.html">X</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nsubj:pass	color:blue
1	Vede	vedere	VERB	vtp2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Canto=22|Verso=112
2	vi	vi	ADV	bx	Clitic=Yes	1	advmod:lmod	_	Canto=22|Verso=112
3	si	si	PRON	pf3xpa	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	1	expl:pass	_	Canto=22|Verso=112
4	quella	quello	PRON	pd1fs	Gender=Fem|Number=Sing|PronType=Dem	1	nsubj:pass	_	Canto=22|Verso=112
5	che	che	PRON	pr	PronType=Rel	6	nsubj	_	Canto=22|Verso=112
6	mostrò	mostrare	VERB	vta1irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	Canto=22|Verso=112
7	Langia	Langia	PROPN	np	_	6	obj	_	Canto=22|SpaceAfter=No|Verso=112
8	;	;	PUNCT	_	_	9	punct	_	_
9	essere	essere	VERB	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	Canto=22|Verso=113
10	vi	vi	PRON	bx	Clitic=Yes	9	expl	_	Canto=22|Verso=113
11	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	Canto=22|Verso=113
12	figlia	figlia	NOUN	sf1fs	Gender=Fem|Number=Sing	9	nsubj	_	Canto=22|Verso=113
13	di	di	ADP	epskg	_	14	case	_	Canto=22|Verso=113
14	Tiresia	Tiresia	PROPN	np	_	12	nmod	_	Canto=22|SpaceAfter=No|Verso=113
15	,	,	PUNCT	_	_	17	punct	_	_
16	e	e	CCONJ	cscr	_	17	cc	_	Canto=22|Verso=113
17	Teti	Teti	PROPN	np	_	12	conj	_	Canto=22|SpaceAfter=No|Verso=113
18	,	,	PUNCT	_	_	24	punct	_	_
19	e	e	CCONJ	cscr	_	24	cc	_	Canto=22|Verso=114
20	con	con	ADP	epskc	_	22	case	_	Canto=22|Verso=114
21	le	la	DET	adfp	Gender=Fem|Number=Plur|PronType=Dem	22	det	_	Canto=22|Verso=114
22	suore	suora	NOUN	sf1fp	Gender=Fem|Number=Plur	24	orphan	_	Canto=22|Verso=114
23	sue	suo	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	22	det:poss	_	Canto=22|Verso=114
24	Deidamia	Deidamia	PROPN	np	_	9	conj	_	Canto=22|SpaceAfter=No|Verso=114
25	»	»	PUNCT	_	_	1	punct	_	SpaceAfter=No
26	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 nsubj:pass	color:blue
1	Quivi	quivi	ADV	b	_	3	advmod:tmod	_	Canto=22|Verso=109
2	si	si	PRON	pf3ypa	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	3	expl:pass	_	Canto=22|Verso=109
3	veggion	vedere	VERB	vtp2ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Canto=22|Verso=109
4	de	di	ADP	eps	_	6	case	_	Canto=22|Verso=109
5	le	la	DET	adfp	Gender=Fem|Number=Plur|PronType=Dem	6	det	_	Canto=22|Verso=109
6	genti	gente	NOUN	sf3fp	Gender=Fem|Number=Plur	3	obl	_	Canto=22|Verso=109
7	tue	tuo	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	6	det:poss	_	Canto=22|Verso=109
8	Antigone	Antigone	PROPN	np	_	3	nsubj:pass	_	Canto=22|SpaceAfter=No|Verso=110
9	,	,	PUNCT	_	_	10	punct	_	_
10	Deifile	Deifile	PROPN	np	_	8	conj	_	Canto=22|Verso=110
11	e	e	CCONJ	cscr	_	12	cc	_	Canto=22|Verso=110
12	Argia	Argia	PROPN	np	_	8	conj	_	Canto=22|SpaceAfter=No|Verso=110
13	,	,	PUNCT	_	_	15	punct	_	_
14	e	e	CCONJ	cscr	_	15	cc	_	Canto=22|Verso=111
15	Ismene	Ismene	PROPN	np	_	8	conj	_	Canto=22|Verso=111
16	sì	così	ADV	b	_	17	advmod	_	Canto=22|Verso=111
17	trista	tristo	ADJ	a1fs	Gender=Fem|Number=Sing	15	amod	_	Canto=22|Verso=111
18	come	come	ADV	b	_	19	mark	_	Canto=22|Verso=111
19	fue	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	17	advcl:cmp	_	Canto=22|SpaceAfter=No|Verso=111
20	.	.	PUNCT	_	_	3	punct	_	_

~~~


