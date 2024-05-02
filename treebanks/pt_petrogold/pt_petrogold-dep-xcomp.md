---
layout: base
title:  'Statistics of xcomp in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `xcomp`

This relation is universal.

2226 nodes (1%) are attached to their parents as `xcomp`.

2222 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.1707097933513.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1412; 63% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (447; 20% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (313; 14% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt> (39; 2% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (8; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	Menor	menor	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
2	número	número	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
3	de	de	ADP	_	_	4	case	_	_
4	perfilagem	perfilagem	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	que	que	PRON	_	Gender=Fem|Number=Sing|PronType=Rel	6	nsubj	_	_
6	podem	poder	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	ser	ser	AUX	_	VerbForm=Inf	8	aux:pass	_	_
8	executadas	executar	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	6	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	processo	processo	NOUN	_	Gender=Masc|Number=Sing	4	nsubj:pass	_	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	conhecido	conhecer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
5	como	como	ADP	_	_	6	case	_	_
6	filtração	filtração	NOUN	_	Gender=Fem|Number=Sing	4	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	Estas	este	DET	_	Gender=Fem|Number=Plur|PronType=Dem	2	det	_	_
2	relações	relação	NOUN	_	Gender=Fem|Number=Plur	4	nsubj	_	_
3	constitutivas	constitutivo	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
4	podem	poder	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ser	ser	AUX	_	VerbForm=Inf	7	cop	_	_
6	bastante	bastante	ADV	_	_	7	advmod	_	_
7	complicadas	complicado	ADJ	_	Gender=Fem|Number=Plur	4	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


