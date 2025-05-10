---
layout: base
title:  'Statistics of reparandum in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `reparandum`

This relation is universal.

7 nodes (0%) are attached to their parents as `reparandum`.

7 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 5 pairs of parts of speech are connected with `reparandum`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (1; 14% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 14% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 reparandum	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	Discourse=elaboration-additional:7->6:0:sem-rpt-56-57,84-85+ref-prs-65,67|Entity=(10-person-giv:act-sssns-cf1*-1-ana)|Lem=*LOWER*|Len=2|PDTB=Implicit:Expansion.Level-of-detail.Arg2-as-detail:in particular:_:56-66:67-99
2	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux	4:aux	Lem=be|Len=3
3	_	_	ADV	RB	Degree=Pos	4	advmod	4:advmod	Lem=_|Len=9|MSeg=excit-ed-ly
4	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=bounce|Len=8|MSeg=bounc-ing
5	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=6|MSeg=a-round
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Bridge=2<14|Entity=(14-place-acc:inf-nssns-cf4-2-sgl|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	4	obl	4:obl:around	Entity=14)|Lem=_|Len=4
8	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	4	advcl	4:advcl	Discourse=elaboration-additional:8->7:0:ref-prs-67,78+syn-pres-74|Lem=point|Len=8|MSeg=point-ing|PDTB=Implicit:Expansion.Level-of-detail.Arg2-as-detail:specifically:_:67-73:74-82
9	_	_	ADP	RP	_	8	compound:prt	8:compound:prt	Lem=_|Len=3
10	_	_	NOUN	NNS	Number=Plur	8	obj	8:obj|16:nsubj	Entity=(15-abstract-new-nnnnn-cf6-1-sgl|Lem=thing|Len=6|MSeg=thing-s
11	_	_	PRON	WDT	PronType=Rel	16	nsubj	10:ref	Discourse=elaboration-attribute:9->8:0:syn-mdf-76+syn-relcl-77,79|Lem=_|Len=4
12	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	13:nsubj	Entity=(10-person-giv:act-sssns-cf1*-1-ana)|Lem=_|Len=2
13	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	acl:relcl	10:acl:relcl	Lem=think|Len=7
14	_	_	AUX	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	16	cop	16:cop	Lem=be|Len=4
15	_	_	NOUN	NNS	Number=Plur	16	reparandum	16:reparandum	Entity=(16-abstract-new-nssnn-cf3-1-coref)|Lem=clue|Len=5|MSeg=clue-s
16	_	_	NOUN	NNS	Number=Plur|Typo=Yes	13	ccomp	13:ccomp	CorrectForm=_|Entity=(16-abstract-giv:act-nssnn-cf3-1-coref)15)|Lem=clue|Len=5|MSeg=clue-s|XML=<sic ana:::""></sic>
17	_	_	SCONJ	IN	_	20	mark	20:mark	Discourse=adversative-contrast_m:10->7:1:dm-while-83|Lem=_|Len=5|PDTB=Explicit:Comparison.Contrast:while:83:67-82:84-99
18	_	_	DET	DT	Definite=Def|PronType=Art	19	det	19:det	Entity=(9-person-giv:act-sssns-cf2-2-coref|Lem=_|Len=3
19	_	_	NOUN	NNS	Number=Plur	20	nsubj	20:nsubj	Entity=9)|Lem=parent|Len=7|MSeg=parent-s
20	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	advcl	4:advcl:while	Lem=dismiss|Len=9|MSeg=dismiss-ed
21	_	_	DET	DT	PronType=Ind	22	det	22:det	Entity=(17-abstract-new-nnnnn-cf5-2-sgl|Lem=_|Len=5
22	_	_	NOUN	NN	Number=Sing	20	obj	20:obj	Entity=17)|Lem=_|Len=4
23	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	nsubj	24:nsubj|26:nsubj	Discourse=elaboration-attribute:11->10:0:syn-mdf-88+syn-relcl-90|Entity=(10-person-giv:act-sssns-cf1*-1-ana)|Lem=_|Len=2
24	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	22	acl:relcl	22:acl:relcl	Lem=have|Len=3
25	_	_	CCONJ	CC	_	26	cc	26:cc	Discourse=joint-list_m:12->10:1:dm-and-91|Lem=_|Len=3|PDTB=Explicit:Expansion.Conjunction:and:91:83-90:92-99
26	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	24	conj	22:acl:relcl|24:conj:and	Lem=tell|Len=4|MSeg=tol-d
27	_	_	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	26	iobj	26:iobj|29:nsubj:xsubj	Entity=(10-person-giv:act-sssns-cf1*-1-ana)|Lem=he|Len=3
28	_	_	PART	TO	_	29	mark	29:mark	Lem=_|Len=2
29	_	_	VERB	VB	VerbForm=Inf	26	xcomp	26:xcomp	Lem=_|Len=4
30	_	_	VERB	VBG	VerbForm=Ger	29	xcomp	29:xcomp	Lem=get|Len=7|MSeg=gett-ing
31	_	_	ADV	RB	_	32	advmod	32:advmod	Lem=_|Len=2
32	_	_	ADJ	JJ	Degree=Pos	30	xcomp	30:xcomp	Lem=_|Len=7|MSeg=excit-ed|SpaceAfter=No
33	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 reparandum	color:blue
1	_	_	ADV	RB	Degree=Pos	15	advmod	15:advmod	Discourse=attribution-positive:65->66:2:sem-atsrc-553|Lem=*LOWER*|Len=7|MSeg=Final-ly|PDTB=Explicit:Temporal.Asynchronous.Precedence:finally:549:492-523:550-564|SpaceAfter=No
2	_	_	PUNCT	,	_	1	punct	1:punct	Lem=_|Len=1
3	_	_	DET	DT	Definite=Def|PronType=Art	4	det	4:det	Entity=(67-abstract-new-nnnnn-cf2-2-coref|Lem=_|Len=3
4	_	_	ADJ	JJS	Degree=Sup	15	nsubj:outer	15:nsubj:outer	Lem=good|Len=4|MSeg=be-st
5	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj	Entity=(3-person-giv:inact-sssss-cf1-1-ana)|Lem=_|Len=1
6	_	_	AUX	MD	VerbForm=Fin	7	aux	7:aux	Lem=_|Len=5
7	_	_	VERB	VB	VerbForm=Inf	4	acl:relcl	4:acl:relcl	Entity=67)|Lem=_|Len=6
8	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	15	cop	15:cop	Lem=be|Len=3
9	_	_	PUNCT	``	_	8	punct	8:punct	Discourse=joint-sequence_m:66->11:1:dm-finally-549|Lem=_|Len=1|SpaceAfter=No|XML=<quote>
10	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	reparandum	12:reparandum	Entity=(67-abstract-giv:act-n____-cf2-6-coref(3-person-giv:act-sssss-cf1-1-ana)|Lem=_|Len=1
11	_	_	PUNCT	:	_	10	punct	10:punct	Lem=…|Len=3
12	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	15	nsubj	15:nsubj	Entity=(3-person-giv:act-sssss-cf1-1-ana)|Lem=_|Len=1
13	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	cop	15:cop	Lem=be|Len=2
14	_	_	ADV	RB	_	15	advmod	15:advmod	Lem=_|Len=2
15	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Entity=67)|Lem=_|Len=5|MSeg=sorr-y|SpaceAfter=No
16	_	_	PUNCT	.	_	15	punct	15:punct	Lem=_|Len=1|XML=</quote>

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 reparandum	color:blue
1	_	_	PRON	NN	Number=Sing|PronType=Ind	16	nsubj	3:nsubj|16:nsubj	Discourse=attribution-positive:22->25:0:sem-atsrc-201-214+lex-indwd-214+lex-indwd-216|Entity=(39-person-new-nnnnn-cf4-1-sgl|Lem=*LOWER*|Len=6|MSeg=Any-one
2	_	_	PRON	WP	PronType=Rel	3	nsubj	1:ref	Discourse=elaboration-attribute:23->22:0:syn-mdf-201+syn-relcl-202-203|Lem=_|Len=3
3	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	1:acl:relcl	Lem=bother|Len=7|MSeg=bother-s
4	_	_	PART	TO	_	6	mark	6:mark	Lem=_|Len=2
5	_	_	ADV	RB	Degree=Pos	6	advmod	6:advmod	Lem=_|Len=8|MSeg=act-ual-ly
6	_	_	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	Lem=_|Len=4
7	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=4|MSeg=in-to|XML=<w>
8	_	_	PART	POS	Typo=Yes	10	reparandum	10:reparandum	CorrectForm=_|Lem=_|Len=2|XML=<sic ana:::""></sic></w>
9	_	_	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Lem=_|Len=3
10	_	_	NOUN	NNS	Number=Plur	6	obl	6:obl:into	Lem=detail|Len=7|MSeg=detail-s
11	_	_	ADP	IN	_	14	case	14:case	Lem=_|Len=2
12	_	_	PROPN	NNP	Abbr=Yes|Number=Sing|Typo=Yes	14	nmod:poss	14:nmod:poss	CorrectForm=NASA|Entity=(7-abstract-giv:inact-n____-cf2-3-coref(8-organization-giv:inact-sssss-cf1-1-coref-NASA|Lem=NASA|Len=4|XML=<sic ana:::"NASA"></sic>
13	_	_	PART	POS	_	12	case	12:case	Entity=8)|Lem=_|Len=2
14	_	_	NOUN	NNS	Number=Plur	10	nmod	10:nmod:of	Entity=7)39)|Lem=claim|Len=6|MSeg=claim-s
15	_	_	AUX	MD	VerbForm=Fin	16	aux	16:aux	Discourse=same-unit_m:24->22:1:_|Lem=_|Len=4
16	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=7|MSeg=real-ize
17	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	19:nsubj	Discourse=joint-other_m:25->14:1:_|Entity=(8-organization-giv:act-sssss-cf1-1-ana-NASA)|Lem=_|Len=4
18	_	_	ADV	RB	_	19	advmod	19:advmod	Lem=_|Len=5|Negation=Yes
19	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	16	ccomp	16:ccomp	Lem=go|Len=4
20	_	_	ADP	IN	_	22	case	22:case	Lem=_|Len=2
21	_	_	DET	DT	Definite=Def|PronType=Art	22	det	22:det	Entity=(40-place-acc:com-sssnn-cf3-2-sgl|Lem=_|Len=3
22	_	_	NOUN	NN	Number=Sing	19	obl	19:obl:to	Entity=40)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	,	_	27	punct	27:punct	Lem=_|Len=1
24	_	_	VERB	VB	ExtPos=CCONJ|Mood=Imp|Person=2|VerbForm=Fin	27	cc	27:cc	Lem=_|Len=3
25	_	_	ADJ	JJ	Degree=Pos	24	fixed	24:fixed	Lem=_|Len=5|MSeg=a-lone
26	_	_	NUM	CD	NumForm=Digit|NumType=Card	27	nummod	27:nummod	Entity=(41-event-new-nnnnn-cf5-2-sgl|Lem=_|Len=1
27	_	_	NOUN	NNS	Number=Plur	19	conj	16:ccomp|19:conj:let_alone	Entity=41)|Lem=time|Len=5|MSeg=time-s|SpaceAfter=No
28	_	_	PUNCT	.	_	16	punct	16:punct	Lem=_|Len=1

~~~


