---
layout: base
title:  'Statistics of csubj in UD_Macedonian-MTB'
udver: '2'
---

## Treebank Statistics: UD_Macedonian-MTB: Relations: `csubj`

This relation is universal.

4 nodes (0%) are attached to their parents as `csubj`.

3 instances of `csubj` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="mk_mtb-pos-ADV.html">ADV</a></tt>-<tt><a href="mk_mtb-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="mk_mtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj	color:blue
1	Кој	кој	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	2	nsubj	_	Translit=Koj|LTranslit=koj
2	доцни	доцни	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj	_	SpaceAfter=No|Translit=docni|LTranslit=docni
3	,	,	PUNCT	_	_	2	punct	_	Translit=,|LTranslit=,
4	ќе	ќе	AUX	_	_	5	aux	_	Translit=ťe|LTranslit=ťe
5	чека	чека	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Translit=čeka|LTranslit=čeka
6	.	.	PUNCT	punct	_	5	punct	_	SpacesAfter=No|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj	color:blue
1	Јасно	јасно	ADV	_	Degree=Pos	0	root	_	Translit=Jasno|LTranslit=jasno
2	е	сум	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	Translit=e|LTranslit=sum
3	дека	дека	SCONJ	_	_	6	mark	_	Translit=deka|LTranslit=deka
4	сте	сум	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	6	nsubj	_	Translit=ste|LTranslit=sum
5	во	во	ADP	_	_	6	case	_	Translit=vo|LTranslit=vo
6	право	право	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	1	csubj	_	SpaceAfter=No|Translit=pravo|LTranslit=pravo
7	.	.	PUNCT	punct	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj	color:blue
1	Жал	жал	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	0	root	_	Translit=Žal|LTranslit=žal
2	ми	ми	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	1	iobj	_	Translit=mi|LTranslit=mi
3	е	сум	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	Translit=e|LTranslit=sum
4	да	да	PART	_	_	6	mark	_	Translit=da|LTranslit=da
5	ги	ги	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	6	obj	_	Translit=gi|LTranslit=gi
6	критикувам	критикува	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	_	SpaceAfter=No|Translit=kritikuvam|LTranslit=kritikuva
7	.	.	PUNCT	punct	_	1	punct	_	Translit=.|LTranslit=.

~~~


