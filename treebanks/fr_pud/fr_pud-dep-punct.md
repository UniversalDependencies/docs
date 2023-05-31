---
layout: base
title:  'Statistics of punct in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `punct`

This relation is universal.

2554 nodes (10%) are attached to their parents as `punct`.

1690 instances of `punct` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.44596711041503.

The following 12 pairs of parts of speech are connected with `punct`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (1345; 53% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (636; 25% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (140; 5% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (140; 5% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (77; 3% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (66; 3% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (61; 2% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (46; 2% instances), <tt><a href="fr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (33; 1% instances), <tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="fr_pud-pos-DET.html">DET</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="fr_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 punct	color:blue
1	C'	ce	PRON	PDEM	PronType=Dem	2	nsubj	_	SpaceAfter=No|wordform=c'
2	est	être	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	parfois	parfois	ADV	RB	_	2	advmod	_	_
4	comme	comme	ADP	IN	_	7	case	_	_
5	un	un	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	super	super	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	_
7	pouvoir	pouvoir	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 punct	color:blue
1	5000	5000	NUM	CD	_	2	nummod	_	_
2	dollars	dollar	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
3	par	par	ADP	IN	_	4	case	_	_
4	personne	personne	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	maximum	maximum	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
8	autorisé	autoriser	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 punct	color:blue
1	Peut-être	peut-être	ADV	RB	_	8	advmod	_	wordform=peut-être
2	que	que	ADP	IN	_	1	fixed	_	_
3	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	code	code	NOUN	NN	Gender=Masc|Number=Sing	8	nsubj	_	_
5	vestimentaire	vestimentaire	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
6	était	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
7	trop	trop	ADV	RB	_	8	advmod	_	_
8	strict	strict	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


