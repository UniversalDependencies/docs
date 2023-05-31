---
layout: base
title:  'Statistics of discourse in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `discourse`

This relation is universal.

167 nodes (0%) are attached to their parents as `discourse`.

134 instances of `discourse` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.23952095808383.

The following 11 pairs of parts of speech are connected with `discourse`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (87; 52% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (32; 19% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (22; 13% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (9; 5% instances), <tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (8; 5% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (4; 2% instances), <tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 discourse	color:blue
1	-	$-	PUNCT	<strek>	_	10	punct	_	_
2	Nei	nei	INTJ	interj	_	10	discourse	_	SpaceAfter=No
3	,	$,	PUNCT	<komma>	_	2	punct	_	_
4	i	i	ADP	prep	_	6	case	_	_
5	det	det	DET	det	Gender=Neut|PronType=Dem	6	det	_	_
6	minste	liten	ADJ	adj	Degree=Sup	10	advmod	_	_
7	ikkje	ikkje	ADV	adv	_	10	advmod	_	_
8	på	på	ADP	prep	_	10	case	_	_
9	kort	kort	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc	10	amod	_	_
10	sikt	sikt	NOUN	subst	Definite=Ind|Gender=Fem	0	root	_	SpaceAfter=No
11	.	$.	PUNCT	clb	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Ja	ja	INTJ	interj	_	5	discourse	_	SpaceAfter=No
2	,	$,	PUNCT	<komma>	_	1	punct	_	_
3	det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	5	nsubj	_	_
4	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	bra	bra	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	0	root	_	SpaceAfter=No
6	.	$.	PUNCT	clb	_	5	punct	_	_

~~~


