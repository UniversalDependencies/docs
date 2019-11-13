---
layout: base
title:  'Statistics of flat:name in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-flat.html">flat</a></tt>.

201 nodes (1%) are attached to their parents as `flat:name`.

201 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08457711442786.

The following 8 pairs of parts of speech are connected with `flat:name`: <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (181; 90% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (7; 3% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (7; 3% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Hong	Hong	PROPN	PM|NOM	Case=Nom	5	nsubj	5:nsubj	_
2	Kong	Kong	PROPN	PM|NOM	Case=Nom	1	flat:name	1:flat:name	_
3	verkar	verka	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	samtidigt	samtidigt	ADV	AB	_	3	advmod	3:advmod	_
5	bereda	bereda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	_
6	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def	5	obj	5:obj	_
7	för	för	ADP	PP	_	9	case	9:case	_
8	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	9	det	9:det	_
9	våg	våg	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obl	5:obl:för	_
10	av	av	ADP	PP	_	11	case	11:case	_
11	protester	protest	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	9	nmod	9:nmod:av	SpaceAfter=No
12	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat:name	color:blue
1	Samma	samma	DET	DT|UTR/NEU|SIN/PLU|IND	Definite=Ind	2	det	2:det	_
2	år	år	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	3	obl	3:obl	_
3	syntes	synas	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
4	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	nsubj	3:nsubj|14:nsubj	_
5	kort	kort	ADV	AB|POS	Degree=Pos	3	advmod	3:advmod	_
6	i	i	ADP	PP	_	9	case	9:case	_
7	Disneys	Disney	PROPN	PM|GEN	Case=Gen	9	nmod:poss	9:nmod:poss	_
8	The	The	DET	DT|DEF	Definite=Def	9	det	9:det	_
9	Muppets	Muppets	NOUN	NN|PLU	Number=Plur	3	obl	3:obl:i	SpaceAfter=No
10	,	,	PUNCT	MID	_	14	punct	14:punct	_
11	som	som	SCONJ	KN	_	14	mark	14:mark	_
12	Miss	miss	NOUN	NN|UTR|SIN|IND|GEN	Case=Gen|Definite=Ind|Gender=Com|Number=Sing	14	nmod:poss	14:nmod:poss	_
13	Piggys	Piggy	PROPN	PM|GEN	Case=Gen	12	flat:name	12:flat:name	_
14	receptionist	receptionist	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	xcomp	3:xcomp	SpaceAfter=No
15	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Deras	deras	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	3	nmod:poss	3:nmod:poss	_
2	första	första	ADJ	RO|NOM	Case=Nom	3	amod	3:amod	_
3	kung	kung	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nsubj	5:nsubj	_
4	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	Mojmír	Mojmír	PROPN	PM|NOM	Case=Nom	0	root	0:root	_
6	I	I	NUM	RG	NumType=Card	5	flat:name	5:flat:name	_
7	(	(	PUNCT	PAD	_	8	punct	8:punct	SpaceAfter=No
8	härskade	härska	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	parataxis	5:parataxis	_
9	830–846	830–846	NUM	RG|NOM	Case=Nom	8	obl	8:obl	SpaceAfter=No
10	)	)	PUNCT	PAD	_	8	punct	8:punct	SpaceAfter=No
11	.	.	PUNCT	MAD	_	5	punct	5:punct	_

~~~


