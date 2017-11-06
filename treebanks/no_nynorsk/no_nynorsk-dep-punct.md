---
layout: base
title:  'Statistics of punct in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `punct`

This relation is universal.

33455 nodes (11%) are attached to their parents as `punct`.

29753 instances of `punct` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.66584964878195.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (16926; 51% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (7693; 23% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (4813; 14% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (1723; 5% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (482; 1% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (455; 1% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (436; 1% instances), <tt><a href="no_nynorsk-pos-X.html">X</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (303; 1% instances), <tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (244; 1% instances), <tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (172; 1% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (164; 0% instances), <tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (21; 0% instances), <tt><a href="no_nynorsk-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (14; 0% instances), <tt><a href="no_nynorsk-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt>-<tt><a href="no_nynorsk-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 punct	color:blue
1	I	i	ADP	_	_	2	case	_	_
2	dag	dag	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	_
3	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	fylt	fyle	VERB	_	VerbForm=Part	0	root	_	_
6	dei	dei	PRON	_	Animacy=Hum|Case=Acc|Number=Plur|Person=3|PronType=Prs	5	obj	_	_
7	med	med	ADP	_	_	9	case	_	_
8	steikt	steikje	ADJ	_	Definite=Ind|Number=Sing|VerbForm=Part	9	amod	_	_
9	kyllingkjøtdeig	kyllingkjøtdeig	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Kyllingkjøtdeig	kyllingkjøtdeig	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	ofte	ofte	ADJ	_	Degree=Pos	5	advmod	_	_
4	på	på	ADP	_	_	5	case	_	_
5	tilbod	tilbod	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	5	punct	_	_
7	og	og	CCONJ	_	_	12	cc	_	_
8	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	12	cop	_	_
9	proteinrik	proteinrik	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	12	amod	_	_
10	og	og	CCONJ	_	_	11	cc	_	_
11	god	god	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	9	conj	_	_
12	mat	mat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	conj	_	SpaceAfter=No
13	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 14 punct	color:blue
1	Då	då	ADV	_	_	4	advmod	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	viktig	viktig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	å	å	PART	_	_	6	mark	_	_
6	ha	ha	VERB	_	VerbForm=Inf	4	csubj	_	_
7	eit	ein	DET	_	Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
8	godt	god	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	_
9	brød	brød	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	6	obj	_	_
10	å	å	PART	_	_	11	mark	_	_
11	smøre	smøre	VERB	_	VerbForm=Inf	9	acl	_	_
12	matpakke	matpakke	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	11	obj	_	_
13	av	av	ADP	_	_	12	nmod	_	SpaceAfter=No
14	.	$.	PUNCT	_	_	4	punct	_	_

~~~


