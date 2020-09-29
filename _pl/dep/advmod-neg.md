---
layout: relation
title: 'advmod:neg'
shortdef: 'negation particle'
udver: '2'
---

The `advmod:neg` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for adverbials realised by the negative particle _nie_ ("not").

~~~ conllu
# visual-style 3 2 advmod:neg color:blue
1	-	-	PUNCT	interp	PunctType=Hyph	7	punct	_	_
2	Nie	nie	PART	part	Polarity=Neg	3	advmod:neg	_	_
3	siedź	siedzieć	VERB	impt:sg:sec:imperf	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	7	parataxis:obj	_	_
4	do	do	ADP	prep:gen	AdpType=Prep	5	case	_	Case=Gen
5	późna	późny	ADJ	adjp	PrepCase=Pre	3	obl	_	_
6	-	-	PUNCT	interp	PunctType=Hyph	7	punct	_	_
7	rzekł	rzec	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	_	_
~~~

~~~ conllu
1	Do	_	_	_	_	_	_	_	_
2	not	_	_	_	_	_	_	_	_
3	sit	_	_	_	_	_	_	_	_
4	up	_	_	_	_	_	_	_	_
5	-	_	_	_	_	_	_	_	_
6	he	_	_	_	_	_	_	_	_
7	said	_	_	_	_	_	_	_	_
8	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Út zář 29 20:23:17 CEST 2020 -->
