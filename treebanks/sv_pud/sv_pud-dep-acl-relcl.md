---
layout: base
title:  'Statistics of acl:relcl in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="sv_pud-dep-acl-cleft.html">acl:cleft</a></tt>.

300 nodes (2%) are attached to their parents as `acl:relcl`.

298 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.93666666666667.

The following 18 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (212; 71% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (22; 7% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (20; 7% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (14; 5% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


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
6	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	8	det	8:det	_
7	högsta	hög	ADJ	JJ|SUV|UTR/NEU|SIN/PLU|DEF|NOM	Case=Nom|Definite=Def|Degree=Sup	8	amod	8:amod	_
8	belopp	belopp	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	appos	2:appos|10:nsubj:pass	_
9	som	som	PRON	HP|-|-|-	PronType=Int,Rel	10	nsubj:pass	8:ref	_
10	tillåts	tillåta	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	8	acl:relcl	8:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	MAD	_	2	punct	2:punct	_

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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	Det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	4	nsubj	4:nsubj	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
3	inte	inte	PART	AB	Polarity=Neg	4	advmod	4:advmod	_
4	vad	vad	PRON	HP|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int,Rel	0	root	0:root	_
5	vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur	6	nsubj	6:nsubj	_
6	behöver	behöva	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl:relcl	_
7	i	i	ADP	PP	_	9	case	9:case	_
8	vårt	vår	PRON	PS|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing|Poss=Yes	9	nmod:poss	9:nmod:poss	_
9	land	land	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	6	obl	6:obl:i	SpaceAfter=No
10	,	,	PUNCT	MID	_	12	punct	12:punct	_
11	gott	god	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	12	amod	12:amod	_
12	folk	folk	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	vocative	4:vocative	SpaceAfter=No
13	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


