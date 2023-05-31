---
layout: base
title:  'Statistics of nsubj:outer in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="no_bokmaal-dep-nsubj.html">nsubj</a></tt>.

229 nodes (0%) are attached to their parents as `nsubj:outer`.

229 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.43231441048035.

The following 17 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (128; 56% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (32; 14% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (16; 7% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (15; 7% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (9; 4% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-DET.html">DET</a></tt> (5; 2% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:outer	color:blue
1	-	$-	PUNCT	<strek>	_	9	punct	_	_
2	Målet	mål	NOUN	subst	Definite=Def|Gender=Neut|Number=Sing	9	nsubj:outer	_	_
3	er	være	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	9	cop	_	_
4	at	at	SCONJ	sbu	_	9	mark	_	_
5	Espen	Espen	PROPN	subst	Gender=Masc	9	nsubj	_	_
6	en	en	DET	det	Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	dag	dag	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	9	obl	_	_
8	skal	skulle	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	klare	klare	VERB	verb	VerbForm=Inf	0	root	_	_
10	seg	seg	PRON	pron	Case=Acc|PronType=Prs|Reflex=Yes	9	obj	_	_
11	selv	selv	DET	det	PronType=Prs	10	det	_	SpaceAfter=No
12	,	$,	PUNCT	<komma>	_	15	punct	_	_
13	i	i	ADP	prep	_	15	case	_	_
14	eget	egen	DET	det	Definite=Ind|Gender=Neut|Number=Sing|PronType=Prs	15	det	_	_
15	hus	hus	NOUN	subst	Definite=Ind|Gender=Neut|Number=Sing	9	obl	_	SpaceAfter=No
16	.	$.	PUNCT	clb	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:outer	color:blue
1	De	de	PRON	pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj:outer	_	_
2	er	være	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	hva	hva	PRON	pron	PronType=Int	5	xcomp	_	_
4	vi	vi	PRON	pron	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
5	blir	bli	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	:	$:	PUNCT	clb	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:outer	color:blue
1	Det	det	DET	det	Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	første	første	ADJ	adj	Definite=Def|Degree=Pos|Number=Sing|NumType=Ord	8	nsubj:outer	_	_
3	han	han	PRON	pron	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	husker	huske	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
5	er	være	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	8	cop	_	_
6	at	at	SCONJ	sbu	_	8	mark	_	_
7	han	han	PRON	pron	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	satt	sitte	VERB	verb	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
9	på	på	ADP	prep	_	11	case	_	_
10	et	en	DET	det	Gender=Neut|Number=Sing|PronType=Art	11	det	_	_
11	tog	tog	NOUN	subst	Definite=Ind|Gender=Neut|Number=Sing	8	obl	_	_
12	i	i	ADP	prep	_	13	case	_	_
13	Kina	Kina	PROPN	subst	_	11	nmod	_	SpaceAfter=No
14	.	$.	PUNCT	clb	_	8	punct	_	_

~~~


