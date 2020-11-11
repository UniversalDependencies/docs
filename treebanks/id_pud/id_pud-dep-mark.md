---
layout: base
title:  'Statistics of mark in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `mark`

This relation is universal.

439 nodes (2%) are attached to their parents as `mark`.

439 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.47380410022779.

The following 6 pairs of parts of speech are connected with `mark`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt> (399; 91% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt> (23; 5% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt> (12; 3% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="id_pud-pos-INTJ.html">INTJ</a></tt>-<tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	Bukan	bukan	PART	_	Polarity=Neg	2	advmod	_	_
2	itu	itu	PRON	_	PronType=Dem	0	root	_	_
3	yang	yang	SCONJ	_	_	5	mark	_	_
4	kita	kita	PRON	_	Clusivity=In|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
5	butuhkan	butuh	VERB	_	Mood=Ind|Voice=Act	2	csubj	_	_
6	di	di	ADP	_	_	7	case	_	_
7	negara	negara	NOUN	_	Number=Sing	5	obl	_	_
8	ini	ini	DET	_	PronType=Dem	7	det	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	saudara-saudara	saudara	NOUN	_	Number=Plur	2	vocative	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark	color:blue
1	Von	Von	PROPN	_	_	3	nsubj	_	_
2	Beust	Beust	PROPN	_	_	1	flat:name	_	_
3	membenarkan	benar	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	peningkatan	tingkat	NOUN	_	Number=Sing	3	obj	_	_
5	biaya	biaya	NOUN	_	Number=Sing	4	nmod	_	_
6	itu	itu	DET	_	PronType=Dem	4	det	_	_
7	sebagai	bagai	SCONJ	_	_	8	mark	_	_
8	kurang	kurang	ADJ	_	_	3	advcl	_	_
9	nya	nya	DET	_	_	8	det	_	_
10	perencanaan	rencana	NOUN	_	Number=Sing	8	nsubj	_	_
11	terperinci	perinci	VERB	_	Mood=Ind|Voice=Pass	10	acl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 mark	color:blue
1	Pada	pada	ADP	_	_	3	case	_	_
2	satu	satu	NUM	_	NumType=Card	3	nummod	_	_
3	kesempatan	sempat	NOUN	_	Number=Sing	5	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	disiratkan	sirat	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
6	bahwa	bahwa	SCONJ	_	_	10	mark	_	_
7	ia	ia	PRON	_	Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
8	adalah	adalah	AUX	_	_	10	cop	_	_
9	seorang	orang	DET	_	Number=Sing|PronType=Ind	10	det	_	_
10	agen	agen	NOUN	_	Number=Sing	5	advcl	_	_
11	yang	yang	PRON	_	PronType=Rel	12	nsubj	_	_
12	menyamar	samar	VERB	_	Mood=Ind|Voice=Act	10	acl:relcl	_	_
13	yang	yang	SCONJ	_	_	17	mark	_	_
14	target	target	NOUN	_	Number=Sing	17	nsubj	_	_
15	nya	nya	PRON	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	14	nmod:poss	_	_
16	adalah	adalah	AUX	_	_	17	cop	_	_
17	Homer	Homer	PROPN	_	_	10	acl:relcl	_	SpaceAfter=No
18	.	.	PUNCT	_	_	5	punct	_	_

~~~


