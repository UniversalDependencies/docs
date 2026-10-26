---
layout: base
title:  'Statistics of advcl:relcl in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="sv_talbanken-dep-advcl.html">advcl</a></tt>.

24 nodes (0%) are attached to their parents as `advcl:relcl`.

24 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.70833333333333.

The following 6 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (16; 67% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (3; 13% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 advcl:relcl	color:blue
1	Viktigare	viktig	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	0	root	0:root	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	1:cop	_
3	hur	hur	ADV	HA	_	6	advmod	6:advmod	_
4	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	6	nsubj:pass	6:nsubj:pass	_
5	ska	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
6	finansieras	finansiera	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	1	csubj	1:csubj	_
7	1975	1975	NUM	RG|NOM	Case=Nom|NumType=Card	6	nummod	6:nummod	SpaceAfter=No
8	,	,	PUNCT	MID	_	6	punct	6:punct	_
9	vilket	vilken	PRON	HP|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Rel	11	obl	11:obl:på	_
10	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	11	nsubj	11:nsubj	_
11	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl:relcl	6:advcl:relcl	_
12	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	13	det	13:det	_
13	beslut	beslut	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	11	obj	11:obj	_
14	på	på	ADP	PP	_	9	case	9:case	SpaceAfter=No
15	.	.	PUNCT	MAD	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 advcl:relcl	color:blue
1	KPI	KPI	NOUN	NN|AN	Abbr=Yes	3	nsubj	3:nsubj	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	konstruerad	konstruerad	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
4	som	som	ADP	KN	_	6	case	6:case	_
5	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	6	det	6:det	_
6	kedjeindex	kedjeindex	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	3	obl	3:obl:som	_
7	med	med	ADP	PP	_	8	case	8:case	_
8	årslänkar	årslänk	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	6	nmod	6:nmod:med	_
9	vilket	vilken	PRON	HP|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Rel	10	nsubj	10:nsubj	_
10	innebär	innebära	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl:relcl	3:advcl:relcl	ParsemeMWE=1:NotMWE
11	att	att	SCONJ	SN	_	14	mark	14:mark	_
12	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	14	nsubj	14:nsubj	_
13	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	14	aux	14:aux	_
14	jämföra	jämföra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	10	ccomp	10:ccomp	_
15	prisutvecklingen	prisutveckling	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	14	obj	14:obj	_
16	år	år	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	14	obl	14:obl	Cxn=NPN|CxnElt=16:NPN.N1
17	från	från	ADP	PP	_	18	case	18:case	CxnElt=16:NPN.P
18	år	år	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	16	nmod	16:nmod:från	CxnElt=16:NPN.N2|SpaceAfter=No
19	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 15 advcl:relcl	color:blue
1	Denna	denna	PRON	PN|UTR|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Com|Number=Sing|PronType=Dem	4	nsubj	4:nsubj	_
2	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	dock	dock	ADV	AB	_	4	advmod	4:advmod	_
4	utebli	utebli	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	ParsemeMWE=1:NotMWE
5	av	av	ADP	PP	_	7	case	7:case	_
6	andra	annan	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	7	amod	7:amod	_
7	orsaker	orsak	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	4	obl	4:obl:av	SpaceAfter=No
8	,	,	PUNCT	MID	_	4	punct	4:punct	_
9	varför	varför	ADV	HA	_	15	advmod	15:advmod	_
10	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	15	nsubj	15:nsubj	_
11	inte	inte	PART	AB	Polarity=Neg	15	advmod	15:advmod	_
12	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	15:cop	_
13	något	någon	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	15	det	15:det	_
14	säkert	säker	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	15	amod	15:amod	_
15	bevis	bevis	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	advcl:relcl	4:advcl:relcl	_
16	på	på	ADP	PP	_	19	mark	19:mark	_
17	att	att	SCONJ	SN	_	19	mark	19:mark	_
18	graviditet	graviditet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	19	nsubj	19:nsubj	_
19	föreligger	föreligga	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	acl	15:acl:att	SpaceAfter=No|ParsemeMWE=2:NotMWE
20	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


