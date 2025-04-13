---
layout: base
title:  'Statistics of det:poss in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="sq_staf-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="sq_staf-dep-det-adj.html">det:adj</a></tt>, <tt><a href="sq_staf-dep-det-pron.html">det:pron</a></tt>.

41 nodes (1%) are attached to their parents as `det:poss`.

35 instances of `det:poss` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.39024390243902.

The following 5 pairs of parts of speech are connected with `det:poss`: <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (35; 85% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-DET.html">DET</a></tt> (3; 7% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 det:poss	color:blue
1	Mendja	mendje	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj	_	end_char=594|start_char=588
2	e	e	DET	_	Gender=Fem|Number=Sing	3	det	_	end_char=596|start_char=595
3	kujt	kujt	PRON	_	Case=Gen|Number=Sing|PronType=Int	1	nmod	_	end_char=601|start_char=597
4	flet	fles	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	end_char=606|start_char=602
5	me	me	ADP	_	_	6	case	_	end_char=609|start_char=607
6	gojën	gojë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	4	obl	_	end_char=615|start_char=610
7	e	e	DET	_	Gender=Fem|Number=Sing	8	det	_	end_char=617|start_char=616
8	tij	tij	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	det:poss	_	end_char=621|SpaceAfter=No|start_char=618
9	?	?	PUNCT	_	_	4	punct	_	end_char=622|start_char=621

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:poss	color:blue
1	Sqota	sqotë	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	end_char=51|start_char=46
2	kishte	kam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	3	aux	_	end_char=58|start_char=52
3	qullur	qulloj	VERB	_	VerbForm=Part	0	root	_	end_char=65|start_char=59
4	betonin	beton	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	3	obj	_	end_char=73|start_char=66
5	e	e	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	6	det:poss	_	end_char=75|start_char=74
6	pistës	pistë	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	4	nmod	_	end_char=82|start_char=76
7	së	së	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Art	8	det:poss	_	end_char=85|start_char=83
8	aeroportit	aeroport	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	end_char=97|start_char=96
10	ndërtesat	ndërtesë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	4	conj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	end_char=108|start_char=107
12	rojat	rojë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	4	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	end_char=115|start_char=114

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 det:poss	color:blue
1	Le	le	PART	_	_	3	cc	_	end_char=708|start_char=706
2	të	të	PART	_	_	3	mark	_	end_char=711|start_char=709
3	jetë	jam	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	end_char=716|start_char=712
4	emri	emër	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	obj	_	end_char=721|start_char=717
5	që	që	PRON	_	PronType=Rel	9	nsubj	_	end_char=724|start_char=722
6	i	i	PRON	_	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	9	iobj	_	_
7	e	e	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
8	keni	kam	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	9	aux	_	end_char=732|start_char=728
9	vënë	vëj	VERB	_	VerbForm=Part	4	acl:relcl	_	end_char=737|start_char=733
10	bonum	bonum	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	9	obj	_	end_char=743|start_char=738
11	omen	omen	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	10	fixed	_	end_char=748|start_char=744
12	i	i	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	13	det	_	end_char=750|start_char=749
13	fatit	fat	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	10	nmod:poss	_	end_char=756|start_char=751
14	të	të	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Art	15	det:poss	_	end_char=759|start_char=757
15	tij	tij	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	13	nmod:poss	_	end_char=763|start_char=760
16	të	të	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Art	17	det:adj	_	end_char=766|start_char=764
17	ardhshëm	ardhshëm	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	end_char=775|SpaceAfter=No|start_char=767
18	.	.	PUNCT	_	_	9	punct	_	end_char=776|start_char=775

~~~


