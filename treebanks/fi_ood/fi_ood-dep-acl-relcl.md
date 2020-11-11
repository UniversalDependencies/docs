---
layout: base
title:  'Statistics of acl:relcl in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-acl.html">acl</a></tt>.

164 nodes (1%) are attached to their parents as `acl:relcl`.

164 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.56707317073171.

The following 20 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (79; 48% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (17; 10% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (14; 9% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (9; 5% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (9; 5% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl:relcl	color:blue
1	Paineet	paine	NOUN	_	Case=Nom|Number=Plur	2	nsubj	_	_
2	laskee	laskea	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SENSE=0
3	liikaa	liikaa	ADV	_	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	joten	joten	ADV	_	_	6	advmod	_	_
6	vähennetään	vähentää	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	2	acl:relcl	_	SENSE=0
7	Nitroa	Nitro	PROPN	_	Case=Par|Number=Sing	6	obj	_	Gen=lääkettä
8	20	20	NUM	_	NumType=Card	9	nummod	_	_
9	ml:iin	ml	NOUN	_	Abbr=Yes|Case=Ill|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	Minulla	minä	PRON	_	Case=Ade|Number=Sing|Person=1|PronType=Prs	0	root	_	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	_	_
3	kaikki	kaikki	PRON	_	Case=Nom|Number=Sing|PronType=Ind	1	nsubj:cop	_	_
4	tallessa	tallessa	ADV	_	_	1	advmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	jotka	joka	PRON	_	Case=Nom|Number=Plur|PronType=Rel	8	obj	_	_
7	olen	olla	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
8	saanut	saada	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	3	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


