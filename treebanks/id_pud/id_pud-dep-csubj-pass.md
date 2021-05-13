---
layout: base
title:  'Statistics of csubj:pass in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-csubj.html">csubj</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:pass`.

2 instances of `csubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.5.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 csubj:pass	color:blue
1	Bermain	main	VERB	_	Mood=Ind|Voice=Act	9	csubj:pass	_	_
2	seri	seri	ADJ	_	_	1	advmod	_	_
3	dalam	dalam	ADP	_	_	4	case	_	_
4	permainan	main	NOUN	_	Number=Sing	1	obl	_	_
5	yang	yang	SCONJ	_	_	8	mark	_	_
6	telah	telah	AUX	_	_	8	aux	_	_
7	Anda	anda	PRON	_	Number=Sing|Person=2|PronType=Prs	8	nsubj	_	_
8	dominasi	dominasi	VERB	_	Mood=Ind|Voice=Act	4	acl:relcl	_	_
9	mudah	mudah	ADJ	_	_	0	root	_	_
10	saja	saja	ADV	_	_	9	advmod	_	_
11	diabaikan	abai	VERB	_	Mood=Ind|Voice=Pass	9	advcl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	19	punct	_	_
13	tapi	tetapi	CCONJ	_	_	19	cc	_	_
14	melakukan	laku	VERB	_	Mood=Ind|Voice=Act	19	csubj	_	_
15	nya	nya	PRON	_	Number=Sing|Person=3|PronType=Prs	14	obj	_	_
16	tiga	tiga	NUM	_	NumType=Card	17	nummod	_	_
17	kali	kali	NOUN	_	Number=Sing	14	obl	_	_
18	berturut-turut	turut	VERB	_	Mood=Ind|Voice=Act	17	acl	_	_
19	menunjukkan	tunjuk	VERB	_	Mood=Ind|Voice=Act	11	conj	_	_
20	kelemahan	lemah	NOUN	_	Number=Sing	19	obj	_	SpaceAfter=No
21	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 csubj:pass	color:blue
1	Selain	selain	ADP	_	_	2	case	_	_
2	itu	itu	PRON	_	PronType=Dem	11	obl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	terjadi	jadi	VERB	_	Mood=Ind|Voice=Pass	11	csubj:pass	_	_
5	nya	nya	DET	_	PronType=Dem	4	det	_	_
6	badai	badai	NOUN	_	Number=Sing	4	nsubj:pass	_	_
7	di	di	ADP	_	_	8	case	_	_
8	pulau	pulau	NOUN	_	Number=Sing	6	nmod	_	_
9	ini	ini	DET	_	PronType=Dem	8	det	_	_
10	mungkin	mungkin	AUX	_	_	11	aux	_	_
11	terjadi	jadi	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
12	selama	lama	ADP	_	_	13	case	_	_
13	musim	musim	NOUN	_	Number=Sing	11	obl:tmod	_	_
14	panas	panas	ADJ	_	_	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	11	punct	_	_

~~~


