---
layout: base
title:  'Statistics of nummod in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `nummod`

This relation is universal.

3147 nodes (1%) are attached to their parents as `nummod`.

3038 instances of `nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32666031140769.

The following 17 pairs of parts of speech are connected with `nummod`: <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (2726; 87% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (122; 4% instances), <tt><a href="de_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (58; 2% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (54; 2% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (49; 2% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (37; 1% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (31; 1% instances), <tt><a href="de_gsd-pos-X.html">X</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (31; 1% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (17; 1% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-X.html">X</a></tt>-<tt><a href="de_gsd-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5	5	NUM	CARD	NumType=Card	2	nummod	_	_
2	Sterne	Stern	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
3	und	und	CCONJ	KON	_	6	cc	_	_
4	ein	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
5	großes	groß	ADJ	ADJA	Case=Nom|Gender=Neut|Number=Sing	6	amod	_	_
6	Lob	Lob	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	2	conj	_	_
7	an	an	ADP	APPR	_	10	case	_	_
8	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	gesamte	gesamt	ADJ	ADJA	Case=Acc|Gender=Fem|Number=Sing	10	amod	_	_
10	Firma	Firma	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	6	nmod	_	_
11	Wintergartenbau	Wintergartenbau	PROPN	NN	Case=Acc|Gender=Masc|Number=Sing	10	appos	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Knapp	knapp	ADV	ADJD	_	2	advmod	_	_
2	20	20	NUM	CARD	NumType=Card	3	nummod	_	_
3	Euro	Euro	PROPN	NN	Case=Acc|Gender=Masc|Number=Plur	8	obj	_	_
4	hat	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
5	je	je	ADV	ADV	_	8	advmod	_	_
6	ein	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Teil	Teil	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
8	gekostet	kosten	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Buna	Buna	PROPN	NE	Case=Nom|Number=Sing	3	nsubj	_	_
2	allein	allein	ADV	ADV	_	1	advmod	_	_
3	beschäftigte	beschäftigen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	früher	früh	ADV	ADJD	_	3	advmod	_	_
5	etwa	etwa	ADV	ADV	_	6	advmod	_	_
6	20	20	NUM	CARD	NumType=Card	7	nummod	_	_
7	000	000	NUM	CARD	NumType=Card	8	nummod	_	_
8	Menschen	Mensch	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	3	punct	_	_

~~~


