---
layout: base
title:  'Statistics of obl:freq in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:freq`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.
There are also 9 other language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="mdf_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="mdf_jr-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="mdf_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="mdf_jr-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="mdf_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="mdf_jr-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="mdf_jr-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="mdf_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

3 nodes (0%) are attached to their parents as `obl:freq`.

2 instances of `obl:freq` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66666666666667.

The following 1 pairs of parts of speech are connected with `obl:freq`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:freq	color:blue
1	Монць	монць	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	4	nsubj	_	_
2	эрь	эрь	DET	Det	Case=Nom|Definite=Ind|Number=Sing	3	det	_	_
3	шиня	ши	NOUN	N	Case=Tem|Definite=Ind|Number=Sing	4	obl:freq	_	_
4	мастярлан	мастярламс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	0	root	_	_
5	самолётт	самолёт	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	и	и	CCONJ	CC	_	8	cc	_	_
8	лийфнесайне	лийфнемс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Pres|Valency=2	4	conj	_	_
9	няканень	няка	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=1	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


