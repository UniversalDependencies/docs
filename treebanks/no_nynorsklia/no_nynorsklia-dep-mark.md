---
layout: base
title:  'Statistics of mark in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `mark`

This relation is universal.

248 nodes (2%) are attached to their parents as `mark`.

244 instances of `mark` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25.

The following 14 pairs of parts of speech are connected with `mark`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt> (108; 44% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PART.html">PART</a></tt> (76; 31% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (27; 11% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt> (11; 4% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (7; 3% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt> (6; 2% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark	color:blue
1	ja	ja	INTJ	_	_	3	discourse	_	_
2	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	slutta	slutte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	jo	jo	ADV	_	_	3	advmod	_	_
5	da	da	SCONJ	_	_	7	mark	_	_
6	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	blei	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	11	reparandum	_	_
8	#	#	PUNCT	_	_	7	punct	_	_
9	da	da	SCONJ	_	_	11	mark	_	_
10	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	blei	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	ccomp	_	_
12	sytti	sytti	NUM	_	Number=Plur|NumType=Card	13	nummod	_	_
13	år	år	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	11	xcomp	_	_
14	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	10	appos	_	_
15	veit	vite	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	11	parataxis	_	_
16	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	15	nsubj	_	_
17	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
2	ikkje	ikkje	ADV	_	Polarity=Neg	3	advmod	_	_
3	råd	råd	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
4	å	å	PART	_	_	5	mark	_	_
5	gå	gå	VERB	_	VerbForm=Inf	3	advcl	_	_
6	nokon	nokon	DET	_	Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	stad	stad	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	_
8	da	da	ADV	_	_	5	advmod	_	_
9	?	$?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 mark	color:blue
1	femtiliteren	femtiliter	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
2	for	for	ADP	_	_	4	mark	_	_
3	å	å	PART	_	_	4	mark	_	_
4	køyre	køyre	VERB	_	VerbForm=Inf	1	acl	_	_
5	mjølka	mjølk	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	4	obj	_	_
6	.	$.	PUNCT	_	_	1	punct	_	_

~~~


