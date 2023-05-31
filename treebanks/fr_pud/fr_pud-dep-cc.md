---
layout: base
title:  'Statistics of cc in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `cc`

This relation is universal.

544 nodes (2%) are attached to their parents as `cc`.

544 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.78308823529412.

The following 10 pairs of parts of speech are connected with `cc`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (213; 39% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (204; 38% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (51; 9% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (45; 8% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (9; 2% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (8; 1% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cc	color:blue
1	Des	un	DET	DT	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	2	det	_	wordform=des
2	recherches	recherche	NOUN	NN	Gender=Fem|Number=Plur	9	nsubj	_	_
3	et	et	CCONJ	CC	_	5	cc	_	_
4	des	un	DET	DT	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	expéditions	expédition	NOUN	NN	Gender=Fem|Number=Plur	2	conj	_	_
6	sur	sur	ADP	IN	_	8	case	_	_
7	l'	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	île	île	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	_
9	sont	être	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	en	en	ADP	IN	_	11	case	_	_
11	cours	cours	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc	color:blue
1	Et	et	CCONJ	CC	_	7	cc	_	wordform=et
2	ensuite	ensuite	ADV	RB	_	7	advmod	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	la	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	pub	pub	NOUN	NN	Gender=Fem|Number=Sing	7	nsubj	_	_
6	se	se	PRON	PRP	Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	termine	terminer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Durán	Durán	PROPN	NNP	Gender=Masc|Number=Sing	2	nsubj	_	_
2	agit	agir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	en	en	ADP	IN	_	6	case	_	_
4	tant	tant	ADV	RB	_	3	fixed	_	_
5	que	que	SCONJ	IN	_	3	fixed	_	_
6	porte-parole	porte-parole	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
7	et	et	CCONJ	CC	_	8	cc	_	_
8	Ángel	Ángel	PROPN	NNP	Gender=Masc|Number=Sing	2	conj	_	_
9	Pintado	Pintado	PROPN	NNP	Gender=Masc|Number=Sing	8	flat:name	_	_
10	comme	comme	ADP	IN	_	11	case	_	_
11	trésorier	trésorier	NOUN	NN	Gender=Masc|Number=Sing	8	orphan	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


