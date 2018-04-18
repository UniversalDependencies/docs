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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	men	men	CCONJ	_	_	6	cc	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	6	cop	_	_
4	jo	jo	ADV	_	_	6	advmod	_	_
5	litt	litt	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	6	advmod	_	_
6	vanskeleg	vanskeleg	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
7	å	å	PART	_	_	8	mark	_	_
8	få	få	VERB	_	VerbForm=Inf	6	csubj	_	_
9	tak	tak	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	8	obj	_	_
10	i	i	ADP	_	_	11	case	_	_
11	den	den	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	9	nmod	_	_
12	.	$.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	hende	hende	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	expl	_	_
3	at	at	SCONJ	_	_	5	mark	_	_
4	ein	ein	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|PronType=Art,Prs	5	nsubj	_	_
5	drog	dra	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	1	csubj	_	_
6	vest	vest	ADP	_	_	5	compound:prt	_	_
7	til	til	ADP	_	_	8	case	_	_
8	Island	Island	PROPN	_	_	5	obl	_	_
9	av	av	ADP	_	_	5	compound:prt	_	_
10	og	og	CCONJ	_	_	11	cc	_	_
11	til	til	ADP	_	_	9	conj	_	_
12	?	$?	PUNCT	_	_	1	punct	_	_

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
14	etter	etter	SCONJ	_	_	18	mark	_	_
15	einannan	einannan	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|PronType=Rcp	18	nsubj	_	_
16	liksom	liksom	ADV	_	_	18	advmod	_	_
17	#	#	PUNCT	_	_	18	punct	_	_
18	skøytte	skøyte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	13	advcl	_	_
19	og	og	CCONJ	_	_	13	conj	_	_
20	.	$.	PUNCT	_	_	5	punct	_	_

~~~


