---
layout: base
title:  'Statistics of nsubj:pass in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-nsubj.html">nsubj</a></tt>.

999 nodes (0%) are attached to their parents as `nsubj:pass`.

854 instances of `nsubj:pass` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.95495495495495.

The following 11 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (710; 71% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (166; 17% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (82; 8% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (14; 1% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-SYM.html">SYM</a></tt> (5; 1% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	anúncio	anúncio	NOUN	_	Gender=Masc|Number=Sing	5	nsubj:pass	_	_
3	oficial	oficial	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
4	será	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	aux:pass	_	_
5	feito	fazer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
6	após	após	ADP	_	_	8	case	_	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	dia	dia	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	_
9	20	20	NUM	_	NumType=Card	8	nummod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	acusado	acusar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	de	de	ADP	_	_	5	case	_	_
5	vandalismo	vandalismo	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Welles	Welles	PROPN	_	Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	mandado	mandar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	como	como	ADP	_	_	6	case	_	_
5	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	espécie	espécie	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	_
7	de	de	ADP	_	_	8	case	_	_
8	embaixador	embaixador	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
9	cultural	cultural	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


