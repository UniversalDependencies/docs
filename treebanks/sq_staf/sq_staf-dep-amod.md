---
layout: base
title:  'Statistics of amod in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `amod`

This relation is universal.

131 nodes (4%) are attached to their parents as `amod`.

126 instances of `amod` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.96946564885496.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (118; 90% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (8; 6% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-ADV.html">ADV</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-NUM.html">NUM</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 amod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 amod	color:blue
1	Asgjë	asgjë	PRON	_	PronType=Ind	0	root	_	end_char=107|start_char=102
2	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	3	det:adj	_	end_char=109|start_char=108
3	veçantë	veçantë	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	end_char=118|start_char=117
5	ndonëse	ndonëse	SCONJ	_	_	10	mark	_	end_char=126|start_char=119
6	jo	jo	PART	_	_	8	advmod	_	end_char=129|start_char=127
7	dhe	dhe	ADV	_	_	8	advmod	_	end_char=133|start_char=130
8	aq	aq	ADV	_	AdvType=Deg	10	advmod	_	end_char=136|start_char=134
9	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	10	det:adj	_	end_char=138|start_char=137
10	zakonshme	zakonshëm	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	acl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	end_char=149|start_char=148

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 amod	color:blue
1	Qëllimi	qëllim	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj:outer	_	_
2	i	i	DET	_	Gender=Masc|Number=Sing	3	det	_	_
3	kësaj	kjo	PRON	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	paranteze	parantez	NOUN	_	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	1	nmod:poss	_	_
5	nuk	nuk	PART	_	_	9	advmod	_	_
6	është	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	9	cop	_	_
7	thjesht	thjesht	ADV	_	AdvType=Man	9	advmod	_	_
8	të	të	PART	_	_	9	mark	_	_
9	hedh	hedh	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
10	poshtë	poshtë	ADV	_	_	9	advmod	_	_
11	çdo	çdo	PRON	_	PronType=Ind	12	det	_	_
12	përfytyrim	përfytyrim	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	9	obj	_	_
13	të	të	DET	_	_	14	det:adj	_	_
14	gabuar	gabuar	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	_
15	tradicional	tradicional	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	_
16	që	që	PRON	_	PronType=Rel	17	obj	_	_
17	ka	kam	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	12	acl:relcl	_	_
18	të	të	PART	_	_	19	mark	_	_
19	ngjarë	ngjarë	VERB	_	VerbForm=Part	17	xcomp	_	_
20	të	të	PART	_	_	21	mark	_	_
21	krijojë	krijoj	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	19	ccomp	_	_
22	fjala	fjalë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	21	nsubj	_	_
23	njerkë	njerkë	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	22	nmod	_	SpaceAfter=No
24	.	_	PUNCT	_	_	9	punct	_	_

~~~


