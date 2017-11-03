---
layout: base
title:  'Statistics of xcomp in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `xcomp`

This relation is universal.

2591 nodes (0%) are attached to their parents as `xcomp`.

2468 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.96410652257816.

The following 17 pairs of parts of speech are connected with `xcomp`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (2279; 88% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (147; 6% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (54; 2% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (45; 2% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (12; 0% instances), <tt><a href="es_ancora-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 xcomp	color:blue
1	Y	y	CCONJ	CCONJ	_	11	advmod	_	_
2	tú	tú	PRON	PRON	Case=Nom|Number=Sing|Person=2|PronType=Prs	11	nsubj	_	_
3	con	con	ADP	ADP	AdpType=Prep	5	case	_	_
4	tus	tu	DET	DET	Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	5	det	_	_
5	caras	cara	NOUN	NOUN	Gender=Fem|Number=Plur	11	obl	_	_
6	y	y	CCONJ	CCONJ	_	8	cc	_	_
7	tus	tu	DET	DET	Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	8	det	_	_
8	nombres	nombre	NOUN	NOUN	Gender=Masc|Number=Plur	5	conj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
10	nos	yo	PRON	PRON	Number=Plur|Person=1|PronType=Prs	11	iobj	_	_
11	dejaste	dejar	VERB	VERB	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	0	root	_	_
12	tutear	tutear	VERB	VERB	VerbForm=Inf	11	xcomp	_	_
13	te	tú	PRON	PRON	Number=Plur|Person=2|PronType=Prs	12	obj	_	_
14	.	.	PUNCT	PUNCT	PunctType=Peri	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Yo	yo	PRON	PRON	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	estoy	estar	AUX	AUX	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	dispuesto	dispuesto	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	9	ccomp	_	_
4	a	a	ADP	ADP	AdpType=Prep	5	mark	_	_
5	hacer	hacer	VERB	VERB	VerbForm=Inf	3	xcomp	_	_
6	lo	él	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
7	"	"	PUNCT	PUNCT	PunctType=Quot	3	punct	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
9	afirmó	afirmar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
10	Al	Al	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	11	case	_	MWE=Al_Gore|MWEPOS=PROPN
11	Gore	Gore	PROPN	PROPN	_	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	-	-	PUNCT	PUNCT	PunctType=Dash	4	punct	_	_
2	-	-	PUNCT	PUNCT	PunctType=Dash	4	punct	_	_
3	No	no	ADV	ADV	Polarity=Neg	4	advmod	_	_
4	quería	querer	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	estar	estar	AUX	AUX	VerbForm=Inf	7	cop	_	_
6	con	con	ADP	ADP	AdpType=Prep	7	case	_	_
7	mujeres	mujer	NOUN	NOUN	Gender=Fem|Number=Plur	4	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	PunctType=Peri	4	punct	_	_

~~~


