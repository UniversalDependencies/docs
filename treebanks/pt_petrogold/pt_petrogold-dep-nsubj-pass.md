---
layout: base
title:  'Statistics of nsubj:pass in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_petrogold-dep-nsubj.html">nsubj</a></tt>.

3386 nodes (1%) are attached to their parents as `nsubj:pass`.

2192 instances of `nsubj:pass` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.39102185469581.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (2937; 87% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (306; 9% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt> (111; 3% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt> (12; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (10; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nsubj:pass	color:blue
1	Em	em	ADP	_	_	3	case	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	afloramento	afloramento	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	_
4	206	206	NUM	_	NumType=Card	3	nummod	_	_
5	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
6	reconhecida	reconhecer	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	espessa	espesso	ADJ	_	Gender=Fem|Number=Sing	8	amod	_	_
8	zona	zona	NOUN	_	Gender=Fem|Number=Sing	6	nsubj:pass	_	_
9	de	de	ADP	_	_	10	case	_	_
10	deformação	deformação	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Isto	isto	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	4	nsubj:pass	_	_
2	pode	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ser	ser	AUX	_	VerbForm=Inf	4	aux:pass	_	_
4	observado	observar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	2	xcomp	_	_
5	em	em	ADP	_	_	7	case	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Gráfico	gráfico	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	_
8	13	13	NUM	_	NumType=Card	7	nummod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nsubj:pass	color:blue
1	Em	em	ADP	_	_	2	case	_	_
2	caso	caso	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	_
3	de	de	ADP	_	_	4	case	_	_
4	aprovação	aprovação	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
6	emitido	emitir	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Carta	Carta	PROPN	_	Gender=Fem|Number=Sing	6	nsubj:pass	_	_
9	de	de	ADP	_	_	8	flat:name	_	_
10	Aprovação	Aprovação	PROPN	_	Number=Sing	8	flat:name	_	_
11	(	(	PUNCT	_	_	12	punct	_	SpaceAfter=No
12	LoA	LoA	PROPN	_	Gender=Fem|Number=Sing	8	appos	_	SpaceAfter=No
13	)	)	PUNCT	_	_	12	punct	_	SpaceAfter=No
14	.	.	PUNCT	_	_	6	punct	_	_

~~~


