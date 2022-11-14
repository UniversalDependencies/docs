---
layout: base
title:  'Statistics of obl:agent in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pt_petrogold-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="pt_petrogold-dep-obl-arg.html">obl:arg</a></tt>.

1170 nodes (0%) are attached to their parents as `obl:agent`.

1170 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.86581196581197.

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (971; 83% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt> (175; 15% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	maior	maior	ADJ	_	Gender=Fem|Number=Sing	3	amod	_	_
3	área	área	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
4	ocupada	ocupar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	3	acl	_	_
5	por	por	ADP	_	_	7	case	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	domínio	domínio	NOUN	_	Gender=Masc|Number=Sing	4	obl:agent	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	N,N,	N,N,	PROPN	_	Gender=Fem|Number=Sing	5	nsubj:pass	_	SpaceAfter=No
3	N-trimetilquitosana	N-trimetilquitosana	PROPN	_	Number=Sing	2	flat:name	_	_
4	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	obtido	obter	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
6	por	por	ADP	_	_	7	case	_	_
7	Correia	Correia	PROPN	_	Gender=Masc|Number=Sing	5	obl:agent	_	SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:agent	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	água	água	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	_
3	produzida	produzir	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	2	acl	_	_
4	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	responsável	responsável	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
6	por	por	ADP	_	_	8	case	_	_
7	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	variedade	variedade	NOUN	_	Gender=Fem|Number=Sing	5	obl:agent	_	_
9	de	de	ADP	_	_	10	case	_	_
10	problemas	problema	NOUN	_	Gender=Masc|Number=Plur	8	nmod	_	_
11	em	em	ADP	_	_	13	case	_	_
12	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	13	det	_	_
13	operações	operação	NOUN	_	Gender=Fem|Number=Plur	10	nmod	_	_
14	de	de	ADP	_	_	15	case	_	_
15	campo	campo	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


