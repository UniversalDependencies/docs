---
layout: base
title:  'Statistics of goeswith in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `goeswith`

This relation is universal.

3 nodes (0%) are attached to their parents as `goeswith`.

3 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `goeswith`: <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-X.html">X</a></tt> (1; 33% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-X.html">X</a></tt> (1; 33% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-X.html">X</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 goeswith	color:blue
1	Les	le	DET	DT	Gender=Masc|Number=Plur	2	det	_	wordform=les
2	islamo-conservateurs	islamo-conservateur	NOUN	NN	Gender=Masc|Number=Plur	7	nsubj	_	_
3	de	de	ADP	IN	_	5	case	_	_
4	l'	le	DET	DT	Number=Sing	5	det	_	SpaceAfter=No
5	AKP	AKP	PROPN	NNP	Number=Sing	2	nmod	_	_
6	se	se	PRON	PRP	Gender=Masc|Number=Plur|Person=3	7	obj	_	_
7	servent	servir	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	aujourd	aujourd	ADV	RB	_	7	obl:mod	_	wordform=aujourd'hui
9	hui	hui	X	GW	_	8	goeswith	_	wordform=_
10	de	de	ADP	IN	_	12	case	_	_
11	ce	ce	DET	DT	Gender=Masc|Number=Sing	12	det	_	_
12	refus	refus	NOUN	NN	Gender=Masc|Number=Sing	7	obl	_	_
13	pour	pour	ADP	IN	_	14	mark	_	_
14	justifier	justifier	VERB	VB	VerbForm=Inf	7	advcl	_	_
15	les	le	DET	DT	Gender=Fem|Number=Plur	16	det	_	_
16	interpellations	interpellation	NOUN	NN	Gender=Fem|Number=Plur	14	obj	_	SpaceAfter=No
17	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	À	à	ADP	INDT	_	3	case	_	wordform=à
2	le	le	DET	_	Gender=Masc|Number=Sing	3	det	_	_
3	parc	parc	NOUN	NN	Gender=Masc|Number=Sing	19	obl	_	_
4	de	de	ADP	IN	_	6	case	_	_
5	la	le	DET	DT	Gender=Fem|Number=Sing	6	det	_	_
6	Porte-d’	Porte-d’	NOUN	NN	Gender=Fem|Number=Sing	3	nmod	_	Proper=True|wordform=porte-d’or
7	Or	Or	X	GW	_	6	goeswith	_	Proper=True|SpaceAfter=No|wordform=_
8	,	,	PUNCT	,	_	11	punct	_	_
9	qui	qui	PRON	WP	Gender=Masc|Number=Sing	11	nsubj	_	_
10	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	long	long	ADJ	JJ	Gender=Masc|Number=Sing	3	acl:relcl	_	_
12	de	de	ADP	IN	_	16	case	_	_
13	plus	plus	ADV	RBR	_	15	advmod	_	_
14	de	de	ADP	IN	_	13	fixed	_	_
15	quatre	quatre	NUM	CD	_	16	nummod	_	_
16	kilomètres	kilomètre	NOUN	NN	Gender=Masc|Number=Plur	11	obl	_	SpaceAfter=No
17	,	,	PUNCT	,	_	11	punct	_	_
18	se	se	PRON	PRP	Gender=Masc|Number=Plur|Person=3	19	obj	_	_
19	trouvent	trouver	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
20	un	un	DET	DT	Gender=Masc|Number=Sing	21	det	_	_
21	jardin	jardin	NOUN	NN	Gender=Masc|Number=Sing	19	nsubj	_	_
22	botanique	botanique	ADJ	JJ	Gender=Masc|Number=Sing	21	amod	_	SpaceAfter=No
23	,	,	PUNCT	,	_	25	punct	_	_
24	un	un	DET	DT	Gender=Masc|Number=Sing	25	det	_	_
25	planétarium	planétarium	NOUN	NN	Gender=Masc|Number=Sing	21	conj	_	SpaceAfter=No
26	,	,	PUNCT	,	_	28	punct	_	_
27	un	un	DET	DT	Gender=Masc|Number=Sing	28	det	_	_
28	jardin	jardin	NOUN	NN	Gender=Masc|Number=Sing	21	conj	_	_
29	japonais	japonais	ADJ	JJ	Gender=Masc|Number=Sing	28	amod	_	_
30	et	et	CCONJ	CC	_	32	cc	_	_
31	un	un	DET	DT	Gender=Masc|Number=Sing	32	det	_	_
32	aquarium	aquarium	NOUN	NN	Gender=Masc|Number=Sing	21	conj	_	SpaceAfter=No
33	.	.	PUNCT	.	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 goeswith	color:blue
1	L’	le	DET	DT	Gender=Masc|Number=Sing	2	det	_	SpaceAfter=No|wordform=l'
2	hôtel	hôtel	NOUN	NN	Gender=Masc|Number=Sing	19	nsubj:pass	_	_
3	de	de	ADP	IN	_	4	case	_	_
4	ville	ville	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	_
5	historique	historique	ADJ	JJ	Gender=Masc|Number=Sing	2	amod	_	_
6	d’	de	ADP	IN	_	7	case	_	SpaceAfter=No|wordform=d'
7	Obermarsberg	Obermarsberg	PROPN	NNP	Number=Sing	2	nmod	_	SpaceAfter=No
8	,	,	PUNCT	,	_	10	punct	_	_
9	qui	qui	PRON	WP	Gender=Masc|Number=Sing	10	nsubj	_	_
10	remonte	remonter	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
11	à	à	ADP	INDT	_	15	case	_	_
12	le	le	DET	_	Gender=Masc|Number=Sing	15	det	_	_
13	XVIII	XVIII	NUM	CD	_	15	nummod	_	wordform=XVIIIème
14	ème	ème	X	GW	_	13	goeswith	_	wordform=_
15	siècle	siècle	NOUN	NN	Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
16	,	,	PUNCT	,	_	10	punct	_	_
17	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	aux:tense	_	_
18	été	être	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	19	aux:pass	_	_
19	remis	remettre	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
20	en	en	ADP	IN	_	21	case	_	_
21	état	état	NOUN	NN	Gender=Masc|Number=Sing	19	obl	_	_
22	après	après	ADP	IN	_	24	case	_	_
23	la	le	DET	DT	Gender=Fem|Number=Sing	24	det	_	_
24	guerre	guerre	NOUN	NN	Gender=Fem|Number=Sing	19	obl	_	Proper=True
25	de	de	ADP	IN	_	27	case	_	Proper=True
26	Trente	trente	NUM	CD	_	27	nummod	_	Proper=True|wordform=trente
27	Ans	an	NOUN	NN	Gender=Masc|Number=Plur	24	nmod	_	Proper=True|SpaceAfter=No|wordform=ans
28	.	.	PUNCT	.	_	19	punct	_	_

~~~


