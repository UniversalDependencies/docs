---
layout: base
title:  'Statistics of flat:name in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `flat:name`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_kiparlaforest-dep-flat-foreign.html">flat:foreign</a></tt>.

24 nodes (0%) are attached to their parents as `flat:name`.

24 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08333333333333.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt> (23; 96% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Begin=157.417|KID=104-0
2	monologo	monologo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	KID=104-1
3	di	di	ADP	_	_	4	case	_	KID=104-2
4	andrea	Andrea	PROPN	_	_	2	nmod	_	Anonymyzed=Yes|KID=104-3
5	verdi	Verdì	PROPN	_	_	4	flat:name	_	Anonymyzed=Yes|KID=104-4
6	per	per	ADP	_	_	8	case	_	KID=104-5
7	dodici	dodici	NUM	_	NumType=Card	8	nummod	_	KID=104-6
8	ore	ora	NOUN	_	Gender=Fem|Number=Plur	2	nmod	_	End=160.007|KID=104-7

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:name	color:blue
1	sì	sì	INTJ	_	_	3	discourse	_	Begin=1737.118|KID=1114-0|OverlappingGroup=195|Prolonged=Yes
2	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	KID=1114-1|OverlappingGroup=195
3	quella	quello	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	0	root	_	KID=1114-2
4	che	che	PRON	_	PronType=Rel	5	obj	_	KID=1114-3
5	conosce	conoscere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	KID=1114-4
6	lia	Lia	PROPN	_	_	5	nsubj	_	Anonymized=Yes|End=1738.668|KID=1114-5
7	mara	Mara	PROPN	_	_	3	appos	_	Anonymized=Yes|Begin=1738.873|KID=1116-0|OverlappingGroup=196|Prolonged=Yes
8	cosa	cosa	NOUN	_	Gender=Fem|Number=Sing	7	flat:name	_	KID=1116-1
9	lì	lì	ADV	_	_	7	advmod	_	End=1740.031|KID=1116-2

~~~


