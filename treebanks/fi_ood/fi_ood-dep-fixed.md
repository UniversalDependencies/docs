---
layout: base
title:  'Statistics of fixed in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `fixed`

This relation is universal.

37 nodes (0%) are attached to their parents as `fixed`.

37 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05405405405405.

The following 7 pairs of parts of speech are connected with `fixed`: <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (19; 51% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (7; 19% instances), <tt><a href="fi_ood-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fi_ood-pos-INTJ.html">INTJ</a></tt> (4; 11% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (3; 8% instances), <tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="fi_ood-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Hapetus	hapetus	NOUN	_	Case=Nom|Derivation=U|Number=Sing	2	nsubj	_	_
2	parantunut	parantua	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	jnk	jnk	ADV	_	Abbr=Yes	2	advmod	_	Gen=jonkin
4	verran	verran	ADV	_	_	3	fixed	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Jonkin	jokin	PRON	_	Case=Gen|Number=Sing|PronType=Ind	3	advmod	_	_
2	verran	verran	ADV	_	_	1	fixed	_	_
3	nukkunut	nukkua	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	pitkiä	pitkä	ADJ	_	Case=Par|Degree=Pos|Number=Plur	6	amod	_	_
6	toveja	tovi	NOUN	_	Case=Par|Number=Plur	7	obl	_	_
7	pitää	pitää	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
8	silmiään	silmä	NOUN	_	Case=Par|Number=Plur|Person[psor]=3	7	obj	_	_
9	auki	auki	ADV	_	_	7	advmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	hoh	hoh	INTJ	_	_	0	root	_	_
2	hoh	hoh	INTJ	_	_	1	fixed	_	_
3	hooo	hooo	INTJ	_	_	1	fixed	_	SpacesAfter=\n

~~~


