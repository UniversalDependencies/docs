---
layout: base
title:  'Statistics of nsubj in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="fi_ood-dep-nsubj-cop.html">nsubj:cop</a></tt>.

977 nodes (5%) are attached to their parents as `nsubj`.

831 instances of `nsubj` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76151484135107.

The following 14 pairs of parts of speech are connected with `nsubj`: <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (570; 58% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (195; 20% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (145; 15% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (41; 4% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (11; 1% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Natrium	natrium	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	lähtenyt	lähteä	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	korjaantumaan	korjaantua	VERB	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	keittosuolalla	keitto#suola	NOUN	_	Case=Ade|Number=Sing	3	obl	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj	color:blue
1	Juureen	juuri	NOUN	_	Case=Ill|Number=Sing	2	obl	_	_
2	laitettu	laittaa	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
3	yksi	yksi	NUM	_	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	_
4	ommel	ommel	NOUN	_	Case=Nom|Number=Sing	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	joka	joka	PRON	_	Case=Nom|Number=Sing|PronType=Rel	7	nsubj	_	_
7	tyrehdyttänyt	tyrehdyttää	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	4	acl:relcl	_	_
8	vuodon	vuoto	NOUN	_	Case=Gen|Number=Sing	7	obj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj	color:blue
1	Sisar	sisar	NOUN	_	Case=Nom|Number=Sing	2	compound:nn	_	_
2	Eeva	Eeva	PROPN	_	Case=Nom|Number=Sing	5	nsubj	_	_
3	ja	ja	CCONJ	_	_	4	cc	_	_
4	ystävätär	ystävätär	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
5	kävivät	käydä	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


