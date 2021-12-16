---
layout: base
title:  'Statistics of nsubj in UD_Bengali-BRU'
udver: '2'
---

## Treebank Statistics: UD_Bengali-BRU: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="bn_bru-dep-nsubj-pass.html">nsubj:pass</a></tt>.

35 nodes (11%) are attached to their parents as `nsubj`.

32 instances of `nsubj` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.94285714285714.

The following 8 pairs of parts of speech are connected with `nsubj`: <tt><a href="bn_bru-pos-VERB.html">VERB</a></tt>-<tt><a href="bn_bru-pos-PRON.html">PRON</a></tt> (21; 60% instances), <tt><a href="bn_bru-pos-VERB.html">VERB</a></tt>-<tt><a href="bn_bru-pos-NOUN.html">NOUN</a></tt> (6; 17% instances), <tt><a href="bn_bru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bn_bru-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="bn_bru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bn_bru-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="bn_bru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bn_bru-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="bn_bru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bn_bru-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="bn_bru-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bn_bru-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="bn_bru-pos-VERB.html">VERB</a></tt>-<tt><a href="bn_bru-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj	color:blue
1	খেয়েছ	খাওয়া	VERB	_	Aspect=Perf|Mood=Ind|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Translit=kheŷecha|LTranslit=khāoŷā
2	তুমি	তুমি	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	1	nsubj	_	LTranslit=tumi|Translit=tumi
3	?	?	PUNCT	?	_	1	punct	_	Translit=?|LTranslit=?

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	মা	মা	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	Translit=mā|LTranslit=mā
2	খাবার	খাবার	NOUN	_	Case=Nom|Number=Sing	3	obj	_	Translit=khābāra|LTranslit=khābāra
3	দয়ে	দেত্তয়া	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Translit=daŷe|LTranslit=dettaŷā
4	নাই	না	PART	_	PartType=Neg	3	advmod	_	Translit=nāi|LTranslit=nā
5	।	।	PUNCT	।	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	তোমার	তুমি	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	2	nmod:poss	_	LTranslit=tumi|Translit=tomāra
2	মা	মা	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	Translit=mā|LTranslit=mā
3	খারাপ	খারাপ	ADJ	_	Degree=Pos	0	root	_	SpaceAfter=No|Translit=khārāpa|LTranslit=khārāpa
4	,	,	PUNCT	,	_	3	punct	_	Translit=,|LTranslit=,
5	তাই	তাই	DET	_	PronType=Dem	3	parataxis	_	Translit=tāi|LTranslit=tāi
6	কি	কি	DET	_	PronType=Int	5	compound	_	Translit=ki|LTranslit=ki
7	?	?	PUNCT	?	_	5	punct	_	Translit=?|LTranslit=?

~~~


