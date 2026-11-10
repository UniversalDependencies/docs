---
layout: base
title:  'Statistics of acl:relcl in UD_Old_Irish-DipSGG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipSGG: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sga_dipsgg-dep-acl.html">acl</a></tt>.

6 nodes (1%) are attached to their parents as `acl:relcl`.

6 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt> (4; 67% instances), <tt><a href="sga_dipsgg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt> (1; 17% instances), <tt><a href="sga_dipsgg-pos-PART.html">PART</a></tt>-<tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	2	cop	_	SpaceAfter=No
2	sí	sí	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	0	root	_	_
3	tra	trá	ADV	_	_	2	advmod	_	_
4	in	in	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	dias	días	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
6	sa	so	PART	_	PronType=Dem	5	amod	_	_
7	ro	ro	PART	_	PartType=Aug	8	compound:prt	_	SpaceAfter=No
8	sechestar	sechithir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	5	acl:relcl	_	_
9	som	som	PRON	_	Gender=Masc,Neut|Number=Sing|Person=3|PronType=Emp	8	obl:agent	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	ní	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbType=Cop	3	nsubj	_	_
2	ǽr	ér	PART	_	Prefix=Yes	3	amod	_	SpaceAfter=No
3	mall	mall	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
4	ro	ro	PART	_	PartType=Aug	5	compound:prt	_	SpaceAfter=No
5	scríbad	scríbaid	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	3	acl:relcl	_	_
6	in	in	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	letráim	letraim	NOUN	_	Case=Nom|Number=Sing	5	obj	_	SpaceAfter=No
8	so	so	PART	_	PronType=Dem	7	amod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	4	advmod	_	_
2	do	do	ADP	_	AdpType=Prep|Definite=Def	4	case	_	SpaceAfter=No
3	naib	a	DET	_	Case=Dat|Gender=Neut|Number=Plur|PronType=Art	4	det	_	_
4	hí	í	PART	_	PartType=Dct	0	root	_	_
5	th	do	PART	_	PartType=Vb	6	compound:prt	_	SpaceAfter=No
6	ecmoṅgat	doecmaing	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	4	acl:relcl	_	_

~~~


