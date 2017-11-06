---
layout: base
title:  'Statistics of expl in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `expl`

This relation is universal.

185 nodes (1%) are attached to their parents as `expl`.

127 instances of `expl` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82702702702703.

The following 12 pairs of parts of speech are connected with `expl`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (117; 63% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (27; 15% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (26; 14% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-X.html">X</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	men	men	CCONJ	_	_	5	cc	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
4	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	det	_	_
5	far	far	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
6	som	som	PRON	_	PronType=Rel	7	nsubj	_	_
7	dreiv	drive	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	acl:relcl	_	_
8	garden	gard	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	7	obj	_	_
9	da	da	ADV	_	_	7	advmod	_	_
10	ja	ja	INTJ	_	_	7	obl	_	_
11	#	#	PUNCT	_	_	13	punct	_	_
12	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	det	_	_
13	M12	M12	PROPN	_	_	5	appos	_	_
14	?	$?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl	color:blue
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


