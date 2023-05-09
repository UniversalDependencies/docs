---
layout: base
title:  'Statistics of root in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `root`

This relation is universal.

17575 nodes (6%) are attached to their parents as `root`.

17575 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.90241820768137.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (11270; 64% instances), -<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (2768; 16% instances), -<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (2503; 14% instances), -<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (375; 2% instances), -<tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt> (169; 1% instances), -<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (152; 1% instances), -<tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt> (84; 0% instances), -<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (72; 0% instances), -<tt><a href="no_nynorsk-pos-X.html">X</a></tt> (61; 0% instances), -<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (57; 0% instances), -<tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt> (51; 0% instances), -<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (8; 0% instances), -<tt><a href="no_nynorsk-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	I	i	ADP	prep	_	2	case	_	_
2	dag	dag	NOUN	subst	Definite=Ind|Gender=Masc	5	obl	_	_
3	har	ha	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	eg	eg	PRON	pron	Animacy=Hum|Case=Nom|Person=1|PronType=Prs	5	nsubj	_	_
5	fylt	fyle	VERB	verb	VerbForm=Part	0	root	_	_
6	dei	dei	PRON	pron	Animacy=Hum|Case=Acc|Number=Plur|Person=3|PronType=Prs	5	obj	_	_
7	med	med	ADP	prep	_	9	case	_	_
8	steikt	steikje	ADJ	adj	Definite=Ind|Gender=Fem,Masc|VerbForm=Part	9	amod	_	_
9	kyllingkjøtdeig	kyllingkjøtdeig	NOUN	subst	Definite=Ind|Gender=Masc	5	obl	_	SpaceAfter=No
10	.	$.	PUNCT	clb	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Kyllingkjøtdeig	kyllingkjøtdeig	NOUN	subst	Definite=Ind|Gender=Masc	5	nsubj	_	_
2	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	ofte	ofte	ADJ	adj	Degree=Pos	5	advmod	_	_
4	på	på	ADP	prep	_	5	case	_	_
5	tilbod	tilbod	NOUN	subst	Definite=Ind|Gender=Neut	0	root	_	SpaceAfter=No
6	,	$,	PUNCT	<komma>	_	12	punct	_	_
7	og	og	CCONJ	konj	_	12	cc	_	_
8	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	12	cop	_	_
9	proteinrik	proteinrik	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc	12	amod	_	_
10	og	og	CCONJ	konj	_	11	cc	_	_
11	god	god	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc	9	conj	_	_
12	mat	mat	NOUN	subst	Definite=Ind|Gender=Masc	5	conj	_	SpaceAfter=No
13	.	$.	PUNCT	clb	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Då	då	ADV	adv	_	4	advmod	_	_
2	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	4	expl	_	_
4	viktig	viktig	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	0	root	_	_
5	å	å	PART	inf-merke	_	6	mark	_	_
6	ha	ha	VERB	verb	VerbForm=Inf	4	csubj	_	_
7	eit	ein	DET	det	Gender=Neut|PronType=Art	9	det	_	_
8	godt	god	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	9	amod	_	_
9	brød	brød	NOUN	subst	Definite=Ind|Gender=Neut	6	obj	_	_
10	å	å	PART	inf-merke	_	11	mark	_	_
11	smøre	smøre	VERB	verb	VerbForm=Inf	9	acl	_	_
12	matpakke	matpakke	NOUN	subst	Definite=Ind|Gender=Fem	11	obj	_	_
13	av	av	ADP	prep	_	12	nmod	_	SpaceAfter=No
14	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


