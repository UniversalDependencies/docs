---
layout: base
title:  'Statistics of nsubj:outer in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="no_nynorsk-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="no_nynorsk-dep-nsubj-pass.html">nsubj:pass</a></tt>.

214 nodes (0%) are attached to their parents as `nsubj:outer`.

214 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.0046728971963.

The following 15 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (112; 52% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (31; 14% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (20; 9% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (17; 8% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (7; 3% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:outer	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:outer	color:blue
1	Det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	6	nsubj:outer	_	_
2	kan	kunne	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	_
3	vere	vere	AUX	verb	VerbForm=Inf	6	cop	_	_
4	at	at	SCONJ	sbu	_	6	mark	_	_
5	eg	eg	PRON	pron	Animacy=Hum|Case=Nom|Person=1|PronType=Prs	6	nsubj	_	_
6	ser	sjå	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
7	ei	ein	DET	det	Gender=Fem|PronType=Art	8	det	_	_
8	ørn	ørn	NOUN	subst	Definite=Ind|Gender=Fem	6	obj	_	_
9	på	på	ADP	prep	_	12	case	_	_
10	ganske	ganske	ADV	adv	_	11	advmod	_	_
11	nært	nær	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	12	amod	_	_
12	hald	hald	NOUN	subst	Definite=Ind|Gender=Neut	6	obl	_	SpaceAfter=No
13	.	$.	PUNCT	clb	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:outer	color:blue
1	Det	det	DET	det	Gender=Neut|PronType=Dem	2	det	_	_
2	nedslåande	nedslåande	ADJ	adj	Degree=Pos	8	nsubj:outer	_	_
3	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	8	cop	_	_
4	at	at	SCONJ	sbu	_	8	mark	_	_
5	ein	ein	PRON	pron	Animacy=Hum|PronType=Art,Prs	8	nsubj	_	_
6	berre	berre	ADV	adv	_	8	advmod	_	_
7	må	måtte	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	spørje	spørje	VERB	verb	VerbForm=Inf	0	root	_	_
9	seg	seg	PRON	pron	Case=Acc|PronType=Prs	8	iobj	_	SpaceAfter=No
10	:	$:	PUNCT	clb	_	8	punct	_	_

~~~


