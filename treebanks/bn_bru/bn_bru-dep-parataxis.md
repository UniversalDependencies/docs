---
layout: base
title:  'Statistics of parataxis in UD_Bengali-BRU'
udver: '2'
---

## Treebank Statistics: UD_Bengali-BRU: Relations: `parataxis`

This relation is universal.

2 nodes (1%) are attached to their parents as `parataxis`.

1 instances of `parataxis` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `parataxis`: <tt><a href="bn_bru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bn_bru-pos-DET.html">DET</a></tt> (1; 50% instances), <tt><a href="bn_bru-pos-VERB.html">VERB</a></tt>-<tt><a href="bn_bru-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	তোমার	তুমি	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	2	nmod:poss	_	LTranslit=tumi|Translit=tomāra
2	মা	মা	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	Translit=mā|LTranslit=mā
3	খারাপ	খারাপ	ADJ	_	Degree=Pos	0	root	_	SpaceAfter=No|Translit=khārāpa|LTranslit=khārāpa
4	,	,	PUNCT	,	_	3	punct	_	Translit=,|LTranslit=,
5	তাই	তাই	DET	_	PronType=Dem	3	parataxis	_	Translit=tāi|LTranslit=tāi
6	কি	কি	DET	_	PronType=Int	5	compound	_	Translit=ki|LTranslit=ki
7	?	?	PUNCT	?	_	5	punct	_	Translit=?|LTranslit=?

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 parataxis	color:blue
1	দেখ	দেখা	VERB	_	Mood=Imp|Person=2|Tense=Pres|VerbForm=Fin	6	parataxis	_	SpaceAfter=No|Translit=dekha|LTranslit=dekhā
2	,	,	PUNCT	_	_	1	punct	_	Translit=,|LTranslit=,
3	তোমার	তুমি	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	6	obl	_	LTranslit=tumi|Translit=tomāra
4	জন্য	জন্য	ADP	_	_	3	case	_	Translit=janya|LTranslit=janya
5	কি	কি	PRON	_	PronType=Int	6	obj	_	Translit=ki|LTranslit=ki
6	এনেছি	আনা	VERB	_	Aspect=Perf|Mood=Ind|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=enechi|LTranslit=ānā
7	?	?	PUNCT	?	_	6	punct	_	Translit=?|LTranslit=?

~~~


