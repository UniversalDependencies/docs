---
layout: base
title:  'Statistics of _ in UD_Latvian'
udver: '2'
---

## Treebank Statistics: UD_Latvian: Relations: `_`

This relation is universal.

325 nodes (0%) are attached to their parents as `_`.

325 instances of `_` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.9987692307692.

The following 3 pairs of parts of speech are connected with `_`: -<tt><a href="lv-pos-VERB.html">VERB</a></tt> (268; 82% instances), -<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (55; 17% instances), -<tt><a href="lv-pos-X.html">X</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 2.1	bgColor:blue
# visual-style 2.1	fgColor:white
# visual-style _	bgColor:blue
# visual-style _	fgColor:white
# visual-style _ 2.1 _	color:blue
1	Kā	kā	ADV	r0m	PronType=Int	2	advmod	2.1:advmod	_
2	tu	tu	PRON	pp20snn	Case=Nom|Number=Sing|Person=2|PronType=Prs	0	root	2.1:nsubj	_
2.1	_	_	VERB	vm0i0002sa0	Evident=Fh|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	_	_	0:root	_
3	tā	tā	ADV	r0m	PronType=Dem	2	advmod	2.1:advmod	SpaceAfter=No
4	,	,	PUNCT	zc	_	5	punct	5:punct	_
5	bračkiņ	bračkiņš	NOUN	ncmsv1	Case=Voc|Gender=Masc|Number=Sing	2	vocative	2.1:vocative	SpaceAfter=No
6	?!	?!	PUNCT	zs	_	2	punct	2.1:punct	_

~~~


~~~ conllu
# visual-style 1.1	bgColor:blue
# visual-style 1.1	fgColor:white
# visual-style _	bgColor:blue
# visual-style _	fgColor:white
# visual-style _ 1.1 _	color:blue
1	Ierauties	ierauties	VERB	vmyn0t1000n	Polarity=Pos|Reflex=Yes|VerbForm=Inf	0	root	1.3:acl	SpaceAfter=No
1.1	laiks	laiks	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	_	_	_	_
1.2	bija	būt	VERB	vmnisii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	_	_	0:root	_
1.3	laiks	laiks	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	_	_	1.2:nsubj	_
2	,	,	PUNCT	zc	_	3	punct	3:punct	_
3	izbeigties	izbeigties	VERB	vmyn0i1000n	Polarity=Pos|Reflex=Yes|VerbForm=Inf	1	conj	1:conj|1.3:acl	SpaceAfter=No
4	.	.	PUNCT	zs	_	1	punct	1.2:punct	_

~~~


~~~ conllu
# visual-style 1.1	bgColor:blue
# visual-style 1.1	fgColor:white
# visual-style _	bgColor:blue
# visual-style _	fgColor:white
# visual-style _ 1.1 _	color:blue
1	Vecākās	veca	ADJ	affpnyc	Case=Nom|Degree=Cmp|Gender=Fem|Number=Plur	3	nsubj	1.1:amod	_
1.1	_	_	X	n0fpn0	Case=Nom|Gender=Fem|Number=Plur	_	_	3:nsubj	_
2	mums	mēs	PRON	pp10pdn	Case=Dat|Number=Plur|Person=1|PronType=Prs	3	obl	3:obl:dat	_
3	ir	būt	VERB	vmnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	no	no	ADP	spsg	_	6	case	6:case	_
5	XV	XV	SYM	xx	_	6	amod	6:amod	_
6	gadsimta	gadsimts	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	3	obl	3:obl:no	SpaceAfter=No
7	.	.	PUNCT	zs	_	3	punct	3:punct	_

~~~


