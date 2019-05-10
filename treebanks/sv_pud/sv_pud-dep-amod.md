---
layout: base
title:  'Statistics of amod in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `amod`

This relation is universal.

1235 nodes (6%) are attached to their parents as `amod`.

1230 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14817813765182.

The following 18 pairs of parts of speech are connected with `amod`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1143; 93% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (41; 3% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (15; 1% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	De	den	DET	DT|NEU|PLU|DEF	Definite=Def|Gender=Neut|Number=Plur	3	det	3:det	_
2	nya	ny	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	utgifterna	utgift	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	4	nsubj:pass	4:nsubj:pass	_
4	finansieras	finansiera	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
5	av	av	ADP	PP	_	8	case	8:case	_
6	Clintons	Clinton	PROPN	PM|GEN	Case=Gen	8	nmod:poss	8:nmod:poss	_
7	stora	stor	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	8	amod	8:amod	_
8	bankkonto	bankkonto	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	obl:agent	4:obl:agent	SpaceAfter=No
9	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	Trots	trots	ADP	PP	_	2	case	2:case	_
2	detta	detta	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	obl	3:obl:trots	_
3	verkar	verka	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	de	den	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur	3	nsubj	3:nsubj|7:nsubj	_
5	båda	båda	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	3	acl	3:acl	_
6	ha	ha	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	aux	7:aux	_
7	hållit	hålla	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	3	xcomp	3:xcomp	_
8	åtminstone	åtminstone	ADV	AB	_	7	advmod	7:advmod	_
9	delar	del	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	7	obj	7:obj	_
10	av	av	ADP	PP	_	12	case	12:case	_
11	Nedre	nedre	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	12	amod	12:amod	_
12	Egypten	Egypten	PROPN	PM|NOM	Case=Nom	9	nmod	9:nmod:av	SpaceAfter=No
13	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Hennes	hennes	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	2	nmod:poss	2:nmod:poss	_
2	album	album	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	nmod	4:nmod	_
3	Wild	Wild	PROPN	PM|NOM	Case=Nom	4	amod	4:amod	_
4	West	West	PROPN	PM|NOM	Case=Nom	8	nsubj	8:nsubj	_
5	från	från	ADP	PP	_	6	case	6:case	_
6	1981	1981	NUM	RG|NOM	Case=Nom	4	nmod	4:nmod:från	_
7	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
8	ett	ett	PRON	PN|NEU|SIN|IND|SUB/OBJ	Definite=Ind|Gender=Neut|Number=Sing	0	root	0:root	_
9	av	av	ADP	PP	_	12	case	12:case	_
10	hennes	hennes	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	12	nmod:poss	12:nmod:poss	_
11	mest	mycket	ADV	AB|SUV	Degree=Sup	12	advmod	12:advmod	_
12	säljande	säljande	ADJ	PC|PRS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Part	8	nmod	8:nmod:av	SpaceAfter=No
13	.	.	PUNCT	MAD	_	8	punct	8:punct	_

~~~


