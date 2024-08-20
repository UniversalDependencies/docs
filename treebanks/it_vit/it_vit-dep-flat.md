---
layout: base
title:  'Statistics of flat in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="it_vit-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="it_vit-dep-flat-name.html">flat:name</a></tt>.

863 nodes (0%) are attached to their parents as `flat`.

863 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27114716106605.

The following 17 pairs of parts of speech are connected with `flat`: <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (475; 55% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (258; 30% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (59; 7% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (45; 5% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="it_vit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_vit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-SYM.html">SYM</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	Scuole	scuola	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
2	materne	materno	ADJ	A	Gender=Fem|Number=Plur	1	amod	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	1	punct	_	_
4	20	20	NUM	N	NumType=Card	1	nmod	_	_
5	aprile	aprile	NOUN	S	Gender=Masc|Number=Sing	4	flat	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat	color:blue
1	Produzione	produzione	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
2	(	(	PUNCT	FB	_	5	punct	_	SpaceAfter=No
3	in	in	ADP	E	_	5	case	_	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	industria	industria	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
6	-	-	PUNCT	FF	_	5	punct	_	_
7	indici	indice	NOUN	S	Gender=Masc|Number=Plur	5	appos	_	_
8	1990	1990	NUM	N	NumType=Card	7	nummod	_	_
9	equ	equ	NOUN	S	_	8	flat	_	_
10	100	100	NUM	N	NumType=Card	8	flat	_	SpaceAfter=No
11	)	)	PUNCT	FB	_	5	punct	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Merone	Merone	PROPN	SP	_	0	root	_	_
2	(	(	PUNCT	FB	_	3	punct	_	SpaceAfter=No
3	quotaz	Quotaz	NOUN	S	_	1	appos	_	_
4	azioni	azione	NOUN	S	Gender=Fem|Number=Plur	3	compound	_	_
5	ordinarie	ordinario	ADJ	A	Gender=Fem|Number=Plur	4	amod	_	SpaceAfter=No
6	)	)	PUNCT	FB	_	3	punct	_	_
7	maggio	maggio	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	_
8	1994	1994	NUM	N	NumType=Card	7	flat	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	1	punct	_	_

~~~


