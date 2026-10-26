---
layout: base
title:  'Statistics of advcl:relcl in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-advcl.html">advcl</a></tt>.

1 nodes (0%) are attached to their parents as `advcl:relcl`.

1 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 15.

The following 1 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 26 advcl:relcl	color:blue
1	Vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	2	nsubj	2:nsubj	_
2	rör	röra	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	oss	vi	PRON	PN|UTR|PLU|DEF|OBJ	Case=Acc|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	2	obj	2:obj	_
4	i	i	ADP	PP	_	6	case	6:case	_
5	rätt	rätt	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	6	amod	6:amod	_
6	riktning	riktning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obl	2:obl:i	SpaceAfter=No
7	:	:	PUNCT	MID	_	2	punct	2:punct	_
8	Paris-avtalet	paris-avtal	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	11	nsubj	11:nsubj	_
9	kommer	komma	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	11:aux	_
10	att	att	PART	IE	_	11	mark	11:mark	_
11	sakta	sakta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	2	parataxis	2:parataxis	ParsemeMWE=1:IVPC.semi
12	ner	ner	ADV	PL	_	11	compound:prt	11:compound:prt	ParsemeMWE=1
13	klimatförändringarna	klimatförändring	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	11	obj	11:obj	SpaceAfter=No
14	,	,	PUNCT	MID	_	26	punct	26:punct	_
15	vilket	vilket	PRON	HP|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int,Rel	26	obj	26:obj	_
16	även	även	ADV	AB	_	19	advmod	19:advmod	_
17	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	19	det	19:det	_
18	nyliga	nylig	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	19	amod	19:amod	_
19	Kigali-tillägget	kigali-tillägg	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	26	nsubj	26:nsubj	_
20	för	för	ADP	PP	_	22	mark	22:mark	_
21	att	att	PART	IE	_	22	mark	22:mark	_
22	minska	minska	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	19	acl	19:acl:att	_
23	HFC:er	HFC	PROPN	PM|NOM	Case=Nom	22	obj	22:obj	_
24	kommer	komma	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	26	aux	26:aux	_
25	att	att	PART	IE	_	26	mark	26:mark	_
26	göra	göra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	11	advcl:relcl	11:advcl:relcl	SpaceAfter=No
27	,	,	PUNCT	MID	_	28	punct	28:punct	_
28	sade	säga	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	2:parataxis	_
29	Erik	Erik	PROPN	PM|NOM	Case=Nom	28	nsubj	28:nsubj	_
30	Solheim	Solheim	PROPN	PM|NOM	Case=Nom	29	flat:name	29:flat:name	SpaceAfter=No
31	,	,	PUNCT	MID	_	29	punct	29:punct	_
32	chef	chef	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	29	appos	29:appos	_
33	för	för	ADP	PP	_	35	case	35:case	_
34	FN:s	FN	PROPN	PM|GEN	Case=Gen	35	nmod:poss	35:nmod:poss	_
35	miljöorgan	miljöorgan	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	32	nmod	32:nmod:för	SpaceAfter=No
36	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


