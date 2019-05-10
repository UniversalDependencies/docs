---
layout: base
title:  'Statistics of iobj in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `iobj`

This relation is universal.

366 nodes (1%) are attached to their parents as `iobj`.

355 instances of `iobj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19945355191257.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (363; 99% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-X.html">X</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 iobj	color:blue
1	je	je	PRON	_	_	2	nsubj	_	_
2	vois	voir	VERB	DISCOURSE	_	10	parataxis:discourse	_	_
3	euh	euh	INTJ	_	_	2	discourse	_	_
4	moi	lui	PRON	_	_	10	dislocated	_	_
5	la	le	DET	_	_	6	det	_	_
6	fac	fac	NOUN	_	_	10	dislocated	_	_
7	ça	ça	PRON	_	_	10	nsubj	_	_
8	m'	me	PRON	_	_	10	iobj	_	_
9	a	avoir	AUX	_	_	10	aux	_	_
10	fait	faire	VERB	_	_	0	root	_	_
11	beaucoup	beaucoup	PRON	_	_	10	obj	_	_
12	de	de	ADP	_	_	13	case	_	_
13	bien	bien	NOUN	_	_	11	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 iobj	color:blue
1	les	le	DET	_	_	2	det	_	_
2	fêtes	fête	NOUN	_	_	7	nsubj	_	_
3	y	y	PRON	_	_	7	iobj	_	_
4	sont	être	AUX	_	_	7	cop	_	_
5	plus	plus	ADV	_	_	7	advmod	_	_
6	plus	plus	PART	conj:reform	_	5	conj:dicto	_	_
7	nombreuses	nombreux	ADJ	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 iobj	color:blue
1	je	je	PRON	_	_	4	nsubj	_	_
2	n~	n~	PART	_	_	4	iobj	_	_
3	me	me	PRON	_	_	2	conj:dicto	_	_
4	demande	demander	VERB	_	_	0	root	_	_
5	d'	d'	ADP	_	_	6	case	_	_
6	ailleurs	ailleurs	ADV	_	_	4	advmod	_	_
7	si	si	SCONJ	_	_	41	mark	_	_
8	euh	euh	INTJ	_	_	41	discourse	_	_
9	l'	le	DET	_	_	10	det	_	_
10	arrivée	arrivé	NOUN	_	_	41	nsubj	_	_
11	du	de+le	ADP	_	_	12	case	_	_
12	berger	berger	NOUN	_	_	10	nmod	_	_
13	dans	dans	ADP	_	_	15	case	_	_
14	Le	le	DET	_	_	15	det	_	_
15	roi	roi	NOUN	_	_	10	nmod	_	_
16	Roger	Roger	PROPN	_	_	15	appos:nmod	_	_
17	ce	ce	DET	_	_	18	det	_	_
18	berger	berger	NOUN	_	_	12	appos:conj	_	_
19	qui	qui	PRON	_	_	21	nsubj	_	_
20	euh	euh	INTJ	_	_	19	discourse	_	_
21	amène	amener	VERB	_	_	18	acl:relcl	_	_
22	d'	de	ADP	_	_	23	case	_	_
23	autres	autre	ADJ	_	_	21	obl:comp	_	_
24	d'	de	ADP	_	_	26	case	_	_
25	autres	autre	ADJ	_	_	26	amod	_	_
26	valeurs	valeur	NOUN	_	_	23	conj:dicto	_	_
27	d'	de	ADP	_	_	29	case	_	_
28	autres	autre	ADJ	_	_	29	amod	_	_
29	YYY	YYY	PROPN	_	_	26	conj:dicto	_	_
30	si	si	SCONJ	_	_	32	mark	_	_
31	vous	vous	PRON	_	_	32	nsubj	_	_
32	voulez	vouloir	VERB	DISCOURSE	_	29	parataxis:discourse	_	_
33	dans	dans	ADP	_	_	35	case	_	_
34	un	un	DET	_	_	35	det	_	_
35	monde	monde	NOUN	_	_	21	obl:mod	_	_
36	qui	qui	PRON	_	_	38	nsubj:pass	_	_
37	est	être	AUX	_	_	38	aux:pass	_	_
38	figé	figer	VERB	_	_	35	acl:relcl	_	_
39	euh	euh	INTJ	_	_	38	discourse	_	_
40	ne	ne	PART	_	_	41	advmod	_	_
41	rappelle	rappeler	VERB	_	_	4	ccomp	_	_
42	pas	pas	PART	_	_	41	advmod	_	_
43	un	un	DET	_	_	41	advmod	_	_
44	peu	peu	NOUN	_	_	43	fixed	_	_
45	l'	le	DET	_	_	46	det	_	_
46	arrivée	arrivé	NOUN	_	_	41	obj	_	_
47	de	de	ADP	_	_	48	case	_	_
48	Lohengrin	Lohengrin	PROPN	_	_	46	nmod	_	_

~~~


