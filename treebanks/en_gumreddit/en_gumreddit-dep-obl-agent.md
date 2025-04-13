---
layout: base
title:  'Statistics of obl:agent in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gumreddit-dep-obl-unmarked.html">obl:unmarked</a></tt>.

11 nodes (0%) are attached to their parents as `obl:agent`.

11 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.27272727272727.

The following 4 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (7; 64% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (2; 18% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 9% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 obl:agent	color:blue
1	_	_	NOUN	NNS	Number=Plur	5	nsubj	5:nsubj	Discourse=causal-cause:132->131:0:_|Entity=(125-person-new-cf1-1-coref)|Lem=parent|Len=7|MSeg=parent-s
2	_	_	AUX	MD	VerbForm=Fin	5	aux	5:aux	Lem=_|Len=4
3	_	_	AUX	VB	VerbForm=Inf	5	aux	5:aux	Lem=_|Len=4
4	_	_	AUX	VBN	Tense=Past|VerbForm=Part	5	cop	5:cop	Lem=be|Len=4
5	_	_	NOUN	NNS	Number=Plur	0	root	0:root|7:nsubj	Entity=(125-person-giv:act-cf1-1-pred|Lem=hippie|Len=7|MSeg=hippie-s
6	_	_	PRON	WP	PronType=Rel	7	nsubj	5:ref	Discourse=elaboration-attribute:133->132:0:syn-mdf-872+syn-relcl-873-874|Lem=_|Len=3
7	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	acl:relcl	5:acl:relcl	Lem=think|Len=7
8	_	_	PRON	PRP$	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	Entity=(84-person-giv:inact-cf2-2-coref(125-person-giv:act-cf1-1-ana)|Lem=_|Len=5
9	_	_	NOUN	NN	Number=Sing	12	nsubj	12:nsubj|15:nsubj:pass:xsubj	Entity=84)|Lem=_|Len=8
10	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	aux	12:aux	Lem=do|Len=3
11	_	_	PART	RB	Polarity=Neg	12	advmod	12:advmod	Lem=not|Len=3|Negation=Yes
12	_	_	VERB	VB	VerbForm=Inf	7	ccomp	7:ccomp	Lem=_|Len=4
13	_	_	PART	TO	_	15	mark	15:mark	Lem=_|Len=2
14	_	_	AUX	VB	VerbForm=Inf	15	aux:pass	15:aux:pass	Lem=_|Len=2
15	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	12	xcomp	12:xcomp	Lem=label|Len=7|MSeg=label-ed
16	_	_	ADP	IN	_	17	case	17:case	Lem=_|Len=2
17	_	_	NOUN	NN	Number=Sing	15	obl:agent	15:obl:agent	Entity=(126-abstract-new-cf3-1-sgl)125)|Lem=_|Len=7|MSeg=soci-ety|SpaceAfter=No
18	_	_	PUNCT	.	_	5	punct	5:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 obl:agent	color:blue
1	_	_	CCONJ	CC	_	9	cc	9:cc	Discourse=joint-sequence_m:48->42:2:dm-and-329+dm-then-330|Lem=*LOWER*|Len=3|PDTB=Explicit:Expansion.Conjunction:and:329:267-328:330-353
2	_	_	ADV	RB	PronType=Dem	9	advmod	9:advmod	Lem=_|Len=4|PDTB=Explicit:Temporal.Asynchronous.Precedence:then:330:267-328:329,331-353
3	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	9	nsubj	9:nsubj	Entity=(29-person-giv:act-cf1*-1-ana)|Lem=_|Len=4
4	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	Lem=be|Len=3
5	_	_	INTJ	UH	_	9	discourse	9:discourse	Lem=_|Len=2|SpaceAfter=No|XML=<w>
6	_	_	PUNCT	HYPH	_	5	punct	5:punct	Lem=_|Len=1|SpaceAfter=No
7	_	_	ADV	RB	_	9	advmod	9:advmod	Lem=_|Len=2|SpaceAfter=No
8	_	_	PUNCT	HYPH	_	7	punct	7:punct	Lem=_|Len=1|SpaceAfter=No
9	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=9|MSeg=surpris-ed|XML=</w>
10	_	_	ADP	IN	_	12	case	12:case	Lem=_|Len=2
11	_	_	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Entity=(47-event-new-cf5-2-sgl|Lem=_|Len=3
12	_	_	NOUN	NN	Number=Sing	9	obl	9:obl:at	Lem=_|Len=3
13	_	_	ADP	IN	_	15	case	15:case	Lem=_|Len=2
14	_	_	DET	DT	Definite=Def|PronType=Art	15	det	15:det	Entity=(6-abstract-giv:inact-cf4-2-coref-Beat_Bobby_Flay|Lem=_|Len=3
15	_	_	NOUN	NN	Number=Sing	12	nmod	12:nmod:of	Entity=6)47)|Lem=_|Len=4
16	_	_	ADV	WRB	PronType=Int	21	advmod	21:advmod	Discourse=context-circumstance:49->48:0:dm-when-344|Lem=_|Len=4|PDTB=Explicit:Temporal.Synchronous:when:344:329-343:345-353
17	_	_	PRON	PRP$	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	19	nmod:poss	19:nmod:poss	Entity=(43-object-giv:act-cf2-3-coref(29-person-giv:act-cf1*-1-ana)|Lem=_|Len=5
18	_	_	ADJ	JJ	Degree=Pos	19	amod	19:amod	Lem=_|Len=5
19	_	_	NOUN	NN	Number=Sing	21	nsubj:pass	21:nsubj:pass	Entity=43)|Lem=_|Len=10|MSeg=concoct-ion
20	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	aux:pass	21:aux:pass	Lem=get|Len=4|MSeg=get-s
21	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	9	advcl	9:advcl:when	Lem=clobber|Len=9|MSeg=clobber-ed
22	_	_	ADP	IN	_	23	case	23:case	Lem=_|Len=2
23	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	21	obl:agent	21:obl:agent	Entity=(2-person-giv:act-cf3-1,2-coref-Bobby_Flay|Lem=_|Len=3
24	_	_	PROPN	NNP	Number=Sing	23	flat	23:flat	Entity=2)|Lem=_|Len=4|SpaceAfter=No
25	_	_	PUNCT	.	_	9	punct	9:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 obl:agent	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	Discourse=explanation-motivation:16->47:5:_|Entity=(20-abstract-new-cf3-1-cata)|Lem=*LOWER*|Len=2|PDTB=NoRel:NoRel:_:_:85-101:102-124
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	Lem=be|Len=2
3	_	_	CCONJ	CC	Polarity=Neg	4	cc:preconj	4:cc:preconj	Lem=_|Len=7
4	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=9|MSeg=necess-ary|SpaceAfter=No
5	_	_	PUNCT	,	_	6	punct	6:punct	Lem=_|Len=1
6	_	_	ADJ	JJ	Degree=Pos	4	conj	4:conj:nor	Lem=_|Len=8|SpaceAfter=No
7	_	_	PUNCT	,	_	9	punct	9:punct	Lem=_|Len=1
8	_	_	CCONJ	CC	Polarity=Neg	9	cc	9:cc	Lem=_|Len=3
9	_	_	ADJ	JJ	Degree=Pos	4	conj	4:conj:nor	Lem=_|Len=9|MSeg=desir-able
10	_	_	PART	TO	_	11	mark	11:mark	Entity=(20-abstract-acc:com-cf3-2-coref|Lem=_|Len=2
11	_	_	VERB	VB	VerbForm=Inf	4	csubj	4:csubj|6:csubj|9:csubj	Lem=_|Len=5
12	_	_	DET	DT	PronType=Ind	14	det	14:det	Bridge=14<21|Entity=(21-abstract-acc:inf-cf1-3-coref|Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	14	compound	14:compound	Lem=_|Len=6
14	_	_	NOUN	NNS	Number=Plur	11	obj	11:obj	Entity=21)20)|Lem=norm|Len=5|MSeg=norm-s|SpaceAfter=No
15	_	_	PUNCT	,	_	20	punct	20:punct	Lem=_|Len=1
16	_	_	SCONJ	IN	_	20	mark	20:mark	Discourse=explanation-justify:17->16:0:dm-since-117|Lem=_|Len=5|PDTB=Explicit:Contingency.Cause.Reason:since:117:102-116:118-124
17	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	20	nsubj:pass	20:nsubj:pass	Entity=(21-abstract-giv:act-cf1-1-ana)|Lem=_|Len=4
18	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	aux:pass	20:aux:pass	Lem=be|Len=3
19	_	_	ADV	RB	Degree=Pos	20	advmod	20:advmod	Lem=_|Len=9|MSeg=will-ing-ly
20	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	advcl	4:advcl:since	Lem=follow|Len=8|MSeg=follow-ed
21	_	_	ADP	IN	_	22	case	22:case	Lem=_|Len=2
22	_	_	ADJ	JJS	Degree=Sup	20	obl:agent	20:obl:agent	Entity=(8-person-giv:inact-cf2-1-coref)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


