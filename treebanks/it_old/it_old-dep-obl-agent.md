---
layout: base
title:  'Statistics of obl:agent in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="it_old-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="it_old-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="it_old-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="it_old-dep-obl-tmod.html">obl:tmod</a></tt>.

52 nodes (0%) are attached to their parents as `obl:agent`.

28 instances of `obl:agent` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.05769230769231.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (33; 63% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (13; 25% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obl:agent	color:blue
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
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 obl:agent	color:blue
1	Con	con	ADP	epskq	_	3	case	_	Canto=17|Verso=16
2	più	più	DET	a	_	3	det	_	Canto=17|Verso=16
3	color	colore	NOUN	sm3mp	Gender=Masc|Number=Plur	11	obl	_	Canto=17|SpaceAfter=No|Verso=16
4	,	,	PUNCT	_	_	5	punct	_	_
5	sommesse	sommettere	VERB	vta2prsf1fp	Aspect=Perf|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	11	acl	_	Canto=17|Verso=16
6	e	e	CCONJ	cscc	_	7	cc	_	Canto=17|Verso=16
7	sovraposte	sovrapporre	VERB	vta2prsf1fp	Aspect=Perf|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	5	conj	_	Canto=17|Verso=16
8	non	non	ADV	b	PronType=Neg	9	advmod:neg	_	Canto=17|Verso=17
9	fer	fare	VERB	vta1irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=17|Verso=17
10	mai	mai	ADV	b	_	9	advmod:tmod	_	Canto=17|Verso=17
11	drappi	drappo	NOUN	sm2mp	Gender=Masc|Number=Plur	9	obj	_	Canto=17|Verso=17
12	Tartari	tartaro	NOUN	sm2mp	Gender=Masc|Number=Plur	9	nsubj	_	Canto=17|Verso=17
13	né	né	CCONJ	cscc	_	14	cc	_	Canto=17|Verso=17
14	Turchi	turco	NOUN	a1mp	Gender=Masc|Number=Plur	12	conj	_	Canto=17|SpaceAfter=No|Verso=17
15	,	,	PUNCT	_	_	22	punct	_	_
16	né	né	CCONJ	cscc	_	22	cc	_	Canto=17|Verso=18
17	fuor	essere	AUX	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	22	aux:pass	_	Canto=17|Verso=18
18	tai	tale	DET	ad2fp	Number=Plur|PronType=Dem	19	det	_	Canto=17|Verso=18
19	tele	tela	NOUN	sf1fp	Gender=Fem|Number=Plur	22	nsubj:pass	_	Canto=17|Verso=18
20	per	per	ADP	epski	_	21	case	_	Canto=17|Verso=18
21	Aragne	Aragne	PROPN	np	_	22	obl:agent	_	Canto=17|Verso=18
22	imposte	imporre	VERB	vtp2irp3	Aspect=Perf|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	9	conj	_	Canto=17|SpaceAfter=No|Verso=18
23	.	.	PUNCT	_	_	9	punct	_	_

~~~


