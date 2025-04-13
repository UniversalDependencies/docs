---
layout: base
title:  'Statistics of cc in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="es_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

570 nodes (2%) are attached to their parents as `cc`.

570 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.31052631578947.

The following 15 pairs of parts of speech are connected with `cc`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (225; 39% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (219; 38% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (53; 9% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (32; 6% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (12; 2% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="es_pud-pos-X.html">X</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cc	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	programa	programa	NOUN	NN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	gana	ganar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	dinero	dinero	NOUN	NN	Gender=Masc|Number=Sing	3	obj	_	_
5	mediante	mediante	ADP	IN	_	7	case	_	_
6	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	patrocinio	patrocinio	NOUN	NN	Gender=Masc|Number=Sing	3	obl	_	_
8	y	y	CCONJ	CC	_	10	cc	_	_
9	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	publicidad	publicidad	NOUN	NN	Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
11	.	.	PUNCT	.	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Le	él	PRON	PRP	Case=Dat|Number=Sing|Person=3|PronType=Prs	2	obl:arg	_	_
2	apasiona	apasionar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	guitarra	guitarra	NOUN	NN	Gender=Fem|Number=Sing	2	obj	_	_
5	y	y	CCONJ	CC	_	6	cc	_	_
6	dio	dar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	_
7	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	concierto	concierto	NOUN	NN	Gender=Masc|Number=Sing	6	obj	_	_
9	allí	allí	ADV	RB	_	6	advmod	_	_
10	ese	ese	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	12	det	_	_
11	mismo	mismo	ADJ	JJ	Gender=Masc|Number=Sing	12	amod	_	_
12	año	año	NOUN	NN	Gender=Masc|Number=Sing	6	obl:tmod	_	SpaceAfter=No
13	.	.	PUNCT	.	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Durán	Durán	PROPN	NNP	Gender=Masc|Number=Sing	2	nsubj	_	_
2	ejerce	ejercer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	de	de	ADP	IN	_	4	case	_	_
4	portavoz	portavoz	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
5	y	y	CCONJ	CC	_	6	cc	_	_
6	Ángel	Ángel	PROPN	NNP	Gender=Masc|Number=Sing	2	conj	_	orig_deprel=nsubj
7	Pintado	Pintado	PROPN	NNP	Gender=Masc|Number=Sing	6	flat:name	_	_
8	de	de	ADP	IN	_	6	orphan	_	orig_deprel=obl
9	tesorero	tesorero	NOUN	NN	Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	.	PunctType=Peri	2	punct	_	_

~~~


