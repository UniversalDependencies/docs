---
layout: base
title:  'Statistics of cc:preconj in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-cc.html">cc</a></tt>.

12 nodes (0%) are attached to their parents as `cc:preconj`.

12 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08333333333333.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (5; 42% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (3; 25% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 17% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Tanto	tanto	ADV	RB	_	3	cc:preconj	_	_
2	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	investigación	investigación	NOUN	NN	Gender=Fem|Number=Sing	10	nsubj	_	_
4	como	como	ADP	IN	_	6	cc	_	_
5	las	el	DET	DT	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	expediciones	expedición	NOUN	NN	Gender=Fem|Number=Plur	3	conj	_	_
7	a	a	ADP	IN	_	9	case	_	_
8	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	isla	isla	NOUN	NN	Gender=Fem|Number=Sing	6	nmod	_	_
10	continúan	continuar	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 cc:preconj	color:blue
1	Nicolai	Nicolai	PROPN	NNP	Gender=Masc|Number=Sing	2	nsubj	_	_
2	colabora	colaborar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	con	con	ADP	IN	_	5	case	_	_
4	varias	vario	DET	DT	Gender=Fem|Number=Plur|PronType=Ind	5	det	_	_
5	pistas	pista	NOUN	NN	Gender=Fem|Number=Plur	2	obl	_	_
6	cinematográficas	cinematográfico	ADJ	JJ	Gender=Fem|Number=Plur	5	amod	_	_
7	tanto	tanto	ADV	RB	_	9	cc:preconj	_	_
8	de	de	ADP	IN	_	9	case	_	_
9	Morricone	Morricone	PROPN	NNP	Gender=Masc|Number=Sing	5	nmod	_	_
10	como	como	ADP	IN	_	11	cc	_	_
11	Metti	Metti	PROPN	NNP	Gender=Masc|Number=Sing	9	conj	_	SpaceAfter=No
12	,	,	PUNCT	,	_	13	punct	_	_
13	juntos	junto	ADJ	JJ	Gender=Masc|Number=Plur	9	amod	_	_
14	en	en	ADP	IN	_	16	case	_	_
15	una	uno	DET	DT	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	noche	noche	NOUN	NN	Gender=Fem|Number=Sing	13	obl	_	_
17	en	en	ADP	IN	_	19	case	_	_
18	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	cena	cena	NOUN	NN	Gender=Fem|Number=Sing	13	obl	_	SpaceAfter=No
20	;	;	PUNCT	:	_	23	punct	_	_
21	algunas	alguno	NOUN	NN	Gender=Fem|Number=Plur	23	nsubj:pass	_	_
22	eran	ser	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	23	aux:pass	_	_
23	escritas	escribir	VERB	VBN	Gender=Fem|Number=Plur|VerbForm=Fin	2	parataxis	_	_
24	por	por	ADP	IN	_	25	case	_	_
25	ambos	ambos	NOUN	NN	Gender=Masc|Number=Plur	23	obl	_	SpaceAfter=No
26	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cc:preconj	color:blue
1	¿	¿	PUNCT	.	_	5	punct	_	SpaceAfter=No
2	O	o	CCONJ	CC	_	5	cc:preconj	_	_
3	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	estándar	estándar	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
6	o	o	CCONJ	CC	_	7	cc	_	_
7	tarifa	tarifa	NOUN	NN	Gender=Fem|Number=Sing	5	conj	_	_
8	de	de	ADP	IN	_	9	case	_	_
9	pago	pago	NOUN	NN	Gender=Masc|Number=Sing	7	nmod	_	_
10	anticipado	anticipado	ADJ	JJ	Gender=Masc|Number=Sing	9	amod	_	_
11	cara	caro	ADJ	JJ	Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
12	?	?	PUNCT	.	_	5	punct	_	_

~~~


