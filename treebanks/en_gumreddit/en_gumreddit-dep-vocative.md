---
layout: base
title:  'Statistics of vocative in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `vocative`

This relation is universal.

8 nodes (0%) are attached to their parents as `vocative`.

5 instances of `vocative` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.375.

The following 3 pairs of parts of speech are connected with `vocative`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (4; 50% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (3; 38% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 vocative	color:blue
1	_	_	VERB	VB	VerbForm=Inf	4	compound	4:compound	Discourse=topic-question:1->3:4:lex-indwd-6+grf-qst-21|Entity=(1-person-new-cf1-4-coref|Lem=*LOWER*|Len=6
2	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Entity=(2-place-new-cf3-2-coref|Lem=*LOWER*|Len=3
3	_	_	NOUN	NN	Number=Sing	1	obj	1:obj	Entity=2)|Lem=*LOWER*|Len=4
4	_	_	NOUN	NNS	Number=Plur	10	vocative	10:vocative	Entity=1)|Lem=employee|Len=9|MSeg=Employ-ee-s|SpaceAfter=No
5	_	_	PUNCT	,	_	4	punct	4:punct	Lem=_|Len=1
6	_	_	PRON	WP	PronType=Int	10	nsubj	10:nsubj	CxnElt=10:Interrogative-WHInfo-Direct.WHWord|Lem=_|Len=4
7	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	Lem=be|Len=2
8	_	_	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Entity=(3-abstract-new-cf5-3-sgl|Lem=_|Len=3
9	_	_	ADJ	JJS	Degree=Sup	10	amod	10:amod	Lem=weird|Len=8|MSeg=weird-est
10	_	_	NOUN	NN	Number=Sing	0	root	0:root	Cxn=Interrogative-WHInfo-Direct|CxnElt=10:Interrogative-WHInfo-Direct.Clause|Lem=_|Len=5
11	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	13	nsubj	13:nsubj	Discourse=elaboration-attribute:2->1:0:syn-mdf-10+syn-relcl-13|Entity=(1-person-giv:act-cf1-1-ana)|Lem=_|Len=3
12	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	13	aux	13:aux	Lem=have|Len=3
13	_	_	VERB	VBN	Tense=Past|VerbForm=Part	10	acl:relcl	10:acl:relcl	Lem=see|Len=4|MSeg=see-n
14	_	_	PRON	NN	Number=Sing|PronType=Ind	13	obj	13:obj|15:nsubj:xsubj	Entity=(4-person-new-cf4-1-sgl)|Lem=_|Len=7|MSeg=some-one
15	_	_	VERB	VB	VerbForm=Inf	13	xcomp	13:xcomp	Lem=_|Len=2
16	_	_	ADP	IN	_	17	case	17:case	Lem=_|Len=2
17	_	_	NUM	CD	NumForm=Word|NumType=Card	15	obl	15:obl:in	Bridge=2<5|Entity=(5-place-acc:inf-cf2-1-sgl|Lem=_|Len=3
18	_	_	ADP	IN	_	20	case	20:case	Lem=_|Len=2
19	_	_	DET	DT	Definite=Def|PronType=Art	20	det	20:det	Entity=(6-place-new-cf6-2-sgl|Lem=_|Len=3
20	_	_	NOUN	NNS	Number=Plur	17	nmod	17:nmod:of	Entity=6)5)3)|Lem=room|Len=5|MSeg=room-s|SpaceAfter=No
21	_	_	PUNCT	.	_	10	punct	10:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 vocative	color:blue
1	_	_	PUNCT	``	_	6	punct	6:punct	Discourse=adversative-contrast_m:69->66:1:_|Lem=''|Len=1|SpaceAfter=No
2	_	_	ADV	WRB	PronType=Int	6	advmod	6:advmod	CxnElt=6:Interrogative-WHInfo-Direct.WHWord|Lem=*LOWER*|Len=3
3	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	aux	6:aux	Lem=_|Len=2
4	_	_	PART	RB	Polarity=Neg	6	advmod	6:advmod	Lem=not|Len=3|Negation=Yes
5	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	6:nsubj	Entity=(78-organization-acc:com-cf2-1-ana)|Lem=_|Len=3
6	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Cxn=Interrogative-WHInfo-Direct|CxnElt=6:Interrogative-WHInfo-Direct.Clause|Lem=_|Len=4
7	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	obj	6:obj	Entity=(76-abstract-giv:act-cf1*-1-ana)|Lem=_|Len=2
8	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	10	discourse	10:discourse	Discourse=evaluation-comment:70->69:0:lex-indwd-450|Entity=(78-organization-giv:act-cf2-3-coref|Lem=_|Len=3
9	_	_	ADJ	JJ	Degree=Pos	10	amod	10:amod	Lem=_|Len=5
10	_	_	NOUN	NN	Number=Sing	6	vocative	6:vocative	Entity=78)|Lem=_|Len=7|SpaceAfter=No
11	_	_	PUNCT	.	_	6	punct	6:punct	Lem=_|Len=1|SpaceAfter=No
12	_	_	PUNCT	.	_	6	punct	6:punct	Lem=_|Len=1|SpaceAfter=No
13	_	_	PUNCT	''	_	6	punct	6:punct	Lem=''|Len=1

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 vocative	color:blue
1	_	_	CCONJ	CC	_	3	cc	3:cc	Discourse=causal-result:70->69:0:dm-and-582|Lem=_|Len=3|PDTB=Explicit:Contingency.Cause.Result:and:582:576-581:583-603
2	_	_	PUNCT	:	_	1	punct	1:punct	Lem=…|Len=3
3	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	dep	6:dep	Entity=(2-object-giv:act-cf2-1-ana)|Lem=_|Len=2
4	_	_	PUNCT	:	_	3	punct	3:punct	Lem=…|Len=3
5	_	_	PUNCT	:	_	3	punct	3:punct	Lem=…|Len=3
6	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubj	7:nsubj	Entity=(2-object-giv:act-cf2-1-ana)|Lem=_|Len=2
7	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	Lem=slip|Len=7|MSeg=slipp-ed
8	_	_	PUNCT	:	_	10	punct	10:punct	Lem=…|Len=3
9	_	_	ADV	RB	_	10	advmod	10:advmod	Discourse=explanation-evidence:71->72:0:_|Lem=_|Len=4
10	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	7	parataxis	7:parataxis	Lem=_|Len=3
11	_	_	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	12	nmod:poss	12:nmod:poss	Entity=(7-person-giv:inact-cf3-2-coref(3-person-giv:act-cf1*-1-ana)|Lem=_|Len=2
12	_	_	NOUN	NN	Number=Sing	10	iobj	10:iobj	Entity=7)|Lem=_|Len=4|SpaceAfter=No
13	_	_	PUNCT	,	_	18	punct	18:punct	Lem=_|Len=1
14	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	18	nsubj	18:nsubj	Discourse=restatement-partial:72->67:1:ref-prs-565,592+sem-lxchn-569,599|Entity=(3-person-giv:act-cf1*-1-ana)|Lem=_|Len=1
15	_	_	ADV	RB	Degree=Pos	18	advmod	18:advmod	Lem=_|Len=6|MSeg=real-ly
16	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	18	cop	18:cop	Lem=be|Len=2
17	_	_	DET	DT	Definite=Ind|PronType=Art	18	det	18:det	Entity=(3-person-giv:act-cf1*-2-pred|Lem=_|Len=1
18	_	_	NOUN	NN	Number=Sing	10	parataxis	10:parataxis	Entity=3)|Lem=_|Len=5
19	_	_	PUNCT	:	_	20	punct	20:punct	Lem=…|Len=3
20	_	_	ADJ	JJ	Degree=Pos	18	discourse	18:discourse	Discourse=explanation-justify:73->72:1:_|Lem=_|Len=5
21	_	_	NOUN	NN	Number=Sing	20	vocative	20:vocative	Entity=(7-person-giv:act-cf3-1-coref)|Lem=_|Len=5|SpaceAfter=No
22	_	_	PUNCT	.	_	7	punct	7:punct	Lem=_|Len=1

~~~


