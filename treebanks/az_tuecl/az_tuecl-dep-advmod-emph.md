---
layout: base
title:  'Statistics of advmod:emph in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="az_tuecl-dep-advmod.html">advmod</a></tt>.

6 nodes (1%) are attached to their parents as `advmod:emph`.

5 instances of `advmod:emph` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 4 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-ADV.html">ADV</a></tt> (2; 33% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-ADV.html">ADV</a></tt> (2; 33% instances), <tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="az_tuecl-pos-PART.html">PART</a></tt> (1; 17% instances), <tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="az_tuecl-pos-ADV.html">ADV</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod:emph	color:blue
1	Muqəddəs	muqəddəs	ADJ	_	_	2	amod	_	_
2	kitabı	kitab	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obj	_	_
3	olmuyan	ol	VERB	_	Polarity=Neg|VerbForm=Part	4	acl	_	_
4	dinlər	din	NOUN	_	Case=Nom|Number=Plur	6	nsubj	_	_
5	də	də	ADV	_	_	4	advmod:emph	_	_
6	var	var	ADJ	_	Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod:emph	color:blue
1	Sən	sən	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
2	əvvəl	önce	ADV	_	_	4	advmod	_	_
3	təmizləməgi	təmizləmək	NOUN	_	Case=Acc|Number=Sing	4	obj	_	_
4	qutar	qutar	VERB	_	Aspect=Prog|Number=Sing|Person=2|Voice=Cau	0	root	_	_
5	da	da	ADV	_	_	4	advmod:emph	_	_
6	ütüyü	ütü	NOUN	_	Case=Acc|Number=Sing	7	obj	_	_
7	hal	hal	NOUN	_	Case=Nom|Number=Sing	8	compound	_	_
8	elərik	elə	VERB	Aspect=Hab|Number=Plur|Person=1|Tense=Pres	_	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	Sən	sən	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
2	də	də	PART	_	_	1	advmod:emph	_	_
3	bizinən	biz	PRON	_	Case=Ins|Number=Plur|Person=1|PronType=Prs	4	obl	_	_
4	gəlirən	gəl	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	elə	elə	ADV	_	_	7	advmod	_	_
7	dəyil	dəyil	AUX	_	Polarity=Neg	4	discourse	_	SpaceAfter=No
8	?	?	PUNCT	_	_	4	punct	_	_

~~~


