---
layout: base
title:  'Statistics of ccomp in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="pt_pprincipe-dep-ccomp-speech.html">ccomp:speech</a></tt>.

92 nodes (1%) are attached to their parents as `ccomp`.

89 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.21739130434783.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (63; 68% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt> (14; 15% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (11; 12% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 ccomp	color:blue
1	Levei	levar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
2	muito	muito	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
3	tempo	tempo	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	_
4	para	para	ADP	_	_	5	mark	_	_
5	compreender	compreender	VERB	_	VerbForm=Inf	1	advcl	_	_
6	de	de	ADP	_	_	7	case	_	_
7	onde	onde	ADV	_	_	8	advmod	_	_
8	viera	vir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pqp|VerbForm=Fin	5	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	Eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	queria	querer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
3	saber	saber	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	se	se	SCONJ	_	_	8	mark	_	_
5	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
6	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
7	verdadeiramente	verdadeiramente	ADV	_	_	8	advmod	_	_
8	compreensiva	compreensivo	ADJ	_	Gender=Fem|Number=Sing	3	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Bem	bem	ADV	_	_	3	advmod	_	_
3	vês	ver	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	_	_	9	mark	_	_
5	isto	isto	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	9	nsubj	_	_
6	não	não	ADV	_	_	9	advmod	_	_
7	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	carneiro	carneiro	NOUN	_	Gender=Masc|Number=Sing	3	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


