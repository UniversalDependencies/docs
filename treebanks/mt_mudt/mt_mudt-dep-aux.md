---
layout: base
title:  'Statistics of aux in UD_Maltese-MUDT'
udver: '2'
---

## Treebank Statistics: UD_Maltese-MUDT: Relations: `aux`

This relation is universal.
There are 3 language-specific subtypes of `aux`: <tt><a href="mt_mudt-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="mt_mudt-dep-aux-part.html">aux:part</a></tt>, <tt><a href="mt_mudt-dep-aux-pass.html">aux:pass</a></tt>.

647 nodes (1%) are attached to their parents as `aux`.

646 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20865533230294.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (619; 96% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt> (15; 2% instances), <tt><a href="mt_mudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Ma	_	PART	NEG	_	4	aux:neg	_	_
2	tantx	_	VERB	VERB_PSEU	_	4	aux	_	_
3	kien	_	AUX	KIEN	_	4	aux	_	_
4	jinteressah	_	VERB	VERB	_	0	root	_	_
5	jiċċettja	_	VERB	VERB	_	4	xcomp	_	_
6	ma'	_	ADP	PREP	_	7	case	_	_
7	nies	_	NOUN	NOUN	_	5	obl:arg	_	_
8	li	_	SCONJ	COMP	_	10	mark	_	_
9	ma	_	PART	NEG	_	10	aux:neg	_	_
10	jafhomx	_	VERB	VERB	_	7	acl	_	SpaceAfter=No
11	.	_	PUNCT	X_PUN	_	4	punct	_	_

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


