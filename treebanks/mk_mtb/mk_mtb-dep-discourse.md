---
layout: base
title:  'Statistics of discourse in UD_Macedonian-MTB'
udver: '2'
---

## Treebank Statistics: UD_Macedonian-MTB: Relations: `discourse`

This relation is universal.

3 nodes (0%) are attached to their parents as `discourse`.

2 instances of `discourse` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-PART.html">PART</a></tt> (2; 67% instances), <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-INTJ.html">INTJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 discourse	color:blue
1	Му	му	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl	_	Translit=Mu|LTranslit=mu
2	ја	ја	PRON	_	_	3	expl	_	Translit=ja|LTranslit=ja
3	даде	даде	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=dade|LTranslit=dade
4	ли	ли	PART	_	_	3	discourse	_	Translit=li|LTranslit=li
5	тетратката	тетратка	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	3	obj	_	Translit=tetratkata|LTranslit=tetratka
6	на	на	ADP	_	_	7	case	_	Translit=na|LTranslit=na
7	Јован	јован	PROPN	_	Definite=Ind|Gender=Masc|Number=Sing	3	iobj	_	SpaceAfter=No|Translit=Jovan|LTranslit=jovan
8	.	.	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Море	море	INTJ	_	_	5	discourse	_	SpaceAfter=No|Translit=More|LTranslit=more
2	,	,	PUNCT	_	_	1	punct	_	Translit=,|LTranslit=,
3	ќе	ќе	AUX	_	_	5	aux	_	Translit=ťe|LTranslit=ťe
4	му	му	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl	_	Translit=mu|LTranslit=mu
5	покажам	покаже	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=pokažam|LTranslit=pokaže
6	јас	јас	PRON	_	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	Translit=jas|LTranslit=jas
7	нему	нему	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	iobj	_	SpaceAfter=No|Translit=nemu|LTranslit=nemu
8	.	.	PUNCT	_	_	5	punct	_	SpacesAfter=No|Translit=.|LTranslit=.

~~~


