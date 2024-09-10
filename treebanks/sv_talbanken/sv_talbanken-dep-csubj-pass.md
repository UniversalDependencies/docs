---
layout: base
title:  'Statistics of csubj:pass in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="sv_talbanken-dep-csubj.html">csubj</a></tt>.

34 nodes (0%) are attached to their parents as `csubj:pass`.

32 instances of `csubj:pass` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.82352941176471.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (23; 68% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (8; 24% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj:pass	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	3:expl	_
2	blir	bli	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
3	förbjudet	förbjuden	VERB	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	att	att	PART	IE	_	5	mark	5:mark	_
5	göra	göra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	csubj:pass	3:csubj:pass	_
6	vänstersväng	vänstersväng	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obj	5:obj	_
7	in	in	ADV	AB	_	5	advmod	5:advmod	_
8	mot	mot	ADP	PP	_	9	case	9:case	_
9	Stortorpsvägen	Stortorpsvägen	PROPN	PM|NOM	Case=Nom	7	obl	7:obl:mot	SpaceAfter=No
10	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:pass	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	3:expl	_
2	har	ha	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	sagts	säga	VERB	VB|SUP|SFO	VerbForm=Sup|Voice=Pass	0	root	0:root	_
4	att	att	SCONJ	SN	_	7	mark	7:mark	_
5	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	7	nsubj	7:nsubj	_
6	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
7	lätt	lätt	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	3	csubj:pass	3:csubj:pass	_
8	i	i	ADP	PP	_	9	case	9:case	_
9	vallokalen	vallokal	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	obl	7:obl:i	_
10	i	i	ADP	PP	_	7	advmod	7:advmod	_
11	år	år	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	10	fixed	10:fixed	SpaceAfter=No
12	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj:pass	color:blue
1	-	-	PUNCT	MID	_	3	punct	3:punct	_
2	Traditionellt	traditionell	ADV	AB|POS	Degree=Pos	3	advmod	3:advmod	_
3	anses	anse	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
4	ju	ju	ADV	AB	_	3	advmod	3:advmod	_
5	att	att	SCONJ	SN	_	9	mark	9:mark	_
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	9	expl	9:expl	_
7	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
8	under	under	ADP	PP	_	9	case	9:case	_
9	tiden	tid	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	csubj:pass	3:csubj:pass	_
10	efter	efter	ADP	PP	_	11	case	11:case	_
11	förlossningen	förlossning	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	9	nmod	9:nmod:efter	_
12	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	13	nsubj	13:nsubj	_
13	finner	finna	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	acl:cleft	9:acl:cleft	_
14	de	de	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Art	17	det	17:det	_
15	flesta	mången	ADJ	JJ|SUV|UTR/NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Degree=Sup	14	fixed	14:fixed	_
16	psykiska	psykisk	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	17	amod	17:amod	_
17	störningarna	störning	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	13	obj	13:obj	SpaceAfter=No
18	,	,	PUNCT	MID	_	19	punct	19:punct	_
19	säger	säga	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	3:parataxis	_
20	Åke	Åke	PROPN	PM|NOM	Case=Nom	19	nsubj	19:nsubj	_
21	Nilsson	Nilsson	PROPN	PM|NOM	Case=Nom	20	flat:name	20:flat:name	SpaceAfter=No
22	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


