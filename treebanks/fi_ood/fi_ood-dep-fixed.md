---
layout: base
title:  'Statistics of fixed in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `fixed`

This relation is universal.

33 nodes (0%) are attached to their parents as `fixed`.

33 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06060606060606.

The following 6 pairs of parts of speech are connected with `fixed`: <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (21; 64% instances), <tt><a href="fi_ood-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fi_ood-pos-INTJ.html">INTJ</a></tt> (4; 12% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (3; 9% instances), <tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (2; 6% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (2; 6% instances), <tt><a href="fi_ood-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Hapetus	hapetus	NOUN	_	Case=Nom|Derivation=U|Number=Sing	2	nsubj	_	_
2	parantunut	parantua	VERB	_	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
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
1	hoh	hoh	INTJ	_	_	0	root	_	_
2	hoh	hoh	INTJ	_	_	1	fixed	_	_
3	hooo	hooo	INTJ	_	_	1	fixed	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Varoituksena	varoitus	NOUN	_	Case=Ess|Number=Sing	3	obl	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	sisältää	sisältää	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	ties	ties	ADV	_	_	7	advmod	_	_
5	mitä	mikä	PRON	_	Case=Par|Number=Sing|PronType=Rel	4	fixed	_	_
6	vinkuvonku	vinku#vonku	NOUN	_	Case=Nom|Number=Sing	7	compound:nn	_	_
7	ihkutusta	ihkutus	NOUN	_	Case=Par|Number=Sing	3	obj	_	_
8	parhaimmillaan	parhaimmillaan	ADV	_	_	3	advmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	joten	joten	ADV	_	_	11	advmod	_	_
11	varautukaa	varautua	VERB	_	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
12	kaikkeen	kaikki	PRON	_	Case=Ill|Number=Sing|PronType=Ind	11	obl	_	SpacesAfter=\n

~~~


