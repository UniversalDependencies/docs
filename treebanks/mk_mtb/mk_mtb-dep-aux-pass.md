---
layout: base
title:  'Statistics of aux:pass in UD_Macedonian-MTB'
udver: '2'
---

## Treebank Statistics: UD_Macedonian-MTB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="mk_mtb-dep-aux.html">aux</a></tt>.

7 nodes (1%) are attached to their parents as `aux:pass`.

7 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-AUX.html">AUX</a></tt> (6; 86% instances), <tt><a href="mk_mtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mk_mtb-pos-AUX.html">AUX</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux:pass	color:blue
1	Ова	ова	DET	_	Gender=Neut|Number=Sing|PronType=Dem	2	det	_	Translit=Ova|LTranslit=ova
2	писмо	писмо	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	5	nsubj	_	Translit=pismo|LTranslit=pismo
3	е	сум	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	Translit=e|LTranslit=sum
4	од	од	ADP	_	_	5	case	_	Translit=od|LTranslit=od
5	Петар	Петар	PROPN	_	Gender=Masc|Number=Sing	0	root	_	Translit=Petar|LTranslit=Petar
6	и	и	CCONJ	_	_	8	cc	_	Translit=i|LTranslit=i
7	беше	сум	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	8	aux:pass	_	Translit=beše|LTranslit=sum
8	испорачано	испорачан	VERB	_	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	5	conj	_	Translit=isporačano|LTranslit=isporačan
9	вчера	вчера	ADV	_	Degree=Pos	8	advmod	_	SpaceAfter=No|Translit=včera|LTranslit=včera
10	.	.	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux:pass	color:blue
1	Ниту	ниту	PART	_	Polarity=Neg	2	advmod	_	Translit=Nitu|LTranslit=nitu
2	Петар	Петар	PROPN	_	Gender=Masc|Number=Sing	8	nsubj:pass	_	Translit=Petar|LTranslit=Petar
3	Смит	Смит	PROPN	_	Gender=Masc|Number=Sing	2	flat	_	Translit=Smit|LTranslit=Smit
4	ниту	ниту	PART	_	Polarity=Neg	5	advmod	_	Translit=nitu|LTranslit=nitu
5	Мери	Мери	PROPN	_	Gender=Fem|Number=Sing	2	conj	_	Translit=Meri|LTranslit=Meri
6	Браун	Браун	PROPN	_	Gender=Fem|Number=Sing	5	flat	_	Translit=Braun|LTranslit=Braun
7	не	не	PART	_	Polarity=Neg	8	advmod	_	Translit=ne|LTranslit=ne
8	можеа	може	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=možea|LTranslit=može
9	да	да	PART	_	_	11	mark	_	Translit=da|LTranslit=da
10	бидат	биде	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux:pass	_	Translit=bidat|LTranslit=bide
11	одбрани	одбран	ADJ	_	Aspect=Perf|Definite=Ind|Number=Plur|VerbForm=Part|Voice=Pass	8	xcomp	_	SpaceAfter=No|Translit=odbrani|LTranslit=odbran
12	.	.	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.

~~~


