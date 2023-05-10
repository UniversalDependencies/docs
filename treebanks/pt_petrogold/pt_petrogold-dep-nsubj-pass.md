---
layout: base
title:  'Statistics of nsubj:pass in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_petrogold-dep-nsubj.html">nsubj</a></tt>.

3383 nodes (1%) are attached to their parents as `nsubj:pass`.

2191 instances of `nsubj:pass` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.39136860774461.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (2933; 87% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (306; 9% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt> (111; 3% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt> (13; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (10; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	petróleo	petróleo	NOUN	_	Gender=Masc|Number=Sing	4	nsubj:pass	_	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	descrito	descrever	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
5	conforme	conforme	ADP	_	_	7	case	_	_
6	suas	seu	DET	_	Gender=Fem|Number=Plur|PronType=Prs	7	det	_	_
7	propriedades	propriedade	NOUN	_	Gender=Fem|Number=Plur	4	obl	_	_
8	físicas	físico	ADJ	_	Gender=Fem|Number=Plur	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Eles	eles	PRON	_	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	são	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	dadas	dar	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
4	por	por	ADP	_	_	6	case	_	_
5	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	igualdades	igualdade	NOUN	_	Gender=Fem|Number=Plur	3	obl:agent	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Sinclinal	Sinclinal	PROPN	_	Gender=Masc|Number=Sing	7	nsubj:pass	_	_
3	de	de	ADP	_	_	2	flat:name	_	_
4	Torres	Torres	PROPN	_	Number=Sing	2	flat:name	_	_
5	não	não	ADV	_	Polarity=Neg	7	advmod	_	_
6	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	identificado	identificar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
8	em	em	ADP	_	_	10	case	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	mapa	mapa	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


