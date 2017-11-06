---
layout: base
title:  'Statistics of acl:relcl in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-acl.html">acl</a></tt>.

271 nodes (1%) are attached to their parents as `acl:relcl`.

271 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.47232472324723.

The following 14 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (182; 67% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (32; 12% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (22; 8% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (15; 6% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 acl:relcl	color:blue
1	Lenny	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
2	ist	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	cop	_	_
3	ein	_	DET	DT	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3	5	det	_	_
4	eingefleischter	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	5	amod	_	InflectionType=Mixed
5	Junggeselle	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	SpaceAfter=No
6	,	_	PUNCT	,	_	12	punct	_	_
7	der	_	PRON	REL	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	_
8	wenig	_	DET	DT	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|Person=3	9	det	_	_
9	Glück	_	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing|Person=3	12	obj	_	_
10	mit	_	ADP	IN	_	11	case	_	_
11	Frauen	_	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur|Person=3	12	obl	_	_
12	hat	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	acl:relcl	_	SpaceAfter=No
13	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 acl:relcl	color:blue
1	Die	_	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	3	det	_	_
2	große	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Person=3	3	amod	_	InflectionType=Weak
3	Höhe	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	4	nsubj	_	_
4	hilft	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
5	,	_	PUNCT	,	_	9	punct	_	_
6	das	_	DET	DT	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|Person=3	7	det	_	_
7	Klima	_	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing|Person=3	9	obj	_	_
8	zu	_	PART	RP	_	9	mark	_	_
9	kühlen	_	VERB	VB	_	4	xcomp	_	SpaceAfter=No
10	,	_	PUNCT	,	_	14	punct	_	_
11	das	_	PRON	REL	Case=Nom|Gender=Neut|Number=Sing|Person=3	14	nsubj	_	_
12	anderenfalls	_	ADV	RB	Degree=Pos	14	advmod	_	_
13	sehr	_	ADV	RB	Degree=Pos	14	advmod	_	_
14	heiß	_	ADJ	JJ	Degree=Pos	7	acl:relcl	_	_
15	sein	_	AUX	VB	_	14	cop	_	_
16	würde	_	AUX	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Past	14	aux	_	SpaceAfter=No
17	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 19 acl:relcl	color:blue
1	Der	_	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3	4	det	_	_
2	wohl	_	PART	RP	_	3	advmod	_	_
3	bekannteste	_	ADJ	JJ	Case=Nom|Degree=Sup|Gender=Masc|Number=Sing|Person=3	4	amod	_	InflectionType=Weak
4	Mensch	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	_
5	der	_	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3	6	det	_	_
6	Kupferzeit	_	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	4	nmod	_	_
7	ist	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	cop	_	_
8	der	_	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3	12	det	_	_
9	als	_	SCONJ	CC	_	10	case	_	_
10	Kältemumie	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	advcl	_	_
11	erhaltene	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	12	amod	_	InflectionType=Weak
12	Ötzi	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	SpaceAfter=No
13	,	_	PUNCT	,	_	19	punct	_	_
14	der	_	PRON	REL	Case=Nom|Gender=Masc|Number=Sing|Person=3	19	nsubj	_	_
15	um	_	ADP	IN	_	16	case	_	_
16	3300	_	NUM	CD	NumType=Card	19	obl	_	_
17	v.	_	ADP	IN	_	18	case	_	_
18	Chr.	_	PROPN	NNP	Case=Dat|Gender=Masc|Number=Sing|Person=3	16	nmod	_	_
19	lebte	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	12	acl:relcl	_	SpaceAfter=No
20	.	_	PUNCT	.	_	12	punct	_	_

~~~


