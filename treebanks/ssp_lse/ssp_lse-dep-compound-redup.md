---
layout: base
title:  'Statistics of compound:redup in UD_Spanish_Sign_Language-LSE'
udver: '2'
---

## Treebank Statistics: UD_Spanish_Sign_Language-LSE: Relations: `compound:redup`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `compound`: <tt><a href="ssp_lse-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="ssp_lse-dep-compound-vsc.html">compound:vsc</a></tt>.

18 nodes (1%) are attached to their parents as `compound:redup`.

18 instances of `compound:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44444444444444.

The following 5 pairs of parts of speech are connected with `compound:redup`: <tt><a href="ssp_lse-pos-VERB.html">VERB</a></tt>-<tt><a href="ssp_lse-pos-VERB.html">VERB</a></tt> (10; 56% instances), <tt><a href="ssp_lse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ssp_lse-pos-NOUN.html">NOUN</a></tt> (3; 17% instances), <tt><a href="ssp_lse-pos-PRON.html">PRON</a></tt>-<tt><a href="ssp_lse-pos-PRON.html">PRON</a></tt> (3; 17% instances), <tt><a href="ssp_lse-pos-ADV.html">ADV</a></tt>-<tt><a href="ssp_lse-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="ssp_lse-pos-NUM.html">NUM</a></tt>-<tt><a href="ssp_lse-pos-NUM.html">NUM</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:redup	color:blue
1	HOMBR-	_	NOUN	N	_	2	reparandum	_	Gloss=MAN-
2	CERDO	_	NOUN	N	_	0	root	_	Gloss=PIG
3	SABER	_	VERB	V.P	_	2	parataxis	_	Gloss=KNOW
4	SABER	_	VERB	V.P	_	3	compound:redup	_	Gloss=KNOW
5	INDX	_	PRON	Pro	_	3	nsubj	_	Gloss=INDX

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:redup	color:blue
1	PERRO	_	NOUN	N.P	_	3	nsubj	_	Gloss=DOG
2	FALLO	_	ADV	Adv	_	3	advmod	_	Gloss=FAIL
3	cl.e(2d):PERRO-caer+de-VENTANA	_	VERB	V.D	_	0	root	_	Gloss=cl
4	cl.d(C):frasco-forma	_	NOUN	N.D	_	3	obl	_	Gloss=cl
5	cl.d(C):frasco-forma	_	NOUN	N.D	_	4	compound:redup	_	Gloss=cl
6	CON	_	ADP	Prep	_	4	case	_	Gloss=WITH

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound:redup	color:blue
1	VER	_	VERB	V	_	0	root	_	Gloss=SEE
2	ÚLTIMO	_	ADJ	Adj	_	3	amod	_	Gloss=LAST
3	B.L(3)	_	PRON	Pro	_	1	obj	_	Gloss=L.B(3)
4	INDX	_	DET	Pro	_	3	det	_	Gloss=INDX
5	CÓMO	_	PRON	Interr	_	1	xcomp	_	Gloss=HOW
6	CASA	_	NOUN	N	_	5	nmod	_	Gloss=HOME
7	CÓMO	_	PRON	Interr	_	5	compound:redup	_	Gloss=HOW

~~~


