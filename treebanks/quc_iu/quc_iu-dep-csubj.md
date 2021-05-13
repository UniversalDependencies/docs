---
layout: base
title:  'Statistics of csubj in UD_Kiche-IU'
udver: '2'
---

## Treebank Statistics: UD_Kiche-IU: Relations: `csubj`

This relation is universal.

63 nodes (1%) are attached to their parents as `csubj`.

60 instances of `csubj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.80952380952381.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="quc_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="quc_iu-pos-VERB.html">VERB</a></tt> (32; 51% instances), <tt><a href="quc_iu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="quc_iu-pos-VERB.html">VERB</a></tt> (16; 25% instances), <tt><a href="quc_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="quc_iu-pos-VERB.html">VERB</a></tt> (12; 19% instances), <tt><a href="quc_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="quc_iu-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="quc_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="quc_iu-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="quc_iu-pos-PART.html">PART</a></tt>-<tt><a href="quc_iu-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Man	man	PART	_	Polarity=Neg	2	advmod:neg	_	_
2	utz	utz	ADJ	_	_	0	root	_	_
3	taj	taj	AUX	_	Polarity=Neg	2	aux	_	_
4	xkanaj	kanaj	VERB	_	Aspect=Perf|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|VerbForm=Fin	2	csubj	_	_
5	ri	ri	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	poʼt	poʼt	NOUN	_	_	4	obj	_	_
7	xubʼan	bʼan	VERB	_	Aspect=Perf|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|VerbForm=Fin	6	acl	_	_
8	ri	ri	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	Alkʼul	Alkʼul	PROPN	_	Gender=Fem	7	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Rajawaxik	rajawaxik	NOUN	_	_	0	root	_	_
2	kqakoj	koj	VERB	_	Aspect=Imp|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=1|Subcat=Tran|VerbForm=Fin	1	csubj	_	_
3	utzij	tzij	NOUN	_	Number[psor]=Sing|Person[psor]=3	2	obj	_	_
4	ri	ri	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	Ajqʼij	ajqʼij	NOUN	_	_	3	nmod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Xnaʼtaj	naʼ	VERB	_	Aspect=Perf|Number[subj]=Sing|Person[subj]=3|Subcat=Tran|VerbForm=Fin|Voice=Pass	0	root	_	_
2	waʼim	waʼ	VERB	_	Subcat=Intr|VerbForm=Inf	1	csubj	_	_
3	ch	chi	ADP	_	_	4	case	_	_
4	we	ech	NOUN	_	NounType=Relat|Number[psor]=Sing|Person[psor]=1	1	obl	_	_
5	.	.	PUNCT	_	_	1	punct	_	_

~~~


