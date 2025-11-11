---
layout: base
title:  'Statistics of det in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `det`

This relation is universal.

24123 nodes (14%) are attached to their parents as `det`.

24068 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09339634373834.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (20338; 84% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (3393; 14% instances), <tt><a href="pt_porttinari-pos-X.html">X</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (156; 1% instances), <tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (121; 1% instances), <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (101; 0% instances), <tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Viver	viver	VERB	_	VerbForm=Inf	0	root	0:root	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	3:det	_
3	vida	vida	NOUN	_	Gender=Fem|Number=Sing	1	obj	1:obj	_
4	real	real	ADJ	_	Number=Sing	3	amod	3:amod	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	7:punct	_
6	em	em	ADP	_	_	7	case	7:case	_
7	vez	vez	NOUN	_	Gender=Fem|Number=Sing	1	obl	1:obl:em	_
8	de	de	ADP	_	_	9	mark	9:mark	_
9	ficar	ficar	VERB	_	VerbForm=Inf	7	acl	7:acl:de	_
10	com	com	ADP	_	_	12	case	12:case	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	12:det	_
12	celular	celular	NOUN	_	Gender=Masc|Number=Sing	9	obl	9:obl:com	_
13	em	em	ADP	_	_	15	case	15:case	_
14	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	15:det	_
15	mão	mão	NOUN	_	Gender=Fem|Number=Sing	12	nmod	12:nmod:em	SpaceAfter=No
16	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Parecer	parecer	NOUN	_	Gender=Masc|Number=Sing	10	nsubj	10:nsubj	_
2	de	de	ADP	_	_	4	case	4:case	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	4:det	_
4	Advocacia-Geral	Advocacia-Geral	PROPN	_	_	1	nmod	1:nmod:de	_
5	enviado	enviar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	1	acl	1:acl	_
6	a	a	ADP	_	_	8	case	8:case	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	8:det	_
8	STF	STF	PROPN	_	_	5	obl	5:obl:a	_
9	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
10	favorável	favorável	ADJ	_	Number=Sing	0	root	0:root	_
11	a	a	ADP	_	_	12	case	12:case	_
12	Aécio	Aécio	PROPN	_	_	10	obl	10:obl:a	SpaceAfter=No
13	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Deputado	deputado	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	3:nsubj|8:nsubj|9:nsubj	_
2	que	que	PRON	_	PronType=Rel	3	nsubj	1:ref	_
3	propôs	propor	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	acl:relcl	1:acl:relcl	_
4	censura	censura	NOUN	_	Gender=Fem|Number=Sing	3	obj	3:obj	_
5	a	a	ADP	_	_	7	case	7:case	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	7:det	_
7	internet	internet	X	_	Foreign=Yes	4	nmod	4:nmod:a	_
8	quer	querer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
9	regular	regular	VERB	_	VerbForm=Inf	8	xcomp	8:xcomp	_
10	bitcoin	bitcoin	X	_	Foreign=Yes	9	obj	9:obj	SpaceAfter=No
11	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


