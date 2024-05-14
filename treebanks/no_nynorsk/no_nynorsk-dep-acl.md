---
layout: base
title:  'Statistics of acl in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="no_nynorsk-dep-acl-relcl.html">acl:relcl</a></tt>.

1357 nodes (0%) are attached to their parents as `acl`.

1354 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.15033161385409.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (1106; 82% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (97; 7% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (81; 6% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (52; 4% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl	color:blue
1	Dette	dette	PRON	pron	Gender=Neut|Person=3|PronType=Prs	5	nsubj	_	_
2	kan	kunne	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	ikkje	ikkje	PART	adv	Polarity=Neg	5	advmod	_	_
4	vere	vere	AUX	verb	VerbForm=Inf	5	cop	_	_
5	noko	noko	PRON	pron	Gender=Neut|Person=3|PronType=Prs	0	root	_	_
6	å	å	PART	inf-merke	_	7	mark	_	_
7	trå	trå	VERB	verb	VerbForm=Inf	5	acl	_	_
8	etter	etter	ADV	prep	_	7	advmod	_	SpaceAfter=No
9	?	$?	PUNCT	clb	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	-	$-	PUNCT	<strek>	_	3	punct	_	_
2	Dei	dei	PRON	pron	Animacy=Hum|Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
3	sender	sende	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	signal	signal	NOUN	subst	Definite=Ind|Gender=Neut|Number=Plur	3	obj	_	_
5	om	om	ADP	prep	_	10	case	_	_
6	at	at	SCONJ	sbu	_	10	mark	_	_
7	jentene	jente	NOUN	subst	Gender=Fem|Number=Plur	10	nsubj	_	_
8	ikkje	ikkje	PART	adv	Polarity=Neg	10	advmod	_	_
9	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	gode	god	ADJ	adj	Degree=Pos|Number=Plur	4	acl	_	_
11	nok	nok	ADV	adv	_	10	advmod	_	SpaceAfter=No
12	.	$.	PUNCT	clb	_	3	punct	_	_

~~~


