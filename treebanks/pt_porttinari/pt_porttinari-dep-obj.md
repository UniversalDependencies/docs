---
layout: base
title:  'Statistics of obj in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `obj`

This relation is universal.

7260 nodes (4%) are attached to their parents as `obj`.

6706 instances of `obj` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.95165289256198.

The following 11 pairs of parts of speech are connected with `obj`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (5839; 80% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (910; 13% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (318; 4% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt> (119; 2% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (43; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-X.html">X</a></tt> (25; 0% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 obj	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	equipe	equipe	NOUN	_	Gender=Fem|Number=Sing	8	nsubj:pass	8:nsubj:pass	_
3	de	de	ADP	_	_	4	case	4:case	_
4	Fabio	Fabio	PROPN	_	_	2	nmod	2:nmod:de	_
5	Carille	Carille	PROPN	_	_	4	flat:name	4:flat:name	_
6	não	não	ADV	_	_	8	advmod	8:advmod	_
7	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	8:aux:pass	_
8	montada	montar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	0:root	_
9	para	para	ADP	_	_	10	mark	10:mark	_
10	fazer	fazer	VERB	_	VerbForm=Inf	8	advcl	8:advcl:para	_
11	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	10	obj	10:obj	SpaceAfter=No
12	.	.	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Muitos	muito	ADJ	_	Gender=Masc|Number=Plur	2	amod	2:amod	_
2	russos	russo	NOUN	_	Gender=Masc|Number=Plur	3	nsubj	3:nsubj	_
3	veem	ver	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	5:det	_
5	Ocidente	Ocidente	PROPN	_	_	3	obj	3:obj	_
6	como	como	ADP	_	_	8	case	8:case	_
7	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	8:det	_
8	legião	legião	NOUN	_	Gender=Fem|Number=Sing	3	obl	3:obl:como	_
9	de	de	ADP	_	_	10	case	10:case	_
10	fracos	fraco	NOUN	_	Gender=Masc|Number=Plur	8	nmod	8:nmod:de	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No

~~~


