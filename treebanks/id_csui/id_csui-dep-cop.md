---
layout: base
title:  'Statistics of cop in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `cop`

This relation is universal.

35 nodes (0%) are attached to their parents as `cop`.

35 instances of `cop` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31428571428571.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (15; 43% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (7; 20% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (7; 20% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (4; 11% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cop	color:blue
1	Nominal	nominal	NOUN	NN	Number=Sing	9	nsubj	_	_
2	per	per	ADP	IN	_	3	case	_	_
3	unit	unit	NOUN	NN	Number=Sing	1	nmod	_	_
4	dua	dua	NUM	CD	NumType=Card	5	nummod	_	_
5	obligasi	obligasi	NOUN	NN	Number=Sing	1	nmod	_	_
6	negara	negara	NOUN	NN	Number=Sing	5	nmod	_	_
7	itu	itu	DET	DT	PronType=Dem	1	det	_	_
8	adalah	adalah	AUX	VBZ	_	9	cop	_	_
9	Rp	Rp	NOUN	NN	Number=Sing	0	root	_	SpaceAfter=No
10	1	1	NUM	CD	NumType=Card	9	nummod	_	_
11	juta	juta	NUM	CD	NumType=Card	10	flat	_	SpaceAfter=No
12	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cop	color:blue
1	Seluruh	seluruh	DET	DT	PronType=Tot	3	det	_	_
2	'	'	PUNCT	``	_	3	punct	_	SpaceAfter=No
3	outlook	outlook	X	FW	Foreign=Yes	10	nsubj	_	SpaceAfter=No
4	'	'	PUNCT	''	_	3	punct	_	_
5	prospek	prospek	NOUN	NN	Number=Sing	3	nmod	_	_
6	untuk	untuk	ADP	IN	_	7	case	_	_
7	peringkat	peringkat	NOUN	NN	Number=Sing	3	nmod	_	_
8	tersebut	sebut	DET	DT	PronType=Dem	7	det	_	_
9	adalah	adalah	AUX	VBZ	_	10	cop	_	_
10	stabil	stabil	ADJ	JJ	_	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Perusahaan	usaha	NOUN	NN	Number=Sing	4	nsubj	_	_
2	tersebut	sebut	DET	DT	PronType=Dem	1	det	_	_
3	adalah	adalah	AUX	VBZ	_	4	cop	_	_
4	PT	PT	PROPN	NNP	_	0	root	_	_
5	Dinamika	Dinamika	PROPN	NNP	_	4	flat:name	_	_
6	Reinsurance	Reinsurance	PROPN	NNP	_	4	flat:name	_	_
7	Broker	Broker	PROPN	NNP	_	4	flat:name	_	_
8	pialang	pialang	NOUN	NN	Number=Sing	4	nmod	_	_
9	reasuransi	reasuransi	NOUN	NN	Number=Sing	8	nmod	_	_
10	dan	dan	CCONJ	CC	_	11	cc	_	_
11	PT	PT	PROPN	NNP	_	4	conj	_	_
12	Primasindo	Primasindo	PROPN	NNP	_	11	flat:name	_	_
13	Insurance	Insurance	PROPN	NNP	_	11	flat:name	_	_
14	Brokers	Brokers	PROPN	NNP	_	11	flat:name	_	_
15	pialang	pialang	NOUN	NN	Number=Sing	11	nmod	_	_
16	asuransi	asuransi	NOUN	NN	Number=Sing	15	nmod	_	SpaceAfter=No
17	.	.	PUNCT	.	_	4	punct	_	_

~~~


