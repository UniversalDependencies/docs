---
layout: base
title:  'Statistics of acl:relcl in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-acl.html">acl</a></tt>.

271 nodes (1%) are attached to their parents as `acl:relcl`.

271 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.5239852398524.

The following 14 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (181; 67% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (28; 10% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (24; 9% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (16; 6% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 acl:relcl	color:blue
1	Lenny	Lenny	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
2	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	cop	_	_
3	ein	ein	DET	DT	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|NumType=Card|PronType=Art	5	det	_	_
4	eingefleischter	eingefleischt	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	InflectionType=Mixed
5	Junggeselle	Junggeselle	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	,	_	12	punct	_	_
7	der	der	PRON	REL	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem,Rel	12	nsubj	_	_
8	wenig	wenig	DET	DT	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	9	det	_	_
9	Glück	Glück	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	12	obj	_	_
10	mit	mit	ADP	IN	_	11	case	_	_
11	Frauen	Frau	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur	12	obl	_	_
12	hat	haben	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 acl:relcl	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	große	groß	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	InflectionType=Weak
3	Höhe	Höhe	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
4	hilft	helfen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	9	punct	_	_
6	das	der	DET	DT	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	Klima	Klima	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	9	obj	_	_
8	zu	zu	PART	RP	_	9	mark	_	_
9	kühlen	kühlen	VERB	VB	_	4	xcomp	_	SpaceAfter=No
10	,	,	PUNCT	,	_	14	punct	_	_
11	das	der	PRON	REL	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem,Rel	14	nsubj	_	_
12	anderenfalls	anderenfalls	ADV	RB	Degree=Pos	14	advmod	_	_
13	sehr	sehr	ADV	RB	Degree=Pos	14	advmod	_	_
14	heiß	heiß	ADJ	JJ	Degree=Pos	7	acl:relcl	_	_
15	sein	sein	AUX	VB	_	14	cop	_	_
16	würde	werden	AUX	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Past	14	aux	_	SpaceAfter=No
17	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 19 acl:relcl	color:blue
1	Der	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
2	wohl	wohl	PART	RP	_	3	advmod	_	_
3	bekannteste	bekannt	ADJ	JJ	Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	4	amod	_	InflectionType=Weak
4	Mensch	Mensch	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
5	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Kupferzeit	Kupferzeit	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
7	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	cop	_	_
8	der	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
9	als	als	SCONJ	CC	_	10	case	_	_
10	Kältemumie	Kältemumie	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	11	advcl	_	_
11	erhaltene	erhalten	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	InflectionType=Weak
12	Ötzi	Ötzi	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
13	,	,	PUNCT	,	_	19	punct	_	_
14	der	der	PRON	REL	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem,Rel	19	nsubj	_	_
15	um	um	ADP	IN	_	16	case	_	_
16	3300	3300	NUM	CD	NumType=Card	19	obl	_	_
17	v.	von	ADP	IN	_	18	case	_	_
18	Chr.	Chr.	PROPN	NNP	Case=Dat|Gender=Masc|Number=Sing	16	nmod	_	_
19	lebte	leben	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	12	acl:relcl	_	SpaceAfter=No
20	.	.	PUNCT	.	_	12	punct	_	_

~~~


