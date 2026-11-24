---
layout: base
title:  'Statistics of csubj in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `csubj`

This relation is universal.

60 nodes (0%) are attached to their parents as `csubj`.

57 instances of `csubj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.11666666666667.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (35; 58% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (18; 30% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (5; 8% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 csubj	color:blue
1	-	-	PUNCT	_	_	5	punct	_	_
2	Porque	porque	CCONJ	_	_	5	cc	_	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	muito	muito	ADV	_	_	5	advmod	_	_
5	pequeno	pequeno	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
6	onde	onde	ADV	_	_	8	advmod	_	_
7	eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	moro	morar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	csubj	_	SpaceAfter=No
9	...	...	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj	color:blue
1	dá	dar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	me	me	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	1	iobj	_	_
3	tristeza	tristeza	NOUN	_	Gender=Fem|Number=Sing	1	obj	_	_
4	narrar	narrar	VERB	_	VerbForm=Inf	1	csubj	_	_
5	essas	esse	DET	_	Gender=Fem|Number=Plur|PronType=Dem	6	det	_	_
6	lembranças	lembrança	NOUN	_	Gender=Fem|Number=Plur	4	obj	_	SpaceAfter=No
7	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj	color:blue
1	-	-	PUNCT	_	_	4	punct	_	_
2	Não	não	ADV	_	_	4	advmod	_	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	verdade	verdade	NOUN	_	Gender=Fem|Number=Sing	11	ccomp:speech	_	_
5	que	que	SCONJ	_	_	8	mark	_	_
6	tu	tu	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	_
7	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	obj	_	_
8	admiras	admirar	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	csubj	_	_
9	muito	muito	ADV	_	_	8	advmod	_	SpaceAfter=No
10	?	?	PUNCT	_	_	4	punct	_	_
11	perguntou	perguntar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
13	a	a	ADP	_	_	15	case	_	_
14	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	principezinho	principezinho	NOUN	_	Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
16	.	.	PUNCT	_	_	11	punct	_	_

~~~


