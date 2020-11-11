---
layout: base
title:  'Statistics of nmod:poss in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi_ood-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="fi_ood-dep-nmod-gsubj.html">nmod:gsubj</a></tt>.

542 nodes (3%) are attached to their parents as `nmod:poss`.

534 instances of `nmod:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33210332103321.

The following 13 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (346; 64% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (98; 18% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (46; 8% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-SYM.html">SYM</a></tt> (11; 2% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (10; 2% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Aamulla	aamu	NOUN	_	Case=Ade|Number=Sing	5	obl	_	_
2	potilaan	potilas	NOUN	_	Case=Gen|Number=Sing	3	nmod:poss	_	_
3	vointi	vointi	NOUN	_	Case=Nom|Number=Sing	5	nsubj:cop	_	_
4	aamulla	aamu	NOUN	_	Case=Ade|Number=Sing	5	obl	_	_
5	hyvä	hyvä	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nmod:poss	color:blue
1	SR	SR	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	4	nsubj	_	Gen=Sinusrytmi|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	RR	RR	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	1	conj	_	Gen=verenpaine
4	pysyy	pysyä	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	Noradrenalinan	Noradrenalina	PROPN	_	Case=Gen|Number=Sing|Typo=Yes	8	nmod:poss	_	Gen_desc=lääke
6	ja	ja	CCONJ	_	_	7	cc	_	_
7	Abbodopin	Abbodop	PROPN	_	Case=Gen|Number=Sing	5	conj	_	Gen_desc=lääke
8	avulla	apu	NOUN	_	Case=Ade|Number=Sing	4	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Päivällä	päivä	NOUN	_	Case=Ade|Number=Sing	2	obl	_	_
2	tehty	tehdä	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
3	bronkoskopia	bronkoskopia	NOUN	_	Case=Nom|Number=Sing	2	obj	_	Gen_desc=keuhkoputken_tähystys|Gen=tähystys|SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	jonka	joka	PRON	_	Case=Gen|Number=Sing|PronType=Rel	6	nmod:poss	_	_
6	aikana	aika	NOUN	_	Case=Ess|Number=Sing	7	obl	_	_
7	jouduttu	joutua	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	3	acl:relcl	_	_
8	intubointiin	intubointi	NOUN	_	Case=Ill|Number=Sing	7	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


