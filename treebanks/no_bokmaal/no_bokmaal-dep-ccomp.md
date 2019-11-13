---
layout: base
title:  'Statistics of ccomp in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `ccomp`

This relation is universal.

2238 nodes (1%) are attached to their parents as `ccomp`.

2225 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.56166219839142.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (1714; 77% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (278; 12% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (195; 9% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (11; 0% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt> (11; 0% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (9; 0% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-PART.html">PART</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Jeg	jeg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	håper	håpe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
4	virkelig	virkelig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	advmod	_	_
5	forteller	fortelle	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
6	nordmennene	nordmann	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	5	iobj	_	_
7	hva	hva	PRON	_	PronType=Int	9	obj	_	_
8	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
9	synes	synes	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
10	om	om	ADP	_	_	11	case	_	_
11	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	obl	_	_
12	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Regjeringen	regjering	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	fastslått	fastslå	VERB	_	VerbForm=Part	0	root	_	_
4	at	at	SCONJ	_	_	7	mark	_	_
5	røyking	røyking	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	7	nsubj	_	_
6	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	farlig	farlig	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	3	ccomp	_	_
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Noen	noen	PRON	_	Gender=Fem,Masc|Number=Sing|Person=3|PronType=Ind,Prs	2	nsubj	_	_
2	trodde	tro	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
4	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
5	spøk	spøk	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	2	ccomp	_	_
6	:	$:	PUNCT	_	_	2	punct	_	_

~~~


