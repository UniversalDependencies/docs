---
layout: base
title:  'Statistics of ccomp in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `ccomp`

This relation is universal.

2945 nodes (1%) are attached to their parents as `ccomp`.

1720 instances of `ccomp` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.53616298811545.

The following 21 pairs of parts of speech are connected with `ccomp`: <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (1906; 65% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (520; 18% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (383; 13% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (43; 1% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt> (29; 1% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (14; 0% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (14; 0% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-X.html">X</a></tt> (10; 0% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt>-<tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-PART.html">PART</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-PART.html">PART</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	Sa	si	VERB	verb	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	han	han	PRON	pron	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	_
3	unnskyld	unnskylde	VERB	verb	Mood=Imp|VerbForm=Fin	1	ccomp	_	SpaceAfter=No
4	?	$?	PUNCT	clb	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Regjeringen	regjering	NOUN	subst	Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	har	ha	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	fastslått	fastslå	VERB	verb	VerbForm=Part	0	root	_	_
4	at	at	SCONJ	sbu	_	7	mark	_	_
5	røyking	røyking	NOUN	subst	Definite=Ind|Gender=Fem|Number=Sing	7	nsubj	_	_
6	er	være	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	farlig	farlig	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc|Number=Sing	3	ccomp	_	SpaceAfter=No
8	.	$.	PUNCT	clb	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
1	Hver	hver	DET	det	Gender=Fem|Number=Sing|PronType=Tot	3	det	_	_
2	eneste	eneste	NUM	det	Definite=Def|NumType=Card	3	nummod	_	_
3	uke	uke	NOUN	subst	Definite=Ind|Gender=Fem|Number=Sing	5	ccomp	_	SpaceAfter=No
4	,	$,	PUNCT	<komma>	_	3	punct	_	_
5	sier	si	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	hun	hun	PRON	pron	Animacy=Hum|Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
7	lattermildt	lattermild	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	advmod	_	SpaceAfter=No
8	.	$.	PUNCT	clb	_	5	punct	_	_

~~~


