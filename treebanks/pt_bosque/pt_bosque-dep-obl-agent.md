---
layout: base
title:  'Statistics of obl:agent in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-obl.html">obl</a></tt>.

726 nodes (0%) are attached to their parents as `obl:agent`.

722 instances of `obl:agent` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.30578512396694.

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (457; 63% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (244; 34% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (12; 2% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:agent	color:blue
1	Fui	ser	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	2	aux:pass	_	_
2	procurado	procurar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	por	por	ADP	_	_	5	case	_	_
4	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	ladrões	ladrão	NOUN	_	Gender=Masc|Number=Plur	2	obl:agent	_	_
6	para	para	SCONJ	_	_	7	mark	_	_
7	comprar	comprar	VERB	_	VerbForm=Inf	2	advcl	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	carga	carga	NOUN	_	Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:agent	color:blue
1	Inquirido	inquirir	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	9	advcl	_	_
2	por	por	ADP	_	_	4	case	_	_
3	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	PÚBLICO	Público	PROPN	_	Gender=Masc|Number=Sing	1	obl:agent	_	SpaceAfter=No
5	,	,	PUNCT	_	_	1	punct	_	_
6	Mário	Mário	PROPN	_	ExtPos=PROPN|Gender=Masc|Number=Sing	9	nsubj	_	_
7	Brandão	Brandão	PROPN	_	Number=Sing	6	flat:name	_	_
8	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	cop	_	_
9	lacónico	lacónico	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
10	:	:	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:agent	color:blue
1	Elas	elas	PRON	_	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	estão	estar	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	separadas	separado	ADJ	_	Gender=Fem|Number=Plur	0	root	_	_
4	por	por	ADP	_	_	5	case	_	_
5	espaços	espaço	NOUN	_	Gender=Masc|Number=Plur	3	obl:agent	_	_
6	de	de	ADP	_	_	8	case	_	_
7	80	80	NUM	_	NumType=Card	8	nummod	_	_
8	km	km	NOUN	_	Gender=Masc|Number=Plur	5	nmod	_	_
9	a	a	ADP	_	_	11	case	_	_
10	100	100	NUM	_	NumType=Card	11	nummod	_	_
11	km	km	NOUN	_	Gender=Masc|Number=Plur	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


