---
layout: base
title:  'Statistics of nsubj:pass in UD_Maltese-MUDT'
udver: '2'
---

## Treebank Statistics: UD_Maltese-MUDT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="mt_mudt-dep-nsubj.html">nsubj</a></tt>.

215 nodes (0%) are attached to their parents as `nsubj:pass`.

143 instances of `nsubj:pass` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.96279069767442.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt> (169; 79% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-PROPN.html">PROPN</a></tt> (19; 9% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt> (13; 6% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-X.html">X</a></tt> (7; 3% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	Reklutati	_	VERB	PART_PASS	_	0	root	_	_
2	persuni	_	NOUN	NOUN	_	1	nsubj:pass	_	_
3	nvoluti	_	VERB	PART_PASS	_	2	acl	_	_
4	fi	_	ADP	PREP	_	5	case	_	_
5	spjunaġġ	_	NOUN	NOUN	_	3	obl	_	_
6	fit-	_	ADP	PREP_DEF	_	7	case:det	_	SpaceAfter=No
7	tmeninijiet	_	NOUN	NOUN	_	3	obl	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:pass	color:blue
1	Għax	_	SCONJ	CONJ_SUB	_	9	mark	_	_
2	għoxrin	_	NUM	NUM_CRD	_	3	nummod	_	_
3	sena	_	NOUN	NOUN	_	9	obl	_	_
4	ilu	_	VERB	VERB_PSEU	_	3	case	_	SpaceAfter=No
5	,	_	PUNCT	X_PUN	_	3	punct	_	_
6	ix-	_	DET	DEF	_	7	det	_	SpaceAfter=No
7	xmara	_	NOUN	NOUN	_	8	compound	_	_
8	Ġordan	_	PROPN	NOUN_PROP	_	9	nsubj:pass	_	_
9	imtliet	_	VERB	VERB	_	0	root	_	_
10	bil-	_	ADP	PREP_DEF	_	11	case:det	_	SpaceAfter=No
11	ħars	_	NOUN	NOUN	_	9	obl:arg	_	_
12	ċass	_	ADJ	ADJ	_	11	amod	_	_
13	ta'	_	ADP	GEN	_	14	case	_	_
14	niesu	_	NOUN	NOUN	_	11	nmod:poss	_	SpaceAfter=No
15	.	_	PUNCT	X_PUN	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Dawn	_	PRON	PRON_DEM	_	3	nsubj:pass	_	_
2	ġew	_	AUX	VERB	_	3	aux:pass	_	_
3	megħjuna	_	VERB	PART_PASS	_	0	root	_	_
4	biex	_	SCONJ	CONJ_SUB	_	5	mark	_	_
5	jemigraw	_	VERB	VERB	_	3	xcomp	_	_
6	lejn	_	ADP	PREP	_	7	case	_	_
7	pajjiżi	_	NOUN	NOUN	_	5	obl	_	_
8	oħra	_	ADJ	ADJ	_	7	amod	_	SpaceAfter=No
9	.	_	PUNCT	X_PUN	_	3	punct	_	_

~~~


