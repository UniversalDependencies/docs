---
layout: base
title:  'Statistics of nsubj:pass in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="es_gsd-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="es_gsd-dep-nsubj-outer.html">nsubj:outer</a></tt>.

1256 nodes (0%) are attached to their parents as `nsubj:pass`.

1190 instances of `nsubj:pass` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.59952229299363.

The following 16 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt> (852; 68% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (196; 16% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (178; 14% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	Según	según	ADP	_	_	2	case	_	_
2	figura	figurar	NOUN	_	Gender=Fem|Number=Sing	10	obl	_	_
3	en	en	ADP	_	_	5	case	_	_
4	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	portada	portada	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	_	PunctType=Comm	2	punct	_	_
7	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	libro	libro	NOUN	_	Gender=Masc|Number=Sing	10	nsubj:pass	_	_
9	fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	aux:pass	_	_
10	publicado	publicar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
11	en	en	ADP	_	_	12	case	_	_
12	1535	1535	NUM	_	NumForm=Digit|NumType=Card	10	obl	_	SpaceAfter=No
13	;	;	PUNCT	_	PunctType=Semi	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:pass	color:blue
1	Esta	este	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	4	nsubj	_	_
2	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	lista	lista	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
5	de	de	ADP	_	_	6	case	_	_
6	animales	animal	NOUN	_	Gender=Masc|Number=Plur	4	nmod	_	_
7	que	que	PRON	_	PronType=Rel	9	nsubj:pass	_	_
8	son	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	_
9	considerados	considerar	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	6	acl:relcl	_	_
10	impuros	impuro	ADJ	_	Gender=Masc|Number=Plur	9	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	_	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Trudón	Trudón	PROPN	_	_	3	nsubj:pass	_	_
2	fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	enterrado	enterrar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	en	en	ADP	_	_	6	case	_	_
5	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	iglesia	iglesia	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	_
7	de	de	ADP	_	_	9	case	_	_
8	su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	9	det	_	_
9	monasterio	monasterio	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	PunctType=Peri	3	punct	_	_

~~~


