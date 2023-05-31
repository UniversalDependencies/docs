---
layout: base
title:  'Statistics of compound:prt in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-compound.html">compound</a></tt>.

183 nodes (1%) are attached to their parents as `compound:prt`.

182 instances of `compound:prt` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.40983606557377.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (135; 74% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADP.html">ADP</a></tt> (41; 22% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:prt	color:blue
1	Det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	nsubj	3:nsubj	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	anledningen	anledning	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	0	root	0:root	_
4	till	till	ADP	PP	_	7	mark	7:mark	_
5	att	att	SCONJ	SN	_	7	mark	7:mark	_
6	vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur	7	nsubj	7:nsubj	_
7	kommer	komma	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl	3:acl:att	_
8	tillbaka	tillbaka	ADV	PL	_	7	compound:prt	7:compound:prt	_
9	för	för	ADP	PP	_	11	mark	11:mark	_
10	att	att	PART	IE	_	11	mark	11:mark	_
11	få	få	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	advcl	7:advcl:att	_
12	mer	mycket	ADV	AB|KOM	Degree=Cmp	11	obj	11:obj	SpaceAfter=No
13	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound:prt	color:blue
1	Kina	Kina	PROPN	PM|NOM	Case=Nom	2	nsubj:pass	2:nsubj:pass	_
2	besegrades	besegra	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	och	och	CCONJ	KN	_	5	cc	5:cc	_
4	1842	1842	NUM	RG|NOM	Case=Nom	5	obl	5:obl	_
5	gick	gå	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	2:conj:och	_
6	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur	5	nsubj	5:nsubj	_
7	med	med	ADP	PL	_	5	compound:prt	5:compound:prt	_
8	på	på	ADP	PP	_	9	case	9:case	_
9	villkoren	villkor	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	5	obl	5:obl:på	_
10	i	i	ADP	PP	_	11	case	11:case	_
11	Nankingfördraget	nankingfördrag	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	9	nmod	9:nmod:i	SpaceAfter=No
12	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:prt	color:blue
1	Den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	3	det	3:det	_
2	festliga	festlig	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	dedikationen	dedikation	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	nsubj	4:nsubj	_
4	ägde	äga	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	rum	rum	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	compound:prt	4:compound:prt	_
6	den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	8	det	8:det	_
7	30	30	NUM	RG|NOM	Case=Nom	8	nummod	8:nummod	_
8	april	april	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obl	4:obl	_
9	1955	1955	NUM	RG|NOM	Case=Nom	8	nummod	8:nummod	SpaceAfter=No
10	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


