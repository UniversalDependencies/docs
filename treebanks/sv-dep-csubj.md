---
layout: base
title:  'Statistics of csubj in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="sv-dep-csubj-pass.html">csubj:pass</a></tt>.

338 nodes (0%) are attached to their parents as `csubj`.

283 instances of `csubj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.83431952662722.

The following 13 pairs of parts of speech are connected with `csubj`: <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-VERB.html">VERB</a></tt> (147; 43% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-VERB.html">VERB</a></tt> (102; 30% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-VERB.html">VERB</a></tt> (55; 16% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="sv-pos-PRON.html">PRON</a></tt>-<tt><a href="sv-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv-pos-ADV.html">ADV</a></tt>-<tt><a href="sv-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	expl	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	ju	ju	ADV	AB	_	4	advmod	_	_
4	klart	klar	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	att	att	SCONJ	SN	_	8	mark	_	_
6	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	8	nsubj	_	_
7	får	få	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
8	gno	gno	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	csubj	_	_
9	hela	hel	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	10	amod	_	_
10	tiden	tid	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj	color:blue
1	Att	att	PART	IE	_	2	mark	_	_
2	anställa	anställa	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	csubj	_	_
3	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	5	det	_	_
4	'	'	PUNCT	PAD	_	5	punct	_	SpaceAfter=No
5	praktikant	praktikant	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	SpaceAfter=No
6	'	'	PUNCT	PAD	_	5	punct	_	_
7	lönar	löna	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	7	obj	_	_
9	verkligen	verkligen	ADV	AB	_	7	advmod	_	_
10	inte	inte	ADV	AB	Polarity=Neg	7	advmod	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
2	annat	annan	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	amod	_	_
3	problem	problem	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
4	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
5	att	att	SCONJ	SN	_	7	mark	_	_
6	u-landsbarnen	u-landsbarn	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	7	nsubj	_	_
7	får	få	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
8	fel	fel	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	9	amod	_	_
9	utbildning	utbildning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


