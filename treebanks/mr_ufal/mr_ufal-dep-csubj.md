---
layout: base
title:  'Statistics of csubj in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `csubj`

This relation is universal.

3 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.66666666666667.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj	color:blue
1	ते	तो	PRON	_	Deixis=Remt|Gender=Neut|Number=Sing|Person=3|PronType=Dem	2	obj	_	Translit=te|LTranslit=to
2	विकणे	विकणे	VERB	_	Case=Nom|InfForm=Dict|VerbForm=Inf	7	csubj	_	Translit=vikaṇe|LTranslit=vikaṇe
3	त्या	तो	PRON	_	Deixis=Remt|Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nmod:poss	_	Translit=tyā|LTranslit=to
4	च्या	चा	ADP	_	Case=Abs	3	case	_	Translit=cyā|LTranslit=cā
5	जिवा	जिवा	NOUN	_	Case=Abs|Gender=Masc|Number=Sing	7	obl	_	Translit=jivā|LTranslit=jivā
6	वर	वर	ADP	_	_	5	case	_	Translit=vara|LTranslit=vara
7	येत	येणे	VERB	_	Aspect=Imp|VerbForm=Part	0	root	_	Translit=yeta|LTranslit=yeṇe
8	होते	असणे	AUX	_	Gender=Neut|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	7	aux	_	SpaceAfter=No|Translit=hote|LTranslit=asaṇe
9	.	.	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No|Translit="|LTranslit="
2	तुला	तू	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	3	obl	_	Translit=tulā|LTranslit=tū
3	माहित	माहित	ADV	_	_	0	root	_	Translit=māhita|LTranslit=māhita
4	आहे	असणे	AUX	_	Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	Translit=āhe|LTranslit=asaṇe
5	का	का	ADV	_	_	3	advmod	_	SpaceAfter=No|Translit=kā|LTranslit=kā
6	,	,	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
7	तो	तो	PRON	_	Case=Nom|Deixis=Remt|Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	Translit=to|LTranslit=to
8	कुठे	कुठे	ADV	_	_	3	csubj	_	Translit=kuṭhe|LTranslit=kuṭhe
9	आहे	असणे	AUX	_	Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	SpaceAfter=No|Translit=āhe|LTranslit=asaṇe
10	?	?	PUNCT	_	_	3	punct	_	Translit=?|LTranslit=?
11	"	"	PUNCT	_	_	3	punct	_	Translit="|LTranslit="

~~~


