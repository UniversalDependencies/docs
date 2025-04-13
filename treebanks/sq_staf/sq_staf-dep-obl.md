---
layout: base
title:  'Statistics of obl in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="sq_staf-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="sq_staf-dep-obl-tmod.html">obl:tmod</a></tt>.

211 nodes (6%) are attached to their parents as `obl`.

173 instances of `obl` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.72037914691943.

The following 13 pairs of parts of speech are connected with `obl`: <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (157; 74% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (19; 9% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (11; 5% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt> (9; 4% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="sq_staf-pos-ADV.html">ADV</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	Këtë	këtë	PRON	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	4	nsubj	_	end_char=4963|start_char=4959
2	më	më	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	4	iobj	_	end_char=4966|start_char=4964
3	e	e	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	4	obj	_	end_char=4966|start_char=4964
4	përforcuan	përforcoj	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	end_char=4977|start_char=4967
5	edhe	edhe	ADV	_	_	6	advmod	_	end_char=4982|start_char=4978
6	fashat	fashë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	4	obl	_	end_char=4989|start_char=4983
7	e	e	DET	_	Gender=Fem|Number=Plur|PronType=Art	8	det	_	end_char=4991|start_char=4990
8	mbështjella	mbështjelloj	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	6	acl	_	end_char=5003|start_char=4992
9	në	në	ADP	_	_	10	case	_	end_char=5006|start_char=5004
10	kokë	kokë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	end_char=5012|start_char=5011

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl	color:blue
1	Edhe	edhe	ADV	_	_	5	advmod	_	end_char=244|start_char=240
2	nëse	nëse	SCONJ	_	_	5	mark	_	end_char=249|start_char=245
3	energjitë	energji	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	5	nsubj	_	end_char=259|start_char=250
4	të	të	PART	_	_	5	mark	_	end_char=262|start_char=260
5	bjerren	bjerrej	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	end_char=270|start_char=263
6	njena	njenë	PRON	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	5	obl	_	end_char=276|start_char=271
7	mbas	mbas	ADP	_	_	8	case	_	end_char=281|start_char=277
8	tjetrës	tjetër	PRON	_	Case=Abl|Gender=Fem|Number=Plur|PronType=Ind	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	end_char=291|start_char=290

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obl	color:blue
1	Mbi	mbi	ADP	_	_	2	case	_	end_char=3|start_char=0
2	tokën	tokë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	5	obl	_	end_char=9|start_char=4
3	e	e	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	4	det:adj	_	end_char=11|start_char=10
4	huaj	huaj	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	end_char=16|start_char=12
5	binte	bin	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	end_char=22|start_char=17
6	shi	shi	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	end_char=26|start_char=23
7	përzier	përzier	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	end_char=34|start_char=27
8	me	me	ADP	_	_	9	case	_	end_char=37|start_char=35
9	dëborë	dëborë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	end_char=45|start_char=44

~~~


