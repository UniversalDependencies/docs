---
layout: base
title:  'Statistics of obj in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `obj`

This relation is universal.

4240 nodes (4%) are attached to their parents as `obj`.

4009 instances of `obj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.27594339622642.

The following 17 pairs of parts of speech are connected with `obj`: <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (3359; 79% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-PRON.html">PRON</a></tt> (712; 17% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (52; 1% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-PROPN.html">PROPN</a></tt> (33; 1% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-ADV.html">ADV</a></tt> (23; 1% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (18; 0% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (13; 0% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="sv-pos-ADV.html">ADV</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), <tt><a href="sv-pos-PRON.html">PRON</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv-pos-NUM.html">NUM</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj	color:blue
1	Skiljer	skilja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	1	nsubj	_	_
3	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	1	obj	_	_
4	från	från	ADP	PP	_	5	case	_	_
5	andra	annan	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur|PronType=Ind	1	obl	_	_
6	och	och	CCONJ	KN	_	7	cc	_	_
7	i	i	ADP	PP	_	1	conj	_	_
8	så	så	ADV	AB	_	7	fixed	_	_
9	fall	fall	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	fixed	_	_
10	på	på	ADP	PP	_	12	case	_	_
11	vilket	vilken	DET	HD|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int	12	det	_	_
12	sätt	sätt	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
13	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Olika	olik	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	människor	människa	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	nsubj	_	_
3	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	olika	olika	ADV	AB	_	5	advmod	_	_
5	lätt	lätt	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	obj	_	_
6	att	att	PART	IE	_	7	mark	_	_
7	utstå	utstå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	advcl	_	_
8	sådana	sån	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur|PronType=Ind	7	obj	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


