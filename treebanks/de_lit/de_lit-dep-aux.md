---
layout: base
title:  'Statistics of aux in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="de_lit-dep-aux-pass.html">aux:pass</a></tt>.

987 nodes (2%) are attached to their parents as `aux`.

563 instances of `aux` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.95542046605876.

The following 10 pairs of parts of speech are connected with `aux`: <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (791; 80% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (64; 6% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (59; 6% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (50; 5% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (11; 1% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="de_lit-pos-DET.html">DET</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_lit-pos-PART.html">PART</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_lit-pos-X.html">X</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 aux	color:blue
1	man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	12	nsubj	_	_
2	müßte	müssen	AUX	VMFIN	_	12	aux	_	_
3	ihm	er	PRON	PPER	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obl:arg	_	_
4	denn	denn	ADV	ADV	_	12	advmod	_	_
5	Helden	Held	NOUN	NN	Case=Acc	12	obj	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	7	punct	_	_
7	Musik	Musik	NOUN	NN	_	5	conj	_	_
8	oder	oder	CCONJ	KON	_	9	cc	_	_
9	Narren	Narr	NOUN	NN	_	5	conj	_	_
10	zum	zu	ADP	APPRART	_	11	case	_	_
11	besten	gut	ADJ	ADJA	_	12	advmod	_	_
12	geben	geben	VERB	VVINF	_	0	root	_	SpaceAfter=No
13	.	.	PUNCT	$.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	Ein	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	3	det	_	_
2	gutes	gut	ADJ	ADJA	_	3	amod	_	_
3	Rätsel	Rätsel	NOUN	NN	Case=Nom	5	nsubj	_	_
4	sollte	sollen	AUX	VMFIN	_	5	aux	_	_
5	witzig	witzig	ADJ	ADJD	_	0	root	_	_
6	sein	sein	AUX	VAINF	_	5	cop	_	SpaceAfter=No
7	;	;	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux	color:blue
1	Der	der	DET	ART	Definite=Def|PronType=Art	2	det	_	_
2	Deutsche	deutsche	NOUN	NN	Case=Nom	6	nsubj	_	_
3	ist	sein	AUX	VAFIN	_	6	aux	_	_
4	lange	lange	ADV	ADV	_	6	advmod	_	_
5	das	der	DET	ART	Definite=Def|PronType=Art	6	det	_	_
6	Hänschen	hänschen	NOUN	NN	Case=Nom	0	root	_	_
7	gewesen	sein	AUX	VAPP	_	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	$.	_	6	punct	_	_

~~~


