---
layout: base
title:  'Statistics of cop in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `cop`

This relation is universal.

8098 nodes (3%) are attached to their parents as `cop`.

7851 instances of `cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.20437144974068.

The following 11 pairs of parts of speech are connected with `cop`: <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (3258; 40% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (2661; 33% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (1241; 15% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (272; 3% instances), <tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (206; 3% instances), <tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (161; 2% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (144; 2% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (95; 1% instances), <tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (58; 1% instances), <tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Det	det	PRON	pron	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	var	være	AUX	verb	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	grusomt	grusom	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	å	å	PART	inf-merke	_	5	mark	_	_
5	høre	høre	VERB	verb	VerbForm=Inf	3	advcl	_	_
6	på	på	ADV	prep	_	5	advmod	_	SpaceAfter=No
7	.	$.	PUNCT	clb	_	3	punct	_	SpaceAfter=No
8	»	$"	PUNCT	<anf>	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Thomassen	Thomassen	PROPN	subst	_	4	nsubj	_	_
2	er	være	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	på	på	ADP	prep	_	4	case	_	_
4	vei	vei	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	til	til	ADP	prep	_	8	case	_	_
6	sin	sin	PRON	det	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	_
7	neste	neste	DET	det	Definite=Def|PronType=Dem	8	det	_	_
8	gjerning	gjerning	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
9	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cop	color:blue
1	Aldri	aldri	ADV	adv	_	9	advmod	_	_
2	har	ha	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	9	aux	_	_
3	så	så	ADV	adv	_	4	advmod	_	_
4	mye	mye	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc|Number=Sing	5	amod	_	_
5	fortid	fortid	NOUN	subst	Definite=Ind|Gender=Fem|Number=Sing	9	nsubj	_	_
6	og	og	CCONJ	konj	_	7	cc	_	_
7	samtid	samtid	NOUN	subst	Definite=Ind|Gender=Fem|Number=Sing	5	conj	_	_
8	vært	være	AUX	verb	VerbForm=Part	9	cop	_	_
9	ivaretatt	ivareta	VERB	verb	VerbForm=Part	0	root	_	_
10	på	på	ADP	prep	_	11	case	_	_
11	museer	museum	NOUN	subst	Definite=Ind|Gender=Neut|Number=Plur	9	obl	_	SpaceAfter=No
12	.	$.	PUNCT	clb	_	9	punct	_	_

~~~


