---
layout: base
title:  'Statistics of nmod:tmod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gumreddit-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_gumreddit-dep-nmod-poss.html">nmod:poss</a></tt>.

10 nodes (0%) are attached to their parents as `nmod:tmod`.

9 instances of `nmod:tmod` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.1.

The following 5 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (6; 60% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="en_gumreddit-pos-DET.html">DET</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 nmod:tmod	color:blue
1	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=organization-preparation:130->131:1:sem-lxchn-986,1013+sem-synym-989-990,992-1016|Lem=*LOWER*|Len=4
2	_	_	ADP	IN	_	3	case	3:case	Lem=_|Len=2
3	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	obl	1:obl:at	Entity=(121-event-giv:act-cf2-1-ana)|Lem=_|Len=2
4	_	_	DET	DT	Number=Sing|PronType=Dem	5	det	5:det	Entity=(134-abstract-new-cf3-2-coref|Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	1	obl:npmod	1:obl:npmod	Entity=134)|Lem=_|Len=3|SpaceAfter=No
6	_	_	PUNCT	,	_	10	punct	10:punct	Lem=_|Len=1
7	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	10:nsubj|22:nsubj	Discourse=explanation-justify:131->127:1:_|Entity=(134-abstract-giv:act-cf3-4,16-pred(135-time-new-cf5-1-cata)|Lem=_|Len=2|XML=<w>
8	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	10	cop	10:cop	CorrectForm='s|Lem=be|Len=1|XML=<sic ana:::"'s"></sic></w>
9	_	_	NUM	CD	NumForm=Digit|NumType=Card	10	nummod	10:nummod	Entity=(135-time-new-cf5-2-coref|Lem=_|Len=1
10	_	_	NOUN	NNS	Number=Plur	1	parataxis	1:parataxis	Lem=second|Len=7|MSeg=second-s
11	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
12	_	_	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	13	nmod:poss	13:nmod:poss	Entity=(36-person-giv:act-cf1*-1-ana)|Lem=_|Len=4
13	_	_	NOUN	NN	Number=Sing|Typo=Yes	10	nmod	10:nmod:of	CorrectForm=life, but|Entity=135)|Lem=_|Len=4|SpaceAfter=No|XML=<sic ana:::"life, but"><w>
14	_	_	PUNCT	,	Typo=Yes	22	punct	22:punct	CorrectForm=_|Lem=_|Len=1|SpaceAfter=No
15	_	_	CCONJ	CC	Typo=Yes	22	cc	22:cc	CorrectForm=_|Discourse=adversative-contrast_m:132->131:0:dm-but-1000|Lem=_|Len=3|XML=</w></sic>
16	_	_	ADV	RB	Degree=Pos	22	advmod	22:advmod	Lem=_|Len=8|MSeg=probab-ly
17	_	_	DET	DT	Definite=Ind|PronType=Art	22	det	22:det	Entity=(136-abstract-new-cf7-6-sgl|Lem=_|Len=1
18	_	_	ADJ	JJ	Degree=Pos	19	amod	19:amod	Lem=_|Len=8
19	_	_	NOUN	NNS	Number=Plur	21	nmod:tmod	21:nmod:tmod	Lem=time|Len=5|MSeg=time-s
20	_	_	DET	DT	Definite=Ind|PronType=Art	21	det	21:det	Entity=(137-time-new-cf8-2-sgl|Lem=_|Len=1
21	_	_	NOUN	NN	Number=Sing	22	compound	22:compound	Entity=137)|Lem=_|Len=3
22	_	_	NOUN	NN	Number=Sing	10	conj	10:conj:but	Entity=136)|Lem=_|Len=5
23	_	_	DET	DT	Number=Sing|PronType=Dem|Typo=Yes	29	det	29:det	CorrectForm=for that|Entity=(138-person-new-cf6-7-coref|Lem=_|Len=4|XML=<sic ana:::"for that"></sic>
24	_	_	NOUN	NN	Number=Sing	26	compound	26:compound	Lem=_|Len=6|SpaceAfter=No|XML=<w>
25	_	_	PUNCT	HYPH	_	24	punct	24:punct	Lem=_|Len=1|SpaceAfter=No
26	_	_	ADJ	JJ	Degree=Pos	28	compound	28:compound	Lem=_|Len=9|SpaceAfter=No
27	_	_	PUNCT	HYPH	_	26	punct	26:punct	Lem=_|Len=1|SpaceAfter=No
28	_	_	VERB	VBG	VerbForm=Ger	29	amod	29:amod	Lem=look|Len=7|MSeg=look-ing|XML=</w>
29	_	_	NOUN	NN	Number=Sing	22	dep	22:dep	Lem=_|Len=5
30	_	_	ADP	IN	_	31	case	31:case	Lem=_|Len=2
31	_	_	PROPN	NNP	Number=Sing	29	nmod	29:nmod:at	Entity=(122-place-giv:inact-cf4-1-coref)138)134)|Lem=_|Len=9|SpaceAfter=No
32	_	_	PUNCT	.	_	1	punct	1:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nmod:tmod	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=attribution-positive:32->33:1:sem-atsrc-225+lex-indwd-226+syn-rpr-229|Entity=(30-person-giv:act-cf1*-1-ana)|Lem=_|Len=1|XML=<w></w>
2	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Cxn=Ditransitive|Lem=_|Len=6|MSeg=re-mind
3	_	_	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	Entity=(36-person-new-cf4-2-sgl(30-person-giv:act-cf1*-1-ana)|Lem=_|Len=2
4	_	_	NOUN	NN	Number=Sing	2	iobj	2:iobj	Entity=36)|Lem=_|Len=6
5	_	_	SCONJ	IN	_	8	mark	8:mark	Discourse=explanation-justify:33->24:2:_|Lem=_|Len=4
6	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	8:expl	Entity=(37-event-new-cf2-1-cata)|Lem=_|Len=2
7	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	Lem=be|Len=2
8	_	_	ADJ	JJ	Degree=Pos	2	ccomp	2:ccomp	Lem=_|Len=10
9	_	_	PART	TO	_	10	mark	10:mark	Entity=(37-event-acc:com-cf2-2-coref|Lem=_|Len=2
10	_	_	VERB	VB	VerbForm=Inf	8	csubj	8:csubj	Lem=_|Len=6|MSeg=at-tend
11	_	_	ADP	IN	_	12	case	12:case	Lem=_|Len=2
12	_	_	ADJ	JJS	Degree=Sup	14	obl	14:obl:at	Lem=_|Len=5
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Lem=_|Len=1
14	_	_	ADJ	JJ	Degree=Pos	10	obj	10:obj	Lem=_|Len=3
15	_	_	DET	DT	Definite=Ind|PronType=Art	16	det	16:det	Entity=(38-time-new-cf6-2-sgl|Lem=_|Len=1
16	_	_	NOUN	NN	Number=Sing	14	nmod:tmod	14:nmod:tmod	Entity=38)37)|Lem=_|Len=4
17	_	_	ADP	IN	_	19	case	19:case	Lem=_|Len=3
18	_	_	DET	DT	Number=Plur|PronType=Dem	19	det	19:det	Entity=(39-abstract-new-cf3-2-sgl|Lem=that|Len=5
19	_	_	NOUN	NN	Number=Sing|Typo=Yes	10	obl	10:obl:for	CorrectForm=purposes|Entity=39)|Lem=_|Len=7|XML=<sic ana:::"purposes"></sic>
20	_	_	SCONJ	IN	_	21	mark	21:mark	Discourse=elaboration-attribute:34->33:0:syn-mdf-243+syn-nmn-244-245|Lem=_|Len=2
21	_	_	VERB	VBG	VerbForm=Ger	19	acl	19:acl:of	Lem=network|Len=10|MSeg=net-work-ing
22	_	_	CCONJ	CC	_	23	cc	23:cc	Discourse=attribution-positive:35->36:0:sem-atsrc-225+lex-indwd-247|Lem=_|Len=3
23	_	_	VERB	VBG	VerbForm=Ger	21	conj	19:acl:of|21:conj:and	Cxn=Ditransitive|Lem=remind|Len=9|MSeg=re-mind-ing
24	_	_	NOUN	NNS	Number=Plur	23	iobj	23:iobj	Entity=(40-person-new-cf5-1-sgl)|Lem=person|Len=6
25	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	26	nsubj	26:nsubj	Discourse=joint-list_m:36->34:0:dm-and-246|Entity=(30-person-giv:act-cf1*-1-ana)|Lem=_|Len=1
26	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	23	ccomp	23:ccomp	Cxn=Existential-ExistPred-NoExpl|Lem=_|Len=5|SpaceAfter=No
27	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 nmod:tmod	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Discourse=explanation-justify:127->126:0:_|Entity=(10-person-giv:inact-cf2-1-ana)|Lem=*LOWER*|Len=3
2	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	aux	4:aux	Lem=have|Len=3
3	_	_	ADV	RB	_	4	advmod	4:advmod	Lem=_|Len=7|MSeg=al-ready
4	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	Lem=answer|Len=8|MSeg=answer-ed
5	_	_	DET	DT	Number=Plur|PronType=Dem	6	det	6:det	Entity=(71-abstract-giv:inact-cf1-2-coref|Lem=this|Len=5
6	_	_	NOUN	NNS	Number=Plur	4	obj	4:obj	Entity=71)|Lem=question|Len=9|MSeg=question-s|SpaceAfter=No
7	_	_	PUNCT	,	_	8	punct	8:punct	Lem=_|Len=1
8	_	_	DET	DT	PronType=Ind	4	parataxis	4:parataxis	Entity=(118-abstract-new-cf4-1-sgl|Lem=_|Len=4
9	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=2
10	_	_	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	8	nmod	8:nmod:of	Entity=(71-abstract-giv:act-cf1-1-ana)118)|Lem=they|Len=4
11	_	_	ADJ	JJ	Degree=Pos	12	amod	12:amod	Entity=(119-event-new-cf3-2-sgl|Lem=_|Len=7
12	_	_	NOUN	NNS	Number=Plur	8	nmod:tmod	8:nmod:tmod	Entity=119)|Lem=time|Len=5|MSeg=time-s|SpaceAfter=No
13	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


