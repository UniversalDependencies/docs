---
layout: base
title:  'Statistics of xcomp in UD_Macedonian-MTB'
udver: '2'
---

## Treebank Statistics: UD_Macedonian-MTB: Relations: `xcomp`

This relation is universal.

24 nodes (2%) are attached to their parents as `xcomp`.

24 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.875.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt> (22; 92% instances), <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-ADJ.html">ADJ</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Соседот	сосед	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	Translit=Sosedot|LTranslit=sosed
2	на	на	ADP	_	_	3	case	_	Translit=na|LTranslit=na
3	Петар	Петар	PROPN	_	Gender=Masc|Number=Sing	1	nmod	_	Translit=Petar|LTranslit=Petar
4	ја	ја	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	expl	_	Translit=ja|LTranslit=ja
5	исфарба	исфарба	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=isfarba|LTranslit=isfarba
6	оградата	ограда	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	5	obj	_	Translit=ogradata|LTranslit=ograda
7	црвена	црвена	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing	5	xcomp	_	SpaceAfter=No|Translit=crvena|LTranslit=crvena
8	.	.	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


