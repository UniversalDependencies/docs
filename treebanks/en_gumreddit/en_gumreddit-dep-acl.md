---
layout: base
title:  'Statistics of acl in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="en_gumreddit-dep-acl-relcl.html">acl:relcl</a></tt>.

131 nodes (1%) are attached to their parents as `acl`.

129 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.99236641221374.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (91; 69% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (10; 8% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (8; 6% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=evaluation-comment:29->16:4:_|Entity=(34-abstract-new-cf5-3-sgl|Lem=*LOWER*|Len=3
2	_	_	ADJ	JJ	Degree=Pos	3	amod	3:amod	Lem=_|Len=4
3	_	_	NOUN	NN	Number=Sing	17	nsubj:outer	17:nsubj:outer	Lem=_|Len=6
4	_	_	SCONJ	IN	_	6	mark	6:mark	Discourse=elaboration-attribute:30->29:0:syn-mdf-169+syn-nmn-170,172|Lem=_|Len=4
5	_	_	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	6:nsubj	Entity=(28-event-giv:act-cf1*-1-coref)|Lem=_|Len=4
6	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl	3:acl:that	Lem=result|Len=7|MSeg=result-s
7	_	_	ADP	IN	_	8	case	8:case	Lem=_|Len=2
8	_	_	PRON	NN	Number=Sing|PronType=Ind	6	obl	6:obl:in	Entity=(35-abstract-new-cf8-1-sgl|Lem=_|Len=8|MSeg=any-thing
9	_	_	ADJ	JJ	Degree=Pos	8	amod	8:amod	Entity=35)34)|Lem=_|Len=9|MSeg=favor-able
10	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	17:cop	Discourse=same-unit_m:31->29:1:_|Lem=be|Len=2
11	_	_	SCONJ	IN	_	17	mark	17:mark	Lem=_|Len=7|MSeg=be-cause
12	_	_	NOUN	NNS	Number=Plur	17	nsubj	17:nsubj	Entity=(36-person-new-cf6-1-sgl|Lem=person|Len=6
13	_	_	ADV	RB	_	16	advmod	16:advmod	Lem=_|Len=3
14	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Entity=(37-place-acc:com-cf4-2-sgl|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	12	nmod	12:nmod:over	Entity=37)36)|Lem=_|Len=5
17	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=_|Len=5
18	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	17	obj	17:obj	Entity=(27-abstract-giv:inact-cf2-1-coref-United_States_dollar)|Lem=_|Len=3
19	_	_	CCONJ	CC	_	23	cc	23:cc	Discourse=joint-list_m:32->31:0:sem-mrnym-184,186-188+sem-lxchn-184,188+dm-and-185|Lem=_|Len=3|PDTB=Explicit:Expansion.Conjunction:and:185:167-169,176-184:186-196
20	_	_	DET	DT	Number=Sing|PronType=Dem	22	det	22:det	Bridge=27<38|Entity=(38-object-acc:inf-cf3-3-sgl|Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	22	compound	22:compound	Lem=_|Len=5
22	_	_	NOUN	NN	Number=Sing	23	nsubj	23:nsubj	Entity=38)|Lem=_|Len=8|MSeg=currenc-y
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	conj	17:conj:and	Lem=represent|Len=10|MSeg=represent-s
24	_	_	ADJ	JJ	Degree=Pos	25	amod	25:amod	Entity=(39-abstract-new-cf7-2-sgl|Lem=_|Len=9|MSeg=potent-ial
25	_	_	NOUN	NN	Number=Sing	23	obj	23:obj	Entity=39)|Lem=_|Len=5|SpaceAfter=No
26	_	_	PUNCT	,	_	28	punct	28:punct	Lem=_|Len=1
27	_	_	ADJ	JJ	Degree=Pos	28	amod	28:amod	Entity=(40-abstract-new-cf9-2-sgl|Lem=_|Len=3
28	_	_	NOUN	NNS	Number=Plur	25	conj	23:obj|25:conj	Entity=40)|Lem=asset|Len=6|MSeg=asset-s|SpaceAfter=No
29	_	_	PUNCT	,	_	30	punct	30:punct	Lem=_|Len=1
30	_	_	NOUN	FW	Abbr=Yes|Number=Plur	25	conj	23:obj|25:conj	Lem=_|Len=4

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 21 acl	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=causal-cause:11->15:1:_|Entity=(2-person-giv:inact-cf2-2-coref|Lem=*LOWER*|Len=3|PDTB=Implicit:Temporal.Asynchronous.Precedence:then:_:41-67:68-97
2	_	_	NOUN	NN	Number=Sing	11	nsubj	11:nsubj|16:nsubj|18:nsubj:xsubj	Lem=_|Len=5|MSeg=own-er
3	_	_	ADP	IN	_	4	case	4:case	Lem=_|Len=2
4	_	_	NUM	CD	NumForm=Word|NumType=Card	2	nmod	2:nmod:of	Entity=(17-organization-new-cf7-1-sgl|Lem=_|Len=3
5	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Entity=(18-organization-new-cf5-2-sgl|Lem=_|Len=3
7	_	_	NOUN	NNS	Number=Plur	4	nmod	4:nmod:of	Entity=18)17)|Lem=business|Len=10|MSeg=businesse-s
8	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	9:nsubj	Discourse=elaboration-attribute:12->11:0:syn-mdf-74+syn-relcl-76|Entity=(4-person-giv:act-cf1*-1-ana)|Lem=_|Len=1
9	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	acl:relcl	7:acl:relcl	Entity=2)|Lem=_|Len=7
10	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	aux	11:aux	Discourse=same-unit_m:13->11:1:_|Lem=have|Len=3
11	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	Lem=purchase|Len=9|MSeg=purchas-ed
12	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Entity=(19-object-new-cf3-3-coref|Lem=_|Len=1
13	_	_	ADJ	JJ	Degree=Pos	14	amod	14:amod	Lem=_|Len=3
14	_	_	NOUN	NN	Number=Sing	11	obj	11:obj	Entity=19)|Lem=_|Len=5
15	_	_	CCONJ	CC	_	16	cc	16:cc	Discourse=joint-list_m:14->11:2:dm-and-82|Lem=_|Len=3|PDTB=Explicit:Expansion.Conjunction:and:82:68-81:83-97
16	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	conj	11:conj:and	Lem=need|Len=6|MSeg=need-ed
17	_	_	PART	TO	_	18	mark	18:mark	Lem=_|Len=2
18	_	_	VERB	VB	VerbForm=Inf	16	xcomp	16:xcomp	Lem=_|Len=4
19	_	_	ADV	WRB	PronType=Int	18	obj	18:obj	Lem=_|Len=3
20	_	_	PART	TO	_	21	mark	21:mark	Lem=_|Len=2
21	_	_	VERB	VB	VerbForm=Inf	19	acl	19:acl:to	Entity=(20-event-new-cf8-1-disc|Lem=_|Len=8
22	_	_	ADJ	JJ	Degree=Pos	23	amod	23:amod	Entity=(3-abstract-giv:inact-cf4-2-coref|Lem=_|Len=9|MSeg=import-ant
23	_	_	NOUN	NNS	Number=Plur	21	obj	21:obj	Entity=3)|Lem=datum|Len=4|MSeg=dat-a
24	_	_	ADP	IN	_	25	case	25:case	Lem=_|Len=2
25	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	21	obl	21:obl:to	Entity=(19-object-giv:act-cf3-1-ana)|Lem=_|Len=2
26	_	_	ADP	IN	_	29	case	29:case	Lem=_|Len=4
27	_	_	PRON	PRP$	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	29	nmod:poss	29:nmod:poss	Entity=(21-object-new-cf6-3-coref(2-person-giv:act-cf2-1-ana)|Lem=_|Len=3
28	_	_	ADJ	JJ	Degree=Pos	29	amod	29:amod	Lem=_|Len=3
29	_	_	NOUN	NN	Number=Sing	21	obl	21:obl:from	Entity=21)20)|Lem=_|Len=5|SpaceAfter=No
30	_	_	PUNCT	.	_	11	punct	11:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 acl	color:blue
1	_	_	SCONJ	IN	_	7	mark	7:mark	Discourse=context-background:2->5:0:dm-if-3+ref-prs-4-6,20|Entity=(2-abstract-new-cf3-19-disc|Lem=*LOWER*|Len=2|PDTB=Explicit:Comparison.Contrast:if:3:18-23:4-17
2	_	_	DET	DT	PronType=Ind	4	det	4:det	Entity=(3-place-new-cf1-3-coref|Lem=_|Len=5
3	_	_	ADJ	JJ	Degree=Pos	4	amod	4:amod	Lem=_|Len=5
4	_	_	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=3)|Lem=_|Len=7
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	Lem=be|Len=2
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	NOUN	NNS	Number=Plur	19	advcl	19:advcl:if	CxnElt=19:Conditional-UnspecifiedEpistemic-NoInversion.Protasis|Entity=(4-abstract-new-cf2-1-sgl|Lem=billion|Len=8|MSeg=billion-s
8	_	_	PUNCT	-LRB-	_	11	punct	11:punct	Discourse=adversative-antithesis:3->2:0:dm-if-11|Lem=_|Len=1|SpaceAfter=No
9	_	_	SCONJ	IN	_	11	mark	11:mark	Lem=_|Len=2|PDTB=Explicit:Comparison.Contrast:if:11:3-9,15-17:10,12-14
10	_	_	PART	RB	Polarity=Neg	11	advmod	11:advmod	Lem=_|Len=3|Negation=Yes
11	_	_	NOUN	NNS	Number=Plur	7	acl	7:acl:if	Lem=trillion|Len=9|MSeg=trillion-s|SpaceAfter=No
12	_	_	PUNCT	-RRB-	_	11	punct	11:punct	Lem=_|Len=1
13	_	_	ADP	IN	_	14	case	14:case	Discourse=same-unit_m:4->2:1:_|Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of	Entity=4)|Lem=_|Len=4|SpaceAfter=No
15	_	_	PUNCT	,	_	7	punct	7:punct	Lem=_|Len=1
16	_	_	ADV	WRB	PronType=Int	19	obl	19:obl:from	CxnElt=19:Interrogative-WHInfo-Direct.WHWord|Discourse=topic-question:5->6:0:lex-indwd-18+syn-sbinv-19+grf-qst-23|Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux	19:aux	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	19:nsubj	Entity=(3-place-giv:act-cf1-1-ana)|Lem=_|Len=4
19	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Cxn=Conditional-UnspecifiedEpistemic-NoInversion,Interrogative-WHInfo-Direct|CxnElt=19:Conditional-UnspecifiedEpistemic-NoInversion.Apodosis,19:Interrogative-WHInfo-Direct.Clause|Lem=borrow|Len=9|MSeg=borrow-ing
20	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	19:punct	Entity=2)|Lem=_|Len=1

~~~


