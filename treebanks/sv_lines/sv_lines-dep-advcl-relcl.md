---
layout: base
title:  'Statistics of advcl:relcl in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="sv_lines-dep-advcl.html">advcl</a></tt>.

32 nodes (0%) are attached to their parents as `advcl:relcl`.

32 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.75.

The following 8 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (23; 72% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 advcl:relcl	color:blue
1	Jag	jag	PRON	PERS-P1SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	tar	ta	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	mittplatsen	mittplats	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	Comma	_	8	punct	_	_
5	vilket	vilken	PRON	WH-REL-SG	Definite=Ind|Gender=Neut|Number=Sing|PronType=Rel	8	obj	_	_
6	jag	jag	PRON	PERS-P1SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	8	nsubj	_	_
7	inte	inte	PART	NEG	Polarity=Neg	8	advmod	_	_
8	tycker	tycka	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl:relcl	_	_
9	om	om	ADP	_	_	8	compound:prt	_	SpaceAfter=No
10	,	,	PUNCT	Comma	_	13	punct	_	_
11	men	men	CCONJ	_	_	13	cc	_	_
12	det	den	PRON	PERS-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	13	nsubj	_	_
13	gör	göra	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	_
14	mig	jag	PRON	PERS-P1SG-ACC	Case=Acc|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	13	iobj	_	_
15	inte	inte	PART	NEG	_	13	advmod	_	_
16	så	så	ADV	_	_	17	advmod	_	_
17	mycket	mycket	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos	13	obj	_	SpaceAfter=No
18	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 advcl:relcl	color:blue
1	Ingen	ingen	PRON	NEG-SG	Definite=Ind|Gender=Com|Number=Sing|PronType=Neg	2	nsubj	_	_
2	sade	säga	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	något	någon	PRON	IND-SG	Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	2	obj	_	_
4	förrän	förrän	SCONJ	_	_	7	mark	_	_
5	maten	mat	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nsubj	_	_
6	var	vara	AUX	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
7	slut	slut	ADJ	POS-IND	Case=Nom|Degree=Pos	2	advcl	_	_
8	på	på	ADP	_	_	11	case	_	_
9	alla	all	DET	TOT-PL	Number=Plur|PronType=Tot	11	det	_	_
10	fyra	fyra	NUM	CARD-PL	_	11	nummod	_	_
11	tallrikarna	tallrik	NOUN	PL-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	7	obl	_	SpaceAfter=No
12	,	,	PUNCT	Comma	_	14	punct	_	_
13	vilket	vilken	PRON	WH-REL-SG	Definite=Ind|Gender=Neut|Number=Sing|PronType=Rel	14	nsubj	_	_
14	tog	ta	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	advcl:relcl	_	_
15	förvånansvärt	förvånansvärt	ADV	_	_	16	advmod	_	_
16	kort	kort	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	17	amod	_	_
17	tid	tid	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	14	obl	_	SpaceAfter=No
18	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 12 advcl:relcl	color:blue
1	Han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	såg	se	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ut	ut	ADV	_	_	2	compound:prt	_	_
4	som	som	ADP	_	_	6	case	_	_
5	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	6	det	_	_
6	lots	lots	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obl	_	SpaceAfter=No
7	,	,	PUNCT	Comma	_	12	punct	_	_
8	vilket	vilken	PRON	WH-REL-SG	Definite=Ind|Gender=Neut|Number=Sing|PronType=Rel	12	nsubj	_	_
9	för	för	ADP	_	_	10	case	_	_
10	sjöfolk	sjöfolk	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	12	nmod	_	_
11	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
12	inkarnationen	inkarnation	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	advcl:relcl	_	_
13	av	av	ADP	_	_	15	case	_	_
14	allt	all	DET	TOT-SG	Gender=Neut|Number=Sing|PronType=Tot	15	det	_	_
15	pålitligt	pålitlig	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	12	amod	_	SpaceAfter=No
16	.	.	PUNCT	Period	_	2	punct	_	_

~~~


