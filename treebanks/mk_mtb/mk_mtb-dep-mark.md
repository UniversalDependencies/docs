---
layout: base
title:  'Statistics of mark in UD_Macedonian-MTB'
udver: '2'
---

## Treebank Statistics: UD_Macedonian-MTB: Relations: `mark`

This relation is universal.

70 nodes (5%) are attached to their parents as `mark`.

69 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92857142857143.

The following 7 pairs of parts of speech are connected with `mark`: <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-PART.html">PART</a></tt> (33; 47% instances), <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-SCONJ.html">SCONJ</a></tt> (28; 40% instances), <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-CCONJ.html">CCONJ</a></tt> (3; 4% instances), <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-ADP.html">ADP</a></tt> (2; 3% instances), <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="mk_mtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mk_mtb-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="mk_mtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mk_mtb-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Тој	тој	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	Translit=Toj|LTranslit=toj
2	се	се	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	3	expl	_	Translit=se|LTranslit=se
3	обиде	обиде	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=obide|LTranslit=obide
4	да	да	PART	_	_	5	mark	_	Translit=da|LTranslit=da
5	престане	престане	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	xcomp	_	Translit=prestane|LTranslit=prestane
6	да	да	PART	_	_	7	mark	_	Translit=da|LTranslit=da
7	пуши	пуши	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	xcomp	_	Translit=puši|LTranslit=puši
8	и	и	CCONJ	_	_	7	cc	_	Translit=i|LTranslit=i
9	да	да	PART	_	_	10	mark	_	Translit=da|LTranslit=da
10	пие	пие	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No|Translit=pie|LTranslit=pie
11	.	.	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
1	Мислам	мисли	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=Mislam|LTranslit=misli
2	дека	дека	SCONJ	_	_	3	mark	_	Translit=deka|LTranslit=deka
3	врне	врне	VERB	_	Aspect=Imp|Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	SpaceAfter=No|Translit=vrne|LTranslit=vrne
4	.	.	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 mark	color:blue
1	Бев	сум	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	_	Translit=Bev|LTranslit=sum
2	болен	болен	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No|Translit=bolen|LTranslit=bolen
3	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
4	така	така	CCONJ	_	_	7	mark	_	Translit=taka|LTranslit=taka
5	што	што	CCONJ	_	_	4	fixed	_	Translit=što|LTranslit=što
6	не	не	PART	_	Polarity=Neg	7	advmod	_	Translit=ne|LTranslit=ne
7	отидов	оди	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	Translit=otidov|LTranslit=odi
8	на	на	ADP	_	_	9	case	_	Translit=na|LTranslit=na
9	факултет	факултет	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No|Translit=fakultet|LTranslit=fakultet
10	.	.	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


