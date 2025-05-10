---
layout: base
title:  'Statistics of acl:relcl in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="sv_pud-dep-acl-cleft.html">acl:cleft</a></tt>.

301 nodes (2%) are attached to their parents as `acl:relcl`.

299 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.93355481727575.

The following 17 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (211; 70% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (25; 8% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (22; 7% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (14; 5% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:relcl	color:blue
1	5 000	5 000	NUM	RG|NOM	Case=Nom	2	nummod	2:nummod	_
2	dollar	dollar	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	0:root	_
3	per	per	ADP	PP	_	4	case	4:case	_
4	person	person	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nmod	2:nmod:per	SpaceAfter=No
5	,	,	PUNCT	MID	_	2	punct	2:punct	_
6	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	8:det	_
7	högsta	hög	ADJ	JJ|SUV|UTR/NEU|SIN/PLU|DEF|NOM	Case=Nom|Definite=Def|Degree=Sup	8	amod	8:amod	_
8	belopp	belopp	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	appos	2:appos|10:nsubj:pass	_
9	som	som	PRON	HP|-|-|-	PronType=Int,Rel	10	nsubj:pass	8:ref	_
10	tillåts	tillåta	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	8	acl:relcl	8:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	15	dislocated	15:dislocated	_
2	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	3:nsubj	_
3	säger	säga	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	1:acl:relcl	_
4	och	och	CCONJ	KN	_	7	cc	7:cc	_
5	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	7	obj	7:obj	_
6	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	7	nsubj	7:nsubj	_
7	gör	göra	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj:och	SpaceAfter=No
8	,	,	PUNCT	MID	_	3	punct	3:punct	_
9	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	15	dislocated	15:dislocated	_
10	–	–	PUNCT	MID	_	9	punct	9:punct	_
11	faktiskt	faktiskt	ADV	AB|POS	Degree=Pos	9	advmod	9:advmod	SpaceAfter=No
12	,	,	PUNCT	MID	_	9	punct	9:punct	_
13	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	15	nsubj	15:nsubj	_
14	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	15:cop	_
15	otroligt	otrolig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
16	.	.	PUNCT	MAD	_	15	punct	15:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
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


