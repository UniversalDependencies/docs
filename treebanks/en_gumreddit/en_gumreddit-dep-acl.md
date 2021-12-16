---
layout: base
title:  'Statistics of acl in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="en_gumreddit-dep-acl-relcl.html">acl:relcl</a></tt>.

140 nodes (1%) are attached to their parents as `acl`.

128 instances of `acl` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.97857142857143.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (105; 75% instances), <tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (10; 7% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (7; 5% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 acl	color:blue
1	_	_	CCONJ	CC	_	22	cc	22:cc	Discourse=antithesis:93->98:1|Lem=*LOWER*|Len=3
2	_	_	SCONJ	IN	_	4	mark	4:mark	Discourse=circumstance:94->95:1|Lem=_|Len=2
3	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	4:nsubj	Entity=(person-74-giv:inact-1-ana)|Lem=_|Len=2
4	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	10	advcl	10:advcl:as	Lem=grow|Len=4
5	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
6	_	_	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	Entity=(place-89-new-2-sgl|Lem=_|Len=1
7	_	_	NOUN	NN	Number=Sing	4	obl	4:obl:as	Entity=89)|Lem=_|Len=6|SpaceAfter=No
8	_	_	PUNCT	,	_	4	punct	4:punct	Lem=_|Len=1
9	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	10:nsubj	Discourse=same-unit_m:95->93:0|Entity=(event-90-new-2-disc(person-74-giv:act-1-ana)|Lem=_|Len=2
10	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	Lem=run|Len=3
11	_	_	ADP	RP	_	10	compound:prt	10:compound:prt	Lem=_|Len=3
12	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
13	_	_	NOUN	NN	Number=Sing	10	obl	10:obl:of	Entity=(substance-88-giv:act-1-coref)|Lem=_|Len=4
14	_	_	PART	TO	_	15	mark	15:mark	Discourse=purpose:96->95:0|Lem=_|Len=2
15	_	_	VERB	VB	VerbForm=Inf	13	acl	13:acl:to	Lem=_|Len=4
16	_	_	DET	DT	_	17	det	17:det	Entity=(object-86-giv:inact-2-coref|Lem=_|Len=5
17	_	_	NOUN	NN	Number=Sing	15	obj	15:obj	Entity=86)|Lem=_|Len=6
18	_	_	ADP	IN	_	15	obl	15:obl	Entity=90)|Lem=_|Len=4
19	_	_	CCONJ	CC	_	22	cc	22:cc	Discourse=evaluation:97->93:1|Lem=_|Len=3
20	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	22	nsubj	22:nsubj|24:nsubj:xsubj	Entity=(event-90-giv:act-1-coref)|Lem=_|Len=2
21	_	_	ADV	RB	_	22	advmod	22:advmod	Lem=_|Len=4
22	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	conj	10:conj:but	Lem=become|Len=6
23	_	_	DET	DT	Definite=Ind|PronType=Art	24	det	24:det	Entity=(event-90-giv:act-2-coref|Lem=_|Len=1
24	_	_	NOUN	NN	Number=Sing	22	xcomp	22:xcomp	Entity=90)|Lem=_|Len=9
25	_	_	PART	TO	_	26	mark	26:mark	Lem=_|Len=2
26	_	_	VERB	VB	VerbForm=Inf	24	acl	24:acl:to	Lem=_|Len=6|SpaceAfter=No
27	_	_	PUNCT	.	_	10	punct	10:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 21 acl	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=cause:10->14:1|Entity=(person-17-new-2-coref|Lem=*LOWER*|Len=3
2	_	_	NOUN	NN	Number=Sing	11	nsubj	11:nsubj|16:nsubj|18:nsubj:xsubj	Lem=_|Len=5
3	_	_	ADP	IN	_	4	case	4:case	Lem=_|Len=2
4	_	_	NUM	CD	NumForm=Word|NumType=Card	2	nmod	2:nmod:of	Entity=(organization-18-new-1-sgl|Lem=_|Len=3
5	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Entity=(organization-19-new-2-sgl|Lem=_|Len=3
7	_	_	NOUN	NNS	Number=Plur	4	nmod	4:nmod:of	Entity=19)18)|Lem=business|Len=10
8	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	9:nsubj	Discourse=elaboration:11->10:0|Entity=(person-4-giv:act-1-ana)|Lem=_|Len=1
9	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	acl:relcl	7:acl:relcl	Entity=17)|Lem=_|Len=7
10	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	aux	11:aux	Discourse=same-unit_m:12->10:1|Lem=have|Len=3
11	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	Lem=purchase|Len=9
12	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Entity=(object-20-new-3-coref|Lem=_|Len=1
13	_	_	ADJ	JJ	Degree=Pos	14	amod	14:amod	Lem=_|Len=3
14	_	_	NOUN	NN	Number=Sing	11	obj	11:obj	Entity=20)|Lem=_|Len=5
15	_	_	CCONJ	CC	_	16	cc	16:cc	Discourse=joint_m:13->10:2|Lem=_|Len=3
16	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	conj	11:conj:and	Lem=need|Len=6
17	_	_	PART	TO	_	18	mark	18:mark	Lem=_|Len=2
18	_	_	VERB	VB	VerbForm=Inf	16	xcomp	16:xcomp	Lem=_|Len=4
19	_	_	SCONJ	WRB	PronType=Int	18	obj	18:obj	Lem=_|Len=3
20	_	_	PART	TO	_	21	mark	21:mark	Lem=_|Len=2
21	_	_	VERB	VB	VerbForm=Inf	19	acl	19:acl:to	Entity=(event-21-new-1-disc|Lem=_|Len=8
22	_	_	ADJ	JJ	Degree=Pos	23	amod	23:amod	Entity=(abstract-3-giv:inact-2-coref|Lem=_|Len=9
23	_	_	NOUN	NNS	Number=Plur	21	obj	21:obj	Entity=3)|Lem=datum|Len=4
24	_	_	ADP	IN	_	25	case	25:case	Lem=_|Len=2
25	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	21	obl	21:obl:to	Entity=(object-20-giv:act-1-ana)|Lem=_|Len=2
26	_	_	ADP	IN	_	29	case	29:case	Lem=_|Len=4
27	_	_	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	29	nmod:poss	29:nmod:poss	Entity=(object-22-new-3-coref(person-17-giv:act-1-ana)|Lem=_|Len=3
28	_	_	ADJ	JJ	Degree=Pos	29	amod	29:amod	Lem=_|Len=3
29	_	_	NOUN	NN	Number=Sing	21	obl	21:obl:from	Entity=22)21)|Lem=_|Len=5|SpaceAfter=No
30	_	_	PUNCT	.	_	11	punct	11:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 acl	color:blue
1	_	_	SCONJ	IN	_	7	mark	7:mark	Discourse=background:2->5:0|Entity=(abstract-2-new-19-disc|Lem=*LOWER*|Len=2
2	_	_	DET	DT	_	4	det	4:det	Entity=(place-3-new-3-coref|Lem=_|Len=5
3	_	_	ADJ	JJ	Degree=Pos	4	amod	4:amod	Lem=_|Len=5
4	_	_	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=3)|Lem=_|Len=7
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	Lem=be|Len=2
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	NOUN	NNS	Number=Plur	19	advcl	19:advcl:if	Entity=(abstract-4-new-1-sgl|Lem=billion|Len=8
8	_	_	PUNCT	-LRB-	_	11	punct	11:punct	Discourse=antithesis:3->2:0|Lem=_|Len=1|SpaceAfter=No
9	_	_	SCONJ	IN	_	11	mark	11:mark	Lem=_|Len=2
10	_	_	PART	RB	Polarity=Neg	11	advmod	11:advmod	Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	7	acl	7:acl:if	Lem=trillion|Len=9|SpaceAfter=No
12	_	_	PUNCT	-RRB-	_	11	punct	11:punct	Lem=_|Len=1
13	_	_	ADP	IN	_	14	case	14:case	Discourse=same-unit_m:4->2:1|Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of	Entity=4)|Lem=_|Len=4|SpaceAfter=No
15	_	_	PUNCT	,	_	7	punct	7:punct	Lem=_|Len=1
16	_	_	SCONJ	WRB	PronType=Int	19	obl	19:obl:from	Discourse=question:5->6:0|Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux	19:aux	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	19:nsubj	Entity=(place-3-giv:act-1-ana)|Lem=_|Len=4
19	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=borrow|Len=9
20	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	19:punct	Entity=2)|Lem=_|Len=1

~~~


