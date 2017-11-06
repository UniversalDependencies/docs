---
layout: base
title:  'Statistics of iobj in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `iobj`

This relation is universal.

669 nodes (0%) are attached to their parents as `iobj`.

528 instances of `iobj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.62481315396114.

The following 7 pairs of parts of speech are connected with `iobj`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (445; 67% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (163; 24% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (38; 6% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (12; 2% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 iobj	color:blue
1	Hell	helle	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
2	kjøtdeigen	kjøtdeig	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	1	obj	_	_
3	på	på	ADP	_	_	5	case	_	_
4	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	tallerken	tallerken	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	1	punct	_	_
7	og	og	CCONJ	_	_	8	cc	_	_
8	la	la	VERB	_	Mood=Imp|VerbForm=Fin	1	conj	_	_
9	den	den	PRON	_	Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	8	iobj	_	_
10	kolne	kolne	VERB	_	VerbForm=Inf	8	xcomp	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	La	la	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
2	deigen	deig	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	1	iobj	_	_
3	heve	heve	VERB	_	VerbForm=Inf	1	xcomp	_	_
4	til	til	ADP	_	_	6	case	_	_
5	dobbel	dobbel	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	6	amod	_	_
6	storleik	storleik	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
7	,	$,	PUNCT	_	_	6	punct	_	_
8	ca.	ca.	ADV	_	Abbr=Yes	10	advmod	_	_
9	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	time	time	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 iobj	color:blue
1	Dei	dei	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
2	gav	gje	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	produksjonsselskapet	produksjonsselskap	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	4	nmod	_	_
4	Eyeworks	Eyeworks	PROPN	_	_	2	iobj	_	_
5	Dinamo	Dinamo	PROPN	_	_	4	flat:name	_	_
6	eit	ein	DET	_	Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	ultimatum	ultimatum	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	2	obj	_	SpaceAfter=No
8	:	$:	PUNCT	_	_	2	punct	_	_

~~~


