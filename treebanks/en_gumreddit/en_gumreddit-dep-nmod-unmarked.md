---
layout: base
title:  'Statistics of nmod:unmarked in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `nmod:unmarked`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gumreddit-dep-nmod-desc.html">nmod:desc</a></tt>, <tt><a href="en_gumreddit-dep-nmod-poss.html">nmod:poss</a></tt>.

12 nodes (0%) are attached to their parents as `nmod:unmarked`.

10 instances of `nmod:unmarked` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 6 pairs of parts of speech are connected with `nmod:unmarked`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (7; 58% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="en_gumreddit-pos-DET.html">DET</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:unmarked	color:blue
1	_	_	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=adversative-antithesis:88->89:1:_|Entity=(93-animal-new-nnnnn-cf2-2-sgl|Lem=*LOWER*|Len=4
2	_	_	NOUN	NNS	Number=Plur	4	nsubj	4:nsubj	Entity=93)|Lem=_|Len=7
3	_	_	AUX	MD	VerbForm=Fin	4	aux	4:aux	Lem=_|Len=3
4	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=4
5	_	_	NOUN	NNS	Number=Plur	7	nmod:unmarked	7:nmod:unmarked	Entity=(94-time-new-nnnnn-cf3-1-sgl)|Lem=minute|Len=7|MSeg=minute-s
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=5
7	_	_	NOUN	NN	Number=Sing	4	obl	4:obl:after	Entity=(95-event-auto-nnnnn-cf1-1-sgl)|Lem=_|Len=5|MSeg=bir-th|SpaceAfter=No
8	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nmod:unmarked	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=attribution-positive:32->33:1:sem-atsrc-225-_+lex-indwd-226-_+syn-rpr-229-_|Entity=(30-person-giv:act-sssns-cf1*-1-ana)|Lem=_|Len=1|PDTB=EntRel:EntRel:_:_:214-224:225-251|XML=<w></w>
2	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Cxn=Ditransitive|CxnElt=2:Ditransitive.V|Lem=_|Len=6|MSeg=re-mind
3	_	_	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	Entity=(36-person-new-nnnnn-cf4-2-sgl(30-person-giv:act-sssns-cf1*-1-ana)|Lem=_|Len=2
4	_	_	NOUN	NN	Number=Sing	2	iobj	2:iobj	CxnElt=2:Ditransitive.Rec|Entity=36)|Lem=_|Len=6
5	_	_	SCONJ	IN	_	8	mark	8:mark	Discourse=explanation-justify:33->24:2:_|Lem=_|Len=4
6	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	8:expl	Entity=(37-event-new-nnnnn-cf2-1-cata)|Lem=_|Len=2
7	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	Lem=be|Len=2
8	_	_	ADJ	JJ	Degree=Pos	2	ccomp	2:ccomp	CxnElt=2:Ditransitive.Theme|Lem=_|Len=10
9	_	_	PART	TO	_	10	mark	10:mark	Entity=(37-event-acc:com-nnnnn-cf2-2-coref|Lem=_|Len=2
10	_	_	VERB	VB	VerbForm=Inf	8	csubj	8:csubj	Lem=_|Len=6|MSeg=at-tend
11	_	_	ADP	IN	_	12	case	12:case	Lem=_|Len=2
12	_	_	ADJ	JJS	Degree=Sup	14	obl	14:obl:at	Lem=_|Len=5
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Lem=_|Len=1
14	_	_	ADJ	JJ	Degree=Pos	10	obj	10:obj	Lem=_|Len=3
15	_	_	DET	DT	Definite=Ind|PronType=Art	16	det	16:det	Entity=(38-time-new-nnnnn-cf6-2-sgl|Lem=_|Len=1
16	_	_	NOUN	NN	Number=Sing	14	nmod:unmarked	14:nmod:unmarked	Entity=38)37)|Lem=_|Len=4
17	_	_	ADP	IN	_	19	case	19:case	Lem=_|Len=3
18	_	_	DET	DT	Number=Plur|PronType=Dem	19	det	19:det	Entity=(39-abstract-new-nnnnn-cf3-2-sgl|Lem=that|Len=5
19	_	_	NOUN	NN	Number=Sing|Typo=Yes	10	obl	10:obl:for	CorrectForm=purposes|Entity=39)|Lem=_|Len=7|XML=<sic ana:::"purposes"></sic>
20	_	_	SCONJ	IN	_	21	mark	21:mark	Discourse=elaboration-attribute:34->33:0:syn-mdf-243-_+syn-nmn-244-245-_|Lem=_|Len=2
21	_	_	VERB	VBG	VerbForm=Ger	19	acl	19:acl:of	Lem=network|Len=10|MSeg=net-work-ing
22	_	_	CCONJ	CC	_	23	cc	23:cc	Discourse=attribution-positive:35->36:0:sem-atsrc-225-gold+lex-indwd-247-_|Lem=_|Len=3|PDTB=Explicit:Expansion.Conjunction:and:246:244-245:247-251
23	_	_	VERB	VBG	VerbForm=Ger	21	conj	19:acl:of|21:conj:and	Cxn=Ditransitive|CxnElt=23:Ditransitive.V|Lem=remind|Len=9|MSeg=re-mind-ing
24	_	_	NOUN	NNS	Number=Plur	23	iobj	23:iobj	CxnElt=23:Ditransitive.Rec|Entity=(40-person-new-nnnnn-cf5-1-sgl)|Lem=person|Len=6
25	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	26	nsubj	26:nsubj	CxnElt=26:Existential-ExistPred.Pivot|Discourse=joint-list_m:36->34:0:dm-and-246-gold|Entity=(30-person-giv:act-sssns-cf1*-1-ana)|Lem=_|Len=1
26	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	23	ccomp	23:ccomp	Cxn=Existential-ExistPred-NoExpl|CxnElt=23:Ditransitive.Theme|Lem=_|Len=5|SpaceAfter=No
27	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 nmod:unmarked	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Discourse=explanation-justify:127->126:0:_|Entity=(10-person-giv:inact-nnnnn-cf2-1-ana)|Lem=*LOWER*|Len=3|PDTB=Implicit:Contingency.Cause.Reason:because:_:925-932:933-945
2	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	aux	4:aux	Lem=have|Len=3
3	_	_	ADV	RB	_	4	advmod	4:advmod	Lem=_|Len=7|MSeg=al-ready
4	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	Lem=answer|Len=8|MSeg=answer-ed
5	_	_	DET	DT	Number=Plur|PronType=Dem	6	det	6:det	Entity=(71-abstract-giv:inact-nnnnn-cf1-2-coref|Lem=this|Len=5
6	_	_	NOUN	NNS	Number=Plur	4	obj	4:obj	Entity=71)|Lem=question|Len=9|MSeg=question-s|SpaceAfter=No
7	_	_	PUNCT	,	_	8	punct	8:punct	Lem=_|Len=1
8	_	_	DET	DT	PronType=Ind	4	parataxis	4:parataxis	Entity=(118-abstract-new-nnnnn-cf4-1-sgl|Lem=_|Len=4
9	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=2
10	_	_	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	8	nmod	8:nmod:of	Entity=(71-abstract-giv:act-nnnnn-cf1-1-ana)118)|Lem=they|Len=4
11	_	_	ADJ	JJ	Degree=Pos	12	amod	12:amod	Entity=(119-event-new-nnnnn-cf3-2-sgl|Lem=_|Len=7
12	_	_	NOUN	NNS	Number=Plur	8	nmod:unmarked	8:nmod:unmarked	Entity=119)|Lem=time|Len=5|MSeg=time-s|SpaceAfter=No
13	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


