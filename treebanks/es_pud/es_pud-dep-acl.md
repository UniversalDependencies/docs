---
layout: base
title:  'Statistics of acl in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="es_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

116 nodes (0%) are attached to their parents as `acl`.

109 instances of `acl` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.54310344827586.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (103; 89% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	máximo	máximo	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	permitido	permitir	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
4	es	ser	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	de	de	ADP	IN	_	7	case	_	_
6	5 000	5 000	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	7	nummod	_	_
7	$	$	NOUN	NN	Gender=Masc|Number=Plur	4	obl	_	_
8	por	por	ADP	IN	_	9	case	_	_
9	persona	persona	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 acl	color:blue
1	En	en	ADP	IN	_	2	case	_	_
2	2007	2007	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	4	obl	_	_
3	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	película	película	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
5	más	más	ADV	RBR	Degree=Cmp	6	advmod	_	_
6	exitosa	exitoso	ADJ	JJ	Gender=Fem|Number=Sing	4	amod	_	_
7	fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
8	"	"	PUNCT	``	PunctType=Quot	10	punct	_	SpaceAfter=No
9	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	Proper=True
10	Greco	Greco	PROPN	NNP	Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
11	"	"	PUNCT	''	PunctType=Quot	10	punct	_	SpaceAfter=No
12	,	,	PUNCT	,	PunctType=Comm	13	punct	_	_
13	dirigida	dirigir	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	10	acl	_	_
14	por	por	ADP	IN	_	15	case	_	_
15	Yannis	Yannis	PROPN	NNP	Gender=Masc|Number=Sing	13	obl:agent	_	_
16	Smaragdis	Smaragdis	PROPN	NNP	Gender=Masc|Number=Sing	15	flat:name	_	SpaceAfter=No
17	.	.	PUNCT	.	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 acl	color:blue
1	No	no	ADV	RB	Polarity=Neg	3	advmod	_	_
2	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	expl:pass	_	_
3	sabe	saber	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	de	de	ADP	IN	_	6	case	_	_
5	que	que	DET	WDT	Gender=Masc|Number=Sing|PronType=Rel	6	det	_	_
6	modo	modo	NOUN	NN	Gender=Masc|Number=Sing	8	obl	_	_
7	han	haber	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	8	aux	_	_
8	trabajado	trabajar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	csubj:pass	_	_
9	juntos	junto	ADJ	JJ	Gender=Masc|Number=Plur	11	acl	_	_
10	ambos	ambo	DET	DT	Gender=Masc|Number=Plur|NumType=Card|PronType=Tot	11	det	_	_
11	dramaturgos	dramaturgo	NOUN	NN	Gender=Masc|Number=Plur	8	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	.	PunctType=Peri	3	punct	_	_

~~~


