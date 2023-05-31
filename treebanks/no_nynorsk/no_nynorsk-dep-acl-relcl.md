---
layout: base
title:  'Statistics of acl:relcl in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="no_nynorsk-dep-acl.html">acl</a></tt>.

4174 nodes (1%) are attached to their parents as `acl:relcl`.

4164 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.59726880689986.

The following 14 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (2533; 61% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (677; 16% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (421; 10% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (230; 6% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (115; 3% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (82; 2% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (32; 1% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (29; 1% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (25; 1% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (11; 0% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="no_nynorsk-pos-X.html">X</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	Dette	dette	PRON	pron	Gender=Neut|Person=3|PronType=Prs	3	nsubj	_	_
2	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	døme	døme	NOUN	subst	Definite=Ind|Gender=Neut|Number=Plur	0	root	_	_
4	på	på	ADP	prep	_	6	case	_	_
5	ulike	ulik	ADJ	adj	Degree=Pos|Number=Plur	6	amod	_	_
6	økonomiar	økonomi	NOUN	subst	Definite=Ind|Gender=Masc|Number=Plur	3	nmod	_	_
7	som	som	SCONJ	sbu	_	9	mark	_	_
8	har	ha	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	makta	makte	VERB	verb	VerbForm=Part	6	acl:relcl	_	_
10	omstilling	omstilling	NOUN	subst	Definite=Ind|Gender=Fem	9	obj	_	SpaceAfter=No
11	.	$.	PUNCT	clb	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	Du	du	PRON	pron	Animacy=Hum|Case=Nom|Person=2|PronType=Prs	4	nsubj	_	_
2	har	ha	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	alt	alt	ADV	adv	_	4	advmod	_	_
4	fått	få	VERB	verb	VerbForm=Part	0	root	_	_
5	med	med	ADP	prep	_	6	case	_	_
6	deg	du	PRON	pron	Animacy=Hum|Case=Acc|Person=2|PronType=Prs	4	obl	_	_
7	det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	4	obj	_	_
8	alle	all	DET	det	Number=Plur|PronType=Tot	9	det	_	_
9	grekarar	grekar	NOUN	subst	Definite=Ind|Gender=Masc|Number=Plur	10	nsubj	_	_
10	veit	vite	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	SpaceAfter=No
11	:	$:	PUNCT	clb	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 acl:relcl	color:blue
1	Svart	svart	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc	2	amod	_	_
2	tv	tv	NOUN	subst	Definite=Ind|Gender=Masc	0	root	_	_
3	og	og	CCONJ	konj	_	5	cc	_	_
4	kvit	kvit	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc	5	amod	_	_
5	tv	tv	NOUN	subst	Definite=Ind|Gender=Masc	2	conj	_	SpaceAfter=No
6	,	$,	PUNCT	<komma>	_	10	punct	_	_
7	som	som	SCONJ	sbu	_	10	mark	_	_
8	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	heilt	heil	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	10	advmod	_	_
10	lik	lik	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc	5	acl:relcl	_	SpaceAfter=No
11	.	$.	PUNCT	clb	_	2	punct	_	_

~~~


