---
layout: base
title:  'Statistics of mark in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `mark`

This relation is universal.

1014 nodes (2%) are attached to their parents as `mark`.

1008 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.05029585798817.

The following 13 pairs of parts of speech are connected with `mark`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (753; 74% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (101; 10% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (98; 10% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (16; 2% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (15; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (8; 1% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (8; 1% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (6; 1% instances), <tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 mark	color:blue
1	Jeśli	jeśli	SCONJ	comp	_	5	mark	5:mark	Translit=Jeśli
2	was	wy	PRON	ppron12:pl:gen:sec	Case=Gen|Number=Plur|Person=2|PronType=Prs	5	obj	5:obj	Translit=was
3	to	to	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	5:nsubj	Translit=to
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	Translit=nie
5	ruszy	ruszyć	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	11	advcl	11:advcl	SpaceAfter=No|Translit=ruszy
6	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
7	co	co	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	11	nsubj	11:nsubj	Translit=co
8	was	wy	PRON	ppron12:pl:acc:sec	Case=Acc|Number=Plur|Person=2|PronType=Prs	10	iobj	10:iobj	Translit=wras
9	kiedy	kiedy	ADV	adv	PronType=Int	11	advmod	11:advmod	Translit=kiedy
10	ruszyć	ruszyć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	11	xcomp	11:xcomp	Translit=ruszyć
11	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=może
12	?	?	PUNCT	interp	PunctType=Qest	11	punct	11:punct	Translit=?

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 mark	color:blue
1	Kończy	kończyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=Kończy
2	żądając	żądać	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	1	advcl	1:advcl	SpaceAfter=No|Translit=żądając
3	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	Translit=,
4	aby	aby	SCONJ	comp	_	8	mark	8:mark	Translit=aby
5	przeciw	przeciw	ADP	prep:dat	AdpType=Prep	6	case	6:case	Case=Dat|Translit=przeciw
6	oskarżonym	oskarżony	NOUN	subst:pl:dat:m	Case=Dat|Gender=Masc|Number=Plur	8	obl	8:obl	Translit=oskarżonym
7	dowody	dowód	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	8	nsubj:pass	8:nsubj:pass	Translit=dowody
8	złożone	złożyć	ADJ	ppas:pl:nom:m:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	2	ccomp	2:ccomp	Translit=złożone
9	były	być	AUX	praet:pl:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	8	aux:pass	8:aux:pass	SpaceAfter=No|Translit=były
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
1	A	a	CCONJ	conj	_	9	cc	9:cc	Translit=A
2	jeśli	jeśli	SCONJ	comp	_	3	mark	3:mark	Translit=iesli
3	Apostołów	apostoł	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	9	nmod	9:nmod	SpaceAfter=No|Translit=Apostołow
4	/	/	PUNCT	interp	PunctType=Slsh	3	punct	3:punct	Translit=/
5	tedy	tedy	PART	part	_	9	advmod	9:advmod	Translit=tedy
6	ć	ć	PART	part	_	5	advmod:emph	5:advmod:emph	Translit=ć
7	i	i	PART	part	_	9	advmod:emph	9:advmod:emph	Translit=y
8	wszytkich	wszytek	ADJ	adj:pl:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	9	amod	9:amod	Translit=wszytkich
9	Chrześcijan	chrześcijanin	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No|Translit=Chrześćian
10	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	Translit=.

~~~


