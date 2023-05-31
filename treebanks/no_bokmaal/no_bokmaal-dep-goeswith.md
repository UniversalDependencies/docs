---
layout: base
title:  'Statistics of goeswith in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `goeswith`

This relation is universal.

47 nodes (0%) are attached to their parents as `goeswith`.

35 instances of `goeswith` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.95744680851064.

The following 17 pairs of parts of speech are connected with `goeswith`: <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (10; 21% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (10; 21% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (5; 11% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-DET.html">DET</a></tt> (4; 9% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (3; 6% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-SCONJ.html">SCONJ</a></tt> (3; 6% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 goeswith	color:blue
1	CNN	CNN	PROPN	_	_	2	nsubj	_	_
2	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	flere	mange	ADJ	_	Degree=Cmp	4	amod	_	_
4	resultater	resultat	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	obj	_	_
5	fra	fra	ADP	_	_	2	goeswith	_	_
6	fra	fra	ADP	_	_	7	case	_	_
7	valgdagsmålinger	valgdagsmåling	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	4	nmod	_	SpaceAfter=No
8	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 goeswith	color:blue
1	-	$-	PUNCT	_	_	5	punct	_	_
2	Man	man	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|PronType=Prs	5	nsubj	_	_
3	skal	skulle	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	ikke	ikke	PART	_	Polarity=Neg	5	advmod	_	_
5	si	si	VERB	_	VerbForm=Inf	0	root	_	_
6	at	at	SCONJ	_	_	5	goeswith	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	goeswith	_	_
8	ikke	ikke	PART	_	Polarity=Neg	5	goeswith	_	_
9	mulig	mulig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	goeswith	_	_
10	å	å	PART	_	_	11	mark	_	_
11	vinne	vinne	VERB	_	VerbForm=Inf	5	goeswith	_	_
12	i	i	ADP	_	_	13	case	_	_
13	morgen	morgen	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
14	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 goeswith	color:blue
1	-	$-	PUNCT	_	_	5	punct	_	_
2	Man	man	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|PronType=Prs	5	nsubj	_	_
3	skal	skulle	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	ikke	ikke	PART	_	Polarity=Neg	5	advmod	_	_
5	si	si	VERB	_	VerbForm=Inf	0	root	_	_
6	at	at	SCONJ	_	_	5	goeswith	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	goeswith	_	_
8	ikke	ikke	PART	_	Polarity=Neg	5	goeswith	_	_
9	mulig	mulig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	goeswith	_	_
10	å	å	PART	_	_	11	mark	_	_
11	vinne	vinne	VERB	_	VerbForm=Inf	5	goeswith	_	_
12	i	i	ADP	_	_	13	case	_	_
13	morgen	morgen	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
14	.	$.	PUNCT	_	_	5	punct	_	_

~~~


