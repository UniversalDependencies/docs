---
layout: base
title:  'Statistics of csubj in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `csubj`

This relation is universal.

22 nodes (0%) are attached to their parents as `csubj`.

22 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.59090909090909.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (10; 45% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (7; 32% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 csubj	color:blue
1	nei	nei	INTJ	_	_	6	discourse	_	_
2	#	#	PUNCT	_	_	6	punct	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	obl	_	_
4	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	6	cop	_	_
5	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
6	best	god	ADJ	_	Definite=Ind|Degree=Sup	0	root	_	_
7	å	å	PART	_	_	9	mark	_	_
8	#	#	PUNCT	_	_	9	punct	_	_
9	sleppe	sleppe	VERB	_	VerbForm=Inf	6	csubj	_	_
10	ifrå	ifrå	ADP	_	_	3	case	_	_
11	alt	all	DET	_	Gender=Neut|Number=Sing|PronType=Tot	12	det	_	_
12	saman	saman	ADV	_	_	3	appos	_	_
13	da	da	ADV	_	_	9	advmod	_	_
14	for	for	ADP	_	_	15	case	_	_
15	da	da	ADV	_	_	9	advmod	_	_
16	.	$.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
1	å	å	INTJ	_	_	3	discourse	_	_
2	da	da	ADV	_	_	3	advmod	_	_
3	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
5	å	å	PART	_	_	6	mark	_	_
6	køyre	køyre	VERB	_	VerbForm=Inf	3	csubj	_	_
7	tur	tur	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	6	obj	_	_
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 csubj	color:blue
1	somme	somme	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	reparandum	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
4	heller	heller	ADV	_	_	5	advmod	_	_
5	da	da	ADV	_	_	0	root	_	_
6	at	at	SCONJ	_	_	8	mark	_	_
7	dei	dei	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=3|PronType=Prs	8	nsubj	_	_
8	hadde	ha	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	csubj	_	_
9	mange	mange	ADJ	_	Degree=Pos|Number=Plur	10	amod	_	_
10	nøter	not	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	8	obj	_	_
11	så	så	ADV	_	_	13	advmod	_	_
12	vart	bli	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	13	aux:pass	_	_
13	kasta	kaste	VERB	_	VerbForm=Part	10	acl:relcl	_	_
14	etter	etter	ADP	_	_	18	mark	_	_
15	einannan	einannan	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|PronType=Rcp	18	nsubj	_	_
16	liksom	liksom	ADV	_	_	18	advmod	_	_
17	#	#	PUNCT	_	_	18	punct	_	_
18	skøytte	skøyte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	13	advcl	_	_
19	og	og	CCONJ	_	_	13	conj	_	_
20	.	$.	PUNCT	_	_	5	punct	_	_

~~~


