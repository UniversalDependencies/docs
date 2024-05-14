---
layout: base
title:  'Statistics of aux in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="no_nynorsk-dep-aux-pass.html">aux:pass</a></tt>.

7756 nodes (3%) are attached to their parents as `aux`.

7722 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84940691077875.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (6760; 87% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (598; 8% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (284; 4% instances), <tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (56; 1% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (25; 0% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (17; 0% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	Deigen	deig	NOUN	subst	Gender=Masc	6	nsubj	_	_
2	må	måtte	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	_
3	ikkje	ikkje	PART	adv	Polarity=Neg	6	advmod	_	_
4	vere	vere	AUX	verb	VerbForm=Inf	6	cop	_	_
5	for	for	ADV	adv	_	6	advmod	_	_
6	fast	fast	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc	0	root	_	SpaceAfter=No
7	,	$,	PUNCT	<komma>	_	9	punct	_	_
8	då	då	ADV	adv	_	9	advmod	_	_
9	vert	verte	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	6	conj	_	_
10	brøda	brød	NOUN	subst	Gender=Neut|Number=Plur	9	nsubj	_	_
11	tunge	tung	ADJ	adj	Degree=Pos|Number=Plur	9	xcomp	_	_
12	og	og	CCONJ	konj	_	13	cc	_	_
13	kjedelege	kjedeleg	ADJ	adj	Degree=Pos|Number=Plur	11	conj	_	SpaceAfter=No
14	.	$.	PUNCT	clb	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 aux	color:blue
1	-	$-	PUNCT	<strek>	_	7	punct	_	_
2	Stortinget	Stortinget	PROPN	subst	Gender=Neut	7	nsubj	_	_
3	skal	skulle	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	7	aux	_	_
4	vere	vere	AUX	verb	VerbForm=Inf	7	cop	_	_
5	den	den	DET	det	Gender=Fem|PronType=Dem	7	det	_	_
6	lovgjevande	lovgjevande	ADJ	adj	Degree=Pos	7	amod	_	_
7	makta	makt	NOUN	subst	Gender=Fem	0	root	_	_
8	i	i	ADP	prep	_	9	case	_	_
9	Noreg	Noreg	PROPN	subst	_	7	nmod	_	SpaceAfter=No
10	.	$.	PUNCT	clb	_	7	punct	_	_

~~~


