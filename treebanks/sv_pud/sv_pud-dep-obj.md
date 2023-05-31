---
layout: base
title:  'Statistics of obj in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `obj`

This relation is universal.

900 nodes (5%) are attached to their parents as `obj`.

876 instances of `obj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.35222222222222.

The following 9 pairs of parts of speech are connected with `obj`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (698; 78% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (130; 14% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (55; 6% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (8; 1% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obj	color:blue
1	Hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj:pass	2:nsubj:pass	_
2	åtalas	åtala	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	även	även	ADV	AB	_	2	advmod	2:advmod	_
4	för	för	ADP	PP	_	7	mark	7:mark	_
5	att	att	PART	IE	_	7	mark	7:mark	_
6	ha	ha	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	aux	7:aux	_
7	försökt	försöka	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	2	advcl	2:advcl:att	_
8	mörda	mörda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
9	sin	sin	PRON	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes	11	nmod:poss	11:nmod:poss	_
10	tvååriga	tvåårig	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	11	amod	11:amod	_
11	dotter	dotter	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obj	8:obj	SpaceAfter=No
12	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obj	color:blue
1	Det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	obj	3:obj	_
2	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	nsubj	3:nsubj	_
3	säger	säga	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	dislocated	15:dislocated	_
4	och	och	CCONJ	KN	_	7	cc	7:cc	_
5	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	7	obj	7:obj	_
6	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nsubj	7:nsubj	_
7	gör	göra	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj:och	SpaceAfter=No
8	,	,	PUNCT	MID	_	3	punct	3:punct	_
9	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	15	dislocated	15:dislocated	_
10	–	–	PUNCT	MID	_	9	punct	9:punct	_
11	faktiskt	faktiskt	ADV	AB|POS	Degree=Pos	9	advmod	9:advmod	SpaceAfter=No
12	,	,	PUNCT	MID	_	9	punct	9:punct	_
13	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	15	nsubj	15:nsubj	_
14	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	15:cop	_
15	otroligt	otrolig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
16	.	.	PUNCT	MAD	_	15	punct	15:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obj	color:blue
1	De	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur	2	nsubj	2:nsubj	_
2	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	4	det	4:det	_
4	chans	chans	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	2:obj	_
5	till	till	ADP	PP	_	6	case	6:case	_
6	gottgörelse	gottgörelse	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	nmod	4:nmod:till	SpaceAfter=No
7	,	,	PUNCT	MID	_	9	punct	9:punct	_
8	att	att	PART	IE	_	9	mark	9:mark	_
9	slå	slå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	acl	4:acl:att	_
10	England	England	PROPN	PM|NOM	Case=Nom	9	obj	9:obj	SpaceAfter=No
11	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


