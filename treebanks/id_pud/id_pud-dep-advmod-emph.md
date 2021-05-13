---
layout: base
title:  'Statistics of advmod:emph in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-advmod.html">advmod</a></tt>.

48 nodes (0%) are attached to their parents as `advmod:emph`.

48 instances of `advmod:emph` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04166666666667.

The following 8 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (30; 63% instances), <tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (6; 13% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (5; 10% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (2; 4% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (2; 4% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="id_pud-pos-PART.html">PART</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	Itu	itu	PRON	_	PronType=Dem	0	root	_	_
2	lah	lah	PART	_	_	1	advmod:emph	_	_
3	yang	yang	PRON	_	PronType=Rel	4	nsubj	_	_
4	membuat	buat	VERB	_	Mood=Ind|Voice=Act	1	csubj	_	_
5	kami	kami	PRON	_	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	4	obj	_	_
6	tetap	tetap	ADV	_	_	7	advmod	_	_
7	kembali	kembali	VERB	_	Mood=Ind|Voice=Act	4	xcomp	_	_
8	lagi	lagi	ADV	_	_	7	advmod	_	_
9	dan	dan	CCONJ	_	_	10	cc	_	_
10	lagi	lagi	ADV	_	_	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod:emph	color:blue
1	Charles	Charles	PROPN	_	_	9	nsubj:pass	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	meski	meski	SCONJ	_	_	7	mark	_	_
4	pun	pun	PART	_	_	3	advmod:emph	_	_
5	tindakan	tindak	NOUN	_	Number=Sing	7	nsubj	_	_
6	nya	nya	PRON	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
7	keras	keras	ADJ	_	_	9	advcl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	dipandang	pandang	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
10	sebagai	bagai	ADP	_	_	11	case	_	_
11	penguasa	kuasa	NOUN	_	Number=Sing	9	obl	_	_
12	yang	yang	PRON	_	PronType=Rel	13	nsubj	_	_
13	berempati	empati	VERB	_	Mood=Ind|Voice=Act	11	acl:relcl	_	_
14	terhadap	hadap	ADP	_	_	15	case	_	_
15	kebutuhan	butuh	NOUN	_	Number=Sing	13	obl	_	_
16	Belanda	Belanda	PROPN	_	_	15	nmod	_	SpaceAfter=No
17	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 advmod:emph	color:blue
1	Ia	ia	PRON	_	Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	percaya	percaya	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
3	bahwa	bahwa	SCONJ	_	_	10	mark	_	_
4	tak	tak	PART	_	Polarity=Neg	5	advmod	_	_
5	seorang	orang	NOUN	_	Number=Sing	10	nsubj	_	_
6	pun	pun	PART	_	_	5	advmod:emph	_	_
7	yang	yang	PRON	_	PronType=Rel	8	nsubj	_	_
8	menunggu	tunggu	VERB	_	Mood=Ind|Voice=Act	5	acl:relcl	_	_
9	kita	kita	PRON	_	Clusivity=In|Number=Plur|Person=1|PronType=Prs	8	obj	_	_
10	menunggu	tunggu	VERB	_	Mood=Ind|Voice=Act	2	ccomp	_	_
11	kita	kita	PRON	_	Clusivity=In|Number=Plur|Person=1|PronType=Prs	10	obj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


