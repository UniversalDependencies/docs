---
layout: base
title:  'Statistics of expl in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `expl`

This relation is universal.

93 nodes (1%) are attached to their parents as `expl`.

89 instances of `expl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.78494623655914.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (63; 68% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (23; 25% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (6; 6% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 expl	color:blue
1	_	_	SCONJ	IN	_	3	mark	3:mark	Discourse=condition:33->34:1|Lem=*LOWER*|Len=2
2	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	Entity=(person-5-giv:inact-1-ana)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	12	advcl	12:advcl:if	Lem=_|Len=3
4	_	_	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(object-41-new-3,6-coref|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	6	compound	6:compound	Lem=_|Len=8
6	_	_	NOUN	NN	Number=Sing	3	obj	3:obj	Lem=_|Len=4
7	_	_	ADP	IN	_	8	case	8:case	Lem=_|Len=2
8	_	_	PROPN	NNP	Number=Sing	6	nmod	6:nmod:of	Entity=(person-42-new-1,2-coref-Sammy_Sosa|Lem=_|Len=5
9	_	_	PROPN	NNP	Number=Sing	8	flat	8:flat	Entity=42)41)|Lem=_|Len=4|SpaceAfter=No
10	_	_	PUNCT	,	_	3	punct	3:punct	Lem=_|Len=1
11	_	_	PRON	EX	_	12	expl	12:expl	Discourse=justify:34->51:4|Lem=_|Len=5
12	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=be|Len=2
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	12	nsubj	12:nsubj	Lem=_|Len=6
15	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	18:nsubj	Discourse=elaboration:35->34:0|Entity=(object-41-giv:act-1-ana)|Lem=_|Len=2
16	_	_	AUX	MD	VerbForm=Fin	18	aux	18:aux	Lem=_|Len=5
17	_	_	AUX	VB	VerbForm=Inf	18	cop	18:cop	Lem=_|Len=2
18	_	_	ADJ	JJ	Degree=Pos	14	acl:relcl	14:acl:relcl	Lem=_|Len=5
19	_	_	DET	DT	Definite=Ind|PronType=Art	20	det	20:det	Entity=(abstract-43-new-2-sgl|Lem=_|Len=1
20	_	_	NOUN	NN	Number=Sing	18	obj	18:obj	Lem=_|Len=3
21	_	_	ADP	IN	_	22	case	22:case	Lem=_|Len=2
22	_	_	NOUN	NN	Number=Sing	20	nmod	20:nmod:of	Entity=43)|Lem=_|Len=5|SpaceAfter=No
23	_	_	PUNCT	.	_	12	punct	12:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 expl	color:blue
1	_	_	SCONJ	IN	_	3	mark	3:mark	Discourse=justify:113->114:0|Lem=*LOWER*|Len=4
2	_	_	NOUN	NN	Number=Sing	3	obl:npmod	3:obl:npmod	Lem=_|Len=5
3	_	_	VERB	VBG	VerbForm=Ger	12	advcl	12:advcl:from	Lem=watch|Len=8
4	_	_	DET	DT	Number=Sing|PronType=Dem	5	det	5:det	Entity=(abstract-6-giv:inact-2-coref-Beat_Bobby_Flay|Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	3	obj	3:obj	Entity=6)|Lem=_|Len=4
6	_	_	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Entity=(time-94-new-3-sgl|Lem=_|Len=3
7	_	_	ADJ	JJ	Degree=Pos	8	amod	8:amod	Lem=_|Len=4
8	_	_	NOUN	NN	Number=Sing	3	obl:tmod	3:obl:tmod	Entity=94)|Lem=_|Len=4|SpaceAfter=No
9	_	_	PUNCT	,	_	3	punct	3:punct	Lem=_|Len=1
10	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	expl	12:expl	Discourse=joint_m:114->6:5|Entity=(abstract-95-new-1-cata)|Lem=_|Len=2
11	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	Lem=be|Len=2
12	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=5
13	_	_	SCONJ	IN	_	15	mark	15:mark	Entity=(abstract-95-acc:com-3-coref|Lem=_|Len=4
14	_	_	PROPN	NNP	Number=Sing	15	nsubj	15:nsubj	Entity=(person-2-giv:inact-1-coref-Bobby_Flay)|Lem=_|Len=5
15	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	csubj	12:csubj	Lem=have|Len=3
16	_	_	ADJ	JJ	Degree=Pos	17	amod	17:amod	Entity=(abstract-96-new-2-sgl|Lem=_|Len=7
17	_	_	NOUN	NN	Number=Sing	15	obj	15:obj	Lem=_|Len=9
18	_	_	ADP	IN	_	19	case	19:case	Lem=_|Len=2
19	_	_	PRON	WP	PronType=Rel	17	nmod	17:nmod:of	Entity=(abstract-97-new-1-sgl|Lem=_|Len=4
20	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	nsubj	22:nsubj	Entity=(person-2-giv:act-1-ana-Bobby_Flay)|Lem=_|Len=2
21	_	_	AUX	MD	VerbForm=Fin	22	aux	22:aux	Lem=_|Len=5
22	_	_	VERB	VB	VerbForm=Inf	19	acl:relcl	19:acl:relcl	Entity=97)96)95)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	.	_	12	punct	12:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Discourse=concession:77->76:0|Lem=*LOWER*|Len=4
2	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	5:expl	Entity=(abstract-85-new-1-cata)|Lem=_|Len=2
3	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	5:cop	Lem=be|Len=3
4	_	_	DET	DT	Definite=Def|PronType=Art	5	det	5:det	Lem=_|Len=3
5	_	_	NOUN	NN	Number=Sing	1	ccomp	1:ccomp	Lem=_|Len=4
6	_	_	ADP	IN	_	10	obl	10:obl	Entity=(abstract-85-acc:com-5-coref|Lem=_|Len=4
7	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	10	nsubj	10:nsubj	Entity=(person-86-acc:com-1-sgl)|Lem=_|Len=3
8	_	_	AUX	MD	VerbForm=Fin	10	aux	10:aux	Lem=_|Len=5
9	_	_	ADV	RB	Degree=Pos	10	advmod	10:advmod	Lem=_|Len=6
10	_	_	VERB	VB	VerbForm=Inf	5	csubj	5:csubj	Lem=_|Len=4
11	_	_	NOUN	NN	Number=Sing	10	obj	10:obj	Entity=(abstract-48-giv:inact-1-coref)|Lem=_|Len=8
12	_	_	CCONJ	CC	_	13	cc	13:cc	Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	11	conj	10:obj|11:conj:and	Entity=(abstract-66-giv:inact-1-coref)85)|Lem=_|Len=11
14	_	_	ADV	RB	Degree=Pos	1	advmod	1:advmod	Lem=_|Len=6|SpaceAfter=No
15	_	_	PUNCT	.	_	1	punct	1:punct	Lem=_|Len=1

~~~


