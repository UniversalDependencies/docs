---
layout: base
title:  'Statistics of compound:redup in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-compound.html">compound</a></tt>.

40 nodes (0%) are attached to their parents as `compound:redup`.

34 instances of `compound:redup` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.175.

The following 7 pairs of parts of speech are connected with `compound:redup`: <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (15; 38% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (8; 20% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (6; 15% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (4; 10% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (4; 10% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (2; 5% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:redup	color:blue
1	Yavaş	yavaş	ADV	_	_	2	compound:redup	_	_
2	yavaş	yavaş	ADV	_	_	3	advmod	_	_
3	gel	gel	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:redup	color:blue
1	Genç	genç	ADJ	_	_	2	amod	_	_
2	kadın	kadın	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
3	ağlaya	ağlaya	VERB	_	Mood=Ind|VerbForm=Conv	4	compound:redup	_	_
4	ağlaya	ağlaya	VERB	_	Mood=Ind|VerbForm=Conv	6	advcl	_	_
5	hikayesini	hikaye	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	_
6	anlattı	anlat	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:redup	color:blue
1	Çocuklar	çocuk	NOUN	_	Case=Nom|Number=Plur	4	nsubj	_	_
2	kendi	kendi	PRON	_	Case=Nom|Number=Sing|PronType=Prs|Reflex=Yes	3	compound:redup	_	_
3	kendilerine	kendi	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	1	nmod	_	_
4	yıkanabilirler	yıka	VERB	_	Aspect=Hab|Mood=GenPot|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Rfl	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


