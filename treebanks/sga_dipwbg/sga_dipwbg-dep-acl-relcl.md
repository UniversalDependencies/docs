---
layout: base
title:  'Statistics of acl:relcl in UD_Old_Irish-DipWBG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipWBG: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sga_dipwbg-dep-acl.html">acl</a></tt>.

10 nodes (2%) are attached to their parents as `acl:relcl`.

10 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.4.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sga_dipwbg-pos-PART.html">PART</a></tt>-<tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt> (5; 50% instances), <tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt>-<tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt> (3; 30% instances), <tt><a href="sga_dipwbg-pos-PART.html">PART</a></tt>-<tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt>-<tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl:relcl	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	2	advmod	_	_
2	rocomalnisid	comalnaithir	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|Voice=Act	0	root	_	SpaceAfter=No
3	si	si	PRON	_	PronType=Emp	2	amod	_	_
4	a	a	PART	_	PartType=Rel|PronType=Dem	2	obj	_	SpaceAfter=No
5	nropridchissem	pridchaid	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|Voice=Act	4	acl:relcl	_	SpaceAfter=No
6	ni	ni	PRON	_	PronType=Emp	5	amod	_	_
7	dúib	do	ADP	_	AdpType=Prep|Definite=Ind|Number=Plur|Person=2|PronType=Prs	5	obl:prep	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	3	advmod	_	_
2	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	3	nsubj	_	_
3	inse	ansae	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	ṅduit	do	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=2|PronType=Prs	3	obl:prep	_	_
5	ni	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbType=Cop	6	nsubj	_	SpaceAfter=No
6	tú	tú	PRON	_	Number=Sing|Person=2|PronType=Prs	3	dislocated	_	_
7	no	no	PART	_	PartType=Vb	9	compound:prt	_	SpaceAfter=No
8	d	id	PRON	_	Gender=Masc|Number=Sing|Person=3|PronClass=C|PronType=Prs	7	obj:infx	_	SpaceAfter=No
9	nail	ailid	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	6	acl:relcl	_	_
10	acht	acht	SCONJ	_	_	12	mark	_	_
11	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	12	nsubj	_	SpaceAfter=No
12	hé	é	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	acl	_	_
13	no	no	PART	_	PartType=Vb	15	compound:prt	_	SpaceAfter=No
14	t	t	PRON	_	Number=Sing|Person=2|PronClass=A|PronType=Prs	13	obj:infx	_	_
15	ail	ailid	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	12	acl:relcl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	10	advmod	_	_
2	a	a	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	ni	í	PART	_	PartType=Dct	10	obj	_	_
4	tra	trá	ADV	_	_	3	advmod	_	_
5	as	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|PronType=Rel|Tense=Pres|VerbType=Cop	6	nsubj	_	SpaceAfter=No
6	chotarsne	cotarsnae	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	acl:relcl	_	_
7	fri	fri	ADP	_	AdpType=Prep|Definite=Ind	8	case	_	SpaceAfter=No
8	hícc	ícc	NOUN	_	Case=Acc|Number=Sing	6	obl	_	_
9	ni	ní	PART	_	Polarity=Neg	10	advmod	_	SpaceAfter=No
10	etar	adcota	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
11	cia	cía	SCONJ	_	_	12	mark	_	SpaceAfter=No
12	gessir	guidid	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	10	advcl	_	_

~~~


