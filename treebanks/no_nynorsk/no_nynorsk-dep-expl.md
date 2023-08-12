---
layout: base
title:  'Statistics of expl in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `expl`

This relation is universal.

3463 nodes (1%) are attached to their parents as `expl`.

2826 instances of `expl` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95668495524112.

The following 11 pairs of parts of speech are connected with `expl`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (1811; 52% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (918; 27% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (511; 15% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (95; 3% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (71; 2% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (40; 1% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 expl	color:blue
1	Jaudå	jaudå	INTJ	interj	_	4	discourse	_	SpaceAfter=No
2	,	$,	PUNCT	<komma>	_	1	punct	_	_
3	eg	eg	PRON	pron	Animacy=Hum|Case=Nom|Person=1|PronType=Prs	4	nsubj	_	_
4	har	ha	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	4	obj	_	SpaceAfter=No
6	,	$,	PUNCT	<komma>	_	10	punct	_	_
7	og	og	CCONJ	konj	_	10	cc	_	_
8	den	den	PRON	pron	Gender=Fem,Masc|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	vert	verte	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	brukt	bruke	ADJ	adj	Definite=Ind|Gender=Fem,Masc|VerbForm=Part	4	conj	_	_
11	rett	rett	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	10	advmod	_	_
12	som	som	SCONJ	sbu	_	14	mark	_	_
13	det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	14	expl	_	_
14	er	vere	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	11	advcl	_	SpaceAfter=No
15	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 expl	color:blue
1	-	$-	PUNCT	<strek>	_	4	punct	_	_
2	Det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	4	expl	_	_
3	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	galenskap	galenskap	NOUN	subst	Definite=Ind|Gender=Masc	0	root	_	_
5	å	å	PART	inf-merke	_	6	mark	_	_
6	øydeleggja	øydeleggje	VERB	verb	VerbForm=Inf	4	csubj	_	_
7	ein	ein	DET	det	Gender=Masc|PronType=Art	8	det	_	_
8	økonomi	økonomi	NOUN	subst	Definite=Ind|Gender=Masc	6	obj	_	_
9	på	på	ADP	prep	_	11	case	_	_
10	denne	denne	DET	det	Gender=Masc|PronType=Dem	11	det	_	_
11	måten	måte	NOUN	subst	Gender=Masc	6	obl	_	SpaceAfter=No
12	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


