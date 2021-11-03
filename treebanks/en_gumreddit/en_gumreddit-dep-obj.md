---
layout: base
title:  'Statistics of obj in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `obj`

This relation is universal.

863 nodes (5%) are attached to their parents as `obj`.

837 instances of `obj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.89918887601391.

The following 14 pairs of parts of speech are connected with `obj`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (589; 68% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (199; 23% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt> (19; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (13; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (9; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (5; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	_	_	SCONJ	WRB	PronType=Int	3	mark	3:mark	Discourse=condition:15->16:1|Entity=(event-17-new-9-disc|Lem=*LOWER*|Len=4
2	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	Entity=(person-5-giv:inact-1-ana)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	advcl	9:advcl:when	Lem=_|Len=5
4	_	_	ADJ	JJR	Degree=Cmp	5	amod	5:amod	Entity=(object-18-new-2-sgl|Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	3	obj	3:obj	Entity=18)|Lem=_|Len=5|SpaceAfter=No
6	_	_	PUNCT	,	_	3	punct	3:punct	Lem=_|Len=1
7	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	9	nsubj	9:nsubj	Discourse=joint_m:16->7:3|Entity=(person-5-giv:act-1-ana)|Lem=_|Len=3
8	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	aux	9:aux	Lem=be|Len=3
9	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=devalue|Len=9
10	_	_	DET	DT	Definite=Def|PronType=Art	11	det	11:det	Entity=(abstract-19-new-2-sgl|Lem=_|Len=3
11	_	_	NOUN	NN	Number=Sing	9	obj	9:obj	Lem=_|Len=4
12	_	_	ADP	IN	_	14	case	14:case	Lem=_|Len=2
13	_	_	DET	DT	Definite=Def|PronType=Art	14	det	14:det	Entity=(abstract-20-new-2-sgl|Lem=_|Len=3
14	_	_	NOUN	NN	Number=Sing	11	nmod	11:nmod:of|17:nsubj	Entity=20)|Lem=_|Len=8
15	_	_	PRON	WDT	PronType=Rel	17	nsubj	14:ref	Discourse=elaboration:17->16:0|Lem=_|Len=4
16	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	17:cop	Lem=be|Len=2
17	_	_	ADV	RB	_	14	acl:relcl	14:acl:relcl	Lem=_|Len=7
18	_	_	ADP	IN	_	19	case	19:case	Lem=_|Len=2
19	_	_	NOUN	NN	Number=Sing	17	nmod	17:nmod:in	Entity=(abstract-21-new-1-sgl)19)|Lem=_|Len=11|SpaceAfter=No
20	_	_	PUNCT	.	_	9	punct	9:punct	Entity=17)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 obj	color:blue
1	_	_	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	Discourse=contrast_m:38->34:2|Entity=(object-41-giv:inact-3,4-coref(person-5-giv:inact-1-ana)|Lem=*LOWER*|Len=4
2	_	_	PROPN	NNP	Number=Sing	4	compound	4:compound	Entity=(person-42-giv:act-1,2-coref-Sammy_Sosa|Lem=_|Len=5
3	_	_	PROPN	NNP	Number=Sing	2	flat	2:flat	Entity=42)|Lem=_|Len=4
4	_	_	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=41)|Lem=_|Len=4
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	Lem=be|Len=2
6	_	_	PART	RB	Polarity=Neg	7	advmod	7:advmod	Lem=not|Len=3
7	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=5
8	_	_	NOUN	NN	Number=Sing	7	obj	7:obj	Lem=_|Len=8
9	_	_	ADV	RB	Degree=Pos	7	advmod	7:advmod	Lem=_|Len=7
10	_	_	SCONJ	IN	_	12	mark	12:mark	Discourse=cause:39->38:0|Lem=_|Len=7
11	_	_	PRON	EX	_	12	expl	12:expl	Lem=_|Len=5
12	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	7:advcl:because	Lem=be|Len=3
13	_	_	ADV	RB	_	14	advmod	14:advmod	Bridge=45<47|Entity=(object-47-acc:inf-2-coref|Lem=_|Len=2
14	_	_	ADJ	JJ	Degree=Pos	12	nsubj	12:nsubj	Lem=_|Len=4
15	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=2
16	_	_	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	14	obl	14:obl:of	Entity=47)|Lem=they|Len=4
17	_	_	CCONJ	CC	_	19	cc	19:cc	Discourse=joint_m:40->39:0|Lem=_|Len=3
18	_	_	NOUN	NN	Number=Sing	19	nsubj	19:nsubj	Entity=(person-48-new-1-coref)|Lem=_|Len=8
19	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	conj	7:advcl:because|12:conj:and	Lem=have|Len=3
20	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	19	obj	19:obj	Entity=(object-47-giv:act-1-ana)|Lem=_|Len=2
21	_	_	ADV	RB	_	19	advmod	19:advmod	Lem=_|Len=3|SpaceAfter=No
22	_	_	PUNCT	.	_	7	punct	7:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	_	_	VERB	VB	Person=2|VerbForm=Inf	0	root	0:root	Discourse=background:8->16:2|Lem=*LOWER*|Len=8
2	_	_	SCONJ	WRB	PronType=Rel	1	obj	1:obj	Lem=_|Len=4
3	_	_	PROPN	NNP	Number=Sing	5	nsubj	5:nsubj|13:nsubj	Entity=(person-13-new-1,2-coref-Anne_Burrell|Lem=_|Len=4
4	_	_	PROPN	NNP	Number=Sing	3	flat	3:flat	Entity=13)|Lem=_|Len=7
5	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	acl:relcl	2:acl:relcl	Entity=(event-14-new-1-disc|Lem=challenge|Len=10
6	_	_	PROPN	NNP	Number=Sing	5	obj	5:obj	Entity=(person-2-giv:inact-1-coref-Bobby_Flay)|Lem=_|Len=5
7	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=2
8	_	_	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	Entity=(event-15-new-3-sgl|Lem=_|Len=1
9	_	_	NOUN	NN	Number=Sing	10	compound	10:compound	Entity=(object-16-new-1-coref)|Lem=_|Len=10
10	_	_	NOUN	NN	Number=Sing	5	obl	5:obl:to	Entity=15)14)|Lem=_|Len=6|SpaceAfter=No
11	_	_	PUNCT	,	_	13	punct	13:punct	Lem=_|Len=1
12	_	_	CCONJ	CC	_	13	cc	13:cc	Discourse=sequence_m:9->8:0|Lem=_|Len=3
13	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	conj	2:acl:relcl|5:conj:and	Lem=win|Len=3|SpaceAfter=No
14	_	_	PUNCT	.	_	1	punct	1:punct	Lem=_|Len=1

~~~


