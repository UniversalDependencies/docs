---
layout: base
title:  'Statistics of aux:part in UD_Maltese-MUDT'
udver: '2'
---

## Treebank Statistics: UD_Maltese-MUDT: Relations: `aux:part`

This relation is a language-specific subtype of <tt><a href="mt_mudt-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="mt_mudt-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="mt_mudt-dep-aux-pass.html">aux:pass</a></tt>.

354 nodes (1%) are attached to their parents as `aux:part`.

352 instances of `aux:part` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1638418079096.

The following 6 pairs of parts of speech are connected with `aux:part`: <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (337; 95% instances), <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="mt_mudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="mt_mudt-pos-ADV.html">ADV</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="mt_mudt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:part	color:blue
1	Hu	_	PRON	PRON_PERS	_	2	nsubj	_	_
2	rrifjuta	_	VERB	VERB	_	0	root	_	_
3	l-	_	DET	DEF	_	4	det	_	SpaceAfter=No
4	akkużi	_	NOUN	NOUN	_	2	obj	_	_
5	li	_	SCONJ	COMP	_	10	mark	_	_
6	l-	_	DET	DEF	_	7	det	_	SpaceAfter=No
7	Gvern	_	NOUN	NOUN	_	10	nsubj	_	_
8	Malti	_	ADJ	ADJ	_	7	amod	_	_
9	qed	_	AUX	PROG	_	10	aux:part	_	_
10	jimxi	_	VERB	VERB	_	4	acl	_	_
11	bi	_	ADP	PREP	_	12	case	_	_
12	djufija	_	NOUN	NOUN	_	10	obl	_	SpaceAfter=No
13	.	_	PUNCT	X_PUN	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 aux:part	color:blue
1	Kartelluni	_	NOUN	NOUN	_	4	nsubj	_	_
2	minnhom	_	PRON	PREP_PRON	_	1	nmod	_	_
3	saħansitra	_	ADV	FOC	_	4	discourse	_	_
4	staqsew	_	VERB	VERB	_	0	root	_	_
5	jekk	_	SCONJ	CONJ_SUB	_	12	mark	_	_
6	dan	_	PRON	PRON_DEM	_	12	nsubj	_	_
7	hux	_	AUX	PRON_PERS	_	12	aux:part	_	_
8	se	_	AUX	FUT	_	12	aux:part	_	_
9	jkun	_	AUX	KIEN	_	12	cop	_	_
10	l-	_	DET	DEF	_	12	det	_	SpaceAfter=No
11	aħħar	_	ADJ	ADJ	_	12	amod	_	_
12	Karnival	_	NOUN	NOUN	_	4	ccomp	_	SpaceAfter=No
13	.	_	PUNCT	X_PUN	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 aux:part	color:blue
1	(	_	PUNCT	X_PUN	_	2	punct	_	SpaceAfter=No
2	Interruzzjonijiet	_	NOUN	NOUN	_	9	list	_	SpaceAfter=No
3	)	_	PUNCT	X_PUN	_	2	punct	_	_
4	Lili	_	PRON	LIL_PRON	_	9	obj	_	_
5	ħadd	_	PRON	PRON_INDEF	_	9	nsubj	_	_
6	m'	_	PART	NEG	_	9	advmod:neg	_	SpaceAfter=No
7	hu	_	AUX	PRON_PERS	_	9	aux:neg	_	_
8	qed	_	AUX	PROG	_	9	aux:part	_	_
9	jirrispondini	_	VERB	VERB	_	0	root	_	SpaceAfter=No
10	,	_	PUNCT	X_PUN	_	9	punct	_	_
11	allavolja	_	SCONJ	CONJ_SUB	_	14	mark	_	_
12	qed	_	AUX	PROG	_	14	aux:part	_	_
13	inkun	_	AUX	KIEN	_	14	cop	_	_
14	prudenti	_	ADJ	ADJ	_	9	advcl	_	_
15	fil-	_	ADP	PREP_DEF	_	16	case:det	_	SpaceAfter=No
16	mistoqsijiet	_	NOUN	NOUN	_	14	obl	_	_
17	li	_	SCONJ	COMP	_	18	mark	_	_
18	nagħmel	_	VERB	VERB	_	16	acl	_	SpaceAfter=No
19	.	_	PUNCT	X_PUN	_	9	punct	_	_

~~~


