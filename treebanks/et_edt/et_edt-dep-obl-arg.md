---
layout: base
title:  'Statistics of obl:arg in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="et_edt-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="et_edt-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="et_edt-dep-obl-tmod.html">obl:tmod</a></tt>.

3467 nodes (1%) are attached to their parents as `obl:arg`.

1942 instances of `obl:arg` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.68791462359389.

The following 19 pairs of parts of speech are connected with `obl:arg`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2116; 61% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (528; 15% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (430; 12% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (91; 3% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (83; 2% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (59; 2% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (55; 2% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (22; 1% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (19; 1% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (14; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (13; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (12; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:arg	color:blue
1	Seekordne	see_kordne	NOUN	S	Case=Nom|Number=Sing	3	obj	3:obj	Arg=pühendama_Arg_1
2	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	pühendatud	pühendama	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	Verb=pühendama
4	obstsöönsuste	obstsöön=sus	NOUN	S	Case=Gen|Number=Plur	5	nmod	5:nmod	_
5	kasutamisele	kasutamine	NOUN	S	Case=All|Number=Sing	3	obl:arg	3:obl	Arg=pühendama_Arg_2
6	kirjanduses	kirjandus	NOUN	S	Case=Ine|Number=Sing	5	nmod	5:nmod	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obl:arg	color:blue
1	Huvitav	huvitav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	2:amod	_
2	küsimus	küsimus	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	8:punct	_
5	millest	mis	PRON	P	Case=Ela|Number=Sing|PronType=Int,Rel	8	obl:arg	8:obl	Arg=meenuma_Arg_3
6	need	see	DET	P	Case=Nom|Number=Plur|PronType=Dem	7	det	7:det	_
7	kirjad	kiri	NOUN	S	Case=Nom|Number=Plur	8	nsubj	8:nsubj	Arg=meenuma_Arg_0
8	jutustavad	jutustama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj:cop	2:csubj	SpaceAfter=No|Verb=jutustama
9	?	?	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:arg	color:blue
1	·	·	PUNCT	Z	_	5	punct	5:punct	_
2	Vaskulaarsele	vaskulaarse	ADJ	A	Case=All|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	kahjustusele	kahjustus	NOUN	S	Case=All|Number=Sing	4	obl:arg	4:obl	_
4	viitav	viita=v	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	5	acl	5:acl	_
5	leid	leid	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
6	neurovisualiseerimisel	neuro_visualiseeri=mine	NOUN	S	Case=Ade|Number=Sing	5	nmod	5:nmod	SpaceAfter=No
7	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


