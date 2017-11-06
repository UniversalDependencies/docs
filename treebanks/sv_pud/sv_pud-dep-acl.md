---
layout: base
title:  'Statistics of acl in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="sv_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

129 nodes (1%) are attached to their parents as `acl`.

123 instances of `acl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.24806201550388.

The following 15 pairs of parts of speech are connected with `acl`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (64; 50% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (19; 15% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (14; 11% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (9; 7% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	Det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	nsubj	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	anledningen	anledning	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	0	root	_	_
4	till	till	ADP	PP	_	7	mark	_	_
5	att	att	SCONJ	SN	_	7	mark	_	_
6	vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur	7	nsubj	_	_
7	kommer	komma	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl	_	_
8	tillbaka	tillbaka	ADV	PL	_	7	compound:prt	_	_
9	för	för	ADP	PP	_	11	mark	_	_
10	att	att	PART	IE	_	11	mark	_	_
11	få	få	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	advcl	_	_
12	mer	mycket	ADV	AB|KOM	Degree=Cmp	11	obj	_	SpaceAfter=No
13	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	1882	1882	NUM	RG|NOM	Case=Nom	2	obl	_	_
2	togs	ta	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing	4	det	_	_
4	telegrafsystem	telegrafsystem	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	nsubj:pass	_	_
5	utrustat	utrustad	ADJ	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	4	acl	_	_
6	med	med	ADP	PP	_	8	case	_	_
7	34	34	NUM	RG|NOM	Case=Nom	8	nummod	_	_
8	brandlarmssignaler	brandlarmssignal	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	obl	_	_
9	i	i	ADP	PP	_	10	case	_	_
10	drift	drift	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obl	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 acl	color:blue
1	Denna	denna	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	2	det	_	_
2	affär	affär	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	nsubj:pass	_	_
3	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	ses	se	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	0	root	_	_
5	som	som	CCONJ	KN	_	6	mark	_	_
6	startpunkten	startpunkt	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	xcomp	_	_
7	för	för	ADP	PP	_	9	case	_	_
8	hans	hans	DET	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	9	nmod:poss	_	_
9	karriär	karriär	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	nmod	_	_
10	som	som	CCONJ	KN	_	12	mark	_	_
11	radikal	radikal	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	12	amod	_	_
12	revolutionär	revolutionär	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	acl	_	SpaceAfter=No
13	.	.	PUNCT	MAD	_	4	punct	_	_

~~~


