---
layout: base
title:  'Statistics of csubj in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `csubj`

This relation is universal.

5 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.4.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (3; 60% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	n'	ne	ADV	_	_	2	advmod	_	_
2	importe	importe	VERB	_	_	4	csubj	_	_
3	qui	qui	PRON	_	_	2	fixed	_	_
4	pourrait	pouvoir	VERB	_	_	0	root	_	_
5	pas	pas	ADV	_	_	4	advmod	_	_
6	être	être	AUX	_	_	7	cop	_	_
7	chirurgien	chirurgien	NOUN	_	_	4	xcomp	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj	color:blue
1	servir	servir	VERB	_	_	7	csubj	_	_
2	à	à	ADP	_	_	4	case	_	_
3	quelque	quelque	DET	_	_	4	det	_	_
4	chose	chose	NOUN	_	_	1	obl:arg	_	_
5	est	être	AUX	_	_	7	cop	_	_
6	quelque	quelque	DET	_	_	7	det	_	_
7	chose	chose	NOUN	_	_	0	root	_	_
8	qui	qui	PRON	_	_	10	nsubj	_	_
9	me	me	PRON	_	_	10	obj	_	_
10	préoccupe	préoccuper	VERB	_	_	7	acl:relcl	_	_
11	tout	tout	ADV	_	_	13	advmod	_	_
12	le	le	DET	_	_	13	det	_	_
13	temps	temps	NOUN	_	_	10	obl:mod	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 29 csubj	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	pour	pour	ADP	_	_	4	case	_	_
3	le	le	DET	_	_	4	det	_	_
4	coup	coup	NOUN	_	_	6	nmod	_	_
5	cette	ce	DET	_	_	6	det	_	_
6	dimension	dimension	NOUN	_	_	8	reparandum	_	_
7	euh	euh	INTJ	_	_	6	discourse	_	_
8	spécialité	spécialité	NOUN	conj:reform	_	0	root	_	_
9	de	de	ADP	_	_	11	case	_	_
10	la	le	DET	_	_	11	det	_	_
11	médecine	médecine	NOUN	_	_	8	nmod	_	_
12	qui	qui	PRON	_	_	16	nsubj:pass	_	_
13	est	être	AUX	_	_	16	aux:pass	_	_
14	encore	encore	ADV	_	_	15	advmod	_	_
15	plus	plus	ADV	_	_	16	advmod	_	_
16	renforcée	renforcer	VERB	_	_	8	acl:relcl	_	_
17	parce	parce	SCONJ	_	_	26	mark	_	_
18	que	que	SCONJ	_	_	17	fixed	_	_
19	mh	mh	INTJ	_	_	26	discourse	_	_
20	mh	mh	INTJ	_	_	26	discourse	_	_
21	pour	pour	ADP	_	_	22	mark	_	_
22	gagner	gagner	VERB	_	_	26	advcl	_	_
23	encore	encore	ADV	_	_	24	advmod	_	_
24	plus	plus	ADV	_	_	22	obj	_	_
25	il	il	PRON	_	_	26	expl:subj	_	_
26	faut	falloir	VERB	_	_	16	advcl	_	_
27	être	être	AUX	_	_	29	cop	_	_
28	le	le	DET	_	_	29	det	_	_
29	spécialiste	spécialiste	NOUN	_	_	26	csubj	_	_
30	de	de	ADP	_	_	32	case	_	_
31	le	le	DET	_	_	32	det	_	_
32	spécialiste	spécialiste	NOUN	_	_	29	nmod	_	_
33	de	de	ADP	_	_	35	case	_	_
34	le	le	DET	_	_	35	det	_	_
35	spécialiste	spécialiste	NOUN	_	_	32	nmod	_	_

~~~


