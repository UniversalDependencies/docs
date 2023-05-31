---
layout: base
title:  'Statistics of nsubj:pass in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-nsubj.html">nsubj</a></tt>.

254 nodes (1%) are attached to their parents as `nsubj:pass`.

213 instances of `nsubj:pass` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14173228346457.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (123; 48% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (91; 36% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (34; 13% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nsubj:pass	color:blue
1	5 000	5 000	NUM	RG|NOM	Case=Nom	2	nummod	2:nummod	_
2	dollar	dollar	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	0:root	_
3	per	per	ADP	PP	_	4	case	4:case	_
4	person	person	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nmod	2:nmod:per	SpaceAfter=No
5	,	,	PUNCT	MID	_	2	punct	2:punct	_
6	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	8	det	8:det	_
7	högsta	hög	ADJ	JJ|SUV|UTR/NEU|SIN/PLU|DEF|NOM	Case=Nom|Definite=Def|Degree=Sup	8	amod	8:amod	_
8	belopp	belopp	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	appos	2:appos|10:nsubj:pass	_
9	som	som	PRON	HP|-|-|-	PronType=Int,Rel	10	nsubj:pass	8:ref	_
10	tillåts	tillåta	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	8	acl:relcl	8:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Cotton	Cotton	PROPN	PM|NOM	Case=Nom	2	nsubj:pass	2:nsubj:pass	_
2	föddes	föda	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	31	31	NUM	RG|NOM	Case=Nom	4	nummod	4:nummod	_
4	oktober	oktober	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obl	2:obl	_
5	1832	1832	NUM	RG|NOM	Case=Nom	4	nummod	4:nummod	_
6	i	i	ADP	PP	_	8	case	8:case	_
7	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	8	det	8:det	_
8	by	by	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obl	2:obl:i	_
9	nära	nära	ADP	PP	_	10	case	10:case	_
10	Sunderland	Sunderland	PROPN	PM|NOM	Case=Nom	8	nmod	8:nmod:nära	SpaceAfter=No
11	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


