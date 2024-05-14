---
layout: base
title:  'Statistics of obl:arg in UD_Maltese-MUDT'
udver: '2'
---

## Treebank Statistics: UD_Maltese-MUDT: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="mt_mudt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="mt_mudt-dep-obl-agent.html">obl:agent</a></tt>.

301 nodes (1%) are attached to their parents as `obl:arg`.

296 instances of `obl:arg` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.44186046511628.

The following 10 pairs of parts of speech are connected with `obl:arg`: <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt> (215; 71% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt> (64; 21% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-PROPN.html">PROPN</a></tt> (12; 4% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:arg	color:blue
1	Imma	_	CCONJ	CONJ_CORD	_	5	cc	_	_
2	fil-	_	ADP	PREP_DEF	_	3	case:det	_	SpaceAfter=No
3	fatt	_	NOUN	NOUN	_	5	obl	_	_
4	kienet	_	AUX	KIEN	_	5	aux	_	_
5	tintuża	_	VERB	VERB	_	0	root	_	_
6	għal	_	ADP	PREP	_	8	case	_	_
7	ħafna	_	DET	QUAN	_	8	det	_	_
8	affarijiet	_	NOUN	NOUN	_	5	obl:arg	_	_
9	oħra	_	ADJ	ADJ	_	8	amod	_	SpaceAfter=No
10	.	_	PUNCT	X_PUN	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:arg	color:blue
1	Kont	_	AUX	KIEN	_	2	aux	_	_
2	nagħmel	_	VERB	VERB	_	0	root	_	_
3	minn	_	ADP	PREP	_	4	case	_	_
4	kollox	_	PRON	PRON_INDEF	_	2	obl:arg	_	_
5	biex	_	SCONJ	CONJ_SUB	_	6	mark	_	_
6	noqgħod	_	VERB	VERB	_	2	advcl	_	_
7	imqareb	_	VERB	PART_PASS	_	6	xcomp	_	_
8	u	_	CCONJ	CONJ_CORD	_	10	cc	_	_
9	ma	_	PART	NEG	_	10	advmod:neg	_	_
10	nobdihiex	_	VERB	VERB	_	2	conj	_	SpaceAfter=No
11	.	_	PUNCT	X_PUN	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:arg	color:blue
1	Għadni	_	VERB	VERB_PSEU	_	0	root	_	_
2	sal-	_	ADP	PREP_DEF	_	3	case:det	_	SpaceAfter=No
3	lum	_	NOUN	NOUN	_	6	obl	_	_
4	xi	_	DET	QUAN	_	5	det	_	_
5	drabi	_	NOUN	NOUN	_	6	obl	_	_
6	noħlom	_	VERB	VERB	_	1	xcomp	_	_
7	b'	_	ADP	PREP	_	8	case	_	SpaceAfter=No
8	Reno	_	PROPN	NOUN_PROP	_	6	obl:arg	_	_
9	ħolm	_	NOUN	NOUN	_	6	obj	_	_
10	stramb	_	ADJ	ADJ	_	9	amod	_	_
11	u	_	CCONJ	CONJ_CORD	_	12	cc	_	_
12	biżarr	_	ADJ	ADJ	_	10	conj	_	_
13	li	_	SCONJ	COMP	_	15	mark	_	_
14	aħjar	_	ADV	ADV	_	15	advmod	_	_
15	inħallih	_	VERB	VERB	_	9	acl	_	_
16	mistur	_	VERB	PART_PASS	_	15	xcomp	_	SpaceAfter=No
17	.	_	PUNCT	X_PUN	_	1	punct	_	_

~~~


