---
layout: base
title:  'Statistics of cop in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `cop`

This relation is universal.
There are 1 language-specific subtypes of `cop`: <tt><a href="fi_ood-dep-cop-own.html">cop:own</a></tt>.

403 nodes (2%) are attached to their parents as `cop`.

319 instances of `cop` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.01736972704715.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (184; 46% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (121; 30% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (43; 11% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (25; 6% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (13; 3% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (9; 2% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="fi_ood-pos-X.html">X</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Pikkuisen	pikkuisen	ADV	_	_	2	advmod	_	_
2	liikehtii	liikehtiä	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	_
4	hyvin	hyvin	ADV	_	_	6	advmod	_	_
5	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	unessa	uni	NOUN	_	Case=Ine|Number=Sing	2	parataxis	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
2	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	limainen	limainen	ADJ	_	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	virtsakatetria	virtsa#katetri	NOUN	_	Case=Par|Number=Sing	2	obj	_	_
2	huuhdeltu	huuhdella	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
5	auki	auki	ADV	_	_	2	conj	_	_

~~~


