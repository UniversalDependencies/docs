---
layout: base
title:  'Statistics of nsubj:pass in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_porttinari-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pt_porttinari-dep-nsubj-outer.html">nsubj:outer</a></tt>.

706 nodes (0%) are attached to their parents as `nsubj:pass`.

649 instances of `nsubj:pass` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.05949008498584.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (515; 73% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (114; 16% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (61; 9% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (10; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt> (4; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-X.html">X</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:pass	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	equipe	equipe	NOUN	_	Gender=Fem|Number=Sing	8	nsubj:pass	_	_
3	de	de	ADP	_	_	4	case	_	_
4	Fabio	Fabio	PROPN	_	_	2	nmod	_	_
5	Carille	Carille	PROPN	_	_	4	flat:name	_	_
6	não	não	ADV	_	_	8	advmod	_	_
7	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	_	_
8	montada	montar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
9	para	para	ADP	_	_	10	mark	_	_
10	fazer	fazer	VERB	_	VerbForm=Inf	8	advcl	_	_
11	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	10	obj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Esta	este	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	4	nsubj:pass	_	_
2	nunca	nunca	ADV	_	_	4	advmod	_	_
3	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	invadida	invadir	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	14	punct	_	_
6	mas	mas	CCONJ	_	_	14	cc	_	_
7	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	duas	dois	NUM	_	Gender=Fem|NumType=Card	14	nsubj	_	_
9	a	a	ADP	_	_	12	case	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
11	seu	seu	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	_	_
12	lado	lado	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	_
13	já	já	ADV	_	_	14	advmod	_	_
14	foram	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	conj	_	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	Em	em	ADP	_	_	3	case	_	_
2	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	papéis	papel	NOUN	_	Gender=Masc|Number=Plur	7	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	Cunha	Cunha	PROPN	_	_	7	nsubj:pass	_	_
6	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
7	identificado	identificar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
8	por	por	ADP	_	_	10	case	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	apelido	apelido	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	_
11	de	de	ADP	_	_	13	case	_	_
12	"	"	PUNCT	_	_	13	punct	_	SpaceAfter=No
13	Bob	Bob	PROPN	_	_	10	nmod	_	SpaceAfter=No
14	"	"	PUNCT	_	_	13	punct	_	SpaceAfter=No
15	.	.	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


