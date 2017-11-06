---
layout: base
title:  'Statistics of ccomp in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `ccomp`

This relation is universal.

509 nodes (1%) are attached to their parents as `ccomp`.

499 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.05697445972495.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-VERB.html">VERB</a></tt> (401; 79% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (71; 14% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (25; 5% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="sv-pos-AUX.html">AUX</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	Man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	3	nsubj	_	_
2	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	fråga	fråga	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
4	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	3	iobj	_	_
5	hur	hur	ADV	HA	_	8	advmod	_	_
6	dessa	denna	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Dem	7	det	_	_
7	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	8	nsubj	_	_
8	blir	bli	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	De	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	2	nsubj	_	_
2	fattar	fatta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	inte	inte	ADV	AB	Polarity=Neg	2	advmod	_	_
4	hur	hur	ADV	HA	_	5	advmod	_	_
5	dåligt	dålig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	2	ccomp	_	_
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	_	_
7	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	SpaceAfter=No
8	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	Givetvis	givetvis	ADV	AB	_	4	advmod	_	_
2	får	få	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	4	nsubj	_	_
4	beakta	beakta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
5	att	att	SCONJ	SN	_	9	mark	_	_
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	9	nsubj	_	_
7	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
8	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	9	det	_	_
9	fråga	fråga	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	ccomp	_	_
10	om	om	ADP	PP	_	11	case	_	_
11	pengar	pengar	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	MAD	_	4	punct	_	_

~~~


