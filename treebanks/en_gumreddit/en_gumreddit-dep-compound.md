---
layout: base
title:  'Statistics of compound in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="en_gumreddit-dep-compound-prt.html">compound:prt</a></tt>.

322 nodes (2%) are attached to their parents as `compound`.

322 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28260869565217.

The following 17 pairs of parts of speech are connected with `compound`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (247; 77% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (27; 8% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (15; 5% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (7; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_gumreddit-pos-DET.html">DET</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 compound	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 compound	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	3:nsubj	Discourse=evaluation-comment:24->16:3:lex-indwd-162|Entity=(22-event-giv:act-cf1*-1-coref)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	Lem=be|Len=2
3	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=7|MSeg=relat-ed
4	_	_	SCONJ	IN	_	6	mark	6:mark	Discourse=causal-cause:25->24:0:dm-because-146|Lem=_|Len=7|MSeg=be-cause|PDTB=Explicit:Contingency.Cause.Reason:because:146:143-145:147-166
5	_	_	NOUN	NNS	Number=Plur	6	nsubj	6:nsubj	Entity=(28-event-new-cf9-2-disc(29-person-new-cf7-1-sgl)|Lem=person|Len=6
6	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	3:advcl:because	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	6	obj	6:obj	Entity=(12-abstract-giv:inact-cf4-1-coref)|Lem=_|Len=5
8	_	_	PART	TO	_	9	mark	9:mark	Discourse=purpose-goal:26->25:0:syn-inf-150|Lem=_|Len=2|PDTB=Implicit:Contingency.Purpose.Arg2-as-goal:in order:_:146-149:150-153
9	_	_	VERB	VB	VerbForm=Inf	6	advcl	6:advcl:to	Lem=_|Len=3
10	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	11	compound	11:compound	Entity=(30-abstract-new-cf8-2-sgl(31-place-new-cf3-1-coref-United_States)|Lem=_|Len=2
11	_	_	NOUN	NN	Number=Sing	9	obj	9:obj	Entity=30)|Lem=_|Len=4
12	_	_	PUNCT	:	_	15	punct	15:punct	Discourse=elaboration-additional:27->25:1:sem-lxchn-149,157+sem-mrnym-149,161-165+sem-rpt-152,159|Lem=-|Len=2
13	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	15:nsubj	Entity=(32-person-acc:com-cf5-1-ana)|Lem=_|Len=2
14	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	15	aux	15:aux	Lem=be|Len=3
15	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	6	parataxis	6:parataxis	Cxn=Ditransitive|CxnElt=15:Ditransitive.V|Lem=loan|Len=7|MSeg=loan-ing
16	_	_	DET	DT	Definite=Def|PronType=Art	18	det	18:det	Entity=(23-organization-giv:act-cf2-3-coref|Lem=_|Len=3
17	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	18	compound	18:compound	Entity=(31-place-giv:act-cf3-1-coref-United_States)|Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing|Typo=Yes	15	iobj	15:iobj	CorrectForm=government|CxnElt=15:Ditransitive.Rec|Entity=23)|Lem=government|Len=4|XML=<sic ana:::"government"></sic>
19	_	_	DET	DT	Definite=Def|PronType=Art	21	det	21:det	Bridge=12<33|Entity=(33-abstract-acc:inf-cf6-3-sgl|Lem=_|Len=3
20	_	_	ADJ	JJ	Degree=Pos	21	amod	21:amod	Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	15	obj	15:obj	CxnElt=15:Ditransitive.Theme|Lem=_|Len=5
22	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	nsubj	23:nsubj	Discourse=elaboration-attribute:28->27:0:syn-mdf-163+syn-relcl-165|Entity=(23-organization-giv:act-cf2-1-ana)|Lem=_|Len=2
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	21:acl:relcl	Entity=33)28)|Lem=print|Len=6|MSeg=print-s|SpaceAfter=No
24	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 compound	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	Discourse=elaboration-additional:77->71:3:sem-rpt-488-490,498|Entity=(75-person-giv:inact-cf3-1-ana)|Lem=*LOWER*|Len=3|PDTB=Implicit:Expansion.Level-of-detail.Arg2-as-detail:specifically:_:480-494:495-521
2	_	_	AUX	MD	VerbForm=Fin	3	aux	3:aux	Lem=_|Len=3
3	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=3
4	_	_	NOUN	NN	Number=Sing|Typo=Yes	6	compound	6:compound	CorrectForm=government|Entity=(84-abstract-new-cf5-4,6-sgl(23-organization-giv:act-cf1*-1-coref)|Lem=government|Len=5|SpaceAfter=No|XML=<w><sic ana:::"government"></sic>
5	_	_	PUNCT	HYPH	_	4	punct	4:punct	Lem=_|Len=1|SpaceAfter=No
6	_	_	ADJ	JJ	Degree=Pos	7	amod	7:amod	Lem=_|Len=7|MSeg=relat-ed|XML=</w>
7	_	_	NOUN	NNS	Number=Plur	3	obj	3:obj	Lem=fee|Len=4|MSeg=fee-s
8	_	_	CCONJ	CC	_	9	cc	9:cc	Lem=_|Len=3
9	_	_	NOUN	NNS	Number=Plur	7	conj	3:obj|7:conj:and	Entity=84)|Lem=bill|Len=5|MSeg=bill-s
10	_	_	ADP	IN	_	12	case	12:case	Lem=_|Len=4
11	_	_	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Entity=(85-abstract-new-cf2-2-coref|Lem=_|Len=3
12	_	_	NOUN	NN	Number=Sing	3	obl	3:obl:with	Lem=_|Len=5
13	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	14:nsubj	Discourse=elaboration-attribute:78->77:0:syn-mdf-506+syn-relcl-508|Entity=(23-organization-giv:act-cf1*-1-ana)|Lem=_|Len=4
14	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	acl:relcl	12:acl:relcl	Entity=85)|Lem=_|Len=5
15	_	_	CCONJ	CC	_	25	cc	25:cc	Discourse=joint-list_m:79->77:1:dm-and-509|Lem=_|Len=3|PDTB=Explicit:Expansion.Conjunction:and:509:495-508:510-521
16	_	_	SCONJ	IN	_	22	mark	22:mark	Discourse=causal-cause:80->81:0:dm-because-510|Lem=_|Len=7|MSeg=be-cause|PDTB=Explicit:Contingency.Cause.Reason:because:510:509,518-521:511-517
17	_	_	DET	DT	Definite=Def|PronType=Art	18	det	18:det	Entity=(23-organization-giv:act-cf1*-2-coref|Lem=_|Len=3
18	_	_	NOUN	NN	Number=Sing|Typo=Yes	22	nsubj:outer	22:nsubj:outer	CorrectForm=government|Entity=23)|Lem=government|Len=5|XML=<sic ana:::"government"></sic>
19	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	22:cop	Lem=be|Len=2
20	_	_	ADV	RB	Degree=Pos	22	advmod	22:advmod	Lem=_|Len=4|SpaceAfter=No|XML=<w>
21	_	_	PUNCT	HYPH	_	20	punct	20:punct	Lem=_|Len=1|SpaceAfter=No
22	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	25	advcl	25:advcl:because	Lem=secure|Len=7|MSeg=secur-ed|SpaceAfter=No|XML=</w>
23	_	_	PUNCT	,	_	22	punct	22:punct	Lem=_|Len=1
24	_	_	NOUN	NNS	Number=Plur	25	nsubj	25:nsubj	Discourse=same-unit_m:81->79:0:_|Entity=(73-person-giv:inact-cf4-1-coref)|Lem=person|Len=6
25	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	conj	3:conj:and	Lem=_|Len=6
26	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	25	obj	25:obj	Entity=(85-abstract-giv:act-cf2-1-ana)|Lem=_|Len=2|SpaceAfter=No
27	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


