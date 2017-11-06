---
layout: base
title:  'Statistics of acl in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="es_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

165 nodes (1%) are attached to their parents as `acl`.

154 instances of `acl` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.76363636363636.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (94; 57% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (56; 34% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	El	_	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	máximo	_	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	permitido	_	VERB	VBN	Gender=Masc|Number=Sing	2	acl	_	_
4	es	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
5	de	_	ADP	IN	_	7	case	_	_
6	5 000	_	NUM	CD	Gender=Masc	7	nummod	_	OrigForm=5000
7	$	_	NOUN	NN	Gender=Masc|Number=Plur	4	obl	_	_
8	por	_	ADP	IN	_	9	case	_	_
9	persona	_	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	Una	_	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
2	pequeña	_	ADJ	JJ	Gender=Fem|Number=Sing	3	amod	_	_
3	ciudad	_	NOUN	NN	Gender=Fem|Number=Sing	7	nsubj	_	_
4	con	_	ADP	IN	_	6	case	_	_
5	dos	_	NUM	CD	Gender=Masc	6	nummod	_	_
6	minaretes	_	NOUN	NN	Gender=Masc|Number=Plur	3	nmod	_	_
7	pasa	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
8	deslizándo	_	VERB	VBG	Aspect=Imp|Voice=Act	7	acl	_	_
9	se	_	PRON	SE	Person=3	8	compound:prt	_	_
10	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 acl	color:blue
1	En	_	ADP	IN	_	2	case	_	_
2	2007	_	NUM	CD	Gender=Masc	4	obl	_	_
3	la	_	DET	DT	Gender=Fem|Number=Sing	4	det	_	_
4	película	_	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
5	más	_	ADV	RBR	_	6	advmod	_	_
6	exitosa	_	ADJ	JJ	Gender=Fem|Number=Sing	4	amod	_	_
7	fue	_	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	4	cop	_	_
8	"	_	PUNCT	``	_	10	punct	_	SpaceAfter=No
9	El	_	DET	DT	Gender=Masc|Number=Sing	10	det	_	Proper=True
10	Greco	_	PROPN	NNP	Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
11	"	_	PUNCT	''	_	10	punct	_	SpaceAfter=No
12	,	_	PUNCT	,	_	13	punct	_	_
13	dirigida	_	VERB	VBN	Gender=Fem|Number=Sing	10	acl	_	_
14	por	_	ADP	IN	_	15	case	_	_
15	Yannis	_	PROPN	NNP	Gender=Masc|Number=Sing	13	obl	_	_
16	Smaragdis	_	PROPN	NNP	Gender=Masc|Number=Sing	15	flat:name	_	SpaceAfter=No
17	.	_	PUNCT	.	_	4	punct	_	_

~~~


