---
layout: base
title:  'Statistics of iobj in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `iobj`

This relation is universal.

596 nodes (0%) are attached to their parents as `iobj`.

594 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.23993288590604.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (386; 65% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (146; 24% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (47; 8% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (12; 2% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Berntsen	Berntsen	PROPN	subst	_	3	nsubj	_	_
2	har	ha	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	påtatt	påta	VERB	verb	VerbForm=Part	0	root	_	_
4	seg	seg	PRON	pron	Case=Acc|PronType=Prs|Reflex=Yes	3	iobj	_	_
5	en	en	DET	det	Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
6	både	både	CCONJ	konj	_	7	cc	_	_
7	viktig	viktig	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc|Number=Sing	10	amod	_	_
8	og	og	CCONJ	konj	_	9	cc	_	_
9	vanskelig	vanskelig	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc|Number=Sing	7	conj	_	_
10	oppgave	oppgave	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
11	.	$.	PUNCT	clb	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	Jeg	jeg	PRON	pron	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	håper	håpe	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	du	du	PRON	pron	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
4	virkelig	virkelig	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	advmod	_	_
5	forteller	fortelle	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
6	nordmennene	nordmann	NOUN	subst	Definite=Def|Gender=Masc|Number=Plur	5	iobj	_	_
7	hva	hva	PRON	pron	PronType=Int	9	obj	_	_
8	vi	vi	PRON	pron	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
9	synes	synes	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
10	om	om	ADP	prep	_	11	case	_	_
11	det	det	PRON	pron	Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	obl	_	SpaceAfter=No
12	.	$.	PUNCT	clb	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 iobj	color:blue
1	Jeg	jeg	PRON	pron	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	skal	skulle	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	ihvertfall	ihvertfall	ADV	adv	_	4	advmod	_	_
4	prøve	prøve	VERB	verb	VerbForm=Inf	6	ccomp	_	SpaceAfter=No
5	,	$,	PUNCT	<komma>	_	4	punct	_	_
6	lover	love	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
7	Svindal	Svindal	PROPN	subst	_	6	nsubj	_	_
8	Dagbladet.no	Dagbladet.no	PROPN	subst	_	6	iobj	_	SpaceAfter=No
9	.	$.	PUNCT	clb	_	6	punct	_	_

~~~


