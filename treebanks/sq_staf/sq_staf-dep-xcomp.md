---
layout: base
title:  'Statistics of xcomp in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `xcomp`

This relation is universal.

40 nodes (1%) are attached to their parents as `xcomp`.

38 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.7.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (20; 50% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (14; 35% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Kjo	ky	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
2	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	3	det:adj	_	_
3	fundit	fundit	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	nsubj	_	_
4	ka	kam	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
5	të	të	PART	_	_	6	mark	_	_
6	ngjarë	ngjar	VERB	_	VerbForm=Part	4	xcomp	_	_
7	të	të	PART	_	_	11	mark	_	_
8	mos	mos	PART	_	_	11	advmod	_	_
9	jetë	jam	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	11	cop	_	_
10	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	11	det:adj	_	_
11	vërtetë	vërtëte	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	xcomp	_	SpaceAfter=No
12	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	Nëna	nëna	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	_	end_char=2202|start_char=2198
2	çuditet	çudit	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Mid	0	root	_	end_char=2210|start_char=2203
3	pse	pse	SCONJ	_	_	7	mark	_	end_char=2214|start_char=2211
4	babain	baba	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	end_char=2221|start_char=2215
5	nuk	nuk	PART	_	_	7	advmod	_	end_char=2225|start_char=2222
6	e	e	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	end_char=2227|start_char=2226
7	kapin	kam	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	2	advcl	_	end_char=2233|start_char=2228
8	të	të	DET	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Art	9	det:adj	_	end_char=2236|start_char=2234
9	dridhura	dridhurë	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	7	xcomp	_	SpaceAfter=No
10	!	!	PUNCT	_	_	2	punct	_	end_char=2246|start_char=2245

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
1	Kur	kur	SCONJ	_	_	2	mark	_	end_char=3124|start_char=3121
2	mendoj	mendoj	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	end_char=3131|start_char=3125
3	se	se	SCONJ	_	_	9	mark	_	end_char=3134|start_char=3132
4	si	si	ADV	_	_	9	advmod	_	end_char=3137|start_char=3135
5	familja	familje	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	end_char=3145|start_char=3138
6	e	e	DET	_	Gender=Fem|Number=Sing	7	det	_	end_char=3147|start_char=3146
7	tij	tij	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	det:poss	_	end_char=3151|start_char=3148
8	u	u	AUX	_	_	9	aux	_	end_char=3153|start_char=3152
9	bë	bëj	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Mid	2	ccomp	_	end_char=3156|start_char=3154
10	copë	copë	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	9	xcomp	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	end_char=3162|start_char=3161
12	sidomos	sidomos	ADV	_	_	10	advmod	_	end_char=3170|start_char=3163
13	e	e	CCONJ	_	_	14	cc	_	end_char=3172|start_char=3171
14	shoqja	shoqjë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	10	parataxis	_	SpaceAfter=No
15	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
16	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
17	.	.	PUNCT	_	_	2	punct	_	_

~~~


