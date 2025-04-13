---
layout: base
title:  'Statistics of ccomp in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="pt_dantestocks-dep-ccomp-speech.html">ccomp:speech</a></tt>.

261 nodes (0%) are attached to their parents as `ccomp`.

261 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.75095785440613.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (196; 75% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (31; 12% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (11; 4% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt> (7; 3% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt> (7; 3% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
1	esqueceram	esquecer	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	que	que	SCONJ	_	_	7	mark	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	#PRML3	#PRML3	PROPN	_	_	7	nsubj	_	_
5	ou	ou	CCONJ	_	_	6	cc	_	_
6	#LLXL3	#LLXL3	PROPN	_	_	4	conj	_	_
7	sairia	sair	VERB	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	1	ccomp	_	_
8	de	de	ADP	_	_	10	case	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	indice	índice	NOUN	_	Gender=Masc|Number=Sing|Typo=Yes	7	obl	_	CorrectForm=índice|SpaceAfter=No
11	?	?	PUNCT	_	_	1	punct	_	SpaceAfter=No
12	!	!	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 ccomp	color:blue
1	@BlackWizardX	@BlackWizardX	PROPN	_	_	3	vocative	_	_
2	bom	bom	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
3	dia	dia	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
4	Black	Black	PROPN	_	_	3	vocative	_	SpaceAfter=No
5	!	!	PUNCT	_	_	3	punct	_	_
6	Acho	achar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
7	q	que	SCONJ	_	_	10	mark	_	FullForm=que
8	hoje	hoje	NOUN	_	_	10	nsubj	_	_
9	eh	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	10	cop	_	CorrectForm=é
10	dia	dia	NOUN	_	Gender=Masc|Number=Sing	6	ccomp	_	_
11	de	de	ADP	_	_	13	case	_	_
12	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	vale5	vale5	PROPN	_	_	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Goldman	Goldman	PROPN	_	_	3	nsubj	_	_
2	Sachs	Sachs	PROPN	_	_	1	flat:name	_	_
3	diz	dizer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	_	_	6	mark	_	_
5	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	bom	bom	ADJ	_	Gender=Masc|Number=Sing	3	ccomp	_	_
7	vender	vender	VERB	_	VerbForm=Inf	6	csubj	_	_
8	CSNA3	CSNA3	PROPN	_	_	7	obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	por	por	ADP	_	_	11	case	_	_
11	dívidas	dívida	NOUN	_	Gender=Fem|Number=Plur	6	obl	_	_
12	e	e	CCONJ	_	_	13	cc	_	_
13	resultados	resultado	NOUN	_	Gender=Masc|Number=Plur	11	conj	_	_
14	abaixo	abaixo	ADV	_	_	13	advmod	_	_
15	de	de	ADP	_	_	16	case	_	_
16	os	o	PRON	_	Gender=Masc|Number=Plur|PronType=Dem	14	obl	_	_
17	esperados	esperar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	16	acl	_	SpaceAfter=No
18	...	...	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


