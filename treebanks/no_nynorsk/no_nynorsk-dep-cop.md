---
layout: base
title:  'Statistics of cop in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `cop`

This relation is universal.

7736 nodes (3%) are attached to their parents as `cop`.

7506 instances of `cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.22388831437435.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (3740; 48% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (2714; 35% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (379; 5% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (221; 3% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (216; 3% instances), <tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (197; 3% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (121; 2% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (98; 1% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (46; 1% instances), <tt><a href="no_nynorsk-pos-X.html">X</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 cop	color:blue
1	Dette	dette	PRON	pron	Gender=Neut|Person=3|PronType=Prs	4	obj	_	_
2	har	ha	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	eg	eg	PRON	pron	Animacy=Hum|Case=Nom|Person=1|PronType=Prs	4	nsubj	_	_
4	lært	lære	VERB	verb	VerbForm=Part	0	root	_	_
5	av	av	ADP	prep	_	6	case	_	_
6	søstra	søster	NOUN	subst	Gender=Fem	4	obl	_	_
7	mi	min	PRON	det	Gender=Fem|Poss=Yes|PronType=Prs	6	nmod:poss	_	SpaceAfter=No
8	,	$,	PUNCT	<komma>	_	13	punct	_	_
9	og	og	CCONJ	konj	_	13	cc	_	_
10	det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	13	nsubj	_	_
11	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	heilt	heil	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	13	advmod	_	_
13	genialt	genial	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	4	conj	_	SpaceAfter=No
14	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Utfordringa	utfordring	NOUN	subst	Gender=Fem	5	nsubj:outer	_	_
2	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	at	at	SCONJ	sbu	_	5	mark	_	_
4	brød	brød	NOUN	subst	Definite=Ind|Gender=Neut|Number=Plur	5	nsubj	_	_
5	held	halde	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	seg	seg	PRON	pron	Case=Acc|PronType=Prs	5	obj	_	_
7	ikkje	ikkje	ADV	adv	_	5	advmod	_	_
8	ferske	fersk	ADJ	adj	Degree=Pos|Number=Plur	5	xcomp	_	_
9	så	så	ADV	adv	_	10	advmod	_	_
10	lenge	lenge	ADJ	adj	Degree=Pos	5	advmod	_	SpaceAfter=No
11	.	$.	PUNCT	clb	_	5	punct	_	_

~~~


