---
layout: base
title:  'Statistics of csubj:outer in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="sv_talbanken-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="sv_talbanken-dep-csubj-pass.html">csubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `csubj:outer`.

3 instances of `csubj:outer` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.5.

The following 2 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj:outer	color:blue
1	Att	att	PART	IE	_	2	mark	2:mark	_
2	märka	märka	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
3	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
4	att	att	SCONJ	SN	_	8	mark	8:mark	_
5	de	de	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Art	7	det	7:det	_
6	angivna	angiven	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Tense=Past|VerbForm=Part	7	amod	7:amod	_
7	beloppen	belopp	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	8	nsubj	8:nsubj	_
8	utgår	utgå	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj:outer	2:csubj:outer	_
9	utöver	utöver	ADP	PP	_	10	case	10:case	_
10	folkpensionen	folkpension	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	8	obl	8:obl:utöver	SpaceAfter=No
11	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 csubj:outer	color:blue
1	Vad	vad	PRON	HP|NEU|SIN|IND	Definite=Ind|Number=Sing|PronType=Rel	5	obj	5:obj	_
2	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	5	nsubj	5:nsubj	_
3	allmänt	allmän	ADV	AB|POS	Degree=Pos	5	advmod	5:advmod	_
4	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
5	konstatera	konstatera	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	11	csubj:outer	11:csubj:outer	_
6	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
7	att	att	SCONJ	SN	_	11	mark	11:mark	_
8	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	11	expl	11:expl	_
9	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
10	två	två	NUM	RG|NOM	Case=Nom|NumType=Card	11	nummod	11:nummod	_
11	faktorer	faktor	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	0:root	_
12	som	som	PRON	HP|-|-|-	PronType=Rel	14	nsubj	14:nsubj	_
13	alltid	alltid	ADV	AB	_	14	advmod	14:advmod	_
14	haft	ha	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	11	acl:cleft	11:acl:cleft	_
15	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	17	det	17:det	_
16	central	central	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	17	amod	17:amod	_
17	funktion	funktion	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	14	obj	14:obj	SpaceAfter=No
18	:	:	PUNCT	MID	_	11	punct	11:punct	_
19	makarnas	make	NOUN	NN|UTR|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Com|Number=Plur	21	nmod:poss	21:nmod:poss	_
20	frivilliga	frivillig	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	21	amod	21:amod	_
21	samtycke	samtycke	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	11	appos	11:appos	_
22	och	och	CCONJ	KN	_	23	cc	23:cc	_
23	offentligheten	offentlighet	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	21	conj	11:appos|21:conj:och	_
24	vid	vid	ADP	PP	_	25	case	25:case	_
25	avgivandet	avgivande	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	23	nmod	23:nmod:vid	_
26	av	av	ADP	PP	_	29	case	29:case	_
27	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	29	det	29:det	_
28	här	här	ADV	AB	_	29	advmod	29:advmod	_
29	samtycket	samtycke	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	25	nmod	25:nmod:av	SpaceAfter=No
30	.	.	PUNCT	MAD	_	11	punct	11:punct	_

~~~


