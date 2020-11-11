---
layout: base
title:  'Statistics of amod in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `amod`

This relation is universal.

844 nodes (4%) are attached to their parents as `amod`.

827 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22511848341232.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (787; 93% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (25; 3% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (18; 2% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Pitkä	pitkä	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	vuoro	vuoro	NOUN	_	Case=Nom|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Hysteerisen	hysteerinen	ADJ	_	Case=Gen|Degree=Pos|Number=Sing	2	amod	_	_
2	oloinen	oloinen	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
3	->	->	SYM	_	_	4	discourse	_	_
4	saa	saada	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	SENSE=0
5	5	5	NUM	_	NumType=Card	6	nummod	_	_
6	mg	mg	NOUN	_	Abbr=Yes|Case=Par|Number=Sing	4	obj	_	_
7	Oxanestia	Oxanest	PROPN	_	Case=Par|Number=Sing	6	nmod	_	Gen=lääkettä
8	ja	ja	CCONJ	_	_	10	cc	_	_
9	2,5	2,5	NUM	_	NumType=Card	10	nummod	_	_
10	mg	mg	NOUN	_	Abbr=Yes|Case=Par|Number=Sing	6	conj	_	_
11	Stesolidia	Stesolid	PROPN	_	Case=Par|Number=Sing	10	nmod	_	Gen=lääkettä|SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Saanut	saada	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	SENSE=0
2	yöllä	yö	NOUN	_	Case=Ade|Number=Sing	1	obl	_	_
3	ylimääräisen	ylimääräinen	ADJ	_	Case=Gen|Degree=Pos|Number=Sing	4	amod	_	_
4	Oxepamin	Oxepam	PROPN	_	Case=Gen|Number=Sing	1	obj	_	Gen=lääkkeen|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	jonka	joka	PRON	_	Case=Gen|Number=Sing|PronType=Rel	7	nmod:poss	_	_
7	avulla	apu	NOUN	_	Case=Ade|Number=Sing	8	obl	_	_
8	nukkunut	nukkua	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	4	acl:relcl	_	SENSE=0|SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


