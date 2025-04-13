---
layout: base
title:  'Statistics of nsubj in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="sq_staf-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="sq_staf-dep-nsubj-pass.html">nsubj:pass</a></tt>.

209 nodes (6%) are attached to their parents as `nsubj`.

153 instances of `nsubj` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.52631578947368.

The following 13 pairs of parts of speech are connected with `nsubj`: <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (91; 44% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (76; 36% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (7; 3% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt> (7; 3% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Profeti	profet	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	end_char=1484|start_char=1477
2	përgjigjet	përgjigjem	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Mid	0	root	_	end_char=1495|start_char=1485
3	pa	pa	SCONJ	_	_	4	mark	_	end_char=1498|start_char=1496
4	shikuar	shikoj	VERB	_	VerbForm=Part	2	advcl	_	end_char=1506|start_char=1499
5	kënd	kënd	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
6	:	:	PUNCT	_	_	2	punct	_	end_char=1512|start_char=1511

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nsubj	color:blue
1	Shenjë	shenjë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	end_char=459|start_char=453
2	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	3	det:adj	_	end_char=461|start_char=460
3	mirë	mirë	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	end_char=466|start_char=462
4	është	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	1	cop	_	end_char=472|start_char=467
5	kjo	kjo	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	1	nsubj	_	end_char=476|SpaceAfter=No|start_char=473
6	.	.	PUNCT	_	_	1	punct	_	end_char=477|start_char=476

~~~


