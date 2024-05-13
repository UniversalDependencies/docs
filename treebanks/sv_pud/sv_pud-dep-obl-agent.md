---
layout: base
title:  'Statistics of obl:agent in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-obl.html">obl</a></tt>.

39 nodes (0%) are attached to their parents as `obl:agent`.

39 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.66666666666667.

The following 4 pairs of parts of speech are connected with `obl:agent`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (25; 64% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (8; 21% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (3; 8% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (3; 8% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 obl:agent	color:blue
1	De	de	DET	DT|NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Art	3	det	3:det	_
2	nya	ny	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	3	amod	3:amod	_
3	utgifterna	utgift	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	4	nsubj:pass	4:nsubj:pass	_
4	finansieras	finansiera	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
5	av	av	ADP	PP	_	8	case	8:case	_
6	Clintons	Clinton	PROPN	PM|GEN	Case=Gen	8	nmod:poss	8:nmod:poss	_
7	stora	stor	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	8	amod	8:amod	_
8	bankkonto	bankkonto	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	obl:agent	4:obl:agent	SpaceAfter=No
9	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:agent	color:blue
1	Expeditionen	expedition	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj:pass	2:nsubj:pass	_
2	leddes	leda	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	av	av	ADP	PP	_	5	case	5:case	_
4	general	general	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nmod	5:nmod	_
5	Joseph	Joseph	PROPN	PM|NOM	Case=Nom	2	obl:agent	2:obl:agent|8:nsubj|10:nsubj	_
6	Burgoyne	Burgoyne	PROPN	PM|NOM	Case=Nom	5	flat:name	5:flat:name	_
7	som	som	PRON	HP|-|-|-	PronType=Int,Rel	8	nsubj	5:ref	_
8	avsåg	avse	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	5:acl:relcl	_
9	att	att	PART	IE	_	10	mark	10:mark	_
10	nå	nå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	8	xcomp	8:xcomp	_
11	Albany	Albany	PROPN	PM|NOM	Case=Nom	10	obj	10:obj	SpaceAfter=No
12	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 obl:agent	color:blue
1	2007	2007	NUM	RG|NOM	Case=Nom	7	nummod	7:nummod	_
2	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
3	den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	6	det	6:det	_
4	mest	mycket	ADV	AB|SUV	Degree=Sup	5	advmod	5:advmod	_
5	framgångsrika	framgångsrik	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	6	amod	6:amod	_
6	filmen	film	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nsubj	7:nsubj	_
7	El	El	PROPN	PM|NOM	Case=Nom	0	root	0:root	_
8	Greco	Greco	PROPN	PM|NOM	Case=Nom	7	flat:name	7:flat:name	SpaceAfter=No
9	,	,	PUNCT	MID	_	10	punct	10:punct	_
10	regisserad	regisserad	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	7	acl	7:acl	_
11	av	av	ADP	PP	_	12	case	12:case	_
12	Yannis	Yannis	PROPN	PM|NOM	Case=Nom	10	obl:agent	10:obl:agent	_
13	Smaragdis	Smaragdis	PROPN	PM|NOM	Case=Nom	12	flat:name	12:flat:name	SpaceAfter=No
14	.	.	PUNCT	MAD	_	7	punct	7:punct	_

~~~


