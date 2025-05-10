---
layout: base
title:  'Statistics of acl:cleft in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `acl:cleft`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="sv_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

7 nodes (0%) are attached to their parents as `acl:cleft`.

7 instances of `acl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 4 pairs of parts of speech are connected with `acl:cleft`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (3; 43% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 acl:cleft	color:blue
1	Medan	medan	SCONJ	SN	_	7	mark	7:mark	_
2	hysterin	hysteri	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nsubj:pass	7:nsubj:pass	_
3	runt	runt	ADP	PP	_	6	case	6:case	_
4	2016	2016	NUM	RG|NOM	Case=Nom	5	nummod	5:nummod	_
5	års	år	NOUN	NN|NEU|SIN|IND|GEN	Case=Gen|Definite=Ind|Gender=Neut|Number=Sing	6	nmod:poss	6:nmod:poss	_
6	presidentval	presidentval	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	nmod	2:nmod:runt	_
7	intensifieras	intensifiera	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	13	advcl	13:advcl:medan	_
8	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	13:cop	_
9	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	13	expl	13:expl	_
10	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	13	det	13:det	_
11	mer	mycket	ADV	AB|KOM	Degree=Cmp	12	advmod	12:advmod	_
12	oroväckande	oroväckande	ADJ	PC|PRS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Mood=Ind	13	amod	13:amod	_
13	hot	hot	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	0:root	_
14	som	som	PRON	HP|-|-|-	PronType=Int,Rel	15	nsubj	15:nsubj	_
15	upptar	uppta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	13	acl:cleft	13:acl:cleft	_
16	Karels	Karel	PROPN	PM|UTR|SIN|GEN	Case=Gen|Gender=Com|Number=Sing	17	nmod:poss	17:nmod:poss	_
17	uppmärksamhet	uppmärksamhet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	15	obj	15:obj	SpaceAfter=No
18	.	.	PUNCT	MAD	_	13	punct	13:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:cleft	color:blue
1	Jag	jag	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	2:nsubj	_
2	tror	tro	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	expl	5:expl	_
4	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	därför	därför	ADV	AB	_	2	ccomp	2:ccomp	_
6	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	7	nsubj	7:nsubj	_
7	fördjupat	fördjupa	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	5	acl:cleft	5:acl:cleft	_
8	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	7	obj	7:obj	_
9	i	i	ADP	PP	_	10	case	10:case	_
10	mönster	mönster	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	obl	7:obl:i	_
11	och	och	CCONJ	KN	_	12	cc	12:cc	_
12	färg	färg	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	10	conj	7:obl:i|10:conj:och	SpaceAfter=No
13	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:cleft	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	expl	5:expl	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
3	1	1	NUM	RG|NOM	Case=Nom	5	nummod	5:nummod	_
4	200	200	NUM	RG|NOM	Case=Nom	3	flat	3:flat	_
5	frivilliga	frivillig	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	0	root	0:root	_
6	som	som	PRON	HP|-|-|-	PronType=Int,Rel	7	nsubj	7:nsubj	_
7	arbetar	arbeta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:cleft	5:acl:cleft	_
8	med	med	ADP	PP	_	10	case	10:case	_
9	bara	bara	ADV	AB	_	10	advmod	10:advmod	_
10	paraden	parad	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	obl	7:obl:med	SpaceAfter=No
11	,	,	PUNCT	MID	_	12	punct	12:punct	_
12	säger	säga	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	5:parataxis	_
13	González	González	PROPN	PM|NOM	Case=Nom	12	nsubj	12:nsubj	_
14	Anaya	Anaya	PROPN	PM|NOM	Case=Nom	13	flat:name	13:flat:name	SpaceAfter=No
15	.	.	PUNCT	MAD	_	5	punct	5:punct	_

~~~


