---
layout: base
title:  'Statistics of aux in UD_Maltese-MUDT'
udver: '2'
---

## Treebank Statistics: UD_Maltese-MUDT: Relations: `aux`

This relation is universal.
There are 3 language-specific subtypes of `aux`: <tt><a href="mt_mudt-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="mt_mudt-dep-aux-part.html">aux:part</a></tt>, <tt><a href="mt_mudt-dep-aux-pass.html">aux:pass</a></tt>.

643 nodes (1%) are attached to their parents as `aux`.

642 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2099533437014.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (631; 98% instances), <tt><a href="mt_mudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (6; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Dikjarazzjoni	_	NOUN	NOUN	_	0	root	_	_
2	li	_	SCONJ	COMP	_	4	mark	_	_
3	kien	_	AUX	KIEN	_	4	aux	_	_
4	irrepetiha	_	VERB	VERB	_	1	acl	_	_
5	l-	_	DET	DEF	_	6	det	_	SpaceAfter=No
6	ġimgha	_	NOUN	NOUN	_	1	obl	_	_
7	li	_	SCONJ	COMP	_	8	mark	_	_
8	għaddiet	_	VERB	VERB	_	6	acl	_	SpaceAfter=No
9	.	_	PUNCT	X_PUN	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 22 aux	color:blue
1	ONOR	_	NOUN	X_ABV	_	9	list	_	SpaceAfter=No
2	.	_	PUNCT	X_PUN	_	1	punct	_	_
3	JOE	_	PROPN	NOUN_PROP	_	1	flat:name	_	_
4	MIZZI	_	PROPN	NOUN_PROP	_	1	flat:name	_	SpaceAfter=No
5	:	_	PUNCT	X_PUN	_	1	punct	_	_
6	Il-	_	DET	DEF	_	7	det	_	SpaceAfter=No
7	Ministru	_	NOUN	NOUN	_	9	nsubj	_	_
8	qed	_	AUX	PROG	_	9	aux:part	_	_
9	isemmi	_	VERB	VERB	_	0	root	_	_
10	l-	_	DET	DEF	_	11	det	_	SpaceAfter=No
11	etika	_	NOUN	NOUN	_	9	obj	_	_
12	u	_	CCONJ	CONJ_CORD	_	14	cc	_	_
13	jien	_	PRON	PRON_PERS	_	14	nsubj	_	_
14	ngħidlu	_	VERB	VERB	_	9	conj	_	_
15	li	_	SCONJ	COMP	_	18	mark	_	_
16	l-	_	DET	DEF	_	17	det	_	SpaceAfter=No
17	etika	_	NOUN	NOUN	_	18	nsubj	_	_
18	titlob	_	VERB	VERB	_	14	ccomp	_	_
19	li	_	SCONJ	COMP	_	25	mark	_	_
20	l-	_	DET	DEF	_	21	det	_	SpaceAfter=No
21	ministri	_	NOUN	NOUN	_	25	nsubj	_	_
22	jkunu	_	AUX	KIEN	_	25	aux	_	_
23	qegħdin	_	AUX	PART_ACT	_	25	cop	_	_
24	hawn	_	ADV	ADV	_	25	advmod	_	_
25	preżenti	_	ADJ	ADJ	_	18	ccomp	_	_
26	fil-	_	ADP	PREP_DEF	_	27	case:det	_	SpaceAfter=No
27	Kamra	_	NOUN	NOUN	_	25	obl	_	SpaceAfter=No
28	.	_	PUNCT	X_PUN	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 aux	color:blue
1	Il-	_	DET	DEF	_	2	det	_	SpaceAfter=No
2	kuġina	_	NOUN	NOUN	_	4	nsubj	_	_
3	kienet	_	AUX	KIEN	_	4	aux	_	_
4	tiġi	_	VERB	VERB	_	0	root	_	_
5	ta'	_	ADP	GEN	_	6	case	_	_
6	spiss	_	ADV	ADV	_	4	advmod	_	_
7	toqgħod	_	VERB	VERB	_	4	xcomp	_	_
8	miegħi	_	PRON	PREP_PRON	_	7	obl	_	_
9	meta	_	SCONJ	CONJ_SUB	_	13	mark	_	_
10	ommi	_	NOUN	NOUN	_	13	nsubj	_	_
11	kienet	_	AUX	KIEN	_	13	aux	_	_
12	tkun	_	AUX	KIEN	_	13	cop	_	_
13	xogħol	_	NOUN	NOUN	_	4	advcl	_	_
14	ta'	_	ADP	GEN	_	15	case	_	_
15	billejl	_	ADV	ADV	_	13	nmod:poss	_	SpaceAfter=No
16	.	_	PUNCT	X_PUN	_	4	punct	_	_

~~~


