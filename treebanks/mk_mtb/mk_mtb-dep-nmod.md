---
layout: base
title:  'Statistics of nmod in UD_Macedonian-MTB'
udver: '2'
---

## Treebank Statistics: UD_Macedonian-MTB: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="mk_mtb-dep-nmod-poss.html">nmod:poss</a></tt>.

14 nodes (1%) are attached to their parents as `nmod`.

14 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.42857142857143.

The following 3 pairs of parts of speech are connected with `nmod`: <tt><a href="mk_mtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mk_mtb-pos-NOUN.html">NOUN</a></tt> (11; 79% instances), <tt><a href="mk_mtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mk_mtb-pos-PROPN.html">PROPN</a></tt> (2; 14% instances), <tt><a href="mk_mtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mk_mtb-pos-ADJ.html">ADJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod	color:blue
1	Влегов	влезе	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=Vlegov|LTranslit=vleze
2	во	во	ADP	_	_	3	case	_	Translit=vo|LTranslit=vo
3	собата	соба	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	1	obl	_	Translit=sobata|LTranslit=soba
4	на	на	ADP	_	_	5	case	_	Translit=na|LTranslit=na
5	син	син	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	Translit=sin|LTranslit=sin
6	ми	ми	PRON	_	Case=Dat|Number=Sing|Poss=Yes|PronType=Prs	5	det	_	Translit=mi|LTranslit=mi
7	и	и	CCONJ	_	_	8	cc	_	Translit=i|LTranslit=i
8	запалив	запали	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	Translit=zapaliv|LTranslit=zapali
9	светло	светло	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	8	obj	_	SpaceAfter=No|Translit=svetlo|LTranslit=svetlo
10	.	.	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	Соседот	сосед	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	Translit=Sosedot|LTranslit=sosed
2	на	на	ADP	_	_	3	case	_	Translit=na|LTranslit=na
3	Петар	Петар	PROPN	_	Gender=Masc|Number=Sing	1	nmod	_	Translit=Petar|LTranslit=Petar
4	ја	ја	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	expl	_	Translit=ja|LTranslit=ja
5	исфарба	исфарба	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=isfarba|LTranslit=isfarba
6	оградата	ограда	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	5	obj	_	Translit=ogradata|LTranslit=ograda
7	црвена	црвена	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing	5	xcomp	_	SpaceAfter=No|Translit=crvena|LTranslit=crvena
8	.	.	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod	color:blue
1	Колоните	колона	NOUN	_	Definite=Def|Gender=Fem|Number=Plur	0	root	_	Translit=Kolonite|LTranslit=kolona
2	долги	долг	ADJ	_	Definite=Ind|Degree=Pos|Number=Plur	1	amod	_	SpaceAfter=No|Translit=dolgi|LTranslit=dolg
3	,	,	PUNCT	_	_	4	punct	_	Translit=,|LTranslit=,
4	правилата	правило	NOUN	_	Definite=Def|Gender=Neut|Number=Plur	1	list	_	Translit=pravilata|LTranslit=pravilo
5	глупави	глупав	ADJ	_	Definite=Ind|Degree=Pos|Number=Plur	4	amod	_	SpaceAfter=No|Translit=glupavi|LTranslit=glupav
6	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
7	персоналот	персонал	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	1	list	_	Translit=personalot|LTranslit=personal
8	дрзок	дрзок	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No|Translit=drzok|LTranslit=drzok
9	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
10	храната	храна	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	1	list	_	Translit=hranata|LTranslit=hrana
11	добра	добар	ADJ	_	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	SpaceAfter=No|Translit=dobra|LTranslit=dobar
12	.	.	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


