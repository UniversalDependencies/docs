---
layout: base
title:  'Statistics of root in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `root`

This relation is universal.

8418 nodes (5%) are attached to their parents as `root`.

8418 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.5032074126871.

The following 11 pairs of parts of speech are connected with `root`: -<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (6701; 80% instances), -<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (883; 10% instances), -<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (512; 6% instances), -<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (116; 1% instances), -<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (82; 1% instances), -<tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt> (47; 1% instances), -<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (47; 1% instances), -<tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt> (20; 0% instances), -<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (6; 0% instances), -<tt><a href="pt_porttinari-pos-X.html">X</a></tt> (3; 0% instances), -<tt><a href="pt_porttinari-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
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
16	.	.	PUNCT	_	_	1	punct	1:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 12 root	color:blue
1	Quem	quem	PRON	_	PronType=Rel	12	nsubj	12:nsubj	_
2	encara	encarar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	1:acl:relcl	_
3	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	4:det	_
4	papel	papel	NOUN	_	Gender=Masc|Number=Sing	2	obj	2:obj	_
5	em	em	ADP	_	_	7	case	7:case	_
6	"	"	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
7	55	55	PROPN	_	_	2	obl	2:obl:em	_
8	Steps	Steps	PROPN	_	_	7	flat:name	7:flat:name	SpaceAfter=No
9	"	"	PUNCT	_	_	7	punct	7:punct	_
10	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
11	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	12:det	_
12	inglesa	inglês	NOUN	_	Gender=Fem|Number=Sing	0	root	0:root	_
13	Helena	Helena	PROPN	_	_	12	nmod	12:nmod	_
14	Bonham	Bonham	PROPN	_	_	13	flat:name	13:flat:name	_
15	Carter	Carter	PROPN	_	_	13	flat:name	13:flat:name	SpaceAfter=No
16	.	.	PUNCT	_	_	12	punct	12:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 10 root	color:blue
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
13	.	.	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No

~~~


