---
layout: base
title:  'Statistics of flat:foreign in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="id_pud-dep-flat-name.html">flat:name</a></tt>.

14 nodes (0%) are attached to their parents as `flat:foreign`.

14 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71428571428571.

The following 1 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="id_pud-pos-X.html">X</a></tt>-<tt><a href="id_pud-pos-X.html">X</a></tt> (14; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 flat:foreign	color:blue
1	Ini	ini	PRON	_	PronType=Dem	3	nsubj	_	_
2	adalah	adalah	AUX	_	_	3	cop	_	_
3	coup	coup	X	_	Foreign=Yes	0	root	_	_
4	de	de	X	_	Foreign=Yes	3	flat:foreign	_	_
5	grâce	grâce	X	_	Foreign=Yes	3	flat:foreign	_	_
6	dan	dan	CCONJ	_	_	7	cc	_	_
7	dorongan	dorong	NOUN	_	Number=Sing	3	conj	_	_
8	yang	yang	PRON	_	PronType=Rel	9	nsubj:pass	_	_
9	dibutuhkan	butuh	VERB	_	Mood=Ind|Voice=Pass	7	acl:relcl	_	_
10	oleh	oleh	ADP	_	_	12	case	_	_
11	para	para	DET	_	Number=Plur|PronType=Ind	12	det	_	_
12	pendatang	datang	NOUN	_	Number=Sing	9	obl	_	_
13	untuk	untuk	SCONJ	_	_	14	mark	_	_
14	mendapatkan	dapat	VERB	_	Mood=Ind|Voice=Act	9	advcl	_	_
15	kemerdekaan	merdeka	NOUN	_	Number=Sing	14	obj	_	_
16	mereka	mereka	PRON	_	Number=Plur|Person=3|PronType=Prs	15	nmod:poss	_	SpaceAfter=No
17	.	.	PUNCT	_	_	3	punct	_	_

~~~


