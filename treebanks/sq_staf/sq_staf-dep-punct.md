---
layout: base
title:  'Statistics of punct in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `punct`

This relation is universal.

492 nodes (14%) are attached to their parents as `punct`.

393 instances of `punct` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.52235772357724.

The following 12 pairs of parts of speech are connected with `punct`: <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-PUNCT.html">PUNCT</a></tt> (307; 62% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PUNCT.html">PUNCT</a></tt> (94; 19% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-PUNCT.html">PUNCT</a></tt> (23; 5% instances), <tt><a href="sq_staf-pos-ADV.html">ADV</a></tt>-<tt><a href="sq_staf-pos-PUNCT.html">PUNCT</a></tt> (21; 4% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-PUNCT.html">PUNCT</a></tt> (17; 3% instances), <tt><a href="sq_staf-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sq_staf-pos-PUNCT.html">PUNCT</a></tt> (10; 2% instances), <tt><a href="sq_staf-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sq_staf-pos-PUNCT.html">PUNCT</a></tt> (9; 2% instances), <tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sq_staf-pos-PUNCT.html">PUNCT</a></tt> (5; 1% instances), <tt><a href="sq_staf-pos-NUM.html">NUM</a></tt>-<tt><a href="sq_staf-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="sq_staf-pos-PART.html">PART</a></tt>-<tt><a href="sq_staf-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="sq_staf-pos-AUX.html">AUX</a></tt>-<tt><a href="sq_staf-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="sq_staf-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sq_staf-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 punct	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 punct	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Mirëpo	mirëpo	CCONJ	_	_	5	cc	_	end_char=302|start_char=296
2	kjo	kjo	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	5	nsubj	_	end_char=306|start_char=303
3	është	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	5	cop	_	end_char=312|start_char=307
4	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	5	det:adj	_	end_char=314|start_char=313
5	tmerrshme	tmerrshëm	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	end_char=324|SpaceAfter=No|start_char=315
6	.	.	PUNCT	_	_	5	punct	_	end_char=325|start_char=324

~~~


