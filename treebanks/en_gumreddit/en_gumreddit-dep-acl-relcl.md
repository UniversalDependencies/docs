---
layout: base
title:  'Statistics of acl:relcl in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-acl.html">acl</a></tt>.

231 nodes (1%) are attached to their parents as `acl:relcl`.

231 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.73593073593074.

The following 15 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (140; 61% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (48; 21% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (10; 4% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="en_gumreddit-pos-DET.html">DET</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 acl:relcl	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	3:nsubj	Discourse=evaluation-comment:24->16:3:lex-indwd-162|Entity=(22-event-giv:act-cf1*-1-coref)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	Lem=be|Len=2
3	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=7|MSeg=relat-ed
4	_	_	SCONJ	IN	_	6	mark	6:mark	Discourse=causal-cause:25->24:0:dm-because-146|Lem=_|Len=7
5	_	_	NOUN	NNS	Number=Plur	6	nsubj	6:nsubj	Entity=(28-event-new-cf9-2-disc(29-person-new-cf7-1-sgl)|Lem=person|Len=6
6	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	3:advcl:because	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	6	obj	6:obj	Entity=(12-abstract-giv:inact-cf4-1-coref)|Lem=_|Len=5
8	_	_	PART	TO	_	9	mark	9:mark	Discourse=purpose-goal:26->25:0:syn-inf-150|Lem=_|Len=2
9	_	_	VERB	VB	VerbForm=Inf	6	advcl	6:advcl:to	Lem=_|Len=3
10	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	11	compound	11:compound	Entity=(30-abstract-new-cf8-2-sgl(31-place-new-cf3-1-coref-United_States)|Lem=_|Len=2
11	_	_	NOUN	NN	Number=Sing	9	obj	9:obj	Entity=30)|Lem=_|Len=4
12	_	_	PUNCT	:	_	15	punct	15:punct	Discourse=elaboration-additional:27->25:1:sem-lxchn-149,157+sem-mrnym-149,161-165+sem-rpt-152,159|Lem=-|Len=2
13	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	15:nsubj	Entity=(32-person-acc:com-cf5-1-ana)|Lem=_|Len=2
14	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	15	aux	15:aux	Lem=be|Len=3
15	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	6	parataxis	6:parataxis	Cxn=Ditransitive|Lem=loan|Len=7|MSeg=loan-ing
16	_	_	DET	DT	Definite=Def|PronType=Art	18	det	18:det	Entity=(23-organization-giv:act-cf2-3-coref|Lem=_|Len=3
17	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	18	compound	18:compound	Entity=(31-place-giv:act-cf3-1-coref-United_States)|Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing|Typo=Yes	15	iobj	15:iobj	CorrectForm=government|Entity=23)|Lem=government|Len=4|XML=<sic ana:::"government"></sic>
19	_	_	DET	DT	Definite=Def|PronType=Art	21	det	21:det	Bridge=12<33|Entity=(33-abstract-acc:inf-cf6-3-sgl|Lem=_|Len=3
20	_	_	ADJ	JJ	Degree=Pos	21	amod	21:amod	Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	15	obj	15:obj	Lem=_|Len=5
22	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	nsubj	23:nsubj	Discourse=elaboration-attribute:28->27:0:syn-mdf-163+syn-relcl-165|Entity=(23-organization-giv:act-cf2-1-ana)|Lem=_|Len=2
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	21:acl:relcl	Entity=33)28)|Lem=print|Len=6|MSeg=print-s|SpaceAfter=No
24	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl:relcl	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	3:nsubj	Discourse=explanation-evidence:54->51:2:_|Entity=(58-time-giv:act-cf1*-1-ana)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	Lem=be|Len=2
3	_	_	PRON	WP	PronType=Rel	0	root	0:root	Lem=_|Len=4
4	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	acl:relcl	3:acl:relcl	Lem=happen|Len=8|MSeg=happen-ed
5	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=2
6	_	_	PROPN	NNP	Number=Sing	4	obl	4:obl:in|13:obl	Entity=(60-place-new-cf3-1-coref-Zimbabwe)|Lem=_|Len=8
7	_	_	ADV	WRB	PronType=Rel	13	advmod	6:ref|13:advmod	Discourse=elaboration-attribute:55->54:0:syn-mdf-357+syn-relcl-358,364|Lem=_|Len=5
8	_	_	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(61-event-new-cf2-4-sgl|Lem=_|Len=1
9	_	_	NUM	CD	NumForm=Word|NumType=Card	10	nummod	10:nummod	Entity=(62-abstract-new-cf5-2-sgl|Lem=_|Len=7
10	_	_	NOUN	NN	Number=Sing	11	compound	11:compound	Entity=62)|Lem=_|Len=6
11	_	_	NOUN	NN	Number=Sing	13	nsubj	13:nsubj	Entity=61)|Lem=_|Len=11|MSeg=transact-ion
12	_	_	AUX	MD	Number=Sing|Person=3|VerbForm=Fin	13	aux	13:aux	Lem=_|Len=5
13	_	_	VERB	VB	VerbForm=Inf	6	acl:relcl	6:acl:relcl	Lem=_|Len=6|MSeg=happ-en
14	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=3
15	_	_	DET	DT	Definite=Ind|PronType=Art	16	det	16:det	Entity=(63-object-new-cf4-2-sgl|Lem=_|Len=1
16	_	_	NOUN	NN	Number=Sing	13	obl	13:obl:for	Lem=_|Len=4
17	_	_	ADP	IN	_	18	case	18:case	Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing	16	nmod	16:nmod:of	Entity=63)|Lem=_|Len=5|SpaceAfter=No
19	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 18 acl:relcl	color:blue
1	_	_	SCONJ	IN	_	3	mark	3:mark	Discourse=contingency-condition:33->34:1:dm-if-197|Lem=*LOWER*|Len=2
2	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	Entity=(5-person-giv:inact-cf2-1-ana)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	12	advcl	12:advcl:if	Cxn=Condition-Realistic|Lem=_|Len=3
4	_	_	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(41-object-new-cf1-3,6-coref|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	6	compound	6:compound	Lem=_|Len=8|MSeg=base-ball
6	_	_	NOUN	NN	Number=Sing	3	obj	3:obj	Lem=_|Len=4
7	_	_	ADP	IN	_	8	case	8:case	Lem=_|Len=2
8	_	_	PROPN	NNP	Number=Sing	6	nmod	6:nmod:of	Entity=(42-person-new-cf4-1,2-coref-Sammy_Sosa|Lem=_|Len=5|MSeg=Samm-y
9	_	_	PROPN	NNP	Number=Sing	8	flat	8:flat	Entity=42)41)|Lem=_|Len=4|SpaceAfter=No
10	_	_	PUNCT	,	_	3	punct	3:punct	Lem=_|Len=1
11	_	_	PRON	EX	PronType=Dem	12	expl	12:expl	Discourse=explanation-justify:34->51:4:_|Lem=_|Len=5
12	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Cxn=Existential-There|Lem=be|Len=2
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	12	nsubj	12:nsubj	Lem=_|Len=6
15	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	18:nsubj	Discourse=elaboration-attribute:35->34:0:syn-mdf-210+syn-relcl-214|Entity=(41-object-giv:act-cf1-1-ana)|Lem=_|Len=2
16	_	_	AUX	MD	VerbForm=Fin	18	aux	18:aux	Lem=_|Len=5
17	_	_	AUX	VB	VerbForm=Inf	18	cop	18:cop	Lem=_|Len=2
18	_	_	ADJ	JJ	Degree=Pos	14	acl:relcl	14:acl:relcl	Lem=_|Len=5
19	_	_	DET	DT	Definite=Ind|PronType=Art	20	det	20:det	Entity=(43-abstract-new-cf3-2-sgl|Lem=_|Len=1
20	_	_	NOUN	NN	Number=Sing	18	obj	18:obj	Lem=_|Len=3
21	_	_	ADP	IN	_	22	case	22:case	Lem=_|Len=2
22	_	_	NOUN	NN	Number=Sing	20	nmod	20:nmod:of	Entity=43)|Lem=_|Len=5|SpaceAfter=No
23	_	_	PUNCT	.	_	12	punct	12:punct	Lem=_|Len=1

~~~


