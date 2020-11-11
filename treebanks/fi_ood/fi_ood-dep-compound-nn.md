---
layout: base
title:  'Statistics of compound:nn in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `compound:nn`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="fi_ood-dep-compound-prt.html">compound:prt</a></tt>.

67 nodes (0%) are attached to their parents as `compound:nn`.

67 instances of `compound:nn` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38805970149254.

The following 7 pairs of parts of speech are connected with `compound:nn`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (23; 34% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (20; 30% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (15; 22% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-X.html">X</a></tt> (5; 7% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:nn	color:blue
1	Nitrosid	Nitrosid	PROPN	_	Case=Nom|Number=Sing	2	compound:nn	_	Gen=Lääke
2	nopeutta	nopeus	NOUN	_	Case=Par|Number=Sing	3	obj	_	_
3	vaihdeltu	vaihdella	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	SENSE=0
4	RR-tason	RR#taso	NOUN	_	Case=Gen|Number=Sing	3	obl	_	Gen=verenpainetason
5	mukaan	mukaan	ADP	_	AdpType=Post	4	case	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:nn	color:blue
1	Sisar	sisar	NOUN	_	Case=Nom|Number=Sing	2	compound:nn	_	_
2	Eeva	Eeva	PROPN	_	Case=Nom|Number=Sing	5	nsubj	_	_
3	ja	ja	CCONJ	_	_	4	cc	_	_
4	ystävätär	ystävätär	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
5	kävivät	käydä	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 compound:nn	color:blue
1	C	C	NOUN	_	Case=Nom|Number=Sing	3	compound:nn	_	Gen=Hengitys
2	pap	pap	NOUN	_	Case=Nom|Number=Sing	1	goeswith	_	Gen_desc=hengityskoneen_ohjelma|Gen=kone
3	-maskilla	maski	NOUN	_	Case=Ade|Number=Sing	0	root	_	_
4	koko	koko	ADJ	_	_	5	amod	_	_
5	yön	yö	NOUN	_	Case=Gen|Number=Sing	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


