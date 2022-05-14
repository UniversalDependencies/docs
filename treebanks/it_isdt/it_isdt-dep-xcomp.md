---
layout: base
title:  'Statistics of xcomp in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `xcomp`

This relation is universal.

2266 nodes (1%) are attached to their parents as `xcomp`.

2243 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.45278022947926.

The following 14 pairs of parts of speech are connected with `xcomp`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (1304; 58% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (514; 23% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (328; 14% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (64; 3% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (22; 1% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (10; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (10; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	"	"	PUNCT	FB	_	5	punct	5:punct	SpaceAfter=No
2	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	3:det	_
3	Pivetti	Pivetti	PROPN	SP	_	5	nsubj	5:nsubj|8:nsubj	_
4	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
5	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
6	benissimo	bene	ADV	B	Degree=Abs	5	advmod	5:advmod	_
7	a	a	ADP	E	_	8	mark	8:mark	_
8	decidere	decidere	VERB	V	VerbForm=Inf	5	xcomp	5:xcomp	_
9	di	di	ADP	E	_	10	case	10:case	_
10	testa	testa	NOUN	S	Gender=Fem|Number=Sing	8	obl	8:obl:di	_
11	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det:poss	10:det:poss	SpaceAfter=No
12	.	.	PUNCT	FS	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 xcomp	color:blue
1	C'	ci	PRON	PC	Clitic=Yes|PronType=Prs	2	expl	2:expl	SpaceAfter=No
2	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	gente	gente	NOUN	S	Gender=Fem|Number=Sing	2	nsubj	2:nsubj|11:nsubj	_
4	nuova	nuovo	ADJ	A	Gender=Fem|Number=Sing	3	amod	3:amod	_
5	da	da	ADP	E	_	6	case	6:case	_
6	ieri	ieri	ADV	B	_	2	advmod	2:advmod	_
7	in	in	ADP	E	_	8	case	8:case	_
8	pista	pista	NOUN	S	Gender=Fem|Number=Sing	2	obl	2:obl:in	SpaceAfter=No
9	,	,	PUNCT	FF	_	11	punct	11:punct	_
10	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	obj	11:obj	_
11	copre	coprire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	2:conj	_
12	veloce	veloce	ADJ	A	Number=Sing	11	xcomp	11:xcomp	SpaceAfter=No
13	:	:	PUNCT	FC	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Così	così	ADV	B	_	2	advmod	2:advmod	_
2	diventa	diventare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	first	first	NOUN	S	_	2	xcomp	2:xcomp	_
4	lady	lady	NOUN	S	_	3	compound	3:compound	SpaceAfter=No
5	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


