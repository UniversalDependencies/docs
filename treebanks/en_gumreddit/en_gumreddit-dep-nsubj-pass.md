---
layout: base
title:  'Statistics of nsubj:pass in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_gumreddit-dep-nsubj-outer.html">nsubj:outer</a></tt>.

72 nodes (0%) are attached to their parents as `nsubj:pass`.

72 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.02777777777778.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (44; 61% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (19; 26% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (6; 8% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj:pass	color:blue
1	_	_	ADV	RB	_	5	advmod	5:advmod	Discourse=joint-other_m:169->159:1:dm-also-1131|Lem=*LOWER*|Len=4|SpaceAfter=No
2	_	_	PUNCT	,	_	1	punct	1:punct	Lem=_|Len=1
3	_	_	AUX	VB	VerbForm=Inf	5	aux	5:aux	Lem=_|Len=2
4	_	_	PART	RB	Polarity=Neg	5	advmod	5:advmod	Lem=not|Len=3
5	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Lem=_|Len=3
6	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj:pass	7:nsubj:pass	Entity=(145-person-giv:inact-cf1-1-ana)|Lem=I|Len=2
7	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	5	xcomp	5:xcomp	Lem=start|Len=7|MSeg=start-ed
8	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=2
9	_	_	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Entity=(168-abstract-new-cf2-2-sgl|Lem=_|Len=3
10	_	_	NOUN	NN	Number=Sing	7	obl	7:obl:on	Entity=168)|Lem=_|Len=11|MSeg=petro-dollar|SpaceAfter=No
11	_	_	PUNCT	.	_	5	punct	5:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 20 nsubj:pass	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=elaboration-additional:70->1:8:syn-relcl-425|Entity=(75-person-acc:com-cf1-1-sgl)|Lem=_|Len=1
2	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=_|Len=5
3	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	Entity=(76-animal-new-cf2-1-cata)|Lem=_|Len=2
4	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	Lem=be|Len=2
5	_	_	NOUN	NNS	Number=Plur	2	ccomp	2:ccomp|8:nsubj	Entity=(77-event-new-cf4-1-coref(76-animal-acc:com-cf2-1-coref|Lem=coyote|Len=7|MSeg=coyote-s
6	_	_	PRON	WDT	PronType=Rel	8	nsubj	5:ref	Lem=_|Len=4
7	_	_	AUX	MD	VerbForm=Fin	8	aux	8:aux|13:aux	Lem=_|Len=4
8	_	_	VERB	VB	VerbForm=Inf	5	acl:relcl	5:acl:relcl	Lem=_|Len=4
9	_	_	ADP	IN	_	11	case	11:case	Lem=_|Len=2
10	_	_	ADJ	JJ	Degree=Pos	11	amod	11:amod	Entity=(78-time-new-cf5-2-sgl|Lem=_|Len=7
11	_	_	NOUN	NNS	Number=Plur	8	obl	8:obl:at	Entity=78)|Lem=time|Len=5|MSeg=time-s
12	_	_	CCONJ	CC	_	13	cc	13:cc	Discourse=joint-sequence_m:71->70:0:dm-and-431|Lem=_|Len=3
13	_	_	VERB	VB	VerbForm=Inf	8	conj	5:acl:relcl|8:conj:and	Lem=_|Len=6
14	_	_	ADP	IN	_	15	case	15:case	Lem=_|Len=3
15	_	_	NOUN	NNS	Number=Plur	13	obl	13:obl:for	Entity=(79-event-new-cf6-1-sgl)76)|Lem=response|Len=9|MSeg=response-s
16	_	_	PART	TO	_	17	mark	17:mark	Discourse=purpose-goal:72->70:1:syn-inf-435|Lem=_|Len=2
17	_	_	VERB	VB	VerbForm=Inf	13	advcl	13:advcl:to	Lem=_|Len=6
18	_	_	SCONJ	IN	_	23	mark	23:mark	Lem=_|Len=2
19	_	_	DET	DT	Definite=Ind|PronType=Art	20	det	20:det	Entity=(80-place-new-cf3-2-sgl|Lem=a|Len=2
20	_	_	NOUN	NN	Number=Sing	23	nsubj:pass	23:nsubj:pass	Entity=80)|Lem=_|Len=4
21	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	aux:pass	23:aux:pass	Lem=be|Len=2
22	_	_	ADV	RB	Typo=Yes	23	advmod	23:advmod	CorrectForm=overpopulated|Lem=_|Len=4|XML=<sic ana:::"overpopulated">
23	_	_	VERB	VBN	Tense=Past|Typo=Yes|VerbForm=Part|Voice=Pass	17	advcl	17:advcl:if	CorrectForm=_|Cxn=Condition-Realistic|Entity=77)|Lem=populate|Len=9|MSeg=populat-ed|SpaceAfter=No|XML=</sic>
24	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	_	_	PROPN	NNP	Number=Sing	3	nsubj:pass	3:nsubj:pass	Discourse=context-circumstance:71->72:3:_|Entity=(79-abstract-new-cf1-1-coref-Info)|Lem=_|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	3:aux:pass	Lem=get|Len=4|MSeg=get-s
3	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	Lem=steal|Len=6|MSeg=stol-en|SpaceAfter=No
4	_	_	PUNCT	:	_	3	punct	3:punct	Lem=_|Len=1

~~~


