---
layout: base
title:  'Statistics of cc in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `cc`

This relation is universal.

10714 nodes (3%) are attached to their parents as `cc`.

10714 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.38865036400971.

The following 16 pairs of parts of speech are connected with `cc`: <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (4181; 39% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (3831; 36% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (1383; 13% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (860; 8% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (137; 1% instances), <tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (95; 1% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (73; 1% instances), <tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (68; 1% instances), <tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (65; 1% instances), <tt><a href="no_bokmaal-pos-PART.html">PART</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (11; 0% instances), <tt><a href="no_bokmaal-pos-SYM.html">SYM</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Og	og	CCONJ	_	_	3	cc	_	_
2	Aftenposten	Aftenposten	PROPN	_	Gender=Masc	3	nsubj	_	_
3	leverer	levere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	$,	PUNCT	_	_	6	punct	_	_
5	også	også	ADV	_	_	6	advmod	_	_
6	her	her	ADV	_	_	3	advmod	_	SpaceAfter=No
7	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	rører	røre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ved	ved	ADP	_	_	6	case	_	_
4	de	de	DET	_	Number=Plur|PronType=Dem	6	det	_	_
5	dypeste	dyp	ADJ	_	Definite=Def|Degree=Sup	6	amod	_	_
6	verdiene	verdi	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	2	obl	_	_
7	og	og	CCONJ	_	_	8	cc	_	_
8	holdningene	holdning	NOUN	_	Definite=Def|Gender=Fem|Number=Plur	6	conj	_	_
9	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
10	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	2	punct	_	SpaceAfter=No
12	»	$"	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Berntsen	Berntsen	PROPN	_	_	3	nsubj	_	_
2	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	påtatt	påta	VERB	_	VerbForm=Part	0	root	_	_
4	seg	seg	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	3	iobj	_	_
5	en	en	DET	_	Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
6	både	både	CCONJ	_	_	7	cc	_	_
7	viktig	viktig	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	10	amod	_	_
8	og	og	CCONJ	_	_	9	cc	_	_
9	vanskelig	vanskelig	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	7	conj	_	_
10	oppgave	oppgave	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	3	punct	_	_

~~~


