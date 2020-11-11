---
layout: base
title:  'Statistics of case in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `case`

This relation is universal.

287 nodes (1%) are attached to their parents as `case`.

221 instances of `case` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29965156794425.

The following 11 pairs of parts of speech are connected with `case`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADP.html">ADP</a></tt> (195; 68% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-ADP.html">ADP</a></tt> (28; 10% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-ADP.html">ADP</a></tt> (27; 9% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-ADP.html">ADP</a></tt> (25; 9% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="fi_ood-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_ood-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Aamua	aamu	NOUN	_	Case=Par|Number=Sing	3	obl	_	_
2	kohden	kohden	ADP	_	AdpType=Post	1	case	_	_
3	virkistymään	virkistyä	VERB	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	0	root	_	_
4	päin	päin	ADV	_	_	3	advmod	_	SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case	color:blue
1	Eksä	eksä	NOUN	_	Case=Nom|Number=Sing|Style=Coll	2	nsubj	_	_
2	alko	alkaa	VERB	_	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	seurusteleen	seurustella	VERB	_	Case=Ill|InfForm=3|Number=Sing|Style=Coll|VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	naisen	nainen	NOUN	_	Case=Gen|Number=Sing	3	obl	_	_
5	kanssa	kanssa	ADP	_	AdpType=Post	4	case	_	_
6	kenen	kuka	PRON	_	Case=Gen|Number=Sing|PronType=Int	8	obl	_	_
7	kaa	kanssa	ADP	_	AdpType=Post|Style=Coll	6	case	_	_
8	petti	pettää	VERB	_	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
9	mua	minä	PRON	_	Case=Par|Number=Sing|PronType=Prs|Style=Coll	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Sisko	sisko	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	käynyt	käydä	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	ja	ja	CCONJ	_	_	4	cc	_	_
4	jutellut	jutella	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	2	conj	_	_
5	Virtasen	Virtanen	PROPN	_	Case=Gen|Number=Sing	4	obl	_	_
6	kanssa	kanssa	ADP	_	AdpType=Post	5	case	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


