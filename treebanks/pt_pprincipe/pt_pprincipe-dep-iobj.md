---
layout: base
title:  'Statistics of iobj in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `iobj`

This relation is universal.

138 nodes (1%) are attached to their parents as `iobj`.

71 instances of `iobj` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04347826086957.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (137; 99% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Respondera	responder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	me	me	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	1	iobj	_	_
3	:	:	PUNCT	_	_	11	punct	_	_
4	"	"	PUNCT	_	_	11	punct	_	SpaceAfter=No
5	Por	por	ADP	_	_	6	case	_	_
6	que	que	PRON	_	PronType=Rel	11	obl	_	_
7	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	discourse	_	_
8	que	que	SCONJ	_	_	11	discourse	_	_
9	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	chapéu	chapéu	NOUN	_	Gender=Masc|Number=Sing	11	nsubj	_	_
11	faria	fazer	VERB	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	1	ccomp:speech	_	_
12	medo	medo	NOUN	_	Gender=Masc|Number=Sing	11	obj	_	SpaceAfter=No
13	"	"	PUNCT	_	_	11	punct	_	SpaceAfter=No
14	?	?	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	E	e	CCONJ	_	_	4	cc	_	_
2	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
3	me	me	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	4	iobj	_	_
4	preciso	preciso	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
5	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	grande	grande	ADJ	_	Number=Sing	7	amod	_	_
7	esforço	esforço	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
8	de	de	ADP	_	_	9	case	_	_
9	inteligência	inteligência	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
10	para	para	ADP	_	_	11	mark	_	_
11	compreender	compreender	VERB	_	VerbForm=Inf	4	advcl	_	_
12	sozinho	sozinho	ADJ	_	Gender=Masc|Number=Sing	11	advcl	_	_
13	esse	esse	DET	_	Gender=Masc|Number=Sing|PronType=Dem	14	det	_	_
14	problema	problema	NOUN	_	Gender=Masc|Number=Sing	11	obj	_	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


