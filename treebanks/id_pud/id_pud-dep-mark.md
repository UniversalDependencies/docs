---
layout: base
title:  'Statistics of mark in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `mark`

This relation is universal.

447 nodes (2%) are attached to their parents as `mark`.

447 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.47427293064877.

The following 8 pairs of parts of speech are connected with `mark`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt> (404; 90% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt> (22; 5% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt> (14; 3% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-INTJ.html">INTJ</a></tt>-<tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


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
9	nya	nya	DET	_	PronType=Dem	8	det	_	_
10	perencanaan	rencana	NOUN	_	Number=Sing	8	nsubj	_	_
11	terperinci	perinci	VERB	_	Mood=Ind|Voice=Pass	10	acl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 mark	color:blue
1	Ini	ini	PRON	_	PronType=Dem	3	nsubj	_	_
2	tidak	tidak	PART	_	Polarity=Neg	3	advmod	_	_
3	populer	populer	ADJ	_	_	0	root	_	_
4	karena	karena	ADP	_	_	5	case	_	_
5	lokasi	lokasi	NOUN	_	Number=Sing	3	obl	_	_
6	nya	nya	PRON	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
7	yang	yang	SCONJ	_	_	11	mark	_	_
8	sering	sering	ADV	_	_	11	advmod	_	_
9	kali	kali	NOUN	_	Number=Sing	8	fixed	_	_
10	di	di	ADP	_	_	11	case	_	_
11	pedalaman	dalam	NOUN	_	Number=Sing	5	acl:relcl	_	_
12	tanpa	tanpa	ADP	_	_	13	case	_	_
13	akses	akses	NOUN	_	Number=Sing	11	nmod	_	_
14	jalan	jalan	NOUN	_	Number=Sing	13	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	3	punct	_	_

~~~


