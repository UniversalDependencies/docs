---
layout: base
title:  'Statistics of amod in UD_Galician-TreeGal'
udver: '2'
---

## Treebank Statistics: UD_Galician-TreeGal: Relations: `amod`

This relation is universal.

1388 nodes (5%) are attached to their parents as `amod`.

1071 instances of `amod` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2485590778098.

The following 13 pairs of parts of speech are connected with `amod`: <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (1213; 87% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (127; 9% instances), <tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="gl_treegal-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	Cidadanía	cidadanía	NOUN	Scfs	Gender=Fem|Number=Sing	0	root	_	_
2	galega	galego	ADJ	A0fs	Gender=Fem|Number=Sing	1	amod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	Só	só	ADV	Wn	_	2	advmod	_	_
2	dedican	dedicar	VERB	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	máis	máis	ADV	Wm	_	4	advmod	_	_
4	tempo	tempo	NOUN	Scms	Gender=Masc|Number=Sing	2	obj	_	_
5	en	en	ADP	P	AdpType=Prep	7	case	_	_
6	os	o	DET	Ddmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	Estados	estados	PROPN	Sp00	Gender=Masc|Number=Plur	2	obl	_	_
8	Unidos	unido	ADJ	A0mp	Gender=Masc|Number=Plur	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 amod	color:blue
1	se	se	SCONJ	Cs	_	8	mark	_	_
2	en	en	ADP	P	AdpType=Prep	4	case	_	_
3	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Galicia	Galicia	PROPN	Spfs	Gender=Fem|Number=Sing	8	obl	_	_
5	de	de	ADP	P	AdpType=Prep	6	case	_	_
6	entón	entón	ADV	Wn	_	4	advmod	_	_
7	é	ser	AUX	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	posible	posible	ADJ	A0ms	Gender=Masc|Number=Sing	0	root	_	_
9	atopar	atopar	VERB	V0f000	VerbForm=Inf	8	xcomp	_	_
10	algo	algo	PRON	Inms	Gender=Masc|Number=Sing|PronType=Ind	9	obj	_	_
11	semellante	semellante	ADJ	A0ms	Gender=Masc|Number=Sing	10	amod	_	_
12	entre	entre	ADP	P	AdpType=Prep	15	case	_	_
13	os	o	DET	Ddmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	_	_
14	non	non	ADV	Wm	Polarity=Neg	15	advmod	_	_
15	nacionalistas	nacionalista	NOUN	Scmp	Gender=Masc|Number=Plur	9	obl	_	SpaceAfter=No
16	.	.	PUNCT	Q.	_	8	punct	_	_

~~~


