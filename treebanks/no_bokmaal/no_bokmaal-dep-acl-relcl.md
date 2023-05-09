---
layout: base
title:  'Statistics of acl:relcl in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="no_bokmaal-dep-acl.html">acl</a></tt>.

4070 nodes (1%) are attached to their parents as `acl:relcl`.

4068 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.54864864864865.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (2877; 71% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (727; 18% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (272; 7% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (132; 3% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (32; 1% instances), <tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (28; 1% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-X.html">X</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:relcl	color:blue
1	Dette	dette	PRON	pron	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	rører	røre	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ved	ved	ADP	prep	_	6	case	_	_
4	de	de	DET	det	Number=Plur|PronType=Dem	6	det	_	_
5	dypeste	dyp	ADJ	adj	Definite=Def|Degree=Sup	6	amod	_	_
6	verdiene	verdi	NOUN	subst	Definite=Def|Gender=Masc|Number=Plur	2	obl	_	_
7	og	og	CCONJ	konj	_	8	cc	_	_
8	holdningene	holdning	NOUN	subst	Definite=Def|Gender=Fem|Number=Plur	6	conj	_	_
9	vi	vi	PRON	pron	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
10	har	ha	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	SpaceAfter=No
11	.	$.	PUNCT	clb	_	2	punct	_	SpaceAfter=No
12	»	$"	PUNCT	<anf>	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl:relcl	color:blue
1	-	$-	PUNCT	<strek>	_	4	punct	_	_
2	Men	men	CCONJ	konj	_	4	cc	_	_
3	det	det	PRON	pron	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	innføres	innføre	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	jo	jo	ADV	adv	_	4	advmod	_	_
6	for	for	ADP	prep	_	8	case	_	_
7	å	å	PART	inf-merke	_	8	mark	_	_
8	beskytte	beskytte	VERB	verb	VerbForm=Inf	4	advcl	_	_
9	dere	dere	PRON	pron	Animacy=Hum|Case=Acc|Number=Plur|Person=2|PronType=Prs	8	obj	_	_
10	som	som	SCONJ	sbu	_	11	mark	_	_
11	jobber	jobbe	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
12	her	her	ADV	prep	_	11	advmod	_	SpaceAfter=No
13	?	$?	PUNCT	clb	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Eller	eller	CCONJ	konj	_	4	cc	_	_
2	var	være	AUX	verb	Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
3	det	det	PRON	pron	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	Sacha	Sacha	PROPN	subst	_	0	root	_	_
5	Baron	Baron	PROPN	subst	_	4	flat:name	_	_
6	Cohen	Cohen	PROPN	subst	_	4	flat:name	_	_
7	han	han	PRON	pron	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	siktet	sikte	VERB	verb	Mood=Ind|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
9	til	til	ADV	prep	_	8	advmod	_	SpaceAfter=No
10	?	$?	PUNCT	clb	_	4	punct	_	_

~~~


