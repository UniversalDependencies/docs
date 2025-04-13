---
layout: base
title:  'Statistics of nmod:poss in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sq_staf-dep-nmod.html">nmod</a></tt>.

69 nodes (2%) are attached to their parents as `nmod:poss`.

68 instances of `nmod:poss` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.57971014492754.

The following 9 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (48; 70% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (8; 12% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt> (5; 7% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 nmod:poss	color:blue
1	Ishte	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	5	cop	_	_
2	pa	pa	ADP	_	_	3	case	_	_
3	dyshim	dyshim	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	_
4	dhe	dhe	ADV	_	_	5	advmod	_	_
5	skica	skicë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
6	më	më	ADV	_	_	8	advmod	_	_
7	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing	8	det:adj	_	_
8	bukur	bukur	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	5	amod	_	_
9	e	e	DET	_	Gender=Fem|Number=Sing	10	det	_	_
10	koleksionit	koleksion	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nmod:poss	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod:poss	color:blue
1	Pra	Pra	SCONJ	_	_	4	mark	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	ishte	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	4	cop	_	end_char=645|start_char=640
4	vjeshtë	vjeshtë	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	end_char=653|start_char=646
5	dhe	dhe	CCONJ	_	_	7	cc	_	end_char=657|start_char=654
6	shiu	shi	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	end_char=662|start_char=658
7	kishte	kam	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	4	conj	_	end_char=669|start_char=663
8	kohën	kohë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	7	obl	_	end_char=675|start_char=670
9	e	e	DET	_	Gender=Fem|Number=Sing	10	det	_	end_char=677|start_char=676
10	tij	tij	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod:poss	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	end_char=682|start_char=681

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 21 nmod:poss	color:blue
1	Ndodhesha	ndodhem	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|Voice=Mid	0	root	_	end_char=5484|start_char=5475
2	diku	diku	ADV	_	_	1	advmod	_	end_char=5489|start_char=5485
3	tjetër	tjetër	ADV	_	_	1	advmod	_	end_char=5496|start_char=5490
4	ku	ku	ADV	_	_	13	advmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	end_char=5500|start_char=5499
6	veç	veç	ADP	_	_	7	case	_	end_char=5504|start_char=5501
7	pikturave	pikturë	NOUN	_	Case=Abl|Definite=Def|Gender=Fem|Number=Plur	1	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	end_char=5515|start_char=5514
9	çdo	çdo	PRON	_	PronType=Ind	10	det	_	end_char=5519|start_char=5516
10	gjë	gjë	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	13	nsubj	_	end_char=5523|start_char=5520
11	ishte	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	13	cop	_	end_char=5529|start_char=5524
12	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	13	det:adj	_	end_char=5531|start_char=5530
13	huaj	huaj	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	acl:relcl	_	SpaceAfter=No
14	,	,	PUNCT	_	_	18	punct	_	end_char=5537|start_char=5536
15	po	po	PART	_	_	18	mark	_	end_char=5540|start_char=5538
16	të	të	PART	_	_	18	mark	_	end_char=5543|start_char=5541
17	mos	mos	PART	_	_	18	advmod	_	end_char=5547|start_char=5544
18	përmend	përmend	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	13	advcl	_	end_char=5555|start_char=5548
19	fytyrën	fytyrë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	18	obj	_	end_char=5563|start_char=5556
20	e	e	DET	_	Gender=Fem|Number=Sing	21	det	_	end_char=5565|start_char=5564
21	Dizit	diz	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	19	nmod:poss	_	SpaceAfter=No
22	.	.	PUNCT	_	_	18	punct	_	end_char=5572|start_char=5571

~~~


