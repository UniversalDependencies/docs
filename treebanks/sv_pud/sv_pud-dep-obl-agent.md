---
layout: base
title:  'Statistics of obl:agent in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-obl.html">obl</a></tt>.

38 nodes (0%) are attached to their parents as `obl:agent`.

38 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.71052631578947.

The following 4 pairs of parts of speech are connected with `obl:agent`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (24; 63% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (8; 21% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (3; 8% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (3; 8% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 obl:agent	color:blue
1	De	den	DET	DT|NEU|PLU|DEF	Definite=Def|Gender=Neut|Number=Plur	3	det	_	_
2	nya	ny	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	3	amod	_	_
3	utgifterna	utgift	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	4	nsubj:pass	_	_
4	finansieras	finansiera	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	av	av	ADP	PP	_	8	case	_	_
6	Clintons	Clinton	PROPN	PM|GEN	Case=Gen	8	nmod:poss	_	_
7	stora	stor	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	8	amod	_	_
8	bankkonto	bankkonto	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	obl:agent	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:agent	color:blue
1	Expeditionen	expedition	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj:pass	_	_
2	leddes	leda	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	av	av	ADP	PP	_	5	case	_	_
4	general	general	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nmod	_	_
5	Joseph	Joseph	PROPN	PM|NOM	Case=Nom	2	obl:agent	_	_
6	Burgoyne	Burgoyne	PROPN	PM|NOM	Case=Nom	5	flat:name	_	_
7	som	som	PRON	HP|-|-|-	PronType=Int,Rel	8	nsubj	_	_
8	avsåg	avse	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
9	att	att	PART	IE	_	10	mark	_	_
10	nå	nå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	8	xcomp	_	_
11	Albany	Albany	PROPN	PM|NOM	Case=Nom	10	obj	_	SpaceAfter=No
12	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 obl:agent	color:blue
1	2007	2007	NUM	RG|NOM	Case=Nom	7	nummod	_	_
2	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
3	den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	6	det	_	_
4	mest	mycket	ADV	AB|SUV	Degree=Sup	5	advmod	_	_
5	framgångsrika	framgångsrik	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	6	amod	_	_
6	filmen	film	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nsubj	_	_
7	El	El	PROPN	PM|NOM	Case=Nom	0	root	_	_
8	Greco	Greco	PROPN	PM|NOM	Case=Nom	7	flat:name	_	SpaceAfter=No
9	,	,	PUNCT	MID	_	10	punct	_	_
10	regisserad	regisserad	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	_
11	av	av	ADP	PP	_	12	case	_	_
12	Yannis	Yannis	PROPN	PM|NOM	Case=Nom	10	obl:agent	_	_
13	Smaragdis	Smaragdis	PROPN	PM|NOM	Case=Nom	12	flat:name	_	SpaceAfter=No
14	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


