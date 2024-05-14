---
layout: base
title:  'Statistics of iobj in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `iobj`

This relation is universal.

529 nodes (0%) are attached to their parents as `iobj`.

528 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26465028355388.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (306; 58% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (155; 29% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (46; 9% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (12; 2% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (4; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 iobj	color:blue
1	Hell	helle	VERB	verb	Mood=Imp|VerbForm=Fin	0	root	_	_
2	kjøtdeigen	kjøtdeig	NOUN	subst	Gender=Masc	1	obj	_	_
3	på	på	ADP	prep	_	5	case	_	_
4	ein	ein	DET	det	Gender=Masc|PronType=Art	5	det	_	_
5	tallerken	tallerken	NOUN	subst	Definite=Ind|Gender=Masc	1	obl	_	SpaceAfter=No
6	,	$,	PUNCT	<komma>	_	8	punct	_	_
7	og	og	CCONJ	konj	_	8	cc	_	_
8	la	la	VERB	verb	Mood=Imp|VerbForm=Fin	1	conj	_	_
9	den	den	PRON	pron	Gender=Fem,Masc|Person=3|PronType=Prs	8	iobj	_	_
10	kolne	kolne	VERB	verb	VerbForm=Inf	8	xcomp	_	SpaceAfter=No
11	.	$.	PUNCT	clb	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	La	la	VERB	verb	Mood=Imp|VerbForm=Fin	0	root	_	_
2	deigen	deig	NOUN	subst	Gender=Masc	1	iobj	_	_
3	heve	heve	VERB	verb	VerbForm=Inf	1	xcomp	_	_
4	til	til	ADP	prep	_	6	case	_	_
5	dobbel	dobbel	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc	6	amod	_	_
6	storleik	storleik	NOUN	subst	Definite=Ind|Gender=Masc	3	obl	_	SpaceAfter=No
7	,	$,	PUNCT	<komma>	_	10	punct	_	_
8	ca.	ca.	ADV	adv	Abbr=Yes	10	advmod	_	_
9	ein	ein	DET	det	Gender=Masc|PronType=Art	10	det	_	_
10	time	time	NOUN	subst	Definite=Ind|Gender=Masc	3	obl	_	SpaceAfter=No
11	.	$.	PUNCT	clb	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Han	han	PRON	pron	Case=Nom|Gender=Masc|Person=3|PronType=Prs	2	nsubj	_	_
2	spurde	spørje	VERB	verb	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	Solveig	Solveig	PROPN	subst	Gender=Fem	2	iobj	_	_
4	om	om	SCONJ	sbu	_	7	mark	_	_
5	ho	ho	PRON	pron	Case=Nom|Gender=Fem|Person=3|PronType=Prs	7	nsubj	_	_
6	kunne	kunne	AUX	verb	Mood=Ind|Tense=Past|VerbForm=Fin	7	aux	_	_
7	tenkje	tenkje	VERB	verb	VerbForm=Inf	2	xcomp	_	_
8	seg	seg	PRON	pron	Case=Acc|PronType=Prs	7	iobj	_	_
9	å	å	PART	inf-merke	_	10	mark	_	_
10	bli	bli	VERB	verb	VerbForm=Inf	7	xcomp	_	_
11	visitor	visitor	NOUN	subst	_	10	xcomp	_	SpaceAfter=No
12	.	$.	PUNCT	clb	_	2	punct	_	_

~~~


