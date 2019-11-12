---
layout: base
title:  'Statistics of acl:cleft in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `acl:cleft`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="sv_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

6 nodes (0%) are attached to their parents as `acl:cleft`.

6 instances of `acl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.16666666666667.

The following 3 pairs of parts of speech are connected with `acl:cleft`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (3; 50% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (2; 33% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 17% instances).


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
9	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	13	expl	13:expl	_
10	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing	13	det	13:det	_
11	mer	mycket	ADV	AB|KOM	Degree=Cmp	12	advmod	12:advmod	_
12	oroväckande	oroväckande	ADJ	PC|PRS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Part	13	amod	13:amod	_
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
1	Jag	jag	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
2	tror	tro	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	5	expl	5:expl	_
4	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	därför	därför	ADV	AB	_	2	ccomp	2:ccomp	_
6	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur	7	nsubj	7:nsubj	_
7	fördjupat	fördjupa	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	5	acl:cleft	5:acl:cleft	_
8	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def	7	obj	7:obj	_
9	i	i	ADP	PP	_	10	case	10:case	_
10	mönster	mönster	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	obl	7:obl:i	_
11	och	och	CCONJ	KN	_	12	cc	12:cc	_
12	färg	färg	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	10	conj	7:obl:i|10:conj:och	SpaceAfter=No
13	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl:cleft	color:blue
1	Trots	trots	ADP	PP	_	2	case	2:case	_
2	dessa	dessa	PRON	PN|UTR/NEU|PLU|DEF|SUB/OBJ	Definite=Def|Number=Plur	6	obl	6:obl:trots	_
3	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
4	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	6	expl	6:expl	_
5	inte	inte	PART	AB	Polarity=Neg	6	advmod	6:advmod	_
6	alla	alla	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur	0	root	0:root	_
7	i	i	ADP	PP	_	8	case	8:case	_
8	partiet	parti	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	6	nmod	6:nmod:i	_
9	som	som	PRON	HP|-|-|-	PronType=Int,Rel	10	nsubj	10:nsubj	_
10	förstod	förstå	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	6	acl:cleft	6:acl:cleft	_
11	meddelandena	meddelande	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	10	obj	10:obj	_
12	som	som	PRON	HP|-|-|-	PronType=Int,Rel	15	obj	15:obj	_
13	presidenten	president	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	14	nsubj	14:nsubj|15:nsubj	_
14	försökte	försöka	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	11	acl	11:acl	_
15	skicka	skicka	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	14	xcomp	14:xcomp	_
16	dem	de	PRON	PN|UTR/NEU|PLU|DEF|OBJ	Case=Acc|Definite=Def|Number=Plur	15	iobj	15:iobj	_
17	igår	igår	ADV	AB	_	15	advmod	15:advmod	SpaceAfter=No
18	.	.	PUNCT	MAD	_	6	punct	6:punct	_

~~~


