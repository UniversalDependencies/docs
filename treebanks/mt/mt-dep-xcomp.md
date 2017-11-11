---
layout: base
title:  'Statistics of xcomp in UD_Maltese'
udver: '2'
---

## Treebank Statistics: UD_Maltese: Relations: `xcomp`

This relation is universal.

26 nodes (1%) are attached to their parents as `xcomp`.

26 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.69230769230769.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-VERB.html">VERB</a></tt> (17; 65% instances), <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-NOUN.html">NOUN</a></tt> (4; 15% instances), <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="mt-pos-DET.html">DET</a></tt>-<tt><a href="mt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="mt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Studenti	_	PROPN	NP	_	2	nsubj	_	_
2	jistgħu	_	VERB	VV	_	0	root	_	_
3	japplikaw	_	VERB	VV	_	2	xcomp	_	_
4	ukoll	_	ADV	MV	_	2	advmod	_	_
5	.	_	PUNCT	PUN	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 xcomp	color:blue
1	Qatta'	_	VERB	VV	_	0	root	_	_
2	t-	_	DET	DDC	Definite=Def|PronType=Art	3	det	_	SpaceAfter=No
3	tadam	_	NOUN	NN	_	1	obj	_	_
4	u	_	CCONJ	CC	_	6	cc	_	_
5	l-	_	DET	DDC	Definite=Def|PronType=Art	6	det	_	SpaceAfter=No
6	faqqiegħ	_	NOUN	NN	_	3	conj	_	_
7	irqiq	_	NOUN	NN	_	1	xcomp	_	_
8	u	_	CCONJ	CC	_	9	cc	_	_
9	qaxxar	_	VERB	VV	_	1	conj	_	_
10	it-	_	DET	DDC	Definite=Def|PronType=Art	11	det	_	SpaceAfter=No
11	tuffieħa	_	NOUN	NN	_	9	obj	_	_
12	;	_	PUNCT	PUN	_	1	punct	_	_
13	neħħilha	_	VERB	VV	_	1	parataxis	_	_
14	l-	_	DET	DDC	Definite=Def|PronType=Art	15	det	_	SpaceAfter=No
15	qalba	_	NOUN	NN	_	13	obj	_	_
16	u	_	CCONJ	CC	_	17	cc	_	_
17	qattagħha	_	ADP	PMP	AdpType=Preppron	15	conj	_	_
18	.	_	PUNCT	PUN	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 xcomp	color:blue
1	It-	_	DET	DDC	Definite=Def|PronType=Art	2	det	_	SpaceAfter=No
2	Trattat	_	NOUN	NN	_	14	nsubj	_	_
3	ta'	_	ADP	PRP	AdpType=Prep	4	case	_	_
4	Liżbona	_	NOUN	NN	_	2	nmod	_	_
5	li	_	SCONJ	CMP	_	6	mark	_	_
6	daħal	_	VERB	VV	_	2	acl	_	_
7	fis-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	8	case	_	SpaceAfter=No
8	seħħ	_	NOUN	NN	_	6	obl	_	_
9	fl-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	10	case	_	SpaceAfter=No
10	aħħar	_	ADJ	MJ	_	6	obl	_	_
11	tal-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	12	case	_	SpaceAfter=No
12	2009	_	NUM	NC	NumType=Card	10	nummod	_	_
13	kien	_	AUX	VA	_	14	cop	_	_
14	pass	_	NOUN	NN	_	0	root	_	_
15	il-	_	DET	DDC	Definite=Def|PronType=Art	21	conj	_	SpaceAfter=No
16	quddiem	_	ADP	PRP	AdpType=Prep	21	mark	_	_
17	biex	_	SCONJ	CS	_	21	mark	_	_
18	l-	_	DET	DDC	Definite=Def|PronType=Art	19	det	_	SpaceAfter=No
19	Unjoni	_	NOUN	NN	_	21	nsubj	_	_
20	Ewropea	_	ADJ	MJ	_	19	amod	_	_
21	ssir	_	VERB	VV	_	14	acl	_	_
22	iżjed	_	ADJ	MJ	_	23	amod	_	_
23	effiċjenti	_	ADJ	MJ	_	21	xcomp	_	_
24	u	_	CCONJ	CC	_	25	cc	_	_
25	demokratika	_	ADJ	MJ	_	23	conj	_	_
26	.	_	PUNCT	PUN	_	14	punct	_	_

~~~


