---
layout: base
title:  'Statistics of appos in UD_Danish'
udver: '2'
---

## Treebank Statistics: UD_Danish: Relations: `appos`

This relation is universal.

358 nodes (0%) are attached to their parents as `appos`.

351 instances of `appos` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.62011173184358.

The following 22 pairs of parts of speech are connected with `appos`: <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-PROPN.html">PROPN</a></tt> (220; 61% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-NOUN.html">NOUN</a></tt> (56; 16% instances), <tt><a href="da-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da-pos-PROPN.html">PROPN</a></tt> (21; 6% instances), <tt><a href="da-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da-pos-NOUN.html">NOUN</a></tt> (20; 6% instances), <tt><a href="da-pos-PRON.html">PRON</a></tt>-<tt><a href="da-pos-PROPN.html">PROPN</a></tt> (8; 2% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-X.html">X</a></tt> (6; 2% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="da-pos-PRON.html">PRON</a></tt>-<tt><a href="da-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="da-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="da-pos-X.html">X</a></tt>-<tt><a href="da-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="da-pos-X.html">X</a></tt>-<tt><a href="da-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="da-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="da-pos-ADP.html">ADP</a></tt>-<tt><a href="da-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="da-pos-ADV.html">ADV</a></tt>-<tt><a href="da-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="da-pos-NUM.html">NUM</a></tt>-<tt><a href="da-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="da-pos-PRON.html">PRON</a></tt>-<tt><a href="da-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="da-pos-PRON.html">PRON</a></tt>-<tt><a href="da-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="da-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 appos	color:blue
1	Endelig	endelig	ADV	_	_	2	advmod	_	_
2	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	også	også	ADV	_	_	2	advmod	_	_
4	inspektionsskibet	inspektionsskib	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	2	nsubj	_	_
5	Fylla	Fylla	PROPN	_	_	4	appos	_	_
6	til	til	ADP	_	AdpType=Prep	7	case	_	_
7	salg	salg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	2	obl	_	_
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	Kun	kun	ADV	_	_	2	advmod	_	_
2	Ugemagasinet	ugemagasin	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	4	nmod:poss	_	_
3	SØNDAG's	søndag	NOUN	_	Case=Gen|Definite=Ind|Gender=Com|Number=Sing	2	appos	_	_
4	læger	læge	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	6	nsubj	_	_
5	må	måtte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
6	åbne	åbne	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
7	Deres	Deres	DET	_	Person=2|Polite=Form|Poss=Yes|PronType=Prs	8	det	_	_
8	brev	brev	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	6	obj	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Nina	Nina	PROPN	_	_	4	nmod:poss	_	_
2	Belovetskayas	Belovetskaya	PROPN	_	Case=Gen	1	flat	_	_
3	12-årige	12-årig	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	1	amod	_	_
4	søn	søn	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	8	nsubj	_	_
5	Vanya	Vanya	PROPN	_	_	1	appos	_	_
6	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	aux	_	_
7	også	også	ADV	_	_	8	advmod	_	_
8	dræbt	dræbe	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	af	af	ADP	_	AdpType=Prep	12	case	_	_
10	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	12	det	_	_
11	sadistiske	sadistisk	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	12	amod	_	_
12	skolelærer	skolelærer	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	8	obl	_	_
13	.	.	PUNCT	_	_	8	punct	_	_

~~~


