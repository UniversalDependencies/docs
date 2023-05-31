---
layout: base
title:  'Statistics of compound:nn in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `compound:nn`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="fi_ood-dep-compound-prt.html">compound:prt</a></tt>.

119 nodes (1%) are attached to their parents as `compound:nn`.

119 instances of `compound:nn` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2436974789916.

The following 9 pairs of parts of speech are connected with `compound:nn`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (55; 46% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (31; 26% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (20; 17% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-X.html">X</a></tt> (5; 4% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 compound:nn	color:blue
1	K	K	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	2	nsubj	_	Gen=Kalium
2	korjautuu	korjautua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	myös	myös	ADV	_	_	2	advmod	_	_
4	K	K	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	6	compound:nn	_	Gen=kalium
5	cl	Cl	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	6	compound:nn	_	Gen=kloridi
6	lisällä	lisä	NOUN	_	Case=Ade|Number=Sing	2	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:nn	color:blue
1	Noradrenaliina	Noradrenalina	PROPN	_	Case=Nom|Number=Sing|Typo=Yes	2	compound:nn	_	Gen_desc=lääke
2	inf.	inf.	NOUN	_	Abbr=Yes|Case=Par|Number=Sing	5	obj	_	Gen=tiputusta
3	päästy	päästä	VERB	_	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	hieman	hieman	ADV	_	_	5	advmod	_	_
5	laskemaan	laskea	VERB	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	3	xcomp	_	SpaceAfter=No
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


