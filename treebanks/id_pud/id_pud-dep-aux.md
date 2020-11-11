---
layout: base
title:  'Statistics of aux in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `aux`

This relation is universal.

309 nodes (2%) are attached to their parents as `aux`.

309 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13915857605178.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-AUX.html">AUX</a></tt> (290; 94% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-AUX.html">AUX</a></tt> (16; 5% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-AUX.html">AUX</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
2	Toh	toh	INTJ	_	_	6	discourse	_	_
3	saya	saya	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
4	tetap	tetap	ADV	_	_	6	advmod	_	_
5	akan	akan	AUX	_	_	6	aux	_	_
6	masuk	masuk	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
7	penjara	penjara	NOUN	_	Number=Sing	6	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	semoga	moga	ADV	_	_	10	advmod	_	_
10	sepadan	padan	ADJ	_	_	6	parataxis	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No
12	"	"	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Mengandung	kandung	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
2	satu	satu	NUM	_	NumType=Card	3	nummod	_	_
3	laguna	laguna	NOUN	_	Number=Sing	1	obj	_	_
4	kecil	kecil	ADJ	_	_	3	amod	_	_
5	tapi	tetapi	CCONJ	_	_	7	cc	_	_
6	sudah	sudah	AUX	_	_	7	aux	_	_
7	kering	kering	ADJ	_	_	4	conj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 aux	color:blue
1	Ketika	ketika	ADV	_	PronType=Rel	3	advmod	_	_
2	orang	orang	NOUN	_	Number=Sing	3	nsubj	_	_
3	meninggal	tinggal	VERB	_	Mood=Ind|Voice=Act	14	advcl	_	_
4	karena	karena	ADP	_	_	5	case	_	_
5	usia	usia	NOUN	_	Number=Sing	3	obl	_	_
6	tua	tua	ADJ	_	_	5	amod	_	_
7	di	di	ADP	_	_	8	case	_	_
8	India	India	PROPN	_	_	3	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	3	punct	_	_
10	seharusnya	harus	AUX	_	_	14	aux	_	_
11	itu	itu	PRON	_	PronType=Dem	14	nsubj	_	_
12	adalah	adalah	AUX	_	_	14	cop	_	_
13	sebuah	buah	DET	_	Number=Sing|PronType=Ind	14	det	_	_
14	perayaan	raya	NOUN	_	Number=Sing	0	root	_	SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


