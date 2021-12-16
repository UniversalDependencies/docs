---
layout: base
title:  'Statistics of nmod:tmod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_gumreddit-dep-nmod-poss.html">nmod:poss</a></tt>.

11 nodes (0%) are attached to their parents as `nmod:tmod`.

9 instances of `nmod:tmod` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.45454545454545.

The following 5 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (7; 64% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="en_gumreddit-pos-DET.html">DET</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 nmod:tmod	color:blue
1	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=preparation:127->128:1|Lem=*LOWER*|Len=4
2	_	_	ADP	IN	_	3	case	3:case	Lem=_|Len=2
3	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	obl	1:obl:at	Entity=(event-119-giv:act-1-ana)|Lem=_|Len=2
4	_	_	DET	DT	Number=Sing|PronType=Dem	5	det	5:det	Entity=(abstract-132-new-2-coref|Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	1	obl:npmod	1:obl:npmod	Entity=132)|Lem=_|Len=3|SpaceAfter=No
6	_	_	PUNCT	,	_	10	punct	10:punct	Lem=_|Len=1
7	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	10:nsubj|22:nsubj	Discourse=justify:128->124:1|Entity=(abstract-132-giv:act-4,16-pred(time-133-new-1-cata)|Lem=_|Len=2|XML=<sic><w>
8	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	10	cop	10:cop	Lem=be|Len=1|XML=</w></sic>
9	_	_	NUM	CD	NumForm=Digit|NumType=Card	10	nummod	10:nummod	Entity=(time-133-new-2-coref|Lem=_|Len=1
10	_	_	NOUN	NNS	Number=Plur	1	parataxis	1:parataxis	Lem=second|Len=7
11	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
12	_	_	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	13	nmod:poss	13:nmod:poss	Entity=(person-36-giv:act-1-ana)|Lem=_|Len=4
13	_	_	NOUN	NN	Number=Sing|Typo=Yes	10	nmod	10:nmod:of	Entity=133)|Lem=_|Len=4|SpaceAfter=No|XML=<sic><w>
14	_	_	PUNCT	,	_	22	punct	22:punct	Lem=_|Len=1|SpaceAfter=No
15	_	_	CCONJ	CC	Typo=Yes	22	cc	22:cc	Discourse=contrast_m:129->128:0|Lem=_|Len=3|XML=</w></sic>
16	_	_	ADV	RB	Degree=Pos	22	advmod	22:advmod	Lem=_|Len=8
17	_	_	DET	DT	Definite=Ind|PronType=Art|Typo=Yes	22	det	22:det	Entity=(abstract-134-new-6-sgl|Lem=_|Len=1|XML=<sic>
18	_	_	ADJ	JJ	Degree=Pos|Typo=Yes	19	amod	19:amod	Lem=_|Len=8
19	_	_	NOUN	NNS	Number=Plur|Typo=Yes	21	nmod:tmod	21:nmod:tmod	Lem=time|Len=5
20	_	_	DET	DT	Definite=Ind|PronType=Art|Typo=Yes	21	det	21:det	Entity=(time-135-new-2-sgl|Lem=_|Len=1
21	_	_	NOUN	NN	Number=Sing	22	compound	22:compound	Entity=135)|Lem=_|Len=3
22	_	_	NOUN	NN	Number=Sing	10	conj	10:conj:but	Entity=134)|Lem=_|Len=5
23	_	_	DET	DT	Number=Sing|PronType=Dem|Typo=Yes	29	det	29:det	Entity=(person-136-new-7-coref|Lem=_|Len=4
24	_	_	NOUN	NN	Number=Sing|Typo=Yes	26	compound	26:compound	Lem=_|Len=6|SpaceAfter=No|XML=<w>
25	_	_	PUNCT	HYPH	_	24	punct	24:punct	Lem=_|Len=1|SpaceAfter=No
26	_	_	ADJ	JJ	Degree=Pos|Typo=Yes	28	compound	28:compound	Lem=_|Len=9|SpaceAfter=No
27	_	_	PUNCT	HYPH	_	26	punct	26:punct	Lem=_|Len=1|SpaceAfter=No
28	_	_	VERB	VBG	Typo=Yes|VerbForm=Ger	29	amod	29:amod	Lem=look|Len=7|XML=</w>
29	_	_	NOUN	NN	Number=Sing	22	dep	22:dep	Lem=_|Len=5|XML=</sic>
30	_	_	ADP	IN	_	31	case	31:case	Lem=_|Len=2
31	_	_	PROPN	NNP	Number=Sing	29	nmod	29:nmod:at	Entity=(place-120-giv:inact-1-coref)136)132)|Lem=_|Len=9|SpaceAfter=No
32	_	_	PUNCT	.	_	1	punct	1:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nmod:tmod	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=justify:31->32:1|Entity=(person-29-giv:act-1-ana)|Lem=_|Len=1|XML=<w></w>
2	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=_|Len=6
3	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	Entity=(person-35-new-2-sgl(person-29-giv:act-1-ana)|Lem=_|Len=2
4	_	_	NOUN	NN	Number=Sing	2	obj	2:obj	Entity=35)|Lem=_|Len=6
5	_	_	SCONJ	IN	_	8	mark	8:mark	Discourse=justify:32->23:2|Lem=_|Len=4
6	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	8:expl	Entity=(event-36-new-1-cata)|Lem=_|Len=2
7	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	Lem=be|Len=2
8	_	_	ADJ	JJ	Degree=Pos	2	ccomp	2:ccomp	Lem=_|Len=10
9	_	_	PART	TO	_	10	mark	10:mark	Entity=(event-36-acc:com-2-coref|Lem=_|Len=2
10	_	_	VERB	VB	VerbForm=Inf	8	csubj	8:csubj	Lem=_|Len=6
11	_	_	ADP	IN	_	12	case	12:case	Lem=_|Len=2
12	_	_	ADJ	JJS	Degree=Sup	14	obl	14:obl:at	Lem=_|Len=5
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Lem=_|Len=1
14	_	_	ADJ	JJ	Degree=Pos	10	obj	10:obj	Lem=_|Len=3
15	_	_	DET	DT	Definite=Ind|PronType=Art	16	det	16:det	Entity=(time-37-new-2-sgl|Lem=_|Len=1
16	_	_	NOUN	NN	Number=Sing	14	nmod:tmod	14:nmod:tmod	Entity=37)36)|Lem=_|Len=4
17	_	_	ADP	IN	_	19	case	19:case	Lem=_|Len=3
18	_	_	DET	DT	Number=Plur|PronType=Dem|Typo=Yes	19	det	19:det	Entity=(abstract-38-new-2-sgl|Lem=this|Len=5|XML=<sic>
19	_	_	NOUN	NN	Number=Sing	10	obl	10:obl:for	Entity=38)|Lem=_|Len=7|XML=</sic>
20	_	_	SCONJ	IN	_	21	mark	21:mark	Discourse=elaboration:33->32:0|Lem=_|Len=2
21	_	_	VERB	VBG	VerbForm=Ger	19	acl	19:acl:of	Lem=network|Len=10
22	_	_	CCONJ	CC	_	23	cc	23:cc	Discourse=attribution:34->35:0|Lem=_|Len=3
23	_	_	VERB	VBG	VerbForm=Ger	21	conj	19:acl:of|21:conj:and	Lem=remind|Len=9
24	_	_	NOUN	NNS	Number=Plur	23	obj	23:obj	Entity=(person-39-new-1-sgl)|Lem=person|Len=6
25	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	26	nsubj	26:nsubj	Discourse=joint_m:35->33:0|Entity=(person-29-giv:act-1-ana)|Lem=_|Len=1
26	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	23	ccomp	23:ccomp	Lem=_|Len=5|SpaceAfter=No
27	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 nmod:tmod	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Discourse=justify:123->122:0|Entity=(person-10-giv:inact-1-ana)|Lem=*LOWER*|Len=3
2	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	aux	4:aux	Lem=have|Len=3
3	_	_	ADV	RB	_	4	advmod	4:advmod	Lem=_|Len=7
4	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	Lem=answer|Len=8
5	_	_	DET	DT	Number=Plur|PronType=Dem	6	det	6:det	Entity=(abstract-71-giv:inact-2-coref|Lem=this|Len=5
6	_	_	NOUN	NNS	Number=Plur	4	obj	4:obj	Entity=71)|Lem=question|Len=9|SpaceAfter=No
7	_	_	PUNCT	,	_	8	punct	8:punct	Lem=_|Len=1
8	_	_	DET	DT	_	4	parataxis	4:parataxis	Entity=(abstract-118-new-1-sgl|Lem=_|Len=4
9	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=2
10	_	_	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	8	nmod	8:nmod:of	Entity=(abstract-71-giv:act-1-ana)118)|Lem=they|Len=4
11	_	_	ADJ	JJ	Degree=Pos	12	amod	12:amod	Entity=(event-119-new-2-sgl|Lem=_|Len=7
12	_	_	NOUN	NNS	Number=Plur	8	nmod:tmod	8:nmod:tmod	Entity=119)|Lem=time|Len=5|SpaceAfter=No
13	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


