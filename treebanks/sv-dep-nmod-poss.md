---
layout: base
title:  'Statistics of nmod:poss in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sv-dep-nmod.html">nmod</a></tt>.

1732 nodes (2%) are attached to their parents as `nmod:poss`.

1725 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27424942263279.

The following 9 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (913; 53% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-DET.html">DET</a></tt> (668; 39% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-PROPN.html">PROPN</a></tt> (132; 8% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="sv-pos-NUM.html">NUM</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="sv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sv-pos-ADV.html">ADV</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Men	men	CCONJ	KN	_	5	cc	_	_
2	för	för	ADP	PP	_	4	case	_	_
3	barnens	barn	NOUN	NN|NEU|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Plur	4	nmod:poss	_	_
4	del	del	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obl	_	_
5	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	_	_
7	annorlunda	annorlunda	ADV	AB	_	5	advmod	_	SpaceAfter=No
8	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	'	'	PUNCT	PAD	_	4	punct	_	SpaceAfter=No
2	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
3	skall	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	lyda	lyda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
5	din	du	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	fader	far	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	MAD	_	4	punct	_	SpaceAfter=No
8	'	'	PUNCT	PAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Eko-pocket	Eko-pocket	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	0	root	_	_
2	Sveriges	Sverige	PROPN	PM|GEN	Case=Gen	3	nmod:poss	_	_
3	Radios	radio	NOUN	NN|UTR|SIN|IND|GEN	Case=Gen|Definite=Ind|Gender=Com|Number=Sing	4	nmod:poss	_	_
4	förlag	förlag	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	nmod	_	SpaceAfter=No
5	.	.	PUNCT	MAD	_	1	punct	_	SpaceAfter=No
6	)	)	PUNCT	PAD	_	1	punct	_	_

~~~


