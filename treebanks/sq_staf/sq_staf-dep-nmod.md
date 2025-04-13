---
layout: base
title:  'Statistics of nmod in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="sq_staf-dep-nmod-poss.html">nmod:poss</a></tt>.

64 nodes (2%) are attached to their parents as `nmod`.

62 instances of `nmod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.578125.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (50; 78% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (6; 9% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="sq_staf-pos-NUM.html">NUM</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 nmod	color:blue
1	Kur	kur	SCONJ	_	_	3	mark	_	end_char=476|start_char=473
2	nuk	nuk	PART	_	_	3	advmod	_	end_char=480|start_char=477
3	ke	kam	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	8	advcl	_	end_char=483|start_char=481
4	se	se	SCONJ	_	_	6	mark	_	end_char=486|start_char=484
5	ç'	ç'	PRON	_	PronType=Int	6	obj	_	end_char=492|SpaceAfter=No|start_char=487
6	bën	bëj	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	ccomp	_	end_char=492|SpaceAfter=No|start_char=487
7	,	,	PUNCT	_	_	3	punct	_	end_char=493|start_char=492
8	merresh	marr	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Mid	0	root	_	end_char=501|start_char=494
9	me	me	ADP	_	_	10	case	_	end_char=504|start_char=502
10	thashetheme	thashethem	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur	8	obl	_	end_char=516|start_char=505
11	grash	grash	NOUN	_	Case=Abl|Definite=Ind|Gender=Fem|Number=Plur	10	nmod	_	end_char=522|SpaceAfter=No|start_char=517
12	.	.	PUNCT	_	_	8	punct	_	end_char=523|start_char=522

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nmod	color:blue
1	Do	do	PART	_	_	3	mark	_	end_char=816|start_char=814
2	të	të	PART	_	_	3	mark	_	end_char=819|start_char=817
3	vënë	vë	VERB	_	Mood=Sub|Tense=Pres	11	xcomp	_	end_char=824|start_char=820
4	buzën	buzë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	3	obj	_	end_char=830|start_char=825
5	në	në	ADP	_	_	6	case	_	end_char=833|start_char=831
6	gaz	gaz	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	end_char=837|SpaceAfter=No|start_char=834
7	,	,	PUNCT	_	_	3	punct	_	end_char=838|start_char=837
8	do	do	PART	_	_	11	mark	_	end_char=841|start_char=839
9	të	të	PART	_	_	11	mark	_	_
10	u	u	AUX	_	_	11	aux	_	_
11	shkojë	shkoj	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	end_char=852|start_char=846
12	mendja	mend	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	11	obj	_	end_char=859|start_char=853
13	te	te	ADP	_	_	14	case	_	end_char=862|start_char=860
14	nofka	nofkë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	11	obl	_	end_char=868|start_char=863
15	ime	ime	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=1|Poss=Yes|PronType=Prs	14	det:poss	_	end_char=872|SpaceAfter=No|start_char=869
16	.	.	PUNCT	_	_	11	punct	_	end_char=873|start_char=872

~~~


